---
title: "shr_u: Wasm-Textanweisung"
short-title: shr_u
slug: WebAssembly/Reference/Numeric/shr_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`shr_u`**-Anweisungen, kurz für _shift-right unsigned_, werden verwendet, um einen bitweisen Rechts-Shift auf vorzeichenlose Ganzzahlen durchzuführen, ähnlich dem **`>>>`**-Operator in anderen Sprachen.

{{InteractiveExample("Wat Demo: shr_u", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "shift_right") (param $num i32) (param $by i32) (result i32)
    ;; load the number to shift and the by how many spots
    local.get $num
    local.get $by

    ;; shift and return the result
    i32.shr_u
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
value_type.shr_u
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `shr_u`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
- `shr_u`
  - : Die `shr_u`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) inkludiert werden.

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

Bei einem Nicht-SIMD-`shr_u` sind `input` und `output` einfache numerische Werte wie `3` oder `12`.

Bei einem [SIMD](/de/docs/WebAssembly/Reference/SIMD)-`shr_u` sind `input` und `output` [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen, zum Beispiel `i32x4 2 30 86 120`. Jede Spur des auf den Stapel geschobenen Outputs enthält die entsprechende Spur im Eingabewert, um den spezifizierten `shift_value` nach rechts verschoben.

### Binäre Kodierung

| Anweisung     | Binärformat    | Beispieltext => binär             |
| ------------- | -------------- | --------------------------------- |
| `i32.shr_u`   | `0x76`         | `i32.shr_u` => `0x76`             |
| `i64.shr_u`   | `0x88`         | `i64.shr_u` => `0x88`             |
| `i8x16.shr_u` | `0xfd 109:u32` | `i8x16.shr_u` => `0xfd 0x6d`      |
| `i16x8.shr_u` | `0xfd 141:u32` | `i16x8.shr_u` => `0xfd 0x8d 0x01` |
| `i32x4.shr_u` | `0xfd 173:u32` | `i32x4.shr_u` => `0xfd 0xad 0x01` |
| `i64x2.shr_u` | `0xfd 205:u32` | `i64x2.shr_u` => `0xfd 0xcd 0x01` |

### SIMD-Rechts-Shift

In diesem Beispiel demonstrieren wir, wie ein Rechts-Shift auf einem SIMD-Wert durchgeführt wird und wie einer der Spurwerte ausgegeben wird.

#### JavaScript

In unserem Skript greifen wir auf ein {{htmlelement("p")}}-Element zu, das wir für die Ausgabe unseres Ergebnisses verwenden, und definieren dann ein Objekt zum Import in Wasm, das eine einzelne Funktion enthält, die einen Wert an die Ausgabe `<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

```html hidden live-sample___simd_shr_u
<p></p>
```

```js live-sample___simd_shr_u
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `i32`-Parameter hat. Dann deklarieren wir einen SIMD-`i16x8`-Wert und verschieben ihn dann mit `i16x8.shr_u` um 2 nach rechts. Schließlich extrahieren wir den in der Spur `6` des Ausgabe-SIMD-Werts gespeicherten Wert mit der Anweisung [`extract_lane_u`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane_u) und geben ihn an das DOM aus, indem wir die importierte Funktion `output()` aufrufen.

```wat live-sample___simd_shr_u
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i16x8 9 10 11 12 89 90 91 92
    i32.const 2

    i16x8.shr_u ;; shift-right by 2
    i16x8.extract_lane_u 6 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_shr_u", "100%", 100)}}

Das Ergebnis ist `22`, weil der in Spur `6` des Eingabewertes gespeicherte Wert `91` ist. Nach einer Rechtsverschiebung um zwei Positionen enthält die Spur `6` des Ausgabewerts den Wert `22`.

## Siehe auch

- [`shl`](/de/docs/WebAssembly/Reference/Numeric/shl)
- [`shr_s`](/de/docs/WebAssembly/Reference/Numeric/shr_s)
