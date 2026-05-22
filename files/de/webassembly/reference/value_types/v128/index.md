---
title: "v128: Wasm-Werttyp"
short-title: v128
slug: WebAssembly/Reference/Value_types/v128
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

Der **`v128`** Werttyp ist ein Vektortyp, der 128-Bit gepackte Integer- oder Gleitkomma-Daten darstellt. Ein `v128`-Wert kann auf verschiedene Arten von [SIMD-Instruktionen](/de/docs/WebAssembly/Reference/SIMD) interpretiert werden.

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

Der `v128`-Typ wird verwendet, um SIMD (Single Instruction, Multiple Data)-Werte in Wasm-Modulen zu definieren und zu manipulieren. Diese ermöglichen effizientere Datenverarbeitung, indem einzelne Instruktionen auf mehrere Datenpunkte gleichzeitig angewendet werden.

Ein `v128`-Wert stellt 128-Bit gepackte Integer- oder Gleitkomma-Daten dar, die auf verschiedene Weisen von SIMD-Instruktionen interpretiert werden können. Abhängig von der gewählten Werte-Struktur werden die 128-Bit Daten in mehrere **Lanes** unterteilt, von denen jede einen separaten Wert enthält.

Ein `v128`-Wert kann wie folgt interpretiert werden:

- `i8x16`: 16 8-Bit-Integer-Werte
- `i16x8`: 8 16-Bit-Integer-Werte
- `i32x4`: 4 32-Bit-Integer-Werte
- `i64x2`: 2 64-Bit-Integer-Werte
- `f32x4`: 4 32-Bit-Gleitkommawerte
- `f64x2`: 2 64-Bit-Gleitkommawerte

Zum Beispiel wird mit der [`const`](/de/docs/WebAssembly/Reference/Numeric/const)-Instruktion ein `f32x4`-Wert erstellt, der 4 32-Bit-Gleitkommawerte enthält — `65.4`, `780.9`, `1011.1` und `3.0`.

```wat
v128.const f32x4 65.4 780.9 1011.1 3.0
```

Wir könnten dann alle vier Werte gleichzeitig mit der [`floor`](/de/docs/WebAssembly/Reference/Numeric/floor)-Instruktion auf den nächsten ganzzahligen Wert abrunden:

```wat
f32x4.floor
```

Die vorherige Instruktion würde einen Wert von `f32x4 65 780 1011 3` ausgeben.

Beachten Sie, dass SIMD-Lanes bei Null beginnen. Im vorherigen Ausgabe-Wert:

- Lane 0 enthält `65`.
- Lane 1 enthält `780`.
- Lane 2 enthält `1011`.
- Lane 3 enthält `3`.

Einige Instruktionen operieren direkt auf dem `v128`-Typ:

- v128-spezifische Instruktionen wie [`load`](/de/docs/WebAssembly/Reference/SIMD/load_store)-Instruktionen.
- Allgemeine numerische Instruktionen wie [`const`](/de/docs/WebAssembly/Reference/Numeric/const).

Die meisten SIMD-Instruktionen arbeiten jedoch auf Interpretationen des `v128`-Typs. Siehe die Landeseite der [SIMD-Instruktionen](/de/docs/WebAssembly/Reference/SIMD) für die vollständige Liste.

> [!NOTE]
> Wasm-SIMD-Werte können nur innerhalb von Wasm-Modulen verwendet werden. Der Versuch, sie außerhalb zu verwenden (z. B. indem sie als Parameter an importierte JavaScript-Funktionen übergeben werden), führt zu einem Fehler.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly)
