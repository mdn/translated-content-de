---
title: Haupt-Thread
slug: Glossary/Main_thread
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Der **Haupt-Thread** ist der Ort, an dem ein Browser Benutzerevents verarbeitet und zeichnet. Standardmäßig verwendet der Browser einen einzelnen Thread, um den gesamten JavaScript-Code auf Ihrer Seite auszuführen, ebenso wie um Layouts, Neuberechnungen und die Speicherbereinigung durchzuführen. Das bedeutet, dass lang laufende JavaScript-Funktionen den Thread blockieren können, was zu einer nicht ansprechbaren Seite und einer schlechten Benutzererfahrung führt.

Sofern nicht absichtlich ein [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) wie ein [Service Worker](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) verwendet wird, läuft JavaScript auf dem Haupt-Thread. Es ist daher leicht für ein Skript, Verzögerungen bei der Eventverarbeitung oder dem Zeichnen zu verursachen. Je weniger Arbeit der Haupt-Thread leisten muss, desto mehr kann dieser auf Benutzerevents reagieren, zeichnen und allgemein reaktionsfähig gegenüber dem Benutzer sein.

## Siehe auch

- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
- [Web Worker API](/de/docs/Web/API/Web_Workers_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- Verwandte Glossarbegriffe:
  - {{Glossary("Thread", "Thread")}}
