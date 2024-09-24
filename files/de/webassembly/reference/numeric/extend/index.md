---
title: Erweitern
slug: WebAssembly/Reference/Numeric/Extend
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`extend`** Anweisungen werden verwendet, um Zahlen vom Typ `i32` in den Typ `i64` zu konvertieren (erweitern). Es gibt signierte und unsignierte Versionen dieser Anweisung.

{{EmbedInteractiveExample("pages/wat/extend.html", "tabbed-taller")}}

## Syntax

```wasm
;; Pushen Sie ein i32 auf den Stack
i32.const 10

;; signierter Erweiterung von i32 zu i64
i64.extend_i32_s

;; das oberste Element auf dem Stack ist nun der Wert 10 vom Typ i64
```

| Anweisung          | Binärer Opcode |
| ------------------ | -------------- |
| `i64.extend_i32_s` | `0xac`         |
| `i64.extend_i32_u` | `0xad`         |
