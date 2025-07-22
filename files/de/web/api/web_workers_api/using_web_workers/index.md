---
title: Verwendung von Web Workers
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: 1d4acd0cc450af2e293b9856d5763b92a0812e30
---

{{DefaultAPISidebar("Web Workers API")}}

Web Workers sind ein einfacher Weg, um Skripte im Hintergrund auszführen zu lassen, ohne die Benutzeroberfläche zu stören. Der Worker-Thread kann Aufgaben ausführen, ohne die Benutzeroberfläche zu beeinträchtigen. Darüber hinaus können sie mithilfe der APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Netzwerkrequests durchführen. Einmal erstellt, kann ein Worker Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen von diesem Code angegebenen Ereignishandler sendet (und umgekehrt).

Dieser Artikel bietet eine detaillierte Einführung in die Verwendung von Web Workers.

## Web Workers API

Ein Worker ist ein Objekt, das mithilfe eines Konstruktors erstellt wird (z. B. [`Worker()`](/de/docs/Web/API/Worker/Worker)), der eine benannte JavaScript-Datei ausführt – diese Datei enthält den Code, der im Worker-Thread laufen wird; Worker laufen in einem anderen globalen Kontext, der sich von dem aktuellen [`window`](/de/docs/Web/API/Window) unterscheidet. Daher führt die Verwendung der Abkürzung [`window`](/de/docs/Web/API/Window), um den aktuellen globalen Geltungsbereich abzurufen (anstelle von [`self`](/de/docs/Web/API/Window/self)) innerhalb eines [`Worker`](/de/docs/Web/API/Worker) zu einem Fehler.

Der Worker-Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt im Falle von dedizierten Workern (Standard-Workers, die von einem einzigen Skript genutzt werden; Shared Workers nutzen [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)) repräsentiert. Ein dedizierter Worker ist nur von dem Skript aus zugänglich, das ihn zuerst erzeugte, während Shared Workers von mehreren Skripten aus zugänglich sind.

