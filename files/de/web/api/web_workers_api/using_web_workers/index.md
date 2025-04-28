---
title: Verwenden von Web Workers
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{DefaultAPISidebar("Web Workers API")}}

Web Workers sind ein einfacher Weg für Webinhalte, um Skripte in Hintergrund-Threads auszuführen. Der Worker-Thread kann Aufgaben erledigen, ohne die Benutzeroberfläche zu beeinflussen. Zusätzlich können sie Netzwerk-Anfragen über die APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen. Sobald erstellt, kann ein Worker Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen von diesem Code angegebenen Ereignis-Handler postet (und umgekehrt).

Dieser Artikel bietet eine detaillierte Einführung in die Verwendung von Web Workers.

## Web Workers API

Ein Worker ist ein Objekt, das über einen Konstruktor erstellt wird (z. B. [`Worker()`](/de/docs/Web/API/Worker/Worker)), das eine benannte JavaScript-Datei ausführt – diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext, der sich vom aktuellen [`window`](/de/docs/Web/API/Window) unterscheidet. Daher wird die Verwendung der Abkürzung [`window`](/de/docs/Web/API/Window), um den aktuellen globalen Bereich innerhalb eines [`Worker`](/de/docs/Web/API/Worker) zu erhalten (anstatt [`self`](/de/docs/Web/API/Window/self)), einen Fehler zurückgeben.

Der Worker-Kontext wird im Fall von dedizierten Workern durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) Objekt repräsentiert (standardmäßige Worker, die von einem einzigen Skript verwendet werden; geteilte Worker nutzen [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)). Ein dedizierter Worker ist nur vom Skript aus zugänglich, das ihn zuerst gestartet hat, während geteilte Worker von mehreren Skripten aus zugänglich sind.

> [!NOTE]
> Siehe [Die Web Workers API Startseite](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentationen zu Workern und zusätzliche Leitfäden.

Man kann im Worker-Thread beliebigen Code ausführen, mit einigen Ausnahmen. Zum Beispiel kann man nicht direkt das DOM vom Inneren eines Workers manipulieren oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window) Objekts verwenden. Aber man kann eine große Anzahl von Elementen unter `window` nutzen, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Daten-Speichermethoden wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Siehe [Funktionen und Klassen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) für mehr Details.

Daten werden zwischen Workern und dem Haupt-Thread über ein Nachrichtensystem gesendet – beide Seiten senden ihre Nachrichten mit der `postMessage()` Methode und antworten auf Nachrichten über den `onmessage` Ereignis-Handler (die Nachricht ist innerhalb des [`message`](/de/docs/Web/API/Worker/message_event) Ereignis-Datenattributs enthalten). Die Daten werden kopiert, anstatt geteilt.

Worker können auch neue Worker erstellen, solange diese Worker im gleichen {{Glossary("origin", "origin")}} wie die übergeordnete Seite gehostet werden.

