---
title: Verwenden von Microtasks in JavaScript mit queueMicrotask()
slug: Web/API/HTML_DOM_API/Microtask_guide
l10n:
  sourceCommit: 6b9019694341254ad8e3e0572f03988337f6f7ae
---

{{DefaultAPISidebar("HTML DOM")}}

Eine **Microtask** ist eine kurze Funktion, die nach der Funktion oder dem Programm ausgeführt wird, das sie erstellt hat _und_ nur, wenn der [JavaScript-Ausführungsstapel](/de/docs/Web/JavaScript/Reference/Execution_model#stack_and_execution_contexts) leer ist, jedoch bevor die Kontrolle wieder an die vom {{Glossary("user_agent", "User Agent")}} verwendete Ereignisschleife zurückgegeben wird, die die Ausführungsumgebung des Skripts antreibt.

Diese Ereignisschleife kann entweder die Hauptereignisschleife des Browsers oder die Ereignisschleife eines [Web Workers](/de/docs/Web/API/Web_Workers_API) sein. Dies ermöglicht es der angegebenen Funktion, ohne das Risiko, die Ausführung eines anderen Skripts zu stören, zu laufen, und stellt gleichzeitig sicher, dass die Microtask ausgeführt wird, bevor der User Agent die Möglichkeit hat, auf Aktionen zu reagieren, die von der Microtask durchgeführt werden.

JavaScript-[Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und die [Mutation Observer API](/de/docs/Web/API/MutationObserver) verwenden beide die Microtask-Warteschlange, um ihre Rückrufe auszuführen, aber es gibt auch andere Fälle, in denen die Möglichkeit, Arbeit bis zum Abschluss der aktuellen Ereignisschleifenpassage zu verschieben, hilfreich ist. Um die Verwendung von Microtasks durch Drittbibliotheken, Frameworks und Polyfills zu ermöglichen, wird die Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) auf den Schnittstellen [`Window`](/de/docs/Web/API/Window) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) bereitgestellt.

## Tasks vs. Microtasks

Um Microtasks richtig zu diskutieren, ist es zunächst nützlich zu wissen, was eine JavaScript-Task ist und wie sich Microtasks von Tasks unterscheiden. Dies ist eine schnelle, vereinfachte Erklärung, aber wenn Sie mehr Details wünschen, können Sie die Informationen im Artikel [Im Detail: Microtasks und die JavaScript-Laufzeitumgebung](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth) lesen.

### Tasks

Eine **Task** ist alles, was durch die Standardmechanismen ausgeführt werden soll, wie z.B. das initiale Starten eines Programms, ein asynchron gesendetes Ereignis oder ein ausgelöstes Intervall oder Timeout. All diese werden in die **Task-Warteschlange** eingereiht.

Beispielsweise werden Tasks zur Task-Warteschlange hinzugefügt, wenn:

- Ein neues JavaScript-Programm oder -Teilprogramm ausgeführt wird (z. B. von einer Konsole oder durch Ausführen des Codes in einem {{HTMLElement("script")}}-Element) direkt.
- Der Benutzer auf ein Element klickt. Dann wird eine Task erstellt und alle Ereignisrückrufe werden ausgeführt.
- Ein mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder [`setInterval()`](/de/docs/Web/API/Window/setInterval) erstelltes Timeout oder Intervall erreicht wird, was dazu führt, dass der entsprechende Rückruf in die Task-Warteschlange eingefügt wird.

Die Ereignisschleife, die Ihren Code steuert, bearbeitet diese Tasks nacheinander in der Reihenfolge, in der sie eingereiht wurden. Die älteste ausführbare Task in der Task-Warteschlange wird während einer einzigen Iteration der Ereignisschleife ausgeführt. Danach werden Microtasks ausgeführt, bis die Microtask-Warteschlange leer ist, und dann kann der Browser das Rendering aktualisieren. Dann geht der Browser zur nächsten Iteration der Ereignisschleife über.

### Microtasks

