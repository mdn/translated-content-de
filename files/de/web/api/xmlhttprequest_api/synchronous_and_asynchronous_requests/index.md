---
title: Synchrone und asynchrone Anfragen
slug: Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

[`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt sowohl synchrone als auch asynchrone Kommunikation. Im Allgemeinen sollten jedoch asynchrone Anfragen aus Leistungsgründen den synchronen Anfragen vorgezogen werden.

Synchrone Anfragen blockieren die Ausführung von Code, was zu einem "Einfrieren" des Bildschirms und einer nicht reagierenden Benutzererfahrung führt.

## Asynchrone Anfrage

Wenn Sie einen asynchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwenden, erhalten Sie einen Rückruf, wenn die Daten empfangen wurden. Dies ermöglicht es dem Browser, normal weiterzuarbeiten, während Ihre Anfrage bearbeitet wird.

### Beispiel: Eine Datei im Konsolenprotokoll senden

Dies ist die einfachste Verwendung des asynchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

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

In der Zeile `xhr.open` wird für den dritten Parameter `true` angegeben, um anzuzeigen, dass die Anfrage asynchron behandelt werden soll.

Wir erstellen dann ein Funktionsobjekt als Ereignishandler und weisen es dem Attribut `onload` der Anfrage zu. Dieser Handler prüft den `readyState` der Anfrage, um festzustellen, ob die Transaktion abgeschlossen ist; wenn ja, und der HTTP-Status 200 ist, gibt der Handler den empfangenen Inhalt aus. Tritt ein Fehler auf, wird eine Fehlermeldung angezeigt.

Der `xhr.send`-Aufruf startet tatsächlich die Anfrage. Die Rückrufroutine wird aufgerufen, wann immer sich der Status der Anfrage ändert.

### Beispiel: Eine Funktion zum Lesen einer externen Datei schreiben

In einigen Fällen müssen Sie viele externe Dateien lesen. Dies ist eine Standardfunktion, die das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt asynchron verwendet, um den Inhalt der gelesenen Datei an einen angegebenen Listener weiterzuleiten.

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

Die Signatur der Dienstprogrammfunktion **_loadFile_** erklärt (i) eine Ziel-URL zum Lesen (über eine HTTP-GET-Anfrage), (ii) eine Funktion, die bei erfolgreichem Abschluss der XHR-Operation ausgeführt werden soll, und (iii) eine beliebige Liste zusätzlicher Argumente, die über das XHR-Objekt (über die `arguments`-Eigenschaft) an die Erfolgsrückruffunktion übergeben werden.

Wir deklarieren zuerst eine Funktion `xhrSuccess`, die bei erfolgreichem Abschluss der XHR-Operation aufgerufen wird. Sie ruft wiederum die Rückruffunktion auf, die bei der Ausführung der `loadFile`-Funktion angegeben wurde (in diesem Fall die Funktion `showMessage`), die einem Attribut des XHR-Objekts zugewiesen wurde. Die zusätzlichen Argumente (falls vorhanden), die bei der Ausführung der Funktion `loadFile` angegeben werden, werden während der Ausführung der Rückruffunktion "angewendet". Die Funktion `xhrError` wird aufgerufen, wenn die XHR-Operation nicht erfolgreich abgeschlossen wird.

Wir speichern den als zweites Argument an `loadFile` übergebenen Erfolgscallback in der Eigenschaft `callback` des XHR-Objekts. Beginnend mit dem dritten Argument werden alle verbleibenden Argumente von `loadFile` gesammelt (unter Verwendung der [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-Syntax), der Eigenschaft `arguments` der Variablen `xhr` zugewiesen, an die Erfolgsrückruffunktion `xhrSuccess` übergeben und letztendlich an die Rückruffunktion (in diesem Fall `showMessage`) weitergereicht, die von der Funktion `xhrSuccess` aufgerufen wird.

Der `xhr.open`-Aufruf gibt `true` für seinen dritten Parameter an, um anzuzeigen, dass die Anfrage asynchron behandelt werden soll.

Schließlich initiiert `xhr.send` tatsächlich die Anfrage.

### Beispiel: Verwendung eines Zeitlimits

Sie können ein Zeitlimit verwenden, um zu verhindern, dass Ihr Code hängen bleibt, während auf das Ende eines Lesevorgangs gewartet wird. Dies wird erreicht, indem der Wert der `timeout`-Eigenschaft des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts festgelegt wird, wie im folgenden Code gezeigt:

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

Beachten Sie die Hinzufügung von Code zur Bearbeitung des "timeout"-Ereignisses durch Festlegen des `ontimeout`-Handlers.

Verwendung:

```js
function showMessage(message) {
  console.log(`${message} ${this.responseText}`);
}

loadFile("message.txt", 2000, showMessage, "New message!\n");
```

Hier legen wir ein Zeitlimit von 2000 ms fest.

## Synchrone Anfrage

> [!WARNING]
> Synchrone XHR-Anfragen verursachen häufig Hänger im Web, insbesondere bei schlechten Netzwerkbedingungen oder wenn der entfernte Server langsam reagiert. Synchrone XHR ist jetzt veraltet und sollte zugunsten asynchroner Anfragen vermieden werden.

Alle neuen XHR-Funktionen wie `timeout` oder `abort` sind für synchrone XHR nicht erlaubt. Andernfalls wird ein `InvalidAccessError` ausgelöst.

### Beispiel: HTTP-synchrone Anfrage

Dieses Beispiel demonstriert, wie eine einfache synchrone Anfrage erstellt wird.

```js
const request = new XMLHttpRequest();
request.open("GET", "/bar/foo.txt", false); // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
}
```

Der `request.send`-Aufruf sendet die Anfrage. Der Parameter `null` gibt an, dass kein Body-Inhalt für die `GET`-Anfrage benötigt wird.

Die `if`-Anweisung überprüft den Statuscode nach Abschluss der Transaktion. Wenn das Ergebnis 200 ist — das "OK"-Ergebnis von HTTP — wird der Textinhalt des Dokuments in der Konsole ausgegeben.

### Beispiel: Synchrone HTTP-Anfrage aus einem Worker

Einer der wenigen Fälle, in denen eine synchrone Anfrage normalerweise nicht die Ausführung blockiert, ist die Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) innerhalb eines [`Worker`](/de/docs/Web/API/Worker).

**`example.html`** (die Hauptseite):

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>MDN Example</title>
    <script>
      const worker = new Worker("myTask.js");
      worker.onmessage = (event) => {
        alert(`Worker said: ${event.data}`);
      };

      worker.postMessage("Hello");
    </script>
  </head>
  <body>
    …
  </body>
</html>
```

