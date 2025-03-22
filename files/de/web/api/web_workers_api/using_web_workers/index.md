---
title: Verwendung von Web Workers
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: 01b039d4aea1e02848e90999a0e0536d25e2fc2a
---

{{DefaultAPISidebar("Web Workers API")}}

Web Workers sind ein einfacher Weg für Web-Inhalte, Skripte in Hintergrund-Threads auszuführen. Der Worker-Thread kann Aufgaben erledigen, ohne die Benutzeroberfläche zu stören. Zusätzlich können sie Netzwerk-Anfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen. Einmal erstellt, kann ein Worker Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen Ereignishandler sendet, den dieser Code spezifiziert hat (und umgekehrt).

Dieser Artikel bietet eine ausführliche Einführung zur Verwendung von Web Workers.

## Web Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor erstellt wird (z.B. [`Worker()`](/de/docs/Web/API/Worker/Worker)), welches eine benannte JavaScript-Datei ausführt — diese Datei enthält den Code, der im Worker-Thread laufen wird; Worker laufen in einem anderen globalen Kontext, der sich vom aktuellen [`window`](/de/docs/Web/API/Window) unterscheidet. Daher führt die Verwendung des [`window`](/de/docs/Web/API/Window) Kurzbefehls, um den aktuellen globalen Bereich im Kontext eines [`Worker`](/de/docs/Web/API/Worker) zu erhalten (anstelle von [`self`](/de/docs/Web/API/Window/self)), zu einem Fehler.

Der Worker-Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) Objekt dargestellt, im Fall von dedizierten Workern (Standard-Worker, die von einem einzigen Skript verwendet werden; geteilte Worker verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)). Ein dedizierter Worker ist nur von dem Skript zugänglich, das ihn zuerst erstellt hat, während geteilte Worker von mehreren Skripten aus zugänglich sind.

