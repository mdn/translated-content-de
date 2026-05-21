---
title: "le: Wasm-Textanweisung"
short-title: le
slug: WebAssembly/Reference/Numeric/le
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`le`**-Anweisung, kurz für _less or equal_, prüft, ob eine Fließkommazahl kleiner oder gleich einer anderen Fließkommazahl ist.

Ganzzahlige Typen haben separate Anweisungen für kleiner oder gleich als vorzeichenbehaftet ([**`le_s`**](/de/docs/WebAssembly/Reference/Numeric/le_s)) und vorzeichenlos ([**`le_u`**](/de/docs/WebAssembly/Reference/Numeric/le_u)).

{{InteractiveExample("Wat Demo: le", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10.5 and 3.5 onto the stack
    f32.const 10.5
    f32.const 3.5

    f32.le ;; check if 10.5 is less than or equal to 3.5
    call $log_bool ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";

function log_bool(value) {
  console.log(Boolean(value));
  // Expected output: false
}

await WebAssembly.instantiateStreaming(fetch(url), {
  env: { log_bool },
});
```

## Syntax

```plain
value_type.le
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `le`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen:
      - `f32x4`
      - `f64x2`
- `le`
  - : Die `le`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) hinzugefügt werden.

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

Für ein nicht-SIMD-`le` sind die Eingaben grundlegende numerische Werte wie `3.0` oder `3.5`. Wenn die erste Eingabe kleiner oder gleich der zweiten Eingabe ist, wird `1` als Ausgabe auf den Stack geschoben, andernfalls wird `0` auf den Stack geschoben.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `le` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen, zum Beispiel `f32x4 2.0 30 86.9 120`. Jede Lane der Ausgabe, die auf den Stack geschoben wird, ist eine `1` oder `0`, die angibt, ob die entsprechende Lane des ersten Eingabewertes kleiner oder gleich der entsprechenden Lane des zweiten Eingabewertes ist.

### Binäre Codierung

| Anweisung  | Binärformat   | Beispielltext => binär    |
| ---------- | ------------- | ------------------------- |
| `f32.le`   | `0x5f`        | `f32.le` => `0x5f`        |
| `f64.le`   | `0x65`        | `f64.le` => `0x65`        |
| `f32x4.le` | `0xfd 69:u32` | `f32x4.le` => `0xfd 0x45` |
| `f64x2.le` | `0xfd 75:u32` | `f64x2.le` => `0xfd 0x4b` |

## Beispiele

### SIMD-`le`-Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `le`, um zu testen, ob ein SIMD-Lane-Wert kleiner oder gleich dem gleichen Lane-Wert in einem anderen SIMD-Wert ist.

#### JavaScript

In unserem Skript greifen wir auf ein {{htmlelement("p")}}-Element zu, in das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabe-`<p>` schreibt. Dann kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

```html hidden live-sample___simd_le
<p></p>
```

```js live-sample___simd_le
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion und stellen sicher, dass sie einen `i32`-Parameter hat. Dann deklarieren wir zwei SIMD-`f32x4`-Werte und prüfen, ob die Lane-Werte des ersten kleiner oder gleich denen des zweiten sind, indem wir `f32x4.le` verwenden. Schließlich extrahieren wir den Wert, der in Lane `3` des Ausgabewertes gespeichert ist, mithilfe der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Anweisung und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_le
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const f32x4 20 12 15 102
    v128.const f32x4 20 12 15 100

    ;; check whether the first value is less than or equal to the second
    f32x4.le
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_le", "100%", 100)}}

Das Ergebnis ist `0`, weil der Wert, der in Lane `3` des ersten Eingabewerts gespeichert ist, nicht kleiner oder gleich dem Wert ist, der in Lane `3` des zweiten Eingabewerts gespeichert ist.

## Siehe auch

- [`le_s`](/de/docs/WebAssembly/Reference/Numeric/le_s)
- [`le_u`](/de/docs/WebAssembly/Reference/Numeric/le_u)
