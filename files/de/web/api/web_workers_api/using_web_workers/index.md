---
title: Verwendung von Web Workers
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: efddce9305893217de7168b860c492dd3981e88f
---

{{DefaultAPISidebar("Web Workers API")}}

Web Workers sind ein einfacher Weg, um Webinhalte in Hintergrund-Threads auszuführen. Der Worker-Thread kann Aufgaben erledigen, ohne die Benutzeroberfläche zu stören. Zusätzlich können sie Netzwerkanfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen. Ein einmal erstellter Worker kann Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen von diesem Code spezifizierten Ereignishandler postet (und umgekehrt).

Dieser Artikel bietet eine detaillierte Einführung in die Verwendung von Web Workers.

## Web Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor (z.B. [`Worker()`](/de/docs/Web/API/Worker/Worker)) erstellt wird und eine benannte JavaScript-Datei ausführt — diese Datei enthält den Code, der im Worker-Thread laufen wird; Workers laufen in einem anderen globalen Kontext, der sich von dem aktuellen [`window`](/de/docs/Web/API/Window) unterscheidet. Daher führt die Verwendung von [`window`](/de/docs/Web/API/Window) als Abkürzung, um den aktuellen globalen Gültigkeitsbereich innerhalb eines [`Worker`](/de/docs/Web/API/Worker) zu erreichen, zu einem Fehler.

Der Worker-Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt im Fall von dedizierten Workern repräsentiert (Standard-Worker, die von einem einzelnen Skript genutzt werden; geteilte Worker verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)). Ein dedizierter Worker ist nur von dem Skript aus zugänglich, das ihn zuerst erzeugt hat, während auf geteilte Worker von mehreren Skripten aus zugegriffen werden kann.

> [!NOTE]
> Siehe [Die Web Workers API-Übersichtsseite](/de/docs/Web/API/Web_Workers_API) für Dokumentationen zu Workern und weitere Leitfäden.

Sie können beliebigen Code innerhalb des Worker-Threads ausführen, mit einigen Ausnahmen. Beispielsweise können Sie das DOM nicht direkt von innerhalb eines Workers manipulieren oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window) Objekts verwenden. Aber Sie können eine Vielzahl von Elementen, die unter `window` verfügbar sind, nutzen, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Datenspeichermechanismen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Weitere Details finden Sie unter [Funktionen und Klassen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

Daten werden über ein Nachrichtensystem zwischen Workern und dem Hauptthread gesendet — beide Seiten senden ihre Nachrichten mit der `postMessage()`-Methode und reagieren auf Nachrichten über den `onmessage`-Ereignishandler (die Nachricht ist im Datenattribut des [`message`](/de/docs/Web/API/Worker/message_event) Ereignisses enthalten). Die Daten werden kopiert und nicht geteilt.

Worker können ihrerseits neue Worker erzeugen, solange diese Worker innerhalb desselben {{Glossary("origin", "origin")}} wie die übergeordnete Seite gehostet werden.

Zusätzlich können Worker Netzwerkanfragen verwenden mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen (beachten Sie jedoch, dass das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur für das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt besprechen wir das JavaScript, das in unserem [einfachen dedizierten Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) gefunden wird ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)): Dies ermöglicht es, zwei Zahlen einzugeben, die miteinander multipliziert werden sollen. Die Zahlen werden an einen dedizierten Worker gesendet, miteinander multipliziert und das Ergebnis wird an die Seite zurückgegeben und angezeigt.

Dieses Beispiel ist ziemlich trivial, aber wir haben uns entschieden, es einfach zu halten, während wir Sie in grundlegende Worker-Konzepte einführen. Fortgeschrittenere Details werden später im Artikel behandelt.

### Worker-Funktionsprüfung

Für eine etwas kontrolliertere Fehlerbehandlung und Rückwärtskompatibilität ist es eine gute Idee, Ihren Worker-Zugriffscode in das folgende ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)) einzubetten:

```js
if (window.Worker) {
  // …
}
```

### Starten eines dedizierten Workers

