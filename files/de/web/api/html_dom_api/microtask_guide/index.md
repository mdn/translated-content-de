---
title: Verwenden von Microtasks in JavaScript mit queueMicrotask()
slug: Web/API/HTML_DOM_API/Microtask_guide
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("HTML DOM")}}

Ein **Microtask** ist eine kurze Funktion, die ausgeführt wird, nachdem die Funktion oder das Programm, das sie erstellt hat, beendet ist _und_ nur, wenn der [JavaScript-Ausführungsstapel](/de/docs/Web/JavaScript/Event_loop#stack) leer ist, jedoch bevor die Kontrolle an die vom {{Glossary("user_agent", "User-Agent")}} verwendete Ereignisschleife zurückgegeben wird, um die Skriptausführungsumgebung zu steuern.

Diese Ereignisschleife kann entweder die Hauptereignisschleife des Browsers oder die Ereignisschleife sein, die einen [Web Worker](/de/docs/Web/API/Web_Workers_API) antreibt. Dadurch kann die gegebene Funktion ausgeführt werden, ohne das Risiko einzugehen, die Ausführung eines anderen Skripts zu stören, und es wird sichergestellt, dass der Microtask ausgeführt wird, bevor der User-Agent die Möglichkeit hat, auf Aktionen zu reagieren, die vom Microtask vorgenommen wurden.

JavaScript-[Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und die [Mutation Observer API](/de/docs/Web/API/MutationObserver) verwenden beide die Microtask-Warteschlange, um ihre Rückrufe auszuführen, aber es gibt andere Zeiten, in denen die Fähigkeit, Arbeit zu verschieben, bis der aktuelle Durchgang der Ereignisschleife abgeschlossen ist, hilfreich sein kann. Um zu ermöglichen, dass Microtasks von Drittanbieter-Bibliotheken, Frameworks und Polyfills verwendet werden, ist die Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) auf den Schnittstellen [`Window`](/de/docs/Web/API/Window) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) verfügbar.

## Tasks vs. Microtasks

Um Microtasks richtig zu besprechen, ist es zuerst nützlich zu wissen, was ein JavaScript-Task ist und wie sich Microtasks von Tasks unterscheiden. Dies ist eine kurze, vereinfachte Erklärung, aber wenn Sie mehr Details möchten, können Sie die Informationen im Artikel [In Depth: Microtasks and the JavaScript runtime environment](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth) lesen.

### Tasks

Ein **Task** ist alles, was durch die standardmäßigen Mechanismen ausgeführt werden soll, wie zum Beispiel das anfängliche Starten eines Programms, das asynchrone Senden eines Ereignisses oder das Auslösen eines Intervalls oder Timeouts. Diese werden alle in der **Task-Warteschlange** eingeplant.

Zum Beispiel werden Tasks zur Task-Warteschlange hinzugefügt, wenn:

- Ein neues JavaScript-Programm oder -Unterprogramm ausgeführt wird (zum Beispiel von einer Konsole oder durch das Ausführen des Codes in einem {{HTMLElement("script")}}-Element) direkt.
- Der Benutzer auf ein Element klickt. Ein Task wird dann erstellt und führt alle Ereignisrückrufe aus.
- Ein Timeout oder Intervall, das mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder [`setInterval()`](/de/docs/Web/API/Window/setInterval) erstellt wurde, erreicht wird und der entsprechende Rückruf der Task-Warteschlange hinzugefügt wird.

Die Ereignisschleife, die Ihren Code antreibt, bearbeitet diese Tasks nacheinander in der Reihenfolge, in der sie eingereiht wurden. Der älteste ausführbare Task in der Task-Warteschlange wird während eines einzelnen Durchlaufs der Ereignisschleife ausgeführt. Danach werden Microtasks ausgeführt, bis die Microtask-Warteschlange leer ist, und dann kann der Browser Rendering-Aktualisierungen vornehmen. Dann bewegt sich der Browser weiter zur nächsten Iteration der Ereignisschleife.

### Microtasks

Auf den ersten Blick scheint der Unterschied zwischen Microtasks und Tasks gering zu sein. Und sie sind ähnlich; beide bestehen aus JavaScript-Code, der in einer Warteschlange platziert und zum gegebenen Zeitpunkt ausgeführt wird. Allerdings, während die Ereignisschleife nur die Tasks ausführt, die in der Warteschlange vorhanden sind, wenn die Iteration begann, eines nach dem anderen, behandelt sie die Microtask-Warteschlange sehr unterschiedlich.

Es gibt zwei wesentliche Unterschiede.

