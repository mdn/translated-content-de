---
title: Verwendung von Web Workern
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: efddce9305893217de7168b860c492dd3981e88f
---

{{DefaultAPISidebar("Web Workers API")}}

Web Worker sind ein einfaches Mittel für Webinhalte, Skripte in Hintergrund-Threads auszuführen. Der Worker-Thread kann Aufgaben ausführen, ohne die Benutzeroberfläche zu beeinträchtigen. Darüber hinaus können sie Netzwerk-Anfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen. Sobald erstellt, kann ein Worker Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen von diesem Code angegebenen Ereignishandler sendet (und umgekehrt).

Dieser Artikel bietet eine detaillierte Einführung in die Verwendung von Web Workern.

## Web Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor (z.B. [`Worker()`](/de/docs/Web/API/Worker/Worker)) erstellt wird, der eine benannte JavaScript-Datei ausführt — diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker werden in einem anderen globalen Kontext ausgeführt, der sich vom aktuellen [`window`](/de/docs/Web/API/Window) unterscheidet. Daher führt die Verwendung der [`window`](/de/docs/Web/API/Window)-Abkürzung, um den aktuellen globalen Geltungsbereich innerhalb eines [`Worker`](/de/docs/Web/API/Worker) zu erhalten, zu einem Fehler.

Der Worker-Kontext wird im Fall von dedizierten Workern (Standard-Worker, die von einem einzigen Skript genutzt werden; gemeinsam genutzte Worker verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)) durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) Objekt repräsentiert. Ein dedizierter Worker ist nur von dem Skript zugänglich, das ihn zuerst erzeugt hat, während gemeinsam genutzte Worker von mehreren Skripten aus zugänglich sind.

