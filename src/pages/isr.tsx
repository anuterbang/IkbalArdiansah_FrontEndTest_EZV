import { useGetTodosQuery } from '@/services/todosApi';
import { Todo } from '@/types/Todo';

interface Props {
    fallback: Todo[];
}

export default function IsrPage({ fallback }: Props) {
    const { data = fallback, isLoading } = useGetTodosQuery({ start: 0, limit: 10 });

    return (
        <div className="max-w-2xl mx-auto mt-10 px-4">
            <h1 className="text-2xl font-bold mb-4">ISR Todo List</h1>
            {isLoading ? <p>Loading...</p> : (
                <ul className="space-y-2">
                    {data.map((todo) => (
                        <li key={todo.id} className="p-2 border rounded bg-gray-50 shadow-sm">
                            <input type="checkbox" checked={todo.completed} readOnly />
                            <span className="ml-2">{todo.title}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10');
    const fallback = await res.json();
    return {
        props: { fallback },
        revalidate: 10,
    };
}
