---
title: Verwendung von Web-Workern
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

{{DefaultAPISidebar("Web Workers API")}}

Web-Worker sind ein einfacher Weg für Webinhalte, Skripte in Hintergrund-Threads auszuführen. Der Worker-Thread kann Aufgaben erledigen, ohne die Benutzeroberfläche zu beeinträchtigen. Darüber hinaus können sie Netzwerk-Anfragen über die APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) stellen. Einmal erstellt, kann ein Worker Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen Ereignishandler postet, der durch diesen Code spezifiziert ist (und umgekehrt).

Dieser Artikel bietet eine detaillierte Einführung in die Verwendung von Web-Workern.

## Web Workers API

Ein Worker ist ein Objekt, das unter Verwendung eines Konstruktors erstellt wird (z. B. [`Worker()`](/de/docs/Web/API/Worker/Worker)), das eine benannte JavaScript-Datei ausführt — diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext als das aktuelle [`window`](/de/docs/Web/API/Window). Daher wird die Verwendung der Abkürzung [`window`](/de/docs/Web/API/Window), um den aktuellen globalen Geltungsbereich zu erhalten (anstatt [`self`](/de/docs/Web/API/Window/self)) innerhalb eines [`Worker`](/de/docs/Web/API/Worker) einen Fehler zurückgeben.

Der Worker-Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt im Fall von dedizierten Workern (Standard-Worker, die von einem einzelnen Skript genutzt werden; gemeinsame Worker verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)) dargestellt. Ein dedizierter Worker ist nur von dem Skript zugänglich, das ihn zuerst erzeugt hat, während gemeinsame Worker von mehreren Skripten aus zugänglich sein können.

