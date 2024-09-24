---
title: Equal
slug: WebAssembly/Reference/Numeric/Equal
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`eq`** Anweisungen, abgekürzt für _equal_, prüfen, ob zwei Zahlen gleich sind. Wenn beide Zahlen gleich sind, wird `1` auf den Stapel geschoben, andernfalls wird `0` auf den Stapel geschoben.

Ähnlich prüfen die **`eqz`** Anweisungen, ob eine Zahl gleich null ist. Die **`eqz`** Anweisungen sind nur für die Ganzzahltypen und nicht für die Gleitkommatypen verfügbar.

{{EmbedInteractiveExample("pages/wat/eq.html", "tabbed-taller")}}

## Syntax

```wasm
;; lade 2 Zahlen auf den Stapel
local.get $num
i32.const 2

;; prüfe, ob $num gleich '2' ist
i32.eq

;; wenn $num gleich `2` ist, wird `1` auf den Stapel geschoben,
;; andernfalls wird `0` auf den Stapel geschoben.
```

| Anweisung   | Binärcode     |
| ----------- | ------------- |
| `i32.eqz`   | `0x45`        |
| `i32.eq`    | `0x46`        |
| `i64.eqz`   | `0x50`        |
| `i64.eq`    | `0x51`        |
| `f32.eq`    | `0x5b`        |
| `f64.eq`    | `0x61`        |
