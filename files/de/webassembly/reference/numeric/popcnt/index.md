---
title: "popcnt: Wasm-Textanweisung"
short-title: popcnt
slug: WebAssembly/Reference/Numeric/popcnt
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`popcnt`**-Anweisungen, kurz für _Population Count_, werden verwendet, um die Anzahl von `1` in der binären Darstellung einer Zahl zu zählen.

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

```wat
;; load a number onto the stack
i32.const 130 ;; 10000010

;; count the 1s
i32.popcnt

;; the top item on the stack will now be 2
```

| Anweisung    | Binärer Opcode |
| ------------ | -------------- |
| `i32.popcnt` | `0x69`         |
| `i64.popcnt` | `0x7b`         |
