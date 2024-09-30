---
title: Floor
slug: WebAssembly/Reference/Numeric/Floor
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`floor`**-Anweisungen werden verwendet, um den Wert einer Zahl zu erhalten, der auf die nächste ganze Zahl abgerundet ist.

**`floor`** unterscheidet sich von **`trunc`**, wenn es auf negative Zahlen angewendet wird. **`floor`** wird in diesen Fällen abrunden, während **`trunc`** aufrunden wird.

{{EmbedInteractiveExample("pages/wat/floor.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const -2.7

;; round down
f32.floor

;; the top item on the stack will now be -3
```

| Anweisung   | Binärer Opcode |
|-------------|----------------|
| `f32.floor` | `0x8e`         |
| `f64.floor` | `0x9c`         |
