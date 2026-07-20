---
title: "loop: Wasm Text-Instruktion"
short-title: loop
slug: WebAssembly/Reference/Control_flow/loop
l10n:
  sourceCommit: 25dddb3e99e238788a27b33a7965076b3df57d44
---

Die **`loop`**-Anweisung erstellt ein Label, zu dem später mit einem `br` verzweigt werden kann. Die Loop-Instruktion selbst führt keine Schleife aus; Sie müssen zu ihr verzweigen, um tatsächlich eine Schleife zu erstellen.

Die **`loop`**-Anweisung ist das Gegenteil der `block`-Anweisung, insofern als das Verzweigen zu einer `loop` zum Anfang der Schleife springt, während das Verzweigen zu einem `block` zum Ende des Blocks, also aus dem Block heraus, springt.

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

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `loop`    | `0x03`         |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
