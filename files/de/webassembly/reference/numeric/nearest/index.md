---
title: "nearest: Wasm-Textinstruktion"
short-title: nearest
slug: WebAssembly/Reference/Numeric/nearest
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`nearest`**-Instruktion wird verwendet, um den Wert einer Fließkommazahl auf die nächste ganze Zahl zu runden.

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
  - : Der Typ des Wertes, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `nearest`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Interpretationen:
      - `f32x4`
      - `f64x2`
- `nearest`
  - : Die `nearest`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Der Eingabewert.
- `output`
  - : Der Ausgabewert, der eine Fließkommazahl sein wird.

Für ein nicht-SIMD `nearest` handelt es sich um grundlegende numerische Werte wie `3.5` oder `3`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `nearest` handelt es sich um [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen, zum Beispiel `f32x4 3.5 6.0 10.1 40.9`. Jede Lane des auf den Stapel geschobenen Ausgabewertes wird der entsprechenden Lane des Eingabewertes entsprechen, gerundet auf die nächste ganze Zahl.

### Binärcodierung

| Instruktion     | Binärformat    | Beispieltext => binär               |
| --------------- | -------------- | ----------------------------------- |
| `f32.nearest`   | `0x90`         | `f32.nearest` => `0x90`             |
| `f64.nearest`   | `0x9e`         | `f64.nearest` => `0x9e`             |
| `f32x4.nearest` | `0xfd 106:u32` | `f32x4.nearest` => `0xfd 0x6a`      |
| `f64x2.nearest` | `0xfd 148:u32` | `f64x2.nearest` => `0xfd 0x94 0x01` |

## Beispiele

### SIMD Rundung auf die nächste ganze Zahl

In diesem Beispiel demonstrieren wir, wie `nearest` verwendet wird, um einen SIMD-Wert zu runden.

#### JavaScript

In unserem Skript greifen wir auf ein {{htmlelement("p")}}-Element zu, an das wir unser Ergebnis ausgeben, und definieren dann ein Objekt zur Importierung in Wasm, das eine einzelne Funktion enthält, die einen Wert bis zur Ausgabe in das `<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das Objekt im Prozess importieren.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `f32`-Parameter deklariert. Dann deklarieren wir einen SIMD `f32x4`-Wert und verwenden `f32x4.nearest`, um alle seine Lanes auf die nächste ganze Zahl zu runden. Schließlich extrahieren wir den in Lane `3` des Ausgabewertes gespeicherten Wert mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Instruktion und geben ihn durch Aufruf der importierten Funktion `output()` an das DOM aus.

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

`80` wird ausgegeben, da dies die nächste ganze Zahl zu dem Wert in Lane `3` des Eingabewertes (`80.1`) ist.
