---
title: Thread
slug: Glossary/Thread
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Thread in der Informatik ist die Ausführung mehrerer Aufgaben oder Programme gleichzeitig. Jede Einheit, die Code ausführen kann, wird als **Thread** bezeichnet.

Der **[Haupt-Thread](/de/docs/Glossary/main_thread)** ist derjenige, den der Browser verwendet, um Benutzerevents zu verarbeiten, das Display zu rendern und zu zeichnen und den Großteil des Codes auszuführen, der eine typische Webseite oder App umfasst. Da all diese Dinge in einem Thread ablaufen, verlangsamt ein langsames Website- oder App-Skript den gesamten Browser; schlimmer noch, wenn ein Site- oder App-Skript in eine Endlosschleife gerät, hängt der gesamte Browser. Dies führt zu einer frustrierenden, trägen (oder schlimmeren) Benutzererfahrung.

Moderne [JavaScript](/de/docs/Glossary/JavaScript) bietet Möglichkeiten, zusätzliche Threads zu erstellen, die unabhängig voneinander ausgeführt werden und möglicherweise miteinander kommunizieren. Dies erfolgt mithilfe von Technologien wie [Web Workers](/de/docs/Web/API/Web_Workers_API), mit denen ein Unterprogramm gestartet werden kann, das parallel zum Haupt-Thread in einem eigenen Thread läuft. Dadurch können langsame, komplexe oder lang andauernde Aufgaben unabhängig vom Haupt-Thread ausgeführt werden, was die Gesamtleistung der Site oder App sowie des Browsers insgesamt bewahrt. Threading ermöglicht es Webanwendungen außerdem, moderne Mehrkernprozessoren zu nutzen und so eine noch bessere Leistung als mehrthreaded Anwendungen auf einem Single-Core zu erzielen.

Ein spezieller Typ von Worker, genannt **[Service Worker](/de/docs/Web/API/Service_Worker_API)**, kann erstellt werden, der von einer Site hinterlassen werden kann – mit Zustimmung des Benutzers – um auch dann zu laufen, wenn der Benutzer die Site derzeit nicht nutzt. Dies wird verwendet, um Sites zu erstellen, die den Benutzer benachrichtigen können, wenn Dinge passieren, während er nicht aktiv mit einer Site beschäftigt ist. Beispielsweise kann ein Benutzer benachrichtigt werden, dass er eine neue E-Mail erhalten hat, obwohl er derzeit nicht in seinen Mail-Dienst eingeloggt ist.

Insgesamt kann beobachtet werden, dass diese Threads in unserem Betriebssystem äußerst hilfreich sind. Sie tragen dazu bei, die Kontextwechselzeit zu minimieren, ermöglichen eine effizientere Kommunikation und erlauben eine weitergehende Nutzung der Mehrprozessorarchitektur.

## Siehe auch

- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
- [Web Worker API](/de/docs/Web/API/Web_Workers_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- Verwandte Glossareinträge:
  - [Haupt-Thread](/de/docs/Glossary/Main_thread)
