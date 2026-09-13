---
title: Verwendung von servergesendeten Ereignissen
slug: Web/API/Server-sent_events/Using_server-sent_events
l10n:
  sourceCommit: 051d02b402b7f76c2078b12283aa18318c34c38b
---

{{DefaultAPISidebar("Server Sent Events")}}

Die Entwicklung einer Webanwendung, die [servergesendete Ereignisse](/de/docs/Web/API/Server-sent_events) nutzt, ist unkompliziert. Sie benötigen ein wenig Code auf dem Server, um Ereignisse an das Frontend zu streamen, jedoch funktioniert der clientseitige Code fast identisch wie [WebSockets](/de/docs/Web/API/WebSockets_API) beim Umgang mit eingehenden Ereignissen. Dies ist eine unidirektionale Verbindung, sodass Sie keine Ereignisse von einem Client zu einem Server senden können.

## Empfang von Ereignissen vom Server

Die API für servergesendete Ereignisse ist in der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle enthalten.

### Erstellen einer `EventSource`-Instanz

Um eine Verbindung zum Server zu öffnen und mit dem Empfang von Ereignissen zu beginnen, erstellen Sie ein neues `EventSource`-Objekt mit der URL eines Skripts, das die Ereignisse generiert. Zum Beispiel:

```js
const evtSource = new EventSource("sse-demo.php");
```

Wenn das Ereignisgeneratorskript auf einem anderen Ursprung gehostet wird, sollte ein neues `EventSource`-Objekt sowohl mit der URL als auch mit einem Optionswörterbuch erstellt werden. Zum Beispiel, vorausgesetzt das Clientskript befindet sich auf `example.com`:

```js
const evtSource = new EventSource("//api.example.com/sse-demo.php", {
  withCredentials: true,
});
```

### Hören auf `message`-Ereignisse

