import { createConnection } from 'typeorm'

const connect = async () => {
  await createConnection();
  console.log('[SERVER] Database connected')
}

export default { connect }