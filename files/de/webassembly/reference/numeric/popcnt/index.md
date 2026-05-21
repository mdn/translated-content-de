---
title: "popcnt: Wasm-Textanweisung"
short-title: popcnt
slug: WebAssembly/Reference/Numeric/popcnt
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`popcnt`**-Anweisung, kurz für _population count_ (Bit-Population), wird verwendet, um die Anzahl der `1`en in der binären Darstellung einer Zahl zu zählen.

{{InteractiveExample("Wat Demo: popcnt", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "count1s") (param $num i32) (result i32)
    ;; load the number onto the stack
    local.get $num

    ;; count the amount of 1s and return the result
    i32.popcnt
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const count1s = result.instance.exports.count1s;

    console.log(count1s(0b10000010));
    // Expected output: 2
  },
);
```

## Syntax

```plain
value_type.popcnt
```

- `value_type`
  - : Der Wertetyp, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `popcnt`:
    - `i32`
    - `i64`
    - `i8x16` [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretation
- `popcnt`
  - : Die `popcnt`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) stehen.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Der Eingabewert.
- `output`
  - : Der Ausgabewert.

Bei einem nicht-SIMD `popcnt` sind dies einfache numerische Werte wie `3`.

Bei einem [SIMD](/de/docs/WebAssembly/Reference/SIMD) `popcnt` sind dies [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen, zum Beispiel `i8x16 0 1 34 12 2 2 2 8 19 20 3 -1 -45 0 0 30`. Jede Lane des ausgegebenen Werts, der auf den Stapel geschoben wird, enthält die Anzahl der `1`en im Binäräquivalent der entsprechenden Lane im Eingabewert.

### Binärcodierung

| Anweisung      | Binärformat   | Beispiel Text => binär        |
| -------------- | ------------- | ----------------------------- |
| `i32.popcnt`   | `0x69`        | `i32.popcnt` => `0x69`        |
| `i64.popcnt`   | `0x7b`        | `i64.popcnt` => `0x7b`        |
| `i8x16.popcnt` | `0xfd 98:u32` | `i8x16.popcnt` => `0xfd 0x62` |

## Beispiele

### Nutzung von SIMD popcnt

In diesem Beispiel demonstrieren wir die Verwendung von `popcnt`, um die Anzahl der `1`en in der binären Darstellung des Inhalts einer SIMD-Wertelane zu zählen.

#### JavaScript

In unserem Skript holen wir uns eine Referenz auf ein {{htmlelement("p")}}-Element, an das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt zum Importieren in Wasm, das eine einzelne Funktion enthält, die einen Wert an das Ausgabe-`<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

```html hidden live-sample___simd_popcnt
<p></p>
```

```js live-sample___simd_popcnt
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

In unserem Wasm-Modul importieren wir zunächst die JavaScript-Funktion `output()`, wobei wir darauf achten, dass sie einen `i32`-Parameter hat. Wir deklarieren dann einen SIMD `i8x16`-Wert und verwenden `i8x16.popcnt`, um die binären `1`en in allen dessen Lanes zu zählen. Schließlich extrahieren wir den in Lane `15` des Ausgabe-Wertes gespeicherten Wert mit der Anweisung [`extract_lane_s`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane_s) und geben ihn an das DOM aus, indem wir die importierte Funktion `output()` aufrufen.

```wat live-sample___simd_popcnt
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load a SIMD value onto the stack
    v128.const i8x16 0 1 34 12 2 2 2 8 19 20 3 -1 -45 0 0 30

    i8x16.popcnt ;; count 1s in all the lanes and output as a new i8x16 value
    i8x16.extract_lane_s 15 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_popcnt", "100%", 100)}}

`4` wird ausgegeben, weil der Wert in Lane 15 des Eingabewerts `30` ist. `30` in binär ist `00011110`, welches 4 `1`en enthält.
