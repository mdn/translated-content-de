---
title: "lt_s: Wasm numerische Anweisung"
short-title: lt_s
slug: WebAssembly/Reference/Numeric/lt_s
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`lt_s`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric), kurz für _less than signed_, überprüft, ob eine vorzeichenbehaftete Ganzzahl kleiner als eine andere vorzeichenbehaftete Ganzzahl ist.

Es gibt weitere `lt` Anweisungen:

- [**`lt_u`**](/de/docs/WebAssembly/Reference/Numeric/lt_u) zum Vergleichen von vorzeichenlosen Ganzzahlen.
- [**`lt`**](/de/docs/WebAssembly/Reference/Numeric/lt) zum Vergleichen von Gleitkommazahlen.

{{InteractiveExample("Wat Demo: lt_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10 and 3 onto the stack
    i32.const 10
    i32.const 3

    i32.lt_s ;; check if 10 is less than 3
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
value_type.lt_s
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `lt_s`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
- `lt_s`
  - : Die `lt_s` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabe-Wert, welcher ein Ganzzahltyp sein wird.

Für eine Nicht-SIMD `lt_s` werden einfache numerische Werte wie `3` oder `12` als Eingaben verwendet. Wenn der erste Eingabewert kleiner als der zweite ist, wird `1` als Ausgabe auf den Stack gelegt, andernfalls wird `0` auf den Stack gelegt.

Für eine [SIMD](/de/docs/WebAssembly/Reference/SIMD) `lt_s` werden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen verwendet, zum Beispiel `i32x4 2 30 86 120`. Jede Spur der Ausgabe, die auf den Stack gelegt wird, ist eine `1` oder `0`, die angibt, ob die entsprechende Spur des ersten Eingabewertes kleiner als die entsprechende Spur des zweiten Eingabewertes ist.

### Binärkodierung

| Anweisung    | Binärformat    | Beispieltext => Binär            |
| ------------ | -------------- | -------------------------------- |
| `i32.lt_s`   | `0x48`         | `i32.lt_s` => `0x48`             |
| `i64.lt_s`   | `0x53`         | `i64.lt_s` => `0x53`             |
| `i8x16.lt_s` | `0xfd 37:u32`  | `i8x16.lt_s` => `0xfd 0x25`      |
| `i16x8.lt_s` | `0xfd 47:u32`  | `i16x8.lt_s` => `0xfd 0x2f`      |
| `i32x4.lt_s` | `0xfd 57:u32`  | `i32x4.lt_s` => `0xfd 0x39`      |
| `i64x2.lt_s` | `0xfd 216:u32` | `i64x2.lt_s` => `0xfd 0xd8 0x01` |

## Beispiele

### SIMD `lt_s` Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `lt_s`, um zu testen, ob ein SIMD-Spurwert kleiner als derselbe Spurwert in einem anderen SIMD-Wert ist.

#### JavaScript

In unserem Skript erhalten wir eine Referenz zu einem {{htmlelement("p")}}-Element, an das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabefeld `<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das Objekt dabei importieren.

```html hidden live-sample___simd_lt_s
<p></p>
```

```js live-sample___simd_lt_s
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `i32` Parameter hat. Dann deklarieren wir zwei SIMD `i32x4` Werte und prüfen anschließend, ob die Spurwerte des ersten Wertes kleiner sind als die des zweiten Wertes, indem wir `i32x4.lt_s` verwenden. Schließlich extrahieren wir den in Spur `3` gespeicherten Wert des Ausgabe-Wertes mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) Anweisung und geben ihn an das DOM aus, indem wir die importierte `output()` Funktion aufrufen.

```wat live-sample___simd_lt_s
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 20 12 15 102
    v128.const i32x4 20 12 15 100

    ;; check whether the first value is less than the second
    i32x4.lt_s
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_lt_s", "100%", 100)}}

Das Ergebnis ist `0`, da der in Spur `3` des ersten Eingabewertes gespeicherte Wert nicht kleiner ist als der in Spur `3` des zweiten Eingabewertes gespeicherte Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`lt`](/de/docs/WebAssembly/Reference/Numeric/lt)
- [`lt_u`](/de/docs/WebAssembly/Reference/Numeric/lt_u)
