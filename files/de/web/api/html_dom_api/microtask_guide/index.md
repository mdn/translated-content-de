---
title: Verwenden von Microtasks in JavaScript mit queueMicrotask()
slug: Web/API/HTML_DOM_API/Microtask_guide
l10n:
  sourceCommit: e5a5e115ca1fb1019884a78a919a10c191954e1d
---

{{DefaultAPISidebar("HTML DOM")}}

Eine **Microtask** ist eine kurze Funktion, die ausgeführt wird, nachdem die Funktion oder das Programm, das sie erstellt hat, beendet ist _und_ nur, wenn der [JavaScript-Ausführungsstapel](/de/docs/Web/JavaScript/Event_loop#stack) leer ist, jedoch bevor die Kontrolle an die vom {{Glossary("user_agent", "User-Agent")}} verwendete Ereignisschleife zurückgegeben wird, die die Ausführungsumgebung des Skripts steuert.

Diese Ereignisschleife kann entweder die Hauptereignisschleife des Browsers oder die Ereignisschleife sein, die einen [Web Worker](/de/docs/Web/API/Web_Workers_API) antreibt. Dies ermöglicht es der gegebenen Funktion, auszuführen, ohne das Risiko einzugehen, die Ausführung eines anderen Skripts zu stören, und stellt gleichzeitig sicher, dass die Microtask ausgeführt wird, bevor der User-Agent die Gelegenheit hat, auf Aktionen zu reagieren, die von der Microtask durchgeführt wurden.

JavaScript-[Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und die [Mutation Observer API](/de/docs/Web/API/MutationObserver) nutzen beide die Microtask-Warteschlange, um ihre Callback-Funktionen auszuführen. Es gibt jedoch auch andere Fälle, in denen es hilfreich ist, Arbeit aufzuschieben, bis der aktuelle Durchlauf der Ereignisschleife abgeschlossen ist. Um Microtasks auch Drittherstellern, Frameworks und Polyfills zugänglich zu machen, wird die Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) in den Schnittstellen [`Window`](/de/docs/Web/API/Window) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) bereitgestellt.

## Tasks vs. Microtasks

Um Microtasks richtig zu diskutieren, ist es zunächst nützlich zu wissen, was eine JavaScript-Task ist und wie sich Microtasks von Tasks unterscheiden. Dies ist eine kurze, vereinfachte Erklärung. Für ausführlichere Informationen lesen Sie bitte den Artikel [Im Detail: Microtasks und die JavaScript-Laufzeitumgebung](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth).

### Tasks

Eine **Task** ist alles, was durch Standardmechanismen ausgeführt werden soll, z. B. der anfängliche Start eines Programms, das asynchrone Versenden eines Ereignisses oder das Auslösen eines Intervalls oder einer Timeout-Funktion. All dies wird in die **Task-Warteschlange** eingereiht.

Beispiele dafür, wann Tasks zur Task-Warteschlange hinzugefügt werden:

- Ein neues JavaScript-Programm oder -Unterprogramm wird ausgeführt (z. B. von einer Konsole oder durch direktes Ausführen des Codes in einem {{HTMLElement("script")}}-Element).
- Der Benutzer klickt auf ein Element. Eine Task wird erstellt, und alle Ereignis-Callbacks werden ausgeführt.
- Ein Timeout oder Intervall, das mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder [`setInterval()`](/de/docs/Web/API/Window/setInterval) erstellt wurde, wird erreicht, wodurch der entsprechende Callback der Task-Warteschlange hinzugefügt wird.

Die Ereignisschleife, die Ihren Code steuert, bearbeitet diese Tasks eine nach der anderen in der Reihenfolge, in der sie eingereiht wurden. Die älteste ausführbare Task in der Task-Warteschlange wird während eines einzelnen Durchlaufs der Ereignisschleife ausgeführt. Danach werden Microtasks ausgeführt, bis die Microtask-Warteschlange leer ist, und dann kann der Browser die Darstellung aktualisieren. Anschließend fährt der Browser mit der nächsten Iteration der Ereignisschleife fort.