Erstens prüft die Ereignisschleife jedes Mal, wenn ein Task endet, ob der Task die Kontrolle an anderen JavaScript-Code zurückgibt. Falls nicht, führt sie alle Microtasks in der Microtask-Warteschlange aus. Die Microtask-Warteschlange wird dann mehrfach pro Iteration der Ereignisschleife durchlaufen, einschließlich nach der Bearbeitung von Ereignissen und anderen Rückrufen.

Zweitens, wenn ein Microtask mehr Microtasks zur Warteschlange hinzufügt, indem er [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) aufruft, führen diese neu hinzugefügten Microtasks _vor der Ausführung des nächsten Tasks_ aus. Das liegt daran, dass die Ereignisschleife Microtasks immer wieder aufruft, bis keine mehr in der Warteschlange sind, auch wenn noch mehr hinzugefügt werden.

> [!WARNING]
> Da Microtasks selbst mehr Microtasks einreihen können und die Ereignisschleife Microtasks verarbeitet, bis die Warteschlange leer ist, besteht ein echtes Risiko, dass die Ereignisschleife endlos Microtasks verarbeitet. Seien Sie vorsichtig, wie Sie rekursiv Microtasks hinzufügen.

## Verwenden von Microtasks

Bevor wir weiter auf dieses Thema eingehen, ist es wichtig, erneut darauf hinzuweisen, dass die meisten Entwickler Microtasks nicht oft, wenn überhaupt, verwenden werden. Sie sind ein hochspezialisiertes Merkmal der modernen, browserbasierten JavaScript-Entwicklung und ermöglichen es Ihnen, Code vor anderen Dingen, die auf dem Computer des Benutzers geschehen sollen, zu platzieren. Ein Missbrauch dieser Fähigkeit führt zu Leistungsproblemen.

### Einreihen von Microtasks

Daher sollten Sie normalerweise nur dann Microtasks verwenden, wenn es keine andere Lösung gibt oder beim Erstellen von Frameworks oder Bibliotheken, die Microtasks verwenden müssen, um die Funktionalität zu implementieren, die sie erstellen. Während es in der Vergangenheit Tricks gab, die es ermöglichten, Microtasks einzureihen (zum Beispiel durch Erstellen eines Promise, das sofort aufgelöst wird), bietet die Einführung der Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) eine standardisierte Möglichkeit, einen Microtask sicher und ohne Tricks einzuführen.

Durch die Einführung von `queueMicrotask()` können die Eigenheiten vermieden werden, die entstehen, wenn man versucht, Microtasks mit Promises zu erzeugen. Zum Beispiel werden bei der Verwendung von Promises, um Microtasks zu erzeugen, Ausnahmen, die der Rückruf generiert, als abgelehnte Promises gemeldet, anstatt als Standardausnahmen. Außerdem erfordert das Erstellen und Zerstören von Promises zusätzlichen Aufwand sowohl in Bezug auf Zeit als auch Speicher, den eine Funktion, die ordnungsgemäß Microtasks einreiht, vermeidet.

Übergeben Sie die JavaScript-{{jsxref("Function")}}, die während des Kontexts, in dem Microtasks bearbeitet werden, aufgerufen werden soll, an die Methode `queueMicrotask()`, die im globalen Kontext verfügbar ist, wie entweder von der [`Window`](/de/docs/Web/API/Window) oder [`Worker`](/de/docs/Web/API/Worker) Schnittstelle definiert ist, je nach aktuellem Ausführungskontext.

```js
queueMicrotask(() => {
  /* code to run in the microtask here */
});
```

Die Microtask-Funktion selbst nimmt keine Parameter und gibt keinen Wert zurück.

### Wann man Microtasks verwendet

In diesem Abschnitt werfen wir einen Blick auf Szenarien, in denen Microtasks besonders nützlich sind. Im Allgemeinen geht es darum, Ergebnisse zu erfassen oder zu überprüfen oder Bereinigungen durchzuführen, nachdem der Hauptteil eines JavaScript-Ausführungskontexts verlassen hat, aber bevor Ereignishandler, Timeouts und Intervalle oder andere Rückrufe verarbeitet werden.

Wann ist das nützlich?

Der Hauptgrund für die Verwendung von Microtasks ist sicherzustellen, dass die Aufgaben in einer konsistenten Reihenfolge ausgeführt werden, selbst wenn Ergebnisse oder Daten synchron verfügbar sind, während das Risiko von durch den Benutzer merklichen Verzögerungen bei den Operationen dennoch verringert wird.

#### Sicherstellung der Reihenfolge bei bedingter Verwendung von Promises

Eine Situation, in der Microtasks verwendet werden können, um sicherzustellen, dass die Ausführungsreihenfolge immer konsistent ist, ist, wenn Promises in einer Klausel einer `if...else`-Anweisung (oder einer anderen bedingten Anweisung) verwendet werden, jedoch nicht in der anderen Klausel. Betrachten Sie zum Beispiel folgenden Code:

