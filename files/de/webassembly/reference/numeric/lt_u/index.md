---
title: "lt_u: Wasm Textanweisung"
short-title: lt_u
slug: WebAssembly/Reference/Numeric/lt_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`lt_u`**-Anweisung, kurz für _less than unsigned_, prüft, ob eine unsignierte Ganzzahl kleiner als eine andere unsignierte Ganzzahl ist.

Es gibt weitere `lt`-Anweisungen:

- [**`lt_s`**](/de/docs/WebAssembly/Reference/Numeric/lt_s) zum Vergleichen signierter Ganzzahlen.
- [**`lt`**](/de/docs/WebAssembly/Reference/Numeric/lt) zum Vergleichen von Gleitkommazahlen.

{{InteractiveExample("Wat Demo: lt_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10 and 3 onto the stack
    i32.const 10
    i32.const 3

    i32.lt_u ;; check if 10 is greater than 3
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
value_type.lt_u
```

- `value_type`
  - : Der Wertetyp, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `lt_u`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
- `lt_u`
  - : Die `lt_u`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) hinzugefügt werden.

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

Bei einem nicht-SIMD `lt_u` sind die Eingaben einfache numerische Werte wie `3` oder `12`. Ist die erste Eingabe kleiner als die zweite Eingabe, wird `1` auf den Stapel als Ausgabe geschoben, andernfalls `0`.

Bei einem [SIMD](/de/docs/WebAssembly/Reference/SIMD) `lt_u` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Werteinterpretationen, z.B. `i32x4 2 30 86 120`. Jede Bahn der auf den Stapel geschobenen Ausgabe ist eine `1` oder `0`, die anzeigt, ob die entsprechende Bahn des ersten Eingabewertes kleiner als die entsprechende Bahn des zweiten Eingabewertes ist.

### Binäre Kodierung

| Anweisung    | Binärformat   | Beispieltext => binär       |
| ------------ | ------------- | --------------------------- |
| `i32.lt_u`   | `0x49`        | `i32.lt_u` => `0x49`        |
| `i64.lt_u`   | `0x54`        | `i64.lt_u` => `0x54`        |
| `i8x16.lt_u` | `0xfd 38:u32` | `i8x16.lt_u` => `0xfd 0x26` |
| `i16x8.lt_u` | `0xfd 48:u32` | `i16x8.lt_u` => `0xfd 0x30` |
| `i32x4.lt_u` | `0xfd 58:u32` | `i32x4.lt_u` => `0xfd 0x3a` |

## Beispiele

### SIMD `lt_u` Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `lt_u`, um zu testen, ob ein SIMD-Bahnwert kleiner als derselbe Bahnwert in einem anderen SIMD-Wert ist.

#### JavaScript

In unserem Skript erhalten wir eine Referenz zu einem {{htmlelement("p")}}-Element, an das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt für den Import nach Wasm, das eine einzelne Funktion enthält, die einen Wert an die Ausgabe `<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

```html hidden live-sample___simd_lt_u
<p></p>
```

```js live-sample___simd_lt_u
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

In unserem Wasm-Modul importieren wir zunächst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `i32`-Parameter hat. Wir deklarieren dann zwei SIMD `i32x4`-Werte und überprüfen, ob die Bahnenwerte des ersten kleiner als die des zweiten sind, indem wir `i32x4.lt_u` verwenden. Schließlich extrahieren wir den in Bahn `3` des Ausgabe-Werts gespeicherten Wert mithilfe der Anweisung [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) und geben ihn an das DOM aus, indem wir die importierte Funktion `output()` aufrufen.

```wat live-sample___simd_lt_u
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 20 12 15 102
    v128.const i32x4 20 12 15 100

    ;; check whether the first value is less than the second
    i32x4.lt_u
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_lt_u", "100%", 100)}}

Das Ergebnis ist `0`, da der in Bahn `3` des ersten Eingabewerts gespeicherte Wert nicht kleiner ist als der in Bahn `3` des zweiten Eingabewerts gespeicherte Wert.

## Siehe auch

- [`lt`](/de/docs/WebAssembly/Reference/Numeric/lt)
- [`lt_s`](/de/docs/WebAssembly/Reference/Numeric/lt_s)
