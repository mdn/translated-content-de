---
title: "max: Wasm Text-Instruktion"
short-title: max
slug: WebAssembly/Reference/Numeric/max
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`max`**-Instruktion wird verwendet, um den höheren Wert von zwei Gleitkommazahlen zu ermitteln.

{{InteractiveExample("Wat Demo: max", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    ;; load 10 and 2 onto the stack
    f32.const 10
    f32.const 2

    f32.max ;; calculate the higher number
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
value_type.max
```

- `value_type`
  - : Der Wertetyp, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `max`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Interpretationen:
      - `f32x4`
      - `f64x2`
- `max`
  - : Die `max`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) hinzugefügt werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert.

Für ein nicht-SIMD `max` sind die Eingaben grundlegende numerische Werte wie `3.0` oder `3.5`, und das `output` wird der größere von `input1` und `input2` sein.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `max` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen, beispielsweise `f32x4 2.0 30 86.9 120`. Jede Lane des Outputs, die auf den Stapel geschoben wird, ist die größere der entsprechenden Lanes in den Eingabewerten.

### Binäre Kodierung

| Instruktion | Binäres Format | Beispieltext => binär           |
| ----------- | -------------- | ------------------------------- |
| `f32.max`   | `0x97`         | `f32.max` => `0x97`             |
| `f64.max`   | `0xa5`         | `f64.max` => `0xa5`             |
| `f32x4.max` | `0xfd 233:u32` | `f32x4.max` => `0xfd 0xe9 0x01` |
| `f64x2.max` | `0xfd 245:u32` | `f64x2.max` => `0xfd 0xf5 0x01` |

## Beispiele

### SIMD `max` Beispiel

In diesem Beispiel zeigen wir, wie `max` verwendet wird, um den größeren Wert des gleichen Lane-Index aus zwei SIMD-Werten zu ermitteln.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, das wir verwenden, um unser Ergebnis auszugeben. Anschließend definieren wir ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabe-`<p>` schreibt. Wir kompilieren und instanziieren unser Wasm-Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode und importieren dabei das Objekt.

```html hidden live-sample___simd_max
<p></p>
```

```js live-sample___simd_max
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `f32`-Parameter hat. Wir deklarieren dann zwei SIMD `f32x4`-Werte und verwenden `f32x4.max`, um einen neuen `f32x4`-Wert zurückzugeben, der in jedem Fall den höheren Lane-Wert der beiden Eingaben enthält. Schließlich extrahieren wir den in Lane `3` des Ausgangswerts gespeicherten Wert mithilfe der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Instruktion und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_max
(module
  ;; Import output function
  (import "obj" "output" (func $output (param f32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const f32x4 20 0 1015 1000
    v128.const f32x4 4 38 15 108

    ;; Return a new f32x4 containing the highest lane value in each case
    f32x4.max
    f32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Das Ergebnis ist wie folgt:

{{embedlivesample("simd_max", "100%", 100)}}

Das Ergebnis ist `1000`. Dies liegt daran, dass der in Lane `3` des ersten Eingabewertes gespeicherte Wert `1000` ist und der in Lane `3` des zweiten Eingabewertes gespeicherte Wert `108`. Da `1000` größer als `108` ist, hat der neue durch die `f32x4.max`-Instruktion ausgegebene `f32x4`-Wert `1000` in Lane `3` gesetzt, den wir dann extrahieren und an das DOM ausgeben.

## Siehe auch

- [`max_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/max_s)
- [`max_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/max_u)
