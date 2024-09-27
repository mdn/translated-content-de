---
title: WebSocket
slug: Web/API/WebSocket
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Das `WebSocket`-Objekt bietet die API zum Erstellen und Verwalten einer [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung zu einem Server sowie zum Senden und Empfangen von Daten über die Verbindung.

Zum Konstruieren eines `WebSocket` verwenden Sie den [`WebSocket()`](/de/docs/Web/API/WebSocket/WebSocket) Konstruktor.

> [!NOTE]
> Die `WebSocket`-API hat keine Möglichkeit, [Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) anzuwenden. Wenn Nachrichten schneller eintreffen, als die Anwendung sie verarbeiten kann, wird die Anwendung entweder den Speicher des Geräts durch das Puffern dieser Nachrichten füllen, oder aufgrund von 100 % CPU-Auslastung nicht mehr reagieren, oder beides. Für eine Alternative, die automatisch Backpressure bietet, siehe [`WebSocketStream`](/de/docs/Web/API/WebSocketStream).

{{InheritanceDiagram}}

## Konstruktor

- [`WebSocket()`](/de/docs/Web/API/WebSocket/WebSocket)
  - : Gibt ein neu erstelltes `WebSocket`-Objekt zurück.

## Instanzeigenschaften

- [`WebSocket.binaryType`](/de/docs/Web/API/WebSocket/binaryType)
  - : Der binäre Datentyp, der von der Verbindung verwendet wird.
- [`WebSocket.bufferedAmount`](/de/docs/Web/API/WebSocket/bufferedAmount) {{ReadOnlyInline}}
  - : Die Anzahl der Bytes von eingereihten Daten.
- [`WebSocket.extensions`](/de/docs/Web/API/WebSocket/extensions) {{ReadOnlyInline}}
  - : Die vom Server ausgewählten Erweiterungen.
- [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) {{ReadOnlyInline}}
  - : Das vom Server ausgewählte Subprotokoll.
- [`WebSocket.readyState`](/de/docs/Web/API/WebSocket/readyState) {{ReadOnlyInline}}
  - : Der aktuelle Status der Verbindung.
- [`WebSocket.url`](/de/docs/Web/API/WebSocket/url) {{ReadOnlyInline}}
  - : Die absolute URL des WebSockets.

## Instanzmethoden

- [`WebSocket.close()`](/de/docs/Web/API/WebSocket/close)
  - : Schließt die Verbindung.
- [`WebSocket.send()`](/de/docs/Web/API/WebSocket/send)
  - : Stellt Daten zur Übertragung in die Warteschlange.

## Ereignisse

Hören Sie auf diese Ereignisse mit `addEventListener()` oder indem Sie einem Ereignislistener die `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`close`](/de/docs/Web/API/WebSocket/close_event)
  - : Wird ausgelöst, wenn eine Verbindung zu einem `WebSocket` geschlossen wird.
    Auch über die `onclose`-Eigenschaft verfügbar
- [`error`](/de/docs/Web/API/WebSocket/error_event)
  - : Wird ausgelöst, wenn eine Verbindung zu einem `WebSocket` aufgrund eines Fehlers geschlossen wurde, z. B. wenn einige Daten nicht gesendet werden konnten.
    Auch über die `onerror`-Eigenschaft verfügbar.
- [`message`](/de/docs/Web/API/WebSocket/message_event)
  - : Wird ausgelöst, wenn Daten über ein `WebSocket` empfangen werden.
    Auch über die `onmessage`-Eigenschaft verfügbar.
- [`open`](/de/docs/Web/API/WebSocket/open_event)
  - : Wird ausgelöst, wenn eine Verbindung zu einem `WebSocket` geöffnet wird.
    Auch über die `onopen`-Eigenschaft verfügbar.

## Beispiele

```js
// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener("open", (event) => {
  socket.send("Hello Server!");
});

// Listen for messages
socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Anwendungen für WebSocket-Clients schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
