---
title: Verwendung von Web Workers
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{DefaultAPISidebar("Web Workers API")}}

Web Workers sind eine einfache Methode, um Webinhalte Skripte in Hintergrund-Threads ausführen zu lassen. Der Worker-Thread kann Aufgaben ausführen, ohne die Benutzeroberfläche zu stören. Darüber hinaus können sie Netzwerkabfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen. Einmal erstellt, kann ein Worker Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen Ereignishandler sendet, der von diesem Code festgelegt wurde (und umgekehrt).

Dieser Artikel bietet eine detaillierte Einführung in die Verwendung von Web Workers.

## Web Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor erstellt wird (z.B. [`Worker()`](/de/docs/Web/API/Worker/Worker)), das eine benannte JavaScript-Datei ausführt — diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext, der sich von dem aktuellen [`window`](/de/docs/Web/API/Window) unterscheidet. Das Verwenden der Abkürzung [`window`](/de/docs/Web/API/Window), um den aktuellen globalen Scope zu erhalten (anstatt [`self`](/de/docs/Web/API/Window/self)) innerhalb eines [`Worker`](/de/docs/Web/API/Worker), wird einen Fehler zurückgeben.

Der Worker-Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt bei dedizierten Workern repräsentiert (Standard-Worker, die von einem einzelnen Skript genutzt werden; Shared Worker verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)). Ein dedizierter Worker ist nur von dem Skript aus zugänglich, das ihn ursprünglich erstellt hat, wohingegen Shared Worker von mehreren Skripten aus zugänglich sind.

> [!NOTE]
> Siehe [Die Web Workers API Startseite](/de/docs/Web/API/Web_Workers_API) für die Referenzdokumentation zu Workern und zusätzliche Leitfäden.

Sie können beliebigen Code innerhalb des Worker-Threads ausführen, mit einigen Ausnahmen. Zum Beispiel können Sie das DOM nicht direkt von einem Worker aus manipulieren oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts verwenden. Aber Sie können eine Vielzahl von Elementen verwenden, die unter `window` verfügbar sind, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Datenverwaltungssysteme wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Weitere Details finden Sie unter [Funktionen und Klassen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

Daten werden über ein Nachrichtensystem zwischen Workern und dem Hauptthread gesendet — beide Seiten senden ihre Nachrichten mit der `postMessage()`-Methode und reagieren auf Nachrichten über den `onmessage` Ereignishandler (die Nachricht ist im Datenattribut des [`message`](/de/docs/Web/API/Worker/message_event) Ereignisses enthalten). Die Daten werden kopiert und nicht geteilt.

Worker können wiederum neue Worker erstellen, solange diese Worker innerhalb des gleichen {{Glossary("origin", "URSPRIUNG")}} wie die übergeordnete Seite gehostet sind.

Außerdem können Worker Netzwerkabfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen (obwohl beachtet werden sollte, dass das [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Attribut von `XMLHttpRequest` immer `null` bleibt).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur von dem Skript aus zugänglich, das ihn aufgerufen hat. In diesem Abschnitt behandeln wir den JavaScript-Code in unserem [Einfachen Beispiel für einen dedizierten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)): Dies ermöglicht Ihnen, zwei Zahlen zur Multiplikation einzugeben. Die Zahlen werden an einen dedizierten Worker gesendet, zusammen multipliziert, und das Ergebnis wird auf der Seite zurückgegeben und angezeigt.

Dieses Beispiel ist recht trivial, aber wir haben uns entschieden, es einfach zu halten, um Ihnen die grundlegenden Konzepte von Workern vorzustellen. Weitere Details finden sich später im Artikel.

### Worker-Feature-Erkennung

Für eine etwas kontrolliertere Fehlerbehandlung und Rückwärtskompatibilität ist es eine gute Idee, Ihren Worker-Zugriffscode wie folgt einzubetten ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
if (window.Worker) {
  // …
}
```

### Einen dedizierten Worker erstellen

Das Erstellen eines neuen Workers ist einfach. Sie müssen nur den [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktor aufrufen und die URI eines Skripts angeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
const myWorker = new Worker("worker.js");
```

> [!NOTE]
> Bundler, inklusive [Webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers), und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen URLs zu übergeben, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) aufgelöst werden, an den `Worker()`-Konstruktor. Zum Beispiel:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript anstatt zur aktuellen HTML-Seite, was dem Bundler ermöglicht, sicher Optimierungen wie Umbenennungen vorzunehmen (denn andernfalls könnte die `worker.js`-URL auf eine Datei verweisen, die nicht vom Bundler kontrolliert wird, was bedeutet, dass er keine Annahmen treffen kann).

