---
title: Verwendung von server-sent events
slug: Web/API/Server-sent_events/Using_server-sent_events
l10n:
  sourceCommit: fd1048861f12cd6e4c806523655ac742b483f281
---

{{DefaultAPISidebar("Server Sent Events")}}

Die Entwicklung einer Webanwendung, die [server-sent events](/de/docs/Web/API/Server-sent_events) verwendet, ist unkompliziert. Sie benötigen etwas Code auf dem Server, um Ereignisse an das Front-End zu streamen, aber der Client-seitige Code funktioniert fast identisch mit [WebSockets](/de/docs/Web/API/WebSockets_API), wenn es darum geht, eingehende Ereignisse zu verarbeiten. Dies ist eine einseitige Verbindung, sodass Sie keine Ereignisse von einem Client zu einem Server senden können.

## Empfangen von Ereignissen vom Server

Die API für server-sent events ist in der Schnittstelle [`EventSource`](/de/docs/Web/API/EventSource) enthalten.

### Erstellen einer `EventSource`-Instanz

Um eine Verbindung zum Server zu öffnen, um mit dem Empfang von Ereignissen zu beginnen, erstellen Sie ein neues `EventSource`-Objekt mit der URL eines Skripts, das die Ereignisse generiert. Zum Beispiel:

```js
const evtSource = new EventSource("sse-demo.php");
```

Wenn das Ereigniserzeuger-Skript auf einem anderen Ursprung gehostet wird, sollte ein neues `EventSource`-Objekt mit sowohl der URL als auch einem Options-Dictionary erstellt werden. Zum Beispiel, wenn das Clientskript auf `example.com` ist:

```js
const evtSource = new EventSource("//api.example.com/sse-demo.php", {
  withCredentials: true,
});
```

### Abhören von `message`-Ereignissen

