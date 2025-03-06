---
title: Verwendung von Microtasks in JavaScript mit queueMicrotask()
slug: Web/API/HTML_DOM_API/Microtask_guide
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{DefaultAPISidebar("HTML DOM")}}

Ein **Microtask** ist eine kurze Funktion, die nach dem Verlassen der Funktion oder des Programms, das ihn erstellt hat, _und_ nur dann ausgeführt wird, wenn der [JavaScript-Ausführungsstapel](/de/docs/Web/JavaScript/Reference/Execution_model#stack) leer ist, aber bevor die Kontrolle an die Ereignisschleife zurückgegeben wird, die vom {{Glossary("user_agent", "User-Agent")}} zur Steuerung der Ausführungsumgebung des Skripts verwendet wird.

Diese Ereignisschleife kann entweder die Hauptereignisschleife des Browsers oder die Ereignisschleife sein, die einen [Web Worker](/de/docs/Web/API/Web_Workers_API) treibt. Dies ermöglicht es der angegebenen Funktion, ohne das Risiko einer Beeinträchtigung der Ausführung eines anderen Skripts zu laufen, stellt jedoch auch sicher, dass der Microtask ausgeführt wird, bevor der User-Agent die Möglichkeit hat, auf Aktionen zu reagieren, die der Microtask vorgenommen hat.

JavaScript [Promisen](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und die [Mutation Observer API](/de/docs/Web/API/MutationObserver) verwenden beide die Microtask-Warteschlange, um ihre Rückrufe auszuführen, aber es gibt andere Zeiten, in denen die Möglichkeit, Arbeit bis zum Abschluss des aktuellen Durchgangs der Ereignisschleife zu verschieben, hilfreich ist. Um es Drittanbieter-Bibliotheken, Frameworks und Polyfills zu ermöglichen, Microtasks zu verwenden, wird die Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) in den Schnittstellen [`Window`](/de/docs/Web/API/Window) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) bereitgestellt.

## Aufgaben vs. Microtasks

Um Microtasks richtig zu diskutieren, ist es zunächst nützlich zu wissen, was eine JavaScript-Aufgabe ist und wie sich Microtasks von Aufgaben unterscheiden. Dies ist eine kurze, vereinfachte Erklärung, aber wenn Sie mehr Details wünschen, können Sie die Informationen im Artikel [Im Detail: Microtasks und die JavaScript-Ausführungsumgebung](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth) lesen.

### Aufgaben

Eine **Aufgabe** ist alles, was durch die Standardmechanismen geplant ist, wie das erste Starten eines Programms, das asynchrone Auslösen eines Ereignisses oder das Erreichen eines Zeitlimits oder Intervalls. All diese Dinge werden in der **Aufgabenwarteschlange** angesetzt.

Beispielsweise werden Aufgaben zur Aufgabenwarteschlange hinzugefügt, wenn:

- Ein neues JavaScript-Programm oder Unterprogramm ausgeführt wird (z. B. von einer Konsole oder durch Ausführen des Codes in einem {{HTMLElement("script")}}-Element) direkt.
- Der Benutzer auf ein Element klickt. Dann wird eine Aufgabe erstellt, die alle Ereignis-Rückrufe ausführt.
- Ein Timeout oder Intervall, das mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder [`setInterval()`](/de/docs/Web/API/Window/setInterval) erstellt wurde, erreicht wird, wodurch der entsprechende Rückruf zur Aufgabenwarteschlange hinzugefügt wird.

Die Ereignisschleife, die Ihren Code steuert, bearbeitet diese Aufgaben nacheinander in der Reihenfolge, in der sie in die Warteschlange eingereiht wurden. Die älteste ausführbare Aufgabe in der Aufgabenwarteschlange wird während einer einzelnen Iteration der Ereignisschleife ausgeführt. Danach werden Microtasks ausgeführt, bis die Microtask-Warteschlange leer ist, und dann kann der Browser entscheiden, die Darstellung zu aktualisieren. Dann wechselt der Browser zur nächsten Iteration der Ereignisschleife.

### Microtasks

