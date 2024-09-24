---
title: Verwendung von Web Workern
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: efddce9305893217de7168b860c492dd3981e88f
---

{{DefaultAPISidebar("Web Workers API")}}

Web Worker sind ein einfaches Mittel, damit Webinhalte Skripte in Hintergrund-Threads ausführen können. Der Worker-Thread kann Aufgaben erledigen, ohne das Benutzerinterface zu beeinträchtigen. Außerdem können sie Netzwerkanfragen mit den APIs {{domxref("WorkerGlobalScope/fetch", "fetch()")}} oder {{domxref("XMLHttpRequest")}} durchführen. Sobald ein Worker erstellt ist, kann er Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen von diesem Code angegebenen Ereignis-Handler schickt (und umgekehrt).

Dieser Artikel bietet eine ausführliche Einführung in die Verwendung von Web Workern.

## Web Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor erstellt wird (z. B. {{domxref("Worker.Worker", "Worker()")}}), der eine benannte JavaScript-Datei ausführt – diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext, der sich vom aktuellen {{domxref("window")}} unterscheidet. Daher führt die Verwendung des {{domxref("window")}} Kurzwahlschalters, um den aktuellen globalen Gültigkeitsbereich innerhalb eines {{domxref("Worker")}} zu erhalten (anstatt {{domxref("window.self","self")}}), zu einem Fehler.

Der Worker-Kontext wird durch ein {{domxref("DedicatedWorkerGlobalScope")}}-Objekt im Fall von dedizierten Workern dargestellt (Standard-Worker, die von einem einzelnen Skript genutzt werden; Shared Worker verwenden {{domxref("SharedWorkerGlobalScope")}}). Ein dedizierter Worker ist nur von dem Skript zugänglich, das ihn ursprünglich gestartet hat, während Shared Worker von mehreren Skripten genutzt werden können.