> [!NOTE]
> Siehe [Web Workers API Startseite](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentation zu Workern und zusätzlichen Leitfäden.

Im Worker-Thread können Sie beliebigen Code ausführen, mit einigen Ausnahmen. Beispielsweise können Sie nicht direkt das DOM manipulieren oder einige Standardmethoden und Eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts verwenden. Sie können jedoch eine große Anzahl an Objekten verwenden, die unter `window` verfügbar sind, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Datenspeichermechanismen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Siehe [Funktionen und Klassen, die Arbeitern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) für mehr Details.

Daten werden zwischen Workern und dem Haupt-Thread über ein Nachrichtensystem gesendet – beide Seiten senden ihre Nachrichten mit der `postMessage()`-Methode und reagieren mit dem `onmessage`-Ereignishandler (die Nachricht ist im Datenattribut des [`message`](/de/docs/Web/API/Worker/message_event)-Ereignisses enthalten). Die Daten werden kopiert, anstatt geteilt zu werden.

Worker können wiederum neue Worker erzeugen, solange diese Worker im selben {{Glossary("origin", "Origin")}} wie die übergeordnete Seite gehostet werden.

Darüber hinaus können Worker Netzwerkrequests mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen (wobei zu beachten ist, dass das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur für das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt besprechen wir das JavaScript in unserem [einfachen Beispiel für dedizierte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)): Dies ermöglicht Ihnen, zwei Zahlen einzugeben, die dann miteinander multipliziert werden. Die Zahlen werden an einen dedizierten Worker gesendet, miteinander multipliziert und das Ergebnis wird an die Seite zurückgegeben und angezeigt.

Dieses Beispiel ist ziemlich trivial, aber wir haben uns entschieden, es einfach zu halten, während wir Sie in die grundlegenden Worker-Konzepte einführen. Weitere erweiterte Details werden später im Artikel behandelt.

### Erkennung von Worker-Funktionen

Für ein etwas kontrollierteres Fehlermanagement und Abwärtskompatibilität ist es eine gute Idee, Ihren Worker-Zugriffscode wie folgt zu kapseln ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
if (window.Worker) {
  // …
}
```

### Erstellen eines dedizierten Workers

Einen neuen Worker zu erstellen ist einfach. Alles, was Sie tun müssen, ist, den Konstruktor [`Worker()`](/de/docs/Web/API/Worker/Worker) aufzurufen und die URI eines Skripts anzugeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
const myWorker = new Worker("worker.js");
```

> [!NOTE]
> Bundler, einschließlich [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, URLs zu übergeben, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) aufgelöst werden, an den `Worker()`-Konstruktor. Zum Beispiel:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript anstatt zur aktuellen HTML-Seite, was es dem Bundler ermöglicht, sicher Optimierungen wie Umbenennungen durchzuführen (da sonst die `worker.js`-URL möglicherweise auf eine Datei verweist, die nicht vom Bundler kontrolliert wird, sodass er keine Annahmen treffen kann).

### Senden von Nachrichten zu und von einem dedizierten Worker

Die Magie der Worker geschieht über die Methode [`postMessage()`](/de/docs/Web/API/Worker/postMessage) und den Ereignishandler [`onmessage`](/de/docs/Web/API/Worker/message_event). Wenn Sie eine Nachricht an den Worker senden möchten, übermitteln Sie ihm Nachrichten so ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Hier haben wir also zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` dargestellt werden; wenn sich der Wert eines dieser Elemente ändert, wird `myWorker.postMessage([first.value,second.value])` verwendet, um die Werte in beiden als Array an den Worker zu senden. Sie können fast alles in der Nachricht senden, was Sie möchten.

Im Worker können wir auf die Nachricht reagieren, wenn sie empfangen wird, indem wir einen Ereignishandlerblock wie diesen schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage`-Handler ermöglicht es uns, Code auszuführen, wenn eine Nachricht empfangen wird, wobei die Nachricht selbst im `data`-Attribut des `message`-Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen miteinander und verwenden dann erneut `postMessage()`, um das Ergebnis zurück an den Hauptthread zu senden.

Zurück im Hauptthread verwenden wir erneut `onmessage`, um auf die vom Worker zurückgesendete Nachricht zu reagieren:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier erfassen wir die Daten des Nachrichtenevents und setzen es als `textContent` des Ergebnisses, sodass der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` an das `Worker`-Objekt angehängt werden müssen, wenn sie im Hauptskript-Thread verwendet werden, jedoch nicht, wenn sie im Worker verwendet werden. Dies liegt daran, dass der Worker im Inneren des Workers effektiv den globalen Geltungsbereich darstellt.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Hauptthread und dem Worker übergeben wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Übertragen von Daten zu und von Workern: weitere Details](#transferring_data_to_and_from_workers_further_details) für eine gründlichere Erklärung.

### Beenden eines Workers

Wenn Sie einen laufenden Worker sofort aus dem Hauptthread beenden müssen, können Sie dies tun, indem Sie die `terminate`-Methode des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn zur Laufzeit ein Fehler im Worker auftritt, wird dessen `onerror`-Ereignishandler aufgerufen. Dieser erhält ein Ereignis namens `error`, das die `ErrorEvent`-Schnittstelle implementiert.

Das Ereignis hat keine Sprudelkette und ist abbrechbar; um die Standardaktion zu verhindern, kann der Worker die Methode `preventDefault()` des Errorevents aufrufen.

Das Errorevent hat die folgenden drei Felder von Interesse:

- `message`
  - : Eine menschenlesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, in der der Fehler aufgetreten ist.

### Erstellen von Subworkern

Workers dürfen weitere Worker erzeugen, wenn sie dies möchten. Diese sogenannten Subworker müssen im selben Origin wie die übergeordnete Seite gehostet werden. Außerdem werden die URIs für Subworker relativ zur Position des übergeordneten Workers aufgelöst, anstatt zum dazugehörigen Dokument. Dies erleichtert es Workern, den Überblick über ihre Abhängigkeiten zu behalten.

### Importieren von Skripten und Bibliotheken

Worker-Threads haben Zugriff auf eine globale Funktion `importScripts()`, mit der sie Skripte importieren können. Sie akzeptiert null oder mehr URIs als Parameter für zu importierende Ressourcen; all die folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes aufgelistete Skript und führt es aus. Alle im Skript vorhandenen globalen Objekte können dann vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` ausgelöst und nachfolgender Code wird nicht ausgeführt. Zuvor ausgeführter Code (einschließlich Code, der mit [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) zurückgestellt wurde) bleibt jedoch funktionsfähig. Funktionsdeklarationen **nach** der `importScripts()`-Methode bleiben ebenfalls erhalten, da diese immer vor dem Rest des Codes ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der Sie die Dateinamen in `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` gibt erst zurück, wenn alle Skripte geladen und ausgeführt wurden.

## Shared Workers

Ein Shared Worker ist für mehrere Skripte zugänglich – auch wenn sie von verschiedenen Fenstern, iframes oder sogar Workern aus aufgerufen werden. In diesem Abschnitt wird das JavaScript in unserem [einfachen Beispiel für Shared Workers](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)) besprochen: Dies ist sehr ähnlich zu dem einfachen, dedizierten Worker-Beispiel, mit dem Unterschied, dass es zwei verfügbare Funktionen gibt, die von verschiedenen Skriptdateien behandelt werden: _zwei Zahlen multiplizieren_ oder _eine Zahl quadrieren_. Beide Skripte verwenden denselben Worker, um die erforderliche Berechnung durchzuführen.

