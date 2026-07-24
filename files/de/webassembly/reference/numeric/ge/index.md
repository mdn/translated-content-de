---
title: "ge: Wasm numeric instruction"
short-title: ge
slug: WebAssembly/Reference/Numeric/ge
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`ge`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric), abgekürzt für _greater or equal_, prüft, ob eine Gleitkommazahl größer oder gleich einer anderen Gleitkommazahl ist.

Ganzzahltypen haben separate Anweisungen für größer oder gleich, nämlich signierte ([**`ge_s`**](/de/docs/WebAssembly/Reference/Numeric/ge_s)) und unsignierte ([**`ge_u`**](/de/docs/WebAssembly/Reference/Numeric/ge_u)) Anweisungen.

{{InteractiveExample("Wat Demo: ge", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10.0 and 3.5 onto the stack
    f32.const 10.0
    f32.const 3.5

    f32.ge ;; check if 10.0 is greater than or equal to 3.5
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
value_type.ge
```

- `value_type`
  - : Der Typ des Werts, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `ge`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Interpretationen:
      - `f32x4`
      - `f64x2`
- `ge`
  - : Die `ge`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

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

Für ein nicht-SIMD `ge` sind die Eingaben grundlegende Zahlenwerte wie `3.0` oder `3.5`. Wenn der erste Eingabewert größer oder gleich dem zweiten Eingabewert ist, wird `1` als Ausgabe auf den Stapel gelegt, andernfalls `0`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `ge` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Interpretationen, beispielsweise `f32x4 2.0 30 86.9 120`. Jede Lane der Ausgabe, die auf den Stapel gelegt wird, ist ein `1` oder `0`, was anzeigt, ob die entsprechende Lane des ersten Eingabewerts größer oder gleich der entsprechenden Lane des zweiten Eingabewerts ist.

### Binäre Codierung

| Anweisung  | Binärformat   | Beispieltext => binär     |
| ---------- | ------------- | ------------------------- |
| `f32.ge`   | `0x60`        | `f32.ge` => `0x60`        |
| `f64.ge`   | `0x66`        | `f64.ge` => `0x66`        |
| `f32x4.ge` | `0xfd 70:u32` | `f32x4.ge` => `0xfd 0x46` |
| `f64x2.ge` | `0xfd 76:u32` | `f64x2.ge` => `0xfd 0x4c` |

## Beispiele

### SIMD `ge` Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `ge`, um zu testen, ob ein SIMD-Lane-Wert größer oder gleich dem gleichen Lane-Wert in einem anderen SIMD-Wert ist.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, an das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabeelement `<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode und importieren dabei das Objekt.

```html hidden live-sample___simd_ge
<p></p>
```

```js live-sample___simd_ge
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion und stellen sicher, dass wir angeben, dass sie einen `i32`-Parameter hat. Dann deklarieren wir zwei SIMD-`f32x4`-Werte und prüfen, ob die Lane-Werte des ersten größer oder gleich denen des zweiten sind, indem wir `f32x4.ge` verwenden. Schließlich extrahieren wir den Wert, der in Lane `3` des Ausgabewerts gespeichert ist, mithilfe der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Anweisung und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_ge
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const f32x4 20 12 15 102
    v128.const f32x4 20 12 15 100

    ;; check whether the first value is greater than or equal to the second
    f32x4.ge
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Das Ergebnis ist wie folgt:

{{embedlivesample("simd_ge", "100%", 100)}}

Das Ergebnis ist `1`, weil der Wert, der in Lane `3` des ersten Eingabewerts gespeichert ist, größer oder gleich dem Wert ist, der in Lane `3` des zweiten Eingabewerts gespeichert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ge_s`](/de/docs/WebAssembly/Reference/Numeric/ge_s)
- [`ge_u`](/de/docs/WebAssembly/Reference/Numeric/ge_u)
