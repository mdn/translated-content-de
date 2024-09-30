---
title: AND
slug: WebAssembly/Reference/Numeric/AND
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`and`**-Anweisungen werden verwendet, um ein bitweises UND zu durchführen, ähnlich dem **`&`** Operator in anderen Sprachen.

{{EmbedInteractiveExample("pages/wat/and.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 5   ;; 00000101
i32.const 3   ;; 00000011

;; perform a bitwise AND
i32.and

;; the top item on the stack will now be 1 (00000001)
```

| Anweisung   | Binäroperationscode |
| ----------- | -------------------- |
| `i32.and`   | `0x71`               |
| `i64.and`   | `0x83`               |
