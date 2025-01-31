---
title: end
slug: WebAssembly/Reference/Control_flow/end
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

**`end`** wird verwendet, um einen `Block`, `Loop`, `if` oder `else` zu beenden. In den anderen Beispielen haben wir die S-Expressions-Syntax verwendet, die das `end` nicht erfordert, daher werden Sie es in den anderen Beispielen hier nicht finden. Dennoch ist es nützlich, darüber Bescheid zu wissen, da es das ist, was die Browser in den Entwicklerwerkzeugen anzeigen.

{{EmbedInteractiveExample("pages/wat/end.html", "tabbed-taller")}}

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
