---
title: end
slug: WebAssembly/Reference/Control_flow/end
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

**`end`** wird verwendet, um einen `block`, `loop`, `if` oder `else` zu beenden. In den anderen Beispielen haben wir die s-Expression-Syntax verwendet, die das `end` nicht benötigt, deshalb werden Sie es in den anderen Beispielen hier nicht finden. Es ist jedoch trotzdem nützlich, darüber Bescheid zu wissen, da dies in den Entwicklerwerkzeugen der Browser angezeigt wird.

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

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `end`     | `0x0b`         |
