---
title: Verwendung von Web Workern
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{DefaultAPISidebar("Web Workers API")}}

Web Worker sind ein einfaches Mittel, um Skripte in Hintergrund-Threads für Webinhalte auszuführen. Der Worker-Thread kann Aufgaben ausführen, ohne die Benutzeroberfläche zu beeinträchtigen. Darüber hinaus können sie Netzwerk-Anfragen mithilfe der APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen. Einmal erstellt, kann ein Worker Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen von diesem Code spezifizierten Ereignishandler postet (und umgekehrt).

Dieser Artikel bietet eine detaillierte Einführung in die Verwendung von Web Workern.

## Web Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor (z. B. [`Worker()`](/de/docs/Web/API/Worker/Worker)) erstellt wird, der eine benannte JavaScript-Datei ausführt — diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext, der sich von dem aktuellen [`window`](/de/docs/Web/API/Window) unterscheidet. Daher führt die Verwendung der [`window`](/de/docs/Web/API/Window)-Verknüpfung zum Abrufen des aktuellen globalen Scopes (anstelle von [`self`](/de/docs/Web/API/Window/self)) innerhalb eines [`Worker`](/de/docs/Web/API/Worker) zu einem Fehler.

Der Worker-Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt im Fall von dedizierten Workern repräsentiert (Standard-Worker, die von einem einzelnen Skript verwendet werden; geteilte Worker verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)). Ein dedizierter Worker ist nur von dem Skript zugänglich, das ihn zuerst erstellt hat, während geteilte Worker von mehreren Skripten aus zugänglich sein können.

> [!NOTE]
> Siehe [Die Web Workers API-Übersichtsseite](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentation zu Workern und zusätzliche Leitfäden.

Sie können beliebigen Code innerhalb des Worker-Threads ausführen, mit einigen Ausnahmen. Beispielsweise können Sie das DOM nicht direkt von innerhalb eines Workers aus manipulieren oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts verwenden. Aber Sie können eine große Anzahl von Elementen verwenden, die unter `window` verfügbar sind, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Datenspeichermechanismen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Siehe [Funktionen und Klassen, die Arbeitern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) für weitere Details.

Daten werden zwischen Workern und dem Haupt-Thread über ein Nachrichtensystem gesendet — beide Seiten senden ihre Nachrichten unter Verwendung der Methode `postMessage()` und reagieren auf Nachrichten über den `onmessage`-Ereignishandler (die Nachricht ist im Datenattribut des [`message`](/de/docs/Web/API/Worker/message_event) Events enthalten). Die Daten werden kopiert, anstatt geteilt zu werden.

Worker können wiederum neue Worker erstellen, solange diese Worker innerhalb derselben {{Glossary("origin", "Origin")}} wie die übergeordnete Seite gehostet werden.

Zusätzlich können Worker Netzwerk-Anfragen mithilfe der [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) APIs durchführen (obwohl beachten Sie, dass das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur durch das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt werden wir den JavaScript-Code in unserem [einfachen Beispiel für dedizierte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)) besprechen: Dies ermöglicht es Ihnen, zwei Zahlen einzugeben, die miteinander multipliziert werden sollen. Die Zahlen werden an einen dedizierten Worker gesendet, miteinander multipliziert, und das Ergebnis wird an die Seite zurückgesendet und angezeigt.

Dieses Beispiel ist ziemlich trivial, aber wir haben uns entschieden, es einfach zu halten, während wir Ihnen grundlegende Worker-Konzepte vorstellen. Weitergehende Details werden später im Artikel besprochen.

### Worker-Funktionserkennung

Für etwas kontrolliertere Fehlerbehandlung und Abwärtskompatibilität ist es eine gute Idee, Ihren Worker-Zugriffscode wie folgt einzurahmen ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
if (window.Worker) {
  // …
}
```

### Einen dedizierten Worker erstellen

Einen neuen Worker zu erstellen ist einfach. Alles, was Sie tun müssen, ist, den Konstruktor [`Worker()`](/de/docs/Web/API/Worker/Worker) aufzurufen und die URI eines Skripts anzugeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
const myWorker = new Worker("worker.js");
```

> [!NOTE]
> Bundler, einschließlich [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers), und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, URLs, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) aufgelöst werden, an den `Worker()`-Konstruktor zu übergeben. Zum Beispiel:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript anstatt zur aktuellen HTML-Seite, was dem Bundler ermöglicht, Optimierungen wie das Umbenennen sicher durchzuführen (da ansonsten die `worker.js`-URL auf eine Datei zeigen könnte, die vom Bundler nicht kontrolliert wird, sodass er keine Annahmen machen kann).

