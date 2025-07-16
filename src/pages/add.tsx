import { useAddTodoMutation } from '@/services/todosApi';
import { useState } from 'react';

export default function AddTodoPage() {
    const [title, setTitle] = useState('');
    const [addTodo, { isLoading, isSuccess, isError, data }] = useAddTodoMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addTodo({
            title,
            completed: false,
            userId: 1,
        });
        setTitle('');
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Tambah Todo</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Judul todo"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-blue-400"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
                >
                    {isLoading ? 'Menambahkan...' : 'Tambah Todo'}
                </button>
            </form>

            {isSuccess && data && (
                <div className="mt-6 p-4 bg-green-100 text-green-800 rounded border border-green-400">
                    <p className="font-semibold">✅ Todo berhasil ditambahkan:</p>
                    <p><strong>ID:</strong> {data.id}</p>
                    <p><strong>Title:</strong> {data.title}</p>
                </div>
            )}

            {isError && (
                <div className="mt-6 p-4 bg-red-100 text-red-800 rounded border border-red-400">
                    ❌ Gagal menambahkan todo. Silakan coba lagi.
                </div>
            )}
        </div>
    );
}
