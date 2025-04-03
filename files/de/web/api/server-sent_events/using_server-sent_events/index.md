---
title: Verwendung von Server-Sent Events
slug: Web/API/Server-sent_events/Using_server-sent_events
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Server Sent Events")}}

Die Entwicklung einer Webanwendung, die [Server-Sent Events](/de/docs/Web/API/Server-sent_events) verwendet, ist unkompliziert. Sie benötigen etwas Code auf dem Server, um Ereignisse an das Frontend zu streamen, aber der Client-seitige Code funktioniert fast identisch wie [Websockets](/de/docs/Web/API/WebSockets_API), wenn es um die Verarbeitung eingehender Ereignisse geht. Dies ist eine einseitige Verbindung, sodass Sie keine Ereignisse von einem Client an einen Server senden können.

## Empfang von Ereignissen vom Server

Die Server-Sent Events API ist in der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle enthalten.

### Erstellen einer `EventSource`-Instanz

Um eine Verbindung zum Server zu öffnen und mit dem Empfang von Ereignissen zu beginnen, erstellen Sie ein neues `EventSource`-Objekt mit der URL eines Skripts, das die Ereignisse generiert. Zum Beispiel:

```js
const evtSource = new EventSource("sse-demo.php");
```

Wenn das Ereignisgenerator-Skript auf einer anderen Herkunft gehostet wird, sollte ein neues `EventSource`-Objekt sowohl mit der URL als auch mit einem Optionsdiktat erstellt werden. Zum Beispiel, wenn das Client-Skript auf `example.com` ist:

```js
const evtSource = new EventSource("//api.example.com/sse-demo.php", {
  withCredentials: true,
});
```

### Lauschen auf `message`-Ereignisse

