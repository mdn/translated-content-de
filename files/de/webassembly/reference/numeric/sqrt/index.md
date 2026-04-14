---
title: "sqrt: Wasm Textanweisung"
short-title: sqrt
slug: WebAssembly/Reference/Numeric/sqrt
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`sqrt`**-Anweisung, kurz für _square root_ (Quadratwurzel), wird verwendet, um die Quadratwurzel einer Zahl zu berechnen.

{{InteractiveExample("Wat Demo: sqrt", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const 2 ;; load a number onto the stack
    f32.sqrt ;; calculate the square root
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
value_type.sqrt
```

- `value_type`
  - : Der Typ des Wertes, auf den die Anweisung angewendet wird. Die folgenden Typen unterstützen `sqrt`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Interpretationen:
      - `f32x4`
      - `f64x2`
- `sqrt`
  - : Die `sqrt`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Der Eingabewert.
- `output`
  - : Der Ausgabewert. Erfolgreiche Ergebnisse werden nur für positive Zahlen geliefert; der Versuch, die Quadratwurzel einer negativen Zahl zu berechnen, führt zu einem Ausgabewert von {{jsxref("NaN")}}.

Bei einem nicht-SIMD `sqrt` sind dies grundlegende numerische Werte wie `3.5` oder `9`.

Bei einem [SIMD](/de/docs/WebAssembly/Reference/SIMD) `sqrt` sind dies [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Werteinterpretationen, beispielsweise `f32x4 9 3.8 -16 101`. Jede ausgegebene Bahn, die auf den Stack geschoben wird, enthält die Quadratwurzel der entsprechenden Bahn im Eingabewert.

### Binärcodecodierung

| Anweisung    | Binärformat    | Beispieltext => Binär            |
| ------------ | -------------- | -------------------------------- |
| `f32.sqrt`   | `0x91`         | `f32.sqrt` => `0x91`             |
| `f64.sqrt`   | `0x9f`         | `f64.sqrt` => `0x9f`             |
| `f32x4.sqrt` | `0xfd 227:u32` | `f32x4.sqrt` => `0xfd 0xe3 0x01` |
| `f64x2.sqrt` | `0xfd 239:u32` | `f64x2.sqrt` => `0xfd 0xef 0x01` |

## Beispiele

### Nutzung von SIMD sqrt

In diesem Beispiel zeigen wir die Verwendung von `sqrt`, um die Quadratwurzeln aller Bahn-Inhalte eines SIMD-Werts zu berechnen.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, in das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt zur Einbindung in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabeelement `<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und binden das Objekt dabei ein.

```html hidden live-sample___simd_sqrt
<p></p>
```

```js live-sample___simd_sqrt
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `f64`-Parameter deklariert. Wir deklarieren dann einen SIMD `f64x2`-Wert und verwenden `f64x2.sqrt`, um die Quadratwurzeln aller Bahnen zu berechnen. Schließlich extrahieren wir den in Bahn `1` gespeicherten Wert des Ausgabewertes mit der Anweisung [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) und geben ihn an das DOM aus, indem wir die importierte Funktion `output()` aufrufen.

```wat live-sample___simd_sqrt
(module
  ;; Import output function
  (import "obj" "output" (func $output (param f64)))

  (func $main
    ;; load a SIMD value onto the stack
    v128.const f64x2 811.5 9

    f64x2.sqrt ;; output all square roots in a new f64x2 value
    f64x2.extract_lane 0 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_sqrt", "100%", 100)}}

`28.48683906648823` wird ausgegeben, da dies die Quadratwurzel des Wertes in Bahn 1 des Eingabewertes (`811.5`) ist.
