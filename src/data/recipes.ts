import recipe1 from "@/assets/recipe-1.jpg";
import recipe2 from "@/assets/recipe-2.jpg";
import recipe3 from "@/assets/recipe-3.jpg";
import recipe4 from "@/assets/recipe-4.jpg";
import recipe5 from "@/assets/recipe-5.jpg";

export interface Recipe {
  id: string;
  title: string;
  category: string;
  time: string;
  calories: number;
  rating: number;
  image: string;
  tags: string[];
  ingredients: string[];
  difficulty: "Fácil" | "Media" | "Avanzada";
}

export const categories = [
  { id: "all", label: "Todo", emoji: "🍽️" },
  { id: "healthy", label: "Saludable", emoji: "🥗" },
  { id: "quick", label: "Rápido", emoji: "⚡" },
  { id: "italian", label: "Italiano", emoji: "🍝" },
  { id: "mexican", label: "Mexicano", emoji: "🌮" },
  { id: "dessert", label: "Postres", emoji: "🍰" },
  { id: "breakfast", label: "Desayuno", emoji: "🥞" },
];

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Poke Bowl de Salmón",
    category: "healthy",
    time: "20 min",
    calories: 420,
    rating: 4.8,
    image: recipe1,
    tags: ["Sin gluten", "Alto en proteína"],
    ingredients: ["Salmón fresco", "Arroz", "Aguacate", "Edamame", "Sésamo", "Salsa de soja"],
    difficulty: "Fácil",
  },
  {
    id: "2",
    title: "Pasta Caprese con Albahaca",
    category: "italian",
    time: "25 min",
    calories: 520,
    rating: 4.6,
    image: recipe2,
    tags: ["Vegetariano", "Clásico"],
    ingredients: ["Spaghetti", "Tomates cherry", "Mozzarella", "Albahaca", "Aceite de oliva"],
    difficulty: "Fácil",
  },
  {
    id: "3",
    title: "Smoothie Bowl de Açaí",
    category: "breakfast",
    time: "10 min",
    calories: 310,
    rating: 4.9,
    image: recipe3,
    tags: ["Vegano", "Sin gluten"],
    ingredients: ["Açaí", "Plátano", "Arándanos", "Granola", "Coco rallado", "Chía"],
    difficulty: "Fácil",
  },
  {
    id: "4",
    title: "Tacos de Pollo a la Parrilla",
    category: "mexican",
    time: "30 min",
    calories: 480,
    rating: 4.7,
    image: recipe4,
    tags: ["Alto en proteína", "Picante"],
    ingredients: ["Pollo", "Tortillas", "Aguacate", "Cilantro", "Limón", "Cebolla morada"],
    difficulty: "Media",
  },
  {
    id: "5",
    title: "Ensalada Mediterránea",
    category: "healthy",
    time: "15 min",
    calories: 350,
    rating: 4.5,
    image: recipe5,
    tags: ["Vegetariano", "Bajo en calorías"],
    ingredients: ["Quinoa", "Garbanzos", "Feta", "Espinacas", "Pimiento rojo", "Limón"],
    difficulty: "Fácil",
  },
];

export const mealPlan = [
  { day: "Lun", meals: [recipes[2], recipes[0], recipes[4]] },
  { day: "Mar", meals: [recipes[2], recipes[3], recipes[1]] },
  { day: "Mié", meals: [recipes[2], recipes[4], recipes[0]] },
  { day: "Jue", meals: [recipes[2], recipes[1], recipes[3]] },
  { day: "Vie", meals: [recipes[2], recipes[0], recipes[1]] },
  { day: "Sáb", meals: [recipes[2], recipes[3], recipes[4]] },
  { day: "Dom", meals: [recipes[2], recipes[1], recipes[0]] },
];