### Nachrichten von und an einen dedizierten Worker senden

Der Zauber der Worker geschieht über die [`postMessage()`](/de/docs/Web/API/Worker/postMessage) Methode und den [`onmessage`](/de/docs/Web/API/Worker/message_event) Ereignishandler. Wenn Sie eine Nachricht an den Worker senden möchten, senden Sie Nachrichten wie folgt ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

Hier haben wir zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` dargestellt werden; wenn sich der Wert eines dieser Elemente ändert, wird `myWorker.postMessage([first.value,second.value])` verwendet, um die Werte von beiden als Array an den Worker zu senden. Sie können im Grunde genommen alles senden, was Sie möchten.

Im Worker können wir antworten, sobald die Nachricht empfangen wird, indem wir einen Ereignishandler-Block wie diesen schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage`-Handler ermöglicht es uns, Code auszuführen, wann immer eine Nachricht empfangen wird, wobei die Nachricht selbst in dem `data`-Attribut des `message`-Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen und verwenden dann erneut `postMessage()`, um das Ergebnis zurück an den Hauptthread zu senden.

Zurück im Hauptthread verwenden wir erneut `onmessage`, um auf die Nachricht vom Worker zu reagieren:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier übernehmen wir die Daten des Nachrichtenevents und setzen sie als `textContent` des Ergebnis-Paragraphen, damit der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` im Hauptskript-Thread am `Worker`-Objekt aufgehängt werden müssen, im Worker jedoch nicht. Dies liegt daran, dass der Worker innerhalb des Workers den globalen Scope darstellt.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Hauptthread und dem Worker übergeben wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Daten zu und von Workern übertragen: Weitere Informationen](#transferring_data_to_and_from_workers_further_details) für eine viel gründlichere Erklärung.

### Einen Worker beenden

Wenn Sie einen laufenden Worker sofort aus dem Hauptthread beenden müssen, können Sie dies tun, indem Sie die [`terminate`](/de/docs/Web/API/Worker)-Methode des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn zur Laufzeit ein Fehler im Worker auftritt, wird sein `onerror`-Ereignishandler aufgerufen. Es empfängt ein Ereignis namens `error`, welches die `ErrorEvent`-Schnittstelle implementiert.

Das Ereignis ist nicht propagierbar und kann abgebrochen werden; um die Standardaktion zu verhindern, kann der Worker die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode des Fehlerevents aufrufen.

Das Fehlerereignis hat die folgenden drei Felder, die von Interesse sind:

- `message`
  - : Eine menschenlesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, auf der der Fehler aufgetreten ist.

### Subworker erstellen

Worker können, wenn sie möchten, mehr Worker erzeugen. Diese sogenannten Subworker müssen im selben Ursprung wie die übergeordnete Seite gehostet werden. Außerdem werden die URIs für Subworker relativ zum Standort des übergeordneten Workers aufgelöst anstatt zu dem der besitzenden Seite. Dies erleichtert es Workern, den Überblick zu behalten, wo ihre Abhängigkeiten sind.

### Skripte und Bibliotheken importieren

Worker-Threads haben Zugriff auf eine globale Funktion, `importScripts()`, die es ihnen ermöglicht, Skripte zu importieren. Sie akzeptiert null oder mehr URIs als Parameter zu den zu importierenden Ressourcen; alle folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes aufgeführte Skript und führt es aus. Alle globalen Objekte aus jedem Skript können dann vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird ein `NETWORK_ERROR` geworfen, und nachfolgender Code wird nicht ausgeführt. Zuvor ausgeführter Code (einschließlich Code, der mit [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) verschoben wurde) bleibt jedoch funktionsfähig. Funktionsdeklarationen **nach** der `importScripts()`-Methode werden ebenfalls behalten, da diese immer vor dem Rest des Codes bewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der Sie die Dateinamen in `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` gibt erst dann zurück, wenn alle Skripte geladen und ausgeführt wurden.

## Geteilte Worker

Ein geteilter Worker ist von mehreren Skripten aus zugänglich — auch wenn sie von verschiedenen Fenstern, IFrames oder sogar Workern aufgerufen werden. In diesem Abschnitt behandeln wir den JavaScript-Code in unserem [Einfachen Beispiel für einen geteilten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)): Dies ist sehr ähnlich zu dem einfachen Beispiel für einen dedizierten Worker, außer dass es zwei Funktionen gibt, die von verschiedenen Skriptdateien gehandhabt werden: _zwei Zahlen multiplizieren_ oder _eine Zahl quadrieren_. Beide Skripte verwenden denselben Worker, um die erforderliche Berechnung durchzuführen.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und geteilten Workern. Beachten Sie, dass wir in diesem Beispiel zwei HTML-Seiten haben, jede mit angewendetem JavaScript, das dasselbe einzelne Worker-Skript verwendet.

> [!NOTE]
> Wenn SharedWorker von mehreren Browsing-Kontexten aus zugänglich sein kann, müssen all diese Browsing-Kontexte den exakt gleichen Ursprung teilen (gleiches Protokoll, Host und Port).

> [!NOTE]
> In Firefox können Shared Worker nicht zwischen Dokumenten geteilt werden, die in privaten und nicht privaten Fenstern geladen werden ([Firefox Bug 1177621](https://bugzil.la/1177621)).

### Einen geteilten Worker erstellen

Einen neuen geteilten Worker zu erstellen, ist ziemlich das gleiche wie bei einem dedizierten Worker, aber mit einem anderen Konstruktor (sehen Sie [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) — jeder muss den Worker mit Code wie dem folgenden starten:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied ist, dass Sie bei einem geteilten Worker über ein `port`-Objekt kommunizieren müssen — ein expliziter Port wird geöffnet, über den die Skripte mit dem Worker kommunizieren können (das geschieht im Fall von dedizierten Workern implizit).

Die Portverbindung muss entweder implizit durch die Verwendung des `onmessage`-Ereignishandlers oder explizit mit der `start()`-Methode gestartet werden, bevor Nachrichten gesendet werden können. Das Aufrufen von `start()` ist nur erforderlich, wenn das `message`-Ereignis über die `addEventListener()`-Methode eingerichtet ist.

> [!NOTE]
> Beim Verwenden der `start()`-Methode zum Öffnen der Portverbindung muss sie sowohl vom übergeordneten Thread als auch vom Worker-Thread aufgerufen werden, wenn eine Zwei-Wege-Kommunikation erforderlich ist.

### Nachrichten von und an einen geteilten Worker senden

Jetzt können Nachrichten wie zuvor an den Worker gesendet werden, jedoch muss die `postMessage()`-Methode über das Portobjekt aufgerufen werden (erneut werden Sie ähnliche Konstruktionen in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) und [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Nun weiter zum Worker. Auch hier gibt es eine gewisse Komplexität ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

Zuerst verwenden wir einen `onconnect`-Handler, um Code auszuführen, wenn eine Verbindung zum Port hergestellt wird (d.h. wenn der `onmessage`-Ereignishandler im übergeordneten Thread eingerichtet ist oder wenn die `start()`-Methode explizit im übergeordneten Thread aufgerufen wird).

Wir verwenden das `ports`-Attribut dieses Ereignisobjekts, um den Port zu ergreifen und ihn in einer Variable zu speichern.

Als Nächstes fügen wir einen `onmessage`-Handler am Port hinzu, um die Berechnung durchzuführen und das Ergebnis an den Hauptthread zurückzugeben. Das Einrichten dieses `onmessage`-Handlers im Worker-Thread öffnet auch implizit die Portverbindung zurück zum übergeordneten Thread, sodass der Aufruf zu `port.start()` tatsächlich nicht erforderlich ist, wie oben erwähnt.

Schließlich behandeln wir zurück im Hauptskript die Nachricht (erneut werden Sie ähnliche Konstrukte in sowohl [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht durch den Port vom Worker zurückkommt, fügen wir das Berechnungsergebnis in den entsprechenden Ergebnis-Absatz ein.

## Zur Thread-Sicherheit

Die [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle generiert echte OS-Level-Threads, und achtsame Programmierer könnten sicherstellen, dass gleichzeitige Vorgänge "interessante" Effekte in Ihrem Code hervorrufen können, wenn Sie nicht vorsichtig sind.

Da Web Worker jedoch kontrollierte Kommunikation mit anderen Threads haben, ist es tatsächlich sehr schwierig, Konkurrenzprobleme zu verursachen. Es gibt keinen Zugriff auf nicht-threadsichere Komponenten oder das DOM. Und Sie müssen spezifische Daten in und aus einem Thread durch serielle Objekte übergeben. Sie müssen also hart arbeiten, um Probleme in Ihrem Code zu verursachen.

## Richtlinien für die Inhaltsicherheit

Worker haben ihren eigenen Ausführungskontext, der sich von dem Dokument unterscheidet, das sie erstellt hat. Aus diesem Grund unterliegen sie im Allgemeinen nicht den [Richtlinien für die Inhaltsicherheit](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder übergeordneten Workers), das sie erstellt hat. Angenommen, ein Dokument wird mit dem folgenden Header bereitgestellt:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem wird dies verhindern, dass jegliche enthaltene Skripte [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn das Skript jedoch einen Worker erstellt, wird Code, der im Kontext des Workers ausgeführt wird, `eval()` verwenden dürfen.

Um eine Richtlinie für die Inhaltsicherheit für den Worker festzulegen, setzen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy)-Antwortheader für die Anfrage, die das Worker-Skript selbst bereitstellt.

Die Ausnahme hiervon ist, wenn der Ursprung des Worker-Skripts eine global eindeutige Kennung ist (zum Beispiel, wenn seine URL ein Schema data oder blob hat). In diesem Fall erbt der Worker die CSP von dem Dokument oder Worker, der ihn erstellt hat.

## Daten zu und von Workern übertragen: Weitere Details

Daten, die zwischen der Hauptseite und Workern übertragen werden, werden **kopiert**, nicht geteilt. Objekte werden serialisiert, während sie an den Worker übergeben werden, und dann auf der anderen Seite de-serialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, sodass das Endergebnis ist, dass **eine Kopie** an jedem Ende erstellt wird. Die meisten Browser implementieren diese Funktion mit [strukturierter Klonung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Um dies zu veranschaulichen, erstellen wir eine Funktion namens `emulateMessage()`, die das Verhalten eines Werts simuliert, der _geklont und nicht geteilt_ während der Übertragung von einem `worker` zur Hauptseite oder umgekehrt wird:

```js
function emulateMessage(vVal) {
  return eval(`(${JSON.stringify(vVal)})`);
}

