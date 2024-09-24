---
title: Synchrone und asynchrone Anfragen
slug: Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

{{domxref('XMLHttpRequest')}} unterstützt sowohl synchrone als auch asynchrone Kommunikation. Im Allgemeinen sollten jedoch asynchrone Anfragen aus Leistungsgründen synchronen Anfragen vorgezogen werden.

Synchrone Anfragen blockieren die Ausführung von Code, was zu einem "Einfrieren" des Bildschirms und einer nicht reagierenden Benutzererfahrung führt.

## Asynchrone Anfrage

Wenn Sie eine asynchrone {{domxref('XMLHttpRequest')}} verwenden, erhalten Sie einen Callback, wenn die Daten empfangen wurden. Dadurch kann der Browser normal weiterarbeiten, während Ihre Anfrage bearbeitet wird.

### Beispiel: Eine Datei in die Konsolenausgabe senden

Dies ist die einfachste Verwendung von asynchronem {{domxref('XMLHttpRequest')}}.

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

Die Zeile `xhr.open` gibt `true` als dritten Parameter an, um zu kennzeichnen, dass die Anfrage asynchron behandelt werden soll.

Wir erstellen dann ein Ereignishandler-Objekt und weisen es dem `onload`-Attribut der Anfrage zu. Dieser Handler prüft den `readyState` der Anfrage, um festzustellen, ob die Transaktion abgeschlossen ist; wenn ja, und der HTTP-Status 200 ist, gibt der Handler den empfangenen Inhalt aus. Wenn ein Fehler aufgetreten ist, wird eine Fehlermeldung angezeigt.

Der Aufruf `xhr.send` startet die Anfrage tatsächlich. Die Callback-Routine wird immer dann aufgerufen, wenn sich der Status der Anfrage ändert.

### Beispiel: Eine Funktion zum Lesen einer externen Datei schreiben

In einigen Fällen müssen Sie viele externe Dateien lesen. Dies ist eine Standardfunktion, die das {{domxref('XMLHttpRequest')}}-Objekt asynchron verwendet, um den Inhalt der gelesenen Datei an einen angegebenen Listener zu übermitteln.

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

loadFile("message.txt", showMessage, "Neue Nachricht!\n\n");
```

Die Signatur der Hilfsfunktion **_loadFile_** deklariert (i) eine Ziel-URL zum Lesen (über einen HTTP-GET-Request), (ii) eine Funktion, die bei erfolgreichem Abschluss der XHR-Operation ausgeführt werden soll, und (iii) eine beliebige Liste zusätzlicher Argumente, die durch das XHR-Objekt an die Erfolgs-Callback-Funktion weitergegeben werden.

Wir deklarieren zuerst eine Funktion `xhrSuccess`, die aufgerufen wird, wenn die XHR-Operation erfolgreich abgeschlossen wird. Diese wiederum ruft die in der Aufrufung der Funktion `loadFile` angegebene Callback-Funktion auf (in diesem Fall die Funktion `showMessage`), die einer Eigenschaft des XHR-Objekts zugewiesen wurde. Die zusätzlichen Argumente (falls vorhanden), die beim Aufruf der Funktion `loadFile` übergeben wurden, werden beim Aufrufen der Callback-Funktion "angewendet". Die Funktion `xhrError` wird aufgerufen, wenn die XHR-Operation nicht erfolgreich abgeschlossen werden kann.

Wir speichern die als zweites Argument an `loadFile` übergebene Erfolgs-Callback-Funktion in der `callback`-Eigenschaft des XHR-Objekts. Beginnend mit dem dritten Argument werden alle verbleibenden Argumente von `loadFile` gesammelt (unter Verwendung der [Restparametersyntax](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)), der `arguments`-Eigenschaft der Variablen `xhr` zugewiesen, an die Erfolgs-Callback-Funktion `xhrSuccess` übergeben und letztendlich an die Callback-Funktion (in diesem Fall `showMessage`) geliefert, die von der Funktion `xhrSuccess` aufgerufen wird.

Der Aufruf `xhr.open` gibt `true` als dritten Parameter an, um zu kennzeichnen, dass die Anfrage asynchron behandelt werden soll.

Schließlich startet `xhr.send` tatsächlich die Anfrage.

### Beispiel: Verwendung eines Timeouts

Sie können ein Timeout verwenden, um zu verhindern, dass Ihr Code während des Wartens auf das Ende eines Lesevorgangs hängenbleibt. Dies wird durch das Setzen des Werts der `timeout`-Eigenschaft am {{domxref('XMLHttpRequest')}}-Objekt erreicht, wie im folgenden Code gezeigt:

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

Beachten Sie die Hinzufügung von Code, um das "Timeout"-Ereignis zu behandeln, indem der `ontimeout`-Handler gesetzt wird.

Verwendung:

```js
function showMessage(message) {
  console.log(`${message} ${this.responseText}`);
}

