---
title: Verwendung von Web Workers
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

{{DefaultAPISidebar("Web Workers API")}}

Web Workers sind ein einfaches Mittel, um Webinhalte in Hintergrundthreads Skripte ausführen zu lassen. Der Worker-Thread kann Aufgaben ausführen, ohne die Benutzeroberfläche zu beeinträchtigen. Zudem können sie Netzwerkanfragen über die APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) stellen. Sobald ein Worker erstellt wurde, kann er Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen vom Code angegebenen Ereignishandler sendet (und umgekehrt).

Dieser Artikel bietet eine detaillierte Einführung in die Verwendung von Web Workers.

## Web Workers API

Ein Worker ist ein Objekt, das mithilfe eines Konstruktors erstellt wird (z.B. [`Worker()`](/de/docs/Web/API/Worker/Worker)), das eine benannte JavaScript-Datei ausführt – diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext, der sich vom aktuellen [`window`](/de/docs/Web/API/Window) unterscheidet. Daher führt die Verwendung der Abkürzung [`window`](/de/docs/Web/API/Window), um den aktuellen globalen Bereich (anstatt [`self`](/de/docs/Web/API/Window/self)) in einem [`Worker`](/de/docs/Web/API/Worker) zu erhalten, zu einem Fehler.

Der Worker-Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt im Fall von Dedicated Workers dargestellt (standardmäßige Worker, die von einem einzigen Skript verwendet werden; Shared Workers verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)). Ein dedizierter Worker ist nur von dem Skript zugänglich, das ihn zuerst erzeugt hat, während Shared Workers von mehreren Skripten aus zugänglich sind.

