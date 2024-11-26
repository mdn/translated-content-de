---
title: call
slug: WebAssembly/Reference/Control_flow/call
l10n:
  sourceCommit: 5961d8e7100dce7f112b81d0efb65b24741f8674
---

{{WebAssemblySidebar}}

**`call`** ruft eine Funktion auf, wobei `return_call` die Version mit Endaufruf ist. `call_indirect` ruft eine Funktion in einer Tabelle auf, wobei `return_call_indirect` ebenfalls die Version mit Endaufruf ist.

## Beispiele

Aufrufen der `greet` Funktion, die aus JavaScript importiert wurde, mittels `call`:

{{EmbedInteractiveExample("pages/wat/call.html", "tabbed-standard")}}

Berechnung der Fakultät einer Zahl mit `return_call` und Protokollierung des Ergebnisses mittels der exportierten Funktion `fac`:

{{EmbedInteractiveExample("pages/wat/return_call.html", "tabbed-standard")}}

## Syntax

```wasm
call $greet
```

| Anweisung              | Binär-Opcode |
| ---------------------- | ------------ |
| `call`                 | `0x10`       |
| `call_indirect`        | `0x11`       |
| `return_call`          | `0x12`       |
| `return_call_indirect` | `0x13`       |

## Siehe auch

- [Übersicht über den Vorschlag zur Erweiterung des Endaufrufs](https://github.com/WebAssembly/tail-call/blob/main/proposals/tail-call/Overview.md)
- [V8 über die Unterstützung von WebAssembly-Endaufrufen](https://v8.dev/blog/wasm-tail-call)
