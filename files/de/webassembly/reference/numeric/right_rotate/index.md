---
title: Right rotate
slug: WebAssembly/Reference/Numeric/Right_rotate
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`rotr`** Anweisungen, eine Abkürzung für _rotate-right_, werden verwendet, um eine bitweise Rechtsrotation durchzuführen.

{{EmbedInteractiveExample("pages/wat/rotr.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 7   ;; 00000000_00000000_00000000_00000111
i32.const 1   ;; right rotate one spot

;; perform a bitwise right-rotate
i32.rotr

;; the top item on the stack will now be 2147483651
;; (10000000_00000000_00000000_00000011)
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `i32.rotr`  | `0x78`         |
| `i64.rotr`  | `0x8a`         |
