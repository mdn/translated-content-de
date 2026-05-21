---
title: "and: Wasm-Textanweisung"
short-title: and
slug: WebAssembly/Reference/Numeric/and
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`and`**-Anweisung wird verwendet, um ein bitweises UND durchzuführen, ähnlich dem **`&`**-Operator in anderen Sprachen.

{{InteractiveExample("Wat Demo: and", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "and") (param $a i32) (param $b i32) (result i32)
    ;; load both numbers onto the stack
    local.get $a
    local.get $b

    ;; `and` both numbers and return the result
    i32.and
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const and = result.instance.exports.and;

    const res = and(0b10000010, 0b01101111);
    console.log(numToBin(res));
    // Expected output: "00000010"
  },
);

function numToBin(num) {
  return (num >>> 0).toString(2).padStart(8, "0");
}
```

## Syntax

```plain
value_type.and
```

- `value_type`
  - : Der Wertetyp, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `and`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)
- `and`
  - : Die `and`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

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

Für ein nicht-SIMD `and` sind dies grundlegende numerische Werte wie `14` oder `3`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `and` sind dies [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Werteinterpretationen, zum Beispiel `i32x4 9 4 -16 100`. Jede Lane der zum Stapel gepushten Ausgabe ist das bitweise UND der entsprechenden Lanes in den Eingabewerten.

### Binäre Kodierung

| Anweisung  | Binärformat   | Beispieltext => binär     |
| ---------- | ------------- | ------------------------- |
| `i32.and`  | `0x71`        | `i32.and` => `0x71`       |
| `i64.and`  | `0x83`        | `i64.and` => `0x83`       |
| `v128.and` | `0xfd 78:u32` | `v128.and` => `0xfd 0x4e` |

## Beispiele

### Beispiel für SIMD and

In diesem Beispiel demonstrieren wir das Ausführen von `v128.and` auf zwei SIMD-Werten und das Ausgeben eines der Lane-Werte des Ergebnisses.

#### JavaScript

In unserem Skript greifen wir auf eine Referenz zu einem {{htmlelement("p")}}-Element zu, an das wir unser Ergebnis ausgeben werden. Dann definieren wir ein Objekt zum Import in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabe-`<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), indem wir das Objekt im Prozess importieren.

```html hidden live-sample___simd_and
<p></p>
```

```js live-sample___simd_and
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass diese einen `i32`-Parameter hat. Dann deklarieren wir zwei SIMD `i32x4`-Werte und verwenden `v128.and`, um die Bits jeder Wertdarstellung zu "und"-en. Schließlich extrahieren wir den in Lane `3` gespeicherten Wert der Ausgabe mithilfe der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Anweisung und geben ihn in das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_and
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 12 10 11 782
    v128.const i32x4 12 14 15 400

    v128.and ;; "and" the two values
    i32x4.extract_lane 3 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_and", "100%", 100)}}

`256` wird ausgegeben, weil dies das Ergebnis des "and"-ens von Lane 3 des ersten Wertes (`782`) und des zweiten Wertes (`400`) ist. Wenn Sie sich deren binäre Äquivalente ansehen, wird klar, wie dies funktioniert:

```plain
782 = 0000 0011 0000 1110
400 = 0000 0001 1001 0000
      -------------------
AND = 0000 0001 0000 0000 = 256
```
