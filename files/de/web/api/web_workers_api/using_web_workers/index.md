---
title: Verwendung von Web-Workern
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: e4e57ab3ccb5f93319f8fe13848d4895d3e1e771
---

{{DefaultAPISidebar("Web Workers API")}}

Web-Worker sind eine einfache Möglichkeit für Webinhalte, Skripte in Hintergrund-Threads auszuführen. Der Worker-Thread kann Aufgaben ohne Beeinträchtigung der Benutzeroberfläche durchführen. Darüber hinaus können sie Netzwerk-Anfragen über die APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ausführen. Sobald ein Worker erstellt wurde, kann er Nachrichten an den JavaScript-Code senden, der ihn erstellt hat, indem er Nachrichten an einen durch diesen Code spezifizierten Ereignis-Handler sendet (und umgekehrt).

Dieser Artikel bietet eine detaillierte Einführung in die Verwendung von Web-Workern.

## Web-Workers API

Ein Worker ist ein Objekt, das mit einem Konstruktor erstellt wird (z. B. [`Worker()`](/de/docs/Web/API/Worker/Worker)), der eine benannte JavaScript-Datei ausführt — diese Datei enthält den Code, der im Worker-Thread ausgeführt wird; Worker laufen in einem anderen globalen Kontext, der sich von dem aktuellen [`window`](/de/docs/Web/API/Window) unterscheidet. Daher führt die Verwendung der Abkürzung [`window`](/de/docs/Web/API/Window), um den aktuellen globalen Scope innerhalb eines [`Worker`](/de/docs/Web/API/Worker) zu bekommen, zu einem Fehler.

Der Worker-Kontext wird im Fall von dedizierten Workern durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt dargestellt (Standardworker, die von einem einzigen Skript verwendet werden; Shared-Worker verwenden [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)). Ein dedizierter Worker ist nur von dem Skript erreichbar, das ihn zuerst erzeugt hat, während Shared-Worker von mehreren Skripten aus zugänglich sind.

> [!NOTE]
> Siehe [Die Landingpage der Web-Workers API](/de/docs/Web/API/Web_Workers_API) für Referenzdokumentationen zu Workern und zusätzliche Leitfäden.

Sie können im Worker-Thread beliebigen Code ausführen, mit einigen Ausnahmen. Beispielsweise können Sie das DOM nicht direkt aus einem Worker heraus manipulieren oder einige Standardmethoden und Eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts verwenden. Sie können jedoch eine Vielzahl von Elementen nutzen, die unter `window` verfügbar sind, einschließlich [WebSockets](/de/docs/Web/API/WebSockets_API) und Datenbank-Mechanismen wie [IndexedDB](/de/docs/Web/API/IndexedDB_API). Siehe [Funktionen und Klassen, die Workern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) für mehr Details.

Daten werden über ein Nachrichtensystem zwischen Workern und dem Haupt-Thread gesendet — beide Seiten senden ihre Nachrichten mit der Methode `postMessage()`, und reagieren über den `onmessage`-Ereignis-Handler (die Nachricht befindet sich im Datenattribut des [`message`](/de/docs/Web/API/Worker/message_event)-Ereignisses). Die Daten werden kopiert und nicht geteilt.

Worker können wiederum neue Worker erzeugen, solange diese Worker im gleichen {{Glossary("origin", "Ursprung")}} wie die übergeordnete Seite gehostet werden.

Zusätzlich können Worker Netzwerk-Anfragen über die APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen (obwohl das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

## Dedizierte Worker

Wie oben erwähnt, ist ein dedizierter Worker nur durch das Skript zugänglich, das ihn aufgerufen hat. In diesem Abschnitt besprechen wir das JavaScript, das in unserem [Einfachen Beispiel für dedizierte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)) zu finden ist: Dies ermöglicht es Ihnen, zwei Zahlen zur Multiplikation einzugeben. Die Zahlen werden an einen dedizierten Worker gesendet, dort multipliziert und das Ergebnis wird an die Seite zurückgegeben und angezeigt.

