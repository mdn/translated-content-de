---
title: Verwendung von server-sent events
slug: Web/API/Server-sent_events/Using_server-sent_events
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{DefaultAPISidebar("Server Sent Events")}}

Die Entwicklung einer Webanwendung, die [server-sent events](/de/docs/Web/API/Server-sent_events) verwendet, ist einfach. Sie benötigen ein wenig Code auf dem Server, um Ereignisse an das Frontend zu streamen, aber der Client-seitige Code funktioniert fast genauso wie bei [Websockets](/de/docs/Web/API/WebSockets_API) beim Umgang mit eingehenden Ereignissen. Dies ist eine Einwegverbindung, sodass Sie keine Ereignisse von einem Client an einen Server senden können.

## Empfangen von Ereignissen vom Server

Die Server-Sent Events API ist in der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle enthalten.

### Erstellen einer `EventSource`-Instanz

Um eine Verbindung zum Server zu öffnen und mit dem Empfang von Ereignissen zu beginnen, erstellen Sie ein neues `EventSource`-Objekt mit der URL eines Skripts, das die Ereignisse generiert. Zum Beispiel:

```js
const evtSource = new EventSource("ssedemo.php");
```

Wenn das Ereignisgenerator-Skript auf einem anderen Ursprung gehostet wird, sollte ein neues `EventSource`-Objekt sowohl mit der URL als auch mit einem Options-Dictionary erstellt werden. Zum Beispiel, vorausgesetzt, das Client-Skript befindet sich auf `example.com`:

```js
const evtSource = new EventSource("//api.example.com/ssedemo.php", {
  withCredentials: true,
});
```

### Hören auf `message`-Ereignisse

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

### Hören auf benutzerdefinierte Ereignisse

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

Dieser Code wird aufgerufen, wann immer der Server eine Nachricht mit dem `event`-Feld auf `ping` sendet; er parst dann das JSON im `data`-Feld und gibt diese Informationen aus.

