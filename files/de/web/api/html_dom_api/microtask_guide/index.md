---
title: Verwendung von Microtasks in JavaScript mit queueMicrotask()
slug: Web/API/HTML_DOM_API/Microtask_guide
l10n:
  sourceCommit: 60fcf9497ef19a8578c19d640cf04b6a34d44849
---

{{DefaultAPISidebar("HTML DOM")}}

Ein **Microtask** ist eine kurze Funktion, die ausgeführt wird, nachdem die Funktion oder das Programm, das sie erstellt hat, beendet ist _und_ nur, wenn der [JavaScript-Ausführungsstapel](/de/docs/Web/JavaScript/Reference/Execution_model#stack_and_execution_contexts) leer ist, aber bevor die Kontrolle an die vom {{Glossary("user_agent", "User-Agent")}} verwendete Ereignisschleife zur Steuerung der Ausführungsumgebung des Skripts zurückgegeben wird.

Diese Ereignisschleife kann entweder die Hauptereignisschleife des Browsers oder die Ereignisschleife sein, die einen [Web Worker](/de/docs/Web/API/Web_Workers_API) steuert. Dies ermöglicht es, dass die gegebene Funktion ohne das Risiko ausgeführt wird, die Ausführung eines anderen Skripts zu stören, stellt jedoch auch sicher, dass der Microtask ausgeführt wird, bevor der User-Agent die Möglichkeit hat, auf Aktionen zu reagieren, die vom Microtask ausgeführt wurden.

JavaScript-[Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und die [Mutation Observer API](/de/docs/Web/API/MutationObserver) verwenden beide die Microtask-Warteschlange, um ihre Rückrufe auszuführen, aber es gibt andere Zeiten, in denen die Fähigkeit, Arbeit zu verschieben, bis der aktuelle Durchlauf der Ereignisschleife abgeschlossen ist, hilfreich ist. Um zu ermöglichen, dass Microtasks von Drittanbieterbibliotheken, Frameworks und Polyfills genutzt werden, wird die Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) in den Schnittstellen [`Window`](/de/docs/Web/API/Window) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) bereitgestellt.

## Tasks vs. Microtasks

Um Microtasks richtig zu besprechen, ist es zunächst nützlich zu wissen, was ein JavaScript-Task ist und wie sich Microtasks von Tasks unterscheiden. Dies ist eine kurze, vereinfachte Erklärung, aber wenn Sie mehr Details wünschen, können Sie die Informationen im Artikel [Im Detail: Microtasks und die JavaScript-Laufzeitumgebung](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth) lesen.

### Tasks

Ein **Task** ist alles, was geplant ist, um von den standardmäßigen Mechanismen ausgeführt zu werden, wie z. B. das ursprüngliche Starten eines Programms, das asynchrone Senden eines Ereignisses oder das Auslösen eines Intervalls oder Zeitlimits. All diese werden in der **Task-Warteschlange** geplant.

Zum Beispiel werden Tasks der Task-Warteschlange hinzugefügt, wenn:

- Ein neues JavaScript-Programm oder Unterprogramm wird ausgeführt (z. B. aus einer Konsole oder durch das direkte Ausführen des Codes in einem {{HTMLElement("script")}}-Element).
- Der Benutzer klickt auf ein Element. Daraufhin wird ein Task erstellt und alle Ereignisrückrufe werden ausgeführt.
- Ein Timeout oder Intervall, das mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder [`setInterval()`](/de/docs/Web/API/Window/setInterval) erstellt wurde, erreicht wird, was dazu führt, dass der entsprechende Rückruf der Task-Warteschlange hinzugefügt wird.

Die Ereignisschleife, die Ihren Code steuert, verarbeitet diese Tasks nacheinander in der Reihenfolge, in der sie in die Warteschlange gestellt wurden. Der älteste ausführbare Task in der Task-Warteschlange wird während eines einzelnen Durchgangs der Ereignisschleife ausgeführt. Danach werden Microtasks ausgeführt, bis die Microtask-Warteschlange leer ist, und dann kann der Browser sich entscheiden, das Rendering zu aktualisieren. Anschließend wechselt der Browser zur nächsten Iteration der Ereignisschleife.