// Tests

// test #1
const example1 = new Number(3);
console.log(typeof example1); // object
console.log(typeof emulateMessage(example1)); // number

// test #2
const example2 = true;
console.log(typeof example2); // boolean
console.log(typeof emulateMessage(example2)); // boolean

// test #3
const example3 = new String("Hello World");
console.log(typeof example3); // object
console.log(typeof emulateMessage(example3)); // string

// test #4
const example4 = {
  name: "Carina Anand",
  age: 43,
};
console.log(typeof example4); // object
console.log(typeof emulateMessage(example4)); // object

// test #5
function Animal(type, age) {
  this.type = type;
  this.age = age;
}
const example5 = new Animal("Cat", 3);
alert(example5.constructor); // Animal
alert(emulateMessage(example5).constructor); // Object
```

Ein Wert, der geklont und nicht geteilt wird, wird Nachricht genannt. Wie Sie jetzt wohl wissen, können Nachrichten mit `postMessage()` zu und von dem Hauptthread übergeben werden, und das [`data`](/de/docs/Web/API/MessageEvent/data) Attribut des `message`-Ereignisses enthält die Daten, die vom Worker zurückgesendet wurden.

**example.html**: (die Hauptseite):

```js
const myWorker = new Worker("my_task.js");

myWorker.onmessage = (event) => {
  console.log(`Worker said : ${event.data}`);
};