Dieses Beispiel ist ziemlich trivial, aber wir haben uns entschieden, es einfach zu halten, während wir Ihnen grundlegende Worker-Konzepte vorstellen. Fortgeschrittenere Details werden später im Artikel behandelt.

### Erkennung von Worker-Funktionen

Für eine etwas kontrollierte Fehlerbehandlung und Abwärtskompatibilität ist es eine gute Idee, Ihren Worker-Code im Folgenden zu kapseln ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
if (window.Worker) {
  // …
}
```

### Einen dedizierten Worker erzeugen

Das Erstellen eines neuen Workers ist einfach. Alles, was Sie tun müssen, ist den [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor aufzurufen und die URI eines Skripts anzugeben, das im Worker-Thread ausgeführt werden soll ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
const myWorker = new Worker("worker.js");
```

> [!NOTE]
> Bundler, einschließlich [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, URLs zu übergeben, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) für den `Worker()`-Konstruktor aufgelöst werden. Zum Beispiel:
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> Auf diese Weise ist der Pfad relativ zum aktuellen Skript anstatt zur aktuellen HTML-Seite, was es dem Bundler ermöglicht, Optimierungen wie Umbenennungen sicher durchzuführen (da ansonsten die `worker.js`-URL auf eine Datei verweisen könnte, die nicht vom Bundler kontrolliert wird, so dass keine Annahmen getroffen werden können).

### Nachrichten an einen dedizierten Worker senden und empfangen