> [!NOTE]
> Siehe [Die Web Workers API Übersichtsseite](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentation über Worker und zusätzliche Leitfäden.

Sie können im Worker-Thread beliebigen Code ausführen, mit einigen Ausnahmen. Zum Beispiel können Sie nicht direkt den DOM von innerhalb eines Workers manipulieren oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts verwenden. Aber Sie können viele der Elemente verwenden, die unter `window` verfügbar sind, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Datenspeichermechanismen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Sehen Sie sich [Funktionen und Klassen, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) für weitere Details an.

Daten werden zwischen Workern und dem Haupt-Thread über ein Nachrichtensystem gesendet – beide Seiten senden ihre Nachrichten mit der `postMessage()`-Methode und reagieren auf Nachrichten über den `onmessage`-Ereignishandler (die Nachricht ist im Datenattribut des [`message`](/de/docs/Web/API/Worker/message_event)-Ereignisses enthalten). Die Daten werden kopiert, anstatt geteilt zu werden.

Worker können wiederum neue Worker erzeugen, solange diese Worker innerhalb des gleichen {{Glossary("origin", "Ursprungs")}} wie die übergeordnete Seite gehostet werden.

Darüber hinaus können Worker Netzwerkabfragen über die APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen (beachten Sie jedoch, dass das [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Attribut von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur durch das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt werden wir den in unserem [Grundlegenden dedizierten Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) gefundenen JavaScript-Code diskutieren ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)): Dies ermöglicht es Ihnen, zwei Zahlen einzugeben, die miteinander multipliziert werden sollen. Die Zahlen werden an einen dedizierten Worker gesendet, miteinander multipliziert und das Ergebnis wird an die Seite zurückgegeben und angezeigt.

Dieses Beispiel ist ziemlich trivial, wir haben jedoch entschieden, es einfach zu halten, während wir Ihnen grundlegende Worker-Konzepte vorstellen. Weitere fortgeschrittene Details werden später im Artikel behandelt.

### Funktionsprüfung von Workern

Für eine etwas kontrolliertere Fehlerbehandlung und Abwärtskompatibilität ist es eine gute Idee, Ihren Worker-Zugangscode in Folgendes einzuwickeln ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
if (window.Worker) {
  // …
}
```

### Einen dedizierten Worker erzeugen

Einen neuen Worker zu erstellen ist einfach. Alles, was Sie tun müssen, ist den [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor aufzurufen und dabei die URI eines Skripts anzugeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

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
> Auf diese Weise ist der Pfad relativ zu dem aktuellen Skript anstatt zu der aktuellen HTML-Seite, was es dem Bundler ermöglicht, sicher Optimierungen wie das Umbenennen durchzuführen (weil andernfalls die `worker.js`-URL auf eine Datei zeigen könnte, die nicht vom Bundler kontrolliert wird, so dass er keine Annahmen treffen kann).

### Nachrichten zu und von einem dedizierten Worker senden

Der Zauber von Workern geschieht durch die Methode [`postMessage()`](/de/docs/Web/API/Worker/postMessage) und den Ereignishandler [`onmessage`](/de/docs/Web/API/Worker/message_event). Wenn Sie eine Nachricht an den Worker senden möchten, senden Sie ihm wie folgt Nachrichten ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Hier haben wir zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` dargestellt werden; wenn der Wert eines dieser Elemente geändert wird, wird `myWorker.postMessage([first.value,second.value])` verwendet, um den Wert in beiden an den Worker zu senden, als Array. Sie können fast alles, was Sie möchten, in der Nachricht senden.

Im Worker können wir reagieren, wenn die Nachricht empfangen wird, indem wir einen Ereignisblock wie diesen schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage`-Handler ermöglicht es uns, einige Codes auszuführen, wann immer eine Nachricht empfangen wird, wobei die Nachricht selbst im `data`-Attribut des `message`-Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen miteinander und verwenden dann erneut `postMessage()`, um das Ergebnis zurück an den Haupt-Thread zu senden.

Zurück im Haupt-Thread verwenden wir erneut `onmessage`, um auf die Nachricht zu reagieren, die vom Worker zurückgesendet wurde:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier erfassen wir die Nachrichtendaten und setzen sie als `textContent` des Ergebnis-Absatzes, sodass der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` an dem `Worker`-Objekt aufgehängt werden müssen, wenn sie im Hauptskript-Thread verwendet werden, aber nicht, wenn sie im Worker verwendet werden. Dies liegt daran, dass der Worker im Worker im Wesentlichen der globale Bereich ist.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Haupt-Thread und dem Worker übergeben wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Übertragen von Daten zu und von Workern: weitere Details](#transferring_data_to_and_from_workers_further_details) für eine weitaus gründlichere Erklärung.

### Einen Worker beenden

Wenn Sie einen laufenden Worker sofort aus dem Haupt-Thread heraus beenden müssen, können Sie dies tun, indem Sie die `terminate`-Methode des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn ein Laufzeitfehler im Worker auftritt, wird dessen `onerror`-Ereignishandler aufgerufen. Er erhält ein Ereignis namens `error`, das das `ErrorEvent`-Interface implementiert.

Das Ereignis bubbelnd nicht und ist abbrechbar; um zu verhindern, dass die Standardeinstellung stattfindet, kann der Worker die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Error-Ereignisses aufrufen.

Das Error-Ereignis hat die folgenden drei Felder, die von Interesse sind:

- `message`
  - : Eine menschenlesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, in der der Fehler aufgetreten ist.

### Subworker erzeugen

Worker können weitere Worker erzeugen, wenn sie möchten. So genannte Subworker müssen innerhalb desselben Ursprung wie die übergeordnete Seite gehostet werden. Auch die URIs für Subworker werden relativ zum Standort des übergeordneten Workers aufgelöst und nicht zum Standort der besitzenden Seite. Dies erleichtert es Workern, den Überblick darüber zu behalten, wo sich ihre Abhängigkeiten befinden.

### Skripte und Bibliotheken importieren

Worker-Threads haben Zugriff auf eine globale Funktion, `importScripts()`, die es ihnen ermöglicht, Skripte zu importieren. Sie akzeptiert null oder mehr URIs als Parameter zu den Ressourcen, die importiert werden sollen; alle folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes aufgelistete Skript und führt es aus. Alle globalen Objekte aus jedem Skript können dann vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird ein `NETWORK_ERROR` ausgelöst, und der nachfolgende Code wird nicht mehr ausgeführt. Zuvor ausgeführter Code (einschließlich Code, der mit [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) verzögert wurde) bleibt jedoch funktionsfähig. Funktionsdeklarationen **nach** der `importScripts()`-Methode werden ebenfalls beibehalten, da diese immer vor dem Rest des Codes ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der Sie die Dateinamen in `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` gibt erst dann zurück, wenn alle Skripte geladen und ausgeführt wurden.

## Shared Workers

Ein Shared Worker ist von mehreren Skripten aus zugänglich – selbst wenn sie von verschiedenen Fenstern, Iframes oder sogar Workern aufgerufen werden. In diesem Abschnitt werden wir den in unserem [Grundlegenden Shared Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) gefundenen JavaScript-Code diskutieren ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)): Dies ist sehr ähnlich dem einfachen dedizierten Worker-Beispiel, außer dass es zwei verfügbare Funktionen gibt, die von verschiedenen Skriptdateien verarbeitet werden: _zwei Zahlen multiplizieren_ oder _eine Zahl quadrieren_. Beide Skripte verwenden denselben Worker, um die erforderliche Berechnung durchzuführen.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und Shared Workern. Beachten Sie, dass wir in diesem Beispiel zwei HTML-Seiten mit JavaScript haben, das den gleichen einzelnen Worker verwendet.

