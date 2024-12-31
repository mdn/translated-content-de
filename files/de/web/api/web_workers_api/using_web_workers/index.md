---
title: Verwendung von Web Workers
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: 875215de95e76ff145fc85902d32c1142a1ccf53
---

{{DefaultAPISidebar("Web Workers API")}}

Web Workers sind ein einfaches Mittel, um Webinhalte Skripte in Hintergrund-Threads ausführen zu lassen. Der Worker-Thread kann Aufgaben ausführen, ohne die Benutzeroberfläche zu beeinträchtigen. Zusätzlich können sie Netzwerkanfragen über die [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) APIs stellen. Ein einmal erstellter Worker kann Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen durch diesen Code angegebenen Ereignishandler postet (und umgekehrt).

Dieser Artikel bietet eine ausführliche Einführung in die Verwendung von Web Workers.

## Web Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor erstellt wird (z. B. [`Worker()`](/de/docs/Web/API/Worker/Worker)), das eine benannte JavaScript-Datei ausführt — diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext als das aktuelle [`window`](/de/docs/Web/API/Window). Daher wird die Verwendung des [`window`](/de/docs/Web/API/Window)-Shortcuts zur Beschaffung des aktuellen globalen Scopes (statt [`self`](/de/docs/Web/API/Window/self)) innerhalb eines [`Worker`](/de/docs/Web/API/Worker) einen Fehler zurückgeben.

Der Worker-Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt im Fall von dedizierten Workern (standardmäßige Worker, die von einem einzelnen Skript genutzt werden; Shared Workers verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)) repräsentiert. Ein dedizierter Worker ist nur über das Skript zugänglich, das ihn zuerst erstellt hat, während auf Shared Workers von mehreren Skripten zugegriffen werden kann.

