---
title: Synchrone und asynchrone Anfragen
slug: Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

[`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt sowohl synchrone als auch asynchrone Kommunikation. Im Allgemeinen sollten jedoch aus Leistungsgründen asynchrone Anfragen gegenüber synchronen bevorzugt werden.

Synchrone Anfragen blockieren die Ausführung von Code, was ein "Einfrieren" des Bildschirms und eine nicht reagierende Benutzererfahrung verursacht.

## Asynchrone Anfrage

Wenn Sie ein asynchrones [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwenden, erhalten Sie einen Rückruf, wenn die Daten empfangen wurden. Dies ermöglicht es dem Browser, normal weiterzuarbeiten, während Ihre Anfrage bearbeitet wird.

### Beispiel: Eine Datei an die Konsolenprotokollierung senden

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

Wir erstellen dann ein Event-Handler-Funktionsobjekt und weisen es dem `onload`-Attribut der Anfrage zu. Dieser Handler prüft den `readyState` der Anfrage, um festzustellen, ob die Transaktion abgeschlossen ist; wenn dies der Fall ist und der HTTP-Status 200 beträgt, wird der empfangene Inhalt ausgegeben. Wenn ein Fehler aufgetreten ist, wird eine Fehlermeldung angezeigt.

Der `xhr.send`-Aufruf startet tatsächlich die Anfrage. Die Rückrufroutine wird aufgerufen, wenn sich der Status der Anfrage ändert.

### Beispiel: Eine Funktion zum Lesen einer externen Datei schreiben

In einigen Fällen müssen Sie viele externe Dateien lesen. Dies ist eine Standardfunktion, die das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt asynchron verwendet, um den Inhalt der gelesenen Datei an einen angegebenen Listener zu übergeben.

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

Die Signatur der Dienstprogrammfunktion **_loadFile_** erklärt (i) eine Ziel-URL, die gelesen werden soll (über eine HTTP-GET-Anfrage), (ii) eine Funktion, die bei erfolgreichem Abschluss der XHR-Operation ausgeführt werden soll, und (iii) eine beliebige Liste zusätzlicher Argumente, die über das XHR-Objekt (über die `arguments`-Eigenschaft) an die Erfolgs-Rückruffunktion übergeben werden.

Wir deklarieren zuerst eine Funktion `xhrSuccess`, die aufgerufen wird, wenn die XHR-Operation erfolgreich abgeschlossen ist. Diese wiederum ruft die Rückruffunktion auf, die bei der Verwendung der Funktion `loadFile` (in diesem Fall die Funktion `showMessage`) angegeben wurde, und die einem Attribut des XHR-Objekts zugewiesen wurde. Die zusätzlichen Argumente (falls vorhanden), die bei der Verwendung der Funktion loadFile übergeben wurden, werden zur Ausführung der Rückruffunktion "angewendet". Die `xhrError`-Funktion wird aufgerufen, wenn die XHR-Operation nicht erfolgreich abgeschlossen werden kann.

Wir speichern den Erfolgs-Rückruf, der als zweites Argument an `loadFile` übergeben wird, in der `callback`-Eigenschaft des XHR-Objekts. Beginnend mit dem dritten Argument werden alle verbleibenden Argumente von `loadFile` gesammelt (mithilfe der [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-Syntax), der `arguments`-Eigenschaft der Variablen `xhr` zugewiesen, an die Erfolgs-Rückruffunktion `xhrSuccess` übergeben und letztendlich der Rückruffunktion bereitgestellt (in diesem Fall `showMessage`), die durch die Funktion `xhrSuccess` aufgerufen wird.

Der `xhr.open`-Aufruf gibt `true` als dritten Parameter an, um anzuzeigen, dass die Anfrage asynchron behandelt werden soll.

Schließlich startet `xhr.send` tatsächlich die Anfrage.

### Beispiel: Verwendung eines Timeouts

Sie können ein Timeout verwenden, um zu verhindern, dass Ihr Code hängt, während er auf den Abschluss eines Lesevorgangs wartet. Dies wird erreicht, indem der Wert der `timeout`-Eigenschaft des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts gesetzt wird, wie im folgenden Code gezeigt:

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

Beachten Sie die Hinzufügung von Code, um das "timeout"-Ereignis zu behandeln, indem der `ontimeout`-Handler gesetzt wird.

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
> Synchrone XHR-Anfragen verursachen oft Probleme im Web, insbesondere bei schlechten Netzwerkbedingungen oder wenn der entfernte Server langsam reagiert. Synchronous XHR ist jetzt veraltet und sollte zugunsten asynchroner Anfragen vermieden werden.

Alle neuen XHR-Funktionen wie `timeout` oder `abort` sind für synchrone XHR nicht erlaubt. Bei Verwendung wird ein `InvalidAccessError` ausgelöst.

### Beispiel: HTTP-synchrone Anfrage

Dieses Beispiel demonstriert, wie man eine einfache synchrone Anfrage durchführt.

```js
const request = new XMLHttpRequest();
request.open("GET", "/bar/foo.txt", false); // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
}
```

Der `request.send`-Aufruf sendet die Anfrage. Der `null`-Parameter zeigt an, dass für die `GET`-Anfrage kein Inhaltskörper benötigt wird.

Die `if`-Anweisung überprüft den Statuscode, nachdem die Transaktion abgeschlossen ist. Wenn das Ergebnis 200 — das "OK"-Ergebnis von HTTP — beträgt, wird der Textinhalt des Dokuments an die Konsole ausgegeben.

### Beispiel: Synchrone HTTP-Anfrage von einem Worker

Einer der wenigen Fälle, in denen eine synchrone Anfrage normalerweise die Ausführung nicht blockiert, ist die Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) innerhalb eines [`Worker`](/de/docs/Web/API/Worker).

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

Dieses Muster kann nützlich sein, beispielsweise um im Hintergrund mit dem Server zu interagieren oder um Inhalte vorab zu laden. Siehe [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers) für Beispiele und Details.

### Anpassung von Sync XHR-Anwendungsfällen an die Beacon API

Es gibt einige Fälle, in denen die synchrone Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) nicht ersetzbar ist, wie während der [`unload`](/de/docs/Web/API/Window/unload_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) und [`pagehide`](/de/docs/Web/API/Window/pagehide_event) Ereignisse. Sie sollten in Betracht ziehen, die `fetch()`-API mit dem `keepalive`-Flag zu verwenden. Wenn `fetch` mit `keepalive` nicht verfügbar ist, können Sie die [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) API in Betracht ziehen, die diese Anwendungsfälle unterstützen kann und dabei typischerweise eine gute Benutzererfahrung liefert.

Das folgende Beispiel zeigt theoretischen Analytik-Code, der versucht, Daten an einen Server zu senden, indem er ein `XMLHttpRequest` im Unload-Handler synchron verwendet. Dies führt dazu, dass das Entladen der Seite verzögert wird.

```js
window.addEventListener("unload", logData, false);

function logData() {
  const client = new XMLHttpRequest();
  client.open("POST", "/log", false); // third parameter indicates sync xhr. :(
  client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  client.send(analyticsData);
}
```

Mit der **`sendBeacon()`**-Methode werden die Daten asynchron an den Webserver übertragen, wenn der User Agent Gelegenheit dazu hatte, **ohne das Entladen zu verzögern oder die Leistung der nächsten Navigation zu beeinträchtigen.**

Das folgende Beispiel zeigt ein theoretisches Analytik-Code-Muster, das Daten an einen Server über die **`sendBeacon()`**-Methode übermittelt.

```js
window.addEventListener("unload", logData, false);

function logData() {
  navigator.sendBeacon("/log", analyticsData);
}
```

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [`navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon)
