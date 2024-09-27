---
title: EventSource
slug: Web/API/EventSource
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Server Sent Events")}}

Das **`EventSource`** Interface ist das Schnittstellenkonzept für Webinhalte zu [Server-sent events](/de/docs/Web/API/Server-sent_events).

Eine `EventSource`-Instanz öffnet eine dauerhafte Verbindung zu einem [HTTP](/de/docs/Web/HTTP) Server, der [Events](/de/docs/Learn/JavaScript/Building_blocks/Events) im `text/event-stream`-Format sendet. Die Verbindung bleibt offen, bis sie durch den Aufruf von [`EventSource.close()`](/de/docs/Web/API/EventSource/close) geschlossen wird.

{{InheritanceDiagram}}

Sobald die Verbindung geöffnet ist, werden eingehende Nachrichten vom Server in Form von Ereignissen an Ihren Code übermittelt. Wenn im eingehenden Nachricht ein Ereignisfeld vorhanden ist, entspricht das ausgelöste Ereignis dem Wert des Ereignisfeldes. Wenn kein Ereignisfeld vorhanden ist, wird ein generisches [`message`](/de/docs/Web/API/EventSource/message_event) Ereignis ausgelöst.

Im Gegensatz zu [WebSockets](/de/docs/Web/API/WebSockets_API) sind server-sent events unidirektional; das heißt, Datennachrichten werden in eine Richtung übertragen, vom Server zum Client (z.B. dem Webbrowser eines Nutzers). Das macht sie zu einer hervorragenden Wahl, wenn es nicht nötig ist, Daten vom Client in Form von Nachrichten an den Server zu senden. `EventSource` eignet sich beispielsweise hervorragend für die Handhabung von Dingen wie Social-Media-Status-Updates, Nachrichtenfeeds oder zur Bereitstellung von Daten in einen [clientseitigen Speicher](/de/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) Mechanismus wie [IndexedDB](/de/docs/Web/API/IndexedDB_API) oder [Web Storage](/de/docs/Web/API/Web_Storage_API).

> [!WARNING]
> Wenn **nicht über HTTP/2 verwendet**, leidet SSE unter der Begrenzung der maximalen Anzahl offener Verbindungen, was besonders schmerzhaft sein kann, wenn man mehrere Tabs öffnet, da das Limit _pro Browser_ gilt und auf eine sehr niedrige Zahl (6) gesetzt ist. Das Problem wurde in [Chrome](https://crbug.com/275955) und [Firefox](https://bugzil.la/906896) als "Wird nicht behoben" markiert. Dieses Limit gilt pro Browser + Domain, das bedeutet, dass Sie 6 SSE-Verbindungen über alle Tabs zu `www.example1.com` und weitere 6 SSE-Verbindungen zu `www.example2.com` öffnen können. (aus [Stackoverflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). Bei der Verwendung von HTTP/2 wird die maximale Anzahl gleichzeitiger _HTTP-Streams_ zwischen dem Server und dem Client ausgehandelt (standardmäßig 100).

## Konstruktor

- [`EventSource()`](/de/docs/Web/API/EventSource/EventSource)
  - : Erstellt einen neuen `EventSource`, um server-sent events von einer angegebenen URL zu empfangen, optional im Credential-Modus.

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`EventSource.readyState`](/de/docs/Web/API/EventSource/readyState) {{ReadOnlyInline}}
  - : Eine Zahl, die den Zustand der Verbindung darstellt. Mögliche Werte sind `CONNECTING` (`0`), `OPEN` (`1`) oder `CLOSED` (`2`).
- [`EventSource.url`](/de/docs/Web/API/EventSource/url) {{ReadOnlyInline}}
  - : Ein String, der die URL der Quelle darstellt.
- [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das `EventSource`-Objekt mit Cross-Origin ([CORS](/de/docs/Web/HTTP/CORS)) Credentials gesetzt (`true`) oder nicht (`false`, Standard) instanziiert wurde.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`EventSource.close()`](/de/docs/Web/API/EventSource/close)
  - : Schließt die Verbindung, falls vorhanden, und setzt das `readyState` Attribut auf `CLOSED`. Wenn die Verbindung bereits geschlossen ist, tut die Methode nichts.

## Ereignisse

- [`error`](/de/docs/Web/API/EventSource/error_event)
  - : Wird ausgelöst, wenn eine Verbindung zu einer Ereignisquelle nicht geöffnet werden konnte.
- [`message`](/de/docs/Web/API/EventSource/message_event)
  - : Wird ausgelöst, wenn Daten von einer Ereignisquelle empfangen werden.
- [`open`](/de/docs/Web/API/EventSource/open_event)
  - : Wird ausgelöst, wenn eine Verbindung zu einer Ereignisquelle geöffnet wurde.

Zusätzlich kann die Ereignisquelle selbst Nachrichten mit einem Ereignisfeld senden, wodurch ad-hoc Ereignisse erstellt werden, die diesem Wert zugeordnet sind.

## Beispiele

In diesem einfachen Beispiel wird ein `EventSource` erstellt, um nicht benannte Ereignisse vom Server zu empfangen; eine Seite mit dem Namen `sse.php` ist für die Generierung der Ereignisse verantwortlich.

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

Jedes empfangene Ereignis veranlasst den `onmessage` Ereignishandler unseres `EventSource`-Objekts, ausgeführt zu werden. Dieser erstellt wiederum ein neues {{HTMLElement("li")}} Element, schreibt die Daten der Nachricht hinein und fügt das neue Element dem bereits im Dokument vorhandenen Listenelement hinzu.

> [!NOTE]
> Sie finden ein vollständiges Beispiel auf GitHub — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

Um benannte Ereignisse zu empfangen, benötigen Sie einen Listener für jeden gesendeten Ereignistyp.

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

- [Server-sent events](/de/docs/Web/API/Server-sent_events)
- [Verwendung von server-sent events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events)
