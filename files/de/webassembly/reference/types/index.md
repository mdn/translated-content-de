---
title: WebAssembly-Typen
slug: WebAssembly/Reference/Types
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Dieser Abschnitt dokumentiert die verschiedenen WebAssembly-Typen.

## Referenztypen

- [`externref`](/de/docs/WebAssembly/Reference/Types/externref)
  - : Referenziert einen JavaScript-Wert, sodass er einem Wasm-Modul übergeben werden kann, ohne dass eine Kopie oder Serialisierung erforderlich ist.
- [`funcref`](/de/docs/WebAssembly/Reference/Types/funcref)
  - : Referenziert eine in Wasm definierte Funktion, was die Verwendung höherer Ordnungsfunktionen über die Sprachgrenzen von Wasm und JavaScript hinweg ermöglicht.

## Werttypen

- [`v128`](/de/docs/WebAssembly/Reference/Types/v128)
  - : Ein Vektortyp, der einen 128-Bit-Vektor von gepackten Ganzzahl- oder Gleitkommadaten darstellt. Ein `v128`-Wert kann auf verschiedene Weise von [SIMD-Instruktionen](/de/docs/WebAssembly/Reference/SIMD) interpretiert werden.
