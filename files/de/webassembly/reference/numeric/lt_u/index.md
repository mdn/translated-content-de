---
title: "lt_u: Wasm-Text-Instruktion"
short-title: lt_u
slug: WebAssembly/Reference/Numeric/lt_u
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`lt_u`**-Instruktion, abgekürzt für _less than unsigned_, überprüft, ob eine vorzeichenlose Ganzzahl kleiner als eine andere vorzeichenlose Ganzzahl ist.

Es gibt andere `lt`-Instruktionen:

- [**`lt_s`**](/de/docs/WebAssembly/Reference/Numeric/lt_s) zum Vergleichen von vorzeichenbehafteten Ganzzahlen.
- [**`lt`**](/de/docs/WebAssembly/Reference/Numeric/lt) zum Vergleichen von Gleitkommazahlen.

{{InteractiveExample("Wat Demo: lt_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10 and 3 onto the stack
    i32.const 10
    i32.const 3

    i32.lt_u ;; check if 10 is greater than 3
    call $log_bool ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";

function log_bool(value) {
  console.log(Boolean(value));
  // Expected output: true
}

await WebAssembly.instantiateStreaming(fetch(url), {
  env: { log_bool },
});
```

## Syntax

```plain
value_type.lt_u
```

- `value_type`
  - : Der Werttyp, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `lt_u`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
- `lt_u`
  - : Die `lt_u`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert, der ein Ganzzahltyp sein wird.

Für ein nicht-SIMD `lt_u` werden die Eingaben grundlegende numerische Werte wie `3` oder `12` sein. Wenn die erste Eingabe kleiner als die zweite Eingabe ist, wird `1` als Ausgabe auf den Stapel geschoben, andernfalls wird `0` auf den Stapel geschoben.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `lt_u` werden die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen sein, beispielsweise `i32x4 2 30 86 120`. Jedes Lane der Ausgabe, die auf den Stapel geschoben wird, ist eine `1` oder `0`, die angibt, ob das entsprechende Lane des ersten Eingabewerts kleiner als das entsprechende Lane des zweiten Eingabewerts ist.

### Binärcodierung

| Instruktion  | Binärformat   | Beispieltext => binär       |
| ------------ | ------------- | --------------------------- |
| `i32.lt_u`   | `0x49`        | `i32.lt_u` => `0x49`        |
| `i64.lt_u`   | `0x54`        | `i64.lt_u` => `0x54`        |
| `i8x16.lt_u` | `0xfd 38:u32` | `i8x16.lt_u` => `0xfd 0x26` |
| `i16x8.lt_u` | `0xfd 48:u32` | `i16x8.lt_u` => `0xfd 0x30` |
| `i32x4.lt_u` | `0xfd 58:u32` | `i32x4.lt_u` => `0xfd 0x3a` |

## Beispiele

### SIMD `lt_u`-Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `lt_u`, um zu testen, ob ein SIMD Lane-Wert kleiner als derselbe Lane-Wert in einem anderen SIMD-Wert ist.

#### JavaScript

In unserem Skript holen wir uns einen Verweis auf ein {{htmlelement("p")}}-Element, in das wir unser Ergebnis ausgeben werden, definieren dann ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabeelement `<p>` schreibt. Wir kompilen und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

```html hidden live-sample___simd_lt_u
<p></p>
```

```js live-sample___simd_lt_u
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `i32`-Parameter hat. Wir deklarieren dann zwei SIMD `i32x4`-Werte und überprüfen dann, ob die Lane-Werte des ersten Werts kleiner als die des zweiten Werts sind, indem wir `i32x4.lt_u` verwenden. Schließlich extrahieren wir den Wert, der in Lane `3` des Ausgabewerts gespeichert ist, mit der Instruktion [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_lt_u
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 20 12 15 102
    v128.const i32x4 20 12 15 100

    ;; check whether the first value is less than the second
    i32x4.lt_u
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_lt_u", "100%", 100)}}

Das Ergebnis ist `0`, weil der in Lane `3` des ersten Eingabewerts gespeicherte Wert nicht kleiner ist als der in Lane `3` des zweiten Eingabewerts gespeicherte Wert.

## Siehe auch

- [`lt`](/de/docs/WebAssembly/Reference/Numeric/lt)
- [`lt_s`](/de/docs/WebAssembly/Reference/Numeric/lt_s)