### Microtasks

Zunächst erscheint der Unterschied zwischen Microtasks und Tasks gering. Und sie sind ähnlich; beide bestehen aus JavaScript-Code, der in eine Warteschlange eingereiht und zu einem geeigneten Zeitpunkt ausgeführt wird. Allerdings verarbeitet die Ereignisschleife die Microtask-Warteschlange sehr unterschiedlich im Vergleich zu der Art und Weise, wie Tasks bearbeitet werden.

Es gibt zwei Schlüsselunterschiede.

Erstens prüft die Ereignisschleife jedes Mal, wenn eine Task beendet wird, ob die Task die Kontrolle an anderen JavaScript-Code zurückgibt. Wenn nicht, werden alle Microtasks in der Microtask-Warteschlange ausgeführt. Die Microtask-Warteschlange wird also mehrmals pro Iteration der Ereignisschleife verarbeitet, auch nach der Bearbeitung von Ereignissen und anderen Callbacks.

Zweitens, wenn eine Microtask durch Aufrufen von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) weitere Microtasks zur Warteschlange hinzufügt, werden diese neu hinzugefügten Microtasks _vor der nächsten Task ausgeführt_. Dies liegt daran, dass die Ereignisschleife weiterhin Microtasks aufruft, bis keine mehr in der Warteschlange sind, selbst wenn weiterhin neue hinzugefügt werden.

> [!WARNING]
> Da Microtasks selbst weitere Microtasks in die Warteschlange einfügen können und die Ereignisschleife die Verarbeitung von Microtasks fortsetzt, bis die Warteschlange leer ist, besteht ein reales Risiko, dass die Ereignisschleife endlos Microtasks verarbeitet. Gehen Sie vorsichtig vor, wenn Sie rekursiv Microtasks hinzufügen.

## Verwendung von Microtasks

Bevor wir weiter in das Thema eintauchen, ist es wichtig, noch einmal zu betonen, dass die Mehrheit der Entwickler Microtasks kaum oder gar nicht verwenden wird. Sie sind ein hochspezialisiertes Feature moderner, browserbasierter JavaScript-Entwicklung, das es ermöglicht, Code so zu planen, dass er wichtige Vorgänge priorisiert. Missbrauch dieser Funktion kann zu Leistungsproblemen führen.

### Microtasks einreihen

Daher sollten Sie Microtasks in der Regel nur verwenden, wenn es keine andere Lösung gibt oder wenn Sie Frameworks oder Bibliotheken erstellen, die Microtasks benötigen, um die Funktionalität zu implementieren, die sie bereitstellen. In der Vergangenheit gab es Tricks, um Microtasks in die Warteschlange einzureihen (zum Beispiel durch das sofortige Auflösen eines Promises), aber die Einführung der Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) bietet eine standardisierte Möglichkeit, eine Microtask sicher und ohne Tricks einzuführen.

Durch die Einführung von `queueMicrotask()` können die Eigenheiten umgangen werden, die beim Einsatz von Promises zur Erstellung von Microtasks auftreten. Zum Beispiel werden bei der Verwendung von Promises als Microtasks Ausnahmen, die vom Callback ausgelöst werden, als abgelehnte Promises gemeldet und nicht als Standardausnahmen. Außerdem erfordert das Erstellen und Zerstören von Promises zusätzlichen Aufwand sowohl in Bezug auf Zeit als auch Speicher, den eine Funktion, die Microtasks ordnungsgemäß einreiht, vermeidet.

Übergeben Sie die JavaScript-{{jsxref("Function")}}, die innerhalb des Microtask-Kontexts aufgerufen werden soll, als Parameter an die Methode `queueMicrotask()`, die im globalen Kontext verfügbar ist, wie er entweder in der Schnittstelle [`Window`](/de/docs/Web/API/Window) oder [`Worker`](/de/docs/Web/API/Worker) definiert ist, je nach aktuellem Ausführungskontext.

