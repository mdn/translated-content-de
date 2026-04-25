---
title: "floor: Wasm-Textanweisung"
short-title: floor
slug: WebAssembly/Reference/Numeric/floor
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`floor`**-Anweisung wird verwendet, um den Wert einer Zahl auf die nächste ganze Zahl abzurunden.

`floor` unterscheidet sich von [**`trunc`**](/de/docs/WebAssembly/Reference/Numeric/trunc), wenn es auf negative Zahlen angewendet wird — `floor` wird in solchen Fällen abrunden, während `trunc` aufrundet.

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
  - : Der Typ des Wertes, auf den die Anweisung angewendet wird. Die folgenden Typen unterstützen `floor`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Interpretationen:
      - `f32x4`
      - `f64x2`
- `floor`
  - : Die `floor`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingeschlossen werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-`v128`-Wert-Interpretation.
- `output`
  - : Die Ausgabe-`v128`-Wert-Interpretation.

Für eine nicht-SIMD-`floor` sind dies grundlegende numerische Werte wie `14.3` oder `3.0`.

Für eine [SIMD](/de/docs/WebAssembly/Reference/SIMD)-`floor` sind dies [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wert-Interpretationen, zum Beispiel `f32x4 1.9 2.5 0.5 12.1`. Jede Spur der Ausgabe, die auf den Stack geschoben wird, ist der abgerundete Wert der entsprechenden Spur im Eingabewert.

### Binäre Kodierung

| Anweisung     | Binärformat    | Beispieltext => binär        |
| ------------- | -------------- | ---------------------------- |
| `f32.floor`   | `0x8e`         | `f32.floor` => `0x8e`        |
| `f64.floor`   | `0x9c`         | `f64.floor` => `0x9c`        |
| `f32x4.floor` | `0xfd 104:u32` | `f32x4.floor` => `0xfd 0x68` |
| `f64x2.floor` | `0xfd 117:u32` | `f64x2.floor` => `0xfd 0x75` |

## Beispiele

### Beispiel für SIMD `floor`

In diesem Beispiel demonstrieren wir das Ausführen von `floor` auf einen SIMD-Wert und geben einen der Spurwerte des Ergebnisses aus.

#### JavaScript

In unserem Skript greifen wir auf ein {{htmlelement("p")}}-Element zu, in das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt zum Importieren in Wasm, das eine einzige Funktion enthält, die einen Wert an das Ausgabeelement `<p>` schreibt. Dann kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das Objekt importieren.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `f64`-Parameter hat. Wir deklarieren dann einen SIMD-`f64x2`-Wert und verwenden `f64x2.floor`, um jede Spur auf die nächstgelegene ganze Zahl abzurunden. Schließlich extrahieren wir den in Spur `0` des Ausgabewertes gespeicherten Wert mit der Anweisung [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane), und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

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

`3` wird ausgegeben, da dies das Ergebnis des Abrundens von Spur 0 des Eingabewertes (`3.9`) zur nächsten ganzen Zahl ist.
