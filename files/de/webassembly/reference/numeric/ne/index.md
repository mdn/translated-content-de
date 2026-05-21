---
title: "ne: Wasm-Textanweisung"
short-title: ne
slug: WebAssembly/Reference/Numeric/ne
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`ne`**-Anweisung, kurz für _nicht gleich_, überprüft, ob zwei Zahlen ungleich sind.

{{InteractiveExample("Wat Demo: ne", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load `10` and `2` onto the stack
    i32.const 10
    i32.const 2

    i32.ne ;; check if `10` is not equal to `2`
    call $log_bool ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";

function log_bool(value) {
  console.log(Boolean(value));
  // Expected output: true
}

await WebAssembly.instantiateStreaming(fetch(url), {
  env: { log_bool },
});
```

## Syntax

```plain
value_type.ne
```

- `value_type`
  - : Der Wertetyp, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `ne`:
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
- `ne`
  - : Die `ne`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Ein Wert, der anzeigt, ob die beiden Eingabewerte ungleich sind.

Für ein nicht-SIMD `ne` sind die Eingabewerte einfache numerische Werte wie `3` oder `3.5`. Wenn die beiden Eingabewerte ungleich sind, wird `1` auf den Stapel als Ausgabe geschoben, ansonsten wird `0` auf den Stapel geschoben.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `ne` sind die Eingabewerte [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen, zum Beispiel `f32x4 0x9 0xa 0xb 0xc`. Jede Lane der Ausgabe, die auf den Stapel geschoben wird, ist eine `1` oder `0`, die anzeigt, ob die entsprechenden Lanes der beiden Eingabewerte ungleich sind.

### Binäre Kodierung

| Anweisung  | Binärformat    | Beispiel Text => Binär         |
| ---------- | -------------- | ------------------------------ |
| `i32.ne`   | `0x47`         | `i32.ne` => `0x47`             |
| `i64.ne`   | `0x52`         | `i64.ne` => `0x52`             |
| `f32.ne`   | `0x5c`         | `f32.ne` => `0x5c`             |
| `f64.ne`   | `0x62`         | `f64.ne` => `0x62`             |
| `i8x16.ne` | `0xfd 36:u32`  | `i8x16.ne` => `0xfd 0x24`      |
| `i16x8.ne` | `0xfd 46:u32`  | `i16x8.ne` => `0xfd 0x2e`      |
| `i32x4.ne` | `0xfd 56:u32`  | `i32x4.ne` => `0xfd 0x38`      |
| `i64x2.ne` | `0xfd 215:u32` | `i64x2.ne` => `0xfd 0xd7 0x01` |
| `f32x4.ne` | `0xfd 66:u32`  | `f32x4.ne` => `0xfd 0x42`      |
| `f64x2.ne` | `0xfd 72:u32`  | `f64x2.ne` => `0xfd 0x48`      |

## Beispiele

### SIMD-Ungleichheitsprüfung

In diesem Beispiel demonstrieren wir, wie man zwei SIMD-Werte auf Ungleichheit prüft.

#### JavaScript

In unserem Skript greifen wir auf ein {{htmlelement("p")}}-Element zu, in das wir unser Ergebnis ausgeben werden. Dann definieren wir ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabe-`<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

```html hidden live-sample___simd_ne
<p></p>
```

```js live-sample___simd_ne
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

In unserem Wasm-Modul importieren wir zunächst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `f64`-Parameter hat. Wir deklarieren dann zwei SIMD-`f64x2`-Werte und verwenden `f64x2.ne`, um zu prüfen, ob sie gleich sind. Schließlich extrahieren wir den in Lane `1` des Ausgabewerts gespeicherten Wert mithilfe der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Anweisung und geben ihn über die importierte `output()`-Funktion an das DOM aus.

```wat live-sample___simd_ne
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i64)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i64x2 20 12
    v128.const i64x2 20 400000

    i64x2.ne ;; check non-equality
    i64x2.extract_lane 1 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_ne", "100%", 100)}}

`1` wird ausgegeben, weil die Werte in Lane `1` der beiden Eingabewerte ungleich sind.
