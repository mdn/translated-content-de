---
title: "sub: Wasm numerische Anweisung"
short-title: sub
slug: WebAssembly/Reference/Numeric/sub
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`sub`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric), Kurzform für _subtraction_, wird verwendet, um eine Zahl von einer anderen Zahl abzuziehen, ähnlich wie der **`-`** Operator in anderen Sprachen.

{{InteractiveExample("Wat Demo: sub", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load `10` and `3` onto the stack
    i32.const 10
    i32.const 3

    i32.sub ;; subtract on number from the other
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
value_type.sub
```

- `value_type`
  - : Der Typ des Werts, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `sub`:
    - `i32`
    - `i64`
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen:
      - `18x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
      - `f32x4`
      - `f64x2`
- `sub`
  - : Die `sub`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert.

Für ein nicht-SIMD `sub` sind dies einfache numerische Werte wie `14` oder `3.1`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `sub` sind dies [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen, beispielsweise `f32x4 9 3.8 -16 101`. Jede Lane der Ausgabe, die auf den Stack geschoben wird, ist gleich der korrespondierenden Lane des zweiten Eingabewerts, subtrahiert von der korrespondierenden Lane des ersten Eingabewerts.

### Binärcodierung

| Anweisung   | Binärformat    | Beispieltext => binär           |
| ----------- | -------------- | ------------------------------- |
| `i32.sub`   | `0x6b`         | `i32.sub` => `0x6b`             |
| `i64.sub`   | `0x7d`         | `i64.sub` => `0x7d`             |
| `f32.sub`   | `0x93`         | `f32.sub` => `0x93`             |
| `f64.sub`   | `0xa1`         | `f64.sub` => `0xa1`             |
| `i8x16.sub` | `0xfd 113:u32` | `i8x16.sub` => `0xfd 0x71`      |
| `i16x8.sub` | `0xfd 145:u32` | `i16x8.sub` => `0xfd 0x91 0x01` |
| `i32x4.sub` | `0xfd 177:u32` | `i32x4.sub` => `0xfd 0xb1 0x01` |
| `i64x2.sub` | `0xfd 209:u32` | `i64x2.sub` => `0xfd 0xd1 0x01` |
| `f32x4.sub` | `0xfd 229:u32` | `f32x4.sub` => `0xfd 0xe5 0x01` |
| `f64x2.sub` | `0xfd 241:u32` | `f64x2.sub` => `0xfd 0xf1 0x01` |

## Beispiele

### SIMD-Subtraktion

In diesem Beispiel demonstrieren wir die Subtraktion eines SIMD-Wertes von einem anderen und die Ausgabe eines der Lane-Werte des Ergebnisses.

#### JavaScript

In unserem Skript holen wir uns eine Referenz zu einem {{htmlelement("p")}} Element, an das wir unser Ergebnis ausgeben werden. Dann definieren wir ein Objekt zum Importieren in Wasm, das eine einzige Funktion enthält, die einen Wert an das Ausgabe-`<p>` schreibt. Danach kompilieren und instanziieren wir unser Wasm-Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode und importieren dabei das Objekt.

```html hidden live-sample___simd_sub
<p></p>
```

```js live-sample___simd_sub
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript `output()` Funktion und erklären dabei, dass sie einen `i32` Parameter hat. Dann deklarieren wir zwei SIMD `i16x8` Werte und nutzen `i16x8.sub`, um den zweiten vom ersten abzuziehen. Schließlich extrahieren wir den in Lane `7` des Ausgabewerts gespeicherten Wert mithilfe der [`extract_lane_s`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane_s) Anweisung und geben ihn an das DOM aus, indem wir die importierte `output()` Funktion aufrufen.

```wat live-sample___simd_sub
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i16x8 0 450 18 -20 7001 834 -825 6
    v128.const i16x8 0 200 -34 40 7000 835 -825 30

    i16x8.sub ;; Subtract the second SIMD value from the first
    i16x8.extract_lane_s 7 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_sub", "100%", 100)}}

`-24` wird ausgegeben, weil dies das Ergebnis der Subtraktion von Lane 7 des zweiten Wertes (`30`) von Lane 7 des ersten Wertes (`6`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
