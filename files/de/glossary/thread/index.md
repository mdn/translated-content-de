---
title: Thread
slug: Glossary/Thread
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Thread in der Informatik bezeichnet die Ausführung mehrerer Aufgaben oder Programme gleichzeitig. Jede Einheit, die in der Lage ist, Code auszuführen, wird als **Thread** bezeichnet.

Der **{{Glossary("main_thread", "Hauptthread")}}** ist derjenige, den der Browser verwendet, um Benutzerereignisse zu bearbeiten, das Display zu rendern und zu zeichnen, und um den Großteil des Codes auszuführen, der eine typische Webseite oder App ausmacht. Da all diese Dinge in einem Thread ablaufen, verlangsamt ein langsames Website- oder App-Skript den gesamten Browser; schlimmer noch, wenn ein Website- oder App-Skript in eine Endlosschleife gerät, wird der gesamte Browser hängen bleiben. Dies führt zu einer frustrierenden, langsamen (oder schlimmer) Benutzererfahrung.

Moderne {{Glossary("JavaScript", "JavaScript")}} bietet Möglichkeiten, zusätzliche Threads zu erstellen, die jeweils unabhängig voneinander ausgeführt werden, während sie möglicherweise miteinander kommunizieren. Dies wird mit Technologien wie [Web Workers](/de/docs/Web/API/Web_Workers_API) erreicht, die verwendet werden können, um ein Unterprogramm zu starten, das gleichzeitig mit dem Hauptthread in einem eigenen Thread läuft. Dadurch können langsame, komplexe oder lang andauernde Aufgaben unabhängig vom Hauptthread ausgeführt werden, was die Gesamtleistung der Seite oder App sowie des Browsers insgesamt bewahrt. Das Threading ermöglicht es Webanwendungen auch, die Vorteile moderner Mehrkernprozessoren zu nutzen: Es ermöglicht eine noch bessere Leistung als mehrzählige Anwendungen, die auf einem einzigen Kern laufen.

Ein spezieller Typ von Worker, genannt **[Service Worker](/de/docs/Web/API/Service_Worker_API)**, kann erstellt werden und mit Erlaubnis des Nutzers von einer Seite zurückgelassen werden, um zu laufen, selbst wenn der Nutzer die Seite momentan nicht verwendet. Dies wird verwendet, um Seiten zu erstellen, die den Nutzer benachrichtigen können, wenn etwas passiert, während er nicht aktiv mit einer Seite beschäftigt ist. So wie das Benachrichtigen eines Nutzers, dass er neue E-Mails erhalten hat, obwohl er nicht in seinem Mail-Service angemeldet ist.

Insgesamt kann beobachtet werden, dass diese Threads innerhalb unseres Betriebssystems äußerst hilfreich sind. Sie helfen, die Kontextwechselzeit zu minimieren, ermöglichen eine effizientere Kommunikation und erlauben eine weitergehende Nutzung der Mehrprozessorarchitektur.

## Siehe auch

- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
- [Web Worker API](/de/docs/Web/API/Web_Workers_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- Verwandte Glossarbegriffe:
  - {{Glossary("Main_thread", "Hauptthread")}}
