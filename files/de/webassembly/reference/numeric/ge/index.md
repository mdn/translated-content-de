---
title: "ge: Wasm-Textinstruktion"
short-title: ge
slug: WebAssembly/Reference/Numeric/ge
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`ge`**-Instruktion, kurz für _greater or equal_, prüft, ob eine Fließkommazahl größer als oder gleich einer anderen Fließkommazahl ist.

Ganzzahltypen haben separate Instruktionen für größer als oder gleich, unterschieden in vorzeichenbehaftet ([**`ge_s`**](/de/docs/WebAssembly/Reference/Numeric/ge_s)) und vorzeichenlos ([**`ge_u`**](/de/docs/WebAssembly/Reference/Numeric/ge_u)).

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
  - : Der Typ des Werts, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `ge`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Interpretationen:
      - `f32x4`
      - `f64x2`
- `ge`
  - : Die `ge`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

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

Für ein nicht-SIMD `ge` werden die Eingaben einfache numerische Werte wie `3.0` oder `3.5` sein. Wenn die erste Eingabe größer als oder gleich der zweiten Eingabe ist, wird `1` als Ausgabe auf den Stapel geschoben, andernfalls wird `0` auf den Stapel geschoben.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `ge` werden die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen sein, zum Beispiel `f32x4 2.0 30 86.9 120`. Jedes Segment der auf den Stapel geschobenen Ausgabe ist eine `1` oder `0`, die anzeigt, ob das entsprechende Segment des ersten Eingabewerts größer als oder gleich dem entsprechenden Segment des zweiten Eingabewerts ist.

### Binärcode-Kodierung

| Instruktion | Binärformat   | Beispieltext => Binär     |
| ----------- | ------------- | ------------------------- |
| `f32.ge`    | `0x60`        | `f32.ge` => `0x60`        |
| `f64.ge`    | `0x66`        | `f64.ge` => `0x66`        |
| `f32x4.ge`  | `0xfd 70:u32` | `f32x4.ge` => `0xfd 0x46` |
| `f64x2.ge`  | `0xfd 76:u32` | `f64x2.ge` => `0xfd 0x4c` |

## Beispiele

### Beispiel für SIMD `ge`

In diesem Beispiel demonstrieren wir die Verwendung von `ge`, um zu testen, ob ein SIMD-Segmentwert größer oder gleich dem gleichen Segmentwert in einem anderen SIMD-Wert ist.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, in das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt zur Importierung in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabe-`<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode und importieren das Objekt dabei.

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

In unserem Wasm-Modul importieren wir zunächst die JavaScript-`output()`-Funktion und stellen sicher, dass sie einen `i32`-Parameter deklariert hat. Wir deklarieren dann zwei SIMD-`f32x4`-Werte und prüfen, ob die Segmentwerte des ersten größer als oder gleich dem entsprechenden zweiten sind, indem wir `f32x4.ge` verwenden. Schließlich extrahieren wir den im Segment `3` des Ausgabewerts gespeicherten Wert mithilfe der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Instruktion und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

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

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_ge", "100%", 100)}}

Das Ergebnis ist `1`, weil der im Segment `3` des ersten Eingabewerts gespeicherte Wert größer als oder gleich dem im Segment `3` des zweiten Eingabewerts gespeicherten Wert ist.

## Siehe auch

- [`ge_s`](/de/docs/WebAssembly/Reference/Numeric/ge_s)
- [`ge_u`](/de/docs/WebAssembly/Reference/Numeric/ge_u)
