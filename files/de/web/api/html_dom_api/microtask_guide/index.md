---
title: Verwendung von Microtasks in JavaScript mit queueMicrotask()
slug: Web/API/HTML_DOM_API/Microtask_guide
l10n:
  sourceCommit: ef63cb0276aac0bd34a4baae3854cce62b651de3
---

{{DefaultAPISidebar("HTML DOM")}}

Ein **Microtask** ist eine kurze Funktion, die ausgeführt wird, nachdem die Funktion oder das Programm, das sie erstellt hat, beendet ist _und_ nur, wenn der [JavaScript-Ausführungsstack](/de/docs/Web/JavaScript/Event_loop#stack) leer ist, jedoch bevor die Kontrolle an die vom {{Glossary("user_agent", "User-Agent")}} verwendete Ereignisschleife zurückgegeben wird, um die Ausführungsumgebung des Skripts zu steuern.

Diese Ereignisschleife kann entweder die Hauptereignisschleife des Browsers oder die Ereignisschleife sein, die einen [Web Worker](/de/docs/Web/API/Web_Workers_API) antreibt. Dies lässt die gegebene Funktion ausführen, ohne das Risiko, dass sie die Ausführung eines anderen Skripts beeinträchtigt, stellt jedoch auch sicher, dass der Microtask ausgeführt wird, bevor der User-Agent die Möglichkeit hat, auf vom Microtask vorgenommene Aktionen zu reagieren.

JavaScript-[Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und die [Mutation Observer API](/de/docs/Web/API/MutationObserver) verwenden beide die Microtask-Warteschlange, um ihre Rückrufe auszuführen, aber es gibt andere Zeiten, in denen die Fähigkeit, Arbeit zu verschieben, bis der aktuelle Durchlauf der Ereignisschleife abgeschlossen ist, hilfreich ist. Um Microtasks von Drittanbieter-Bibliotheken, Frameworks und Polyfills verwenden zu lassen, wird die Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) auf den Schnittstellen [`Window`](/de/docs/Web/API/Window) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) bereitgestellt.

## Tasks vs. Microtasks

Um Microtasks richtig zu besprechen, ist es zunächst nützlich zu wissen, was ein JavaScript-Task ist und wie sich Microtasks von Tasks unterscheiden. Dies ist eine schnelle, vereinfachte Erklärung, aber wenn Sie mehr Details möchten, können Sie die Informationen im Artikel [In depth: Microtasks and the JavaScript runtime environment](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth) lesen.

### Tasks

Ein **Task** ist alles, was durch die Standardmechanismen zur Ausführung eingeplant wird, wie z.B. das anfängliche Starten eines Programms, ein asynchron ausgelöstes Ereignis oder ein ausgelöstes Intervall oder Timeout. Diese werden alle in die **Task-Warteschlange** eingeplant.

Zum Beispiel werden Tasks in die Task-Warteschlange hinzugefügt, wenn:

- Ein neues JavaScript-Programm oder Teilprogramm ausgeführt wird (z.B. über eine Konsole oder durch das Ausführen des Codes in einem {{HTMLElement("script")}}-Element) direkt.
- Der Benutzer auf ein Element klickt. Ein Task wird dann erstellt und führt alle Ereignis-Rückrufe aus.
- Ein mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder [`setInterval()`](/de/docs/Web/API/Window/setInterval) erstelltes Timeout oder Intervall erreicht den Zeitpunkt, an dem der entsprechende Rückruf in die Task-Warteschlange hinzugefügt wird.

Die Ereignisschleife, die Ihren Code steuert, behandelt diese Tasks nacheinander in der Reihenfolge, in der sie eingefügt wurden. Der älteste ausführbare Task in der Task-Warteschlange wird während eines einzelnen Durchlaufs der Ereignisschleife ausgeführt. Danach werden Microtasks ausgeführt, bis die Microtask-Warteschlange leer ist, und dann kann der Browser das Rendering aktualisieren. Dann fährt der Browser mit dem nächsten Durchlauf der Ereignisschleife fort.

### Microtasks

