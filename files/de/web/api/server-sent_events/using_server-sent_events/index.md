---
title: Verwendung von servergesendeten Ereignissen
slug: Web/API/Server-sent_events/Using_server-sent_events
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{DefaultAPISidebar("Server Sent Events")}}

Die Entwicklung einer Webanwendung, die [servergesendete Ereignisse](/de/docs/Web/API/Server-sent_events) verwendet, ist einfach. Sie benötigen ein wenig Code auf dem Server, um Ereignisse an das Front-End zu streamen, aber der Client-seitige Code funktioniert fast identisch wie bei [Websockets](/de/docs/Web/API/WebSockets_API) in Bezug auf die Behandlung eingehender Ereignisse. Dies ist eine Einwegverbindung, daher können Sie keine Ereignisse von einem Client an einen Server senden.

## Empfang von Ereignissen vom Server

Die API für servergesendete Ereignisse ist in der Schnittstelle {{domxref("EventSource")}} enthalten.

### Erstellen einer `EventSource`-Instanz

Um eine Verbindung zum Server zu öffnen, um Ereignisse von ihm zu empfangen, erstellen Sie ein neues `EventSource`-Objekt mit der URL eines Skripts, das die Ereignisse generiert. Zum Beispiel:

```js
const evtSource = new EventSource("ssedemo.php");
```

Wenn das ereigniserzeugende Skript auf einem anderen Ursprung gehostet wird, sollte ein neues `EventSource`-Objekt mit sowohl der URL als auch einem Optionswörterbuch erstellt werden. Zum Beispiel, vorausgesetzt, das Clientskript befindet sich auf `example.com`:

```js
const evtSource = new EventSource("//api.example.com/ssedemo.php", {
  withCredentials: true,
});
```

### Lauschen auf `message`-Ereignisse

