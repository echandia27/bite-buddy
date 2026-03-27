import { motion } from "framer-motion";
import { Settings, Heart, BookOpen, Award, ChevronRight, Bell, HelpCircle, LogOut } from "lucide-react";

const stats = [
  { label: "Recetas guardadas", value: "24", icon: Heart },
  { label: "Recetas cocinadas", value: "18", icon: BookOpen },
  { label: "Racha actual", value: "7 días", icon: Award },
];

const menuItems = [
  { label: "Preferencias alimentarias", icon: Settings },
  { label: "Notificaciones", icon: Bell },
  { label: "Ayuda y soporte", icon: HelpCircle },
  { label: "Cerrar sesión", icon: LogOut },
];

const ProfilePage = () => {
  return (
    <div className="pb-24">
      <div className="gradient-hero px-5 pt-6 pb-8">
        <h1 className="font-display text-2xl font-bold text-foreground">Perfil</h1>

        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mt-6 flex flex-col items-center"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full gradient-warm text-3xl shadow-warm">
            👨‍🍳
          </div>
          <h2 className="mt-3 font-display text-xl font-bold text-foreground">Chef Saboria</h2>
          <p className="text-sm text-muted-foreground">Amante de la cocina mediterránea</p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="mx-5 -mt-4 grid grid-cols-3 gap-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center rounded-2xl bg-card p-3 shadow-card"
          >
            <stat.icon className="h-5 w-5 text-primary mb-1" />
            <p className="text-lg font-bold text-foreground">{stat.value}</p>
            <p className="text-[10px] text-muted-foreground text-center">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Subscription Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mx-5 mt-5 rounded-2xl gradient-warm p-4 shadow-warm"
      >
        <h3 className="font-display text-lg font-bold text-primary-foreground">Saboria Premium ✨</h3>
        <p className="mt-1 text-xs text-primary-foreground/80">
          Recetas exclusivas, plan personalizado por IA y lista de compras inteligente.
        </p>
        <button className="mt-3 rounded-full bg-primary-foreground/20 px-4 py-1.5 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
          Probar gratis 7 días
        </button>
      </motion.div>

      {/* Menu */}
      <div className="mx-5 mt-5 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3.5 transition-colors hover:bg-secondary"
          >
            <item.icon className="h-5 w-5 text-muted-foreground" />
            <span className="flex-1 text-left text-sm font-medium text-foreground">{item.label}</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
