---
title: "sqrt: Wasm-Textinstruktion"
short-title: sqrt
slug: WebAssembly/Reference/Numeric/sqrt
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`sqrt`**-Instruktion, kurz für _square root_ (Quadratwurzel), wird verwendet, um die Quadratwurzel einer Zahl zu erhalten.

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
  - : Der Typ des Wertes, auf den die Instruktion angewendet wird. Die folgenden Typen unterstützen `sqrt`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Interpretationen:
      - `f32x4`
      - `f64x2`
- `sqrt`
  - : Die `sqrt`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Der Eingabewert.
- `output`
  - : Der Ausgabewert. Erfolgreiche Ergebnisse werden nur für positive Zahlen zurückgegeben; der Versuch, die Quadratwurzel einer negativen Zahl zu berechnen, liefert einen Ausgabewert von {{jsxref("NaN")}}.

Für eine nicht-SIMD `sqrt` sind dies grundlegende numerische Werte wie `3.5` oder `9`.

Für eine [SIMD](/de/docs/WebAssembly/Reference/SIMD) `sqrt` sind dies [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen, beispielsweise `f32x4 9 3.8 -16 101`. Jede Lane des auf den Stack geschobenen Ausgabewertes enthält die Quadratwurzel der entsprechenden Lane im Eingabewert.

### Binärcodierung

| Instruktion  | Binärformat    | Beispielt ext => binär           |
| ------------ | -------------- | -------------------------------- |
| `f32.sqrt`   | `0x91`         | `f32.sqrt` => `0x91`             |
| `f64.sqrt`   | `0x9f`         | `f64.sqrt` => `0x9f`             |
| `f32x4.sqrt` | `0xfd 227:u32` | `f32x4.sqrt` => `0xfd 0xe3 0x01` |
| `f64x2.sqrt` | `0xfd 239:u32` | `f64x2.sqrt` => `0xfd 0xef 0x01` |

## Beispiele

### Verwendung von SIMD sqrt

In diesem Beispiel demonstrieren wir die Verwendung von `sqrt`, um die Quadratwurzeln aller Inhalte einer SIMD-Wertlane zu berechnen.

#### JavaScript

In unserem Skript greifen wir auf ein {{htmlelement("p")}}-Element zu, an das wir unser Ergebnis ausgeben, und definieren dann ein Objekt zur Importierung in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabeelement `<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das Objekt im Prozess importieren.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion, wobei wir sicherstellen, dass sie einen `f64`-Parameter hat. Wir deklarieren dann einen SIMD `f64x2`-Wert und verwenden `f64x2.sqrt`, um die Quadratwurzeln aller Lanes zu berechnen. Schließlich extrahieren wir den in Lane `1` des Ausgabewertes gespeicherten Wert mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Instruktion und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

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

`28.48683906648823` wird ausgegeben, da dies die Quadratwurzel des Wertes in Lane 1 des Eingabewertes (`811.5`) ist.
