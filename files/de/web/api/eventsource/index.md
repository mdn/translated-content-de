---
title: EventSource
slug: Web/API/EventSource
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Server Sent Events")}}

Das **`EventSource`**-Interface ist das Interface von Webinhalten für [Server-sent events](/de/docs/Web/API/Server-sent_events).

Eine `EventSource`-Instanz öffnet eine persistente Verbindung zu einem [HTTP](/de/docs/Web/HTTP)-Server, der [Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events) im Format `text/event-stream` sendet. Die Verbindung bleibt geöffnet, bis sie durch den Aufruf von {{domxref("EventSource.close()")}} geschlossen wird.

{{InheritanceDiagram}}

Sobald die Verbindung geöffnet ist, werden eingehende Nachrichten vom Server in Form von Ereignissen an Ihren Code übermittelt. Wenn im eingehenden Nachrichtenfeld ein Ereignis vorhanden ist, wird das ausgelöste Ereignis durch den Wert des Ereignisfeldes bestimmt. Wenn kein Ereignisfeld vorhanden ist, wird ein allgemeines {{domxref("EventSource/message_event", "message")}}-Ereignis ausgelöst.

Im Gegensatz zu [WebSockets](/de/docs/Web/API/WebSockets_API) sind Server-sent events unidirektional; das heißt, Datenmeldungen werden in eine Richtung vom Server zum Client (z.B. einem Webbrowser des Benutzers) geliefert. Das macht sie zu einer ausgezeichneten Wahl, wenn es nicht notwendig ist, Daten vom Client zum Server in Form von Nachrichten zu senden. Zum Beispiel ist `EventSource` ein nützlicher Ansatz für die Handhabung von Dingen wie Social-Media-Statusaktualisierungen, Nachrichtenfeeds oder zur Bereitstellung von Daten in einem [clientseitigen Speichersystem](/de/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) wie [IndexedDB](/de/docs/Web/API/IndexedDB_API) oder [Web Storage](/de/docs/Web/API/Web_Storage_API).

> [!WARNING]
> Wenn **nicht über HTTP/2 verwendet**, leiden SSEs unter einer Beschränkung der maximalen Anzahl an offenen Verbindungen, was besonders schmerzhaft sein kann, wenn verschiedene Tabs geöffnet werden, da das Limit _pro Browser_ gilt und auf eine sehr niedrige Zahl (6) gesetzt ist. Das Problem wurde in [Chrome](https://crbug.com/275955) und [Firefox](https://bugzil.la/906896) als "Wird nicht behoben" markiert. Dieses Limit gilt pro Browser + Domain, was bedeutet, dass Sie 6 SSE-Verbindungen über alle Tabs zu `www.example1.com` und weitere 6 SSE-Verbindungen zu `www.example2.com` öffnen können. (aus [Stackoverflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). Bei Verwendung von HTTP/2 wird die maximale Anzahl gleichzeitiger _HTTP-Streams_ zwischen dem Server und dem Client verhandelt (standardmäßig auf 100 gesetzt).

## Konstruktor

- {{domxref("EventSource.EventSource", "EventSource()")}}
  - : Erstellt ein neues `EventSource`, um servergesendete Ereignisse von einer angegebenen URL zu empfangen, optional im Anmeldedatenmodus.

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, {{domxref("EventTarget")}}._

- {{domxref("EventSource.readyState")}} {{ReadOnlyInline}}
  - : Eine Zahl, die den Zustand der Verbindung darstellt. Mögliche Werte sind `CONNECTING` (`0`), `OPEN` (`1`) oder `CLOSED` (`2`).
- {{domxref("EventSource.url")}} {{ReadOnlyInline}}
  - : Ein String, der die URL der Quelle darstellt.
- {{domxref("EventSource.withCredentials")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob das `EventSource`-Objekt mit Cross-Origin ([CORS](/de/docs/Web/HTTP/CORS))-Anmeldedaten (`true`) oder ohne (`false`, Standard) instanziiert wurde.

## Instanzmethoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, {{domxref("EventTarget")}}._

- {{domxref("EventSource.close()")}}
  - : Schließt die Verbindung, falls vorhanden, und setzt das `readyState`-Attribut auf `CLOSED`. Wenn die Verbindung bereits geschlossen ist, führt die Methode nichts aus.

## Ereignisse

- {{domxref("EventSource/error_event", "error")}}
  - : Wird ausgelöst, wenn eine Verbindung zu einer Ereignisquelle nicht geöffnet werden konnte.
- {{domxref("EventSource/message_event", "message")}}
  - : Wird ausgelöst, wenn Daten von einer Ereignisquelle empfangen werden.
- {{domxref("EventSource/open_event", "open")}}
  - : Wird ausgelöst, wenn eine Verbindung zu einer Ereignisquelle geöffnet wurde.

Zusätzlich kann die Ereignisquelle selbst Nachrichten mit einem Ereignisfeld senden, was adhoc-Ereignisse erzeugt, die an diesen Wert gebunden sind.

## Beispiele

In diesem einfachen Beispiel wird ein `EventSource` erstellt, um unbenannte Ereignisse vom Server zu empfangen; eine Seite mit dem Namen `sse.php` ist dafür verantwortlich, die Ereignisse zu generieren.

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

Jedes empfangene Ereignis bewirkt, dass der `onmessage`-Ereignishandler unseres `EventSource`-Objekts ausgeführt wird. Es erstellt seinerseits ein neues {{HTMLElement("li")}}-Element, schreibt die Daten der Nachricht hinein und fügt das neue Element dem bereits im Dokument vorhandenen Listenelement hinzu.

> [!NOTE]
> Sie können ein vollständiges Beispiel auf GitHub finden — siehe [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

Um auf benannte Ereignisse zu hören, benötigen Sie einen Listener für jeden gesendeten Ereignistyp.

```js
const sse = new EventSource("/api/v1/sse");

/*
 * Dies wird nur für Ereignisse
 * wie das folgende lauschen:
 *
 * event: notice
 * data: useful data
 * id: someid
 */
sse.addEventListener("notice", (e) => {
  console.log(e.data);
});

/*
 * Ebenso wird dies auf Ereignisse
 * mit dem Feld `event: update` lauschen
 */
sse.addEventListener("update", (e) => {
  console.log(e.data);
});

/*
 * Das Ereignis "message" ist ein Sonderfall, da es
 * sowohl Ereignisse ohne ein Ereignisfeld
 * als auch Ereignisse mit dem spezifischen Typ
 * `event: message` erfasst. Es wird für keinen
 * anderen Ereignistyp ausgelöst.
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
- [Using server-sent events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events)
