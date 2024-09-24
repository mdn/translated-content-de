---
title: Schreiben von WebSocket-Clientanwendungen
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
l10n:
  sourceCommit: 4bd2e8957a40a8f31484f9aea3725bdfe78a921a
---

{{DefaultAPISidebar("WebSockets API")}} {{AvailableInWorkers}}

WebSocket-Clientanwendungen verwenden die [WebSocket-API](/de/docs/Web/API/WebSockets_API), um mit [WebSocket-Servern](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers) über das WebSocket-Protokoll zu kommunizieren.

> [!NOTE]
> Die Beispielausschnitte in diesem Artikel stammen aus unserem WebSocket-Chat-Client/Server-Beispiel.
> [Sehen Sie sich den Code an](https://github.com/mdn/samples-server/tree/master/s/websocket-chat).

## Erstellen eines WebSocket-Objekts

Um mit dem WebSocket-Protokoll zu kommunizieren, müssen Sie ein {{domxref("WebSocket")}}-Objekt erstellen; dies wird automatisch versuchen, die Verbindung zum Server zu öffnen.

Der WebSocket-Konstruktor akzeptiert einen erforderlichen und einen optionalen Parameter:

```js
webSocket = new WebSocket(url, protocols);
```

- `url`
  - : Die URL, mit der Sie sich verbinden möchten; dies sollte die URL sein, auf die der WebSocket-Server antworten wird.
    Sie sollten das URL-Schema `wss://` verwenden, obwohl einige Software möglicherweise erlaubt, die unsichere `ws://` für eine lokale Verbindung zu verwenden.
    Relative URL-Werte und die Schemas `https://` und `http://` sind ebenfalls in [den meisten aktuellen Browser-Versionen](/de/docs/Web/API/WebSocket/WebSocket#browser_compatibility) erlaubt.
- `protocols` {{optional_inline}}
  - : Entweder ein einzelner Protokollstring oder ein Array von Protokollstrings.
    Diese Strings werden verwendet, um Sub-Protokolle anzugeben, so dass ein einzelner Server mehrere WebSocket-Sub-Protokolle implementieren kann (zum Beispiel könnten Sie möchten, dass ein Server verschiedene Interaktionstypen je nach angegebenem`protocol` bearbeiten kann).
    Wenn Sie keinen Protokollstring angeben, wird ein leerer String angenommen.

Der Konstruktor wirft einen `SecurityError`, wenn der Zielzugriff nicht erlaubt ist.
Dies kann passieren, wenn Sie versuchen, eine unsichere Verbindung zu verwenden (die meisten {{Glossary("user agent", "user agents")}} erfordern jetzt eine sichere Verbindung für alle WebSocket-Verbindungen, es sei denn, sie befinden sich auf demselben Gerät oder möglicherweise im gleichen Netzwerk).

### Verbindungsfehler

Wenn beim Versuch, eine Verbindung herzustellen, ein Fehler auftritt, wird zuerst ein [`error`-Ereignis](/de/docs/Web/API/WebSocket/error_event) an das {{domxref("WebSocket")}} Objekt gesendet (dabei werden alle Handler aufgerufen), gefolgt von einem [`close`-Ereignis](/de/docs/Web/API/WebSocket/close_event), das den Grund für das Schließen der Verbindung angibt.

Der Browser kann auch eine ausführlichere Fehlermeldung sowie einen Schließcode, wie in [RFC 6455, Abschnitt 7.4](https://datatracker.ietf.org/doc/html/rfc6455#section-7.4) definiert, über das {{domxref("CloseEvent")}} an die Konsole ausgeben.

### Beispiele

Dieses einfache Beispiel erstellt einen neuen WebSocket, der sich mit dem Server unter `wss://www.example.com/socketserver` verbindet.
Ein benutzerdefiniertes Protokoll namens "protocolOne" wird in der Anfrage für den Socket in diesem Beispiel genannt, obwohl dies weggelassen werden kann.

```js
const exampleSocket = new WebSocket(
  "wss://www.example.com/socketserver",
  "protocolOne",
);
```

Bei der Rückgabe ist {{domxref("WebSocket.readyState", "exampleSocket.readyState")}} `CONNECTING`.
Der `readyState` wird `OPEN`, sobald die Verbindung bereit ist, Daten zu übertragen.

Wenn Sie eine Verbindung öffnen möchten und bei den unterstützten Protokollen flexibel sind, können Sie ein Array von Protokollen angeben:

```js
const exampleSocket = new WebSocket("wss://www.example.com/socketserver", [
  "protocolOne",
  "protocolTwo",
]);
```

Sobald die Verbindung hergestellt ist (das heißt, `readyState` ist `OPEN`), wird Ihnen {{domxref("WebSocket.protocol", "exampleSocket.protocol")}} mitteilen, welches Protokoll der Server ausgewählt hat.

Die Einrichtung eines WebSockets basiert auf dem [HTTP-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism), sodass die Anfrage für das Protokoll-Upgrade implizit ist, wenn wir den Webserver als `ws://www.example.com` oder `wss://www.example.com` adressieren.

## Senden von Daten an den Server

Sobald Sie Ihre Verbindung geöffnet haben, können Sie damit beginnen, Daten an den Server zu übertragen.
Um dies zu tun, rufen Sie die {{domxref("WebSocket.send", "send()")}}-Methode des `WebSocket`-Objekts für jede Nachricht, die Sie senden möchten, auf:

```js
exampleSocket.send("Here's some text that the server is urgently awaiting!");
```

Sie können Daten als String, {{ domxref("Blob") }} oder {{jsxref("ArrayBuffer")}} senden.

Da das Herstellen einer Verbindung asynchron ist und zum Scheitern neigen kann, gibt es keine Garantie, dass ein direkter Aufruf der `send()`-Methode nach Erstellung eines WebSocket-Objekts erfolgreich ist.
Wir können uns zumindest sicher sein, dass der Versuch, Daten zu senden, nur erfolgt, wenn eine Verbindung hergestellt wurde, indem wir einen {{domxref("WebSocket/open_event", "onopen")}}-Ereignishandler definieren, um die Arbeit zu erledigen:

```js
exampleSocket.onopen = (event) => {
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};
```

### Verwendung von JSON zum Übertragen von Objekten

Eine nützliche Sache, die Sie tun können, ist die Verwendung von {{glossary("JSON")}}, um einigermaßen komplexe Daten an den Server zu senden.
Zum Beispiel kann ein Chat-Programm mit einem Server über ein Protokoll interagieren, das mit JSON-verkapselten Datenpaketen implementiert wird:

```js
// Senden Sie Text an alle Benutzer über den Server
function sendText() {
  // Konstruiere ein msg-Objekt, das die Daten enthält, die der Server benötigt, um die Nachricht vom Chat-Client zu verarbeiten.
  const msg = {
    type: "message",
    text: document.getElementById("text").value,
    id: clientID,
    date: Date.now(),
  };

  // Senden Sie das msg-Objekt als JSON-formatierten String.
  exampleSocket.send(JSON.stringify(msg));

  // Leeren Sie das Text-Eingabeelement, um die nächste Textzeile des Benutzers zu empfangen.
  document.getElementById("text").value = "";
}
```

## Empfangen von Nachrichten vom Server

WebSockets ist eine ereignisgesteuerte API; wenn Nachrichten empfangen werden, wird ein `message`-Ereignis an das `WebSocket`-Objekt gesendet. Um es zu handhaben, fügen Sie einen Ereignis-Listener für das `message`-Ereignis hinzu oder verwenden Sie den {{domxref("WebSocket/message_event", "onmessage")}}-Ereignishandler.
Um mit dem Lauschen von eingehenden Daten zu beginnen, können Sie Folgendes tun:

```js
exampleSocket.onmessage = (event) => {
  console.log(event.data);
};
```

### Empfangen und Interpretieren von JSON-Objekten

Betrachten wir zuerst die in [Verwendung von JSON zum Übertragen von Objekten](#verwendung_von_json_zum_übertragen_von_objekten) erwähnte Chat-Client-Anwendung. Es gibt verschiedene Arten von Datenpaketen, die der Client empfangen könnte, wie:

- Login-Handshake
- Nachrichtentext
- Benutzerlisten-Updates

Der Code, der diese eingehenden Nachrichten interpretiert, könnte folgendermaßen aussehen:

```js
exampleSocket.onmessage = (event) => {
  const f = document.getElementById("chatbox").contentDocument;
  let text = "";
  const msg = JSON.parse(event.data);
  const time = new Date(msg.date);
  const timeStr = time.toLocaleTimeString();

  switch (msg.type) {
    case "id":
      clientID = msg.id;
      setUsername();
      break;
    case "username":
      text = `User <em>${msg.name}</em> signed in at ${timeStr}<br>`;
      break;
    case "message":
      text = `(${timeStr}) ${msg.name} : ${msg.text} <br>`;
      break;
    case "rejectusername":
      text = `Your username has been set to <em>${msg.name}</em> because the name you chose is in use.<br>`;
      break;
    case "userlist":
      document.getElementById("userlistbox").innerText = msg.users.join("\n");
      break;
  }

  if (text.length) {
    f.write(text);
    document.getElementById("chatbox").contentWindow.scrollByPages(1);
  }
};
```

Hier verwenden wir {{jsxref("JSON.parse()")}}, um das JSON-Objekt zurück in das ursprüngliche Objekt zu konvertieren, und prüfen dann und handeln basierend auf dessen Inhalt.

### Textdatenformat

Über eine WebSocket-Verbindung empfangener Text ist im UTF-8-Format.

## Die Verbindung schließen

Wenn Sie die WebSocket-Verbindung nicht mehr benötigen, rufen Sie die WebSocket-Methode {{domxref("WebSocket.close", "close()")}} auf:

```js
exampleSocket.close();
```

Es kann hilfreich sein, das {{domxref("WebSocket.bufferedAmount", "bufferedAmount")}}-Attribut des Sockets zu untersuchen, bevor Sie versuchen, die Verbindung zu schließen, um festzustellen, ob noch Daten im Netzwerk übertragen werden müssen.
Wenn dieser Wert nicht 0 ist, sind noch ausstehende Daten vorhanden, daher möchten Sie möglicherweise warten, bevor Sie die Verbindung schließen.

## Sicherheitsüberlegungen

WebSockets sollten nicht in einer Umgebung mit gemischtem Inhalt verwendet werden; das heißt, Sie sollten keine nicht-gesicherte WebSocket-Verbindung von einer Seite, die über HTTPS geladen wurde, oder umgekehrt öffnen.
Die meisten Browser erlauben jetzt nur noch sichere WebSocket-Verbindungen und unterstützen deren Verwendung in unsicheren Kontexten nicht mehr.
