---
title: "trunc: Wasm-Textanweisung"
short-title: trunc
slug: WebAssembly/Reference/Numeric/trunc
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`trunc`**-Anweisung, abgekürzt für _truncate_, wird verwendet, um den Wert einer Fließkommazahl ohne ihren Nachkommateil zu erhalten.

`trunc` unterscheidet sich von [**`floor`**](/de/docs/WebAssembly/Reference/Numeric/floor) bei negativen Zahlen — `floor` wird in diesen Fällen abgerundet, während `trunc` aufrundet.

Es gibt separate Trunk-Anweisungen, die den Nachkommateil einer Fließkommazahl abschneiden und in eine Ganzzahl umwandeln:

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
  - : Der Werttyp, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `trunc`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Interpretationen:
      - `f32x4`
      - `f64x2`
- `trunc`
  - : Die `trunc`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Der Eingabewert.
- `output`
  - : Der Ausgabewert, der ein Fließkommatyp sein wird.

Für ein nicht-SIMD-`trunc` sind dies einfache numerische Werte wie `14.3` oder `3.0`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD)-`trunc` sind dies [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen, zum Beispiel `i32x4 100.5 6.0 7.8 83.1`. Jede Lane des Outputs, die auf den Stack geschoben wird, ist gleich der entsprechenden Lane des Eingabewertes ohne den Nachkommateil.

### Binärcodierung

| Anweisung     | Binärformat    | Beispieltext => binär        |
| ------------- | -------------- | ---------------------------- |
| `f32.trunc`   | `0x8f`         | `f32.trunc` => `0x8f`        |
| `f64.trunc`   | `0x9d`         | `f64.trunc` => `0x9d`        |
| `f32x4.trunc` | `0xfd 105:u32` | `f32x4.trunc` => `0xfd 0x69` |
| `f64x2.trunc` | `0xfd 122:u32` | `f64x2.trunc` => `0xfd 0x7a` |

## Beispiele

### SIMD-`trunc`-Beispiel

In diesem Beispiel demonstrieren wir die Ausführung von `trunc` auf einem SIMD-Wert und geben einen der Lane-Werte des Ergebnisses aus.

#### JavaScript

In unserem Skript greifen wir auf ein {{htmlelement("p")}}-Element zu, an das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt zur Einfuhr in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabe-`<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode, importieren dabei das Objekt.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion und achten darauf, dass sie einen `f64`-Parameter hat. Dann deklarieren wir einen SIMD-`f64x2`-Wert und verwenden `f64x2.trunc`, um den Nachkommateil jeder Lane zu entfernen. Schließlich extrahieren wir den in Lane `1` gespeicherten Wert des Ausgabewertes mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Anweisung und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

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

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_trunc", "100%", 100)}}

`2000` wird ausgegeben, da dies das Ergebnis des Entfernens des Nachkommateils von Lane 1 des Eingabewertes (`2000.1`) ist.

## Siehe auch

- [`trunc_f32_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
- [`trunc_f64_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)
