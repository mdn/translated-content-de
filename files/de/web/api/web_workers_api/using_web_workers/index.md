---
title: Verwendung von Web-Workern
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Web Workers API")}}

Web-Worker sind ein einfacher Weg für Webinhalte, Skripte in Hintergrund-Threads auszuführen. Der Worker-Thread kann Aufgaben erledigen, ohne die Benutzeroberfläche zu beeinträchtigen. Darüber hinaus können sie Netzwerkanfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) stellen. Sobald ein Worker erstellt wurde, kann er Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen von diesem Code angegebenen Ereignishandler postet (und umgekehrt).

Dieser Artikel bietet eine detaillierte Einführung in die Verwendung von Web-Workern.

## Web Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor (z.B. [`Worker()`](/de/docs/Web/API/Worker/Worker)) erstellt wird, der eine benannte JavaScript-Datei ausführt - diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext, der sich von dem aktuellen [`window`](/de/docs/Web/API/Window) unterscheidet. Daher führt die Verwendung der Abkürzung [`window`](/de/docs/Web/API/Window), um den aktuellen globalen Bereich zu erhalten (statt [`self`](/de/docs/Web/API/Window/self)) innerhalb eines [`Worker`](/de/docs/Web/API/Worker) zu einem Fehler.

Der Worker-Kontext wird im Falle von dedizierten Workern durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt repräsentiert (Standard-Worker, die von einem einzigen Skript genutzt werden; freigegebene Worker verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)). Ein dedizierter Worker ist nur von dem Skript aus zugänglich, das ihn zuerst gestartet hat, während freigegebene Worker von mehreren Skripten aus zugänglich sind.

> [!NOTE]
> Siehe die [Landingpage der Web Workers API](/de/docs/Web/API/Web_Workers_API) für referenzierende Dokumentation zu Workern und zusätzliche Leitfäden.

Sie können innerhalb des Worker-Threads beliebigen Code ausführen, mit einigen Ausnahmen. Beispielsweise können Sie den DOM nicht direkt von innerhalb eines Workers manipulieren oder einige Standardmethoden und -eigenschaften des [`window`]-Objekts verwenden. Sie können jedoch eine große Anzahl von Elementen nutzen, die unter `window` verfügbar sind, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Datenspeichermechanismen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Siehe [Funktionen und Klassen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) für weitere Details.

Daten werden zwischen Workern und dem Haupt-Thread über ein Nachrichtensystem gesendet - beide Seiten senden ihre Nachrichten mit der Methode `postMessage()` und reagieren auf Nachrichten über den Ereignishandler `onmessage` (die Nachricht ist im Datenattribut des [`message`](/de/docs/Web/API/Worker/message_event)-Ereignisses enthalten). Die Daten werden kopiert, statt geteilt zu werden.

Worker können wiederum neue Worker erzeugen, solange diese Worker innerhalb des gleichen {{Glossary("origin", "Ursprungs")}} wie die übergeordnete Seite gehostet werden.

Darüber hinaus können Worker Netzwerk-Anfragen über die APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) stellen (beachten Sie jedoch, dass das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur durch das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt werden wir den JavaScript-Code in unserem [Einfachen Beispiel eines dedizierten Workers](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) besprechen ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)): Dies ermöglicht Ihnen, zwei Zahlen einzugeben, die multipliziert werden sollen. Die Zahlen werden an einen dedizierten Worker gesendet, zusammen multipliziert und das Ergebnis wird an die Seite zurückgegeben und angezeigt.

Dieses Beispiel ist ziemlich trivial, aber wir haben beschlossen, es einfach zu halten, während wir Sie in die grundlegenden Worker-Konzepte einführen. Anspruchsvollere Details werden später im Artikel behandelt.

### Funktionserkennung von Workern

