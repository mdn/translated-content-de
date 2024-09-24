---
title: Reinterpretieren
slug: WebAssembly/Reference/Numeric/Reinterpret
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`reinterpret`**-Anweisungen werden verwendet, um die Bits einer Zahl als einen anderen Typ neu zu interpretieren.

{{EmbedInteractiveExample("pages/wat/reinterpret.html", "tabbed-taller")}}

## Syntax

```wasm
;; der Wert `10000000_00000000_00000000_00000000` in Binärform
;; wird als `-0` als Gleitkommazahl und als `-2147483648` als Ganzzahl interpretiert

;; ein f32 auf den Stack schieben
f32.const -0

;; die Bytes des f32 als i32 neu interpretieren
i32.reinterpret_f32

;; das oberste Element auf dem Stack wird nun der Wert -2147483648 vom Typ i32 sein
```

| Anweisung             | Binärer Opcode |
| --------------------- | -------------- |
| `i32.reinterpret_f32` | `0xbc`         |
| `i64.reinterpret_f64` | `0xbd`         |
| `f32.reinterpret_i32` | `0xbe`         |
| `f64.reinterpret_i64` | `0xbf`         |