### Microtasks

Anfangs scheint der Unterschied zwischen Microtasks und Tasks gering zu sein. Und sie sind ähnlich; beide bestehen aus JavaScript-Code, der in eine Warteschlange gestellt und zu einem geeigneten Zeitpunkt ausgeführt wird. Die Ereignisschleife behandelt die Task-Warteschlange jedoch sehr unterschiedlich im Vergleich zur Microtask-Warteschlange.

Es gibt zwei wesentliche Unterschiede.

Erstens überprüft die Ereignisschleife jedes Mal, wenn ein Task beendet wird, ob der Task die Kontrolle an anderen JavaScript-Code zurückgibt. Wenn nicht, führt sie alle Microtasks in der Microtask-Warteschlange aus. Die Microtask-Warteschlange wird also während jeder Iteration der Ereignisschleife mehrfach verarbeitet, einschließlich nach der Verarbeitung von Ereignissen und anderen Rückrufen.

Zweitens, wenn ein Microtask weitere Microtasks in die Warteschlange stellt, indem er [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) aufruft, werden diese neu hinzugefügten Microtasks _vor der Ausführung des nächsten Tasks_ ausgeführt. Das liegt daran, dass die Ereignisschleife weiterhin Microtasks aufruft, bis keine mehr in der Warteschlange sind, selbst wenn weitere hinzugefügt werden.

> [!WARNING]
> Da Microtasks selbst weitere Microtasks in die Warteschlange stellen können und die Ereignisschleife weiterhin Microtasks verarbeitet, bis die Warteschlange leer ist, besteht ein echtes Risiko, dass die Ereignisschleife endlos Microtasks verarbeitet. Seien Sie vorsichtig bei der rekursiven Hinzufügung von Microtasks.

## Verwendung von Microtasks

Bevor wir weiter darauf eingehen, ist es wichtig, noch einmal zu betonen, dass die meisten Entwickler Microtasks nicht oft oder gar nicht verwenden werden. Sie sind eine hoch spezialisierte Funktion der modernen Browser-basierten JavaScript-Entwicklung, die es ermöglicht, Code so zu planen, dass er vor anderen Dingen in der langen Reihe von Dingen ausgeführt wird, die auf dem Computer des Benutzers geschehen sollen. Missbrauch dieser Fähigkeit führt zu Leistungsproblemen.

### Einreihen von Microtasks

Daher sollten Sie Microtasks normalerweise nur verwenden, wenn es keine andere Lösung gibt oder wenn Frameworks oder Bibliotheken erstellt werden, die Microtasks verwenden müssen, um die Funktionalität zu erzeugen, die sie implementieren. Es gab früher Tricks, mit denen es möglich war, Microtasks in der Vergangenheit einzureihen (zum Beispiel durch das Erstellen eines sofort aufgelösten Promise), aber die Ergänzung der Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) fügt eine standardisierte Möglichkeit hinzu, einen Microtask sicher und ohne Tricks einzuführen.

Durch die Einführung von `queueMicrotask()` können die Eigenheiten vermieden werden, die auftauchen, wenn Promises verwendet werden, um Microtasks zu erstellen. Beispielsweise werden bei der Verwendung von Promises zur Erstellung von Microtasks Ausnahmen, die durch den Rückruf geworfen werden, als abgelehnte Promises gemeldet, anstatt als Standard-Ausnahmen gemeldet zu werden. Außerdem erfordert das Erstellen und Zerstören von Promises zusätzlichen Aufwand sowohl in Bezug auf Zeit als auch auf Speicher, den eine Funktion, die Microtasks ordnungsgemäß einreiht, vermeidet.

Übergeben Sie die JavaScript-{{jsxref("Function")}}, die aufgerufen werden soll, während der Kontext Microtasks verarbeitet, in die Methode `queueMicrotask()`, die im globalen Kontext je nach aktuellem Ausführungskontext entweder durch die Schnittstelle [`Window`](/de/docs/Web/API/Window) oder [`Worker`](/de/docs/Web/API/Worker) definiert ist.

```js
queueMicrotask(() => {
  /* code to run in the microtask here */
});
```

