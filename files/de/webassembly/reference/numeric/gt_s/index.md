---
title: "gt_s: Wasm-Textanweisung"
short-title: gt_s
slug: WebAssembly/Reference/Numeric/gt_s
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`gt_s`**-Anweisung, kurz für _greater than signed_, überprüft, ob eine vorzeichenbehaftete ganze Zahl größer ist als eine andere vorzeichenbehaftete ganze Zahl.

Es gibt weitere `gt`-Anweisungen:

- [**`gt_u`**](/de/docs/WebAssembly/Reference/Numeric/gt_u) für den Vergleich von nicht vorzeichenbehafteten ganzen Zahlen.
- [**`gt`**](/de/docs/WebAssembly/Reference/Numeric/gt) für den Vergleich von Gleitkommazahlen.

{{InteractiveExample("Wat Demo: gt_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10 and 3 onto the stack
    i32.const 10
    i32.const 3

    i32.gt_s ;; check if 10 is greater than 3
    call $log_bool ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";

function log_bool(value) {
  console.log(Boolean(value));
  // Expected output: true
}

await WebAssembly.instantiateStreaming(fetch(url), {
  env: { log_bool },
});
```

## Syntax

```plain
value_type.gt_s
```

- `value_type`
  - : Der Wertetyp, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `gt_s`:
    - `i32`
    - `i64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Interpretationen:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
- `gt_s`
  - : Die `gt_s`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert, der ein Ganzzahltyp sein wird.

Bei einem nicht-SIMD `gt_s` sind die Eingaben einfache numerische Werte wie `3` oder `12`. Wenn die erste Eingabe größer ist als die zweite Eingabe, wird `1` als Ausgabe auf den Stapel gelegt, andernfalls `0`.

Bei einem [SIMD](/de/docs/WebAssembly/Reference/SIMD) `gt_s` sind die Eingaben [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Werteinterpretationen, zum Beispiel `i32x4 2 30 86 120`. Jede Spur der Ausgabe, die auf den Stapel gelegt wird, ist eine `1` oder `0`, welche angibt, ob die entsprechende Spur des ersten Eingabewerts größer ist als die entsprechende Spur des zweiten Eingabewerts.

### Binärcodierung

| Anweisung    | Binärformat    | Beispieltext => binär            |
| ------------ | -------------- | -------------------------------- |
| `i32.gt_s`   | `0x4a`         | `i32.gt_s` => `0x4a`             |
| `i64.gt_s`   | `0x55`         | `i64.gt_s` => `0x55`             |
| `i8x16.gt_s` | `0xfd 39:u32`  | `i8x16.gt_s` => `0xfd 0x27`      |
| `i16x8.gt_s` | `0xfd 49:u32`  | `i16x8.gt_s` => `0xfd 0x31`      |
| `i32x4.gt_s` | `0xfd 59:u32`  | `i32x4.gt_s` => `0xfd 0x3b`      |
| `i64x2.gt_s` | `0xfd 217:u32` | `i64x2.gt_s` => `0xfd 0xd9 0x01` |

## Beispiele

### SIMD-`gt_s`-Beispiel

In diesem Beispiel demonstrieren wir die Verwendung von `gt_s`, um zu testen, ob ein SIMD-Spurwert größer ist als der gleiche Spurwert in einem anderen SIMD-Wert.

#### JavaScript

In unserem Skript erhalten wir eine Referenz auf ein {{htmlelement("p")}}-Element, in das wir unser Ergebnis ausgeben, und definieren dann ein Objekt zum Importieren in Wasm, das eine einzelne Funktion enthält, die einen Wert in das Ausgabeelement `<p>` schreibt. Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das Objekt im Prozess importieren.

```html hidden live-sample___simd_gt_s
<p></p>
```

```js live-sample___simd_gt_s
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie einen `i32`-Parameter hat. Dann deklarieren wir zwei SIMD `i32x4`-Werte und überprüfen, ob die Spurwerte des ersten Wertes größer sind als die des zweiten durch die Verwendung von `i32x4.gt_s`. Schließlich extrahieren wir den Wert der Spur `3` des Ausgabewerts mit der [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)-Anweisung und geben ihn an das DOM aus, indem wir die importierte `output()`-Funktion aufrufen.

```wat live-sample___simd_gt_s
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 20 12 15 102
    v128.const i32x4 20 12 15 100

    ;; check whether the first value is greater than the second
    i32x4.gt_s
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("simd_gt_s", "100%", 100)}}

Das Ergebnis ist `1`, weil der Wert, der in Spur `3` des ersten Eingabewerts gespeichert ist, größer ist als der Wert, der in Spur `3` des zweiten Eingabewerts gespeichert ist.

## Siehe auch

- [`gt`](/de/docs/WebAssembly/Reference/Numeric/gt)
- [`gt_u`](/de/docs/WebAssembly/Reference/Numeric/gt_u)
