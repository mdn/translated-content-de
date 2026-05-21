---
title: "or: Wasm-Textanweisung"
short-title: or
slug: WebAssembly/Reference/Numeric/or
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`or`** Anweisung wird für die Durchführung einer bitweisen Oder-Operation verwendet, ähnlich dem **`|`** Operator in anderen Sprachen.

{{InteractiveExample("Wat Demo: or", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "or") (param $a i32) (param $b i32) (result i32)
    ;; load both numbers onto the stack
    local.get $a
    local.get $b

    ;; `or` both numbers and return the result
    i32.or
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const or = result.instance.exports.or;

    const res = or(0b10000010, 0b01101111);
    console.log(numToBin(res));
    // Expected output: "11101111"
  },
);

function numToBin(num) {
  return (num >>> 0).toString(2).padStart(8, "0");
}
```

## Syntax

```plain
value_type.or
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `or`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)
- `or`
  - : Die `or` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

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

Für ein nicht-SIMD `or` sind dies grundlegende numerische Werte wie `14` oder `3`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `or` sind dies [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen, z.B. `i32x4 9 4 -16 100`. Jedes Lane des zur Stapel hinzugefügten Ausgabewertes ist das bitweise OR der entsprechenden Lanes in den Eingabewerten.

### Binäre Kodierung

| Anweisung | Binäre Format | Beispieltext => Binär    |
| --------- | ------------- | ------------------------ |
| `i32.or`  | `0x72`        | `i32.or` => `0x72`       |
| `i64.or`  | `0x84`        | `i64.or` => `0x84`       |
| `v128.or` | `0xfd 80:u32` | `v128.or` => `0xfd 0x50` |

## Beispiele

### SIMD or Beispiel

In diesem Beispiel demonstrieren wir die Ausführung von `v128.or` auf zwei SIMD-Werten und die Ausgabe eines der Lane-Werte des Ergebnisses.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, auf das wir unser Ergebnis ausgeben werden. Dann definieren wir ein Objekt zum Import in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabeelement `<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mithilfe der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei das Objekt importiert wird.

```html hidden live-sample___simd_or
<p></p>
```

```js live-sample___simd_or
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

In unserem Wasm-Modul importieren wir zunächst die JavaScript-`output()`-Funktion und stellen sicher, dass sie einen `i32`-Parameter hat. Wir deklarieren dann zwei SIMD `i32x4` Werte und verwenden `v128.or`, um die Bits der binären Darstellung jedes Wertes zu "odern". Schließlich extrahieren wir den im Lane `3` gespeicherten Wert des Ausgabewertes mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane) Anweisung und geben ihn durch Aufrufen der importierten `output()` Funktion an das DOM aus.

```wat live-sample___simd_or
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 12 10 11 782
    v128.const i32x4 12 14 15 400

    v128.or ;; "or" the two values
    i32x4.extract_lane 3 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe lautet wie folgt:

{{embedlivesample("simd_or", "100%", 100)}}

`926` wird ausgegeben, da dies das Ergebnis des "Or"-Vorgangs für Lane 3 des ersten Wertes (`782`) und des zweiten Wertes (`400`) ist. Wenn Sie sich deren binäre Äquivalente ansehen, wird klar, wie das funktioniert:

```plain
782 = 0000 0011 0000 1110
400 = 0000 0001 1001 0000
      -------------------
 OR = 0000 0011 1001 1110 = 926
```
