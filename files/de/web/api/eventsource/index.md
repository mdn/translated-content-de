---
title: EventSource
slug: Web/API/EventSource
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Das **`EventSource`**-Interface ist die Schnittstelle von Webinhalten zu [servergesendeten Ereignissen](/de/docs/Web/API/Server-sent_events).

Eine `EventSource`-Instanz öffnet eine persistente Verbindung zu einem [HTTP](/de/docs/Web/HTTP)-Server, der [Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events) im `text/event-stream`-Format sendet. Die Verbindung bleibt offen, bis sie durch Aufruf von [`EventSource.close()`](/de/docs/Web/API/EventSource/close) geschlossen wird.

{{InheritanceDiagram}}

Sobald die Verbindung geöffnet ist, werden eingehende Nachrichten vom Server als Ereignisse an Ihren Code übermittelt. Wenn im eingehenden Nachrichtentext ein Ereignisfeld vorhanden ist, entspricht das ausgelöste Ereignis dem Wert des Ereignisfelds. Wenn kein Ereignisfeld vorhanden ist, wird ein generisches [`message`](/de/docs/Web/API/EventSource/message_event)-Ereignis ausgelöst.

Im Gegensatz zu [WebSockets](/de/docs/Web/API/WebSockets_API) sind servergesendete Ereignisse unidirektional; das heißt, Datenmeldungen werden in eine Richtung gesendet, nämlich vom Server zum Client (wie etwa einem Webbrowser eines Benutzers). Das macht sie zu einer ausgezeichneten Wahl, wenn es nicht nötig ist, Daten in Form von Nachrichten vom Client an den Server zu senden. Beispielsweise ist `EventSource` eine nützliche Methode für die Verarbeitung von Dingen wie Statusaktualisierungen in sozialen Medien, Newsfeeds oder das Einpflegen von Daten in einen [clientseitigen Speicher](/de/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) Mechanismus wie [IndexedDB](/de/docs/Web/API/IndexedDB_API) oder [Web Storage](/de/docs/Web/API/Web_Storage_API).

> [!WARNING]
> Wenn **nicht über HTTP/2 verwendet**, leidet SSE unter einer Begrenzung der maximalen Anzahl offener Verbindungen, was besonders schmerzhaft sein kann, wenn mehrere Tabs geöffnet werden. Das Limit ist _pro Browser_ und auf eine sehr niedrige Zahl (6) festgelegt. Das Problem wurde in [Chrome](https://crbug.com/275955) und [Firefox](https://bugzil.la/906896) als „Wird nicht behoben“ markiert. Dieses Limit gilt pro Browser und Domain. Das bedeutet, Sie können 6 SSE-Verbindungen über alle Tabs zu `www.example1.com` und weitere 6 SSE-Verbindungen zu `www.example2.com` öffnen. (von [Stack Overflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). Bei der Nutzung von HTTP/2 wird die maximale Anzahl gleichzeitiger _HTTP-Streams_ zwischen Server und Client ausgehandelt (standardmäßig 100).

## Konstruktor

- [`EventSource()`](/de/docs/Web/API/EventSource/EventSource)
  - : Erstellt eine neue `EventSource`, um servergesendete Ereignisse von einer angegebenen URL zu empfangen, optional im Berechtigungsmodus.

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`EventSource.readyState`](/de/docs/Web/API/EventSource/readyState) {{ReadOnlyInline}}
  - : Eine Zahl, die den Zustand der Verbindung repräsentiert. Mögliche Werte sind `CONNECTING` (`0`), `OPEN` (`1`) oder `CLOSED` (`2`).
- [`EventSource.url`](/de/docs/Web/API/EventSource/url) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die URL der Quelle repräsentiert.
- [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das `EventSource`-Objekt mit Cross-Origin-[CORS](/de/docs/Web/HTTP/CORS)-Berechtigungen (`true`) instanziiert wurde oder nicht (`false`, die Standardeinstellung).

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`EventSource.close()`](/de/docs/Web/API/EventSource/close)
  - : Schließt die Verbindung, falls vorhanden, und setzt das `readyState`-Attribut auf `CLOSED`. Wenn die Verbindung bereits geschlossen ist, tut die Methode nichts.

## Ereignisse

- [`error`](/de/docs/Web/API/EventSource/error_event)
  - : Wird ausgelöst, wenn eine Verbindung zu einer Ereignisquelle nicht geöffnet werden konnte.
- [`message`](/de/docs/Web/API/EventSource/message_event)
  - : Wird ausgelöst, wenn Daten von einer Ereignisquelle empfangen werden.
- [`open`](/de/docs/Web/API/EventSource/open_event)
  - : Wird ausgelöst, wenn eine Verbindung zu einer Ereignisquelle geöffnet wurde.

Zusätzlich kann die Ereignisquelle selbst Nachrichten mit einem Ereignisfeld senden, wodurch Ad-hoc-Ereignisse mit diesem Wert erstellt werden.

## Beispiele

In diesem einfachen Beispiel wird ein `EventSource` erstellt, um unbenannte Ereignisse vom Server zu empfangen; eine Seite mit dem Namen `sse.php` ist für die Ereignisgenerierung verantwortlich.

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

Jedes empfangene Ereignis führt dazu, dass der `onmessage`-Ereignishandler unseres `EventSource`-Objekts ausgeführt wird. Dieser erstellt wiederum ein neues {{HTMLElement("li")}}-Element und schreibt die Daten der Nachricht hinein, um das neue Element dann dem bereits im Dokument vorhandenen Listenelement anzufügen.

> [!NOTE]
> Sie finden ein vollständiges Beispiel auf GitHub — siehe [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

Um auf benannte Ereignisse zu hören, benötigen Sie einen Listener für jeden gesendeten Ereignistyp.

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

- [Server-gesendete Ereignisse](/de/docs/Web/API/Server-sent_events)
- [Verwendung von server-gesendeten Ereignissen](/de/docs/Web/API/Server-sent_events/Using_server-sent_events)
