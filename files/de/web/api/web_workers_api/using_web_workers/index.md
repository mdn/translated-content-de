---
title: Verwendung von Web Workern
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: 03e3379cbad4f98a74021ad0753a41cd38d547fd
---

{{DefaultAPISidebar("Web Workers API")}}

Web Worker sind eine einfache Möglichkeit, damit Webinhalte Skripte in Hintergrund-Threads ausführen können. Der Worker-Thread kann Aufgaben ausführen, ohne die Benutzeroberfläche zu beeinträchtigen. Außerdem können sie Netzwerk-Anfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) stellen. Sobald ein Worker erstellt wurde, kann er Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen von diesem Code angegebenen Ereignishandler sendet (und umgekehrt).

Dieser Artikel bietet eine ausführliche Einführung in die Verwendung von Web Workern.

## Web Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor (z.B. [`Worker()`](/de/docs/Web/API/Worker/Worker)) erstellt wird und eine benannte JavaScript-Datei ausführt – diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext, der sich vom aktuellen [`window`](/de/docs/Web/API/Window) unterscheidet. Daher führt die Verwendung der Abkürzung [`window`](/de/docs/Web/API/Window), um den aktuellen globalen Bereich innerhalb eines [`Worker`](/de/docs/Web/API/Worker) zu erhalten, zu einem Fehler.

Der Worker-Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt im Fall von dedizierten Workern repräsentiert (standardmäßige Worker, die von einem einzigen Skript verwendet werden; geteilte Worker verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)). Ein dedizierter Worker ist nur vom Skript aus zugänglich, das ihn zuerst erstellt hat, während auf geteilte Worker von mehreren Skripten aus zugegriffen werden kann.

> [!NOTE]
> Siehe [Die Web Workers API-Übersichtsseite](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentationen zu Workern und zusätzliche Leitfäden.

Sie können beliebigen Code innerhalb des Worker-Threads ausführen, mit einigen Ausnahmen. Zum Beispiel können Sie das DOM nicht direkt aus einem Worker heraus manipulieren oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts verwenden. Sie können jedoch viele der unter `window` verfügbaren Elemente verwenden, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API), und Datenspeicherungsmechanismen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Siehe [Funktionen und Klassen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) für weitere Details.

Daten werden über ein Nachrichtensystem zwischen Workern und dem Haupt-Thread gesendet – beide Seiten senden ihre Nachrichten mit der Methode `postMessage()`, und reagieren auf Nachrichten über den Ereignishandler `onmessage` (die Nachricht ist im Datenattribut des [`message`](/de/docs/Web/API/Worker/message_event)-Ereignisses enthalten). Die Daten werden kopiert, nicht geteilt.

Worker können wiederum neue Worker erzeugen, solange diese Worker im gleichen {{Glossary("origin", "Ursprung")}} wie die übergeordnete Seite gehostet werden.