loadFile("message.txt", 2000, showMessage, "Neue Nachricht!\n");
```

Hier geben wir ein Timeout von 2000 ms an.

## Synchrone Anfrage

> [!WARNING]
> Synchrone XHR-Anfragen führen häufig zu Verzögerungen im Web, insbesondere bei schlechten Netzwerkbedingungen oder wenn der entfernte Server langsam reagiert. Synchrone XHR ist jetzt veraltet und sollte zugunsten asynchroner Anfragen vermieden werden.

Alle neuen XHR-Funktionen wie `timeout` oder `abort` sind für synchrone XHR nicht erlaubt. Dies würde einen `InvalidAccessError` verursachen.

### Beispiel: HTTP-synchrone Anfrage

Dieses Beispiel zeigt, wie man eine einfache synchrone Anfrage erstellt.

```js
const request = new XMLHttpRequest();
request.open("GET", "/bar/foo.txt", false); // `false` macht die Anfrage synchron
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
}
```

Der Aufruf von `request.send` sendet die Anfrage. Der `null`-Parameter zeigt an, dass kein Body-Inhalt für die `GET`-Anfrage benötigt wird.

Die `if`-Anweisung überprüft den Statuscode, nachdem die Transaktion abgeschlossen wurde. Wenn das Ergebnis 200 ist — das "OK"-Ergebnis des HTTP — wird der Textinhalt des Dokuments in der Konsole ausgegeben.

### Beispiel: Synchrone HTTP-Anfrage von einem Worker

Einer der wenigen Fälle, in denen eine synchrone Anfrage normalerweise nicht die Ausführung blockiert, ist die Verwendung von {{domxref('XMLHttpRequest')}} innerhalb eines [`Web Worker`](/de/docs/Web/API/Worker).

**`example.html`** (die Hauptseite):

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>MDN Beispiel</title>
    <script>
      const worker = new Worker("myTask.js");
      worker.onmessage = (event) => {
        alert(`Worker sagte: ${event.data}`);
      };

      worker.postMessage("Hallo");
    </script>
  </head>
  <body>
    …
  </body>
</html>
```

**`myFile.txt`** (das Ziel der synchronen {{domxref('XMLHttpRequest')}}-Aufruf):

```plain
Hallo Welt!!
```

**`myTask.js`** (der [`Worker`](/de/docs/Web/API/Worker)):

```js
self.onmessage = (event) => {
  if (event.data === "Hallo") {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "myFile.txt", false); // synchrone Anfrage
    xhr.send(null);
    self.postMessage(xhr.responseText);
  }
};
```

> [!NOTE]
> Der Effekt ist asynchron, aufgrund der Verwendung des `Worker`.

Dieses Muster kann nützlich sein, um beispielsweise im Hintergrund mit dem Server zu interagieren oder um Inhalte vorzuladen. Siehe [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) für Beispiele und Details.

### Anpassung der Verwendung synchroner XHR an die Beacon-API

Es gibt einige Fälle, in denen die synchrone Verwendung von {{domxref('XMLHttpRequest')}} nicht ersetzbar ist, wie z.B. während der Ereignisse {{domxref("Window.unload_event", "unload")}}, {{domxref("Window.beforeunload_event", "beforeunload")}} und {{domxref("Window.pagehide_event", "pagehide")}}. Sie sollten in Betracht ziehen, die `fetch()`-API mit dem `keepalive`-Flag zu verwenden. Wenn `fetch` mit `keepalive` nicht verfügbar ist, können Sie in Betracht ziehen, die {{domxref("navigator.sendBeacon()")}}-API zu verwenden, die diese Anwendungsfälle unterstützen kann, während sie typischerweise eine gute Benutzererfahrung bereitstellt.

Das folgende Beispiel zeigt theoretischen Analysencode, der versucht, Daten an einen Server zu senden, indem er eine synchrone {{domxref('XMLHttpRequest')}} in einem Unload-Handler verwendet. Dies führt dazu, dass das Entladen der Seite verzögert wird.

```js
window.addEventListener("unload", logData, false);

function logData() {
  const client = new XMLHttpRequest();
  client.open("POST", "/log", false); // dritter Parameter zeigt synchronen XHR an. :(
  client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  client.send(analyticsData);
}
```

Mit der Methode **`sendBeacon()`** werden die Daten asynchron an den Webserver übertragen, wenn der Benutzeragent die Gelegenheit dazu hatte, **ohne das Entladen zu verzögern oder die Leistung der nächsten Navigation zu beeinträchtigen.**

Das folgende Beispiel zeigt ein theoretisches Analysencode-Muster, das Daten an einen Server sendet, indem es die Methode **`sendBeacon()`** verwendet.

```js
window.addEventListener("unload", logData, false);

function logData() {
  navigator.sendBeacon("/log", analyticsData);
}
```

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [`navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon)
