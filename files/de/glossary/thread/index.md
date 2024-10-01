---
title: Thread
slug: Glossary/Thread
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein Thread in der Informatik ist die Ausführung mehrerer Aufgaben oder Programme zur gleichen Zeit. Jede Einheit, die Code ausführen kann, wird als **Thread** bezeichnet.

Der **{{Glossary("main_thread", "Main-Thread")}}** ist derjenige, den der Browser verwendet, um Benutzerereignisse zu verarbeiten, die Anzeige zu rendern und zu zeichnen sowie den Großteil des Codes auszuführen, der eine typische Webseite oder App ausmacht. Da all diese Vorgänge in einem einzigen Thread ablaufen, verlangsamt ein langsames Website- oder App-Skript den gesamten Browser; schlimmer noch, wenn ein Website- oder App-Skript in eine Endlosschleife gerät, bleibt der gesamte Browser hängen. Dies führt zu einer frustrierenden, trägen (oder schlimmer noch) Benutzererfahrung.

Moderne {{Glossary("JavaScript", "JavaScript")}}-Versionen bieten Möglichkeiten, zusätzliche Threads zu erstellen, die jeweils unabhängig arbeiten und möglicherweise miteinander kommunizieren können. Dies geschieht unter Verwendung von Technologien wie [Web-Workern](/de/docs/Web/API/Web_Workers_API), die zum Starten eines Unterprogramms verwendet werden können, das gleichzeitig mit dem Main-Thread in einem eigenen Thread läuft. Dies ermöglicht es, langsame, komplexe oder langlaufende Aufgaben unabhängig vom Main-Thread auszuführen, was die Gesamtleistung der Seite oder App sowie die des gesamten Browsers erhält.
Threading ermöglicht Webanwendungen auch, die Vorteile moderner Mehrkernprozessoren zu nutzen: Es ermöglicht noch bessere Leistung als Multithread-Anwendungen, die auf einem einzigen Kern laufen.

Ein spezieller Typ von Worker, genannt **[Service Worker](/de/docs/Web/API/Service_Worker_API)**, kann erstellt werden, der von einer Seite hinterlassen werden kann – mit der Erlaubnis des Benutzers –, um auch dann zu laufen, wenn der Benutzer die Seite aktuell nicht benutzt. Dies wird verwendet, um Seiten zu erstellen, die den Benutzer benachrichtigen können, wenn Dinge passieren, während er nicht aktiv mit einer Seite interagiert. Wie beispielsweise die Benachrichtigung eines Benutzers, dass er neue E-Mails erhalten hat, obwohl er derzeit nicht bei seinem Mail-Dienst angemeldet ist.

Insgesamt lässt sich beobachten, dass diese Threads innerhalb unseres Betriebssystems äußerst hilfreich sind. Sie tragen dazu bei, die Kontextwechselzeit zu minimieren, ermöglichen effizientere Kommunikation und erlauben eine weitergehende Nutzung der Multiprozessor-Architektur.

## Siehe auch

- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
- [Web Worker API](/de/docs/Web/API/Web_Workers_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- Verwandte Glossarbegriffe:
  - {{Glossary("Main_thread", "Main-Thread")}}
