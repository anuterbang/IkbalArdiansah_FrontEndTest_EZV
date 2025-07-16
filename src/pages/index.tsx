import { useState } from 'react';
import { useGetTodosQuery } from '@/services/todosApi';
import { Todo } from '@/types/Todo';
import Link from 'next/link';

const LIMIT = 10;

export default function HomePage() {
    const [page, setPage] = useState(1); // halaman ke-1

    const start = (page - 1) * LIMIT;

    const { data: todos, isLoading, isError } = useGetTodosQuery({
        start,
        limit: LIMIT,
    });

    const handleNext = () => setPage((prev) => prev + 1);
    const handlePrev = () => setPage((prev) => Math.max(1, prev - 1));

    return (
        <div className="max-w-2xl mx-auto mt-10 px-4">
            <h1 className="text-2xl font-bold mb-4">
                Todo List (Page {page})
                <Link href="/add">
                    <button className="ml-4 text-sm px-3 py-1 bg-blue-500 text-white rounded">
                        + Add Todo
                    </button>
                </Link>
            </h1>

            {isLoading && <p>Loading...</p>}
            {isError && <p>Terjadi kesalahan saat fetch data</p>}

            <ul className="space-y-2">
                {todos?.map((todo: Todo) => (
                    <li
                        key={todo.id}
                        className="p-2 border rounded bg-gray-50 shadow-sm"
                    >
                        <input type="checkbox" checked={todo.completed} readOnly />
                        <span className="ml-2">{todo.title}</span>
                    </li>
                ))}
            </ul>

            <div className="max-w-2xl mx-auto mt-10 px-4 pb-10">
                <button
                    onClick={handlePrev}
                    disabled={page === 1}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                    Previous
                </button>

                <span className="px-4 py-2">{page}</span>

                <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-gray-200 rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
