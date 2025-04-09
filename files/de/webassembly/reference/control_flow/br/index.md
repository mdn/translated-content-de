---
title: br
slug: WebAssembly/Reference/Control_flow/br
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`br`**-Anweisung verzweigt zu einer Schleife, einem Block oder einem If.

Andere Varianten von `br` sind `br_if` zum Verzweigen bei einer Bedingung und `br_table` zum Verzweigen zu verschiedenen Blöcken basierend auf einem Argument.

{{InteractiveExample("Wat Demo: br", "tabbed-taller")}}

```wat interactive-example
(module
  ;; import the browser console object, you'll need to pass this in from JavaScript
  (import "console" "log" (func $log (param i32)))

  ;; create a global variable and initialize it to 0
  (global $i (mut i32) (i32.const 0))

  (func
    (loop $my_loop

      ;; add one to $i
      global.get $i
      i32.const 1
      i32.add
      global.set $i

      ;; log the current value of $i
      global.get $i
      call $log

      ;; if $i is less than 10 branch to loop
      global.get $i
      i32.const 10
      i32.lt_s
      br_if $my_loop

    )
  )

  (start 1) ;; run the first function automatically
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```wat
;; label the loop so that it can be branched to
(loop $my_loop

  ;; branch to the loop.
  ;; most of the time you'll want to put this in an if statement and only branch on condition,
  ;; otherwise you have an infinite loop.
  br $my_loop

)
```

| Anweisung  | Binärer Opcode |
| ---------- | -------------- |
| `br`       | `0x0c`         |
| `br_if`    | `0x0d`         |
| `br_table` | `0x0e`         |
