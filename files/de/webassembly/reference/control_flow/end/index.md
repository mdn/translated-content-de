---
title: end
slug: WebAssembly/Reference/Control_flow/end
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

**`end`** wird verwendet, um einen `block`, `loop`, `if` oder `else` zu beenden. In den anderen Beispielen haben wir die S-Ausdruck-Syntax verwendet, die das `end` nicht benötigt, daher werden Sie es in den anderen hier gezeigten Beispielen nicht finden. Es ist jedoch nützlich, davon zu wissen, da dies das ist, was die Browser in den Entwicklerwerkzeugen anzeigen.

{{EmbedInteractiveExample("pages/wat/end.html", "tabbed-taller")}}

## Syntax

```wasm
i32.const 0
if
  ;; do something
end
```

| Instruktion | Binärer Opcode |
| ----------- | -------------- |
| `end`       | `0x0b`         |