```js
queueMicrotask(() => {
  /* code to run in the microtask here */
});
```

Die Microtask-Funktion selbst nimmt keine Parameter an und gibt keinen Wert zurück.

### Wann Microtasks verwendet werden sollten

In diesem Abschnitt betrachten wir Szenarien, in denen Microtasks besonders nützlich sind. Im Allgemeinen geht es darum, Ergebnisse zu erfassen oder zu überprüfen oder Bereinigungen durchzuführen, nachdem der Hauptteil des aktuellen JavaScript-Kontexts beendet ist, jedoch bevor Ereignishandler, Timeouts und Intervalle oder andere Callbacks verarbeitet werden.

Wann ist das nützlich?

Der Hauptgrund für die Verwendung von Microtasks ist: Konsistente Reihenfolge sicherzustellen, selbst wenn Ergebnisse oder Daten synchron verfügbar sind, und gleichzeitig das Risiko merklicher Verzögerungen in den Vorgängen zu verringern.

#### Konsistenz bei der bedingten Nutzung von Promises sicherstellen

Ein Szenario, in dem Microtasks verwendet werden können, um die Konsistenz der Ausführungsreihenfolge zu gewährleisten, ist, wenn Promises in einer Klausel einer `if...else`-Anweisung (oder einer anderen bedingten Anweisung) verwendet werden, aber nicht in der anderen. Betrachten Sie zum Beispiel folgenden Code:

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

Das Problem hier ist, dass wir in einem Zweig der `if...else`-Anweisung (wenn das Bild im Cache verfügbar ist) eine Task verwenden und in der `else`-Klausel Promises verwenden, was zu einer Situation führt, in der die Reihenfolge der Operationen variieren kann, wie unten dargestellt.

```js
element.addEventListener("load", () => console.log("Loaded data"));
console.log("Fetching data…");
element.getData();
console.log("Data fetched");
```

Wenn dieser Code zweimal nacheinander ausgeführt wird, ergeben sich folgende Ergebnisse:

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

Noch schlimmer, manchmal wird die `data`-Eigenschaft des Elements gesetzt, und manchmal nicht, wenn dieser Code ausgeführt wird.

Wir können die Konsistenz der Reihenfolge dieser Vorgänge sicherstellen, indem wir im `if`-Zweig eine Microtask verwenden, um die beiden Zweige auszugleichen:

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

Dieser Ansatz gleicht die Zweige aus, indem beide Situationen so behandelt werden, dass das Setzen von `data` und das Auslösen des `load`-Events innerhalb einer Microtask erfolgt (im `if`-Zweig mit `queueMicrotask()` und im `else`-Zweig mit den Promises, die `fetch()` zurückgibt).

#### Vorgänge bündeln

Sie können Microtasks auch verwenden, um mehrere Anforderungen aus verschiedenen Quellen in einem einzigen Batch zu bündeln und somit den möglichen Overhead zu vermeiden, der durch mehrere Aufrufe zur Bearbeitung derselben Art von Arbeit entsteht.

Das folgende Snippet erstellt eine Funktion, die mehrere Nachrichten in einem Array bündelt und eine Microtask nutzt, um sie als ein einzelnes Objekt zu senden, wenn der Kontext endet.

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

Wenn `sendMessage()` aufgerufen wird, wird die angegebene Nachricht zunächst in das Nachrichten-Array eingefügt. Dann wird es interessant.

Wenn die gerade hinzugefügte Nachricht die erste im Array ist, wird eine Microtask eingereiht, die ein Batch senden wird. Die Microtask wird, wie immer, ausgeführt, wenn der JavaScript-Ausführungspfad das oberste Niveau erreicht, direkt bevor Callbacks ausgeführt werden. Das bedeutet, dass alle weiteren Aufrufe von `sendMessage()`, die in der Zwischenzeit gemacht werden, ihre Nachrichten zum Nachrichten-Array hinzufügen werden. Aufgrund der Array-Längenprüfung, bevor eine Microtask hinzugefügt wird, wird jedoch keine neue Microtask eingereiht.

