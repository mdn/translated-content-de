---
title: Verwenden von Web Workers
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Web Workers API")}}

Web Workers sind eine einfache Möglichkeit, Webinhalte Skripte in Hintergrund-Threads ausführen zu lassen. Der Worker-Thread kann Aufgaben ausführen, ohne die Benutzeroberfläche zu beeinträchtigen. Darüber hinaus können sie Netzwerkanfragen mithilfe der [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) APIs vornehmen. Sobald ein Worker erstellt wurde, kann er Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen von diesem Code spezifizierten Ereignishandler sendet (und umgekehrt).

Dieser Artikel bietet eine ausführliche Einführung in die Verwendung von Web Workers.

## Web Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor (z.B. [`Worker()`](/de/docs/Web/API/Worker/Worker)) erstellt wurde, das eine benannte JavaScript-Datei ausführt — diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext als das aktuelle [`window`](/de/docs/Web/API/Window). Daher führt die Verwendung der [`window`](/de/docs/Web/API/Window)-Abkürzung, um den aktuellen globalen Kontext innerhalb eines [`Worker`](/de/docs/Web/API/Worker) zu erhalten, zu einem Fehler.

Der Worker-Kontext wird im Fall von dedizierten Workern (Standard-Worker, die von einem einzelnen Skript verwendet werden; geteilte Worker verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)) durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt dargestellt. Ein dedizierter Worker ist nur von dem Skript zugänglich, das ihn ursprünglich gestartet hat, während geteilte Worker von mehreren Skripten aus zugänglich sind.