Nachrichten, die vom Server gesendet werden und kein [`event`](#event)-Feld haben, werden als `message`-Ereignisse empfangen. Um Nachrichtenereignisse zu empfangen, fügen Sie einen Handler für das [`message`](/de/docs/Web/API/EventSource/message_event)-Ereignis hinzu:

```js
evtSource.onmessage = (event) => {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");

  newElement.textContent = `message: ${event.data}`;
  eventList.appendChild(newElement);
};
```

Dieser Code wartet auf eingehende Nachrichtenereignisse und fügt den Nachrichtentext einer Liste im HTML-Dokument hinzu.

### Abhören von benutzerdefinierten Ereignissen

Nachrichten vom Server, die ein definiertes `event`-Feld haben, werden als Ereignisse mit dem im `event` angegebenen Namen empfangen. Zum Beispiel:

```js
evtSource.addEventListener("ping", (event) => {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");
  const time = JSON.parse(event.data).time;
  newElement.textContent = `ping at ${time}`;
  eventList.appendChild(newElement);
});
```

Dieser Code wird aufgerufen, wann immer der Server eine Nachricht mit dem `event`-Feld auf `ping` setzt; dann wird das JSON im `data`-Feld geparst und diese Information ausgegeben.

> [!WARNING]
> Wenn **nicht über HTTP/2 verwendet**, leidet SSE unter einer Beschränkung auf die maximale Anzahl an offenen Verbindungen, was besonders schmerzhaft sein kann, wenn man mehrere Tabs öffnet, da das Limit _pro Browser_ festgelegt ist und auf eine sehr niedrige Zahl (6) eingestellt ist. Das Problem wurde als "Wird nicht behoben" in [Chrome](https://crbug.com/275955) und [Firefox](https://bugzil.la/906896) markiert. Dieses Limit gilt pro Browser + Domain, was bedeutet, dass Sie 6 SSE-Verbindungen über alle Tabs zu `www.example1.com` und weitere 6 SSE-Verbindungen zu `www.example2.com` (per [Stack Overflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)) öffnen können. Bei der Verwendung von HTTP/2 wird die maximale Anzahl gleichzeitiger _HTTP-Streams_ zwischen dem Server und dem Client ausgehandelt (Standardwert ist 100).

## Senden von Ereignissen vom Server

Das serversseitige Skript, das Ereignisse sendet, muss mit dem MIME-Typ `text/event-stream` antworten. Jede Benachrichtigung wird als Textblock gesendet, der durch ein Paar von Zeilenumbrüchen beendet wird. Details zum Format des Ereignisstreams finden Sie unter [Ereignisstream-Format](#ereignisstream-format).

Der {{Glossary("PHP", "PHP")}}-Code für das hier verwendete Beispiel lautet:

```php
date_default_timezone_set("America/New_York");
header("X-Accel-Buffering: no");
header("Content-Type: text/event-stream");
header("Cache-Control: no-cache");

$counter = rand(1, 10);
while (true) {
  // Every second, send a "ping" event.

  echo "event: ping\n";
  $curDate = date(DATE_ISO8601);
  echo 'data: {"time": "' . $curDate . '"}';
  echo "\n\n";

  // Send a simple message at random intervals.

  $counter--;

  if (!$counter) {
    echo 'data: This is a message at time ' . $curDate . "\n\n";
    $counter = rand(1, 10);
  }

  if (ob_get_contents()) {
      ob_end_flush();
  }
  flush();

  // Break the loop if the client aborted the connection (closed the page)

  if (connection_aborted()) break;

  sleep(1);
}
```

Der obige Code generiert jedes Sekunde ein Ereignis mit dem Ereignistyp "ping". Die Daten jedes Ereignisses sind ein JSON-Objekt, das den ISO 8601-Zeitstempel enthält, der dem Zeitpunkt entspricht, zu dem das Ereignis generiert wurde. In zufälligen Abständen wird eine einfache Nachricht (ohne Ereignistyp) gesendet.
Die Schleife läuft unabhängig vom Verbindungsstatus weiter, daher ist eine Überprüfung enthalten, um die Schleife zu beenden, wenn die Verbindung geschlossen wurde (z. B. wenn der Client die Seite schließt).

> [!NOTE]
> Sie finden ein vollständiges Beispiel, das den in diesem Artikel gezeigten Code verwendet, auf GitHub — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Fehlerbehandlung

Wenn der Server mit einem `error`-Schlüssel antwortet (z. B. `JSON.parse(event.data.error)`) oder ein anderes Problem auftritt (z. B. ein Netzwerk-Timeout oder Probleme im Zusammenhang mit [Zugriffskontrolle](/de/docs/Web/HTTP/Guides/CORS)), wird ein Fehlerereignis generiert. Sie können programmgesteuert darauf reagieren, indem Sie die `onerror`-Callback-Funktion auf dem `EventSource`-Objekt implementieren:

```js
evtSource.onerror = (err) => {
  console.error("EventSource failed:", err);
};
```

## Schließen von Ereignisströmen

Standardmäßig wird die Verbindung neu gestartet, wenn die Verbindung zwischen Client und Server geschlossen wird. Die Verbindung wird mit der Methode `.close()` beendet.

```js
evtSource.close();
```

## Ereignisstream-Format

Der Ereignisstream ist ein einfacher Strom von Textdaten, der mit {{Glossary("UTF-8", "UTF-8")}} kodiert werden muss. Nachrichten im Ereignisstream sind durch ein Paar von Zeilenumbrüchen getrennt. Ein Doppelpunkt als erstes Zeichen einer Zeile ist im Wesentlichen ein Kommentar und wird ignoriert.

> [!NOTE]
> Die Kommentarzeile kann verwendet werden, um zu verhindern, dass Verbindungen zeitlich ablaufen; ein Server kann periodisch einen Kommentar senden, um die Verbindung am Leben zu halten.

Jede Nachricht besteht aus einer oder mehreren Zeilen Text, die die Felder für diese Nachricht auflisten. Jedes Feld wird durch den Feldnamen, gefolgt von einem Doppelpunkt und den Textdaten für den Wert des Feldes dargestellt.

### Felder

Jede empfangene Nachricht hat eine Kombination der folgenden Felder, jeweils eines pro Zeile:

- `event`
  - : Ein String, der den Typ des beschriebenen Ereignisses identifiziert. Wenn dies angegeben wird, wird im Browser ein Ereignis an den Listener für den angegebenen Ereignisnamen gesendet; der Quellcode der Website sollte `addEventListener()` verwenden, um auf benannte Ereignisse zu hören. Der `onmessage`-Handler wird aufgerufen, wenn kein Ereignisname für eine Nachricht angegeben ist.
- `data`
  - : Das Datenfeld für die Nachricht. Wenn die `EventSource` mehrere aufeinanderfolgende Zeilen erhält, die mit `data:` beginnen, [verknüpft sie diese](https://html.spec.whatwg.org/multipage/#dispatchMessage) und fügt jeweils einen Zeilenumbruch zwischen den Zeilen ein. Nachfolgende Zeilenumbrüche werden entfernt.
- `id`
  - : Die Ereignis-ID, um den Wert der letzten Ereignis-ID des [`EventSource`](/de/docs/Web/API/EventSource)-Objekts festzulegen.
- `retry`
  - : Die Wiederverbindungszeit. Wenn die Verbindung zum Server verloren geht, wartet der Browser für die angegebene Zeit, bevor er versucht, die Verbindung wiederherzustellen. Diese muss ganzzahlig sein und die Wiederverbindungszeit in Millisekunden angeben. Wenn ein nicht-ganzzahliger Wert angegeben wird, wird das Feld ignoriert.

Alle anderen Feldnamen werden ignoriert.

> [!NOTE]
> Wenn eine Zeile keinen Doppelpunkt enthält, wird die gesamte Zeile als Feldname mit einer leeren Wertzeichenfolge behandelt.

### Beispiele

#### Nur-Daten-Nachrichten

Im folgenden Beispiel werden drei Nachrichten gesendet. Die erste ist nur ein Kommentar, da sie mit einem Doppelpunktzeichen beginnt. Wie bereits erwähnt, kann dies als Mechanismus für eine aktive Verbindung nützlich sein, wenn Nachrichten möglicherweise nicht regelmäßig gesendet werden.

Die zweite Nachricht enthält ein Datenfeld mit dem Wert "some text". Die dritte Nachricht enthält ein Datenfeld mit dem Wert "another message\nwith two lines". Beachten Sie das spezielle Newline-Zeichen im Wert.

```bash
: this is a test stream

data: some text

data: another message
data: with two lines
```

#### Benannte Ereignisse

Dieses Beispiel sendet benannte Ereignisse. Jedes hat einen Ereignisnamen, der durch das `event`-Feld angegeben wird, und ein `data`-Feld, dessen Wert ein geeigneter JSON-String mit den Daten ist, die der Client benötigt, um auf das Ereignis zu reagieren. Das `data`-Feld könnte natürlich jede Zeichenfolge enthalten; es muss kein JSON sein.

```bash
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}

event: userdisconnect
data: {"username": "bobby", "time": "02:34:23"}

event: usermessage
data: {"username": "sean", "time": "02:34:36", "text": "Bye, bobby."}
```

#### Mischen und Anpassen

Sie müssen nicht nur unbenannte Nachrichten oder typisierte Ereignisse verwenden; Sie können sie in einem einzigen Ereignisstream mischen.

```bash
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

data: Here's a system message of some kind that will get used
data: to accomplish some task.

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}
```

## Browser-Kompatibilität

{{Compat}}
