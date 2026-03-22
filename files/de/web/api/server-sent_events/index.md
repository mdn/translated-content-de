---
title: Server-sent events
slug: Web/API/Server-sent_events
l10n:
  sourceCommit: 8a74d8feac267c1ddc37a4a8bc61e9aa8db75b12
---

{{DefaultAPISidebar("Server Sent Events")}}{{AvailableInWorkers}}

Traditionell muss eine Webseite eine Anfrage an den Server senden, um neue Daten zu erhalten; das heißt, die Seite fordert Daten vom Server an. Mit server-gesendeten Ereignissen ist es möglich, dass ein Server jederzeit neue Daten an eine Webseite sendet, indem er Nachrichten an die Webseite pusht. Diese eingehenden Nachrichten können innerhalb der Webseite als _[Events](/de/docs/Web/API/Event) + Daten_ behandelt werden.

## Konzepte und Nutzung

Um zu lernen, wie man server-gesendete Ereignisse verwendet, lesen Sie unseren Artikel [Verwendung von server-gesendeten Ereignissen](/de/docs/Web/API/Server-sent_events/Using_server-sent_events).

## Schnittstellen

- [`EventSource`](/de/docs/Web/API/EventSource)
  - : Definiert alle Funktionen, die das Verbinden mit einem Server, das Empfangen von Ereignissen/Daten, Fehlern, das Schließen einer Verbindung usw. verwalten.

## Beispiele

- [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events)

## Spezifikationen

{{Specifications}}

## Siehe auch

### Werkzeuge

- [Mercure: ein Echtzeit-Kommunikationsprotokoll (Publish-Subscribe) basierend auf SSE](https://mercure.rocks/)
- [Transmit: ein nativer, meinungsstarker Server-Sent-Event (SSE) Modul entwickelt für AdonisJS](https://docs.adonisjs.com/guides/digging-deeper/server-sent-events)
- [EventSource Polyfill für Node.js](https://github.com/EventSource/eventsource)
- Remy Sharps [EventSource Polyfill](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffles [EventSource Polyfill](https://github.com/Yaffle/EventSource)
- Rick Waldrons [jquery Plugin](https://github.com/rwaldron/jquery.eventsource)
- intercooler.js [declarative SSE support](https://intercoolerjs.org/docs.html#sse)

### Verwandte Themen

- [Lernen: Netzwerk-Anfragen mit JavaScript machen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
- [JavaScript](/de/docs/Web/JavaScript)
- [WebSockets](/de/docs/Web/API/WebSockets_API)

### Andere Ressourcen

- [Erstellung einer sozialen Wall/Feed-Anwendung](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/), unterstützt von server-gesendeten Ereignissen und [ihrem Code auf GitHub](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
