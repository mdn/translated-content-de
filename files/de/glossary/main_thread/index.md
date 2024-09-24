---
title: Haupt-Thread
slug: Glossary/Main_thread
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Der **Haupt-Thread** ist der Ort, an dem ein Browser Benutzerevents verarbeitet und rendert. Standardmäßig verwendet der Browser einen einzigen Thread, um den gesamten JavaScript-Code auf Ihrer Seite auszuführen, sowie um das Layout, Reflows und die Speicherbereinigung durchzuführen. Das bedeutet, dass lang laufende JavaScript-Funktionen den Thread blockieren können, was zu einer nicht reagierenden Seite und einer schlechten Benutzererfahrung führt.

Sofern Sie nicht gezielt einen [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwenden, wie z.B. einen [Service Worker](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers), läuft JavaScript auf dem Haupt-Thread. Daher kann ein Skript leicht Verzögerungen in der Eventverarbeitung oder beim Rendern verursachen. Je weniger Arbeit für den Haupt-Thread erforderlich ist, desto eher kann er auf Benutzerevents reagieren, rendern und allgemein reaktionsfähig für den Benutzer sein.

## Siehe auch

- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
- [Web Worker API](/de/docs/Web/API/Web_Workers_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- Verwandte Glossarbegriffe:
  - {{Glossary("Thread")}}
