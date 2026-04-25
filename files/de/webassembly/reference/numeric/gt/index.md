---
title: "gt: Wasm-Textanweisung"
short-title: gt
slug: WebAssembly/Reference/Numeric/gt
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`gt`**-Anweisung, Abkürzung für _greater than_, prüft, ob eine Gleitkommazahl größer ist als eine andere Gleitkommazahl.

Integer-Typen haben separate Anweisungen für größer als vorzeichenbehaftet ([**`gt_s`**](/de/docs/WebAssembly/Reference/Numeric/gt_s)) und vorzeichenlos ([**`gt_u`**](/de/docs/WebAssembly/Reference/Numeric/gt_u)).

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
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Interpretationen:
      - `f32x4`
      - `f64x2`
- `gt`
  - : Die `gt`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

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

Bei einem Nicht-SIMD-`gt` sind die Eingaben einfache numerische Werte wie `3.0` oder `3.5`. Wenn der erste Eingang größer als der zweite Eingang ist, wird `1` als Ausgabe auf den Stapel gelegt, andernfalls wird `0` auf den Stapel gelegt.

Bei einem [SIMD](/de/docs/WebAssembly/Reference/SIMD)-`gt` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Werteinterpretationen, z. B. `f32x4 2.0 30 86.9 120`. Jede Spur der Ausgabe, die auf den Stapel gelegt wird, ist ein `1` oder `0`, das anzeigt, ob die entsprechende Spur des ersten Eingabewertes größer als die entsprechende Spur des zweiten Eingabewertes ist.

### Binärcodierung

| Anweisung  | Binärformat   | Beispieltext => binär     |
| ---------- | ------------- | ------------------------- |
| `f32.gt`   | `0x5e`        | `f32.gt` => `0x5e`        |
| `f64.gt`   | `0x64`        | `f64.gt` => `0x64`        |
| `f32x4.gt` | `0xfd 68:u32` | `f32x4.gt` => `0xfd 0x44` |
| `f64x2.gt` | `0xfd 74:u32` | `f64x2.gt` => `0xfd 0x4a` |

## Beispiele

### SIMD `gt` Beispiel

In diesem Beispiel demonstrieren wir, wie man `gt` verwendet, um zu testen, ob ein SIMD-Spurenwert größer ist als derselbe Spurenwert in einem anderen SIMD-Wert.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, in das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt zum Importieren in Wasm, das eine einzelne Funktion enthält, die einen Wert an die Ausgabe `<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `i32`-Parameter hat. Wir deklarieren dann zwei SIMD-`f32x4`-Werte und prüfen anschließend, ob die Spurwerte des ersten größer sind als die des zweiten, indem wir `f32x4.gt` verwenden. Schließlich extrahieren wir den in Spur `3` gespeicherten Wert der Ausgabe mithilfe der Anweisung [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) und geben ihn an das DOM aus, indem wir die importierte Funktion `output()` aufrufen.

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

Das Ergebnis ist `1`, da der Wert, der in Spur `3` des ersten Eingabewertes gespeichert ist, größer ist als der Wert, der in Spur `3` des zweiten Eingabewertes gespeichert ist.

## Siehe auch

- [`gt_s`](/de/docs/WebAssembly/Reference/Numeric/gt_s)
- [`gt_u`](/de/docs/WebAssembly/Reference/Numeric/gt_u)
