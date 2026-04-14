---
title: "and: Wasm-Textinstruktion"
short-title: and
slug: WebAssembly/Reference/Numeric/and
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`and`**-Instruktion wird zum Durchführen eines bitweisen UND verwendet, ähnlich wie der **`&`**-Operator in anderen Sprachen.

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
  - : Der Typ des Wertes, auf den die Instruktion angewendet wird. Die folgenden Typen unterstützen `and`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)
- `and`
  - : Die `and`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

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

Bei einem nicht-SIMD `and` sind dies grundlegende numerische Werte wie `14` oder `3`.

Bei einem [SIMD](/de/docs/WebAssembly/Reference/SIMD) `and` sind dies [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen, zum Beispiel `i32x4 9 4 -16 100`. Jede Lane des in den Stack geschobenen Ergebnisses ist das bitweise UND der entsprechenden Lanes in den Eingabewerten.

### Binäre Kodierung

| Instruktion | Binärformat   | Beispieltext => binär     |
| ----------- | ------------- | ------------------------- |
| `i32.and`   | `0x71`        | `i32.and` => `0x71`       |
| `i64.and`   | `0x83`        | `i64.and` => `0x83`       |
| `v128.and`  | `0xfd 78:u32` | `v128.and` => `0xfd 0x4e` |

## Beispiele

### SIMD and Beispiel

In diesem Beispiel demonstrieren wir, wie `v128.and` auf zwei SIMD-Werte angewendet wird und einen der Lane-Werte des Ergebnisses ausgeben wird.

#### JavaScript

In unserem Skript greifen wir auf ein {{htmlelement("p")}}-Element zu, an das wir unser Ergebnis ausgeben werden. Dann definieren wir ein Objekt zur Importierung in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabe-`<p>` schreibt. Danach kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren das Objekt während des Prozesses.

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

In unserem Wasm-Modul importieren wir zunächst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `i32`-Parameter hat. Dann deklarieren wir zwei SIMD-`i32x4`-Werte und verwenden `v128.and`, um die Bits der binären Darstellung jedes Wertes zu verknüpfen. Schließlich extrahieren wir den Wert aus Lane `3` des Ausgabewertes mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Instruktion und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

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

`256` wird ausgegeben, da dies das Ergebnis des Verknüpfens der Lane 3 des ersten Wertes (`782`) und des zweiten Wertes (`400`) ist. Wenn Sie sich ihre binären Äquivalente ansehen, wird klar, wie das funktioniert:

```plain
782 = 0000 0011 0000 1110
400 = 0000 0001 1001 0000
      -------------------
AND = 0000 0001 0000 0000 = 256
```
