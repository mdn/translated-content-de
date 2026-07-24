---
title: "xor: Wasm numerische Anweisung"
short-title: xor
slug: WebAssembly/Reference/Numeric/xor
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`xor`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) wird für die Durchführung eines bitweisen XOR verwendet, ähnlich dem **`^`** Operator in anderen Programmiersprachen.

{{InteractiveExample("Wat Demo: xor", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "xor") (param $a i32) (param $b i32) (result i32)
    ;; load both numbers onto the stack
    local.get $a
    local.get $b

    ;; `xor` both numbers and return the result
    i32.xor
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const xor = result.instance.exports.xor;

    const res = xor(0b10000010, 0b01101111);
    console.log(numToBin(res));
    // Expected output: "11101101"
  },
);

function numToBin(num) {
  return (num >>> 0).toString(2).padStart(8, "0");
}
```

## Syntax

```plain
value_type.xor
```

- `value_type`
  - : Der Typ des Werts, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `xor`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)
- `xor`
  - : Die `xor` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert.

Bei einem nicht-SIMD `xor` sind dies grundlegende numerische Werte wie `14` oder `3`.

Bei einem [SIMD](/de/docs/WebAssembly/Reference/SIMD) `xor` sind dies [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen, zum Beispiel `i32x4 9 4 -16 100`. Jede Bahn des zur Stack ausgegebenen Ergebnisses ist das bitweise XOR der entsprechenden Bahnen in den Eingabewerten.

### Binäre Kodierung

| Anweisung  | Binärformat   | Beispieltext => binär     |
| ---------- | ------------- | ------------------------- |
| `i32.xor`  | `0x73`        | `i32.xor` => `0x73`       |
| `i64.xor`  | `0x85`        | `i64.xor` => `0x85`       |
| `v128.xor` | `0xfd 81:u32` | `v128.xor` => `0xfd 0x51` |

## Beispiele

### SIMD xor Beispiel

In diesem Beispiel demonstrieren wir die Ausführung von `v128.xor` auf zwei SIMD-Werten und die Ausgabe eines der Bahnwerte des Ergebnisses.

#### JavaScript

In unserem Skript nehmen wir eine Referenz zu einem {{htmlelement("p")}} Element, zu dem wir unser Ergebnis ausgeben werden, dann definieren wir ein Objekt für den Import in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabe-`<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), indem wir das Objekt im Prozess importieren.

```html hidden live-sample___simd_xor
<p></p>
```

```js live-sample___simd_xor
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `i32`-Parameter besitzt. Dann deklarieren wir zwei SIMD `i32x4` Werte und verwenden `v128.xor`, um die Bits der Binärdarstellung jedes Wertes zu "xor". Schließlich extrahieren wir den Wert, der in Bahn `3` des Ausgabewerts gespeichert ist, mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) Anweisung und geben ihn in das DOM aus, indem wir die importierte `output()` Funktion aufrufen.

```wat live-sample___simd_xor
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 12 10 11 782
    v128.const i32x4 12 14 15 400

    v128.xor ;; "xor" the two values
    i32x4.extract_lane 3 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_xor", "100%", 100)}}

`670` wird ausgegeben, weil dies das Ergebnis des "xor"-Verfahrens auf Bahn 3 des ersten Wertes (`782`) und des zweiten Wertes (`400`) ist. Wenn Sie sich ihre binären Äquivalente ansehen, wird klar, wie dies funktioniert:

```plain
782 = 0000 0011 0000 1110
400 = 0000 0001 1001 0000
      -------------------
XOR = 0000 0010 1001 1110 = 670
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
