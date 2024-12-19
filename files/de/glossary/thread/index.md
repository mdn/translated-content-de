---
title: Thread
slug: Glossary/Thread
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

Ein Thread in der Informatik ist die Ausführung mehrerer Aufgaben oder Programme gleichzeitig. Jede Einheit, die Code ausführen kann, wird als **Thread** bezeichnet.

Der **{{Glossary("main_thread", "Main-Thread")}}** ist derjenige, den der Browser verwendet, um Benutzerereignisse zu verarbeiten, die Anzeige darzustellen und zu zeichnen sowie den Großteil des Codes auszuführen, der eine typische Webseite oder App ausmacht. Da all diese Dinge in einem Thread ablaufen, verlangsamt ein langsames Website- oder App-Skript den gesamten Browser; schlimmer noch, wenn ein Website- oder App-Skript in eine Endlosschleife gerät, wird der gesamte Browser hängen bleiben. Dies führt zu einer frustrierenden, trägen (oder noch schlimmeren) Benutzererfahrung.

Moderne {{Glossary("JavaScript", "JavaScript")}} bietet Möglichkeiten, zusätzliche Threads zu erstellen, die jeweils unabhängig ausgeführt werden und möglicherweise miteinander kommunizieren. Dies erfolgt mit Technologien wie [Web Workers](/de/docs/Web/API/Web_Workers_API), die verwendet werden können, um ein Unterprogramm zu erstellen, das parallel zum Main-Thread in einem eigenen Thread läuft. Dadurch können langsame, komplexe oder lang laufende Aufgaben unabhängig vom Main-Thread ausgeführt werden, was die Gesamtleistung der Website oder App sowie die des Browsers insgesamt erhält.
Threading ermöglicht es Webanwendungen auch, moderne Mehrkernprozessoren zu nutzen, was eine noch bessere Leistung ermöglicht als Multithread-Anwendungen, die nur auf einem Kern laufen.

Ein spezieller Typ von Worker, genannt **[Service Worker](/de/docs/Web/API/Service_Worker_API)**, kann erstellt werden, der – mit der Erlaubnis des Benutzers – von einer Seite zurückgelassen werden kann, um auch dann zu laufen, wenn der Benutzer die Seite gerade nicht nutzt. Dies wird verwendet, um Websites zu erstellen, die den Benutzer benachrichtigen können, wenn etwas passiert, während er nicht aktiv mit einer Seite interagiert. Zum Beispiel, wenn der Benutzer benachrichtigt wird, dass er neue E-Mails erhalten hat, obwohl er gerade nicht bei seinem E-Mail-Dienst angemeldet ist.

Insgesamt kann beobachtet werden, dass diese Threads innerhalb unseres Betriebssystems äußerst hilfreich sind. Sie helfen, die Zeit für den Kontextwechsel zu minimieren, ermöglichen eine effizientere Kommunikation und erlauben eine bessere Nutzung der Mehrprozessorarchitektur.

## Siehe auch

- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
- [Web Worker API](/de/docs/Web/API/Web_Workers_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- Verwandte Glossarbegriffe:
  - {{Glossary("Main_thread", "Main-Thread")}}
