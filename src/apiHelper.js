const BASE_URL = "http://localhost:8000"; 

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
    return response.json();
};
export const registerUser = async (email, password) => {
    const response = await fetch(`${BASE_URL}/api/register/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('Registration failed');
    }

    return response.json();
};
