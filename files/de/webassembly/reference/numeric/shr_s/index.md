---
title: "shr_s: Wasm-Textanweisung"
short-title: shr_s
slug: WebAssembly/Reference/Numeric/shr_s
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`shr_s`**-Anweisungen, kurz für _shift-right signed_, werden verwendet, um einen bitweisen Rechtsshift auf vorzeichenbehafteten Ganzzahlen durchzuführen, ähnlich dem **`>>>`**-Operator in anderen Programmiersprachen.

{{InteractiveExample("Wat Demo: shr_s", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "shift_right") (param $num i32) (param $by i32) (result i32)
    ;; load the number to shift and the by how many spots
    local.get $num
    local.get $by

    ;; shift and return the result
    i32.shr_s
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const shift_right = result.instance.exports.shift_right;

    const res = shift_right(0b00000000_00000000_00000000_00000111, 1);
    console.log(numToBin(res));
    // Expected output: "00000000_00000000_00000000_00000011"
  },
);

function numToBin(num) {
  return (num >>> 0)
    .toString(2)
    .padStart(32, "0")
    .match(/.{1,8}/g)
    .join("_");
}
```

## Syntax

```plain
value_type.shr_s
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `shr_s`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
- `shr_s`
  - : Die `shr_s`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) stehen.

### Typ

```plain
[input, shift_value] -> [output]
```

- `input`
  - : Der Eingabewert.
- `shift_value`
  - : Der Wert, um den Sie den Eingabewert verschieben möchten.
- `output`
  - : Der Ausgabewert.

Für ein nicht-SIMD `shr_s` sind `input` und `output` einfache numerische Werte wie `3` oder `12`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `shr_s` werden `input` und `output` als [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen behandelt, zum Beispiel `i32x4 2 30 86 120`. Jede Lane des auf den Stack geschobenen Outputs enthält die entsprechende Lane im Eingabewert, der um den angegebenen `shift_value` nach rechts verschoben wird.

### Binäre Kodierung

| Anweisung     | Binärformat    | Beispieltext => binär             |
| ------------- | -------------- | --------------------------------- |
| `i32.shr_s`   | `0x75`         | `i32.shr_s` => `0x75`             |
| `i64.shr_s`   | `0x87`         | `i64.shr_s` => `0x87`             |
| `i8x16.shr_s` | `0xfd 108:u32` | `i8x16.shr_s` => `0xfd 0x6c`      |
| `i16x8.shr_s` | `0xfd 140:u32` | `i16x8.shr_s` => `0xfd 0x8c 0x01` |
| `i32x4.shr_s` | `0xfd 172:u32` | `i32x4.shr_s` => `0xfd 0xac 0x01` |
| `i64x2.shr_s` | `0xfd 204:u32` | `i64x2.shr_s` => `0xfd 0xcc 0x01` |

### SIMD-Rechtsshift

In diesem Beispiel demonstrieren wir das Ausführen eines Rechtsshifts auf einem SIMD-Wert und das Ausgeben eines der Lane-Werte.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, an das wir unser Ergebnis ausgeben. Dann definieren wir ein Objekt zum Import in Wasm, das eine einzige Funktion enthält, die einen Wert an das `<p>`-Element schreibt. Danach kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das Objekt im Prozess importieren.

```html hidden live-sample___simd_shr_s
<p></p>
```

```js live-sample___simd_shr_s
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, und stellen sicher, dass sie einen `i32`-Parameter hat. Dann deklarieren wir einen SIMD `i16x8`-Wert, den wir durch `i16x8.shr_s` um 2 nach rechts verschieben. Schließlich extrahieren wir den in Lane `6` gespeicherten Wert des ausgegebenen SIMD-Wertes mit der Anweisung [`extract_lane_s`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane_s) und geben ihn an das DOM aus, indem wir die importierte Funktion `output()` aufrufen.

```wat live-sample___simd_shr_s
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i16x8 9 10 11 12 89 90 91 92
    i32.const 2

    i16x8.shr_s ;; shift-right by 2
    i16x8.extract_lane_s 6 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe lautet wie folgt:

{{embedlivesample("simd_shr_s", "100%", 100)}}

Das Ergebnis ist `22`, da der in Lane `6` des Eingabewertes gespeicherte Wert `91` ist. Nachdem er um zwei Positionen nach rechts verschoben wurde, enthält Lane `6` des Ausgabewertes den Wert `22`.

## Siehe auch

- [`shl`](/de/docs/WebAssembly/Reference/Numeric/shl)
- [`shr_u`](/de/docs/WebAssembly/Reference/Numeric/shr_u)
