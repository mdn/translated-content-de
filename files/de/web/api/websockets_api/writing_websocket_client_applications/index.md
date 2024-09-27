---
title: Schreiben von WebSocket-Client-Anwendungen
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
l10n:
  sourceCommit: 4bd2e8957a40a8f31484f9aea3725bdfe78a921a
---

{{DefaultAPISidebar("WebSockets API")}} {{AvailableInWorkers}}

WebSocket-Client-Anwendungen verwenden die [WebSocket API](/de/docs/Web/API/WebSockets_API), um mit [WebSocket-Servern](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers) über das WebSocket-Protokoll zu kommunizieren.

> [!NOTE]
> Die Beispielausschnitte in diesem Artikel stammen aus unserem WebSocket-Chat-Client/Server-Beispiel.
> [Sehen Sie den Code an](https://github.com/mdn/samples-server/tree/master/s/websocket-chat).

## Erstellen eines WebSocket-Objekts

Um mittels des WebSocket-Protokolls zu kommunizieren, müssen Sie ein [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt erstellen; dies wird automatisch versuchen, die Verbindung zum Server zu öffnen.

Der WebSocket-Konstruktor akzeptiert einen erforderlichen und einen optionalen Parameter:

```js
webSocket = new WebSocket(url, protocols);
```

- `url`
  - : Die URL, zu der die Verbindung hergestellt werden soll; dies sollte die URL sein, auf die der WebSocket-Server reagieren wird.
    Diese sollte das URL-Schema `wss://` verwenden, obwohl manche Software es erlauben könnte, das unsichere `ws://` für eine lokale Verbindung zu verwenden.
    Relative URL-Werte sowie die Schemen `https://` und `http://` sind auch in den [meisten aktuellen Browserversionen](/de/docs/Web/API/WebSocket/WebSocket#browser_compatibility) erlaubt.
- `protocols` {{optional_inline}}
  - : Entweder ein einzelner Protokoll-String oder ein Array von Protokoll-Strings.
    Diese Strings werden verwendet, um Sub-Protokolle anzugeben, sodass ein einzelner Server mehrere WebSocket-Sub-Protokolle implementieren kann (zum Beispiel möchten Sie möglicherweise, dass ein Server in der Lage ist, verschiedene Arten von Interaktionen je nach angegebenem `protocol` zu handhaben).
    Wenn Sie keinen Protokoll-String angeben, wird ein leerer String angenommen.

Der Konstruktor wirft einen `SecurityError`, wenn das Ziel keinen Zugriff zulässt.
Dies kann passieren, wenn Sie versuchen, eine unsichere Verbindung zu verwenden (die meisten [User Agents](/de/docs/Glossary/user_agent) erfordern inzwischen eine sichere Verbindung für alle WebSocket-Verbindungen, es sei denn, sie befinden sich auf demselben Gerät oder möglicherweise im selben Netzwerk).

### Verbindungsfehler

Wenn ein Fehler beim Versuch der Verbindung auftritt, wird zunächst ein [`error` event](/de/docs/Web/API/WebSocket/error_event) an das [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt gesendet (wodurch beliebige Handler aufgerufen werden), gefolgt von einem [`close` event](/de/docs/Web/API/WebSocket/close_event), das den Grund für das Schließen der Verbindung angibt.

Der Browser kann außerdem in seiner Konsole eine aussagekräftigere Fehlermeldung sowie einen Schließcode ausgeben, wie in [RFC 6455, Abschnitt 7.4](https://datatracker.ietf.org/doc/html/rfc6455#section-7.4) durch das [`CloseEvent`](/de/docs/Web/API/CloseEvent) definiert.

### Beispiele

Dieses einfache Beispiel erstellt einen neuen WebSocket, der sich mit dem Server unter `wss://www.example.com/socketserver` verbindet.
Ein benutzerdefiniertes Protokoll namens „protocolOne“ wird in der Anfrage für den Socket in diesem Beispiel angegeben, obwohl dies weggelassen werden kann.

```js
const exampleSocket = new WebSocket(
  "wss://www.example.com/socketserver",
  "protocolOne",
);
```

Bei der Rückgabe ist [`exampleSocket.readyState`](/de/docs/Web/API/WebSocket/readyState) `CONNECTING`.
Der `readyState` wird zu `OPEN`, sobald die Verbindung bereit ist, Daten zu übertragen.

Wenn Sie eine Verbindung öffnen möchten und flexibel bezüglich der von Ihnen unterstützten Protokolle sind, können Sie ein Array von Protokollen angeben:

```js
const exampleSocket = new WebSocket("wss://www.example.com/socketserver", [
  "protocolOne",
  "protocolTwo",
]);
```

Sobald die Verbindung hergestellt ist (d.h. `readyState` ist `OPEN`), wird Ihnen [`exampleSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) mitteilen, welches Protokoll der Server ausgewählt hat.

Die Herstellung einer WebSocket-Verbindung beruht auf dem [HTTP-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism), sodass die Anfrage für das Protokoll-Upgrade implizit ist, wenn wir den Web-Server als `ws://www.example.com` oder `wss://www.example.com` ansprechen.

## Senden von Daten an den Server

Sobald Sie Ihre Verbindung geöffnet haben, können Sie mit der Übertragung von Daten an den Server beginnen.
Um dies zu tun, rufen Sie die Methode [`send()`](/de/docs/Web/API/WebSocket/send) des `WebSocket`-Objekts für jede Nachricht auf, die Sie senden möchten:

```js
exampleSocket.send("Here's some text that the server is urgently awaiting!");
```

Sie können Daten als Zeichenkette, [`Blob`](/de/docs/Web/API/Blob) oder {{jsxref("ArrayBuffer")}} senden.

Da das Herstellen einer Verbindung asynchron und anfällig für Fehler ist, gibt es keine Garantie dafür, dass das sofortige Aufrufen der `send()`-Methode nach dem Erstellen eines WebSocket-Objekts erfolgreich sein wird.
Wir können zumindest sicherstellen, dass der Versuch, Daten zu senden, nur dann stattfindet, wenn eine Verbindung hergestellt wurde, indem wir einen [`onopen`](/de/docs/Web/API/WebSocket/open_event)-Ereignishandler definieren, der die Arbeit übernimmt:

```js
exampleSocket.onopen = (event) => {
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};
```

### Verwendung von JSON zur Übertragung von Objekten

Ein nützliches Tool, das Sie verwenden können, ist [JSON](/de/docs/Glossary/JSON), um einigermaßen komplexe Daten an den Server zu senden.
Zum Beispiel kann ein Chat-Programm mit einem Server mittels eines Protokolls interagieren, das mittels Paketen von JSON-verkapselten Daten implementiert wird:

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

WebSockets ist eine ereignisgesteuerte API; wenn Nachrichten empfangen werden, wird ein `message`-Ereignis an das `WebSocket`-Objekt gesendet. Um es zu verarbeiten, fügen Sie einen Ereignis-Listener für das `message`-Ereignis hinzu oder verwenden Sie den [`onmessage`](/de/docs/Web/API/WebSocket/message_event)-Ereignishandler.
Um mit dem Zuhören für eingehende Daten zu beginnen, können Sie etwa Folgendes tun:

```js
exampleSocket.onmessage = (event) => {
  console.log(event.data);
};
```

### Empfangen und Interpretieren von JSON-Objekten

Betrachten wir zuerst die eingangs erwähnte Chat-Client-Anwendung in [Verwendung von JSON zur Übertragung von Objekten](#verwendung_von_json_zur_übertragung_von_objekten). Der Client könnte verschiedene Arten von Datenpaketen empfangen, wie:

- Anmelde-Handshake
- Nachrichten-Text
- Aktualisierungen der Benutzerliste

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

Hier verwenden wir {{jsxref("JSON.parse()")}}, um das JSON-Objekt zurück in das ursprüngliche Objekt zu konvertieren, dann untersuchen und agieren wir auf seinem Inhalt.

### Textdatenformat

Text, der über eine WebSocket-Verbindung empfangen wird, ist im UTF-8-Format.

## Schließen der Verbindung

Wenn Sie die WebSocket-Verbindung nicht mehr benötigen, rufen Sie die WebSocket-Methode [`close()`](/de/docs/Web/API/WebSocket/close) auf:

```js
exampleSocket.close();
```

Es kann nützlich sein, das Attribut [`bufferedAmount`](/de/docs/Web/API/WebSocket/bufferedAmount) des Sockets zu prüfen, bevor Sie versuchen, die Verbindung zu schließen, um festzustellen, ob noch Daten übertragen werden müssen.
Wenn dieser Wert nicht 0 ist, sind noch Daten ausstehend, sodass Sie möglicherweise warten möchten, bevor Sie die Verbindung schließen.

## Sicherheitsüberlegungen

WebSockets sollten nicht in einer gemischten Inhaltsumgebung verwendet werden; das heißt, Sie sollten keine unsichere WebSocket-Verbindung von einer Seite öffnen, die mit HTTPS geladen wurde oder umgekehrt.
Die meisten Browser erlauben jetzt nur noch sichere WebSocket-Verbindungen und unterstützen sie nicht mehr in unsicheren Kontexten.
