---
title: "shl: Wasm Textanweisung"
short-title: shl
slug: WebAssembly/Reference/Numeric/shl
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`shl`**-Anweisung, kurz für _shift-left_, wird verwendet, um eine bitweise Linksverschiebung auszuführen, ähnlich wie der **`<<`**-Operator in anderen Sprachen.

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
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
- `shl`
  - : Die `shl`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

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

Für eine nicht-SIMD `shl` sind `input` und `output` einfache numerische Werte wie `3` oder `10`.

Für eine [SIMD](/de/docs/WebAssembly/Reference/SIMD) `shl` sind `input` und `output` [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen, z.B. `i32x4 4 8 12 16`. Jede Spur des Ausgabewerts auf dem Stack enthält die entsprechende Spur im Eingabewert, verschoben nach links um den angegebenen `shift_value`.

### Binärcodierung

| Anweisung   | Binärformat    | Beispieletext => binär          |
| ----------- | -------------- | ------------------------------- |
| `i32.shl`   | `0x74`         | `i32.shl` => `0x74`             |
| `i64.shl`   | `0x86`         | `i64.shl` => `0x86`             |
| `i8x16.shl` | `0xfd 107:u32` | `i8x16.shl` => `0xfd 0x6b`      |
| `i16x8.shl` | `0xfd 139:u32` | `i16x8.shl` => `0xfd 0x8b 0x01` |
| `i32x4.shl` | `0xfd 171:u32` | `i32x4.shl` => `0xfd 0xab 0x01` |
| `i64x2.shl` | `0xfd 203:u32` | `i64x2.shl` => `0xfd 0xcb 0x01` |

## Beispiele

### Grundlegende Verwendung

```wat
;; load two numbers onto the stack
i32.const 7   ;; 00000111
i32.const 1   ;; left shift one spot

;; perform a bitwise left-shift
i32.shl

;; the top item on the stack will now be 14 (00001110)
```

### SIMD Linksverschiebung

In diesem Beispiel demonstrieren wir die Durchführung einer Linksverschiebung auf einem SIMD-Wert und die Ausgabe eines der Spurwerte.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, in das wir unser Ergebnis ausgeben werden. Dann definieren wir ein Objekt zum Importieren in Wasm, das eine einzige Funktion enthält, die einen Wert in das Ausgabeelement `<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das Objekt importieren.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `i32`-Parameter hat. Dann deklarieren wir einen SIMD `i32x4`-Wert, den wir mit `i32x4.shl` um 2 nach links verschieben. Schließlich extrahieren wir den Wert, der in Spur `3` des Ausgabe-SIMD-Werts gespeichert ist, mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Anweisung, und geben ihn an den DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

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

Das Ergebnis ist `48`, weil der Wert, der in Spur `3` des Eingabewerts gespeichert ist, `12` ist. Sobald dieser um zwei Positionen nach links verschoben wird, enthält die Spur `3` des Ausgabewerts den Wert `48`.

## Siehe auch

- [`shr_s`](/de/docs/WebAssembly/Reference/Numeric/shr_s)
- [`shr_u`](/de/docs/WebAssembly/Reference/Numeric/shr_u)
