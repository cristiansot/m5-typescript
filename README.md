# m5-typescript
Sesión Interactiva de Preguntas y Respuestas: Introducción a TypeScript en ReactJS

## ¿Qué es TypeScript y para qué se utiliza?
TypeScript es un superconjunto de JavaScript que incorpora tipado estático y herramientas avanzadas de desarrollo. Esto significa que cualquier código JavaScript válido también es válido en TypeScript, pero con la posibilidad de agregar tipos y utilizar características avanzadas del lenguaje.
---
## Principales diferencias entre TypeScript y JavaScript
- Tipado:
  - TypeScript: Estático (se definen los tipos de datos).
  - JavaScript: Dinámico (los tipos se determinan en tiempo de ejecución).
- Compilación:
  - TypeScript:  Se compila a JavaScript.
  - JavaScript:  Se ejecuta directamente en navegadores o entornos como Node.js.
- Errores en tiempo de desarrollo:  
  - TypeScript:  Detecta errores en tiempo de desarrollo.
  - JavaScript:  Los errores se detectan en tiempo de ejecución.
- Soporte para características modernas:  
  - TypeScript:  Admite características de ES6+ y más, incluso antes de que se estandaricen.
  - JavaScript: Depende de la versión del navegador o entorno.
- Anotaciones de tipos:
  - TypeScript: Permite definir tipos explícitos.
  - JavaScript: No permite anotaciones de tipos.
---

## ¿Por qué es útil TypeScript en el desarrollo de aplicaciones ReactJS?

1. Detección temprana de errores: El tipado estático permite detectar errores antes de que el código se ejecute, reduciendo el número de bugs en producción.
2. Autocompletado mejorado: Los entornos de desarrollo como VS Code ofrecen autocompletado y sugerencias más precisas, lo que aumenta la velocidad de desarrollo.
3. Tipado de props y estado: TypeScript permite definir los tipos de las props y el estado de los componentes React, previniendo errores comunes en el manejo de datos.
4. Interfaces y tipos personalizados: Facilita la creación de tipos reutilizables y más claros, mejorando la legibilidad y el mantenimiento del código.
5. Soporte para bibliotecas: Muchas bibliotecas de React ofrecen definiciones de tipos para ser usadas con TypeScript, asegurando una mejor integración y detección de errores.
---

## Sistema de tipos en TypeScript

El sistema de tipos en TypeScript es un conjunto de reglas que permite definir y verificar los tipos de datos durante el desarrollo. Este sistema puede ser explícito (cuando el desarrollador define los tipos) o implícito (cuando TypeScript infiere los tipos automáticamente).

### Ventajas del sistema de tipos:
1. Prevención de errores comunes: Evita errores como pasar valores incorrectos a una función o acceder a propiedades inexistentes.
2. Mejor documentación: El código con tipos es más autodescriptivo, facilitando la comprensión y colaboración.
3. Refactorización segura: Al modificar nombres de variables o funciones, el compilador verifica que los cambios sean consistentes en todo el proyecto.
4. Mejor experiencia de desarrollo: Los IDEs pueden ofrecer autocompletado, advertencias y sugerencias gracias al tipado estático.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
