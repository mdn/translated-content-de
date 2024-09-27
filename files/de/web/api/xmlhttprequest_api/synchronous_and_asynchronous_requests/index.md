---
title: Synchrone und asynchrone Anfragen
slug: Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

[`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt sowohl synchrone als auch asynchrone Kommunikation. Im Allgemeinen sollten jedoch asynchrone Anfragen den synchronen Anfragen aus Leistungsgründen vorgezogen werden.

Synchrone Anfragen blockieren die Ausführung des Codes, was zu einem "Einfrieren" auf dem Bildschirm und einer nicht reagierenden Benutzererfahrung führt.

## Asynchrone Anfrage

Wenn Sie ein asynchrones [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwenden, erhalten Sie einen Rückruf, wenn die Daten empfangen wurden. Dadurch kann der Browser weiter normal arbeiten, während Ihre Anfrage bearbeitet wird.

### Beispiel: Eine Datei an die Konsolenprotokolle senden

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

Die `xhr.open`-Zeile gibt `true` als drittes Parameter an, um anzuzeigen, dass die Anfrage asynchron behandelt werden soll.

Wir erstellen dann ein Event-Handler-Funktionsobjekt und weisen es dem `onload`-Attribut der Anfrage zu. Dieser Handler überprüft den `readyState` der Anfrage, um festzustellen, ob die Transaktion abgeschlossen ist. Wenn ja, und der HTTP-Status 200 ist, gibt der Handler den empfangenen Inhalt aus. Wenn ein Fehler auftrat, wird eine Fehlermeldung angezeigt.

Der `xhr.send`-Aufruf startet die Anfrage tatsächlich. Die Rückrufroutine wird aufgerufen, wann immer sich der Status der Anfrage ändert.

### Beispiel: Eine Funktion schreiben, um eine externe Datei zu lesen

In einigen Fällen müssen Sie viele externe Dateien lesen. Dies ist eine Standardfunktion, die das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt asynchron verwendet, um den Inhalt der gelesenen Datei an einen bestimmten Listener zu übergeben.

```js
function xhrSuccess() {
  this.callback.apply(this, this.arguments);
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

Die Signatur der Dienstprogrammfunktion **_loadFile_** erklärt (i) eine Ziel-URL zum Lesen (über eine HTTP-GET-Anfrage), (ii) eine Funktion, die bei erfolgreichem Abschluss der XHR-Operation ausgeführt werden soll, und (iii) eine beliebige Liste zusätzlicher Argumente, die durch das XHR-Objekt (über die `arguments`-Eigenschaft) an die Erfolgs-Rückruffunktion übergeben werden.

Zuerst deklarieren wir eine Funktion `xhrSuccess`, die aufgerufen wird, wenn die XHR-Operation erfolgreich abgeschlossen ist. Diese ruft wiederum die Rückruffunktion auf, die in der Aufrufung der `loadFile`-Funktion spezifiziert ist (in diesem Fall die Funktion `showMessage`), die einer Eigenschaft des XHR-Objekts zugewiesen wurde. Die zusätzlichen Argumente (falls vorhanden), die an die Aufrufung der Funktion loadFile übergeben werden, werden auf den Ablauf der Rückruffunktion "angewendet". Die `xhrError`-Funktion wird aufgerufen, wenn die XHR-Operation nicht erfolgreich abgeschlossen wurde.

Wir speichern die als zweites Argument an `loadFile` übergebene Erfolgs-Rückruffunktion in der `callback`-Eigenschaft des XHR-Objekts. Ab dem dritten Argument werden alle verbleibenden Argumente von `loadFile` gesammelt (mithilfe der [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-Syntax), der `arguments`-Eigenschaft der Variablen `xhr` zugewiesen, an die Erfolgs-Rückruffunktion `xhrSuccess` übergeben und schließlich der Rückruffunktion (in diesem Fall `showMessage`) übergeben, die von der Funktion `xhrSuccess` aufgerufen wird.

Der `xhr.open`-Aufruf gibt `true` als drittes Parameter an, um anzuzeigen, dass die Anfrage asynchron behandelt werden soll.

Schließlich startet `xhr.send` die Anfrage tatsächlich.

### Beispiel: Ein Timeout verwenden

Sie können ein Timeout verwenden, um zu verhindern, dass Ihr Code beim Warten auf eine Lesebeendigung hängen bleibt. Dies geschieht, indem Sie den Wert der `timeout`-Eigenschaft des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts festlegen, wie im folgenden Code gezeigt:

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

Beachten Sie die Ergänzung von Code, um das "timeout"-Ereignis durch Festlegung des `ontimeout`-Handlers zu behandeln.

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
> Synchrone XHR-Anfragen führen häufig zu Hängern im Web, insbesondere bei schlechten Netzwerkbedingungen oder wenn der Remote-Server langsam reagiert. Synchrone XHR ist jetzt veraltet und sollte zugunsten asynchroner Anfragen vermieden werden.

Alle neuen XHR-Funktionen wie `timeout` oder `abort` sind für synchrone XHR nicht erlaubt. Dies führt zu einem `InvalidAccessError`.

### Beispiel: HTTP-synchrone Anfrage

Dieses Beispiel zeigt, wie man eine einfache synchrone Anfrage macht.

```js
const request = new XMLHttpRequest();
request.open("GET", "/bar/foo.txt", false); // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
}
```

Der `request.send`-Aufruf sendet die Anfrage. Der `null`-Parameter gibt an, dass für die `GET`-Anfrage kein Body-Inhalt benötigt wird.

Die `if`-Anweisung überprüft den Statuscode, nachdem die Transaktion abgeschlossen ist. Wenn das Ergebnis 200 ist — HTTPs "OK" Ergebnis — wird der Textinhalt des Dokuments an die Konsole ausgegeben.

### Beispiel: Synchrone HTTP-Anfrage von einem Worker

Einer der wenigen Fälle, in denen eine synchrone Anfrage die Ausführung nicht normalerweise blockiert, ist die Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) innerhalb eines [`Worker`](/de/docs/Web/API/Worker).

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

**`myFile.txt`** (das Ziel der synchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Aufrufung):

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

Dieses Muster kann nützlich sein, um zum Beispiel im Hintergrund mit dem Server zu interagieren oder um Inhalte vorzuladen. Siehe [Using web workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) für Beispiele und Details.

### Anpassen von synchronen XHR-Anwendungsfällen an die Beacon API

Es gibt einige Fälle, in denen die synchrone Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) nicht ersetzbar ist, wie bei den Ereignissen [`unload`](/de/docs/Web/API/Window/unload_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) und [`pagehide`](/de/docs/Web/API/Window/pagehide_event). Sie sollten in Erwägung ziehen, die `fetch()` API mit dem `keepalive`-Flag zu verwenden. Wenn `fetch` mit `keepalive` nicht verfügbar ist, können Sie in Erwägung ziehen, die [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)-API zu verwenden, die diese Anwendungsfälle unterstützen kann, während sie typischerweise eine gute Benutzererfahrung bietet.

Das folgende Beispiel zeigt theoretischen Analytik-Code, der versucht, Daten an einen Server zu senden, indem er einen synchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) in einem Unload-Handler verwendet. Dies führt dazu, dass das Entladen der Seite verzögert wird.

```js
window.addEventListener("unload", logData, false);

function logData() {
  const client = new XMLHttpRequest();
  client.open("POST", "/log", false); // third parameter indicates sync xhr. :(
  client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  client.send(analyticsData);
}
```

Mit der **`sendBeacon()`**-Methode werden die Daten asynchron an den Webserver übertragen, wenn der Benutzeragent die Möglichkeit dazu hatte, **ohne das Entladen zu verzögern oder die Leistung der nächsten Navigation zu beeinträchtigen.**

Das folgende Beispiel zeigt ein theoretisches Analytik-Code-Muster, das Daten an einen Server sendet, indem es die **`sendBeacon()`**-Methode verwendet.

```js
window.addEventListener("unload", logData, false);

function logData() {
  navigator.sendBeacon("/log", analyticsData);
}
```

## Siehe auch

- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [`navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon)
