---
title: Synchrone und asynchrone Anfragen
slug: Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

[`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt sowohl synchrone als auch asynchrone Kommunikation. Im Allgemeinen sollten jedoch asynchrone Anfragen aus Leistungsgründen gegenüber synchronen Anfragen bevorzugt werden.

Synchrone Anfragen blockieren die Ausführung von Code, was zu einem "Einfrieren" auf dem Bildschirm und einer nicht reagierenden Benutzererfahrung führt.

## Asynchrone Anfrage

Wenn Sie eine asynchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwenden, erhalten Sie einen Rückruf, wenn die Daten empfangen wurden. Dadurch kann der Browser normal weiterarbeiten, während Ihre Anfrage bearbeitet wird.

### Beispiel: Eine Datei im Konsolenprotokoll ausgeben

Dies ist die einfachste Verwendung von asynchronem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/bar/foo.txt", true);
xhr.onload = (e) => {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = (e) => {
  console.error(xhr.statusText);
};
xhr.send(null);
```

Die `xhr.open`-Zeile gibt `true` als dritten Parameter an, um anzuzeigen, dass die Anfrage asynchron behandelt werden soll.

Wir erstellen dann ein Event-Handler-Funktionsobjekt und weisen es dem `onload`-Attribut der Anfrage zu. Dieser Handler überprüft den `readyState` der Anfrage, um festzustellen, ob die Transaktion abgeschlossen ist; falls ja und der HTTP-Status 200 ist, gibt der Handler den empfangenen Inhalt aus. Bei einem Fehler wird eine Fehlermeldung angezeigt.

Der `xhr.send`-Aufruf initiiert tatsächlich die Anfrage. Die Rückrufroutine wird immer dann aufgerufen, wenn sich der Status der Anfrage ändert.

### Beispiel: Schreiben einer Funktion zum Lesen einer externen Datei

In einigen Fällen müssen Sie viele externe Dateien lesen. Dies ist eine Standardfunktion, die das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt asynchron verwendet, um den Inhalt der gelesenen Datei zu einem angegebenen Listener zu schalten.

```js
function xhrSuccess() {
  this.callback(...this.arguments);
}

function xhrError() {
  console.error(this.statusText);
}

function loadFile(url, callback, ...args) {
  const xhr = new XMLHttpRequest();
  xhr.callback = callback;
  xhr.arguments = args;
  xhr.onload = xhrSuccess;
  xhr.onerror = xhrError;
  xhr.open("GET", url, true);
  xhr.send(null);
}
```

Verwendung:

```js
function showMessage(message) {
  console.log(`${message} ${this.responseText}`);
}

loadFile("message.txt", showMessage, "New message!\n\n");
```

Die Signatur der Dienstprogrammfunktion **_loadFile_** gibt (i) eine Ziel-URL zum Lesen (über eine HTTP-GET-Anfrage), (ii) eine Funktion zur Ausführung bei erfolgreichem Abschluss der XHR-Operation und (iii) eine beliebige Liste zusätzlicher Argumente an, die über das XHR-Objekt (über die `arguments`-Eigenschaft) an die Erfolgs-Rückruffunktion übergeben werden.

Zuerst deklarieren wir eine Funktion `xhrSuccess`, die aufgerufen wird, wenn die XHR-Operation erfolgreich abgeschlossen wird. Sie ruft wiederum die Rückruffunktion auf, die bei der Aufruf der `loadFile`-Funktion (in diesem Fall die Funktion `showMessage`) angegeben wurde und die einer Eigenschaft des XHR-Objekts zugewiesen wurde. Die zusätzlichen Argumente (falls vorhanden), die beim Aufruf der Funktion `loadFile` übergeben wurden, werden auf die Ausführung der Rückruffunktion "angewendet". Die Funktion `xhrError` wird aufgerufen, wenn die XHR-Operation nicht erfolgreich abgeschlossen wird.

Wir speichern den Erfolgs-Rückruf, der als zweites Argument an `loadFile` übergeben wird, in der `callback`-Eigenschaft des XHR-Objekts. Ab dem dritten Argument werden alle verbleibenden Argumente von `loadFile` gesammelt (unter Verwendung der [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-Syntax), der `arguments`-Eigenschaft der Variablen `xhr` zugewiesen, an die Erfolgs-Rückruffunktion `xhrSuccess` übergeben und letztendlich an die Rückruffunktion weitergegeben (in diesem Fall `showMessage`), die von der Funktion `xhrSuccess` aufgerufen wird.

Der `xhr.open`-Aufruf gibt `true` für seinen dritten Parameter an, um anzuzeigen, dass die Anfrage asynchron behandelt werden soll.

Schließlich initiiert `xhr.send` tatsächlich die Anfrage.

### Beispiel: Verwendung eines Timeouts

Sie können ein Timeout verwenden, um zu verhindern, dass Ihr Code hängen bleibt, während er auf das Beenden eines Lesevorgangs wartet. Dies geschieht durch Festlegen des Werts der `timeout`-Eigenschaft auf dem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt, wie im folgenden Code gezeigt:

```js
function loadFile(url, timeout, callback, ...args) {
  const xhr = new XMLHttpRequest();
  xhr.ontimeout = () => {
    console.error(`The request for ${url} timed out.`);
  };
  xhr.onload = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback.apply(xhr, args);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.timeout = timeout;
  xhr.send(null);
}
```

Beachten Sie die hinzugefügte Codezeile zur Behandlung des "timeout"-Ereignisses durch Festlegen des `ontimeout`-Handlers.

Verwendung:

```js
function showMessage(message) {
  console.log(`${message} ${this.responseText}`);
}

loadFile("message.txt", 2000, showMessage, "New message!\n");
```

Hier geben wir ein Timeout von 2000 ms an.

## Synchrone Anfrage

> [!WARNING]
> Synchrone XHR-Anfragen verursachen häufig Verzögerungen im Web, insbesondere bei schlechten Netzwerkbedingungen oder wenn der entfernte Server langsam reagiert. Synchronous XHR ist jetzt veraltet und sollte zugunsten von asynchronen Anfragen vermieden werden.

Alle neuen XHR-Funktionen wie `timeout` oder `abort` sind für synchrone XHR nicht zulässig. Bei Missachtung wird ein `InvalidAccessError` ausgelöst.

### Beispiel: HTTP-synchrone Anfrage

Dieses Beispiel demonstriert, wie eine einfache synchrone Anfrage durchgeführt wird.

```js
const request = new XMLHttpRequest();
request.open("GET", "/bar/foo.txt", false); // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
}
```

Der `request.send`-Aufruf sendet die Anfrage. Der Parameter `null` gibt an, dass für die `GET`-Anfrage kein Nachrichtentext benötigt wird.

Die `if`-Anweisung überprüft den Statuscode, nachdem die Transaktion abgeschlossen ist. Wenn das Ergebnis 200 ist — das "OK"-Ergebnis von HTTP — wird der Textinhalt des Dokuments in die Konsole ausgegeben.

### Beispiel: Synchrone HTTP-Anfrage von einem Worker

Einer der wenigen Fälle, in denen eine synchrone Anfrage normalerweise nicht die Ausführung blockiert, ist die Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) innerhalb eines [`Workers`](/de/docs/Web/API/Worker).

**`example.js`** (Skript, das auf der Hauptseite aufgerufen werden soll):

```js
const worker = new Worker("myTask.js");
worker.onmessage = (event) => {
  console.log(`Worker said: ${event.data}`);
};

worker.postMessage("Hello");
```

**`myFile.txt`** (das Ziel der synchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Aufruf):

```plain
Hello World!!
```

**`myTask.js`** (der [`Worker`](/de/docs/Web/API/Worker)):

```js
self.onmessage = (event) => {
  if (event.data === "Hello") {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "myFile.txt", false); // synchronous request
    xhr.send(null);
    self.postMessage(xhr.responseText);
  }
};
```

> [!NOTE]
> Der Effekt ist asynchron aufgrund der Verwendung des `Worker`.

Dieses Muster kann nützlich sein, um beispielsweise mit dem Server im Hintergrund zu interagieren oder Inhalte vorzuladen. Siehe [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) für Beispiele und Details.

### Anpassen von Sync-XHR-Anwendungsfällen an die Beacon API

Es gibt einige Fälle, in denen die synchrone Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) nicht ersetzt werden kann, wie während der [`unload`](/de/docs/Web/API/Window/unload_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) und [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignisse. Sie sollten erwägen, die `fetch()`-API mit dem `keepalive`-Flag zu verwenden. Wenn `fetch` mit `keepalive` nicht verfügbar ist, können Sie die [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)-API in Betracht ziehen, die diese Anwendungsfälle unterstützen kann und dabei typischerweise ein gutes Benutzererlebnis bietet.

Das folgende Beispiel zeigt theoretischen Analytik-Code, der versucht, Daten an einen Server zu übermitteln, indem ein synchroner [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) in einem Unload-Handler verwendet wird. Dies führt dazu, dass das Entladen der Seite verzögert wird.

```js
window.addEventListener("unload", logData);

function logData() {
  const client = new XMLHttpRequest();
  client.open("POST", "/log", false); // third parameter indicates sync xhr. :(
  client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  client.send(analyticsData);
}
```

Durch die Verwendung der **`sendBeacon()`**-Methode werden die Daten asynchron an den Webserver übertragen, wenn der Benutzeragent die Möglichkeit dazu hatte, **ohne das Entladen zu verzögern oder die Leistung der nächsten Navigation zu beeinflussen.**

Das folgende Beispiel zeigt ein theoretisches Analytik-Code-Muster, das Daten an einen Server übermittelt, indem die **`sendBeacon()`**-Methode verwendet wird.

```js
window.addEventListener("unload", logData);

function logData() {
  navigator.sendBeacon("/log", analyticsData);
}
```

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [`navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon)