Auf den ersten Blick scheint der Unterschied zwischen Microtasks und Tasks gering zu sein. Und sie sind ähnlich; beide bestehen aus JavaScript-Code, der in eine Warteschlange gestellt wird und zur geeigneten Zeit ausgeführt wird. Der Unterschied liegt jedoch darin, dass die Ereignisschleife nur die Tasks ausführt, die zu Beginn der Iteration in der Warteschlange waren, eine nach der anderen, während sie die Microtask-Warteschlange ganz anders handhabt.

Es gibt zwei wesentliche Unterschiede:

1. Jedes Mal, wenn eine Task endet, prüft die Ereignisschleife, ob die Task die Kontrolle an anderen JavaScript-Code übergibt. Wenn nicht, führt sie alle Microtasks in der Microtask-Warteschlange aus. Die Microtask-Warteschlange wird also mehrfach pro Iteration der Ereignisschleife bearbeitet, auch nach der Bearbeitung von Ereignissen und anderen Rückrufen.
2. Wenn eine Microtask durch den Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) weitere Microtasks zur Warteschlange hinzufügt, werden diese neu hinzugefügten Microtasks _ausgeführt, bevor die nächste Task ausgeführt wird_. Das liegt daran, dass die Ereignisschleife Microtasks weiter aufruft, bis keine mehr in der Warteschlange sind, selbst wenn ständig weitere hinzugefügt werden.

> [!WARNING]
> Da Microtasks selbst mehr Microtasks einreihen können und die Ereignisschleife die Microtasks weiter bearbeitet, bis die Warteschlange leer ist, besteht ein echtes Risiko, dass die Ereignisschleife endlos Microtasks verarbeitet. Gehen Sie vorsichtig vor, wenn Sie rekursiv Microtasks hinzufügen.

## Verwendung von Microtasks

Bevor wir weiter ins Detail gehen, ist es wichtig, nochmals zu betonen, dass die meisten Entwickler Microtasks kaum oder gar nicht verwenden werden. Sie sind ein hochspezialisiertes Feature der modernen browserbasierten JavaScript-Entwicklung, das es Ihnen ermöglicht, Code vor anderen Dingen in der langen Liste der Dinge, die auf dem Computer des Benutzers passieren, zu planen. Missbrauch dieser Fähigkeit wird zu Leistungsproblemen führen.

### Einreihen von Microtasks

Daher sollten Sie Microtasks typischerweise nur verwenden, wenn es keine andere Lösung gibt oder wenn Sie Frameworks oder Bibliotheken erstellen, die zur Implementierung der von ihnen bereitgestellten Funktionalität Microtasks nutzen müssen. Während es in der Vergangenheit Tricks gab, die es ermöglichten, Microtasks einzureihen (wie das sofortige Auflösen eines Promises), fügt die Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) eine standardisierte Möglichkeit hinzu, eine Microtask sicher und ohne Tricks einzuführen.

Durch die Einführung von `queueMicrotask()` können die Eigenheiten vermieden werden, die auftreten, wenn man sich mit Promises zur Erstellung von Microtasks einmischt. Zum Beispiel werden bei der Verwendung von Promises zur Erstellung von Microtasks Ausnahmen, die vom Rückruf ausgelöst werden, als abgelehnte Promises anstatt als Standardausnahmen gemeldet. Außerdem verursachen das Erstellen und Zerstören von Promises zusätzlichen Aufwand, sowohl in Bezug auf Zeit als auch auf Speicher, den eine Funktion, die Microtasks ordnungsgemäß einreiht, vermeidet.

Übergeben Sie die JavaScript-{{jsxref("Function")}}, die aufgerufen werden soll, während der Kontext Microtasks verarbeitet, an die `queueMicrotask()`-Methode, die im globalen Kontext bereitgestellt wird, wie es entweder von der [`Window`](/de/docs/Web/API/Window)- oder der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle definiert ist, abhängig vom aktuellen Ausführungskontext.

```js
queueMicrotask(() => {
  /* code to run in the microtask here */
});
```