Hier werden wir uns auf die Unterschiede zwischen dedizierten und Shared Workers konzentrieren. Beachten Sie, dass in diesem Beispiel zwei HTML-Seiten vorhanden sind, die jeweils mit JavaScript verwendet werden, das dieselbe einzelne Worker-Datei nutzt.

> [!NOTE]
> Wenn SharedWorker von mehreren Browser-Kontexten aus zugänglich ist, müssen alle diese Browser-Kontexte genau denselben Ursprung (dasselbe Protokoll, denselben Host und denselben Port) teilen.

> [!NOTE]
> In Firefox können Shared Workers nicht zwischen Dokumenten geteilt werden, die in privaten und nicht-privaten Fenstern geladen sind ([Firefox-Bug 1177621](https://bugzil.la/1177621)).

### Erstellen eines Shared Workers

Das Erstellen eines neuen Shared Workers funktioniert im Wesentlichen genauso wie bei einem dedizierten Worker, jedoch mit einem anderen Konstruktor-Namen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) – jeder muss den Worker mit einem Code wie diesem starten:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied besteht darin, dass man bei einem Shared Worker über ein `port`-Objekt kommunizieren muss – ein expliziter Port wird geöffnet, den die Skripte zur Kommunikation mit dem Worker verwenden können (dies geschieht implizit im Fall von dedizierten Workern).

Die Portverbindung muss entweder implizit durch die Verwendung des `onmessage`-Ereignishandlers oder explizit mit der `start()`-Methode gestartet werden, bevor Nachrichten gepostet werden können. Der Aufruf von `start()` ist nur erforderlich, wenn das `message`-Ereignis über die `addEventListener()`-Methode verdrahtet wird.

> [!NOTE]
> Bei der Verwendung der `start()`-Methode zum Öffnen der Port-Verbindung muss sie sowohl vom übergeordneten Thread als auch vom Worker-Thread aufgerufen werden, wenn eine bidirektionale Kommunikation erforderlich ist.

### Senden von Nachrichten zu und von einem Shared Worker

Jetzt können Nachrichten wie zuvor an den Worker gesendet werden, aber die Methode `postMessage()` muss über das Port-Objekt aufgerufen werden (wiederum werden Sie ähnliche Konstrukte in beiden [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) und [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Nun, weiter zum Worker. Hier gibt es auch etwas mehr Komplexität ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

Zunächst verwenden wir einen `onconnect`-Handler, um Code auszuführen, wenn eine Verbindung zum Port hergestellt wird (d.h. wenn der `onmessage`-Ereignishandler im übergeordneten Thread eingerichtet wird oder wenn die `start()`-Methode explizit im übergeordneten Thread aufgerufen wird).

Wir verwenden das `ports`-Attribut dieses Ereignisobjekts, um den Port zu erfassen und in einer Variablen zu speichern.

Als nächstes fügen wir einen `onmessage`-Handler auf dem Port hinzu, um die Berechnung durchzuführen und das Ergebnis an den Hauptthread zu senden. Das Einrichten dieses `onmessage`-Handlers im Worker-Thread öffnet auch implizit die Port-Verbindung zurück zum übergeordneten Thread, sodass der Aufruf von `port.start()` tatsächlich nicht erforderlich ist, wie oben erwähnt.

Schließlich, zurück im Hauptskript, verarbeiten wir die Nachricht (wiederum werden Sie ähnliche Konstrukte in beiden [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) und [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht über den Port vom Worker zurückkommt, setzen wir das Berechnungsergebnis in den entsprechenden Ergebnis-Absatz ein.

## Über Thread-Sicherheit

Das [`Worker`](/de/docs/Web/API/Worker)-Interface erzeugt echte OS-Level-Threads, und umsichtige Programmierer könnten besorgt sein, dass Gleichzeitigkeit "interessante" Effekte in Ihrem Code verursachen kann, wenn Sie nicht vorsichtig sind.

Da Web Workers jedoch sorgfältig kontrollierte Kommunikation mit anderen Threads haben, ist es tatsächlich sehr schwierig, Probleme mit der Gleichzeitigkeit zu verursachen. Es gibt keinen Zugriff auf nicht-thread-sichere Komponenten oder das DOM. Und Sie müssen spezifische Daten hinein- und herausgeben, indem Sie serialisierte Objekte verwenden. Sie müssen sich also wirklich anstrengen, um Probleme in Ihrem Code zu verursachen.

## Content-Sicherheitsrichtlinie

Worker haben ihren eigenen Ausführungskontext, der sich vom Dokument, das sie erstellt hat, unterscheidet. Aus diesem Grund unterliegen sie im Allgemeinen nicht der [Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder des übergeordneten Workers), das sie erstellt hat. Angenommen, ein Dokument wird mit dem folgenden Header bereitgestellt:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem wird dadurch verhindert, dass damit eingeschlossene Skripte [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn das Skript jedoch einen Worker konstruiert, darf der Code, der im Kontext des Workers ausgeführt wird, `eval()` _verwenden_.

Um eine Content-Sicherheitsrichtlinie für den Worker festzulegen, setzen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Header für die Antwort des Requests, der das Worker-Skript bereitstellt.

Eine Ausnahme besteht darin, wenn der Worker-Skript-Ursprung ein global eindeutiger Bezeichner ist (z. B., wenn seine URL ein Schema von data oder blob hat). In diesem Fall erbt der Worker die CSP des Dokuments oder Workers, der ihn erstellt hat.

## Übertragen von Daten zu und von Workern: Weitere Details

Daten, die zwischen der Hauptseite und Workern übergeben werden, werden _kopiert_, nicht geteilt (es sei denn, es handelt sich um bestimmte Objekte, die explizit [geteilt](#teilen_von_daten) werden können). Objekte werden serialisiert, während sie an den Worker übergeben werden, und dann am anderen Ende deserialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, so dass das Endergebnis eine **Duplikation** auf jeder Seite ist. Die meisten Browser implementieren diese Funktion als [structuriertes Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Wie Sie mittlerweile wahrscheinlich wissen, wird der Datenaustausch zwischen den beiden Threads über Nachrichten mit `postMessage()` abgewickelt, und das Datenattribut des `message`-Ereignisses [`data`](/de/docs/Web/API/MessageEvent/data) enthält die Daten, die vom Worker zurückgegeben werden.

**example.html**: (die Hauptseite):

```js
const myWorker = new Worker("my_task.js");

myWorker.onmessage = (event) => {
  console.log(`Worker said : "${event.data}"`);
};

myWorker.postMessage({ lastUpdate: new Date() });
```

**my_task.js** (der Worker):

```js
self.onmessage = (event) => {
  postMessage(`Last updated: ${event.data.lastUpdate.toDateString()}`);
};
```

Der [structurierte Klonungsalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kann JSON und einige Dinge akzeptieren, die JSON nicht kann – wie z. B. zirkuläre Referenzen.

### Beispiele für die Datenübertragung

#### Beispiel 1: Fortgeschrittenes Übergeben von JSON-Daten und Erstellen eines Umschaltsystems

Wenn Sie komplexe Daten übergeben und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammenfasst.

Zuerst erstellen wir eine `QueryableWorker`-Klasse, die die URL des Workers, einen Standardlistener und einen Fehlerhandler nimmt, und diese Klasse wird eine Liste von Listeners verfolgen und uns bei der Kommunikation mit dem Worker helfen:

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

Hier lassen wir den Worker zwei einfache Operationen ausführen, um zu illustrieren: die Differenz von zwei Zahlen berechnen und nach drei Sekunden einen Alert auslösen. Um dies zu erreichen, implementieren wir zuerst eine `sendQuery`-Methode, die abfragt, ob der Worker tatsächlich die entsprechenden Methoden hat, um das zu tun, was wir wollen.

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

Wir beenden QueryableWorker mit der `onmessage`-Methode. Wenn der Worker die entsprechenden Methoden hat, die wir abgefragt haben, sollte er den Namen des entsprechenden Listeners und die Argumente zurückgeben, die er benötigt, wir müssen ihn nur in `listeners` finden:

```js
worker.onmessage = (event) => {
  if (
    event.data instanceof Object &&
    Object.hasOwn(event.data, "queryMethodListener") &&
    Object.hasOwn(event.data, "queryMethodArguments")
  ) {
    listeners[event.data.queryMethodListener].apply(
      this,
      event.data.queryMethodArguments,
    );
  } else {
    this.defaultListener(event.data);
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

Hier sind die vollständige Implementierungen:

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
        this,
        event.data.queryMethodArguments,
      );
    } else {
      this.defaultListener(event.data);
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

Es ist möglich, den Inhalt jeder Hauptseite -> Worker und Worker -> Hauptseite Nachricht umzuschalten. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können beliebig sein, solange sie in `QueryableWorker` und dem `Worker` konsistent sind.

### Datenübertragung durch Eigentumsübertragung (transferierbare Objekte)

Moderne Browser enthalten eine zusätzliche Möglichkeit, bestimmte Objekttypen mit hoher Leistung an einen Worker zu übergeben oder von ihm zu empfangen. [Transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden mit einer Zero-Copy-Operation von einem Kontext in einen anderen übertragen, was zu einer erheblichen Leistungsverbesserung beim Senden großer Datensätze führt.

Zum Beispiel, beim Übertragen eines {{jsxref("ArrayBuffer")}} von Ihrer Hauptanwendung zu einem Worker-Skript, wird der ursprüngliche {{jsxref("ArrayBuffer")}} geleert und ist nicht mehr verwendbar. Sein Inhalt wird (im wahrsten Sinne des Wortes) auf den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

### Teilen von Daten

Das {{jsxref("SharedArrayBuffer")}}-Objekt ermöglicht es zwei Threads, wie dem Worker und dem Hauptthread, gleichzeitig auf denselben Speicherbereich zuzugreifen und Daten auszutauschen, ohne durch den Nachrichtenaustauschmechanismus gehen zu müssen. Die Verwendung von gemeinsamem Speicher bringt erhebliche Bedenken in Bezug auf Determinismus, Sicherheit und Leistung mit sich, von denen einige im Artikel [JavaScript-Ausführungsmodell](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) erläutert werden.

## Eingebettete Worker

Es gibt keinen "offiziellen" Weg, um den Code eines Workers in einer Webseite einzubetten, wie {{HTMLElement("script")}}-Elemente dies für normale Skripte tun. Aber ein {{HTMLElement("script")}}-Element, das kein `src`-Attribut hat und ein `type`-Attribut hat, das keinen ausführbaren MIME-Typ identifiziert, kann als Datenblock-Element betrachtet werden, das JavaScript verwenden könnte. "Datenblöcke" ist eine allgemeinere HTML-Funktion, die fast alle Textdaten tragen kann. Auf diese Weise könnte ein Worker eingebettet werden:

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

Der eingebettete Worker ist jetzt in eine neue benutzerdefinierte `document.worker`-Eigenschaft eingebettet.

Es ist auch erwähnenswert, dass Sie auch eine Funktion in ein Blob konvertieren und dann eine Objekt-URL von diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

In diesem Abschnitt werden weitere Beispiele zur Verwendung von Web Workern bereitgestellt.

### Durchführen von Berechnungen im Hintergrund

Worker sind hauptsächlich nützlich, um Ihrem Code zu ermöglichen, prozessorintensive Berechnungen auszuführen, ohne den Benutzeroberfläche-Thread zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfangen wird, die gesendet werden, wenn die `postMessage()`-Methode des Worker-Objekts aufgerufen wird. Dies führt die Mathematik durch und gibt schließlich das Ergebnis zurück an den Hauptthread.

#### Der HTML-Code

```html
<form>
  <div>
    <label for="number">
      Enter a number that is a zero-based index position in the fibonacci
      sequence to see what number is in that position. For example, enter 6 and
      you'll get a result of 8 — the fibonacci number at index position 6 is 8.
    </label>
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

Die Webseite erstellt ein `<p>`-Element mit der ID `result`, das verwendet wird, um das Ergebnis anzuzeigen, und startet dann den Worker. Nachdem der Worker gestartet wurde, wird der `onmessage`-Handler konfiguriert, um die Ergebnisse durch Setzen des Inhalts des `<p>`-Elements anzuzeigen, und der `onerror`-Handler wird eingerichtet, um die Fehlermeldung in die Devtools-Konsole zu protokollieren.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Probieren Sie dieses Beispiel live aus](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufteilen von Aufgaben auf mehrere Worker

Da Multicore-Computer immer häufiger werden, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker zu verteilen, die diese Aufgaben dann auf mehreren Prozessor-Kernen ausführen können.

## Andere Arten von Workern

Zusätzlich zu dedizierten und Shared Web Workern gibt es noch andere Arten von Workern:

- [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk stehen (wenn verfügbar). Sie sollen unter anderem die Erstellung effektiver Offline-Erlebnisse ermöglichen, Netzwerkrequests abzufangen und geeignete Maßnahmen zu ergreifen, basierend darauf, ob das Netzwerk verfügbar ist und aktualisierte Assets auf dem Server vorhanden sind. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrund-Sync-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bieten die Möglichkeit für direktes geskriptetes Audio-Processing in einem Worklet (einer leichten Version eines Workers) Kontext durchgeführt zu werden.

## Debuggen von Worker-Threads

Die meisten Browser erlauben es Ihnen, Web Workers in ihren JavaScript-Debuggern auf _genau die gleiche Weise_ zu debuggen, wie Sie den Hauptthread debuggen! Zum Beispiel listen sowohl Firefox als auch Chrome JavaScript-Quelldateien für sowohl den Hauptthread als auch aktive Worker-Threads auf, und all diese Dateien können geöffnet werden, um Breakpoints und Logpunkte zu setzen.

Um zu lernen, wie man Web Workers debuggt, lesen Sie die Dokumentation für die JavaScript-Debugger der einzelnen Browser:

- [Chrome Quellen-Panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

Um Devtools für Web Workers zu öffnen, können Sie die folgenden URLs verwenden:

- Edge: `edge://inspect/`
- Chrome: `chrome://inspect/`
- Firefox: `about:debugging#/runtime/this-firefox`

Diese Seiten zeigen eine Übersicht über alle Service Worker. Sie müssen den relevanten anhand der URL finden und dann auf _inspect_ klicken, um auf Devtools wie die Konsole und den Debugger für diesen Worker zuzugreifen.

## Funktionen und Schnittstellen, die in Workern verfügbar sind

Sie können die meisten Standardfunktionen von JavaScript innerhalb eines Web Workers verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptsächlichste, was Sie _nicht_ in einem Worker machen können, ist die direkte Beeinflussung der übergeordneten Seite. Dazu gehört die Manipulation des DOMs und die Verwendung der Objekte dieser Seite. Sie müssen dies indirekt tun, indem Sie eine Nachricht über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) an das Hauptskript senden und dann die Änderungen im Ereignishandler vornehmen.

> [!NOTE]
> Sie können überprüfen, ob eine Methode oder Schnittstelle für Worker verfügbar ist, mit dem [Worker Playground](https://mdn.github.io/dom-examples/web-workers/worker-playground/).

> [!NOTE]
> Für eine vollständige Liste der Funktionen, die Workern zur Verfügung stehen, sehen Sie [Funktionen und Schnittstellen, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker) Interface
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Interface
- [Funktionen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Interface
