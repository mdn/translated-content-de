---
title: Verwenden von Web-Workern
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: 16e756a74777f0b51e8a77efa3f7875fbf94fd24
---

{{DefaultAPISidebar("Web Workers API")}}

Web Worker sind ein einfaches Mittel, um Webinhalte Skripte in Hintergrund-Threads ausführen zu lassen. Der Worker-Thread kann Aufgaben ausführen, ohne die Benutzeroberfläche zu beeinträchtigen. Außerdem können sie Netzwerk-Anfragen mit den [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) APIs durchführen. Einmal erstellt, kann ein Worker Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem Nachrichten an einen Ereignishandler gesendet werden, der von diesem Code spezifiziert wird (und umgekehrt).

Dieser Artikel bietet eine detaillierte Einführung in die Verwendung von Web-Workern.

## Web Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor erstellt wird (z. B. [`Worker()`](/de/docs/Web/API/Worker/Worker)), das eine benannte JavaScript-Datei ausführt - diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext, der sich vom aktuellen [`window`](/de/docs/Web/API/Window) unterscheidet. Daher wird die Verwendung der [`window`](/de/docs/Web/API/Window) Abkürzung, um den aktuellen globalen Bereich innerhalb eines [`Worker`](/de/docs/Web/API/Worker) zu erhalten (anstelle von [`self`](/de/docs/Web/API/Window/self)), einen Fehler zurückgeben.

Der Worker-Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) Objekt im Fall von dedizierten Workern (Standard-Worker, die von einem einzigen Skript verwendet werden; gemeinsame Worker verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)) dargestellt. Ein dedizierter Worker ist nur über das Skript zugänglich, das ihn zuerst erzeugt hat, während gemeinsame Worker von mehreren Skripten aus zugänglich sind.

> [!NOTE]
> Siehe [Die Web Workers API Landingpage](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentation zu Workern und zusätzlichen Leitfäden.

Sie können beliebigen Code innerhalb des Worker-Threads ausführen, mit einigen Ausnahmen. Zum Beispiel können Sie den DOM nicht direkt von innerhalb eines Workers manipulieren oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window) Objekts verwenden. Aber Sie können eine große Anzahl von Elementen verwenden, die unter `window` verfügbar sind, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Datenspeicher-Mechanismen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Siehe [Funktionen und Klassen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) für mehr Details.

Daten werden zwischen Workern und dem Haupt-Thread über ein System von Nachrichten gesendet - beide Seiten senden ihre Nachrichten mit der `postMessage()` Methode und reagieren auf Nachrichten über den `onmessage` Ereignishandler (die Nachricht ist im `data` Attribut des [`message`](/de/docs/Web/API/Worker/message_event) Ereignisses enthalten). Die Daten werden kopiert und nicht geteilt.

Worker können wiederum neue Worker erstellen, solange diese Worker im selben {{Glossary("origin", "Ursprung")}} wie die übergeordnete Seite gehostet werden.

Darüber hinaus können Worker Netzwerk-Anfragen mit den [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) APIs durchführen (obwohl das [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) Attribut von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie bereits erwähnt, ist ein dedizierter Worker nur für das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt wird der JavaScript-Code in unserem [Einfachen Beispiel für dedizierte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)) besprochen: Dies ermöglicht Ihnen, zwei Zahlen einzugeben, die miteinander multipliziert werden sollen. Die Zahlen werden an einen dedizierten Worker gesendet, miteinander multipliziert und das Ergebnis wird auf der Seite angezeigt.

Dieses Beispiel ist ziemlich trivial, aber wir haben uns entschieden, es einfach zu halten, während wir Ihnen die grundlegenden Konzepte von Workern vorstellen. Komplexere Einzelheiten werden später im Artikel behandelt.

### Worker-Feature-Erkennung

Für eine etwas kontrolliertere Fehlerbehandlung und Abwärtskompatibilität ist es eine gute Idee, Ihren Worker-Code in folgendem ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)) zu verpacken:

```js
if (window.Worker) {
  // …
}
```

