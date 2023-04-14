import { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

import { Button } from "../components/Button/Button.style";
import { QuoteText, BaseText } from "../components/Texts/Texts.style";
import AuthorAndAnimeText from "../components/Texts/Texts";
import {
  App,
  QuoteContainer,
  AuthorContainer,
  Logo,
} from "../components/containers/Containers.style";

const Home = () => {
  const [quoteText, setQuoteText] = useState("...");
  const [quoteAuthor, setQuoteAuthor] = useState("...");
  const [anime, setAnime] = useState("...");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      getQuote();
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const getQuote = () => {
    setLoading(true);
    fetch("https://animechan.vercel.app/api/random").then((response) => {
      response.json().then((result) => {
        setQuoteAuthor(result.character);
        setAnime(result.anime);

        fetch(
          `https://api.mymemory.translated.net/get?q=${result.quote}&langpair=en|pt-br`
        )
          .then((response) => response.json())
          .then((data) => {
            setQuoteText(data.responseData.translatedText);
          });
      });
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  };
  return (
    <App>
      <QuoteContainer>
        <Logo src="/logo/tatakae-logo.svg" alt="tatakae"></Logo>
        {loading ? (
          <PulseLoader color={"#E97600"} size={10} />
        ) : (
          <>
            <QuoteText>"{quoteText}"</QuoteText>
            <AuthorContainer>
              <AuthorAndAnimeText text={quoteAuthor} />
              <BaseText>do anime</BaseText>
              <AuthorAndAnimeText text={anime} />
            </AuthorContainer>
          </>
        )}
      </QuoteContainer>
      <Button onClick={getQuote}>Quero outra citação</Button>
    </App>
  );
};

export default Home;
