---
title: "lt: Wasm-Textanweisung"
short-title: lt
slug: WebAssembly/Reference/Numeric/lt
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`lt`**-Anweisung, kurz für _less than_ (kleiner als), überprüft, ob eine Gleitkommazahl kleiner als eine andere Gleitkommazahl ist.

Ganzzahltypen haben separate Anweisungen für kleiner als: signierte ([**`lt_s`**](/de/docs/WebAssembly/Reference/Numeric/lt_s)) und unsignierte ([**`lt_u`**](/de/docs/WebAssembly/Reference/Numeric/lt_u)).

{{InteractiveExample("Wat Demo: lt", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10.1 and 3.5 onto the stack
    f32.const 10.1
    f32.const 3.5

    f32.lt ;; check if 10.1 is less than 3.5
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
value_type.lt
```

- `value_type`
  - : Der Wertetyp, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `lt`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Interpretationen:
      - `f32x4`
      - `f64x2`
- `lt`
  - : Die `lt`-Anweisung, die immer nach dem `value_type` und einem Punkt (`.`) enthalten sein muss.

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

Für ein nicht-SIMD `lt` sind die Eingaben grundlegende Zahlenwerte, wie `3.0` oder `3.5`. Wenn der erste Eingang kleiner als der zweite Eingang ist, wird `1` auf den Stapel als Ausgabe geschoben, ansonsten `0`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `lt` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Werteinterpretationen, zum Beispiel `f32x4 2.0 30 86.9 120`. Jede Bahn der Ausgabe, die auf den Stapel geschoben wird, ist eine `1` oder `0`, was anzeigt, ob die entsprechende Bahn des ersten Eingabewertes kleiner als die entsprechende Bahn des zweiten Eingabewertes ist.

### Binärcodierung

| Anweisung  | Binärformat   | Beispieltext => binär     |
| ---------- | ------------- | ------------------------- |
| `f32.lt`   | `0x5d`        | `f32.lt` => `0x5d`        |
| `f64.lt`   | `0x63`        | `f64.lt` => `0x63`        |
| `f32x4.lt` | `0xfd 67:u32` | `f32x4.lt` => `0xfd 0x43` |
| `f64x2.lt` | `0xfd 73:u32` | `f64x2.lt` => `0xfd 0x49` |

## Beispiele

### SIMD `lt` Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `lt`, um zu prüfen, ob ein SIMD-Bahnenwert kleiner als derselbe Bahnenwert in einem anderen SIMD-Wert ist.

#### JavaScript

In unserem Skript holen wir einen Verweis auf ein {{htmlelement("p")}}-Element, zu dem wir unser Ergebnis ausgeben, und definieren dann ein Objekt zur Einfuhr in Wasm, das eine einzelne Funktion enthält, die einen Wert an den Ausgabe-`<p>`-Tag schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei das Objekt importiert wird.

```html hidden live-sample___simd_lt
<p></p>
```

```js live-sample___simd_lt
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `i32`-Parameter enthält. Wir deklarieren dann zwei SIMD `f32x4`-Werte und prüfen, ob die Bahnwerte des ersten kleiner als die des zweiten sind, indem wir `f32x4.lt` verwenden. Schließlich extrahieren wir den Wert, der in Bahn `3` des Ausgabewertes gespeichert ist, mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Anweisung und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_lt
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const f32x4 20 12 15 102
    v128.const f32x4 20 12 15 100

    ;; check whether the first value is less than the second
    f32x4.lt
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_lt", "100%", 100)}}

Das Ergebnis ist `0`, da der Wert, der in Bahn `3` des ersten Eingabewertes gespeichert ist, nicht kleiner als der Wert ist, der in Bahn `3` des zweiten Eingabewertes gespeichert ist.

## Siehe auch

- [`lt_s`](/de/docs/WebAssembly/Reference/Numeric/lt_s)
- [`lt_u`](/de/docs/WebAssembly/Reference/Numeric/lt_u)
