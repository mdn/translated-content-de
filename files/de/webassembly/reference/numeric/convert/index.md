---
title: Konvertieren
slug: WebAssembly/Reference/Numeric/Convert
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`convert`**-Anweisungen werden verwendet, um ganze Zahlen in Fließkommazahlen umzuwandeln. Es gibt signierte und unsignierte Versionen dieser Anweisung.

{{EmbedInteractiveExample("pages/wat/convert.html", "tabbed-taller")}}

## Syntax

```wasm
;; push ein i32 auf den Stapel
i32.const 10

;; konvertiere von signiertem i32 zu f32
f32.convert_i32_s

;; das oberste Element auf dem Stapel wird nun der Wert 10 vom Typ f32 sein
```

| Anweisung           | Binärer Opcode |
| ------------------- | -------------- |
| `f32.convert_i32_s` | `0xb2`         |
| `f32.convert_i32_u` | `0xb3`         |
| `f32.convert_i64_s` | `0xb4`         |
| `f32.convert_i64_u` | `0xb5`         |
| `f64.convert_i32_s` | `0xb7`         |
| `f64.convert_i32_u` | `0xb8`         |
| `f64.convert_i64_s` | `0xb9`         |
| `f64.convert_i64_u` | `0xba`         |
