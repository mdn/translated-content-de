---
title: "ceil: Wasm-Textanweisung"
short-title: ceil
slug: WebAssembly/Reference/Numeric/ceil
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`ceil`**-Anweisung wird verwendet, um den Wert einer Zahl zu erhalten, der auf die nächste ganze Zahl aufgerundet wird.

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
  - : Der Typ des Werts, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `ceil`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen:
      - `f32x4`
      - `f64x2`
- `ceil`
  - : Die `ceil`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Der Eingabewert.
- `output`
  - : Der Ausgabewert.

Für ein nicht-SIMD-`ceil` sind dies grundlegende numerische Werte wie `14.3` oder `3.0`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `ceil` sind dies [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen, zum Beispiel `f32x4 1.9 2.5 0.5 12.1`. Jede Spur des Outputs, der in den Stapel geschoben wird, ist der aufgerundete Wert der entsprechenden Spur im Input.

### Binäre Kodierung

| Anweisung    | Binärformat    | Beispieltext => binär       |
| ------------ | -------------- | --------------------------- |
| `f32.ceil`   | `0x8d`         | `f32.ceil` => `0x8d`        |
| `f64.ceil`   | `0x9b`         | `f64.ceil` => `0x9b`        |
| `f32x4.ceil` | `0xfd 103:u32` | `f32x4.ceil` => `0xfd 0x67` |
| `f64x2.ceil` | `0xfd 116:u32` | `f64x2.ceil` => `0xfd 0x74` |

## Beispiele

### SIMD-`ceil`-Beispiel

In diesem Beispiel demonstrieren wir die Ausführung von `ceil` auf einem SIMD-Wert und die Ausgabe eines der Spurwerte des Ergebnisses.

#### JavaScript

In unserem Skript holen wir eine Referenz auf ein {{htmlelement("p")}}-Element, in das wir unser Ergebnis ausgeben. Dann definieren wir ein Objekt zum Importieren in Wasm, das eine einzelne Funktion enthält, die einen Wert in das `<p>`-Element ausgibt. Wir kompilieren und instanziieren unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()` und stellen sicher, dass sie einen `f64`-Parameter deklariert. Dann deklarieren wir einen SIMD-`f64x2`-Wert und verwenden `f64x2.ceil`, um jede Spur auf die nächstliegende ganze Zahl aufzurunden. Schließlich extrahieren wir den in Spur `1` des Ausgabewerts gespeicherten Wert mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Anweisung und geben ihn durch Aufrufen der importierten `output()`-Funktion in das DOM aus.

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

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_ceil", "100%", 100)}}

`2001` wird ausgegeben, da dies das Ergebnis des Aufrundens von Spur 1 des Eingabewerts (`2000.1`) auf die nächstliegende ganze Zahl ist.