myWorker.postMessage("ali");
```

**my_task.js** (der Worker):

```js
postMessage("I'm working before postMessage('ali').");

onmessage = (event) => {
  postMessage(`Hi, ${event.data}`);
};
```

Der [strukturierte Klonalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kann JSON und einige Dinge akzeptieren, die JSON nicht kann — wie zirkuläre Referenzen.

### Datenübergabe-Beispiele

#### Beispiel 1: Erweitertes Übergeben von JSON-Daten und Erstellen eines Schaltsystems

Wenn Sie komplexe Daten übergeben müssen und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammenfasst.

Zuerst erstellen wir eine `QueryableWorker`-Klasse, die die URL des Workers, einen Standardlistener und einen Fehlerhandler übernimmt, und diese Klasse wird eine Liste von Listeners verfolgen und uns bei der Kommunikation mit dem Worker helfen:

```js
function QueryableWorker(url, defaultListener, onError) {
  const instance = this;
  const worker = new Worker(url);
  const listeners = {};

  this.defaultListener = defaultListener ?? (() => {});

  if (onError) {
    worker.onerror = onError;
  }

  this.postMessage = (message) => {
    worker.postMessage(message);
  };

  this.terminate = () => {
    worker.terminate();
  };
}
```

Dann fügen wir die Methoden zum Hinzufügen/Entfernen von Listeners hinzu:

```js
this.addListeners = (name, listener) => {
  listeners[name] = listener;
};

