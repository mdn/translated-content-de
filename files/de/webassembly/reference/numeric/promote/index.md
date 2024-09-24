---
title: Fördern
slug: WebAssembly/Reference/Numeric/Promote
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`promote`**-Anweisung wird verwendet, um Zahlen vom Typ `f32` in den Typ `f64` zu konvertieren (fördern).

{{EmbedInteractiveExample("pages/wat/promote.html", "tabbed-taller")}}

## Syntax

```wasm
;; Ein f32 auf den Stapel schieben
f32.const 10.5

;; Von f32 zu f64 fördern
f64.promote_f32

;; Das oberste Element auf dem Stapel ist jetzt der Wert 10.5 vom Typ f64
```

| Anweisung         | Binärer Opcode |
| ----------------- | -------------- |
| `f64.promote_f32` | `0xbb`         |
