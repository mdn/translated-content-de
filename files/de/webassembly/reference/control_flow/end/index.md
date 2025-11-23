---
title: "end: Wasm text Instruction"
short-title: end
slug: WebAssembly/Reference/Control_flow/end
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

**`end`** wird verwendet, um einen `block`, `loop`, `if` oder `else` zu beenden. In den anderen Beispielen haben wir die S-Expression-Syntax verwendet, die kein `end` benötigt, daher werden Sie es in den anderen Beispielen hier nicht finden. Es ist jedoch dennoch nützlich zu wissen, da dies das ist, was die Browser in den Entwicklungstools anzeigen.

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

```wat
i32.const 0
if
  ;; do something
end
```

| Anleitung | Binärer Opcode |
| --------- | -------------- |
| `end`     | `0x0b`         |
