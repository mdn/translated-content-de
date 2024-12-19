---
title: EventSource
slug: Web/API/EventSource
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Das **`EventSource`**-Interface ist das Interface von Webinhalten für [Server-sent Events](/de/docs/Web/API/Server-sent_events).

Eine `EventSource`-Instanz öffnet eine dauerhafte Verbindung zu einem [HTTP](/de/docs/Web/HTTP)-Server, der [Events](/de/docs/Learn_web_development/Core/Scripting/Events) im `text/event-stream`-Format sendet. Die Verbindung bleibt geöffnet, bis sie durch Aufruf von [`EventSource.close()`](/de/docs/Web/API/EventSource/close) geschlossen wird.

{{InheritanceDiagram}}

Sobald die Verbindung geöffnet ist, werden eingehende Nachrichten vom Server in Form von Events an Ihren Code übermittelt. Wenn es ein Eventfeld in der eingehenden Nachricht gibt, ist das ausgelöste Event das gleiche wie der Wert des Eventfeldes. Wenn kein Eventfeld vorhanden ist, wird ein generisches [`message`](/de/docs/Web/API/EventSource/message_event)-Event ausgelöst.

Im Gegensatz zu [WebSockets](/de/docs/Web/API/WebSockets_API) sind server-sent Events unidirektional; das bedeutet, dass Datenmeldungen in eine Richtung geliefert werden, vom Server zum Client (wie beispielsweise einem Webbrowser eines Benutzers). Das macht sie zu einer ausgezeichneten Wahl, wenn keine Notwendigkeit besteht, Daten in Nachrichtenform vom Client an den Server zu senden. Zum Beispiel ist `EventSource` ein nützlicher Ansatz zur Handhabung von Dingen wie Updates in sozialen Medien, News-Feeds oder zur Lieferung von Daten in einen [client-seitigen Speicher](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage)-Mechanismus wie [IndexedDB](/de/docs/Web/API/IndexedDB_API) oder [Web Storage](/de/docs/Web/API/Web_Storage_API).

> [!WARNING]
> Wenn **nicht über HTTP/2 verwendet**, leidet SSE unter einer Beschränkung der maximalen Anzahl offener Verbindungen, was besonders schmerzhaft sein kann, wenn mehrere Tabs geöffnet werden, da das Limit _pro Browser_ und auf eine sehr niedrige Zahl (6) festgelegt ist. Das Problem wurde in [Chrome](https://crbug.com/275955) und [Firefox](https://bugzil.la/906896) als "Wird nicht behoben" markiert. Dieses Limit gilt pro Browser + Domain, was bedeutet, dass Sie 6 SSE-Verbindungen über alle Tabs zu `www.example1.com` und weitere 6 SSE-Verbindungen zu `www.example2.com` öffnen können. (aus [Stack Overflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). Bei Verwendung von HTTP/2 wird die maximale Anzahl gleichzeitiger _HTTP-Streams_ zwischen dem Server und dem Client verhandelt (Standardwert ist 100).

## Konstruktor

- [`EventSource()`](/de/docs/Web/API/EventSource/EventSource)
  - : Erstellt ein neues `EventSource`, um server-sent Events von einer angegebenen URL zu empfangen, optional im Credential-Modus.

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`EventSource.readyState`](/de/docs/Web/API/EventSource/readyState) {{ReadOnlyInline}}
  - : Eine Zahl, die den Zustand der Verbindung darstellt. Mögliche Werte sind `CONNECTING` (`0`), `OPEN` (`1`) oder `CLOSED` (`2`).
- [`EventSource.url`](/de/docs/Web/API/EventSource/url) {{ReadOnlyInline}}
  - : Ein String, der die URL der Quelle darstellt.
- [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob das `EventSource`-Objekt mit Cross-Origin ([CORS](/de/docs/Web/HTTP/CORS))-Credentials gesetzt (`true`) oder nicht (`false`, der Standardwert) instanziiert wurde.

## Instanzmethoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`EventSource.close()`](/de/docs/Web/API/EventSource/close)
  - : Schließt die Verbindung, falls vorhanden, und setzt das `readyState`-Attribut auf `CLOSED`. Wenn die Verbindung bereits geschlossen ist, macht die Methode nichts.

## Events

- [`error`](/de/docs/Web/API/EventSource/error_event)
  - : Wird ausgelöst, wenn eine Verbindung zu einer Ereignisquelle nicht geöffnet werden konnte.
- [`message`](/de/docs/Web/API/EventSource/message_event)
  - : Wird ausgelöst, wenn Daten von einer Ereignisquelle empfangen werden.
- [`open`](/de/docs/Web/API/EventSource/open_event)
  - : Wird ausgelöst, wenn eine Verbindung zu einer Ereignisquelle geöffnet wurde.

Zusätzlich kann die Ereignisquelle selbst Nachrichten mit einem Ereignisfeld senden, welches ad-hoc-Ereignisse mit diesem Wert erstellt.

## Beispiele

In diesem einfachen Beispiel wird ein `EventSource` erstellt, um ungeklärte Ereignisse vom Server zu empfangen; eine Seite mit dem Namen `sse.php` ist verantwortlich für die Erstellung der Events.

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

Jedes empfangene Event führt dazu, dass der `onmessage`-Ereignishandler unseres `EventSource`-Objekts ausgeführt wird. Dieser erstellt seinerseits ein neues {{HTMLElement("li")}}-Element und schreibt die Daten der Nachricht hinein, dann hängt er das neue Element an das bereits im Dokument vorhandene Listenelement an.

> [!NOTE]
> Sie finden ein vollständiges Beispiel auf GitHub — siehe [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

Um benannte Ereignisse zu hören, benötigen Sie einen Listener für jeden Ereignistyp, der gesendet wird.

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

- [Server-sent Events](/de/docs/Web/API/Server-sent_events)
- [Verwendung von server-sent Events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events)
