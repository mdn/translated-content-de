---
title: "ge_u: Wasm nummerische Anweisung"
short-title: ge_u
slug: WebAssembly/Reference/Numeric/ge_u
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`ge_u`**-[numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric), kurz für _greater or equal unsigned_, überprüft, ob eine vorzeichenlose Ganzzahl größer oder gleich einer anderen vorzeichenlosen Ganzzahl ist.

Es gibt weitere `ge`-Anweisungen:

- [**`ge_s`**](/de/docs/WebAssembly/Reference/Numeric/ge_s) zum Vergleichen von Ganzzahlen mit Vorzeichen.
- [**`ge`**](/de/docs/WebAssembly/Reference/Numeric/ge) zum Vergleichen von Fließkommazahlen.

{{InteractiveExample("Wat Demo: ge_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10 and 3 onto the stack
    i32.const 10
    i32.const 3

    i32.ge_u ;; check if 10 is greater than or equal to 3
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
value_type.ge_u
```

- `value_type`
  - : Der Typ des Wertes, auf den die Anweisung angewendet wird. Die folgenden Typen unterstützen `ge_u`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
- `ge_u`
  - : Die `ge_u`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

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

Für ein nicht-SIMD `ge_u` sind die Eingaben grundlegende nummerische Werte wie `3` oder `12`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `ge_u` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen, zum Beispiel `i32x4 2 30 86 120`. Jede Lane des zur Stapel geschobenen Outputs ist eine `1` oder `0`, die angibt, ob die entsprechende Lane des ersten Eingabewertes größer oder gleich der entsprechenden Lane des zweiten Eingabewertes ist.

### Binärcodierung

| Anweisung    | Binärformat   | Beispieltext => binär       |
| ------------ | ------------- | --------------------------- |
| `i32.ge_u`   | `0x4f`        | `i32.ge_u` => `0x4f`        |
| `i64.ge_u`   | `0x5a`        | `i64.ge_u` => `0x5a`        |
| `i8x16.ge_u` | `0xfd 44:u32` | `i8x16.ge_u` => `0xfd 0x2c` |
| `i16x8.ge_u` | `0xfd 54:u32` | `i16x8.ge_u` => `0xfd 0x36` |
| `i32x4.ge_u` | `0xfd 64:u32` | `i32x4.ge_u` => `0xfd 0x40` |

## Beispiele

### SIMD `ge_u` Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `ge_u`, um zu testen, ob ein SIMD-Lane-Wert größer oder gleich dem gleichen Lane-Wert in einem anderen SIMD-Wert ist.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, in das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabe-`<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

```html hidden live-sample___simd_ge_u
<p></p>
```

```js live-sample___simd_ge_u
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie über einen `i32`-Parameter verfügt. Dann deklarieren wir zwei SIMD-`i32x4`-Werte und prüfen, ob die Lane-Werte des ersten größer oder gleich denjenigen des zweiten sind, indem wir `i32x4.ge_u` verwenden. Schließlich extrahieren wir den im Lane `3` des Ausgabewertes gespeicherten Wert mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) Anweisung und geben ihn durch Aufruf der importierten `output()`-Funktion an das DOM aus.

```wat live-sample___simd_ge_u
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 20 12 15 102
    v128.const i32x4 20 12 15 100

    ;; check whether the first value is greater than or equal to the second
    i32x4.ge_u
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe lautet wie folgt:

{{embedlivesample("simd_ge_u", "100%", 100)}}

Das Ergebnis ist `1`, da der Wert im Lane `3` des ersten Eingabewertes größer oder gleich dem Wert im Lane `3` des zweiten Eingabewertes ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ge`](/de/docs/WebAssembly/Reference/Numeric/ge)
- [`ge_s`](/de/docs/WebAssembly/Reference/Numeric/ge_s)
