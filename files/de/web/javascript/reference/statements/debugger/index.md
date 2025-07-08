---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`debugger`** Anweisung aktiviert jegliche verfügbare Debugging-Funktionalität, wie zum Beispiel das Setzen eines Haltepunktes. Wenn keine Debugging-Funktionalität verfügbar ist, hat diese Anweisung keine Wirkung.

## Syntax

```js-nolint
debugger;
```

## Beispiele

### Verwendung der debugger-Anweisung

Das folgende Beispiel zeigt Code, in dem eine `debugger`-Anweisung eingefügt wurde, um einen Debugger (falls vorhanden) aufzurufen, wenn die Funktion aufgerufen wird.

```js
function potentiallyBuggyCode() {
  debugger;
  // do potentially buggy stuff to examine, step through, etc.
}
```

Wenn der Debugger aktiviert wird, wird die Ausführung an der `debugger`-Anweisung angehalten. Es ist wie ein Haltepunkt im Skript-Quellcode.

![Ein Browser mit geöffneten Entwicklerwerkzeugen im Debugger-Panel zeigt, wie die Ausführung an der debugger-Anweisung angehalten wird, um eine genaue Untersuchung von Variablen, Bereichen, Ereignissen usw. zu ermöglichen.](screen_shot_2014-02-07_at_9.14.35_am.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Der Firefox JavaScript Debugger¶](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) in den Firefox-Quellcode-Dokumentationen
