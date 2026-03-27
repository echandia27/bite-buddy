import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, ShoppingCart, Trash2 } from "lucide-react";

interface ShoppingItem {
  id: string;
  name: string;
  category: string;
  checked: boolean;
}

const initialItems: ShoppingItem[] = [
  { id: "1", name: "Salmón fresco (200g)", category: "Pescados", checked: false },
  { id: "2", name: "Aguacate (2 uds)", category: "Frutas y verduras", checked: false },
  { id: "3", name: "Arroz (500g)", category: "Cereales", checked: true },
  { id: "4", name: "Tomates cherry", category: "Frutas y verduras", checked: false },
  { id: "5", name: "Albahaca fresca", category: "Frutas y verduras", checked: false },
  { id: "6", name: "Spaghetti", category: "Cereales", checked: true },
  { id: "7", name: "Pollo (500g)", category: "Carnes", checked: false },
  { id: "8", name: "Limones (3 uds)", category: "Frutas y verduras", checked: false },
  { id: "9", name: "Edamame", category: "Congelados", checked: false },
  { id: "10", name: "Granola", category: "Cereales", checked: true },
];

const ShoppingPage = () => {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  const toggleItem = (id: string) => {
    setItems(items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const addItem = () => {
    if (!newItem.trim()) return;
    setItems([...items, { id: Date.now().toString(), name: newItem, category: "Otros", checked: false }]);
    setNewItem("");
  };

  const unchecked = items.filter((i) => !i.checked);
  const checked = items.filter((i) => i.checked);
  const progress = items.length > 0 ? Math.round((checked.length / items.length) * 100) : 0;

  const grouped = unchecked.reduce<Record<string, ShoppingItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="pb-24">
      <div className="px-5 pt-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Lista de Compras</h1>
        <p className="mt-1 text-sm text-muted-foreground">{items.length} artículos • {progress}% completado</p>
      </div>

      {/* Progress */}
      <div className="mx-5 mt-4">
        <div className="h-2 rounded-full bg-secondary overflow-hidden">
          <motion.div
            className="h-full rounded-full gradient-warm"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Add item */}
      <div className="mx-5 mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Añadir artículo..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addItem()}
          className="h-11 flex-1 rounded-xl bg-secondary px-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <button
          onClick={addItem}
          className="flex h-11 w-11 items-center justify-center rounded-xl gradient-warm text-primary-foreground shadow-warm"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      {/* Items by category */}
      <div className="mt-6 px-5 space-y-5">
        {Object.entries(grouped).map(([category, categoryItems]) => (
          <div key={category}>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              {category}
            </h4>
            <div className="space-y-1.5">
              <AnimatePresence>
                {categoryItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    exit={{ opacity: 0, x: -50 }}
                    className="flex items-center gap-3 rounded-xl bg-card p-3"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 border-border transition-colors"
                    >
                      {item.checked && <Check className="h-3 w-3 text-primary" />}
                    </button>
                    <span className="flex-1 text-sm font-body text-foreground">{item.name}</span>
                    <button onClick={() => removeItem(item.id)}>
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      {/* Checked items */}
      {checked.length > 0 && (
        <div className="mt-6 px-5">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            ✓ Completado ({checked.length})
          </h4>
          <div className="space-y-1.5">
            {checked.map((item) => (
              <div key={item.id} className="flex items-center gap-3 rounded-xl bg-card/50 p-3 opacity-50">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md gradient-warm"
                >
                  <Check className="h-3 w-3 text-primary-foreground" />
                </button>
                <span className="flex-1 text-sm font-body text-foreground line-through">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingPage;