### Erstellen eines dedizierten Workers

Einen neuen Worker zu erstellen, ist einfach. Sie müssen nur den [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktor aufrufen und die URI eines Skripts angeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
const myWorker = new Worker("worker.js");
```

> [!NOTE]
> Bundler, einschließlich [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen URLs relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) an den `Worker()` Konstruktor zu übergeben. Beispiel:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript anstelle der aktuellen HTML-Seite, wodurch der Bundler sicher Optimierungen wie das Umbenennen durchführen kann (da andernfalls die `worker.js` URL auf eine Datei zeigen kann, die nicht vom Bundler kontrolliert wird, sodass dieser keine Annahmen treffen kann).

### Nachrichten an und von einem dedizierten Worker senden

Die Magie der Worker geschieht über die [`postMessage()`](/de/docs/Web/API/Worker/postMessage) Methode und den [`onmessage`](/de/docs/Web/API/Worker/message_event) Ereignishandler. Wenn Sie eine Nachricht an den Worker senden möchten, senden Sie Nachrichten in dieser Weise ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Hier haben wir zwei {{htmlelement("input")}} Elemente, die durch die Variablen `first` und `second` repräsentiert werden; wenn der Wert eines der beiden geändert wird, wird `myWorker.postMessage([first.value,second.value])` verwendet, um die Werte in beiden als Array an den Worker zu senden. Sie können so ziemlich alles, das Sie möchten, in der Nachricht senden.

Im Worker können wir reagieren, wenn die Nachricht empfangen wird, indem wir einen Ereignishandler-Block wie diesen schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage` Handler ermöglicht es uns, Code auszuführen, wann immer eine Nachricht empfangen wird, wobei die Nachricht selbst im `data` Attribut des `message` Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen und verwenden `postMessage()` erneut, um das Ergebnis zurück an den Haupt-Thread zu senden.

Zurück im Haupt-Thread verwenden wir `onmessage` erneut, um auf die vom Worker gesendete Nachricht zu reagieren:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier greifen wir auf die Daten des Nachrichtenereignisses zu und setzen sie als `textContent` des Ergebnis-Absatzes, sodass der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` am `Worker`-Objekt angebracht werden müssen, wenn sie im Hauptskript-Thread verwendet werden, aber nicht, wenn sie im Worker verwendet werden. Dies liegt daran, dass innerhalb des Workers der Worker effektiv den globalen Umfang darstellt.

> [!NOTE]
> Wenn eine Nachricht zwischen Haupt-Thread und Worker übergeben wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Daten zu und von Workern übertragen: Weitere Details](#transferring_data_to_and_from_workers_further_details) für eine wesentlich gründlichere Erklärung.

### Beenden eines Workers

Wenn Sie einen laufenden Worker sofort vom Haupt-Thread aus beenden müssen, können Sie dies tun, indem Sie die [`terminate`](/de/docs/Web/API/Worker) Methode des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn ein Laufzeitfehler im Worker auftritt, wird sein `onerror` Ereignishandler aufgerufen. Er empfängt ein Ereignis namens `error`, das das `ErrorEvent` Interface implementiert.

Das Ereignis wird nicht weitergeleitet und ist abfangbar; um das Eintreten der Standardaktion zu verhindern, kann der Worker die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) Methode des Error-Events aufrufen.

Das Error-Event verfügt über die folgenden drei Felder, die von Interesse sind:

- `message`
  - : Eine lesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, in der der Fehler aufgetreten ist.

### Unter-Worker erzeugen

Worker können, wenn sie möchten, weitere Worker erzeugen. Diese sogenannten Unter-Worker müssen im selben Ursprung wie die übergeordnete Seite gehostet werden. Auch werden die URIs für Unter-Worker relativ zum Standort des übergeordneten Workers aufgelöst, anstatt zur besitzenden Seite. Dadurch wird es einfacher für die Worker, den Standort ihrer Abhängigkeiten nachzuverfolgen.

### Importieren von Skripten und Bibliotheken

Worker-Threads haben Zugriff auf eine globale Funktion, `importScripts()`, die es ihnen ermöglicht, Skripte zu importieren. Sie akzeptiert null oder mehr URIs als Parameter zu Ressourcen, die importiert werden sollen; alle folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes aufgelistete Skript und führt es aus. Alle globalen Objekte aus jedem Skript können dann vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` ausgelöst, und nachfolgender Code wird nicht ausgeführt. Zuvor ausgeführter Code (einschließlich Code, der mit [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) verschoben wurde) bleibt jedoch funktionsfähig. Funktionsdeklarationen **nach** der `importScripts()` Methode werden ebenfalls beibehalten, da diese immer vor dem restlichen Code ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge, in der Sie die Dateinamen in `importScripts()` übergeben, ausgeführt. Dies geschieht synchron; `importScripts()` gibt erst dann zurück, wenn alle Skripte geladen und ausgeführt wurden.

## Gemeinsame Worker

Ein gemeinsamer Worker ist von mehreren Skripten aus zugänglich - sogar wenn sie von verschiedenen Fenstern, iframes oder sogar Workern aus aufgerufen werden. In diesem Abschnitt wird der JavaScript-Code in unserem [Einfachen Beispiel für gemeinsame Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([gemeinsamen Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)) besprochen: Dies ist dem einfachen Beispiel für dedizierte Worker sehr ähnlich, außer dass es zwei verfügbare Funktionen gibt, die von unterschiedlichen Skriptdateien gehandhabt werden: _zwei Zahlen multiplizieren_ oder _eine Zahl quadrieren_. Beide Skripte verwenden den gleichen Worker, um die erforderliche Berechnung durchzuführen.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und gemeinsamen Workern. Beachten Sie, dass wir in diesem Beispiel zwei HTML-Seiten haben, jede mit JavaScript, das denselben einzelnen Worker nutzt.

> [!NOTE]
> Wenn SharedWorker von mehreren Browserkontexten aus zugänglich sein sollen, müssen all diese Browserkontexte denselben Ursprung (dieses Protokoll, Host und den Port) teilen.

> [!NOTE]
> In Firefox können gemeinsame Worker nicht zwischen Dokumenten, die in privaten und nicht-privaten Fenstern geladen werden, geteilt werden ([Firefox-Bug 1177621](https://bugzil.la/1177621)).

### Erstellen eines gemeinsamen Workers

Ein neuer gemeinsamer Worker wird im Wesentlichen auf die gleiche Weise wie ein dedizierter Worker erstellt, jedoch mit einem anderen Konstruktor-Namen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) - jeder muss den Worker mit einem Code wie dem folgenden ins Leben rufen:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied ist, dass bei einem gemeinsamen Worker über ein `port`-Objekt kommuniziert werden muss - es wird explizit ein Port geöffnet, den die Skripte zur Kommunikation mit dem Worker nutzen können (dies geschieht im Fall von dedizierten Workern implizit).

Die Portverbindung muss entweder implizit durch Verwendung des `onmessage`-Ereignishandlers oder explizit mit der `start()`-Methode gestartet werden, bevor Nachrichten gesendet werden können. Das Aufrufen von `start()` ist nur erforderlich, wenn das `message`-Event mithilfe der `addEventListener()`-Methode eingerichtet wird.

> [!NOTE]
> Wenn die `start()`-Methode zur Öffnung der Portverbindung verwendet wird, muss sie sowohl im übergeordneten als auch im Worker-Thread aufgerufen werden, wenn eine zweiseitige Kommunikation erforderlich ist.

### Senden von Nachrichten zu und von einem gemeinsamen Worker

Jetzt können Nachrichten wie zuvor an den Worker gesendet werden, aber die `postMessage()`-Methode muss über das Port-Objekt aufgerufen werden (wieder werden Sie ähnliche Konstrukte sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch in [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Weiter zum Worker. Hier kommt etwas mehr Komplexität hinzu ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

Zuerst verwenden wir einen `onconnect`-Handler, um Code auszuführen, wenn eine Verbindung zum Port erfolgt (d.h. wenn der `onmessage`-Ereignishandler im übergeordneten Thread eingerichtet wird oder wenn die `start()`-Methode explizit im übergeordneten Thread aufgerufen wird).

Wir verwenden das `ports`-Attribut dieses Ereignisobjekts, um den Port zu greifen und in einer Variablen zu speichern.

Als Nächstes fügen wir einen `onmessage`-Handler am Port hinzu, um die Berechnung durchzuführen und das Ergebnis an den Haupt-Thread zurückzusenden. Das Einrichten dieses `onmessage`-Handlers im Worker-Thread öffnet die Portverbindung zurück zum übergeordneten Thread implizit, sodass der Aufruf von `port.start()` nicht tatsächlich erforderlich ist, wie oben erwähnt.

Schließlich behandeln wir im Hauptskript die Nachricht (wieder werden Sie ähnliche Konstrukte sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch in [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht über den Port vom Worker zurückkommt, setzen wir das Berechnungsergebnis in den entsprechenden Ergebnis-Absatz ein.

## Über Thread-Sicherheit

Das [`Worker`](/de/docs/Web/API/Worker) Interface erzeugt echte OS-Level-Threads, und aufmerksame Programmierer könnten besorgt sein, dass Nebenläufigkeit "interessante" Auswirkungen auf Ihren Code haben könnte, wenn Sie nicht vorsichtig sind.

Da jedoch Web Worker sorgfältig kontrollierte Kommunikationspunkte mit anderen Threads haben, ist es tatsächlich sehr schwer, Nebenläufigkeitsprobleme zu verursachen. Es gibt keinen Zugriff auf nicht thread-safe Komponenten oder den DOM. Und Sie müssen spezifische Daten in und aus einem Thread durch serialisierte Objekte durchleiten. Daher müssen Sie wirklich hart daran arbeiten, Probleme in Ihrem Code zu verursachen.

## Inhaltssicherheitspolitik

Worker haben ihren eigenen Ausführungskontext, der sich von dem des Dokuments unterscheidet, das sie erstellt hat. Aus diesem Grund unterliegen sie im Allgemeinen nicht der [Inhaltssicherheitspolitik](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder des übergeordneten Workers), das sie erstellt hat. Angenommen, ein Dokument wird mit dem folgenden Header bereitgestellt:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem wird dies verhindern, dass Skripte, die es einfügt, [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn das Skript jedoch einen Worker konstruiert, darf im Kontext des Workers ausgeführter Code `eval()` verwenden.

Um eine Inhaltssicherheitspolitik für den Worker festzulegen, setzen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Antwort-Header für die Anfrage, die das Workerskript selbst bereitstellt.

Die Ausnahme ist, wenn der Ursprung des Workerskripts ein global eindeutiger Bezeichner ist (zum Beispiel, wenn seine URL ein Schema von Daten oder Blob hat). In diesem Fall erbt der Worker die CSP des Dokuments oder des Workers, der ihn erstellt hat.

## Daten zu und von Workern übertragen: Weitere Details

Daten, die zwischen der Hauptseite und Workern übergeben werden, **werden kopiert, nicht geteilt**. Objekte werden serialisiert, sobald sie an den Worker übergeben werden, und anschließend am anderen Ende deserialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, sodass das Endergebnis ist, dass **eine Kopie am jeweiligen Ende erstellt wird**. Die meisten Browser implementieren diese Funktion als [strukturierte Klonung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Um dies zu veranschaulichen, lassen Sie uns eine Funktion namens `emulateMessage()` erstellen, die das Verhalten eines Wertes simulieren wird, der _bei der Übergabe von einem `worker` zur Hauptseite oder umgekehrt geklont und nicht geteilt_ wird:

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

Ein Wert, der geklont und nicht geteilt wird, wird _Nachricht_ genannt. Wie Sie wahrscheinlich bereits wissen, können _Nachrichten_ an und von dem Haupt-Thread mithilfe von `postMessage()` gesendet werden, und das `data` Attribut des `message` Ereignisses enthält Daten, die vom Worker zurückgesendet werden.

**example.html** (die Hauptseite):

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

Der [strukturierte Klon](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) Algorithmus kann JSON und einige Dinge, die JSON nicht kann - wie zirkuläre Referenzen - akzeptieren.

### Datenbeispiele übergeben

#### Beispiel 1: Fortgeschrittene Weitergabe von JSON-Daten und Erstellen eines Umschaltsystems

Wenn Sie komplexe Daten übergeben müssen und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammenfasst.

Zuerst erstellen wir eine `QueryableWorker` Klasse, die die URL des Workers, einen Standard-Listener und einen Fehler-Handler benötigt. Diese Klasse wird eine Liste von Listenern verfolgen und uns helfen, mit dem Worker zu kommunizieren:

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

Hier lassen wir den Worker zwei einfache Operationen für die Veranschaulichung erledigen: Die Differenz von zwei Zahlen berechnen und nach drei Sekunden eine Warnung auslösen. Um dies zu erreichen, implementieren wir zuerst eine `sendQuery` Methode, die testet, ob der Worker tatsächlich die entsprechenden Methoden hat, um das auszuführen, was wir wollen.

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

Wir beenden QueryableWorker mit der `onmessage`-Methode. Wenn der Worker die entsprechenden Methoden hat, die wir abgefragt haben, sollte er den Namen des entsprechenden Listeners und die Argumente, die er benötigt, zurückgeben. Wir müssen ihn nur in `listeners` finden.:

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

Jetzt zum Worker. Zuerst müssen wir die Methoden haben, um die zwei einfachen Operationen zu bearbeiten:

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

Es ist möglich, den Inhalt jeder Hauptseite -> Worker- und Worker -> Hauptseite Nachricht zu wechseln. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können beliebig sein, solange sie in `QueryableWorker` und im `worker` konsistent sind.

### Daten durch Besitzübertragung übergeben (übertragbare Objekte)

Moderne Browser bieten eine zusätzliche Möglichkeit, bestimmte Arten von Objekten mit hoher Leistung an oder von einem Worker zu übergeben. [Übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden mit einer Zero-Copy-Operation von einem Kontext in einen anderen übertragen, was zu einer erheblichen Leistungsverbesserung beim Senden großer Datensätze führt.

Zum Beispiel wird beim Übertragen eines {{jsxref("ArrayBuffer")}} von Ihrer Hauptanwendung an ein Worker-Skript der ursprüngliche {{jsxref("ArrayBuffer")}} gelöscht und ist nicht mehr verwendbar. Sein Inhalt wird (buchstäblich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## Eingebettete Worker

Es gibt keinen "offiziellen" Weg, den Code eines Workers innerhalb einer Webseite einzubetten, wie {{HTMLElement("script")}} Elemente dies für normale Skripte tun. Aber ein {{HTMLElement("script")}} Element, das kein `src` Attribut hat und ein `type` Attribut, das keinen ausführbaren MIME-Typ kennzeichnet, kann als Datenblockelement betrachtet werden, das JavaScript verwenden könnte. "Datenblöcke" sind ein allgemeineres Feature von HTML, das fast beliebige Textdaten tragen kann. Auf diese Weise könnte ein Worker eingebettet werden:

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

Der eingebettete Worker ist nun in einer neuen benutzerdefinierten `document.worker` Eigenschaft verschachtelt.

Es ist auch erwähnenswert, dass Sie auch eine Funktion in ein Blob konvertieren und dann eine Objekt-URL aus diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele zur Verwendung von Web Workern.

### Berechnungen im Hintergrund durchführen

Worker sind hauptsächlich nützlich, um Ihrem Code zu ermöglichen, rechenintensive Berechnungen auszuführen, ohne den Benutzeroberflächen-Thread zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code ist in der Datei "fibonacci.js" gespeichert, die im HTML im nächsten Abschnitt referenziert wird.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfangen wird, die gesendet werden, wenn die `postMessage()` Methode des Worker-Objekts aufgerufen wird. Dies führt die mathematische Berechnung aus und gibt schließlich das Ergebnis zurück an den Hauptthread.

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

Die Webseite erstellt ein `<p>` Element mit der ID `result`, das verwendet wird, um das Ergebnis anzuzeigen, und startet dann den Worker. Nachdem der Worker gestartet wurde, wird der `onmessage`-Handler konfiguriert, um die Ergebnisse anzuzeigen, indem der Inhalt des `<p>` Elements gesetzt wird und der `onerror`-Handler wird gesetzt, um die Fehlermeldung im Entwicklerwerkzeuge-Konsole zu protokollieren.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Versuchen Sie dieses Beispiel live](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufgaben unter mehreren Workern aufteilen

Da Mehrkernprozessoren immer häufiger werden, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker aufzuteilen, die diese Aufgaben dann auf mehreren Prozessorkernen ausführen können.

## Andere Arten von Workern

Neben dedizierten und gemeinsamen Web Workern gibt es noch andere Arten von Workern:

- [Service Worker](/de/docs/Web/API/Service_Worker_API) agieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen sowie Browser und Netzwerk (wenn verfügbar) stehen. Sie sollen unter anderem die Erstellung effektiver Offline-Erlebnisse ermöglichen, Netzwerk-Anfragen abfangen und entsprechende Maßnahmen ergreifen, je nachdem, ob das Netzwerk verfügbar ist und aktualisierte Ressourcen auf dem Server vorhanden sind. Sie gewähren auch Zugriff auf Push-Benachrichtigungen und Hintergrund-Synchronisations-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) ermöglicht die direkte skriptbasierte Audiobearbeitung in einem Worklet (einer leichten Version eines Workers) Kontext.

## Debugging von Worker-Threads

Die meisten Browser ermöglichen es Ihnen, Web Worker in ihren JavaScript-Debuggern _genauso_ wie das Debuggen des Hauptthreads zu debuggen! Sowohl Firefox als auch Chrome listen JavaScript-Quelldateien für den Hauptthread und aktive Worker-Threads auf, und alle diese Dateien können geöffnet werden, um Breakpoints und Logpoints zu setzen.

Um zu lernen, wie man Web Worker debuggt, siehe die Dokumentation für den JavaScript-Debugger jedes Browsers:

- [Chrome Sources-Panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

Um Entwicklerwerkzeuge für Web Worker zu öffnen, können Sie die folgenden URLs verwenden:

- Edge: `edge://inspect/`
- Chrome: `chrome://inspect/`
- Firefox: `about:debugging#/runtime/this-firefox`

Diese Seiten bieten einen Überblick über alle Service Worker. Sie müssen den relevanten durch die URL finden und dann auf _inspektieren_ klicken, um Zugriff auf Entwicklerwerkzeuge wie die Konsole und den Debugger für diesen Worker zu erhalten.

## Funktionen und Schnittstellen, die in Workern verfügbar sind

Sie können die meisten standardmäßigen JavaScript-Funktionen in einem Web Worker verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptmerkmal, das Sie nicht in einem Worker tun können, ist die direkte Beeinflussung der übergeordneten Seite. Dazu gehört das Manipulieren des DOM und die Verwendung von Objekten dieser Seite. Sie müssen dies indirekt tun, indem Sie eine Nachricht über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) zurück an das Hauptskript senden und dann die Änderungen im Ereignishandler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode für Worker verfügbar ist, indem Sie die Seite verwenden: <https://worker-playground.glitch.me/>. Zum Beispiel, wenn Sie [`EventSource`](/de/docs/Web/API/EventSource) auf der Seite in Firefox 84 eingeben, werden Sie sehen, dass dies in Service Workern nicht unterstützt wird, aber in dedizierten und gemeinsamen Workern.

> [!NOTE]
> Eine vollständige Liste der Funktionen, die Workern zur Verfügung stehen, finden Sie unter [Funktionen und Schnittstellen, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker) Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle
- [Funktionen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Schnittstelle
