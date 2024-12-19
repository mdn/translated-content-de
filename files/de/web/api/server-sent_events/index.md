---
title: Server-sent events
slug: Web/API/Server-sent_events
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("Server Sent Events")}}{{AvailableInWorkers}}

Traditionell muss eine Webseite eine Anfrage an den Server senden, um neue Daten zu erhalten; das heißt, die Seite fordert Daten vom Server an. Mit server-sent events ist es dem Server möglich, jederzeit neue Daten an eine Webseite zu senden, indem Nachrichten an die Webseite gesendet werden. Diese eingehenden Nachrichten können innerhalb der Webseite als _[Events](/de/docs/Web/API/Event) + Daten_ behandelt werden.

> [!NOTE]
> Firefox unterstützt derzeit nicht die Verwendung von server-sent events in Service-Workern (wohl aber in dedizierten und gemeinsamen Workern). Siehe [Firefox-Bug 1681218](https://bugzil.la/1681218).

## Konzepte und Verwendung

Um zu lernen, wie Sie server-sent events verwenden, lesen Sie unseren Artikel [Using server-sent events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events).

## Schnittstellen

- [`EventSource`](/de/docs/Web/API/EventSource)
  - : Definiert alle Funktionen, die das Verbinden mit einem Server, das Empfangen von Events/Daten, Fehlerbehandlung, das Schließen einer Verbindung usw. behandeln.

## Beispiele

- [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events)

## Spezifikationen

{{Specifications}}

## Siehe auch

### Werkzeuge

- [Mercure: ein Echtzeit-Kommunikationsprotokoll (Publish-Subscribe), basierend auf SSE](https://mercure.rocks/)
- [Transmit: ein natives, meinungsstarkes Server-Sent-Event (SSE)-Modul für AdonisJS](https://docs.adonisjs.com/guides/digging-deeper/transmit)
- [EventSource-Polyfill für Node.js](https://github.com/EventSource/eventsource)
- Remy Sharp's [EventSource-Polyfill](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffle's [EventSource-Polyfill](https://github.com/Yaffle/EventSource)
- Rick Waldron's [jQuery-Plugin](https://github.com/rwaldron/jquery.eventsource)
- intercooler.js [deklarative SSE-Unterstützung](https://intercoolerjs.org/docs.html#sse)

### Verwandte Themen

- [Leitfaden: Netzwerkanfragen mit JavaScript erstellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
- [JavaScript](/de/docs/Web/JavaScript)
- [WebSockets](/de/docs/Web/API/WebSockets_API)

### Andere Ressourcen

- [Erstellen einer Wall/Feed-Social-Anwendung](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/) mit server-sent events und [deren Code auf GitHub](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
