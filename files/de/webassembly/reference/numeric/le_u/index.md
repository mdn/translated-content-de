---
title: "le_u: Wasm-Textinstruktion"
short-title: le_u
slug: WebAssembly/Reference/Numeric/le_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`le_u`**-Instruktion, kurz für _less or equal unsigned_ (kleiner oder gleich ohne Vorzeichen), überprüft, ob eine Ganzzahl ohne Vorzeichen kleiner oder gleich einer anderen Ganzzahl ohne Vorzeichen ist.

Es gibt andere `le`-Instruktionen:

- [**`le_s`**](/de/docs/WebAssembly/Reference/Numeric/le_s) zum Vergleichen von Ganzzahlen mit Vorzeichen.
- [**`le`**](/de/docs/WebAssembly/Reference/Numeric/le) zum Vergleichen von Fließkommazahlen.

{{InteractiveExample("Wat Demo: le_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10 and 3 onto the stack
    i32.const 10
    i32.const 3

    i32.le_u ;; check if 10 is less than or equal to 3
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
value_type.le_u
```

- `value_type`
  - : Der Typ des Wertes, auf den die Instruktion angewendet wird. Die folgenden Typen unterstützen `le_u`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
- `le_u`
  - : Die `le_u`-Instruktion. Muss stets nach dem `value_type` und einem Punkt (`.`) folgen.

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

Für ein nicht-SIMD `le_u` werden die Eingaben einfache numerische Werte wie `3` oder `12` sein. Wenn der erste Eingabewert kleiner oder gleich dem zweiten ist, wird `1` auf den Stack geschoben, andernfalls wird `0` auf den Stack geschoben.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `le_u` werden die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen sein, zum Beispiel `i32x4 2 30 86 120`. Jede Spur der Ausgabe, die auf den Stack geschoben wird, ist eine `1` oder `0`, die anzeigt, ob die entsprechende Spur des ersten Eingabewertes kleiner oder gleich der entsprechenden Spur des zweiten Eingabewertes ist.

### Binäre Kodierung

| Instruktion  | Binärformat   | Beispieltext => binär       |
| ------------ | ------------- | --------------------------- |
| `i32.le_u`   | `0x4d`        | `i32.le_u` => `0x4d`        |
| `i64.le_u`   | `0x58`        | `i64.le_u` => `0x58`        |
| `i8x16.le_u` | `0xfd 42:u32` | `i8x16.le_u` => `0xfd 0x2a` |
| `i16x8.le_u` | `0xfd 52:u32` | `i16x8.le_u` => `0xfd 0x34` |
| `i32x4.le_u` | `0xfd 62:u32` | `i32x4.le_u` => `0xfd 0x3e` |

## Beispiele

### SIMD `le_u` Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `le_u`, um zu testen, ob ein SIMD-Spurenwert kleiner oder gleich demselben Spurenwert in einem anderen SIMD-Wert ist.

#### JavaScript

In unserem Skript greifen wir auf ein {{htmlelement("p")}}-Element zu, in das wir unser Ergebnis ausgeben, und definieren dann ein Objekt zum Importieren in Wasm, das eine einzige Funktion enthält, die einen Wert an das Ausgabe-`<p>` schreibt. Danach kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

```html hidden live-sample___simd_le_u
<p></p>
```

```js live-sample___simd_le_u
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion und stellen sicher, dass sie einen `i32`-Parameter hat. Dann deklarieren wir zwei SIMD `i32x4`-Werte und überprüfen, ob die Spurenwerte des ersten kleiner oder gleich denen des zweiten sind, indem `i32x4.le_u` verwendet wird. Schließlich extrahieren wir den Wert, der in Spur `3` des Ausgangswerts gespeichert ist, mithilfe der Instruktion [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_le_u
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 20 12 15 102
    v128.const i32x4 20 12 15 100

    ;; check whether the first value is less than or equal to the second
    i32x4.le_u
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_le_u", "100%", 100)}}

Das Ergebnis ist `0`, da der Wert, der in Spur `3` des ersten Eingabewerts gespeichert ist, nicht kleiner oder gleich dem Wert ist, der in Spur `3` des zweiten Eingabewerts gespeichert ist.

## Siehe auch

- [`le`](/de/docs/WebAssembly/Reference/Numeric/le)
- [`le_s`](/de/docs/WebAssembly/Reference/Numeric/le_s)
