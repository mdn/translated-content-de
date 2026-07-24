---
title: "eq: Wasm numerische Anweisung"
short-title: eq
slug: WebAssembly/Reference/Numeric/eq
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`eq`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric), kurz für _gleich_, prüft, ob zwei Zahlen gleich sind.

{{InteractiveExample("Wat Demo: eq", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load `10` and `2` onto the stack
    i32.const 10
    i32.const 2

    i32.eq ;; check if `10` is equal to `2`
    call $log_bool ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";

function log_bool(value) {
  console.log(Boolean(value));
  // Expected output: false
}

await WebAssembly.instantiateStreaming(fetch(url), {
  env: { log_bool },
});
```

## Syntax

```plain
value_type.eq
```

- `value_type`
  - : Der Typ des Werts, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `eq`:
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
- `eq`
  - : Die `eq` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert, der ein Integer-Typ sein wird.

Für ein nicht-SIMD `eq` sind die Eingaben grundlegende numerische Werte wie `1` oder `3.5`. Wenn die Eingabewerte gleich sind, wird `1` als Ausgabe auf den Stack geschoben, andernfalls wird `0` auf den Stack geschoben.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `eq` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen, zum Beispiel `f32x4 0x9 0xa 0xb 0xc`. Jeder Lane der Ausgabe, die auf den Stack geschoben wird, ist `1` oder `0`, was die Gleichheit der entsprechenden Lanes in den Eingabewerten anzeigt.

### Binäre Kodierung

| Anweisung  | Binärformat    | Beispieltext => binär          |
| ---------- | -------------- | ------------------------------ |
| `i32.eq`   | `0x46`         | `i32.eq` => `0x46`             |
| `i64.eq`   | `0x51`         | `i64.eq` => `0x51`             |
| `f32.eq`   | `0x5b`         | `f32.eq` => `0x5b`             |
| `f64.eq`   | `0x61`         | `f64.eq` => `0x61`             |
| `i8x16.eq` | `0xfd 35:u32`  | `i8x16.eq` => `0xfd 0x23`      |
| `i16x8.eq` | `0xfd 45:u32`  | `i16x8.eq` => `0xfd 0x2d`      |
| `i32x4.eq` | `0xfd 55:u32`  | `i32x4.eq` => `0xfd 0x37`      |
| `i64x2.eq` | `0xfd 214:u32` | `i64x2.eq` => `0xfd 0xd6 0x01` |
| `f32x4.eq` | `0xfd 65:u32`  | `f32x4.eq` => `0xfd 0x41`      |
| `f64x2.eq` | `0xfd 71:u32`  | `f64x2.eq` => `0xfd 0x47`      |

## Beispiele

### SIMD-`eq`-Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `eq`, um zu testen, ob ein Lane-Wert aus zwei separaten SIMD-Werten gleich ist.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}} Element, zu dem wir unser Ergebnis ausgeben werden. Dann definieren wir ein Objekt zum Import in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabeelement `<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode, wobei wir das Objekt importieren.

```html hidden live-sample___simd_eq
<p></p>
```

```js live-sample___simd_eq
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion und stellen sicher, dass sie einen `i32`-Parameter hat. Dann deklarieren wir zwei SIMD `i16x8` Werte und prüfen, ob sie mit `i16x8.eq` gleich sind. Schließlich extrahieren wir den Wert, der in Lane `7` des Ausgabewerts gespeichert ist, mit der [`extract_lane_s`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane_s) Anweisung und geben ihn an das DOM aus, indem wir die importierte `output()` Funktion aufrufen.

```wat live-sample___simd_eq
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i16x8 20 12 15 100 9 8 -7 8
    v128.const i16x8 20 12 15 100 9 8 -7 4

    i16x8.eq ;; check whether the values are equal
    i16x8.extract_lane_s 7 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_eq", "100%", 100)}}

Das Ergebnis ist `0`, weil die Werte, die in Lane `7` der beiden Eingabewerte gespeichert sind, nicht gleich sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
