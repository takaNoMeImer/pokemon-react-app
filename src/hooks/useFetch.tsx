import axios from "axios";
import { useEffect, useState } from "react";

const urlBase = "https://pokeapi.co/api/v2/pokemon/";

const useFetch = (url: string) => {

  const newUrl = urlBase + url;

  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(newUrl);
        setLoading(true);
        
        const promises = response.data.results.map((item:any) => axios.get(`${urlBase}${item.name}`));
        const additionalData = await Promise.all(promises);

        setData((prevData:any) => ({
          ...prevData,
          datos: additionalData.map((response) => response.data),
        }));
      } catch (error:any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;