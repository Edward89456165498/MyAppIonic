import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonList, IonItem } from '@ionic/react';

const TablaMultiplicar: React.FC = () => {
  const [numero, setNumero] = useState<number>();
  const [tabla, setTabla] = useState<number[]>([]);

  const calcularTabla = () => {
    if (numero !== undefined) {
      const nuevaTabla = [];
      for (let i = 1; i <= 13; i++) {
        nuevaTabla.push(numero * i);
      }
      setTabla(nuevaTabla);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tabla de Multiplicar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput placeholder="Ingrese un número" type="number" onIonChange={e => setNumero(parseInt(e.detail.value!, 10))} />
        <IonButton expand="block" onClick={calcularTabla}>Calcular</IonButton>
        <IonList>
          {tabla.map((resultado, index) => (
            <IonItem key={index}>{numero} x {index + 1} = {resultado}</IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TablaMultiplicar;
