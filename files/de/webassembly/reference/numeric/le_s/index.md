---
title: "le_s: Wasm-Textanweisung"
short-title: le_s
slug: WebAssembly/Reference/Numeric/le_s
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`le_s`**-Anweisung, kurz für _less or equal signed_, prüft, ob ein vorzeichenbehafteter Integer kleiner oder gleich einem anderen vorzeichenbehafteten Integer ist.

Es gibt weitere `le`-Anweisungen:

- [**`le_u`**](/de/docs/WebAssembly/Reference/Numeric/le_u) zum Vergleichen vorzeichenloser Integer.
- [**`le`**](/de/docs/WebAssembly/Reference/Numeric/le) zum Vergleichen von Fließkommazahlen.

{{InteractiveExample("Wat Demo: le_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10 and 3 onto the stack
    i32.const 10
    i32.const 3

    i32.le_s ;; check if 10 is less than or equal to 3
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
value_type.le_s
```

- `value_type`
  - : Der Wertetyp, auf den die Anweisung angewendet wird. Die folgenden Typen unterstützen `le_s`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
- `le_s`
  - : Die `le_s`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingeschlossen werden.

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

Bei einem nicht-SIMD `le_s` sind die Eingaben einfache numerische Werte wie `3` oder `12`. Wenn die erste Eingabe kleiner oder gleich der zweiten Eingabe ist, wird `1` auf den Stack geschoben als Ausgabe, andernfalls wird `0` auf den Stack geschoben.

Bei einem [SIMD](/de/docs/WebAssembly/Reference/SIMD) `le_s` sind die Eingaben Interpretationen des [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertes, zum Beispiel `i32x4 2 30 86 120`. Jede Lane der Ausgabe, die auf den Stack geschoben wird, ist eine `1` oder `0`, die angibt, ob der entsprechende Lane-Wert der ersten Eingabe kleiner oder gleich dem entsprechenden Lane-Wert der zweiten Eingabe ist.

### Binärcodierung

| Anweisung    | Binärformat    | Beispieltext => binär            |
| ------------ | -------------- | -------------------------------- |
| `i32.le_s`   | `0x4c`         | `i32.le_s` => `0x4c`             |
| `i64.le_s`   | `0x57`         | `i64.le_s` => `0x57`             |
| `i8x16.le_s` | `0xfd 41:u32`  | `i8x16.le_s` => `0xfd 0x29`      |
| `i16x8.le_s` | `0xfd 51:u32`  | `i16x8.le_s` => `0xfd 0x33`      |
| `i32x4.le_s` | `0xfd 61:u32`  | `i32x4.le_s` => `0xfd 0x3d`      |
| `i64x2.le_s` | `0xfd 218:u32` | `i64x2.le_s` => `0xfd 0xda 0x01` |

## Beispiele

### SIMD `le_s` Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `le_s`, um zu testen, ob ein SIMD-Lane-Wert kleiner oder gleich dem gleichen Lane-Wert in einem anderen SIMD-Wert ist.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, in das wir unser Ergebnis ausgeben, und definieren dann ein Objekt für den Import in das Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabe-`<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

```html hidden live-sample___simd_le_s
<p></p>
```

```js live-sample___simd_le_s
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

In unserem Wasm-Modul importieren wir zunächst die JavaScript-`output()`-Funktion und stellen sicher, dass deklariert wird, dass sie einen `i32`-Parameter hat. Wir deklarieren dann zwei SIMD-`i32x4`-Werte und prüfen, ob die Lane-Werte des ersten kleiner oder gleich denen des zweiten sind, indem wir `i32x4.le_s` verwenden. Schließlich extrahieren wir den Wert, der in Lane `3` des Ausgabewertes gespeichert ist, mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Anweisung und geben ihn durch Aufruf der importierten `output()`-Funktion an das DOM aus.

```wat live-sample___simd_le_s
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 20 12 15 102
    v128.const i32x4 20 12 15 100

    ;; check whether the first value is less than or equal to the second
    i32x4.le_s
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_le_s", "100%", 100)}}

Das Ergebnis ist `0`, weil der Wert, der in Lane `3` des ersten Eingabewertes gespeichert ist, nicht kleiner oder gleich dem Wert in Lane `3` des zweiten Eingabewertes ist.

## Siehe auch

- [`le`](/de/docs/WebAssembly/Reference/Numeric/le)
- [`le_u`](/de/docs/WebAssembly/Reference/Numeric/le_u)
