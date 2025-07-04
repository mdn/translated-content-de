---
title: Verwenden von Web Workern
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: d172ab534ac45c6acfda33782752b095ed98aea8
---

{{DefaultAPISidebar("Web Workers API")}}

Web Worker sind ein einfaches Mittel, um Webinhalte in Hintergrund-Threads Skripte ausführen zu lassen. Der Worker-Thread kann Aufgaben ausführen, ohne die Benutzeroberfläche zu beeinträchtigen. Darüber hinaus können sie Netzwerkanfragen über die APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) stellen. Sobald ein Worker erstellt ist, kann er Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen von diesem Code spezifizierten Ereignishandler sendet (und umgekehrt).

Dieser Artikel bietet eine detaillierte Einführung in die Verwendung von Web Workern.

## Web Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor erstellt wird (z.B. [`Worker()`](/de/docs/Web/API/Worker/Worker)), der eine benannte JavaScript-Datei ausführt – diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext, der sich von dem des aktuellen [`window`](/de/docs/Web/API/Window) unterscheidet. Daher wird die Verwendung des Kürzels [`window`](/de/docs/Web/API/Window) zur Ermittlung des aktuellen globalen Kontextes (anstatt von [`self`](/de/docs/Web/API/Window/self)) innerhalb eines [`Worker`](/de/docs/Web/API/Worker) einen Fehler zurückgeben.

Der Worker-Kontext wird im Fall von dedizierten Workern (standardmäßige Worker, die von einem einzigen Skript genutzt werden; Shared Worker verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)) durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) Objekt dargestellt. Ein dedizierter Worker ist nur von dem Skript zugänglich, das ihn zuerst erstellt hat, während Shared Worker von mehreren Skripten aus zugänglich sind.

> [!NOTE]
> Siehe [Die Web Workers API Startseite](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentation zu Workern und zusätzliche Leitfäden.

Sie können beliebigen Code innerhalb des Worker-Threads ausführen, mit einigen Ausnahmen. Zum Beispiel können Sie nicht direkt das DOM innerhalb eines Workers manipulieren oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window) Objekts verwenden. Sie können jedoch viele Elemente verwenden, die unter `window` verfügbar sind, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Datenspeicherungsmechanismen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Siehe [Funktionen und Klassen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) für weitere Details.

Daten werden zwischen Workern und dem Haupt-Thread über ein Nachrichtensystem gesendet – beide Seiten senden ihre Nachrichten mithilfe der `postMessage()` Methode und reagieren auf Nachrichten über den `onmessage` Ereignishandler (die Nachricht ist im `message` Ereignis-Attribut [`data`](/de/docs/Web/API/Worker/message_event) enthalten). Die Daten werden kopiert, nicht geteilt.

Worker können wiederum neue Worker erzeugen, solange diese Worker innerhalb des gleichen {{Glossary("origin", "Ursprungs")}} wie die übergeordnete Seite gehostet werden.

Zusätzlich können Worker Netzwerkanfragen über die APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) stellen (obwohl das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur über das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt besprechen wir das in unserem [Grundlegenden Beispiel für dedizierte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) gefundene JavaScript ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)): Dies ermöglicht Ihnen, zwei Zahlen einzugeben, die miteinander multipliziert werden sollen. Die Zahlen werden an einen dedizierten Worker gesendet, miteinander multipliziert und das Ergebnis wird zur Seite zurückgegeben und angezeigt.

Dieses Beispiel ist eher trivial, aber wir haben uns entschieden, es einfach zu halten, während wir Ihnen grundlegende Worker-Konzepte vorstellen. Komplexere Details werden später im Artikel behandelt.

### Erkennung von Worker-Funktionen

Für eine etwas kontrolliertere Fehlerbehandlung und Abwärtskompatibilität ist es eine gute Idee, Ihren Worker-Zugriffscode in folgendes ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)) zu packen:

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
> Bundler, einschließlich [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, URLs zu übergeben, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) aufgelöst werden, an den `Worker()` Konstruktor. Zum Beispiel:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript und nicht zur aktuellen HTML-Seite, was dem Bundler ermöglicht, sicher Optimierungen wie Umbenennungen durchzuführen (weil andernfalls die `worker.js` URL auf eine Datei verweisen kann, die nicht vom Bundler kontrolliert wird und er daher keine Annahmen treffen kann).

