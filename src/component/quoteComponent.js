import React, { useEffect, useState } from 'react';
import './style/Calculator.css';

const FetchQuote = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const category = 'success';
    const ApiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    const apiKey = '73bXVxeYfVvHQKV8hlPDiw==WbaCM0x5FLumC4L0';
    const getQuote = async () => {
      setLoading(true);
      try {
        const response = await fetch(ApiUrl, {
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
          },
          mode: 'cors',
        });
        const json = await response.json();
        setResult(json[0]);
        console.log(result);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    getQuote();
  }, []);

  if (loading) return <div>Loading...!</div>;
  if (error) return <div>Sorry, there is an error!</div>;

  return (
    <div className="outPut">
      {result && <span className="author">{result.quote}</span>}
      <div>{result && <span className="author">{result.author}</span>}</div>
    </div>
  );
};

export default FetchQuote;
