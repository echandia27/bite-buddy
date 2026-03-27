import { useState } from "react";
import { motion } from "framer-motion";
import { Utensils } from "lucide-react";
import RecipeCard from "@/components/RecipeCard";
import { mealPlan } from "@/data/recipes";

const mealLabels = ["Desayuno", "Almuerzo", "Cena"];

const MealPlanPage = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <div className="pb-24">
      <div className="px-5 pt-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Plan Semanal</h1>
        <p className="mt-1 text-sm text-muted-foreground">Organiza tus comidas de la semana</p>
      </div>

      {/* Day selector */}
      <div className="mt-5 flex gap-2 px-5 overflow-x-auto no-scrollbar">
        {mealPlan.map((day, i) => (
          <button
            key={day.day}
            onClick={() => setSelectedDay(i)}
            className={`flex flex-col items-center rounded-2xl px-4 py-3 min-w-[56px] transition-all ${
              selectedDay === i
                ? "gradient-warm text-primary-foreground shadow-warm"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            <span className="text-[10px] font-medium opacity-80">{day.day}</span>
            <span className="text-lg font-bold">{i + 1}</span>
          </button>
        ))}
      </div>

      {/* Meals */}
      <div className="mt-6 px-5 space-y-4">
        {mealPlan[selectedDay].meals.map((meal, i) => (
          <motion.div
            key={`${selectedDay}-${i}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <Utensils className="h-3 w-3 text-primary" />
              </div>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {mealLabels[i]}
              </span>
            </div>
            <RecipeCard recipe={meal} variant="compact" />
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <div className="mx-5 mt-6 rounded-2xl bg-secondary p-4">
        <h4 className="font-display text-sm font-semibold text-foreground">Resumen del día</h4>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {[
            { label: "Calorías", value: mealPlan[selectedDay].meals.reduce((a, m) => a + m.calories, 0).toString(), unit: "kcal" },
            { label: "Recetas", value: "3", unit: "" },
            { label: "Tiempo", value: "~65", unit: "min" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-lg font-bold text-primary">{stat.value}</p>
              <p className="text-[10px] text-muted-foreground">{stat.label} {stat.unit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealPlanPage;
