---
title: Verwendung von Server-Sent Events
slug: Web/API/Server-sent_events/Using_server-sent_events
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Server Sent Events")}}

Die Entwicklung einer Webanwendung, die [Server-Sent Events](/de/docs/Web/API/Server-sent_events) nutzt, ist unkompliziert. Sie benötigen etwas Code auf dem Server, um Ereignisse an das Front-End zu streamen, aber der Client-Seiten-Code funktioniert ähnlich wie [Websockets](/de/docs/Web/API/WebSockets_API), was das Handling eingehender Ereignisse betrifft. Dies ist eine Einweg-Verbindung, sodass Sie keine Ereignisse von einem Client an einen Server senden können.

## Empfang von Ereignissen vom Server

Die API für Server-Sent Events ist in der [`EventSource`](/de/docs/Web/API/EventSource) Schnittstelle enthalten.

### Erstellen einer `EventSource`-Instanz

Um eine Verbindung zum Server zu öffnen und mit dem Empfang von Ereignissen zu beginnen, erstellen Sie ein neues `EventSource`-Objekt mit der URL eines Skripts, das die Ereignisse generiert. Zum Beispiel:

```js
const evtSource = new EventSource("sse-demo.php");
```

Wenn das Ereignisgenerierungsskript auf einem anderen Ursprung gehostet wird, sollte ein neues `EventSource`-Objekt mit URL und einem Optionsdikt ausgestattet werden. Angenommen, das Client-Skript befindet sich auf `example.com`:

```js
const evtSource = new EventSource("//api.example.com/sse-demo.php", {
  withCredentials: true,
});
```

### Lauschen auf `message`-Ereignisse

