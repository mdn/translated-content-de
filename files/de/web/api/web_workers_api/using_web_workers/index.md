---
title: Verwendung von Web Workern
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{DefaultAPISidebar("Web Workers API")}}

Web Worker sind ein einfaches Mittel, um Web-Content Skripte in Hintergrund-Threads ausführen zu lassen. Der Worker-Thread kann Aufgaben erledigen, ohne die Benutzeroberfläche zu stören. Zusätzlich können sie Netzwerk-Anfragen mithilfe der [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) APIs durchführen. Einmal erstellt, kann ein Worker Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen Ereignishandler sendet, der von diesem Code spezifiziert wurde (und umgekehrt).

Dieser Artikel bietet eine detaillierte Einführung in die Verwendung von Web Workern.

## Web Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor erstellt wird (z.B. [`Worker()`](/de/docs/Web/API/Worker/Worker)), der eine benannte JavaScript-Datei ausführt — diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext, der sich von dem des aktuellen [`window`](/de/docs/Web/API/Window) unterscheidet. Daher führt die Verwendung der [`window`](/de/docs/Web/API/Window)-Abkürzung zur Erfassung des aktuellen globalen Bereichs (anstelle von [`self`](/de/docs/Web/API/Window/self)) innerhalb eines [`Worker`](/de/docs/Web/API/Worker) zu einem Fehler.

Der Worker-Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt im Fall von dedizierten Workern repräsentiert (Standard-Worker, die von einem Einzel-Skript genutzt werden; gemeinsame Worker verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)). Ein dedizierter Worker ist nur vom Skript zugänglich, das ihn zuerst erzeugt hat, während gemeinsame Worker von mehreren Skripten aus zugänglich sein können.

> [!NOTE]
> Siehe [Die Web Workers API-Startseite](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentation zu Workern und zusätzliche Leitfäden.

Sie können beliebigen Code innerhalb des Worker-Threads ausführen, mit einigen Ausnahmen. Beispielsweise können Sie nicht direkt das DOM von innen einem Worker manipulieren oder einige Standardmethoden und -eigenschaften des [`window`](/de/docs/Web/API/Window) Objekts verwenden. Aber Sie können eine große Anzahl von unter `window` verfügbaren Elementen verwenden, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Datenspeichermechanismen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Siehe [Funktionen und Klassen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) für mehr Details.

Daten werden zwischen Workern und dem Haupt-Thread über ein System von Nachrichten gesendet — beide Seiten senden ihre Nachrichten mit der Methode `postMessage()` und reagieren auf Nachrichten über den `onmessage`-Ereignishandler (die Nachricht ist im Datenattribut des [`message`](/de/docs/Web/API/Worker/message_event)-Ereignisses enthalten). Die Daten werden kopiert und nicht geteilt.

Worker können wiederum neue Worker erstellen, solange diese Worker innerhalb derselben {{Glossary("origin", "Origin")}} wie die übergeordnete Seite gehostet werden.

Außerdem können Worker Netzwerk-Anfragen mithilfe der [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) APIs durchführen (obwohl das [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) Attribut von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie bereits erwähnt, ist ein dedizierter Worker nur für das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt besprechen wir das JavaScript, das in unserem [einfachen Beispiel für einen dedizierten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) gefunden wird ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)): Dies ermöglicht Ihnen zwei Zahlen einzugeben, die miteinander multipliziert werden sollen. Die Zahlen werden an einen dedizierten Worker gesendet, miteinander multipliziert, und das Ergebnis wird an die Seite zurückgegeben und angezeigt.

Dieses Beispiel ist eher trivial, aber wir haben uns entschieden, es einfach zu halten, während wir Ihnen grundlegende Worker-Konzepte näher bringen. Fortgeschrittenere Details werden später im Artikel behandelt.

### Erkennung von Worker-Funktionalitäten

