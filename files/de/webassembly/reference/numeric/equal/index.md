---
title: Equal
slug: WebAssembly/Reference/Numeric/Equal
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`eq`**-Anweisungen, kurz für _equal_, prüfen, ob zwei Zahlen gleich sind. Wenn beide Zahlen gleich sind, wird `1` auf den Stapel gelegt, andernfalls wird `0` auf den Stapel gelegt.

Ähnlich überprüfen die **`eqz`**-Anweisungen, ob eine Zahl gleich null ist. Die **`eqz`**-Anweisungen sind nur für die Integer-Typen und nicht für die Gleitkomma-Typen verfügbar.

{{EmbedInteractiveExample("pages/wat/eq.html", "tabbed-taller")}}

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is equal to '2'
i32.eq

;; if $num is equal to `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Anweisung | Binär-Opcode |
| --------- | ------------ |
| `i32.eqz` | `0x45`       |
| `i32.eq`  | `0x46`       |
| `i64.eqz` | `0x50`       |
| `i64.eq`  | `0x51`       |
| `f32.eq`  | `0x5b`       |
| `f64.eq`  | `0x61`       |