Zusätzlich können Worker Netzwerk-Anfragen über die APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen (obwohl zu beachten ist, dass das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur durch das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt werden wir den JavaScript-Code in unserem [Grundlegenden Beispiel für dedizierte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) besprechen ([dedizierter Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)): Dies erlaubt es Ihnen, zwei Zahlen einzugeben, die miteinander multipliziert werden. Die Zahlen werden an einen dedizierten Worker gesendet, miteinander multipliziert, und das Ergebnis wird an die Seite zurückgegeben und angezeigt.

Dieses Beispiel ist eher trivial, aber wir haben beschlossen, es einfach zu halten, während wir Ihnen grundlegende Worker-Konzepte vorstellen. Fortgeschrittenere Details werden später im Artikel behandelt.

### Erkennung der Worker-Funktion

Für eine etwas kontrolliertere Fehlerbehandlung und Abwärtskompatibilität ist es eine gute Idee, Ihren Worker-Zugriffscode im Folgenden zu verpacken ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

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
> Bundler, einschließlich [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, URLs zu übergeben, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) im `Worker()` Konstruktor aufgelöst werden. Zum Beispiel:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript anstatt zur aktuellen HTML-Seite, was es dem Bundler ermöglicht, Optimierungen wie Umbenennungen sicher durchzuführen (denn andernfalls könnte die `worker.js` URL auf eine Datei verweisen, die nicht vom Bundler kontrolliert wird, sodass keine Annahmen getroffen werden können).

### Nachrichten an einen dedizierten Worker senden und empfangen

Die Magie der Worker passiert über die [`postMessage()`](/de/docs/Web/API/Worker/postMessage) Methode und den [`onmessage`](/de/docs/Web/API/Worker/message_event) Ereignis-Handler. Wenn Sie eine Nachricht an den Worker senden wollen, posten Sie Nachrichten so ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Hier haben wir zwei {{htmlelement("input")}} Elemente, die durch die Variablen `first` und `second` dargestellt werden; wenn sich der Wert eines der beiden ändert, wird `myWorker.postMessage([first.value,second.value])` verwendet, um die Werte in beide an den Worker zu senden, als ein Array. Sie können fast alles, was Sie wollen, in der Nachricht senden.

Im Worker können wir reagieren, wenn die Nachricht empfangen wird, indem wir einen Ereignis-Handler-Block wie diesen schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage` Handler erlaubt es uns, Code auszuführen, wann immer eine Nachricht empfangen wird, wobei die Nachricht selbst im `data` Attribut des `message` Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen und verwenden dann erneut `postMessage()`, um das Ergebnis an den Haupt-Thread zurückzusenden.

Zurück im Haupt-Thread verwenden wir erneut `onmessage`, um auf die Nachricht zu reagieren, die vom Worker zurückgesendet wurde:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier entnehmen wir die Nachrichtendaten und setzen sie als `textContent` des Ergebnis-Absatzes, damit der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` an das `Worker` Objekt angehängt werden müssen, wenn sie im Hauptskript-Thread verwendet werden, aber nicht, wenn sie im Worker verwendet werden. Dies liegt daran, dass der Worker innerhalb des Workers effektiv der globale Bereich ist.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Haupt-Thread und dem Worker übergeben wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Datenübertragung zu und von Workern: weitere Details](#transferring_data_to_and_from_workers_further_details) für eine viel gründlichere Erklärung.

### Beenden eines Worker's

Wenn Sie einen laufenden Worker sofort aus dem Haupt-Thread beenden müssen, können Sie dies tun, indem Sie die Method [`terminate`](/de/docs/Web/API/Worker) des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn ein Laufzeitfehler im Worker auftritt, wird sein `onerror` Ereignis-Handler aufgerufen. Es empfängt ein Ereignis mit dem Namen `error`, das das Interface `ErrorEvent` implementiert.

Das Ereignis wird nicht weitergeleitet und ist stornierbar; um die Standardaktion zu verhindern, kann der Worker die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Error-Ereignisses aufrufen.

Das Error-Ereignis hat die folgenden drei Felder von Interesse:

- `message`
  - : Eine menschenlesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, in der der Fehler aufgetreten ist.

### Starten von Unterarbeitern

Worker können, wenn sie möchten, andere Worker starten. So genannte Unterarbeiter müssen im gleichen Ursprungsbereich wie die übergeordnete Seite gehostet sein. Auch die URIs für Unterarbeiter werden relativ zur Position des übergeordneten Workers und nicht zur der besitzenden Seite aufgelöst. Dies erleichtert es den Workern, den Überblick zu behalten, wo sich ihre Abhängigkeiten befinden.

### Importieren von Skripten und Bibliotheken

Worker-Threads haben Zugriff auf eine globale Funktion, `importScripts()`, mit der sie Skripte importieren können. Es akzeptiert null oder mehr URIs als Parameter zu Ressourcen zum Importieren; alle folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes gelistete Skript und führt es aus. Alle globalen Objekte aus jedem Skript können dann vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` ausgelöst und nachfolgender Code wird nicht ausgeführt. Zuvor ausgeführter Code (einschließlich zurückgestelltem Code unter Verwendung von [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)) bleibt jedoch funktionsfähig. Funktionsdeklarationen **nach** der `importScripts()` Methode werden ebenfalls beibehalten, da diese immer vor dem Rest des Codes ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der Sie die Dateinamen in `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` kehrt erst zurück, wenn alle Skripte geladen und ausgeführt wurden.

## Geteilte Worker

Ein geteilter Worker ist von mehreren Skripten zugänglich – selbst wenn sie von verschiedenen Fenstern, iframes oder sogar Workern aufgerufen werden. In diesem Abschnitt werden wir den JavaScript-Code in unserem [Grundlegenden Beispiel für geteilte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) besprechen ([geteilter Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)): Dies ist sehr ähnlich zum grundlegenden Beispiel für dedizierte Worker, mit dem Unterschied, dass es zwei verfügbare Funktionen gibt, die von verschiedenen Skriptdateien ausgeführt werden: _Multiplizieren zweier Zahlen_ oder _Quadrieren einer Zahl_. Beide Skripte verwenden denselben Worker, um die benötigte Berechnung durchzuführen.

Hier werden wir uns auf die Unterschiede zwischen dedizierten und geteilten Workern konzentrieren. Beachten Sie, dass wir in diesem Beispiel zwei HTML-Seiten haben, jede mit JavaScript, das den gleichen einzelnen Worker verwendet.

> [!NOTE]
> Wenn ein SharedWorker von mehreren Browsing-Kontexten aus zugänglich ist, müssen alle diese Browsing-Kontexte exakt den gleichen Ursprung (dasselbe Protokoll, denselben Host und denselben Port) teilen.

> [!NOTE]
> In Firefox können geteilte Worker nicht zwischen Dokumenten, die in privaten und nicht privaten Fenstern geladen sind, geteilt werden ([Firefox Fehler 1177621](https://bugzil.la/1177621)).

### Starten eines geteilten Workers

Das Starten eines neuen geteilten Workers ist fast dasselbe wie bei einem dedizierten Worker, jedoch mit einem anderen Konstruktorname (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) – jeder muss den Worker mit einem Code wie dem folgenden starten:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied ist, dass man mit einem geteilten Worker über ein `port` Objekt kommunizieren muss – ein expliziter Port wird geöffnet, den die Skripte verwenden können, um mit dem Worker zu kommunizieren (dies geschieht implizit im Fall von dedizierten Workern).

Die Portverbindung muss entweder implizit durch Verwendung des `onmessage` Ereignis-Handlers oder explizit mit der `start()` Methode gestartet werden, bevor Nachrichten gesendet werden können. Das Aufrufen von `start()` ist nur erforderlich, wenn das `message` Ereignis über die `addEventListener()` Methode verdrahtet wird.

> [!NOTE]
> Beim Verwenden der `start()` Methode zum Öffnen der Portverbindung muss sie sowohl vom übergeordneten Thread als auch vom Worker-Thread aufgerufen werden, wenn eine Zwei-Wege-Kommunikation erforderlich ist.

### Nachrichten an einen geteilten Worker senden und empfangen

Nun können Nachrichten an den Worker wie zuvor gesendet werden, aber die `postMessage()` Methode muss über das `port` Objekt aufgerufen werden (wieder werden Sie ähnliche Konstrukte in sowohl [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js)):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Nun zum Worker. Es gibt hier auch ein wenig mehr Komplexität ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

Zuerst verwenden wir einen `onconnect` Handler, um einen Code zu feuern, wenn eine Verbindung zum Port hergestellt wird (d.h. wenn der `onmessage` Ereignis-Handler im übergeordneten Thread eingerichtet ist oder wenn die `start()` Methode explizit im übergeordneten Thread aufgerufen wird).

Wir verwenden das `ports` Attribut dieses Ereignisobjekts, um den Port zu greifen und in einer Variablen zu speichern.

Als nächstes fügen wir einen `onmessage` Handler am Port hinzu, um die Berechnung durchzuführen und das Ergebnis an den Haupt-Thread zurückzugeben. Das Einrichten dieses `onmessage` Handlers im Worker-Thread öffnet auch implizit die Portverbindung zurück zum übergeordneten Thread, sodass der Aufruf von `port.start()` tatsächlich nicht erforderlich ist, wie oben erwähnt.

Schließlich bearbeiten wir im Hauptskript die Nachricht (wiederum werden Sie ähnliche Konstrukte in sowohl [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht durch den Port vom Worker zurückkommt, setzen wir das Kalkulationsergebnis in den entsprechenden Ergebnisabsatz ein.

## Über Threadsicherheit

Das [`Worker`](/de/docs/Web/API/Worker) Interface startet echte OS-Level Threads, und aufmerksame Programmierer könnten befürchten, dass Concurrency "interessante" Effekte in Ihrem Code verursachen kann, wenn Sie nicht vorsichtig sind.

Jedoch, da Web Worker sorgfältig kontrollierte Kommunikation zu anderen Threads haben, ist es tatsächlich sehr schwer, Concurrency-Probleme zu verursachen. Es gibt keinen Zugriff auf nicht-Thread-sichere Komponenten oder das DOM. Und man muss spezifische Daten in und aus einem Thread über serialisierte Objekte übergeben. Also muss man wirklich hart arbeiten, um Probleme in seinem Code zu verursachen.

## Content Security Policy

Worker gelten als haben ihren eigenen Ausführungskontext, der sich von dem Dokument unterscheidet, das sie erstellt hat. Deshalb werden sie im Allgemeinen nicht von der [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder übergeordneten Workers) reguliert, das sie erstellt hat. Wenn ein Dokument z. B. mit dem folgenden Header bereitgestellt wird:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem wird dies verhindern, dass Scripts, die es inkludiert, [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn das Script jedoch einen Worker erstellt, wird der im Kontext des Workers ausgeführte Code _in der Lage sein_, `eval()` zu verwenden.

Um eine Content Security Policy für den Worker festzulegen, verwenden Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) Antwort-Header für die Anfrage, die das Worker's Skript selbst liefert.

Die Ausnahme dazu ist, wenn der Ursprung des Workers ein global einmaliger Bezeichner ist (zum Beispiel, wenn seine URL ein Schema von Daten oder Blob hat). In diesem Fall erbt der Worker die CSP des Dokuments oder Workers, der sie erstellt hat.

## Daten zu und von Workern übertragen: Weitere Details

Daten, die zwischen der Hauptseite und Workern übergeben werden, werden **kopiert**, nicht geteilt. Objekte werden seriell übergeben, wenn sie dem Worker übergeben werden, und werden anschließend am anderen Ende deserialisiert. Die Seite und der Worker **teilen nicht die gleiche Instanz**, sodass am Ende **ein Duplikat** an jedem Ende erstellt wird. Die meisten Browser implementieren diese Funktion als [strukturiertes Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Um dies zu veranschaulichen, erstellen wir eine Funktion namens `emulateMessage()`, die das Verhalten eines Werts simuliert, der beim Übergang von einem `worker` zur Hauptseite oder umgekehrt _geklont und nicht geteilt_ wird:

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

Ein Wert, der geklont und nicht geteilt ist, wird _message_ genannt. Wie Sie wahrscheinlich schon wissen, können _messages_ mit `postMessage()` an und von dem Haupt-Thread gesendet werden, und das [`data`](/de/docs/Web/API/MessageEvent/data) Attribut des `message` Ereignisses enthält Daten, die vom Worker zurückgesendet werden.

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

Der [strukturierte Klon](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) Algorithmus kann JSON und einige Dinge akzeptieren, die JSON nicht kann – wie z. B. zirkuläre Referenzen.

### Beispiele zum Übergeben von Daten

#### Beispiel 1: Fortgeschrittenes Übergeben von JSON-Daten und Erstellen eines Umschaltsystems

Wenn Sie komplexe Daten übergeben müssen und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammen gruppiert.

Zuerst erstellen wir eine `QueryableWorker` Klasse, die die URL des Workers, einen Standard-Listener und einen Fehler-Handler nimmt, und diese Klasse wird eine Liste von Listenern verfolgen und uns helfen, mit dem Worker zu kommunizieren:

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

Hier lassen wir den Worker zwei einfache Operationen zur Veranschaulichung ausführen: die Differenz von zwei Zahlen ermitteln und nach drei Sekunden eine Warnung auslösen. Um dies zu erreichen, implementieren wir zuerst eine `sendQuery` Methode, die abfragt, ob der Worker tatsächlich über die entsprechenden Methoden verfügt, um das zu tun, was wir wollen.

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

Wir beenden QueryableWorker mit der `onmessage` Methode. Wenn der Worker über die entsprechenden Methoden verfügt, die wir abgefragt haben, sollte er den Namen des entsprechenden Listeners und die Argumente, die er benötigt, zurückgeben, wir müssen sie einfach in `listeners` finden:

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

Nun zum Worker. Zuerst müssen wir die Methoden zur Handhabung der zwei einfachen Operationen haben:

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

Und die `onmessage` Methode ist jetzt trivial:

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

Es ist möglich, den Inhalt jeder mainpage -> worker und worker -> mainpage Nachricht zu wechseln. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können alles sein, solange sie in `QueryableWorker` und `worker` konsistent sind.

### Übergeben von Daten durch Eigentumsübertragung (übertragbare Objekte)

Moderne Browser enthalten eine weitere Möglichkeit, bestimmte Arten von Objekten mit hoher Leistung zu oder von einem Worker zu übergeben. [Transferable objects](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden von einem Kontext in einen anderen mit einer zero-copy Operation übertragen, was zu einer enormen Leistungsverbesserung beim Senden großer Datensätze führt.

Zum Beispiel, wenn Sie eine {{jsxref("ArrayBuffer")}} von Ihrer Hauptanwendung an ein Worker-Skript übertragen, wird der ursprüngliche {{jsxref("ArrayBuffer")}} gelöscht und ist nicht mehr verwendbar. Sein Inhalt wird (ganz wörtlich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## Eingebettete Worker

Es gibt keinen "offiziellen" Weg, den Code eines Workers innerhalb einer Webseite einzubetten, so wie {{HTMLElement("script")}} Elemente dies für normale Skripte tun. Aber ein {{HTMLElement("script")}} Element, das kein `src` Attribut hat und ein `type` Attribut besitzt, das keinen ausführbaren MIME-Typ identifiziert, kann als Datenblockelement betrachtet werden, das JavaScript verwenden könnte. "Datenblöcke" sind eine allgemeinere HTML-Funktion, die fast alle Textdaten tragen kann. Ein Worker könnte also auf diese Weise eingebettet werden:

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

Der eingebettete Worker ist jetzt in einer neuen benutzerdefinierten `document.worker` Eigenschaft eingebettet.

Es ist auch erwähnenswert, dass Sie auch eine Funktion in ein Blob konvertieren und dann eine Objekt-URL aus diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele dazu, wie man Web Workers verwendet.

### Durchführen von Berechnungen im Hintergrund

Worker sind hauptsächlich nützlich, damit Ihr Code rechenintensive Berechnungen durchführen kann, ohne den Benutzeroberflächen-Thread zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code wird in der Datei "fibonacci.js" gespeichert, auf die im nächsten Abschnitt in HTML verwiesen wird.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die empfangene Nachrichten behandelt, wenn die `postMessage()` Methode des Worker-Objekts aufgerufen wird. Diese führt die mathematischen Berechnungen durch und gibt schließlich das Ergebnis an den Haupt-Thread zurück.

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

Die Webseite erstellt ein `<p>` Element mit der ID `result`, das verwendet wird, um das Ergebnis anzuzeigen, und startet dann den Worker. Nachdem der Worker gestartet wurde, wird der `onmessage` Handler konfiguriert, um die Ergebnisse anzuzeigen, indem der Inhalt des `<p>` Elements gesetzt wird, und der `onerror` Handler wird gesetzt, um die Fehlermeldung an die Devtools-Konsole zu protokollieren.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Versuchen Sie dieses Beispiel live](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufgaben auf mehrere Worker aufteilen

Da Mehrkern-Prozessoren immer häufiger werden, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker aufzuteilen, die diese Aufgaben dann auf mehreren Prozessorkernen ausführen können.

## Andere Arten von Workern

Zusätzlich zu den dedizierten und geteilten Web Workern gibt es andere Arten von Workern:

- [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (wenn verfügbar) stehen. Sie sollen (unter anderem) die Erstellung effektiver Offline-Erfahrungen ermöglichen, Netzwerk-Anfragen abfangen und entsprechende Maßnahmen basierend darauf ergreifen, ob das Netzwerk verfügbar ist und aktualisierte Assets auf dem Server vorhanden sind. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrund-Sync-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bieten die Möglichkeit, direkt skriptbasiertes Audioverarbeiten in einem Worklet-Kontext zu erledigen (eine leichte Version von Worker).

## Debuggen von Worker-Threads

Die meisten Browser ermöglichen es Ihnen, Web Worker in ihren JavaScript-Debuggern _genau auf die gleiche Weise_ zu debuggen wie den Haupt-Thread! Zum Beispiel listen sowohl Firefox als auch Chrome JavaScript-Quelldateien für sowohl den Haupt-Thread als auch aktive Worker-Threads auf, und all diese Dateien können geöffnet werden, um Haltepunkte und Logpunkte zu setzen.

Um zu lernen, wie man Web Worker debuggt, siehe die Dokumentation für den JavaScript-Debugger jedes Browsers:

- [Chrome Quellenpanel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

Um Devtools für Web Worker zu öffnen, können Sie die folgenden URLs verwenden:

- Edge: `edge://inspect/`
- Chrome: `chrome://inspect/`
- Firefox: `about:debugging#/runtime/this-firefox`

Diese Seiten zeigen einen Überblick über alle Service Worker. Sie müssen den relevanten nach der URL suchen und dann auf _inspektieren_ klicken, um Zugriff auf Devtools wie die Konsole und den Debugger für diesen Worker zu erhalten.

## Funktionen und Schnittstellen, die Workern zur Verfügung stehen

Sie können die meisten Standard-JavaScript-Funktionen in einem Web Worker verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptsächliche, was Sie _nicht_ in einem Worker machen können, ist direkt die übergeordnete Seite zu beeinflussen. Dazu gehört die Manipulation des DOMs und die Verwendung der Objekte dieser Seite. Sie müssen es indirekt tun, indem Sie eine Nachricht zurück zum Hauptskript über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) senden und dann die Änderungen im Ereignis-Handler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode Worker zur Verfügung steht, indem Sie die Seite: <https://worker-playground.glitch.me/> verwenden. Wenn Sie beispielsweise [`EventSource`](/de/docs/Web/API/EventSource) in die Seite auf Firefox 84 eingeben, werden Sie sehen, dass dies nicht in Service Workern unterstützt wird, aber in dedizierten und geteilten Workern.

> [!NOTE]
> Eine vollständige Liste der Funktionen, die Workern zur Verfügung stehen, finden Sie unter [Funktionen und Schnittstellen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker) Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle
- [Funktionen verfügbar für Worker](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Schnittstelle
