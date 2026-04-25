---
title: "abs: Wasm Textanweisung"
short-title: abs
slug: WebAssembly/Reference/Numeric/abs
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`abs`**-Anweisung, kurz für _absolute_ (Absolutwert), wird verwendet, um den Absolutwert einer Zahl zu erhalten. Das heißt, sie gibt x zurück, wenn x positiv ist, und die Negation von x, wenn x negativ ist.

{{InteractiveExample("Wat Demo: abs", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const -10 ;; load a number onto the stack
    f32.abs ;; calculate the absolute value
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
value_type.abs
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `abs`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
      - `f32x4`
      - `f64x2`
- `abs`
  - : Die `abs`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Der Eingabewert.
- `output`
  - : Der Ausgabewert.

Für ein nicht-SIMD `abs` werden `input` und `output` einfache numerische Werte wie `3.5` oder `10` sein.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `abs` werden `input` und `output` [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen sein, zum Beispiel `i32x4 4 8 12 16`. Jeder Ausgabewert, der in den Stapel geschoben wird, ist der Absolutwert des entsprechenden Wertes im Eingabewert.

### Binäre Kodierung

| Befehl      | Binärformat    | Beispieltext => binär           |
| ----------- | -------------- | ------------------------------- |
| `f32.abs`   | `0x8b`         | `f32.abs` => `0x8b`             |
| `f64.abs`   | `0x99`         | `f64.abs` => `0x99`             |
| `i8x16.abs` | `0xfd 96:u32`  | `i8x16.abs` => `0xfd 0x60`      |
| `i16x8.abs` | `0xfd 128:u32` | `i16x8.abs` => `0xfd 0x80 0x01` |
| `i32x4.abs` | `0xfd 160:u32` | `i32x4.abs` => `0xfd 0xa0 0x01` |
| `i64x2.abs` | `0xfd 192:u32` | `i64x2.abs` => `0xfd 0xc0 0x01` |
| `f32x4.abs` | `0xfd 224:u32` | `f32x4.abs` => `0xfd 0xe0 0x01` |
| `f64x2.abs` | `0xfd 236:u32` | `f64x2.abs` => `0xfd 0xec 0x01` |

## Beispiele

### SIMD abs

In diesem Beispiel demonstrieren wir das Ausführen der `abs`-Anweisung auf einem SIMD-Wert und das Ausgeben eines der resultierenden Lane-Werte.

#### JavaScript

In unserem Skript greifen wir auf ein {{htmlelement("p")}}-Element zu, an das wir unser Ergebnis ausgeben werden. Dann definieren wir ein Objekt zur Importierung in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabe-`<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode und importieren dabei das Objekt.

```html hidden live-sample___simd_abs
<p></p>
```

```js live-sample___simd_abs
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion und stellen sicher, dass sie einen `i32`-Parameter hat. Dann deklarieren wir einen SIMD-`i32x4`-Wert und führen `i32x4.abs` aus. Schließlich extrahieren wir den Wert in Lane `3` des Ausgabe-SIMD-Werts mithilfe der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Anweisung und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_abs
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 -9 -10 -11 -12

    i32x4.abs
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_abs", "100%", 100)}}

Das Ergebnis ist `12`, weil der Wert in Lane `3` des Eingabewerts `-12` ist und wir den absoluten Wert ausgeben.
