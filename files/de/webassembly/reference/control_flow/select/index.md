---
title: Select
slug: WebAssembly/Reference/Control_flow/Select
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`select`** Anweisung wählt einen ihrer ersten beiden Operanden basierend darauf aus, ob ihr dritter Operand null ist oder nicht. Sie weist einige Ähnlichkeiten mit dem ternären Operator in anderen Sprachen auf (z.B. `false ? 10 : 20`), führt jedoch kein [Short-Circuit](https://en.wikipedia.org/wiki/Short-circuit_evaluation) durch. Die Anweisung kann von einem unmittelbaren Wertetyp gefolgt werden: `select (result T)`. `select (result T)` verwendet einen anderen binären Opcode und erlaubt Typen, die neben denen eingeführt durch das WebAssembly MVP (`i32`, `i64`, `f32`, `f64`) existieren. Zum Beispiel erlaubt es die Auswahl zwischen zwei `externref` Werten.

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

| Anweisung  | Binär-Opcode |
| ---------- | ------------ |
| `select`   | `0x1b`       |
| `select t` | `0x1c`       |
