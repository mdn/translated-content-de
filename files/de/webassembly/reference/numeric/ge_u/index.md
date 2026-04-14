---
title: "ge_u: Wasm-Textinstruktion"
short-title: ge_u
slug: WebAssembly/Reference/Numeric/ge_u
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`ge_u`**-Instruktion, Kurzform für _greater or equal unsigned_, prüft, ob eine vorzeichenlose Ganzzahl größer oder gleich einer anderen vorzeichenlosen Ganzzahl ist.

Es gibt weitere `ge`-Instruktionen:

- [**`ge_s`**](/de/docs/WebAssembly/Reference/Numeric/ge_s) zum Vergleichen von vorzeichenbehafteten Ganzzahlen.
- [**`ge`**](/de/docs/WebAssembly/Reference/Numeric/ge) zum Vergleichen von Gleitkommazahlen.

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
  - : Der Wertetyp, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `ge_u`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
- `ge_u`
  - : Die `ge_u`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) erscheinen.

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

Für eine nicht-SIMD `ge_u` sind die Eingaben einfache numerische Werte wie `3` oder `12`.

Für eine [SIMD](/de/docs/WebAssembly/Reference/SIMD) `ge_u` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen, zum Beispiel `i32x4 2 30 86 120`. Jede Spur der Ausgabe, die auf den Stapel geschoben wird, ist eine `1` oder `0`, die anzeigt, ob die entsprechende Spur des ersten Eingabewerts größer oder gleich der entsprechenden Spur des zweiten Eingabewerts ist.

### Binäre Kodierung

| Instruktion  | Binärformat   | Beispieltext => binär       |
| ------------ | ------------- | --------------------------- |
| `i32.ge_u`   | `0x4f`        | `i32.ge_u` => `0x4f`        |
| `i64.ge_u`   | `0x5a`        | `i64.ge_u` => `0x5a`        |
| `i8x16.ge_u` | `0xfd 44:u32` | `i8x16.ge_u` => `0xfd 0x2c` |
| `i16x8.ge_u` | `0xfd 54:u32` | `i16x8.ge_u` => `0xfd 0x36` |
| `i32x4.ge_u` | `0xfd 64:u32` | `i32x4.ge_u` => `0xfd 0x40` |

## Beispiele

### SIMD `ge_u` Beispiel

In diesem Beispiel demonstrieren wir, wie `ge_u` verwendet wird, um zu testen, ob ein SIMD-Spur-Wert größer oder gleich demselben Spur-Wert in einem anderen SIMD-Wert ist.

#### JavaScript

In unserem Skript holen wir uns eine Referenz auf ein {{htmlelement("p")}}-Element, an das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt, das in Wasm importiert wird und eine einzelne Funktion enthält, die einen Wert an das Ausgabeelement `<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `i32`-Parameter hat. Dann deklarieren wir zwei SIMD `i32x4`-Werte und prüfen mit `i32x4.ge_u`, ob die Spur-Werte des ersten größer oder gleich denen des zweiten sind. Schließlich extrahieren wir den in Spur `3` gespeicherten Wert des Ausgabewerts mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Instruktion und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

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

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_ge_u", "100%", 100)}}

Das Ergebnis ist `1`, weil der in Spur `3` des ersten Eingabewerts gespeicherte Wert größer oder gleich dem in Spur `3` des zweiten Eingabewerts gespeicherten Wert ist.

## Siehe auch

- [`ge`](/de/docs/WebAssembly/Reference/Numeric/ge)
- [`ge_s`](/de/docs/WebAssembly/Reference/Numeric/ge_s)
