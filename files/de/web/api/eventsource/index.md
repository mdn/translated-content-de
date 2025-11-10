---
title: EventSource
slug: Web/API/EventSource
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Die **`EventSource`**-Schnittstelle ist die Schnittstelle von Web-Inhalten zu [Server-sent Events](/de/docs/Web/API/Server-sent_events).

Eine `EventSource`-Instanz öffnet eine dauerhafte Verbindung zu einem [HTTP](/de/docs/Web/HTTP)-Server, der [Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) im `text/event-stream`-Format sendet. Die Verbindung bleibt offen, bis sie durch Aufrufen von [`EventSource.close()`](/de/docs/Web/API/EventSource/close) geschlossen wird.

{{InheritanceDiagram}}

Sobald die Verbindung geöffnet ist, werden eingehende Nachrichten vom Server als Ereignisse an Ihren Code geliefert. Wenn im eingehenden Nachrichtenfeld ein Ereignisfeld vorhanden ist, entspricht das ausgelöste Ereignis dem Wert des Ereignisfeldes. Wenn kein Ereignisfeld vorhanden ist, wird ein generisches [`message`](/de/docs/Web/API/EventSource/message_event)-Ereignis ausgelöst.

Im Gegensatz zu [WebSockets](/de/docs/Web/API/WebSockets_API) sind server-sent events unidirektional; das heißt, Datenmeldungen werden in eine Richtung, vom Server zum Client (wie zum Beispiel dem Webbrowser eines Benutzers), geliefert. Das macht sie zu einer hervorragenden Wahl, wenn es nicht notwendig ist, Daten in Form von Nachrichten vom Client zum Server zu senden. Zum Beispiel ist `EventSource` ein nützlicher Ansatz für die Handhabung von Dingen wie Social-Media-Statusaktualisierungen, Newsfeeds oder zum Liefern von Daten in einen [clientseitigen Speicher](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage) Mechanismus wie [IndexedDB](/de/docs/Web/API/IndexedDB_API) oder [Web Storage](/de/docs/Web/API/Web_Storage_API).

> [!WARNING]
> Wenn **nicht über HTTP/2 genutzt**, leidet SSE unter einer Begrenzung der maximalen Anzahl offener Verbindungen, was besonders schmerzhaft sein kann, wenn mehrere Tabs geöffnet werden, da das Limit _pro Browser_ und auf eine sehr niedrige Zahl (6) festgelegt ist. Das Problem wurde in [Chrome](https://crbug.com/275955) und [Firefox](https://bugzil.la/906896) als "Wird nicht behoben" markiert. Dieses Limit gilt pro Browser + Domain, das heißt, Sie können 6 SSE-Verbindungen über alle Tabs zu `www.example1.com` und weitere 6 SSE-Verbindungen zu `www.example2.com` öffnen. (aus [Stack Overflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). Bei der Verwendung von HTTP/2 wird die maximale Anzahl gleichzeitiger _HTTP-Streams_ zwischen dem Server und dem Client ausgehandelt (standardmäßig 100).

## Konstruktor

- [`EventSource()`](/de/docs/Web/API/EventSource/EventSource)
  - : Erstellt eine neue `EventSource`, um das Empfangen von server-sent events von einer angegebenen URL zu handhaben, optional im Credentials-Modus.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Element, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`EventSource.readyState`](/de/docs/Web/API/EventSource/readyState) {{ReadOnlyInline}}
  - : Eine Zahl, die den Status der Verbindung darstellt. Mögliche Werte sind `CONNECTING` (`0`), `OPEN` (`1`) oder `CLOSED` (`2`).
- [`EventSource.url`](/de/docs/Web/API/EventSource/url) {{ReadOnlyInline}}
  - : Ein String, der die URL der Quelle darstellt.
- [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das `EventSource`-Objekt mit Cross-Origin ([CORS](/de/docs/Web/HTTP/Guides/CORS)) Credentials gesetzt (`true`) instanziiert wurde oder nicht (`false`, der Standardwert).

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrem übergeordneten Element, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`EventSource.close()`](/de/docs/Web/API/EventSource/close)
  - : Schließt die Verbindung, falls vorhanden, und setzt das `readyState`-Attribut auf `CLOSED`. Wenn die Verbindung bereits geschlossen ist, macht die Methode nichts.

## Ereignisse

- [`error`](/de/docs/Web/API/EventSource/error_event)
  - : Wird ausgelöst, wenn eine Verbindung zu einer Ereignisquelle nicht geöffnet werden konnte.
- [`message`](/de/docs/Web/API/EventSource/message_event)
  - : Wird ausgelöst, wenn Daten von einer Ereignisquelle empfangen werden.
- [`open`](/de/docs/Web/API/EventSource/open_event)
  - : Wird ausgelöst, wenn eine Verbindung zu einer Ereignisquelle geöffnet wurde.

Darüber hinaus kann die Ereignisquelle selbst Nachrichten mit einem Ereignisfeld senden, das führt zu maßgeschneiderten Ereignissen, die auf diesen Wert abgestimmt sind.

## Beispiele

In diesem einfachen Beispiel wird eine `EventSource` erstellt, um unbenannte Ereignisse vom Server zu empfangen; eine Seite mit dem Namen `sse.php` ist für die Generierung der Ereignisse verantwortlich.

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

Jedes empfangene Ereignis lässt den `onmessage`-Ereignishandler unseres `EventSource`-Objekts laufen. Dieser erstellt wiederum ein neues {{HTMLElement("li")}}-Element, schreibt die Nachrichtendaten hinein und fügt das neue Element dem bereits im Dokument vorhandenen Listenelement hinzu.

> [!NOTE]
> Sie finden ein vollständiges Beispiel auf GitHub — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

Um auf benannte Ereignisse zu hören, benötigen Sie einen Listener für jeden Typ von gesendetem Ereignis.

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
