---
title: "gt: Wasm numerische Anweisung"
short-title: gt
slug: WebAssembly/Reference/Numeric/gt
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`gt`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric), kurz für _größer als_, prüft, ob eine Gleitkommazahl größer als eine andere Gleitkommazahl ist.

Ganzzahltypen haben separate Anweisungen für größer als mit Vorzeichen ([**`gt_s`**](/de/docs/WebAssembly/Reference/Numeric/gt_s)) und ohne Vorzeichen ([**`gt_u`**](/de/docs/WebAssembly/Reference/Numeric/gt_u)).

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
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen:
      - `f32x4`
      - `f64x2`
- `gt`
  - : Die `gt`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert, welcher ein Ganzzahldatentyp sein wird.

Für ein nicht-SIMD `gt` sind die Eingaben einfache numerische Werte wie `3.0` oder `3.5`. Wenn der erste Eingabewert größer ist als der zweite Eingabewert, wird `1` auf den Stapel als Ausgabe gelegt, andernfalls wird `0` auf den Stapel gelegt.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `gt` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen, z.B. `f32x4 2.0 30 86.9 120`. Jede Bahn der Ausgabe, die auf den Stapel gelegt wird, ist eine `1` oder `0`, die angibt, ob die entsprechende Bahn des ersten Eingabewerts größer ist als die entsprechende Bahn des zweiten Eingabewerts.

### Binärcodierung

| Anweisung  | Binärformat   | Beispieltext => binär     |
| ---------- | ------------- | ------------------------- |
| `f32.gt`   | `0x5e`        | `f32.gt` => `0x5e`        |
| `f64.gt`   | `0x64`        | `f64.gt` => `0x64`        |
| `f32x4.gt` | `0xfd 68:u32` | `f32x4.gt` => `0xfd 0x44` |
| `f64x2.gt` | `0xfd 74:u32` | `f64x2.gt` => `0xfd 0x4a` |

## Beispiele

### Beispiel für SIMD `gt`

In diesem Beispiel demonstrieren wir, wie `gt` verwendet wird, um zu testen, ob ein SIMD-Bahnenwert größer ist als derselbe Bahnenwert in einem anderen SIMD-Wert.

#### JavaScript

In unserem Skript holen wir eine Referenz auf ein {{htmlelement("p")}}-Element, an das wir unser Ergebnis ausgeben wollen, und definieren dann ein Objekt zum Importieren in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabe-`<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei das Objekt im Prozess importiert wird.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `i32`-Parameter hat. Dann deklarieren wir zwei SIMD `f32x4`-Werte und prüfen, ob die Bahnwerte des ersten größer sind als die des zweiten mit `f32x4.gt`. Schließlich extrahieren wir den Wert, der in Bahn `3` des Ausgabe-Wertes mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) Anweisung gespeichert ist, und geben ihn an das DOM aus, indem wir die importierte `output()` Funktion aufrufen.

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

Das Ergebnis ist `1`, weil der Wert, der in Bahn `3` des ersten Eingabewertes gespeichert ist, größer ist als der Wert in Bahn `3` des zweiten Eingabewertes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`gt_s`](/de/docs/WebAssembly/Reference/Numeric/gt_s)
- [`gt_u`](/de/docs/WebAssembly/Reference/Numeric/gt_u)
