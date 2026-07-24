---
title: "shl: Wasm numerische Anweisung"
short-title: shl
slug: WebAssembly/Reference/Numeric/shl
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`shl`**-[numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric), kurz für _shift-left_, wird verwendet, um eine bitweise Linksverschiebung durchzuführen, ähnlich dem **`<<`**-Operator in anderen Sprachen.

{{InteractiveExample("Wat Demo: shl", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "shift_left") (param $num i32) (param $by i32) (result i32)
    ;; load the number to shift and the by how many spots
    local.get $num
    local.get $by

    ;; shift and return the result
    i32.shl
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const shift_left = result.instance.exports.shift_left;

    const res = shift_left(0b11100000_00000000_00000000_00000000, 1);
    console.log(numToBin(res));
    // Expected output: "11000000_00000000_00000000_00000000"
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
value_type.shl
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `shl`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
- `shl`
  - : Die `shl`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

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

Für eine Nicht-SIMD-`shl` sind `input` und `output` einfache numerische Werte wie `3` oder `10`.

Für eine [SIMD](/de/docs/WebAssembly/Reference/SIMD) `shl` sind `input` und `output` [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Werteinterpretationen, zum Beispiel `i32x4 4 8 12 16`. Jeder Lane des Outputs, der auf den Stapel verschoben wird, enthält die entsprechende Lane im Eingabewert, die um den angegebenen `shift_value` nach links verschoben wurde.

### Binärcodierung

| Anweisung   | Binärformat    | Beispieltext => Binär           |
| ----------- | -------------- | ------------------------------- |
| `i32.shl`   | `0x74`         | `i32.shl` => `0x74`             |
| `i64.shl`   | `0x86`         | `i64.shl` => `0x86`             |
| `i8x16.shl` | `0xfd 107:u32` | `i8x16.shl` => `0xfd 0x6b`      |
| `i16x8.shl` | `0xfd 139:u32` | `i16x8.shl` => `0xfd 0x8b 0x01` |
| `i32x4.shl` | `0xfd 171:u32` | `i32x4.shl` => `0xfd 0xab 0x01` |
| `i64x2.shl` | `0xfd 203:u32` | `i64x2.shl` => `0xfd 0xcb 0x01` |

## Beispiele

### Grundlegende Nutzung

```wat
;; load two numbers onto the stack
i32.const 7   ;; 00000111
i32.const 1   ;; left shift one spot

;; perform a bitwise left-shift
i32.shl

;; the top item on the stack will now be 14 (00001110)
```

### SIMD-Linksschiebung

In diesem Beispiel demonstrieren wir eine Linksverschiebung auf einem SIMD-Wert und die Ausgabe eines der Lane-Werte.

#### JavaScript

In unserem Skript holen wir einen Verweis auf ein {{htmlelement("p")}}-Element, an das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt zum Import in Wasm, das eine einzige Funktion enthält, die einen Wert an das Ausgabe-`<p>` schreibt. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das Objekt im Prozess importieren.

```html hidden live-sample___simd_shl
<p></p>
```

```js live-sample___simd_shl
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, achten darauf, dass wir angeben, dass sie einen `i32`-Parameter hat. Wir deklarieren dann einen SIMD-`i32x4`-Wert, verschieben ihn dann mit `i32x4.shl` um 2 nach links. Schließlich extrahieren wir den in Lane `3` des Ausgabe-SIMD-Werts gespeicherten Wert mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Anweisung und geben ihn an das DOM aus, indem wir die importierte Funktion `output()` aufrufen.

```wat live-sample___simd_shl
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 9 10 11 12
    i32.const 2

    i32x4.shl ;; shift-left by 2
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_shl", "100%", 100)}}

Das Ergebnis ist `48`, da der in Lane `3` des Eingabewertes gespeicherte Wert `12` ist. Nach einer Linksverschiebung um zwei Positionen enthält Lane `3` des Ausgabe-Wertes den Wert `48`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shr_s`](/de/docs/WebAssembly/Reference/Numeric/shr_s)
- [`shr_u`](/de/docs/WebAssembly/Reference/Numeric/shr_u)