Für etwas kontrolliertere Fehlerbehandlung und Abwärtskompatibilität ist es eine gute Idee, Ihren Worker-Zugriffscode wie folgt einzupacken ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
if (window.Worker) {
  // …
}
```

### Erstellen eines dedizierten Workers

Einen neuen Worker zu erstellen, ist einfach. Sie müssen lediglich den Konstruktor [`Worker()`](/de/docs/Web/API/Worker/Worker) aufrufen und die URI eines Skripts angeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
const myWorker = new Worker("worker.js");
```

> [!NOTE]
> Verpacker, einschließlich [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, URLs zu übergeben, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) aufgelöst wurden, an den `Worker()`-Konstruktor. Zum Beispiel:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> So ist der Pfad relativ zum aktuellen Skript statt zur aktuellen HTML-Seite, was es dem Verpacker ermöglicht, sicher Optimierungen wie das Umbenennen vorzunehmen (weil ansonsten die `worker.js`-URL auf eine Datei zeigen könnte, die nicht vom Verpacker kontrolliert wird, sodass er keine Annahmen treffen kann).

### Versenden von Nachrichten an und von einem dedizierten Worker

Der Zauber der Worker geschieht über die Methode [`postMessage()`](/de/docs/Web/API/Worker/postMessage) und den Ereignishandler [`onmessage`](/de/docs/Web/API/Worker/message_event). Wenn Sie eine Nachricht an den Worker senden möchten, posten Sie Nachrichten auf diese Weise ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Hier haben wir zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` repräsentiert werden; wenn der Wert eines der beiden geändert wird, wird `myWorker.postMessage([first.value,second.value])` verwendet, um den Wert in beiden an den Worker als Array zu senden. Sie können fast alles, was Sie möchten, in der Nachricht senden.

Im Worker können wir reagieren, wenn die Nachricht empfangen wird, indem wir einen Ereignishandler-Block wie diesen schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage`-Handler ermöglicht es uns, Code auszuführen, sobald eine Nachricht empfangen wird, wobei die Nachricht selbst im `data`-Attribut des `message`-Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen zusammen und verwenden dann `postMessage()` erneut, um das Ergebnis an den Haupt-Thread zurückzusenden.

Zurück im Haupt-Thread verwenden wir `onmessage` erneut, um auf die Nachricht zu reagieren, die vom Worker zurückgesendet wurde:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier rufen wir die Nachrichtendaten ab und setzen sie als `textContent` des Ergebnisabsatzes, damit der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` am `Worker`-Objekt hängen müssen, wenn sie im Hauptskript-Thread verwendet werden, aber nicht, wenn sie im Worker verwendet werden. Dies liegt daran, dass innerhalb des Workers der Worker effektiv der globale Bereich ist.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Haupt-Thread und dem Worker übergeben wird, wird sie kopiert oder "transferiert" (verschoben), nicht geteilt. Lesen Sie [Übertragung von Daten zu und von Workern: weitere Details](#transferring_data_to_and_from_workers_further_details) für eine wesentlich gründlichere Erklärung.

### Beenden eines Workers

Wenn Sie einen laufenden Worker aus dem Haupt-Thread heraus sofort beenden müssen, können Sie dies tun, indem Sie die Methode [`terminate`](/de/docs/Web/API/Worker) des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn ein Laufzeitfehler im Worker auftritt, wird der `onerror`-Ereignishandler aufgerufen. Er empfängt ein Ereignis namens `error`, das die `ErrorEvent`-Schnittstelle implementiert.

Das Ereignis wird nicht hochgeladen und ist abbrechbar; um zu verhindern, dass die Standardaktion eintritt, kann der Worker die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Fehlerereignisses aufrufen.

Das Fehlerereignis hat die folgenden drei Felder, die von Interesse sind:

- `message`
  - : Eine lesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, in der der Fehler aufgetreten ist.

### Erstellung von Subworkern

Worker können nach Belieben weitere Worker erzeugen. So genannte Subworker müssen im gleichen Ursprung wie die übergeordnete Seite gehostet werden. Auch die URIs für Subworker werden relativ zum Standort des übergeordneten Workers aufgelöst, anstatt relativ zu der der besitzenden Seite. Dies macht es Workern einfacher, den Überblick über ihre Abhängigkeiten zu behalten.

### Import von Skripten und Bibliotheken

Worker-Threads haben Zugriff auf eine globale Funktion, `importScripts()`, die es ihnen ermöglicht, Skripte zu importieren. Sie akzeptiert null oder mehr URIs als Parameter zu Ressourcen, die importiert werden sollen; alle folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes gelistete Skript und führt es aus. Alle globalen Objekte aus jedem Skript können dann vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` ausgelöst und nachfolgender Code nicht ausgeführt. Zuvor ausgeführter Code (einschließlich Code, der mit [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) aufgeschoben wurde) wird jedoch weiterhin funktionsfähig sein. Funktionsdeklarationen **nach** der `importScripts()`-Methode werden ebenfalls beibehalten, da diese immer vor dem Rest des Codes ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der Sie die Dateinamen in `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` gibt nicht zurück, bis alle Skripte geladen und ausgeführt wurden.

