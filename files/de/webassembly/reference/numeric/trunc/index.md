---
title: "trunc: Wasm numerische Anweisung"
short-title: trunc
slug: WebAssembly/Reference/Numeric/trunc
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`trunc`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric), kurz für _truncate_, wird verwendet, um den Wert einer Gleitkommazahl ohne ihren Bruchteil zu erhalten.

`trunc` unterscheidet sich von [**`floor`**](/de/docs/WebAssembly/Reference/Numeric/floor), wenn es auf negative Zahlen angewendet wird — `floor` wird in diesen Fällen abrunden, während `trunc` aufrunden wird.

Es gibt separate Truncate-Anweisungen, die den Bruchteil einer Gleitkommazahl abschneiden und in eine Ganzzahl umwandeln:

- [`trunc_f32_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
- [`trunc_f64_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)

{{InteractiveExample("Wat Demo: trunc", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const -2.7 ;; load a number onto the stack
    f32.trunc ;; discard everything after the decimal point
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
value_type.trunc
```

- `value_type`
  - : Der Typ des Wertes, auf den die Anweisung angewendet wird. Die folgenden Typen unterstützen `trunc`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen:
      - `f32x4`
      - `f64x2`
- `trunc`
  - : Die `trunc`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Der Eingabewert.
- `output`
  - : Der Ausgabewert, der ein Gleitkommatyp ist.

Für ein nicht-SIMD `trunc` werden dies grundlegende numerische Werte wie `14.3` oder `3.0` sein.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `trunc` werden dies [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen sein, zum Beispiel `i32x4 100.5 6.0 7.8 83.1`. Jede Spur des Ausgabewerts, der auf den Stack geschoben wird, entspricht der entsprechenden Spur des Eingabewerts ohne den Bruchteil.

### Binärcodierung

| Anweisung     | Binärformat    | Beispieltext => binär        |
| ------------- | -------------- | ---------------------------- |
| `f32.trunc`   | `0x8f`         | `f32.trunc` => `0x8f`        |
| `f64.trunc`   | `0x9d`         | `f64.trunc` => `0x9d`        |
| `f32x4.trunc` | `0xfd 105:u32` | `f32x4.trunc` => `0xfd 0x69` |
| `f64x2.trunc` | `0xfd 122:u32` | `f64x2.trunc` => `0xfd 0x7a` |

## Beispiele

### SIMD `trunc` Beispiel

In diesem Beispiel demonstrieren wir das Ausführen von `trunc` auf einem SIMD-Wert und das Ausgeben eines der Spurwerte des Ergebnisses.

#### JavaScript

In unserem Skript holen wir uns eine Referenz auf ein {{htmlelement("p")}}-Element, in das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt, das in Wasm importiert wird und eine einzelne Funktion enthält, die einen Wert in das Ausgabefeld `<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

```html hidden live-sample___simd_trunc
<p></p>
```

```js live-sample___simd_trunc
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript `output()`-Funktion und stellen sicher, dass sie einen `f64`-Parameter deklariert. Dann deklarieren wir einen SIMD `f64x2`-Wert und verwenden `f64x2.trunc`, um den Bruchteil jeder Spur zu entfernen. Schließlich extrahieren wir den in Spur `1` des Ausgabewertes gespeicherten Wert mit der Anweisung [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_trunc
(module
  ;; Import output function
  (import "obj" "output" (func $output (param f64)))

  (func $main
    ;; load a SIMD value onto the stack
    v128.const f64x2 3.9 2000.1

    f64x2.trunc ;; truncate each value
    f64x2.extract_lane 1 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe sieht wie folgt aus:

{{embedlivesample("simd_trunc", "100%", 100)}}

`2000` wird ausgegeben, weil dies das Ergebnis des Entfernens des Bruchteils aus Spur 1 des Eingabewertes (`2000.1`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`trunc_f32_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
- [`trunc_f64_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)
