---
title: WebSocket
slug: Web/API/WebSocket
l10n:
  sourceCommit: f56df7cd1613660f455108682e3d1e95fc4749e8
---

{{APIRef("WebSockets API")}} {{AvailableInWorkers}}

Das `WebSocket`-Objekt bietet die API für die Erstellung und Verwaltung einer [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung zu einem Server sowie zum Senden und Empfangen von Daten über die Verbindung.

Um einen `WebSocket` zu erstellen, verwenden Sie den [`WebSocket()`](/de/docs/Web/API/WebSocket/WebSocket)-Konstruktor.

> [!NOTE]
> Die `WebSocket`-API bietet keine Möglichkeit, [Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) anzuwenden. Daher wird, wenn Nachrichten schneller eintreffen, als die Anwendung sie verarbeiten kann, entweder der Arbeitsspeicher des Geräts beim Puffern dieser Nachrichten gefüllt, die Anwendung wird aufgrund von 100% CPU-Auslastung nicht mehr ansprechbar, oder beides tritt ein. Für eine Alternative, die Backpressure automatisch bietet, siehe {{domxref("WebSocketStream")}}.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("WebSocket.WebSocket", "WebSocket()")}}
  - : Gibt ein neu erstelltes `WebSocket`-Objekt zurück.

## Instanz-Eigenschaften

- {{domxref("WebSocket.binaryType")}}
  - : Der binäre Datentyp, der von der Verbindung verwendet wird.
- {{domxref("WebSocket.bufferedAmount")}} {{ReadOnlyInline}}
  - : Die Anzahl der Bytes der eingereihten Daten.
- {{domxref("WebSocket.extensions")}} {{ReadOnlyInline}}
  - : Die vom Server ausgewählten Erweiterungen.
- {{domxref("WebSocket.protocol")}} {{ReadOnlyInline}}
  - : Das vom Server ausgewählte Sub-Protokoll.
- {{domxref("WebSocket.readyState")}} {{ReadOnlyInline}}
  - : Der aktuelle Zustand der Verbindung.
- {{domxref("WebSocket.url")}} {{ReadOnlyInline}}
  - : Die absolute URL des WebSockets.

## Instanz-Methoden

- {{domxref("WebSocket.close()")}}
  - : Schließt die Verbindung.
- {{domxref("WebSocket.send()")}}
  - : Stellt Daten zur Übertragung in die Warteschlange.

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle.

- {{domxref("WebSocket/close_event", "close")}}
  - : Wird ausgelöst, wenn eine Verbindung mit einem `WebSocket` geschlossen wird.
    Auch über die `onclose`-Eigenschaft verfügbar
- {{domxref("WebSocket/error_event", "error")}}
  - : Wird ausgelöst, wenn eine Verbindung mit einem `WebSocket` wegen eines Fehlers geschlossen wurde, zum Beispiel, wenn einige Daten nicht gesendet werden konnten.
    Auch über die `onerror`-Eigenschaft verfügbar.
- {{domxref("WebSocket/message_event", "message")}}
  - : Wird ausgelöst, wenn Daten über einen `WebSocket` empfangen werden.
    Auch über die `onmessage`-Eigenschaft verfügbar.
- {{domxref("WebSocket/open_event", "open")}}
  - : Wird ausgelöst, wenn eine Verbindung mit einem `WebSocket` geöffnet wird.
    Auch über die `onopen`-Eigenschaft verfügbar.

## Beispiele

```js
// Erstellen Sie eine WebSocket-Verbindung.
const socket = new WebSocket("ws://localhost:8080");

// Verbindung geöffnet
socket.addEventListener("open", (event) => {
  socket.send("Hello Server!");
});

// Nachrichten abhören
socket.addEventListener("message", (event) => {
  console.log("Nachricht vom Server ", event.data);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erstellen von WebSocket-Clientanwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
