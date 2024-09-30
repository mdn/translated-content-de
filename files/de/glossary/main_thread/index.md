---
title: Main Thread
slug: Glossary/Main_thread
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Der **Main Thread** ist der Ort, an dem ein Browser Benutzerevents verarbeitet und zeichnet. Standardmäßig verwendet der Browser einen einzelnen Thread, um den gesamten JavaScript-Code auf Ihrer Seite auszuführen sowie um Layouts, Reflows und Garbage Collection durchzuführen. Das bedeutet, dass lang andauernde JavaScript-Funktionen den Thread blockieren können, was zu einer nicht reagierenden Seite und einer schlechten Benutzererfahrung führt.

Sofern nicht bewusst ein [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) wie ein [Service Worker](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) verwendet wird, läuft JavaScript im Main Thread. Daher ist es einfach für ein Skript, Verzögerungen bei der Eventverarbeitung oder dem Zeichnen zu verursachen. Je weniger Arbeit vom Main Thread verlangt wird, desto schneller kann dieser auf Benutzerevents reagieren, zeichnen und im Allgemeinen reaktionsfähiger für den Benutzer sein.

## Siehe auch

- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
- [Web Worker API](/de/docs/Web/API/Web_Workers_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- Verwandte Glossarbegriffe:
  - [Thread](/de/docs/Glossary/Thread)
