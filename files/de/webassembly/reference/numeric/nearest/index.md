---
title: "nearest: Wasm numerische Anweisung"
short-title: nearest
slug: WebAssembly/Reference/Numeric/nearest
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`nearest`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) wird verwendet, um den Wert einer Gleitkommazahl auf die nächste ganze Zahl zu runden.

{{InteractiveExample("Wat Demo: nearest", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const 2.7 ;; load a number onto the stack
    f32.nearest ;; round to the nearest integer
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
value_type.nearest
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `nearest`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen:
      - `f32x4`
      - `f64x2`
- `nearest`
  - : Die `nearest`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Der Eingabewert.
- `output`
  - : Der Ausgabewert, der eine Gleitkommazahl sein wird.

Für eine nicht-SIMD `nearest` sind dies grundlegende numerische Werte wie `3.5` oder `3`.

Für eine [SIMD](/de/docs/WebAssembly/Reference/SIMD) `nearest` sind dies [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Werteinterpretationen, zum Beispiel `f32x4 3.5 6.0 10.1 40.9`. Jede Lane des Outputs, der auf den Stack geschoben wird, entspricht der entsprechenden Lane des Eingabewertes, gerundet auf die nächste ganze Zahl.

### Binärkodierung

| Anweisung       | Binäre Format  | Beispieltext => binär               |
| --------------- | -------------- | ----------------------------------- |
| `f32.nearest`   | `0x90`         | `f32.nearest` => `0x90`             |
| `f64.nearest`   | `0x9e`         | `f64.nearest` => `0x9e`             |
| `f32x4.nearest` | `0xfd 106:u32` | `f32x4.nearest` => `0xfd 0x6a`      |
| `f64x2.nearest` | `0xfd 148:u32` | `f64x2.nearest` => `0xfd 0x94 0x01` |

## Beispiele

### SIMD nearest Rundung

In diesem Beispiel zeigen wir die Verwendung von `nearest`, um einen SIMD-Wert zu runden.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}} Element, zu dem wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt, das eine einzelne Funktion enthält und in Wasm importiert wird, um einen Wert an das Ausgabe-`<p>` auszugeben. Dann kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das Objekt im Prozess importieren.

```html hidden live-sample___simd_nearest
<p></p>
```

```js live-sample___simd_nearest
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `f32` Parameter hat. Dann deklarieren wir einen SIMD `f32x4` Wert und verwenden `f32x4.nearest`, um alle Lanes auf die nächste ganze Zahl zu runden. Schließlich extrahieren wir den Wert, der in Lane `3` des Ausgabewerts gespeichert ist, mit der Anweisung [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) und geben ihn an das DOM aus, indem wir die importierte `output()` Funktion aufrufen.

```wat live-sample___simd_nearest
(module
  ;; Import output function
  (import "obj" "output" (func $output (param f32)))

  (func $main
    ;; load a SIMD value onto the stack
    v128.const f32x4 400.3 28.5 79.9 80.1

    f32x4.nearest ;; convert lanes to nearest integer
    f32x4.extract_lane 3 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_nearest", "100%", 100)}}

`80` wird ausgegeben, da es die nächste ganze Zahl zu dem Wert in Lane `3` des Eingabewertes (`80.1`) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