> [!NOTE]
> Wenn auf SharedWorker von mehreren Browserkontexten aus zugegriffen werden kann, müssen alle diese Browserkontexte denselben Ursprung teilen (gleiches Protokoll, Host und Port).

> [!NOTE]
> In Firefox können Shared Workers nicht zwischen Dokumenten, die in privaten und nicht privaten Fenstern geladen sind, geteilt werden ([Firefox Bug 1177621](https://bugzil.la/1177621)).

### Einen Shared Worker erzeugen

Einen neuen Shared Worker zu erzeugen, ist fast dasselbe wie bei einem dedizierten Worker, aber mit einem anderen Konstruktornamen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) – jede muss den Worker mit einem solchen Code erzeugen:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied ist, dass Sie bei einem Shared Worker über ein `port`-Objekt kommunizieren müssen – ein expliziter Port wird geöffnet, den die Skripte zur Kommunikation mit dem Worker verwenden können (dies geschieht implizit im Fall dedizierter Worker).

Die Portverbindung muss entweder implizit durch die Nutzung des `onmessage`-Ereignishandlers oder explizit mit der `start()`-Methode gestartet werden, bevor Nachrichten gepostet werden können. `start()` zu rufen ist nur notwendig, wenn das `message`-Ereignis über die `addEventListener()`-Methode angeschlossen ist.

> [!NOTE]
> Beim Aufruf der `start()`-Methode zum Öffnen der Portverbindung muss sie sowohl vom übergeordneten Thread als auch vom Worker-Thread gerufen werden, wenn eine zweiseitige Kommunikation benötigt wird.

### Lebensdauer von Shared Workern

Shared Workers werden geschlossen, wenn sie von keinen Fenstern, Iframes oder Workern mehr referenziert werden.

Browser _könnten_ Worker am Leben halten zwischen gleichartigen Navigationsvorgängen, um die Kosten eines Neustarts des Shared Workers, der von einer Website verwendet wird, zu vermeiden, wenn der Benutzer sich innerhalb dieser Website von Seite zu Seite bewegt.

Die [`extendedLifetime`](/de/docs/Web/API/SharedWorker/SharedWorker#extendedlifetime)-Konstruktoroption kann auch angegeben werden, um einen Shared Worker am Leben zu halten, kurz nachdem alle Referenzen an ihn geschlossen wurden:

```js
const worker = new SharedWorker("worker.js", { extendedLifetime: true });
```

Dies ermöglicht es, nachdem der Benutzer die Seite verlassen hat, Arbeiten wie das Schreiben von Zustandsinformationen in den Speicher oder das Senden von Analysedaten zurück zu Servern auszuführen. Dies ist ergonomischer als einen Service Worker für denselben Zweck zu verwenden.

### Nachrichten zu und von einem Shared Worker senden

Jetzt können Nachrichten wie gewohnt an den Worker gesendet werden, aber die `postMessage()`-Methode muss durch das Portobjekt aufgerufen werden (erneut werden Sie ähnliche Konstruktionen in sowohl [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

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

Zuerst verwenden wir einen `onconnect`-Handler, um Code auszulösen, wenn eine Verbindung zum Port hergestellt wird (d.h. wenn der `onmessage`-Ereignishandler im übergeordneten Thread eingerichtet oder die `start()`-Methode explizit im übergeordneten Thread aufgerufen wird).

Wir verwenden das `ports`-Attribut dieses Ereignisobjektes, um den Port zu erfassen und ihn in einer Variablen zu speichern.

Als nächstes fügen wir einen `onmessage`-Handler am Port hinzu, um die Berechnung durchzuführen und das Ergebnis an den Haupt-Thread zurückzugeben. Das Einrichten dieses `onmessage`-Handlers im Worker-Thread öffnet ebenfalls implizit die Portverbindung zurück zum übergeordneten Thread, sodass der Aufruf von `port.start()` eigentlich nicht nötig ist, wie oben erwähnt.

Schließlich behandeln wir im Hauptskript die Nachricht (erneut werden Sie ähnliche Konstrukte in sowohl [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn durch den Port eine Nachricht vom Worker zurückkommt, fügen wir das Berechnungsergebnis in den entsprechenden Ergebnisabsatz ein.

## Über Thread-Sicherheit

Das [`Worker`](/de/docs/Web/API/Worker)-Interface erzeugt reale Betriebssystem-Threads, und bewusste Programmierer könnten besorgt sein, dass Konkurrenz "interessante" Effekte in Ihrem Code verursachen kann, wenn Sie nicht sorgfältig sind.

Da jedoch Web Worker sorgfältig kontrollierte Kommunikationspunkte mit anderen Threads haben, ist es tatsächlich sehr schwer, Konkurrenzprobleme zu verursachen. Es gibt keinen Zugriff auf nicht threadsichere Komponenten oder das DOM. Und Sie müssen spezifische Daten in und aus einem Thread durch serialisierte Objekte übergeben. Daher müssen Sie wirklich hart arbeiten, um Probleme in Ihrem Code zu verursachen.

## Content-Security-Richtlinie

Worker gelten als eigenständiger Ausführungskontext, der sich von dem Dokument unterscheidet, das sie erstellt hat. Deshalb werden sie im Allgemeinen nicht von der [Content-Security-Richtlinie](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder des Eltern-Workers), das sie erstellt hat, geregelt. Angenommen, ein Dokument wird mit folgendem Header bereitgestellt:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem wird dies verhindern, dass alle eingeschlossenen Skripte [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn das Skript jedoch einen Worker erstellt, wird es dem Code, der im Kontext des Workers läuft, _erlaubt_ sein, `eval()` zu verwenden.

Um eine Content-Security-Richtlinie für den Worker zu spezifizieren, legen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Antwortheader für die Anfrage fest, welche das Worker-Skript selbst bereitstellt.

Die Ausnahme hiervon ist, wenn der Ursprung des Worker-Skriptes ein global einzigartiger Bezeichner ist (zum Beispiel, wenn seine URL ein Daten- oder Blob-Schema hat). In diesem Fall erbt der Worker die CSP des Dokuments oder des Workers, der ihn erstellt hat.

## Übertragen von Daten zu und von Workern: weitere Details

Daten, die zwischen der Hauptseite und Workern übergeben werden, werden _kopiert_, nicht geteilt (mit Ausnahme bestimmter Objekte, die explizit [geteilt](#daten_teilen) werden können). Objekte werden serialisiert, wenn sie an den Worker übergeben werden, und anschließend auf der anderen Seite deserialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, sodass das Endergebnis **eine Kopie** auf jeder Seite ist. Die meisten Browser implementieren diese Funktion als [strukturierte Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Wie Sie wahrscheinlich inzwischen wissen, werden Daten zwischen den beiden Threads über Nachrichten mit `postMessage()` ausgetauscht, und das `data`-Attribut des `message`-Ereignisses enthält die Daten, die vom Worker zurückgesendet werden.

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

Der [strukturierte Klon](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)-Algorithmus kann JSON und einige Dinge akzeptieren, die JSON nicht kann — wie zirkuläre Referenzen.

### Beispiele zum Übertragen von Daten

#### Beispiel 1: Erweitertes Übertragen von JSON-Daten und Erstellen eines Umschaltsystems

Wenn Sie komplexe Daten übergeben müssen und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammenfasst.

Zuerst erstellen wir eine `QueryableWorker`-Klasse, die die URL des Workers, einen Standard-Listener und einen Fehler-Handler übernimmt, und diese Klasse wird eine Liste von Listenern überwachen und uns helfen, mit dem Worker zu kommunizieren:

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

Hier lassen wir den Worker zwei einfache Operationen für die Veranschaulichung behandeln: die Differenz von zwei Zahlen berechnen und eine Benachrichtigung nach drei Sekunden auslösen. Um dies zu erreichen, implementieren wir zuerst eine `sendQuery`-Methode, die prüft, ob der Worker tatsächlich über die entsprechenden Methoden verfügt, um das zu tun, was wir wollen.

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

Wir beenden `QueryableWorker` mit der `onmessage`-Methode. Wenn der Worker die entsprechenden Methoden hat, die wir abgefragt haben, sollte er den Namen des entsprechenden Listeners und die benötigten Argumente zurückgeben. Wir müssen ihn nur in `listeners` finden:

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

Hier ist die vollständige Implementierung:

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

Dies muss das folgende Skript ausführen, entweder inline oder als externe Datei:

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

Es ist möglich, den Inhalt jeder Nachricht von Hauptseite -> Worker und Worker -> Hauptseite umzuschalten. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können alles sein, solange sie in `QueryableWorker` und dem `worker` übereinstimmen.

### Datenübertragung durch Übertragen des Eigentums (übertragbare Objekte)

Moderne Browser enthalten eine zusätzliche Möglichkeit, bestimmte Objekttypen zu oder von einem Worker mit hoher Leistung zu übertragen. [Transferable Objects](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden mit einer Zero-Copy-Operation von einem Kontext in einen anderen übertragen, was zu einer erheblichen Leistungssteigerung beim Senden großer Datensätze führt.

Zum Beispiel, wenn ein {{jsxref("ArrayBuffer")}} von Ihrer Hauptanwendung an ein Worker-Skript übertragen wird, wird der originale {{jsxref("ArrayBuffer")}} gelöscht und nicht mehr verwendbar. Sein Inhalt wird (buchstäblich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

### Daten teilen

Das {{jsxref("SharedArrayBuffer")}}-Objekt ermöglicht es zwei Threads, wie dem Worker und dem Haupt-Thread, gleichzeitig im selben Speicherbereich zu arbeiten und Daten auszutauschen, ohne über den Nachrichtenmechanismus zu gehen. Die Verwendung von gemeinsamem Speicher bringt erhebliche Determinismus-, Sicherheits- und Leistungsbedenken mit sich, von denen einige im Artikel über das [JavaScript-Ausführungsmodell](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) beschrieben werden.

## Eingebettete Workers

Es gibt keine „offizielle“ Möglichkeit, den Code eines Workers innerhalb einer Webseite einzubetten, wie es {{HTMLElement("script")}}-Elemente für normale Skripte tun. Aber ein {{HTMLElement("script")}}-Element, das kein `src`-Attribut hat und ein `type`-Attribut hat, das keine ausführbare MIME-Art identifiziert, kann als Datenblockelement betrachtet werden, das JavaScript verwenden könnte. „Datenblöcke“ sind eine allgemeinere Funktion von HTML, die fast beliebige Textdaten tragen kann. So könnte ein Worker auf diese Weise eingebettet werden:

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

Der eingebettete Worker ist jetzt in einer neuen benutzerdefinierten `document.worker`-Eigenschaft verschachtelt.

Es sei auch darauf hingewiesen, dass Sie auch eine Funktion in ein Blob umwandeln und dann eine Objekt-URL aus diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele, wie man Web Worker verwendet.

### Berechnungen im Hintergrund durchführen

Worker sind hauptsächlich nützlich, um Ihrem Code zu ermöglichen, prozessorintensive Berechnungen auszuführen, ohne den Benutzeroberflächenthread zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code wird in der in dem nächsten Abschnitt referenzierten "fibonacci.js" Datei gespeichert.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfängt, die gesendet werden, wenn die `postMessage()`-Methode des Worker-Objekts aufgerufen wird. Dies führt die Berechnungen durch und gibt schließlich das Ergebnis an den Haupt-Thread zurück.

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

Dies muss das folgende Skript ausführen, entweder inline oder als externe Datei:

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

Die Webseite erzeugt ein `<p>`-Element mit der ID `result`, das verwendet wird, um das Ergebnis anzuzeigen, und erzeugt dann den Worker. Nach der Erzeugung des Workers wird der `onmessage`-Handler so konfiguriert, dass er die Ergebnisse durch Setzen des Inhalts des `<p>`-Elements anzeigt, und der `onerror`-Handler wird so eingerichtet, dass er die Fehlermeldung in der Entwicklerkonsole protokolliert.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Versuchen Sie dieses Beispiel live](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufgaben unter mehreren Workern aufteilen

Da Multicore-Computer zunehmend verbreitet werden, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker aufzuteilen, die diese Aufgaben dann auf mehreren Prozessorkernen ausführen können.

## Andere Arten von Workern

Neben dedizierten und Shared Web Workern gibt es andere Arten von Workern:

- [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen und dem Browser und Netzwerk (wenn verfügbar) stehen. Sie sollen (unter anderem) die Erstellung effektiver Offline-Erlebnisse ermöglichen, indem sie Netzwerkanfragen abfangen und geeignete Maßnahmen ergreifen, je nachdem, ob das Netzwerk verfügbar ist und aktualisierte Assets auf dem Server vorhanden sind. Sie erlauben auch den Zugriff auf Push-Benachrichtigungen und Hintergrundsynchronisierungs-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) ermöglichen die Möglichkeit, dass Audiosignalverarbeitung direkt im Skript in einem Worklet (einer leichten Version eines Workers) Kontext durchgeführt wird.

## Debugging von Worker-Threads

Die meisten Browser ermöglichen es, Web Worker in ihren JavaScript-Debuggern _genauso wie_ den Hauptthread zu debuggen! Sowohl Firefox als auch Chrome listen zum Beispiel JavaScript-Quelldateien sowohl für den Haupt-Thread als auch für aktive Worker-Threads auf, und alle diese Dateien können geöffnet werden, um Haltepunkte und Protokollpunkte zu setzen.

Um zu lernen, wie man Web Worker debuggt, siehe die Dokumentation für die JavaScript-Debugger jedes Browsers:

- [Chrome-Quellenpanel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox-JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

Um Devtools für Web Worker zu öffnen, können Sie die folgenden URLs verwenden:

- Edge: `edge://inspect/`
- Chrome: `chrome://inspect/`
- Firefox: `about:debugging#/runtime/this-firefox`

Diese Seiten zeigen einen Überblick über alle Service Worker. Sie müssen den relevanten nach der URL finden und _inspizieren_ klicken, um Devtools wie Konsole und Debugger für diesen Worker zuzugreifen.

## Funktionen und Schnittstellen, die in Workern verfügbar sind

Sie können die meisten Standard-JavaScript-Funktionen in einem Web Worker verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptsächliche, was Sie in einem Worker _nicht_ tun können, ist die direkte Beeinflussung der übergeordneten Seite. Dazu gehört das Manipulieren des DOMs und die Verwendung von Objekten dieser Seite. Sie müssen dies indirekt tun, indem Sie eine Nachricht zurück an das Hauptskript über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) senden und Änderungen im Ereignishandler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode oder Schnittstelle für Worker verfügbar ist, indem Sie den [Worker-Spielplatz](https://mdn.github.io/dom-examples/web-workers/worker-playground/) verwenden.

> [!NOTE]
> Eine vollständige Liste der Funktionen, die Workern verfügbar sind, finden Sie unter [Funktionen und Schnittstellen, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker) Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle
- [Funktionen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Schnittstelle