Die Microtask-Funktion selbst nimmt keine Parameter entgegen und gibt keinen Wert zurück.

### Wann sollen Microtasks verwendet werden

In diesem Abschnitt betrachten wir Szenarien, in denen Microtasks besonders nützlich sind. Im Allgemeinen geht es darum, Ergebnisse zu erfassen oder zu prüfen oder Bereinigungen durchzuführen, nachdem der Hauptkörper eines JavaScript-Ausführungskontextes beendet ist—aber _bevor_ Ereignis-Handler, Timeouts und Intervalle oder andere Rückrufe verarbeitet werden.

Wann ist das nützlich?

Der Hauptgrund für die Verwendung von Microtasks ist es, die konsistente Reihenfolge von Tasks sicherzustellen, selbst wenn Ergebnisse oder Daten synchron verfügbar sind, und gleichzeitig das Risiko von für den Benutzer wahrnehmbaren Verzögerungen bei Operationen zu reduzieren.

#### Sicherstellen der Reihenfolge bei bedingter Verwendung von Promises

Eine Situation, in der Microtasks verwendet werden können, um sicherzustellen, dass die Reihenfolge der Ausführung immer konsistent ist, ist, wenn Promises in einer Klausel einer `if...else`-Anweisung (oder einer anderen bedingten Anweisung) verwendet werden, aber nicht in der anderen Klausel. Betrachten Sie Code wie diesen:

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

Das hier eingeführte Problem besteht darin, dass wir durch die Verwendung einer Task in einem Zweig der `if...else`-Anweisung (im Fall, in dem das Bild im Cache verfügbar ist), aber indem Promises in der `else`-Klausel involviert sind, eine Situation haben, in der die Reihenfolge der Operationen variieren kann; zum Beispiel, wie unten gezeigt.

```js
element.addEventListener("load", () => console.log("Loaded data"));
console.log("Fetching data…");
element.getData();
console.log("Data fetched");
```

Das zweimalige Ausführen dieses Codes ergibt die folgenden Ergebnisse.

Wenn die Daten nicht im Cache sind:

```plain
Fetching data…
Data fetched
Loaded data
```

Wenn die Daten im Cache sind:

```plain
Fetching data…
Loaded data
Data fetched
```

Noch schlimmer ist, dass manchmal die `data`-Eigenschaft des Elements gesetzt wird, aber andere Male wird sie nicht abgeschlossen, bevor dieser Code abgeschlossen ist.

Wir können eine konsistente Reihenfolge dieser Operationen sicherstellen, indem wir eine Microtask in der `if`-Klausel verwenden, um die beiden Klauseln auszugleichen:

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

Dies gleicht die Klauseln aus, indem beide Situationen das Setzen von `data` und das Auslösen des `load`-Ereignisses innerhalb einer Microtask behandeln (Verwendung von `queueMicrotask()` in der `if`-Klausel und Verwendung der Promises durch [`fetch()`](/de/docs/Web/API/Window/fetch) in der `else`-Klausel).

#### Stapelverarbeitung von Operationen

Sie können auch Microtasks verwenden, um mehrere Anfragen aus verschiedenen Quellen zu einer einzigen Charge zu sammeln, um den möglichen Aufwand, der mit mehreren Anrufen zur Behandlung derselben Art von Arbeit verbunden ist, zu vermeiden.

Der untenstehende Codeausschnitt erstellt eine Funktion, die mehrere Nachrichten in einem Array stapelt, indem eine Microtask verwendet wird, um sie als ein einziges Objekt zu senden, wenn der Kontext beendet wird.

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

Wenn `sendMessage()` aufgerufen wird, wird die angegebene Nachricht zunächst dem Nachrichtenwarteschlangen-Array hinzugefügt. Dann wird es interessant.