Das Erstellen eines neuen Workers ist einfach. Sie müssen lediglich den [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor aufrufen und die URI eines Skripts angeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
const myWorker = new Worker("worker.js");
```

> [!NOTE]
> Paket-Bundler wie [Webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vitejs.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers) empfehlen, URLs, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) aufgelöst werden, an den `Worker()`-Konstruktor zu übergeben. Zum Beispiel:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript anstatt zur aktuellen HTML-Seite, was es dem Bundler ermöglicht, sicher Optimierungen wie das Umbenennen vorzunehmen (denn andernfalls könnte die `worker.js`-URL auf eine Datei verweisen, die nicht vom Bundler kontrolliert wird, daher kann er keine Annahmen treffen).

### Nachrichten von und an einen dedizierten Worker senden

Die Magie der Worker erfolgt über die [`postMessage()`](/de/docs/Web/API/Worker/postMessage)-Methode und den [`onmessage`](/de/docs/Web/API/Worker/message_event)-Ereignishandler. Wenn Sie eine Nachricht an den Worker senden möchten, posten Sie wie folgt Nachrichten an diesen ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

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

Hier haben wir zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` dargestellt sind; wenn der Wert eines der beiden geändert wird, wird `myWorker.postMessage([first.value,second.value])` verwendet, um den Wert in beiden als Array an den Worker zu senden. Sie können fast alles, was Sie möchten, in der Nachricht senden.

Im Worker können wir reagieren, wenn die Nachricht empfangen wird, indem wir einen Ereignishandler-Block wie diesen schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage`-Handler erlaubt es uns, Code auszuführen, wenn eine Nachricht empfangen wird, wobei die Nachricht selbst im Datenattribut des `message`-Ereignisses verfügbar ist. Hier multiplizieren wir die zwei Zahlen miteinander und verwenden `postMessage()` erneut, um das Ergebnis zurück an den Hauptthread zu senden.

Zurück im Hauptthread verwenden wir `onmessage` erneut, um auf die Nachricht zu reagieren, die vom Worker zurückgeschickt wurde:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier greifen wir auf die Ereignisdaten der Nachricht zu und setzen sie als `textContent` des Ergebnisses-Absatzes, damit der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` an das `Worker`-Objekt angehängt werden müssen, wenn sie im Hauptskript-Thread verwendet werden, jedoch nicht, wenn sie im Worker verwendet werden. Das liegt daran, dass der Worker innerhalb des Workers effektiv der globale Gültigkeitsbereich ist.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Hauptthread und dem Worker übergeben wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Übertragen von Daten zu und von Workern: weitere Details](#transferring_data_to_and_from_workers_further_details) für eine weitaus gründlichere Erklärung.

### Arbeiter beenden

Wenn Sie einen laufenden Worker sofort vom Hauptthread aus beenden müssen, können Sie dies tun, indem Sie die `terminate`-Methode des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn ein Laufzeitfehler im Worker auftritt, wird dessen `onerror`-Ereignishandler aufgerufen. Er erhält ein Ereignis namens `error`, das die `ErrorEvent`-Schnittstelle implementiert.

Das Ereignis blubbert nicht und kann abgebrochen werden; um zu verhindern, dass die Standardaktion stattfindet, kann der Worker die `preventDefault()`-Methode des Fehlerereignisses aufrufen.

Das Fehlerereignis hat die folgenden drei Felder, die von Interesse sind:

- `message`
  - : Eine menschenlesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer in der Skriptdatei, auf der der Fehler aufgetreten ist.

### Subworker starten

Worker können weitere Worker starten, wenn sie dies wünschen. So genannte Subworker müssen im gleichen Ursprung wie die übergeordnete Seite gehostet werden. Außerdem werden die URIs für die Subworker relativ zum Standort des übergeordneten Workers und nicht zur besitzenden Seite aufgelöst. Dies erleichtert es den Workern, den Überblick über ihre Abhängigkeiten zu behalten.

### Skripte und Bibliotheken importieren

Worker-Threads haben Zugang zu einer globalen Funktion, `importScripts()`, die es ihnen ermöglicht, Skripte zu importieren. Sie akzeptiert null oder mehr URIs als Parameter zu Ressourcen, die importiert werden sollen; alle folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes aufgelistete Skript und führt es aus. Jedes globale Objekt aus jedem Skript kann dann vom Worker genutzt werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` ausgelöst, und nachfolgender Code wird nicht ausgeführt. Bereist ausgeführter Code (einschließlich mit [`setTimeout()`](/de/docs/Web/API/SetTimeout) verzögerter Code) bleibt jedoch funktional. Funktionsdeklarationen **nach** der `importScripts()`-Methode bleiben ebenfalls erhalten, da diese immer vor dem Rest des Codes ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der Sie die Dateinamen in `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` gibt erst zurück, wenn alle Skripte geladen und ausgeführt wurden.

## Geteilte Worker

Ein geteilter Worker ist für mehrere Skripte zugänglich — selbst wenn sie von verschiedenen Fenstern, iframes oder sogar Workern aufgerufen werden. In diesem Abschnitt besprechen wir das JavaScript, das in unserem [einfachen geteilten Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) gefunden wird ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)): Dies ist dem grundlegenden dedizierten Worker-Beispiel sehr ähnlich, außer dass es zwei verfügbare Funktionen gibt, die von verschiedenen Skriptdateien gehandhabt werden: _Multiplizieren von zwei Zahlen_ oder _Quadrieren einer Zahl_. Beide Skripte verwenden denselben Worker, um die erforderliche Berechnung durchzuführen.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und geteilten Workern. Beachten Sie, dass wir in diesem Beispiel zwei HTML-Seiten haben, jeweils mit JavaScript, das denselben einzelnen Worker verwendet.

> [!NOTE]
> Wenn SharedWorker von mehreren Browsing-Kontexten aus zugänglich sein muss, müssen alle diese Browsing-Kontexte denselben Ursprung (gleiches Protokoll, Host und Port) teilen.

> [!NOTE]
> Im Firefox können geteilte Worker nicht zwischen Dokumenten geteilt werden, die in privaten und nicht privaten Fenstern geladen sind ([Firefox-Bug 1177621](https://bugzil.la/1177621)).

### Einen geteilten Worker starten

Das Starten eines neuen geteilten Workers ist ähnlich wie mit einem dedizierten Worker, jedoch mit einem anderen Konstruktor-Namen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) — jeder muss den Worker mit einem Code wie dem folgenden in Betrieb nehmen:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied ist, dass Sie bei einem geteilten Worker über ein `port`-Objekt kommunizieren müssen — es wird explizit ein Port geöffnet, über den die Skripte mit dem Worker kommunizieren können (bei dedizierten Workern erfolgt dies implizit).

Die Portverbindung muss entweder implizit durch Verwendung des `onmessage`-Ereignishandlers oder explizit mit der `start()`-Methode gestartet werden, bevor Nachrichten gepostet werden können. Ein Aufruf von `start()` ist nur erforderlich, wenn das `message`-Ereignis über die `addEventListener()`-Methode verdrahtet ist.

> [!NOTE]
> Wenn die `start()`-Methode verwendet wird, um die Portverbindung zu öffnen, muss sie sowohl im übergeordneten Thread als auch im Worker-Thread aufgerufen werden, wenn eine bidirektionale Kommunikation erforderlich ist.

### Nachrichten von und an einen geteilten Worker senden

Jetzt können Nachrichten an den Worker wie zuvor gesendet werden, aber die `postMessage()`-Methode muss über das `port`-Objekt aufgerufen werden (wiederum werden Sie ähnliche Konstrukte in sowohl [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

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

Zuerst verwenden wir einen `onconnect`-Handler, um Code auszulösen, wenn eine Verbindung zum Port erfolgt (d.h. wenn der `onmessage`-Ereignishandler im übergeordneten Thread eingerichtet wird oder wenn die `start()`-Methode explizit im übergeordneten Thread aufgerufen wird).

Wir verwenden das `ports`-Attribut dieses Ereignisobjekts, um den Port zu greifen und in einer Variablen zu speichern.

Als nächstes fügen wir einen `onmessage`-Handler auf dem Port hinzu, um die Berechnung durchzuführen und das Ergebnis an den Hauptthread zurückzugeben. Das Einrichten dieses `onmessage`-Handlers im Worker-Thread öffnet auch implizit die Portverbindung zurück zum übergeordneten Thread, daher ist der Aufruf von `port.start()` tatsächlich nicht erforderlich, wie oben angemerkt.

Schließlich behandeln wir im Hauptskript die Nachricht (wiederum werden Sie ähnliche Konstrukte in sowohl [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht durch den Port vom Worker zurückkommt, setzen wir das Berechnungsergebnis in den entsprechenden Ergebnis-Paragraphen.

## Über Thread-Sicherheit

Die Schnittstelle [`Worker`](/de/docs/Web/API/Worker) erzeugt echte OS-Level-Threads, und gewissenhafte Programmierer könnten besorgt sein, dass Konkurrenz "interessante" Effekte in Ihrem Code verursachen kann, wenn Sie nicht vorsichtig sind.

Da Web Workers jedoch sorgfältig kontrollierte Kommunikationspunkte mit anderen Threads haben, ist es tatsächlich sehr schwer, Konkurrenzprobleme zu verursachen. Es gibt keinen Zugang zu nicht-thread-sicheren Komponenten oder dem DOM. Und Sie müssen spezifische Daten in einen und aus einem Thread durch serialisierte Objekte durchgeben. Man muss sich wirklich anstrengen, um Probleme im Code zu verursachen.

## Content Security Policy

Worker haben ihren eigenen Ausführungskontext, der sich von dem des Dokuments unterscheidet, das sie erstellt hat. Aus diesem Grund unterliegen sie im Allgemeinen nicht der [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder des übergeordneten Workers), das sie erstellt hat. Angenommen, ein Dokument wird mit dem folgenden Header ausgeliefert:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem wird dies jedes Skript daran hindern, [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) zu verwenden. Wenn das Skript jedoch einen Worker konstruiert, _wird_ es im Worker-Kontext erlaubt sein, `eval()` zu verwenden.

Um eine Content Security Policy für den Worker zu spezifizieren, setzen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy)-Antwort-Header für die Anforderung, die das Worker-Skript selbst ausgeliefert hat.

Die Ausnahme hiervon ist, wenn der Ursprung des Worker-Skripts eine global eindeutige Kennung ist (zum Beispiel, wenn die URL ein schema von data oder blob hat). In diesem Fall erbt der Worker die CSP des Dokuments oder Workers, der ihn erstellt hat.

## Übertragen von Daten zu und von Workern: weitere Details

Daten, die zwischen der Hauptseite und den Workern übergeben werden, werden **kopiert**, nicht geteilt. Objekte werden serialisiert, wenn sie dem Worker übergeben werden, und anschließend auf der anderen Seite de-serialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, sodass das Endergebnis ist, dass **eine Kopie** auf jeder Seite erstellt wird. Die meisten Browser implementieren dieses Feature als [strukturierte Klonierung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Um dies zu veranschaulichen, erstellen wir eine Funktion namens `emulateMessage()`, die das Verhalten eines Wertes simuliert, der _während des Wechsels von einem `worker` zur Hauptseite oder umgekehrt kopiert und nicht geteilt_ wird:

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

Ein Wert, der kopiert und nicht geteilt wird, wird als _message_ bezeichnet. Sie werden wahrscheinlich mittlerweile wissen, dass _messages_ mit Hilfe von `postMessage()` an und von den Hauptthread gesendet werden können, und das `data`-Attribut des `message`-Ereignisses enthält die Daten, die vom Worker zurückgegeben werden.

**example.html** (die Hauptseite):

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

Der [strukturierte Klonierungs-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kann JSON und einige Dinge akzeptieren, die JSON nicht kann — wie z.B. zirkuläre Referenzen.

### Beispiele zum Übertragen von Daten

#### Beispiel 1: Fortgeschrittenes Übertragen von JSON-Daten und Erstellen eines Umschaltsystems

Wenn Sie komplexe Daten übertragen müssen und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammenfasst.

Zuerst erstellen wir eine `QueryableWorker`-Klasse, die die URL des Workers, einen Standardlistener und einen Fehlerhandler übernimmt. Diese Klasse wird eine Liste von Listeners verfolgen und uns bei der Kommunikation mit dem Worker helfen:

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

Hier lassen wir den Worker für die Veranschaulichung zwei einfache Operationen behandeln: die Differenz von zwei Zahlen berechnen und eine Benachrichtigung nach drei Sekunden auslösen. Um das zu erreichen, implementieren wir zuerst eine `sendQuery`-Methode, die überprüft, ob der Worker tatsächlich die entsprechenden Methoden hat, um das zu tun, was wir wollen.

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

Nun zum Worker. Zuerst müssen wir die Methoden haben, um die zwei einfachen Operationen zu behandeln:

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

Es ist möglich, den Inhalt jeder Hauptseite -> Worker und Worker -> Hauptseite Nachricht zu wechseln. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können alles sein, solange sie in `QueryableWorker` und dem `worker` konsistent sind.

### Daten durch Eigentumsübertragung übertragen (übertragbare Objekte)

Moderne Browser verfügen über eine zusätzliche Methode, bestimmte Objekttypen mit hoher Leistung zu oder von einem Worker zu wechseln. [Übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden mit einer Zero-Copy-Operation von einem Kontext in einen anderen übertragen, was zu einer erheblichen Leistungsverbesserung beim Senden großer Datensätze führt.

Wenn Sie beispielsweise einen {{jsxref("ArrayBuffer")}} von Ihrer Hauptanwendung an ein Worker-Skript übertragen, wird der ursprüngliche {{jsxref("ArrayBuffer")}} gelöscht und kann nicht mehr verwendet werden. Sein Inhalt wird (wirklich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## Eingebettete Worker

Es gibt keinen "offiziellen" Weg, um den Code eines Workers in eine Webseite einzubetten, wie es {{HTMLElement("script")}}-Elemente für normale Skripte tun. Aber ein {{HTMLElement("script")}}-Element, das kein `src`-Attribut hat und ein `type`-Attribut hat, das keinen ausfüührbaren MIME-Typ identifiziert, kann als ein Datenelement angesehen werden, das JavaScript verwenden könnte. "Datenblöcke" sind ein allgemeineres HTML-Feature, das fast alle Textdaten transportieren kann. Ein Worker könnte also auf diese Weise eingebettet werden:

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

Der eingebettete Worker ist jetzt in ein neues benutzerdefiniertes `document.worker`-Eigenschaft eingebettet.

Es ist auch erwähnenswert, dass Sie auch eine Funktion in einen Blob konvertieren und dann eine Objekt-URL aus diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele zur Verwendung von Web Workers.

### Berechnungen im Hintergrund durchführen

Worker sind hauptsächlich nützlich, um Ihrem Code zu ermöglichen, rechenintensive Berechnungen ohne Blockierung des Benutzeroberflächen-Threads durchzuführen. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code wird in der "fibonacci.js" Datei gespeichert, die in der nächsten Abschnitt referenziert wird.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfängt, die gesendet werden, wenn die `postMessage()` des Worker-Objekts aufgerufen wird. Dies führt die Berechnungen durch und gibt schließlich das Ergebnis zurück an den Hauptthread.

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

Die Webseite erstellt ein `<p>` Element mit der ID `result`, das verwendet wird, um das Ergebnis anzuzeigen, und startet dann den Worker. Nachdem der Worker gestartet wurde, ist der `onmessage`-Handler so konfiguriert, die Ergebnisse anzuzeigen, indem die Inhalte des `<p>`-Elements gesetzt werden, und der `onerror`-Handler ist so eingestellt, die Fehlermeldung in der Entwicklertools-Konsole zu protokollieren.

Abschließend wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Liveschaltung dieses Beispiels ausprobieren](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufteilung von Aufgaben auf mehrere Worker

Da Mehrkernprozessoren zunehmend verbreitet sind, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker zu verteilen, die diese Aufgaben auf mehreren Prozessorkernen ausführen können.

## Andere Arten von Workern

Zusätzlich zu dedizierten und geteilten Web Workern gibt es weitere Workertypen:

- [ServiceWorker](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen und dem Browser und dem Netzwerk (wenn verfügbar) sitzen. Sie sollen (unter anderem) die Erstellung effektiver Offline-Erlebnisse ermöglichen, indem sie Netzwerkanfragen abfangen und basierend darauf handeln, ob das Netzwerk verfügbar ist und aktualisierte Inhalte auf dem Server liegen. Sie erlauben auch den Zugriff auf Push-Benachrichtigungen und Hintergrund-Synchronisierungs-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bieten die Möglichkeit, direktes skriptgesteuertes Audio-Processing in einem Worklet (einer leichten Version eines Workers) Kontext durchzuführen.

## Debuggen von Worker-Threads

Die meisten Browser ermöglichen es Ihnen, Web Workers in ihren JavaScript-Debuggern auf _genau die gleiche Weise_ zu debuggen wie den Hauptthread! Sowohl Firefox als auch Chrome listen beispielsweise JavaScript-Quelldateien sowohl für den Hauptthread als auch für aktive Worker-Threads auf, und alle diese Dateien können geöffnet werden, um Haltepunkte und Logpunkte zu setzen.

Um zu erfahren, wie man Web Worker debuggt, lesen Sie die Dokumentation für den JavaScript-Debugger jedes Browsers:

- [Chrome Sources panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

## Funktionen und Schnittstellen, die Workern zur Verfügung stehen

Sie können die meisten Standard-JavaScript-Funktionen innerhalb eines Web Workers verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/SetTimeout) und [`setInterval()`](/de/docs/Web/API/SetInterval)

Das Haupt, was Sie in einem Worker _nicht_ tun können, ist die direkte Beeinflussung der übergeordneten Seite. Dazu gehört die Manipulation des DOM und die Verwendung der Objekte dieser Seite. Sie müssen dies indirekt tun, indem Sie eine Nachricht über [`DedicatedWorkerGlobalScope.postMessage`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) zurück an das Hauptskript senden und dann die Änderungen im Ereignishandler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode Workern zur Verfügung steht, indem Sie die Seite: <https://worker-playground.glitch.me/> verwenden. Wenn Sie zum Beispiel [EventSource](/de/docs/Web/API/EventSource) in die Seite auf Firefox 84 eingeben, sehen Sie, dass dies in Service Workern nicht unterstützt wird, wohl aber in dedizierten und geteilten Workern.

> [!NOTE]
> Für eine vollständige Liste der Funktionen, die Workern zur Verfügung stehen, siehe [Funktionen und Schnittstellen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker) Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle
- [Funktionen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Schnittstelle
