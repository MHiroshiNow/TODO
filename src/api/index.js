const BASE_URL = "http://localhost:8000"; // Djangoのサーバーアドレス

export const fetchTasks = async () => {
    const response = await fetch(`${BASE_URL}/api/todo/`);
    if (!response.ok) {
        throw new Error('Failed to fetch tasks');
    }
    return await response.json();
};

export const uploadAudio = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${BASE_URL}/upload/`, {
        method: 'POST',
        body: formData
    });

    if (!response.ok) {
        throw new Error('Audio upload failed');
    }

    return await response.json();
};
