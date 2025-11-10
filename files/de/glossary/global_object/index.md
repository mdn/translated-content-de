---
title: Globale Objekte
slug: Glossary/Global_object
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Das **globale Objekt** in JavaScript ist ein {{Glossary("object", "Objekt")}}, das den {{Glossary("global_scope", "globalen Gültigkeitsbereich")}} repräsentiert.

> [!NOTE]
> _Global verfügbare Objekte_, die Objekte im {{Glossary("global_scope", "globalen Gültigkeitsbereich")}} sind, werden manchmal auch als globale Objekte bezeichnet. Streng genommen gibt es jedoch nur ein globales Objekt pro Umgebung.

In jeder JavaScript-Umgebung ist immer ein globales Objekt definiert. Die Schnittstelle des globalen Objekts hängt vom Ausführungskontext ab, in dem das Skript läuft. Zum Beispiel:

- In einem Webbrowser hat jeglicher Code, den das Skript nicht explizit als Hintergrundaufgabe startet, ein [`Window`](/de/docs/Web/API/Window) als globales Objekt. Dies betrifft den Großteil des JavaScript-Codes im Web.
- Code, der in einem [`Worker`](/de/docs/Web/API/Worker) läuft, hat ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekt als globales Objekt.
- Skripte, die unter {{Glossary("Node.js", "Node.js")}} laufen, haben ein Objekt namens [`global`](https://nodejs.org/api/globals.html#globals_global) als globales Objekt.

Die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) globale Eigenschaft ermöglicht es, auf das globale Objekt zuzugreifen, unabhängig von der aktuellen Umgebung.

[`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Statements und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) auf der obersten Ebene eines Skripts erstellen Eigenschaften des globalen Objekts. Andererseits erstellen {{jsxref("Statements/let", "let")}}- und {{jsxref("Statements/const", "const")}}-Deklarationen niemals Eigenschaften des globalen Objekts.

Die Eigenschaften des globalen Objekts werden automatisch zum {{Glossary("global_scope", "globalen Gültigkeitsbereich")}} hinzugefügt.

In JavaScript hält das globale Objekt immer eine Referenz auf sich selbst:

```js
console.log(globalThis === globalThis.globalThis); // true (everywhere)
console.log(window === window.window); // true (in a browser)
console.log(self === self.self); // true (in a browser or a Web Worker)
console.log(frames === frames.frames); // true (in a browser)
console.log(global === global.global); // true (in Node.js)
```

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("global_scope", "globaler Gültigkeitsbereich")}}
  - {{Glossary("object", "Objekt")}}
- {{jsxref("globalThis")}}
- [`Window`](/de/docs/Web/API/Window)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [`Window.window`](/de/docs/Web/API/Window/window)
- [`Window.self`](/de/docs/Web/API/Window/self)
- [`Window.frames`](/de/docs/Web/API/Window/frames)
- [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self)
- [`global`](https://nodejs.org/api/globals.html#globals_global)
