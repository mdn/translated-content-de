---
title: Synchrone und asynchrone Anfragen
slug: Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

[`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt sowohl synchrone als auch asynchrone Kommunikation. Im Allgemeinen sollten jedoch aus Leistungsgründen asynchrone Anfragen gegenüber synchronen Anfragen bevorzugt werden.

Synchrone Anfragen blockieren die Ausführung von Code, was zu einem "Einfrieren" auf dem Bildschirm und einer nicht reagierenden Benutzeroberfläche führt.

## Asynchrone Anfrage

Wenn Sie einen asynchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwenden, erhalten Sie einen Rückruf, wenn die Daten empfangen wurden. Dadurch kann der Browser normal weiterarbeiten, während Ihre Anfrage bearbeitet wird.

### Beispiel: Eine Datei im Konsolenprotokoll ausgeben

Dies ist die einfachste Nutzung eines asynchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

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

Die `xhr.open`-Zeile gibt `true` als dritten Parameter an, um anzuzeigen, dass die Anfrage asynchron bearbeitet werden soll.

Wir erstellen dann ein Event-Handler-Funktionsobjekt und weisen es dem `onload`-Attribut der Anfrage zu. Dieser Handler überprüft den `readyState` der Anfrage, um festzustellen, ob die Transaktion abgeschlossen ist; falls ja, und der HTTP-Status 200 ist, gibt der Handler den empfangenen Inhalt aus. Wenn ein Fehler aufgetreten ist, wird eine Fehlermeldung angezeigt.

Der `xhr.send`-Aufruf initiiert tatsächlich die Anfrage. Die Rückruf-Routine wird aufgerufen, wann immer sich der Status der Anfrage ändert.

### Beispiel: Eine Funktion zum Lesen einer externen Datei schreiben

In einigen Fällen müssen Sie viele externe Dateien lesen. Dies ist eine Standardfunktion, die das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt asynchron verwendet, um den Inhalt der gelesenen Datei an einen angegebenen Listener zu übergeben.

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

Die Signatur der Hilfsfunktion **_loadFile_** deklariert (i) eine Ziel-URL zum Lesen (über einen HTTP-GET-Aufruf), (ii) eine Funktion, die bei erfolgreichem Abschluss der XHR-Operation ausgeführt wird, und (iii) eine beliebige Liste zusätzlicher Argumente, die durch das XHR-Objekt (über die `arguments`-Eigenschaft) an die Erfolgs-Rückruffunktion übergeben werden.

Zuerst deklarieren wir eine Funktion `xhrSuccess`, die aufgerufen wird, wenn die XHR-Operation erfolgreich abgeschlossen ist. Sie ruft wiederum die Rückruffunktion auf, die im Aufruf der `loadFile`-Funktion angegeben ist (in diesem Fall die Funktion `showMessage`), die einer Eigenschaft des XHR-Objekts zugewiesen wurde. Die zusätzlichen Argumente (falls vorhanden), die beim Aufruf der Funktion loadFile angegeben wurden, werden dem Ausführen der Rückruffunktion "hinzugefügt". Die Funktion `xhrError` wird aufgerufen, wenn die XHR-Operation nicht erfolgreich abgeschlossen werden kann.

Wir speichern den erfolgreichen Rückruf, der als zweites Argument an `loadFile` übergeben wurde, in der `callback`-Eigenschaft des XHR-Objekts. Ab dem dritten Argument werden alle verbleibenden Argumente von `loadFile` gesammelt (unter Verwendung der [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-Syntax), der `arguments`-Eigenschaft der Variablen `xhr` zugewiesen, an die Erfolgs-Rückruffunktion `xhrSuccess` übergeben und letztendlich der Rückruffunktion (in diesem Fall `showMessage`) bereitgestellt, die von der Funktion `xhrSuccess` aufgerufen wird.

Der `xhr.open`-Aufruf gibt `true` als dritten Parameter an, um anzuzeigen, dass die Anfrage asynchron bearbeitet werden soll.

Schließlich initiiert `xhr.send` tatsächlich die Anfrage.

### Beispiel: Verwenden eines Timeouts

Sie können ein Timeout verwenden, um zu verhindern, dass Ihr Code hängt, während auf das Ende eines Lesevorgangs gewartet wird. Dies geschieht, indem der Wert der `timeout`-Eigenschaft des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts gesetzt wird, wie im folgenden Code gezeigt:

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

Beachten Sie die Hinzufügung von Code zum Umgang mit dem "timeout"-Ereignis durch Einrichten des `ontimeout`-Handlers.

Verwendung:

```js
function showMessage(message) {
  console.log(`${message} ${this.responseText}`);
}

loadFile("message.txt", 2000, showMessage, "New message!\n");
```

Hier legen wir ein Timeout von 2000 ms fest.

## Synchrone Anfrage

> [!WARNING]
> Synchrone XHR-Anfragen verursachen häufig Hänger im Web, insbesondere bei schlechten Netzwerkbedingungen oder wenn der Remote-Server langsam antwortet. Synchrone XHR ist jetzt veraltet und sollte zugunsten asynchroner Anfragen vermieden werden.

Alle neuen XHR-Funktionen wie `timeout` oder `abort` sind für synchrone XHR nicht erlaubt. Ein entsprechender Versuch führt zu einem `InvalidAccessError`.

### Beispiel: HTTP-synchrone Anfrage

Dieses Beispiel zeigt, wie man eine einfache synchrone Anfrage durchführt.

```js
const request = new XMLHttpRequest();
request.open("GET", "/bar/foo.txt", false); // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
}
```

Der `request.send`-Aufruf sendet die Anfrage. Der `null`-Parameter zeigt an, dass für die `GET`-Anfrage kein Nachrichtentext benötigt wird.

Die `if`-Anweisung überprüft den Statuscode, nachdem die Transaktion abgeschlossen ist. Wenn das Ergebnis 200 ist — HTTPs "OK"-Ergebnis — wird der Textinhalt des Dokuments in der Konsole ausgegeben.

### Beispiel: Synchrone HTTP-Anfrage von einem Worker

Einer der wenigen Fälle, in denen eine synchrone Anfrage die Ausführung nicht blockiert, ist die Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) innerhalb eines [`Worker`](/de/docs/Web/API/Worker).

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
> Der Effekt ist asynchron aufgrund der Nutzung des `Worker`.

Dieses Muster kann nützlich sein, zum Beispiel um im Hintergrund mit dem Server zu interagieren oder um Inhalte vorzuladen. Siehe [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) für Beispiele und Details.

### Anpassung von Sync-XHR-Anwendungsfällen an die Beacon API

Es gibt einige Fälle, in denen die synchrone Nutzung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) nicht ersetzbar ist, wie während der [`unload`](/de/docs/Web/API/Window/unload_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) und [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignisse. Sie sollten in Betracht ziehen, die `fetch()`-API mit dem `keepalive`-Flag zu verwenden. Wenn `fetch` mit `keepalive` nicht verfügbar ist, können Sie die [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)-API in Betracht ziehen, die diese Anwendungsfälle unterstützen und gleichzeitig typischerweise ein gutes Benutzererlebnis bieten kann.

Das folgende Beispiel zeigt theoretischen Analytik-Code, der versucht, Daten an einen Server zu senden, indem er eine synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) in einem `unload`-Handler verwendet. Dies führt dazu, dass das Entladen der Seite verzögert wird.

```js
window.addEventListener("unload", logData, false);

function logData() {
  const client = new XMLHttpRequest();
  client.open("POST", "/log", false); // third parameter indicates sync xhr. :(
  client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  client.send(analyticsData);
}
```

Durch die Verwendung der **`sendBeacon()`**-Methode werden die Daten asynchron an den Webserver übertragen, wenn der User Agent die Gelegenheit dazu hat, **ohne das Entladen zu verzögern oder die Leistung der nächsten Navigation zu beeinträchtigen.**

Das folgende Beispiel zeigt ein theoretisches Analytik-Codemuster, das Daten an einen Server sendet, indem die **`sendBeacon()`**-Methode verwendet wird.

```js
window.addEventListener("unload", logData, false);

function logData() {
  navigator.sendBeacon("/log", analyticsData);
}
```

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [`navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon)
