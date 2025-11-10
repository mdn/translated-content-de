---
title: Promise
slug: Glossary/Promise
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **{{jsxref("Promise")}}** ist ein {{Glossary("object", "Objekt")}}, das von einer {{Glossary("function", "Funktion")}} zurückgegeben wird, die ihre Arbeit noch nicht abgeschlossen hat. Das `Promise` repräsentiert buchstäblich ein Versprechen der Funktion, dass sie schließlich ein Ergebnis durch das `Promise`-Objekt zurückgeben wird.

Wenn die aufgerufene Funktion ihre Arbeit {{Glossary("asynchronous", "asynchron")}} beendet, wird eine Funktion am `Promise`-Objekt, die als Resolution- (oder Erfüllungs- oder Abschluss-) Handler bezeichnet wird, aufgerufen, um den ursprünglichen Aufrufer darüber zu informieren, dass die Aufgabe abgeschlossen ist.

## Siehe auch

- [Futures und Promises](https://en.wikipedia.org/wiki/Futures_and_promises)
- {{jsxref("Promise")}} in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference).
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
