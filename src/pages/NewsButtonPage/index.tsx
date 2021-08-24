import React from "react";
import { Link } from "react-router-dom";
import { IonButton, IonContent, IonPage, IonFab } from "@ionic/react";

interface Props {}

const NewsButtonPage = (props: Props) => {
  return (
    <IonPage>
      <IonContent>
        <IonFab vertical="center" horizontal="center">
          <Link to="/news">
            <IonButton>Fetch</IonButton>
          </Link>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default NewsButtonPage;
