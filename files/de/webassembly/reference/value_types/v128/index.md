---
title: "v128: Wasm-Werttyp"
short-title: v128
slug: WebAssembly/Reference/Value_types/v128
l10n:
  sourceCommit: 187220197832f482878607080ae9e7c1edabe108
---

Der **`v128`**-Werttyp ist ein Vektortyp, der 128-Bit an gepackten Integer- oder Gleitkomma-Daten darstellt. Ein `v128`-Wert kann von [SIMD-Instruktionen](/de/docs/WebAssembly/Reference/SIMD) auf verschiedene Arten interpretiert werden.

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

Der `v128`-Typ wird verwendet, um SIMD (Single Instruction, Multiple Data) Werte in Wasm-Modulen zu definieren und zu manipulieren, was eine effizientere Datenverarbeitung ermöglicht, indem einzelne Instruktionen gleichzeitig auf mehrere Datenpunkte angewendet werden.

Ein `v128`-Wert repräsentiert 128-Bit an gepackten Integer- oder Gleitkomma-Daten, die von SIMD-Instruktionen auf verschiedene Weisen interpretiert werden können. Abhängig von der gewählten Wertstruktur werden die 128-Bit Daten in mehrere **Lanes** aufgeteilt, von denen jede einen separaten Wert enthält.

Sie können einen `v128`-Wert wie folgt interpretieren:

- `i8x16` : 16 8-Bit-Integer-Werte
- `i16x8` : 8 16-Bit-Integer-Werte
- `i32x4` : 4 32-Bit-Integer-Werte
- `i64x2` : 2 64-Bit-Integer-Werte
- `f32x4` : 4 32-Bit-Gleitkommawerte
- `f64x2` : 2 64-Bit-Gleitkommawerte

Zum Beispiel verwendet das folgende Beispiel die [`const`-Instruktion](/de/docs/WebAssembly/Reference/Numeric/const), um einen `f32x4`-Wert zu erstellen, der 4 32-Bit-Gleitkommawerte enthält — `65.4`, `780.9`, `1011.1` und `3.0`.

```wat
v128.const f32x4 65.4 780.9 1011.1 3.0
```

Wir könnten dann alle vier Werte gleichzeitig mit der [`floor`-Instruktion](/de/docs/WebAssembly/Reference/Numeric/floor) auf die nächstgelegene ganze Zahl abrunden:

```wat
f32x4.floor
```

Die vorherige Instruktion würde einen `f32x4` Wert von `65 780 1011 3` ausgeben.

Beachten Sie, dass SIMD-Lanes nullindexiert sind. Im vorherigen Ausgabe-Wert:

- Lane 0 enthält `65`.
- Lane 1 enthält `780`.
- Lane 2 enthält `1011`.
- Lane 3 enthält `3`.

Einige Instruktionen arbeiten direkt auf dem `v128`-Typ:

- v128-spezifische Instruktionen wie [`load`-Instruktionen](/de/docs/WebAssembly/Reference/SIMD/load_store).
- Allgemeine numerische Instruktionen wie [`const`-Instruktion](/de/docs/WebAssembly/Reference/Numeric/const).

Die meisten SIMD-Instruktionen arbeiten jedoch auf Interpretationen des `v128`-Typs. Auf der [SIMD-Instruktionen-Seite](/de/docs/WebAssembly/Reference/SIMD) finden Sie die vollständige Liste.

> [!NOTE]
> Wasm-SIMD-Werte können nur innerhalb von Wasm-Modulen verwendet werden. Der Versuch, sie außerhalb (zum Beispiel durch Übergeben an importierte JavaScript-Funktionen als Parameter) zu verwenden, resultiert in einem Fehler.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly)
