import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  IonList,
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
} from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";

import apiUrl from "../../utils/apiUrl";
import api from "../../utils/api";
import { NewsItem } from "../../components/NewsCommon";

interface INews {
  id: string;
  webTitle: string;
  sectionName: string;
}

interface Props {}

type ResponseWithResult = Response & { results: INews[] };

function isResponseWithResult(
  response: Response
): response is ResponseWithResult {
  return !!(response as ResponseWithResult).results;
}

const NewsListPage: React.FC = (props: Props) => {
  const [news, setNews] = useState<Array<INews>>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api<Response>(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (isResponseWithResult(response)) {
          setNews(response.results);
        }
      } catch (err) {
        //SOMETHING WENT WRONG
      }
    })();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <Link to="/">
              <IonIcon icon={arrowBackOutline}></IonIcon>
            </Link>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {news.map(({ webTitle, sectionName, id }) => (
            <NewsItem webTitle={webTitle} sectionName={sectionName} key={id} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default NewsListPage;