Zunächst scheint der Unterschied zwischen Microtasks und Aufgaben gering. Und sie sind ähnlich; beide bestehen aus JavaScript-Code, der in einer Warteschlange platziert wird und zu einem geeigneten Zeitpunkt ausgeführt wird. Während jedoch die Ereignisschleife nur die Aufgaben ausführt, die sich zu Beginn der Iteration in der Warteschlange befinden, bearbeitet sie die Microtask-Warteschlange ganz anders.

Es gibt zwei wesentliche Unterschiede.

Erstens überprüft die Ereignisschleife jedes Mal, wenn eine Aufgabe beendet ist, ob die Aufgabe die Kontrolle an anderen JavaScript-Code zurückgibt. Falls nicht, werden alle Microtasks in der Microtask-Warteschlange ausgeführt. Die Microtask-Warteschlange wird dann mehrmals pro Iteration der Ereignisschleife verarbeitet, einschließlich nach der Behandlung von Ereignissen und anderen Rückrufen.

Zweitens, wenn ein Microtask mehr Microtasks zur Warteschlange hinzufügt, indem er [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) aufruft, werden diese neu hinzugefügten Microtasks _ausgeführt, bevor die nächste Aufgabe ausgeführt wird_. Denn die Ereignisschleife wird die Microtasks so lange aufrufen, bis keine mehr in der Warteschlange sind, selbst wenn mehr hinzugefügt werden.

> [!WARNING]
> Da Microtasks selbst weitere Microtasks in die Warteschlange einreihen können und die Ereignisschleife die Microtasks weiter bearbeitet, bis die Warteschlange leer ist, besteht die reale Gefahr, dass die Ereignisschleife endlos Microtasks verarbeitet. Seien Sie vorsichtig, wie Sie rekursiv weitere Microtasks hinzufügen.

## Verwendung von Microtasks

Bevor Sie tiefer in dieses Thema eintauchen, ist es wichtig, noch einmal darauf hinzuweisen, dass die meisten Entwickler Microtasks wenig, wenn überhaupt, verwenden werden. Sie sind ein hochspezialisiertes Feature der modernen browserbasierten JavaScript-Entwicklung, das es Ihnen ermöglicht, Code vor andere Dinge in der langen Reihe von Dingen zu schalten, die auf dem Computer des Benutzers ausgeführt werden sollen. Der Missbrauch dieser Fähigkeit führt zu Leistungsproblemen.

### Einreihen von Microtasks

Daher sollten Sie Microtasks in der Regel nur verwenden, wenn es keine andere Lösung gibt oder wenn Sie Frameworks oder Bibliotheken erstellen, die Microtasks verwenden müssen, um die von ihnen implementierte Funktionalität zu erzeugen. Während es in der Vergangenheit Tricks gab, die es ermöglichten, Microtasks einzureihen (zum Beispiel durch Erstellen einer sofort auflösbaren Promise), bietet die Einführung der Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) einen standardisierten Weg, um sicher und ohne Tricks einen Microtask einzuführen.

Durch die Einführung von `queueMicrotask()` können die Eigenheiten vermieden werden, die auftreten, wenn man sich Promises zunutze macht, um Microtasks zu erstellen. Beispielsweise werden beim Verwenden von Promises zur Erstellung von Microtasks Ausnahmen, die vom Rückruf geworfen werden, als zurückgewiesene Promises gemeldet, anstatt als Standard-Ausnahmen gemeldet zu werden. Außerdem bedeutet das Erstellen und Zerstören von Promises zusätzlichen Overhead sowohl in Bezug auf Zeit als auch Speicher, den eine Funktion vermeidet, die korrekt Microtasks einreiht.

Übergeben Sie die JavaScript {{jsxref("Function")}}, die während des Handlings von Microtasks aufgerufen werden soll, in die Methode `queueMicrotask()`, die im globalen Kontext bereitgestellt wird, wie entweder durch die Schnittstelle [`Window`](/de/docs/Web/API/Window) oder [`Worker`](/de/docs/Web/API/Worker) definiert, abhängig vom aktuellen Ausführungskontext.

```js
queueMicrotask(() => {
  /* code to run in the microtask here */
});
```

