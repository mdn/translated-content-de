---
title: Nicht gleich
slug: WebAssembly/Reference/Numeric/Not_equal
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`ne`** Anweisungen, kurz für _not equal_, prüfen, ob zwei Zahlen nicht gleich sind. Wenn die Zahlen nicht gleich sind, wird `1` auf den Stack gelegt, andernfalls wird `0` auf den Stack gelegt.

{{EmbedInteractiveExample("pages/wat/ne.html", "tabbed-taller")}}

## Syntax

```wasm
;; lädt 2 Zahlen auf den Stack
local.get $num
i32.const 2

;; prüft, ob $num nicht gleich '2' ist
i32.ne

;; wenn $num nicht gleich `2` ist, wird `1` auf den Stack gelegt,
;; andernfalls wird `0` auf den Stack gelegt.
```

| Anweisung  | Binärer Opcode |
| ----------- | ------------- |
| `i32.ne`    | `0x47`        |
| `i64.ne`    | `0x52`        |
| `f32.ne`    | `0x5c`        |
| `f64.ne`    | `0x62`        |
