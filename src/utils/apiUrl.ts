const apiKey: string = process.env.REACT_APP_API_KEY || "";
const apiUrl: string = `https://content.guardianapis.com/search?api-key=${apiKey}`;

export default apiUrl;