Für eine etwas kontrolliertere Fehlerbehandlung und Abwärtskompatibilität ist es eine gute Idee, Ihren Worker-Zugriffscode wie folgt zu kapseln ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
if (window.Worker) {
  // …
}
```

### Erstellen eines dedizierten Workers

Das Erstellen eines neuen Workers ist einfach. Alles, was Sie tun müssen, ist den [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktor aufzurufen und die URI eines Skripts anzugeben, das im Worker-Thread ausgeführt wird ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
const myWorker = new Worker("worker.js");
```

> [!NOTE]
> Bundler, einschließlich [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers), und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen das Übergeben von URLs, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) aufgelöst werden, an den `Worker()` Konstruktor. Beispielsweise:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript statt zur aktuellen HTML-Seite, was dem Bundler erlaubt, sicher Optimierungen wie Umbenennung durchzuführen (da andernfalls die `worker.js` URL auf eine Datei zeigen könnte, die nicht vom Bundler kontrolliert wird, sodass er keine Annahmen treffen kann).

### Nachrichten an einen dedizierten Worker senden und empfangen

Die Magie von Workern geschieht über die [`postMessage()`](/de/docs/Web/API/Worker/postMessage) Methode und den [`onmessage`](/de/docs/Web/API/Worker/message_event) Ereignishandler. Wenn Sie eine Nachricht an den Worker senden möchten, senden Sie ihm Nachrichten wie folgt ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Hier haben wir zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` repräsentiert werden; wenn der Wert eines dieser Elemente geändert wird, wird `myWorker.postMessage([first.value,second.value])` verwendet, um den Wert innerhalb beider an den Worker zu senden, als ein Array. Sie können nahezu alles, was Sie möchten, in der Nachricht senden.

Im Worker können wir wie folgt reagieren, sobald die Nachricht empfangen wird ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage` Handler erlaubt es uns, Code auszuführen, wann immer eine Nachricht empfangen wird, wobei die Nachricht selbst im `data` Attribut des `message` Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen miteinander und verwenden dann erneut `postMessage()`, um das Ergebnis an den Haupt-Thread zurückzusenden.

Zurück im Haupt-Thread verwenden wir `onmessage` erneut, um auf die vom Worker zurückgesendete Nachricht zu reagieren:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier erfassen wir die Ereignisdaten der Nachricht und setzen sie als `textContent` des Ergebnisabsatzes, damit der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` am `Worker` Objekt gehängt werden müssen, wenn sie im Hauptskript-Thread verwendet werden, aber nicht, wenn sie im Worker verwendet werden. Dies liegt daran, dass im Worker der Worker effektiv der globale Kontext ist.

> [!NOTE]
> Wenn eine Nachricht zwischen Haupt-Thread und Worker übergeben wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Daten zu und von Workern übertragen: weitere Details](#transferring_data_to_and_from_workers_further_details) für eine viel gründlichere Erklärung.

### Einen Worker beenden

Wenn Sie einen laufenden Worker sofort vom Haupt-Thread aus beenden müssen, können Sie dies tun, indem Sie die [`terminate`](/de/docs/Web/API/Worker) Methode des Worker's aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehler behandeln

Wenn ein Laufzeitfehler im Worker auftritt, wird der `onerror` Ereignishandler aufgerufen. Er erhält ein Ereignis namens `error`, das die `ErrorEvent` Schnittstelle implementiert.

Das Ereignis ist nicht auslösbar und kann abgebrochen werden; um zu verhindern, dass die Standardaktion ausgeführt wird, kann der Worker die `preventDefault()` Methode des Fehlerereignisses aufrufen.

Das Fehlerereignis hat die folgenden drei Felder, die von Interesse sind:

- `message`
  - : Eine lesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, bei der der Fehler aufgetreten ist.

### Sub-Worker erstellen

Arbeitsprozesse können bei Bedarf weitere Arbeitsprozesse erstellen. So genannte Unterarbeitsprozesse müssen innerhalb derselben Origin wie die übergeordnete Seite gehostet werden. Auch die URIs für Unterarbeitsprozesse werden relativ zur Position des übergeordneten Arbeitsprozesses und nicht zur Seite aufgelöst. Dies erleichtert den Arbeitsprozessen das Nachverfolgen, wo sich ihre Abhängigkeiten befinden.

### Skripte und Bibliotheken importieren

Worker-Threads haben Zugriff auf eine globale Funktion `importScripts()`, die es ihnen ermöglicht, Skripte zu importieren. Sie akzeptiert null oder mehr URIs als Parameter für die Ressourcen, die importiert werden sollen; alle folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes aufgelistete Skript und führt es aus. Alle globalen Objekte aus jedem Skript können dann vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` ausgelöst, und nachfolgender Code wird nicht mehr ausgeführt. Bereits ausgeführter Code (einschließlich verzögerter Code mit [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)) bleibt jedoch weiterhin funktionsfähig. Funktionsdeklarationen **nach** der `importScripts()` Methode werden ebenfalls behalten, da diese immer vor dem restlichen Code ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, werden jedoch in der Reihenfolge ausgeführt, in der Sie die Dateinamen in `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` gibt nicht zurück, bis alle Skripte geladen und ausgeführt wurden.