Wenn die Microtask ausgeführt wird, hat sie ein Array mit möglicherweise vielen Nachrichten, die darauf warten, verarbeitet zu werden. Sie beginnt damit, dieses Array als JSON mithilfe der Methode {{jsxref("JSON.stringify()")}} zu kodieren. Danach werden die Inhalte des Arrays nicht mehr benötigt, sodass wir das `messageQueue`-Array leeren. Schließlich nutzen wir die Methode [`fetch()`](/de/docs/Web/API/Window/fetch), um die JSON-Zeichenfolge an den Server zu senden.

Dies ermöglicht, dass jeder Aufruf von `sendMessage()`, der während derselben Iteration der Ereignisschleife gemacht wird, seine Nachrichten zur selben `fetch()`-Aktion hinzufügt, ohne dass andere Tasks wie Timeouts oder ähnliches die Übertragung verzögern könnten.

Der Server wird die JSON-Zeichenfolge empfangen, diese dann möglicherweise dekodieren und die darin enthaltenen Nachrichten verarbeiten.

## Beispiele

### Einfaches Beispiel für eine Microtask

In diesem einfachen Beispiel sehen wir, dass das Einreihen einer Microtask dazu führt, dass der Callback der Microtask ausgeführt wird, nachdem der Hauptteil dieses obersten Skripts abgeschlossen ist.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), um eine Microtask zu planen. Dieser Aufruf wird von Aufrufen der Funktion `log()` umrahmt, die Text auf dem Bildschirm ausgibt.

```js
log("Before enqueueing the microtask");
queueMicrotask(() => {
  log("The microtask has run.");
});
log("After enqueueing the microtask");
```

#### Ergebnis

{{EmbedLiveSample("Simple_microtask_example", 640, 80)}}

### Beispiel mit Timeout und Microtask

In diesem Beispiel wird ein Timeout geplant, das nach null Millisekunden (oder „so bald wie möglich“) ausgelöst wird. Dies zeigt den Unterschied, was „so bald wie möglich“ bedeutet, wenn eine neue Task (z. B. durch Verwendung von `setTimeout()`) im Vergleich zu einer Microtask geplant wird.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), um eine Microtask zu planen. Dieser Aufruf wird von Aufrufen der Funktion `log()` umrahmt, die Text auf dem Bildschirm ausgibt.

Der folgende Code plant ein Timeout, das in null Millisekunden ausgelöst wird, und reiht anschließend eine Microtask ein. Dieser Ablauf wird durch Aufrufe von `log()` unterbrochen, um zusätzliche Meldungen auszugeben.

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

Beachten Sie, dass die Ausgabe des Hauptprogramms zuerst erscheint, gefolgt von der Ausgabe der Microtask und schließlich dem Rückruf des Timeouts. Das liegt daran, dass, wenn die Task, die das Hauptprogramm ausführt, endet, die Microtask-Warteschlange vor der Task-Warteschlange, auf der sich der Timeout-Rückruf befindet, verarbeitet wird. Unterschiedliche Warteschlangen für Tasks und Microtasks und der Vorrang von Microtasks helfen, Missverständnisse zu vermeiden.

### Microtask aus einer Funktion

Dieses Beispiel erweitert das vorherige leicht, indem eine Funktion hinzugefügt wird, die einige Arbeiten ausführt. Diese Funktion verwendet `queueMicrotask()`, um eine Microtask zu planen. Wichtig dabei ist, dass die Microtask nicht beim Beenden der Funktion, sondern erst beim Beenden des Hauptprogramms verarbeitet wird.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Die Hauptprogrammcode folgt. Die Funktion `doWork()` ruft hier `queueMicrotask()` auf, dennoch wird die Microtask erst ausgelöst, wenn das gesamte Programm beendet ist, da die Task dann endet und sich nichts anderes mehr im Ausführungsstapel befindet.

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