> [!NOTE]
> Siehe die [Web Workers API Zielseite](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentationen zu Workern und weitere Anleitungen.

Sie können beliebigen Code im Worker-Thread ausführen, mit einigen Ausnahmen. Zum Beispiel können Sie nicht direkt das DOM von innerhalb eines Workers manipulieren oder einige Standardmethoden und -eigenschaften des {{domxref("window")}}-Objekts verwenden. Aber Sie können eine große Anzahl von Objekten, die unter `window` verfügbar sind, nutzen, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Datenhaltungssystemen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Siehe [Funktionen und Klassen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) für mehr Details.

Daten werden zwischen Workern und dem Haupt-Thread über ein System von Nachrichten ausgetauscht – beide Seiten senden ihre Nachrichten mit der `postMessage()`-Methode und antworten auf Nachrichten über den `onmessage` Ereignishandler (die Nachricht ist im Datenattribut des {{domxref("Worker/message_event", "message")}} Ereignisses enthalten). Die Daten werden kopiert anstatt geteilt.

Worker können wiederum neue Worker starten, solange diese innerhalb desselben {{glossary("origin")}} wie die Elternseite gehostet werden.

Darüber hinaus können Worker Netzwerkanfragen mit den APIs {{domxref("WorkerGlobalScope/fetch", "fetch()")}} oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen (obwohl zu beachten ist, dass das {{domxref("XMLHttpRequest.responseXML", "responseXML")}}-Attribut von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur durch das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt besprechen wir das JavaScript, das in unserem [Beispiel eines einfachen dedizierten Workers](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)) gefunden wird: Dies ermöglicht es Ihnen, zwei Zahlen einzugeben, die multipliziert werden sollen. Die Zahlen werden an einen dedizierten Worker gesendet, multipliziert und das Ergebnis wird an die Seite zurückgegeben und angezeigt.

Dieses Beispiel ist ziemlich trivial, aber wir haben uns entschieden, es einfach zu halten, während wir grundlegende Konzepte von Workern einführen. Fortgeschrittene Details werden später im Artikel behandelt.

### Funktionserkennung bei Workern

Für eine etwas kontrolliertere Fehlerbehandlung und Rückwärtskompatibilität ist es eine gute Idee, Ihren Worker-Zugriffscode folgendermaßen zu umschließen ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
if (window.Worker) {
  // …
}
```

### Starten eines dedizierten Workers

Einen neuen Worker zu erstellen ist einfach. Alles, was Sie tun müssen, ist den {{domxref("Worker.Worker", "Worker()")}}-Konstruktor aufzurufen und die URI eines Skripts anzugeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

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
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript anstatt zur aktuellen HTML-Seite, was dem Bundler ermöglicht, sicher Optimierungen wie Umbenennungen durchzuführen (da ansonsten die `worker.js`-URL auf eine Datei zeigen könnte, die nicht vom Bundler kontrolliert wird, und er daher keine Annahmen treffen kann).

### Senden von Nachrichten zu und von einem dedizierten Worker

Die Magie der Worker geschieht durch die Methode {{domxref("Worker.postMessage", "postMessage()")}} und den Ereignishandler {{domxref("Worker.message_event", "onmessage")}}. Wenn Sie eine Nachricht an den Worker senden möchten, senden Sie ihm Nachrichten wie folgt ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

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

Hier haben wir also zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` repräsentiert werden; wenn der Wert eines der beiden geändert wird, wird `myWorker.postMessage([first.value,second.value])` verwendet, um den Wert beider in den Worker zu senden, als Array. Sie können im Wesentlichen alles, was Sie möchten, in der Nachricht senden.

Im Worker können wir auf die Empfangsbereitschaft der Nachricht reagieren, indem wir einen Ereignishandlerblock wie diesen schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage`-Handler ermöglicht es uns, einige Codes auszuführen, wenn eine Nachricht empfangen wird, wobei die Nachricht selbst im `data`-Attribut des `message`-Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen miteinander und verwenden erneut `postMessage()`, um das Ergebnis an den Hauptthread zurückzusenden.

Zurück im Hauptthread verwenden wir wieder `onmessage`, um auf die Nachricht zu reagieren, die vom Worker zurückgesendet wurde:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier erfassen wir die Nachrichtendaten des Ereignisses und setzen sie als `textContent` des Ergebnisselements ein, sodass der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` vom `Worker`-Objekt in der Hauptskript-Thread verwendet werden müssen, aber nicht im Worker selbst. Dies liegt daran, dass der Worker in seiner Umgebung den globalen Gültigkeitsbereich effektiv darstellt.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Hauptthread und dem Worker ausgetauscht wird, wird sie kopiert oder „übertragen“ (verschoben) und nicht geteilt. Lesen Sie [Weiterführende Details zum Datentransfer zu und von Workern](#transferring_data_to_and_from_workers_further_details) für eine weitaus detailliertere Erklärung.

### Beenden eines Workers

Wenn Sie einen laufenden Worker sofort beenden müssen, können Sie dies vom Hauptthread aus tun, indem Sie die Methode {{domxref("Worker", "terminate")}} des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn ein Laufzeitfehler im Worker auftritt, wird sein `onerror`-Ereignishandler aufgerufen. Er erhält ein Ereignis namens `error`, das die `ErrorEvent` Schnittstelle implementiert.

Das Ereignis bubblet nicht und ist abbrechbar; um die Standardaktion zu verhindern, kann der Worker die `preventDefault()`-Methode des Fehlerereignisses aufrufen.

Das Fehlerereignis hat folgende drei Felder, die von Interesse sind:

- `message`
  - : Eine menschenlesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, in der der Fehler aufgetreten ist.

### Starten von Unter-Workern

Worker können weitere Worker starten, wenn sie es wünschen. Diese sogenannten Unter-Worker müssen innerhalb des gleichen Origins wie die Elternseite gehostet werden. Zudem werden die URIs für Unterworker relativ zum Speicherort des übergeordneten Workers aufgelöst anstatt zum Besitzer der Seite. Dies erleichtert es den Workern, ihre Abhängigkeiten im Auge zu behalten.

### Importieren von Skripten und Bibliotheken

Worker-Threads haben Zugriff auf eine globale Funktion, `importScripts()`, mit der sie Skripte importieren können. Sie akzeptiert null oder mehr URIs als Parameter zu Ressourcen, die importiert werden sollen; alle nachstehenden Beispiele sind gültig:

```js
importScripts(); /* importiert nichts */
importScripts("foo.js"); /* importiert nur "foo.js" */
importScripts("foo.js", "bar.js"); /* importiert zwei Skripte */
importScripts(
  "//example.com/hello.js",
); /* Sie können Skripts von anderen Ursprüngen importieren */
```

Der Browser lädt jedes aufgeführte Skript und führt es aus. Jegliche globalen Objekte aus jedem Skript können dann vom Worker genutzt werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` ausgelöst und nachfolgender Code wird nicht ausgeführt. Zuvor ausgeführter Code (einschließlich Code, der mit {{domxref("setTimeout()")}} verzögert wurde) bleibt jedoch funktional. Funktionsdeklarationen **nach** der `importScripts()`-Methode werden ebenfalls beibehalten, da diese immer vor dem Rest des Codes ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der Sie die Dateinamen in `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` gibt erst zurück, wenn alle Skripte heruntergeladen und ausgeführt wurden.

## Gemeinsame Worker

Ein gemeinsamer Worker ist von mehreren Skripten zugänglich – selbst wenn sie von verschiedenen Fenstern, Frames oder sogar Workern aufgerufen werden. In diesem Abschnitt besprechen wir das JavaScript, das in unserem [Beispiel eines einfachen gemeinsamen Workers](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) gefunden wird ([gemeinsamen Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)): Dies ist sehr ähnlich zum Beispiel des einfachen dedizierten Workers, außer dass es zwei verfügbare Funktionen gibt, die von verschiedenen Skriptdateien verarbeitet werden: _Multiplizieren von zwei Zahlen_ oder _Quadrieren einer Zahl_. Beide Skripte verwenden denselben Worker, um die benötigte Berechnung durchzuführen.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und gemeinsamen Workern. Beachten Sie, dass wir in diesem Beispiel zwei HTML-Seiten haben, jede mit JavaScript, das denselben einzigen Worker verwendet.

> [!NOTE]
> Wenn SharedWorker von mehreren Browsing-Kontexten aufgerufen werden kann, müssen all diese Browsing-Kontexte die exakt gleiche Herkunft teilen (dasselbe Protokoll, Host und Port).

> [!NOTE]
> In Firefox können gemeinsame Worker nicht zwischen Dokumenten geteilt werden, die in privaten und nicht-privaten Fenstern geladen werden ([Firefox-Bug 1177621](https://bugzil.la/1177621)).

### Starten eines gemeinsamen Workers

Das Starten eines neuen gemeinsamen Workers ist fast dasselbe wie bei einem dedizierten Worker, jedoch mit einem anderen Konstruktornamen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) – jeder muss den Worker mit einem Code wie dem folgenden starten:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied besteht darin, dass bei einem gemeinsamen Worker über ein `port`-Objekt kommuniziert werden muss – ein expliziter Port wird geöffnet, den die Skripte nutzen können, um mit dem Worker zu kommunizieren (dies geschieht implizit im Fall von dedizierten Workern).

Die Portverbindung muss entweder implizit durch den Gebrauch des `onmessage`-Ereignishandlers oder explizit mit der Methode `start()` gestartet werden, bevor Nachrichten versendet werden können. Der Aufruf von `start()` ist nur nötig, wenn das `message`-Ereignis über die Methode `addEventListener()` eingerichtet wird.

> [!NOTE]
> Wenn die `start()`-Methode verwendet wird, um die Portverbindung zu öffnen, muss sie sowohl vom Eltern-Thread als auch vom Worker-Thread aufgerufen werden, wenn eine zweiseitige Kommunikation erforderlich ist.

### Senden von Nachrichten zu und von einem gemeinsamen Worker

Nun können Nachrichten wie zuvor an den Worker gesendet werden, aber die `postMessage()`-Methode muss über das Port-Objekt aufgerufen werden (wiederum werden Sie ähnliche Konstrukte in sowohl [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) kennenlernen):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Nun zum Worker. Hier gibt es ebenfalls etwas mehr Komplexität ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

Zuerst verwenden wir einen `onconnect`-Handler, um Code auszuführen, wenn eine Verbindung zum Port entsteht (d.h., wenn der `onmessage`-Ereignishandler im Elternthread eingerichtet wird oder wenn die `start()`-Methode im Elternthread explizit aufgerufen wird).

Wir verwenden das `ports`-Attribut dieses Ereignis-Objekts, um den Port zu erfassen und in einer Variablen zu speichern.

Danach fügen wir einen `onmessage`-Handler am Port hinzu, um die Berechnung durchzuführen und das Ergebnis an den Hauptthread zurückzugeben. Das Einrichten dieses `onmessage`-Handlers im Worker-Thread öffnet die Portverbindung zurück zum Elternthread ebenfalls implizit, sodass der Aufruf von `port.start()` eigentlich nicht notwendig ist, wie oben festgestellt wurde.

Abschließend wird im Hauptskript die Nachricht behandelt (wiederum werden Sie ähnliche Konstrukte in sowohl [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht durch den Port vom Worker zurückkommt, fügen wir das Berechnungsergebnis in den entsprechenden Ergebnisabsatz ein.

## Über Threadsicherheit

Die {{domxref("Worker")}}-Schnittstelle erzeugt echte Betriebssystem-Threads, und umsichtige Programmierer könnten besorgt sein, dass nebenläufiger Code „interessante“ Effekte in Ihrem Code verursachen könnte, wenn Sie nicht vorsichtig sind.

Da Web Worker jedoch sorgfältig kontrollierte Kommunikationspunkte mit anderen Threads haben, ist es tatsächlich sehr schwer, Nebenläufigkeitsprobleme zu verursachen. Es gibt keinen Zugriff auf nicht threadsichere Komponenten oder das DOM. Und Sie müssen spezifische Daten in und aus einem Thread durch serialisierte Objekte passieren. Also müssen Sie sich wirklich anstrengen, um Probleme in Ihrem Code zu erzeugen.

## Content Security Policy

Worker haben einen eigenen Ausführungskontext, der sich vom Dokument, das sie erstellt hat, unterscheidet. Aus diesem Grund werden sie im Allgemeinen nicht von der [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder des Elter-Workers), das sie erstellt hat, geregelt. Angenommen, ein Dokument wird mit dem folgenden Header geliefert:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem wird dies verhindern, dass alle eingeschlossenen Skripte [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn das Skript jedoch einen Worker erstellt, ist es dem Code, der im Worker-Kontext läuft, erlaubt, `eval()` zu verwenden.

Um eine Content Security Policy für den Worker festzulegen, setzen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy) Antworten-Header für die Anfrage, die das Worker-Skript selbst liefert.

Die Ausnahme hiervon ist, wenn der Ursprung des Worker-Skripts ein global eindeutiger Bezeichner ist (zum Beispiel, wenn seine URL ein Schema von Data oder Blob hat). In diesem Fall erbt der Worker die CSP des Dokuments oder des Workers, das ihn erstellt hat.

## Weiterführende Details zum Datentransfer zu und von Workern

Zwischen der Hauptseite und Workern übertragene Daten werden **kopiert**, nicht geteilt. Objekte werden serialisiert, wenn sie an den Worker übergeben werden, und anschließend am anderen Ende deserialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, sodass am Ende **ein Duplikat** an jedem Ende erstellt wird. Die meisten Browser implementieren diese Funktion als [strukturierte Klonung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Um dies zu veranschaulichen, erstellen wir eine Funktion namens `emulateMessage()`, die das Verhalten eines Werts simuliert, der _geklont und nicht geteilt_ wird, während er von einem `Worker` zur Hauptseite oder umgekehrt übergeben wird:

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

Ein Wert, der geklont und nicht geteilt ist, wird _Nachricht_ genannt. Wie Sie wahrscheinlich mittlerweile wissen, können _Nachrichten_ mit `postMessage()` gesendet werden, und das `data`-Attribut des `message`-Ereignisses enthält Daten, die vom Worker zurückgesendet werden.

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

Der [strukturierte Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kann JSON und einige Dinge akzeptieren, die JSON nicht kann – wie zirkuläre Referenzen.

### Beispiele zum Datenübergang

#### Beispiel 1: Erweiterte JSON-Datenübergabe und Erstellen eines Umschaltsystems

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

Hier lassen wir den Worker zwei einfache Operationen zur Veranschaulichung ausführen: die Differenz von zwei Zahlen ermitteln und nach drei Sekunden einen Alert ausgeben. Um dies zu erreichen, implementieren wir zuerst eine `sendQuery`-Methode, die abfragt, ob der Worker tatsächlich die entsprechenden Methoden hat, um das zu tun, was wir wollen.

```js
// Diese Funktionen nimmt mindestens ein Argument, den Namen der Methode, die wir abfragen möchten.
// Dann können wir die Argumente übergeben, die die Methode benötigt.
this.sendQuery = (queryMethod, ...queryMethodArguments) => {
  if (!queryMethod) {
    throw new TypeError(
      "QueryableWorker.sendQuery nimmt mindestens ein Argument",
    );
  }
  worker.postMessage({
    queryMethod,
    queryMethodArguments,
  });
};
```

Wir beenden QueryableWorker mit der `onmessage`-Methode. Wenn der Worker über die entsprechenden Methoden verfügt, die wir abgefragt haben, sollte er den Namen des entsprechenden Listeners und die benötigten Argumente zurückgeben. Wir müssen ihn nur in `listeners` finden.

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

Nun zum Worker. Zuerst müssen wir die Methoden haben, um die zwei einfachen Operationen zu bearbeiten:

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
    throw new TypeError("reply - nimmt mindestens ein Argument");
  }
  postMessage({
    queryMethodListener,
    queryMethodArguments,
  });
}

/* Diese Methode wird aufgerufen, wenn die Hauptseite die Methode QueryWorker postMessage() direkt aufruft */
function defaultReply(message) {
  // mache etwas
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
    <title>MDN Example - Abfragbarer Worker</title>
    <script type="text/javascript">
      // Instanzmethoden von QueryableWorker:
      //   * sendQuery(abfragbare Funktionsname, zu übergebendes Argument 1, zu übergebendes Argument 2, usw.): ruft eine abfragbare Funktion des Workers auf
      //   * postMessage(String oder JSON-Daten): siehe Worker.prototype.postMessage()
      //   * terminate(): beendet den Worker
      //   * addListener(name, function): fügt einen Listener hinzu
      //   * removeListener(name): entfernt einen Listener
      // Eigenschaften der Instanz von QueryableWorker:
      //   * defaultListener: der Standardlistener, der nur ausgeführt wird, wenn der Worker die postMessage()-Funktion direkt aufruft
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

        // Diese Funktionen benötigt mindestens ein Argument, den Namen der Methode, die wir abfragen möchten.
        // Dann können wir die Argumente übergeben, die die Methode benötigt.
        this.sendQuery = (queryMethod, ...queryMethodArguments) => {
          if (!queryMethod) {
            throw new TypeError(
              "QueryableWorker.sendQuery nimmt mindestens ein Argument",
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

      // Ihr benutzerdefinierter "abfragbarer" Worker
      const myTask = new QueryableWorker("my_task.js");

      // Ihre benutzerdefinierten "Listener"
      myTask.addListener("printStuff", (result) => {
        document
          .getElementById("firstLink")
          .parentNode.appendChild(
            document.createTextNode(`Die Differenz ist ${result}!`),
          );
      });

      myTask.addListener("doAlert", (time, unit) => {
        alert(`Worker hat ${time} ${unit} gewartet :-)`);
      });
    </script>
  </head>
  <body>
    <ul>
      <li>
        <a
          id="firstLink"
          href="javascript:myTask.sendQuery('getDifference', 5, 3);"
          >Was ist die Differenz zwischen 5 und 3?</a
        >
      </li>
      <li>
        <a href="javascript:myTask.sendQuery('waitSomeTime');"
          >3 Sekunden warten</a
        >
      </li>
      <li>
        <a href="javascript:myTask.terminate();">den Worker beenden()</a>
      </li>
    </ul>
  </body>
</html>
```

**my_task.js** (der Worker):

```js
const queryableFunctions = {
  // Beispiel #1: die Differenz zwischen zwei Zahlen erhalten:
  getDifference(minuend, subtrahend) {
    reply("printStuff", minuend - subtrahend);
  },

  // Beispiel #2: drei Sekunden warten
  waitSomeTime() {
    setTimeout(() => {
      reply("doAlert", 3, "seconds");
    }, 3000);
  },
};

// Systemfunktionen

function defaultReply(message) {
  // Ihre standardmäßige ÖFFENTLICHE Funktion, die nur ausgeführt wird, wenn die Hauptseite die QueryWorker.postMessage()-Methode direkt aufruft
  // machen Sie etwas
}

function reply(queryMethodListener, ...queryMethodArguments) {
  if (!queryMethodListener) {
    throw new TypeError("reply - nicht genügend Argumente");
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

Es ist möglich, den Inhalt jeder Hauptseite -> Worker und Worker -> Hauptseiten-Nachricht zu wechseln. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können beliebig sein, solange sie in `QueryableWorker` und dem `Worker` konsistent sind.

### Daten durch Übertragung der Eigentümerschaft übergeben (übertragbare Objekte)

Moderne Browser enthalten eine zusätzliche Methode, um bestimmte Arten von Objekten zu oder von einem Worker mit hoher Leistung zu übergeben. [Übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden von einem Kontext zu einem anderen mit einem Null-Kopier-Vorgang übertragen, was zu einer erheblichen Leistungsverbesserung führt, wenn große Datensätze gesendet werden.

Beispielsweise wird beim Übertragen eines {{jsxref("ArrayBuffer")}} von Ihrer Hauptanwendung an ein Worker-Skript der ursprüngliche {{jsxref("ArrayBuffer")}} gelöscht und ist nicht mehr nutzbar. Sein Inhalt wird (im wahrsten Sinne des Wortes) in den Worker-Kontext übertragen.

```js
// Erstellen Sie eine 32MB große "Datei" und füllen Sie sie mit aufeinander folgenden Werten von 0 bis 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## Eingebettete Worker

Es gibt keine „offizielle“ Methode, um den Code eines Workers innerhalb einer Webseite einzubetten, wie {{HTMLElement("script")}}-Elemente es für normale Skripte tun. Aber ein {{HTMLElement("script")}}-Element, das kein `src`-Attribut hat und ein `type`-Attribut hat, das keinen ausführbaren MIME-Typ identifiziert, kann als ein Datenblock-Element angesehen werden, das JavaScript verwenden könnte. „Datenblöcke“ sind eine allgemeinere Funktion von HTML, die fast alle Textdaten tragen kann. Ein Worker könnte so eingebettet werden:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>MDN Beispiel - Eingebetteter Worker</title>
    <script type="text/js-worker">
      // Dieses Skript wird NICHT von JS-Engines geparst, da sein MIME-Typ text/js-worker ist.
      const myVar = 'Hallo Welt!';
      // Der Rest Ihres Worker-Codes geht hier.
    </script>
    <script>
      // Dieses Skript WIRD von JS-Engines geparst, da sein MIME-Typ text/javascript ist.
      function pageLog(sMsg) {
        // Verwenden Sie ein Fragment: der Browser rendert/neu layoutet nur einmal.
        const frag = document.createDocumentFragment();
        frag.appendChild(document.createTextNode(sMsg));
        frag.appendChild(document.createElement("br"));
        document.querySelector("#logDisplay").appendChild(frag);
      }
    </script>
    <script type="text/js-worker">
      // Dieses Skript wird NICHT von JS-Engines geparst, da sein MIME-Typ text/js-worker ist.
      onmessage = (event) => {
        postMessage(myVar);
      };
      // Der Rest Ihres Worker-Codes geht hier.
    </script>
    <script>
      // Dieses Skript WIRD von JS-Engines geparst, da sein MIME-Typ text/javascript ist.

      // In der Vergangenheit existierte ein Blob-Builder, aber jetzt verwenden wir Blob
      const blob = new Blob(
        Array.prototype.map.call(
          document.querySelectorAll("script[type='text\/js-worker']"),
          (script) => script.textContent,
        ),
        { type: "text/javascript" },
      );

      // Erstellen einer neuen document.worker-Eigenschaft, die alle unsere "text/js-worker"-Skripts enthält.
      document.worker = new Worker(window.URL.createObjectURL(blob));

      document.worker.onmessage = (event) => {
        pageLog(`Empfangen: ${event.data}`);
      };

      // Starten Sie den Worker.
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

Der eingebettete Worker ist jetzt in eine neue benutzerdefinierte `document.worker`-Eigenschaft verschachtelt.

Es ist ebenfalls erwähnenswert, dass Sie auch eine Funktion in einen Blob umwandeln und dann eine Objekt-URL aus diesem Blob erzeugen können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele zur Verwendung von Web Workern.

### Berechnungen im Hintergrund durchführen

Worker sind vor allem nützlich, um Ihrem Code zu ermöglichen, CPU-intensive Berechnungen durchzuführen, ohne den Benutzeroberflächen-Thread zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code wird in der Datei "fibonacci.js" gespeichert, auf die im nächsten Abschnitt im HTML Bezug genommen wird.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfängt, wenn die `postMessage()`-Methode des Worker-Objektes aufgerufen wird. Dies führt die Mathematik aus und gibt letztendlich das Ergebnis an den Hauptthread zurück.

#### Der HTML-Code

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Fibonacci Zahlengenerator</title>
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
          >Geben Sie eine Zahl ein, die eine null-basierte Indexposition in der Fibonacci-Sequenz ist, um zu sehen, welche Zahl sich an dieser Position befindet. Zum Beispiel geben Sie 6 ein und Sie erhalten ein Ergebnis von 8 – die Fibonacci-Zahl an Indexposition 6 ist 8.</label
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
        console.log(`Empfangen: ${event.data}`);
      };

      worker.onerror = (error) => {
        console.log(`Worker-Fehler: ${error.message}`);
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

Die Webseite erstellt ein `<p>`-Element mit der ID `result`, das verwendet wird, um das Ergebnis anzuzeigen, und dann den Worker startet. Nach dem Starten des Workers wird der `onmessage`-Handler konfiguriert, um die Ergebnisse durch Setzen des Inhalts des `<p>`-Elements anzuzeigen, und der `onerror`-Handler wird so eingestellt, dass die Fehlermeldung in der Entwicklertools-Konsole protokolliert wird.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Versuchen Sie dieses Beispiel live](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufgaben unter mehreren Workern aufteilen

Da Multicore-Computer immer gängiger werden, ist es oft nützlich, rechnerisch komplexe Aufgaben unter mehreren Workern aufzuteilen, die diese Aufgaben dann auf mehreren Prozessorkernen ausführen können.

## Andere Arten von Workern

Neben dedizierten und gemeinsamen Web Workern stehen andere Arten von Workern zur Verfügung:

- [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die sich zwischen Web-Anwendungen und dem Browser und Netzwerk (wo verfügbar) befinden. Sie sind beabsichtigt, um (unter anderem) die Erstellung effektiver Offline-Erfahrungen zu ermöglichen, indem sie Netzwerk-Anfragen abfangen und geeignete Maßnahmen ergreifen, basierend darauf, ob das Netzwerk verfügbar ist und aktualisierte Assets auf dem Server vorhanden sind. Sie ermöglichen auch den Zugang zu Push-Benachrichtigungen und Hintergrund-Synchronisierungs-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bieten die Möglichkeit, dass direkt geskriptete Audioverarbeitung in einem Worklet (eine leichte Version von Worker) Kontext durchgeführt wird.

## Debuggen von Worker-Threads

Die meisten Browser ermöglichen es Ihnen, Web Worker in ihren JavaScript-Debuggern _genau auf dieselbe Weise_ zu debuggen wie den Hauptthread! Zum Beispiel listen sowohl Firefox als auch Chrome JavaScript-Quelldateien sowohl für den Hauptthread als auch für aktive Worker-Threads auf, und alle diese Dateien können geöffnet werden, um Haltepunkte und Logpoints festzulegen.

Um zu lernen, wie man Web Worker debuggt, sehen Sie in der Dokumentation für jeden Browser-Debugger nach:

- [Chrome Sources-Panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

## Funktionen und Schnittstellen, die in Workern verfügbar sind

Sie können die meisten Standard-JavaScript-Funktionen innerhalb eines Web Workers verwenden, einschließlich:

- {{domxref("Navigator")}}
- {{domxref("WorkerGlobalScope/fetch", "fetch()")}}
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}} und {{jsxref("Global_Objects/String", "String")}}
- {{domxref("setTimeout()")}} und {{domxref("setInterval()")}}

Das Hauptsächliche, das Sie _nicht_ in einem Worker tun können, ist, die Elternseite direkt zu beeinflussen. Dies schließt die Manipulation des DOM und die Verwendung von Objekten dieser Seite ein. Sie müssen es indirekt machen, indem Sie eine Nachricht über {{domxref("DedicatedWorkerGlobalScope.postMessage")}} an das Hauptskript zurücksenden und dann die Änderungen im Ereignishandler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode den Workern zur Verfügung steht, indem Sie die Seite: <https://worker-playground.glitch.me/> nutzen. Zum Beispiel, wenn Sie [EventSource](/de/docs/Web/API/EventSource) in die Seite in Firefox 84 eingeben, werden Sie sehen, dass dies in Service Workern nicht unterstützt wird, wohl aber in dedizierten und gemeinsamen Workern.

> [!NOTE]
> Für eine vollständige Liste der Funktionen, die in Workern verfügbar sind, siehe [Funktionen und Schnittstellen, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker) Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle
- [Funktionen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Schnittstelle
