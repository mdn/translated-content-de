---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
l10n:
  sourceCommit: 439a8c053d3b2d4f3af60c06f567418eb8fc2f9a
---

Die **`debugger`**-Anweisung ruft eine verfügbare Debugging-Funktion auf, beispielsweise indem sie einen Haltepunkt setzt. Wenn keine Debugging-Funktion verfügbar ist, hat diese Anweisung keine Wirkung.

## Syntax

```js-nolint
debugger;
```

## Beispiele

### Die debugger-Anweisung verwenden

Das folgende Beispiel zeigt Code, in den eine `debugger`-Anweisung eingefügt wurde. Sie ruft beim Aufruf der Funktion einen Debugger auf, sofern einer verfügbar ist.

```js
function potentiallyBuggyCode() {
  debugger;
  // do potentially buggy stuff to examine, step through, etc.
}
```

Wenn der Debugger aufgerufen wird, hält die Ausführung an der `debugger`-Anweisung an. Das entspricht einem Haltepunkt im Quellcode des Skripts.

![Ein Browser mit geöffneten Entwicklertools im Debugger-Bereich. Die Ausführung ist an der debugger-Anweisung angehalten, sodass Variablen, Gültigkeitsbereiche, Ereignisse und mehr genau untersucht werden können.](screen_shot_2014-02-07_at_9.14.35_am.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Der Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) in der Firefox-Quelldokumentation
