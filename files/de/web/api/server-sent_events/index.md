---
title: Server-sent events
slug: Web/API/Server-sent_events
l10n:
  sourceCommit: a166ba48ceb8bccb37c67a0a8856b0e5b12e0135
---

{{DefaultAPISidebar("Server Sent Events")}}{{AvailableInWorkers}}

Traditionell muss eine Webseite eine Anfrage an den Server senden, um neue Daten zu erhalten; das bedeutet, die Seite fordert Daten vom Server an. Mit server-sent events ist es möglich, dass ein Server jederzeit neue Daten an eine Webseite senden kann, indem er Nachrichten an die Webseite übermittelt. Diese eingehenden Nachrichten können innerhalb der Webseite als _[Events](/de/docs/Web/API/Event) + Daten_ behandelt werden.

> [!NOTE]
> Firefox unterstützt derzeit die Verwendung von server-sent events in Service-Workern nicht (aber sie werden in dedizierten und gemeinsamen Workern unterstützt). Siehe [Firefox-Bug 1681218](https://bugzil.la/1681218).

## Konzepte und Nutzung

Um zu erfahren, wie Sie server-sent events verwenden, lesen Sie unseren Artikel [Verwendung von server-sent events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events).

## Schnittstellen

- [`EventSource`](/de/docs/Web/API/EventSource)
  - : Definiert alle Funktionen zur Verbindung mit einem Server, Empfang von Events/Daten, Fehlern, Schließen einer Verbindung usw.

## Beispiele

- [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events)

## Spezifikationen

{{Specifications}}

## Siehe auch

### Werkzeuge

- [Mercure: ein Echtzeit-Kommunikationsprotokoll (Publish-Subscribe), basierend auf SSE](https://mercure.rocks/)
- [EventSource Polyfill für Node.js](https://github.com/EventSource/eventsource)
- Remy Sharp's [EventSource Polyfill](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffle's [EventSource Polyfill](https://github.com/Yaffle/EventSource)
- Rick Waldron's [jquery plugin](https://github.com/rwaldron/jquery.eventsource)
- intercooler.js [deklarative SSE-Unterstützung](https://intercoolerjs.org/docs.html#sse)

### Verwandte Themen

- [Abrufen von Daten vom Server](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [JavaScript](/de/docs/Web/JavaScript)
- [WebSockets](/de/docs/Web/API/WebSockets_API)

### Andere Ressourcen

- [Erstellung einer Wall/Feed Social-Anwendung](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/) unterstützt durch server-sent events und [deren Code auf GitHub](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
