import { store } from "@/store";
import { todosApi } from "@/services/todosApi";
import { GetServerSideProps, GetStaticProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  await store.dispatch(
    todosApi.endpoints.getTodos.initiate({ start: 0, limit: 10 })
  );

  return {
    props: {},
  };
};