Darüber hinaus können Worker Netzwerk-Anfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) stellen (obwohl das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur vom Skript aus zugänglich, das ihn aufgerufen hat. In diesem Abschnitt werden wir den JavaScript-Code in unserem [Beispiel eines einfachen dedizierten Workers](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) besprechen ([dedizierter Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)): Dies ermöglicht Ihnen, zwei Zahlen einzugeben, die miteinander multipliziert werden sollen. Die Zahlen werden an einen dedizierten Worker gesendet, multipliziert und das Ergebnis wird auf der Seite zurückgegeben und angezeigt.

Dieses Beispiel ist ziemlich trivial, aber wir haben uns entschieden, es einfach zu halten, während wir Sie in die grundlegenden Worker-Konzepte einführen. Fortgeschrittenere Details werden später in diesem Artikel behandelt.

### Erkennung von Worker-Funktionen

Für eine etwas kontrolliertere Fehlerbehandlung und Abwärtskompatibilität ist es eine gute Idee, Ihren Worker-Zugriffscode wie folgt zu umschließen ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
if (window.Worker) {
  // …
}
```

### Einen dedizierten Worker starten

Das Erstellen eines neuen Workers ist einfach. Alles, was Sie tun müssen, ist den [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktor aufzurufen und die URI eines Skripts anzugeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
const myWorker = new Worker("worker.js");
```

> [!NOTE]
> Bundler, einschließlich [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, URLs zur Verfügung zu stellen, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) aufgelöst werden, an den `Worker()` Konstruktor zu übergeben. Zum Beispiel:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript anstatt zur aktuellen HTML-Seite, wodurch der Bundler sicher Optimierungen wie Umbenennungen durchführen kann (da andernfalls die `worker.js`-URL auf eine Datei zeigen könnte, die nicht vom Bundler kontrolliert wird).

### Nachrichten an einen dedizierten Worker senden und empfangen

Die Magie der Worker geschieht über die Methode [`postMessage()`](/de/docs/Web/API/Worker/postMessage) und den Ereignishandler [`onmessage`](/de/docs/Web/API/Worker/message_event). Wenn Sie eine Nachricht an den Worker senden möchten, senden Sie ihm Nachrichten wie diese ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Hier haben wir also zwei {{htmlelement("input")}} Elemente, die durch die Variablen `first` und `second` dargestellt werden; wenn der Wert von einem geändert wird, wird `myWorker.postMessage([first.value,second.value])` verwendet, um den Wert beider als Array an den Worker zu senden. Sie können nahezu alles, was Sie möchten, in der Nachricht senden.

Im Worker können wir reagieren, wenn die Nachricht empfangen wird, indem wir einen Ereignishandler-Block wie diesen schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage`-Handler ermöglicht es uns, Code immer dann auszuführen, wenn eine Nachricht empfangen wird, wobei die Nachricht selbst im `data`-Attribut des `message`-Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen miteinander und verwenden erneut `postMessage()`, um das Ergebnis an den Haupt-Thread zurück zu senden.

Zurück im Haupt-Thread verwenden wir `onmessage` erneut, um auf die Nachricht zu reagieren, die vom Worker zurückgesendet wurde:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier erfassen wir die Nachrichtendaten und setzen sie als `textContent` des Ergebnisabsatzes, sodass der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` an das `Worker`-Objekt gehängt werden müssen, wenn sie im Hauptskript-Thread verwendet werden, jedoch nicht, wenn sie im Worker verwendet werden. Dies liegt daran, dass der Worker innerhalb des Workers effektiv der globale Bereich ist.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Haupt-Thread und dem Worker übergeben wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Übertragen von Daten zu und von Workern: Weitere Details](#transferring_data_to_and_from_workers_further_details) für eine viel gründlichere Erklärung.

### Beenden eines Workers

Wenn Sie einen laufenden Worker sofort von dem Haupt-Thread aus beenden müssen, können Sie dies tun, indem Sie die Methode [`terminate`](/de/docs/Web/API/Worker) des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn ein Laufzeitfehler im Worker auftritt, wird sein `onerror` Ereignishandler aufgerufen. Er empfängt ein Ereignis namens `error`, das die `ErrorEvent`-Schnittstelle implementiert.

Das Ereignis blubbert nicht und ist abfangbar; um die Standardaktion zu verhindern, kann der Worker die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Fehlereignisses aufrufen.

Das Fehlereignis hat die folgenden drei Felder, die von Interesse sind:

- `message`
  - : Eine lesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, in der der Fehler aufgetreten ist.

### Subworker erzeugen

Worker können, wenn sie möchten, weitere Worker erzeugen. So genannte Subworker müssen im gleichen Ursprung wie die übergeordnete Seite gehostet werden. Darüber hinaus werden die URIs für Subworker relativ zur Position des übergeordneten Workers aufgelöst, anstatt zur der der Seite, die sie besitzt. Dies erleichtert es Workern, den Überblick darüber zu behalten, wo sich ihre Abhängigkeiten befinden.

### Skripte und Bibliotheken importieren

Worker-Threads haben Zugriff auf eine globale Funktion `importScripts()`, die es ihnen ermöglicht, Skripte zu importieren. Sie akzeptiert null oder mehr URIs als Parameter zu Ressourcen, die importiert werden sollen; alle folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes aufgelistete Skript und führt es aus. Alle globalen Objekte aus jedem Skript können anschließend vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` ausgelöst, und nachfolgender Code wird nicht ausgeführt. Bereits ausgeführter Code (einschließlich Code, der mit [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) verzögert wurde) bleibt jedoch funktional. Funktionsdeklarationen **nach** der `importScripts()`-Methode bleiben ebenfalls erhalten, da diese immer vor dem restlichen Code ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der Sie die Dateinamen in `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` kehrt nicht zurück, bis alle Skripte geladen und ausgeführt wurden.

## Geteilte Worker

Ein geteilter Worker ist von mehreren Skripten zugänglich – selbst wenn sie von verschiedenen Fenstern, `iframes` oder sogar Workern angesteuert werden. In diesem Abschnitt werden wir den JavaScript-Code in unserem [Beispiel für einen einfachen geteilten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) besprechen ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)): Dies ist dem einfachen Beispiel für einen dedizierten Worker sehr ähnlich, außer dass es zwei verfügbare Funktionen gibt, die von verschiedenen Skriptdateien behandelt werden: _Multiplizieren von zwei Zahlen_ oder _Quadrieren einer Zahl_. Beide Skripten verwenden denselben Worker, um die erforderliche Berechnung durchzuführen.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und geteilten Workern. Beachten Sie in diesem Beispiel, dass wir zwei HTML-Seiten haben, von denen jede JavaScript verwendet, das dieselbe einzelne Worker-Datei verwendet.

> [!NOTE]
> Wenn auf SharedWorker von mehreren Browserkontexten zugegriffen werden kann, müssen alle diese Browserkontexte exakt denselben Ursprung (dasselbe Protokoll, denselben Host und denselben Port) teilen.

> [!NOTE]
> In Firefox können geteilte Worker nicht zwischen in privaten und nicht-privaten Fenstern geladenen Dokumenten geteilt werden ([Firefox bug 1177621](https://bugzil.la/1177621)).

### Einen geteilten Worker starten

Einen neuen geteilten Worker zu starten ist im Wesentlichen dasselbe wie bei einem dedizierten Worker, jedoch mit einem anderen Konstruktor (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) – jeder muss den Worker mit einem Code wie dem folgenden starten:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied besteht darin, dass Sie bei einem geteilten Worker über ein `port`-Objekt kommunizieren müssen – es wird explizit ein Port geöffnet, den die Skripte verwenden können, um mit dem Worker zu kommunizieren (dies geschieht implizit im Fall von dedizierten Workern).

Die Portverbindung muss entweder implizit durch die Verwendung des `onmessage`-Ereignishandlers oder explizit mit der Methode `start()` gestartet werden, bevor Nachrichten gesendet werden können. Das Aufrufen von `start()` ist nur erforderlich, wenn das `message`-Ereignis über die Methode `addEventListener()` verbunden wird.

> [!NOTE]
> Wenn Sie die Methode `start()` verwenden, um die Portverbindung zu öffnen, muss sie sowohl vom übergeordneten Thread als auch vom Worker-Thread aufgerufen werden, wenn eine bidirektionale Kommunikation erforderlich ist.

### Lebensdauer eines geteilten Workers

Geteilte Worker werden heruntergefahren, wenn sie von keinem Fenster, `iframe` oder Worker mehr referenziert werden.

Browser _können_ Worker zwischen gleich-originierten Navigationen am Leben erhalten, um die Kosten eines Neustarts eines von einer Seite verwendeten geteilten Workers zu vermeiden, wenn der Benutzer von Seite zu Seite innerhalb dieser Site navigiert.

Die Konstruktoroption [`extendedLifetime`](/de/docs/Web/API/SharedWorker/SharedWorker#extendedlifetime) kann ebenfalls angegeben werden, um einen geteilten Worker für einen kurzen Zeitraum am Leben zu halten, nachdem alle Referenzen an ihn geschlossen wurden:

```js
const worker = new SharedWorker("worker.js", { extendedLifetime: true });
```

Dies ermöglicht es, Arbeiten nach dem Navigationswechsel des Benutzers von der Seite auszuführen, wie das Schreiben von Zustandsinformationen in den Speicher oder das Senden von Analysedaten an Server.
Dies ist ergonomischer als die Verwendung eines Service workers zu diesem Zweck.

### Nachrichten an und von einem geteilten Worker senden

Jetzt können Nachrichten wie zuvor an den Worker gesendet werden, aber die Methode `postMessage()` muss über das Port-Objekt aufgerufen werden (wiederum sehen Sie ähnliche Konstrukte in sowohl [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js)):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Nun weiter zum Worker. Hier gibt es auch noch ein wenig mehr Komplexität ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

Zuerst verwenden wir einen `onconnect`-Handler, um Code auszuführen, wenn eine Verbindung zum Port hergestellt wird (d.h. wenn der `onmessage`-Ereignishandler im übergeordneten Thread eingerichtet wird oder wenn die Methode `start()` im übergeordneten Thread explizit aufgerufen wird).

Wir verwenden das Attribut `ports` dieses Ereignisobjekts, um den Port zu erfassen und ihn in einer Variablen zu speichern.

Als Nächstes fügen wir einen `onmessage`-Handler am Port hinzu, um die Berechnung durchzuführen und das Ergebnis an den Haupt-Thread zurückzugeben. Das Einrichten dieses `onmessage`-Handlers im Worker-Thread öffnet auch implizit die Portverbindung zurück zum übergeordneten Thread, sodass der Aufruf von `port.start()` tatsächlich nicht erforderlich ist, wie oben erwähnt.

Schließlich verarbeiten wir im Hauptskript die Nachricht (wiederum sehen Sie ähnliche Konstrukte sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch in [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js)):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht durch den Port vom Worker zurückkommt, fügen wir das Berechnungsergebnis in den entsprechenden Ergebnisabsatz ein.

## Über die Sicherheit von Threads

Die Schnittstelle [`Worker`](/de/docs/Web/API/Worker) erzeugt echte Betriebssystem-Threads, und bewusste Programmierer könnten besorgt sein, dass Konkurrenz in Ihrem Code "interessante" Effekte verursachen kann, wenn Sie nicht vorsichtig sind.

Da die Kommunikation von Web Workern mit anderen Threads jedoch sorgfältig kontrolliert wird, ist es tatsächlich sehr schwer, Konkurrenzprobleme zu verursachen. Es gibt keinen Zugriff auf nicht thread-sichere Komponenten oder das DOM. Und Sie müssen spezielle Daten in und aus einem Thread durch serielle Objekte übergeben. Sie müssen also wirklich hart arbeiten, um Probleme in Ihrem Code zu verursachen.

## Content Security Policy

Worker gelten als eigener Ausführungskontext, getrennt von dem Dokument, das sie erstellt hat. Aus diesem Grund sind sie im Allgemeinen nicht durch die [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des sie erstellenden Dokuments (oder des übergeordneten Workers) geregelt. Wenn ein Dokument beispielsweise mit dem folgenden Header geliefert wird:

```http
Content-Security-Policy: script-src 'self'
```

Wird dadurch unter anderem verhindert, dass alle einbezogenen Skripte [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn das Skript jedoch einen Worker erstellt, _wird_ der im Worker-Kontext ausgeführte Code `eval()` verwenden dürfen.

Um eine Content-Security-Policy für den Worker anzugeben, setzen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Antwort-Header für die Anfrage, die das Worker-Skript selbst geliefert hat.

Eine Ausnahme davon ist, wenn der Ursprung des Worker-Skripts eine global eindeutige Kennung ist (zum Beispiel, wenn seine URL ein Daten- oder Blob-Schema hat). In diesem Fall erbt der Worker die CSP des Dokuments oder Workers, der ihn erstellt hat.

## Übertragen von Daten zu und von Workern: Weitere Details

Daten, die zwischen der Hauptseite und Workern übergeben werden, werden _kopiert_, nicht geteilt (außer bei bestimmten Objekten, die explizit [geteilt](#daten_teilen) werden können). Objekte werden serialisiert, wenn sie an den Worker übergeben werden, und anschließend auf der anderen Seite deserialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, was bedeutet, dass **ein Duplikat** an jedem Ende erstellt wird. Die meisten Browser implementieren diese Funktion als [strukturierte Klonierung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Wie Sie wahrscheinlich inzwischen wissen, werden Daten über Nachrichten zwischen den beiden Threads durch `postMessage()` ausgetauscht, und das [`data`](/de/docs/Web/API/MessageEvent/data)-Attribut des `message`-Ereignisses enthält Daten, die vom Worker zurückgesendet wurden.

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

Der [strukturierte Klonierungsalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kann JSON und einige Dinge akzeptieren, die JSON nicht kann – wie z.B. zirkuläre Referenzen.

### Beispiele zur Datenübergabe

#### Beispiel 1: Fortgeschrittene Übergabe von JSON-Daten und Erstellen eines Umschaltsystems

Wenn Sie komplexe Daten übergeben und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammenfasst.

Zuerst erstellen wir eine `QueryableWorker` Klasse, die die URL des Workers, einen Standard-Listener und einen Fehler-Handler entgegennimmt, und diese Klasse wird eine Liste von Listenern verfolgen und uns helfen, mit dem Worker zu kommunizieren:

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

Hier lassen wir den Worker zwei einfache Operationen als Illustration ausführen: die Differenz von zwei Zahlen erhalten und nach drei Sekunden einen Alarm auslösen. Um dies zu erreichen, implementieren wir zuerst eine `sendQuery`-Methode, die prüft, ob der Worker tatsächlich die entsprechenden Methoden hat, um das zu tun, was wir wollen.

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

Wir beenden `QueryableWorker` mit der `onmessage`-Methode. Wenn der Worker die entsprechenden Methoden hat, die wir abgefragt haben, sollte er den Namen des entsprechenden Listeners und die Argumente zurückgeben, die er benötigt, wir müssen ihn nur in `listeners` finden:

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

Es ist möglich, den Inhalt jeder Nachrichte von der Hauptseite -> Worker und Worker -> Hauptseite umzustellen. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können alles sein, solange sie im `QueryableWorker` und dem `worker` konsistent sind.

### Datenübergabe durch Eigentumsübertragung (transferierbare Objekte)

Moderne Browser enthalten eine zusätzliche Möglichkeit, bestimmte Arten von Objekten an oder von einem Worker mit hoher Leistung zu übergeben. [Transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden von einem Kontext zu einem anderen mit einer Null-Kopier-Operation übertragen, was zu einer erheblichen Leistungsverbesserung beim Senden großer Datensätze führt.

Wenn Sie zum Beispiel ein {{jsxref("ArrayBuffer")}} von Ihrer Hauptanwendung an ein Worker-Skript übertragen, wird das Original-{{jsxref("ArrayBuffer")}} gelöscht und ist nicht mehr verwendbar. Sein Inhalt wird (buchstäblich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

### Daten teilen

Das {{jsxref("SharedArrayBuffer")}} Objekt ermöglicht es zwei Threads, wie z. B. dem Worker und dem Haupt-Thread, gleichzeitig auf denselben Speicherbereich zuzugreifen und Daten auszutauschen, ohne den Nachrichtenmechanismus zu verwenden. Die Verwendung von gemeinsam genutztem Speicher bringt jedoch erhebliche Determinismus-, Sicherheits- und Leistungsbedenken mit sich, von denen einige im Artikel [JavaScript-Ausführungsmodell](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) beschrieben sind.

## Eingebettete Worker

Es gibt keinen "offiziellen" Weg, um den Code eines Workers innerhalb einer Webseite einzubetten, wie es {{HTMLElement("script")}}-Elemente für normale Skripte tun. Ein {{HTMLElement("script")}}-Element, das kein `src`-Attribut hat und ein `type`-Attribut hat, das keinen ausführbaren MIME-Typ identifiziert, kann jedoch als ein Datenblock-Element betrachtet werden, das JavaScript verwenden könnte. "Datenblöcke" sind ein allgemeineres Feature von HTML, das nahezu beliebige Textdaten tragen kann. So könnte ein Worker auf diese Weise eingebettet werden:

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

Der eingebettete Worker ist nun in einer neuen benutzerdefinierten `document.worker`-Eigenschaft verschachtelt.

Es ist auch erwähnenswert, dass Sie eine Funktion in ein Blob konvertieren können und dann eine Objekt-URL aus diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele zur Verwendung von Web Workern.

### Berechnungen im Hintergrund ausführen

Worker sind vor allem nützlich, um Ihrem Code zu ermöglichen, prozessorintensive Berechnungen auszuführen, ohne den UI-Thread zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code wird in der Datei "fibonacci.js" gespeichert, die im nächsten Abschnitt im HTML referenziert wird.

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

Die Webseite erstellt ein `<p>`-Element mit der ID `result`, das zur Anzeige des Ergebnisses verwendet wird, und startet dann den Worker. Nachdem der Worker gestartet wurde, wird der `onmessage`-Handler konfiguriert, um die Ergebnisse anzuzeigen, indem der Inhalt des `<p>`-Elements gesetzt wird, und der `onerror`-Handler wird konfiguriert, um die Fehlermeldung in der Entwicklerkonsole zu protokollieren.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Probieren Sie dieses Beispiel live aus](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufgaben unter mehreren Workern aufteilen

Da Multicore-Computer immer häufiger anzutreffen sind, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker aufzuteilen, die diese Aufgaben dann auf mehreren Prozessor-Kernen ausführen können.

## Andere Arten von Workern

Zusätzlich zu dedizierten und geteilten Web Workern gibt es weitere Arten von Workern:

- [ServiceWorker](/de/docs/Web/API/Service_Worker_API) agieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen und dem Browser und Netzwerk stehen (wenn verfügbar). Sie sollen (unter anderem) die Erstellung effektiver Offline-Erfahrungen ermöglichen, indem sie Netzwerk-Anfragen abfangen und geeignete Maßnahmen ergreifen, basierend darauf, ob das Netzwerk verfügbar ist und aktualisierte Ressourcen auf dem Server vorhanden sind. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrundsynchronisierungs-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bieten die Möglichkeit für direktes geskriptetes Audioverarbeiten, das in einem Worklet (einer leichteren Version eines Workers) Kontext durchgeführt werden kann.

## Debuggen von Worker-Threads

Die meisten Browser ermöglichen es Ihnen, Web Worker in ihren JavaScript-Debuggern _genau auf die gleiche Weise_ zu debuggen wie den Haupt-Thread! Sowohl Firefox als auch Chrome listen JavaScript-Quelldateien für den Haupt-Thread und aktive Worker-Threads auf, und alle diese Dateien können geöffnet werden, um Haltepunkte und Logpunkte zu setzen.

Um zu erfahren, wie man Web Worker debuggt, siehe die Dokumentation für den JavaScript-Debugger jedes Browsers:

- [Chrome Sources-Panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

Um Devtools für Web Worker zu öffnen, können Sie die folgenden URLs verwenden:

- Edge: `edge://inspect/`
- Chrome: `chrome://inspect/`
- Firefox: `about:debugging#/runtime/this-firefox`

Diese Seiten zeigen eine Übersicht aller Service Worker. Sie müssen den relevanten anhand der URL finden und dann _untersuchen_ klicken, um auf Devtools wie die Konsole und den Debugger für diesen Worker zuzugreifen.

## Funktionen und Schnittstellen, die in Workern verfügbar sind

Sie können die meisten Standard-JavaScript-Funktionen innerhalb eines Web Workers verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}} und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptsächliche, was Sie _nicht_ in einem Worker tun können, ist, direkt die übergeordnete Seite zu beeinflussen. Dazu gehört das Manipulieren des DOM und die Verwendung der Objekte dieser Seite. Dies muss indirekt geschehen, indem eine Nachricht zurück an das Hauptskript mit [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) gesendet wird, um dann die Änderungen im Ereignishandler durchzuführen.

> [!NOTE]
> Sie können testen, ob eine Methode oder Schnittstelle für Worker verfügbar ist, indem Sie den [Worker Playground](https://mdn.github.io/dom-examples/web-workers/worker-playground/) verwenden.

> [!NOTE]
> Für eine vollständige Liste der Funktionen, die Workern zur Verfügung stehen, siehe [Funktionen und Schnittstellen, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Schnittstelle
- [Funktionen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Schnittstelle
