import React from "react"
import { render, screen } from "@testing-library/react"
import App from "src/App"
test("renders app two", () => {
  render(<App />)
  const linkElement = screen.getByText(
    /I am the rs two! and I have new content!/i
  )

  expect(linkElement).toBeInTheDocument()
})
