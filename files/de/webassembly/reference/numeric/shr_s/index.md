---
title: "shr_s: Wasm-Text-Anweisung"
short-title: shr_s
slug: WebAssembly/Reference/Numeric/shr_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`shr_s`**-Anweisungen, kurz für _shift-right signed_, werden verwendet, um eine bitweise Rechtsverschiebung auf vorzeichenbehafteten Ganzzahlen durchzuführen, ähnlich dem **`>>>`**-Operator in anderen Sprachen.

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
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
- `shr_s`
  - : Die `shr_s`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input, shift_value] -> [output]
```

- `input`
  - : Der Eingabewert.
- `shift_value`
  - : Der Wert, um den Sie den Wert verschieben möchten.
- `output`
  - : Der Ausgabewert.

Für ein nicht SIMD `shr_s` sind der `input` und `output` einfache numerische Werte wie `3` oder `12`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `shr_s` sind der `input` und `output` [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wert-Interpretationen, zum Beispiel `i32x4 2 30 86 120`. Jede Lane des Ausgabes, die auf den Stack geschoben wird, enthält die entsprechende Lane des Eingabewertes, der um den angegebenen `shift_value` nach rechts verschoben wurde.

### Binärkodierung

| Anweisung     | Binärformat    | Beispiel-Text => binär            |
| ------------- | -------------- | --------------------------------- |
| `i32.shr_s`   | `0x75`         | `i32.shr_s` => `0x75`             |
| `i64.shr_s`   | `0x87`         | `i64.shr_s` => `0x87`             |
| `i8x16.shr_s` | `0xfd 108:u32` | `i8x16.shr_s` => `0xfd 0x6c`      |
| `i16x8.shr_s` | `0xfd 140:u32` | `i16x8.shr_s` => `0xfd 0x8c 0x01` |
| `i32x4.shr_s` | `0xfd 172:u32` | `i32x4.shr_s` => `0xfd 0xac 0x01` |
| `i64x2.shr_s` | `0xfd 204:u32` | `i64x2.shr_s` => `0xfd 0xcc 0x01` |

### SIMD-Rechtsverschiebung

In diesem Beispiel demonstrieren wir das Ausführen einer Rechtsverschiebung auf einem SIMD-Wert und die Ausgabe eines der Lane-Werte.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, an das wir unser Ergebnis ausgeben werden. Dann definieren wir ein Objekt zur Importierung in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabeelement `<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), während wir das Objekt im Prozess importieren.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, und stellen sicher, dass sie einen `i32` Parameter hat. Wir deklarieren dann einen SIMD `i16x8` Wert und verschieben ihn mit `i16x8.shr_s` um 2 nach rechts. Schließlich extrahieren wir den in der Lane `6` des Ausgabe-SIMD-Wertes gespeicherten Wert mithilfe der [`extract_lane_s`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane_s)-Anweisung und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

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

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_shr_s", "100%", 100)}}

Das Ergebnis ist `22`, weil der in Lane `6` des Eingabewertes gespeicherte Wert `91` ist. Einmal um zwei Positionen nach rechts verschoben, enthält die Lane `6` des Ausgabe-Wertes den Wert `22`.

## Siehe auch

- [`shl`](/de/docs/WebAssembly/Reference/Numeric/shl)
- [`shr_u`](/de/docs/WebAssembly/Reference/Numeric/shr_u)
