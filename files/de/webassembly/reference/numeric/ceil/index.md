---
title: "ceil: Wasm numerische Anweisung"
short-title: ceil
slug: WebAssembly/Reference/Numeric/ceil
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`ceil`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) wird verwendet, um den Wert einer Zahl auf die nächste ganze Zahl aufzurunden.

{{InteractiveExample("Wat Demo: ceil", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const 2.7 ;; load a number onto the stack
    f32.ceil ;; round up
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
value_type.ceil
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `ceil`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen:
      - `f32x4`
      - `f64x2`
- `ceil`
  - : Die `ceil` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Der Eingabewert.
- `output`
  - : Der Ausgabewert.

Bei einem nicht-SIMD `ceil` sind dies grundlegende numerische Werte wie `14.3` oder `3.0`.

Bei einem [SIMD](/de/docs/WebAssembly/Reference/SIMD) `ceil` sind dies [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen, zum Beispiel `f32x4 1.9 2.5 0.5 12.1`. Jede Spur des Outputs, die auf den Stapel geschoben wird, ist der aufgerundete Wert der entsprechenden Spur im Input.

### Binäre Codierung

| Anweisung    | Binärformat    | Beispieltext => binär       |
| ------------ | -------------- | --------------------------- |
| `f32.ceil`   | `0x8d`         | `f32.ceil` => `0x8d`        |
| `f64.ceil`   | `0x9b`         | `f64.ceil` => `0x9b`        |
| `f32x4.ceil` | `0xfd 103:u32` | `f32x4.ceil` => `0xfd 0x67` |
| `f64x2.ceil` | `0xfd 116:u32` | `f64x2.ceil` => `0xfd 0x74` |

## Beispiele

### SIMD `ceil` Beispiel

In diesem Beispiel demonstrieren wir die Ausführung von `ceil` auf einem SIMD-Wert und geben einen der Spurwerte des Ergebnisses aus.

#### JavaScript

In unserem Skript greifen wir auf ein {{htmlelement("p")}}-Element zu, in das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabeelement `<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das Objekt im Prozess importieren.

```html hidden live-sample___simd_ceil
<p></p>
```

```js live-sample___simd_ceil
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `f64`-Parameter hat. Dann deklarieren wir einen SIMD `f64x2`-Wert und verwenden `f64x2.ceil`, um jede Spur auf die nächste ganze Zahl aufzurunden. Schließlich extrahieren wir den in Spur `1` gespeicherten Wert des Outputs mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) Anweisung und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_ceil
(module
  ;; Import output function
  (import "obj" "output" (func $output (param f64)))

  (func $main
    ;; load a SIMD value onto the stack
    v128.const f64x2 3.9 2000.1

    f64x2.ceil ;; round up each value
    f64x2.extract_lane 1 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Ergebnis

Der Output ist wie folgt:

{{embedlivesample("simd_ceil", "100%", 100)}}

`2001` wird ausgegeben, weil dies das Ergebnis des Aufrundens der Spur 1 des Eingabewertes (`2000.1`) auf die nächste ganze Zahl ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
