import { FaSmile, FaBuilding, FaHeart } from "react-icons/fa";

const aproposData = {
  titre: "À propos de NORAH Stadium",
  contenu:
    "NORAH Stadium est un espace polyvalent dédié à la performance, au bien-être et aux loisirs. Créé pour offrir une expérience unique à tous les visiteurs, le complexe combine sport, détente et divertissement dans un cadre exceptionnel.",
  image: "/assets/gallery1.jpg",
  stats: [
    {
      icon: FaSmile,
      valeur: "1000+",
      label: "Clients satisfaits",
    },
    {
      icon: FaBuilding,
      valeur: "5",
      label: "Espaces dédiés",
    },
    {
      icon: FaHeart,
      valeur: "Votre bien-être",
      label: "Notre priorité",
    },
  ],
};

export default aproposData;
