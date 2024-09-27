import React from 'react';
import { IonContent, IonList, IonItem, IonLabel, IonMenu, IonMenuToggle, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import { useLocation } from 'react-router-dom';

interface AppPage {
  title: string;
  url: string;
}

const appPages: AppPage[] = [
  { title: 'Página Inicial', url: '/home' },
  { title: 'Sumadora', url: '/sumadora' },
  { title: 'Traductor de Números a Letras', url: '/traductor' },
  { title: 'Tabla de Multiplicar', url: '/tablaMultiplicar' },
  { title: 'Experiencia Personal', url: '/experiencia' },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" swipeGesture={true}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mi Menú</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {appPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={true}>
            <IonItem
              key={index}
              routerLink={appPage.url}
              routerDirection="none"
              detail={false}
              className={location.pathname === appPage.url ? 'selected' : ''}
            >
              <IonLabel>{appPage.title}</IonLabel>
            </IonItem>
          
          </IonMenuToggle> 
          ))}
          </IonList> 
    
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
