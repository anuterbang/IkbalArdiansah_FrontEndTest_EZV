import { todosApi } from "@/services/todosApi";
import { store } from "@/store";

export async function getStaticProps() {
    await store.dispatch(
        todosApi.endpoints.getTodos.initiate({ start: 0, limit: 10 })
    );

    return {
        props: {},
        revalidate: 10, // setiap 10 detik regenerate
    };
}
