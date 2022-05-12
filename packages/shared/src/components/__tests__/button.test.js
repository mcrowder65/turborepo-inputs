import React from "react"
import { render, screen } from "@testing-library/react"
import Button from "src/components/button"
console.log("helo")
test("renders a button", () => {
  render(<Button>button</Button>)

  expect(screen.getByText(/button/i)).toBeInTheDocument()
})
