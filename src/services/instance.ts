import axios, { create } from "axios";

export const scumbagAPI = create({ baseURL: "https://61n2f4k9-8000.euw.devtunnels.ms" })

scumbagAPI.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("access")

        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config
    },
    (error) => { return Promise.reject(error) }
)

scumbagAPI.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config
        
        if (error.response?.status == 401 && !originalRequest._retry) {
            const refreshToken = localStorage.getItem("refresh")
            try {
                originalRequest._retry = true

                if (refreshToken) {
                    const response = await axios.post("https://61n2f4k9-8000.euw.devtunnels.ms" + "/api/auth/token/refresh/", {
                        refresh: refreshToken
                    })

                    localStorage.setItem("access", response.data.access)
                    console.log("New access token!");
                    return scumbagAPI(originalRequest)
                }else{
                    throw new Error("Refresh token missing!");
                }

            } catch (error) {
                console.log("Alma");
                
                localStorage.removeItem("access")
                localStorage.removeItem("refresh")
                window.location.href = "/login"
            }
        }
        return Promise.reject(error)
    }
)