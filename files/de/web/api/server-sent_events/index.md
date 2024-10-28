---
title: Server-sent events
slug: Web/API/Server-sent_events
l10n:
  sourceCommit: ca3d9b9512aa8b38039a6a51a5cf7b3e4d70393a
---

{{DefaultAPISidebar("Server Sent Events")}}{{AvailableInWorkers}}

Traditionell muss eine Webseite eine Anforderung an den Server senden, um neue Daten zu erhalten; das heißt, die Seite fordert Daten vom Server an. Mit server-sent events ist es möglich, dass ein Server jederzeit neue Daten an eine Webseite sendet, indem er Nachrichten an die Webseite überträgt. Diese eingehenden Nachrichten können innerhalb der Webseite als _[Events](/de/docs/Web/API/Event) + Daten_ behandelt werden.

> [!NOTE]
> Firefox unterstützt derzeit nicht die Verwendung von server-sent events in Service-Mitarbeitern (es unterstützt sie in dedizierten und geteilten Arbeitern). Siehe [Firefox-Bug 1681218](https://bugzil.la/1681218).

## Konzepte und Verwendung

Um zu lernen, wie man server-sent events verwendet, lesen Sie unseren Artikel [Using server-sent events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events).

## Schnittstellen

- [`EventSource`](/de/docs/Web/API/EventSource)
  - : Definiert alle Funktionen, die den Anschluss an einen Server, den Empfang von Events/Daten, Fehler, das Schließen einer Verbindung usw. abwickeln.

## Beispiele

- [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events)

## Spezifikationen

{{Specifications}}

## Siehe auch

### Werkzeuge

- [Mercure: ein Protokoll für Echtzeitkommunikation (Publish-Subscribe), das auf SSE aufbaut](https://mercure.rocks/)
- [Transmit: ein natives Server-Sent-Event (SSE) Modul für AdonisJS](https://docs.adonisjs.com/guides/digging-deeper/transmit)
- [EventSource Polyfill für Node.js](https://github.com/EventSource/eventsource)
- Remy Sharp's [EventSource Polyfill](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffle's [EventSource Polyfill](https://github.com/Yaffle/EventSource)
- Rick Waldrons [jquery Plugin](https://github.com/rwaldron/jquery.eventsource)
- intercooler.js [deklarative SSE-Unterstützung](https://intercoolerjs.org/docs.html#sse)

### Verwandte Themen

- [Abrufen von Daten vom Server](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [JavaScript](/de/docs/Web/JavaScript)
- [WebSockets](/de/docs/Web/API/WebSockets_API)

### Andere Ressourcen

- [Erstellung einer Wand/Feed für soziale Anwendungen](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/) mit server-sent events und [deren Code auf GitHub](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
