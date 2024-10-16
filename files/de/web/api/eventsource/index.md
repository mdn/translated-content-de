---
title: EventSource
slug: Web/API/EventSource
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Das **`EventSource`** Interface ist das Webinterface für [Server-sent events](/de/docs/Web/API/Server-sent_events).

Eine `EventSource` Instanz eröffnet eine persistente Verbindung zu einem [HTTP](/de/docs/Web/HTTP) Server, der [Events](/de/docs/Learn/JavaScript/Building_blocks/Events) im `text/event-stream` Format sendet. Die Verbindung bleibt geöffnet, bis sie durch Aufruf von [`EventSource.close()`](/de/docs/Web/API/EventSource/close) geschlossen wird.

{{InheritanceDiagram}}

Sobald die Verbindung geöffnet ist, werden eingehende Nachrichten vom Server in Form von Events an Ihren Code übermittelt. Wenn es ein Event-Feld in der eingehenden Nachricht gibt, entspricht das ausgelöste Event dem Wert des Event-Feldes. Wenn kein Event-Feld vorhanden ist, wird ein generisches [`message`](/de/docs/Web/API/EventSource/message_event) Event ausgelöst.

Im Gegensatz zu [WebSockets](/de/docs/Web/API/WebSockets_API) sind server-sent events unidirektional; das heißt, Daten-Nachrichten werden in eine Richtung gesendet, vom Server zum Client (wie z.B. der Webbrowser eines Nutzers). Das macht sie zu einer ausgezeichneten Wahl, wenn es nicht erforderlich ist, Daten in Nachrichtenform vom Client zum Server zu senden. Beispielsweise ist `EventSource` eine nützliche Methode für die Bearbeitung von Themen wie Social Media Status-Updates, Nachrichtenfeeds oder die Übermittlung von Daten in einen [clientseitigen Speicher](/de/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) Mechanismus wie [IndexedDB](/de/docs/Web/API/IndexedDB_API) oder [Web Storage](/de/docs/Web/API/Web_Storage_API).

> [!WARNING]
> Bei Nichtverwendung über HTTP/2 leidet SSE unter einer Beschränkung der maximalen Anzahl offener Verbindungen, was insbesondere dann problematisch sein kann, wenn mehrere Tabs geöffnet werden, da das Limit _pro Browser_ festgelegt ist und sehr niedrig (6) ist. Das Problem wurde in [Chrome](https://crbug.com/275955) und [Firefox](https://bugzil.la/906896) als "Wird nicht behoben" markiert. Dieses Limit ist pro Browser + Domain, was bedeutet, dass Sie 6 SSE-Verbindungen über alle Tabs zu `www.example1.com` und weitere 6 SSE-Verbindungen zu `www.example2.com` öffnen können. (aus [StackOverflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). Bei der Verwendung von HTTP/2 wird die maximale Anzahl gleichzeitiger _HTTP-Streams_ zwischen dem Server und dem Client ausgehandelt (standardmäßig 100).

## Konstruktor

- [`EventSource()`](/de/docs/Web/API/EventSource/EventSource)
  - : Erstellt ein neues `EventSource`, um server-sent events von einer angegebenen URL zu empfangen, optional im Credential-Modus.

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`EventSource.readyState`](/de/docs/Web/API/EventSource/readyState) {{ReadOnlyInline}}
  - : Eine Zahl, die den Status der Verbindung darstellt. Mögliche Werte sind `CONNECTING` (`0`), `OPEN` (`1`) oder `CLOSED` (`2`).
- [`EventSource.url`](/de/docs/Web/API/EventSource/url) {{ReadOnlyInline}}
  - : Ein String, der die URL der Quelle repräsentiert.
- [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob das `EventSource` Objekt mit Cross-Origin ([CORS](/de/docs/Web/HTTP/CORS)) Anmeldeinformationen gesetzt (`true`) oder nicht (`false`, Standard) instanziiert wurde.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`EventSource.close()`](/de/docs/Web/API/EventSource/close)
  - : Schließt die Verbindung, sofern vorhanden, und setzt das Attribute `readyState` auf `CLOSED`. Wenn die Verbindung bereits geschlossen ist, tut die Methode nichts.

## Ereignisse

- [`error`](/de/docs/Web/API/EventSource/error_event)
  - : Wird ausgelöst, wenn eine Verbindung zu einer Ereignisquelle nicht geöffnet werden konnte.
- [`message`](/de/docs/Web/API/EventSource/message_event)
  - : Wird ausgelöst, wenn Daten von einer Ereignisquelle empfangen werden.
- [`open`](/de/docs/Web/API/EventSource/open_event)
  - : Wird ausgelöst, wenn eine Verbindung zu einer Ereignisquelle geöffnet wurde.

Zusätzlich kann die Ereignisquelle selbst Nachrichten mit einem Event-Feld senden, die ad-hoc-Events erstellen, die auf diesen Wert abgestimmt sind.

## Beispiele

In diesem einfachen Beispiel wird ein `EventSource` erstellt, um unbenannte Events vom Server zu empfangen; eine Seite mit dem Namen `sse.php` ist für die Ereignisgenerierung verantwortlich.

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

Jedes empfangene Ereignis veranlasst, dass der `onmessage` Event-Handler unseres `EventSource` Objekts ausgeführt wird. Dieser erstellt dann ein neues {{HTMLElement("li")}} Element und schreibt die Daten der Nachricht hinein, anschließend wird das neue Element an das Listen-Element im Dokument angehängt.

> [!NOTE]
> Sie finden ein vollständiges Beispiel auf GitHub — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

Um auf benannte Events zu hören, benötigen Sie einen Listener für jeden gesendeten Event-Typ.

```js
const sse = new EventSource("/api/v1/sse");

/*
 * This will listen only for events
 * similar to the following:
 *
 * event: notice
 * data: useful data
 * id: some-id
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
