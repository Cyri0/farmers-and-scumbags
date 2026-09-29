import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import GameArea from "./components/GameArea"
import ResourceBar from "./components/ResourceBar"
import BuildingSelectorBar from "./components/BuildingSelectorBar"

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <ResourceBar />
      
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <GameArea/>
      {/* </Suspense> */}
      <BuildingSelectorBar/>
    </div>
    </QueryClientProvider>
  )
}

export default App