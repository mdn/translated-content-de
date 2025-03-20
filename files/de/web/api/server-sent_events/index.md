---
title: Server-sent events
slug: Web/API/Server-sent_events
l10n:
  sourceCommit: 65d664a83ca055135f38ff22ff4966ccc8a6061a
---

{{DefaultAPISidebar("Server Sent Events")}}{{AvailableInWorkers}}

Traditionell muss eine Webseite eine Anfrage an den Server senden, um neue Daten zu erhalten; das heißt, die Seite fordert Daten vom Server an. Mit serverseitigen Ereignissen ist es möglich, dass ein Server jederzeit neue Daten an eine Webseite sendet, indem Nachrichten an die Webseite übermittelt werden. Diese eingehenden Nachrichten können innerhalb der Webseite als _[Events](/de/docs/Web/API/Event) + Daten_ behandelt werden.

## Konzepte und Nutzung

Um zu lernen, wie man serverseitige Ereignisse nutzt, lesen Sie bitte unseren Artikel [Verwendung von serverseitigen Ereignissen](/de/docs/Web/API/Server-sent_events/Using_server-sent_events).

## Schnittstellen

- [`EventSource`](/de/docs/Web/API/EventSource)
  - : Definiert alle Funktionen zum Herstellen einer Verbindung zu einem Server, Empfangen von Ereignissen/Daten, Fehlern, Schließen einer Verbindung usw.

## Beispiele

- [Einfache SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events)

## Spezifikationen

{{Specifications}}

## Siehe auch

### Werkzeuge

- [Mercure: ein Echtzeit-Kommunikationsprotokoll (Publish-Subscribe) auf Basis von SSE](https://mercure.rocks/)
- [Transmit: ein natives, meinungsbetontes Server-Sent-Event (SSE)-Modul für AdonisJS](https://docs.adonisjs.com/guides/digging-deeper/transmit)
- [EventSource-Polyfill für Node.js](https://github.com/EventSource/eventsource)
- Remy Sharp's [EventSource-Polyfill](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffle's [EventSource-Polyfill](https://github.com/Yaffle/EventSource)
- Rick Waldron's [jquery Plugin](https://github.com/rwaldron/jquery.eventsource)
- intercooler.js [deklarative SSE-Unterstützung](https://intercoolerjs.org/docs.html#sse)

### Verwandte Themen

- [Lernen: Netzwerkanfragen mit JavaScript erstellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
- [JavaScript](/de/docs/Web/JavaScript)
- [WebSockets](/de/docs/Web/API/WebSockets_API)

### Andere Ressourcen

- [Erstellen einer Social-Media-Wand/-Feed-Anwendung](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/) angetrieben von serverseitigen Ereignissen und [dessen Code auf GitHub](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