> [!NOTE]
> Siehe [Die Web Workers API Startseite](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentationen zu Workern und zusätzliche Leitfäden.

Sie können beliebigen Code innerhalb des Worker-Threads ausführen, mit einigen Ausnahmen. Beispielsweise können Sie das DOM nicht direkt aus dem Worker manipulieren oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts verwenden. Sie können jedoch viele Elemente verwenden, die unter `window` verfügbar sind, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Datenspeichermethoden wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Weitere Details finden Sie unter [Funktionen und Klassen, die Arbeitern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

Daten werden zwischen Workern und dem Haupt-Thread über ein Nachrichtensystem gesendet — beide Seiten senden ihre Nachrichten mit der Methode `postMessage()` und reagieren auf Nachrichten über den `onmessage` Ereignishandler (die Nachricht befindet sich im Datenattribut des [`message`](/de/docs/Web/API/Worker/message_event)-Ereignisses). Die Daten werden kopiert, nicht geteilt.

Arbeiter können wiederum neue Arbeiter starten, solange diese Arbeiter innerhalb desselben {{Glossary("origin", "Ursprungs")}} wie die übergeordnete Seite gehostet werden.

Zusätzlich können Worker Netzwerkanfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) tätigen (obwohl zu beachten ist, dass das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur durch das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt werden wir den JavaScript-Code in unserem [Beispiel eines einfachen dedizierten Workers](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)) besprechen: Hier können Sie zwei Zahlen eingeben, die miteinander multipliziert werden. Die Zahlen werden an einen dedizierten Worker gesendet, dort miteinander multipliziert, und das Ergebnis wird auf der Seite angezeigt.

Dieses Beispiel ist eher trivial, aber wir haben uns entschieden, es einfach zu halten, während wir Ihnen grundlegende Worker-Konzepte vorstellen. Weitere Details werden später im Artikel behandelt.

### Worker-Funktionserkennung

Für eine etwas kontrolliertere Fehlerbehandlung und Rückwärtskompatibilität ist es eine gute Idee, Ihren Worker-Zugriffscode wie folgt zu umwickeln ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
if (window.Worker) {
  // …
}
```

### Starten eines dedizierten Workers

Einen neuen Worker zu erstellen, ist einfach. Alles, was Sie tun müssen, ist, den [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor aufzurufen und die URI eines Skripts anzugeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
const myWorker = new Worker("worker.js");
```

> [!NOTE]
> Paketierer, einschließlich [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, URLs zu übergeben, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) aufgelöst werden, an den `Worker()` Konstruktor. Zum Beispiel:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript anstatt zur aktuellen HTML-Seite, was es dem Paketierer ermöglicht, Optimierungen wie das Umbenennen sicher durchzuführen (weil ansonsten die `worker.js`-URL auf eine Datei zeigen könnte, die nicht vom Paketierer kontrolliert wird, sodass dieser keine Annahmen treffen kann).

### Nachrichten an einen dedizierten Worker senden und empfangen

Die Magie der Worker passiert über die Methode [`postMessage()`](/de/docs/Web/API/Worker/postMessage) und den Ereignishandler [`onmessage`](/de/docs/Web/API/Worker/message_event). Wenn Sie eine Nachricht an den Worker senden möchten, senden Sie Nachrichten an ihn wie folgt ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.port.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Hier haben wir zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` dargestellt werden; wenn sich der Wert eines dieser ändert, wird `myWorker.postMessage([first.value,second.value])` verwendet, um den Wert innerhalb beider als Array an den Worker zu senden. Sie können so ziemlich alles, was Sie möchten, in der Nachricht senden.

Im Worker können wir reagieren, wenn die Nachricht empfangen wird, indem wir einen Ereignishandler-Block wie folgt schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage`-Handler erlaubt es uns, Code auszuführen, wann immer eine Nachricht empfangen wird, wobei die Nachricht selbst im `data`-Attribut des `message`-Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen und verwenden erneut `postMessage()`, um das Ergebnis an den Haupt-Thread zurückzusenden.

Zurück im Haupt-Thread verwenden wir erneut `onmessage`, um auf die vom Worker zurückgesendete Nachricht zu reagieren:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier holen wir die Nachrichtendaten und setzen sie als `textContent` des Ergebnisabsatzes, sodass der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` beim Verwenden im Hauptskript-Thread am `Worker`-Objekt hängen müssen, jedoch nicht im Worker. Dies liegt daran, dass der Worker intern den globalen Rahmen darstellt.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Haupt-Thread und dem Worker übergeben wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Übertragen von Daten zu und von Workern: Weitere Details](#transferring_data_to_and_from_workers_further_details) für eine ausführlichere Erklärung.

### Beenden eines Workers

Wenn Sie einen laufenden Worker sofort aus dem Haupt-Thread beenden müssen, können Sie dies tun, indem Sie die Methode `terminate` des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn ein Laufzeitfehler im Worker auftritt, wird sein `onerror` Ereignishandler aufgerufen. Dieser empfängt ein Ereignis namens `error`, welches die `ErrorEvent`-Schnittstelle implementiert.

Das Ereignis blubbert nicht und ist abbrechbar; um die Standardaktion zu verhindern, kann der Worker die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Fehlerereignisses aufrufen.

Das Fehlerereignis hat die folgenden drei Felder von Interesse:

- `message`
  - : Eine menschenlesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, auf der der Fehler aufgetreten ist.

### Starten von Subworkern

Worker können bei Bedarf weitere Worker starten. Diese sogenannten Sub-Worker müssen innerhalb desselben Ursprungs wie die übergeordnete Seite gehostet werden. Auch die URIs für Subworker werden relativ zum Standort des übergeordneten Workers aufgelöst anstelle derjenigen der besitzenden Seite. Dies erleichtert es Workern, den Überblick über ihre Abhängigkeiten zu behalten.

### Importieren von Skripten und Bibliotheken

Worker-Threads haben Zugriff auf eine globale Funktion, `importScripts()`, die es ihnen ermöglicht, Skripte zu importieren. Sie akzeptiert null oder mehr URIs als Parameter zu importierenden Ressourcen; alle folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes aufgelistete Skript und führt es aus. Danach können alle globalen Objekte aus jedem Skript vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` ausgelöst, und nachfolgender Code wird nicht ausgeführt. Bereits ausgeführter Code (einschließlich Code, der mit [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) verzögert wurde) bleibt jedoch funktional. Funktionsdeklarationen **nach** der `importScripts()`-Methode werden ebenfalls beibehalten, da diese immer vor dem restlichen Code ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der die Dateinamen an `importScripts()` übergeben werden. Dies geschieht synchron; `importScripts()` kehrt erst zurück, wenn alle Skripte geladen und ausgeführt wurden.

## Geteilte Worker

Ein geteilter Worker ist von mehreren Skripten zugänglich — selbst wenn sie von verschiedenen Fenstern, iframes oder sogar Workern aufgerufen werden. In diesem Abschnitt werden wir den JavaScript-Code in unserem [Beispiel eines einfachen geteilten Workers](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)) besprechen: Dies ist dem einfachen dedizierten Worker-Beispiel sehr ähnlich, mit dem Unterschied, dass es zwei Funktionen gibt, die von verschiedenen Skriptdateien gehandhabt werden: _zwei Zahlen multiplizieren_ oder _eine Zahl quadrieren_. Beide Skripte verwenden denselben Worker, um die erforderliche Berechnung durchzuführen.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und geteilten Workern. Beachten Sie, dass in diesem Beispiel zwei HTML-Seiten vorhanden sind, von denen jede JavaScript verwendet, um dieselbe einzige Worker-Datei zu nutzen.

