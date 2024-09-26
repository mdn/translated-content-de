---
title: Const
slug: WebAssembly/Reference/Numeric/Const
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`const`** Anweisungen werden verwendet, um Zahlen zu deklarieren.

{{EmbedInteractiveExample("pages/wat/const.html", "tabbed-standard")}}

## Syntax

```wasm
;; legen Sie `5` auf den Stapel
i32.const 5
```

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `i32.const`   | `0x41`         |
| `i64.const`   | `0x42`         |
| `f32.const`   | `0x43`         |
| `f64.const`   | `0x44`         |