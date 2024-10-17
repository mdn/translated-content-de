---
title: Verwenden von servergesendeten Ereignissen
slug: Web/API/Server-sent_events/Using_server-sent_events
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{DefaultAPISidebar("Server Sent Events")}}

Die Entwicklung einer Webanwendung, die [servergesendete Ereignisse](/de/docs/Web/API/Server-sent_events) verwendet, ist unkompliziert. Man benötigt etwas Code auf dem Server, um Ereignisse an das Front-End zu streamen, aber der Client-Code funktioniert fast identisch wie bei [Websockets](/de/docs/Web/API/WebSockets_API) in Bezug auf das Handling eingehender Ereignisse. Dies ist eine Einwegverbindung, daher können Sie keine Ereignisse von einem Client an einen Server senden.

## Empfang von Ereignissen vom Server

Die API für servergesendete Ereignisse ist in der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle enthalten.

### Erstellen einer `EventSource`-Instanz

Um eine Verbindung zum Server zu öffnen und mit dem Empfang von Ereignissen zu beginnen, erstellen Sie ein neues `EventSource`-Objekt mit der URL eines Skripts, das die Ereignisse generiert. Zum Beispiel:

```js
const evtSource = new EventSource("sse-demo.php");
```

Wenn das Ereignisgeneratorskript auf einem anderen Ursprung gehostet wird, sollte ein neues `EventSource`-Objekt sowohl mit der URL als auch mit einem Optionsdiktat erstellt werden. Angenommen, das Client-Skript befindet sich auf `example.com`:

```js
const evtSource = new EventSource("//api.example.com/sse-demo.php", {
  withCredentials: true,
});
```

### Empfangen von `message`-Ereignissen

