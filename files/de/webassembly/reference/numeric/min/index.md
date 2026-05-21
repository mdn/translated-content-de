---
title: "min: Wasm Textanweisung"
short-title: min
slug: WebAssembly/Reference/Numeric/min
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`min`** Anweisung wird verwendet, um den kleineren von zwei Zahlen zu ermitteln.

{{InteractiveExample("Wat Demo: min", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    ;; load 10 and 2 onto the stack
    f32.const 10
    f32.const 2

    f32.min ;; calculate the lower number
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```plain
value_type.min
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `min`:
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen:
      - `f32x4`
      - `f64x2`
- `min`
  - : Die `min` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

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

Für ein nicht-SIMD `min` sind die Eingaben grundlegende numerische Werte wie `3.0` oder `3.5`, und der `output` ist der kleinere von `input1` und `input2`.

Für ein [SIMD](/de/docs/WebAssembly/Reference/SIMD) `min` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen, z.B. `f32x4 2.0 30 86.9 120`. Jede Spur der Ausgabe, die in den Stapel gepusht wird, ist die kleinere der entsprechenden Spuren in den Eingabewerten.

### Binäre Kodierung

| Anweisung   | Binärformat    | Beispieltext => Binär           |
| ----------- | -------------- | ------------------------------- |
| `f32.min`   | `0x96`         | `f32.min` => `0x96`             |
| `f64.min`   | `0xa4`         | `f64.min` => `0xa4`             |
| `f32x4.min` | `0xfd 232:u32` | `f32x4.min` => `0xfd 0xe8 0x01` |
| `f64x2.min` | `0xfd 244:u32` | `f64x2.min` => `0xfd 0xf4 0x01` |

## Beispiele

### SIMD `min` Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `min`, um den kleineren Wert des gleichen Spurindex aus zwei SIMD-Werten zurückzugeben.

#### JavaScript

In unserem Skript holen wir eine Referenz zu einem {{htmlelement("p")}}-Element, auf das wir unser Ergebnis ausgeben werden, und definieren dann ein Objekt zum Importieren in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabefeld `<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das Objekt.

```html hidden live-sample___simd_min
<p></p>
```

```js live-sample___simd_min
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `f32`-Parameter hat. Dann deklarieren wir zwei SIMD `f32x4`-Werte und verwenden `f32x4.min`, um einen neuen `f32x4`-Wert zurückzugeben, der in jedem Fall den niedrigeren Spurwert der beiden Eingaben enthält. Schließlich extrahieren wir den in Spur `3` des Ausgabewerts gespeicherten Wert mithilfe der Anweisung [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane), und geben ihn durch Aufrufen der importierten Funktion `output()` in den DOM aus.

```wat live-sample___simd_min
(module
  ;; Import output function
  (import "obj" "output" (func $output (param f32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const f32x4 20 0 1015 1000
    v128.const f32x4 4 38 15 108

    ;; Return a new f32x4 containing the highest lane value in each case
    f32x4.min
    f32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_min", "100%", 100)}}

Das Ergebnis ist `108`. Dies liegt daran, dass der in Spur `3` des ersten Eingabewerts gespeicherte Wert `1000` ist und der in Spur `3` des zweiten Eingabewerts gespeicherte Wert `108` ist. Da `108` kleiner ist als `1000`, hat der neue `f32x4`-Wert, der durch die `f32x4.min`-Anweisung ausgegeben wird, `108` in Spur `3`, den wir dann extrahieren und in den DOM ausgeben.

## Siehe auch

- [`min_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/min_s)
- [`min_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/min_u)
