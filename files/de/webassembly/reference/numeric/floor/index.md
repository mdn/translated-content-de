---
title: "floor: Wasm Text-Instruktion"
short-title: floor
slug: WebAssembly/Reference/Numeric/floor
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`floor`**-Instruktion wird verwendet, um den Wert einer Zahl auf die nächste ganze Zahl nach unten abzurunden.

`floor` unterscheidet sich von [**`trunc`**](/de/docs/WebAssembly/Reference/Numeric/trunc) bei der Verwendung mit negativen Zahlen — `floor` rundet in diesen Fällen nach unten, während `trunc` nach oben rundet.

{{InteractiveExample("Wat Demo: floor", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const -2.7 ;; load a number onto the stack
    f32.floor ;; round down
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
value_type.floor
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Instruktion angewendet wird. Die folgenden Typen unterstützen `floor`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen:
      - `f32x4`
      - `f64x2`
- `floor`
  - : Die `floor`-Instruktion. Sie muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-`v128`-Wertinterpretation.
- `output`
  - : Die Ausgabe-`v128`-Wertinterpretation.

Bei einem nicht-SIMD-`floor` sind dies grundlegende numerische Werte wie `14.3` oder `3.0`.

Bei einem [SIMD](/de/docs/WebAssembly/Reference/SIMD)-`floor` sind dies [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen, zum Beispiel `f32x4 1.9 2.5 0.5 12.1`. Jede Lane des in den Stack geschobenen Outputs ist der abgerundete Wert der entsprechenden Lane im Eingabewert.

### Binärkodierung

| Instruktion   | Binärformat    | Beispieltext => Binär        |
| ------------- | -------------- | ---------------------------- |
| `f32.floor`   | `0x8e`         | `f32.floor` => `0x8e`        |
| `f64.floor`   | `0x9c`         | `f64.floor` => `0x9c`        |
| `f32x4.floor` | `0xfd 104:u32` | `f32x4.floor` => `0xfd 0x68` |
| `f64x2.floor` | `0xfd 117:u32` | `f64x2.floor` => `0xfd 0x75` |

## Beispiele

### SIMD `floor`-Beispiel

In diesem Beispiel demonstrieren wir das Ausführen von `floor` auf einem SIMD-Wert und geben einen der Lane-Werte des Ergebnisses aus.

#### JavaScript

In unserem Skript greifen wir auf ein {{htmlelement("p")}}-Element zu, zu dem wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt zum Import in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabefeld `<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mithilfe der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir gleichzeitig das Objekt importieren.

```html hidden live-sample___simd_floor
<p></p>
```

```js live-sample___simd_floor
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

In unserem Wasm-Modul importieren wir zunächst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `f64`-Parameter hat. Dann deklarieren wir einen SIMD-`f64x2`-Wert und verwenden `f64x2.floor`, um jede Lane nach unten auf die nächste ganze Zahl zu runden. Schließlich extrahieren wir den Wert, der in Lane `0` des Ausgabewertes gespeichert ist, mithilfe der Instruktion [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane), und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_floor
(module
  ;; Import output function
  (import "obj" "output" (func $output (param f64)))

  (func $main
    ;; load a SIMD value onto the stack
    v128.const f64x2 3.9 2000.1

    f64x2.floor ;; Round each value down
    f64x2.extract_lane 0 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_floor", "100%", 100)}}

`3` wird ausgegeben, weil dies das Ergebnis des Abrundens von Lane 0 des Eingabewertes (`3.9`) auf die nächste ganze Zahl ist.
