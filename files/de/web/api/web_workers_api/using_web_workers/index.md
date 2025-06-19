---
title: Verwendung von Web Workern
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{DefaultAPISidebar("Web Workers API")}}

Web Worker sind ein einfacher Weg für Webinhalte, um Skripte in Hintergrund-Threads auszuführen. Der Worker-Thread kann Aufgaben ausführen, ohne die Benutzeroberfläche zu stören. Außerdem können sie Netzwerk-Anfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen. Ein einmal erstellter Worker kann Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen Ereignishandler sendet, der von diesem Code spezifiziert wurde (und umgekehrt).

Dieser Artikel bietet eine ausführliche Einführung in die Verwendung von Web Workern.

## Web Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor (z. B. [`Worker()`](/de/docs/Web/API/Worker/Worker)) erstellt wird und eine benannte JavaScript-Datei ausführt — diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext, der sich vom aktuellen [`window`](/de/docs/Web/API/Window) unterscheidet. Die Verwendung der Abkürzung [`window`](/de/docs/Web/API/Window), um den aktuellen globalen Geltungsbereich zu erhalten (statt [`self`](/de/docs/Web/API/Window/self)) innerhalb eines [`Worker`](/de/docs/Web/API/Worker), führt zu einem Fehler.

Der Worker-Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt im Fall von dedizierten Workern (Standard-Worker, die von einem einzigen Skript genutzt werden; Shared Worker verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)) repräsentiert. Ein dedizierter Worker ist nur von dem Skript zugänglich, das ihn zuerst erzeugt hat, während Shared Worker von mehreren Skripten aus zugänglich sind.

> [!NOTE]
> Siehe [die Web Workers API Startseite](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentation zu Workern und zusätzliche Leitfäden.

Sie können beliebigen Code innerhalb des Worker-Threads ausführen, mit einigen Ausnahmen. Beispielsweise können Sie innerhalb eines Workers nicht direkt den DOM manipulieren oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts verwenden. Sie können jedoch eine Vielzahl von Elementen nutzen, die unter `window` verfügbar sind, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Datenhaltemechanismen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Weitere Details finden Sie unter [Funktionen und Klassen, die Arbeitern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

Daten werden zwischen Workern und dem Haupt-Thread über ein Nachrichtensystem gesendet — beide Seiten senden ihre Nachrichten über die Methode `postMessage()` und reagieren auf Nachrichten über den `onmessage` Ereignishandler (die Nachricht ist innerhalb des Datenattributs des [`message`](/de/docs/Web/API/Worker/message_event) Ereignisses enthalten). Die Daten werden kopiert und nicht geteilt.

Worker können wiederum neue Worker erzeugen, solange diese Worker innerhalb des gleichen {{Glossary("origin", "Ursprungs")}} wie die übergeordnete Seite gehostet werden.

Zudem können Worker Netzwerk-Anfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen (wobei das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur durch das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt werden wir den JavaScript-Code aus unserem [Grundlegenden Beispiel für dedizierte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)) diskutieren: Dies ermöglicht es Ihnen, zwei Zahlen einzugeben, die multipliziert werden sollen. Die Zahlen werden an einen dedizierten Worker gesendet, zusammen multipliziert und das Ergebnis wird an die Seite zurückgegeben und angezeigt.

Dieses Beispiel ist eher trivial, aber wir haben uns entschieden, es einfach zu halten, während wir Sie in die grundlegenden Worker-Konzepte einführen. Weitere fortgeschrittene Details werden später im Artikel behandelt.

### Worker-Funktionsfähigkeitserkennung

Für etwas kontrollierteres Fehlerhandling und Rückwärtskompatibilität ist es eine gute Idee, Ihren Worker-Zugriffscode in den folgenden ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)) einzubinden:

```js
if (window.Worker) {
  // …
}
```

### Einen dedizierten Worker erzeugen

