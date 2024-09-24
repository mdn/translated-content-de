---
title: Globales Objekt
slug: Glossary/Global_object
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Das **Globale Objekt** in JavaScript ist ein {{glossary("object")}}, das den {{glossary("global scope")}} repräsentiert.

> **Note:** _Global verfügbare Objekte_, die Objekte im {{glossary("global scope")}} sind, werden manchmal auch als globale Objekte bezeichnet. Streng genommen gibt es jedoch nur ein globales Objekt pro Umgebung.

In jeder JavaScript-Umgebung ist immer ein globales Objekt definiert. Die Schnittstelle des globalen Objekts hängt vom Ausführungskontext ab, in dem das Skript läuft. Zum Beispiel:

- In einem Webbrowser hat jeder Code, den das Skript nicht speziell als Hintergrundaufgabe startet, ein {{domxref("Window")}} als sein globales Objekt. Dies gilt für den Großteil des JavaScript-Codes im Web.
- Code, der in einem {{domxref("Worker")}} läuft, hat ein {{domxref("WorkerGlobalScope")}}-Objekt als sein globales Objekt.
- Skripte, die unter {{Glossary("Node.js")}} laufen, haben ein Objekt namens [`global`](https://nodejs.org/api/globals.html#globals_global) als ihr globales Objekt.

Die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) globale Eigenschaft ermöglicht den Zugriff auf das globale Objekt unabhängig von der aktuellen Umgebung.

[`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Anweisungen und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) auf der obersten Ebene eines Skripts erzeugen Eigenschaften des globalen Objekts. Andererseits erzeugen {{jsxref("Statements/let", "let")}}- und {{jsxref("Statements/const", "const")}}-Deklarationen niemals Eigenschaften des globalen Objekts.

Die Eigenschaften des globalen Objekts werden automatisch zum {{glossary("global scope")}} hinzugefügt.

In JavaScript hält das globale Objekt immer eine Referenz auf sich selbst:

```js
console.log(globalThis === globalThis.globalThis); // true (überall)
console.log(window === window.window); // true (im Browser)
console.log(self === self.self); // true (im Browser oder in einem Web Worker)
console.log(frames === frames.frames); // true (im Browser)
console.log(global === global.global); // true (in Node.js)
```

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{glossary("global scope")}}
  - {{glossary("object")}}
- {{jsxref("globalThis")}}
- {{domxref("Window")}}
- {{domxref("WorkerGlobalScope")}}
- {{domxref("Window.window")}}
- {{domxref("Window.self")}}
- {{domxref("Window.frames")}}
- {{domxref("WorkerGlobalScope.self")}}
- [`global`](https://nodejs.org/api/globals.html#globals_global)