### Nachrichten an einen dedizierten Worker senden und empfangen

Die Magie der Worker geschieht über die Methode [`postMessage()`](/de/docs/Web/API/Worker/postMessage) und den [`onmessage`](/de/docs/Web/API/Worker/message_event) Ereignishandler. Wenn Sie eine Nachricht an den Worker senden möchten, senden Sie Nachrichten an ihn wie folgt ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Hier haben wir zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` dargestellt werden; wenn sich der Wert eines der beiden ändert, wird `myWorker.postMessage([first.value,second.value])` verwendet, um den Wert von beiden an den Worker zu senden, als ein Array. Im Prinzip können Sie alles senden, was Sie in der Nachricht mögen.

Im Worker können wir wie folgt auf die empfangene Nachricht reagieren, indem wir einen Ereignishandler-Block schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage`-Handler ermöglicht es uns, Code auszuführen, wann immer eine Nachricht empfangen wird, wobei die Nachricht selbst im `data`-Attribut des `message`-Events verfügbar ist. Hier multiplizieren wir die beiden Zahlen miteinander und verwenden `postMessage()` erneut, um das Ergebnis zurück an den Haupt-Thread zu senden.

Zurück im Haupt-Thread verwenden wir `onmessage` erneut, um auf die Nachricht zu reagieren, die vom Worker zurückgesendet wurde:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier greifen wir die Nachrichtendaten ab und setzen sie als `textContent` des Ergebnisabsatzes, sodass der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` am `Worker`-Objekt angehängt werden müssen, wenn sie im Hauptskript-Thread verwendet werden, jedoch nicht, wenn sie im Worker verwendet werden. Dies liegt daran, dass im Worker der Worker effektiv der globale Scope ist.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Haupt-Thread und dem Worker übergeben wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Übertragen von Daten zu und von Workern: weitere Details](#transferring_data_to_and_from_workers_further_details) für eine viel gründlichere Erklärung.

### Einen Worker beenden

Wenn Sie einen laufenden Worker sofort aus dem Haupt-Thread heraus beenden müssen, können Sie dies tun, indem Sie die Methode [`terminate`](/de/docs/Web/API/Worker) des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn im Worker ein Laufzeitfehler auftritt, wird sein `onerror`-Ereignishandler aufgerufen. Er erhält ein Ereignis namens `error`, das die Schnittstelle `ErrorEvent` implementiert.

Das Ereignis blubbert nicht und ist abbrechbar; um die Standardaktion zu verhindern, kann der Worker die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Fehlerereignisses aufrufen.

Das Fehlerereignis verfügt über die folgenden drei Felder von Interesse:

- `message`
  - : Eine menschenlesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, in der der Fehler aufgetreten ist.

### Subworker erstellen

Worker können weitere Worker erstellen, wenn sie möchten. Diese sogenannten Subworker müssen innerhalb derselben Origin wie die übergeordnete Seite gehostet werden. Auch werden die URIs für Subworker relativ zum Standort des übergeordneten Workers und nicht zur besitzenden Seite aufgelöst. Dies erleichtert es Workern, den Überblick über ihre Abhängigkeiten zu behalten.

### Importieren von Skripten und Bibliotheken

Worker-Threads haben Zugriff auf eine globale Funktion, `importScripts()`, die es ihnen ermöglicht, Skripte zu importieren. Sie akzeptiert null oder mehr URIs als Parameter für die zu importierenden Ressourcen; alle folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes aufgelistete Skript und führt es aus. Alle globalen Objekte aus jedem Skript können dann vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` ausgelöst und der nachfolgende Code wird nicht ausgeführt. Zuvor ausgeführter Code (einschließlich Code, der mit [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) verzögert wurde) bleibt jedoch weiterhin funktionsfähig. Funktionsdeklarationen **nach** der Methode `importScripts()` bleiben ebenfalls erhalten, da diese immer vor dem Rest des Codes ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der Sie die Dateinamen in `importScripts()` übergeben. Dies erfolgt synchron; `importScripts()` gibt erst zurück, wenn alle Skripte geladen und ausgeführt wurden.

