import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';


const Experiencia: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Experiencia Personal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <iframe width="900" height="600" src="https://www.youtube.com/embed/MfS0EbxVCPQ?si=JmCtpVuGGBZDivfN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

       </iframe>
      </IonContent>
    </IonPage>
  );
};

export default Experiencia;
