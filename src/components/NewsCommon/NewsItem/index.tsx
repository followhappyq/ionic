import React from "react";
import { IonItem, IonLabel, IonBadge } from "@ionic/react";

import "./styles.scss";

interface INewsItemProps {
  webTitle: string;
  sectionName: string;
}

const NewsItem: React.FC<INewsItemProps> = ({ webTitle, sectionName }) => {
  return (
    <IonItem className="news-item">
      <IonLabel>
        <IonBadge color="primary" className="news-item__badge">
          {sectionName}
        </IonBadge>
        {webTitle}
      </IonLabel>
    </IonItem>
  );
};

export default NewsItem;