Die Microtask-Funktion selbst nimmt keine Parameter entgegen und gibt keinen Wert zurück.

### Wann Microtasks verwendet werden sollten

In diesem Abschnitt schauen wir uns Szenarien an, in denen Microtasks besonders nützlich sind. Im Allgemeinen geht es darum, Ergebnisse zu erfassen oder zu überprüfen oder Aufräumarbeiten durchzuführen, nachdem der Hauptbestandteil eines JavaScript-Ausführungskontexts beendet ist, aber bevor Ereignishandler, Timeouts und Intervalle oder andere Rückrufe verarbeitet werden.

Wann ist das nützlich?

Der Hauptgrund für die Verwendung von Microtasks ist: um eine konsistente Reihenfolge von Tasks sicherzustellen, selbst wenn Ergebnisse oder Daten synchron verfügbar sind, während gleichzeitig das Risiko von benutzererkennbaren Verzögerungen bei Operationen verringert wird.

#### Sicherstellung der Reihenfolge bei bedingter Verwendung von Promises

Eine Situation, in der Microtasks verwendet werden können, um sicherzustellen, dass die Reihenfolge der Ausführung immer konsistent ist, liegt vor, wenn Promises in einem Zweig einer `if...else`-Anweisung (oder einer anderen bedingten Anweisung) verwendet werden, aber nicht im anderen Zweig. Betrachten Sie zum Beispiel folgenden Code:

```js
customElement.prototype.getData = function (url) {
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

Das hier eingeführte Problem ist, dass durch die Verwendung eines Tasks in einem Zweig der `if...else`-Anweisung (in dem Fall, dass das Bild im Cache verfügbar ist), aber die Verwendung von Promises im `else`-Zweig, es zu einer Situation kommt, in der die Reihenfolge der Operationen variieren kann; zum Beispiel, wie unten gezeigt.

```js
element.addEventListener("load", () => console.log("Loaded data"));
console.log("Fetching data…");
element.getData();
console.log("Data fetched");
```

Das zweimalige Ausführen dieses Codes in Folge gibt die folgenden Ergebnisse.

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

Noch schlimmer ist, dass manchmal die `data`-Eigenschaft des Elements gesetzt wird und manchmal nicht, wenn dieser Code ausgeführt wird.

Wir können die konsistente Reihenfolge dieser Operationen sicherstellen, indem wir im `if`-Zweig einen Microtask verwenden, um die beiden Zweige auszugleichen:

```js
customElement.prototype.getData = function (url) {
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

Dies gleicht die Zweige aus, indem in beiden Situationen das Setzen von `data` und das Auslösen des `load`-Ereignisses innerhalb eines Microtasks behandelt werden (Verwendung von `queueMicrotask()` im `if`-Zweig und Verwendung der Promises, die durch [`fetch()`](/de/docs/Web/API/Window/fetch) im `else`-Zweig genutzt werden).

#### Batch-Verarbeitung von Operationen

Sie können auch Microtasks verwenden, um mehrere Anfragen aus verschiedenen Quellen in einem einzigen Batch zu sammeln und so den möglichen Overhead zu vermeiden, der mit mehreren Aufrufen zur Bearbeitung der gleichen Art von Arbeit verbunden ist.

Der unten stehende Snippet erstellt eine Funktion, die mehrere Nachrichten in einem Array sammelt und einen Microtask verwendet, um sie als ein einziges Objekt zu senden, wenn der Kontext beendet ist.

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

Wenn `sendMessage()` aufgerufen wird, wird die angegebene Nachricht zuerst in das Nachrichtenwarteschlangenarray eingefügt. Dann wird es interessant.

Wenn die Nachricht, die wir gerade in das Array eingefügt haben, die erste ist, reihen wir einen Microtask ein, der ein Batch sendet. Der Microtask wird ausgeführt, wie immer, wenn der JavaScript-Ausführungspfad die oberste Ebene erreicht, direkt bevor Rückrufe ausgeführt werden. Das bedeutet, dass alle weiteren Aufrufe von `sendMessage()`, die in der Zwischenzeit erfolgen, ihre Nachrichten in die Nachrichtenwarteschlange einfügen, aber aufgrund der Überprüfung der Array-Länge vor dem Hinzufügen eines Microtasks, wird kein neuer Microtask eingereiht.

Wenn der Microtask ausgeführt wird, hat er dann ein Array von potenziell vielen Nachrichten, die auf ihn warten. Er beginnt damit, es mithilfe der Methode {{jsxref("JSON.stringify()")}} als JSON zu kodieren. Danach sind die Inhalte des Arrays nicht mehr erforderlich, also leeren wir das `messageQueue`-Array. Schließlich verwenden wir die Methode [`fetch()`](/de/docs/Web/API/Window/fetch), um den JSON-String an den Server zu senden.

Dies ermöglicht es, dass jeder Aufruf von `sendMessage()`, der während derselben Iteration der Ereignisschleife erfolgt, ihre Nachrichten der gleichen `fetch()`-Operation hinzufügt, ohne dass möglicherweise andere Tasks wie Timeouts oder Ähnliches die Übertragung verzögern.

Der Server wird den JSON-String empfangen und dann vermutlich decodieren und die Nachrichten verarbeiten, die er im resultierenden Array findet.

## Beispiele

### Einfaches Microtask-Beispiel

In diesem einfachen Beispiel sehen wir, dass das Einreihen eines Microtasks den Microtask-Rückruf dazu bringt, nach dem Ausführen des Hauptprogramms auf oberster Ebene zu laufen.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), der verwendet wird, um einen Microtask zur Ausführung zu planen. Dieser Aufruf wird von Aufrufen von `log()`, einer benutzerdefinierten Funktion zum Ausgeben von Text auf dem Bildschirm, eingerahmt.

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

