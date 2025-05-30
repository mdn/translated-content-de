---
title: Verwendung von Web Workers
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{DefaultAPISidebar("Web Workers API")}}

Web Workers sind ein einfaches Mittel, um Webinhalte Skripte in Hintergrund-Threads ausführen zu lassen. Der Worker-Thread kann Aufgaben ausführen, ohne die Benutzeroberfläche zu beeinträchtigen. Außerdem können sie Netzwerkanfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen. Einmal erstellt, kann ein Worker Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen von diesem Code spezifizierten Ereignishandlers postet (und umgekehrt).

Dieser Artikel bietet eine detaillierte Einführung in die Verwendung von Web Workers.

## Web Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor (z.B. [`Worker()`](/de/docs/Web/API/Worker/Worker)) erstellt wird und eine benannte JavaScript-Datei ausführt – diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext als das aktuelle [`window`](/de/docs/Web/API/Window). Daher wird die Verwendung der [`window`](/de/docs/Web/API/Window)-Abkürzung, um den aktuellen globalen Bereich innerhalb eines [`Worker`](/de/docs/Web/API/Worker) zu erhalten, einen Fehler zurückgeben, anstatt [`self`](/de/docs/Web/API/Window/self) zu verwenden.

Der Worker-Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt im Fall von dedizierten Workern (Standard-Worker, die von einem einzigen Skript genutzt werden; geteilte Worker verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)) repräsentiert. Ein dedizierter Worker ist nur von dem Skript zugänglich, das ihn zuerst erstellt hat, während auf geteilte Worker von mehreren Skripten aus zugegriffen werden kann.