Zunächst scheint der Unterschied zwischen Microtasks und Tasks gering. Und sie sind ähnlich; beide bestehen aus JavaScript-Code, der in eine Warteschlange gestellt und zu einer passenden Zeit ausgeführt wird. Während jedoch die Ereignisschleife nur die Tasks ausführt, die in der Warteschlange vorhanden sind, wenn die Iteration begann, behandelt sie die Microtask-Warteschlange sehr unterschiedlich.

Es gibt zwei wesentliche Unterschiede.

Erstens prüft die Ereignisschleife jedes Mal, wenn ein Task beendet wird, ob der Task die Kontrolle an anderen JavaScript-Code zurückgibt. Wenn nicht, führt sie alle Microtasks in der Microtask-Warteschlange aus. Die Microtask-Warteschlange wird also mehrfach pro Iteration der Ereignisschleife verarbeitet, einschließlich nach der Bearbeitung von Ereignissen und anderen Rückrufen.

Zweitens, wenn ein Microtask mehr Microtasks zur Warteschlange hinzufügt, indem er [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) aufruft, werden diese neu hinzugefügten Microtasks _vor dem nächsten Task ausgeführt_. Das liegt daran, dass die Ereignisschleife weiterhin Microtasks aufruft, bis keine mehr in der Warteschlange sind, auch wenn weitere hinzugefügt werden.

> [!WARNING]
> Da Microtasks selbst weitere Microtasks in die Warteschlange einfügen können und die Ereignisschleife weiterhin Microtasks verarbeitet, bis die Warteschlange leer ist, besteht ein echtes Risiko, dass die Ereignisschleife endlos Microtasks verarbeitet. Seien Sie vorsichtig, wie Sie rekursiv Microtasks hinzufügen.

## Verwendung von Microtasks

Bevor wir weiter in dieses Thema einsteigen, ist es wichtig, noch einmal darauf hinzuweisen, dass die meisten Entwickler Microtasks nicht oft oder überhaupt nicht verwenden werden. Sie sind eine hochspezialisierte Funktion der modernen browserbasierten JavaScript-Entwicklung, die es Ihnen ermöglicht, Code vor anderen Dingen zu planen, die auf dem Computer des Benutzers geschehen sollen. Der Missbrauch dieser Fähigkeit führt zu Leistungsproblemen.

### Einreihen von Microtasks

Daher sollten Sie Microtasks in der Regel nur verwenden, wenn es keine andere Lösung gibt oder wenn Sie Frameworks oder Bibliotheken erstellen, die Microtasks benötigen, um die Funktionalität zu implementieren, die sie bereitstellen. Während es in der Vergangenheit Tricks gab, die es ermöglichten, Microtasks einzureihen (z.B. durch das Erstellen eines sofort aufgelösten Versprechens), bietet die Hinzufügung der Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) eine standardisierte Möglichkeit, einen Microtask sicher und ohne Tricks einzuführen.

Durch die Einführung von `queueMicrotask()` können die Eigenheiten vermieden werden, die auftreten, wenn man sich mit Versprechen in Microtasks einschleicht. Beispielsweise werden bei der Verwendung von Versprechen, um Microtasks zu erstellen, durch den Rückruf ausgelöste Ausnahmen als abgelehnte Versprechen gemeldet, anstatt als normale Ausnahmen gemeldet zu werden. Außerdem erfordert das Erstellen und Zerstören von Versprechen zusätzlichen Aufwand sowohl in Bezug auf Zeit als auch auf Speicher, den eine Funktion, die Microtasks ordnungsgemäß einreiht, vermeidet.

