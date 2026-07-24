---
title: "lt: Wasm numerische Anweisung"
short-title: lt
slug: WebAssembly/Reference/Numeric/lt
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`lt`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric), kurz für _less than_, prüft, ob eine Gleitkommazahl kleiner ist als eine andere Gleitkommazahl.

Ganzzahltypen haben separate signierte (signed) ([**`lt_s`**](/de/docs/WebAssembly/Reference/Numeric/lt_s)) und unsignierte (unsigned) ([**`lt_u`**](/de/docs/WebAssembly/Reference/Numeric/lt_u)) Anweisungen.

{{InteractiveExample("Wat Demo: lt", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10.1 and 3.5 onto the stack
    f32.const 10.1
    f32.const 3.5

    f32.lt ;; check if 10.1 is less than 3.5
    call $log_bool ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";

function log_bool(value) {
  console.log(Boolean(value));
  // Expected output: false
}

await WebAssembly.instantiateStreaming(fetch(url), {
  env: { log_bool },
});
```

## Syntax

```plain
value_type.lt
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `lt`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen:
      - `f32x4`
      - `f64x2`
- `lt`
  - : Die `lt`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert, der ein Ganzzahltyp sein wird.

Für ein nicht-SIMD `lt` sind die Eingaben grundlegende numerische Werte wie `3.0` oder `3.5`. Wenn die erste Eingabe kleiner als die zweite Eingabe ist, wird `1` auf den Stack als Ausgabe geschoben, andernfalls `0`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `lt` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Werteinterpretationen, zum Beispiel `f32x4 2.0 30 86.9 120`. Jede Lane der Ausgabe, die auf den Stack geschoben wird, ist eine `1` oder `0`, die angibt, ob die entsprechende Lane des ersten Eingabewertes kleiner ist als die entsprechende Lane des zweiten Eingabewertes.

### Binäre Codierung

| Anweisung  | Binärformat   | Beispieltext => binär     |
| ---------- | ------------- | ------------------------- |
| `f32.lt`   | `0x5d`        | `f32.lt` => `0x5d`        |
| `f64.lt`   | `0x63`        | `f64.lt` => `0x63`        |
| `f32x4.lt` | `0xfd 67:u32` | `f32x4.lt` => `0xfd 0x43` |
| `f64x2.lt` | `0xfd 73:u32` | `f64x2.lt` => `0xfd 0x49` |

## Beispiele

### SIMD `lt` Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `lt`, um zu testen, ob ein SIMD-Lane-Wert geringer ist als derselbe Lane-Wert in einem anderen SIMD-Wert.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, um unser Ergebnis auszugeben, dann definieren wir ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabe-`<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das Objekt importieren.

```html hidden live-sample___simd_lt
<p></p>
```

```js live-sample___simd_lt
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

In unserem Wasm-Modul importieren wir zunächst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `i32`-Parameter deklariert. Wir deklarieren dann zwei SIMD `f32x4`-Werte und prüfen, ob die Lane-Werte des ersten kleiner sind als die des zweiten mit `f32x4.lt`. Schließlich extrahieren wir den Wert, der in Lane `3` des Ausgabewertes gespeichert ist, mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) Anweisung und geben ihn an den DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_lt
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const f32x4 20 12 15 102
    v128.const f32x4 20 12 15 100

    ;; check whether the first value is less than the second
    f32x4.lt
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_lt", "100%", 100)}}

Das Ergebnis ist `0`, weil der in Lane `3` des ersten Eingabewertes gespeicherte Wert nicht kleiner ist als der in Lane `3` des zweiten Eingabewertes gespeicherte Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`lt_s`](/de/docs/WebAssembly/Reference/Numeric/lt_s)
- [`lt_u`](/de/docs/WebAssembly/Reference/Numeric/lt_u)
