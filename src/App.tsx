import { motion } from "motion/react";

const categories = [
  { name: "Alfabetos e Números", link: "https://drive.google.com/drive/folders/1GQg7q6OX0_oHO02BZvbvinVm8NlBbT0F?usp=sharing" },
  { name: "Moldes Natal", link: "https://drive.google.com/drive/folders/1F258fd7lze9blb64PDP5UMhakexYhFhZ?usp=sharing" },
  { name: "Moldes", link: "https://drive.google.com/drive/folders/15BDiYCNlvyU67XgrPYyej2Gq3VG6fi97?usp=sharing" },
  { name: "600 Moldes Atualizados", link: "https://drive.google.com/drive/folders/1Nshg9yCcfbt2F5P6GitxYo6uhpEhkH1i?usp=sharing" },
  { name: "Mil Moldes", link: "https://drive.google.com/drive/folders/1ROAqCdZx5O0a31vS7Fg90NHIRDvI8RRM?usp=sharing" },
  { name: "Moldes Frutas", link: "https://drive.google.com/drive/folders/1EDD18ua9dbAhxpZEZ_cZh0YwggiYLa_Y?usp=sharing" },
  { name: "Gato Xadrez", link: "https://drive.google.com/drive/folders/1JRh2O3-yKZssPUsgD-98PZMfo3CTTq0D?usp=sharing" },
  { name: "Moldes de Pascoa", link: "https://drive.google.com/drive/folders/1WnuqR70KJEMUbCEdxi_yHwznk30rbIGk?usp=drive_link" },
  { name: "Moldes de Avião", link: "https://drive.google.com/drive/folders/1XdQq_TjUEGEPZhcPZ9xR9e_aZWwY4Znl?usp=sharing" },
  { name: "Moldes Formatura", link: "https://drive.google.com/drive/folders/1_IR-lVNMfWdTYutMSYIVRjK3840oe2vg?usp=sharing" },
  { name: "Moldes da Patrulha Canina", link: "https://drive.google.com/drive/folders/1rwliBYYbtEMlzoxSfFKcQcnBgVoxxpuS?usp=sharing" },
  { name: "Bônus 1", link: "https://drive.google.com/drive/folders/1EDD18ua9dbAhxpZEZ_cZh0YwggiYLa_Y?usp=sharing" },
  { name: "Bônus 2", link: "https://drive.google.com/drive/folders/1WnuqR70KJEMUbCEdxi_yHwznk30rbIGk?usp=sharing" },
  { name: "Moldes Wandinha", link: "https://drive.google.com/drive/folders/1rwliBYYbtEMlzoxSfFKcQcnBgVoxxpuS?usp=sharing" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-rose-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-2">
            +2000 Moldes de EVA
          </h1>
          <p className="text-lg text-rose-700">Conquiste sua independência!</p>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-rose-100 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-rose-950 mb-2">
                  {category.name}
                </h2>
                <p className="text-sm text-rose-600 mb-6">
                  Acesso liberado • Baixar agora!
                </p>
              </div>
              <motion.a
                href={category.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full bg-emerald-600 text-white text-center font-semibold py-3 px-4 rounded-xl hover:bg-emerald-700 transition-colors"
              >
                Acessar conteúdo
              </motion.a>
            </motion.div>
          ))}
        </main>
      </div>
    </div>
  );
}
