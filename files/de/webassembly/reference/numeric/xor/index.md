---
title: XOR
slug: WebAssembly/Reference/Numeric/XOR
l10n:
  sourceCommit: 5af6da1da593fae9b3208eb9fd308213d5c3359c
---

Die **`xor`**-Anweisungen werden verwendet, um ein bitweises XOR durchzuführen, ähnlich dem **`^`**-Operator in anderen Programmiersprachen.

{{InteractiveExample("Wat Demo: xor", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "xor") (param $a i32) (param $b i32) (result i32)
    ;; load both numbers onto the stack
    local.get $a
    local.get $b

    ;; `xor` both numbers and return the result
    i32.xor
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const xor = result.instance.exports.xor;

    const res = xor(0b10000010, 0b01101111);
    console.log(numToBin(res));
    // Expected output: "11101101"
  },
);

function numToBin(num) {
  return (num >>> 0).toString(2).padStart(8, "0");
}
```

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 5   ;; 00000101
i32.const 3   ;; 00000011

;; perform a bitwise XOR
i32.xor

;; the top item on the stack will now be 6 (00000110)
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `i32.xor` | `0x73`         |
| `i64.xor` | `0x85`         |
