---
title: "floor: Wasm Anweisungen für numerische Operationen"
short-title: floor
slug: WebAssembly/Reference/Numeric/floor
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`floor`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) wird verwendet, um den Wert einer Zahl abzurufen, der auf die nächste ganze Zahl abgerundet wurde.

`floor` unterscheidet sich von [**`trunc`**](/de/docs/WebAssembly/Reference/Numeric/trunc), wenn es bei negativen Zahlen verwendet wird — `floor` wird in diesen Fällen abrunden, während `trunc` aufrundet.

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
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `floor`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen:
      - `f32x4`
      - `f64x2`
- `floor`
  - : Die `floor` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-Interpretation des `v128` Wertes.
- `output`
  - : Die Ausgabe-Interpretation des `v128` Wertes.

Für ein nicht-SIMD `floor` sind dies grundlegende numerische Werte wie `14.3` oder `3.0`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `floor` sind dies [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen, zum Beispiel `f32x4 1.9 2.5 0.5 12.1`. Jeder Lane der Ausgabe, die in den Stack geschoben wird, ist der abgerundete Wert des entsprechenden Lanes im Eingabewert.

### Binärcodierung

| Anweisung     | Binärformat    | Beispieltext => binär        |
| ------------- | -------------- | ---------------------------- |
| `f32.floor`   | `0x8e`         | `f32.floor` => `0x8e`        |
| `f64.floor`   | `0x9c`         | `f64.floor` => `0x9c`        |
| `f32x4.floor` | `0xfd 104:u32` | `f32x4.floor` => `0xfd 0x68` |
| `f64x2.floor` | `0xfd 117:u32` | `f64x2.floor` => `0xfd 0x75` |

## Beispiele

### SIMD `floor` Beispiel

In diesem Beispiel demonstrieren wir, wie `floor` auf einen SIMD-Wert angewendet wird und geben einen der Lane-Werte des Ergebnisses aus.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, in das wir unser Ergebnis ausgeben werden. Dann definieren wir ein Objekt zum Import in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabe-`<p>` schreibt. Wir kompilieren und instanziieren unser Wasm-Modul mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode, wobei wir das Objekt im Prozess importieren.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript `output()` Funktion und stellen sicher, dass sie einen `f64` Parameter hat. Dann deklarieren wir einen SIMD `f64x2` Wert und verwenden `f64x2.floor`, um jeden Lane auf die nächste ganze Zahl abzurunden. Schließlich extrahieren wir den im Lane `0` des Ausgabewertes gespeicherten Wert mithilfe der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) Anweisung und geben ihn über den Aufruf der importierten `output()` Funktion an das DOM aus.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