this.removeListeners = (name) => {
  delete listeners[name];
};
```

Hier lassen wir den Worker zwei einfache Operationen zur Veranschaulichung handhaben: die Differenz zweier Zahlen erhalten und nach drei Sekunden eine Warnung ausgeben. Um dies zu erreichen, implementieren wir zunächst eine `sendQuery`-Methode, die abfragt, ob der Worker tatsächlich die entsprechenden Methoden hat, um das zu tun, was wir wollen.

```js
// This functions takes at least one argument, the method name we want to query.
// Then we can pass in the arguments that the method needs.
this.sendQuery = (queryMethod, ...queryMethodArguments) => {
  if (!queryMethod) {
    throw new TypeError(
      "QueryableWorker.sendQuery takes at least one argument",
    );
  }
  worker.postMessage({
    queryMethod,
    queryMethodArguments,
  });
};
```

Wir schließen `QueryableWorker` mit der `onmessage`-Methode ab. Wenn der Worker die entsprechenden Methoden hat, die wir abgefragt haben, sollte er den Namen des entsprechenden Listeners und die benötigten Argumente zurückgeben, wir müssen sie nur in `listeners` finden:

```js
worker.onmessage = (event) => {
  if (
    event.data instanceof Object &&
    Object.hasOwn(event.data, "queryMethodListener") &&
    Object.hasOwn(event.data, "queryMethodArguments")
  ) {
    listeners[event.data.queryMethodListener].apply(
      instance,
      event.data.queryMethodArguments,
    );
  } else {
    this.defaultListener.call(instance, event.data);
  }
};
```

Nun zum Worker. Zuerst müssen wir die Methoden haben, um die zwei einfachen Operationen durchzuführen:

```js
const queryableFunctions = {
  getDifference(a, b) {
    reply("printStuff", a - b);
  },
  waitSomeTime() {
    setTimeout(() => {
      reply("doAlert", 3, "seconds");
    }, 3000);
  },
};

function reply(queryMethodListener, ...queryMethodArguments) {
  if (!queryMethodListener) {
    throw new TypeError("reply - takes at least one argument");
  }
  postMessage({
    queryMethodListener,
    queryMethodArguments,
  });
}

