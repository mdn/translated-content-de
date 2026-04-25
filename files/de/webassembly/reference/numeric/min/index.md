---
title: "min: Wasm Text-Anweisung"
short-title: min
slug: WebAssembly/Reference/Numeric/min
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`min`**-Anweisung wird verwendet, um die kleinere von zwei Zahlen zu erhalten.

{{InteractiveExample("Wat Demo: min", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    ;; load 10 and 2 onto the stack
    f32.const 10
    f32.const 2

    f32.min ;; calculate the lower number
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
value_type.min
```

- `value_type`
  - : Der Typ des Werts, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `min`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Interpretationen:
      - `f32x4`
      - `f64x2`
- `min`
  - : Die `min`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

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

Für ein nicht-SIMD `min` sind die Eingaben einfache numerische Werte wie `3.0` oder `3.5`, und der `output` wird der kleinere von `input1` und `input2` sein.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `min` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen, zum Beispiel `f32x4 2.0 30 86.9 120`. Jede Spur des Outputs, die auf den Stapel gedrückt wird, ist die kleinere der entsprechenden Spuren in den Eingabewerten.

### Binärcodierung

| Anleitung   | Binärformat    | Beispieltext => binär           |
| ----------- | -------------- | ------------------------------- |
| `f32.min`   | `0x96`         | `f32.min` => `0x96`             |
| `f64.min`   | `0xa4`         | `f64.min` => `0xa4`             |
| `f32x4.min` | `0xfd 232:u32` | `f32x4.min` => `0xfd 0xe8 0x01` |
| `f64x2.min` | `0xfd 244:u32` | `f64x2.min` => `0xfd 0xf4 0x01` |

## Beispiele

### SIMD-`min`-Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `min`, um den kleineren Wert des gleichen Spurindex von zwei SIMD-Werten zu erhalten.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, in das wir unser Ergebnis ausgeben werden. Dann definieren wir ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabeelement `<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

```html hidden live-sample___simd_min
<p></p>
```

```js live-sample___simd_min
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

In unserem Wasm-Modul importieren wir zunächst die JavaScript-Funktion `output()`, wobei wir darauf achten, dass sie einen `f32`-Parameter hat. Dann deklarieren wir zwei SIMD-`f32x4`-Werte und verwenden `f32x4.min`, um einen neuen `f32x4`-Wert zu erhalten, der in jedem Fall den kleineren Spurwert der beiden Eingaben enthält. Schließlich extrahieren wir den Wert, der in Spur `3` des Ausgabewerts gespeichert ist, mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Anweisung und geben ihn an das DOM aus, indem wir die importierte Funktion `output()` aufrufen.

```wat live-sample___simd_min
(module
  ;; Import output function
  (import "obj" "output" (func $output (param f32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const f32x4 20 0 1015 1000
    v128.const f32x4 4 38 15 108

    ;; Return a new f32x4 containing the highest lane value in each case
    f32x4.min
    f32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_min", "100%", 100)}}

Das Ergebnis ist `108`. Dies liegt daran, dass der Wert, der in Spur `3` des ersten Eingabewertes gespeichert ist, `1000` ist, und der Wert, der in Spur `3` des zweiten Eingabewertes gespeichert ist, `108` ist. Da `108` kleiner als `1000` ist, wird der neue `f32x4`-Wert, der von der `f32x4.min`-Anweisung ausgegeben wird, mit `108` in Spur `3` gesetzt, den wir dann extrahieren und an das DOM ausgeben.

## Siehe auch

- [`min_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/min_s)
- [`min_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/min_u)
