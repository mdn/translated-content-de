---
title: Const
slug: WebAssembly/Reference/Numeric/Const
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die Anweisung **`const`** wird verwendet, um Zahlen zu deklarieren.

{{EmbedInteractiveExample("pages/wat/const.html", "tabbed-standard")}}

## Syntax

```wasm
;; push `5` onto the stack
i32.const 5
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `i32.const` | `0x41`         |
| `i64.const` | `0x42`         |
| `f32.const` | `0x43`         |
| `f64.const` | `0x44`         |
