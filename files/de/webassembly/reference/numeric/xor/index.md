---
title: XOR
slug: WebAssembly/Reference/Numeric/XOR
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`xor`** Instruktionen werden verwendet, um ein bitweises XOR durchzuführen, ähnlich dem **`^`** Operator in anderen Sprachen.

{{EmbedInteractiveExample("pages/wat/xor.html", "tabbed-taller")}}

## Syntax

```wasm
;; zwei Zahlen auf den Stapel laden
i32.const 5   ;; 00000101
i32.const 3   ;; 00000011

;; ein bitweises XOR ausführen
i32.xor

;; das oberste Element auf dem Stapel ist nun 6 (00000110)
```

| Anweisung   | Binäroperation |
| ----------- | -------------- |
| `i32.xor`   | `0x73`         |
| `i64.xor`   | `0x85`         |
