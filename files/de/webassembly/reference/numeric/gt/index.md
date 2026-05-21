---
title: "gt: Wasm Textanweisung"
short-title: gt
slug: WebAssembly/Reference/Numeric/gt
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`gt`**-Anweisung, kurz für _greater than_ (größer als), prüft, ob eine Fließkommazahl größer ist als eine andere Fließkommazahl.

Ganzzahltypen haben separate Anweisungen für größer als vorzeichenbehaftet ([**`gt_s`**](/de/docs/WebAssembly/Reference/Numeric/gt_s)) und vorzeichenlos ([**`gt_u`**](/de/docs/WebAssembly/Reference/Numeric/gt_u)).

{{InteractiveExample("Wat Demo: gt", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10 and 2 onto the stack
    i32.const 10
    i32.const 2

    i32.gt ;; check if 10 is greater than 2
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
value_type.gt
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `gt`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Interpretationen:
      - `f32x4`
      - `f64x2`
- `gt`
  - : Die `gt`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

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

Für ein nicht-SIMD `gt` sind die Eingaben grundlegende numerische Werte wie `3.0` oder `3.5`. Wenn der erste Eingabewert größer ist als der zweite, wird `1` als Ausgabe auf den Stapel geschoben, andernfalls wird `0` auf den Stapel geschoben.

Bei einem [SIMD](/de/docs/WebAssembly/Reference/SIMD) `gt` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen, zum Beispiel `f32x4 2.0 30 86.9 120`. Jede Spur der Ausgabe, die auf den Stapel geschoben wird, ist entweder `1` oder `0`, was angibt, ob die entsprechende Spur des ersten Eingabewertes größer ist als die entsprechende Spur des zweiten Eingabewertes.

### Binärkodierung

| Anweisung  | Binärformat   | Beispiel Text => Binär    |
| ---------- | ------------- | ------------------------- |
| `f32.gt`   | `0x5e`        | `f32.gt` => `0x5e`        |
| `f64.gt`   | `0x64`        | `f64.gt` => `0x64`        |
| `f32x4.gt` | `0xfd 68:u32` | `f32x4.gt` => `0xfd 0x44` |
| `f64x2.gt` | `0xfd 74:u32` | `f64x2.gt` => `0xfd 0x4a` |

## Beispiele

### SIMD `gt` Beispiel

In diesem Beispiel zeigen wir die Verwendung von `gt`, um zu testen, ob ein SIMD-Spurwert größer ist als derselbe Spurwert in einem anderen SIMD-Wert.

#### JavaScript

In unserem Skript beziehen wir uns auf ein {{htmlelement("p")}}-Element, zu dem wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabe-`<p>` schreibt. Dann kompilieren und instanziieren wir unser Wasm-Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode und importieren dabei das Objekt.

```html hidden live-sample___simd_gt
<p></p>
```

```js live-sample___simd_gt
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion und achten darauf, dass sie einen `i32`-Parameter deklariert. Wir deklarieren dann zwei SIMD-`f32x4`-Werte und überprüfen, ob die Spurwerte des ersten größer sind als die des zweiten mit `f32x4.gt`. Schließlich extrahieren wir den Wert, der in Spur `3` des Ausgabewertes gespeichert ist, mithilfe der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Anweisung und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_gt
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const f32x4 20 12 15 102
    v128.const f32x4 20 12 15 100

    ;; check whether the first value is greater than the second
    f32x4.gt
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_gt", "100%", 100)}}

Das Ergebnis ist `1`, weil der in Spur `3` des ersten Eingabewertes gespeicherte Wert größer ist als der in Spur `3` des zweiten Eingabewertes gespeicherte Wert.

## Siehe auch

- [`gt_s`](/de/docs/WebAssembly/Reference/Numeric/gt_s)
- [`gt_u`](/de/docs/WebAssembly/Reference/Numeric/gt_u)
