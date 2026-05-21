---
title: "mul: Wasm-Textanweisung"
short-title: mul
slug: WebAssembly/Reference/Numeric/mul
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`mul`**-Anweisung, Kurzform für _Multiplikation_, wird verwendet, um eine Zahl mit einer anderen zu multiplizieren, ähnlich dem **`*`**-Operator in anderen Sprachen.

{{InteractiveExample("Wat Demo: mul", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load `10` and `3` onto the stack
    i32.const 10
    i32.const 3

    i32.mul ;; multiply one number by the other
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
value_type.mul
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `mul`:
    - `i32`
    - `i64`
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Interpretationen:
      - `i16x8`
      - `i32x4`
      - `i64x2`
      - `f32x4`
      - `f64x2`
- `mul`
  - : Die `mul`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Das Produkt der beiden Eingabewerte.

Bei einem non-SIMD `mul` sind dies einfache numerische Werte wie `3` oder `3.5`.

Bei einem [SIMD](/de/docs/WebAssembly/Reference/SIMD) `mul` sind dies [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen, zum Beispiel `f32x4 0x9 0xa 0xb 0xc`. Jede Bahn des aus dem Stapel geschobenen Outputs ist das Produkt der zwei Eingabewerte, deren entsprechende Bahnwahrte multipliziert wurden.

### Binäre Codierung

| Anweisung   | Binärformat    | Beispiel Text => Binär          |
| ----------- | -------------- | ------------------------------- |
| `i32.mul`   | `0x6c`         | `i32.mul` => `0x6c`             |
| `i64.mul`   | `0x7e`         | `i64.mul` => `0x7e`             |
| `f32.mul`   | `0x94`         | `f32.mul` => `0x94`             |
| `f64.mul`   | `0xa2`         | `f64.mul` => `0xa2`             |
| `i16x8.mul` | `0xfd 149:u32` | `i16x8.mul` => `0xfd 0x95 0x01` |
| `i32x4.mul` | `0xfd 181:u32` | `i32x4.mul` => `0xfd 0xb5 0x01` |
| `i64x2.mul` | `0xfd 213:u32` | `i64x2.mul` => `0xfd 0xd5 0x01` |
| `f32x4.mul` | `0xfd 230:u32` | `f32x4.mul` => `0xfd 0xe6 0x01` |
| `f64x2.mul` | `0xfd 242:u32` | `f64x2.mul` => `0xfd 0xf2 0x01` |

## Beispiele

### SIMD-Multiplikation

In diesem Beispiel zeigen wir, wie ein SIMD-Wert mit einem anderen multipliziert wird und wie einer der Bahnwerte des resultierenden Produkts ausgegeben wird.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, zu dem wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt zur Importierung in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabe-`<p>` schreibt. Wir kompilieren und installieren anschließend unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

```html hidden live-sample___simd_mul
<p></p>
```

```js live-sample___simd_mul
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `i32`-Parameter hat. Dann deklarieren wir zwei SIMD-`i16x8`-Werte, multiplizieren den ersten mit dem zweiten mittels `i16x8.mul` und extrahieren schließlich den in Bahn `7` gespeicherten Wert des Ausgabe-Wertes mit der Anweisung [`extract_lane_s`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane_s) und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_mul
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i16x8 20 12 15 2 400 2 1 12
    v128.const i16x8 18 34 3 5 9 20 21 9

    i16x8.mul ;; multiply the two values
    i16x8.extract_lane_s 7 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Das Ergebnis sieht wie folgt aus:

{{embedlivesample("simd_mul", "100%", 100)}}

Das Ergebnis ist `108`, weil der in Bahn `3` des Ausgabewertes gespeicherte Wert das Ergebnis von `12 * 9` ist.
