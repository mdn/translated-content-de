---
title: Schreiben von WebSocket-Clientanwendungen
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("WebSockets API")}} {{AvailableInWorkers}}

WebSocket-Clientanwendungen verwenden die [WebSocket API](/de/docs/Web/API/WebSockets_API), um mit [WebSocket-Servern](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers) über das WebSocket-Protokoll zu kommunizieren.

> [!NOTE]
> Die Beispielausschnitte in diesem Artikel stammen von unserem WebSocket-Chat-Client/Server-Beispiel.
> [Sehen Sie den Code](https://github.com/mdn/samples-server/tree/master/s/websocket-chat).

## Erstellen eines WebSocket-Objekts

Um über das WebSocket-Protokoll zu kommunizieren, müssen Sie ein [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt erstellen; dies wird automatisch versuchen, die Verbindung zum Server zu öffnen.

Der WebSocket-Konstruktor akzeptiert einen erforderlichen und einen optionalen Parameter:

```js
webSocket = new WebSocket(url, protocols);
```

- `url`
  - : Die URL, mit der Sie eine Verbindung herstellen möchten; dies sollte die URL sein, auf die der WebSocket-Server antworten wird.
    Dies sollte das URL-Schema `wss://` verwenden, obwohl einige Software möglicherweise erlauben, das unsichere `ws://` für eine lokale Verbindung zu verwenden.
    Relative URL-Werte sowie `https://`- und `http://`-Schemata sind auch in [den meisten aktuellen Browserversionen](/de/docs/Web/API/WebSocket/WebSocket#browser_compatibility) erlaubt.
- `protocols` {{optional_inline}}
  - : Entweder ein einzelner Protokoll-String oder ein Array von Protokoll-Strings.
    Diese Strings werden verwendet, um Unterprotokolle anzugeben, damit ein einzelner Server mehrere WebSocket-Unterprotokolle implementieren kann (zum Beispiel könnten Sie möchten, dass ein Server verschiedene Arten von Interaktionen abhängig vom angegebenen `protocol` handhaben kann).
    Wenn Sie keinen Protokoll-String angeben, wird ein leerer String angenommen.

Der Konstruktor wird einen `SecurityError` auslösen, wenn das Ziel den Zugriff nicht erlaubt.
Dies kann passieren, wenn Sie versuchen, eine unsichere Verbindung zu verwenden (die meisten {{Glossary("user_agent", "User Agents")}} erfordern jetzt eine sichere Verbindung für alle WebSocket-Verbindungen, es sei denn, sie befinden sich auf demselben Gerät oder möglicherweise im selben Netzwerk).

### Verbindungsfehler

Wenn ein Fehler bei dem Versuch auftritt, eine Verbindung herzustellen, wird zuerst eine [`error` event](/de/docs/Web/API/WebSocket/error_event) an das [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt gesendet (wodurch alle Handler aufgerufen werden), gefolgt von einem [`close` event](/de/docs/Web/API/WebSocket/close_event), das den Grund für das Schließen der Verbindung angibt.

Der Browser kann auch eine detailliertere Fehlermeldung sowie einen Abschlusscode, wie in [RFC 6455, Abschnitt 7.4](https://datatracker.ietf.org/doc/html/rfc6455#section-7.4) definiert, über das [`CloseEvent`](/de/docs/Web/API/CloseEvent) an seine Konsole ausgeben.

### Beispiele

Dieses einfache Beispiel erstellt einen neuen WebSocket, der eine Verbindung zum Server unter `wss://www.example.com/socketserver` herstellt.
Ein benutzerdefiniertes Protokoll namens „protocolOne“ wird in der Anforderung für den Socket in diesem Beispiel angegeben, obwohl dies weggelassen werden kann.

```js
const exampleSocket = new WebSocket(
  "wss://www.example.com/socketserver",
  "protocolOne",
);
```

Bei der Rückgabe ist [`exampleSocket.readyState`](/de/docs/Web/API/WebSocket/readyState) `CONNECTING`.
Der `readyState` wird `OPEN`, sobald die Verbindung bereit ist, Daten zu übertragen.

Wenn Sie eine Verbindung öffnen möchten und bei den Protokollen flexibel sind, die Sie unterstützen, können Sie ein Array von Protokollen angeben:

```js
const exampleSocket = new WebSocket("wss://www.example.com/socketserver", [
  "protocolOne",
  "protocolTwo",
]);
```

Sobald die Verbindung hergestellt ist (d. h. `readyState` ist `OPEN`), wird [`exampleSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) Ihnen sagen, welches Protokoll der Server ausgewählt hat.

Das Herstellen einer WebSocket-Verbindung basiert auf dem [HTTP Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism), sodass die Anforderung für das Protokoll-Upgrade implizit ist, wenn wir den Webserver als `ws://www.example.com` oder `wss://www.example.com` ansprechen.

## Senden von Daten an den Server

Sobald Sie Ihre Verbindung geöffnet haben, können Sie beginnen, Daten an den Server zu übertragen.
Um dies zu tun, rufen Sie die [`send()`](/de/docs/Web/API/WebSocket/send)-Methode des `WebSocket`-Objekts für jede Nachricht auf, die Sie senden möchten:

```js
exampleSocket.send("Here's some text that the server is urgently awaiting!");
```

Sie können Daten als String, [`Blob`](/de/docs/Web/API/Blob) oder {{jsxref("ArrayBuffer")}} senden.

Da das Herstellen einer Verbindung asynchron und anfällig für Fehler ist, gibt es keine Garantie, dass das sofortige Aufrufen der `send()`-Methode nach dem Erstellen eines WebSocket-Objekts erfolgreich sein wird.
Wir können uns zumindest sicher sein, dass der Versuch, Daten zu senden, nur dann stattfindet, wenn eine Verbindung hergestellt ist, indem wir einen [`onopen`](/de/docs/Web/API/WebSocket/open_event)-Ereignishandler definieren, der die Arbeit übernimmt:

```js
exampleSocket.onopen = (event) => {
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};
```

### Verwenden von JSON zur Übertragung von Objekten

Eine nützliche Sache, die Sie tun können, ist die Verwendung von {{Glossary("JSON", "JSON")}}, um ziemlich komplexe Daten an den Server zu senden.
Ein Chatprogramm kann beispielsweise mit einem Server interagieren, indem es ein Protokoll verwendet, das mit JSON-kapsulierten Datenpaketen implementiert ist:

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

WebSockets ist eine ereignisgesteuerte API; wenn Nachrichten empfangen werden, wird ein `message`-Ereignis an das `WebSocket`-Objekt gesendet. Um es zu verarbeiten, fügen Sie einen Ereignislistener für das `message`-Ereignis hinzu oder verwenden Sie den [`onmessage`](/de/docs/Web/API/WebSocket/message_event)-Ereignishandler.
Um mit dem Hören auf eingehende Daten zu beginnen, können Sie Folgendes tun:

```js
exampleSocket.onmessage = (event) => {
  console.log(event.data);
};
```

### Empfangen und Interpretieren von JSON-Objekten

Betrachten wir zuerst die Chat-Clientanwendung, die in [Verwenden von JSON zur Übertragung von Objekten](#verwenden_von_json_zur_übertragung_von_objekten) erwähnt wurde. Es gibt verschiedene Arten von Datenpaketen, die der Client empfangen könnte, wie z.B.:

- Login-Handshake
- Nachrichtentext
- Aktualisierungen der Benutzerliste

Der Code, der diese eingehenden Nachrichten interpretiert, könnte so aussehen:

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

Hier verwenden wir {{jsxref("JSON.parse()")}}, um das JSON-Objekt zurück in das ursprüngliche Objekt zu konvertieren, und untersuchen dann dessen Inhalt und reagieren entsprechend.

### Textdatenformat

Text, der über eine WebSocket-Verbindung empfangen wird, liegt im UTF-8-Format vor.

## Schließen der Verbindung

Wenn Sie die WebSocket-Verbindung beendet haben, rufen Sie die `close()`-Methode von WebSocket auf:

```js
exampleSocket.close();
```

Es kann hilfreich sein, das Attribut [`bufferedAmount`](/de/docs/Web/API/WebSocket/bufferedAmount) der Verbindung zu überprüfen, bevor Sie versuchen, die Verbindung zu schließen, um festzustellen, ob noch Daten im Netzwerk übertragen werden sollen.
Wenn dieser Wert nicht 0 ist, sind noch ausstehende Daten vorhanden, sodass Sie möglicherweise warten möchten, bevor Sie die Verbindung schließen.

## Sicherheitsüberlegungen

WebSockets sollten nicht in einer gemischten Inhaltsumgebung verwendet werden; das heißt, Sie sollten keine unsichere WebSocket-Verbindung von einer Seite öffnen, die über HTTPS geladen wurde, oder umgekehrt.
Die meisten Browser erlauben jetzt nur noch sichere WebSocket-Verbindungen und unterstützen deren Verwendung in unsicheren Kontexten nicht mehr.
