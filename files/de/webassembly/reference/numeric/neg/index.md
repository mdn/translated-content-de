---
title: "neg: Wasm Text-Instruktion"
short-title: neg
slug: WebAssembly/Reference/Numeric/neg
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`neg`**-Instruktion, kurz für _negate_, wird verwendet, um eine Zahl zu negieren. Das bedeutet, dass sie eine positive Zahl in eine negative Zahl und eine negative Zahl in eine positive Zahl umwandelt.

{{InteractiveExample("Wat Demo: neg", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const 10 ;; load a number onto the stack
    f32.neg ;; negate the values
    call $log ;; log the result

  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```plain
value_type.neg
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `neg`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
      - `f32x4`
      - `f64x2`
- `neg`
  - : Die `neg`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input2`
  - : Der Eingabewert.
- `output`
  - : Der Ausgabewert.

Für ein nicht-SIMD `neg` sind die Werte einfache numerische Werte wie `3` oder `-3.5`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `neg` sind die Werte [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen, zum Beispiel `f32x4 8 -27.3 30 -0.5`. Jede Lane des ausgegebenen Wertes, der auf den Stack geschoben wird, ist gleich der entsprechenden negierten Lane des Eingabewertes.

### Binärcode

| Instruktion | Binärformat    | Beispiel-Text => Binär          |
| ----------- | -------------- | ------------------------------- |
| `f32.neg`   | `0x8c`         | `f32.neg` => `0x8c`             |
| `f64.neg`   | `0x9a`         | `f64.neg` => `0x9a`             |
| `i8x16.neg` | `0xfd 97:u32`  | `i8x16.neg` => `0xfd 0x61`      |
| `i16x8.neg` | `0xfd 129:u32` | `i16x8.neg` => `0xfd 0x81 0x01` |
| `i32x4.neg` | `0xfd 161:u32` | `i32x4.neg` => `0xfd 0xa1 0x01` |
| `i64x2.neg` | `0xfd 193:u32` | `i64x2.neg` => `0xfd 0xc1 0x01` |
| `f32x4.neg` | `0xfd 225:u32` | `f32x4.neg` => `0xfd 0xe1 0x01` |
| `f64x2.neg` | `0xfd 237:u32` | `f64x2.neg` => `0xfd 0xed 0x01` |

## Beispiele

### SIMD-Negation

In diesem Beispiel demonstrieren wir die Verwendung von `neg`, um einen SIMD-Wert zu negieren.

#### JavaScript

In unserem Skript holen wir uns eine Referenz zu einem {{htmlelement("p")}}-Element, in das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt für den Import in Wasm, das eine einzige Funktion enthält, die einen Wert in das Ausgabe-`<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

```html hidden live-sample___simd_neg
<p></p>
```

```js live-sample___simd_neg
const outputElem = document.querySelector("p");

const obj = {
  output(val) {
    outputElem.textContent += val;
  },
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), {
  obj,
});
```

#### Wasm

In unserem Wasm-Modul importieren wir zunächst die JavaScript-`output()`-Funktion und stellen sicher, dass sie einen `i32`-Parameter hat. Dann deklarieren wir einen SIMD-`i8x16`-Wert und verwenden `i8x16.neg`, um alle Lanes-Werte zu negieren. Schließlich extrahieren wir den in Lane `15` gespeicherten Wert des Ausgangswertes mit der Instruktion [`extract_lane_s`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane_s) und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_neg
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load a SIMD value onto the stack
    v128.const i8x16 -1 0 3 8 15 -2 -32 -11 -2 1 5 8 -3 -5 0 -6

    i8x16.neg ;; Negate all the lanes
    i8x16.extract_lane_s 15 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe sieht wie folgt aus:

{{embedlivesample("simd_neg", "100%", 100)}}

`6` wird ausgegeben, weil es die Negation des Wertes in Lane `15` des Eingabewertes ist.
