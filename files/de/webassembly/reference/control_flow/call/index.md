---
title: aufrufen
slug: WebAssembly/Reference/Control_flow/call
l10n:
  sourceCommit: dfdfd2d7a98d8659b466aca96d2c4eb133d10303
---

{{WebAssemblySidebar}}

**`call`** ruft eine Funktion auf, wobei `return_call` die Tail-Call-Version davon ist. `call_indirect` ruft eine Funktion in einer Tabelle auf, mit der `return_call_indirect` Tail-Call-Version.

{{EmbedInteractiveExample("pages/wat/call.html", "tabbed-standard")}}

## Syntax

```wasm
call $greet
```

| Befehl                 | Binär-Opcode  |
| ---------------------- | ------------- |
| `call`                 | `0x10`        |
| `call_indirect`        | `0x11`        |
| `return_call`          | `0x12`        |
| `return_call_indirect` | `0x13`        |

## Siehe auch

- [Übersicht über den Vorschlag zur Tail Call Extension](https://github.com/WebAssembly/tail-call/blob/main/proposals/tail-call/Overview.md)
- [V8 über Unterstützung von WebAssembly-Tail-Calls](https://v8.dev/blog/wasm-tail-call)