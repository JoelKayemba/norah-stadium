import { FaDumbbell, FaSwimmingPool, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const tarifsData = [
  {
    titre: "Coaching BIA",
    prix: "25$/session",
    description: "Accompagnement personnalisé avec un coach diplômé.",
    icon: FaDumbbell
  },
  {
    titre: "Accès Piscine",
    prix: "10$/jour",
    description: "Accès libre à nos piscines intérieures et extérieures.",
    icon: FaSwimmingPool
  },
  {
    titre: "Formule Famille",
    prix: "35$/jour",
    description: "2 adultes + 2 enfants, toutes activités incluses.",
    icon: FaUsers
  },
  {
    titre: "Abonnement Mensuel",
    prix: "90$/mois",
    description: "Accès illimité à toutes les installations.",
    icon: FaCalendarAlt
  }
];

export default tarifsData;
