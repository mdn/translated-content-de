---
title: end
slug: WebAssembly/Reference/Control_flow/end
l10n:
  sourceCommit: 5af6da1da593fae9b3208eb9fd308213d5c3359c
---

**`end`** wird verwendet, um einen `block`, eine `Schleife`, ein `if` oder ein `else` zu beenden. In den anderen Beispielen haben wir die S-Expression-Syntax verwendet, die `end` nicht erfordert, daher werden Sie es in den anderen Beispielen hier nicht finden. Es ist jedoch dennoch nützlich, davon zu wissen, da dies das ist, was die Browser in den DevTools anzeigen.

{{InteractiveExample("Wat Demo: end", "tabbed-taller")}}

```wat interactive-example
(module
  ;; import the browser console object, you'll need to pass this in from JavaScript
  (import "console" "log" (func $log (param i32)))

  (func
    i32.const 0 ;; change to positive number if you want to run the if block
    if
      i32.const 1
      call $log ;; should log '1'
    end
  )

  (start 1) ;; run the first function automatically
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```wasm
i32.const 0
if
  ;; do something
end
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `end`     | `0x0b`         |
