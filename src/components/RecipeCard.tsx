import { Clock, Star, Flame } from "lucide-react";
import { motion } from "framer-motion";
import type { Recipe } from "@/data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
  variant?: "default" | "compact" | "featured";
}

const RecipeCard = ({ recipe, variant = "default" }: RecipeCardProps) => {
  if (variant === "compact") {
    return (
      <motion.div
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-3 rounded-xl bg-card p-3 shadow-card"
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-16 w-16 rounded-lg object-cover"
          loading="lazy"
          width={64}
          height={64}
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-body text-sm font-semibold text-foreground truncate">{recipe.title}</h4>
          <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {recipe.time}
            </span>
            <span className="flex items-center gap-1">
              <Flame className="h-3 w-3" /> {recipe.calories} kcal
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "featured") {
    return (
      <motion.div
        whileTap={{ scale: 0.97 }}
        className="relative overflow-hidden rounded-2xl shadow-warm"
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-64 w-full object-cover"
          width={640}
          height={640}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="mb-2 flex items-center gap-2">
            {recipe.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="rounded-full bg-primary/90 px-2.5 py-0.5 text-[10px] font-medium text-primary-foreground">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-display text-xl font-semibold text-primary-foreground">{recipe.title}</h3>
          <div className="mt-2 flex items-center gap-4 text-xs text-primary-foreground/80">
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-golden text-golden" /> {recipe.rating}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {recipe.time}
            </span>
            <span className="flex items-center gap-1">
              <Flame className="h-3.5 w-3.5" /> {recipe.calories} kcal
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      className="w-44 flex-shrink-0 overflow-hidden rounded-2xl bg-card shadow-card"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-32 w-full object-cover"
        loading="lazy"
        width={176}
        height={128}
      />
      <div className="p-3">
        <h4 className="font-body text-sm font-semibold text-foreground leading-tight">{recipe.title}</h4>
        <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {recipe.time}
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-golden text-golden" /> {recipe.rating}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard;