Nachrichten, die vom Server gesendet werden und kein [`event`](#event)-Feld haben, werden als `message`-Ereignisse empfangen. Um Nachrichtenereignisse zu empfangen, fügen Sie einen Handler für das [`message`](/de/docs/Web/API/EventSource/message_event)-Ereignis hinzu:

```js
evtSource.onmessage = (event) => {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");

  newElement.textContent = `message: ${event.data}`;
  eventList.appendChild(newElement);
};
```

Dieser Code hört auf eingehende Nachrichtenereignisse und fügt den Nachrichtentext einer Liste im HTML-Dokument hinzu.

### Empfangen von benutzerdefinierten Ereignissen

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

Dieser Code wird aufgerufen, wann immer der Server eine Nachricht mit dem `event`-Feld `ping` sendet; Er parst dann das JSON im `data`-Feld und gibt diese Information aus.

> [!WARNING]
> Wenn **nicht über HTTP/2 verwendet**, leidet SSE unter einer Begrenzung der maximalen Anzahl an offenen Verbindungen, was besonders schmerzhaft sein kann, wenn mehrere Tabs geöffnet werden, da die Grenze _pro Browser_ gilt und auf eine sehr niedrige Zahl (6) gesetzt ist. Das Problem wurde in [Chrome](https://crbug.com/275955) und [Firefox](https://bugzil.la/906896) mit "Wird nicht behoben" markiert. Dieses Limit gilt pro Browser + Domain, was bedeutet, dass Sie 6 SSE-Verbindungen über alle Tabs auf `www.example1.com` und weitere 6 SSE-Verbindungen auf `www.example2.com` öffnen können (laut [StackOverflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). Bei Verwendung von HTTP/2 wird die maximale Anzahl gleichzeitiger _HTTP-Streams_ zwischen Server und Client ausgehandelt (Standard ist 100).

## Senden von Ereignissen vom Server

Das Serverseitige Skript, das Ereignisse sendet, muss mit dem MIME-Typ `text/event-stream` antworten. Jede Benachrichtigung wird als Textblock gesendet, der durch ein Paar von Neuzeilen abgeschlossen wird. Für Details zum Format des Ereignisstreams siehe [Ereignisstream-Format](#ereignisstream-format).

Der {{Glossary("PHP", "PHP")}}-Code für das hier verwendete Beispiel ist wie folgt:

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

Der obige Code generiert jede Sekunde ein Ereignis mit dem Ereignistyp "ping". Die Daten jedes Ereignisses sind ein JSON-Objekt, das den ISO 8601-Zeitstempel beinhaltet, der dem Zeitpunkt entspricht, zu dem das Ereignis generiert wurde. In zufälligen Abständen wird eine einfache Nachricht (ohne Ereignistyp) gesendet. Die Schleife bleibt unabhängig vom Verbindungsstatus aktiv, daher wird eine Überprüfung eingefügt, um die Schleife zu unterbrechen, wenn die Verbindung geschlossen wurde (z. B. wenn der Client die Seite schließt).

> [!NOTE]
> Ein vollständiges Beispiel, das den im Artikel gezeigten Code verwendet, finden Sie auf GitHub — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Fehlerbehandlung

Bei Problemen (wie einem Netzwerk-Timeout oder Fragen zum [Zugriffskontrolle](/de/docs/Web/HTTP/CORS)) wird ein Fehlerereignis generiert. Sie können darauf programmatisch reagieren, indem Sie den `onerror`-Callback des `EventSource`-Objekts implementieren:

```js
evtSource.onerror = (err) => {
  console.error("EventSource failed:", err);
};
```

## Schließen von Ereignisstreams

Standardmäßig wird die Verbindung neu gestartet, wenn die Verbindung zwischen Client und Server geschlossen wird. Die Verbindung wird mit der Methode `.close()` beendet.

```js
evtSource.close();
```

## Ereignisstream-Format

Der Ereignisstream ist ein einfacher Stream von Textdaten, der mit {{Glossary("UTF-8", "UTF-8")}} codiert sein muss. Nachrichten im Ereignisstream sind durch ein Paar von Neuzeichen getrennt. Ein Doppelpunkt als erstes Zeichen einer Zeile ist im Wesentlichen ein Kommentar und wird ignoriert.

> [!NOTE]
> Die Kommentarbezeilen können verwendet werden, um zu verhindern, dass Verbindungen zeitlich ablaufen; ein Server kann periodisch einen Kommentar senden, um die Verbindung am Leben zu halten.

Jede Nachricht besteht aus einer oder mehreren Textzeilen, die die Felder für diese Nachricht auflisten. Jedes Feld wird durch den Feldnamen repräsentiert, gefolgt von einem Doppelpunkt und den Textdaten für den Wert dieses Felds.

### Felder

Jede empfangene Nachricht hat eine Kombination aus den folgenden Feldern, jeweils in einer eigenen Zeile:

- `event`
  - : Ein String, der die Art des beschriebenen Ereignisses identifiziert. Wenn dies angegeben ist, wird ein Ereignis an den Listener für den angegebenen Ereignisnamen im Browser gesendet; Der Quellcode der Webseite sollte `addEventListener()` verwenden, um auf benannte Ereignisse zu hören. Der `onmessage`-Handler wird aufgerufen, wenn kein Ereignisname für eine Nachricht angegeben ist.
- `data`
  - : Das Datenfeld für die Nachricht. Wenn der `EventSource` mehrere aufeinanderfolgende Zeilen erhält, die mit `data:` beginnen, [fügt es sie zusammen](https://html.spec.whatwg.org/multipage/#dispatchMessage) und fügt zwischen jedem eine Neuzeichen ein. Nachfolgende Neuzeilen werden entfernt.
- `id`
  - : Die Ereignis-ID, um den Wert der letzten Ereignis-ID des [`EventSource`](/de/docs/Web/API/EventSource)-Objekts festzulegen.
- `retry`
  - : Die Wiederverbindungszeit. Geht die Verbindung zum Server verloren, wartet der Browser die angegebene Zeit, bevor versucht wird, die Verbindung wiederherzustellen. Dies muss eine ganze Zahl sein, die die Wiederverbindungszeit in Millisekunden angibt. Wenn ein nicht ganzzahliger Wert angegeben ist, wird das Feld ignoriert.

Alle anderen Feldnamen werden ignoriert.

> [!NOTE]
> Wenn eine Zeile keinen Doppelpunkt enthält, wird die gesamte Zeile als Feldname mit einem leeren Wertstring behandelt.

### Beispiele

#### Daten-Only-Nachrichten

Im folgenden Beispiel werden drei Nachrichten gesendet. Die erste ist nur ein Kommentar, da sie mit einem Doppelpunkt beginnt. Wie bereits erwähnt, kann dies als Keep-Alive-Mechanismus nützlich sein, wenn Nachrichten nicht regelmäßig gesendet werden.

Die zweite Nachricht enthält ein Datenfeld mit dem Wert "some text". Die dritte Nachricht enthält ein Datenfeld mit dem Wert "another message\nwith two lines". Beachten Sie das spezielle Neuzeichen im Wert.

```bash
: this is a test stream

data: some text

data: another message
data: with two lines
```

#### Benannte Ereignisse

Dieses Beispiel sendet benannte Ereignisse. Jedes hat einen Ereignisnamen, der durch das Feld `event` angegeben wird, und ein `data`-Feld, dessen Wert ein entsprechender JSON-String mit den Daten ist, die der Client für die Ausführung der Aktion benötigt. Das `data`-Feld könnte natürlich beliebige String-Daten enthalten; es muss kein JSON sein.

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

Sie müssen nicht nur unbenannte Nachrichten oder typisierte Ereignisse verwenden; Sie können sie innerhalb eines einzigen Ereignisstreams kombinieren.

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
