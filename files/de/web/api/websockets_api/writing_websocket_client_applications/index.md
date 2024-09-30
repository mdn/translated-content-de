---
title: Schreiben von WebSocket-Clientanwendungen
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
l10n:
  sourceCommit: 4bd2e8957a40a8f31484f9aea3725bdfe78a921a
---

{{DefaultAPISidebar("WebSockets API")}} {{AvailableInWorkers}}

WebSocket-Clientanwendungen nutzen die [WebSocket API](/de/docs/Web/API/WebSockets_API), um mit [WebSocket-Servern](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers) über das WebSocket-Protokoll zu kommunizieren.

> [!NOTE]
> Die Beispiel-Snippets in diesem Artikel stammen aus unserem WebSocket-Chat-Client/Server-Beispiel.
> [Sehen Sie sich den Code an](https://github.com/mdn/samples-server/tree/master/s/websocket-chat).

## Erstellen eines WebSocket-Objekts

Um mit dem WebSocket-Protokoll zu kommunizieren, müssen Sie ein [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt erstellen; dies versucht automatisch die Verbindung zum Server zu öffnen.

Der WebSocket-Konstruktor akzeptiert einen erforderlichen und einen optionalen Parameter:

```js
webSocket = new WebSocket(url, protocols);
```

- `url`
  - : Die URL, mit der Sie sich verbinden wollen; dies sollte die URL sein, auf die der WebSocket-Server antworten wird.
    Dies sollte das URL-Schema `wss://` verwenden, obwohl einige Software möglicherweise erlaubt, das unsichere `ws://` für eine lokale Verbindung zu nutzen.
    Relative URL-Werte und die Schemata `https://` und `http://` sind ebenfalls in den [meisten aktuellen Browserversionen](/de/docs/Web/API/WebSocket/WebSocket#browser_compatibility) zulässig.
- `protocols` {{optional_inline}}
  - : Entweder ein einzelner Protokollstring oder ein Array von Protokollstrings.
    Diese Strings werden verwendet, um Sub-Protokolle anzugeben, sodass ein einzelner Server mehrere WebSocket-Sub-Protokolle implementieren kann (zum Beispiel könnte ein Server je nach dem angegebenen `protocol` verschiedene Arten von Interaktionen handhaben).
    Falls Sie keinen Protokollstring angeben, wird ein leerer String angenommen.

Der Konstruktor löst einen `SecurityError` aus, wenn das Ziel den Zugriff nicht erlaubt.
Dies kann passieren, wenn Sie versuchen, eine unsichere Verbindung zu verwenden (die meisten [User Agents](/de/docs/Glossary/user_agent) erfordern jetzt eine sichere Verbindung für alle WebSocket-Verbindungen, es sei denn, sie befinden sich auf demselben Gerät oder möglicherweise im selben Netzwerk).

### Verbindungsfehler

Wenn ein Fehler beim Versuch, eine Verbindung herzustellen, auftritt, wird zuerst ein [`error` event](/de/docs/Web/API/WebSocket/error_event) an das [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt gesendet (wodurch alle Handler aufgerufen werden), gefolgt von einem [`close` event](/de/docs/Web/API/WebSocket/close_event), das den Grund für das Schließen der Verbindung angibt.

Der Browser kann auch eine ausführlichere Fehlermeldung sowie einen Schließungscode gemäß [RFC 6455, Abschnitt 7.4](https://datatracker.ietf.org/doc/html/rfc6455#section-7.4) über das [`CloseEvent`](/de/docs/Web/API/CloseEvent) in der Konsole ausgeben.

### Beispiele

Dieses einfache Beispiel erstellt einen neuen WebSocket und verbindet sich mit dem Server unter `wss://www.example.com/socketserver`.
Ein benutzerdefiniertes Protokoll von „protocolOne“ wird in der Anfrage für den Socket in diesem Beispiel benannt, obwohl dies weggelassen werden kann.

```js
const exampleSocket = new WebSocket(
  "wss://www.example.com/socketserver",
  "protocolOne",
);
```

Beim Zurückkehren ist [`exampleSocket.readyState`](/de/docs/Web/API/WebSocket/readyState) `CONNECTING`.
Der `readyState` wird `OPEN`, sobald die Verbindung bereit ist, Daten zu übertragen.

Wenn Sie flexibel bezüglich der unterstützten Protokolle sind, können Sie ein Array von Protokollen angeben:

```js
const exampleSocket = new WebSocket("wss://www.example.com/socketserver", [
  "protocolOne",
  "protocolTwo",
]);
```

Sobald die Verbindung hergestellt ist (das heißt, `readyState` ist `OPEN`), gibt [`exampleSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) an, welches Protokoll der Server ausgewählt hat.

Das Herstellen einer WebSocket-Verbindung basiert auf dem [HTTP Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism), daher erfolgt die Anfrage für das Protokoll-Upgrade implizit, wenn wir den Webserver als `ws://www.example.com` oder `wss://www.example.com` ansprechen.

## Senden von Daten an den Server

Sobald Sie Ihre Verbindung geöffnet haben, können Sie beginnen, Daten an den Server zu übertragen.
Dazu rufen Sie die `send()`-Methode des `WebSocket`-Objekts für jede Nachricht auf, die Sie senden möchten:

```js
exampleSocket.send("Here's some text that the server is urgently awaiting!");
```

Sie können Daten als String, [`Blob`](/de/docs/Web/API/Blob) oder {{jsxref("ArrayBuffer")}} senden.

Da das Herstellen einer Verbindung asynchron ist und fehleranfällig sein kann, gibt es keine Garantie, dass der Aufruf der `send()`-Methode unmittelbar nach der Erstellung eines WebSocket-Objekts erfolgreich sein wird.
Wir können uns zumindest sicher sein, dass der Versuch, Daten zu senden, nur dann erfolgt, wenn eine Verbindung durch das Definieren eines [`onopen`](/de/docs/Web/API/WebSocket/open_event)-Ereignishandlers aufgebaut ist:

```js
exampleSocket.onopen = (event) => {
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};
```

### Verwenden von JSON zum Übertragen von Objekten

Ein praktisches Feature ist die Verwendung von [JSON](/de/docs/Glossary/JSON), um relativ komplexe Daten an den Server zu senden.
Zum Beispiel kann ein Chat-Programm mit einem Server unter Verwendung eines Protokolls interagieren, das Pakete mit JSON-verkapselten Daten verwendet:

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

WebSockets sind eine ereignisgesteuerte API; bei eingehenden Nachrichten wird ein `message`
event an das `WebSocket`-Objekt gesendet. Um es zu verarbeiten, fügen Sie einen Ereignislistener
für das `message`-Ereignis hinzu oder verwenden Sie den [`onmessage`](/de/docs/Web/API/WebSocket/message_event)-Ereignishandler.
Um mit dem Abhören von eingehenden Daten zu beginnen, können Sie etwa Folgendes tun:

```js
exampleSocket.onmessage = (event) => {
  console.log(event.data);
};
```

### Empfangen und Interpretieren von JSON-Objekten

Betrachten wir die zuerst in [Verwenden von JSON zum Übertragen von Objekten](#verwenden_von_json_zum_übertragen_von_objekten) erwähnte Chat-Client-Anwendung. Es gibt verschiedene Arten von Datenpaketen, die der Client empfangen könnte, wie:

- Login-Handshake
- Nachrichtentext
- Benutzerlisten-Updates

Der Code, der diese eingehenden Nachrichten interpretiert, könnte so aussehen:

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

Hier verwenden wir {{jsxref("JSON.parse()")}}, um das JSON-Objekt zurück in das ursprüngliche Objekt zu konvertieren, dann prüfen wir seinen Inhalt und handeln entsprechend.

### Textdatenformat

Text, der über eine WebSocket-Verbindung empfangen wird, liegt im UTF-8-Format vor.

## Schließen der Verbindung

Wenn Sie die WebSocket-Verbindung nicht mehr benötigen, rufen Sie die `close()`-Methode des WebSocket-Objekts auf:

```js
exampleSocket.close();
```

Es kann hilfreich sein, das `bufferedAmount`-Attribut des Sockets zu überprüfen, bevor Sie versuchen, die Verbindung zu schließen, um festzustellen, ob noch Daten im Netzwerk übertragen werden müssen.
Wenn dieser Wert nicht 0 ist, sind noch ausstehende Daten vorhanden, und Sie sollten möglicherweise warten, bevor Sie die Verbindung schließen.

## Sicherheitsüberlegungen

WebSockets sollten nicht in einer gemischten Inhaltsumgebung verwendet werden; das heißt, Sie sollten keine unsichere WebSocket-Verbindung von einer Seite öffnen, die über HTTPS geladen wurde oder umgekehrt.
Die meisten Browser erlauben jetzt nur noch sichere WebSocket-Verbindungen und unterstützen ihre Verwendung in unsicheren Kontexten nicht mehr.