**`myFile.txt`** (das Ziel der synchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Ausführung):

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
> Der Effekt ist asynchron, aufgrund der Verwendung des `Worker`.

Dieses Muster kann nützlich sein, beispielsweise um im Hintergrund mit dem Server zu interagieren oder um Inhalte vorzuladen. Weitere Beispiele und Details finden Sie unter [Using web workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers).

### Anpassen von Sync XHR Anwendungsfällen an die Beacon API

Es gibt einige Fälle, in denen die synchrone Nutzung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) nicht ersetzbar ist, wie während der [`unload`](/de/docs/Web/API/Window/unload_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) und [`pagehide`](/de/docs/Web/API/Window/pagehide_event) Ereignisse. Sie sollten in Betracht ziehen, die `fetch()` API mit dem `keepalive`-Flag zu verwenden. Wenn `fetch` mit `keepalive` nicht verfügbar ist, können Sie in Erwägung ziehen, die [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) API zu verwenden, die diese Anwendungsfälle unterstützen kann, während sie typischerweise eine gute Benutzererfahrung bietet.

Das folgende Beispiel zeigt theoretischen Analytikcode, der versucht, Daten an einen Server zu senden, indem ein synchrones [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) in einem unload-Handler verwendet wird. Dies führt dazu, dass das Entladen der Seite verzögert wird.

```js
window.addEventListener("unload", logData, false);

function logData() {
  const client = new XMLHttpRequest();
  client.open("POST", "/log", false); // third parameter indicates sync xhr. :(
  client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  client.send(analyticsData);
}
```

Durch die Verwendung der **`sendBeacon()`**-Methode werden die Daten asynchron an den Webserver übertragen, wenn der User-Agent die Gelegenheit dazu hat, **ohne das Entladen zu verzögern oder die Leistung der nächsten Navigation zu beeinträchtigen.**

Das folgende Beispiel zeigt ein theoretisches Analytik-Code-Muster, das Daten an einen Server sendet, indem die **`sendBeacon()`**-Methode verwendet wird.

```js
window.addEventListener("unload", logData, false);

function logData() {
  navigator.sendBeacon("/log", analyticsData);
}
```

## Siehe auch

- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [`navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon)
