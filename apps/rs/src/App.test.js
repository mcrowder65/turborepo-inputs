import React from "react"
import { render, screen } from "@testing-library/react"
import App from "src/App"

test("renders app one", async () => {
  render(<App />)
  console.log("hi")
  expect(screen.getByText(/click me/i)).toBeInTheDocument()
  await screen.findByText(/I am the page!/i)
  console.log("hello")
})
