---
title: end
slug: WebAssembly/Reference/Control_flow/end
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

**`end`** wird verwendet, um einen `block`, `loop`, `if` oder `else` zu beenden. In den anderen Beispielen haben wir die s-Ausdruck-Syntax verwendet, die nicht das `end` erfordert, daher werden Sie es in den anderen Beispielen hier nicht finden. Es ist jedoch dennoch nützlich zu wissen, da dies das ist, was die Browser in den Entwicklertools anzeigen.

{{EmbedInteractiveExample("pages/wat/end.html", "tabbed-taller")}}

## Syntax

```wasm
i32.const 0
if
  ;; do something
end
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `end`       | `0x0b`        |