Nachrichten, die vom Server gesendet werden und kein [`event`](#event)-Feld haben, werden als `message`-Ereignisse empfangen. Um Nachrichtenereignisse zu empfangen, fügen Sie einen Handler für das {{domxref("EventSource.message_event", "message")}}-Ereignis hinzu:

```js
evtSource.onmessage = (event) => {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");

  newElement.textContent = `message: ${event.data}`;
  eventList.appendChild(newElement);
};
```

Dieser Code lauscht auf eingehende Nachrichtenereignisse und hängt den Nachrichtentext an eine Liste im HTML-Dokument an.

### Lauschen auf benutzerdefinierte Ereignisse

Nachrichten vom Server, die ein definiertes `event`-Feld besitzen, werden als Ereignisse mit dem im `event` angegebenen Namen empfangen. Beispiel:

```js
evtSource.addEventListener("ping", (event) => {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");
  const time = JSON.parse(event.data).time;
  newElement.textContent = `ping at ${time}`;
  eventList.appendChild(newElement);
});
```

Dieser Code wird aufgerufen, wenn immer der Server eine Nachricht mit dem `event`-Feld auf `ping` gesetzt sendet; er analysiert dann das JSON im `data`-Feld und gibt diese Information aus.

> [!WARNING]
> Wenn **nicht über HTTP/2 verwendet**, leiden SSE unter einer Beschränkung der maximalen Anzahl offener Verbindungen, was besonders schmerzhaft sein kann, wenn mehrere Tabs geöffnet werden, da das Limit _pro Browser_ gilt und sehr niedrig (6) ist. Das Problem wurde in [Chrome](https://crbug.com/275955) und [Firefox](https://bugzil.la/906896) als "Wird nicht behoben" markiert. Dieses Limit ist pro Browser + Domain, das bedeutet, dass Sie 6 SSE-Verbindungen über alle Tabs hinweg zu `www.example1.com` und weitere 6 SSE-Verbindungen zu `www.example2.com` öffnen können (laut [Stackoverflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). Bei Verwendung von HTTP/2 wird die maximale Anzahl gleichzeitiger _HTTP-Streams_ zwischen dem Server und dem Client ausgehandelt (Standard sind 100).

## Ereignisse vom Server senden

Das Serverskript, das Ereignisse sendet, muss mit dem MIME-Typ `text/event-stream` antworten. Jede Benachrichtigung wird als Textblock gesendet, der durch ein Paar von Zeilenumbrüchen abgeschlossen wird. Einzelheiten zum Format des Ereignisstroms finden Sie unter [Ereignisstromformat](#ereignisstromformat).

Der Code in {{Glossary("PHP")}}, den wir hier verwenden, sieht folgendermaßen aus:

```php
date_default_timezone_set("America/New_York");
header("X-Accel-Buffering: no");
header("Content-Type: text/event-stream");
header("Cache-Control: no-cache");

$counter = rand(1, 10);
while (true) {
  // Jede Sekunde ein "ping"-Ereignis senden.

  echo "event: ping\n";
  $curDate = date(DATE_ISO8601);
  echo 'data: {"time": "' . $curDate . '"}';
  echo "\n\n";

  // Eine einfache Nachricht in zufälligen Abständen senden.

  $counter--;

  if (!$counter) {
    echo 'data: This is a message at time ' . $curDate . "\n\n";
    $counter = rand(1, 10);
  }

  if (ob_get_contents()) {
      ob_end_flush();
  }
  flush();

  // Schleife abbrechen, wenn der Client die Verbindung abgebrochen hat (Seite geschlossen)

  if (connection_aborted()) break;

  sleep(1);
}
```

Der obige Code generiert jede Sekunde ein Ereignis mit dem Ereignistyp "ping". Die Daten jedes Ereignisses sind ein JSON-Objekt, das den ISO-8601-Zeitstempel enthält, der der Zeit entspricht, zu der das Ereignis generiert wurde. In zufälligen Intervallen wird eine einfache Nachricht (ohne Ereignistyp) gesendet. Die Schleife läuft unabhängig vom Verbindungsstatus weiter, daher ist eine Überprüfung integriert, um die Schleife zu beenden, falls die Verbindung geschlossen wurde (z. B. wenn der Client die Seite schließt).

> [!NOTE]
> Sie können ein vollständiges Beispiel, das den in diesem Artikel gezeigten Code verwendet, auf GitHub finden — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Fehlerbehandlung

Wenn Probleme auftreten (z.B. ein Netzwerkzeitüberschreitung oder Probleme im Zusammenhang mit [Zugriffskontrolle](/de/docs/Web/HTTP/CORS)), wird ein Fehlerereignis generiert. Sie können darauf programmatisch reagieren, indem Sie die `onerror`-Rückruffunktion auf dem `EventSource`-Objekt implementieren:

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

## Ereignisstromformat

Der Ereignisstrom ist ein einfacher Textdatenstrom, der mit [UTF-8](/de/docs/Glossary/UTF-8) kodiert sein muss. Nachrichten im Ereignisstrom sind durch ein Paar von Zeilenumbrüchen getrennt. Ein Doppelpunkt als erstes Zeichen einer Zeile ist im Grunde ein Kommentar und wird ignoriert.

> [!NOTE]
> Die Kommentarlinie kann verwendet werden, um Zeitüberschreitungen zu verhindern; ein Server kann regelmäßig einen Kommentar senden, um die Verbindung am Leben zu halten.

Jede Nachricht besteht aus einer oder mehreren Textzeilen, die die Felder für diese Nachricht auflisten. Jedes Feld wird durch den Feldnamen, gefolgt von einem Doppelpunkt und den Textdaten für den Wert dieses Feldes dargestellt.

### Felder

Jede empfangene Nachricht hat eine Kombination der folgenden Felder, jeweils eins pro Zeile:

- `event`
  - : Ein String, der den Typ des beschriebenen Ereignisses identifiziert. Wenn dies angegeben ist, wird ein Ereignis im Browser an den Listener für den angegebenen Ereignisnamen gesendet; der Website-Quellcode sollte `addEventListener()` verwenden, um auf benannte Ereignisse zu hören. Der `onmessage`-Handler wird aufgerufen, wenn für eine Nachricht kein Ereignisname angegeben ist.
- `data`
  - : Das Datenfeld für die Nachricht. Wenn die `EventSource` mehrere aufeinanderfolgende Zeilen empfängt, die mit `data:` beginnen, [verknüpft sie diese](https://html.spec.whatwg.org/multipage/#dispatchMessage) und fügt ein Zeilenumbruch-Zeichen zwischen jeder ein. Nachfolgende Zeilenumbrüche werden entfernt.
- `id`
  - : Die Ereignis-ID, um den letzten Ereignis-ID-Wert des [`EventSource`](/de/docs/Web/API/EventSource)-Objekts festzulegen.
- `retry`
  - : Die Wiederverbindungszeit. Wenn die Verbindung zum Server unterbrochen wird, wartet der Browser die angegebene Zeit, bevor er versucht, sich erneut zu verbinden. Dies muss eine ganze Zahl sein, die die Wiederverbindungszeit in Millisekunden angibt. Wenn ein nicht-ganzzahliger Wert angegeben wird, wird das Feld ignoriert.

Alle anderen Feldnamen werden ignoriert.

> [!NOTE]
> Wenn eine Zeile keinen Doppelpunkt enthält, wird die ganze Zeile als Feldname mit einer leeren Wertzeichenkette behandelt.

### Beispiele

#### Nur-Daten-Nachrichten

Im folgenden Beispiel werden drei Nachrichten gesendet. Die erste ist nur ein Kommentar, da sie mit einem Doppelpunkt beginnt. Wie bereits erwähnt, kann dies als Keep-Alive-Mechanismus nützlich sein, wenn Nachrichten nicht regelmäßig gesendet werden.

Die zweite Nachricht enthält ein Datenfeld mit dem Wert "some text". Die dritte Nachricht enthält ein Datenfeld mit dem Wert "another message\nwith two lines". Beachten Sie das spezielle Zeilenumbruch-Zeichen im Wert.

```bash
: this is a test stream

data: some text

data: another message
data: with two lines
```

#### Benannte Ereignisse

Dieses Beispiel sendet benannte Ereignisse. Jedes hat einen Ereignisnamen, der durch das `event`-Feld angegeben ist, und ein `data`-Feld, dessen Wert ein angemessener JSON-String mit den erforderlichen Daten ist, damit der Client auf das Ereignis reagieren kann. Das `data`-Feld könnte natürlich jede Zeichenfolge enthalten; es muss nicht JSON sein.

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

Sie müssen nicht nur unbenannte Nachrichten oder typisierte Ereignisse verwenden; Sie können sie in einem einzigen Ereignisstrom miteinander mischen.

```bash
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

data: Here's a system message of some kind that will get used
data: to accomplish some task.

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}
```

## Kompatibilität mit Browsern

{{Compat}}
