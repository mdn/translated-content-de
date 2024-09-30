---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Statements")}}

Die **`debugger`**-Anweisung ruft alle verfügbaren Debugging-Funktionen auf, wie z.B. das Setzen eines Haltepunkts. Wenn keine Debugging-Funktionalität verfügbar ist, hat diese Anweisung keine Auswirkung.

## Syntax

```js-nolint
debugger;
```

## Beispiele

### Verwendung der debugger-Anweisung

Das folgende Beispiel zeigt Code, bei dem eine `debugger`-Anweisung eingefügt wurde, um einen Debugger (falls vorhanden) aufzurufen, wenn die Funktion aufgerufen wird.

```js
function potentiallyBuggyCode() {
  debugger;
  // do potentially buggy stuff to examine, step through, etc.
}
```

Wenn der Debugger aufgerufen wird, wird die Ausführung an der `debugger`-Anweisung pausiert. Es ist wie ein Haltepunkt im Skriptquellcode.

![Ein Browser mit geöffneten Entwicklerwerkzeugen im Debugger-Panel, das zeigt, wie die Ausführung an der debugger-Anweisung angehalten wird, um eine genaue Inspektion von Variablen, Gültigkeitsbereichen, Ereignissen usw. zu ermöglichen.](screen_shot_2014-02-07_at_9.14.35_am.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Der Firefox JavaScript-Debugger¶](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) in den Firefox-Quellcode-Dokumentationen
