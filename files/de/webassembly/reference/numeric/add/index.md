---
title: "add: Wasm-Zahlenoperation"
short-title: add
slug: WebAssembly/Reference/Numeric/add
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`add`** [Numerische Instruktion](/de/docs/WebAssembly/Reference/Numeric) wird verwendet, um zwei Zahlen zu addieren, ähnlich wie der **`+`** Operator in anderen Sprachen.

{{InteractiveExample("Wat Demo: add", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load `10` and `3` onto the stack
    i32.const 10
    i32.const 3

    i32.add ;; add up both numbers
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
value_type.add
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `add`:
    - `i32`
    - `i64`
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
      - `f32x4`
      - `f64x2`
- `add`
  - : Die `add`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Wert, der addiert werden soll.
- `input2`
  - : Der zweite Wert, der addiert werden soll.
- `output`
  - : Die Summe der beiden Eingabewerte.

Bei einem nicht-SIMD `add` sind dies einfache numerische Werte wie `3` oder `3.5`.

Bei einem [SIMD](/de/docs/WebAssembly/Reference/SIMD) `add` sind dies [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen, zum Beispiel `f32x4 0x9 0xa 0xb 0xc`. Jede Lane des Ergebnisses, das auf den Stack geschoben wird, ist die Summe der entsprechenden Lanes in den Eingabewerten.

### Binärcode

| Instruktion | Binärformat    | Beispieltext => Binär           |
| ----------- | -------------- | ------------------------------- |
| `i32.add`   | `0x6a`         | `i32.add` => `0x6a`             |
| `i64.add`   | `0x7c`         | `i64.add` => `0x7c`             |
| `f32.add`   | `0x92`         | `f32.add` => `0x92`             |
| `f64.add`   | `0xa0`         | `f64.add` => `0xa0`             |
| `i8x16.add` | `0xfd 110:u32` | `i8x16.add` => `0xfd 0x6e`      |
| `i16x8.add` | `0xfd 142:u32` | `i16x8.add` => `0xfd 0x8e 0x01` |
| `i32x4.add` | `0xfd 174:u32` | `i32x4.add` => `0xfd 0xae 0x01` |
| `i64x2.add` | `0xfd 206:u32` | `i64x2.add` => `0xfd 0xce 0x01` |
| `f32x4.add` | `0xfd 228:u32` | `f32x4.add` => `0xfd 0xe4 0x01` |
| `f64x2.add` | `0xfd 240:u32` | `f64x2.add` => `0xfd 0xf0 0x01` |

## Beispiele

### SIMD-Addition

In diesem Beispiel zeigen wir die Addition von zwei SIMD-Werten und die Ausgabe eines der Lane-Werte.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, in das wir unser Ergebnis ausgeben, und definieren dann ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabe-`<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

```html hidden live-sample___simd_add
<p></p>
```

```js live-sample___simd_add
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `i32`-Parameter hat. Dann deklarieren wir zwei SIMD-`i32x4`-Werte und addieren sie mit `i32x4.add`. Schließlich extrahieren wir den in Lane `3` gespeicherten Wert der Summe der Addition mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Instruktion und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_add
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 9 10 11 12
    v128.const i32x4 9 10 11 12

    i32x4.add ;; add the two values
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_add", "100%", 100)}}

Das Ergebnis ist `24`, weil der in Lane `3` gespeicherte Wert jedes der Eingabewerte `12` ist. Nach der Addition enthält Lane `3` des Ausgabewerts den Wert `24`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
