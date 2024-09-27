---
title: Globalobjekt
slug: Glossary/Global_object
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Das **Globalobjekt** in JavaScript ist ein [Objekt](/de/docs/Glossary/object), das den [globalen Scope](/de/docs/Glossary/global_scope) repräsentiert.

> **Note:** _Global verfügbare Objekte_, die sich im [globalen Scope](/de/docs/Glossary/global_scope) befinden, werden manchmal ebenfalls als Globalobjekte bezeichnet. Streng genommen gibt es jedoch nur ein Globalobjekt pro Umgebung.

In jeder JavaScript-Umgebung ist immer ein Globalobjekt definiert. Das Interface des Globalobjekts hängt vom Ausführungskontext ab, in dem das Skript ausgeführt wird. Zum Beispiel:

- In einem Webbrowser hat jeder Code, der nicht explizit als Hintergrundaufgabe gestartet wird, ein [`Window`](/de/docs/Web/API/Window) als sein Globalobjekt. Dies betrifft den Großteil des JavaScript-Codes im Web.
- Code, der in einem [`Worker`](/de/docs/Web/API/Worker) läuft, hat ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Objekt als sein Globalobjekt.
- Skripte, die unter [Node.js](/de/docs/Glossary/Node.js) laufen, haben ein Objekt namens [`global`](https://nodejs.org/api/globals.html#globals_global) als ihr Globalobjekt.

Die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) globale Eigenschaft ermöglicht den Zugriff auf das Globalobjekt, unabhängig von der aktuellen Umgebung.

[`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Anweisungen und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) auf der obersten Ebene eines Skripts erstellen Eigenschaften des Globalobjekts. Andererseits erstellen {{jsxref("Statements/let", "let")}} und {{jsxref("Statements/const", "const")}} Deklarationen niemals Eigenschaften des Globalobjekts.

Die Eigenschaften des Globalobjekts werden automatisch dem [globalen Scope](/de/docs/Glossary/global_scope) hinzugefügt.

In JavaScript hält das Globalobjekt immer eine Referenz auf sich selbst:

```js
console.log(globalThis === globalThis.globalThis); // true (everywhere)
console.log(window === window.window); // true (in a browser)
console.log(self === self.self); // true (in a browser or a Web Worker)
console.log(frames === frames.frames); // true (in a browser)
console.log(global === global.global); // true (in Node.js)
```

## Siehe auch

- Verwandte Glossarbegriffe:
  - [globaler Scope](/de/docs/Glossary/global_scope)
  - [Objekt](/de/docs/Glossary/object)
- {{jsxref("globalThis")}}
- [`Window`](/de/docs/Web/API/Window)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [`Window.window`](/de/docs/Web/API/Window/window)
- [`Window.self`](/de/docs/Web/API/Window/self)
- [`Window.frames`](/de/docs/Web/API/Window/frames)
- [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self)
- [`global`](https://nodejs.org/api/globals.html#globals_global)