Übergeben Sie die JavaScript-{{jsxref("Function")}}, die während des Kontextes der Microtask-Bearbeitung aufgerufen werden soll, an die Methode `queueMicrotask()`, die im globalen Kontext verfügbar gemacht wird, wie sie entweder durch die [`Window`](/de/docs/Web/API/Window)- oder die [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle definiert ist, abhängig vom aktuellen Ausführungskontext.

```js
queueMicrotask(() => {
  /* code to run in the microtask here */
});
```

Die Microtask-Funktion selbst nimmt keine Parameter und gibt keinen Wert zurück.

### Wann man Microtasks verwenden sollte

In diesem Abschnitt werfen wir einen Blick auf Szenarien, in denen Microtasks besonders nützlich sind. Im Allgemeinen geht es um das Erfassen oder Überprüfen von Ergebnissen oder das Durchführen von Bereinigungen, nachdem der Hauptteil eines JavaScript-Ausführungskontexts beendet ist, jedoch bevor Ereignishandler, Timeouts und Intervalle oder andere Rückrufe verarbeitet werden.

Wann ist das nützlich?

Der Hauptgrund für die Verwendung von Microtasks ist: um eine konsistente Reihenfolge von Tasks sicherzustellen, selbst wenn Ergebnisse oder Daten synchron verfügbar sind, und gleichzeitig das Risiko von vom Benutzer wahrnehmbaren Verzögerungen bei Operationen zu verringern.

#### Sicherstellung der Reihenfolge bei bedingter Verwendung von Versprechen

Eine Situation, in der Microtasks verwendet werden können, um sicherzustellen, dass die Reihenfolge der Ausführung immer konsistent ist, ist, wenn Versprechen in einer Klausel einer `if...else`-Anweisung (oder einer anderen bedingten Anweisung) verwendet werden, aber nicht in der anderen Klausel. Betrachten Sie einen Code wie diesen:

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

Das Problem, das hier entsteht, ist, dass bei Verwendung eines Tasks in einem Zweig der `if...else`-Anweisung (im Fall, dass das Bild im Cache verfügbar ist) und der Verwendung von Versprechen in der `else`-Klausel, wir eine Situation haben, in der die Reihenfolge der Operationen variieren kann; zum Beispiel, wie unten zu sehen.

```js
element.addEventListener("load", () => console.log("Loaded data"));
console.log("Fetching data…");
element.getData();
console.log("Data fetched");
```

Das zweimalige Ausführen dieses Codes hintereinander ergibt die folgenden Ergebnisse.

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

Noch schlimmer, manchmal wird die `data`-Eigenschaft des Elements gesetzt und manchmal nicht, wenn dieser Code fertig ist.

Wir können sicherstellen, dass die Reihenfolge dieser Operationen konsistent ist, indem wir einen Microtask in der `if`-Klausel verwenden, um die beiden Klauseln auszugleichen:

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

Dies gleicht die Klauseln aus, indem in beiden Situationen das Setzen von `data` und das Auslösen des `load`-Ereignisses innerhalb eines Microtasks behandelt wird (indem `queueMicrotask()` in der `if`-Klausel und die von [`fetch()`](/de/docs/Web/API/Window/fetch) verwendeten Versprechen in der `else`-Klausel verwendet werden).

#### Bündelung von Operationen

Sie können auch Microtasks verwenden, um mehrere Anfragen aus verschiedenen Quellen in einem einzigen Batch zu sammeln, und so den möglichen Aufwand vermeiden, der mit mehreren Anrufen zur Bearbeitung derselben Art von Arbeit verbunden ist.

Der untenstehende Code erstellt eine Funktion, die mehrere Nachrichten in einem Array bündelt, indem ein Microtask verwendet wird, um sie als einzelnes Objekt zu senden, wenn der Kontext beendet ist.

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

Wenn `sendMessage()` aufgerufen wird, wird die spezifizierte Nachricht zunächst in das Nachrichtenwarteschlangen-Array eingefügt. Dann wird es interessant.

Wenn die gerade hinzugefügte Nachricht die erste ist, reihen wir einen Microtask ein, der eine Sendepartie ausführt. Der Microtask wird, wie immer, ausgeführt, wenn der JavaScript-Ausführungspfad die oberste Ebene erreicht, kurz bevor Rückrufe ausgeführt werden. Das bedeutet, dass alle weiteren Aufrufe von `sendMessage()` im Zwischenzeitraum ihre Nachrichten auf die Nachrichtenwarteschlange setzen, aber aufgrund der Array-Längenprüfung vor dem Hinzufügen eines Microtasks wird kein neuer Microtask eingeplant.

Wenn der Microtask dann ausgeführt wird, hat er ein Array mit potenziell vielen Nachrichten, die auf ihn warten. Es beginnt damit, es mit der Methode {{jsxref("JSON.stringify()")}} als JSON zu kodieren. Danach werden die Inhalte des Arrays nicht mehr benötigt, also leeren wir das `messageQueue`-Array. Schließlich verwenden wir die Methode [`fetch()`](/de/docs/Web/API/Window/fetch), um den JSON-String an den Server zu senden.

Dies ermöglicht es, dass jeder Aufruf von `sendMessage()`, der während der gleichen Iteration der Ereignisschleife erfolgt, seine Nachrichten zur gleichen `fetch()`-Operation hinzufügt, ohne dass möglicherweise andere Tasks wie Timeouts oder dergleichen die Übertragung verzögern.

Der Server empfängt den JSON-String, dekodiert ihn vermutlich und verarbeitet die Nachrichten, die er im resultierenden Array findet.

## Beispiele

### Einfaches Microtask-Beispiel

In diesem einfachen Beispiel sehen wir, dass das Einreihen eines Microtasks dazu führt, dass der Rückruf des Microtasks ausgeführt wird, nachdem der Hauptteil dieses obersten Skripts ausgeführt wurde.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), der zum Einreihen eines Microtasks verwendet wird, der ausgeführt werden soll. Dieser Aufruf wird von Aufrufen von `log()` umrahmt, einer benutzerdefinierten Funktion, die Text auf den Bildschirm ausgibt.

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

