---
title: Verwenden von Web-Workern
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{DefaultAPISidebar("Web Workers API")}}

Web-Worker sind ein einfaches Mittel, um Webinhalte Skripte in Hintergrund-Threads ausführen zu lassen. Der Worker-Thread kann Aufgaben ausführen, ohne die Benutzeroberfläche zu beeinträchtigen. Außerdem können sie Netzwerkanfragen mithilfe der [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)- oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-APIs senden. Einmal erstellt, kann ein Worker Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen vom Code spezifizierten Ereignishandler sendet (und umgekehrt).

In diesem Artikel finden Sie eine ausführliche Einführung in die Verwendung von Web-Workern.

## Web Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor (z.B. [`Worker()`](/de/docs/Web/API/Worker/Worker)) erstellt wird, der eine benannte JavaScript-Datei ausführt – diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext, der sich von dem aktuellen [`window`](/de/docs/Web/API/Window) unterscheidet. Daher führt die Verwendung der [`window`](/de/docs/Web/API/Window)-Abkürzung, um den aktuellen globalen Bereich innerhalb eines [`Worker`](/de/docs/Web/API/Worker) zu erhalten, zu einem Fehler.

Der Worker-Kontext wird im Fall von dedizierten Workern (Standard-Worker, die von einem einzelnen Skript verwendet werden; geteilte Worker verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)) durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt repräsentiert. Ein dedizierter Worker ist nur aus dem Skript zugänglich, das ihn zuerst erzeugt hat, während geteilte Worker von mehreren Skripten aus zugänglich sind.