> [!NOTE]
> Sehen Sie sich die [Übersichtsseite der Web Workers API](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentation zu Workern und zusätzliche Leitfäden an.

Sie können fast beliebigen Code innerhalb des Worker-Threads ausführen, mit einigen Ausnahmen. Zum Beispiel können Sie nicht direkt das DOM von innerhalb eines Workers manipulieren oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts verwenden. Aber Sie können eine große Anzahl von Elementen verwenden, die unter `window` verfügbar sind, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Datenhaltungsmethoden wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Weitere Details finden Sie unter [Funktionen und Klassen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

Daten werden zwischen Workern und dem Hauptthread über ein Nachrichtensystem gesendet – beide Seiten senden ihre Nachrichten mit der `postMessage()`-Methode und reagieren auf Nachrichten über den `onmessage`-Ereignishandler (die Nachricht befindet sich im `data`-Attribut des [`message`](/de/docs/Web/API/Worker/message_event)-Ereignisses). Die Daten werden kopiert und nicht geteilt.

Worker können wiederum neue Worker erstellen, vorausgesetzt, dass diese Worker dieselbe {{Glossary("origin", "Herkunft")}} wie die übergeordnete Seite haben.

Zusätzlich können Worker Netzwerkanfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen (obwohl das [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Attribut von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur durch das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt besprechen wir das JavaScript aus unserem [einfachen Beispiel für dedizierte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([führ dedizierten Worker aus](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)): Dies ermöglicht es Ihnen, zwei Zahlen einzugeben, die miteinander multipliziert werden. Die Zahlen werden an einen dedizierten Worker gesendet, miteinander multipliziert, und das Ergebnis wird zur Seite zurückgesendet und angezeigt.

Dieses Beispiel ist ziemlich trivial, aber wir haben uns entschieden, es einfach zu halten, während wir Sie in grundlegende Worker-Konzepte einführen. Fortgeschrittenere Details werden später im Artikel behandelt.

### Worker-Funktionserkennung

Für eine etwas kontrolliertere Fehlerbehandlung und Abwärtskompatibilität ist es eine gute Idee, Ihren Worker-Zugriffscode wie folgt einzupacken ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
if (window.Worker) {
  // …
}
```

### Erstellen eines dedizierten Workers

Einen neuen Worker zu erstellen ist einfach. Alles, was Sie tun müssen, ist den [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor aufzurufen und die URI eines Skripts anzugeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
const myWorker = new Worker("worker.js");
```

> [!NOTE]
> Bundler, einschließlich [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, dem `Worker()`-Konstruktor URLs zu übergeben, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) aufgelöst werden. Zum Beispiel:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript anstatt zur aktuellen HTML-Seite, was es dem Bundler ermöglicht, Optimierungen wie Umbenennungen sicher durchzuführen (da sonst die `worker.js`-URL möglicherweise auf eine Datei zeigt, die nicht vom Bundler kontrolliert wird, wodurch keine Annahmen gemacht werden können).

### Senden von Nachrichten an und von einem dedizierten Worker

Die Magie der Worker geschieht über die Methode [`postMessage()`](/de/docs/Web/API/Worker/postMessage) und den [`onmessage`](/de/docs/Web/API/Worker/message_event)-Ereignishandler. Wenn Sie eine Nachricht an den Worker senden möchten, senden Sie Nachrichten wie folgt an ihn ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Hier haben wir zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` repräsentiert werden; wenn sich der Wert eines der beiden ändert, wird `myWorker.postMessage([first.value,second.value])` verwendet, um die Werte beider in einem Array an den Worker zu senden. Sie können nahezu alles, was Sie möchten, in der Nachricht senden.

Im Worker können wir reagieren, wenn die Nachricht empfangen wird, indem wir einen Ereignishandler-Block wie diesen schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage`-Handler ermöglicht es uns, Code auszuführen, sobald eine Nachricht empfangen wird, wobei die Nachricht selbst im `data`-Attribut des `message`-Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen und verwenden dann erneut `postMessage()`, um das Ergebnis zurück an den Haupt-Thread zu senden.

Zurück im Haupt-Thread verwenden wir erneut `onmessage`, um auf die vom Worker zurückgesendete Nachricht zu reagieren:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier holen wir uns die Daten des Nachrichtenevents und setzen sie als `textContent` des Ergebnis-Absatzes, sodass der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` am `Worker`-Objekt aufgehängt werden müssen, wenn sie im Hauptskript-Thread verwendet werden, jedoch nicht, wenn sie im Worker verwendet werden. Dies liegt daran, dass der Worker innerhalb des Workers effektiv der globale Bereich ist.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Haupt-Thread und dem Worker übertragen wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Übertragen von Daten zu und von Workern: weitere Details](#transferring_data_to_and_from_workers_further_details) für eine viel gründlichere Erklärung.

### Beenden eines Workers

Wenn Sie einen laufenden Worker sofort vom Haupt-Thread aus beenden müssen, können Sie dies durch Aufruf der Methode [`terminate`](/de/docs/Web/API/Worker) des Workers tun:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn ein Laufzeitfehler im Worker auftritt, wird dessen `onerror`-Ereignishandler aufgerufen. Es erhält ein Ereignis namens `error`, das die `ErrorEvent`-Schnittstelle implementiert.

Das Ereignis ist nicht durchlässig und kann abgebrochen werden; um die Standardaktion zu verhindern, kann der Worker die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Error-Events aufrufen.

Das Error-Event hat die folgenden drei Felder, die von Interesse sind:

- `message`
  - : Eine menschenlesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, in der der Fehler aufgetreten ist.

### Erstellen von Unterworkern

Worker können weitere Worker erstellen, wenn sie möchten. Sogenannte Unterworker müssen innerhalb derselben Herkunft wie die übergeordnete Seite gehostet werden. Außerdem werden die URIs für Unterworker relativ zum Speicherort des übergeordneten Workers und nicht zur besitzenden Seite aufgelöst. Dies erleichtert es Workern, den Überblick darüber zu behalten, wo sich ihre Abhängigkeiten befinden.

### Importieren von Skripten und Bibliotheken

Worker-Threads haben Zugriff auf eine globale Funktion, `importScripts()`, die es ihnen ermöglicht, Skripte zu importieren. Sie akzeptiert eine oder mehrere URI als Parameter zu Ressourcen, die importiert werden sollen; alle folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes aufgelistete Skript und führt es aus. Alle globalen Objekte jedes Skripts können anschließend vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` ausgelöst, und nachfolgender Code wird nicht ausgeführt. Zuvor ausgeführter Code (einschließlich Code, der mit [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) verzögert wurde) bleibt jedoch funktionsfähig. Funktionsdeklarationen **nach** der `importScripts()`-Methode werden ebenfalls beibehalten, da diese immer vor dem Rest des Codes ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der die Dateinamen an `importScripts()` übergeben werden. Dies geschieht synchron; `importScripts()` gibt erst zurück, wenn alle Skripte geladen und ausgeführt wurden.

## Geteilte Worker

Ein geteilter Worker ist von mehreren Skripten zugänglich – selbst wenn sie von verschiedenen Fenstern, iframes oder sogar Workern aufgerufen werden. In diesem Abschnitt besprechen wir das JavaScript aus unserem [einfachen Beispiel für geteilte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([führe geteilten Worker aus](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)): Dies ist dem grundlegenden Beispiel für dedizierte Worker sehr ähnlich, mit dem Unterschied, dass es zwei verfügbare Funktionen gibt, die von verschiedenen Skriptdateien behandelt werden: _zwei Zahlen multiplizieren_ oder _eine Zahl quadrieren_. Beide Skripte verwenden denselben Worker, um die erforderliche Berechnung auszuführen.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und geteilten Workern. Beachten Sie, dass wir in diesem Beispiel zwei HTML-Seiten haben, von denen jede ein JavaScript enthält, das denselben einzelnen Worker verwendet.

> [!NOTE]
> Wenn auf SharedWorker von mehreren Browsing-Kontexten zugegriffen werden kann, müssen alle diese Browsing-Kontexte genau dieselbe Herkunft (gleiches Protokoll, Host und Port) teilen.

> [!NOTE]
> In Firefox können geteilte Worker nicht zwischen in privaten und nicht-privaten Fenstern geladenen Dokumenten geteilt werden ([Firefox Fehler 1177621](https://bugzil.la/1177621)).

### Erstellen eines geteilten Workers

Das Erstellen eines neuen geteilten Workers ist nahezu dasselbe wie bei einem dedizierten Worker, jedoch mit einem anderen Konstruktor-Namen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) – jeder muss den Worker mit Code wie dem folgenden starten:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied besteht darin, dass bei einem geteilten Worker über ein `port`-Objekt kommuniziert werden muss – ein expliziter Port wird geöffnet, über den die Skripte mit dem Worker kommunizieren können (dies geschieht implizit im Fall von dedizierten Workern).

Die Portverbindung muss entweder implizit durch die Verwendung des `onmessage`-Ereignishandlers oder explizit mit der `start()`-Methode gestartet werden, bevor Nachrichten gesendet werden können. Ein Aufruf von `start()` ist nur erforderlich, wenn das `message`-Ereignis über die `addEventListener()`-Methode verdrahtet wird.

> [!NOTE]
> Wenn die `start()`-Methode verwendet wird, um die Portverbindung zu öffnen, muss sie sowohl vom Eltern-Thread als auch vom Worker-Thread aufgerufen werden, wenn eine bidirektionale Kommunikation erforderlich ist.

### Senden von Nachrichten an und von einem geteilten Worker

Nun können Nachrichten wie zuvor an den Worker gesendet werden, aber die `postMessage()`-Methode muss über das Portobjekt aufgerufen werden (wieder werden ähnliche Konstruktionen sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch in [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) zu sehen sein):

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

Zuerst verwenden wir einen `onconnect`-Handler, um Code auszulösen, wenn eine Verbindung zum Port hergestellt wird (d.h. wenn der `onmessage`-Ereignishandler im Eltern-Thread eingerichtet wird oder wenn die `start()`-Methode ausdrücklich im Eltern-Thread aufgerufen wird).

Wir verwenden das `ports`-Attribut dieses Ereignisobjekts, um den Port zu ergreifen und in einer Variablen zu speichern.

Anschließend fügen wir im Port einen `onmessage`-Handler hinzu, um die Berechnung durchzuführen und das Ergebnis an den Haupt-Thread zurückzugeben. Das Einrichten dieses `onmessage`-Handlers im Worker-Thread öffnet auch implizit die Portverbindung zurück zum Eltern-Thread, daher ist der Aufruf von `port.start()` eigentlich nicht erforderlich, wie oben erwähnt.

Schließlich behandeln wir im Hauptskript die Nachricht (wieder werden ähnliche Konstruktionen sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch in [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) zu sehen sein):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht über den Port vom Worker zurückkommt, fügen wir das Ergebnis der Berechnung im entsprechenden Ergebnis-Absatz ein.

## Über Thread-Sicherheit

Die [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle spawnt echte Betriebssystem-Threads, und vorsichtige Programmierer könnten besorgt sein, dass die Parallelität "interessante" Effekte in Ihrem Code verursachen kann, wenn Sie nicht vorsichtig sind.

Da jedoch Web Worker sorgfältig kontrollierte Kommunikationspunkte mit anderen Threads haben, ist es tatsächlich sehr schwer, Parallelitätsprobleme zu verursachen. Es gibt keinen Zugriff auf nicht threadsichere Komponenten oder das DOM. Und Sie müssen spezifische Daten in und aus einem Thread durch serialisierte Objekte übergeben. Sie müssen also wirklich hart daran arbeiten, Probleme in Ihrem Code zu verursachen.

## Content Security Policy

Worker werden als eigene Ausführungskontexte betrachtet, die sich von dem Dokument unterscheiden, das sie erstellt hat. Aus diesem Grund unterliegen sie im Allgemeinen nicht der [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder des übergeordneten Workers), das sie erstellt hat. Nehmen wir zum Beispiel an, ein Dokument wird mit dem folgenden Header bereitgestellt:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem wird dies verhindern, dass Skripte, die es einbindet, [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn jedoch das Skript einen Worker konstruiert, darf der Code, der im Kontext des Workers ausgeführt wird, `eval()` verwenden.

Um eine Content Security Policy für den Worker festzulegen, setzen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Antwortheader für die Anfrage, die das Workerskript selbst liefert.

Die Ausnahme ist, wenn die Herkunft des Workerskripts eine global eindeutige Kennung ist (zum Beispiel, wenn seine URL ein Schema `data` oder `blob` hat). In diesem Fall erbt der Worker die CSP des Dokuments oder Workers, der ihn erstellt hat.

## Übertragen von Daten zu und von Workern: Weitere Details

Daten, die zwischen der Hauptseite und Workern ausgetauscht werden, werden **kopiert**, nicht geteilt. Objekte werden beim Übergeben an den Worker serialisiert und anschließend am anderen Ende deserialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, das Endergebnis ist also, dass **eine Kopie** an jedem Ende erstellt wird. Die meisten Browser implementieren diese Funktion als [strukturiertes Klonverfahren](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Um dies zu veranschaulichen, erstellen wir eine Funktion namens `emulateMessage()`, die das Verhalten eines Wertes simuliert, der während des Übergangs von einem `worker` zur Hauptseite oder umgekehrt _geklont und nicht geteilt_ wird:

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

Ein Wert, der geklont und nicht geteilt wird, wird als _message_ bezeichnet. Wie Sie wahrscheinlich mittlerweile wissen, können _messages_ an den und vom Haupt-Thread mit `postMessage()` gesendet werden, und das `data`-Attribut des `message`-Ereignisses enthält Daten, die vom Worker zurückgesendet werden.

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

Der [strukturiertes Klonverfahren](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kann JSON und einige Dinge, die JSON nicht kann – wie zirkuläre Referenzen – akzeptieren.

### Beispiele für Datenübertragung

#### Beispiel 1: Fortgeschrittene JSON-Datenübertragung und ein Wechselsystem erstellen

Wenn Sie einige komplexe Daten übergeben müssen und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammen gruppiert.

Zuerst erstellen wir eine `QueryableWorker`-Klasse, die die URL des Workers, einen Standardlistener und einen Fehlerhandler übernimmt, und diese Klasse wird eine Liste von Listenern verfolgen und uns helfen, mit dem Worker zu kommunizieren:

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

Dann fügen wir die Methoden für das Hinzufügen/Entfernen von Listenern hinzu:

```js
this.addListeners = (name, listener) => {
  listeners[name] = listener;
};

this.removeListeners = (name) => {
  delete listeners[name];
};
```

Hier lassen wir den Worker zwei einfache Operationen verarbeiten zur Veranschaulichung: die Differenz von zwei Zahlen berechnen und eine Warnung nach drei Sekunden erzeugen. Um dies zu erreichen, implementieren wir zuerst eine `sendQuery`-Methode, die abfragt, ob der Worker tatsächlich die entsprechenden Methoden hat, um das zu tun, was wir wollen.

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

Wir beenden QueryableWorker mit der `onmessage`-Methode. Wenn der Worker die entsprechenden Methoden hat, auf die wir abgefragt haben, sollte er den Namen des entsprechenden Listeners und die benötigten Argumente zurückgeben, wir müssen ihn nur in `listeners` finden:

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

Nun zum Worker. Zuerst müssen wir die Methoden haben, um die beiden einfachen Operationen zu behandeln:

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

Es ist möglich, den Inhalt jeder Hauptseite -> Worker und Worker -> Hauptseite Nachricht zu wechseln. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können beliebig sein, solange sie in `QueryableWorker` und dem `worker` konsistent sind.

### Datenübertragung durch Eigentumsübertragung (übertragbare Objekte)

Moderne Browser bieten eine zusätzliche Möglichkeit, bestimmte Arten von Objekten mit hoher Leistung an oder von einem Worker zu übergeben. [Übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden von einem Kontext zu einem anderen mit einer Zero-Copy-Operation übertragen, was zu einer erheblichen Leistungsverbesserung beim Senden großer Datensätze führt.

Zum Beispiel, wenn Sie ein {{jsxref("ArrayBuffer")}} aus Ihrer Haupt-App an ein Worker-Skript übertragen, wird der ursprüngliche {{jsxref("ArrayBuffer")}} gelöscht und ist nicht mehr verwendbar. Sein Inhalt wird (buchstäblich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## Eingebettete Worker

Es gibt keine "offizielle" Möglichkeit, den Code eines Workers innerhalb einer Webseite einzubetten, so wie {{HTMLElement("script")}}-Elemente für normale Skripte. Aber ein {{HTMLElement("script")}}-Element, das kein `src`-Attribut hat und ein `type`-Attribut hat, das keinen ausführbaren MIME-Type identifiziert, kann als Datenblockelement betrachtet werden, das JavaScript verwenden könnte. "Datenblöcke" ist eine allgemeinere Funktion von HTML, die fast beliebige Textdaten tragen kann. Ein Worker könnte also auf diese Weise eingebettet werden:

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
          document.querySelectorAll("script[type='text/js-worker']"),
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

Es ist auch erwähnenswert, dass Sie auch eine Funktion in ein Blob konvertieren und dann eine Objekt-URL aus diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele zur Verwendung von Web Workers.

### Ausführen von Berechnungen im Hintergrund

Worker sind hauptsächlich nützlich, um Ihrem Code zu ermöglichen, ressourcenintensive Berechnungen auszuführen, ohne den Benutzeroberfläche-Thread zu blockieren. In diesem Beispiel wird ein Worker zur Berechnung von Fibonacci-Zahlen verwendet.

#### Der JavaScript-Code

Der folgende JavaScript-Code wird in der "fibonacci.js"-Datei gespeichert, auf die im folgenden Abschnitt verwiesen wird.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfängt, die gesendet werden, wenn die `postMessage()`-Methode des Worker-Objekts aufgerufen wird. Diese führt die Berechnung durch und gibt schließlich das Ergebnis an den Haupt-Thread zurück.

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

Die Webseite erstellt ein `<p>`-Element mit der ID `result`, das verwendet wird, um das Ergebnis anzuzeigen, und startet dann den Worker. Nachdem der Worker gestartet wurde, wird der `onmessage`-Handler konfiguriert, um die Ergebnisse anzuzeigen, indem die Inhalte des `<p>`-Elements gesetzt werden, und der `onerror`-Handler wird konfiguriert, um die Fehlermeldung in die Entwicklertools-Konsole zu loggen.

Schließlich wird eine Nachricht an den Worker gesendet, um diesen zu starten.

[Probieren Sie dieses Beispiel live aus](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufteilen von Aufgaben auf mehrere Worker

Da Mehrkerncomputer zunehmend verbreitet sind, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker zu verteilen, die diese Aufgaben dann auf mehreren Prozessorkernen ausführen können.

## Andere Arten von Workern

Neben dedizierten und geteilten Web Workern gibt es weitere Arten von Workern:

- [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen und dem Browser und Netzwerk (wenn verfügbar) sitzen. Sie sollen (unter anderem) die Erstellung effektiver Offline-Erfahrungen ermöglichen und Netzwerkanfragen abfangen und basierend darauf, ob das Netzwerk verfügbar ist und aktualisierte Assets auf dem Server liegen, entsprechende Maßnahmen ergreifen. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrundsynchronisations-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bietet die Möglichkeit, direktes Skript-basiertes Audioverarbeitung in einem Worklet (einer leichten Version eines Workers) Kontext durchzuführen.

## Debuggen von Worker-Threads

Die meisten Browser ermöglichen es Ihnen, Web Worker in ihren JavaScript-Debuggern _genau auf die gleiche Weise_ wie das Debuggen des Haupt-Threads zu debuggen! Zum Beispiel listen sowohl Firefox als auch Chrome JavaScript-Quelldateien für sowohl den Haupt-Thread als auch aktive Worker-Threads auf, und alle diese Dateien können geöffnet werden, um Haltepunkte und Logpunkte festzulegen.

Um zu lernen, wie man Web Worker debuggt, sehen Sie die Dokumentation für die JavaScript-Debugger jedes Browsers:

- [Chrome Quellen-Panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

Um Entwicklertools für Web Worker zu öffnen, können Sie die folgenden URLs verwenden:

- Edge: `edge://inspect/`
- Chrome: `chrome://inspect/`
- Firefox: `about:debugging#/runtime/this-firefox`

Diese Seiten zeigen eine Übersicht über alle Service Worker. Sie müssen den relevanten anhand der URL finden und dann auf _inspizieren_ klicken, um Entwicklertools wie die Konsole und den Debugger für diesen Worker zuzugreifen.

## Funktionen und Schnittstellen in Workern verfügbar

Sie können die meisten Standard-JavaScript-Funktionen innerhalb eines Web Workers verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptding, was Sie _nicht_ in einem Worker tun können, ist die direkte Beeinflussung der übergeordneten Seite. Dies schließt das Manipulieren des DOM und die Verwendung der Objekte dieser Seite ein. Sie müssen es indirekt tun, indem Sie eine Nachricht an das Hauptskript über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) senden und dann die Änderungen im Ereignishandler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode für Worker verfügbar ist, indem Sie die Seite: <https://worker-playground.glitch.me/> verwenden. Wenn Sie zum Beispiel [`EventSource`](/de/docs/Web/API/EventSource) auf der Seite in Firefox 84 eingeben, werden Sie sehen, dass dies in Service Workern nicht unterstützt wird, jedoch in dedizierten und geteilten Workern.

> [!NOTE]
> Eine vollständige Liste der Funktionen, die Workern zur Verfügung stehen, finden Sie unter [Funktionen und Schnittstellen in Workern verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Schnittstelle
- [Funktionen, die Arbeitern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Schnittstelle
