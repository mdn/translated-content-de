---
title: Verwendung von Web Workern
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{DefaultAPISidebar("Web Workers API")}}

Web Worker sind ein einfaches Mittel, um Webinhalte Skripte in Hintergrundthreads ausführen zu lassen. Der Worker-Thread kann Aufgaben ausführen, ohne die Benutzeroberfläche zu beeinträchtigen. Außerdem können sie Netzwerkanfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) stellen. Einmal erstellt, kann ein Worker Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen von diesem Code angegebenen Ereignishandler postet (und umgekehrt).

Dieser Artikel bietet eine detaillierte Einführung in die Verwendung von Web Workern.

## Web Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor erstellt wird (z. B. [`Worker()`](/de/docs/Web/API/Worker/Worker)), das eine benannte JavaScript-Datei ausführt – diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext, der sich vom aktuellen [`window`](/de/docs/Web/API/Window) unterscheidet. Daher wird die Verwendung der [`window`](/de/docs/Web/API/Window)-Abkürzung, um den aktuellen globalen Bereich (anstatt von [`self`](/de/docs/Web/API/Window/self)) innerhalb eines [`Worker`](/de/docs/Web/API/Worker) zu erhalten, einen Fehler zurückgeben.

Der Worker-Kontext wird im Fall von dedizierten Workern (Standard-Worker, die von einem einzelnen Skript genutzt werden; geteilte Worker verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)) durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt dargestellt. Ein dedizierter Worker ist nur von dem Skript zugänglich, das ihn zuerst erzeugt hat, während geteilte Worker von mehreren Skripten aus zugänglich sind.

