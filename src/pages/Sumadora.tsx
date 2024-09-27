import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonText } from '@ionic/react';

const Sumadora: React.FC = () => {
  const [num1, setNum1] = useState<number>();
  const [num2, setNum2] = useState<number>();
  const [resultado, setResultado] = useState<number>();

  const sumar = () => {
    if (num1 !== undefined && num2 !== undefined) {
      setResultado(num1 + num2);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sumadora</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput placeholder="Número 1" type="number" onIonChange={e => setNum1(parseInt(e.detail.value!, 10))} />
        <IonInput placeholder="Número 2" type="number" onIonChange={e => setNum2(parseInt(e.detail.value!, 10))} />
        <IonButton expand="block" onClick={sumar}>Sumar</IonButton>
        {resultado !== undefined && (
          <IonText>
            <h2>Resultado: {resultado}</h2>
          </IonText>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Sumadora;
