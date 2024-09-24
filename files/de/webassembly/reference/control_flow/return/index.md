---
title: return
slug: WebAssembly/Reference/Control_flow/return
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

**`return`** kehrt von einer Funktion zurück.

- Wenn sich keine Werte mehr auf dem Stapel befinden, wird nichts/Void zurückgegeben.
- Wenn sich genauso viele Werte auf dem Stapel befinden wie in der Typsignatur der Funktion angegeben, werden diese Werte zurückgegeben.
- Wenn mehr Werte vorhanden sind, als der Rückgabetyp der Funktion angibt, werden die überzähligen Werte vom Stapel entfernt und verworfen, und die letzten N Werte werden zurückgegeben.

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

| Anweisung  | Binärer Opcode |
| -----------| -------------- |
| `return`   | `0x0f`         |
