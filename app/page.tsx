"use client";

import { useState } from "react";
import { Button } from "../src/components/ui/button";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount((prev) => prev + 1);
  };

  const resetCount = () => {
    setClickCount(0);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  Storybook Handel
                </h1>
                <p className="text-sm text-gray-500">Design System Demo</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="http://localhost:6006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Storybook
              </a>
              <a
                href="https://github.com/lhelheo/storybook-test"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Demonstração do
            <span className="text-blue-600"> Design System</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Esta é uma aplicação web simples que demonstra o uso dos componentes
            do nosso design system. Explore os diferentes estados e variações do
            componente Button abaixo.
          </p>
        </div>

        {/* Button Demo Section */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Demonstração do Componente Button
            </h3>

            {/* Counter Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
                <span className="text-3xl font-bold text-blue-600">
                  {clickCount}
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Contador de cliques: {clickCount}{" "}
                {clickCount === 1 ? "clique" : "cliques"}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    label="Clique Primário"
                    primary={true}
                    size="large"
                    onClick={handleButtonClick}
                  />
                  <Button
                    label="Clique Secundário"
                    primary={false}
                    size="large"
                    onClick={handleButtonClick}
                  />
                </div>

                <div className="flex justify-center">
                  <Button
                    label="Resetar Contador"
                    primary={false}
                    size="small"
                    onClick={resetCount}
                    backgroundColor="#ef4444"
                  />
                </div>
              </div>
            </div>

            {/* Button Variants Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tamanhos */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Tamanhos
                </h4>
                <div className="space-y-3">
                  <div>
                    <Button
                      label="Small"
                      size="small"
                      primary
                      onClick={handleButtonClick}
                    />
                  </div>
                  <div>
                    <Button
                      label="Medium"
                      size="medium"
                      primary
                      onClick={handleButtonClick}
                    />
                  </div>
                  <div>
                    <Button
                      label="Large"
                      size="large"
                      primary
                      onClick={handleButtonClick}
                    />
                  </div>
                </div>
              </div>

              {/* Variantes */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Variantes
                </h4>
                <div className="space-y-3">
                  <div>
                    <Button
                      label="Primary"
                      primary
                      onClick={handleButtonClick}
                    />
                  </div>
                  <div>
                    <Button
                      label="Secondary"
                      primary={false}
                      onClick={handleButtonClick}
                    />
                  </div>
                  <div>
                    <Button
                      label="Custom Color"
                      primary
                      backgroundColor="#10b981"
                      onClick={handleButtonClick}
                    />
                  </div>
                </div>
              </div>

              {/* Estados */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Casos de Uso
                </h4>
                <div className="space-y-3">
                  <div>
                    <Button
                      label="Salvar"
                      primary
                      onClick={handleButtonClick}
                    />
                  </div>
                  <div>
                    <Button
                      label="Cancelar"
                      primary={false}
                      onClick={handleButtonClick}
                    />
                  </div>
                  <div>
                    <Button
                      label="Excluir"
                      primary={false}
                      backgroundColor="#ef4444"
                      onClick={handleButtonClick}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Explore Mais Componentes
                </h4>
                <p className="text-gray-600 mb-4">
                  Veja todos os componentes e suas variações no Storybook
                </p>
                <Button
                  label="Abrir Storybook"
                  primary
                  size="large"
                  onClick={() => window.open("http://localhost:6006", "_blank")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500">
          <p>Built with Next.js, Tailwind CSS, and Storybook</p>
          <p className="mt-2">
            <a
              href="https://github.com/lhelheo/storybook-test"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              View on GitHub
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
