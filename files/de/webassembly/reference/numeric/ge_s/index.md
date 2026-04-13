---
title: "ge_s: Wasm-Text-Instruktion"
short-title: ge_s
slug: WebAssembly/Reference/Numeric/ge_s
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`ge_s`** Instruktion, kurz für _greater or equal signed_ (größer oder gleich vorzeichenbehaftet), prüft, ob eine vorzeichenbehaftete Ganzzahl größer als oder gleich einer anderen vorzeichenbehafteten Ganzzahl ist.

Es gibt weitere `ge` Instruktionen:

- [**`ge_u`**](/de/docs/WebAssembly/Reference/Numeric/ge_u) zum Vergleichen von vorzeichenlosen Ganzzahlen.
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
  - : Der Wertetyp, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `ge_s`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
- `ge_s`
  - : Die `ge_s` Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert, welcher ein Ganzzahltyp sein wird.

Für eine nicht-SIMD `ge_s`, werden die Eingaben grundlegende numerische Werte wie `3` oder `12` sein. Wenn die erste Eingabe größer oder gleich der zweiten Eingabe ist, wird `1` auf den Stapel als Ausgabe geschrieben, andernfalls wird `0` auf den Stapel geschrieben.

Für eine [SIMD](/de/docs/WebAssembly/Reference/SIMD) `ge_s`, werden die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Werteinterpretationen sein, zum Beispiel `i32x4 2 30 86 120`. Jeder Lane der Ausgabe, die auf den Stapel geschrieben wird, ist eine `1` oder `0`, die anzeigt, ob der entsprechende Lane des ersten Eingabewerts größer oder gleich dem entsprechenden Lane des zweiten Eingabewerts ist.

### Binärcodierung

| Instruktion  | Binärformat    | Beispieltext => binär            |
| ------------ | -------------- | -------------------------------- |
| `i32.ge_s`   | `0x4e`         | `i32.ge_s` => `0x4e`             |
| `i64.ge_s`   | `0x59`         | `i64.ge_s` => `0x59`             |
| `i8x16.ge_s` | `0xfd 43:u32`  | `i8x16.ge_s` => `0xfd 0x2b`      |
| `i16x8.ge_s` | `0xfd 53:u32`  | `i16x8.ge_s` => `0xfd 0x35`      |
| `i32x4.ge_s` | `0xfd 63:u32`  | `i32x4.ge_s` => `0xfd 0x3f`      |
| `i64x2.ge_s` | `0xfd 219:u32` | `i64x2.ge_s` => `0xfd 0xdb 0x01` |

## Beispiele

### SIMD `ge_s` Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `ge_s`, um zu testen, ob ein SIMD-Lane-Wert größer oder gleich dem gleichen Lane-Wert in einem anderen SIMD-Wert ist.

#### JavaScript

In unserem Skript greifen wir auf ein {{htmlelement("p")}} Element zu, auf das wir unser Ergebnis ausgeben wollen, und definieren dann ein Objekt zum Importieren in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabe-`<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode, wobei wir das Objekt im Prozess importieren.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript `output()` Funktion, und stellen sicher, dass wir deklarieren, dass sie einen `i32` Parameter hat. Wir deklarieren dann zwei SIMD `i32x4` Werte und prüfen, ob die Lane-Werte des ersten größer oder gleich dem zweiten sind, indem wir `i32x4.ge_s` verwenden. Schließlich extrahieren wir den Wert, der in Lane `3` des Ausgabe-Werts gespeichert ist, mithilfe der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Instruktion und geben ihn an das DOM aus, indem wir die importierte `output()` Funktion aufrufen.

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

Das Ergebnis ist `1`, weil der Wert, der in Lane `3` des ersten Eingabewerts gespeichert ist, größer oder gleich dem Wert ist, der in Lane `3` des zweiten Eingabewerts gespeichert ist.

## Siehe auch

- [`ge`](/de/docs/WebAssembly/Reference/Numeric/ge)
- [`ge_u`](/de/docs/WebAssembly/Reference/Numeric/ge_u)