Die Magie der Worker passiert durch die Methode [`postMessage()`](/de/docs/Web/API/Worker/postMessage) und den [`onmessage`](/de/docs/Web/API/Worker/message_event)-Ereignis-Handler. Wenn Sie eine Nachricht an den Worker senden möchten, senden Sie ihm Nachrichten so ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)):

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});
```

Hier haben wir also zwei {{htmlelement("input")}}-Elemente, die durch die Variablen `first` und `second` dargestellt werden; wenn sich der Wert eines der Elemente ändert, wird `myWorker.postMessage([first.value,second.value])` verwendet, um den Wert in beiden in Form eines Arrays an den Worker zu senden. Sie können fast alles in der Nachricht senden, was Sie möchten.

Im Worker können wir reagieren, wenn die Nachricht empfangen wird, indem wir einen Ereignis-Handler-Block wie diesen schreiben ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)):

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

Der `onmessage`-Handler ermöglicht es uns, Code auszuführen, wann immer eine Nachricht empfangen wird, wobei die Nachricht selbst im `data`-Attribut des `message`-Ereignisses verfügbar ist. Hier multiplizieren wir die beiden Zahlen und verwenden dann erneut `postMessage()`, um das Ergebnis zurück an den Haupt-Thread zu senden.

Zurück im Haupt-Thread verwenden wir erneut `onmessage`, um auf die Nachricht zu reagieren, die vom Worker zurückgesendet wurde:

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Hier greifen wir die Nachrichtendaten ab und setzen sie als `textContent` des Ergebnis-Paragraphen, sodass der Benutzer das Ergebnis der Berechnung sehen kann.

> [!NOTE]
> Beachten Sie, dass `onmessage` und `postMessage()` an das `Worker`-Objekt angehängt werden müssen, wenn sie im Hauptskript-Thread verwendet werden, nicht jedoch, wenn sie im Worker verwendet werden. Dies liegt daran, dass im Worker der Worker effektiv der globale Scope ist.

> [!NOTE]
> Wenn eine Nachricht zwischen dem Haupt-Thread und dem Worker übergeben wird, wird sie kopiert oder "übertragen" (verschoben), nicht geteilt. Lesen Sie [Übertragen von Daten zu und von Workern: Weitere Details](#transferring_data_to_and_from_workers_further_details) für eine ausführlichere Erklärung.

### Einen Worker beenden

Wenn Sie einen laufenden Worker sofort vom Haupt-Thread aus beenden müssen, können Sie dies tun, indem Sie die [`terminate`](/de/docs/Web/API/Worker)-Methode des Workers aufrufen:

```js
myWorker.terminate();
```

Der Worker-Thread wird sofort beendet.

### Fehlerbehandlung

Wenn zur Laufzeit ein Fehler im Worker auftritt, wird dessen `onerror`-Ereignis-Handler aufgerufen. Es erhält ein Ereignis namens `error`, das die `ErrorEvent`-Schnittstelle implementiert.

Das Ereignis wird nicht weitergereicht und ist abbrechbar; um die Standardaktion zu verhindern, kann der Worker die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Error-Events aufrufen.

Das Fehler-Event hat die folgenden drei Felder, die von Interesse sind:

- `message`
  - : Eine für Menschen lesbare Fehlermeldung.
- `filename`
  - : Der Name der Skriptdatei, in der der Fehler aufgetreten ist.
- `lineno`
  - : Die Zeilennummer der Skriptdatei, in der der Fehler aufgetreten ist.

### Untergeordnete Worker erzeugen

Worker können bei Bedarf weitere Worker erzeugen. So genannte Unter-Worker müssen im gleichen Ursprung wie die übergeordnete Seite gehostet werden. Auch die URIs für Unterworker werden relativ zum Speicherort des übergeordneten Workers aufgelöst und nicht relativ zum der Seite, die sie besitzt. Dies erleichtert es Workern, den Überblick darüber zu behalten, wo sich ihre Abhängigkeiten befinden.

### Importieren von Skripten und Bibliotheken

Worker-Threads haben Zugriff auf eine globale Funktion, `importScripts()`, mit der sie Skripte importieren können. Es akzeptiert null oder mehr URIs als Parameter für zu importierende Ressourcen; alle folgenden Beispiele sind gültig:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

Der Browser lädt jedes der gelisteten Skripte und führt sie aus. Alle globalen Objekte aus jedem Skript können dann vom Worker verwendet werden. Wenn das Skript nicht geladen werden kann, wird `NETWORK_ERROR` ausgelöst und nachfolgender Code wird nicht ausgeführt. Zuvor ausgeführter Code (einschließlich Code, der mit [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) zurückgestellt wurde) bleibt jedoch funktionsfähig. Funktionsdeklarationen **nach** der `importScripts()`-Methode werden ebenfalls beibehalten, da diese immer vor dem Rest des Codes ausgewertet werden.

> [!NOTE]
> Skripte können in beliebiger Reihenfolge heruntergeladen werden, aber sie werden in der Reihenfolge ausgeführt, in der Sie die Dateinamen an `importScripts()` übergeben. Dies geschieht synchron; `importScripts()` gibt erst zurück, wenn alle Skripte geladen und ausgeführt wurden.

## Geteilte Worker

Ein geteilten Worker kann von mehreren Skripten aus aufgerufen werden — selbst wenn sie von unterschiedlichen Fenstern, iframes oder sogar anderen Workern aufgerufen werden. In diesem Abschnitt besprechen wir das JavaScript aus unserem [Einfachen Beispiel für geteilte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)): Dies ist sehr ähnlich wie das einfache Beispiel für dedizierte Worker, außer dass es zwei Funktionen zur Verfügung hat, die von verschiedenen Skriptdateien behandelt werden: _Multiplikation von zwei Zahlen_ oder _Quadrieren einer Zahl_. Beide Skripte verwenden denselben Worker, um die erforderliche Berechnung durchzuführen.

Hier konzentrieren wir uns auf die Unterschiede zwischen dedizierten und geteilten Workern. Beachten Sie, dass in diesem Beispiel zwei HTML-Seiten vorliegen, jede mit einem JavaScript, das denselben einzelnen Worker verwendet.

> [!NOTE]
> Wenn ein SharedWorker von mehreren Browserkontexten aus aufgerufen werden kann, müssen alle diese Browserkontexte den genau gleichen Ursprung (gleiches Protokoll, Host und Port) teilen.

> [!NOTE]
> In Firefox können geteilte Worker nicht zwischen Dokumenten geteilt werden, die in privaten und nicht-privaten Fenstern geladen sind ([Firefox-Bug 1177621](https://bugzil.la/1177621)).

### Einen geteilten Worker erzeugen

Das Erzeugen eines neuen geteilten Workers ist fast das gleiche wie bei einem dedizierten Worker, jedoch mit einem anderen Konstruktor-Namen (siehe [index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) und [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html)) — jeder muss den Worker mit so etwas wie dem folgenden Code starten:

```js
const myWorker = new SharedWorker("worker.js");
```

Ein großer Unterschied ist, dass Sie mit einem geteilten Worker über ein `port`-Objekt kommunizieren müssen — es wird ein expliziter Port geöffnet, den die Skripte zur Kommunikation mit dem Worker verwenden können (dies geschieht im Fall von dedizierten Workern implizit).

Die Port-Verbindung muss entweder implizit über den `onmessage`-Ereignis-Handler gestartet werden oder explizit mit der `start()`-Methode, bevor Nachrichten gesendet werden können. Der Aufruf von `start()` ist nur erforderlich, wenn das `message`-Ereignis mit der Methode `addEventListener()` verkabelt wird.

> [!NOTE]
> Bei der Verwendung der `start()`-Methode, um die Port-Verbindung zu öffnen, muss sie sowohl vom übergeordneten Thread als auch vom Worker-Thread aufgerufen werden, wenn eine zweiseitige Kommunikation erforderlich ist.

### Nachrichten an einen geteilten Worker senden und empfangen

Jetzt können Nachrichten wie zuvor an den Worker gesendet werden, aber die Methode `postMessage()` muss über das Port-Objekt aufgerufen werden (wieder werden Sie ähnliche Konstruktionen sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch in [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Nun weiter zum Worker. Hier gibt es etwas mehr Komplexität ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

Zuerst verwenden wir einen `onconnect`-Handler, um Code auszuführen, wenn eine Verbindung zum Port geschieht (d.h. wenn der `onmessage`-Ereignis-Handler im übergeordneten Thread eingerichtet wird, oder wenn die `start()`-Methode im übergeordneten Thread explizit aufgerufen wird).

Wir verwenden das `ports`-Attribut dieses Ereignis-Objekts, um den Port zu erfassen und ihn in einer Variable zu speichern.

Als nächstes fügen wir einen `onmessage`-Handler am Port hinzu, um die Berechnung durchzuführen und das Ergebnis an den Haupt-Thread zurückzugeben. Das Einrichten dieses `onmessage`-Handlers im Worker-Thread öffnet auch implizit die Port-Verbindung zurück zum übergeordneten Thread, sodass der Aufruf von `port.start()` tatsächlich nicht erforderlich ist, wie oben erwähnt.

Schließlich behandeln wir im Hauptskript die Nachricht (wieder werden Sie ähnliche Konstruktionen sowohl in [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) als auch in [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) sehen):

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

Wenn eine Nachricht über den Port vom Worker zurückkommt, fügen wir das Berechnungsergebnis in den entsprechenden Ergebnisabsatz ein.

## Über Thread-Sicherheit

Das [`Worker`](/de/docs/Web/API/Worker)-Interface erzeugt echte OS-Level-Threads und bewusste Programmierer könnten sich Sorgen machen, dass Nebenläufigkeit "interessante" Effekte im Code verursachen kann, wenn man nicht vorsichtig ist.

Da Web-Worker jedoch über sorgfältig kontrollierte Kommunikationspunkte mit anderen Threads verfügen, ist es tatsächlich sehr schwer, Nebenläufigkeitsprobleme zu verursachen. Es gibt keinen Zugriff auf nicht threadsichere Komponenten oder das DOM. Und Sie müssen spezifische Daten in und aus einem Thread durch serialisierte Objekte übergeben. Sie müssen also wirklich hart arbeiten, um Probleme in Ihrem Code zu verursachen.

## Content-Security-Policy

Worker haben ihren eigenen Ausführungskontext, der sich von dem des Dokuments, das sie erstellt hat, unterscheidet. Aus diesem Grund werden sie im Allgemeinen nicht von der [Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) des Dokuments (oder des übergeordneten Workers), das sie erstellt hat, reglementiert. Nehmen wir zum Beispiel an, ein Dokument wird mit dem folgenden Header ausgeliefert:

```http
Content-Security-Policy: script-src 'self'
```

Dies wird unter anderem verhindern, dass Skripte, die es einschließt, [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verwenden. Wenn das Skript jedoch einen Worker konstruiert, ist es dem Code, der im Kontext des Workers ausgeführt wird, _erlaubt_, `eval()` zu verwenden.

Um eine Content-Security-Policy für den Worker festzulegen, richten Sie einen [Content-Security-Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) Antwort-Header für die Anfrage ein, die das Worker-Skript selbst bereitgestellt hat.

Die Ausnahme besteht, wenn der Ursprung des Worker-Skripts eine weltweit eindeutige Kennung ist (z. B. wenn seine URL ein Schema von data oder blob hat). In diesem Fall erbt der Worker die CSP des Dokuments oder Workers, der ihn erstellt hat.

## Übertragen von Daten zu und von Workern: Weitere Details

Daten, die zwischen der Hauptseite und Workern übergeben werden, werden **kopiert**, nicht geteilt. Objekte werden serialisiert, während sie an den Worker übergeben werden, und anschließend am anderen Ende deserialisiert. Die Seite und der Worker **teilen nicht dieselbe Instanz**, sodass im Endergebnis **eine Kopie** an jedem Ende erstellt wird. Die meisten Browser implementieren diese Funktion als [strukturierte Klonung](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Um dies zu veranschaulichen, erstellen wir eine Funktion namens `emulateMessage()`, die das Verhalten eines Wertes simuliert, der _geklont und nicht geteilt_ wird, wenn er von einem `worker` zur Hauptseite oder umgekehrt übergeht:

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

Ein Wert, der geklont und nicht geteilt wird, wird _Nachricht_ genannt. Wie Sie wahrscheinlich bereits wissen, können _Nachrichten_ an den Haupt-Thread und von ihm zurück gesendet werden, indem `postMessage()` verwendet wird, und das `message`-Ereignis-Attribut [`data`](/de/docs/Web/API/MessageEvent/data) enthält die zurückgesendeten Daten vom Worker.

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

Der [strukturierte Klonalgoithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kann JSON und ein paar Dinge, die JSON nicht kann, — wie zirkuläre Referenzen — akzeptieren.

### Beispiele zum Übergeben von Daten

#### Beispiel 1: Fortgeschrittenes Übergeben von JSON-Daten und Erstellen eines Umschaltsystems

Wenn Sie einige komplexe Daten übergeben müssen und viele verschiedene Funktionen sowohl auf der Hauptseite als auch im Worker aufrufen müssen, können Sie ein System erstellen, das alles zusammenfasst.

Zuerst erstellen wir eine `QueryableWorker`-Klasse, die die URL des Workers, einen Standardlistener und einen Fehlerhandler akzeptiert, und diese Klasse wird eine Liste von Listeners nachverfolgen und uns helfen, mit dem Worker zu kommunizieren:

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

Hier lassen wir den Worker zwei einfache Operationen durchführen, um das Ganze zu veranschaulichen: die Differenz zweier Zahlen berechnen und nach drei Sekunden eine Benachrichtigung ausgeben. Um das zu erreichen, implementieren wir zuerst eine `sendQuery`-Methode, die abfragt, ob der Worker tatsächlich die entsprechenden Methoden hat, um das zu tun, was wir wollen.

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

Wir beenden `QueryableWorker` mit der `onmessage`-Methode. Wenn der Worker die entsprechenden abgefragten Methoden hat, sollte er den Namen des entsprechenden Listeners und die benötigten Argumente zurückgeben, wir müssen sie nur in `listeners` finden:

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

Jetzt ist der Worker an der Reihe. Zuerst müssen wir die Methoden haben, um die beiden einfachen Operationen zu handhaben:

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

Es ist möglich, den Inhalt jeder Hauptseite -> Worker und Worker -> Hauptseite Nachricht umzuschalten. Und die Eigenschaftsnamen "queryMethod", "queryMethodListeners", "queryMethodArguments" können alles sein, solange sie in `QueryableWorker` und im `worker` konsistent sind.

### Datenübergabe durch Übertragen von Besitz (übertragbare Objekte)

Moderne Browser bieten eine zusätzliche Möglichkeit, bestimmte Objekttypen zu oder von einem Worker mit hoher Leistung zu übergeben. [Übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) werden durch eine Zero-Kopie-Operation von einem Kontext in einen anderen übertragen, was zu einer enormen Leistungssteigerung beim Senden großer Datensätze führt.

Beispielsweise wird beim Übertragen eines {{jsxref("ArrayBuffer")}} von Ihrer Hauptanwendung zu einem Worker-Skript, der ursprüngliche {{jsxref("ArrayBuffer")}} gelöscht und ist nicht mehr nutzbar. Sein Inhalt wird (ganz wörtlich) in den Worker-Kontext übertragen.

```js
// Create a 32MB "file" and fill it with consecutive values from 0 to 255 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## Eingebettete Worker

