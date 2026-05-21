---
title: "gt_s: Wasm-Text-Instruktion"
short-title: gt_s
slug: WebAssembly/Reference/Numeric/gt_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`gt_s`**-Instruktion, abgeleitet von _greater than signed_, überprüft, ob eine vorzeichenbehaftete Ganzzahl größer als eine andere vorzeichenbehaftete Ganzzahl ist.

Es gibt weitere `gt`-Instruktionen:

- [**`gt_u`**](/de/docs/WebAssembly/Reference/Numeric/gt_u) zum Vergleichen von vorzeichenlosen Ganzzahlen.
- [**`gt`**](/de/docs/WebAssembly/Reference/Numeric/gt) zum Vergleichen von Gleitkommazahlen.

{{InteractiveExample("Wat Demo: gt_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10 and 3 onto the stack
    i32.const 10
    i32.const 3

    i32.gt_s ;; check if 10 is greater than 3
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
value_type.gt_s
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `gt_s`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
- `gt_s`
  - : Die `gt_s`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

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

Für ein Nicht-SIMD `gt_s` werden die Eingaben einfache numerische Werte wie `3` oder `12` sein. Wenn der erste Eingang größer als der zweite Eingang ist, wird `1` auf den Stack als Ausgabe geschoben, andernfalls wird `0` auf den Stack geschoben.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `gt_s` werden die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen sein, zum Beispiel `i32x4 2 30 86 120`. Jede Spur der Ausgabe, die auf den Stack geschoben wird, ist eine `1` oder `0`, die anzeigt, ob die entsprechende Spur des ersten Eingabewertes größer ist als die entsprechende Spur des zweiten Eingabewertes.

### Binäre Kodierung

| Instruktion  | Binärformat    | Beispieltext => binär            |
| ------------ | -------------- | -------------------------------- |
| `i32.gt_s`   | `0x4a`         | `i32.gt_s` => `0x4a`             |
| `i64.gt_s`   | `0x55`         | `i64.gt_s` => `0x55`             |
| `i8x16.gt_s` | `0xfd 39:u32`  | `i8x16.gt_s` => `0xfd 0x27`      |
| `i16x8.gt_s` | `0xfd 49:u32`  | `i16x8.gt_s` => `0xfd 0x31`      |
| `i32x4.gt_s` | `0xfd 59:u32`  | `i32x4.gt_s` => `0xfd 0x3b`      |
| `i64x2.gt_s` | `0xfd 217:u32` | `i64x2.gt_s` => `0xfd 0xd9 0x01` |

## Beispiele

### SIMD `gt_s` Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `gt_s`, um zu testen, ob ein SIMD-Spurwert größer ist als derselbe Spurwert in einem anderen SIMD-Wert.

#### JavaScript

In unserem Skript greifen wir auf ein {{htmlelement("p")}}-Element zu, in das wir unser Ergebnis ausgeben, und definieren ein Objekt, das in Wasm importiert wird und eine Funktion enthält, die einen Wert in das Ausgabeelement `<p>` schreibt. Dann kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

```html hidden live-sample___simd_gt_s
<p></p>
```

```js live-sample___simd_gt_s
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `i32`-Parameter hat. Wir deklarieren dann zwei SIMD `i32x4` Werte und prüfen, ob die Wertespuren des ersten größer sind als die des zweiten mit `i32x4.gt_s`. Schließlich extrahieren wir den Wert, der in Spur `3` des Ausgabewertes gespeichert ist, mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) Instruktion und geben ihn in das DOM aus, indem wir die importierte `output()` Funktion aufrufen.

```wat live-sample___simd_gt_s
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 20 12 15 102
    v128.const i32x4 20 12 15 100

    ;; check whether the first value is greater than the second
    i32x4.gt_s
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Das Ergebnis ist wie folgt:

{{embedlivesample("simd_gt_s", "100%", 100)}}

Das Ergebnis ist `1`, weil der in Spur `3` des ersten Eingabewertes gespeicherte Wert größer ist als der in Spur `3` des zweiten Eingabewertes gespeicherte Wert.

## Siehe auch

- [`gt`](/de/docs/WebAssembly/Reference/Numeric/gt)
- [`gt_u`](/de/docs/WebAssembly/Reference/Numeric/gt_u)
