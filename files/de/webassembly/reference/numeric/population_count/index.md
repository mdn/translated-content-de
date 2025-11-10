---
title: Population count
slug: WebAssembly/Reference/Numeric/Population_count
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`popcnt`** Anweisungen, kurz für _population count_, werden verwendet, um die Anzahl der `1`en in der binären Darstellung einer Zahl zu zählen.

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

| Anweisung    | Binär-Opcode |
| ------------ | ------------ |
| `i32.popcnt` | `0x69`       |
| `i64.popcnt` | `0x7b`       |
