---
title: "ge: Wasm-Textanweisung"
short-title: ge
slug: WebAssembly/Reference/Numeric/ge
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`ge`**-Anweisung, kurz für _greater or equal_ (größer oder gleich), überprüft, ob eine Gleitpunktzahl größer oder gleich einer anderen Gleitpunktzahl ist.

Ganzzahltypen haben separate Anweisungen für größer oder gleich, geschweifte ([**`ge_s`**](/de/docs/WebAssembly/Reference/Numeric/ge_s)) und ungeschweifte ([**`ge_u`**](/de/docs/WebAssembly/Reference/Numeric/ge_u)).

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
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `ge`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Interpretationen:
      - `f32x4`
      - `f64x2`
- `ge`
  - : Die `ge`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert, der ein Ganzzahldatentyp sein wird.

Für ein nicht-SIMD `ge` werden die Eingaben grundlegende numerische Werte wie `3.0` oder `3.5` sein. Wenn die erste Eingabe größer oder gleich der zweiten Eingabe ist, wird `1` auf den Stapel als Ausgabe geschoben, andernfalls wird `0` auf den Stapel geschoben.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `ge` werden die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen sein, zum Beispiel `f32x4 2.0 30 86.9 120`. Jede Lane der Ausgabe, die auf den Stapel geschoben wird, ist eine `1` oder `0`, die angibt, ob die entsprechende Lane des ersten Eingabewertes größer oder gleich der entsprechenden Lane des zweiten Eingabewertes ist.

### Binärcodierung

| Anweisung  | Binärformat   | Beispieltext => Binär     |
| ---------- | ------------- | ------------------------- |
| `f32.ge`   | `0x60`        | `f32.ge` => `0x60`        |
| `f64.ge`   | `0x66`        | `f64.ge` => `0x66`        |
| `f32x4.ge` | `0xfd 70:u32` | `f32x4.ge` => `0xfd 0x46` |
| `f64x2.ge` | `0xfd 76:u32` | `f64x2.ge` => `0xfd 0x4c` |

## Beispiele

### SIMD `ge` Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `ge`, um zu testen, ob ein SIMD-Lane-Wert größer oder gleich dem gleichen Lane-Wert in einem anderen SIMD-Wert ist.

#### JavaScript

In unserem Skript erhalten wir eine Referenz auf ein {{htmlelement("p")}}-Element, in das wir unser Ergebnis ausgeben, und definieren dann ein Objekt zum Importieren in Wasm, das eine einzelne Funktion enthält, die einen Wert an das `<p>`-Element schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

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

In unserem Wasm-Modul importieren wir zunächst die JavaScript-Funktion `output()`, wobei wir darauf achten, dass sie einen `i32`-Parameter besitzt. Dann deklarieren wir zwei SIMD-`f32x4`-Werte und prüfen, ob die Lanes des ersten Werts größer oder gleich den Lanes des zweiten Werts sind, indem wir `f32x4.ge` verwenden. Schließlich extrahieren wir den Wert, der sich in Lane `3` des Ausgabewertes befindet, mit der Anweisung [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

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

Das Ergebnis ist `1`, weil der Wert, der in Lane `3` des ersten Eingabewertes gespeichert ist, größer oder gleich dem Wert ist, der in Lane `3` des zweiten Eingabewertes gespeichert ist.

## Siehe auch

- [`ge_s`](/de/docs/WebAssembly/Reference/Numeric/ge_s)
- [`ge_u`](/de/docs/WebAssembly/Reference/Numeric/ge_u)
