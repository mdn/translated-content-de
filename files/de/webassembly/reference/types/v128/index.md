---
title: "v128: Wasm-Typ"
short-title: v128
slug: WebAssembly/Reference/Types/v128
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Der **`v128`**-Werttyp ist ein Vektortyp, der 128 Bit gepackte Ganzzahlen oder Fließkommadaten darstellt. Ein `v128`-Wert kann auf verschiedene Arten von [SIMD-Anweisungen](/de/docs/WebAssembly/Reference/SIMD) interpretiert werden.

{{InteractiveExample("Wat Demo: v128", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    ;; load two SIMD values onto the stack
    (v128.const f32x4 0x9 0xa 0xb 0xc)
    (v128.const f32x4 0x10 0x11 0x12 0x13)

    f32x4.add ;; add the two values
    f32x4.extract_lane 0 ;; Extract a float value from the result
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

## Syntax

```wat
;; Example of a v128-specific instruction
(v128.load32_splat align=2 (i32.const 0))

;; Example of general numeric instruction
(v128.const f32x4 0x10 0x11 0x12 0x13)

;; Example of an instruction working on
;; a specific v128 interpretation
i32x4.add
```

## Beschreibung

Der `v128`-Typ wird verwendet, um SIMD-Werte (Single Instruction, Multiple Data) in Wasm-Modulen zu definieren und zu bearbeiten. Diese ermöglichen eine effizientere Datenverarbeitung, da einzelne Anweisungen gleichzeitig auf mehrere Datenpunkte angewendet werden können.

Ein `v128`-Wert repräsentiert 128 Bit gepackter Ganzzahlen oder Fließkommadaten, die von SIMD-Anweisungen auf unterschiedliche Weise interpretiert werden können. Abhängig von der festgelegten Werte-Struktur werden die 128 Bit Daten in mehrere **Schichten** aufgeteilt, von denen jede einen separaten Wert enthält.

Ein `v128`-Wert kann interpretiert werden als:

- `i8x16` : 16 8-Bit-Ganzzahlen
- `i16x8` : 8 16-Bit-Ganzzahlen
- `i32x4` : 4 32-Bit-Ganzzahlen
- `i64x2` : 2 64-Bit-Ganzzahlen
- `f32x4` : 4 32-Bit-Gleitkommawerte
- `f64x2` : 2 64-Bit-Gleitkommawerte

Zum Beispiel wird mit der [`const`-Anweisung](/de/docs/WebAssembly/Reference/Numeric/const) ein `f32x4`-Wert erstellt, der 4 32-Bit-Gleitkommawerte — `65.4`, `780.9`, `1011.1` und `3.0` — enthält.

```wat
v128.const f32x4 65.4 780.9 1011.1 3.0
```

Wir könnten dann alle vier Werte gleichzeitig auf den nächsten ganzzahligen Wert abrunden, indem wir die [`floor`-Anweisung](/de/docs/WebAssembly/Reference/Numeric/floor) verwenden:

```wat
f32x4.floor
```

Die vorherige Anweisung würde einen Wert von `f32x4 65 780 1011 3` ausgeben.

Beachten Sie, dass SIMD-Schichten nullbasiert sind. Im vorherigen Ausgabewert:

- Schicht 0 enthält `65`.
- Schicht 1 enthält `780`.
- Schicht 2 enthält `1011`.
- Schicht 3 enthält `3`.

Einige Anweisungen arbeiten direkt mit dem `v128`-Typ:

- v128-spezifische Anweisungen wie die [`load`-Anweisungen](/de/docs/WebAssembly/Reference/SIMD/load_store).
- Allgemeine numerische Anweisungen wie [`const`](/de/docs/WebAssembly/Reference/Numeric/const).

Jedoch arbeiten die meisten SIMD-Anweisungen mit Interpretationen des `v128`-Typs. Siehe die [SIMD-Anweisungen](/de/docs/WebAssembly/Reference/SIMD) Übersichtsseite für die vollständige Liste.

> [!NOTE]
> Wasm-SIMD-Werte können nur innerhalb von Wasm-Modulen verwendet werden. Der Versuch, sie außerhalb (zum Beispiel durch Übergabe an importierte JavaScript-Funktionen als Parameter) zu verwenden, führt zu einem Fehler.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly)
