---
title: return
slug: WebAssembly/Reference/Control_flow/return
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

**`return`** gibt aus einer Funktion zurück.

- Wenn keine Werte mehr auf dem Stapel verbleiben, wird nichts/void zurückgegeben.
- Wenn dieselbe Anzahl von Werten auf dem Stapel verbleibt, wie im Typsignatur der Funktion angegeben, werden diese Werte zurückgegeben.
- Wenn es mehr Werte gibt, als die Rückgabetyp der Funktion angibt, dann werden die obersten N Werte zurückgegeben, und die verbleibenden Werte auf dem Stapel werden verworfen.

{{EmbedInteractiveExample("pages/wat/return.html", "tabbed-taller")}}

## Syntax

```wasm
f32.const 4.3
return
```

```wasm
i32.const 7
f32.const 4.3
return
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `return`  | `0x0f`         |