> [!NOTE]
> Siehe [Die Web Workers API-Landingpage](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentation zu Workern und zusätzliche Leitfäden.

Sie können beliebigen Code innerhalb des Worker-Threads ausführen, mit einigen Ausnahmen. Zum Beispiel können Sie nicht direkt den DOM von innerhalb eines Workers manipulieren oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts verwenden. Aber Sie können eine große Anzahl von im `window` verfügbaren Elementen verwenden, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Daten-Speichermethoden wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Siehe [Funktionen und Klassen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) für weitere Details.

Daten werden zwischen Workern und dem Haupt-Thread über ein Nachrichtensystem gesendet — beide Seiten senden ihre Nachrichten mit der `postMessage()`-Methode und reagieren auf Nachrichten über den `onmessage`-Ereignishandler (die Nachricht ist im Datenattribut des [`message`](/de/docs/Web/API/Worker/message_event)-Ereignisses enthalten). Die Daten werden kopiert, nicht geteilt.

Worker können wiederum neue Worker erzeugen, solange diese Worker innerhalb des gleichen {{Glossary("origin", "Origin")}} wie die Elternseite gehostet werden.

Zusätzlich können Worker Netzwerkanfragen über die [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) APIs stellen (obwohl zu beachten ist, dass das [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Attribut von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur durch das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt besprechen wir das JavaScript, das in unserem [Beispiel eines einfachen dedizierten Workers](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)) zu finden ist: Dies ermöglicht es Ihnen, zwei Zahlen einzugeben, die miteinander multipliziert werden sollen. Die Zahlen werden an einen dedizierten Worker gesendet, miteinander multipliziert, und das Ergebnis wird an die Seite zurückgegeben und angezeigt.

Dieses Beispiel ist eher trivial, aber wir haben beschlossen, es einfach zu halten, während wir Sie an grundlegende Worker-Konzepte heranführen. Weitere fortgeschrittene Details werden später im Artikel behandelt.

### Worker-Feature-Erkennung

Für eine etwas kontrolliertere Fehlerbehandlung und rückwärtskompatibilität ist es eine gute Idee, Ihren Worker-Zugriffscode wie folgt einzukapseln ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
if (window.Worker) {
  // …
}
```

### Einen dedizierten Worker erzeugen

Das Erstellen eines neuen Workers ist einfach. Alles, was Sie tun müssen, ist den [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor aufzurufen und die URI eines Skripts anzugeben, das im Worker-Thread ausgeführt wird ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
const myWorker = new Worker("worker.js");
```

> [!NOTE]
> Paketbundler, einschließlich [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, URLs zu übergeben, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) zum `Worker()`-Konstruktor aufgelöst werden. Zum Beispiel:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript statt zur aktuellen HTML-Seite, was es dem Paketbundler ermöglicht, sicher Optimierungen wie Umbenennungen vorzunehmen (da die `worker.js`-URL ansonsten möglicherweise auf eine Datei zeigt, die nicht vom Paketbundler kontrolliert wird, sodass keine Annahmen gemacht werden können).

### Senden von Nachrichten zu und von einem dedizierten Worker

Die Magie der Worker geschieht über die [`postMessage()`](/de/docs/Web/API/Worker/postMessage)-Methode und den [`onmessage`](/de/docs/Web/API/Worker/message_event)-Ereignishandler. Wenn Sie eine Nachricht an den Worker senden möchten, posten Sie Nachrichten an ihn wie folgt ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.port.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Hier haben wir zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` dargestellt werden; wenn der Wert eines der beiden geändert wird, wird `myWorker.postMessage([first.value,second.value])` verwendet, um die Werte beider als Array an den Worker zu senden. Sie können so ziemlich alles im Beitrag senden, was Ihnen beliebt.

Im Worker können wir reagieren, wenn die Nachricht empfangen wird, indem wir einen Ereignishandler-Block wie diesen schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage`-Handler erlaubt es uns, Code auszuführen, wenn eine Nachricht empfangen wird, wobei die Nachricht selbst im `data`-Attribut des `message`-Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen und verwenden erneut `postMessage()`, um das Ergebnis zurück zum Haupt-Thread zu senden.

Zurück im Haupt-Thread verwenden wir erneut `onmessage`, um auf die Nachricht zu reagieren, die vom Worker zurückgesendet wurde:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier erfassen wir die Nachrichtenereignisdaten und setzen sie als `textContent` des Ergebnisses des Absatzes, damit der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` am `Worker`-Objekt aufgehängt werden müssen, wenn sie im Hauptskript-Thread verwendet werden, aber nicht, wenn sie im Worker verwendet werden. Dies liegt daran, dass der Worker im Worker effektiv der globale Scope ist.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Haupt-Thread und dem Worker übermittelt wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Daten zu und von Workern übertragen: weitere Details](#transferring_data_to_and_from_workers_further_details) für eine sehr viel detailliertere Erklärung.

### Einen Worker beenden

Falls Sie einen laufenden Worker sofort aus dem Haupt-Thread beenden müssen, können Sie dies tun, indem Sie die `terminate`-Methode des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn ein Laufzeitfehler im Worker auftritt, wird dessen `onerror`-Ereignishandler aufgerufen. Er erhält ein Ereignis namens `error`, das das `ErrorEvent`-Interface implementiert.

Das Ereignis wird nicht durchschlagen und ist abfangbar; um die standardmäßige Aktion zu verhindern, kann der Worker die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode des Fehlerereignisses aufrufen.

Das Fehlerereignis hat die folgenden drei Felder, die von Interesse sind:

- `message`
  - : Eine lesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, an der der Fehler aufgetreten ist.

### Untergeordnete Worker erzeugen

Worker können, wenn sie möchten, weitere Worker erzeugen. So genannte Unter-Worker müssen innerhalb des gleichen Origins wie die Elternseite gehostet werden. Auch die URIs für Unter-Worker werden relativ zum Speicherort des übergeordneten Workers anstatt zur besitzenden Seite aufgelöst. Dies erleichtert es Workern, den Überblick über ihre Abhängigkeiten zu behalten.

### Skripte und Bibliotheken importieren

Worker-Threads haben Zugriff auf eine globale Funktion, `importScripts()`, die es ihnen ermöglicht, Skripte zu importieren. Sie nimmt null oder mehr URIs als Parameter zu den zu importierenden Ressourcen entgegen; alle folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes aufgelistete Skript und führt es aus. Alle globalen Objekte aus jedem Skript können dann vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` geworfen, und nachfolgender Code wird nicht ausgeführt. Bereits ausgeführter Code (einschließlich Code, der mit [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) zurückgestellt wurde) bleibt jedoch funktionsfähig. Funktionsdeklarationen **nach** der `importScripts()`-Methode werden ebenfalls beibehalten, da diese immer ausgewertet werden, bevor der restliche Code ausgeführt wird.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der Sie die Dateinamen an `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` gibt erst zurück, wenn alle Skripte geladen und ausgeführt wurden.

## Shared Worker

Ein Shared Worker ist von mehreren Skripten aus zugänglich — selbst wenn sie von unterschiedlichen Fenstern, iframes oder sogar Workern aus angesprochen werden. In diesem Abschnitt besprechen wir das JavaScript, das in unserem [Beispiel eines einfachen Shared Workers](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)) gefunden werden kann: Dies ähnelt stark dem grundlegenden Beispiel des dedizierten Workers, außer dass es zwei Funktionen gibt, die von unterschiedlichen Skriptdateien gehandhabt werden: _Multiplikation zweier Zahlen_ oder _Quadrieren einer Zahl_. Beide Skripte verwenden denselben Worker zur Durchführung der benötigten Berechnung.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und Shared Workern. Beachten Sie, dass wir in diesem Beispiel zwei HTML-Seiten haben, von denen jede mit JavaScript versehen ist, das denselben Worker verwendet.

> [!NOTE]
> Wenn SharedWorker von mehreren Browser-Kontexten aus zugänglich sein kann, müssen all diese Browser-Kontexte exakt das gleiche Origin (gleiches Protokoll, Host und Port) teilen.

> [!NOTE]
> In Firefox können Shared Worker nicht zwischen Dokumenten geteilt werden, die in privaten und nicht-privaten Fenstern geladen sind ([Firefox Fehler 1177621](https://bugzil.la/1177621)).

### Einen Shared Worker erzeugen

Das Erzeugen eines neuen Shared Workers ist fast dasselbe wie bei einem dedizierten Worker, aber mit einem anderen Konstruktor-Namen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) — jeder muss den Worker mit einem Code wie dem folgenden aufrufen:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied besteht darin, dass bei einem Shared Worker über ein `port`-Objekt kommuniziert werden muss — es wird explizit ein Port geöffnet, den die Skripte zur Kommunikation mit dem Worker nutzen können (dies geschieht implizit bei dedizierten Workern).

Die Portverbindung muss entweder implizit durch die Verwendung des `onmessage`-Ereignishandlers oder explizit mit der `start()`-Methode geöffnet werden, bevor Nachrichten gepostet werden können. Das Aufrufen von `start()` ist nur erforderlich, wenn das `message`-Ereignis über die `addEventListener()`-Methode verdrahtet wird.

> [!NOTE]
> Wenn die `start()`-Methode zum Öffnen der Portverbindung verwendet wird, muss sie sowohl aus dem Eltern-Thread als auch dem Worker-Thread aufgerufen werden, wenn eine zweiseitige Kommunikation erforderlich ist.

### Senden von Nachrichten zu und von einem Shared Worker

Nun können Nachrichten an den Worker wie zuvor gesendet werden, aber die `postMessage()`-Methode muss über das Port-Objekt aufgerufen werden (ähnliche Konstrukte finden Sie wieder in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) und [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js)):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Nun zum Worker. Es gibt hier auch etwas mehr Komplexität ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

Zuerst verwenden wir einen `onconnect`-Handler, um Code auszulösen, wenn eine Verbindung zum Port erfolgt (d. h. wenn der `onmessage`-Ereignishandler im Eltern-Thread eingerichtet wird oder wenn die `start()`-Methode im Eltern-Thread explizit aufgerufen wird).

Wir verwenden das `ports`-Attribut dieses Ereignisobjekts, um den Port zu erfassen und in einer Variablen zu speichern.

Als nächstes fügen wir einen `onmessage`-Handler am Port hinzu, um die Berechnung durchzuführen und das Ergebnis an den Haupt-Thread zurückzugeben. Das Einrichten dieses `onmessage`-Handlers im Worker-Thread öffnet auch implizit die Portverbindung zurück zum Eltern-Thread, sodass der Aufruf von `port.start()` eigentlich nicht nötig ist, wie oben erwähnt.

Schließlich, zurück im Hauptskript, verarbeiten wir die Nachricht (wiederum sehen Sie ähnliche## About thread safety

Der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle spawnet echte Betriebssystem-Threads, und achtsame Programmierer könnten besorgt sein, dass Concurrency "interessante" Effekte in Ihrem Code verursachen könnte, wenn Sie nicht vorsichtig sind.

Da Web Workers jedoch sorgfältig kontrollierte Kommunikationspunkte mit anderen Threads haben, ist es tatsächlich sehr schwer, Konkurrenzprobleme zu verursachen. Es gibt keinen Zugriff auf nicht-Thread-sichere Komponenten oder das DOM. Und Sie müssen spezifische Daten in und aus einem Thread durch serielle Objekte übergeben. Sie müssen also wirklich hart arbeiten, um Probleme in Ihrem Code zu verursachen.

## Content Security Policy

Worker haben ihren eigenen Ausführungskontext, der sich von dem des Dokuments unterscheidet, das sie erstellt hat. Aus diesem Grund unterliegen sie im Allgemeinen nicht der [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder des übergeordneten Workers), das sie erstellt hat. Angenommen, ein Dokument wird also mit folgendem Header bereitgestellt:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem wird dies verhindern, dass irgendwelche von ihm enthaltenen Skripte [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn das Skript jedoch einen Worker erzeugt, wird es erlaubt sein, `eval()` im Kontext des Workers zu verwenden.

Um eine Content Security Policy für den Worker anzugeben, setzen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy)-Antwortheader zur Anforderung, die das Worker-Skript selbst geliefert hat.

Die Ausnahme hiervon ist, wenn der Ursprung des Worker-Skripts ein global eindeutiger Identifikator ist (z. B. wenn seine URL ein Schema von data oder blob hat). In diesem Fall erbt der Worker die CSP des Dokuments oder Workers, der ihn erstellt hat.

## Übertragung von Daten zu und von Workern: weitere Details

Daten, die zwischen der Hauptseite und Workern übergeben werden, **werden kopiert**, nicht geteilt. Objekte werden serialisiert, wenn sie dem Worker übergeben werden, und anschließend auf der anderen Seite deserialisiert. Die Seiten- und Worker **teilen nicht dieselbe Instanz**, sodass letztendlich **eine Duplikation** auf jeder Seite erstellt wird. Die meisten Browser implementieren diese Funktion als [strukturierte Klonierung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Um dies zu veranschaulichen, erstellen wir eine Funktion namens `emulateMessage()`, die das Verhalten eines Werts simuliert, der während des Durchlaufs von einem `worker` zur Hauptseite oder umgekehrt _geklont und nicht geteilt_ wird:

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

Ein Wert, der geklont und nicht geteilt wird, wird als _Nachricht_ bezeichnet. Wie Sie wahrscheinlich inzwischen wissen, können _Nachrichten_ zum und vom Haupt-Thread gesendet werden, indem `postMessage()` genutzt wird, und das `data`-Attribut des `message`-Ereignisses enthält die Daten, die vom Worker zurückgesendet wurden.

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

Der [strukturierte Klonierungs-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kann JSON sowie einige Dinge akzeptieren, die JSON nicht kann — wie z. B. zirkuläre Referenzen.

### Beispiele zur Weitergabe von Daten

#### Beispiel 1: Fortgeschrittene Übergabe von JSON-Daten und Erstellen eines Umschaltsystems

Wenn Sie komplexe Daten übergeben und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System schaffen, das alles zusammenfasst.

Zuerst erstellen wir eine `QueryableWorker`-Klasse, die die URL des Workers, einen Standard-Listener und einen Fehler-Handler annimmt, und diese Klasse soll eine Liste von Listenern im Auge behalten und uns bei der Kommunikation mit dem Worker helfen:

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

Hier lassen wir den Worker zwei einfache Operationen ausführen, um zu veranschaulichen: die Differenz zweier Zahlen zu erhalten und eine Warnung nach drei Sekunden auszugeben. Um dies zu erreichen, implementieren wir zuerst eine `sendQuery`-Methode, die abfragt, ob der Worker tatsächlich die entsprechenden Methoden hat, um das zu tun, was wir wollen.

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

Wir beenden den QueryableWorker mit der `onmessage`-Methode. Wenn der Worker über die entsprechenden Methoden verfügt, die wir abgefragt haben, sollte er den Namen des entsprechenden Listeners und die benötigten Argumente zurückgeben, wir müssen ihn nur in `listeners` finden.:

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

Nun zum Worker. Zuerst benötigen wir die Methoden, um die beiden einfachen Operationen zu behandeln:

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

Es ist möglich, den Inhalt jeder Hauptseite -> Worker und Worker -> Hauptseite Nachricht umzuschalten. Und die Eigenschaftsbezeichnungen "queryMethod", "queryMethodListeners", "queryMethodArguments" können alles Mögliche sein, solange sie konsistent in `QueryableWorker` und dem `worker` sind.

### Datenübergabe durch Übertragung von Eigentum (transferierbare Objekte)

Moderne Browser enthalten eine zusätzliche Art, bestimmte Arten von Objekten mit hoher Leistung zu oder von einem Worker zu übergeben. [Transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden von einem Kontext in einen anderen mit einem Null-Kopier-Vorgang übertragen, was zu einer erheblichen Leistungsverbesserung beim Senden großer Datenmengen führt.

Beispielsweise wird beim Übertragen eines {{jsxref("ArrayBuffer")}} von Ihrer Hauptanwendung zu einem Worker-Skript der ursprüngliche {{jsxref("ArrayBuffer")}} gelöscht und ist nicht mehr nutzbar. Sein Inhalt wird (buchstäblich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## Eingebettete Worker

Es gibt keine "offizielle" Methode, um den Code eines Worker's innerhalb einer Webseite einzubetten, so wie {{HTMLElement("script")}}-Elemente das für normale Skripte tun. Aber ein {{HTMLElement("script")}}-Element, das kein `src`-Attribut hat und ein `type`-Attribut besitzt, das keinen ausführbaren MIME-Typ identifiziert, kann als Datenelement betrachtet werden, das JavaScript verwenden könnte. "Datenblöcke" sind ein allgemeineres Merkmal von HTML, das fast alle Textdaten tragen kann. Daher könnte ein Worker auf diese Weise eingebettet werden:

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

Der eingebettete Worker ist nun in einer neuen benutzerdefinierten `document.worker`-Eigenschaft verschachtelt.

Es ist auch erwähnenswert, dass Sie eine Funktion in ein Blob konvertieren und dann aus diesem Blob eine Objekt-URL generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele zur Verwendung von Web Workers.

### Berechnungen im Hintergrund durchführen

Worker sind hauptsächlich nützlich, um Ihrem Code zu erlauben, rechenintensive Berechnungen durchzuführen, ohne den Benutzeroberflächen-Thread zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code wird in der Datei "fibonacci.js" gespeichert, auf die in der nächsten HTML-Sektion verwiesen wird.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten erhält, wenn die `postMessage()`-Methode des Worker-Objekts aufgerufen wird. Dies führt die Berechnungen durch und gibt letztendlich das Ergebnis an den Haupt-Thread zurück.

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

Die Webseite erstellt ein `<p>`-Element mit der ID `result`, das zur Anzeige des Ergebnisses genutzt wird, und erzeugt dann den Worker. Nachdem der Worker erzeugt wurde, wird der `onmessage`-Handler konfiguriert, um die Ergebnisse durch Festlegen des Inhalts im `<p>`-Element anzuzeigen, und der `onerror`-Handler wird konfiguriert, um die Fehlermeldung in die Devtools-Konsole zu protokollieren.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Live-Demonstration dieses Beispiels](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufgaben unter mehreren Workern aufteilen

Da Multicore-Computer zunehmend verbreitet sind, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker zu verteilen, die diese Aufgaben dann auf mehreren Prozessorkernen ausführen können.

## Andere Arten von Workern

Zusätzlich zu dedizierten und Shared Web Workers gibt es weitere Arten von Workern:

- [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) agieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (wenn verfügbar) sitzen. Sie sind darauf ausgelegt (unter anderem), das Erstellen effektiver Offline-Erfahrungen zu ermöglichen, Netzwerkanfragen abzufangen und angemessene Maßnahmen zu treffen, je nachdem, ob das Netzwerk verfügbar ist und aktualisierte Ressourcen auf dem Server bereitstehen. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrund-Synchronisierungs-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bietet die Möglichkeit zur direkten Skript-basierten Audiobearbeitung innerhalb eines Worklet-Kontextes (einer leichten Version eines Workers).

## Fehlerbehebung bei Worker-Threads

Die meisten Browser ermöglichen es Ihnen, Web Workers in ihren JavaScript-Debuggern auf _genau die gleiche Weise_ zu debuggen wie den Haupt-Thread! Zum Beispiel zeigen sowohl Firefox als auch Chrome JavaScript-Quelldateien für den Haupt-Thread und aktive Worker-Threads an, und alle diese Dateien können geöffnet werden, um Haltepunkte und Protokollpunkte festzulegen.

Um zu lernen, wie man Web Workers debuggt, siehe die Dokumentation des JavaScript-Debuggers jedes Browsers:

- [Chrome Sources-Panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

## Funktionen und Schnittstellen, die in Workern verfügbar sind

Sie können die meisten Standard-JavaScript-Funktionen innerhalb eines Web Workers verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptsächliche, das Sie _nicht_ in einem Worker tun können, ist, direkt die Elternseite zu beeinflussen. Dies schließt die Manipulation des DOMs und die Verwendung der Objekte dieser Seite ein. Sie müssen dies indirekt tun, indem Sie eine Nachricht zurück an das Hauptskript über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) senden und dann die Änderungen im Ereignishandler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode den Workern zur Verfügung steht, indem Sie die Seite <https://worker-playground.glitch.me/> verwenden. Wenn Sie zum Beispiel [`EventSource`](/de/docs/Web/API/EventSource) auf der Seite in Firefox 84 eingeben, werden Sie sehen, dass dies in Service Workern nicht unterstützt wird, wohl aber in dedizierten und Shared Workern.

> [!NOTE]
> Für eine vollständige Liste der Funktionen, die Workern zur Verfügung stehen, siehe [Funktionen und Schnittstellen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Schnittstelle
- [Funktionen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Schnittstelle
