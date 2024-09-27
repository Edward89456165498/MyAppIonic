import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonText } from '@ionic/react';

// Función para convertir números a letras en español
const numberToWords = (num: number): string => {
  const unidades = [
    '', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
  ];
  const decenas = [
    '', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa',
  ];
  const centenas = [
    '', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos',
  ];

  if (num === 1000) return 'mil';
  
  let resultado = '';

  if (num >= 100) {
    const centena = Math.floor(num / 100);
    resultado += centenas[centena] + ' ';
    num %= 100;
  }

  if (num >= 20) {
    const decena = Math.floor(num / 10);
    resultado += decenas[decena] + ' ';
    num %= 10;
  } else if (num >= 10) {
    const decimo = [
      'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve',
    ];
    return resultado + decimo[num - 10];
  }

  if (num > 0) {
    resultado += unidades[num] + ' ';
  }

  return resultado.trim();
};

const Traductor: React.FC = () => {
  const [numero, setNumero] = useState<number>();
  const [resultados, setResultados] = useState<string[]>([]); // Array para almacenar múltiples resultados

  const traducir = () => {
    if (numero !== undefined) {
      const traduccion = numberToWords(numero);
      setResultados(prev => [...prev, `El número ${numero} es: ${traduccion}`]); // Agregar nueva traducción al array
      setNumero(undefined); // Limpiar el input después de la traducción
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Traductor de Números a Letras</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          placeholder="Ingrese un número del 1 al 1000"
          type="number"
          value={numero || ''}
          onIonChange={e => setNumero(parseInt(e.detail.value!, 10))}
        />
        <IonButton expand="block" onClick={traducir}>Traducir</IonButton>
        {resultados.map((resultado, index) => (
          <IonText key={index}>
            <h2>{resultado}</h2>
          </IonText>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Traductor;
