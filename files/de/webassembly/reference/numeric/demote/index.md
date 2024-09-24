---
title: Herabstufen
slug: WebAssembly/Reference/Numeric/Demote
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`demote`**-Anweisung wird verwendet, um Zahlen vom Typ `f64` auf den Typ `f32` zu konvertieren (herabzustufen).

{{EmbedInteractiveExample("pages/wat/demote.html", "tabbed-taller")}}

## Syntax

```wasm
;; fügen Sie ein f64 auf den Stack hinzu
f64.const 10.5

;; herunterstufen von f64 zu f32
f32.demote_f64

;; das oberste Element auf dem Stack wird nun der Wert 10.5 vom Typ f32 sein
```

| Anweisung        | Binärer Opcode |
| ---------------- | -------------- |
| `f32.demote_f64` | `0xb6`         |
