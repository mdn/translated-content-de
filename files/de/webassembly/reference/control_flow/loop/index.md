---
title: "loop: Wasm-Textinstruktion"
short-title: loop
slug: WebAssembly/Reference/Control_flow/loop
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`loop`**-Anweisung erstellt ein Label, zu dem später mit einem `br` verzweigt werden kann. Die Loop-Instruktion führt nicht von selbst eine Schleife aus; es ist notwendig, zu ihr zu verzweigen, um tatsächlich eine Schleife zu erstellen.

Die **`loop`**-Anweisung ist das Gegenteil der `block`-Anweisung, in dem Sinne, dass ein Verzweigen zu einer `loop` zum Anfang der Schleife springt, während ein Verzweigen zu einem `block` zum Ende des Blocks springt, also aus dem Block heraus.

{{InteractiveExample("Wat Demo: loop", "tabbed-taller")}}

```wat interactive-example
(module
  ;; import the browser console object, you'll need to pass this in from JavaScript
  (import "console" "log" (func $log (param i32)))

  (func
    ;; create a local variable and initialize it to 0
    (local $i i32)

    (loop $my_loop

      ;; add one to $i
      local.get $i
      i32.const 1
      i32.add
      local.set $i

      ;; log the current value of $i
      local.get $i
      call $log

      ;; if $i is less than 10 branch to loop
      local.get $i
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

| Instruktion | Binärer Opcode |
| ----------- | -------------- |
| `loop`      | `0x03`         |