/* This method is called when main page calls QueryWorker's postMessage method directly*/
function defaultReply(message) {
  // do something
}
```

Und die `onmessage`-Methode ist nun trivial:

```js
onmessage = (event) => {
  if (
    event.data instanceof Object &&
    Object.hasOwn(event.data, "queryMethod") &&
    Object.hasOwn(event.data, "queryMethodArguments")
  ) {
    queryableFunctions[event.data.queryMethod].apply(
      self,
      event.data.queryMethodArguments,
    );
  } else {
    defaultReply(event.data);
  }
};
```

Hier sind die vollständigen Implementierungen:

**example.html** (die Hauptseite):

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>MDN Example - Queryable worker</title>
    <script type="text/javascript">
      // QueryableWorker instances methods:
      //   * sendQuery(queryable function name, argument to pass 1, argument to pass 2, etc. etc.): calls a Worker's queryable function
      //   * postMessage(string or JSON Data): see Worker.prototype.postMessage()
      //   * terminate(): terminates the Worker
      //   * addListener(name, function): adds a listener
      //   * removeListener(name): removes a listener
      // QueryableWorker instances properties:
      //   * defaultListener: the default listener executed only when the Worker calls the postMessage() function directly
      function QueryableWorker(url, defaultListener, onError) {
        const instance = this;
        const worker = new Worker(url);
        const listeners = {};

        this.defaultListener = defaultListener ?? (() => {});

        if (onError) {
          worker.onerror = onError;
        }

        this.postMessage = (message) => {
          worker.postMessage(message);
        };

        this.terminate = () => {
          worker.terminate();
        };

        this.addListener = (name, listener) => {
          listeners[name] = listener;
        };

        this.removeListener = (name) => {
          delete listeners[name];
        };

        // This functions takes at least one argument, the method name we want to query.
        // Then we can pass in the arguments that the method needs.
        this.sendQuery = (queryMethod, ...queryMethodArguments) => {
          if (!queryMethod) {
            throw new TypeError(
              "QueryableWorker.sendQuery takes at least one argument",
            );
          }
          worker.postMessage({
            queryMethod,
            queryMethodArguments,
          });
        };

        worker.onmessage = (event) => {
          if (
            event.data instanceof Object &&
            Object.hasOwn(event.data, "queryMethodListener") &&
            Object.hasOwn(event.data, "queryMethodArguments")
          ) {
            listeners[event.data.queryMethodListener].apply(
              instance,
              event.data.queryMethodArguments,
            );
          } else {
            this.defaultListener.call(instance, event.data);
          }
        };
      }

      // your custom "queryable" worker
      const myTask = new QueryableWorker("my_task.js");

      // your custom "listeners"
      myTask.addListener("printStuff", (result) => {
        document
          .getElementById("firstLink")
          .parentNode.appendChild(
            document.createTextNode(`The difference is ${result}!`),
          );
      });

      myTask.addListener("doAlert", (time, unit) => {
        alert(`Worker waited for ${time} ${unit} :-)`);
      });
    </script>
  </head>
  <body>
    <ul>
      <li>
        <a
          id="firstLink"
          href="javascript:myTask.sendQuery('getDifference', 5, 3);"
          >What is the difference between 5 and 3?</a
        >
      </li>
      <li>
        <a href="javascript:myTask.sendQuery('waitSomeTime');"
          >Wait 3 seconds</a
        >
      </li>
      <li>
        <a href="javascript:myTask.terminate();">terminate() the Worker</a>
      </li>
    </ul>
  </body>
</html>
```

**my_task.js** (der Worker):

```js
const queryableFunctions = {
  // example #1: get the difference between two numbers:
  getDifference(minuend, subtrahend) {
    reply("printStuff", minuend - subtrahend);
  },

  // example #2: wait three seconds
  waitSomeTime() {
    setTimeout(() => {
      reply("doAlert", 3, "seconds");
    }, 3000);
  },
};

// system functions

function defaultReply(message) {
  // your default PUBLIC function executed only when main page calls the queryableWorker.postMessage() method directly
  // do something
}

function reply(queryMethodListener, ...queryMethodArguments) {
  if (!queryMethodListener) {
    throw new TypeError("reply - not enough arguments");
  }
  postMessage({
    queryMethodListener,
    queryMethodArguments,
  });
}

onmessage = (event) => {
  if (
    event.data instanceof Object &&
    Object.hasOwn(event.data, "queryMethod") &&
    Object.hasOwn(event.data, "queryMethodArguments")
  ) {
    queryableFunctions[event.data.queryMethod].apply(
      self,
      event.data.queryMethodArguments,
    );
  } else {
    defaultReply(event.data);
  }
};
```

Es ist möglich, den Inhalt jeder Nachricht "Hauptseite -> Worker" und "Worker -> Hauptseite" umzuschalten. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können alles Mögliche sein, solange sie in `QueryableWorker` und dem `worker` konsistent sind.

### Daten durch Übertragung des Eigentums übergeben (transferierbare Objekte)

