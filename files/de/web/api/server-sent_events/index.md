---
title: Server-sent events
slug: Web/API/Server-sent_events
l10n:
  sourceCommit: f81527232ae480626f8cec10a7d2775a698be30a
---

{{DefaultAPISidebar("Server Sent Events")}}{{AvailableInWorkers}}

Traditionell muss eine Webseite eine Anfrage an den Server senden, um neue Daten zu empfangen; die Seite fordert die Daten also vom Server an. Mit Server-Sent Events kann ein Server jederzeit neue Daten an eine Webseite senden, indem er Nachrichten an die Webseite überträgt. Diese eingehenden Nachrichten können innerhalb der Webseite als _[Events](/de/docs/Web/API/Event) + Daten_ behandelt werden.

## Konzepte und Verwendung

Wie Sie Server-Sent Events verwenden, erfahren Sie in unserem Artikel [Server-Sent Events verwenden](/de/docs/Web/API/Server-sent_events/Using_server-sent_events).

## Schnittstellen

- [`EventSource`](/de/docs/Web/API/EventSource)
  - : Definiert alle Funktionen für die Verbindung zu einem Server, den Empfang von Events und Daten, die Behandlung von Fehlern, das Schließen einer Verbindung usw.

## Bibliotheken

- [Mercure: ein auf SSE basierendes Echtzeit-Kommunikationsprotokoll (Publish-Subscribe)](https://mercure.rocks/)
- [Transmit: ein natives Server-Sent-Event-Modul (SSE) mit vorgegebenen Konventionen für AdonisJS](https://docs.adonisjs.com/guides/digging-deeper/server-sent-events)
- [EventSource-Polyfill für Node.js](https://github.com/EventSource/eventsource)
- intercooler.js: [deklarative SSE-Unterstützung](https://intercoolerjs.org/docs.html#sse)

## Beispiele

- [Einfache SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Netzwerkanfragen mit JavaScript stellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
- [JavaScript](/de/docs/Web/JavaScript)
- [WebSockets](/de/docs/Web/API/WebSockets_API)
- [Erstellen einer sozialen Anwendung mit Pinnwand oder Feed](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/), die Server-Sent Events verwendet, und [ihr Code auf GitHub](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