Es gibt keine "offizielle" Möglichkeit, den Code eines Workers innerhalb einer Webseite zu integrieren, wie {{HTMLElement("script")}}-Elemente es für normale Skripte tun. Aber ein {{HTMLElement("script")}}-Element, das kein `src`-Attribut hat und ein `type`-Attribut hat, das keinen ausführbaren MIME-Typ identifiziert, kann als Datenblock-Element betrachtet werden, das JavaScript verwenden könnte. "Datenblöcke" sind ein allgemeineres Feature von HTML, das fast alle Textdaten tragen kann. So könnte ein Worker auf diese Weise eingebettet werden:

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

Der eingebettete Worker ist nun in einer neuen benutzerdefinierten `document.worker`-Eigenschaft eingebettet.

Es ist auch erwähnenswert, dass Sie auch eine Funktion in ein Blob konvertieren und dann eine Objekt-URL aus diesem Blob generieren können. Zum Beispiel:

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## Weitere Beispiele

Dieser Abschnitt bietet weitere Beispiele zur Verwendung von Web-Workern.

### Berechnungen im Hintergrund ausführen

Worker sind hauptsächlich nützlich, um Ihrem Code zu erlauben, prozessorintensive Berechnungen ohne Blockierung des Benutzeroberflächen-Threads durchzuführen. In diesem Beispiel wird ein Worker verwendet, um Fibonacci-Zahlen zu berechnen.