Wenn die gerade hinzugefügte Nachricht die erste ist, reihen wir eine Microtask ein, die eine Charge sendet. Die Microtask wird ausgeführt, wie immer, wenn der JavaScript-Ausführungspfad die oberste Ebene erreicht, kurz bevor Rückrufe ausgeführt werden. Das bedeutet, dass alle weiteren Aufrufe von `sendMessage()`, die in der Zwischenzeit erfolgen, ihre Nachrichten in die Nachrichtenwarteschlange schieben werden, aber aufgrund der Array-Längenüberprüfung, bevor eine Microtask hinzugefügt wird, wird keine neue Microtask eingereiht.

Wenn die Microtask ausgeführt wird, hat sie also ein Array von möglicherweise vielen wartenden Nachrichten. Es beginnt damit, es als JSON mit der {{jsxref("JSON.stringify()")}}-Methode zu kodieren. Danach sind die Inhalte des Arrays nicht mehr erforderlich, also leeren wir das `messageQueue`-Array. Schließlich verwenden wir die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode, um den JSON-String an den Server zu senden.

Dies ermöglicht es jedem Aufruf von `sendMessage()`, der während derselben Iteration der Ereignisschleife gemacht wird, ihre Nachrichten an dieselbe `fetch()`-Operation hinzuzufügen, ohne dass möglicherweise andere Tasks wie Timeouts oder ähnliches die Übertragung verzögern.

Der Server wird den JSON-String empfangen, dann voraussichtlich dekodieren und die Nachrichten verarbeiten, die er im resultierenden Array findet.

## Beispiele

### Einfaches Microtask-Beispiel

In diesem einfachen Beispiel sehen wir, dass das Einreihen einer Microtask dazu führt, dass der Rückruf der Microtask ausgeführt wird, nachdem der Hauptkörper dieses obersten Skripts fertig ist.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), um eine Microtask auszuführen. Dieser Aufruf wird von Anrufen an `log()`, einer benutzerdefinierten Funktion, die Text auf dem Bildschirm ausgibt, umrahmt.

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

In diesem Beispiel wird ein Timeout geplant, das nach null Millisekunden (oder „so bald wie möglich“) ausgelöst wird. Dies demonstriert den Unterschied zwischen dem, was „so bald wie möglich“ bedeutet, wenn eine neue Task geplant wird (wie mit `setTimeout()`) im Vergleich zur Verwendung einer Microtask.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), um eine Microtask auszuführen. Dieser Aufruf wird von Anrufen an `log()`, einer benutzerdefinierten Funktion, die Text auf dem Bildschirm ausgibt, umrahmt.

Der Code unten plant ein Timeout, das in null Millisekunden auftritt, und reiht dann eine Microtask ein. Dies wird von Aufrufen an `log()` umrahmt, um zusätzliche Nachrichten auszugeben.

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

Beachten Sie, dass die von dem Hauptprogrammkörper protokollierte Ausgabe zuerst erscheint, gefolgt von der Ausgabe der Microtask, gefolgt vom Rückruf des Timeouts. Das liegt daran, dass, wenn die Task, die die Ausführung des Hauptprogramms bearbeitet, endet, die Microtask-Warteschlange verarbeitet wird, bevor die Task-Warteschlange, auf der sich der Timeout-Rückruf befindet, bearbeitet wird. Um dies im Kopf zu behalten, denken Sie daran, dass Tasks und Microtasks in separaten Warteschlangen gehalten werden und dass Microtasks zuerst ausgeführt werden.

### Microtask aus einer Funktion

Dieses Beispiel erweitert das vorherige leicht, indem eine Funktion hinzugefügt wird, die eine Arbeit ausführt. Diese Funktion verwendet `queueMicrotask()`, um eine Microtask zu planen. Das Wichtigste, das Sie hier mitnehmen sollten, ist, dass die Microtask nicht verarbeitet wird, wenn die Funktion endet, sondern wenn das Hauptprogramm endet.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Der folgende Hauptprogrammcode folgt. Die `doWork()`-Funktion hier ruft `queueMicrotask()` auf, und dennoch wird die Microtasks nicht ausgeführt, bis das gesamte Programm endet, da das die Task beendet und nichts anderes mehr im Ausführungsstapel ist.

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