Die Microtask-Funktion selbst nimmt keine Parameter an und gibt keinen Wert zurück.

### Wann man Microtasks verwenden sollte

In diesem Abschnitt werfen wir einen Blick auf Szenarien, in denen Microtasks besonders nützlich sind. Im Allgemeinen geht es darum, Ergebnisse zu erfassen oder zu überprüfen oder Aufräumarbeiten durchzuführen, nachdem der Hauptteil eines JavaScript-Ausführungskontexts verlassen wird, jedoch bevor Ereignishandler, Zeitlimits und Intervalle oder andere Rückrufe verarbeitet werden.

Wann ist das nützlich?

Der Hauptgrund, um Microtasks zu verwenden, ist: um eine konsistente Reihenfolge der Aufgaben sicherzustellen, selbst wenn Ergebnisse oder Daten synchron verfügbar sind, und gleichzeitig das Risiko von für den Benutzer wahrnehmbaren Verzögerungen in den Operationen zu minimieren.

#### Sicherstellung der Reihenfolge bei bedingter Verwendung von Promises

Eine Situation, in der Microtasks verwendet werden können, um sicherzustellen, dass die Ausführungsreihenfolge immer konsistent ist, ist, wenn Promises in einer Bedingung einer `if...else`-Anweisung (oder einer anderen Bedingungsanweisung) verwendet werden, aber nicht in der anderen Bedingung. Betrachten Sie Code wie diesen:

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

Das hier eingeführte Problem ist, dass durch die Verwendung einer Aufgabe in einem Zweig der `if...else`-Anweisung (in dem Fall, in dem das Bild im Cache verfügbar ist) und der Einbeziehung von Promises im `else`-Zweig, wir eine Situation haben, in der die Reihenfolge der Operationen variieren kann; zum Beispiel wie unten gezeigt.

```js
element.addEventListener("load", () => console.log("Loaded data"));
console.log("Fetching data…");
element.getData();
console.log("Data fetched");
```

Die zweimal hintereinander ausgeführte Ausführung dieses Codes führt zu den folgenden Ergebnissen.

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

Noch schlimmer, manchmal wird die `data`-Eigenschaft des Elements gesetzt und manchmal nicht, bis dieser Code ausgeführt wird.

Wir können sicherstellen, dass diese Operationen konsistent geordnet sind, indem wir im `if`-Zweig einen Microtask verwenden, um die beiden Zweige auszugleichen:

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

Dies gleicht die Zweige aus, indem beide Situationen das Setzen von `data` und das Auslösen des `load`-Ereignisses innerhalb eines Microtasks handhaben (durch Verwendung von `queueMicrotask()` im `if`-Zweig und durch Verwendung der von [`fetch()`](/de/docs/Web/API/Window/fetch) verwendeten Promises im `else`-Zweig).

#### Stapelverarbeitung von Operationen

Sie können Microtasks auch verwenden, um mehrere Anfragen aus verschiedenen Quellen in einem einzigen Stapel zu sammeln, wodurch der mögliche Overhead durch mehrere Anrufe zur Bearbeitung derselben Art von Arbeit vermieden wird.

Der unten stehende Schnipsel erstellt eine Funktion, die mehrere Nachrichten in einem Array stapelt und einen Microtask verwendet, um sie als einzelnes Objekt zu senden, wenn der Kontext beendet wird.

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

Wenn `sendMessage()` aufgerufen wird, wird die angegebene Nachricht zuerst in das Nachrichtenwarteschlangen-Array geschoben. Dann wird es interessant.

Wenn die Nachricht, die wir gerade zum Array hinzugefügt haben, die erste ist, reihen wir einen Microtask ein, der einen Stapel sendet. Der Microtask wird – wie immer – ausgeführt, wenn der JavaScript-Ausführungspfad die oberste Ebene erreicht, kurz bevor Rückrufe ausgeführt werden. Das bedeutet, dass alle weiteren Aufrufe von `sendMessage()`, die in der Zwischenzeit gemacht werden, ihre Nachrichten an die Nachrichtenwarteschlange anhängen, aber wegen der Array-Längenprüfung vor dem Hinzufügen eines Microtasks, wird kein neuer Microtask eingereiht.

