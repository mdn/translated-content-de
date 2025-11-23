---
title: "select: Wasm-Textinstruktion"
short-title: select
slug: WebAssembly/Reference/Control_flow/select
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`select`**-Instruktion wählt einen ihrer ersten beiden Operanden basierend darauf aus, ob ihr dritter Operand Null ist oder nicht. Sie teilt einige Gemeinsamkeiten mit dem ternären Operator in anderen Sprachen (z.B. `false ? 10 : 20`), führt jedoch keine [Kurzschlussauswertung](https://en.wikipedia.org/wiki/Short-circuit_evaluation) durch. Die Instruktion kann von einem sofortigen Werttyp gefolgt werden: `select (result T)`. `select (result T)` verwendet einen anderen binären Opcode und erlaubt andere Typen als die, die durch das WebAssembly-MVP eingeführt wurden (`i32`, `i64`, `f32`, `f64`). Zum Beispiel erlaubt es die Auswahl zwischen zwei `externref`-Werten.

{{InteractiveExample("Wat Demo: select", "tabbed-taller")}}

```wat interactive-example
(module
  (func (export "select_simple") (result i32)
    ;; load two values onto the stack
    i32.const 10
    i32.const 20

    ;; change to `1` (true) to get the first value (`10`)
    i32.const 0
    select
  )
  (func (export "select_externref") (param $value externref) (param $condition i32) (result externref)
    ;; this is "select t", the explicitly typed variant
    ref.null extern
    local.get $value
    local.get $condition
    select (result externref)
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url)).then((result) => {
  const { select_simple, select_externref } = result.instance.exports;

  console.log(select_simple());
  // Expected output: 20

  // If the second parameter is zero, returns the first parameter (which may be an arbitrary JS value)
  const map = new Map();
  console.log(select_externref(map, 0));
  // Expected output: [object Map]
  console.log(select_externref(map, -1));
  // Expected output: null
});
```

## Syntax

```wat
;; push two values onto the stack
i32.const 10
i32.const 20

;; change to `1` (true) to get the first value (`10`)
i32.const 0
select
```

```plain
f32.const nan
f32.const -54.1

;; change to `1` (true) to get the first value (`nan`)
i32.const 0
select (result f32)
```

| Instruktion | Binärer Opcode |
| ----------- | -------------- |
| `select`    | `0x1b`         |
| `select t`  | `0x1c`         |
