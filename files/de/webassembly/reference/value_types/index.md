---
title: WebAssembly-Wertetypen
slug: WebAssembly/Reference/Value_types
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

Wertetypen klassifizieren die in Berechnungen verwendeten Werte.

- [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32)
  - : Ein 32-Bit-Ganzzahl. Wird pro Anweisung als vorzeichenbehaftet oder vorzeichenlos interpretiert.
- [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)
  - : Ein 64-Bit-Ganzzahl. Wird pro Anweisung als vorzeichenbehaftet oder vorzeichenlos interpretiert.
- [`f32`](/de/docs/WebAssembly/Reference/Value_types/f32)
  - : Ein 32-Bit-Gleitkommawert mit einfacher Genauigkeit.
- [`f64`](/de/docs/WebAssembly/Reference/Value_types/f64)
  - : Ein 64-Bit-Gleitkommawert mit doppelter Genauigkeit.
- [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)
  - : Ein 128-Bit-Vektor aus gepackten Ganzzahl- oder Gleitkommadaten, manipuliert durch [SIMD-Anweisungen](/de/docs/WebAssembly/Reference/SIMD).
- [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)
  - : Ein Verweis auf eine in Wasm definierte Funktion, die es ermöglicht, höherwertige Funktionen über die Wasm- und JavaScript-Sprachgrenzen hinweg aufzurufen.
- [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)
  - : Repräsentiert eine in einem Wasm-Modul ausgelöste Ausnahme und ermöglicht es, diese erneut auszulösen.
- [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref)
  - : Ein Verweis auf einen Host-Wert (zum Beispiel ein JavaScript-Objekt), der für Wasm-Code undurchsichtig ist.
