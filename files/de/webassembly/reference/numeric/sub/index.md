---
title: "sub: Wasm-Textinstruktion"
short-title: sub
slug: WebAssembly/Reference/Numeric/sub
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`sub`** Instruktion, kurz für _subtraction_, wird verwendet, um eine Zahl von einer anderen zu subtrahieren, ähnlich dem **`-`** Operator in anderen Programmiersprachen.

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
  - : Der Typ des Wertes, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `sub`:
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
  - : Die `sub` Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) inkludiert werden.

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

Für eine nicht-SIMD `sub` sind dies einfache numerische Werte wie `14` oder `3.1`.

Für eine [SIMD](/de/docs/WebAssembly/Reference/SIMD) `sub` sind dies [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen, zum Beispiel `f32x4 9 3.8 -16 101`. Jede Lane des Ergebnisses, das auf den Stapel geschoben wird, entspricht der Subtraktion der entsprechenden Lane des zweiten Eingabewerts von der entsprechenden Lane des ersten Eingabewerts.

### Binäre Kodierung

| Instruktion | Binärformat    | Beispieltext => Binär           |
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

In diesem Beispiel demonstrieren wir, wie ein SIMD-Wert von einem anderen subtrahiert wird und ein Wert einer der Ergebnis-Lanes ausgegeben wird.

#### JavaScript

In unserem Skript erhalten wir eine Referenz zu einem {{htmlelement("p")}} Element, in das wir unser Ergebnis ausgeben werden. Dann definieren wir ein Objekt zum Import in Wasm, das eine einzige Funktion enthält, die einen Wert in das Ausgabe-`<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das Objekt im Prozess importieren.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()` Funktion und stellen sicher, dass sie einen `i32`-Parameter deklariert. Wir deklarieren dann zwei SIMD `i16x8` Werte und verwenden `i16x8.sub`, um den zweiten von dem ersten zu subtrahieren. Schließlich extrahieren wir den Wert, der in Lane `7` des Ausgabe-Werts gespeichert ist, mit der [`extract_lane_s`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane_s) Instruktion und geben ihn an das DOM aus, indem wir die importierte `output()` Funktion aufrufen.

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

Die Ausgabe erfolgt wie folgt:

{{embedlivesample("simd_sub", "100%", 100)}}

`-24` wird ausgegeben, da dies das Ergebnis der Subtraktion von Lane 7 des zweiten Werts (`30`) von Lane 7 des ersten Werts (`6`) ist.
