---
title: "eq: Wasm-Textinstruktion"
short-title: eq
slug: WebAssembly/Reference/Numeric/eq
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`eq`**-Instruktion, kurz für _equal_, prüft, ob zwei Zahlen gleich sind.

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
  - : Der Werttyp, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `eq`:
    - `i32`
    - `i64`
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
      - `f32x4`
      - `f64x2`
- `eq`
  - : Die `eq`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert, der ein Ganzzahltyp sein wird.

Für eine nicht-SIMD `eq`-Instruktion werden die Eingaben grundlegende numerische Werte wie `1` oder `3.5` sein. Wenn die Eingabewerte gleich sind, wird `1` auf den Stapel geschoben, andernfalls wird `0` auf den Stapel geschoben.

Für eine [SIMD](/de/docs/WebAssembly/Reference/SIMD) `eq`-Instruktion werden die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen sein, zum Beispiel `f32x4 0x9 0xa 0xb 0xc`. Jede Spur der Ausgabe, die auf den Stapel geschoben wird, ist eine `1` oder `0`, die die Gleichheit der entsprechenden Spuren in den Eingabewerten anzeigt.

### Binärcodierung

| Instruktion | Binärformat    | Beispiel Text => Binär         |
| ----------- | -------------- | ------------------------------ |
| `i32.eq`    | `0x46`         | `i32.eq` => `0x46`             |
| `i64.eq`    | `0x51`         | `i64.eq` => `0x51`             |
| `f32.eq`    | `0x5b`         | `f32.eq` => `0x5b`             |
| `f64.eq`    | `0x61`         | `f64.eq` => `0x61`             |
| `i8x16.eq`  | `0xfd 35:u32`  | `i8x16.eq` => `0xfd 0x23`      |
| `i16x8.eq`  | `0xfd 45:u32`  | `i16x8.eq` => `0xfd 0x2d`      |
| `i32x4.eq`  | `0xfd 55:u32`  | `i32x4.eq` => `0xfd 0x37`      |
| `i64x2.eq`  | `0xfd 214:u32` | `i64x2.eq` => `0xfd 0xd6 0x01` |
| `f32x4.eq`  | `0xfd 65:u32`  | `f32x4.eq` => `0xfd 0x41`      |
| `f64x2.eq`  | `0xfd 71:u32`  | `f64x2.eq` => `0xfd 0x47`      |

## Beispiele

### SIMD `eq` Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `eq`, um zu testen, ob ein Spurwert aus zwei separaten SIMD-Werten gleich ist.

#### JavaScript

In unserem Skript greifen wir auf ein {{htmlelement("p")}}-Element zu, an das wir unser Ergebnis ausgeben werden, und definieren ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabe-`<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), indem wir das Objekt dabei importieren.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir darauf achten, anzugeben, dass sie einen `i32`-Parameter hat. Wir deklarieren dann zwei SIMD `i16x8`-Werte und prüfen, ob sie mit `i16x8.eq` gleich sind. Schließlich extrahieren wir den in Spur `7` des Ausgabewertes gespeicherten Wert mit der Instruktion [`extract_lane_s`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane_s) und geben ihn an das DOM aus, indem wir die importierte Funktion `output()` aufrufen.

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

Das Ergebnis ist `0`, da die Werte, die in Spur `7` der beiden Eingabewerte gespeichert sind, nicht gleich sind.