In diesem Beispiel wird ein Timeout geplant, das nach null Millisekunden (oder "so schnell wie möglich") ablaufen soll. Dies zeigt den Unterschied zwischen dem, was "so schnell wie möglich" bedeutet, wenn ein neuer Task eingeplant wird (z.B. durch die Verwendung von `setTimeout()`), im Vergleich zur Verwendung eines Microtasks.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), der zum Einreihen eines Microtasks verwendet wird, der ausgeführt werden soll. Dieser Aufruf wird von Aufrufen von `log()` umrahmt, einer benutzerdefinierten Funktion, die Text auf den Bildschirm ausgibt.

Der untenstehende Code plant ein Timeout, das nach null Millisekunden auftreten soll, und reiht dann einen Microtask ein. Dies wird von Aufrufen von `log()` umrahmt, um zusätzliche Nachrichten auszugeben.

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

Beachten Sie, dass die Ausgaben, die vom Hauptprogrammcode protokolliert werden, zuerst erscheinen, gefolgt von den Ausgaben des Microtasks, gefolgt vom Rückruf des Timeout. Das liegt daran, dass, wenn der Task, der die Ausführung des Hauptprogramms bearbeitet, beendet ist, die Microtask-Warteschlange vor der Task-Warteschlange verarbeitet wird, auf der sich der Timeout-Rückruf befindet. Das Verständnis, dass Tasks und Microtasks in getrennten Warteschlangen gehalten werden und dass Microtasks zuerst ausgeführt werden, hilft, dies klar zu behalten.

### Microtask aus einer Funktion

Dieses Beispiel erweitert das vorherige leicht, indem eine Funktion hinzugefügt wird, die einige Arbeiten ausführt. Diese Funktion verwendet `queueMicrotask()`, um einen Microtask einzureihen. Wichtig ist hierbei, dass der Microtask nicht beim Beenden der Funktion verarbeitet wird, sondern wenn das Hauptprogramm endet.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Der Hauptprogrammcode folgt. Die Funktion `doWork()` ruft hier `queueMicrotask()` auf, dennoch wird der Microtask erst ausgeführt, wenn das gesamte Programm beendet ist, da der Task zu diesem Zeitpunkt beendet ist und nichts anderes auf dem Ausführungsstack bleibt.

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

- [In depth: Microtasks and the JavaScript runtime environment](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
- [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
  - [Einführung in asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous/Introducing)
  - [Kooperatives asynchrones JavaScript: Timeouts und Intervalle](/de/docs/Learn/JavaScript/Asynchronous)
  - [Graciles asynchrones Programmieren mit Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises)
