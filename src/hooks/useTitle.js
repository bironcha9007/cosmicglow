import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} / EDU-EASY APP`;
    }, [title]);

  return null;
}