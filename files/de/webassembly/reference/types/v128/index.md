---
title: "v128: Wasm-Typ"
short-title: v128
slug: WebAssembly/Reference/Types/v128
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Der **`v128`** Werttyp ist ein Vektortyp, der 128-Bit gepackte Integer- oder Fließkommadaten darstellt. Ein `v128` Wert kann auf verschiedene Weisen durch [SIMD-Instruktionen](/de/docs/WebAssembly/Reference/SIMD) interpretiert werden.

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

Der `v128` Typ wird verwendet, um SIMD (Single Instruction, Multiple Data)-Werte in Wasm-Modulen zu definieren und zu manipulieren. Dies ermöglicht eine effizientere Datenverarbeitung, indem einzelne Instruktionen gleichzeitig auf mehrere Datenpunkte angewendet werden können.

Ein `v128` Wert repräsentiert 128-Bit gepackte Integer- oder Fließkommadaten, die auf verschiedene Weisen durch SIMD-Instruktionen interpretiert werden können. Abhängig von der angegebenen Wertstruktur werden die 128-Bit Daten in mehrere **Lanes** aufgeteilt, von denen jede einen separaten Wert enthält.

Sie können einen `v128` Wert wie folgt interpretieren:

- `i8x16`: 16 8-Bit Integer-Werte
- `i16x8`: 8 16-Bit Integer-Werte
- `i32x4`: 4 32-Bit Integer-Werte
- `i64x2`: 2 64-Bit Integer-Werte
- `f32x4`: 4 32-Bit Fließkomma-Werte
- `f64x2`: 2 64-Bit Fließkomma-Werte

Beispielsweise wird mit der [`const`](/de/docs/WebAssembly/Reference/Numeric/const) Instruktion ein `f32x4` Wert erstellt, der 4 32-Bit Fließkomma-Werte enthält — `65.4`, `780.9`, `1011.1` und `3.0`.

```wat
v128.const f32x4 65.4 780.9 1011.1 3.0
```

Wir könnten dann alle vier Werte gleichzeitig mit der [`floor`](/de/docs/WebAssembly/Reference/Numeric/floor) Instruktion auf die nächste ganze Zahl abrunden:

```wat
f32x4.floor
```

Die vorherige Instruktion würde einen Wert von `f32x4 65 780 1011 3` ausgeben.

Beachten Sie, dass SIMD-Lanes nullbasiert indexiert sind. Im vorherigen Ausgabewert:

- Lane 0 enthält `65`.
- Lane 1 enthält `780`.
- Lane 2 enthält `1011`.
- Lane 3 enthält `3`.

Einige Instruktionen operieren direkt auf dem `v128` Typ:

- `v128`-spezifische Instruktionen wie [`load`](/de/docs/WebAssembly/Reference/SIMD/load) Instruktionen.
- Allgemeine numerische Instruktionen wie [`const`](/de/docs/WebAssembly/Reference/Numeric/const).

Die meisten der SIMD-Instruktionen operieren jedoch auf Interpretationen des `v128` Typs. Sehen Sie sich die [SIMD-Instruktionen](/de/docs/WebAssembly/Reference/SIMD) Hauptseite für die vollständige Liste an.

> [!NOTE]
> Wasm-SIMD-Werte können nur innerhalb von Wasm-Modulen verwendet werden. Ein Versuch, sie außerhalb zu verwenden (zum Beispiel, indem man sie als Parameter in importierte JavaScript-Funktionen übergibt), wird zu einem Fehler führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly)
