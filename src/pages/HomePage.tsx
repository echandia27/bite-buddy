import { motion } from "framer-motion";
import { ChefHat, Sparkles } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";
import RecipeCard from "@/components/RecipeCard";
import { recipes, categories } from "@/data/recipes";
import { useState } from "react";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? recipes
    : recipes.filter((r) => r.category === activeCategory);

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-6">
        <div>
          <p className="text-sm text-muted-foreground">Buenos días 👋</p>
          <h1 className="font-display text-2xl font-bold text-foreground">¿Qué cocinamos hoy?</h1>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
          <ChefHat className="h-5 w-5 text-primary" />
        </div>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mx-5 mt-5 relative overflow-hidden rounded-2xl"
      >
        <img src={heroFood} alt="Comida mediterránea" className="h-48 w-full object-cover" width={1024} height={1024} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center p-6">
          <div className="flex items-center gap-1.5 mb-2">
            <Sparkles className="h-4 w-4 text-golden" />
            <span className="text-xs font-medium text-golden">Recomendado para ti</span>
          </div>
          <h2 className="font-display text-xl font-bold text-primary-foreground leading-tight">
            Desayuno<br />Mediterráneo
          </h2>
          <button className="mt-3 w-fit rounded-full gradient-warm px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-warm">
            Ver receta
          </button>
        </div>
      </motion.div>

      {/* Categories */}
      <div className="mt-6 px-5">
        <h3 className="font-display text-lg font-semibold text-foreground">Categorías</h3>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "gradient-warm text-primary-foreground shadow-warm"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Recipes Horizontal */}
      <div className="mt-6 px-5">
        <h3 className="font-display text-lg font-semibold text-foreground">Populares</h3>
        <div className="mt-3 flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {filtered.map((recipe, i) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <RecipeCard recipe={recipe} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured */}
      <div className="mt-6 px-5">
        <h3 className="font-display text-lg font-semibold text-foreground">Receta del día</h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-3"
        >
          <RecipeCard recipe={recipes[3]} variant="featured" />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
