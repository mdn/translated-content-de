---
title: "gt_u: Wasm numerische Anweisung"
short-title: gt_u
slug: WebAssembly/Reference/Numeric/gt_u
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`gt_u`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric), Abkürzung für _greater than unsigned_ (größer als ohne Vorzeichen), überprüft, ob eine Ganzzahl ohne Vorzeichen größer ist als eine andere Ganzzahl ohne Vorzeichen.

Es gibt andere `gt`-Anweisungen:

- [**`gt_s`**](/de/docs/WebAssembly/Reference/Numeric/gt_s) für den Vergleich von Ganzzahlen mit Vorzeichen.
- [**`gt`**](/de/docs/WebAssembly/Reference/Numeric/gt) für den Vergleich von Fließkommazahlen.

{{InteractiveExample("Wat Demo: gt_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10 and 3 onto the stack
    i32.const 10
    i32.const 3

    i32.gt_u ;; check if 10 is greater than 3
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
value_type.gt_u
```

- `value_type`
  - : Der Wertetyp, auf den die Anweisung angewendet wird. Die folgenden Typen unterstützen `gt_u`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
- `gt_u`
  - : Die `gt_u`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) stehen.

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

Für eine nicht-SIMD `gt_u`-Anweisung sind die Eingaben einfache Zahlenwerte wie `3` oder `12`. Wenn der erste Eingabewert größer als der zweite ist, wird `1` als Ausgabe auf den Stapel gesetzt, andernfalls `0`.

Für eine [SIMD](/de/docs/WebAssembly/Reference/SIMD) `gt_u`-Anweisung sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen, zum Beispiel `i32x4 2 30 86 120`. Jede Spur der Ausgabe, die auf den Stapel gesetzt wird, ist `1` oder `0`, was anzeigt, ob die entsprechende Spur des ersten Eingabewerts größer ist als die entsprechende Spur des zweiten Eingabewerts.

### Binär-Codierung

| Anweisung    | Binärformat   | Beispieltext => binär       |
| ------------ | ------------- | --------------------------- |
| `i32.gt_u`   | `0x4b`        | `i32.gt_u` => `0x4b`        |
| `i64.gt_u`   | `0x56`        | `i64.gt_u` => `0x56`        |
| `i8x16.gt_u` | `0xfd 40:u32` | `i8x16.gt_u` => `0xfd 0x28` |
| `i16x8.gt_u` | `0xfd 50:u32` | `i16x8.gt_u` => `0xfd 0x32` |
| `i32x4.gt_u` | `0xfd 60:u32` | `i32x4.gt_u` => `0xfd 0x3c` |

## Beispiele

### SIMD `gt_u` Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `gt_u`, um zu testen, ob ein SIMD-Spurwert größer ist als derselbe Spurwert in einem anderen SIMD-Wert.

#### JavaScript

In unserem Skript holen wir uns eine Referenz zu einem {{htmlelement("p")}}-Element, an das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabe-`<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das Objekt im Prozess importieren.

```html hidden live-sample___simd_gt_u
<p></p>
```

```js live-sample___simd_gt_u
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion und stellen sicher, dass sie einen `i32`-Parameter deklariert. Wir deklarieren dann zwei SIMD `i32x4`-Werte und prüfen, ob die Spurwerte des ersten größer sind als die des zweiten mit `i32x4.gt_u`. Schließlich extrahieren wir den Wert, der in Spur `3` des Ausgabe-Wertes gespeichert ist, mithilfe der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) Anweisung, und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_gt_u
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 20 12 15 102
    v128.const i32x4 20 12 15 100

    ;; check whether the first value is greater than the second
    i32x4.gt_u
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_gt_u", "100%", 100)}}

Das Ergebnis ist `1`, weil der Wert, der in Spur `3` des ersten Eingabewertes gespeichert ist, größer ist als der Wert, der in Spur `3` des zweiten Eingabewertes gespeichert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`gt`](/de/docs/WebAssembly/Reference/Numeric/gt)
- [`gt_s`](/de/docs/WebAssembly/Reference/Numeric/gt_s)
