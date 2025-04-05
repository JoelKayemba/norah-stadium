import { FaSwimmer, FaDumbbell, FaGamepad } from "react-icons/fa";
const activitesData = [
    {
      id: 1,
      titre: "Coaching BIA",
      description: "Un accompagnement sportif personnalisé pour tous les niveaux.",
      image: "/assets/coaching.jpeg",
      bouton: "Commencer",
      icon: FaDumbbell
    },
    {
      id: 2,
      titre: "Piscine & Détente",
      description: "Relaxez-vous dans nos piscines modernes en toute sérénité.",
      image: "/assets/piscine.jpeg",
      bouton: "Plongez !",
      icon: FaSwimmer
    },
    {
      id: 3,
      titre: "Jeux & Loisirs",
      description: "Des activités variées pour petits et grands.",
      image: "/assets/loisirs.jpeg",
      bouton: "Découvrir",
      icon: FaGamepad
    }
  ];
  
  export default activitesData;
  