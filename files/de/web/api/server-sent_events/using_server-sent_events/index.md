---
title: Verwendung von server-sent events
slug: Web/API/Server-sent_events/Using_server-sent_events
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{DefaultAPISidebar("Server Sent Events")}}

Die Entwicklung einer Webanwendung, die [Server-sent events](/de/docs/Web/API/Server-sent_events) verwendet, ist unkompliziert. Sie benötigen ein wenig Code auf dem Server, um Ereignisse an das Front-End zu streamen, aber der Client-seitige Code funktioniert fast identisch mit [Websockets](/de/docs/Web/API/WebSockets_API) beim Umgang mit eingehenden Ereignissen. Dies ist eine Einbahnverbindung, sodass Sie keine Ereignisse von einem Client an einen Server senden können.

## Empfang von Ereignissen vom Server

Die server-sent event API ist in der [`EventSource`](/de/docs/Web/API/EventSource) Schnittstelle enthalten.

### Erstellen einer `EventSource`-Instanz

Um eine Verbindung zum Server zu öffnen und mit dem Empfang von Ereignissen zu beginnen, erstellen Sie ein neues `EventSource`-Objekt mit der URL eines Skripts, das die Ereignisse generiert. Zum Beispiel:

```js
const evtSource = new EventSource("sse-demo.php");
```

Wenn das Ereignis-Generator-Skript auf einem anderen Ursprung gehostet wird, sollte ein neues `EventSource`-Objekt mit sowohl der URL als auch einem Optionswörterbuch erstellt werden. Zum Beispiel, vorausgesetzt, das Client-Skript befindet sich auf `example.com`:

```js
const evtSource = new EventSource("//api.example.com/sse-demo.php", {
  withCredentials: true,
});
```

### Lauschen auf `message`-Ereignisse

