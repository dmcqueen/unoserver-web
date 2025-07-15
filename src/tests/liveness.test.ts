import { startTestServer } from './startTestServer.js'

const testServer = await startTestServer()

afterAll(async () => testServer.close())

test('/liveness', async () => {
        const response = await testServer.fetch('liveness')
        expect(response.status).toBe(200)
        const text = await response.text()
        expect(text).toBe('OK')
})
