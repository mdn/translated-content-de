---
title: "div: Wasm-Textanweisung"
short-title: div
slug: WebAssembly/Reference/Numeric/div
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`div`**-Anweisung, kurz für _division_, wird verwendet, um eine Zahl durch eine andere zu teilen, ähnlich dem **`/`**-Operator in anderen Sprachen.

{{InteractiveExample("Wat Demo: div", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load `12` and `3` onto the stack
    i32.const 12
    i32.const 3

    i32.div_u ;; divide one number by the other
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
value_type.div
```

- `value_type`
  - : Der Typ des Werts, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `div`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Interpretationen:
      - `f32x4`
      - `f64x2`
- `div`
  - : Die `div`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der Dividend.
- `input2`
  - : Der Divisor.
- `output`
  - : Der Quotient der beiden Eingabewerte.

Für einen nicht-SIMD-`div` sind dies grundlegende numerische Werte wie `3` oder `3.5`.

Für einen [SIMD](/de/docs/WebAssembly/Reference/SIMD)-`div` sind dies [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen, zum Beispiel `f32x4 0x9 0xa 0xb 0xc`. Jede Spur des auf den Stapel geschobenen Ergebnisses ist das Ergebnis der Division der entsprechenden Spur des ersten Eingabewerts durch die entsprechende Spur des zweiten Eingabewerts.

### Binäre Codierung

| Anweisung   | Binärformat    | Beispiel-Text => binär          |
| ----------- | -------------- | ------------------------------- |
| `f32.div`   | `0x95`         | `f32.div` => `0x95`             |
| `f64.div`   | `0xa3`         | `f64.div` => `0xa3`             |
| `f32x4.div` | `0xfd 231:u32` | `f32x4.div` => `0xfd 0xe7 0x01` |
| `f64x2.div` | `0xfd 243:u32` | `f64x2.div` => `0xfd 0xf3 0x01` |

## Beispiele

### SIMD-Division

In diesem Beispiel zeigen wir, wie ein SIMD-Wert durch einen anderen geteilt wird und wie einer der Spurwerte des resultierenden Quotienten ausgegeben wird.

#### JavaScript

In unserem Skript greifen wir auf ein {{htmlelement("p")}}-Element zu, in das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabeelement `<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das Objekt im Prozess importieren.

```html hidden live-sample___simd_div
<p></p>
```

```js live-sample___simd_div
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()` und stellen sicher, dass sie einen `f32`-Parameter hat. Dann deklarieren wir zwei SIMD-`f32x4`-Werte und teilen den ersten durch den zweiten mithilfe von `f32x4.div`. Schließlich extrahieren wir den in Spur `3` gespeicherten Wert des Ausgabeergebnisses mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Anweisung und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_div
(module
  ;; Import output function
  (import "obj" "output" (func $output (param f32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const f32x4 20 12 15 100
    v128.const f32x4 5 3 3 3

    f32x4.div ;; divide the first value by the second
    f32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_div", "100%", 100)}}

Das Ergebnis ist `33.3...`, da der in Spur `3` des Ausgabeergebnisses gespeicherte Wert das Ergebnis von `100 / 3` ist.
