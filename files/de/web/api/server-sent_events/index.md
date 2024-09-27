---
title: Server-sent events
slug: Web/API/Server-sent_events
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{DefaultAPISidebar("Server Sent Events")}} {{AvailableInWorkers}}

Traditionell muss eine Webseite eine Anfrage an den Server senden, um neue Daten zu erhalten; das bedeutet, die Seite fordert Daten vom Server an. Mit server-sent events ist es möglich, dass ein Server jederzeit neue Daten an eine Webseite sendet, indem er Nachrichten an die Webseite pusht. Diese eingehenden Nachrichten können innerhalb der Webseite als _[Events](/de/docs/Web/API/Event) + Daten_ behandelt werden.

> [!NOTE]
> Firefox unterstützt derzeit die Nutzung von server-sent events in Service-Worker nicht (es unterstützt sie in dedizierten und geteilten Workern). Siehe [Firefox-Bug 1681218](https://bugzil.la/1681218).

## Konzepte und Nutzung

Um zu lernen, wie man server-sent events verwendet, lesen Sie unseren Artikel [Using server-sent events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events).

## Schnittstellen

- [`EventSource`](/de/docs/Web/API/EventSource)
  - : Definiert alle Funktionen, die das Verbinden mit einem Server, den Empfang von Events/Daten, Fehlern, das Schließen einer Verbindung usw. handhaben.

## Beispiele

- [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events)

## Spezifikationen

{{Specifications}}

## Siehe auch

### Werkzeuge

- [Mercure: ein Protokoll für Echtzeitkommunikation (Publish-Subscribe), das auf SSE aufbaut](https://mercure.rocks/)
- [EventSource Polyfill für Node.js](https://github.com/EventSource/eventsource)
- Remy Sharps [EventSource Polyfill](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffles [EventSource Polyfill](https://github.com/Yaffle/EventSource)
- Rick Waldrons [jQuery Plugin](https://github.com/rwaldron/jquery.eventsource)
- intercooler.js [deklarative SSE-Unterstützung](https://intercoolerjs.org/docs.html#sse)

### Verwandte Themen

- [Abrufen von Daten vom Server](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [JavaScript](/de/docs/Web/JavaScript)
- [WebSockets](/de/docs/Web/API/WebSockets_API)

### Andere Ressourcen

- [Erstellen einer Wall/Feed-Social-Applikation](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/) angetrieben durch server-sent events und [dessen Code auf GitHub](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