Moderne Browser haben eine zusätzliche Möglichkeit, bestimmte Arten von Objekten zu oder von einem Worker mit hoher Leistung zu übergeben. [Transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden von einem Kontext in einen anderen mit einem Null-Kopie-Vorgang übertragen, was eine enorme Leistungssteigerung beim Senden großer Datensätze ergibt.

Wenn Sie z. B. ein {{jsxref("ArrayBuffer")}} von Ihrer Hauptanwendung zu einem Worker-Skript übergeben, wird das ursprüngliche {{jsxref("ArrayBuffer")}} gelöscht und ist nicht mehr verwendbar. Sein Inhalt wird (ganz buchstäblich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## Eingebettete Worker

Es gibt keine "offizielle" Methode, den Code eines Workers innerhalb einer Webseite einzubetten, wie {{HTMLElement("script")}}-Elemente es für normale Skripte tun. Aber ein {{HTMLElement("script")}}-Element, das kein `src`-Attribut hat und ein `type`-Attribut, das keinen ausführbaren MIME-Typ identifiziert, kann als Datenblockelement angesehen werden, den JavaScript verwenden könnte. "Datenblöcke" sind eine allgemeinere Funktion von HTML, die fast beliebige Textdaten tragen kann. Ein Worker könnte auf diese Weise eingebettet werden:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>MDN Example - Embedded worker</title>
    <script type="text/js-worker">
      // This script WON'T be parsed by JS engines because its MIME type is text/js-worker.
      const myVar = 'Hello World!';
      // Rest of your worker code goes here.
    </script>
    <script>
      // This script WILL be parsed by JS engines because its MIME type is text/javascript.
      function pageLog(sMsg) {
        // Use a fragment: browser will only render/reflow once.
        const frag = document.createDocumentFragment();
        frag.appendChild(document.createTextNode(sMsg));
        frag.appendChild(document.createElement("br"));
        document.querySelector("#logDisplay").appendChild(frag);
      }
    </script>
    <script type="text/js-worker">
      // This script WON'T be parsed by JS engines because its MIME type is text/js-worker.
      onmessage = (event) => {
        postMessage(myVar);
      };
      // Rest of your worker code goes here.
    </script>
    <script>
      // This script WILL be parsed by JS engines because its MIME type is text/javascript.

      // In the past blob builder existed, but now we use Blob
      const blob = new Blob(
        Array.prototype.map.call(
          document.querySelectorAll("script[type='text\/js-worker']"),
          (script) => script.textContent,
        ),
        { type: "text/javascript" },
      );

      // Creating a new document.worker property containing all our "text/js-worker" scripts.
      document.worker = new Worker(window.URL.createObjectURL(blob));

      document.worker.onmessage = (event) => {
        pageLog(`Received: ${event.data}`);
      };

      // Start the worker.
      window.onload = () => {
        document.worker.postMessage("");
      };
    </script>
  </head>
  <body>
    <div id="logDisplay"></div>
  </body>
</html>
```

Der eingebettete Worker ist nun in ein neues benutzerdefiniertes `document.worker`-Eigenschaft eingebettet.

Es ist auch erwähnenswert, dass Sie auch eine Funktion in einen Blob konvertieren und dann eine Objekt-URL aus diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele, wie man Web Worker verwenden kann.

### Berechnungen im Hintergrund ausführen

Worker sind hauptsächlich nützlich, um Ihrem Code zu erlauben, rechenintensive Berechnungen durchzuführen, ohne den Benutzeroberflächen-Thread zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code ist in der Datei "fibonacci.js" gespeichert, auf die im nächsten Abschnitt von HTML verwiesen wird.

```js
self.onmessage = (event) => {
  const userNum = Number(event.data);
  self.postMessage(fibonacci(userNum));
};

function fibonacci(num) {
  let a = 1;
  let b = 0;
  while (num > 0) {
    [a, b] = [a + b, a];
    num--;
  }

  return b;
}
```

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfängt, die gesendet werden, wenn die `postMessage()`-Methode des Worker-Objekts aufgerufen wird. Dies führt die Berechnung durch und liefert letztendlich das Ergebnis zurück an den Hauptthread.

#### Der HTML-Code

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Fibonacci number generator</title>
    <style>
      body {
        width: 500px;
      }

      div,
      p {
        margin-bottom: 20px;
      }
    </style>
  </head>
  <body>
    <form>
      <div>
        <label for="number"
          >Enter a number that is a zero-based index position in the fibonacci
          sequence to see what number is in that position. For example, enter 6
          and you'll get a result of 8 — the fibonacci number at index position
          6 is 8.</label
        >
        <input type="number" id="number" />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>

    <p id="result"></p>

    <script>
      const form = document.querySelector("form");
      const input = document.querySelector('input[type="number"]');
      const result = document.querySelector("p#result");
      const worker = new Worker("fibonacci.js");

      worker.onmessage = (event) => {
        result.textContent = event.data;
        console.log(`Got: ${event.data}`);
      };

      worker.onerror = (error) => {
        console.log(`Worker error: ${error.message}`);
        throw error;
      };

      form.onsubmit = (e) => {
        e.preventDefault();
        worker.postMessage(input.value);
        input.value = "";
      };
    </script>
  </body>
</html>
```

Die Webseite erstellt ein `<p>`-Element mit der ID `result`, das verwendet wird, um das Ergebnis anzuzeigen, und startet dann den Worker. Nachdem der Worker gestartet wurde, ist der `onmessage`-Handler konfiguriert, um die Ergebnisse anzuzeigen, indem die Inhalte des `<p>`-Elements gesetzt werden, und der `onerror`-Handler ist so eingestellt, dass die Fehlermeldung in der Entwicklertools-Konsole protokolliert wird.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Probieren Sie dieses Beispiel live aus](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufgaben auf mehrere Worker verteilen

Da Multicore-Computer zunehmend üblich werden, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker zu verteilen, die diese Aufgaben dann auf mehreren Prozessor-Kernen ausführen können.

## Andere Arten von Workern

Neben dedizierten und geteilten Web Workern gibt es weitere Arten von Workern:

- [ServiceWorker](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server zwischen Webanwendungen sowie Browser und Netzwerk (wenn verfügbar). Sie sollen unter anderem die Erstellung effektiver Offline-Erfahrungen ermöglichen, indem sie Netzwerkanforderungen abfangen und basierend auf der Verfügbarkeit des Netzwerks und aktualisierten Assets auf dem Server geeignete Maßnahmen ergreifen. Sie werden auch den Zugriff auf Push-Benachrichtigungen und Hintergrund-Synchronisierungs-APIs ermöglichen.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bieten die Möglichkeit, eine direkte skriptgesteuerte Audiobearbeitung in einem Worklet-Kontext (einer leichteren Version eines Workers) durchzuführen.

## Worker-Threads debuggen

Die meisten Browser ermöglichen es Ihnen, Web Worker in ihren JavaScript-Debuggern _genau auf die gleiche Weise_ zu debuggen wie den Hauptthread! Beispielsweise listen sowohl Firefox als auch Chrome JavaScript-Quelldateien für sowohl den Hauptthread als auch aktive Worker-Threads auf, und all diese Dateien können geöffnet werden, um Haltepunkte und Logpunkte zu setzen.

Um zu erfahren, wie Sie Web Worker debuggen können, lesen Sie die Dokumentation für den JavaScript-Debugger jedes Browsers:

- [Chrome Quellen-Panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

## Funktionen und Schnittstellen, die in Workern verfügbar sind

Sie können die meisten Standard-JavaScript-Funktionen in einem Web Worker verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptsächliche, was Sie _nicht_ in einem Worker tun können, ist, direkt auf die übergeordnete Seite zuzugreifen. Dies schließt das Manipulieren des DOMs und die Verwendung der Objekte dieser Seite ein. Sie müssen es indirekt tun, indem Sie eine Nachricht über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) zurück an das Hauptskript senden und dann die Änderungen im Ereignishandler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode für Worker verfügbar ist, indem Sie die Seite verwenden: <https://worker-playground.glitch.me/>. Wenn Sie zum Beispiel [`EventSource`](/de/docs/Web/API/EventSource) auf der Seite im Firefox 84 eingeben, werden Sie sehen, dass dies in Service Workern nicht unterstützt wird, aber in dedizierten und geteilten Workern schon.

> [!NOTE]
> Für eine vollständige Liste der Funktionen, die Worker verfügbar sind, siehe [Funktionen und Schnittstellen, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker) Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle
- [Funktionen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Schnittstelle
