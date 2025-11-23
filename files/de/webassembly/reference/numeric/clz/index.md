---
title: "clz: Wasm-Textanweisung"
short-title: clz
slug: WebAssembly/Reference/Numeric/clz
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`clz`**-Anweisungen, kurz für _count leading zeros_ (zähle führende Nullen), werden verwendet, um die Anzahl der Nullen am Anfang der binären Darstellung einer Zahl zu zählen.

{{InteractiveExample("Wat Demo: clz", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "leading0") (param $num i32) (result i32)
    ;; load number onto the stack
    local.get $num

    ;; check how many leading zeros and return the result
    i32.clz
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const leading0 = result.instance.exports.leading0;

    console.log(
      `Leading zeros: ${leading0(0b00000000_10000000_00000000_00000000)}`,
    );
    // Expected output: "Leading zeros: 8"
  },
);
```

## Syntax

```wat
;; load a number onto the stack
i32.const 8388608 ;; 00000000_10000000_00000000_00000000

;; count leading zeros
i32.clz

;; the top item on the stack will now be 8
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `i32.clz` | `0x67`         |
| `i64.clz` | `0x79`         |
