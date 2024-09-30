---
title: return
slug: WebAssembly/Reference/Control_flow/return
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

**`return`** kehrt von einer Funktion zurück.

- Wenn sich keine Werte auf dem Stapel befinden, wird nichts/void zurückgegeben.
- Wenn sich die gleiche Anzahl von Werten auf dem Stapel befindet, wie im Typ-Signatur der Funktion angegeben ist, werden diese Werte zurückgegeben.
- Wenn mehr Werte vorhanden sind, als im Rückgabetyp der Funktion angegeben ist, werden die überschüssigen Werte vom Stapel entfernt und verworfen, und die letzten N Werte werden zurückgegeben.

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
