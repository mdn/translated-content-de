---
title: "le_s: Wasm Textanweisung"
short-title: le_s
slug: WebAssembly/Reference/Numeric/le_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`le_s`**-Anweisung, kurz für _less or equal signed_ (kleiner oder gleich, vorzeichenbehaftet), prüft, ob ein vorzeichenbehafteter Integer kleiner oder gleich einem anderen vorzeichenbehafteten Integer ist.

Es gibt andere `le`-Anweisungen:

- [**`le_u`**](/de/docs/WebAssembly/Reference/Numeric/le_u) für den Vergleich von vorzeichenlosen Ganzzahlen.
- [**`le`**](/de/docs/WebAssembly/Reference/Numeric/le) für den Vergleich von Gleitkommazahlen.

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
  - : Der Typ des Werts, mit dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `le_s`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
- `le_s`
  - : Die `le_s`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

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

Für ein nicht-SIMD `le_s` sind die Eingaben einfache numerische Werte wie `3` oder `12`. Wenn der erste Eingang kleiner oder gleich dem zweiten ist, wird `1` auf den Stapel gepusht, ansonsten wird `0` gepusht.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `le_s` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wert-Interpretationen, zum Beispiel `i32x4 2 30 86 120`. Jede Lane der Ausgabe, die auf den Stapel gepusht wird, ist `1` oder `0`, je nachdem, ob die entsprechende Lane des ersten Eingabewertes kleiner oder gleich der entsprechenden Lane des zweiten Eingabewertes ist.

### Binäre Kodierung

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

In diesem Beispiel zeigen wir, wie `le_s` verwendet wird, um zu testen, ob ein SIMD-Lane-Wert kleiner oder gleich demselben Lane-Wert in einem anderen SIMD-Wert ist.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element ein, auf das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabeelement `<p>` schreibt. Wir kompilieren und instanziieren unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das Objekt importieren.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion und stellen sicher, dass sie einen `i32`-Parameter hat. Wir deklarieren dann zwei SIMD `i32x4` Werte und prüfen, ob die Lane-Werte des ersten kleiner oder gleich denjenigen des zweiten sind, indem wir `i32x4.le_s` verwenden. Schließlich extrahieren wir den Wert, der in Lane `3` des Ausgabewerts gespeichert ist, mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Anweisung und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

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

Das Ergebnis ist `0`, da der in Lane `3` des ersten Eingabewerts gespeicherte Wert nicht kleiner oder gleich dem in Lane `3` des zweiten Eingabewerts gespeicherten Wert ist.

## Siehe auch

- [`le`](/de/docs/WebAssembly/Reference/Numeric/le)
- [`le_u`](/de/docs/WebAssembly/Reference/Numeric/le_u)
