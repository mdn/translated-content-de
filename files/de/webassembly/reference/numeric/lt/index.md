---
title: "lt: Wasm Textanweisung"
short-title: lt
slug: WebAssembly/Reference/Numeric/lt
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`lt`**-Anweisung, kurz für _less than_, überprüft, ob eine Fließkommazahl kleiner ist als eine andere Fließkommazahl.

Ganzzahltypen haben separate Anweisungen für kleiner als vorzeichenbehaftet ([**`lt_s`**](/de/docs/WebAssembly/Reference/Numeric/lt_s)) und vorzeichenlos ([**`lt_u`**](/de/docs/WebAssembly/Reference/Numeric/lt_u)).

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
  - : Der Wertetyp, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `lt`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Interpretationen:
      - `f32x4`
      - `f64x2`
- `lt`
  - : Die `lt`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) stehen.

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

Bei einem Nicht-SIMD `lt` sind die Eingaben einfache numerische Werte wie `3.0` oder `3.5`. Wenn der erste Eingabewert kleiner als der zweite ist, wird `1` als Ausgabe auf den Stapel gelegt, andernfalls wird `0` auf den Stapel gelegt.

Bei einem [SIMD](/de/docs/WebAssembly/Reference/SIMD) `lt` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen, zum Beispiel `f32x4 2.0 30 86.9 120`. Jede Lane der Ausgabe, die auf den Stapel gelegt wird, ist eine `1` oder `0`, je nachdem ob die entsprechende Lane des ersten Eingabewerts kleiner als die entsprechende Lane des zweiten Eingabewerts ist.

### Binärcode-Kodierung

| Anweisung  | Binärformat   | Beispiel Text => binär    |
| ---------- | ------------- | ------------------------- |
| `f32.lt`   | `0x5d`        | `f32.lt` => `0x5d`        |
| `f64.lt`   | `0x63`        | `f64.lt` => `0x63`        |
| `f32x4.lt` | `0xfd 67:u32` | `f32x4.lt` => `0xfd 0x43` |
| `f64x2.lt` | `0xfd 73:u32` | `f64x2.lt` => `0xfd 0x49` |

## Beispiele

### SIMD `lt` Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `lt`, um zu testen, ob ein SIMD-Lanewert kleiner ist als derselbe Lanewert in einem anderen SIMD-Wert.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, an das wir unser Ergebnis ausgeben, und definieren dann ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert an das `<p>` ausgibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode und importieren dabei das Objekt.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion und achten darauf, dass sie einen `i32`-Parameter hat. Dann deklarieren wir zwei SIMD-`f32x4`-Werte und prüfen, ob die Lane-Werte des ersten mit `f32x4.lt` kleiner als die des zweiten sind. Schließlich extrahieren wir den in Lane `3` des Ausgangswerts gespeicherten Wert mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Anweisung und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

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

Das Ergebnis ist `0`, weil der in Lane `3` des ersten Eingabewerts gespeicherte Wert nicht kleiner als der in Lane `3` des zweiten Eingabewerts gespeicherte Wert ist.

## Siehe auch

- [`lt_s`](/de/docs/WebAssembly/Reference/Numeric/lt_s)
- [`lt_u`](/de/docs/WebAssembly/Reference/Numeric/lt_u)
