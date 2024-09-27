---
title: Main thread
slug: Glossary/Main_thread
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Der **Main-Thread** ist der Bereich, in dem ein Browser Benutzereignisse verarbeitet und darstellt. Standardmäßig verwendet der Browser einen einzigen Thread, um den gesamten JavaScript-Code Ihrer Seite auszuführen und führt ebenfalls Layout-Berechnungen, Neudarstellungen und Speicherbereinigung durch. Dies bedeutet, dass lang laufende JavaScript-Funktionen den Thread blockieren können, was zu einer nicht reagierenden Seite und einer schlechten Benutzererfahrung führt.

Sofern nicht absichtlich ein [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) wie ein [Service Worker](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) verwendet wird, läuft JavaScript im Main-Thread, sodass ein Skript leicht Verzögerungen in der Ereignisverarbeitung oder Darstellung verursachen kann. Je weniger Arbeit vom Main-Thread verlangt wird, desto mehr kann dieser auf Benutzereignisse reagieren, rendern und generell benutzerfreundlich sein.

## Siehe auch

- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
- [Web Worker API](/de/docs/Web/API/Web_Workers_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- Verwandte Glossarbegriffe:
  - [Thread](/de/docs/Glossary/Thread)
