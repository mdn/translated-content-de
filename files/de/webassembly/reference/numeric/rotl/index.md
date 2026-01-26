---
title: "rotl: Wasm Text-Instruktion"
short-title: rotl
slug: WebAssembly/Reference/Numeric/rotl
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`rotl`** Anweisungen, kurz für _rotate-left_, werden verwendet, um eine bitweise Linksrotation durchzuführen.

{{InteractiveExample("Wat Demo: rotl", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "rotate_left") (param $num i32) (param $by i32) (result i32)
    ;; load the number to rotate and the by how many spots
    local.get $num
    local.get $by

    ;; rotate and return the result
    i32.rotl
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const rotate_left = result.instance.exports.rotate_left;

    const res = rotate_left(0b11100000_00000000_00000000_00000000, 1);
    console.log(numToBin(res));
    // Expected output: "11000000_00000000_00000000_00000001"
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

```wat
;; load two numbers onto the stack
i32.const 3758096384 ;; 11100000_00000000_00000000_00000000
i32.const 1          ;; left rotate one spot

;; perform a bitwise left-rotate
i32.rotl

;; the top item on the stack will now be 3221225473
;; (11000000_00000000_00000000_00000001)
```

| Instruktion | Binärer Opcode |
| ----------- | -------------- |
| `i32.rotl`  | `0x77`         |
| `i64.rotl`  | `0x89`         |