Nachrichten, die vom Server gesendet werden und kein [`event`](#event)-Feld haben, werden als `message`-Ereignisse empfangen. Um Nachrichten-Ereignisse zu empfangen, fügen Sie einen Handler für das [`message`](/de/docs/Web/API/EventSource/message_event)-Ereignis hinzu:

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

Nachrichten vom Server, die ein definiertes `event`-Feld haben, werden als Ereignisse mit dem im `event`-Feld angegebenen Namen empfangen. Zum Beispiel:

```js
evtSource.addEventListener("ping", (event) => {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");
  const time = JSON.parse(event.data).time;
  newElement.textContent = `ping at ${time}`;
  eventList.appendChild(newElement);
});
```

Dieser Code wird immer aufgerufen, wenn der Server eine Nachricht mit dem `event`-Feld auf `ping` gesetzt sendet; anschließend wird das JSON im `data`-Feld geparst und diese Information ausgegeben.

> [!WARNING]
> Wenn **nicht über HTTP/2 verwendet**, leidet SSE unter einer Beschränkung bezüglich der maximalen Anzahl offener Verbindungen, was besonders schmerzhaft sein kann, wenn mehrere Tabs geöffnet werden, da das Limit _pro Browser_ und sehr niedrig (6) eingestellt ist. Das Problem ist in [Chrome](https://crbug.com/275955) und [Firefox](https://bugzil.la/906896) als "Wird nicht behoben" markiert. Dieses Limit ist pro Browser + Domain, was bedeutet, dass Sie 6 SSE-Verbindungen über alle Tabs zu `www.example1.com` und weitere 6 SSE-Verbindungen zu `www.example2.com` öffnen können (pro [Stack Overflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). Bei Verwendung von HTTP/2 wird die maximale Anzahl gleichzeitiger _HTTP-Streams_ zwischen Server und Client ausgehandelt (Standardwert ist 100).

## Senden von Ereignissen vom Server

Das Server-Skript, das Ereignisse sendet, muss mit dem MIME-Typ `text/event-stream` antworten. Jede Benachrichtigung wird als Textblock gesendet, der durch ein Paar Leerzeilen abgeschlossen ist. Für Details zum Format des Ereignisstroms siehe [Event-Stream-Format](#event-stream-format).

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

Der obige Code generiert jede Sekunde ein Ereignis mit dem Ereignistyp "ping". Die Daten jedes Ereignisses sind ein JSON-Objekt, das den ISO 8601-Zeitstempel enthält, der dem Zeitpunkt entspricht, zu dem das Ereignis generiert wurde. In zufälligen Intervallen wird eine einfache Nachricht (ohne Ereignistyp) gesendet. Die Schleife wird unabhängig vom Verbindungsstatus weiterlaufen, daher ist eine Prüfung enthalten, um die Schleife zu unterbrechen, wenn die Verbindung geschlossen wurde (z. B. wenn der Client die Seite schließt).

> [!NOTE]
> Ein vollständiges Beispiel, das den in diesem Artikel gezeigten Code verwendet, finden Sie auf GitHub — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Fehlerbehandlung

Wenn Probleme auftreten (wie zum Beispiel ein Netzwerk-Timeout oder Probleme im Zusammenhang mit [Zugriffskontrolle](/de/docs/Web/HTTP/Guides/CORS)), wird ein Fehlerereignis generiert. Sie können programmgesteuert darauf reagieren, indem Sie den `onerror`-Callback im `EventSource`-Objekt implementieren:

```js
evtSource.onerror = (err) => {
  console.error("EventSource failed:", err);
};
```

## Schließen von Ereignisströmen

Standardmäßig wird die Verbindung neu gestartet, wenn die Verbindung zwischen Client und Server geschlossen wird. Die Verbindung wird mit der `.close()`-Methode beendet.

```js
evtSource.close();
```

## Event-Stream-Format

Der Ereignisstrom ist ein einfacher Strom von Textdaten, der mit {{Glossary("UTF-8", "UTF-8")}} codiert werden muss. Nachrichten im Ereignisstrom werden durch ein Paar neuer Zeilenzeichen getrennt. Ein Doppelpunkt als erstes Zeichen einer Zeile ist im Wesentlichen ein Kommentar und wird ignoriert.

> [!NOTE]
> Die Kommentarszeile kann verwendet werden, um zu verhindern, dass Verbindungen ablaufen; ein Server kann regelmäßig einen Kommentar senden, um die Verbindung aufrechtzuerhalten.

Jede Nachricht besteht aus einer oder mehreren Textzeilen, die die Felder für diese Nachricht auflisten. Jedes Feld wird durch den Feldnamen, gefolgt von einem Doppelpunkt und den Textdaten für den Wert dieses Feldes dargestellt.

### Felder

Jede empfangene Nachricht weist eine Kombination der folgenden Felder auf, eines pro Zeile:

- `event`
  - : Ein String, der den Typ des beschriebenen Ereignisses identifiziert. Ist dies angegeben, wird ein Ereignis an den Browser an den Zuhörer für den angegebenen Ereignisnamen übermittelt; der Website-Quellcode sollte `addEventListener()` verwenden, um auf benannte Ereignisse zu lauschen. Der `onmessage`-Handler wird aufgerufen, wenn für eine Nachricht kein Ereignisname angegeben ist.
- `data`
  - : Das Datenfeld für die Nachricht. Wenn die `EventSource` mehrere aufeinanderfolgende Zeilen empfängt, die mit `data:` beginnen, [verknüpft sie diese](https://html.spec.whatwg.org/multipage/#dispatchMessage) und fügt jeweils ein neues Zeilenzeichen zwischen ihnen ein. Nachfolgende Leerzeilen werden entfernt.
- `id`
  - : Die Ereignis-ID, um den letzten Ereignis-ID-Wert des [`EventSource`](/de/docs/Web/API/EventSource)-Objekts festzulegen.
- `retry`
  - : Die Wiederverbindungszeit. Wenn die Verbindung zum Server verloren geht, wartet der Browser die angegebene Zeit, bevor er versucht, die Verbindung wiederherzustellen. Dies muss eine ganze Zahl sein, die die Wiederverbindungszeit in Millisekunden angibt. Wenn ein Nicht-Ganzzahlwert angegeben wird, wird das Feld ignoriert.

Alle anderen Feldnamen werden ignoriert.

> [!NOTE]
> Wenn eine Zeile keinen Doppelpunkt enthält, wird die gesamte Zeile als Feldname mit einem leeren Wertstring behandelt.

### Beispiele

#### Nachrichten nur mit Daten

Im folgenden Beispiel werden drei Nachrichten gesendet. Die erste ist nur ein Kommentar, da sie mit einem Doppelpunktzeichen beginnt. Wie bereits erwähnt, kann dies als Mechanismus zur Verbindungshalte verwendet werden, wenn Nachrichten möglicherweise nicht regelmäßig gesendet werden.

Die zweite Nachricht enthält ein Datenfeld mit dem Wert "some text". Die dritte Nachricht enthält ein Datenfeld mit dem Wert "another message\nwith two lines". Beachten Sie das spezielle Neuzeichen im Wert.

```bash
: this is a test stream

data: some text

data: another message
data: with two lines
```

#### Benannte Ereignisse

Dieses Beispiel sendet benannte Ereignisse. Jedes hat einen durch das `event`-Feld angegebenen Ereignisnamen und ein `data`-Feld, dessen Wert ein passender JSON-String mit den Daten ist, die der Client für die Verarbeitung des Ereignisses benötigt. Das `data`-Feld könnte natürlich auch beliebige Stringdaten enthalten; es muss kein JSON sein.

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

#### Vermischen und Anpassen

Sie müssen nicht nur unbenannte Nachrichten oder typisierte Ereignisse verwenden; Sie können sie in einem einzigen Ereignisstrom mischen.

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
