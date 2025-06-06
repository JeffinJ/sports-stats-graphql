const corsConfig = {
    origin: [
        'http://localhost:8082',
    ],
    credentials: true,
    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE',
        'PATCH',
        'OPTIONS',
    ],
    allowedHeaders: ['Content-Type', 'Authorization'],
}

export default corsConfig;