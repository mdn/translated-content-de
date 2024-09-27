---
title: Extend
slug: WebAssembly/Reference/Numeric/Extend
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`extend`**-Anweisungen werden verwendet, um Zahlen vom Typ `i32` in den Typ `i64` zu konvertieren (erweitern). Es gibt signierte und unsignierte Versionen dieser Anweisung.

{{EmbedInteractiveExample("pages/wat/extend.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an i32 onto the stack
i32.const 10

;; sign-extend from i32 to i64
i64.extend_i32_s

;; the top item on the stack will now be the value 10 of type i64
```

| Anweisung          | Binärcode |
| ------------------ | --------- |
| `i64.extend_i32_s` | `0xac`    |
| `i64.extend_i32_u` | `0xad`    |