> [!NOTE]
> Wenn `SharedWorker` aus mehreren Browser-Kontexten aufgerufen werden kann, müssen all diese Browser-Kontexte den genau gleichen Ursprung (gleiches Protokoll, Host und Port) teilen.

> [!NOTE]
> In Firefox können geteilte Worker nicht zwischen Dokumenten geteilt werden, die in privaten und nicht privaten Fenstern geladen sind ([Firefox-Fehler 1177621](https://bugzil.la/1177621)).

### Starten eines geteilten Workers

Das Starten eines neuen geteilten Workers erfolgt fast genauso wie bei einem dedizierten Worker, jedoch mit einem anderen Konstruktor-Namen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) — jeder muss den Worker mit Code wie dem folgenden aufgerufen haben:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied ist, dass bei einem geteilten Worker die Kommunikation über ein `port`-Objekt erfolgen muss — ein expliziter Port wird geöffnet, den die Skripte zur Kommunikation mit dem Worker verwenden können (dies geschieht implizit bei dedizierten Workern).

Die Portverbindung muss entweder implizit durch die Verwendung des `onmessage` Ereignishandlers oder explizit mit der Methode `start()` gestartet werden, bevor Nachrichten gesendet werden können. Das Aufrufen von `start()` ist nur erforderlich, wenn das `message`-Ereignis über die Methode `addEventListener()` verdrahtet ist.

> [!NOTE]
> Wenn die `start()` Methode verwendet wird, um die Portverbindung zu öffnen, muss sie sowohl vom Haupt-Thread als auch vom Worker-Thread aufgerufen werden, wenn eine zweiseitige Kommunikation gewünscht ist.

### Nachrichten an einen geteilten Worker senden und empfangen

Nun können Nachrichten an den Worker wie zuvor gesendet werden, aber die Methode `postMessage()` muss über das `port`-Objekt aufgerufen werden (erneut werden Sie ähnliche Konstrukte in beiden [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) und [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Nun zum Worker. Auch hier gibt es etwas mehr Komplexität ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

Zuerst verwenden wir einen `onconnect`-Handler, um Code auszulösen, wenn eine Verbindung zum Port hergestellt wird (d.h. wenn der `onmessage`-Ereignishandler im übergeordneten Thread eingerichtet wird oder wenn die Methode `start()` explizit im übergeordneten Thread aufgerufen wird).

Wir verwenden das `ports`-Attribut dieses Ereignisobjekts, um den Port zu erfassen und in einer Variablen zu speichern.

Dann fügen wir einen `onmessage`-Handler am Port hinzu, um die Berechnung durchzuführen und das Ergebnis an den Haupt-Thread zurückzugeben. Das Einrichten dieses `onmessage`-Handlers im Worker-Thread öffnet die Portverbindung zurück zum übergeordneten Thread implizit, sodass der Aufruf von `port.start()` an dieser Stelle nicht wirklich erforderlich ist, wie oben angemerkt.

Schließlich behandeln wir im Hauptskript die Nachricht (erneut werden Sie ähnliche Konstrukte in beiden [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) und [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht durch den Port vom Worker zurückkommt, fügen wir das Berechnungsergebnis in den entsprechenden Ergebnisabsatz ein.

## Über Thread-Sicherheit

Das [`Worker`](/de/docs/Web/API/Worker)-Interface startet echte Betriebssystem-Threads, und programmierfreudige Entwickler könnten bedenken, dass Parallelität "interessante" Effekte in Ihrem Code verursachen kann, wenn Sie nicht vorsichtig sind.

Da Web Workers jedoch sorgfältig kontrollierte Kommunikationspunkte mit anderen Threads haben, ist es tatsächlich sehr schwer, Parallelitätsprobleme zu verursachen. Es gibt keinen Zugriff auf nicht-Thread-sichere Komponenten oder das DOM. Und Sie müssen spezifische Daten hinein- und herausgeben durch serialisierte Objekte. Sie müssen also wirklich hart arbeiten, um Probleme in Ihrem Code zu verursachen.

## Inhalts-Sicherheitsrichtlinien

Worker gelten als eigener Ausführungskontext, der sich von dem Dokument, das sie erstellt hat, unterscheidet. Aus diesem Grund unterliegen sie im Allgemeinen nicht den [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder Eltern-Workers), die sie erstellt hat. Wenn ein Dokument beispielsweise mit dem folgenden Header bereitgestellt wird:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem verhindert dies, dass Skripte, die es enthält, [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn das Skript jedoch einen Worker erstellt, darf Code, der im Kontext des Workers ausgeführt wird, `eval()` verwenden.

Um eine Inhalts-Sicherheitsrichtlinie für den Worker festzulegen, setzen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Antwortheader für die Anforderung, die das Workerskript selbst bereitgestellt hat.

Eine Ausnahme bildet, wenn der Ursprung des Workerskripts eine global eindeutige Kennung ist (zum Beispiel, wenn seine URL ein Schema von Daten oder Blob hat). In diesem Fall erbt der Worker die CSP des Dokuments oder Workers, die ihn erstellt hat.

## Datenübertragung zu und von Workern: Weitere Details

Daten, die zwischen der Hauptseite und Workern übergeben werden, werden **kopiert**, nicht geteilt. Objekte werden serialisiert, während sie an den Worker übergeben werden, und anschließend auf der anderen Seite deserialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, sodass letztlich **ein Duplikat** an jedem Ende erzeugt wird. Die meisten Browser implementieren diese Funktion als [strukturierte Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Um dies zu veranschaulichen, erstellen wir eine Funktion namens `emulateMessage()`, die das Verhalten eines Wertes simuliert, der _geklont und nicht geteilt_ wird, während er von einem `worker` zur Hauptseite oder umgekehrt übergeben wird:

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

Ein geklonter und nicht geteilter Wert wird als _Nachricht_ bezeichnet. Wie Sie jetzt wahrscheinlich wissen, können _Nachrichten_ an den Haupt-Thread und von ihm gesendet werden, indem `postMessage()` verwendet wird, und das `data`-Attribut des `message` Ereignisses enthält die Daten, die vom Worker zurückgesendet wurden.

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

Der [strukturierte Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kann JSON und einige Dinge akzeptieren, die JSON nicht kann — wie z.B. zirkuläre Referenzen.

### Beispiele für die Datenübertragung

#### Beispiel 1: Erweitertes Übergeben von JSON-Daten und Erstellen eines Umschaltsystems

Wenn Sie komplexe Daten übergeben und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammenfasst.

Zuerst erstellen wir eine `QueryableWorker`-Klasse, die die URL des Workers, einen Standard-Listener und einen Fehler-Handler übernimmt, und diese Klasse wird eine Liste von Listeners verfolgen und uns bei der Kommunikation mit dem Worker helfen:

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

Dann fügen wir die Methoden zum Hinzufügen/Entfernen von Listeners hinzu:

```js
this.addListeners = (name, listener) => {
  listeners[name] = listener;
};

this.removeListeners = (name) => {
  delete listeners[name];
};
```

Hier lassen wir den Worker zwei einfache Operationen zur Veranschaulichung durchführen: den Unterschied zweier Zahlen ermitteln und nach drei Sekunden einen Alarm auslösen. Um dies zu erreichen, implementieren wir zuerst eine `sendQuery`-Methode, die abfragt, ob der Worker tatsächlich die entsprechenden Methoden hat, um zu tun, was wir wollen.

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

Wir beenden `QueryableWorker` mit der `onmessage`-Methode. Wenn der Worker die entsprechenden Methoden hat, die wir abgefragt haben, sollte er den Namen des entsprechenden Listeners und die Argumente, die er benötigt, zurückgeben, wir müssen sie nur in `listeners` finden.:

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

### Daten durch Eigentumsübertragung übergeben (übertragbare Objekte)

Moderne Browser enthalten eine zusätzliche Möglichkeit, bestimmte Arten von Objekten mit hoher Leistung zu oder von einem Worker zu übergeben. [Übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden von einem Kontext in einen anderen mit einer Null-Kopier-Operation übertragen, was zu einer erheblichen Leistungssteigerung beim Senden großer Datensätze führt.

Wenn z.B. ein {{jsxref("ArrayBuffer")}} von Ihrer Hauptanwendung an ein Worker-Skript übertragen wird, wird der ursprüngliche {{jsxref("ArrayBuffer")}} gelöscht und ist nicht mehr verwendbar. Sein Inhalt wird (ganz wörtlich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## Eingebettete Worker

Es gibt keine "offizielle" Methode, um den Code eines Workers innerhalb einer Webseite einzubetten, wie {{HTMLElement("script")}}-Elemente dies für normale Skripte tun. Aber ein {{HTMLElement("script")}}-Element, das kein `src`-Attribut hat und ein `type`-Attribut besitzt, das keinen ausführbaren MIME-Typ identifiziert, kann als Datenblock-Element betrachtet werden, welches JavaScript verwenden könnte. "Datenblöcke" sind ein allgemeineres Feature von HTML, das fast beliebige Textdaten transportieren kann. Ein Worker könnte auf diese Weise eingebettet werden:

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

Es ist auch erwähnenswert, dass Sie auch eine Funktion in ein Blob konvertieren und dann eine Objekt-URL von diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele zur Verwendung von Web Workers.

### Berechnungen im Hintergrund durchführen

Worker sind hauptsächlich nützlich, um Ihrem Code zu ermöglichen, Prozessor-intensive Berechnungen auszuführen, ohne den Benutzeroberflächen-Thread zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code wird in der Datei "fibonacci.js" gespeichert, auf die in dem HTML-Code im nächsten Abschnitt Bezug genommen wird.

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

Der Worker stellt die Eigenschaft `onmessage` auf eine Funktion ein, welche Nachrichten empfängt, wenn die `postMessage()` des Worker-Objektes aufgerufen wird. Dies führt die Berechnung durch und gibt schließlich das Ergebnis an den Haupt-Thread zurück.

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

Die Webseite erstellt ein `<p>`-Element mit der ID `result`, das verwendet wird, um das Ergebnis anzuzeigen und dann den Worker zu starten. Nachdem der Worker gestartet wurde, wird der `onmessage`-Handler konfiguriert, um die Ergebnisse anzuzeigen, indem die Inhalte des `<p>`-Elementes gesetzt werden, und der `onerror`-Handler wird gesetzt, um die Fehlermeldung im Devtools-Konsolenprotokoll anzuzeigen.

Letztendlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Dieses Beispiel live ausprobieren](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufteilen von Aufgaben auf mehrere Worker

Da Mehrkern-Computer immer häufiger werden, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker aufzuteilen, die diese Aufgaben dann auf mehreren Prozessorkernen ausführen können.

## Andere Arten von Workern

Zusätzlich zu dedizierten und geteilten Web Workern gibt es andere Arten von Workern:

- [ServiceWorker](/de/docs/Web/API/Service_Worker_API) agieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen und dem Browser-Netzwerk (wenn verfügbar) sitzen. Sie sollen (u.a.) die Erstellung effektiver Offline-Erfahrungen ermöglichen, Netzwerkanfragen abfangen und geeignete Maßnahmen anhand der Verfügbarkeit des Netzwerks und aktualisierter Assets auf dem Server ergreifen. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrund-Synchronisierungs-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bietet die Möglichkeit, direktes skriptgesteuertes Audio-Processing in einem Worklet-Kontext (eine leichte Version eines Workers) durchzuführen.

## Debugging von Worker-Threads

Die meisten Browser ermöglichen es Ihnen, Web Workers in ihren JavaScript-Debuggern **genau so** zu debuggen, wie Sie den Haupt-Thread debuggen würden! Sowohl Firefox als auch Chrome listen JavaScript-Quelldateien sowohl für den Haupt-Thread als auch für aktive Worker-Threads auf, und all diese Dateien können geöffnet werden, um Haltepunkte und Protokollpunkte zu setzen.

Um zu lernen, wie man Web Workers debuggt, siehe die Dokumentation jedes Browsers JavaScript-Debugger:

- [Chrome Sources Panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

## Funktionen und Schnittstellen, die in Workern verfügbar sind

Sie können die meisten Standard-JavaScript-Funktionen innerhalb eines Web Workers nutzen, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptsächliche, was Sie _nicht_ in einem Worker tun können, ist den übergeordneten Seite direkt zu beeinflussen. Dazu gehört die Manipulation des DOM und die Verwendung der Objekte dieser Seite. Sie müssen es indirekt tun, indem Sie eine Nachricht über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) an das Hauptskript senden und dann die Änderungen im Ereignishandler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode für Worker verfügbar ist, indem Sie die Seite besuchen: <https://worker-playground.glitch.me/>. Wenn Sie dort beispielsweise [`EventSource`](/de/docs/Web/API/EventSource) auf Firefox 84 eingeben, sehen Sie, dass dies in Service Workern nicht unterstützt wird, wohl aber in dedizierten und geteilten Workern.

> [!NOTE]
> Für eine vollständige Liste der Funktionen, die Workern zur Verfügung stehen, siehe [Funktionen und Schnittstellen, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Schnittstelle
- [Funktionen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Schnittstelle
