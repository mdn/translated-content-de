---
title: call
slug: WebAssembly/Reference/Control_flow/call
l10n:
  sourceCommit: dfdfd2d7a98d8659b466aca96d2c4eb133d10303
---

{{WebAssemblySidebar}}

**`call`** ruft eine Funktion auf, wobei `return_call` die Version dafür als Tail-Call ist. `call_indirect` ruft eine Funktion in einer Tabelle auf, ebenfalls mit der `return_call_indirect` Version als Tail-Call.

{{EmbedInteractiveExample("pages/wat/call.html", "tabbed-standard")}}

## Syntax

```wasm
call $greet
```

| Instruktion            | Binärer Opcode |
| ---------------------- | -------------- |
| `call`                 | `0x10`         |
| `call_indirect`        | `0x11`         |
| `return_call`          | `0x12`         |
| `return_call_indirect` | `0x13`         |

## Siehe auch

- [Überblick über den Tail Call Extension Vorschlag](https://github.com/WebAssembly/tail-call/blob/main/proposals/tail-call/Overview.md)
- [V8 zur Unterstützung von WebAssembly Tail Calls](https://v8.dev/blog/wasm-tail-call)
