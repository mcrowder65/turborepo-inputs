import uuid from "src/functions/uuid"
const logger = (...args) => {
  console.error(...args, " ", uuid())
}

export default logger
