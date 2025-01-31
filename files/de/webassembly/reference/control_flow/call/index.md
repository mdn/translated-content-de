---
title: call
slug: WebAssembly/Reference/Control_flow/call
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

`call` ruft eine Funktion auf, wobei `return_call` die Tail-Call-Version davon ist. `call_indirect` ruft eine Funktion in einer Tabelle auf, wobei `return_call_indirect` die Tail-Call-Version davon ist.

## Beispiele

Aufrufen der `greet`-Funktion, die aus JavaScript mit `call` importiert wurde:

{{EmbedInteractiveExample("pages/wat/call.html", "tabbed-standard")}}

Berechnen der Fakultät für eine Zahl mit `return_call` und Protokollierung des Ergebnisses mit der exportierten `fac`-Funktion:

{{EmbedInteractiveExample("pages/wat/return_call.html", "tabbed-standard")}}

## Syntax

```wasm
call $greet
```

| Anweisung              | Binärer Opcode |
| ---------------------- | -------------- |
| `call`                 | `0x10`         |
| `call_indirect`        | `0x11`         |
| `return_call`          | `0x12`         |
| `return_call_indirect` | `0x13`         |

## Siehe auch

- [Überblick über den Vorschlag zur Tail Call-Erweiterung](https://github.com/WebAssembly/tail-call/blob/main/proposals/tail-call/Overview.md)
- [V8 zu WebAssembly-Tail-Call-Unterstützung](https://v8.dev/blog/wasm-tail-call)