> [!NOTE]
> Siehe [Die Web Workers API Übersichtsseite](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentation zu Workern und zusätzliche Leitfäden.

Sie können beliebigen Code innerhalb des Worker-Threads ausführen, mit einigen Ausnahmen. Zum Beispiel können Sie das DOM nicht direkt von innerhalb eines Workers manipulieren oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts verwenden. Sie können jedoch eine große Anzahl von Elementen verwenden, die unter `window` verfügbar sind, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Datenspeicherungsmethoden wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Weitere Details finden Sie unter [Funktionen und Klassen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

Daten werden zwischen Workern und dem Haupt-Thread mittels eines Nachrichtensystems gesendet — beide Seiten senden ihre Nachrichten mit der `postMessage()`-Methode und reagieren auf Nachrichten über den `onmessage`-Ereignishandler (die Nachricht ist im Datenattribut der [`message`](/de/docs/Web/API/Worker/message_event) Ereignisses enthalten). Die Daten werden kopiert und nicht geteilt.

Worker können wiederum neue Worker erzeugen, sofern diese Worker im selben [Ursprung](/de/docs/Glossary/origin) wie die übergeordnete Seite gehostet werden.

Darüber hinaus können Worker Netzwerk-Anfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen (beachten Sie jedoch, dass das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur durch das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt besprechen wir das in unserem [Einfaches Beispiel für dedizierte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)) gefundene JavaScript: Dies ermöglicht es Ihnen, zwei Zahlen einzugeben, die miteinander multipliziert werden sollen. Die Zahlen werden an einen dedizierten Worker gesendet, miteinander multipliziert und das Ergebnis wird auf die Seite zurückgegeben und angezeigt.

Dieses Beispiel ist eher trivial, aber wir haben uns entschieden, es einfach zu halten, während wir Ihnen grundlegende Worker-Konzepte vorstellen. Fortgeschrittenere Details werden später im Artikel behandelt.

### Worker-Funktionserkennung

Für eine etwas kontrolliertere Fehlerbehandlung und Abwärtskompatibilität ist es eine gute Idee, Ihren Worker-Zugriffscode im Folgenden einzubinden ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
if (window.Worker) {
  // …
}
```

### Einen dedizierten Worker erstellen

Einen neuen Worker zu erstellen, ist einfach. Alles, was Sie tun müssen, ist den [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor aufzurufen und den URI eines Skripts anzugeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
const myWorker = new Worker("worker.js");
```

> [!NOTE]
> Bundler, einschließlich [Webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vitejs.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, URLs zu übergeben, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) aufgelöst werden, an den `Worker()`-Konstruktor. Zum Beispiel:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript anstelle der aktuellen HTML-Seite, was es dem Bundler ermöglicht, sicher Optimierungen wie Umbenennungen durchzuführen (da andernfalls die `worker.js`-URL auf eine Datei verweisen könnte, die nicht vom Bundler kontrolliert wird, sodass er keine Annahmen treffen kann).

### Nachrichten an einen dedizierten Worker senden und empfangen

Die Magie der Worker geschieht über die Methode [`postMessage()`](/de/docs/Web/API/Worker/postMessage) und den Ereignishandler [`onmessage`](/de/docs/Web/API/Worker/message_event). Wenn Sie eine Nachricht an den Worker senden möchten, senden Sie Nachrichten wie folgt ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

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

Hier haben wir zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` dargestellt werden; wenn der Wert eines dieser Elemente geändert wird, wird `myWorker.postMessage([first.value,second.value])` verwendet, um den Inhalt beider als Array an den Worker zu senden. Sie können fast alles in der Nachricht senden, was Sie möchten.

Im Worker können wir reagieren, wenn die Nachricht empfangen wird, indem wir einen Ereignishandlerblock wie diesen schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage`-Handler ermöglicht es uns, Code auszuführen, wann immer eine Nachricht empfangen wird, wobei die Nachricht selbst in dem `data`-Attribut des `message`-Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen miteinander und verwenden dann `postMessage()` erneut, um das Ergebnis zurück an den Haupt-Thread zu senden.

Zurück im Haupt-Thread verwenden wir erneut `onmessage`, um auf die Nachricht zu reagieren, die vom Worker zurückgesendet wurde:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier holen wir die Nachrichtendaten und setzen sie als `textContent` des Ergebnis-Absatzes, damit der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` am `Worker`-Objekt aufgehängt werden müssen, wenn sie im Hauptskript-Thread verwendet werden, aber nicht, wenn sie im Worker verwendet werden. Dies liegt daran, dass der Worker intern im Wesentlichen der globale Kontext ist.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Haupt-Thread und dem Worker übergeben wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Daten an Worker übertragen: weitere Details](#transferring_data_to_and_from_workers_further_details) für eine detailliertere Erklärung.

### Einen Worker beenden

Wenn Sie einen laufenden Worker vom Haupt-Thread aus sofort beenden müssen, können Sie dies tun, indem Sie die Methode [`terminate`](/de/docs/Web/API/Worker) des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn ein Laufzeitfehler im Worker auftritt, wird sein `onerror`-Ereignishandler aufgerufen. Dieser erhält ein Ereignis namens `error`, das die `ErrorEvent`-Schnittstelle implementiert.

Das Ereignis wird nicht gebubbelt und kann abgebrochen werden; um zu verhindern, dass die Standardaktion stattfindet, kann der Worker die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Fehlerereignisses aufrufen.

Das Fehlerereignis hat die folgenden drei interessanten Felder:

- `message`
  - : Eine menschenlesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, in der der Fehler aufgetreten ist.

### Subarbeiter erschaffen

Worker können bei Bedarf weitere Worker erzeugen. So genannte Subworker müssen innerhalb des gleichen Ursprungs wie die übergeordnete Seite gehostet werden. Außerdem werden die URIs für Subworker relativ zum Standort des übergeordneten Workers aufgelöst, anstatt zur besitzenden Seite. Dies erleichtert es Workern, den Überblick über ihre Abhängigkeiten zu behalten.

### Skripte und Bibliotheken importieren

Worker-Threads haben Zugriff auf eine globale Funktion, `importScripts()`, mit der sie Skripte importieren können. Sie akzeptiert null oder mehr URIs als Parameter für zu importierende Ressourcen; alle folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes aufgelistete Skript und führt es aus. Alle globalen Objekte aus jedem Skript können dann vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` ausgelöst, und nachfolgender Code wird nicht ausgeführt. Bereits ausgeführter Code (einschließlich mittels [`setTimeout()`](/de/docs/Web/API/SetTimeout) verzögerter Code) bleibt jedoch funktionsfähig. Funktionsdeklarationen **nach** der Methode `importScripts()` bleiben ebenfalls erhalten, da diese immer vor dem Rest des Codes ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der Sie die Dateinamen in `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` gibt nicht zurück, bis alle Skripte geladen und ausgeführt wurden.

## Gemeinsame Worker

Ein gemeinsamer Worker ist durch mehrere Skripte zugänglich — selbst wenn sie von verschiedenen Fenstern, iframes oder sogar Workern aus aufgerufen werden. In diesem Abschnitt besprechen wir das in unserem [Einfaches Beispiel für gemeinsam genutzte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([gemeinsam genutzten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)) gefundene JavaScript: Dies ist dem einfachen Beispiel für dedizierte Worker sehr ähnlich, außer dass es zwei Funktionen gibt, die von unterschiedlichen Skriptdateien verwaltet werden: _Zwei Zahlen multiplizieren_ oder _eine Zahl quadrieren_. Beide Skripte verwenden den gleichen Worker, um die erforderliche Berechnung durchzuführen.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und gemeinsam genutzten Workern. Beachten Sie, dass in diesem Beispiel zwei HTML-Seiten vorhanden sind, auf denen JavaScript angewendet wird, das die gleiche einzelne Worker-Datei verwendet.

> [!NOTE]
> Wenn SharedWorker aus mehreren Browser-Kontexten heraus zugänglich sein soll, müssen alle diese Browser-Kontexte denselben Ursprung (gleiches Protokoll, Host und Port) teilen.

> [!NOTE]
> In Firefox können gemeinsam genutzte Worker nicht zwischen Dokumenten geteilt werden, die in privaten und nicht-privaten Fenstern geladen sind ([Firefox Bug 1177621](https://bugzil.la/1177621)).

### Einen gemeinsamen Worker erstellen

Das Erstellen eines neuen gemeinsamen Workers ist fast identisch mit dem eines dedizierten Workers, jedoch mit einem anderen Konstruktor-Namen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) — jeder muss den Worker mit Code wie dem folgenden starten:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied besteht darin, dass bei einem gemeinsam genutzten Worker über ein `port`-Objekt kommuniziert werden muss — es wird explizit ein Port geöffnet, den die Skripte zur Kommunikation mit dem Worker verwenden können (dies geschieht implizit bei dedizierten Workern).

Die Portverbindung muss entweder implizit durch Verwendung des `onmessage`-Ereignishandlers oder explizit mit der Methode `start()` gestartet werden, bevor Nachrichten gesendet werden können. Das Aufrufen von `start()` ist nur erforderlich, wenn das `message`-Ereignis über die Methode `addEventListener()` verkabelt wird.

> [!NOTE]
> Wenn die `start()`-Methode zum Öffnen der Portverbindung verwendet wird, muss sie sowohl aus dem übergeordneten Thread als auch aus dem Worker-Thread aufgerufen werden, wenn eine bidirektionale Kommunikation erforderlich ist.

### Nachrichten an einen gemeinsam genutzten Worker senden und zurück

Jetzt können Nachrichten wie zuvor an den Worker gesendet werden, aber die `postMessage()`-Methode muss über das Portobjekt aufgerufen werden (erneut sehen Sie ähnliche Konstrukte sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js)):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Nun zum Worker. Da gibt es etwas mehr Komplexität ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

Zunächst verwenden wir einen `onconnect`-Handler, um Code auszulösen, wenn eine Verbindung zum Port erfolgt (d.h. wenn der `onmessage`-Ereignishandler im übergeordneten Thread eingerichtet wird, oder wenn im übergeordneten Thread explizit die Methode `start()` aufgerufen wird).

Wir verwenden das Attribut `ports` dieses Ereignisobjekts, um den Port zu greifen und ihn in einer Variablen zu speichern.

Als nächstes fügen wir einen `onmessage`-Handler am Port hinzu, um die Berechnung durchzuführen und das Ergebnis an den Haupt-Thread zurückzusenden. Das Einrichten dieses `onmessage`-Handlers im Worker-Thread öffnet ebenfalls die Portverbindung zurück zum übergeordneten Thread implizit, sodass der Aufruf von `port.start()` tatsächlich nicht erforderlich ist, wie oben erwähnt.

Schließlich behandeln wir im Hauptskript die Nachricht (erneut sehen Sie ähnliche Konstrukte sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js)):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht vom Worker durch den Port zurückkommt, fügen wir das Ergebnis der Berechnung in den entsprechenden Ergebnisabsatz ein.

## Über Threadsicherheit

Das [`Worker`](/de/docs/Web/API/Worker)-Interface erzeugt reale Betriebssystem-Threads, und sorgfältige Programmierer könnten sich Sorgen machen, dass die Nebenläufigkeit "interessante" Effekte in Ihrem Code hervorrufen kann, wenn Sie nicht vorsichtig sind.

Da Web Worker jedoch sorgfältig kontrollierte Kommunikationspunkte mit anderen Threads haben, ist es tatsächlich sehr schwer, Nebenläufigkeitsprobleme zu verursachen. Es gibt keinen Zugriff auf nicht-Thread-sichere Komponenten oder das DOM. Und Sie müssen spezifische Daten hinein und heraus aus einem Thread durch serialisierte Objekte übergeben. Sie müssen also wirklich hart arbeiten, um Probleme in Ihrem Code zu verursachen.

## Content-Sicherheitsrichtlinie

Worker werden als eigenständiger Ausführungskontext betrachtet, der sich vom Dokument unterscheidet, das sie erstellt hat. Aus diesem Grund unterliegen sie im Allgemeinen nicht der [Content-Sicherheitsrichtlinie](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder des übergeordneten Workers), das sie erstellt hat. Angenommen, ein Dokument wird mit dem folgenden Header bedient:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem wird dies verhindern, dass alle enthaltenen Skripte [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn das Skript jedoch einen Worker konstruiert, darf der im Worker-Kontext ausgeführte Code `eval()` verwenden.

Um eine Content-Sicherheitsrichtlinie für den Worker festzulegen, setzen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy)-Response-Header für die Anforderung, die das Worker-Skript selbst geliefert hat.

Die Ausnahme von dieser Regel ist, wenn der Ursprung des Worker-Skripts ein weltweit eindeutiger Bezeichner ist (zum Beispiel, wenn seine URL ein Schema von Daten oder Blob hat). In diesem Fall erbt der Worker die CSP des Dokuments oder Workers, das ihn erstellt hat.

## Daten an Worker übertragen: weitere Details

Die zwischen der Hauptseite und den Workern gesendeten Daten werden **kopiert**, nicht geteilt. Objekte werden serialisiert, wenn sie an den Worker übergeben werden, und nachfolgend auf der anderen Seite deserialisiert. Die Seite und der Worker **teilen nicht die gleiche Instanz**, das Endergebnis ist, dass **ein Duplikat** auf jeder Seite erstellt wird. Die meisten Browser implementieren dieses Feature als [strukturierte Klonierung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Um dies zu veranschaulichen, erstellen wir eine Funktion namens `emulateMessage()`, die das Verhalten eines Wertes simuliert, der während der Übertragung von einem `Worker` zur Hauptseite oder umgekehrt _kopiert und nicht geteilt_ wird:

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

Ein Wert, der kopiert und nicht geteilt wird, wird _Nachricht_ genannt. Wie Sie wahrscheinlich inzwischen wissen, können _Nachrichten_ mit `postMessage()` an und von dem Haupt-Thread gesendet werden, und das [`data`](/de/docs/Web/API/MessageEvent/data)-Attribut des `message`-Ereignisses enthält die vom Worker zurückgesandten Daten.

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

Der [strukturierte Klonierungs](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)-Algorithmus kann JSON und einige Dinge akzeptieren, die JSON nicht kann — wie z.B. zirkuläre Referenzen.

### Datenbeispiele übertragen

#### Beispiel 1: Erweitertes Übertragen von JSON-Daten und Erstellen eines Umschaltsystems

Wenn Sie komplexe Daten übergeben müssen und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammenfasst.

Zuerst erstellen wir eine `QueryableWorker`-Klasse, die die URL des Workers, einen Standard-Listener und einen Fehler-Handler annimmt, und diese Klasse wird eine Liste von Listenern verfolgen und uns helfen, mit dem Worker zu kommunizieren:

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

Hier lassen wir den Worker zwei einfache Operationen ausführen, um zu veranschaulichen: die Differenz von zwei Zahlen berechnen und nach drei Sekunden eine Warnung ausgeben. Um dies zu erreichen, implementieren wir zunächst eine `sendQuery`-Methode, die abfragt, ob der Worker tatsächlich die entsprechenden Methoden hat, um das zu tun, was wir wollen.

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

Wir beenden `QueryableWorker` mit der `onmessage`-Methode. Wenn der Worker die entsprechenden Methoden hat, die wir abgefragt haben, sollte er den Namen des entsprechenden Listeners und die benötigten Argumente zurückgeben, wir müssen ihn nur in `listeners` finden.:

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

Nun zum Worker. Zuerst müssen wir die Methoden haben, um die beiden einfachen Operationen zu bearbeiten:

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

Es ist möglich, den Inhalt jeder Hauptseite -> Worker und Worker -> Hauptseiten-Nachricht umzuschalten. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können alles sein, solange sie in `QueryableWorker` und dem `Worker` konsistent sind.

### Daten durch Übertragen des Eigentums (übertragbare Objekte) übergeben

Moderne Browser enthalten eine zusätzliche Methode, um bestimmte Arten von Objekten mit hoher Leistung zu oder von einem Worker zu übertragen. [Übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden mit einer Zero-Copy-Operation zwischen den Kontexten übertragen, was zu einer enormen Leistungsverbesserung beim Senden großer Datensätze führt.

Zum Beispiel, wenn Sie ein {{jsxref("ArrayBuffer")}} von Ihrer Haupt-App zu einem Worker-Skript übertragen, wird das ursprüngliche {{jsxref("ArrayBuffer")}} gelöscht und ist nicht mehr verwendbar. Sein Inhalt wird (im wahrsten Sinne des Wortes) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## Eingebettete Worker

Es gibt keinen "offiziellen" Weg, um den Code eines Workers innerhalb einer Webseite einzubetten, wie es {{HTMLElement("script")}}-Elemente für normale Skripte tun. Aber ein {{HTMLElement("script")}}-Element, das kein `src`-Attribut hat und ein `type`-Attribut hat, das keinen ausführbaren MIME-Typ identifiziert, kann als Datenblockelement betrachtet werden, den JavaScript verwenden könnte. "Datenblöcke" ist ein allgemeinmeres Feature von HTML, das fast beliebige Textdaten tragen kann. Ein Worker könnte also auf diese Weise eingebettet werden:

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

Es ist auch erwähnenswert, dass Sie auch eine Funktion in einen Blob umwandeln und dann eine Objekt-URL von diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele zur Verwendung von Web Workern.

### Berechnungen im Hintergrund ausführen

Worker sind hauptsächlich nützlich, um es Ihrem Code zu ermöglichen, prozessorintensive Berechnungen durchzuführen, ohne den Benutzeroberflächen-Thread zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code wird in der "fibonacci.js" Datei gespeichert, auf die im nächsten Abschnitt von HTML verwiesen wird.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfängt, die gesendet werden, wenn die `postMessage()` Methode des Worker-Objekts aufgerufen wird. Dies führt die mathematische Berechnung aus und gibt das Ergebnis schließlich an den Haupt-Thread zurück.

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

Die Webseite erstellt ein `<p>`-Element mit der ID `result`, das verwendet wird, um das Ergebnis anzuzeigen, dann startet sie den Worker. Nach dem Starten des Workers wird der `onmessage`-Handler konfiguriert, um die Ergebnisse anzuzeigen, indem der Inhalt des `<p>`-Elements gesetzt wird, und der `onerror`-Handler wird so gesetzt, dass die Fehlermeldung in der Entwicklerkonsole protokolliert wird.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Versuchen Sie dieses Beispiel live](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufgaben unter mehreren Workern aufteilen

Da Mehrkern-Computer immer häufiger werden, ist es oft nützlich, rechnerisch komplexe Aufgaben unter mehreren Workern zu verteilen, die diese Aufgaben dann auf mehreren Prozessorkernen durchführen können.

## Andere Arten von Workern

Zusätzlich zu dedizierten und gemeinsamen Web Workern gibt es andere Arten von Workern:

- [ServiceWorker](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (wenn verfügbar) sitzen. Sie sind dazu gedacht, unter anderem die Erstellung effektiver Offline-Erfahrungen zu ermöglichen, Netzwerk-Anfragen abzufangen und entsprechende Aktionen basierend darauf zu unternehmen, ob das Netzwerk verfügbar ist und aktualisierte Ressourcen auf dem Server vorhanden sind. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Background-Sync-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bietet die Möglichkeit, direktes skriptgesteuertes Audiobearbeitung in einem Worklet (eine leichte Version eines Workers) Kontext durchzuführen.

## Debuggen von Worker-Threads

Die meisten Browser ermöglichen Ihnen, Web Worker in ihren JavaScript-Debuggern _genauso_ wie den Haupt-Thread zu debuggen! Zum Beispiel listen sowohl Firefox als auch Chrome JavaScript-Quelldateien sowohl für den Haupt-Thread als auch für aktive Worker-Threads auf, und all diese Dateien können geöffnet werden, um Haltepunkte und Logpunkte zu setzen.

Um zu lernen, wie man Web Worker debuggt, siehe die Dokumentation für den JavaScript-Debugger jedes Browsers:

- [Chrome Sources-Panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

## Funktionen und Schnittstellen, die in Workern verfügbar sind

Sie können die meisten Standard-JavaScript-Funktionen innerhalb eines Web Workers verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}} und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/SetTimeout) und [`setInterval()`](/de/docs/Web/API/SetInterval)

Das Hauptsache, was Sie _nicht_ in einem Worker tun können, ist, die übergeordnete Seite direkt zu beeinflussen. Dazu gehört die Manipulation des DOMs und die Verwendung der Objekte dieser Seite. Sie müssen es indirekt tun, indem Sie eine Nachricht über [`DedicatedWorkerGlobalScope.postMessage`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) an das Hauptskript zurücksenden und dann die Änderungen im Ereignishandler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode für Worker verfügbar ist, indem Sie die Seite verwenden: <https://worker-playground.glitch.me/>. Zum Beispiel, wenn Sie [EventSource](/de/docs/Web/API/EventSource) auf der Seite auf Firefox 84 eingeben, werden Sie sehen, dass dies in Service Workern nicht unterstützt wird, wohl aber in dedizierten und gemeinsamen Workern.

> [!NOTE]
> Für eine vollständige Liste der Funktionen, die für Worker verfügbar sind, siehe [Funktionen und Schnittstellen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker) Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle
- [Funktionen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Schnittstelle
