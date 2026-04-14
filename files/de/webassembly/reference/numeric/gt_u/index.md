---
title: "gt_u: Wasm-Text-Instruktion"
short-title: gt_u
slug: WebAssembly/Reference/Numeric/gt_u
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`gt_u`**-Instruktion, kurz für _greater than unsigned_, überprüft, ob ein vorzeichenloser Integer größer als ein anderer vorzeichenloser Integer ist.

Es gibt weitere `gt`-Instruktionen:

- [**`gt_s`**](/de/docs/WebAssembly/Reference/Numeric/gt_s) für den Vergleich von vorzeichenbehafteten Integern.
- [**`gt`**](/de/docs/WebAssembly/Reference/Numeric/gt) für den Vergleich von Gleitkommazahlen.

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
  - : Der Typ des Werts, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `gt_u`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
- `gt_u`
  - : Die `gt_u`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert, der ein Integer-Typ sein wird.

Für ein nicht-SIMD `gt_u` sind die Eingaben einfache numerische Werte wie `3` oder `12`. Wenn der erste Eingabewert größer ist als der zweite, wird `1` auf den Stapel geschoben, andernfalls wird `0` auf den Stapel geschoben.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `gt_u` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen, zum Beispiel `i32x4 2 30 86 120`. Jede Lane der Ausgabe, die auf den Stapel geschoben wird, ist eine `1` oder `0`, die anzeigt, ob die entsprechende Lane des ersten Eingabewerts größer ist als die entsprechende Lane des zweiten Eingabewerts.

### Binärcodierung

| Instruktion  | Binärformat   | Beispieltext => binär       |
| ------------ | ------------- | --------------------------- |
| `i32.gt_u`   | `0x4b`        | `i32.gt_u` => `0x4b`        |
| `i64.gt_u`   | `0x56`        | `i64.gt_u` => `0x56`        |
| `i8x16.gt_u` | `0xfd 40:u32` | `i8x16.gt_u` => `0xfd 0x28` |
| `i16x8.gt_u` | `0xfd 50:u32` | `i16x8.gt_u` => `0xfd 0x32` |
| `i32x4.gt_u` | `0xfd 60:u32` | `i32x4.gt_u` => `0xfd 0x3c` |

## Beispiele

### Beispiel für SIMD `gt_u`

In diesem Beispiel demonstrieren wir die Verwendung von `gt_u`, um zu testen, ob ein SIMD-Lane-Wert größer ist als derselbe Lane-Wert in einem anderen SIMD-Wert.

#### JavaScript

In unserem Skript holen wir eine Referenz auf ein {{htmlelement("p")}}-Element, in das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, um einen Wert in die Ausgabe-`<p>` zu schreiben. Wir kompilieren und instanziieren unser Wasm-Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode und importieren das Objekt während des Prozesses.

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

In unserem Wasm-Modul importieren wir zunächst die JavaScript-`output()`-Funktion und stellen sicher, dass sie einen `i32`-Parameter hat. Dann deklarieren wir zwei SIMD `i32x4`-Werte und überprüfen, ob die Lane-Werte des ersten größer sind als die des zweiten, indem wir `i32x4.gt_u` verwenden. Schließlich extrahieren wir den Wert, der in Lane `3` des Ausgabewertes gespeichert ist, mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Instruktion und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

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

Das Ergebnis ist `1`, weil der Wert, der in Lane `3` des ersten Eingabewertes gespeichert ist, größer ist als der Wert, der in Lane `3` des zweiten Eingabewertes gespeichert ist.

## Siehe auch

- [`gt`](/de/docs/WebAssembly/Reference/Numeric/gt)
- [`gt_s`](/de/docs/WebAssembly/Reference/Numeric/gt_s)