> [!NOTE]
> Siehe [die Web Workers API-Startseite](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentation zu Workern und zusätzliche Leitfäden.

Sie können beliebigen Code innerhalb des Worker-Threads ausführen, mit einigen Ausnahmen. Beispielsweise können Sie das DOM nicht direkt aus einem Worker heraus manipulieren oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts verwenden. Aber Sie können viele der unter `window` verfügbaren Elemente verwenden, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Datenspeichermechanismen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Weitere Details finden Sie unter [Funktionen und Klassen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

Daten werden zwischen Workern und dem Haupt-Thread über ein Nachrichtensystem gesendet – beide Seiten senden ihre Nachrichten mit der `postMessage()`-Methode und reagieren auf Nachrichten über den `onmessage`-Ereignishandler (die Nachricht ist im Datenattribut des [`message`](/de/docs/Web/API/Worker/message_event)-Ereignisses enthalten). Die Daten werden kopiert, nicht geteilt.

Worker können wiederum neue Worker erzeugen, solange diese innerhalb desselben {{Glossary("origin", "Origin")}} wie die übergeordnete Seite gehostet werden.

Zusätzlich können Worker Netzwerkanfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) senden (wobei allerdings zu beachten ist, dass das [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Attribut von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur durch das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt besprechen wir das JavaScript, das in unserem [einfachen Beispiel eines dedizierten Workers](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) gefunden wurde ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)): Dies ermöglicht es Ihnen, zwei Zahlen einzugeben, die miteinander multipliziert werden. Die Zahlen werden an einen dedizierten Worker gesendet, miteinander multipliziert und das Ergebnis wird an die Seite zurückgesendet und angezeigt.

Dieses Beispiel ist ziemlich trivial, aber wir haben uns entschieden, es einfach zu halten, während wir Sie in grundlegende Worker-Konzepte einführen. Weitere fortgeschrittene Details werden später im Artikel behandelt.

### Erkennung von Worker-Funktionen

Für eine etwas kontrolliertere Fehlerbehandlung und Abwärtskompatibilität ist es eine gute Idee, Ihren Worker-Zugriffscode in Folgendes zu verpacken ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
if (window.Worker) {
  // …
}
```

### Starten eines dedizierten Workers

Einen neuen Worker zu erstellen ist einfach. Alles, was Sie tun müssen, ist, den [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor aufzurufen und die URI eines Skripts anzugeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

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
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript anstatt zur aktuellen HTML-Seite, was es dem Bundler ermöglicht, sicher Optimierungen wie das Umbenennen vorzunehmen (weil ansonsten die `worker.js`-URL möglicherweise auf eine Datei verweist, die nicht vom Bundler kontrolliert wird, sodass er keine Annahmen treffen kann).

### Senden von Nachrichten zu und von einem dedizierten Worker

Der Zauber der Worker geschieht über die [`postMessage()`](/de/docs/Web/API/Worker/postMessage)-Methode und den [`onmessage`](/de/docs/Web/API/Worker/message_event)-Ereignishandler. Wenn Sie eine Nachricht an den Worker senden möchten, posten Sie Nachrichten an ihn wie folgt ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Hier haben wir also zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` dargestellt werden; wenn der Wert eines der beiden geändert wird, wird `myWorker.postMessage([first.value,second.value])` verwendet, um den Wert in beiden als Array an den Worker zu senden. Sie können in der Nachricht fast alles senden, was Sie möchten.

Im Worker können wir reagieren, wenn die Nachricht empfangen wird, indem wir einen Ereignishandler-Block schreiben wie diesen ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage`-Handler ermöglicht es uns, Code auszuführen, wann immer eine Nachricht empfangen wird, wobei die Nachricht selbst im `data`-Attribut des `message`-Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen miteinander und verwenden dann erneut `postMessage()`, um das Ergebnis an den Haupt-Thread zurückzusenden.

Zurück im Haupt-Thread verwenden wir erneut `onmessage`, um auf die Nachricht zu reagieren, die vom Worker zurückgesendet wurde:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier greifen wir auf die Nachrichtendaten zu und setzen sie als `textContent` des Ergebnisabsatzes ein, sodass der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` am `Worker`-Objekt hängen müssen, wenn sie im Hauptskript-Thread verwendet werden, jedoch nicht, wenn sie im Worker verwendet werden. Dies liegt daran, dass innerhalb des Workers der Worker im Wesentlichen der globale Bereich ist.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Haupt-Thread und dem Worker weitergegeben wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Übertragen von Daten zu und von Workern: weitere Details](#transferring_data_to_and_from_workers_further_details) für eine viel gründlichere Erklärung.

### Beenden eines Workers

Wenn Sie einen laufenden Worker sofort vom Haupt-Thread aus beenden müssen, können Sie dies tun, indem Sie die `terminate`-Methode des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn ein Laufzeitfehler im Worker auftritt, wird sein `onerror`-Ereignishandler aufgerufen. Er erhält ein Ereignis namens `error`, das die `ErrorEvent`-Schnittstelle implementiert.

Das Ereignis blubbert nicht und ist abbrechbar; um zu verhindern, dass das Standardverhalten durchgeführt wird, kann der Worker die `preventDefault()`-Methode des Fehlerereignisses aufrufen.

Das Fehlerereignis hat die folgenden drei Felder von Interesse:

- `message`
  - : Eine benutzerfreundliche Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, auf der der Fehler aufgetreten ist.

### Unter-Worker starten

Worker können bei Bedarf weitere Worker starten. Die sogenannten Unter-Worker müssen innerhalb desselben Ursprungs wie die übergeordnete Seite gehostet werden. Außerdem werden die URIs für die Unter-Worker im Vergleich zur Lage des übergeordneten Workers und nicht zur besitzenden Seite aufgelöst. Dies macht es einfacher, für Worker den Überblick zu behalten, wo sich ihre Abhängigkeiten befinden.

### Importieren von Skripten und Bibliotheken

Worker-Threads haben Zugriff auf eine globale Funktion, `importScripts()`, mit der sie Skripte importieren können. Sie akzeptiert null oder mehr URIs als Parameter zu Ressourcen, die importiert werden sollen; alle folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes aufgelistete Skript und führt es aus. Alle globalen Objekte aus jedem Skript können dann vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` ausgelöst, und nachfolgender Code wird nicht ausgeführt. Bereits ausgeführter Code (einschließlich Code, der mit [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) verzögert wird) bleibt jedoch funktionsfähig. Funktionsdeklarationen **nach** der `importScripts()`-Methode werden ebenfalls beibehalten, da diese immer vor dem Rest des Codes bewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der Sie die Dateinamen in `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` gibt erst zurück, wenn alle Skripte geladen und ausgeführt wurden.

## Geteilte Worker

Ein geteilter Worker ist von mehreren Skripten zugänglich – selbst wenn sie von verschiedenen Fenstern, iframes oder sogar Workern aufgerufen werden. In diesem Abschnitt besprechen wir das JavaScript, das in unserem [einfachen Beispiel eines geteilten Workers](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) gefunden wurde ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)): Dies ist dem einfachen Beispiel eines dedizierten Workers sehr ähnlich, außer dass es zwei verfügbare Funktionen gibt, die von verschiedenen Skriptdateien behandelt werden: _Zwei Zahlen multiplizieren_ oder _Eine Zahl quadrieren_. Beide Skripte verwenden denselben Worker, um die notwendige Berechnung durchzuführen.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und geteilten Workern. Beachten Sie, dass wir in diesem Beispiel zwei HTML-Seiten haben, die jeweils JavaScript enthalten, das denselben einzelnen Worker verwendet.

> [!NOTE]
> Wenn SharedWorker von mehreren Browsing-Kontexten aus zugänglich sein kann, müssen alle diese Browsing-Kontexte denselben Ursprung (gleiches Protokoll, gleicher Host und gleicher Port) gemeinsam nutzen.

> [!NOTE]
> In Firefox können geteilte Worker nicht zwischen Dokumenten geteilt werden, die in privaten und nicht privaten Fenstern geladen werden ([Firefox-Bug 1177621](https://bugzil.la/1177621)).

### Starten eines geteilten Workers

Das Starten eines neuen geteilten Workers ist im Wesentlichen dasselbe wie bei einem dedizierten Worker, jedoch mit einem anderen Konstruktor-Namen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) – jeder muss den Worker mit Code wie dem folgenden initiieren:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied besteht darin, dass bei einem geteilten Worker über ein `port`-Objekt kommuniziert werden muss – es wird explizit ein Port geöffnet, den die Skripte zur Kommunikation mit dem Worker nutzen können (dies geschieht implizit bei dedizierten Workern).

Die Portverbindung muss entweder implizit durch die Verwendung des `onmessage`-Ereignishandlers oder explizit mit der `start()`-Methode gestartet werden, bevor Nachrichten gesendet werden können. Der `start()`-Aufruf ist nur erforderlich, wenn das `message`-Ereignis über die `addEventListener()`-Methode verdrahtet wird.

> [!NOTE]
> Wenn die `start()`-Methode verwendet wird, um die Portverbindung zu öffnen, muss sie sowohl vom übergeordneten Thread als auch vom Worker-Thread aufgerufen werden, wenn eine bidirektionale Kommunikation erforderlich ist.

### Senden von Nachrichten zu und von einem geteilten Worker

Nun können wie zuvor Nachrichten an den Worker gesendet werden, aber die `postMessage()`-Methode muss über das Port-Objekt aufgerufen werden (erneut finden Sie ähnliche Konstrukte in sowohl [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js)):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Nun zum Worker. Es gibt hier ebenfalls ein wenig mehr Komplexität ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

Zuerst verwenden wir einen `onconnect`-Handler, um Code auszuführen, wenn eine Verbindung zum Port hergestellt wird (d.h. wenn der `onmessage`-Ereignishandler im übergeordneten Thread eingerichtet wird oder wenn die `start()`-Methode im übergeordneten Thread explizit aufgerufen wird).

Wir verwenden das `ports`-Attribut dieses Ereignisobjekts, um auf den Port zuzugreifen und ihn in einer Variablen zu speichern.

Als Nächstes fügen wir einen `onmessage`-Handler auf dem Port hinzu, um die Berechnung durchzuführen und das Ergebnis an den Haupt-Thread zurückzusenden. Das Einrichten dieses `onmessage`-Handlers im Worker-Thread öffnet ebenfalls implizit die Portverbindung zurück zum übergeordneten Thread, sodass der Aufruf von `port.start()` tatsächlich nicht erforderlich ist, wie oben erwähnt.

Schließlich kümmern wir uns im Hauptskript um die Nachricht (erneut finden Sie ähnliche Konstrukte in sowohl [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js)):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht über den Port vom Worker zurückkommt, fügen wir das Berechnungsergebnis in den entsprechenden Ergebnisabsatz ein.

## Über Thread-Sicherheit

Das [`Worker`](/de/docs/Web/API/Worker)-Interface erzeugt echte Betriebssystemlevel-Threads, und sorgfältige Programmierer könnten besorgt sein, dass Gleichzeitigkeit in Ihrem Code "interessante" Effekte verursachen kann, wenn Sie nicht vorsichtig sind.

Da Web-Worker jedoch sorgfältig kontrollierte Kommunikationspunkte mit anderen Threads haben, ist es tatsächlich sehr schwierig, Probleme mit der Gleichzeitigkeit zu verursachen. Es gibt keinen Zugriff auf nicht threadsichere Komponenten oder das DOM. Und Sie müssen spezifische Daten in und aus einem Thread durch serialisierte Objekte übergeben. Daher müssen Sie wirklich hart arbeiten, um Probleme in Ihrem Code zu verursachen.

## Sicherheitsrichtlinie für Inhalte

Worker gelten als eigenständiger Ausführungskontext, der sich von dem Dokument unterscheidet, das sie erstellt hat. Aus diesem Grund unterliegen sie im Allgemeinen nicht der [Sicherheitsrichtlinie für Inhalte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder des übergeordneten Workers), das sie erstellt hat. Nehmen wir zum Beispiel an, ein Dokument wird mit folgendem Header ausgeliefert:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem wird dies verhindern, dass sämtliche eingeschlossenen Skripte [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn das Skript jedoch einen Worker erstellt, ist es dem Code im Kontext des Workers _erlaubt_, `eval()` zu verwenden.

Um eine Sicherheitsrichtlinie für Inhalte für den Worker festzulegen, setzen Sie den [Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Antwortheader für die Anfrage, die das Worker-Skript selbst geliefert hat.

Die Ausnahme hiervon ist, wenn der Herkunft des Worker-Skriptes eine global eindeutige Kennung ist (zum Beispiel, wenn seine URL ein Schema von data oder blob hat). In diesem Fall erbt der Worker die CSP des Dokuments oder Workers, der ihn erstellt hat.

## Übertragen von Daten zu und von Workern: weitere Details

Zwischen der Hauptseite und Workern übergebene Daten werden _kopiert_, nicht geteilt (ausgenommen bestimmte Objekte, die ausdrücklich [geteilt](#daten_teilen) werden können). Objekte werden serialisiert, wenn sie an den Worker übergeben werden, und anschließend am anderen Ende deserialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, sodass am Ende **ein Duplikat** an jedem Ende erstellt wird. Die meisten Browser implementieren diese Funktion als [strukturierte Klonierung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Wie Sie wahrscheinlich inzwischen wissen, werden Daten zwischen den beiden Threads über Nachrichten mit `postMessage()` ausgetauscht, und das [`data`](/de/docs/Web/API/MessageEvent/data)-Attribut des `message`-Ereignisses enthält die vom Worker zurückgesandten Daten.

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

Der [strukturierte Klonierung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)-Algorithmus kann JSON und einige Dinge akzeptieren, die JSON nicht akzeptieren kann – wie z. B. zirkuläre Referenzen.

### Datenübertragung-Beispiele

#### Beispiel 1: Erweitertes Übergeben von JSON-Daten und Erstellen eines Umschaltsystems

Wenn Sie komplexe Daten übergeben müssen und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammenfasst.

Zuerst erstellen wir eine `QueryableWorker`-Klasse, die die URL des Workers, einen Standardlistener und einen Fehler-Handler akzeptiert, und diese Klasse wird eine Liste von Listenern verfolgen und uns dabei helfen, mit dem Worker zu kommunizieren:

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

Hier lassen wir den Worker zwei einfache Operationen ausführen, um das zu veranschaulichen: die Differenz zweier Zahlen ermitteln und einen Alert nach drei Sekunden auslösen. Um dies zu erreichen, implementieren wir zuerst eine `sendQuery`-Methode, die prüft, ob der Worker tatsächlich die entsprechenden Methoden hat, um das zu tun, was wir möchten.

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

Wir beenden den QueryableWorker mit der `onmessage`-Methode. Wenn der Worker die entsprechenden Methoden hat, die wir abgefragt haben, sollte er den Namen des entsprechenden Listeners und die Argumente zurückgeben, die er benötigt; wir müssen ihn nur in `listeners` finden.:

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

Es ist möglich, den Inhalt jeder Hauptseite -> Worker und Worker -> Hauptseite Nachricht zu wechseln. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können beliebig sein, solange sie in `QueryableWorker` und dem `worker` konsistent sind.

### Datenübertragung durch Übergang des Eigentums (übertragbare Objekte)

Moderne Browser bieten eine zusätzliche Möglichkeit, bestimmte Arten von Objekten zu oder von einem Worker mit hoher Leistung zu übertragen. [Übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden von einem Kontext in einen anderen mit einem Zero-Copy-Vorgang übertragen, was zu einer erheblichen Leistungsverbesserung beim Senden großer Datensätze führt.

Wenn Sie beispielsweise eine {{jsxref("ArrayBuffer")}} von Ihrer Haupt-App an ein Worker-Skript übergeben, wird die ursprüngliche {{jsxref("ArrayBuffer")}} geleert und ist nicht mehr verwendbar. Ihr Inhalt wird (buchstäblich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

### Daten teilen

Das {{jsxref("SharedArrayBuffer")}}-Objekt ermöglicht es zwei Threads, wie dem Worker und dem Haupt-Thread, gleichzeitig auf denselben Speicherbereich zuzugreifen und Daten auszutauschen, ohne den Messaging-Mechanismus zu verwenden. Die Verwendung von gemeinsam genutztem Speicher bringt erhebliche Bedenken hinsichtlich Determinismus, Sicherheit und Leistung mit sich, von denen einige im Artikel zum [JavaScript-Ausführungsmodell](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) umrissen sind.

## Eingebettete Worker

Es gibt keinen "offiziellen" Weg, um den Code eines Workers innerhalb einer Webseite einzubetten, wie es {{HTMLElement("script")}}-Elemente für normale Skripte tun. Aber ein {{HTMLElement("script")}}-Element, das kein `src`-Attribut hat und ein `type`-Attribut hat, das keine ausführbare MIME-Typ identifiziert, kann als Datenelement betrachtet werden, das JavaScript verwenden könnte. "Datenelemente" sind eine allgemeinere HTML-Funktion, die fast beliebigen Textdaten tragen kann. So könnte ein Worker auf diese Weise eingebettet werden:

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

      // Creating a new global "worker" variable from all our "text/js-worker" scripts.
      const worker = new Worker(window.URL.createObjectURL(blob));

      worker.onmessage = (event) => {
        pageLog(`Received: ${event.data}`);
      };
    </script>
  </head>
  <body>
    <div id="logDisplay"></div>
    <script>
      // Start the worker.
      worker.postMessage("");
    </script>
  </body>
</html>
```

Der eingebettete Worker ist nun in einer neuen benutzerdefinierten `document.worker`-Eigenschaft eingebettet.

Es ist auch erwähnenswert, dass Sie auch eine Funktion in ein Blob konvertieren und dann eine Objekt-URL aus diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele, wie man Web-Worker verwenden kann.

### Berechnungen im Hintergrund durchführen

Worker sind hauptsächlich nützlich, damit Ihr Code Prozessor-intensive Berechnungen ausführen kann, ohne den Benutzeroberflächen-Thread zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code wird in der "fibonacci.js"-Datei gespeichert, die im nächsten Abschnitt von HTML referenziert wird.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfängt, die gesendet werden, wenn die `postMessage()`-Methode des Worker-Objekts aufgerufen wird. Dies führt die mathematischen Berechnungen durch und gibt schließlich das Ergebnis zurück an den Haupt-Thread.

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

Die Webseite erstellt ein `<p>`-Element mit der ID `result`, das dazu verwendet wird, das Ergebnis anzuzeigen. Dann wird der Worker gestartet. Nachdem der Worker gestartet wurde, wird der `onmessage`-Handler konfiguriert, um die Ergebnisse anzuzeigen, indem das `<p>`-Element geändert wird, und der `onerror`-Handler wird so eingestellt, dass die Fehlermeldung in der Entwicklertools-Konsole protokolliert wird.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Dieses Beispiel live ausprobieren](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufteilen von Aufgaben auf mehrere Worker

Da Mehrkernprozessoren immer häufiger werden, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker zu verteilen, die diese Aufgaben dann auf mehreren Prozessor-Kernen ausführen können.

## Andere Arten von Workern

Neben dedizierten und geteilten Web-Workern gibt es andere Arten von Workern:

- [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (wenn verfügbar) sitzen. Sie sollen (unter anderem) die Erstellung effektiver Offline-Erlebnisse ermöglichen, Netzwerk-Anfragen abfangen und je nach Verfügbarkeit des Netzwerks angemessen reagieren, sodass auf dem Server aktualisierte Vermögenswerte gespeichert werden können. Sie sollen auch den Zugriff auf Push-Benachrichtigungen und Background-Sync-APIs ermöglichen.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bieten die Möglichkeit, direkt in JavaScript Audioverarbeitung in einem Worklet (einer leichten Version eines Workers) Kontext durchzuführen.

## Debuggen von Worker-Threads

Die meisten Browser ermöglichen es Ihnen, Web-Worker in ihren JavaScript-Debuggern _genau auf die gleiche Weise_ wie den Haupt-Thread zu debuggen! Beispielsweise listen sowohl Firefox als auch Chrome JavaScript-Quelldateien sowohl für den Haupt-Thread als auch für aktive Worker-Threads auf, und all diese Dateien können geöffnet werden, um Breakpoints und Logpoints zu setzen.

Um zu lernen, wie man Web-Worker debuggt, sehen Sie sich die Dokumentation der JavaScript-Debugger jedes Browsers an:

- [Chrome Sources Panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

Um Entwicklertools für Web-Worker zu öffnen, können Sie die folgenden URLs verwenden:

- Edge: `edge://inspect/`
- Chrome: `chrome://inspect/`
- Firefox: `about:debugging#/runtime/this-firefox`

Diese Seiten zeigen einen Überblick über alle Service-Worker. Sie müssen den relevanten Worker anhand der URL finden und dann auf _Inspect_ klicken, um Zugriff auf Entwicklertools wie die Konsole und den Debugger für diesen Worker zu erhalten.

## Funktionen und Schnittstellen, die in Workern verfügbar sind

Sie können die meisten Standard-JavaScript-Funktionen innerhalb eines Web-Workers verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptsächliche, was Sie _nicht_ in einem Worker tun können, ist, die übergeordnete Seite direkt zu beeinflussen. Dies schließt die Bearbeitung des DOM und die Verwendung der Objekte dieser Seite ein. Sie müssen es indirekt tun, indem Sie eine Nachricht über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) an das Haupt-Skript senden und die Änderungen dann im Ereignishandler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode oder Schnittstelle für Worker verfügbar ist, indem Sie den [Worker Playground](https://mdn.github.io/dom-examples/web-workers/worker-playground/) verwenden.

> [!NOTE]
> Für eine vollständige Liste der Funktionen, die Workern zur Verfügung stehen, siehe [Funktionen und Schnittstellen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Schnittstelle
- [Funktionen verfügbar für Worker](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Schnittstelle