## Gemeinsame Worker

Ein gemeinsamer Worker ist von mehreren Skripten aus zugänglich — selbst wenn sie von verschiedenen Fenstern, iframes oder sogar Workern aufgerufen werden. In diesem Abschnitt werden wir das JavaScript diskutieren, das in unserem [Basic shared worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([run shared worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)) gefunden wird: Dies ist dem grundlegenden dedizierten Worker-Beispiel sehr ähnlich, außer dass es zwei Funktionen gibt, die von verschiedenen Skriptdateien gehandhabt werden: _zwei Zahlen multiplizieren_ oder _eine Zahl quadrieren_. Beide Skripte verwenden denselben Worker, um die erforderliche Berechnung durchzuführen.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und gemeinsamen Workern. Beachten Sie, dass in diesem Beispiel zwei HTML-Seiten enthalten sind, jede mit einem JavaScript, das dasselbe einzelne Worker-File verwendet.

> [!NOTE]
> Wenn SharedWorker von mehreren Browsing-Kontexten aus zugänglich ist, müssen alle diese Browsing-Kontexte denselben Origin teilen (gleiches Protokoll, Host und Port).

> [!NOTE]
> In Firefox können gemeinsame Worker nicht zwischen Dokumenten in privaten und nicht privaten Fenstern geteilt werden ([Firefox bug 1177621](https://bugzil.la/1177621)).

### Erstellen eines gemeinsamen Workers

Das Erstellen eines neuen gemeinsamen Workers ist fast dasselbe wie bei einem dedizierten Worker, jedoch mit einem anderen Konstrukturnamen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) — jeder muss den Worker mit Code wie dem folgenden starten:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied ist, dass Sie bei einem gemeinsamen Worker über ein `port` Objekt kommunizieren müssen — ein expliziter Port wird geöffnet, den die Skripte verwenden können, um mit dem Worker zu kommunizieren (dies geschieht implizit im Fall von dedizierten Workern).

Die Portverbindung muss entweder implizit durch den `onmessage` Ereignishandler oder explizit mit der `start()` Methode gestartet werden, bevor Nachrichten gesendet werden können. Das Aufrufen von `start()` ist nur erforderlich, wenn das `message` Ereignis durch die `addEventListener()` Methode verdrahtet ist.

> [!NOTE]
> Bei Verwendung der `start()` Methode zur Öffnung der Port-Verbindung muss sie sowohl vom übergeordneten Thread als auch vom Worker-Thread aufgerufen werden, wenn eine zweiseitige Kommunikation erforderlich ist.

### Nachrichten an einen gemeinsamen Worker senden und empfangen

Jetzt können Nachrichten wie zuvor an den Worker gesendet werden, aber die `postMessage()` Methode muss über das Port-Objekt aufgerufen werden (wieder sehen Sie ähnliche Konstruktionen in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) und [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js)):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Nun zum Worker. Hier gibt es auch mehr Komplexität ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

Erstens verwenden wir einen `onconnect` Handler, um Code auszuführen, wenn eine Verbindung zum Port stattfindet (d.h. wenn der `onmessage` Ereignishandler im übergeordneten Thread eingerichtet wird oder wenn die `start()` Methode im übergeordneten Thread explizit aufgerufen wird).

Wir verwenden das `ports` Attribut dieses Ereignisobjekts, um den Port zu erfassen und in einer Variablen zu speichern.

Als nächstes fügen wir einen `onmessage` Handler am Port hinzu, um die Berechnung durchzuführen und die Ergebnisse an den Haupt-Thread zurückzugeben. Das Einrichten dieses `onmessage` Handlers im Worker-Thread öffnet auch implizit die Port-Verbindung zurück zum Haupt-Thread, daher ist der Aufruf von `port.start()` tatsächlich nicht erforderlich, wie oben beschrieben.

Schließlich bearbeiten wir im Hauptskript die Nachricht (wieder sehen Sie ähnliche Konstruktionen sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch in [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js)):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht vom Worker durch den Port zurückkommt, fügen wir das Berechnungsergebnis in den entsprechenden Ergebnisabsatz ein.

## Über Thread-Sicherheit

Das [`Worker`](/de/docs/Web/API/Worker) Interface startet echte OS-Level Threads, und erfahrene Programmierer könnten besorgt sein, dass die Gleichzeitigkeit "interessante" Effekte in Ihrem Code verursachen könnte, wenn Sie nicht vorsichtig sind.

Da Web Worker jedoch kontrollierte Kommunikationspunkte mit anderen Threads haben, ist es tatsächlich sehr schwer, Konkurrenzprobleme zu verursachen. Es gibt keinen Zugriff auf nicht thread-sichere Komponenten oder das DOM. Und Sie müssen spezifische Daten durch serialisierte Objekte in und aus einem Thread übergeben. Deshalb müssen Sie sich stark bemühen, um Probleme in Ihrem Code zu verursachen.

## Sicherheitsrichtlinien für Inhalte

Worker werden als eigenständiger Ausführungskontext betrachtet, der sich von dem Dokument unterscheidet, das sie erstellt hat. Aus diesem Grund unterliegen sie im Allgemeinen nicht der [Sicherheitsrichtlinie für Inhalte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder des übergeordneten Workers), das sie erstellt hat. Wenn zum Beispiel ein Dokument mit dem folgenden Header bereitgestellt wird:

```http
Content-Security-Policy: script-src 'self'
```

Unter anderem wird dies verhindern, dass Skripte [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn das Skript jedoch einen Worker erstellt, ist Code, der im Kontext des Workers ausgeführt wird, erlaubt `eval()` zu verwenden.

Um eine Sicherheitsrichtlinie für Inhalte für den Worker festzulegen, setzen Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) Antwort-Header für die Anfrage, die das Worker-Skript selbst geliefert hat.

Ausnahme ist, wenn der Ursprung des Worker-Skripts ein global eindeutiger Bezeichner ist (zum Beispiel, wenn seine URL ein Schema von data oder blob hat). In diesem Fall erbt der Worker die CSP des Dokuments oder Workers, der ihn erstellt hat.

## Daten zu und von Workern übertragen: weitere Details

Daten, die zwischen der Hauptseite und Workern übergeben werden, werden **kopiert**, nicht geteilt. Objekte werden als in den Worker übergeben serialisiert und anschließend am anderen Ende deserialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, sodass letztendlich **ein Duplikat** am jeweiligen Ende entsteht. Die meisten Browser implementieren diese Funktion als [strukturierte Klonierung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Um dies zu veranschaulichen, erstellen wir eine Funktion namens `emulateMessage()`, die das Verhalten eines Wertes simuliert, der beim Übergang von einem `worker` zur Hauptseite oder umgekehrt _geklont und nicht geteilt_ wird:

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

Ein Wert, der geklont und nicht geteilt wird, wird als _Nachricht_ bezeichnet. Wie Sie wahrscheinlich inzwischen wissen, können _Nachrichten_ mithilfe von `postMessage()` an und von dem Haupt-Thread gesendet werden. Das `data` Attribut des `message` Ereignisses enthält die vom Worker zurückgegebenen Daten.

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

Der [strukturierte Klonierungsalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kann JSON und einige Dinge akzeptieren, die JSON nicht kann — wie z.B. zyklische Referenzen.

### Beispiele zur Datenübertragung

#### Beispiel 1: Fortgeschrittene JSON-Datenübertragung und ein Umschaltsystem erstellen

Wenn Sie komplexe Daten übergeben und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles gruppiert.

Zuerst erstellen wir eine `QueryableWorker` Klasse, die die URL des Workers, einen Standardlistener und einen Fehlerbehandler übernimmt, und diese Klasse wird eine Liste von Listenern verfolgen und uns die Kommunikation mit dem Worker erleichtern.

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

Hier lassen wir den Worker zwei einfache Operationen zur Veranschaulichung handhaben: die Differenz zweier Zahlen erhalten und eine Alert-Meldung nach drei Sekunden auslösen. Um dies zu erreichen, implementieren wir zunächst eine Methode `sendQuery`, die überprüft, ob der Worker tatsächlich die entsprechenden Methoden hat, um das zu tun, was wir wollen.

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

Wir schließen `QueryableWorker` mit der `onmessage` Methode ab. Wenn der Worker die entsprechenden Methoden hat, die wir abgefragt haben, sollte er den Namen des entsprechenden Listeners und die Argumente, die er benötigt, zurückgeben. Wir müssen ihn nur in `listeners` finden:

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

Nun zum Worker. Zuerst müssen wir die Methoden haben, um die zwei einfachen Operationen zu handhaben:

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

Und die `onmessage` Methode ist jetzt trivial:

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
    <script>
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

Es ist möglich, den Inhalt jeder Hauptseite -> Worker und Worker -> Hauptseite Nachricht zu ändern. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können alles sein, solange sie in `QueryableWorker` und dem `worker` konsistent sind.

### Datenübertragung durch Eigentumsübertragung (übertragbare Objekte)

Moderne Browser enthalten einen zusätzlichen Weg, bestimmte Objekttypen mit hoher Leistung an oder von einem Worker zu übergeben. [Übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden mit einer Zero-Copy-Operation von einem Kontext in einen anderen übertragen, was zu einer erheblichen Leistungssteigerung beim Senden großer Datensätze führt.

Wenn Sie beispielsweise ein {{jsxref("ArrayBuffer")}} von Ihrer Hauptanwendung an ein Worker-Skript übertragen, wird das ursprüngliche {{jsxref("ArrayBuffer")}} geleert und ist nicht mehr verwendbar. Sein Inhalt wird (buchstäblich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## Eingebettete Worker

Es gibt keinen "offiziellen" Weg, um den Code eines Workers innerhalb einer Webseite einzubetten, wie es bei {{HTMLElement("script")}} Elementen für normale Skripte der Fall ist. Ein {{HTMLElement("script")}} Element, das kein `src` Attribut hat und ein `type` Attribut, das keinen ausführbaren MIME-Typ identifiziert, kann jedoch als Data-Block Element betrachtet werden, das JavaScript verwenden könnte. "Datenblöcke" sind ein allgemeineres Feature von HTML, das fast alle Textdaten tragen kann. Also könnte ein Worker auf diese Weise eingebettet werden:

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

Der eingebettete Worker ist nun in eine neue benutzerdefinierte `document.worker` Eigenschaft eingebettet.

Es ist auch erwähnenswert, dass Sie eine Funktion in einen Blob umwandeln und dann eine Objekt-URL aus diesem Blob generieren können. Beispielsweise:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele für die Verwendung von Web Workern.

### Berechnungen im Hintergrund durchführen

Worker sind hauptsächlich nützlich, um Ihrem Code zu ermöglichen, prozessorintensive Berechnungen durchzuführen, ohne den Thread der Benutzeroberfläche zu blockieren. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfängt, wenn die `postMessage()` Methode des Worker-Objekts aufgerufen wird. Diese führt die Berechnung durch und gibt schließlich das Ergebnis an den Haupt-Thread zurück.

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

Die Webseite erstellt ein `<p>` Element mit der ID `result`, das für die Anzeige des Ergebnisses verwendet wird, und startet dann den Worker. Nachdem der Worker gestartet wurde, wird der `onmessage` Handler konfiguriert, um das Ergebnis anzuzeigen, indem der Inhalt des `<p>` Elements gesetzt wird, und der `onerror` Handler wird gesetzt, um die Fehlermeldung in der Entwicklertools-Konsole zu protokollieren.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Probieren Sie dieses Beispiel live aus](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufgaben auf mehrere Worker verteilen

Da Multicore-Computer zunehmend üblich werden, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker zu verteilen, die diese Aufgaben dann auf mehreren Prozessor-Kernen ausführen können.

## Andere Typen von Workern

Neben dedizierten und gemeinsamen Web Workern stehen auch andere Arten von Workern zur Verfügung:

- [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Web-Anwendungen und dem Browser und Netzwerk (wenn verfügbar) sitzen. Sie sollen (unter anderem) die Erstellung effektiver Offline-Erfahrungen ermöglichen, Netzwerk-Anfragen abfangen und entsprechende Maßnahmen basierend darauf ergreifen, ob das Netzwerk verfügbar ist und aktualisierte Assets auf dem Server vorhanden sind. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrund-Sync-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bieten die Möglichkeit, direktes geskriptetes Audio-Processing in einem Worklet (eine leichte Version des Workers)-Kontexts durchzuführen.

## Debugging von Worker-Threads

Die meisten Browser ermöglichen es Ihnen, Web Worker in ihren JavaScript-Debuggern _genauso wie den Haupt-Thread_ zu debuggen! Beispielsweise listen sowohl Firefox als auch Chrome JavaScript-Quelldateien für den Haupt-Thread und aktive Worker-Threads auf, und alle diese Dateien können geöffnet werden, um Breakpoints und Logpoints zu setzen.

Um zu lernen, wie man Web Worker debuggt, lesen Sie bitte die Dokumentation des JavaScript-Debuggers für jeden Browser:

- [Chrome Sources Panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

Um Entwicklertools für Web Worker zu öffnen, können Sie die folgenden URLs verwenden:

- Edge: `edge://inspect/`
- Chrome: `chrome://inspect/`
- Firefox: `about:debugging#/runtime/this-firefox`

Diese Seiten zeigen eine Übersicht über alle Service Worker. Sie müssen den relevanten anhand der URL finden und dann _inspect_ klicken, um auf Entwicklertools wie die Konsole und den Debugger für diesen Worker zuzugreifen.

## Funktionen und Schnittstellen, die in Workern verfügbar sind

Sie können die meisten Standard-JavaScript-Funktionen innerhalb eines Web Workers nutzen, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptmerkmal, das Sie _nicht_ in einem Worker tun können, ist, die übergeordnete Seite direkt zu beeinflussen. Dies schließt die Manipulation des DOMs und die Verwendung der Objekte dieser Seite ein. Sie müssen es indirekt tun, indem Sie eine Nachricht zurück an das Hauptskript über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) senden und dann die Änderungen im Ereignishandler vornehmen.

> [!NOTE]
> Sie können testen, ob eine Methode für Worker verfügbar ist, indem Sie die Seite: <https://worker-playground.glitch.me/> verwenden. Zum Beispiel, wenn Sie [`EventSource`](/de/docs/Web/API/EventSource) auf der Seite in Firefox 84 eingeben, werden Sie sehen, dass dies nicht in Service Workern unterstützt wird, aber in dedizierten und gemeinsamen Workern.

> [!NOTE]
> Eine vollständige Liste der Funktionen, die Workern zur Verfügung stehen, finden Sie unter [Funktionen und Schnittstellen, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker) Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle
- [Funktionen verfügbar für Worker](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Schnittstelle