> [!NOTE]
> Siehe [Die Web Workers API-Landingpage](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentation zu Workern und zusätzliche Leitfäden.

Sie können beliebigen Code innerhalb des Worker-Threads ausführen, mit einigen Ausnahmen. Zum Beispiel können Sie nicht direkt das DOM innerhalb eines Workers manipulieren oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts verwenden. Aber Sie können eine große Anzahl von Elementen verwenden, die unter `window` verfügbar sind, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Datenspeichermechanismen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Siehe [Funktionen und Klassen, die Arbeitern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) für weitere Details.

Daten werden zwischen Workern und dem Hauptthread über ein Nachrichtensystem gesendet — beide Seiten senden ihre Nachrichten mit der `postMessage()`-Methode und reagieren auf Nachrichten über den `onmessage`-Ereignishandler (die Nachricht ist im Datenattribut des [`message`](/de/docs/Web/API/Worker/message_event)-Ereignisses enthalten). Die Daten werden kopiert, anstatt geteilt zu werden.

Worker können wiederum neue Worker erzeugen, solange diese Worker im selben {{Glossary("origin", "Ursprung (origin)")}} wie die übergeordnete Seite gehostet werden.

Zusätzlich können Worker Netzwerkanfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) stellen (obwohl das [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Attribut von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur von dem Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt diskutieren wir das JavaScript in unserem [Einfachen dedizierten Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierter Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)): Dies ermöglicht es Ihnen, zwei Zahlen einzugeben, die miteinander multipliziert werden sollen. Die Zahlen werden an einen dedizierten Worker gesendet, miteinander multipliziert, und das Ergebnis wird an die Seite zurückgegeben und angezeigt.

Dieses Beispiel ist ziemlich trivial, aber wir haben uns entschieden, es einfach zu halten, während wir Sie in grundlegende Worker-Konzepte einführen. Fortgeschrittenere Details werden später im Artikel behandelt.

### Erkennung von Worker-Funktionen

Für etwas kontrolliertere Fehlerbehandlung und Rückwärtskompatibilität ist es eine gute Idee, Ihren Worker-zugreifenden Code wie folgt zu kapseln ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
if (window.Worker) {
  // …
}
```

### Erzeugen eines dedizierten Workers

Das Erstellen eines neuen Workers ist einfach. Alles, was Sie tun müssen, ist den [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor aufzurufen und dabei die URI eines Skripts anzugeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
const myWorker = new Worker("worker.js");
```

> [!NOTE]
> Bundler, einschließlich [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, URLs zu übergeben, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) zum `Worker()`-Konstruktor aufgelöst werden. Zum Beispiel:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript anstelle der aktuellen HTML-Seite, was dem Bundler ermöglicht, sicher Optimierungen wie das Umbenennen durchzuführen (da andernfalls die `worker.js`-URL möglicherweise auf eine Datei verweist, die nicht vom Bundler kontrolliert wird, sodass er keine Annahmen treffen kann).

### Nachrichten senden zu und von einem dedizierten Worker

Die Magie der Worker geschieht über die [`postMessage()`](/de/docs/Web/API/Worker/postMessage)-Methode und den [`onmessage`](/de/docs/Web/API/Worker/message_event)-Ereignishandler. Wenn Sie eine Nachricht an den Worker senden möchten, posten Sie Nachrichten wie folgt ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

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

Hier haben wir also zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` dargestellt werden; wenn sich der Wert eines der beiden ändert, wird `myWorker.postMessage([first.value,second.value])` verwendet, um den Wert, in beiden enthalten, als Array an den Worker zu senden. Sie können im Prinzip alles, was Sie wollen, in der Nachricht senden.

Im Worker können wir antworten, wenn die Nachricht empfangen wird, indem wir einen Ereignisbehandler-Block wie folgt schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage`-Handler ermöglicht es uns, Code auszuführen, sobald eine Nachricht empfangen wird, wobei die Nachricht selbst im `data`-Attribut des `message`-Events verfügbar ist. Hier multiplizieren wir die beiden Zahlen zusammen und verwenden dann wieder `postMessage()`, um das Ergebnis zurück an den Haupt-Thread zu senden.

Zurück im Haupt-Thread verwenden wir `onmessage` erneut, um auf die Nachricht zu reagieren, die vom Worker zurückgesendet wurde:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier holen wir die Nachrichtendaten und setzen sie als `textContent` des Ergebnis-Absatzes, damit der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` an das `Worker`-Objekt angehängt werden müssen, wenn sie im Hauptskript-Thread verwendet werden, jedoch nicht, wenn sie im Worker verwendet werden. Das liegt daran, dass der Worker im Worker effektiv der globale Bereich ist.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Haupt-Thread und dem Worker übermittelt wird, wird sie kopiert oder „übertragen“ (verschoben), nicht geteilt. Lesen Sie [Übertragen von Daten zu und von Workern: Weitere Details](#übertragen_von_daten_zu_und_von_workern_further_details) für eine detailliertere Erklärung.

### Beenden eines Workers

Wenn Sie einen laufenden Worker sofort vom Haupt-Thread aus beenden müssen, können Sie dies tun, indem Sie die [`terminate`](/de/docs/Web/API/Worker)-Methode des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn ein Laufzeitfehler im Worker auftritt, wird dessen `onerror`-Ereignishandler aufgerufen. Er erhält ein Ereignis namens `error`, das das `ErrorEvent`-Interface implementiert.

Das Ereignis wird nicht gebubbelt und kann abgebrochen werden; um zu verhindern, dass die Standardaktion ausgeführt wird, kann der Worker die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode des Fehlereignisses aufrufen.

Das Fehlerereignis hat die folgenden drei Felder, die von Interesse sind:

- `message`
  - : Eine menschenlesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, in der der Fehler aufgetreten ist.

### Erzeugen von Subworkern

Worker können weitere Worker erzeugen, wenn sie möchten. So genannte Subworker müssen im selben Ursprung wie die übergeordnete Seite gehostet werden. Auch werden die URIs für Subworker relativ zur Position des übergeordneten Workers aufgelöst und nicht zur besitzenden Seite. Dies erleichtert Workern das Nachverfolgen ihrer Abhängigkeiten.

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

Der Browser lädt jedes aufgelistete Skript und führt es aus. Alle globalen Objekte aus jedem Skript können dann vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird ein `NETWORK_ERROR` ausgelöst und nachfolgender Code wird nicht ausgeführt. Zuvor ausgeführter Code (einschließlich Code, der mithilfe von [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) verzögert wurde) bleibt jedoch funktional. Funktionsdefinitionen **nachdem** die `importScripts()`-Methode ebenfalls beibehalten werden, da sie immer vor dem Rest des Codes ausgewertet werden.

> [!NOTE]
> Skripten können in beliebiger Reihenfolge heruntergeladen, jedoch in der Reihenfolge ausgeführt werden, in der Sie die Dateinamen in `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` gibt erst zurück, wenn alle Skripte geladen und ausgeführt wurden.

## Geteilte Worker

Ein geteiltes Worker ist für mehrere Skripte zugänglich — selbst wenn sie von verschiedenen Fenstern, iframes oder sogar Workern aufgerufen werden. In diesem Abschnitt diskutieren wir das JavaScript in unserem [Einfachen geteilten Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)): Dies ist sehr ähnlich dem einfachen dedizierten Worker-Beispiel, außer dass es zwei Funktionen gibt, die von unterschiedlichen Skriptdateien behandelt werden: _Zwei Zahlen multiplizieren_ oder _eine Zahl quadrieren_. Beide Skripte verwenden denselben Worker, um die erforderliche Berechnung durchzuführen.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und geteilten Workern. Beachten Sie, dass in diesem Beispiel zwei HTML-Seiten vorhanden sind, jede mit einem JavaScript, das denselben einzelnen Worker verwendet.

> [!NOTE]
> Falls `SharedWorker` aus mehreren Browsing-Kontexten aufgerufen werden kann, müssen alle diese Browsing-Kontexte exakt denselben Ursprung (gleiches Protokoll, Host und Port) teilen.

> [!NOTE]
> In Firefox können geteilte Worker nicht zwischen Dokumenten in privaten und nicht-privaten Fenstern geteilt werden ([Firefox bug 1177621](https://bugzil.la/1177621)).

### Erzeugen eines geteilten Workers

Ein neuer geteilter Worker wird fast genauso wie ein dedizierter Worker erzeugt, jedoch mit einem anderen Konstruktor-Namen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) — jeder muss den Worker mit einem Code wie dem folgenden starten:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied besteht darin, dass bei einem geteilten Worker über ein `port`-Objekt kommuniziert werden muss — ein expliziter Port wird geöffnet, den die Skripte verwenden können, um mit dem Worker zu kommunizieren (dies geschieht implizit im Fall dedizierter Worker).

Die Portverbindung muss entweder implizit durch die Verwendung des `onmessage`-Ereignishandlers oder explizit mit der `start()`-Methode gestartet werden, bevor Nachrichten gesendet werden können. Das Aufrufen von `start()` ist nur erforderlich, wenn das `message`-Ereignis über die Methode `addEventListener()` verdrahtet wird.

> [!NOTE]
> Wenn Sie die `start()`-Methode verwenden, um die Portverbindung zu öffnen, muss sie sowohl vom übergeordneten als auch vom Worker-Thread aufgerufen werden, wenn eine zweiseitige Kommunikation erforderlich ist.

### Nachrichten senden zu und von einem geteilten Worker

Jetzt können Nachrichten wie zuvor an den Worker gesendet werden, jedoch muss die `postMessage()`-Methode über das Port-Objekt aufgerufen werden (erneut werden Sie ähnliche Konstruktionen sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch in [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

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

Zuerst verwenden wir einen `onconnect`-Handler, um Code zu feuern, wenn eine Verbindung zum Port hergestellt wird (d. h. wenn der `onmessage`-Ereignishandler im übergeordneten Thread eingerichtet wird oder wenn die `start()`-Methode im übergeordneten Thread explizit aufgerufen wird).

Wir verwenden das `ports`-Attribut dieses Ereignisobjekts, um den Port zu greifen und in einer Variablen zu speichern.

Anschließend fügen wir einen `onmessage`-Handler am Port hinzu, um die Berechnung durchzuführen und das Ergebnis an den Haupt-Thread zurückzugeben. Das Einrichten dieses `onmessage`-Handlers im Worker-Thread öffnet die Portverbindung zurück zum übergeordneten Thread ebenfalls implizit, sodass der Aufruf von `port.start()` wie oben erwähnt nicht wirklich benötigt wird.

Zurück im Hauptskript bearbeiten wir die Nachricht (erneut werden Sie ähnliche Konstruktionen sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch in [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht über den Port vom Worker zurückkommt, fügen wir das Berechnungsergebnis in den entsprechenden Ergebnisabsatz ein.

## Über Threadsicherheit

Das [`Worker`](/de/docs/Web/API/Worker)-Interface erzeugt reale Betriebssystem-Threads und gewissenhafte Programmierer könnten besorgt sein, dass Parallelität „interessante“ Effekte in Ihrem Code verursachen kann, wenn Sie nicht vorsichtig sind.

Da jedoch Web Worker sorgfältig kontrollierte Kommunikation mit anderen Threads haben, ist es eigentlich sehr schwer, Parallelitätsprobleme zu verursachen. Es gibt keinen Zugriff auf nicht-thread-sichere Komponenten oder das DOM. Und Sie müssen spezifische Daten in und aus einem Thread über serielle Objekte übergeben. Sie müssen sich also wirklich anstrengen, um Probleme in Ihrem Code zu verursachen.

## Content-Sicherheitsrichtlinie

Worker werden als eigener Ausführungskontext betrachtet, der sich vom Dokument unterscheidet, das sie erstellt hat. Aus diesem Grund unterliegen sie im Allgemeinen nicht der [Content-Sicherheitsrichtlinie](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder übergeordneten Workers), das sie erstellt hat. Wenn also beispielsweise ein Dokument mit dem folgenden Header geliefert wird:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem verhindert dies die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) in allen eingeschlossenen Skripten. Wenn das Skript jedoch einen Worker erstellt, kann im Kontext des Workers ausgeführter Code `eval()` verwenden.

Um eine Content-Sicherheitsrichtlinie für den Worker festzulegen, setzen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy)-Antwort-Header für die Anforderung, die das Worker-Skript selbst geliefert hat.

Die Ausnahme ist, wenn der Ursprung des Worker-Skripts ein weltweit einzigartiger Bezeichner ist (zum Beispiel, wenn seine URL ein Schema von Daten oder Blob hat). In diesem Fall erbt der Worker die CSP des Dokuments oder Workers, die ihn erstellt hat.

## Übertragen von Daten zu und von Workern: Weitere Details

Daten, die zwischen der Hauptseite und Workern übergeben werden, werden **kopiert**, nicht geteilt. Objekte werden serialisiert, während sie an den Worker übergeben werden, und anschließend am anderen Ende deserialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, sodass das Endergebnis darin besteht, dass **eine Kopie** an jedem Ende erstellt wird. Die meisten Browser implementieren diese Funktion als [strukturierte Klonung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Um dies zu veranschaulichen, erstellen wir eine Funktion namens `emulateMessage()`, die das Verhalten eines Wertes simuliert, der _geklont und nicht geteilt_ wird, während er von einem `worker` auf die Hauptseite oder umgekehrt übergeht:

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

Ein Wert, der geklont und nicht geteilt wird, wird als _Nachricht_ bezeichnet. Wie Ihnen wahrscheinlich mittlerweile bekannt ist, können Sie _Nachrichten_ mit `postMessage()` an den Haupt-Thread senden und empfangen, und das `data`-Attribut des `message`-Events enthält Daten, die vom Worker zurückgesendet werden.

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

Der [strukturierte Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kann JSON und einige Dinge akzeptieren, die JSON nicht kann – wie z. B. zyklische Referenzen.

### Beispiele für die Datenübergabe

#### Beispiel 1: Erweitertes JSON-Datenübergeben und Erstellen eines Umschaltsystems

Wenn Sie komplexe Daten übergeben und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammenfasst.

Zuerst erstellen wir eine `QueryableWorker`-Klasse, die die URL des Workers, einen Standard-Listener und einen Fehler-Handler annimmt, und diese Klasse wird eine Liste von Listenern verfolgen und uns bei der Kommunikation mit dem Worker unterstützen:

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

Hier lassen wir den Worker zwei einfache Operationen zur Veranschaulichung durchführen: die Differenz von zwei Zahlen holen und einen Alert nach drei Sekunden auslösen. Um das zu erreichen, implementieren wir zuerst eine `sendQuery`-Methode, die abfragt, ob der Worker tatsächlich die entsprechenden Methoden hat, um das zu tun, was wir wollen.

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

Wir beenden `QueryableWorker` mit der `onmessage`-Methode. Wenn der Worker die entsprechenden Methoden, die wir abgefragt haben, hat, sollte er den Namen des entsprechenden Listeners und die Argumente, die er benötigt, zurückgeben. Wir müssen ihn nur in `listeners` finden:

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

Es ist möglich, den Inhalt jeder Hauptseite -> Worker und Worker -> Hauptseite Nachricht zu wechseln. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können alles sein, solange sie in `QueryableWorker` und im `worker` konsistent sind.

### Datenübergabe durch Übertragen des Besitzes (übertragbare Objekte)

Moderne Browser enthalten eine zusätzliche Möglichkeit, bestimmte Arten von Objekten an oder von einem Worker mit hoher Leistung zu übergeben. [Übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden von einem Kontext in einen anderen mit einer Zero-Copy-Operation übertragen, was zu einer erheblichen Leistungsverbesserung beim Senden großer Datenmengen führt.

Wenn Sie beispielsweise einen {{jsxref("ArrayBuffer")}} von Ihrer Hauptanwendung an ein Worker-Skript übergeben, wird der Original-{{jsxref("ArrayBuffer")}} gelöscht und ist nicht mehr verwendbar. Sein Inhalt wird (ganz buchstäblich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## Eingebettete Worker

Es gibt keinen „offiziellen“ Weg, um den Code eines Workers innerhalb einer Webseite einzubetten, wie es {{HTMLElement("script")}}-Elemente für normale Skripte tun. Aber ein {{HTMLElement("script")}}-Element, das kein `src`-Attribut hat und ein `type`-Attribut besitzt, das keinen ausführbaren MIME-Typ identifiziert, kann als Datenblockelement betrachtet werden, das JavaScript verwenden könnte. "Datenblöcke" sind eine allgemeinere Funktion von HTML, die fast alle Textdaten tragen kann. Ein Worker könnte also auf diese Weise eingebettet werden:

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

Der eingebettete Worker ist jetzt in einer neuen benutzerdefinierten `document.worker`-Eigenschaft verschachtelt.

Es ist auch anzumerken, dass Sie auch eine Funktion in ein Blob konvertieren und dann eine Objekt-URL von diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele für die Verwendung von Web Workern.

### Ausführen von Berechnungen im Hintergrund

Worker sind hauptsächlich nützlich, damit Ihr Code prozessorintensive Berechnungen durchführen kann, ohne den Benutzeroberflächenthread zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code wird in der Datei "fibonacci.js" gespeichert, auf die im nächsten Abschnitt im HTML verwiesen wird.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfängt, die gesendet werden, wenn die `postMessage()`-Methode des Worker-Objekts aufgerufen wird. Dies führt die Berechnungen aus und gibt schließlich das Ergebnis zurück an den Hauptthread.

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

Die Webseite erstellt ein `<p>`-Element mit der ID `result`, das zur Anzeige des Ergebnisses verwendet wird, und startet dann den Worker. Nachdem der Worker gestartet wurde, wird der `onmessage`-Handler konfiguriert, um die Ergebnisse anzuzeigen, indem der Inhalt des `<p>`-Elements gesetzt wird, und der `onerror`-Handler wird eingerichtet, um die Fehlermeldung in der Entwicklerkonsole zu protokollieren.

Zuletzt wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Dieses Beispiel live ausprobieren](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufgaben auf mehrere Worker verteilen

Da Mehrkern-Rechner immer häufiger werden, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker zu verteilen, die diese Aufgaben dann auf mehreren Prozessor-Kernen ausführen können.

## Andere Arten von Workern

Zusätzlich zu dedizierten und geteilten Web Workern gibt es weitere Arten von Workern:

- [ServiceWorker](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen und dem Browser und Netzwerk (falls verfügbar) sitzen. Sie sind dazu gedacht, unter anderem die Erstellung effektiver offline Erlebnisse zu ermöglichen, indem sie Netzwerk-Anfragen abfangen und geeignete Maßnahmen ergreifen, je nachdem, ob das Netzwerk verfügbar ist und ob aktualisierte Ressourcen auf dem Server vorhanden sind. Sie erlauben auch den Zugang zu Push-Benachrichtigungen und den Hintergrund-Sync-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bieten die Möglichkeit, direktes geskriptetes Audio-Processing in einem Worklet- (einer leichten Version eines Workers) Kontext durchzuführen.

## Debugging von Worker-Threads

Die meisten Browser ermöglichen es Ihnen, Web Worker in ihren JavaScript-Debuggern _genau so_ zu debuggen wie den Haupt-Thread! Zum Beispiel listen sowohl Firefox als auch Chrome JavaScript-Quelldateien sowohl für den Haupt-Thread als auch für aktive Worker-Threads auf, und alle diese Dateien können geöffnet werden, um Breakpoints und Logpoints zu setzen.

Um zu erfahren, wie Sie Web Worker debuggen können, sehen Sie sich die Dokumentation des JavaScript-Debuggers jedes Browsers an:

- [Chrome Sources-Panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

## Funktionen und Schnittstellen, die in Workern verfügbar sind

Sie können die meisten Standard-JavaScript-Funktionen innerhalb eines Web Workers verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptsächliche, das Sie _nicht_ in einem Worker tun können, ist, die übergeordnete Seite direkt zu beeinflussen. Dies schließt die Manipulation des DOM und die Verwendung von Objekten dieser Seite ein. Sie müssen dies indirekt tun, indem Sie eine Nachricht über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) zurück an das Hauptskript senden und dann die Änderungen im Ereignishandler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode für Worker verfügbar ist, indem Sie die Seite: <https://worker-playground.glitch.me/> verwenden. Wenn Sie beispielsweise [`EventSource`](/de/docs/Web/API/EventSource) auf dieser Seite in Firefox 84 eingeben, sehen Sie, dass dies nicht in Service Workern unterstützt wird, aber in dedizierten und geteilten Workern.

> [!NOTE]
> Für eine vollständige Liste der Funktionen, die für Worker verfügbar sind, siehe [Funktionen und Schnittstellen verfügbar für Worker](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker)-Interface
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Interface
- [Funktionen verfügbar für Worker](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Interface
