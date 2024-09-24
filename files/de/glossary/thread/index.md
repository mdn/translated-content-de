---
title: Thread
slug: Glossary/Thread
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein Thread in der Informatik ist die Ausführung mehrerer Aufgaben oder Programme zur gleichen Zeit. Jede Einheit, die in der Lage ist, Code auszuführen, wird als **Thread** bezeichnet.

Der **{{Glossary("main thread")}}** ist derjenige, den der Browser verwendet, um Benutzerereignisse zu verarbeiten, die Anzeige zu rendern und zu zeichnen, sowie um den Großteil des Codes auszuführen, der eine typische Webseite oder App bildet. Da all diese Dinge in einem Thread ablaufen, verlangsamt ein langsames Website- oder App-Skript den gesamten Browser; schlimmer noch, wenn ein Website- oder App-Skript in eine Endlosschleife gerät, bleibt der gesamte Browser hängen. Dies führt zu einer frustrierenden, langsamen (oder schlimmeren) Benutzererfahrung.

Moderne {{Glossary("JavaScript")}}-Technologien bieten Möglichkeiten, zusätzliche Threads zu erstellen, die unabhängig voneinander ausgeführt werden und möglicherweise miteinander kommunizieren. Dies geschieht mithilfe von Technologien wie [Web Workers](/de/docs/Web/API/Web_Workers_API), die verwendet werden können, um ein Unterprogramm zu starten, das gleichzeitig mit dem Haupt-Thread in einem eigenen Thread läuft. Dies ermöglicht es, langsame, komplexe oder langlaufende Aufgaben unabhängig vom Haupt-Thread auszuführen, wodurch die Gesamtleistung der Website oder App sowie die des gesamten Browsers erhalten bleibt. Threads ermöglichen es Webanwendungen auch, die Vorteile moderner Multicore-Prozessoren zu nutzen, was eine noch bessere Leistung als bei multithreaded Anwendungen auf einem einzigen Kern ermöglicht.

Eine besondere Art von Worker, genannt **[Service Worker](/de/docs/Web/API/Service_Worker_API)**, kann erstellt werden, der von einer Website hinterlassen werden kann – mit Erlaubnis des Benutzers –, um auch dann zu laufen, wenn der Benutzer die Website derzeit nicht benutzt. Dies wird genutzt, um Websites zu erstellen, die den Benutzer benachrichtigen können, wenn etwas passiert, während er nicht aktiv mit einer Website interagiert, z. B. um einen Benutzer darüber zu informieren, dass er neue E-Mails erhalten hat, obwohl er momentan nicht bei seinem E-Mail-Dienst angemeldet ist.

Insgesamt kann festgestellt werden, dass diese Threads innerhalb unseres Betriebssystems äußerst hilfreich sind. Sie tragen dazu bei, die Kontextwechselzeit zu minimieren, ermöglichen eine effizientere Kommunikation und erlauben die weitere Nutzung der Multiprozessorarchitektur.

## Siehe auch

- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
- [Web Worker API](/de/docs/Web/API/Web_Workers_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- Verwandte Glossarbegriffe:
  - {{Glossary("Main thread")}}
