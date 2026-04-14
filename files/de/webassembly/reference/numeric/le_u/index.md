---
title: "le_u: Wasm-Textanweisung"
short-title: le_u
slug: WebAssembly/Reference/Numeric/le_u
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`le_u`**-Anweisung, kurz für _less or equal unsigned_, überprüft, ob eine vorzeichenlose Ganzzahl kleiner oder gleich einer anderen vorzeichenlosen Ganzzahl ist.

Es gibt weitere `le`-Anweisungen:

- [**`le_s`**](/de/docs/WebAssembly/Reference/Numeric/le_s) für den Vergleich von vorzeichenbehafteten Ganzzahlen.
- [**`le`**](/de/docs/WebAssembly/Reference/Numeric/le) für den Vergleich von Gleitkommazahlen.

{{InteractiveExample("Wat Demo: le_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10 and 3 onto the stack
    i32.const 10
    i32.const 3

    i32.le_u ;; check if 10 is less than or equal to 3
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
value_type.le_u
```

- `value_type`
  - : Der Typ des Werts, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `le_u`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
- `le_u`
  - : Die `le_u`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

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

Für ein nicht-SIMD `le_u` werden die Eingaben einfache numerische Werte wie `3` oder `12` sein. Ist der erste Eingabewert kleiner oder gleich dem zweiten Eingabewert, wird `1` auf den Stapel gelegt, andernfalls `0`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `le_u` werden die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen sein, zum Beispiel `i32x4 2 30 86 120`. Jede Lane des auf den Stapel geschobenen Ausgabewerts ist eine `1` oder `0`, die angibt, ob die entsprechende Lane des ersten Eingabewerts kleiner oder gleich der entsprechenden Lane des zweiten Eingabewerts ist.

### Binäre Kodierung

| Anweisung    | Binärformat   | Beispieltext => binär       |
| ------------ | ------------- | --------------------------- |
| `i32.le_u`   | `0x4d`        | `i32.le_u` => `0x4d`        |
| `i64.le_u`   | `0x58`        | `i64.le_u` => `0x58`        |
| `i8x16.le_u` | `0xfd 42:u32` | `i8x16.le_u` => `0xfd 0x2a` |
| `i16x8.le_u` | `0xfd 52:u32` | `i16x8.le_u` => `0xfd 0x34` |
| `i32x4.le_u` | `0xfd 62:u32` | `i32x4.le_u` => `0xfd 0x3e` |

## Beispiele

### SIMD `le_u` Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `le_u`, um zu testen, ob ein SIMD-Lane-Wert kleiner oder gleich dem gleichen Lane-Wert in einem anderen SIMD-Wert ist.

#### JavaScript

In unserem Skript holen wir eine Referenz auf ein {{htmlelement("p")}}-Element, zu dem wir unser Ergebnis ausgeben, und definieren dann ein Objekt zur Einbindung in Wasm, das eine einzige Funktion enthält, die einen Wert an das Ausgabe-`<p>` übergibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

```html hidden live-sample___simd_le_u
<p></p>
```

```js live-sample___simd_le_u
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion und stellen sicher, dass sie einen `i32`-Parameter hat. Dann deklarieren wir zwei SIMD-`i32x4`-Werte und prüfen, ob die Lane-Werte des ersten kleiner oder gleich denen des zweiten sind, indem wir `i32x4.le_u` verwenden. Schließlich extrahieren wir den in Lane `3` des Ausgabewerts gespeicherten Wert mit der Anweisung [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_le_u
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 20 12 15 102
    v128.const i32x4 20 12 15 100

    ;; check whether the first value is less than or equal to the second
    i32x4.le_u
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_le_u", "100%", 100)}}

Das Ergebnis ist `0`, weil der in Lane `3` des ersten Eingabewerts gespeicherte Wert nicht kleiner oder gleich dem in Lane `3` des zweiten Eingabewerts gespeicherten Wert ist.

## Siehe auch

- [`le`](/de/docs/WebAssembly/Reference/Numeric/le)
- [`le_s`](/de/docs/WebAssembly/Reference/Numeric/le_s)
