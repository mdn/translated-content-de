---
title: "ge_s: Wasm-Zahlenanweisung"
short-title: ge_s
slug: WebAssembly/Reference/Numeric/ge_s
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`ge_s`** [Zahlenanweisung](/de/docs/WebAssembly/Reference/Numeric), kurz für _greater or equal signed_, überprüft, ob eine vorzeichenbehaftete ganze Zahl größer oder gleich einer anderen vorzeichenbehafteten ganzen Zahl ist.

Es gibt weitere `ge` Anweisungen:

- [**`ge_u`**](/de/docs/WebAssembly/Reference/Numeric/ge_u) zum Vergleichen von vorzeichenlosen ganzen Zahlen.
- [**`ge`**](/de/docs/WebAssembly/Reference/Numeric/ge) zum Vergleichen von Gleitkommazahlen.

{{InteractiveExample("Wat Demo: ge_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10 and 3 onto the stack
    i32.const 10
    i32.const 3

    i32.ge_s ;; check if 10 is greater than or equal to 3
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
value_type.ge_s
```

- `value_type`
  - : Der Werttyp, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `ge_s`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
- `ge_s`
  - : Die `ge_s` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert, der ein ganzzahliger Typ sein wird.

Für ein nicht-SIMD `ge_s` sind die Eingaben grundlegende Zahlenwerte wie `3` oder `12`. Wenn die erste Eingabe größer oder gleich der zweiten Eingabe ist, wird `1` auf den Stapel geschoben, andernfalls wird `0` auf den Stapel geschoben.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `ge_s` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen, zum Beispiel `i32x4 2 30 86 120`. Jede Spur des auf den Stapel geschobenen Ausgabewerts ist eine `1` oder `0`, was anzeigt, ob die entsprechende Spur des ersten Eingabewerts größer oder gleich der entsprechenden Spur des zweiten Eingabewerts ist.

### Binärkodierung

| Anweisung    | Binärformat    | Beispieltext => Binär            |
| ------------ | -------------- | -------------------------------- |
| `i32.ge_s`   | `0x4e`         | `i32.ge_s` => `0x4e`             |
| `i64.ge_s`   | `0x59`         | `i64.ge_s` => `0x59`             |
| `i8x16.ge_s` | `0xfd 43:u32`  | `i8x16.ge_s` => `0xfd 0x2b`      |
| `i16x8.ge_s` | `0xfd 53:u32`  | `i16x8.ge_s` => `0xfd 0x35`      |
| `i32x4.ge_s` | `0xfd 63:u32`  | `i32x4.ge_s` => `0xfd 0x3f`      |
| `i64x2.ge_s` | `0xfd 219:u32` | `i64x2.ge_s` => `0xfd 0xdb 0x01` |

## Beispiele

### SIMD `ge_s` Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `ge_s`, um zu testen, ob ein SIMD-Spurwert größer oder gleich dem gleichen Spurwert in einem anderen SIMD-Wert ist.

#### JavaScript

In unserem Skript greifen wir auf ein {{htmlelement("p")}} Element zu, an das wir unser Ergebnis ausgeben werden. Dann definieren wir ein Objekt zum Import in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabeelement `<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), während wir das Objekt importieren.

```html hidden live-sample___simd_ge_s
<p></p>
```

```js live-sample___simd_ge_s
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

In unserem Wasm-Modul importieren wir zunächst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `i32` Parameter hat. Dann deklarieren wir zwei SIMD `i32x4` Werte und überprüfen, ob die Spurwerte des ersten Wertes größer oder gleich denen des zweiten sind, indem wir `i32x4.ge_s` verwenden. Schließlich extrahieren wir den in Spur `3` gespeicherten Wert des Ausgabewerts mit der Anweisung [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) und geben ihn an das DOM aus, indem wir die importierte `output()` Funktion aufrufen.

```wat live-sample___simd_ge_s
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 20 12 15 102
    v128.const i32x4 20 12 15 100

    ;; check whether the first value is greater than or equal to the second
    i32x4.ge_s
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_ge_s", "100%", 100)}}

Das Ergebnis ist `1`, da der Wert, der in Spur `3` des ersten Eingabewertes gespeichert ist, größer oder gleich dem Wert ist, der in Spur `3` des zweiten Eingabewertes gespeichert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ge`](/de/docs/WebAssembly/Reference/Numeric/ge)
- [`ge_u`](/de/docs/WebAssembly/Reference/Numeric/ge_u)
