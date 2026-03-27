import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const filtered = recipes.filter((r) => {
    const matchesQuery = !query || r.title.toLowerCase().includes(query.toLowerCase()) || r.tags.some(t => t.toLowerCase().includes(query.toLowerCase()));
    const matchesDifficulty = !selectedDifficulty || r.difficulty === selectedDifficulty;
    return matchesQuery && matchesDifficulty;
  });

  return (
    <div className="pb-24">
      <div className="px-5 pt-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Buscar</h1>
        <div className="mt-4 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Busca recetas, ingredientes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-11 w-full rounded-xl bg-secondary pl-10 pr-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            {query && (
              <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${showFilters ? "gradient-warm text-primary-foreground" : "bg-secondary text-foreground"}`}
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-3 flex gap-2">
                {["Fácil", "Media", "Avanzada"].map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDifficulty(selectedDifficulty === d ? null : d)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                      selectedDifficulty === d
                        ? "gradient-warm text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Trending */}
      {!query && (
        <div className="mt-6 px-5">
          <h3 className="font-display text-lg font-semibold text-foreground">Tendencia 🔥</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Smoothie Bowl", "Pasta", "Tacos", "Ensalada", "Salmón"].map((t) => (
              <button
                key={t}
                onClick={() => setQuery(t)}
                className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary transition-colors"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      <div className="mt-6 px-5 space-y-3">
        {query && (
          <p className="text-sm text-muted-foreground">
            {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
          </p>
        )}
        {filtered.map((recipe, i) => (
          <motion.div
            key={recipe.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <RecipeCard recipe={recipe} variant="compact" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
