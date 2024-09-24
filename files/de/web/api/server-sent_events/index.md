---
title: Server-gesendete Ereignisse
slug: Web/API/Server-sent_events
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{DefaultAPISidebar("Server Sent Events")}} {{AvailableInWorkers}}

Traditionell muss eine Webseite eine Anfrage an den Server senden, um neue Daten zu erhalten; das heißt, die Seite fordert Daten vom Server an. Mit server-gesendeten Ereignissen ist es möglich, dass ein Server jederzeit neue Daten an eine Webseite sendet, indem Nachrichten zur Webseite gepusht werden. Diese eingehenden Nachrichten können innerhalb der Webseite als _[Ereignisse](/de/docs/Web/API/Event) + Daten_ behandelt werden.

> [!NOTE]
> Firefox unterstützt derzeit nicht die Verwendung von server-gesendeten Ereignissen in Service-Workern (sie werden in dedizierten und gemeinsam genutzten Workern unterstützt). Siehe [Firefox Bug 1681218](https://bugzil.la/1681218).

## Konzepte und Nutzung

Um zu lernen, wie man server-gesendete Ereignisse verwendet, lesen Sie unseren Artikel [Verwendung von server-gesendeten Ereignissen](/de/docs/Web/API/Server-sent_events/Using_server-sent_events).

## Schnittstellen

- {{domxref("EventSource")}}
  - : Definiert alle Funktionen, die für die Verbindung zu einem Server, den Empfang von Ereignissen/Daten, Fehlern, das Schließen einer Verbindung usw. zuständig sind.

## Beispiele

- [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events)

## Spezifikationen

{{Specifications}}

## Siehe auch

### Werkzeuge

- [Mercure: ein Echtzeit-Kommunikationsprotokoll (Publish-Subscribe), das auf SSE basiert](https://mercure.rocks/)
- [EventSource Polyfill für Node.js](https://github.com/EventSource/eventsource)
- Remy Sharps [EventSource Polyfill](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffles [EventSource Polyfill](https://github.com/Yaffle/EventSource)
- Rick Waldrons [jquery Plugin](https://github.com/rwaldron/jquery.eventsource)
- intercooler.js [deklarative SSE-Unterstützung](https://intercoolerjs.org/docs.html#sse)

### Verwandte Themen

- [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [JavaScript](/de/docs/Web/JavaScript)
- [WebSockets](/de/docs/Web/API/WebSockets_API)

### Andere Ressourcen

- [Erstellung einer sozialen Anwendung mit Wand/Feed](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/) basierend auf server-gesendeten Ereignissen und [ihrem Code auf GitHub](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
