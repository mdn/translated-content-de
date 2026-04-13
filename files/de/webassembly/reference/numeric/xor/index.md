---
title: "xor: Wasm-Textbefehl"
short-title: xor
slug: WebAssembly/Reference/Numeric/xor
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Der **`xor`**-Befehl wird verwendet, um ein bitweises XOR auszuführen, ähnlich dem **`^`**-Operator in anderen Sprachen.

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
  - : Der Wertetyp, auf dem der Befehl ausgeführt wird. Die folgenden Typen unterstützen `xor`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)
- `xor`
  - : Der `xor`-Befehl. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

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

Für ein nicht-SIMD `xor` sind dies einfache numerische Werte wie `14` oder `3`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `xor` sind dies `v128` Werteinterpretationen, wie zum Beispiel `i32x4 9 4 -16 100`. Jedes "Lane" des ausgegebenen Werts, der auf den Stack gepusht wird, ist das bitweise XOR der entsprechenden "Lanes" in den Eingabewerten.

### Binärcodierung

| Instruktion | Binärformat   | Beispieltext => binär     |
| ----------- | ------------- | ------------------------- |
| `i32.xor`   | `0x73`        | `i32.xor` => `0x73`       |
| `i64.xor`   | `0x85`        | `i64.xor` => `0x85`       |
| `v128.xor`  | `0xfd 81:u32` | `v128.xor` => `0xfd 0x51` |

## Beispiele

### SIMD xor Beispiel

In diesem Beispiel demonstrieren wir die Ausführung von `v128.xor` auf zwei SIMD-Werten und geben einen der Lanes des Ergebnisses aus.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, um dort unser Ergebnis auszugeben. Dann definieren wir ein Objekt, das als Import nach Wasm eine einzige Funktion enthält, die einen Wert in das Ausgabe-`<p>` schreibt. Wir kompilieren und instanziieren unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion und stellen sicher, dass sie einen `i32`-Parameter hat. Dann deklarieren wir zwei SIMD `i32x4`-Werte und verwenden `v128.xor`, um die Bits der binären Darstellung jedes Wertes zu "xoren". Schließlich extrahieren wir den in Lane `3` gespeicherten Wert des Ausgabewertes mit dem [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Befehl und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

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

`670` wird ausgegeben, da dies das Ergebnis des “xores” von Lane 3 des ersten Werts (`782`) und des zweiten Werts (`400`) ist. Wenn Sie sich deren binäre Äquivalente anschauen, wird deutlich, wie dies funktioniert:

```plain
782 = 0000 0011 0000 1110
400 = 0000 0001 1001 0000
      -------------------
XOR = 0000 0010 1001 1110 = 670
```