Von dem Server gesendete Nachrichten, die kein [`event`](#event)-Feld haben, werden als `message`-Ereignisse empfangen. Um Nachrichtenereignisse zu empfangen, fügen Sie einen Handler für das [`message`](/de/docs/Web/API/EventSource/message_event)-Ereignis hinzu:

```js
evtSource.onmessage = (event) => {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");

  newElement.textContent = `message: ${event.data}`;
  eventList.appendChild(newElement);
};
```

Dieser Code lauscht auf eingehende Nachrichtenereignisse und fügt den Nachrichtentext einer Liste im HTML-Dokument hinzu.

### Lauschen auf benutzerdefinierte Ereignisse

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

Dieser Code wird aufgerufen, wann immer der Server eine Nachricht sendet, bei der das `event`-Feld auf `ping` gesetzt ist. Er parst dann das JSON im `data`-Feld und gibt diese Informationen aus.

> [!WARNING]
> Wenn **nicht über HTTP/2 verwendet**, leidet SSE unter einer Begrenzung der maximalen Anzahl offener Verbindungen, was besonders schmerzhaft sein kann, wenn mehrere Tabs geöffnet werden, da die Begrenzung _pro Browser_ gilt und auf eine sehr niedrige Zahl (6) eingestellt ist. Das Problem wurde in [Chrome](https://crbug.com/275955) und [Firefox](https://bugzil.la/906896) als "Wird nicht behoben" markiert. Diese Begrenzung gilt pro Browser + Domain, was bedeutet, dass Sie 6 SSE-Verbindungen über alle Tabs zu `www.example1.com` und weitere 6 SSE-Verbindungen zu `www.example2.com` öffnen können (laut [Stack Overflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). Bei Verwendung von HTTP/2 wird die maximale Anzahl gleichzeitiger _HTTP-Streams_ zwischen dem Server und dem Client verhandelt (Standard ist 100).

## Senden von Ereignissen vom Server

Das serverseitige Skript, das Ereignisse sendet, muss mit dem MIME-Typ `text/event-stream` antworten. Jede Benachrichtigung wird als Textblock gesendet, der von einem Paar neuer Zeilenzeichen abgeschlossen wird. Details zum Format des Ereignisstreams finden Sie unter [Event-Stream-Format](#event-stream-format).

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

Der obige Code generiert jede Sekunde ein Ereignis mit dem Ereignistyp "ping". Die Daten jedes Ereignisses sind ein JSON-Objekt mit dem ISO 8601-Timestamp, der dem Zeitpunkt entspricht, zu dem das Ereignis generiert wurde. In zufälligen Abständen wird eine einfache Nachricht (ohne Ereignistyp) gesendet. Schleifenausführung bleibt unabhängig vom Verbindungsstatus aktiv, daher ist eine Überprüfung enthalten, um die Schleife zu beenden, falls die Verbindung geschlossen wurde (z. B. wenn der Client die Seite schließt).

> [!NOTE]
> Sie finden ein vollständiges Beispiel, das den in diesem Artikel gezeigten Code verwendet, auf GitHub — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Fehlerbehandlung

Wenn Probleme auftreten (wie ein Netzwerk-Timeout oder Probleme in Bezug auf [Zugriffskontrolle](/de/docs/Web/HTTP/Guides/CORS)), wird ein Fehlerereignis generiert. Sie können programmatisch darauf reagieren, indem Sie den `onerror` Rückruf am `EventSource`-Objekt implementieren:

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

## Event-Stream-Format

Der Ereignisstream ist ein einfacher Datenstrom im Textformat, der mit {{Glossary("UTF-8", "UTF-8")}} kodiert sein muss. Nachrichten im Ereignisstream werden durch ein Paar neuer Zeilenzeichen getrennt. Ein Doppelpunkt als erstes Zeichen einer Zeile ist im Wesentlichen ein Kommentar und wird ignoriert.

> [!NOTE]
> Die Kommentarzeile kann verwendet werden, um Verbindungsabbrüche zu verhindern; ein Server kann regelmäßig einen Kommentar senden, um die Verbindung aufrechtzuerhalten.

Jede Nachricht besteht aus einer oder mehreren Zeilen Text, die die Felder für diese Nachricht auflisten. Jedes Feld wird durch den Feldnamen, gefolgt von einem Doppelpunkt und den Textdaten für den Wert dieses Feldes dargestellt.

### Felder

Jede empfangene Nachricht hat eine Kombination der folgenden Felder, jeweils eines pro Zeile:

- `event`
  - : Ein String, der den Ereignistyp beschreibt. Wenn dies angegeben ist, wird ein Ereignis an den Listener für den angegebenen Ereignisnamen im Browser gesendet; der Website-Quellcode sollte `addEventListener()` verwenden, um auf benannte Ereignisse zu lauschen. Der `onmessage`-Handler wird aufgerufen, wenn kein Ereignisname für eine Nachricht spezifiziert ist.
- `data`
  - : Das Datenfeld für die Nachricht. Wenn der `EventSource` mehrere aufeinanderfolgende Zeilen empfängt, die mit `data:` beginnen, [wird es sie verketten](https://html.spec.whatwg.org/multipage/#dispatchMessage), indem ein neuer Zeilenumbruch zwischen jedem eingefügt wird. Nachlaufende Zeilenumbrüche werden entfernt.
- `id`
  - : Die Ereignis-ID, die den letzten Ereignis-ID-Wert des [`EventSource`](/de/docs/Web/API/EventSource)-Objekts setzt.
- `retry`
  - : Die Wiederverbindungszeit. Wenn die Verbindung zum Server unterbrochen wird, wartet der Browser die angegebene Zeit, bevor er versucht, die Verbindung wiederherzustellen. Dies muss eine ganze Zahl sein, die die Wiederverbindungszeit in Millisekunden angibt. Wenn ein nicht-integer Wert angegeben wird, wird das Feld ignoriert.

Alle anderen Feldnamen werden ignoriert.

> [!NOTE]
> Wenn eine Zeile keinen Doppelpunkt enthält, wird die gesamte Zeile als Feldname mit einem leeren Wertzeichenfolge behandelt.

### Beispiele

#### Nachrichten nur mit Daten

Im folgenden Beispiel werden drei Nachrichten gesendet. Die erste ist nur ein Kommentar, da sie mit einem Doppelpunkt beginnt. Wie zuvor erwähnt, kann dies nützlich sein als Mechanismus zur Aufrechterhaltung einer Verbindung, wenn Nachrichten nicht regelmäßig gesendet werden.

Die zweite Nachricht enthält ein Datenfeld mit dem Wert "some text". Die dritte Nachricht enthält ein Datenfeld mit dem Wert "another message\nwith two lines". Beachten Sie das spezielle Zeichen für einen Zeilenumbruch im Wert.

```bash
: this is a test stream

data: some text

data: another message
data: with two lines
```

#### Benannte Ereignisse

Dieses Beispiel sendet benannte Ereignisse. Jedes Ereignis hat einen im `event`-Feld spezifizierten Ereignisnamen und ein `data`-Feld, dessen Wert ein geeigneter JSON-String mit den Daten ist, die der Client benötigt, um auf das Ereignis zu reagieren. Das `data`-Feld könnte natürlich auch andere String-Daten enthalten; es muss nicht JSON sein.

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

Sie müssen nicht nur unbenannte Nachrichten oder typisierte Ereignisse verwenden; Sie können sie in einem einzelnen Ereignisstream zusammenmischen.

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
