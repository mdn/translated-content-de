---
title: EventSource
slug: Web/API/EventSource
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Server Sent Events")}}

Das **`EventSource`**-Interface ist das Schnittstellenstück von Webinhalten zu [serverseitigen Ereignissen](/de/docs/Web/API/Server-sent_events).

Eine `EventSource`-Instanz öffnet eine persistente Verbindung zu einem [HTTP](/de/docs/Web/HTTP)-Server, der [Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events) im `text/event-stream`-Format sendet. Die Verbindung bleibt offen, bis sie durch einen Aufruf von [`EventSource.close()`](/de/docs/Web/API/EventSource/close) geschlossen wird.

{{InheritanceDiagram}}

Sobald die Verbindung geöffnet ist, werden eingehende Nachrichten vom Server in Form von Ereignissen an Ihren Code übermittelt. Wenn es ein "event"-Feld in der eingehenden Nachricht gibt, entspricht das ausgelöste Ereignis dem Wert des "event"-Felds. Wenn kein "event"-Feld vorhanden ist, wird ein generisches [`message`](/de/docs/Web/API/EventSource/message_event)-Ereignis ausgelöst.

Im Gegensatz zu [WebSockets](/de/docs/Web/API/WebSockets_API) sind serverseitige Ereignisse unidirektional; das heißt, Datenmeldungen werden nur in eine Richtung gesendet, vom Server zum Client (wie z.B. ein Webbrowser eines Benutzers). Das macht sie zu einer ausgezeichneten Wahl, wenn es nicht erforderlich ist, Daten in Form von Nachrichten vom Client zum Server zu senden. Zum Beispiel ist `EventSource` eine nützliche Methode für die Verarbeitung von Dingen wie Social Media-Statusaktualisierungen, Nachrichtenfeeds oder die Bereitstellung von Daten in einem [clientseitigen Speicher](/de/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)-Mechanismus wie [IndexedDB](/de/docs/Web/API/IndexedDB_API) oder [Web Storage](/de/docs/Web/API/Web_Storage_API).

> [!WARNING]
> Wenn **nicht über HTTP/2 verwendet**, leidet SSE unter einer Begrenzung der maximalen Anzahl offener Verbindungen, was besonders schmerzhaft sein kann, wenn mehrere Tabs geöffnet werden, da das Limit _pro Browser_ sehr niedrig (6) gesetzt ist. Das Problem wurde in [Chrome](https://crbug.com/275955) und [Firefox](https://bugzil.la/906896) als "Wird nicht behoben" markiert. Dieses Limit gilt pro Browser + Domain, was bedeutet, dass Sie 6 SSE-Verbindungen in allen Tabs zu `www.example1.com` und weitere 6 SSE-Verbindungen zu `www.example2.com` öffnen können. (aus [Stackoverflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). Bei der Verwendung von HTTP/2 wird die maximale Anzahl gleichzeitiger _HTTP-Streams_ zwischen Server und Client ausgehandelt (Standard ist 100).

## Konstruktor

- [`EventSource()`](/de/docs/Web/API/EventSource/EventSource)
  - : Erstellt eine neue `EventSource`, um serverseitige Ereignisse von einer angegebenen URL zu empfangen, optional im Berechtigungsmodus.

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`EventSource.readyState`](/de/docs/Web/API/EventSource/readyState) {{ReadOnlyInline}}
  - : Eine Zahl, die den Zustand der Verbindung darstellt. Mögliche Werte sind `CONNECTING` (`0`), `OPEN` (`1`) oder `CLOSED` (`2`).
- [`EventSource.url`](/de/docs/Web/API/EventSource/url) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die URL der Quelle darstellt.
- [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob das `EventSource`-Objekt mit Cross-Origin ([CORS](/de/docs/Web/HTTP/CORS))-Berechtigungsnachweisen (`true`) oder nicht (`false`, Standard) instanziiert wurde.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`EventSource.close()`](/de/docs/Web/API/EventSource/close)
  - : Schließt die Verbindung, sofern vorhanden, und setzt das `readyState`-Attribut auf `CLOSED`. Wenn die Verbindung bereits geschlossen ist, tut die Methode nichts.

## Ereignisse

- [`error`](/de/docs/Web/API/EventSource/error_event)
  - : Wird ausgelöst, wenn es nicht möglich war, eine Verbindung zu einer Ereignisquelle zu öffnen.
- [`message`](/de/docs/Web/API/EventSource/message_event)
  - : Wird ausgelöst, wenn Daten von einer Ereignisquelle empfangen werden.
- [`open`](/de/docs/Web/API/EventSource/open_event)
  - : Wird ausgelöst, wenn eine Verbindung zu einer Ereignisquelle geöffnet wurde.

Zusätzlich kann die Ereignisquelle selbst Nachrichten mit einem Ereignisfeld senden, was ad-hoc-Ereignisse erzeugt, die an diesem Wert ausgerichtet sind.

## Beispiele

In diesem einfachen Beispiel wird eine `EventSource` erstellt, um unbenannte Ereignisse vom Server zu empfangen; eine Seite mit dem Namen `sse.php` ist verantwortlich für die Generierung der Ereignisse.

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

Jedes empfangene Ereignis verursacht, dass der `onmessage`-Ereignishandler unseres `EventSource`-Objekts ausgeführt wird. Dieser erstellt im Nachgang ein neues {{HTMLElement("li")}}-Element, schreibt die Daten der Nachricht hinein und fügt das neue Element dem bereits im Dokument vorhandenen Listenelement hinzu.

> [!NOTE]
> Ein vollständiges Beispiel finden Sie auf GitHub — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

Um auf benannte Ereignisse zu hören, benötigen Sie einen Listener für jeden Typ von gesendeten Ereignissen.

```js
const sse = new EventSource("/api/v1/sse");

/*
 * This will listen only for events
 * similar to the following:
 *
 * event: notice
 * data: useful data
 * id: someid
 */
sse.addEventListener("notice", (e) => {
  console.log(e.data);
});

/*
 * Similarly, this will listen for events
 * with the field `event: update`
 */
sse.addEventListener("update", (e) => {
  console.log(e.data);
});

/*
 * The event "message" is a special case, as it
 * will capture events without an event field
 * as well as events that have the specific type
 * `event: message` It will not trigger on any
 * other event type.
 */
sse.addEventListener("message", (e) => {
  console.log(e.data);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Serverseitige Ereignisse](/de/docs/Web/API/Server-sent_events)
- [Verwendung von serverseitigen Ereignissen](/de/docs/Web/API/Server-sent_events/Using_server-sent_events)