Nachrichten, die vom Server gesendet werden und kein [`event`](#event)-Feld haben, werden als `message`-Ereignisse empfangen. Um Nachrichtenereignisse zu empfangen, hängen Sie einen Handler für das [`message`](/de/docs/Web/API/EventSource/message_event)-Ereignis an:

```js
evtSource.onmessage = (event) => {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");

  newElement.textContent = `message: ${event.data}`;
  eventList.appendChild(newElement);
};
```

Dieser Code lauscht auf eingehende Nachrichtenereignisse und fügt den Nachrichtentext einer Liste im HTML-Dokument hinzu.

### Hören auf benutzerdefinierte Ereignisse

Nachrichten vom Server, die ein `event`-Feld definiert haben, werden als Ereignisse mit dem im `event`-Feld angegebenen Namen empfangen. Zum Beispiel:

```js
evtSource.addEventListener("ping", (event) => {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");
  const time = JSON.parse(event.data).time;
  newElement.textContent = `ping at ${time}`;
  eventList.appendChild(newElement);
});
```

Dieser Code wird immer dann aufgerufen, wenn der Server eine Nachricht mit dem `event`-Feld auf `ping` setzt; er analysiert dann das JSON im `data`-Feld und gibt diese Informationen aus.

> [!WARNING]
> Wenn **nicht über HTTP/2 verwendet**, unterliegt SSE einer Beschränkung der maximalen Anzahl offener Verbindungen, was besonders schmerzhaft sein kann, wenn mehrere Tabs geöffnet werden, da das Limit _pro Browser_ gilt und auf eine sehr niedrige Zahl (6) festgelegt ist. Das Problem wurde in [Chrome](https://crbug.com/275955) und [Firefox](https://bugzil.la/906896) als "Nicht behoben" markiert. Dieses Limit gilt pro Browser + Domain, was bedeutet, dass Sie 6 SSE-Verbindungen über alle Tabs zu `www.example1.com` und weitere 6 SSE-Verbindungen zu `www.example2.com` öffnen können (laut [Stack Overflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). Bei der Verwendung von HTTP/2 wird die maximale Anzahl gleichzeitiger _HTTP-Streams_ zwischen dem Server und dem Client ausgehandelt (standardmäßig 100).

## Senden von Ereignissen vom Server

Das serverseitige Skript, das Ereignisse sendet, muss mit dem MIME-Typ `text/event-stream` antworten. Jede Benachrichtigung wird als Textblock gesendet, der durch ein Paar von Zeilenumbrüchen abgeschlossen wird. Details zum Format des Ereignisstreams finden Sie unter [Event stream format](#ereignisstromformat).

Der {{Glossary("PHP", "PHP")}}-Code für das hier verwendete Beispiel ist folgendermaßen:

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

Der oben gezeigte Code erzeugt jede Sekunde ein Ereignis mit dem Ereignistyp "ping". Jedes Ereignis enthält ein JSON-Objekt mit dem ISO 8601-Zeitstempel, der der Zeit entspricht, zu der das Ereignis generiert wurde. In zufälligen Intervallen wird eine einfache Nachricht (ohne Ereignistyp) gesendet. Die Schleife läuft unabhängig vom Verbindungsstatus weiter, daher ist eine Prüfung enthalten, um die Schleife zu unterbrechen, wenn die Verbindung geschlossen wurde (z.B. der Client schließt die Seite).

> [!NOTE]
> Ein vollständiges Beispiel, das den in diesem Artikel gezeigten Code verwendet, finden Sie auf GitHub — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Fehlerbehandlung

Wenn der Server mit einem `error`-Schlüssel antwortet (z.B. `JSON.parse(event.data.error)` oder ein anderes Problem auftritt (wie ein Netzwerk-Timeout oder Probleme bezüglich der [Zugriffskontrolle](/de/docs/Web/HTTP/Guides/CORS)), wird ein Fehlerereignis generiert. Sie können darauf programmatisch reagieren, indem Sie den `onerror`-Rückruf am `EventSource`-Objekt implementieren:

```js
evtSource.onerror = (err) => {
  console.error("EventSource failed:", err);
};
```

## Schließen von Ereignisstreams

Standardmäßig wird die Verbindung neu gestartet, wenn die Verbindung zwischen Client und Server geschlossen wird. Die Verbindung wird mit der `.close()`-Methode beendet.

```js
evtSource.close();
```

## Ereignisstromformat

Der Ereignisstrom ist ein einfacher Datenstrom von Text, der mit {{Glossary("UTF-8", "UTF-8")}} kodiert sein muss. Nachrichten im Ereignisstrom sind durch ein Paar von Zeilenumbrüchen getrennt. Ein Doppelpunkt als erstes Zeichen einer Zeile ist im Wesentlichen ein Kommentar und wird ignoriert.

> [!NOTE]
> Die Kommentarzeile kann verwendet werden, um zu verhindern, dass Verbindungen ablaufen; ein Server kann regelmäßig einen Kommentar senden, um die Verbindung am Leben zu halten.

Jede Nachricht besteht aus einer oder mehreren Zeilen Text, die die Felder für diese Nachricht auflisten. Jedes Feld wird durch den Feldnamen, gefolgt von einem Doppelpunkt und dem Textdatum für den Wert dieses Feldes dargestellt.

### Felder

Jede empfangene Nachricht hat eine Kombination der folgenden Felder, jeweils eins pro Zeile:

- `event`
  - : Ein String, der den Ereignistyp beschreibt. Wenn dies angegeben ist, wird ein Ereignis an den Browser-Listener für den angegebenen Ereignisnamen gesendet; der Quellcode der Website sollte `addEventListener()` verwenden, um auf benannte Ereignisse zu lauschen. Der `onmessage`-Handler wird aufgerufen, wenn für eine Nachricht kein Ereignisname angegeben ist.
- `data`
  - : Das Datenfeld für die Nachricht. Wenn die `EventSource` mehrere aufeinanderfolgende Zeilen empfängt, die mit `data:` beginnen, [konkateniert sie diese](https://html.spec.whatwg.org/multipage/#dispatchMessage), indem ein Zeilenumbruch zwischen jeder eingefügt wird. Nachgestellte Zeilenumbrüche werden entfernt.
- `id`
  - : Die Ereignis-ID zur Einstellung des letzten Ereignis-ID-Werts des [`EventSource`](/de/docs/Web/API/EventSource)-Objekts.
- `retry`
  - : Die Wiederverbindungszeit. Wenn die Verbindung zum Server verloren geht, wartet der Browser die angegebene Zeit ab, bevor er versucht, die Verbindung wiederherzustellen. Dies muss eine ganzzahlige Zahl sein und die Wiederverbindungszeit in Millisekunden angeben. Wenn ein Nicht-Ganzzahlwert angegeben ist, wird das Feld ignoriert.

Alle anderen Feldnamen werden ignoriert.

> [!NOTE]
> Wenn eine Zeile keinen Doppelpunkt enthält, wird die gesamte Zeile als Feldname mit einem leeren Wertstring behandelt.

### Beispiele

#### Daten-only-Nachrichten

Im folgenden Beispiel werden drei Nachrichten gesendet. Die erste ist nur ein Kommentar, da sie mit einem Doppelpunkt beginnt. Wie bereits erwähnt, kann dies nützlich sein, um die Verbindung am Leben zu halten, wenn Nachrichten möglicherweise nicht regelmäßig gesendet werden.

Die zweite Nachricht enthält ein Datenfeld mit dem Wert "some text". Die dritte Nachricht enthält ein Datenfeld mit dem Wert "another message\nwith two lines". Beachten Sie das spezielle Zeilenumbruchzeichen im Wert.

```bash
: this is a test stream

data: some text

data: another message
data: with two lines
```

#### Benannte Ereignisse

Dieses Beispiel sendet benannte Ereignisse. Jedes hat einen Ereignisnamen, der durch das `event`-Feld angegeben ist, und ein `data`-Feld, dessen Wert ein geeignetes JSON-String ist, mit den notwendigen Daten, auf die der Client reagieren soll. Das `data`-Feld kann natürlich beliebige Zeichenfolgendaten enthalten; es muss nicht JSON sein.

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

Sie müssen nicht nur unbenannte Nachrichten oder typisierte Ereignisse verwenden; Sie können sie zusammen in einem einzigen Ereignisstrom mischen.

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