> [!NOTE]
> Siehe die [Startseite der Web Workers API](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentationen zu Workern und zusätzliche Leitfäden.

Sie können jeden beliebigen Code im Worker-Thread ausführen, mit einigen Ausnahmen. Zum Beispiel können Sie das DOM nicht direkt innerhalb eines Workers manipulieren oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts verwenden. Aber Sie können eine große Anzahl von Elementen unter `window` verwenden, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Daten-Speichermechanismen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Weitere Details finden Sie unter [Funktionen und Klassen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

Daten werden zwischen Workern und dem Haupt-Thread über ein Nachrichtensystem gesendet — beide Seiten senden ihre Nachrichten mit der Methode `postMessage()` und reagieren auf Nachrichten über den `onmessage`-Ereignishandler (die Nachricht ist im Datenattribut des [`message`](/de/docs/Web/API/Worker/message_event)-Ereignisses enthalten). Die Daten werden kopiert und nicht geteilt.

Worker können wiederum neue Worker erzeugen, solange diese Worker innerhalb des gleichen {{Glossary("origin", "Ursprungs")}} wie die Ausgangsseite gehostet werden.

Zusätzlich dazu können Worker Netzwerk-Anfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) machen (obwohl das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur durch das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt besprechen wir den JavaScript-Code in unserem [einfachen Beispiel für einen dedizierten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierter Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)): Dies ermöglicht Ihnen, zwei Zahlen einzugeben, die miteinander multipliziert werden sollen. Die Zahlen werden an einen dedizierten Worker gesendet, dort multipliziert und das Ergebnis wird an die Seite zurückgegeben und angezeigt.

Dieses Beispiel ist ziemlich einfach, aber wir haben uns entschieden, es einfach zu halten, während wir Sie in die grundlegenden Worker-Konzepte einführen. Komplexere Details werden später im Artikel behandelt.

### Worker-Funktionsprüfung

Für eine etwas kontrolliertere Fehlerbehandlung und Kompatibilität mit älteren Versionen, ist es eine gute Idee, Ihren Worker-Zugriffscode wie folgt zu umschließen ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
if (window.Worker) {
  // …
}
```

### Erzeugen eines dedizierten Workers

Das Erstellen eines neuen Workers ist einfach. Alles, was Sie tun müssen, ist den [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor aufzurufen und die URI eines Skripts anzugeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

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
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript und nicht zur aktuellen HTML-Seite, was es dem Bundler ermöglicht, sicher Optimierungen wie Umbenennungen durchzuführen (weil andernfalls die `worker.js`-URL auf eine Datei verweisen könnte, die nicht vom Bundler kontrolliert wird, sodass dieser keine Annahmen treffen kann).

### Senden von Nachrichten zu und von einem dedizierten Worker

Die Magie der Worker geschieht über die Methode [`postMessage()`](/de/docs/Web/API/Worker/postMessage) und den Ereignishandler [`onmessage`](/de/docs/Web/API/Worker/message_event). Wenn Sie eine Nachricht an den Worker senden möchten, posten Sie Nachrichten an ihn wie folgt ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Hier haben wir zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` dargestellt werden; wenn sich der Wert eines der beiden ändert, wird `myWorker.postMessage([first.value,second.value])` verwendet, um den Wert in beiden als Array an den Worker zu senden. Sie können fast alles, was Sie möchten, in der Nachricht senden.

Im Worker können wir auf eine empfangene Nachricht reagieren, indem wir einen solchen Ereignishandler-Block schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage`-Handler erlaubt es uns, etwas Code auszuführen, wann immer eine Nachricht empfangen wird, wobei die Nachricht selbst im `data`-Attribut des `message`-Ereignisses verfügbar ist. Hier multiplizieren wir die zwei Zahlen miteinander und verwenden dann erneut `postMessage()`, um das Ergebnis zurück an den Haupt-Thread zu senden.

Im Haupt-Thread verwenden wir `onmessage` erneut, um auf die Nachricht zu reagieren, die vom Worker zurückgesendet wurde:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier greifen wir auf die Nachrichtendaten zu und setzen sie als `textContent` des Ergebnisabsatzes, sodass der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` vom `Worker`-Objekt abgehängt werden müssen, wenn sie im Hauptskript-Thread verwendet werden, jedoch nicht, wenn sie im Worker verwendet werden. Dies liegt daran, dass innerhalb des Workers der Worker effektiv der globale Anwendungsbereich ist.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Haupt-Thread und dem Worker übergeben wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Übertragen von Daten zu und von Workern: weitere Details](#transferring_data_to_and_from_workers_further_details) für eine gründlichere Erklärung.

### Beenden eines Workers

Wenn Sie einen laufenden Worker vom Haupt-Thread aus sofort beenden müssen, können Sie dies tun, indem Sie die Methode [`terminate`](/de/docs/Web/API/Worker) des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn ein Laufzeitfehler im Worker auftritt, wird sein `onerror`-Ereignishandler aufgerufen. Er erhält ein Ereignis namens `error`, das die Schnittstelle `ErrorEvent` implementiert.

Das Ereignis wird nicht weitergereicht und ist abbrechbar; um die Standardaktion zu verhindern, kann der Worker die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Fehlerereignisses aufrufen.

Das Fehlerereignis hat die folgenden drei Felder, die von Interesse sind:

- `message`
  - : Eine menschenlesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, in der der Fehler aufgetreten ist.

### Erzeugen von Unterworkern

Worker können mehr Worker erzeugen, wenn sie möchten. Die sogenannten Unterworker müssen innerhalb desselben Ursprungs wie die Ausgangsseite gehostet werden. Auch die URIs für Unterworker werden relativ zum Standort des Elternworkers aufgelöst und nicht zum Standort der besitzenden Seite. Das macht es Workern leichter, den Überblick zu behalten, wo sich ihre Abhängigkeiten befinden.

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

Der Browser lädt jedes aufgeführte Skript und führt es aus. Alle globalen Objekte aus jedem Skript können dann vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` ausgelöst, und der nachfolgende Code wird nicht ausgeführt. Zuvor ausgeführter Code (einschließlich Code, der mit [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) verzögert wurde) wird jedoch weiterhin funktionieren. Funktionsdeklarationen **nach** der Methode `importScripts()` bleiben ebenfalls erhalten, da diese immer vor dem restlichen Code ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der Sie die Dateinamen in `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` gibt erst zurück, wenn alle Skripte geladen und ausgeführt wurden.

## Gemeinsame Worker

Ein gemeinsamer Worker ist von mehreren Skripten aus zugänglich — auch wenn sie von verschiedenen Fenstern, iframes oder sogar Workern aus aufgerufen werden. In diesem Abschnitt besprechen wir den JavaScript-Code in unserem [einfachen Beispiel für einen gemeinsamen Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([gemeinsamen Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)): Dies ist sehr ähnlich zum einfachen dedizierten Worker-Beispiel, außer dass es zwei Funktionen gibt, die von verschiedenen Skriptdateien gehandhabt werden: _zwei Zahlen multiplizieren_ oder _eine Zahl quadrieren_. Beide Skripte verwenden denselben Worker, um die erforderliche Berechnung tatsächlich durchzuführen.

Hier werden wir uns auf die Unterschiede zwischen dedizierten und gemeinsamen Workern konzentrieren. Beachten Sie, dass es in diesem Beispiel zwei HTML-Seiten gibt, die jeweils mit JavaScript versehen sind, das dasselbe einzelne Worker-File verwendet.

> [!NOTE]
> Wenn SharedWorker von mehreren Browser-Kontexten aus zugänglich sein kann, müssen alle diese Kontexte denselben Ursprung (gleiches Protokoll, Host und Port) teilen.

> [!NOTE]
> In Firefox können geteilte Worker nicht zwischen Dokumenten geteilt werden, die in privaten und nicht-privaten Fenstern geladen werden ([Firefox Bug 1177621](https://bugzil.la/1177621)).

### Erzeugen eines gemeinsamen Workers

Das Erzeugen eines neuen gemeinsamen Workers ist ziemlich ähnlich wie bei einem dedizierten Worker, jedoch mit einem anderen Konstruktornamen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) — jeder muss den Worker mit Code wie dem folgenden starten:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied besteht darin, dass Sie bei einem gemeinsamen Worker über ein `port`-Objekt kommunizieren müssen — ein expliziter Port wird geöffnet, den die Skripte zur Kommunikation mit dem Worker verwenden können (dies geschieht implizit bei dedizierten Workern).

Die Port-Verbindung muss entweder implizit durch die Verwendung des `onmessage`-Ereignishandlers oder explizit mit der Methode `start()` gestartet werden, bevor Nachrichten gesendet werden können. Der Aufruf von `start()` ist nur nötig, wenn das `message`-Ereignis über die Methode `addEventListener()` verdrahtet wird.

> [!NOTE]
> Wenn die `start()`-Methode verwendet wird, um die Port-Verbindung zu öffnen, muss sie sowohl im Eltern-Thread als auch im Worker-Thread aufgerufen werden, wenn eine zweiseitige Kommunikation erforderlich ist.

### Senden von Nachrichten zu und von einem gemeinsamen Worker

Jetzt können Nachrichten wie zuvor an den Worker gesendet werden, aber die Methode `postMessage()` muss über das Port-Objekt aufgerufen werden (wieder werden Sie ähnliche Konstrukte sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch in [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Weiter zum Worker. Es gibt auch hier etwas mehr Komplexität ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

Zuerst verwenden wir einen `onconnect`-Handler, um Code auszuführen, wenn eine Verbindung zum Port hergestellt wird (d.h. wenn der `onmessage`-Ereignishandler im Eltern-Thread eingerichtet wird oder wenn die Methode `start()` explizit im Eltern-Thread aufgerufen wird).

Wir verwenden das `ports`-Attribut dieses Ereignisobjekts, um den Port zu erfassen und in einer Variable zu speichern.

Als Nächstes fügen wir einen `onmessage`-Handler am Port hinzu, um die Berechnung durchzuführen und das Ergebnis zurück an den Haupt-Thread zu senden. Das Einrichten dieses `onmessage`-Handlers im Worker-Thread öffnet auch implizit die Port-Verbindung zurück zum Eltern-Thread, sodass der Aufruf von `port.start()`, wie oben erwähnt, nicht wirklich nötig ist.

Schließlich kümmern wir uns im Hauptskript um die Nachricht (wieder werden Sie ähnliche Konstrukte sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch in [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht durch den Port vom Worker zurückkommt, fügen wir das Berechnungsergebnis in den entsprechenden Ergebnisabsatz ein.

## Über Thread-Sicherheit

Das [`Worker`](/de/docs/Web/API/Worker)-Interface erzeugt echte Betriebssystem-Threads, und bedachte Programmierer könnten besorgt sein, dass Gleichzeitigkeit „interessante“ Effekte in Ihrem Code verursachen kann, wenn Sie nicht vorsichtig sind.

Da Web-Worker jedoch sorgsam kontrollierte Kommunikationspunkte mit anderen Threads haben, ist es tatsächlich sehr schwierig, Konkurrenzprobleme zu verursachen. Es gibt keinen Zugriff auf nicht threadsichere Komponenten oder das DOM. Und Sie müssen spezifische Daten durch serialisierte Objekte in und aus einem Thread übergeben. Sie müssen also wirklich hart arbeiten, um Probleme in Ihrem Code zu verursachen.

## Content-Security-Policy

Worker haben in der Regel ihren eigenen Ausführungskontext, der sich vom Dokument unterscheidet, das sie erstellt hat. Aus diesem Grund unterliegen sie im Allgemeinen nicht der [Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder Eltern-Workers), das sie erstellt hat. Angenommen, ein Dokument wird mit dem folgenden Header ausgeliefert:

```http
Content-Security-Policy: script-src 'self'
```

Dies verhindert unter anderem, dass jegliche Skripte, die es beinhaltet, [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden können. Wenn das Skript jedoch einen Worker erstellt, darf der im Kontext des Workers ausgeführte Code `eval()` verwenden.

Um eine Content-Security-Policy für den Worker zu spezifizieren, setzen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Response-Header für die Anfrage, die das Worker-Skript selbst liefert.

Die Ausnahme ist, wenn der Ursprung des Worker-Skripts eine global eindeutige Kennung ist (z. B. wenn seine URL ein Schema von data oder blob hat). In diesem Fall erbt der Worker die CSP des Dokuments oder Workers, das ihn erstellt hat.

## Übertragen von Daten zu und von Workern: weitere Details

Daten, die zwischen der Hauptseite und Workern übergeben werden, werden _kopiert_, nicht geteilt (außer bei bestimmten Objekten, die explizit [geteilt](#daten_teilen) werden können). Objekte werden serialisiert, wenn sie dem Worker übergeben werden und anschließend auf der anderen Seite deserialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, sodass letztendlich **ein Duplikat** auf jeder Seite erstellt wird. Die meisten Browser implementieren diese Funktionalität als [strukturierte Klonung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Wie Sie wahrscheinlich bereits wissen, werden Daten zwischen den beiden Threads über Nachrichten ausgetauscht, indem `postMessage()` verwendet wird, und das `data`-Attribut des `message`-Ereignisses enthält die Daten, die vom Worker zurückgesendet werden.

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

Der [strukturierte Klonalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kann JSON und einige Dinge akzeptieren, die JSON nicht kann — wie z. B. zirkuläre Referenzen.

### Datenübertragung Beispiele

#### Beispiel 1: Erweitertes Übergeben von JSON-Daten und Erstellen eines Umschaltsystems

Wenn Sie komplexe Daten übergeben müssen und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammenfasst.

Zuerst erstellen wir eine `QueryableWorker`-Klasse, die die URL des Workers nimmt, einen Standard-Listener und einen Fehler-Handler, und diese Klasse wird eine Liste der Listener nachhalten und uns helfen, mit dem Worker zu kommunizieren:

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

Dann fügen wir die Methoden hinzu, um Listener hinzuzufügen/zu entfernen:

```js
this.addListeners = (name, listener) => {
  listeners[name] = listener;
};

this.removeListeners = (name) => {
  delete listeners[name];
};
```

Hier lassen wir den Worker zwei einfache Operationen abhandeln, um sie zu veranschaulichen: die Differenz zweier Zahlen erhalten und einen Alert nach drei Sekunden anzeigen. Um dies zu erreichen, implementieren wir zunächst eine `sendQuery`-Methode, die abfragt, ob der Worker tatsächlich die entsprechenden Methoden hat, um auszuführen, was wir wollen.

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

Wir beenden `QueryableWorker` mit der `onmessage`-Methode. Wenn der Worker die entsprechenden Methoden hat, nach denen wir gefragt haben, sollte er den Namen des entsprechenden Listeners und die Argumente, die er braucht, zurückgeben. Wir müssen sie einfach in `listeners` finden:

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
    this.defaultListener.call(this, event.data);
  }
};
```

Jetzt zum Worker. Zuerst müssen wir die Methoden haben, um die zwei einfachen Operationen abzuarbeiten:

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
      this.defaultListener.call(this, event.data);
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

Es ist möglich, den Inhalt jeder Hauptseitennachricht -> Worker und Worker -> Hauptseitennachricht zu ändern. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können alles sein, solange sie konsistent in `QueryableWorker` und dem `worker` sind.

### Datenübertragung durch Eigentumsübertragung (transferierbare Objekte)

Moderne Browser bieten eine zusätzliche Möglichkeit, bestimmte Typen von Objekten zu oder von einem Worker mit hoher Leistung zu übertragen. [Transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden von einem Kontext in einen anderen mit einem zero-copy-Operation übertragen, was zu einer erheblichen Leistungsverbesserung beim Senden großer Datensätze führt.

Zum Beispiel, wenn ein {{jsxref("ArrayBuffer")}} von Ihrer Haupt-App an ein Worker-Skript übertragen wird, wird der ursprüngliche {{jsxref("ArrayBuffer")}} geleert und ist nicht mehr nutzbar. Sein Inhalt wird (buchstäblich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

### Daten teilen

Das {{jsxref("SharedArrayBuffer")}}-Objekt ermöglicht es zwei Threads, wie dem Worker und dem Haupt-Thread, gleichzeitig auf denselben Speicherbereich zuzugreifen und Daten auszutauschen, ohne die Nachrichtenfunktionalität zu nutzen. Das Verwenden von gemeinsam genutztem Speicher birgt jedoch signifikante Bestimmungs-, Sicherheits- und Leistungsbedenken, von denen einige im Artikel [JavaScript-Ausführungsmodell](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) umrissen sind.

## Eingebettete Worker

Es gibt keine "offizielle" Möglichkeit, den Code eines Workers innerhalb einer Webseite einzubetten, wie {{HTMLElement("script")}}-Elemente es für normale Skripte tun. Aber ein {{HTMLElement("script")}}-Element, das kein `src`-Attribut hat und ein `type`-Attribut besitzt, das keinen ausführbaren MIME-Typ identifiziert, kann als Datenblockelement betrachtet werden, das JavaScript verwenden kann. "Datenblöcke" sind eine allgemeinere Funktion von HTML, die fast jeden Text tragen können. Ein Worker könnte auf diese Weise eingebettet werden:

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

Der eingebettete Worker ist nun in einer neuen benutzerdefinierten `document.worker`-Eigenschaft eingebettet.

Es ist auch erwähnenswert, dass Sie auch eine Funktion in ein Blob umwandeln und dann eine Objekt-URL aus diesem Blob erzeugen können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele zur Verwendung von Web-Workern.

### Berechnungen im Hintergrund ausführen

Worker sind hauptsächlich nützlich, um Ihrem Code zu ermöglichen, prozessorintensive Berechnungen auszuführen, ohne den Benutzeroberflächen-Thread zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code wird in der Datei "fibonacci.js" gespeichert, auf die im kommenden HTML verwiesen wird.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfängt, wenn die Methode `postMessage()` des Worker-Objekts aufgerufen wird. Dadurch werden die Berechnungen durchgeführt und das Ergebnis schließlich zurück an den Haupt-Thread gesendet.

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

Die Webseite erstellt ein `<p>`-Element mit der ID `result`, das benutzt wird, um das Ergebnis anzuzeigen, und erzeugt dann den Worker. Nachdem der Worker gestartet wurde, wird der `onmessage`-Handler so konfiguriert, dass die Ergebnisse angezeigt werden, indem der Inhalt des `<p>`-Elements gesetzt wird, und der `onerror`-Handler ist so eingestellt, dass die Fehlermeldung an die Entwicklerkonsole geloggt wird.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Diese Beispiel live ausprobieren](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufgaben auf mehrere Worker aufteilen

Da Multicore-Computer zunehmend verbreitet sind, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker zu verteilen, die diese Aufgaben dann auf mehreren Prozessor-Kernen ausführen können.

## Andere Arten von Workern

Neben dedizierten und gemeinsamen Web-Workern gibt es noch andere Arten von Workern:

- [ServiceWorker](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (sofern verfügbar) sitzen. Sie sollen unter anderem die Erstellung effektiver Offline-Erlebnisse ermöglichen, indem sie Netzwerk-Anfragen abfangen und geeignete Maßnahmen basieren darauf, ob das Netzwerk verfügbar ist und ob aktualisierte Ressourcen auf dem Server wohnen. Sie werden auch den Zugriff auf Push-Benachrichtigungen und Hintergrund-Sync-APIs ermöglichen.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bietet die Möglichkeit, direkte Skriptaudioverarbeitung in einem Worklet (einer leichten Version von Worker) Kontext durchzuführen.

## Debuggen von Worker-Threads

Die meisten Browser ermöglichen es Ihnen, Web-Worker in ihren JavaScript-Debuggern _genau auf die gleiche Weise_ zu debuggen wie den Haupt-Thread! Beispielsweise listen sowohl Firefox als auch Chrome JavaScript-Quelldateien sowohl für den Haupt-Thread als auch für aktive Worker-Threads auf, und all diese Dateien können geöffnet werden, um Breakpoints und Logpoints zu setzen.

Um zu lernen, wie man Web-Worker debuggt, sehen Sie die Dokumentation für jeden Browser-JavaScript-Debugger:

- [Chrome Sources-Panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

Um Devtools für Web-Worker zu öffnen, können Sie die folgenden URLs verwenden:

- Edge: `edge://inspect/`
- Chrome: `chrome://inspect/`
- Firefox: `about:debugging#/runtime/this-firefox`

Diese Seiten zeigen eine Übersicht über alle ServiceWorker. Sie müssen den relevanten anhand der URL finden und dann auf _inspect_ klicken, um auf Entwicklerwerkzeuge wie die Konsole und den Debugger für diesen Worker zuzugreifen.

## Funktionen und Schnittstellen, die in Workern verfügbar sind

Sie können die meisten Standard-JavaScript-Funktionen innerhalb eines Web-Workers verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptsächlichste, was Sie innerhalb eines Workers _nicht_ tun können, ist direkt die Elternseite zu beeinflussen. Dazu gehört das Manipulieren des DOMs und die Verwendung der Objekte dieser Seite. Sie müssen es indirekt tun, indem Sie eine Nachricht zurück an das Hauptskript über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) senden und dann die Änderungen im Ereignishandler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode oder Schnittstelle für Worker verfügbar ist, indem Sie den [Worker-Spielplatz](https://mdn.github.io/dom-examples/web-workers/worker-playground/) verwenden.

> [!NOTE]
> Für eine vollständige Liste der Funktionen, die Workern zur Verfügung stehen, siehe [Funktionen und Schnittstellen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker) Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle
- [Funktionen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Schnittstelle
