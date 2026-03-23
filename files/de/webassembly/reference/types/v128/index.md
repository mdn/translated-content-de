---
title: "v128: Wasm-Typ"
short-title: v128
slug: WebAssembly/Reference/Types/v128
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Der **`v128`**-Werttyp ist ein Vektortyp, der 128-Bit gepackte Ganzzahlen oder Gleitkommadaten darstellt. Ein `v128`-Wert kann auf verschiedene Arten von [SIMD-Anweisungen](/de/docs/WebAssembly/Reference/SIMD) interpretiert werden.

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

Der `v128`-Typ wird verwendet, um SIMD-Werte (single instruction, multiple data) in Wasm-Modulen zu definieren und zu manipulieren, wodurch eine effizientere Datenverarbeitung ermöglicht wird, da einzelne Anweisungen gleichzeitig auf mehrere Datenpunkte zugreifen können.

Ein `v128`-Wert stellt 128-Bit gepackte Ganzzahlen oder Gleitkommadaten dar, die von SIMD-Anweisungen auf verschiedene Arten interpretiert werden können. Abhängig von der angegebenen Wertestruktur werden die 128-Bit Daten in mehrere **Lanes** aufgeteilt, wobei jede einen separaten Wert enthält.

Sie können einen `v128`-Wert interpretieren als:

- `i8x16` : 16 8-Bit-Ganzzahlwerte
- `i16x8` : 8 16-Bit-Ganzzahlwerte
- `i32x4` : 4 32-Bit-Ganzzahlwerte
- `i64x2` : 2 64-Bit-Ganzzahlwerte
- `f32x4` : 4 32-Bit-Gleitkommawerte
- `f64x2` : 2 64-Bit-Gleitkommawerte

Zum Beispiel wird die [`const`](/de/docs/WebAssembly/Reference/Numeric/const)-Anweisung verwendet, um einen `f32x4`-Wert zu erstellen, der 4 32-Bit-Gleitkommawerte enthält — `65.4`, `780.9`, `1011.1` und `3.0`.

```wat
v128.const f32x4 65.4 780.9 1011.1 3.0
```

Wir könnten dann alle vier Werte gleichzeitig mit der [`floor`](/de/docs/WebAssembly/Reference/SIMD/conversion/floor)-Anweisung auf die nächste ganze Zahl abrunden:

```wat
f32x4.floor
```

Die vorherige Anweisung würde einen Wert von `f32x4 65 780 1011 3` ausgeben.

Beachten Sie, dass SIMD-Lanes nullindiziert sind. Im vorherigen Ausgabe-Wert:

- Lane 0 enthält `65`.
- Lane 1 enthält `780`.
- Lane 2 enthält `1011`.
- Lane 3 enthält `3`.

Einige Anweisungen arbeiten direkt auf dem `v128`-Typ:

- v128-spezifische Anweisungen wie [`load`](/de/docs/WebAssembly/Reference/SIMD/load)-Anweisungen.
- Allgemeine numerische Anweisungen wie [`const`](/de/docs/WebAssembly/Reference/Numeric/const).

Die meisten SIMD-Anweisungen arbeiten jedoch auf Interpretationen des `v128`-Typs. Auf der [SIMD-Anweisungen](/de/docs/WebAssembly/Reference/SIMD)-Startseite finden Sie die vollständige Liste.

> [!NOTE]
> Wasm-SIMD-Werte können nur innerhalb von Wasm-Modulen verwendet werden. Der Versuch, sie außerhalb zu verwenden (z.B. indem man sie als Parameter an importierte JavaScript-Funktionen übergibt), führt zu einem Fehler.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly)