#### Der JavaScript-Code

Der folgende JavaScript-Code wird in der "fibonacci.js"-Datei gespeichert, die im nächsten Abschnitt vom HTML referenziert wird.

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

Der Worker setzt die Eigenschaft `onmessage` auf eine Funktion, die Nachrichten empfängt, die gesendet werden, wenn `postMessage()` des Worker-Objekts aufgerufen wird. Dies führt die Berechnungen durch und gibt schließlich das Ergebnis zurück an den Haupt-Thread.

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

Die Webseite erstellt ein `<p>`-Element mit der ID `result`, das verwendet wird, um das Ergebnis anzuzeigen, und dann wird der Worker gestartet. Nachdem der Worker gestartet ist, wird der `onmessage`-Handler so konfiguriert, dass die Ergebnisse angezeigt werden, indem der Inhalt des `<p>`-Elements gesetzt wird, und der `onerror`-Handler wird so gesetzt, dass die Fehlermeldung in der Entwicklertools-Konsole protokolliert wird.

Schließlich wird eine Nachricht an den Worker gesendet, um ihn zu starten.

[Versuchen Sie dieses Beispiel live](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/).

### Aufgaben zwischen mehreren Workern aufteilen

Da Multicore-Computer immer häufiger werden, ist es oft nützlich, rechnerisch komplexe Aufgaben auf mehrere Worker zu verteilen, die diese Aufgaben dann auf mehreren Prozessorkernen ausführen können.

