---
title: end
slug: WebAssembly/Reference/Control_flow/end
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

**`end`** wird verwendet, um einen `block`, `loop`, `if` oder `else` zu beenden. In den anderen Beispielen haben wir die S-Expressions-Syntax verwendet, die das `end` nicht benötigt, daher werden Sie es in den anderen Beispielen hier nicht finden. Dennoch ist es nützlich, darüber Bescheid zu wissen, da dies das ist, was die Browser in den Entwicklerwerkzeugen anzeigen.

{{EmbedInteractiveExample("pages/wat/end.html", "tabbed-taller")}}

## Syntax

```wasm
i32.const 0
if
  ;; do something
end
```

| Anweisung    | Binärer Opcode |
| ------------ | -------------- |
| `end`        | `0x0b`         |
