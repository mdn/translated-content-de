---
title: Verwendung von servergesendeten Ereignissen
slug: Web/API/Server-sent_events/Using_server-sent_events
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{DefaultAPISidebar("Server Sent Events")}}

Die Entwicklung einer Webanwendung, die [servergesendete Ereignisse](/de/docs/Web/API/Server-sent_events) nutzt, ist unkompliziert. Sie benötigen etwas Code auf dem Server, um Ereignisse an das Frontend zu streamen, aber der Client-seitige Code funktioniert fast identisch wie bei [WebSockets](/de/docs/Web/API/WebSockets_API) im Teil der Behandlung eingehender Ereignisse. Dies ist eine Einwegverbindung, sodass Sie keine Ereignisse von einem Client an einen Server senden können.

## Empfang von Ereignissen vom Server

Die API für servergesendete Ereignisse ist in der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle enthalten.

### Erstellen einer `EventSource`-Instanz

Um eine Verbindung zum Server zu öffnen, um mit dem Empfang von Ereignissen zu beginnen, erstellen Sie ein neues `EventSource`-Objekt mit der URL eines Skripts, das die Ereignisse generiert. Zum Beispiel:

```js
const evtSource = new EventSource("ssedemo.php");
```

Wenn das Ereignisgenerator-Skript auf einem anderen Ursprung gehostet wird, sollte ein neues `EventSource`-Objekt mit sowohl der URL als auch einem Optionswörterbuch erstellt werden. Zum Beispiel, wenn das Client-Skript auf `example.com` ist:

```js
const evtSource = new EventSource("//api.example.com/ssedemo.php", {
  withCredentials: true,
});
```

### Lauschen auf `message`-Ereignisse