Wenn der Microtask dann ausgeführt wird, hat er ein Array mit möglicherweise vielen Nachrichten, die auf ihn warten. Zuerst wird es als JSON unter Verwendung der Methode {{jsxref("JSON.stringify()")}} kodiert. Danach werden die Inhalte des Arrays nicht mehr benötigt, also leeren wir das `messageQueue`-Array. Schließlich verwenden wir die Methode [`fetch()`](/de/docs/Web/API/Window/fetch), um die JSON-Zeichenfolge an den Server zu senden.

Dies ermöglicht es jedem Aufruf von `sendMessage()`, der während derselben Iteration der Ereignisschleife gemacht wurde, ihre Nachrichten zur selben `fetch()`-Operation hinzuzufügen, ohne dass möglicherweise andere Aufgaben, wie Zeitlimits oder dergleichen, die Übertragung verzögern.

Der Server erhält die JSON-Zeichenfolge und wird sie vermutlich decodieren und die Nachrichten im resultierenden Array verarbeiten.

## Beispiele

### Einfaches Microtask-Beispiel

In diesem einfachen Beispiel sehen wir, dass das Einreihen eines Microtasks dazu führt, dass der Rückruf des Microtasks ausgeführt wird, nachdem der Hauptteil dieses Top-Level-Skripts ausgeführt wurde.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), der einen Microtask zur Ausführung plant. Dieser Aufruf wird von Aufrufen von `log()`, einer benutzerdefinierten Funktion, die Text auf dem Bildschirm ausgibt, umrahmt.

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

In diesem Beispiel wird ein Timeout auf null Millisekunden (oder "so schnell wie möglich") geplant. Dies zeigt den Unterschied zwischen dem, was "so schnell wie möglich" bedeutet, wenn man eine neue Aufgabe plant (wie z.B. durch die Verwendung von `setTimeout()`), im Vergleich zur Verwendung eines Microtasks.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), der einen Microtask zur Ausführung plant. Dieser Aufruf wird von Aufrufen von `log()`, einer benutzerdefinierten Funktion, die Text auf dem Bildschirm ausgibt, umrahmt.

Der Code unten plant ein Timeout, das in null Millisekunden auftritt, und reiht dann einen Microtask ein. Dies wird von Aufrufen von `log()` umrahmt, um zusätzliche Nachrichten auszugeben.

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

Beachten Sie, dass die aus dem Hauptprogramm ausgestoßene Ausgabe zuerst erscheint, gefolgt von der Ausgabe des Microtasks und schließlich dem Rückruf des Timeouts. Das liegt daran, dass, wenn die Aufgabe, die die Ausführung des Hauptprogramms bearbeitet, beendet ist, die Microtask-Warteschlange verarbeitet wird, bevor die Aufgabenwarteschlange, auf der sich der Timeout-Rückruf befindet. Das Verständnis, dass Aufgaben und Microtasks in separaten Warteschlangen gehalten werden und dass Microtasks zuerst ausgeführt werden, hilft, dies zu verstehen.

### Microtask aus einer Funktion

Dieses Beispiel erweitert das vorherige geringfügig, indem eine Funktion hinzugefügt wird, die einige Arbeiten ausführt. Diese Funktion verwendet `queueMicrotask()`, um einen Microtask zu planen. Wichtig hierbei ist, dass der Microtask nicht verarbeitet wird, wenn die Funktion beendet wird, sondern wenn das Hauptprogramm beendet wird.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Der Hauptprogrammcode folgt. Die Funktion `doWork()` ruft hier `queueMicrotask()` auf, trotzdem wird der Microtask immer noch nicht ausgeführt, bis das gesamte Programm beendet ist, da dies der Moment ist, in dem die Aufgabe beendet wird und nichts anderes mehr auf dem Ausführungsstapel ist.

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

- [Im Detail: Microtasks und die JavaScript-Ausführungsumgebung](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
- [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
  - [Einführung in asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing)
  - [Anmutige asynchrone Programmierung mit Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises)
