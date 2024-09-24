---
title: Linksrotation
slug: WebAssembly/Reference/Numeric/Left_rotate
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`rotl`**-Anweisungen, kurz für _rotate-left_, werden zum Durchführen einer bitweisen Linksrotation verwendet.

{{EmbedInteractiveExample("pages/wat/rotl.html", "tabbed-taller")}}

## Syntax

```wasm
;; laden Sie zwei Zahlen auf den Stapel
i32.const 3758096384 ;; 11100000_00000000_00000000_00000000
i32.const 1          ;; links um eine Stelle rotieren

;; führen Sie eine bitweise Linksrotation durch
i32.rotl

;; das oberste Element auf dem Stapel ist jetzt 3221225473
;; (11000000_00000000_00000000_00000001)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.rotl`  | `0x77`        |
| `i64.rotl`  | `0x89`        |