Nachrichten, die vom Server gesendet werden und kein [`event`](#event)-Feld haben, werden als `message`-Ereignisse empfangen. Um `message`-Ereignisse zu empfangen, hängen Sie einen Handler für das [`message`](/de/docs/Web/API/EventSource/message_event)-Ereignis an:

```js
evtSource.onmessage = (event) => {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");

  newElement.textContent = `message: ${event.data}`;
  eventList.appendChild(newElement);
};
```

Dieser Code hört auf eingehende `message`-Ereignisse und fügt den Nachrichtentext einer Liste im HTML-Dokument hinzu.

### Lauschen auf benutzerdefinierte Ereignisse

Nachrichten vom Server, die ein `event`-Feld definiert haben, werden als Ereignisse mit dem im `event` angegebenen Namen empfangen. Zum Beispiel:

{{code("ef5a59a")}}

Dieser Code wird aufgerufen, wann immer der Server eine Nachricht mit dem `event`-Feld `ping` sendet; er parst dann das JSON im `data`-Feld und gibt diese Information aus.

> [!WARNING]
> Wenn **nicht über HTTP/2 verwendet**, leidet SSE unter einer Begrenzung der maximalen Anzahl offener Verbindungen, was besonders schmerzhaft sein kann, wenn mehrere Tabs geöffnet werden, da das Limit _pro Browser_ gilt und auf eine sehr niedrige Zahl (6) festgesetzt ist. Das Problem wurde in [Chrome](https://crbug.com/275955) und [Firefox](https://bugzil.la/906896) als "Wird nicht behoben" markiert. Dieses Limit ist pro Browser + Domain, was bedeutet, dass Sie 6 SSE-Verbindungen über alle Tabs zu `www.example1.com` und weitere 6 SSE-Verbindungen zu `www.example2.com` öffnen können (laut [Stackoverflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). Bei der Nutzung von HTTP/2 wird die maximale Anzahl gleichzeitiger _HTTP-Streams_ zwischen dem Server und dem Client ausgehandelt (Standard ist 100).

## Senden von Ereignissen vom Server

Das serverseitige Skript, das Ereignisse sendet, muss mit dem MIME-Typ `text/event-stream` antworten. Jede Benachrichtigung wird als Textblock gesendet, der durch ein Paar von Zeilenumbrüchen beendet wird. Einzelheiten zum Format des Ereignisstreams finden Sie unter [Event stream format](#format_des_ereignisstreams).

Der [PHP](/de/docs/Glossary/PHP)-Code für das Beispiel, das wir hier verwenden, ist wie folgt:

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

Der obige Code erzeugt alle Sekunde ein Ereignis vom Typ "ping". Die Daten jedes Ereignisses sind ein JSON-Objekt, das den ISO 8601-Zeitstempel enthält, der der Uhrzeit entspricht, zu der das Ereignis generiert wurde. In zufälligen Abständen wird eine einfache Nachricht (ohne Ereignistyp) gesendet. Die Schleife läuft unabhängig vom Verbindungsstatus weiter, daher ist eine Prüfung enthalten, um die Schleife abzubrechen, wenn die Verbindung geschlossen wurde (z.B. der Client schließt die Seite).

> [!NOTE]
> Ein vollständiges Beispiel, das den in diesem Artikel gezeigten Code verwendet, finden Sie auf GitHub — siehe [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Fehlerbehandlung

Wenn Probleme auftreten (wie ein Netzwerk-Timeout oder Probleme im Zusammenhang mit [Zugriffskontrolle](/de/docs/Web/HTTP/CORS)), wird ein Fehlerereignis generiert. Sie können in diesem Fall programmgesteuert Maßnahmen ergreifen, indem Sie den `onerror`-Callback für das `EventSource`-Objekt implementieren:

```js
evtSource.onerror = (err) => {
  console.error("EventSource failed:", err);
};
```

## Schließen von Ereignisströmen

Standardmäßig wird die Verbindung automatisch neu gestartet, wenn die Verbindung zwischen Client und Server geschlossen wird. Die Verbindung wird mit der `.close()`-Methode beendet.

```js
evtSource.close();
```

## Format des Ereignisstreams

Der Ereignisstream ist ein einfacher Datenstrom von Textdaten, der mit [UTF-8](/de/docs/Glossary/UTF-8) codiert sein muss. Nachrichten im Ereignisstrom werden durch ein Paar von Zeilenumbruchzeichen getrennt. Ein Doppelpunkt als erstes Zeichen einer Zeile ist im Wesentlichen ein Kommentar und wird ignoriert.

> [!NOTE]
> Die Kommentarlinie kann verwendet werden, um zu verhindern, dass Verbindungen aufgrund von Zeitüberschreitungen unterbrochen werden; ein Server kann regelmäßig einen Kommentar senden, um die Verbindung aufrechtzuerhalten.

Jede Nachricht besteht aus einer oder mehreren Textzeilen, die die Felder für diese Nachricht auflisten. Jedes Feld wird durch den Feldnamen dargestellt, gefolgt von einem Doppelpunkt, gefolgt von den Textdaten für den Wert dieses Feldes.

### Felder

Jede empfangene Nachricht hat eine Kombination der folgenden Felder, eines pro Zeile:

- `event`
  - : Eine Zeichenfolge, die den Typ des beschriebenen Ereignisses identifiziert. Wenn dies angegeben ist, wird im Browser ein Ereignis an den Listener für den angegebenen Ereignisnamen gesendet; der Quellcode der Website sollte `addEventListener()` verwenden, um auf benannte Ereignisse zu hören. Der `onmessage`-Handler wird aufgerufen, wenn kein Ereignisname für eine Nachricht angegeben ist.
- `data`
  - : Das Datenfeld für die Nachricht. Wenn `EventSource` mehrere aufeinanderfolgende Zeilen empfängt, die mit `data:` beginnen, [konkateniert es diese](https://html.spec.whatwg.org/multipage/#dispatchMessage) und fügt zwischen jeder einen Zeilenumbruch ein. Nachlaufende Zeilenumbrüche werden entfernt.
- `id`
  - : Die Ereignis-ID, um den Wert der letzten Ereignis-ID des [`EventSource`](/de/docs/Web/API/EventSource)-Objekts festzulegen.
- `retry`
  - : Die Wiederverbindungszeit. Wenn die Verbindung zum Server verloren geht, wartet der Browser die angegebene Zeit, bevor er versucht, sich wieder zu verbinden. Dies muss eine Ganzzahl sein, die die Wiederverbindungszeit in Millisekunden angibt. Wenn ein nicht-ganzzahliger Wert angegeben wird, wird das Feld ignoriert.

Alle anderen Feldnamen werden ignoriert.

> [!NOTE]
> Wenn eine Zeile keinen Doppelpunkt enthält, wird die gesamte Zeile als Feldname mit einem leeren Wertstring behandelt.

### Beispiele

#### Nachrichten nur mit Daten

Im folgenden Beispiel werden drei Nachrichten gesendet. Die erste ist nur ein Kommentar, da sie mit einem Doppelpunktzeichen beginnt. Wie bereits erwähnt, kann dies nützlich sein als Mechanismus zur Aufrechterhaltung der Verbindung, wenn Nachrichten möglicherweise nicht regelmäßig gesendet werden.

Die zweite Nachricht enthält ein Datenfeld mit dem Wert "some text". Die dritte Nachricht enthält ein Datenfeld mit dem Wert "another message\nwith two lines". Beachten Sie das spezielle Zeichen für den Zeilenumbruch im Wert.

```bash
: this is a test stream

data: some text

data: another message
data: with two lines
```

#### Benannte Ereignisse

Dieses Beispiel sendet benannte Ereignisse. Jedes hat einen durch das `event`-Feld angegebenen Ereignisnamen und ein `data`-Feld, dessen Wert eine geeignete JSON-Zeichenfolge mit den Daten ist, die der Client benötigt, um auf das Ereignis zu reagieren. Das `data`-Feld könnte natürlich beliebige Zeichenfolgendaten enthalten; es muss nicht JSON sein.

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

Sie müssen nicht nur unbenannte Nachrichten oder typisierte Ereignisse verwenden; Sie können sie in einem einzigen Ereignisstrom zusammenmischen.

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