> [!NOTE]
> Siehe [Die Web Workers API Startseite](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentation zu Workern und zusätzliche Leitfäden.

Sie können im Worker-Thread beliebigen Code ausführen, mit einigen Ausnahmen. Beispielsweise können Sie im Inneren eines Workers nicht direkt mit dem DOM arbeiten oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window) Objekts verwenden. Allerdings können Sie eine Vielzahl von Elementen nutzen, die unter `window` verfügbar sind, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Daten-Speichermechanismen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Weitere Details finden Sie unter [Funktionen und Klassen, die für Worker verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

Daten werden zwischen Workern und dem Haupt-Thread über ein Nachrichtensystem gesendet — beide Seiten senden ihre Nachrichten mit der Methode `postMessage()` und reagieren auf Nachrichten über den `onmessage` Ereignishandler (die Nachricht ist im Datenattribut des [`message`](/de/docs/Web/API/Worker/message_event) Ereignisses enthalten). Die Daten werden kopiert und nicht geteilt.

Worker können wiederum neue Worker erzeugen, solange diese Worker innerhalb desselben {{Glossary("origin", "origin")}} wie die übergeordnete Seite gehostet werden.

Zusätzlich können Worker Netzwerk-Anfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen (obwohl das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur von dem Skript zugänglich, das ihn erstellt hat. In diesem Abschnitt erläutern wir den JavaScript-Code in unserem [einfachen dedizierten Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)): Dies ermöglicht es Ihnen, zwei Zahlen einzugeben, die miteinander multipliziert werden sollen. Die Zahlen werden an einen dedizierten Worker gesendet, miteinander multipliziert und das Ergebnis wird an die Seite zurückgegeben und angezeigt.

Dieses Beispiel ist zwar ziemlich trivial, aber wir haben uns entschieden, es einfach zu halten, während wir Ihnen die grundlegenden Worker-Konzepte vorstellen. Weitere fortgeschrittene Details werden später im Artikel behandelt.

### Erkennung der Worker-Funktion

Für eine leicht kontrollierbare Fehlerbehandlung und Abwärtskompatibilität ist es eine gute Idee, Ihren Worker-Code in das folgende Muster zu kapseln ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
if (window.Worker) {
  // …
}
```

### Starten eines dedizierten Workers

Einen neuen Worker zu erstellen ist einfach. Alles, was Sie tun müssen, ist den [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktor aufzurufen und die URI eines Skripts anzugeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
const myWorker = new Worker("worker.js");
```

> [!NOTE]
> Bundler, einschließlich [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, URLs zu verwenden, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) aufgelöst werden, um den `Worker()`-Konstruktor aufzurufen. Zum Beispiel:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript und nicht zur aktuellen HTML-Seite, was dem Bundler ermöglicht, sicher Optimierungen wie das Umbenennen durchzuführen (weil sonst die `worker.js`-URL auf eine Datei verweisen könnte, die nicht vom Bundler kontrolliert wird, sodass keine Annahmen gemacht werden können).

### Nachrichten an einen dedizierten Worker senden und empfangen

Die Magie der Worker geschieht über die Methode [`postMessage()`](/de/docs/Web/API/Worker/postMessage) und den [`onmessage`](/de/docs/Web/API/Worker/message_event) Ereignishandler. Wenn Sie eine Nachricht an den Worker senden möchten, posten Sie Nachrichten an ihn wie folgt ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Hier haben wir zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` dargestellt werden; wenn der Wert eines Elements geändert wird, wird `myWorker.postMessage([first.value,second.value])` verwendet, um den Wert beider in einem Array an den Worker zu senden. Sie können im Prinzip alles, was Sie möchten, in der Nachricht senden.

Im Worker können wir reagieren, wenn die Nachricht empfangen wird, indem wir einen Ereignishandler-Block wie diesen schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage`-Handler ermöglicht es uns, Code auszuführen, wann immer eine Nachricht empfangen wird, wobei die Nachricht selbst im `data`-Attribut des `message`-Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen und verwenden erneut `postMessage()`, um das Ergebnis zurück an den Haupt-Thread zu senden.

Zurück im Haupt-Thread verwenden wir erneut `onmessage`, um auf die Nachricht zu reagieren, die vom Worker zurückgesendet wurde:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier greifen wir die Ereignisdaten der Nachricht ab und setzen sie als `textContent` des Ergebnisabsatzes, sodass der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` im Hauptskript-Thread vom `Worker`-Objekt abhängen müssen, aber nicht, wenn sie im Worker verwendet werden. Dies liegt daran, dass im Worker der Worker effektiv der globale Bereich ist.

> [!NOTE]
> Wenn eine Nachricht zwischen Haupt-Thread und Worker weitergegeben wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Übertragung von Daten zu und von Workern: Weitere Details](#transferring_data_to_and_from_workers_further_details) für eine viel detailliertere Erklärung.

### Termination eines Workers

Wenn Sie einen laufenden Worker sofort aus dem Haupt-Thread beenden müssen, können Sie dies tun, indem Sie die Methode [`terminate`](/de/docs/Web/API/Worker) des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn ein Laufzeitfehler im Worker auftritt, wird sein `onerror`-Ereignishandler aufgerufen. Er erhält ein Ereignis mit dem Namen `error`, welches die `ErrorEvent`-Schnittstelle implementiert.

Das Ereignis bubblt nicht und ist abbrechbar; um die Standardaktion zu verhindern, kann der Worker die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Fehlerereignisses aufrufen.

Das Fehlerereignis hat die folgenden drei Felder, die von Interesse sind:

- `message`
  - : Eine menschenlesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, bei der der Fehler aufgetreten ist.

### Unter-Worker starten

Worker dürfen, wenn sie es wünschen, neue Worker starten. So genannte Unter-Worker müssen innerhalb desselben Ursprungs wie die übergeordnete Seite gehostet werden. Zudem werden die URIs für Unter-Worker relativ zum Standort des übergeordneten Workers und nicht zum der owning Page aufgelöst. Dies erleichtert es Workern, den Überblick über den Standort ihrer Abhängigkeiten zu behalten.

### Importieren von Skripten und Bibliotheken

Worker-Threads haben Zugriff auf eine globale Funktion, `importScripts()`, mit der sie Skripte importieren können. Es akzeptiert null oder mehr URIs als Parameter zu Ressourcen, die importiert werden sollen; alle folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes aufgeführte Skript und führt es aus. Alle globalen Objekte aus jedem Skript können dann vom Worker verwendet werden. Kann das Skript nicht geladen werden, wird `NETWORK_ERROR` ausgelöst und nachfolgender Code wird nicht ausgeführt. Zuvor ausgeführter Code (einschließlich Code, der mit [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) verzögert wurde) bleibt jedoch funktionsfähig. Funktionsdeklarationen **nach** der `importScripts()`-Methode bleiben ebenfalls erhalten, da sie immer vor dem Rest des Codes ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der Sie die Dateinamen an `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` kehrt erst zurück, wenn alle Skripte geladen und ausgeführt wurden.

## Geteilte Worker

Ein geteilter Worker ist von mehreren Skripten aus zugänglich — sogar wenn sie von verschiedenen Fenstern, iframes oder sogar Workern aufgerufen werden. In diesem Abschnitt behandeln wir den JavaScript-Code in unserem [einfachen geteilten Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)): Dies ist dem einfachen dedizierten Worker-Beispiel sehr ähnlich, außer dass es zwei Funktionen hat, die von verschiedenen Skriptdateien behandelt werden: _Zwei Zahlen multiplizieren_ oder _Eine Zahl quadrieren_. Beide Skripte verwenden denselben Worker, um die erforderliche Berechnung durchzuführen.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und geteilten Workern. Beachten Sie, dass wir in diesem Beispiel zwei HTML-Seiten haben, die jeweils JavaScript enthalten, das die gleiche einzelne Worker-Datei verwendet.

> [!NOTE]
> Wenn SharedWorker von mehreren Browsing-Kontexten aus zugänglich ist, müssen all diese Browsing-Kontexte denselben Ursprung (gleiches Protokoll, Host und Port) teilen.

> [!NOTE]
> In Firefox können geteilte Worker nicht zwischen Dokumenten geteilt werden, die in privaten und nicht privaten Fenstern geladen werden ([Firefox Bug 1177621](https://bugzil.la/1177621)).

### Starten eines geteilten Workers

Das Starten eines neuen geteilten Workers ist fast identisch mit dem eines dedizierten Workers, verwendet jedoch einen anderen Konstruktor-Namen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) — jeder muss den Worker mit Code wie dem folgenden starten:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied ist, dass Sie bei einem geteilten Worker über ein `port`-Objekt kommunizieren müssen — ein expliziter Port wird geöffnet, den die Skripte zur Kommunikation mit dem Worker nutzen können (dies geschieht implizit im Fall von dedizierten Workern).

Die Port-Verbindung muss entweder implizit durch die Verwendung des `onmessage`-Ereignishandlers oder explizit mit der `start()`-Methode gestartet werden, bevor Nachrichten gepostet werden können. Der Aufruf von `start()` ist nur erforderlich, wenn das `message`-Ereignis über die `addEventListener()`-Methode verdrahtet wird.

> [!NOTE]
> Wenn die `start()`-Methode verwendet wird, um die Port-Verbindung zu öffnen, muss sie sowohl im übergeordneten Thread als auch im Worker-Thread aufgerufen werden, wenn eine zweiseitige Kommunikation erforderlich ist.

### Nachrichten an einen geteilten Worker senden und empfangen

Nun können Nachrichten wie bisher an den Worker gesendet werden, aber die Methode `postMessage()` muss über das Port-Objekt aufgerufen werden (wiederum sehen Sie ähnliche Konstrukte sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch in [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js)):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Nun zum Worker. Hier gibt es auch etwas mehr Komplexität ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

Zuerst verwenden wir einen `onconnect`-Handler, um Code auszulösen, wenn eine Verbindung zum Port hergestellt wird (d.h. wenn der `onmessage`-Ereignishandler im übergeordneten Thread eingerichtet wird oder die `start()`-Methode explizit im übergeordneten Thread aufgerufen wird).

Wir verwenden das `ports`-Attribut dieses Ereignisobjekts, um den Port zu greifen und in einer Variablen zu speichern.

Als Nächstes fügen wir einen `onmessage`-Handler an den Port an, um die Berechnung durchzuführen und das Ergebnis an den Haupt-Thread zurückzusenden. Das Einrichten dieses `onmessage`-Handlers im Worker-Thread öffnet die Port-Verbindung zurück zum übergeordneten Thread implizit, sodass der Aufruf von `port.start()` nicht tatsächlich benötigt wird, wie oben erwähnt.

Schließlich, zurück im Hauptskript, bearbeiten wir die Nachricht (wiederum werden Sie ähnliche Konstrukte sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch in [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht durch den Port vom Worker zurückkommt, fügen wir das Berechnungsergebnis in den entsprechenden Ergebnisabsatz ein.

## Über Thread-Sicherheit

Das [`Worker`](/de/docs/Web/API/Worker) Interface startet echte OS-Level Threads, und bewusste Programmierer könnten sich Sorgen machen, dass die Parallelität, wenn sie nicht vorsichtig sind, "interessante" Effekte in Ihrem Code verursachen kann.

Da Web Worker jedoch sorgfältig kontrollierte Kommunikation mit anderen Threads haben, ist es tatsächlich sehr schwer, Parallelitätsprobleme zu verursachen. Es gibt keinen Zugriff auf nicht-thread-sichere Komponenten oder das DOM. Und Sie müssen spezifische Daten in und aus einem Thread durch serialisierte Objekte übergeben. So müssen Sie wirklich hart arbeiten, um Probleme in Ihrem Code zu verursachen.

## Content Security Policy

Worker gelten als eigenständiger Ausführungskontext, der sich vom Dokument unterscheidet, das sie erstellt hat. Aus diesem Grund werden sie im Allgemeinen nicht von der [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder des übergeordneten Workers) geregelt, das sie erstellt hat. Angenommen, ein Dokument wird mit dem folgenden Header ausgeliefert:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem wird dies verhindern, dass alle Skripte, die es einbezieht, [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn jedoch das Skript einen Worker erstellt, wird es im Kontext des Workers _erlaubt_ sein, `eval()` zu verwenden.

Um eine Content Security Policy für den Worker festzulegen, setzen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) Antwort-Header für die Anfrage, die das Worker-Skript selbst bereitgestellt hat.

Die Ausnahme hiervon ist, wenn der Ursprung des Worker-Skriptes eine global einmalige Kennung ist (zum Beispiel, wenn seine URL ein Schema von data oder blob hat). In diesem Fall erbt der Worker die CSP des Dokuments oder des Workers, der ihn erstellt hat.

## Datenübertragung zu und von Workern: Weitere Details

Daten, die zwischen der Hauptseite und Workern übergeben werden, werden **kopiert**, nicht geteilt. Objekte werden serialisiert, während sie dem Worker übergeben werden, und anschließend auf der anderen Seite deserialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, was bedeutet, dass **eine Kopie** an jedem Ende erstellt wird. Die meisten Browser implementieren diese Funktion als [strukturierte Klonierung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Um dies zu veranschaulichen, erstellen wir eine Funktion namens `emulateMessage()`, die das Verhalten eines Werts simuliert, der _geklont und nicht geteilt_ wird, während er von einem `worker` zur Hauptseite oder umgekehrt übergeht:

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

Ein Wert, der geklont und nicht geteilt wird, wird als _Nachricht_ bezeichnet. Wie Sie vielleicht bis jetzt wissen, können _Nachrichten_ mit `postMessage()` an und vom Haupt-Thread gesendet werden, und das `data`-Attribut des `message`-Ereignisses enthält Daten, die vom Worker zurückgesendet wurden.

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

### Beispiele zur Datenweitergabe

#### Beispiel 1: Erweiterte Übergabe von JSON-Daten und Erstellen eines Umschaltsystems

Wenn Sie komplexe Daten übergeben und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammenführt.

Zuerst erstellen wir eine `QueryableWorker`-Klasse, die die URL des Workers, einen Standard-Listener und einen Fehler-Handler nimmt, und diese Klasse wird eine Liste von Listenern verfolgen und uns helfen, mit dem Worker zu kommunizieren:

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

Dann fügen wir die Methoden zum Hinzufügen/Entfernen von Listenern hinzu:

```js
this.addListeners = (name, listener) => {
  listeners[name] = listener;
};

this.removeListeners = (name) => {
  delete listeners[name];
};
```

Hier lassen wir den Worker zwei einfache Operationen ausführen, um zu demonstrieren: die Differenz zweier Zahlen berechnen und nach drei Sekunden eine Warnung erzeugen. Um dies zu erreichen, implementieren wir zuerst eine `sendQuery`-Methode, die abfragt, ob der Worker tatsächlich die entsprechenden Methoden hat, um das zu tun, was wir wollen.

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

Wir vervollständigen `QueryableWorker` mit der `onmessage`-Methode. Wenn der Worker die entsprechenden Methoden hat, die wir abgefragt haben, sollte er den Namen des entsprechenden Listeners und die Argumente, die er benötigt, zurückgeben, wir müssen ihn nur in `listeners` finden:

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

Nun zum Worker. Zuerst müssen wir die Methoden haben, um die zwei einfachen Operationen zu behandeln:

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

Und die `onmessage`-Methode ist jetzt trivial:

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

Es ist möglich, den Inhalt jeder Nachricht von der Hauptseite zum Worker und von Worker zur Hauptseite zu wechseln. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können alles sein, solange sie sowohl im `QueryableWorker` als auch im `worker` konsistent sind.

### Datenweitergabe durch Übertragung von Besitzerrechten (übertragbare Objekte)

Moderne Browser enthalten einen zusätzlichen Weg, bestimmte Arten von Objekten mit hoher Leistung zu oder von einem Worker zu übergeben. [Übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden mit einem Null-Kopie-Vorgang von einem Kontext zu einem anderen übertragen, was zu einer erheblichen Leistungsverbesserung beim Senden großer Datensätze führt.

Beispielsweise wird beim Übertragen eines {{jsxref("ArrayBuffer")}} von Ihrer Hauptanwendung an ein Worker-Skript der ursprüngliche {{jsxref("ArrayBuffer")}} gelöscht und ist nicht mehr verwendbar. Sein Inhalt wird (buchstäblich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## Eingebettete Worker

Es gibt keinen "offiziellen" Weg, um den Code eines Workers in einer Webseite einzubetten, wie {{HTMLElement("script")}}-Elemente es für normale Skripte tun. Aber ein {{HTMLElement("script")}}-Element, das kein `src`-Attribut hat und ein `type`-Attribut hat, das keinen ausführbaren MIME-Typ identifiziert, kann als Datenblock-Element angesehen werden, das JavaScript verwenden kann. "Datenblöcke" sind eine allgemeinere Funktion von HTML, die fast alle textuellen Daten tragen kann. Ein Worker könnte auf diese Weise eingebettet werden:

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

Der eingebettete Worker ist jetzt in eine neue benutzerdefinierte `document.worker` Eigenschaft verschachtelt.

Es ist auch erwähnenswert, dass Sie auch eine Funktion in ein Blob konvertieren und dann eine Objekt-URL aus diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele für die Verwendung von Web-Workern.

### Berechnungen im Hintergrund durchführen

Worker sind hauptsächlich nützlich, um Ihrem Code zu ermöglichen, Prozessor-intensive Berechnungen auszuführen, ohne den Benutzeroberflächen-Thread zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code ist in der Datei "fibonacci.js" gespeichert, auf die im nächsten Abschnitt vom HTML verwiesen wird.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfangen wird, die gesendet werden, wenn die `postMessage()` des Worker-Objekts aufgerufen wird. Dies führt die Mathematik aus und gibt schließlich das Ergebnis an den Haupt-Thread zurück.

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

Die Webseite erstellt ein `<p>`-Element mit der ID `result`, das zur Anzeige des Ergebnisses verwendet wird, und startet dann den Worker. Nach dem Start des Workers wird der `onmessage`-Handler konfiguriert, um die Ergebnisse anzuzeigen, indem der Inhalt des `<p>`-Elements gesetzt wird, und der `onerror`-Handler wird so eingestellt, dass die Fehlermeldung an die Devtools-Konsole protokolliert wird.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Dieses Beispiel live ausprobieren](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufgaben auf mehrere Worker aufteilen

Da Multicore-Computer zunehmend üblich werden, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker zu verteilen, die diese Aufgaben möglicherweise auf mehreren Prozessorkernen ausführen können.

## Andere Arten von Workern

Neben dedizierten und geteilten Web-Workern gibt es weitere Arten von Workern:

- [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) agieren im Wesentlichen als Proxy-Server, die zwischen Web-Anwendungen, dem Browser und dem Netzwerk (sofern verfügbar) sitzen. Sie sollen (unter anderem) die Erstellung effektiver Offline-Erlebnisse ermöglichen, indem sie Netzwerk-Anfragen abfangen und entsprechende Aktionen basierend darauf ausführen, ob das Netzwerk verfügbar ist und aktualisierte Assets auf dem Server vorhanden sind. Sie bieten auch Zugriff auf Push-Benachrichtigungen und Hintergrund-Synchronisations-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bieten die Möglichkeit, direkt gescriptete Audioverarbeitung in einem Worklet (eine leichte Version eines Workers) durchzuführen.

## Debugging von Worker-Threads

Die meisten Browser ermöglichen es Ihnen, Web Worker in ihren JavaScript-Debuggern _genau auf die gleiche Weise_ zu debuggen wie den Haupt-Thread! In Firefox und Chrome beispielsweise werden JavaScript-Quelldateien sowohl für den Haupt-Thread als auch aktive Worker-Threads aufgelistet, und alle diese Dateien können geöffnet werden, um Haltepunkte und Logpoints zu setzen.

Um zu lernen, wie man Web Worker debuggt, lesen Sie die Dokumentation für den JavaScript-Debugger jedes Browsers:

- [Chrome Sources Panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

## Funktionen und Schnittstellen, die Workern zur Verfügung stehen

Sie können die meisten Standard-JavaScript-Funktionen innerhalb eines Web Workers verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptsächliche, was Sie _nicht_ in einem Worker tun können, ist, direkt auf die übergeordnete Seite einzuwirken. Dazu gehört das Manipulieren des DOM und die Verwendung von Objekten der Seite. Sie müssen es indirekt tun, indem Sie eine Nachricht über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) an das Hauptskript senden und dann die Änderungen im Ereignishandler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode Workern zur Verfügung steht, indem Sie die Seite <https://worker-playground.glitch.me/> verwenden. Wenn Sie beispielsweise [`EventSource`](/de/docs/Web/API/EventSource) auf der Seite in Firefox 84 eingeben, werden Sie sehen, dass dies in Service Workern nicht unterstützt wird, wohl aber in dedizierten und geteilten Workern.

> [!NOTE]
> Für eine vollständige Liste der Funktionen, die Workern zur Verfügung stehen, siehe [Funktionen und Schnittstellen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker) Interface
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Interface
- [Funktionen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Interface