Einen neuen Worker zu erstellen ist einfach. Sie müssen lediglich den [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktor aufrufen und die URI eines Skripts angeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
const myWorker = new Worker("worker.js");
```

> [!NOTE]
> Bundler, einschließlich [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, URLs zu übergeben, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) an den `Worker()` Konstruktor aufgelöst werden. Zum Beispiel:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript statt zur aktuellen HTML-Seite, was es dem Bundler erlaubt, sicher Optimierungen wie Umbenennungen vorzunehmen (da andernfalls die `worker.js` URL möglicherweise auf eine Datei zeigt, die nicht vom Bundler kontrolliert wird, sodass er keine Annahmen machen kann).

### Nachrichten zu und von einem dedizierten Worker senden

Die Magie der Worker geschieht über die Methode [`postMessage()`](/de/docs/Web/API/Worker/postMessage) und den Ereignishandler [`onmessage`](/de/docs/Web/API/Worker/message_event). Wenn Sie eine Nachricht an den Worker senden möchten, senden Sie Nachrichten wie folgt ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Hier haben wir zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` dargestellt werden; sobald sich der Wert eines dieser Elemente ändert, wird `myWorker.postMessage([first.value, second.value])` verwendet, um die Werte beider als Array an den Worker zu senden. Sie können nahezu alles in der Nachricht senden.

Im Worker können wir antworten, wenn die Nachricht empfangen wird, indem wir einen Ereignishandler-Block wie diesen schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage` Handler ermöglicht es uns, Code auszuführen, sobald eine Nachricht empfangen wird, wobei die Nachricht selbst im `data` Attribut des `message` Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen und verwenden erneut `postMessage()`, um das Ergebnis zurück an den Haupt-Thread zu senden.

Zurück im Haupt-Thread verwenden wir `onmessage` erneut, um auf die Nachricht zu antworten, die vom Worker zurückgesandt wurde:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier erfassen wir die Nachrichtendaten des Ereignisses und setzen sie als `textContent` des Ergebnisabsatzes, so dass der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` an das `Worker` Objekt im Haupterskript-Thread angehängt werden müssen, nicht jedoch im Worker. Dies liegt daran, dass der Worker innerhalb des Workers effektiv der globale Geltungsbereich ist.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Haupt-Thread und dem Worker übergeben wird, wird sie kopiert oder "übertragen" (verlagert), nicht geteilt. Lesen Sie [Übertragen von Daten zu und von Workern: weitere Details](#transferring_data_to_and_from_workers_further_details) für eine viel gründlichere Erklärung.

### Einen Worker beenden

Wenn Sie einen laufenden Worker sofort vom Haupt-Thread aus beenden müssen, können Sie dies durch Aufruf der Methode [`terminate`](/de/docs/Web/API/Worker) des Workers tun:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehler behandeln

Wenn ein Laufzeitfehler im Worker auftritt, wird sein `onerror` Ereignishandler aufgerufen. Er empfängt ein Ereignis namens `error`, das die `ErrorEvent`-Schnittstelle implementiert.

Das Ereignis blubbert nicht und ist abbruchfähig; um zu verhindern, dass die Standardaktion stattfindet, kann der Worker die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Fehlerereignisses aufrufen.

Das Fehlerereignis enthält die folgenden drei Felder, die von Interesse sind:

- `message`
  - : Eine menschenlesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, auf der der Fehler aufgetreten ist.

### Untergeordnete Worker erstellen

Worker können, wenn sie es wünschen, weitere Worker erstellen. So genannte untergeordnete Worker müssen innerhalb desselben Ursprungs wie die übergeordnete Seite gehostet werden. Auch die URIs für Untergeordnete Worker werden relativ zum Speicherort des übergeordneten Workers aufgelöst, statt zum Besitzer der Seite. Dies erleichtert es den Workern, den Standort ihrer Abhängigkeiten im Auge zu behalten.

### Skripte und Bibliotheken importieren

Worker-Threads haben Zugriff auf eine globale Funktion, `importScripts()`, die es ihnen ermöglicht, Skripte zu importieren. Sie akzeptiert Null oder mehr URIs als Parameter für die zu importierenden Ressourcen; alle folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes aufgeführte Skript und führt es aus. Danach können globale Objekte aus jedem Skript vom Worker genutzt werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` ausgelöst, und nachfolgender Code wird nicht ausgeführt. Bereits ausgeführter Code (einschließlich Code, der mit [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) verzögert wurde) bleibt jedoch funktional. Funktionsdeklarationen **nach** der `importScripts()` Methode bleiben ebenfalls erhalten, da diese immer vor dem restlichen Code ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der Sie die Dateinamen an `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` gibt erst zurück, wenn alle Skripte geladen und ausgeführt wurden.

## Shared Worker

Ein Shared Worker ist von mehreren Skripten aus zugänglich — selbst wenn sie von verschiedenen Fenstern, iframes oder sogar Workern aus aufgerufen werden. In diesem Abschnitt besprechen wir den JavaScript-Code aus unserem [Grundlegenden Beispiel für Shared Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)): Dies ist dem grundlegenden Beispiel für dedizierte Worker sehr ähnlich, mit dem Unterschied, dass es zwei verfügbare Funktionen gibt, die von verschiedenen Skriptdateien verwaltet werden: _zwei Zahlen multiplizieren_ oder _eine Zahl quadrieren_. Beide Skripte verwenden denselben Worker, um die erforderliche Berechnung durchzuführen.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und Shared Workern. Beachten Sie, dass in diesem Beispiel zwei HTML-Seiten vorhanden sind, jede mit JavaScript, das denselben einzelnen Worker-File verwendet.

> [!NOTE]
> Wenn SharedWorker von mehreren Browserkontexten aus zugänglich sein kann, müssen all diese Browserkontexte den exakt selben Ursprung teilen (gleiches Protokoll, Host und Port).

> [!NOTE]
> In Firefox können Shared Worker nicht zwischen Dokumenten geteilt werden, die in privaten und nicht-privaten Fenstern geladen sind ([Firefox Bug 1177621](https://bugzil.la/1177621)).

### Einen Shared Worker erzeugen

Einen neuen Shared Worker zu erzeugen, erfolgt fast genauso wie bei einem dedizierten Worker, allerdings mit einem anderen Konstruktor-Namen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) — jeder muss den Worker mit einem Code wie dem folgenden erzeugen:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied besteht darin, dass bei einem Shared Worker über ein `port`-Objekt kommuniziert werden muss — ein expliziter Port wird geöffnet, den die Skripte zur Kommunikation mit dem Worker verwenden können (dies geschieht implizit im Fall dedizierter Worker).

Die Portverbindung muss entweder implizit durch Verwendung des `onmessage` Ereignishandlers oder explizit mit der `start()` Methode gestartet werden, bevor Nachrichten gesendet werden können. Der Aufruf von `start()` ist nur erforderlich, wenn das `message` Ereignis über die `addEventListener()` Methode verdrahtet wurde.

> [!NOTE]
> Bei Verwendung der `start()` Methode zum Öffnen der Portverbindung muss diese sowohl vom Eltern-Thread als auch vom Worker-Thread aufgerufen werden, wenn eine bidirektionale Kommunikation erforderlich ist.

### Nachrichten zu und von einem Shared Worker senden

Nun können Nachrichten wie zuvor an den Worker gesendet werden, aber die Methode `postMessage()` muss über das Port-Objekt aufgerufen werden (erneut finden Sie ähnliche Konstruktionen in sowohl [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js)):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Jetzt zum Worker. Hier gibt es auch etwas mehr Komplexität ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

Zuerst verwenden wir einen `onconnect` Handler, um Code auszuführen, wenn eine Verbindung zum Port hergestellt wird (d.h. wenn der `onmessage` Ereignishandler im Eltern-Thread eingerichtet ist oder wenn die `start()` Methode explizit im Eltern-Thread aufgerufen wird).

Wir verwenden das `ports` Attribut dieses Ereignisobjekts, um den Port zu erfassen und ihn in einer Variablen zu speichern.

Als nächstes fügen wir einen `onmessage` Handler auf dem Port hinzu, um die Berechnung auszuführen und das Ergebnis an den Haupt-Thread zurückzugeben. Das Einrichten dieses `onmessage` Handlers im Worker-Thread öffnet auch implizit die Portverbindung zurück zum Eltern-Thread, so dass der Aufruf von `port.start()` eigentlich nicht nötig ist, wie oben erwähnt.

Schließlich, zurück im Hauptskript, bearbeiten wir die Nachricht (erneut finden Sie ähnliche Konstruktionen in sowohl [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js)):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht vom Worker durch den Port zurückkommt, fügen wir das Berechnungsergebnis in den entsprechenden Ergebnisabsatz ein.

## Über Thread-Sicherheit

Die [`Worker`](/de/docs/Web/API/Worker) Schnittstelle erzeugt echte Betriebssystem-Threads, und sorgfältige Programmierer könnten besorgt sein, dass Gleichzeitigkeit "interessante" Effekte in Ihrem Code verursachen kann, wenn Sie nicht vorsichtig sind.

Da Web Worker jedoch sorgfältig kontrollierte Kommunikationspunkte mit anderen Threads haben, ist es tatsächlich sehr schwer, Konkurrenzeffekte zu verursachen. Es gibt keinen Zugriff auf nicht thread-sichere Komponenten oder den DOM. Und Sie müssen spezifische Daten innerhalb und außerhalb eines Threads durch serialisierte Objekte übergeben. Sie müssen also wirklich hart arbeiten, um Probleme in Ihrem Code zu verursachen.

## Content-Security-Policy

Worker haben einen eigenen Ausführungskontext, der sich von dem des Dokuments unterscheidet, das sie erstellt hat. Aus diesem Grund unterliegen sie im Allgemeinen nicht der [Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder des übergeordneten Workers), das sie erstellt hat. Angenommen, ein Dokument wird mit dem folgenden Header bereitgestellt:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderen Dingen wird dies verhindern, dass alle enthaltenen Skripte [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn das Skript jedoch einen Worker erstellt, darf der im Kontext des Workers laufende Code `eval()` verwenden.

Um eine Content-Security-Policy für den Worker festzulegen, legen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) Antwort-Header für die Anforderung fest, die das Worker-Skript selbst liefert.

Die Ausnahme hiervon ist, wenn der Ursprung des Worker-Skripts ein global eindeutiger Bezeichner ist (zum Beispiel, wenn die URL ein Schema von "data" oder "blob" hat). In diesem Fall erbt der Worker die CSP des Dokuments oder des Workers, der ihn erstellt hat.

## Übertragen von Daten zu und von Workern: weitere Details

Daten, die zwischen der Hauptseite und Workern übergeben werden, werden **kopiert**, nicht geteilt. Objekte werden serialisiert, während sie an den Worker übergeben werden, und anschließend am anderen Ende deserialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, sodass das Endergebnis darin besteht, dass **eine Kopie** an jedem Ende erstellt wird. Die meisten Browser implementieren diese Funktion als [strukturiertes Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Um dies zu veranschaulichen, lassen Sie uns eine Funktion namens `emulateMessage()` erstellen, die das Verhalten eines Werts simuliert, der _geklont und nicht geteilt_ wird, während er von einem `worker` zur Hauptseite oder umgekehrt übergeben wird:

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

Ein Wert, der geklont und nicht geteilt wird, wird als _Nachricht_ bezeichnet. Wie Sie inzwischen wahrscheinlich wissen, können _Nachrichten_ mit `postMessage()` an und von dem Haupt-Thread gesendet werden, und das `data` Attribut des `message` Ereignisses enthält die Daten, die vom Worker zurückgesendet wurden.

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

### Beispiele zur Datenübertragung

#### Beispiel 1: Erweitertes Übertragen von JSON-Daten und Erstellen eines Umschaltsystems

Wenn Sie komplexe Daten übergeben müssen und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammen gruppiert.

Zuerst erstellen wir eine `QueryableWorker` Klasse, die die URL des Workers, einen Standardlistener und einen Fehlerbehandler nimmt, und diese Klasse wird eine Liste von Listenern im Auge behalten und uns helfen, mit dem Worker zu kommunizieren:

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

Hier lassen wir den Worker zwei einfache Operationen durchführen, um dies zu veranschaulichen: die Differenz von zwei Zahlen zu erhalten und nach drei Sekunden eine Warnung anzeigen. Um dies zu erreichen, implementieren wir zunächst eine `sendQuery` Methode, die abfragt, ob der Worker tatsächlich die entsprechenden Methoden hat, um das zu tun, was wir wollen.

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

Wir beenden `QueryableWorker` mit der `onmessage` Methode. Wenn der Worker die entsprechenden Methoden hat, die wir abgefragt haben, sollte er den Namen des entsprechenden Listeners und die Argumente, die er benötigt, zurückgeben. Wir müssen ihn nur in `listeners` finden.:

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

Jetzt zum Worker. Zuerst müssen wir die Methoden haben, um die beiden einfachen Operationen zu verarbeiten:

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

Und die `onmessage` Methode ist nun trivial:

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

Hier sind die vollständige Implementierung:

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

Es ist möglich, den Inhalt jeder Hauptseite -> Worker und Worker -> Hauptseite Nachricht zu wechseln. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können beliebig sein, solange sie in `QueryableWorker` und dem `worker` konsistent sind.

### Datenübertragung durch Eigentumsübertragung (transferierbare Objekte)

Moderne Browser enthalten einen zusätzlichen Weg, bestimmte Objekttypen mit hoher Leistung zu oder von einem Worker zu übergeben. [Transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden von einem Kontext zu einem anderen mit einem Zero-Copy-Vorgang übertragen, was zu einer erheblichen Leistungsverbesserung beim Senden großer Datensätze führt.

Zum Beispiel wird beim Übertragen eines {{jsxref("ArrayBuffer")}} von Ihrer Haupt-App zu einem Worker-Skript der ursprüngliche {{jsxref("ArrayBuffer")}} gelöscht und ist nicht mehr verwendbar. Sein Inhalt wird (buchstäblich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## Eingebettete Worker

Es gibt keinen "offiziellen" Weg, um den Code eines Workers in eine Webseite einzubetten, wie {{HTMLElement("script")}} Elemente es für normale Skripte tun. Ein {{HTMLElement("script")}} Element, das kein `src` Attribut hat und ein `type` Attribut hat, das keinen ausführbaren MIME-Typ identifiziert, kann als ein Datenblock-Element betrachtet werden, das JavaScript verwenden könnte. "Datenblöcke" sind eine allgemeinere Funktion von HTML, die fast beliebige textuelle Daten tragen kann. Ein Worker könnte auf diese Weise eingebettet werden:

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

Der eingebettete Worker ist nun in eine neue benutzerdefinierte `document.worker` Eigenschaft eingebettet.

Es ist auch zu beachten, dass Sie auch eine Funktion in ein Blob konvertieren können, dann eine Objekt-URL aus diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele zur Verwendung von Web Workern.

### Berechnungen im Hintergrund durchführen

Worker sind hauptsächlich nützlich, damit Ihr Code prozessorintensive Berechnungen durchführen kann, ohne den Benutzeroberflächen-Thread zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript Code

Der folgende JavaScript-Code wird in der "fibonacci.js" Datei gespeichert, die im nächsten Abschnitt vom HTML referenziert wird.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfängt, die gesendet werden, wenn die `postMessage()` Methode des Worker-Objekts aufgerufen wird. Dies führt die Berechnungen aus und schließlich wird das Ergebnis zurück an den Haupt-Thread gesendet.

#### Der HTML Code

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

Die Webseite erstellt ein `<p>` Element mit der ID `result`, das verwendet wird, um das Ergebnis anzuzeigen, und dann den Worker erzeugt. Nach dem Erzeugen des Workers wird der `onmessage` Handler konfiguriert, um die Ergebnisse anzuzeigen, indem der Inhalt des `<p>` Elements gesetzt wird, und der `onerror` Handler wird konfiguriert, um die Fehlermeldung in der Entwicklerkonsole zu protokollieren.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Versuchen Sie dieses Beispiel live](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufgaben auf mehrere Worker verteilen

Da Mehrkerncomputer zunehmend verbreitet sind, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker zu verteilen, die diese Aufgaben dann auf mehreren Prozessorkernen ausführen können.

## Andere Arten von Workern

Neben dedizierten und Shared Web Workern gibt es weitere Arten von Workern:

- [ServiceWorker](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen und dem Browser sowie Netzwerk (wenn verfügbar) sitzen. Sie sollen (unter anderem) die Erstellung effektiver Offline-Erfahrungen ermöglichen, indem sie Netzwerk-Anfragen abfangen und je nach Verfügbarkeit des Netzwerks und aktualisierter Ressourcen auf dem Server entsprechende Aktionen ausführen. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Background-Sync-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bieten die Möglichkeit für direktes geskriptetes Audio-Processing in einem Worklet (einer leichten Version eines Workers) Kontext.

## Debugging von Worker-Threads

Die meisten Browser ermöglichen es Ihnen, Web Worker in ihren JavaScript-Debuggern _auf genau die gleiche Weise_ zu debuggen, wie den Haupt-Thread! Sowohl Firefox als auch Chrome listen zum Beispiel JavaScript-Quelldateien für den Haupt-Thread und die aktiven Worker-Threads auf, und alle diese Dateien können geöffnet werden, um Haltepunkte und Logpunkte zu setzen.

Um zu lernen, wie man Web Worker debuggt, lesen Sie die Dokumentation für die JavaScript-Debugger jedes Browsers:

- [Chrome Sources Panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

Um Entwicklerwerkzeuge für Web Worker zu öffnen, können Sie die folgenden URLs verwenden:

- Edge: `edge://inspect/`
- Chrome: `chrome://inspect/`
- Firefox: `about:debugging#/runtime/this-firefox`

Diese Seiten zeigen einen Überblick über alle Service Worker. Sie müssen den relevanten anhand der URL finden und dann _inspect_ klicken, um auf Entwicklerwerkzeuge wie die Konsole und den Debugger für diesen Worker zuzugreifen.

## Funktionen und Schnittstellen, die in Workern verfügbar sind

Sie können die meisten Standard-JavaScript-Funktionen innerhalb eines Web Workers verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Die Hauptsache, die Sie _nicht_ in einem Worker tun können, ist die direkte Beeinflussung der übergeordneten Seite. Dazu gehört das Manipulieren des DOM und die Verwendung der Objekte dieser Seite. Sie müssen dies indirekt tun, indem Sie eine Nachricht zurück an das Hauptskript über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) senden und dann die Änderungen im Ereignishandler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode für Worker verfügbar ist, indem Sie die Seite <https://worker-playground.glitch.me/> verwenden. Wenn Sie beispielsweise [`EventSource`](/de/docs/Web/API/EventSource) in der Seite auf Firefox 84 eingeben, werden Sie sehen, dass dies in Service Workern nicht unterstützt wird, aber in dedizierten und Shared Workern.

> [!NOTE]
> Eine vollständige Liste der Worker-Funktionen finden Sie unter [Funktionen und Schnittstellen, die Worker zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker) Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle
- [Funktionen, die Arbeitern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Schnittstelle
