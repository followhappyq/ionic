export default function api<T>(
  url: string,
  options: Record<string, any>
): Promise<T> {
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data: { response: T }) => {
      return data.response;
    });
}
