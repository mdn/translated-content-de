---
title: Promise
slug: Glossary/Promise
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein **{{jsxref("Promise")}}** ist ein {{Glossary("object")}}, das von einer {{Glossary("function")}} zurückgegeben wird, die ihre Arbeit noch nicht abgeschlossen hat. Das Promise stellt buchstäblich ein Versprechen der Funktion dar, dass sie schließlich ein Ergebnis über das Promise-Objekt zurückgeben wird.

Wenn die aufgerufene Funktion ihre Arbeit {{Glossary("asynchronous", "asynchronously")}} beendet, wird eine Funktion am Promise-Objekt aufgerufen, die als Auflösungs- (oder Erfüllungs- oder Abschluss-) Handler bezeichnet wird, um den ursprünglichen Aufrufer darüber zu informieren, dass die Aufgabe abgeschlossen ist.

## Siehe auch

- [Futures und Promises](https://en.wikipedia.org/wiki/Futures_and_promises)
- {{jsxref("Promise")}} im [JavaScript Reference](/de/docs/Web/JavaScript/Reference).
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