Nachrichten, die vom Server gesendet werden und kein [`event`](#event)-Feld haben, werden als `message`-Ereignisse empfangen. Um Nachrichtenereignisse zu empfangen, fügen Sie einen Handler für das [`message`](/de/docs/Web/API/EventSource/message_event)-Ereignis hinzu:

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

Nachrichten vom Server, die ein definiertes `event`-Feld haben, werden als Ereignisse mit dem Namen empfangen, der im `event` angegeben ist. Zum Beispiel:

```js
evtSource.addEventListener("ping", (event) => {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");
  const time = JSON.parse(event.data).time;
  newElement.textContent = `ping at ${time}`;
  eventList.appendChild(newElement);
});
```

Dieser Code wird aufgerufen, wann immer der Server eine Nachricht mit dem `event`-Feld `ping` sendet; er analysiert dann das JSON im `data`-Feld und gibt diese Informationen aus.

> [!WARNING]
> Wenn **nicht über HTTP/2 verwendet**, leidet SSE unter einer Begrenzung der maximalen Anzahl offener Verbindungen, was vor allem beim Öffnen mehrerer Registerkarten schmerzlich sein kann, da das Limit _pro Browser_ gilt und auf eine sehr niedrige Zahl (6) gesetzt ist. Das Problem wurde als "Wird nicht behoben" in [Chrome](https://crbug.com/275955) und [Firefox](https://bugzil.la/906896) markiert. Dieses Limit gilt pro Browser + Domain, was bedeutet, dass Sie 6 SSE-Verbindungen über alle Registerkarten zu `www.example1.com` und weitere 6 SSE-Verbindungen zu `www.example2.com` öffnen können (laut [Stack Overflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). Bei Verwendung von HTTP/2 wird die maximale Anzahl gleichzeitiger _HTTP-Streams_ zwischen Server und Client ausgehandelt (standardmäßig 100).

## Senden von Ereignissen vom Server

Das serverseitige Skript, das Ereignisse sendet, muss mit dem MIME-Typ `text/event-stream` antworten. Jede Benachrichtigung wird als Textblock gesendet, der durch ein Paar von neuen Zeilen abgeschlossen wird. Einzelheiten zum Format des Ereignisstreams finden Sie unter [Event stream format](#event-stream-format).

Der {{Glossary("PHP", "PHP")}}-Code für das hier verwendete Beispiel folgt:

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

Der obige Code generiert jede Sekunde ein Ereignis mit dem Ereignistyp "ping". Die Daten jedes Ereignisses sind ein JSON-Objekt, das den ISO 8601-Zeitstempel enthält, der dem Zeitpunkt entspricht, zu dem das Ereignis generiert wurde. In zufälligen Abständen wird eine einfache Nachricht (ohne Ereignistyp) gesendet. Die Schleife wird unabhängig von der Verbindungsstatus weiterlaufen, weshalb eine Überprüfung enthalten ist, um die Schleife zu beenden, wenn die Verbindung geschlossen wurde (z.B. der Client schließt die Seite).

> [!NOTE]
> Sie finden ein vollständiges Beispiel, das den in diesem Artikel gezeigten Code verwendet, auf GitHub — siehe [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Fehlerbehandlung

Wenn Probleme auftreten (wie ein Netzwerk-Timeout oder Probleme im Zusammenhang mit [Zugriffskontrolle](/de/docs/Web/HTTP/CORS)), wird ein Fehlerereignis generiert. Sie können darauf programmatisch reagieren, indem Sie die `onerror`-Callback-Funktion im `EventSource`-Objekt implementieren:

```js
evtSource.onerror = (err) => {
  console.error("EventSource failed:", err);
};
```

## Schließen von Ereignisstreams

Standardmäßig, wenn die Verbindung zwischen dem Client und dem Server geschlossen wird, wird die Verbindung neu gestartet. Die Verbindung wird mit der `.close()`-Methode beendet.

```js
evtSource.close();
```

## Event-Stream-Format

Der Ereignisstream ist ein einfacher Textdatenstream, der mit {{Glossary("UTF-8", "UTF-8")}} codiert werden muss. Nachrichten im Ereignisstream sind durch ein Paar neue Zeilenzeichen getrennt. Ein Doppelpunkt als erstes Zeichen einer Zeile ist im Wesentlichen ein Kommentar und wird ignoriert.

> [!NOTE]
> Die Kommentarszeile kann verwendet werden, um das Timeout von Verbindungen zu verhindern; ein Server kann periodisch einen Kommentar senden, um die Verbindung aufrechtzuerhalten.

Jede Nachricht besteht aus einer oder mehreren Textzeilen, die die Felder für diese Nachricht auflisten. Jedes Feld wird durch den Feldnamen dargestellt, gefolgt von einem Doppelpunkt und den Textdaten für den Wert dieses Feldes.

### Felder

Jede empfangene Nachricht hat eine Kombination der folgenden Felder, eines pro Zeile:

- `event`
  - : Ein String, der den Typ des beschriebenen Ereignisses identifiziert. Wenn dies angegeben ist, wird im Browser ein Ereignis an den Listener für den angegebenen Ereignisnamen gesendet; der Quellcode der Website sollte `addEventListener()` verwenden, um auf benannte Ereignisse zu lauschen. Der `onmessage`-Handler wird aufgerufen, wenn kein Ereignisname für eine Nachricht angegeben ist.
- `data`
  - : Das Datenfeld für die Nachricht. Wenn die `EventSource` mehrere aufeinanderfolgende Zeilen empfängt, die mit `data:` beginnen, [fasst sie diese zusammen](https://html.spec.whatwg.org/multipage/#dispatchMessage) und fügt dazwischen ein neues Zeilenzeichen ein. Nachgestellte neue Zeilen werden entfernt.
- `id`
  - : Die Ereignis-ID, um den Wert der letzten Ereignis-ID des [`EventSource`](/de/docs/Web/API/EventSource)-Objekts festzulegen.
- `retry`
  - : Die Wiederverbindungszeit. Wenn die Verbindung zum Server verloren geht, wartet der Browser die angegebene Zeit, bevor er versucht, die Verbindung wiederherzustellen. Dies muss eine ganze Zahl sein, die die Wiederverbindungszeit in Millisekunden angibt. Wenn ein nicht-ganzzahliger Wert angegeben ist, wird das Feld ignoriert.

Alle anderen Feldnamen werden ignoriert.

> [!NOTE]
> Wenn eine Zeile keine Doppelpunkte enthält, wird die gesamte Zeile als Feldname mit einer leeren Wertzeichenfolge behandelt.

### Beispiele

#### Nachrichten nur mit Daten

Im folgenden Beispiel werden drei Nachrichten gesendet. Die erste ist nur ein Kommentar, da sie mit einem Doppelpunktzeichen beginnt. Wie bereits erwähnt, kann dies zweckmäßig als Mechanismus zur Standbyverbindung genutzt werden, wenn Nachrichten eventuell nicht regelmäßig gesendet werden.

Die zweite Nachricht enthält ein Datenfeld mit dem Wert "some text". Die dritte Nachricht enthält ein Datenfeld mit dem Wert "another message\nwith two lines". Beachten Sie das spezielle neue Zeilenzeichen im Wert.

```bash
: this is a test stream

data: some text

data: another message
data: with two lines
```

#### Benannte Ereignisse

Dieses Beispiel sendet benannte Ereignisse. Jedes hat einen Ereignisnamen, der durch das `event`-Feld angegeben ist, und ein `data`-Feld, dessen Wert ein geeigneter JSON-String mit den Daten ist, die der Client zum Agieren auf das Ereignis benötigt. Das `data`-Feld könnte natürlich auch beliebige Stringdaten enthalten; es muss kein JSON sein.

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

#### Mischen und Kombinieren

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
