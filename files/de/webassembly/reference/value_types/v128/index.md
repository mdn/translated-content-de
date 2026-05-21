---
title: "v128: Wasm-Typ"
short-title: v128
slug: WebAssembly/Reference/Value_types/v128
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Der **`v128`**-Werttyp ist ein Vektortyp, der 128 Bits gepackter Integer- oder Gleitkomma-Daten repräsentiert. Ein `v128`-Wert kann auf verschiedene Weisen von [SIMD-Anweisungen](/de/docs/WebAssembly/Reference/SIMD) interpretiert werden.

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

Der `v128`-Typ wird in Wasm-Modulen verwendet, um SIMD (single instruction, multiple data)-Werte zu definieren und zu manipulieren. Diese ermöglichen eine effizientere Datenverarbeitung, indem einzelne Anweisungen auf mehrere Datenpunkte gleichzeitig wirken.

Ein `v128`-Wert repräsentiert 128 Bits gepackter Integer- oder Gleitkomma-Daten, die auf verschiedene Weisen von SIMD-Anweisungen interpretiert werden können. Abhängig von der spezifizierten Wertstruktur werden die 128 Bits an Daten in mehrere **Lanes** unterteilt, wobei jede einen separaten Wert enthält.

Sie können einen `v128`-Wert wie folgt interpretieren:

- `i8x16`: 16 8-Bit-Integer-Werte
- `i16x8`: 8 16-Bit-Integer-Werte
- `i32x4`: 4 32-Bit-Integer-Werte
- `i64x2`: 2 64-Bit-Integer-Werte
- `f32x4`: 4 32-Bit-Float-Werte
- `f64x2`: 2 64-Bit-Float-Werte

Zum Beispiel wird die [`const`](/de/docs/WebAssembly/Reference/Numeric/const)-Anweisung verwendet, um einen `f32x4`-Wert zu erstellen, der 4 32-Bit-Gleitkommawerte enthält — `65.4`, `780.9`, `1011.1` und `3.0`.

```wat
v128.const f32x4 65.4 780.9 1011.1 3.0
```

Wir könnten dann alle vier Werte gleichzeitig mit der [`floor`](/de/docs/WebAssembly/Reference/Numeric/floor)-Anweisung auf die nächste ganze Zahl abrunden:

```wat
f32x4.floor
```

Die vorherige Anweisung gibt einen Wert von `f32x4 65 780 1011 3` aus.

Beachten Sie, dass SIMD-Lanes null-indexiert sind. Im vorherigen Ausgabewert:

- Lane 0 enthält `65`.
- Lane 1 enthält `780`.
- Lane 2 enthält `1011`.
- Lane 3 enthält `3`.

Einige Anweisungen operieren direkt auf dem `v128`-Typ:

- v128-spezifische Anweisungen wie [`load`](/de/docs/WebAssembly/Reference/SIMD/load_store)-Anweisungen.
- Allgemeine numerische Anweisungen wie [`const`](/de/docs/WebAssembly/Reference/Numeric/const).

Die meisten SIMD-Anweisungen operieren jedoch auf Interpretationen des `v128`-Typs. Siehe die Übersicht zu den [SIMD-Anweisungen](/de/docs/WebAssembly/Reference/SIMD) für die vollständige Liste.

> [!NOTE]
> Wasm SIMD-Werte können nur innerhalb von Wasm-Modulen verwendet werden. Der Versuch, sie außerhalb zu verwenden (zum Beispiel, indem man sie als Parameter in importierte JavaScript-Funktionen übergibt), führt zu einem Fehler.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly)
