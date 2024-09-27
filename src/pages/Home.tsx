import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Edward from '../assets/Edward.jpeg'; 

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <img src={Edward} style={{ width: '192px', height: '192px', borderRadius: '50%' }} />
      <h1>Bienvenido al Inicio</h1>
        <p>Nombre: Edward</p>
        <p>Apellido: Sanchez</p>
        <p>Correo: 20210081@itla.edu.do</p>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inicio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
