---
title: "sub: Wasm-Textanweisung"
short-title: sub
slug: WebAssembly/Reference/Numeric/sub
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`sub`**-Anweisung, abgeleitet von _subtraction_ (Subtraktion), wird verwendet, um eine Zahl von einer anderen Zahl abzuziehen, ähnlich dem **`-`** Operator in anderen Sprachen.

{{InteractiveExample("Wat Demo: sub", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load `10` and `3` onto the stack
    i32.const 10
    i32.const 3

    i32.sub ;; subtract on number from the other
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
value_type.sub
```

- `value_type`
  - : Der Typ des Wertes, über den die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `sub`:
    - `i32`
    - `i64`
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Interpretationen:
      - `18x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
      - `f32x4`
      - `f64x2`
- `sub`
  - : Die `sub`-Anweisung. Muss stets nach dem `value_type` und einem Punkt (`.`) angegeben werden.

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

Für ein nicht-SIMD `sub` sind dies einfache numerische Werte wie `14` oder `3.1`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `sub` sind dies [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen, zum Beispiel `f32x4 9 3.8 -16 101`. Jede Lane des zum Stapel hinzugefügten Ergebnisses entspricht der Lane des zweiten Eingangs, subtrahiert von der entsprechenden Lane des ersten Eingangs.

### Binärcodierung

| Anweisung   | Binärformat    | Beispieltext => binär           |
| ----------- | -------------- | ------------------------------- |
| `i32.sub`   | `0x6b`         | `i32.sub` => `0x6b`             |
| `i64.sub`   | `0x7d`         | `i64.sub` => `0x7d`             |
| `f32.sub`   | `0x93`         | `f32.sub` => `0x93`             |
| `f64.sub`   | `0xa1`         | `f64.sub` => `0xa1`             |
| `i8x16.sub` | `0xfd 113:u32` | `i8x16.sub` => `0xfd 0x71`      |
| `i16x8.sub` | `0xfd 145:u32` | `i16x8.sub` => `0xfd 0x91 0x01` |
| `i32x4.sub` | `0xfd 177:u32` | `i32x4.sub` => `0xfd 0xb1 0x01` |
| `i64x2.sub` | `0xfd 209:u32` | `i64x2.sub` => `0xfd 0xd1 0x01` |
| `f32x4.sub` | `0xfd 229:u32` | `f32x4.sub` => `0xfd 0xe5 0x01` |
| `f64x2.sub` | `0xfd 241:u32` | `f64x2.sub` => `0xfd 0xf1 0x01` |

## Beispiele

### SIMD-Subtraktion

In diesem Beispiel demonstrieren wir die Subtraktion eines SIMD-Wertes von einem anderen und das Ausgeben eines der Lane-Werte des Ergebnisses.

#### JavaScript

In unserem Skript beziehen wir eine Referenz auf ein {{htmlelement("p")}}-Element, in das wir unser Ergebnis ausgeben, und definieren dann ein Objekt zum Importieren in Wasm, das eine einzige Funktion enthält, die einen Wert in das Ausgabe-`<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das Objekt im Prozess importieren.

```html hidden live-sample___simd_sub
<p></p>
```

```js live-sample___simd_sub
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

In unserem Wasm-Modul importieren wir zunächst die JavaScript `output()`-Funktion und stellen sicher, dass sie einen `i32`-Parameter hat. Wir deklarieren dann zwei SIMD `i16x8`-Werte und verwenden `i16x8.sub`, um den zweiten Wert vom ersten abzuziehen. Schließlich extrahieren wir den in Lane `7` des Ausgabewertes gespeicherten Wert mit der Anweisung [`extract_lane_s`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane_s) und geben ihn in das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_sub
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i16x8 0 450 18 -20 7001 834 -825 6
    v128.const i16x8 0 200 -34 40 7000 835 -825 30

    i16x8.sub ;; Subtract the second SIMD value from the first
    i16x8.extract_lane_s 7 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_sub", "100%", 100)}}

`-24` wird ausgegeben, da dies das Ergebnis der Subtraktion von Lane 7 des zweiten Wertes (`30`) von Lane 7 des ersten Wertes (`6`) ist.