## Geteilte Worker

Ein geteilter Worker ist von mehreren Skripten aus zugänglich — selbst wenn sie von verschiedenen Fenstern, Iframes oder sogar Workern aufgerufen werden. In diesem Abschnitt werden wir den JavaScript-Code in unserem [einfachen Beispiel für geteilte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)) besprechen: Dies ist sehr ähnlich zum einfachen Beispiel für dedizierte Worker, jedoch mit zwei Funktionen, die von verschiedenen Skriptdateien behandelt werden: _zwei Zahlen multiplizieren_ oder _eine Zahl quadrieren_. Beide Skripte verwenden denselben Worker, um die benötigte Berechnung durchzuführen.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und geteilten Workern. Beachten Sie, dass es in diesem Beispiel zwei HTML-Seiten gibt, die jeweils JavaScript enthalten, das denselben einzelnen Worker verwendet.

> [!NOTE]
> Wenn SharedWorker von mehreren Browsing-Kontexten aus zugänglich ist, müssen alle diese Browsing-Kontexte die genau gleiche Origin (gleiches Protokoll, Host und Port) teilen.

> [!NOTE]
> In Firefox können geteilte Worker nicht zwischen Dokumenten geteilt werden, die in privaten und nicht privaten Fenstern geladen sind ([Firefox-Bug 1177621](https://bugzil.la/1177621)).

### Einen geteilten Worker erstellen

Einen neuen geteilten Worker zu erstellen ist fast dasselbe wie bei einem dedizierten Worker, jedoch mit einem anderen Konstruktornamen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) — jeder muss den Worker mit einem Code wie dem folgenden starten:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied besteht darin, dass bei einem geteilten Worker über ein `port`-Objekt kommuniziert werden muss — ein expliziter Port wird geöffnet, den die Skripte zur Kommunikation mit dem Worker verwenden können (dies erfolgt implizit im Fall von dedizierten Workern).

Die Portverbindung muss entweder implizit durch die Verwendung des `onmessage`-Ereignishandlers oder explizit mit der Methode `start()` gestartet werden, bevor Nachrichten gepostet werden können. Der Aufruf von `start()` ist nur erforderlich, wenn das `message`-Ereignis über die Methode `addEventListener()` verdrahtet wird.

> [!NOTE]
> Wenn die `start()`-Methode verwendet wird, um die Portverbindung zu öffnen, muss sie sowohl im übergeordneten Thread als auch im Worker-Thread aufgerufen werden, wenn eine bidirektionale Kommunikation erforderlich ist.

### Nachrichten an einen geteilten Worker senden und empfangen

Jetzt können Nachrichten wie zuvor an den Worker gesendet werden, aber die Methode `postMessage()` muss über das Port-Objekt aufgerufen werden (erneut, Sie werden ähnliche Konstrukte sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch in [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Nun zum Worker. Hier gibt es ebenfalls etwas mehr Komplexität ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

Zuerst verwenden wir einen `onconnect`-Handler, um Code auszuführen, wenn eine Verbindung zum Port hergestellt wird (d.h. wenn der `onmessage`-Ereignishandler im übergeordneten Thread eingerichtet wird oder wenn die Methode `start()` explizit im übergeordneten Thread aufgerufen wird).

Wir verwenden das `ports`-Attribut dieses Ereignisobjekts, um den Port zu ergreifen und in einer Variablen zu speichern.

Als nächstes fügen wir einen `onmessage`-Handler am Port hinzu, um die Berechnung durchzuführen und das Ergebnis an den Haupt-Thread zurückzugeben. Das Einrichten dieses `onmessage`-Handlers im Worker-Thread öffnet ebenfalls implizit die Portverbindung zurück zum übergeordneten Thread, sodass der Aufruf von `port.start()` nicht erforderlich ist, wie oben erwähnt.

Schließlich behandeln wir im Haupt-Skript die Nachricht (erneut, Sie werden ähnliche Konstrukte sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch in [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht über den Port vom Worker zurückkommt, setzen wir das Berechnungsergebnis in den entsprechenden Ergebnisabsatz ein.

## Über Thread-Sicherheit

Das [`Worker`](/de/docs/Web/API/Worker)-Interface erzeugt echte Betriebssystem-Threads, und achtsame Programmierer könnten besorgt sein, dass Parallelverarbeitung "interessante" Effekte in Ihrem Code verursachen kann, wenn Sie nicht vorsichtig sind.

Da Web Worker jedoch sorgfältig kontrollierte Kommunikationspunkte mit anderen Threads haben, ist es tatsächlich sehr schwierig, Parallelisierungsprobleme zu verursachen. Es gibt keinen Zugriff auf nicht-thread-sichere Komponenten oder das DOM. Und Sie müssen spezifische Daten in und aus einem Thread durch serialisierte Objekte übergeben. Sie müssen also sehr hart arbeiten, um Probleme in Ihrem Code zu verursachen.

## Inhalts-Sicherheitsrichtlinie

Worker gelten als separate Ausführungskontexte, die sich von dem Dokument unterscheiden, das sie erstellt hat. Aus diesem Grund unterliegen sie im Allgemeinen nicht der [Inhalts-Sicherheitsrichtlinie](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder des übergeordneten Workers), das sie erstellt hat. Ein Dokument kann beispielsweise mit dem folgenden Header geliefert werden:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem wird dies verhindern, dass Scripts, die es enthält, [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn das Skript jedoch einen Worker erstellt, kann Code, der im Kontext des Workers läuft, `eval()` verwenden.

Um eine Inhalts-Sicherheitsrichtlinie für den Worker anzugeben, legen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Antwort-Header für die Anfrage fest, die das Worker-Skript selbst ausgeliefert hat.

Die Ausnahme ist, wenn die Origin des Worker-Skripts eine global eindeutige Kennung ist (zum Beispiel, wenn seine URL ein Schema von data oder blob hat). In diesem Fall erbt der Worker die CSP des Dokuments oder Workers, der ihn erstellt hat.

## Daten zu und von Workern übertragen: weitere Details

Daten, die zwischen der Hauptseite und den Workern übermittelt werden, werden **kopiert**, nicht geteilt. Objekte werden beim Übergeben an den Worker serialisiert und anschließend am anderen Ende deserialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, das Endergebnis ist also, dass **ein Duplikat** an jedem Ende erstellt wird. Die meisten Browser implementieren diese Funktionalität als [strukturierte Klonmethode](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Um dies zu veranschaulichen, erstellen wir eine Funktion namens `emulateMessage()`, die das Verhalten eines Wertes simuliert, der _geklont und nicht geteilt_ wird, während der Passage von einem `Worker` zur Hauptseite oder umgekehrt:

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

Ein Wert, der geklont und nicht geteilt wird, wird Nachricht genannt. Wie Sie wahrscheinlich mittlerweile wissen, können _Nachrichten_ an den Haupt-Thread und von ihm aus gesendet werden, indem `postMessage()` verwendet wird und das `data`-Attribut des `message`-Ereignisses die Daten enthält, die vom Worker zurückgesendet werden.

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

Der [strukturierte Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kann JSON und einige Dinge verarbeiten, die JSON nicht verarbeiten kann – wie z. B. kreisförmige Referenzen.

### Datenübertragungsbeispiele

#### Beispiel 1: Fortgeschrittene JSON-Datenübertragung und Erstellung eines Umschaltsystems

Wenn Sie komplexe Daten übergeben müssen und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammenführt.

Zuerst erstellen wir eine `QueryableWorker`-Klasse, die die URL des Workers, einen Standard-Listener und einen Fehlerbehandler übernimmt, und diese Klasse wird eine Liste von Listenern verfolgen und uns bei der Kommunikation mit dem Worker helfen:

```js
function QueryableWorker(url, defaultListener, onError) {
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

Hier lassen wir den Worker zwei einfache Operationen ausführen, um die Handhabung zu veranschaulichen: die Differenz von zwei Zahlen zu berechnen und nach drei Sekunden eine Benachrichtigung zu machen. Um das zu erreichen, implementieren wir zuerst eine `sendQuery`-Methode, die abfragt, ob der Worker tatsächlich die entsprechenden Methoden hat, um das zu tun, was wir wollen.

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

Wir schließen `QueryableWorker` mit der `onmessage`-Methode ab. Wenn der Worker die entsprechenden Methoden hat, auf die wir abgefragt haben, sollte er den Namen des entsprechenden Listeners und die Argumente, die er benötigt, zurückgeben, wir müssen ihn nur in `listeners` finden:

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

Nun zum Worker. Zuerst müssen wir die Methoden haben, um die beiden einfachen Operationen zu handhaben:

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

// This method is called when main page calls QueryWorker's postMessage
// method directly
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
    <script>
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

Es ist möglich, den Inhalt jeder Hauptseite -> Worker und Worker -> Hauptseite Nachricht umzuschalten. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können alles sein, solange sie in `QueryableWorker` und dem `worker` konsistent sind.

### Daten durch Übergeben des Eigentums übertragen (übertragbare Objekte)

Moderne Browser enthalten eine zusätzliche Möglichkeit, bestimmte Arten von Objekten mit hoher Leistung an oder von einem Worker zu übergeben. [Übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden von einem Kontext zu einem anderen mit einer Null-Kopier-Operation übertragen, was zu einer erheblichen Leistungsverbesserung beim Senden großer Datensätze führt.

Zum Beispiel wird beim Übertragen eines {{jsxref("ArrayBuffer")}} von Ihrer Haupt-App zu einem Worker-Skript der ursprüngliche {{jsxref("ArrayBuffer")}} geleert und ist nicht mehr verwendbar. Sein Inhalt wird (buchstäblich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## Eingebettete Worker

Es gibt keinen "offiziellen" Weg, den Code eines Workers innerhalb einer Webseite einzubetten, wie {{HTMLElement("script")}}-Elemente es für normale Skripte tun. Aber ein {{HTMLElement("script")}}-Element, das kein `src`-Attribut hat und ein `type`-Attribut, das keinen ausführbaren MIME-Typ identifiziert, kann als Datensatzblockelement betrachtet werden, das JavaScript verwenden könnte. "Datenblöcke" ist eine allgemeinere Funktion von HTML, die fast alle Textdaten tragen kann. Ein Worker könnte also auf diese Weise eingebettet werden:

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

Der eingebettete Worker ist jetzt in eine neue benutzerdefinierte `document.worker`-Eigenschaft eingebettet.

Es ist auch erwähnenswert, dass Sie auch eine Funktion in ein Blob umwandeln und dann eine Objekt-URL aus diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele zur Verwendung von Web Workern.

### Berechnungen im Hintergrund ausführen

Worker sind hauptsächlich nützlich, um Ihrem Code zu ermöglichen, rechenintensive Berechnungen auszuführen, ohne den Benutzeroberflächen-Thread zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code wird in der "fibonacci.js"-Datei gespeichert, auf die im HTML im nächsten Abschnitt verwiesen wird.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfängt, die gesendet werden, wenn die Methode `postMessage()` des Worker-Objekts aufgerufen wird. Dies führt die Mathematik aus und gibt schließlich das Ergebnis an den Haupt-Thread zurück.

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

Die Webseite erstellt ein `<p>`-Element mit der ID `result`, das zur Anzeige des Ergebnisses verwendet wird, und startet dann den Worker. Nachdem der Worker gestartet wurde, wird der `onmessage`-Handler konfiguriert, um die Ergebnisse anzuzeigen, indem der Inhalt des `<p>`-Elements festgelegt wird, und der `onerror`-Handler setzt die Fehlermeldung auf der Entwicklertools-Konsole zu protokollieren.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu beginnen.

[Versuchen Sie dieses Beispiel live](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufgaben unter mehreren Workern aufteilen

Da Multicore-Computer immer häufiger werden, ist es oft nützlich, rechnerintensive Aufgaben auf mehrere Worker zu verteilen, die dann diese Aufgaben auf mehreren Prozessor-Kernen ausführen können.

## Andere Arten von Workern

Zusätzlich zu dedizierten und geteilten Web Workern gibt es andere Arten von Workern:

- [ServiceWorker](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen sowie dem Browser und Netzwerk (falls verfügbar) sitzen. Sie sollen unter anderem die Erstellung effektiver Offline-Erfahrungen ermöglichen, indem sie Netzwerk-Anfragen abfangen und je nach Verfügbarkeit des Netzwerks und aktualisierter Assets auf dem Server angemessene Maßnahmen ergreifen. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrundsynchronisierungs-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bietet die Möglichkeit, direkt skriptbasierte Audioverarbeitung in einem Worklet-Kontext (eine leichte Version eines Workers) auszuführen.

## Debugging von Worker-Threads

Die meisten Browser ermöglichen es Ihnen, Web Worker in ihren JavaScript-Debuggern _genau auf dieselbe Weise_ wie das Debuggen des Haupt-Threads zu debuggen! Zum Beispiel listen sowohl Firefox als auch Chrome JavaScript-Quelldateien sowohl für den Haupt-Thread als auch für aktive Worker-Threads auf, und alle diese Dateien können geöffnet werden, um Haltepunkte und Protokollpunkte zu setzen.

Um zu lernen, wie man Web Worker debuggt, sehen Sie sich die Dokumentation zu den JavaScript-Debuggern der einzelnen Browser an:

- [Chrome Sources panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

Um Entwicklertools für Web Worker zu öffnen, können Sie die folgenden URLs verwenden:

- Edge: `edge://inspect/`
- Chrome: `chrome://inspect/`
- Firefox: `about:debugging#/runtime/this-firefox`

Diese Seiten zeigen eine Übersicht über alle Service Worker. Sie müssen den relevanten anhand der URL finden und dann auf _inspect_ klicken, um auf Entwicklertools wie die Konsole und den Debugger für diesen Worker zuzugreifen.

## Funktionen und Schnittstellen, die in Workern verfügbar sind

Sie können die meisten Standard-JavaScript-Features in einem Web Worker verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptsächliche, was Sie in einem Worker _nicht_ tun können, ist, die übergeordnete Seite direkt zu beeinflussen. Dazu gehört das Manipulieren des DOMs und die Verwendung von Objekten dieser Seite. Sie müssen es indirekt tun, indem Sie eine Nachricht zurück an das Hauptskript über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) senden und die Änderungen dann im Ereignishandler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode für Worker verfügbar ist, indem Sie die Seite: <https://worker-playground.glitch.me/>. Wenn Sie zum Beispiel [`EventSource`](/de/docs/Web/API/EventSource) in die Seite auf Firefox 84 eingeben, werden Sie sehen, dass dies in Service Workern nicht unterstützt wird, aber in dedizierten und geteilten Workern.

> [!NOTE]
> Für eine vollständige Liste der Funktionen, die den Workern zur Verfügung stehen, siehe [Funktionen und Schnittstellen, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Schnittstelle
- [Funktionen, die Arbeitern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Schnittstelle