> [!WARNING]
> Wenn **nicht über HTTP/2 verwendet**, leidet SSE unter einer Begrenzung der maximalen Anzahl offener Verbindungen, was insbesondere beim Öffnen mehrerer Tabs schmerzhaft sein kann, da das Limit _pro Browser_ festgelegt ist und auf eine sehr niedrige Zahl (6) gesetzt ist. Das Problem wurde in [Chrome](https://crbug.com/275955) und [Firefox](https://bugzil.la/906896) als "Wird nicht behoben" markiert. Dieses Limit gilt pro Browser + Domain, was bedeutet, dass Sie bis zu 6 SSE-Verbindungen über alle Tabs zu `www.example1.com` und weitere 6 SSE-Verbindungen zu `www.example2.com` öffnen können (gemäß [Stackoverflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). Bei Verwendung von HTTP/2 wird die maximale Anzahl gleichzeitiger _HTTP-Streams_ zwischen Server und Client ausgehandelt (Standard ist 100).

## Senden von Ereignissen vom Server

Das serverseitige Skript, das Ereignisse sendet, muss mit dem MIME-Typ `text/event-stream` antworten. Jede Benachrichtigung wird als Textblock gesendet, der mit einem Paar von Zeilenumbrüchen beendet wird. Details zum Format des Ereignisstreams finden Sie unter [Event stream format](#event_stream_format).

Der [PHP](/de/docs/Glossary/PHP)-Code für das Beispiel, das wir hier verwenden, lautet:

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

Der obige Code generiert jede Sekunde ein Ereignis vom Typ "ping". Die Daten jedes Ereignisses sind ein JSON-Objekt, das den ISO 8601-Zeitstempel enthält, der dem Zeitpunkt entspricht, zu dem das Ereignis erzeugt wurde. In zufälligen Intervallen wird eine einfache Nachricht (ohne Ereignistyp) gesendet. Die Schleife läuft unabhängig vom Verbindungsstatus weiter, daher ist eine Überprüfung enthalten, um die Schleife zu beenden, falls die Verbindung geschlossen wurde (z. B. wenn der Client die Seite schließt).

> [!NOTE]
> Ein vollständiges Beispiel, das den im Artikel gezeigten Code verwendet, finden Sie auf GitHub — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Fehlerbehandlung

Wenn Probleme auftreten (z. B. ein Netzwerk-Timeout oder Probleme im Zusammenhang mit der [Zugriffskontrolle](/de/docs/Web/HTTP/CORS)), wird ein Fehlerereignis generiert. Sie können programmgesteuert darauf reagieren, indem Sie den `onerror`-Callback auf dem `EventSource`-Objekt implementieren:

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

## Event Stream Format

Der Ereignisstream ist ein einfacher Strom von Textdaten, der mit [UTF-8](/de/docs/Glossary/UTF-8) codiert sein muss. Nachrichten im Ereignisstrom werden durch ein Paar von Zeilenumbrüchen getrennt. Ein Doppelpunkt als erstes Zeichen einer Zeile ist im Wesentlichen ein Kommentar und wird ignoriert.

> [!NOTE]
> Die Kommentierungszeile kann verwendet werden, um zu verhindern, dass Verbindungen zeitlich ablaufen; ein Server kann periodisch einen Kommentar senden, um die Verbindung aktiv zu halten.

Jede Nachricht besteht aus einer oder mehreren Zeilen Text, die die Felder für diese Nachricht auflisten. Jedes Feld wird durch den Feldnamen, gefolgt von einem Doppelpunkt und dem Textdatenwert für dieses Feld dargestellt.

### Felder

Jede empfangene Nachricht hat eine Kombination der folgenden Felder, eines pro Zeile:

- `event`
  - : Ein String, der den Typ des beschriebenen Ereignisses identifiziert. Wenn dies angegeben ist, wird im Browser ein Ereignis an den Listener für den angegebenen Ereignisnamen gesendet; der Quellcode der Website sollte `addEventListener()` verwenden, um auf benannte Ereignisse zu hören. Der `onmessage`-Handler wird aufgerufen, wenn kein Ereignisname für eine Nachricht angegeben ist.
- `data`
  - : Das Datenfeld für die Nachricht. Wenn die `EventSource` mehrere aufeinanderfolgende Zeilen empfängt, die mit `data:` beginnen, [konkateniert sie diese](https://html.spec.whatwg.org/multipage/#dispatchMessage), wobei zwischen jeder ein Zeilenumbruch eingefügt wird. Nachlaufende Zeilenumbrüche werden entfernt.
- `id`
  - : Die Ereignis-ID, die den letzten Ereignis-ID-Wert des [`EventSource`](/de/docs/Web/API/EventSource)-Objekts setzt.
- `retry`
  - : Die Wiederverbindungszeit. Wenn die Verbindung zum Server verloren geht, wartet der Browser die angegebene Zeit, bevor er versucht, sich erneut zu verbinden. Dies muss eine ganze Zahl sein, die die Wiederverbindungszeit in Millisekunden angibt. Wenn ein nicht ganzzahliger Wert angegeben wird, wird das Feld ignoriert.

Alle anderen Feldnamen werden ignoriert.

> [!NOTE]
> Wenn eine Zeile keinen Doppelpunkt enthält, wird die gesamte Zeile als Feldname mit einem leeren Wert-String behandelt.

### Beispiele

#### Nur-Daten-Nachrichten

Im folgenden Beispiel werden drei Nachrichten gesendet. Die erste ist nur ein Kommentar, da sie mit einem Doppelpunktzeichen beginnt. Wie bereits erwähnt, kann dies als Keep-Alive-Mechanismus nützlich sein, wenn Nachrichten möglicherweise nicht regelmäßig gesendet werden.

Die zweite Nachricht enthält ein Datenfeld mit dem Wert "some text". Die dritte Nachricht enthält ein Datenfeld mit dem Wert "another message\nwith two lines". Beachten Sie das spezielle Zeichen für den Zeilenumbruch im Wert.

```bash
: this is a test stream

data: some text

data: another message
data: with two lines
```

#### Benannte Ereignisse

Dieses Beispiel sendet benannte Ereignisse. Jedes hat einen Ereignisnamen, der durch das `event`-Feld angegeben wird, und ein `data`-Feld, dessen Wert ein entsprechender JSON-String mit den Daten ist, die der Client benötigt, um auf das Ereignis zu reagieren. Das `data`-Feld könnte natürlich auch beliebige Zeichenfolgendaten enthalten; es muss nicht JSON sein.

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
