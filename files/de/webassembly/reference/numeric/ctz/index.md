---
title: "ctz: Wasm-Textanweisung"
short-title: ctz
slug: WebAssembly/Reference/Numeric/ctz
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`ctz`**-Anweisungen, kurz für _count trailing zeros_, werden verwendet, um die Anzahl der Nullen am Ende der binären Darstellung von Zahlen zu zählen.

{{InteractiveExample("Wat Demo: ctz", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "trailing0") (param $num i32) (result i32)
    ;; load  number onto the stack
    local.get $num

    ;; check how many trailing zeros and return the result
    i32.ctz
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const trailing0 = result.instance.exports.trailing0;

    console.log(
      `Trailing zeros: ${trailing0(0b00000000_10000000_00000000_00000000)}`,
    );
    // Expected output: "Trailing zeros: 23"
  },
);
```

## Syntax

```wat
;; load a number onto the stack
i32.const 8388608 ;; 00000000_10000000_00000000_00000000

;; count trailing zeros
i32.ctz

;; the top item on the stack will now be 23
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `i32.ctz` | `0x68`         |
| `i64.ctz` | `0x7a`         |
