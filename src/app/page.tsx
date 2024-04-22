import { getBitcoinsCollections } from "@/services/apiService";

const getData = async () => {
  const response = await getBitcoinsCollections();

  if(!response.data) {
    throw new Error('Failed to fetch data');
  }

  console.log('response.data: ', response.data);

  const data = await response.data;
  return data;
}

export default async function Home() {
  const apiData = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello World</p>
        <div>
          {JSON.stringify(apiData)}
        </div>
    </main>
  );
}