```js
customElement.prototype.getData = (url) => {
  if (this.cache[url]) {
    this.data = this.cache[url];
    this.dispatchEvent(new Event("load"));
  } else {
    fetch(url)
      .then((result) => result.arrayBuffer())
      .then((data) => {
        this.cache[url] = data;
        this.data = data;
        this.dispatchEvent(new Event("load"));
      });
  }
};
```

Das hier eingeführte Problem besteht darin, dass durch die Verwendung eines Tasks in einem Zweig der `if...else`-Anweisung (im Fall, dass das Bild im Cache verfügbar ist), während im `else`-Zweig Promises involviert sind, eine Situation entsteht, in der die Abfolge variieren kann; zum Beispiel, wie unten gesehen.

```js
element.addEventListener("load", () => console.log("Loaded data"));
console.log("Fetching data…");
element.getData();
console.log("Data fetched");
```

Die zweimalige Ausführung dieses Codes ergibt folgende Ergebnisse.

Wenn die Daten nicht zwischengespeichert sind:

```plain
Fetching data…
Data fetched
Loaded data
```

Wenn die Daten zwischengespeichert sind:

```plain
Fetching data…
Loaded data
Data fetched
```

Noch schlimmer ist, dass manchmal die `data`-Eigenschaft des Elements gesetzt wird und manchmal nicht, wenn dieser Code ausgeführt wurde.

Wir können eine konsistente Reihenfolge dieser Operationen sicherstellen, indem wir im `if`-Zweig einen Microtask verwenden, um die beiden Klauseln auszugleichen:

```js
customElement.prototype.getData = (url) => {
  if (this.cache[url]) {
    queueMicrotask(() => {
      this.data = this.cache[url];
      this.dispatchEvent(new Event("load"));
    });
  } else {
    fetch(url)
      .then((result) => result.arrayBuffer())
      .then((data) => {
        this.cache[url] = data;
        this.data = data;
        this.dispatchEvent(new Event("load"));
      });
  }
};
```

Dies gleicht die Klauseln aus, indem in beiden Situationen das Setzen von `data` und das Auslösen des `load`-Ereignisses innerhalb eines Microtasks abgewickelt wird (mit `queueMicrotask()` im `if`-Zweig und den Promises, die von [`fetch()`](/de/docs/Web/API/Window/fetch) im `else`-Zweig verwendet werden).

#### Batchverarbeitung von Operationen

Sie können auch Microtasks verwenden, um mehrere Anfragen aus verschiedenen Quellen in einem einzigen Batch zu sammeln und den potenziellen Aufwand, der mit mehreren Aufrufen zur Bearbeitung derselben Art von Arbeit verbunden ist, zu vermeiden.

Der untenstehende Codeausschnitt erstellt eine Funktion, die mehrere Nachrichten in einem Array batchweise sammelt, wobei ein Microtask verwendet wird, um sie beim Ausgang des Kontexts als einzelnes Objekt zu senden.

```js
const messageQueue = [];

let sendMessage = (message) => {
  messageQueue.push(message);

  if (messageQueue.length === 1) {
    queueMicrotask(() => {
      const json = JSON.stringify(messageQueue);
      messageQueue.length = 0;
      fetch("url-of-receiver", json);
    });
  }
};
```

Wenn `sendMessage()` aufgerufen wird, wird die angegebene Nachricht zuerst in das Nachrichten-Warteschlangen-Array eingefügt. Dann wird es interessant.

Wenn die Nachricht, die wir gerade zum Array hinzugefügt haben, die erste ist, reihen wir einen Microtask ein, der einen Batch senden wird. Der Microtask wird, wie immer, ausgeführt, wenn der JavaScript-Ausführungspfad das oberste Niveau erreicht, kurz bevor Rückrufe ausgeführt werden. Das bedeutet, dass alle weiteren Aufrufe von `sendMessage()`, die in der Zwischenzeit erfolgen, ihre Nachrichten in die Nachrichten-Warteschlange schieben, aber aufgrund der Array-Längenprüfung vor dem Hinzufügen eines Microtasks, wird kein neuer Microtask eingereiht.

Wenn der Microtask dann ausgeführt wird, hat er ein Array von potenziell vielen Nachrichten, die auf ihn warten. Er beginnt damit, es als JSON unter Verwendung der Methode {{jsxref("JSON.stringify()")}} zu kodieren. Danach werden die Inhalte des Arrays nicht mehr benötigt, also leeren wir das `messageQueue`-Array. Schließlich verwenden wir die Methode [`fetch()`](/de/docs/Web/API/Window/fetch), um den JSON-String an den Server zu senden.

