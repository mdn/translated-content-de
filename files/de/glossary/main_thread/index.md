---
title: Haupt-Thread
slug: Glossary/Main_thread
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

Der **Haupt-Thread** ist der Ort, an dem ein Browser Benutzerevents verarbeitet und rendert. Standardmäßig verwendet der Browser einen einzigen Thread, um den gesamten JavaScript-Code Ihrer Seite auszuführen, sowie um Layout, Reflows und Garbage Collection durchzuführen. Das bedeutet, dass lang laufende JavaScript-Funktionen den Thread blockieren können, was zu einer nicht reagierenden Seite und einer schlechten Benutzererfahrung führt.

Es sei denn, es wird bewusst ein [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) eingesetzt, wie beispielsweise ein [Service Worker](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers), läuft JavaScript im Haupt-Thread. Es ist daher leicht, dass ein Skript Verzögerungen bei der Event-Verarbeitung oder beim Rendern verursacht. Je weniger Arbeit vom Haupt-Thread benötigt wird, desto besser kann dieser auf Benutzerevents reagieren, rendern und im Allgemeinen reaktionsfähig gegenüber dem Benutzer sein.

## Siehe auch

- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
- [Web Worker API](/de/docs/Web/API/Web_Workers_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- Verwandte Glossarbegriffe:
  - {{Glossary("Thread", "Thread")}}