## Andere Arten von Workern

Zusätzlich zu dedizierten und geteilten Web-Workern gibt es andere Arten von Workern:

- [ServiceWorker](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen und dem Browser bzw. Netzwerk (wenn verfügbar) sitzen. Sie sind dazu gedacht, um (unter anderem) die Erstellung effektiver Offline-Erfahrungen zu ermöglichen, indem sie Netzwerk-Anfragen abfangen und geeignete Maßnahmen ergreifen, basierend darauf, ob das Netzwerk verfügbar ist und aktualisierte Assets auf dem Server liegen. Sie ermöglichen auch den Zugriff auf Benachrichtigungen über Push und Background-Sync-APIs.
- [Audio Worklet](/de/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) bieten die Möglichkeit zur direkten skriptgesteuerten Audiobearbeitung in einem Worklet (einer leichteren Version von Worker) Kontext.

## Debuggen von Worker-Threads

Die meisten Browser ermöglichen das Debuggen von Web-Workern in ihren JavaScript-Debuggern _genau auf die gleiche Weise_ wie das Debuggen des Haupt-Threads! Sowohl in Firefox als auch Chrome werden JavaScript-Quelldateien für sowohl den Haupt-Thread als auch aktive Worker-Threads aufgelistet, und alle diese Dateien können geöffnet werden, um Haltepunkte und Protokollierungspunkte zu setzen.

Um zu lernen, wie Sie Web-Worker debuggen, lesen Sie die Dokumentation zu jedem JavaScript-Debugger der Browser:

- [Chrome Sources-Panel](https://developer.chrome.com/docs/devtools/sources)
- [Firefox JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

Um Entwicklertools für Web-Worker zu öffnen, können Sie die folgenden URLs verwenden:

- Edge: `edge://inspect/`
- Chrome: `chrome://inspect/`
- Firefox: `about:debugging#/runtime/this-firefox`

Diese Seiten zeigen eine Übersicht über alle Service-Worker. Sie müssen den relevanten durch die URL finden und dann _inspect_ klicken, um auf Entwicklertools wie die Konsole und den Debugger für diesen Worker zuzugreifen.

## Funktionen und Schnittstellen verfügbar in Workern

Sie können die meisten standardmäßigen JavaScript-Funktionen innerhalb eines Web-Workers verwenden, einschließlich:

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, und {{jsxref("Global_Objects/String", "String")}}
- [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) und [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)

Das Hauptsächlichste, was Sie _nicht_ in einem Worker tun können, ist, die übergeordnete Seite direkt zu beeinflussen. Dies schließt die Manipulation des DOMs und das Verwenden der Objekte dieser Seite ein. Sie müssen es indirekt tun, indem Sie eine Nachricht über [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) an das Hauptskript senden und dann die Änderungen im Ereignis-Handler durchführen.

> [!NOTE]
> Sie können testen, ob eine Methode für Worker verfügbar ist, mit der Seite: <https://worker-playground.glitch.me/>. Geben Sie zum Beispiel [`EventSource`](/de/docs/Web/API/EventSource) in die Seite auf Firefox 84 ein und Sie werden sehen, dass dies in Service-Workern nicht unterstützt wird, aber in dedizierten und geteilten Workern schon.

> [!NOTE]
> Für eine vollständige Liste der Funktionen, die Workern zur Verfügung stehen, siehe [Funktionen und Schnittstellen verfügbar in Workern](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker) Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle
- [Funktionen verfügbar in Workern](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Schnittstelle
