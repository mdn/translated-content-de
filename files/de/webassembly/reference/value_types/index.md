---
title: WebAssembly-Werttypen
slug: WebAssembly/Reference/Value_types
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Werttypen klassifizieren die in Berechnungen verwendeten Werte.

- [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32)
  - : Ein 32-Bit-Ganzzahl. Je nach Anweisung als vorzeichenlos oder mit Vorzeichen interpretiert.
- [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)
  - : Ein 64-Bit-Ganzzahl. Je nach Anweisung als vorzeichenlos oder mit Vorzeichen interpretiert.
- [`f32`](/de/docs/WebAssembly/Reference/Value_types/f32)
  - : Ein 32-Bit-Wert mit einfacher Gleitkommapräzision.
- [`f64`](/de/docs/WebAssembly/Reference/Value_types/f64)
  - : Ein 64-Bit-Wert mit doppelter Gleitkommapräzision.
- [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)
  - : Ein 128-Bit-Vektor aus gepackten Ganzzahl- oder Gleitkommadaten, manipuliert durch [SIMD-Anweisungen](/de/docs/WebAssembly/Reference/SIMD).
- [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)
  - : Ein Verweis auf eine in Wasm definierte Funktion, die es ermöglicht, höherwertige Funktionen über die Wasm- und JavaScript-Sprachgrenzen hinweg aufzurufen.
- [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref)
  - : Ein Verweis auf einen Hostwert (zum Beispiel ein JavaScript-Objekt), der für Wasm-Code undurchsichtig ist.