### Nachrichten an einen dedizierten Worker senden und empfangen

Das Besondere an Workern geschieht über die [`postMessage()`](/de/docs/Web/API/Worker/postMessage) Methode und den [`onmessage`](/de/docs/Web/API/Worker/message_event) Ereignishandler. Wenn Sie eine Nachricht an den Worker senden möchten, posten Sie Nachrichten an ihn wie folgt ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Hier haben wir also zwei {{htmlelement("input")}} Elemente, die durch die Variablen `first` und `second` repräsentiert werden; wenn der Wert eines dieser Elemente geändert wird, wird `myWorker.postMessage([first.value,second.value])` verwendet, um die Werte beider als Array an den Worker zu senden. Sie können so ziemlich alles, was Sie möchten, in der Nachricht senden.

Im Worker können wir reagieren, wenn die Nachricht empfangen wird, indem wir einen Ereignishandlerblock wie diesen schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage` Handler ermöglicht es uns, Code auszuführen, wann immer eine Nachricht empfangen wird, wobei die Nachricht selbst im `data` Attribut des `message` Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen miteinander und verwenden dann erneut `postMessage()`, um das Ergebnis zurück an den Haupt-Thread zu senden.

Im Haupt-Thread verwenden wir erneut `onmessage`, um auf die vom Worker zurückgesendete Nachricht zu reagieren:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier greifen wir auf die Daten des Nachrichtenevents zu und setzen es als `textContent` des Ergebnis-Paragraphen, so dass der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` vom `Worker` Objekt verwendet werden müssen, wenn sie im Hauptskript-Thread eingesetzt werden, aber nicht, wenn sie im Worker verwendet werden. Dies ist, weil der Worker innerhalb des Workers effektiv der globale Kontext ist.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Haupt-Thread und dem Worker übergeben wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Daten zwischen Workern und dem Hauptthread übertragen: weitere Details](#transferring_data_to_and_from_workers_further_details) für eine gründlichere Erklärung.

### Beenden eines Workers

Wenn Sie einen laufenden Worker sofort beenden müssen, können Sie dies tun, indem Sie die Methode [`terminate`](/de/docs/Web/API/Worker) des Workers vom Haupt-Thread aus aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort abgebrochen.

### Fehlerbehandlung

Wenn ein Laufzeitfehler im Worker auftritt, wird dessen `onerror` Ereignishandler aufgerufen. Es erhält ein Ereignis namens `error`, das die `ErrorEvent` Schnittstelle implementiert.

Das Ereignis wird nicht hingeleitet und ist abbrechbar; um zu verhindern, dass die Standardaktion stattfindet, kann der Worker die `preventDefault()` Methode des Errorevents aufrufen.

Das Errorevent hat die folgenden drei Felder, die von Interesse sind:

- `message`
  - : Eine menschenlesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, in der der Fehler aufgetreten ist.

### Erzeugen von Subworkern

Worker können nach Belieben weitere Worker erzeugen. So genannte Sub-Worker müssen innerhalb desselben Ursprungs wie die übergeordnete Seite gehostet werden. Auch werden die URIs für Subworker relativ zum Standort des übergeordneten Workers anstelle des der besitzenden Seite aufgelöst. Dies erleichtert es den Workern, den Überblick darüber zu behalten, wo sich ihre Abhängigkeiten befinden.

### Importieren von Skripten und Bibliotheken

Worker-Threads können auf eine globale Funktion zugreifen, `importScripts()`, mit der sie Skripte importieren können. Sie akzeptiert null oder mehr URIs als Parameter für die zu importierenden Ressourcen; alle der folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes aufgelistete Skript und führt es aus. Alle globalen Objekte aus jedem Skript können danach vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` ausgelöst und nachfolgender Code nicht ausgeführt. Zuvor ausgeführter Code (einschließlich Code, der mit [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) verzögert wurde) bleibt jedoch funktionsfähig. Funktionsdeklarationen **nach** der `importScripts()` Methode bleiben ebenfalls erhalten, da diese immer vor dem Rest des Codes ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der Sie die Dateinamen an `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` gibt erst dann zurück, wenn alle Skripte geladen und ausgeführt wurden.

## Shared Worker

Ein Shared Worker ist von mehreren Skripten aus zugänglich – selbst wenn sie von unterschiedlichen Fenstern, iframes oder sogar Workern angesprochen werden. In diesem Abschnitt besprechen wir das in unserem [Grundlegenden Beispiel für Shared Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) gefundene JavaScript ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)): Dies ist sehr ähnlich wie das grundlegende Beispiel für dedizierte Worker, außer dass es zwei Funktionen gibt, die von verschiedenen Skriptdateien gehandhabt werden: _Zwei Zahlen multiplizieren_ oder _Eine Zahl quadrieren_. Beide Skripte verwenden denselben Worker, um die tatsächliche benötigte Berechnung durchzuführen.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und Shared Workern. Beachten Sie, dass wir in diesem Beispiel zwei HTML-Seiten haben, die jeweils mit JavaScript ausgestattet sind, die dieselbe einzelne Worker-Datei verwenden.

> [!NOTE]
> Wenn SharedWorker von mehreren Browser-Kontexten aus zugänglich sein kann, müssen all diese Browser-Kontexte denselben Ursprüng haben (gleiches Protokoll, Host und Port).

> [!NOTE]
> In Firefox können Shared Worker nicht zwischen Dokumenten geteilt werden, die in privaten und nicht-privaten Fenstern geladen werden ([Firefox-Fehler 1177621](https://bugzil.la/1177621)).

### Starten eines Shared Workers

Das Starten eines neuen Shared Workers ist fast dasselbe wie bei einem dedizierten Worker, jedoch mit einem anderen Konstruktor-Namen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) – jeder von ihnen muss den Worker mit Code starten, der wie folgt aussieht:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied ist, dass bei einem Shared Worker über ein `port` Objekt kommuniziert werden muss – es wird ein expliziter Port geöffnet, den die Skripte verwenden können, um mit dem Worker zu kommunizieren (dies erfolgt implizit im Fall von dedizierten Workern).

Die Portverbindung muss entweder implizit durch die Verwendung des `onmessage` Ereignishandlers oder explizit mit der `start()` Methode gestartet werden, bevor Nachrichten gepostet werden können. Der Aufruf von `start()` ist nur erforderlich, wenn das `message` Ereignis über die `addEventListener()` Methode verdrahtet wird.

> [!NOTE]
> Bei der Verwendung der `start()` Methode zum Öffnen der Portverbindung muss sie sowohl von der übergeordneten Thread als auch vom Worker-Thread aufgerufen werden, falls eine bidirektionale Kommunikation erforderlich ist.

### Nachrichten an und von einem Shared Worker senden

Jetzt können Nachrichten wie zuvor an den Worker gesendet werden, aber die `postMessage()` Methode muss über das Portobjekt aufgerufen werden (wieder werden Sie ähnliche Konstrukte in sowohl [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Nun zum Worker. Hier gibt es etwas mehr Komplexität ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

Zuerst verwenden wir einen `onconnect` Handler, um Code auszuführen, wenn eine Verbindung zum Port stattfindet (d.h. wenn der `onmessage` Ereignishandler im übergeordneten Thread eingerichtet wird oder wenn die `start()` Methode explizit im übergeordneten Thread aufgerufen wird).

Wir verwenden das `ports` Attribut dieses Ereignisobjekts, um den Port zu erfassen und in einer Variablen zu speichern.

Anschließend fügen wir einen `onmessage` Handler auf dem Port hinzu, um die Berechnung durchzuführen und das Ergebnis an den Haupt-Thread zurückzusenden. Das Einrichten dieses `onmessage` Handlers im Worker-Thread öffnet die Portverbindung zum übergeordneten Thread ebenfalls implizit, sodass der Aufruf von `port.start()` tatsächlich nicht erforderlich ist, wie oben erwähnt.

Schließlich behandeln wir im Hauptskript die Nachricht (wieder werden Sie ähnliche Konstrukte in sowohl [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht über den Port vom Worker zurückkommt, fügen wir das Berechnungsergebnis in den entsprechenden Ergebnis-Paragraphen ein.

## Über Threadsicherheit

Die [`Worker`](/de/docs/Web/API/Worker) Schnittstelle erzeugt echte Betriebssystem-Threads, und vorsichtige Programmierer könnten befürchten, dass Parallelität "interessante" Effekte in Ihrem Code verursachen kann, wenn Sie nicht vorsichtig sind.

Da Web Worker jedoch sorgfältig kontrollierte Kommunikationspunkte mit anderen Threads haben, ist es tatsächlich sehr schwer, Parallelitätsprobleme zu verursachen. Es gibt keinen Zugriff auf nicht-Thread-sichere Komponenten oder das DOM. Und Sie müssen bestimmte Daten in und aus einem Thread durch serialisierte Objekte übergeben. Sie müssen also wirklich hart arbeiten, um Probleme in Ihrem Code zu verursachen.

## Content Security Policy

Worker haben in der Regel ihren eigenen Ausführungskontext, der sich von dem des Dokuments unterscheidet, das sie erstellt hat. Aus diesem Grund werden sie im Allgemeinen nicht von der [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder des übergeordneten Workers) geregelt, das sie erstellt hat. Nehmen wir zum Beispiel an, ein Dokument wird mit dem folgenden Header bereitgestellt:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem wird dies verhindern, dass irgendwelche von ihm eingeschlossenen Skripte [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn das Skript jedoch einen Worker erstellt, wird es dem Code, der im Kontext des Workers läuft, erlaubt sein, `eval()` zu verwenden.

Um eine Content Security Policy für den Worker festzulegen, setzen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) Antwort-Header für die Anfrage, die das Worker-Skript geliefert hat.

Die Ausnahme davon ist, wenn der Ursprung des Worker-Skripts ein weltweit eindeutiger Identifikator ist (zum Beispiel, wenn seine URL ein Schema von data oder blob hat). In diesem Fall erbt der Worker die CSP des Dokuments oder des Workers, der ihn erstellt hat.

## Übertragen von Daten zu und von Workern: weitere Details

Daten, die zwischen der Hauptseite und Workern übertragen werden, werden **kopiert**, nicht geteilt. Objekte werden serialisiert, wenn sie an den Worker übergeben werden, und anschließend auf der anderen Seite deserialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, sodass das Endergebnis ist, dass **ein Duplikat** auf jeder Seite erstellt wird. Die meisten Browser implementieren diese Funktion als [strukturierte Klonung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Um dies zu veranschaulichen, erstellen wir eine Funktion namens `emulateMessage()`, die das Verhalten eines Werts simuliert, der _während des Übergangs von einem `worker` zur Hauptseite oder umgekehrt kloniert und nicht geteilt_ wird:

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

Ein Wert, der geklont und nicht geteilt wird, wird _Nachricht_ genannt. Wie Sie wahrscheinlich inzwischen wissen, können _Nachrichten_ mit `postMessage()` an und vom Haupt-Thread gesendet werden, und das `data` Attribut des `message` Ereignisses enthält die Daten, die vom Worker zurückgesendet wurden.

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

Der [strukturierte Klonalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kann JSON und einige Dinge akzeptieren, die JSON nicht kann – wie z.B. zirkuläre Referenzen.

### Datenübergabe-Beispiele

#### Beispiel 1: Fortgeschrittene JSON-Datenübergabe und Erstellen eines Umschaltsystems

Wenn Sie komplexe Daten übergeben müssen und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammenfasst.

Zuerst erstellen wir eine `QueryableWorker` Klasse, die die URL des Workers, einen Standard-Listener und einen Fehlerhandler übernimmt, und diese Klasse wird eine Liste von Listeners nachverfolgen und uns bei der Kommunikation mit dem Worker helfen:

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

Dann fügen wir die Methoden zum Hinzufügen/Entfernen von Listeners hinzu:

```js
this.addListeners = (name, listener) => {
  listeners[name] = listener;
};

this.removeListeners = (name) => {
  delete listeners[name];
};
```

Hier lassen wir den Worker zwei einfache Operationen ausführen, um die Funktionsweise zu veranschaulichen: die Differenz zweier Zahlen zu berechnen und nach drei Sekunden einen Alarm auszulösen. Um dies zu erreichen, implementieren wir zuerst eine `sendQuery` Methode, die prüft, ob der Worker tatsächlich über die entsprechenden Methoden verfügt, um das zu tun, was wir wollen.

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

Wir beenden `QueryableWorker` mit der `onmessage` Methode. Wenn der Worker die entsprechenden Methoden hat, die wir abgefragt haben, sollte er den Namen des entsprechenden Listeners und die benötigten Argumente zurückgeben; wir brauchen nur, ihn in `listeners` zu finden.

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

Jetzt zum Worker. Zuerst müssen wir die Methoden haben, um die zwei einfachen Operationen zu behandeln:

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
<ul>
  <li>
    <button id="first-action">What is the difference between 5 and 3?</button>
  </li>
  <li>
    <button id="second-action">Wait 3 seconds</button>
  </li>
  <li>
    <button id="terminate">terminate() the Worker</button>
  </li>
</ul>
```

Es muss das folgende Skript ausführen, entweder inline oder als externe Datei:

```js
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

document.getElementById("first-action").addEventListener("click", () => {
  myTask.sendQuery("getDifference", 5, 3);
});
document.getElementById("second-action").addEventListener("click", () => {
  myTask.sendQuery("waitSomeTime");
});
document.getElementById("terminate").addEventListener("click", () => {
  myTask.terminate();
});
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

Es ist möglich, den Inhalt jeder Hauptseite -> Worker und Worker -> Hauptseiten-Nachricht zu wechseln. Und die Eigenschaftennamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können beliebig sein, solange sie in `QueryableWorker` und dem `worker` konsistent sind.

### Übergeben von Daten durch Eigentumsübertragung (übertragbare Objekte)

Moderne Browser enthalten eine zusätzliche Möglichkeit, bestimmte Arten von Objekten zu oder von einem Worker mit hoher Leistung zu übergeben. [Übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden von einem Kontext auf einen anderen mit einer Null-Kopier-Operation übertragen, was zu einer enormen Leistungsverbesserung beim Senden großer Datensätze führt.

Wenn Sie zum Beispiel ein {{jsxref("ArrayBuffer")}} von Ihrer Hauptanwendung an ein Worker-Skript übergeben, wird der ursprüngliche {{jsxref("ArrayBuffer")}} gelöscht und ist nicht mehr verwendbar. Sein Inhalt wird (buchstäblich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## Eingebettete Worker

Es gibt keine "offizielle" Möglichkeit, den Code eines Workers innerhalb einer Webseite zu embedden, so wie {{HTMLElement("script")}} Elemente dies für normale Skripte tun. Aber ein {{HTMLElement("script")}} Element, das kein `src` Attribut hat und ein `type` Attribut hat, das keinen ausführbaren MIME-Typ identifiziert, kann als Datenelement betrachtet werden, das JavaScript verwenden könnte. "Datenblöcke" ist eine allgemeinere Funktion von HTML, die fast beliebige Textdaten tragen kann. So könnte ein Worker auf diese Weise eingebettet werden:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>MDN Example - Embedded worker</title>
    <script type="text/js-worker">
      // This script WON'T be parsed by JS engines because its MIME type is text/js-worker.
      const myVar = "Hello World!";
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

Der eingebettete Worker ist jetzt in eine neue benutzerdefinierte `document.worker` Eigenschaft eingebettet.

Es ist auch erwähnenswert, dass Sie auch eine Funktion in ein Blob umwandeln können, dann eine Objekt-URL aus diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele zur Verwendung von Web Workern.

### Berechnungen im Hintergrund ausführen

Worker sind hauptsächlich nützlich, um Ihrem Code zu ermöglichen, prozessorintensive Berechnungen ohne Blockieren des Benutzeroberflächen-Threads durchzuführen. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code wird in der Datei "fibonacci.js" gespeichert, auf die im HTML im nächsten Abschnitt verwiesen wird.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfängt, die gesendet werden, wenn die `postMessage()` Methode des Worker-Objekts aufgerufen wird. Diese führt die mathematische Berechnung durch und gibt schließlich das Ergebnis an den Haupt-Thread zurück.

#### Der HTML-Code

```html
<form>
  <div>
    <label for="number"
      >Enter a number that is a zero-based index position in the fibonacci
      sequence to see what number is in that position. For example, enter 6 and
      you'll get a result of 8 — the fibonacci number at index position 6 is
      8.</label
    >
    <input type="number" id="number" />
  </div>
  <div>
    <input type="submit" />
  </div>
</form>

<p id="result"></p>
```

Es muss das folgende Skript ausführen, entweder inline oder als externe Datei:

```js
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
```

Die Webseite erstellt ein `<p>` Element mit der ID `result`, das verwendet wird, um das Ergebnis anzuzeigen, und startet dann den Worker. Nach dem Starten des Workers wird der `onmessage` Handler konfiguriert, um die Ergebnisse anzuzeigen, indem der Inhalt des `<p>` Elements gesetzt wird, und der `onerror` Handler wird eingerichtet, um die Fehlermeldung in die Entwickler-Tools-Konsole zu protokollieren.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Versuchen Sie dieses Beispiel live](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufgaben auf mehrere Worker verteilen

Da Mehrkern-Computer immer häufiger werden, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker zu verteilen, die diese Aufgaben dann auf mehreren Prozessorkernen ausführen können.

## Andere Arten von Workern

Neben dedizierten und Shared Web Workern gibt es noch andere Arten von Workern:

- [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen sowie dem Browser und dem Netzwerk (falls verfügbar) stehen. Sie sollen unter anderem die Erstellung effektiver Offline-Erfahrungen ermöglichen, indem sie Netzwerkanfragen abfangen und geeignete Maßnahmen basierend darauf ergreifen, ob das Netzwerk verfügbar ist und aktualisierte Assets auf dem Server vorhanden sind. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrund-Synchronisierungs-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bieten die Möglichkeit, dass direkt skriptgesteuerte Audioverarbeitung in einem Worklet (einer leichten Version eines Workers) Kontext durchgeführt wird.

## Debuggen von Worker-Threads

Die meisten Browser ermöglichen es Ihnen, Web Worker in ihren JavaScript-Debuggern _genau auf die gleiche Weise_ wie das Debuggen des Haupt-Threads zu debuggen! Sowohl Firefox als auch Chrome listen beispielsweise JavaScript-Quellcode-Dateien sowohl für den Haupt-Thread als auch für aktive Worker-Threads auf, und alle diese Dateien können geöffnet werden, um Breakpoints und Logpoints zu setzen.

Um zu lernen, wie man Web Worker debuggt, lesen Sie die Dokumentation des JavaScript-Debuggers jedes Browsers:

- [Chrome Sources panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

Um DevTools für Web Worker zu öffnen, können Sie die folgenden URLs verwenden:

- Edge: `edge://inspect/`
- Chrome: `chrome://inspect/`
- Firefox: `about:debugging#/runtime/this-firefox`

Diese Seiten zeigen einen Überblick über alle Service Worker. Sie müssen den relevanten anhand der URL finden und dann auf _inspektieren_ klicken, um Zugriff auf DevTools wie die Konsole und den Debugger für diesen Worker zu erhalten.

## Funktionen und Schnittstellen, die Workern zur Verfügung stehen

Sie können die meisten Standard-JavaScript-Funktionen innerhalb eines Web Workers verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}} und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptsächliche, was Sie _nicht_ in einem Worker tun können, ist, direkt auf die übergeordnete Seite einzuwirken. Dies schließt die Manipulation des DOMs und die Verwendung der Objekte dieser Seite ein. Sie müssen dies indirekt tun, indem Sie eine Nachricht über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) an das Hauptskript senden und dann die Änderungen im Ereignishandler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode oder Schnittstelle für Worker verfügbar ist, indem Sie den [Worker Playground](https://mdn.github.io/dom-examples/web-workers/worker-playground/) verwenden.

> [!NOTE]
> Für eine vollständige Liste der Funktionen, die Workern zur Verfügung stehen, siehe [Funktionen und Schnittstellen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker) Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle
- [Funktionen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Schnittstelle