In diesem Beispiel wird ein Timeout so geplant, dass es nach null Millisekunden (oder "so schnell wie möglich") ausgelöst wird. Dies demonstriert den Unterschied zwischen dem, was "so schnell wie möglich" bedeutet, wenn ein neuer Task geplant wird (wie durch die Verwendung von `setTimeout()`) im Vergleich zur Verwendung eines Microtasks.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), der verwendet wird, um einen Microtask zur Ausführung zu planen. Dieser Aufruf wird von Aufrufen von `log()` eingerahmt, um zusätzliche Nachrichten auszugeben.

Der folgende Code plant ein Timeout für null Millisekunden und reiht dann einen Microtask ein. Dies wird von Aufrufen von `log()` eingerahmt, um zusätzliche Nachrichten auszugeben.

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

Beachten Sie, dass die vom Hauptprogrammkörper protokollierte Ausgabe zuerst erscheint, gefolgt von der Ausgabe des Microtasks, gefolgt vom Zeitüberschreitungsrückruf. Das liegt daran, dass die Microtask-Warteschlange verarbeitet wird, wenn der Task, der die Ausführung des Hauptprogramms verarbeitet, abgeschlossen ist, bevor die Task-Warteschlange, in der sich der Zeitüberschreitungsrückruf befindet, aufgerufen wird. Dass Tasks und Microtasks in separaten Warteschlangen gehalten werden und dass Microtasks zuerst ausgeführt werden, wird Ihnen helfen, dies im Hinterkopf zu behalten.

### Microtask aus einer Funktion

Dieses Beispiel erweitert das vorherige leicht, indem eine Funktion hinzugefügt wird, die etwas Arbeit verrichtet. Diese Funktion verwendet `queueMicrotask()`, um einen Microtask zu planen. Das Wichtige hier ist, dass der Microtask nicht beim Verlassen der Funktion, sondern beim Verlassen des Hauptprogramms verarbeitet wird.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Der Hauptprogrammkode folgt. Die Funktion `doWork()` ruft hier `queueMicrotask()` auf, dennoch wird der Microtask erst ausgelöst, wenn das gesamte Programm abgeschlossen ist, da dies der Moment ist, in dem der Task beendet wird und sich nichts mehr im Ausführungsstapel befindet.

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

- [Im Detail: Microtasks und die JavaScript-Laufzeitumgebung](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
- [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
  - [Einführung in asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing)
  - [Elegante asynchrone Programmierung mit Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises)
