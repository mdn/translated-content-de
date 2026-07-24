---
title: "ne: Wasm numerische Anweisung"
short-title: ne
slug: WebAssembly/Reference/Numeric/ne
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`ne`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric), kurz für _not equal_, prüft, ob zwei Zahlen nicht gleich sind.

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
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `ne`:
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
- `ne`
  - : Die `ne` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Ein Wert, der anzeigt, ob die beiden Eingabewerte nicht gleich sind.

Für ein nicht-SIMD `ne` sind die Eingabewerte einfache numerische Werte wie `3` oder `3.5`. Wenn die beiden Eingabewerte nicht gleich sind, wird `1` als Ausgabe auf den Stack geschoben, ansonsten `0`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `ne` sind die Eingabewerte [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen, zum Beispiel `f32x4 0x9 0xa 0xb 0xc`. Jede Spur der als Ausgabe auf den Stack geschobenen Werte ist `1` oder `0`, was anzeigt, ob die entsprechenden Spuren der beiden Eingabewerte nicht gleich sind.

### Binärkodierung

| Anweisung  | Binärformat    | Beispieltext => binär          |
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

### SIMD Ungleichheitsprüfung

In diesem Beispiel demonstrieren wir die Überprüfung zweier SIMD-Werte auf Ungleichheit.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}} Element, auf das wir unser Ergebnis ausgeben werden. Dann definieren wir ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabe-`<p>` schreibt. Wir compilieren und instanziieren unser Wasm-Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode, wobei wir das Objekt im Prozess importieren.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript `output()` Funktion, wobei wir sicherstellen, dass sie einen `f64` Parameter hat. Dann deklarieren wir zwei SIMD `f64x2` Werte und verwenden `f64x2.ne`, um zu prüfen, ob sie gleich sind. Schließlich extrahieren wir den in Spur `1` des Ausgabewerts gespeicherten Wert mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) Anweisung und geben ihn an das DOM aus, indem wir die importierte `output()` Funktion aufrufen.

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

`1` wird ausgegeben, weil die Werte in Spur `1` der beiden Eingabewerte nicht gleich sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
