import React from "react"
import Button from "shared/src/components/button"
import useDidUpdate from "shared/src/hooks/use-did-update"
import logger from "shared-two/src/functions/logger"
const { func } = require("src/func")
const Page = React.lazy(() => import("src/page"))

function App() {
  console.log(func())
  const [count, setCount] = React.useState(0)
  useDidUpdate(count, (prevCount) => console.log({ count, prevCount }))
  logger("hello")
  return (
    <div className="App">
      <Button onClick={() => setCount(count + 1)}>Click me?</Button>
      <React.Suspense fallback={null}>
        <Page />
      </React.Suspense>
    </div>
  )
}

export default App