## Geteilte Worker

Ein geteilter Worker ist zugänglich durch mehrere Skripte - selbst wenn sie von verschiedenen Fenstern, Iframes oder sogar Workern aufgerufen werden. In diesem Abschnitt werden wir den JavaScript-Code in unserem [Einfachen Beispiel eines geteilten Workers](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) besprechen ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)): Dies ist ähnlich wie das einfache Beispiel eines dedizierten Workers, außer dass es zwei verfügbare Funktionen gibt, die von verschiedenen Skriptdateien gehandhabt werden: _Zwei Zahlen multiplizieren_ oder _Eine Zahl quadrieren_. Beide Skripte nutzen denselben Worker für die erforderliche Berechnung.

Hier werden wir uns auf die Unterschiede zwischen dedizierten und geteilten Workern konzentrieren. Beachten Sie, dass in diesem Beispiel zwei HTML-Seiten vorhanden sind, von denen jede JavaScript verwendet, das die gleiche einzelne Worker-Datei nutzt.

> [!NOTE]
> Wenn SharedWorker von mehreren Browsing-Kontexten aus zugänglich gemacht werden kann, müssen alle diese Browsing-Kontexte den exakt gleichen Ursprung (gleiches Protokoll, Host und Port) teilen.

> [!NOTE]
> In Firefox können geteilte Worker nicht zwischen Dokumenten geteilt werden, die in privaten und nicht privaten Fenstern geladen sind ([Firefox-Bug 1177621](https://bugzil.la/1177621)).

### Erstellung eines geteilten Workers

Einen neuen geteilten Worker zu erstellen, ist ungefähr das gleiche wie bei einem dedizierten Worker, jedoch mit einem anderen Konstruktornamen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) - jeder von ihnen muss den Worker mit einem Code wie dem folgenden hochfahren:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied ist, dass Sie bei einem geteilten Worker über ein `port`-Objekt kommunizieren müssen - ein expliziter Port wird geöffnet, den die Skripte verwenden können, um mit dem Worker zu kommunizieren (dies geschieht im Fall von dedizierten Workern implizit).

Die Portverbindung muss entweder implizit durch die Verwendung des `onmessage`-Ereignishandlers oder explizit mit der Methode `start()` gestartet werden, bevor Nachrichten gepostet werden können. Der Aufruf von `start()` ist nur erforderlich, wenn das `message`-Ereignis über die Methode `addEventListener()` verdrahtet wird.

> [!NOTE]
> Wenn Sie die `start()`-Methode verwenden, um die Portverbindung zu öffnen, muss sie sowohl von dem übergeordneten Thread als auch von dem Worker-Thread aufgerufen werden, wenn bidirektionale Kommunikation erforderlich ist.

### Versenden von Nachrichten an und von einem geteilten Worker

Nun können Nachrichten wie zuvor an den Worker gesendet werden, aber die Methode `postMessage()` muss über das Port-Object aufgerufen werden (wie Sie in den Konstruktionen in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) und [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen können):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Nun zum Worker. Es gibt auch hier ein bisschen mehr Komplexität ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

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

Wir verwenden das `ports`-Attribut des Ereignisobjekts, um den Port abzugreifen und ihn in einer Variable zu speichern.

Als nächstes fügen wir einen `onmessage`-Handler zum Port hinzu, um die Berechnung durchzuführen und das Ergebnis an den Haupt-Thread zurückzugeben. Die Einrichtung dieses `onmessage`-Handlers im Worker-Thread öffnet auch implizit die Portverbindung zurück zum übergeordneten Thread, sodass der Aufruf von `port.start()` wie oben erwähnt nicht tatsächlich erforderlich ist.

Schließlich behandeln wir wieder im Hauptskript die Nachricht (wie Sie in den Konstruktionen in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) und [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen können):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht durch den Port vom Worker zurückkommt, fügen wir das Berechnungsergebnis in den entsprechenden Ergebnisabschnitt ein.

## Über Thread-Sicherheit

Das [`Worker`](/de/docs/Web/API/Worker)-Interface erstellt echte Betriebssystem-Threads, und achtsame Programmierer könnten besorgt sein, dass Gleichzeitigkeit in Ihrem Code "interessante" Effekte hervorrufen kann, wenn Sie nicht vorsichtig sind.

Da Web-Worker jedoch sorgfältig kontrollierte Kommunikationspunkte mit anderen Threads haben, ist es tatsächlich sehr schwierig, Gleichzeitigkeitsprobleme zu verursachen. Es gibt keinen Zugriff auf nicht-threadsichere Komponenten oder den DOM. Und Sie müssen spezifische Daten in und aus einem Thread durch serialisierte Objekte übergeben. Daher müssen Sie sich wirklich anstrengen, um Probleme in Ihrem Code zu verursachen.

## Richtlinie zur Inhalts-Sicherheit

Worker haben in der Regel ihren eigenen Ausführungskontext, der vom Dokument, das sie erstellt hat, getrennt ist. Aus diesem Grund unterliegen sie im Allgemeinen nicht der [Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder des übergeordneten Workers), das sie erstellt hat. Angenommen, ein Dokument wird mit folgendem Header bereitgestellt:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem wird dies verhindern, dass Skripte, die es einbindet, [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn jedoch das Skript einen Worker erstellt, kann der Code im Kontext des Workers dennoch `eval()` verwenden.

Um eine Content-Security-Policy für den Worker festzulegen, setzen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Antwort-Header für die Anfrage, die das Worker-Skript selbst bereitgestellt hat.

Die Ausnahme hierzu ist, wenn der Ursprung des Worker-Skripts eine weltweit eindeutige Kennung ist (zum Beispiel, wenn seine URL ein Schema wie "data" oder "blob" hat). In diesem Fall erbt der Worker die CSP des Dokuments oder des Workers, der ihn erstellt hat.

## Übertragung von Daten zu und von Workern: weitere Details

Daten, die zwischen der Hauptseite und den Workern übergeben werden, werden **kopiert**, nicht geteilt. Objekte werden serialisiert, wenn sie dem Worker übergeben werden, und anschließend am anderen Ende deserialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, sodass letztendlich **eine Kopie** an jedem Ende erstellt wird. Die meisten Browser implementieren diese Funktion als [strukturierte Klonung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Um dies zu veranschaulichen, erstellen wir eine Funktion namens `emulateMessage()`, die das Verhalten eines Wertes simuliert, der _geklont und nicht geteilt_ wird, während der Passage von einem `Worker` zur Hauptseite oder umgekehrt:

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

Ein Wert, der geklont und nicht geteilt wird, wird als _Nachricht_ bezeichnet. Wie Sie wahrscheinlich jetzt wissen, können _Nachrichten_ von und zur Hauptseite gesendet werden, indem `postMessage()` verwendet wird, und das `data`-Attribut des `message`-Ereignisses enthält Daten, die vom Worker zurückgesendet wurden.

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

Der [strukturierte Klon](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) Algorithmus kann JSON und einige Dinge akzeptieren, die JSON nicht kann - wie z.B. zyklische Referenzen.

### Beispiele zur Datenübergabe

#### Beispiel 1: Fortschrittliche Übergabe von JSON-Daten und Erstellung eines Umschaltsystems

Wenn Sie komplexe Daten übergeben müssen und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammenfasst.

Zuerst erstellen wir eine `QueryableWorker`-Klasse, die die URL des Workers, einen Standard-Listener und einen Fehler-Handler nimmt, und diese Klasse wird eine Liste von Listenern verfolgen und uns helfen, mit dem Worker zu kommunizieren:

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

Dann fügen wir die Methoden hinzu, um Listener hinzuzufügen/zu entfernen:

```js
this.addListeners = (name, listener) => {
  listeners[name] = listener;
};

this.removeListeners = (name) => {
  delete listeners[name];
};
```

Hier lassen wir den Worker zwei einfache Operationen durchführen, um dies zu veranschaulichen: die Differenz von zwei Zahlen ermitteln und eine Warnung nach drei Sekunden ausgeben. Um dies zu erreichen, implementieren wir zuerst eine `sendQuery`-Methode, die abfragt, ob der Worker tatsächlich die entsprechenden Methoden hat, um das zu tun, was wir wollen.

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

Wir beenden `QueryableWorker` mit der `onmessage`-Methode. Wenn der Worker die entsprechenden Methoden hat, nach denen wir gefragt haben, sollte er den Namen des entsprechenden Listeners und die Argumente, die er benötigt, zurückgeben, wir müssen ihn nur in `listeners` finden.

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

Nun zum Worker. Zuerst müssen wir die Methoden haben, um die beiden einfachen Operationen durchzuführen:

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

Es ist möglich, den Inhalt jeder Hauptseite -> Worker und Worker -> Hauptseite Nachricht umzuschalten. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können alles sein, solange sie in `QueryableWorker` und im `Worker` konsistent sind.

### Übergabe von Daten durch Übertragung von Eigentum (transferierbare Objekte)

Moderne Browser enthalten eine zusätzliche Möglichkeit, bestimmte Objekttypen mit hoher Leistung an oder von einem Worker zu übergeben. [Transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden von einem Kontext zu einem anderen mit einer Null-Kopie-Operation übertragen, was zu einer erheblichen Leistungsverbesserung beim Senden großer Datensätze führt.

Zum Beispiel, wenn ein {{jsxref("ArrayBuffer")}} von Ihrer Hauptanwendung zu einem Worker-Skript übertragen wird, wird das ursprüngliche {{jsxref("ArrayBuffer")}} geleert und nicht mehr verwendbar. Sein Inhalt wird (buchstäblich) zum Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## Eingebettete Worker

Es gibt keinen "offiziellen" Weg, den Code eines Workers in eine Webseite einzubetten, ähnlich wie {{HTMLElement("script")}}-Elemente das für normale Skripte tun. Aber ein {{HTMLElement("script")}}-Element, das kein `src`-Attribut hat und ein `type`-Attribut hat, das keinen ausführbaren MIME-Typ identifiziert, kann als Datenblock-Element betrachtet werden, das JavaScript verwenden könnte. "Datenblöcke" sind ein allgemeineres Feature von HTML, das fast beliebige textuelle Daten tragen kann. Ein Worker könnte auf diese Weise eingebettet werden:

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

Der eingebettete Worker ist jetzt in ein neues benutzerdefiniertes `document.worker`-Eigentum eingebettet.

Es ist auch erwähnenswert, dass Sie auch eine Funktion in ein Blob konvertieren und dann eine Objekt-URL aus diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele zur Verwendung von Web-Workern.

### Durchführung von Berechnungen im Hintergrund

Worker sind hauptsächlich nützlich, damit Ihr Code prozessor-intensive Berechnungen durchführen kann, ohne den Benutzeroberflächen-Thread zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code wird in der Datei "fibonacci.js" gespeichert, auf die sich das HTML im nächsten Abschnitt bezieht.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfängt, die gesendet werden, wenn die `postMessage()`-Methode des Worker-Objekts aufgerufen wird. Dies führt die Mathematik aus und gibt schließlich das Ergebnis an den Haupt-Thread zurück.

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

Die Webseite erstellt ein `<p>`-Element mit der ID `result`, das verwendet wird, um das Ergebnis anzuzeigen, und startet dann den Worker. Nachdem der Worker gestartet wurde, wird der `onmessage`-Handler konfiguriert, um die Ergebnisse anzuzeigen, indem der Inhalt des `<p>`-Elements gesetzt wird, und der `onerror`-Handler wird so eingestellt, dass die Fehlermeldung an die Devtools-Konsole geloggt wird.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Probieren Sie dieses Beispiel live aus](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufteilen von Aufgaben auf mehrere Worker

Da Multikernrechner immer häufiger werden, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker zu verteilen, die diese Aufgaben dann auf mehreren Prozessorkernen ausführen können.

## Andere Worker-Typen

Neben dedizierten und geteilten Web-Workern gibt es noch andere Arbeiterarten:

- [ServiceWorker](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen und dem Browser und Netzwerk (wenn verfügbar) sitzen. Sie sollen (unter anderem) die Erstellung effektiver Offline-Erfahrungen ermöglichen, indem sie Netzwerk-Anfragen abfangen und geeignete Maßnahmen basierend darauf ergreifen, ob das Netzwerk verfügbar ist und aktualisierte Assets sich auf dem Server befinden. Sie ermöglichen außerdem den Zugriff auf Push-Benachrichtigungen und Hintergrund-Sync-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bieten die Möglichkeit zur direkten geskripteten Audiobearbeitung in einem Worklet (einer leichten Version des Workers).

## Debugging von Worker-Threads

Die meisten Browser ermöglichen Ihnen, Web-Worker in ihren JavaScript-Debuggern _genauso wie_ den Haupt-Thread zu debuggen! Beispielsweise listen sowohl Firefox als auch Chrome JavaScript-Quellcodedateien für den Haupt-Thread und aktive Worker-Threads auf, und alle diese Dateien können geöffnet werden, um Haltepunkte und Logpunkte zu setzen.

Um zu lernen, wie Sie Web-Worker debuggen, siehe die Dokumentation für den JavaScript-Debugger jedes Browsers:

- [Chrome Sources-Panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

Um Devtools für Web-Worker zu öffnen, können Sie die folgenden URLs verwenden:

- Edge: `edge://inspect/`
- Chrome: `chrome://inspect/`
- Firefox: `about:debugging#/runtime/this-firefox`

Diese Seiten zeigen einen Überblick über alle Service-Worker. Sie müssen den relevanten anhand der URL finden und dann auf _untersuchen_ klicken, um auf Devtools wie die Konsole und den Debugger für diesen Worker zuzugreifen.

## Funktionen und Schnittstellen verfügbar in Workern

Sie können die meisten Standard-JavaScript-Features innerhalb eines Web-Workers verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptargoment, das Sie _nicht_ in einem Worker tun können, betrifft die direkte Interaktion mit der übergeordneten Seite. Dazu zählen die Manipulation des DOM und die Verwendung der Objekte dieser Seite. Sie müssen es indirekt tun, indem Sie eine Nachricht zurück an das Hauptskript über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) senden und dann die Änderungen im Ereignishandler durchführen.

> [!NOTE]
> Sie können testen, ob eine Methode für Worker verfügbar ist, indem Sie die Seite nutzen: <https://worker-playground.glitch.me/>. Wenn Sie beispielsweise [`EventSource`](/de/docs/Web/API/EventSource) in die Seite auf Firefox 84 eingeben, sehen Sie, dass dies in Service-Workern nicht unterstützt wird, wohl aber in dedizierten und geteilten Workern.

> [!NOTE]
> Für eine vollständige Liste der Funktionen, die Workern zur Verfügung stehen, siehe [Funktionen und Schnittstellen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker) Interface
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Interface
- [Funktionen verfügbar für Worker](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Interface