Dies ermöglicht es jedem Aufruf von `sendMessage()`, der während derselben Iteration der Ereignisschleife erfolgt, ihre Nachrichten zur gleichen `fetch()`-Operation hinzuzufügen, ohne dass potenziell andere Tasks wie Timeouts usw. die Übertragung verzögern.

Der Server wird den JSON-String empfangen und dann vermutlich dekodieren und die Nachrichten verarbeiten, die er im resultierenden Array findet.

## Beispiele

### Einfaches Microtask-Beispiel

In diesem einfachen Beispiel sehen wir, dass das Einreihen eines Microtasks dazu führt, dass der Rückruf des Microtasks ausgeführt wird, nachdem der Hauptteil dieses obersten Skripts fertig ist.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), der verwendet wird, um einen Microtask zur Ausführung zu planen. Dieser Aufruf wird von Aufrufen zu `log()`, einer benutzerdefinierten Funktion, die Text auf dem Bildschirm ausgibt, eingerahmt.

```js
log("Before enqueueing the microtask");
queueMicrotask(() => {
  log("The microtask has run.");
});
log("After enqueueing the microtask");
```

#### Ergebnis

{{EmbedLiveSample("Simple_microtask_example", 640, 80)}}

### Timeout- und Microtask-Beispiel

In diesem Beispiel wird ein Timeout geplant, das nach null Millisekunden (oder "so bald wie möglich") ausgelöst wird. Dies zeigt den Unterschied zwischen dem, was "so bald wie möglich" bedeutet, wenn ein neuer Task geplant wird (wie durch die Verwendung von `setTimeout()`), gegenüber der Verwendung eines Microtasks.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), der verwendet wird, um einen Microtask zur Ausführung zu planen. Dieser Aufruf wird von Aufrufen zu `log()`, einer benutzerdefinierten Funktion, die Text auf dem Bildschirm ausgibt, eingerahmt.

Der Code unten plant ein Timeout, das in null Millisekunden auftritt, und reiht dann einen Microtask ein. Dies wird von Aufrufen zu `log()` eingerahmt, um zusätzliche Nachrichten auszugeben.

```js
const callback = () => log("Regular timeout callback has run");

const urgentCallback = () => log("*** Oh noes! An urgent callback has run!");

log("Main program started");
setTimeout(callback, 0);
queueMicrotask(urgentCallback);
log("Main program exiting");
```

#### Ergebnis

{{EmbedLiveSample("Timeout_and_microtask_example", 640, 100)}}

Beachten Sie, dass die Ausgabe, die aus dem Hauptprogrammcode protokolliert wird, zuerst erscheint, gefolgt von der Ausgabe aus dem Microtask, gefolgt von dem Rückruf des Timeouts. Das liegt daran, dass, wenn der Task, der die Ausführung des Hauptprogramms handhabt, beendet wird, die Microtask-Warteschlange vor der Task-Warteschlange verarbeitet wird, auf der sich der Timeout-Rückruf befindet. Daran zu denken, dass Tasks und Microtasks auf separaten Warteschlangen gehalten werden und dass Microtasks zuerst ausgeführt werden, wird helfen, dies im Auge zu behalten.

### Microtask aus einer Funktion

Dieses Beispiel erweitert das vorherige leicht, indem eine Funktion hinzugefügt wird, die einige Arbeiten verrichtet. Diese Funktion verwendet `queueMicrotask()`, um einen Microtask zu planen. Der wichtige Punkt, den Sie hieraus mitnehmen sollten, ist, dass der Microtask nicht verarbeitet wird, wenn die Funktion beendet wird, sondern wenn das Hauptprogramm beendet wird.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Der Hauptprogrammcode folgt. Die Funktion `doWork()` hier ruft `queueMicrotask()` auf, doch der Microtask wird immer noch nicht ausgeführt, bis das gesamte Programm beendet ist, da dann der Task beendet wird und nichts anderes mehr auf dem Ausführungsstapel steht.

```js
const callback = () => log("Regular timeout callback has run");

const urgentCallback = () => log("*** Oh noes! An urgent callback has run!");

const doWork = () => {
  let result = 1;

  queueMicrotask(urgentCallback);

  for (let i = 2; i <= 10; i++) {
    result *= i;
  }
  return result;
};

log("Main program started");
setTimeout(callback, 0);
log(`10! equals ${doWork()}`);
log("Main program exiting");
```

#### Ergebnis

{{EmbedLiveSample("Microtask_from_a_function", 640, 100)}}

## Siehe auch

- [In Depth: Microtasks and the JavaScript runtime environment](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
- [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
  - [Einführung in asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing)
  - [Elegantes asynchrones Programmieren mit Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises)
