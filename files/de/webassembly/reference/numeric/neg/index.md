---
title: "neg: Wasm numerische Anweisung"
short-title: neg
slug: WebAssembly/Reference/Numeric/neg
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`neg`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric), abgekürzt für _negate_, wird verwendet, um eine Zahl zu negieren. Das bedeutet, dass eine positive Zahl in eine negative Zahl und eine negative Zahl in eine positive Zahl umgewandelt wird.

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
  - : Der Wertetyp, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `neg`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
      - `f32x4`
      - `f64x2`
- `neg`
  - : Die `neg` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingeschlossen werden.

### Typ

```plain
[input] -> [output]
```

- `input2`
  - : Der Eingabewert.
- `output`
  - : Der Ausgabewert.

Für ein nicht-SIMD `neg` sind die Werte einfache numerische Werte wie `3` oder `-3.5`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `neg` sind die Werte [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen, zum Beispiel `f32x4 8 -27.3 30 -0.5`. Jeder Lane des Ausgabewerts, der auf den Stack geschoben wird, entspricht dem negierten jeweiligen Lane des Eingabewerts.

### Binärcodierung

| Anweisung   | Binärformat    | Beispiel-Text => binär          |
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

### SIMD-Negierung

In diesem Beispiel demonstrieren wir die Verwendung von `neg`, um einen SIMD-Wert zu negieren.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}} Element, in das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt zum Import in Wasm, das eine einzelne Funktion enthält, die einen Wert in das `<p>` ausgibt. Wir kompilieren und instanziieren unser Wasm-Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode, wobei wir das Objekt im Prozess importieren.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript `output()` Funktion und stellen sicher, dass wir deklarieren, dass sie einen `i32` Parameter hat. Dann deklarieren wir einen SIMD `i8x16` Wert und verwenden `i8x16.neg`, um alle seine Lane-Werte zu negieren. Schließlich extrahieren wir den Wert, der in Lane `15` des Ausgabewertes gespeichert ist, mithilfe der [`extract_lane_s`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane_s) Anweisung und geben ihn an das DOM aus, indem wir die importierte `output()` Funktion aufrufen.

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

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_neg", "100%", 100)}}

`6` wird ausgegeben, weil es die Negation des Wertes in Lane `15` des Eingabewertes ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
