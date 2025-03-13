---
title: Schreiben von WebSocket-Client-Anwendungen
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("WebSockets API")}} {{AvailableInWorkers}}

WebSocket-Client-Anwendungen verwenden die [WebSocket API](/de/docs/Web/API/WebSockets_API), um mit [WebSocket-Servern](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers) über das WebSocket-Protokoll zu kommunizieren.

> [!NOTE]
> Die Beispielausschnitte in diesem Artikel stammen von unserem WebSocket-Chat-Client/Server-Beispiel.
> [Sehen Sie sich den Code an](https://github.com/mdn/samples-server/tree/master/s/websocket-chat).

## Erstellen eines WebSocket-Objekts

Um über das WebSocket-Protokoll zu kommunizieren, müssen Sie ein [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt erstellen; dies wird automatisch versuchen, die Verbindung zum Server zu öffnen.

Der WebSocket-Konstruktor akzeptiert einen erforderlichen und einen optionalen Parameter:

```js
webSocket = new WebSocket(url, protocols);
```

- `url`
  - : Die URL, zu der die Verbindung hergestellt werden soll; dies sollte die URL sein, auf die der WebSocket-Server antworten wird.
    Dies sollte das URL-Schema `wss://` verwenden, obwohl einige Software möglicherweise erlaubt, die unsichere `ws://` für eine lokale Verbindung zu verwenden.
    Relative URL-Werte und `https://` und `http://` Schemata sind ebenfalls in den [neuesten Browserversionen](/de/docs/Web/API/WebSocket/WebSocket#browser_compatibility) erlaubt.
- `protocols` {{optional_inline}}
  - : Entweder ein einzelner Protokoll-String oder ein Array von Protokoll-Strings.
    Diese Strings werden verwendet, um Subprotokolle anzugeben, sodass ein einzelner Server mehrere WebSocket-Subprotokolle implementieren kann (zum Beispiel könnten Sie möchten, dass ein Server in der Lage ist, verschiedene Arten von Interaktionen basierend auf dem angegebenen `protocol` zu handhaben).
    Wenn Sie keinen Protokoll-String angeben, wird ein leerer String angenommen.

Der Konstruktor löst einen `SecurityError` aus, wenn das Ziel keinen Zugriff erlaubt.
Dies kann passieren, wenn Sie versuchen, eine unsichere Verbindung zu verwenden (die meisten {{Glossary("user_agent", "User Agents")}} erfordern jetzt eine sichere Verbindung für alle WebSocket-Verbindungen, es sei denn, sie befinden sich auf demselben Gerät oder möglicherweise im selben Netzwerk).

### Verbindungsfehler

Wenn ein Fehler beim Versuch auftritt, die Verbindung herzustellen, wird zuerst ein [`error` Event](/de/docs/Web/API/WebSocket/error_event) an das [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt gesendet (wodurch alle Handler aufgerufen werden), gefolgt von einem [`close` Event](/de/docs/Web/API/WebSocket/close_event), das den Grund für das Schließen der Verbindung angibt.

Der Browser kann auch eine detailliertere Fehlermeldung sowie einen Schließcode gemäß [RFC 6455, Abschnitt 7.4](https://datatracker.ietf.org/doc/html/rfc6455#section-7.4) über das [`CloseEvent`](/de/docs/Web/API/CloseEvent) ausgeben.

### Beispiele

Dieses einfache Beispiel erstellt einen neuen WebSocket und verbindet sich mit dem Server unter `wss://www.example.com/socketserver`.
Ein benutzerdefiniertes Protokoll mit dem Namen "protocolOne" wird in der Anfrage für den Socket in diesem Beispiel angegeben, obwohl dies weggelassen werden kann.

```js
const exampleSocket = new WebSocket(
  "wss://www.example.com/socketserver",
  "protocolOne",
);
```

Beim Zurückkehren ist [`exampleSocket.readyState`](/de/docs/Web/API/WebSocket/readyState) `CONNECTING`.
Der `readyState` wird `OPEN`, sobald die Verbindung bereit ist, Daten zu übertragen.

Wenn Sie eine Verbindung öffnen möchten und flexibel bezüglich der unterstützten Protokolle sind, können Sie ein Array von Protokollen angeben:

```js
const exampleSocket = new WebSocket("wss://www.example.com/socketserver", [
  "protocolOne",
  "protocolTwo",
]);
```

Sobald die Verbindung hergestellt ist (also `readyState` `OPEN` ist), wird Ihnen [`exampleSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) mitteilen, welches Protokoll der Server ausgewählt hat.

Die Herstellung einer WebSocket-Verbindung basiert auf dem [HTTP Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism), sodass die Anforderung für das Protokoll-Upgrade implizit ist, wenn wir den Webserver als `ws://www.example.com` oder `wss://www.example.com` ansprechen.

## Senden von Daten an den Server

Sobald Sie Ihre Verbindung geöffnet haben, können Sie beginnen, Daten an den Server zu übertragen.
Dazu rufen Sie bei jeder Nachricht, die Sie senden möchten, die Methode [`send()`](/de/docs/Web/API/WebSocket/send) des `WebSocket`-Objekts auf:

```js
exampleSocket.send("Here's some text that the server is urgently awaiting!");
```

Sie können Daten als String, [`Blob`](/de/docs/Web/API/Blob) oder {{jsxref("ArrayBuffer")}} senden.

Da das Herstellen einer Verbindung asynchron ist und zu Fehlern führen kann, gibt es keine Garantie dafür, dass der Aufruf der `send()`-Methode unmittelbar nach dem Erstellen eines WebSocket-Objekts erfolgreich ist.
Wir können zumindest sicher sein, dass das Senden von Daten nur stattfindet, sobald eine Verbindung hergestellt ist, indem wir einen [`onopen`](/de/docs/Web/API/WebSocket/open_event)-Event-Handler definieren, um die Arbeit zu erledigen:

```js
exampleSocket.onopen = (event) => {
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};
```

### Verwendung von JSON zum Übertragen von Objekten

Eine praktische Sache, die Sie tun können, ist die Verwendung von {{Glossary("JSON", "JSON")}}, um recht komplexe Daten an den Server zu senden.
Ein Chat-Programm könnte zum Beispiel mit einem Server über ein Protokoll interagieren, das mit Paketen von in JSON gekapselten Daten implementiert ist:

```js
// Send text to all users through the server
function sendText() {
  // Construct a msg object containing the data the server needs to process the message from the chat client.
  const msg = {
    type: "message",
    text: document.getElementById("text").value,
    id: clientID,
    date: Date.now(),
  };

  // Send the msg object as a JSON-formatted string.
  exampleSocket.send(JSON.stringify(msg));

  // Blank the text input element, ready to receive the next line of text from the user.
  document.getElementById("text").value = "";
}
```

## Empfangen von Nachrichten vom Server

WebSockets ist eine ereignisgesteuerte API; wenn Nachrichten empfangen werden, wird ein `message`-Ereignis an das `WebSocket`-Objekt gesendet. Um es zu verarbeiten, fügen Sie einen Event-Listener für das `message`-Event hinzu oder verwenden Sie den [`onmessage`](/de/docs/Web/API/WebSocket/message_event)-Event-Handler.
Um mit dem Abhören von eingehenden Daten zu beginnen, können Sie etwas wie Folgendes tun:

```js
exampleSocket.onmessage = (event) => {
  console.log(event.data);
};
```

### Empfangen und Interpretieren von JSON-Objekten

Betrachten wir die Chat-Client-Anwendung, die in [Verwendung von JSON zum Übertragen von Objekten](#verwendung_von_json_zum_übertragen_von_objekten) zuvor erwähnt wurde. Es gibt verschiedene Arten von Datenpaketen, die der Client empfangen könnte, wie etwa:

- Login-Handshake
- Nachrichtentext
- Benutzerlisten-Updates

Der Code, der diese eingehenden Nachrichten interpretiert, könnte wie folgt aussehen:

```js
exampleSocket.onmessage = (event) => {
  const f = document.getElementById("chat-box").contentDocument;
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
    case "reject-username":
      text = `Your username has been set to <em>${msg.name}</em> because the name you chose is in use.<br>`;
      break;
    case "user-list":
      document.getElementById("user-list-box").innerText = msg.users.join("\n");
      break;
  }

  if (text.length) {
    f.write(text);
    document.getElementById("chat-box").contentWindow.scrollByPages(1);
  }
};
```

Hier verwenden wir {{jsxref("JSON.parse()")}}, um das JSON-Objekt zurück in das ursprüngliche Objekt zu konvertieren, und prüfen und handeln dann auf seinen Inhalt.

### Textdatenformat

Der über eine WebSocket-Verbindung empfangene Text ist im UTF-8-Format.

## Schließen der Verbindung

Wenn Sie die WebSocket-Verbindung nicht mehr benötigen, rufen Sie die WebSocket-Methode [`close()`](/de/docs/Web/API/WebSocket/close) auf:

```js
exampleSocket.close();
```

Es kann hilfreich sein, das Attribut [`bufferedAmount`](/de/docs/Web/API/WebSocket/bufferedAmount) des Sockets zu überprüfen, bevor Sie versuchen, die Verbindung zu schließen, um festzustellen, ob noch Daten im Netzwerk übertragen werden müssen.
Wenn dieser Wert nicht 0 ist, sind noch ausstehende Daten vorhanden, sodass Sie möglicherweise warten möchten, bevor Sie die Verbindung schließen.

## Sicherheitsüberlegungen

WebSockets sollten nicht in einer Umgebung mit gemischten Inhalten verwendet werden; das heißt, Sie sollten keine nicht-sichere WebSocket-Verbindung von einer Seite aus öffnen, die über HTTPS geladen wurde, oder umgekehrt.
Die meisten Browser erlauben jetzt nur noch sichere WebSocket-Verbindungen und unterstützen diese nicht mehr in unsicheren Kontexten.
