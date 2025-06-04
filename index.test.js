const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello from Node DevOps!'));

describe('GET /', () => {
  it('should return welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello from Node DevOps!');
  });
});
