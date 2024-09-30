---
title: Server-sent events
slug: Web/API/Server-sent_events
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{DefaultAPISidebar("Server Sent Events")}} {{AvailableInWorkers}}

Traditionell muss eine Webseite eine Anfrage an den Server senden, um neue Daten zu erhalten; das heißt, die Seite fordert Daten vom Server an. Mit Server-sent events ist es möglich, dass ein Server jederzeit neue Daten an eine Webseite sendet, indem er Nachrichten an die Webseite übermittelt. Diese eingehenden Nachrichten können innerhalb der Webseite als _[Events](/de/docs/Web/API/Event) + Daten_ behandelt werden.

> [!NOTE]
> Firefox unterstützt derzeit die Verwendung von Server-sent events in Service-Workern nicht (es wird in dedizierten und gemeinsam genutzten Workern unterstützt). Siehe [Firefox-Bug 1681218](https://bugzil.la/1681218).

## Konzepte und Verwendung

Um zu lernen, wie man Server-sent events verwendet, sehen Sie sich unseren Artikel [Verwendung von Server-sent events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events) an.

## Schnittstellen

- [`EventSource`](/de/docs/Web/API/EventSource)
  - : Definiert alle Funktionen, die die Verbindung zu einem Server, den Empfang von Ereignissen/Daten, Fehlerbehandlung, das Schließen einer Verbindung usw. handhaben.

## Beispiele

- [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events)

## Spezifikationen

{{Specifications}}

## Siehe auch

### Werkzeuge

- [Mercure: ein Echtzeit-Kommunikationsprotokoll (Publish-Subscribe), das auf SSE basiert](https://mercure.rocks/)
- [EventSource-Polyfill für Node.js](https://github.com/EventSource/eventsource)
- Remy Sharps [EventSource-Polyfill](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffle's [EventSource-Polyfill](https://github.com/Yaffle/EventSource)
- Rick Waldrons [jquery-Plugin](https://github.com/rwaldron/jquery.eventsource)
- intercooler.js [Deklarative SSE-Unterstützung](https://intercoolerjs.org/docs.html#sse)

### Verwandte Themen

- [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [JavaScript](/de/docs/Web/JavaScript)
- [WebSockets](/de/docs/Web/API/WebSockets_API)

### Andere Ressourcen

- [Erstellen einer Social Wall/Feed-Anwendung](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/) mit Server-sent events und [deren Code auf GitHub](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
