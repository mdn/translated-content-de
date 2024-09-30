---
title: XOR
slug: WebAssembly/Reference/Numeric/XOR
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`xor`** Anweisungen werden verwendet, um eine bitweise XOR-Operation durchzuführen, ähnlich dem **`^`** Operator in anderen Sprachen.

{{EmbedInteractiveExample("pages/wat/xor.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 5   ;; 00000101
i32.const 3   ;; 00000011

;; perform a bitwise XOR
i32.xor

;; the top item on the stack will now be 6 (00000110)
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `i32.xor`   | `0x73`         |
| `i64.xor`   | `0x85`         |
