---
title: Server-sent events
slug: Web/API/Server-sent_events
l10n:
  sourceCommit: 47b1321d6cac5c7093583162c4cf73e015cc4905
---

{{DefaultAPISidebar("Server Sent Events")}}{{AvailableInWorkers}}

Traditionell muss eine Webseite eine Anfrage an den Server senden, um neue Daten zu empfangen. Das heißt, die Seite fordert Daten vom Server an. Mit Server-Sent Events kann ein Server jederzeit neue Daten an eine Webseite senden, indem er Nachrichten aktiv an sie überträgt. Diese eingehenden Nachrichten können innerhalb der Webseite als _[Events](/de/docs/Web/API/Event) + Daten_ behandelt werden.

## Konzepte und Verwendung

Wie Sie Server-Sent Events verwenden, erfahren Sie in unserem Artikel [Server-Sent Events verwenden](/de/docs/Web/API/Server-sent_events/Using_server-sent_events).

## Schnittstellen

- [`EventSource`](/de/docs/Web/API/EventSource)
  - : Definiert alle Funktionen für die Verbindung mit einem Server, den Empfang von Events und Daten, die Behandlung von Fehlern, das Schließen einer Verbindung usw.

## Beispiele

- [Einfache SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events)

## Spezifikationen

{{Specifications}}

## Siehe auch

### Werkzeuge

- [Mercure: ein auf SSE aufbauendes Echtzeit-Kommunikationsprotokoll (Publish-Subscribe)](https://mercure.rocks/)
- [Transmit: ein natives, auf AdonisJS zugeschnittenes Server-Sent-Event-Modul (SSE)](https://docs.adonisjs.com/guides/digging-deeper/server-sent-events)
- [EventSource-Polyfill für Node.js](https://github.com/EventSource/eventsource)
- intercooler.js: [deklarative SSE-Unterstützung](https://intercoolerjs.org/docs.html#sse)

### Verwandte Themen

- [Lernen: Netzwerkanfragen mit JavaScript stellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
- [JavaScript](/de/docs/Web/JavaScript)
- [WebSockets](/de/docs/Web/API/WebSockets_API)

### Weitere Ressourcen

- [Erstellen einer sozialen Pinnwand- oder Feed-Anwendung](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/) mit Server-Sent Events und [der zugehörige Code auf GitHub](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
