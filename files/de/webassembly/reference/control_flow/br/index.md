---
title: "br: Wasm-Textanweisung"
short-title: br
slug: WebAssembly/Reference/Control_flow/br
l10n:
  sourceCommit: 25dddb3e99e238788a27b33a7965076b3df57d44
---

Die **`br`**-Anweisung verzweigt zu einer [`loop`](/de/docs/WebAssembly/Reference/Control_flow/loop), einem [`block`](/de/docs/WebAssembly/Reference/Control_flow/block) oder einer [`if`](/de/docs/WebAssembly/Reference/Control_flow/if...else)-Anweisung.

Weitere Varianten von `br` umfassen [`br_if`](/de/docs/WebAssembly/Reference/Control_flow/br_if) und [`br_table`](/de/docs/WebAssembly/Reference/Control_flow/br_table).

{{InteractiveExample("Wat Demo: br", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import the browser console object, which you'll need to pass in from JavaScript
  (import "console" "log" (func $log (param i32)))

  (func
    (block $my_block

      ;; Break out of the block
      ;; If this is removed, the code will throw an error when it reaches `unreachable`
      br $my_block

      ;; The code will never reach this point since we broke out of the block
      unreachable

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

| Anweisung | Binäropcode |
| --------- | ----------- |
| `br`      | `0x0c`      |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
