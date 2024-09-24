---
title: Verwendung von Microtasks in JavaScript mit queueMicrotask()
slug: Web/API/HTML_DOM_API/Microtask_guide
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Ein **Microtask** ist eine kurze Funktion, die nach dem Beenden der Funktion oder des Programms, das sie erstellt hat, ausgeführt wird _und_ nur, wenn der [JavaScript-Ausführungsstapel](/de/docs/Web/JavaScript/Event_loop#stack) leer ist, jedoch bevor die Kontrolle an die durch den {{Glossary("user agent")}} verwendete Ereignisschleife zurückgegeben wird, die die Skriptausführungsumgebung steuert.

Diese Ereignisschleife kann entweder die Hauptereignisschleife des Browsers oder die Ereignisschleife sein, die einen [Web Worker](/de/docs/Web/API/Web_Workers_API) antreibt. Dadurch kann die gegebene Funktion ausgeführt werden, ohne das Risiko einzugehen, die Ausführung eines anderen Skripts zu stören, und es wird sichergestellt, dass der Microtask ausgeführt wird, bevor der User Agent die Möglichkeit hat, auf Aktionen zu reagieren, die der Microtask durchgeführt hat.

JavaScript-[Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und die [Mutation Observer API](/de/docs/Web/API/MutationObserver) verwenden beide die Microtask-Warteschlange, um ihre Rückrufe auszuführen. Es gibt jedoch auch andere Zeiten, in denen die Möglichkeit, Arbeit aufzuschieben, bis der aktuelle Durchlauf der Ereignisschleife abgeschlossen ist, hilfreich ist. Um die Verwendung von Microtasks durch Drittanbieter-Bibliotheken, Frameworks und Polyfills zu ermöglichen, wird die Methode {{domxref("queueMicrotask()")}} auf den Schnittstellen {{domxref("Window")}} und {{domxref("Worker")}} bereitgestellt.

## Tasks vs. Microtasks

Um Microtasks ordnungsgemäß zu diskutieren, ist es zunächst nützlich zu wissen, was ein JavaScript-Task ist und wie sich Microtasks von Tasks unterscheiden. Dies ist eine kurze, vereinfachte Erklärung, aber wenn Sie mehr Details wünschen, können Sie die Informationen im Artikel [Im Detail: Microtasks und die JavaScript-Laufzeitumgebung](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth) lesen.

### Tasks

Ein **Task** ist alles, was durch die Standardmechanismen geplant ist, wie das initiale Starten eines Programms, ein Ereignis, das asynchron ausgelöst wird, oder ein Intervall oder Timeout, das abgefeuert wird. Diese werden alle in der **Task-Warteschlange** geplant.

Beispielsweise werden Tasks der Task-Warteschlange hinzugefügt, wenn:

- Ein neues JavaScript-Programm oder -Unterprogramm ausgeführt wird (z. B. aus einer Konsole oder durch das Ausführen des Codes in einem {{HTMLElement("script")}}-Element) direkt.
- Der Benutzer ein Element anklickt. Ein Task wird dann erstellt und führt alle Ereignis-Rückrufe aus.
- Ein Timeout oder Intervall, das mit {{domxref("setTimeout()")}} oder {{domxref("setInterval()")}} erstellt wurde, erreicht wurde, wodurch der entsprechende Rückruf zur Task-Warteschlange hinzugefügt wird.

Die Ereignisschleife, die Ihren Code antreibt, verarbeitet diese Tasks nacheinander in der Reihenfolge, in der sie in die Warteschlange gestellt wurden. Der älteste ausführbare Task in der Task-Warteschlange wird während einer einzigen Iteration der Ereignisschleife ausgeführt. Danach werden Microtasks ausgeführt, bis die Microtask-Warteschlange leer ist, und dann kann der Browser wählen, die Darstellung zu aktualisieren. Dann geht der Browser zur nächsten Iteration der Ereignisschleife über.

### Microtasks

Zunächst scheint der Unterschied zwischen Microtasks und Tasks gering zu sein. Und sie sind ähnlich; beide bestehen aus JavaScript-Code, der in eine Warteschlange gestellt wird und zu einem angemessenen Zeitpunkt ausgeführt wird. Während jedoch die Ereignisschleife nur die bei Beginn der Iteration in der Warteschlange vorhandenen Tasks nacheinander ausführt, behandelt sie die Microtask-Warteschlange sehr unterschiedlich.

Es gibt zwei wesentliche Unterschiede.

Erstens überprüft die Ereignisschleife jedes Mal, wenn ein Task beendet wird, ob der Task die Kontrolle an anderen JavaScript-Code zurückgibt. Wenn nicht, führt sie alle Microtasks in der Microtask-Warteschlange aus. Die Microtask-Warteschlange wird dann mehrmals pro Iteration der Ereignisschleife verarbeitet, einschließlich nach der Verarbeitung von Ereignissen und anderen Rückrufen.

Zweitens, wenn ein Microtask mehr Microtasks in die Warteschlange stellt, indem {{domxref("queueMicrotask()")}} aufgerufen wird, werden diese neu hinzugefügten Microtasks _ausgeführt, bevor der nächste Task ausgeführt wird_. Das liegt daran, dass die Ereignisschleife weiterhin Microtasks aufruft, bis keine mehr in der Warteschlange verbleiben, auch wenn mehr hinzugefügt werden.

> [!WARNING]
> Da Microtasks selbst mehr Microtasks in die Warteschlange einfügen können und die Ereignisschleife weiterhin Microtasks verarbeitet, bis die Warteschlange leer ist, besteht ein reales Risiko, dass die Ereignisschleife endlos Microtasks verarbeitet. Seien Sie vorsichtig, wie Sie rekursiv Microtasks hinzufügen.

## Verwendung von Microtasks

Bevor wir hier weitergehen, ist es wichtig erneut darauf hinzuweisen, dass die meisten Entwickler Microtasks kaum oder gar nicht verwenden werden. Es handelt sich um ein hochspezialisiertes Merkmal der modernen, browserbasierten JavaScript-Entwicklung, das es Ihnen ermöglicht, Code zu planen, der vor anderen Dingen eingereiht wird, die darauf warten, auf dem Computer des Benutzers zu passieren. Der Missbrauch dieser Fähigkeit führt zu Leistungsproblemen.

### Microtasks in die Warteschlange stellen

Daher sollten Sie Microtasks typischerweise nur verwenden, wenn keine andere Lösung vorhanden ist oder wenn Frameworks oder Bibliotheken erstellt werden, die Microtasks verwenden müssen, um die von ihnen implementierten Funktionen zu erstellen. Während es in der Vergangenheit Tricks gab, die es ermöglichten, Microtasks in die Warteschlange zu stellen (z. B. durch Erstellen eines Promise, das sofort erfüllt wird), bietet die Hinzufügung der Methode {{domxref("queueMicrotask()")}} eine standardmäßige Möglichkeit, einen Microtask sicher und ohne Tricks einzuführen.

Durch die Einführung von `queueMicrotask()` können die Eigenheiten vermieden werden, die auftreten, wenn Microtasks durch den Einsatz von Promises eingeschmuggelt werden. Beispielsweise werden bei Verwendung von Promises zur Erstellung von Microtasks Ausnahmen, die durch den Rückruf ausgelöst werden, als abgelehnte Promises gemeldet, anstatt als Standardausnahmen. Außerdem bringt das Erstellen und Zerstören von Promises zusätzlichen Aufwand sowohl in Bezug auf Zeit als auch auf Speicher mit sich, den eine Funktion, die Microtasks ordnungsgemäß in die Warteschlange stellt, vermeidet.

Übergeben Sie die JavaScript-{{jsxref("Function")}}, die aufgerufen werden soll, während der Kontext Microtasks behandelt, an die Methode `queueMicrotask()`. Diese Methode wird im globalen Kontext bereitgestellt, wie durch die {{domxref("Window")}}- oder {{domxref("Worker")}}-Schnittstelle definiert, je nach aktuellem Ausführungskontext.

```js
queueMicrotask(() => {
  /* code to run in the microtask here */
});
```

Die Microtask-Funktion selbst nimmt keine Parameter an und gibt keinen Wert zurück.

### Wann Microtasks verwendet werden sollten

In diesem Abschnitt betrachten wir Szenarien, in denen Microtasks besonders nützlich sind. Im Allgemeinen geht es darum, Ergebnisse zu erfassen oder zu überprüfen oder aufräumen, nachdem der Hauptteil eines JavaScript-Ausführungskontextes beendet ist, aber bevor Ereignishandler, Timeouts und Intervalle oder andere Rückrufe verarbeitet werden.

Wann ist das nützlich?

Der Hauptgrund, Microtasks zu verwenden, ist: um eine konsistente Reihenfolge von Tasks sicherzustellen, selbst wenn Ergebnisse oder Daten synchron verfügbar sind, gleichzeitig jedoch das Risiko benutzerwahrnehmbarer Verzögerungen in Operationen zu reduzieren.

#### Sicherstellung der Reihenfolge bei konditionaler Verwendung von Promises

Eine Situation, in der Microtasks verwendet werden können, um sicherzustellen, dass die Ausführungsreihenfolge immer konsistent ist, ist, wenn Promises in einer Bedingung einer `if...else`-Anweisung (oder einer anderen bedingten Anweisung) verwendet werden, jedoch nicht in der anderen Bedingung. Betrachten Sie beispielsweise folgenden Code:

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

Das hier eingeführte Problem ist, dass durch die Verwendung eines Tasks in einem Zweig der `if...else`-Anweisung (im Fall, dass das Bild im Cache verfügbar ist), aber Promises im `else`-Zweig eingebunden sind, entsteht eine Situation, in der die Reihenfolge der Operationen variieren kann; zum Beispiel, wie unten zu sehen.

```js
element.addEventListener("load", () => console.log("Loaded data"));
console.log("Fetching data…");
element.getData();
console.log("Data fetched");
```

Diese Ausführung des Codes gibt zweimal hintereinander folgende Ergebnisse.

Wenn die Daten nicht zwischengespeichert sind:

```plain
Fetching data
Data fetched
Loaded data
```

Wenn die Daten zwischengespeichert sind:

```plain
Fetching data
Loaded data
Data fetched
```

Noch schlimmer ist, dass manchmal die `data`-Eigenschaft des Elements gesetzt wird und manchmal nicht, bis dieser Code fertig ausgeführt ist.

Wir können eine konsistente Reihenfolge dieser Operationen sicherstellen, indem wir im `if`-Zweig einen Microtask verwenden, um die beiden Bedingungen auszugleichen:

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

Dies gleicht die Bedingungen aus, indem beide Situationen den Satz von `data` und das Auslösen des `load`-Ereignisses innerhalb eines Microtasks behandeln (indem `queueMicrotask()` im `if`-Zweig verwendet wird und die Promises, die durch {{domxref("Window/fetch", "fetch()")}} im `else`-Zweig verwendet werden).

#### Stapelverarbeitung von Vorgängen

Sie können Microtasks auch verwenden, um mehrere Anfragen aus verschiedenen Quellen in einer einzigen Charge zu sammeln und so den möglichen Overhead zu vermeiden, der mit mehreren Aufrufen zur Bearbeitung derselben Art von Arbeit einhergeht.

Der folgende Ausschnitt erstellt eine Funktion, die mehrere Nachrichten in einem Array stapelt, indem ein Microtask verwendet wird, um sie als ein einziges Objekt zu senden, wenn der Kontext endet.

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

Wenn `sendMessage()` aufgerufen wird, wird die angegebene Nachricht zuerst dem Nachrichtenwarteschlangen-Array hinzugefügt. Dann wird es interessant.

Wenn die Nachricht, die wir gerade zum Array hinzugefügt haben, die erste ist, stellen wir einen Microtask in die Warteschlange, der eine Charge senden wird. Der Microtask wird, wie gewohnt, ausgeführt, wenn der JavaScript-Ausführungspfad die oberste Ebene erreicht, direkt bevor Rückrufe ausgeführt werden. Das bedeutet, dass alle weiteren Aufrufe von `sendMessage()`, die in der Zwischenzeit gemacht werden, ihre Nachrichten in die Nachrichtenwarteschlange schieben, aber aufgrund der Längenprüfung des Arrays, bevor ein Microtask hinzugefügt wird, kein neuer Microtask in die Warteschlange gestellt wird.

Wenn der Microtask dann ausgeführt wird, hat er ein Array von möglicherweise vielen Nachrichten, die auf ihn warten. Er beginnt damit, es als JSON zu kodieren, indem die Methode {{jsxref("JSON.stringify()")}} verwendet wird. Danach werden die Inhalte des Arrays nicht mehr benötigt, daher leeren wir das `messageQueue`-Array. Schließlich verwenden wir die Methode {{domxref("Window/fetch", "fetch()")}}, um die JSON-Zeichenfolge an den Server zu senden.

Dies ermöglicht es, dass jeder Aufruf von `sendMessage()`, der während derselben Iteration der Ereignisschleife durchgeführt wird, ihre Nachrichten zur gleichen `fetch()`-Operation hinzufügt, ohne dass andere Tasks, wie Timeouts oder dergleichen, die Übertragung verzögern könnten.

Der Server empfängt die JSON-Zeichenfolge und wird vermutlich dekodieren und die Nachrichten verarbeiten, die er im resultierenden Array findet.

## Beispiele

### Einfaches Microtask-Beispiel

In diesem einfachen Beispiel sehen wir, dass das Einreihen eines Microtasks dazu führt, dass der Rückruf des Microtasks ausgeführt wird, nachdem der Körper dieses Top-Level-Skripts fertig ist.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von {{domxref("queueMicrotask()")}}, um einen Microtask zur Ausführung zu planen. Dieser Aufruf wird von Aufrufen zu `log()` umrahmt, einer benutzerdefinierten Funktion, die Text auf dem Bildschirm ausgibt.

```js
log("Before enqueueing the microtask");
queueMicrotask(() => {
  log("The microtask has run.");
});
log("After enqueueing the microtask");
```

#### Ergebnis

{{EmbedLiveSample("Simple_microtask_example", 640, 80)}}

### Timeout und Microtask-Beispiel

In diesem Beispiel ist ein Timeout geplant, das nach null Millisekunden (oder "so bald wie möglich") ausgelöst werden soll. Dies zeigt den Unterschied zwischen dem, was "so bald wie möglich" bedeutet, wenn ein neuer Task geplant wird (wie durch die Verwendung von `setTimeout()`) im Gegensatz zur Verwendung eines Microtasks.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von {{domxref("queueMicrotask()")}}, um einen Microtask zur Ausführung zu planen. Dieser Aufruf wird von Aufrufen zu `log()` umrahmt, einer benutzerdefinierten Funktion, die Text auf dem Bildschirm ausgibt.

Der folgende Code plant, dass ein Timeout in null Millisekunden auftritt, und reiht dann einen Microtask ein. Dies wird von Aufrufen zu `log()` umrahmt, um zusätzliche Nachrichten auszugeben.

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

Beachten Sie, dass die vom Hauptprogrammkörper geloggten Ausgaben zuerst erscheinen, gefolgt von der Ausgabe des Microtasks, gefolgt vom Rückruf des Timeouts. Das liegt daran, dass, wenn der Task, der die Ausführung des Hauptprogramms abwickelt, beendet wird, die Microtask-Warteschlange verarbeitet wird, bevor die Task-Warteschlange, auf der sich der Timeout-Rückruf befindet. Denken Sie daran, dass Tasks und Microtasks in separaten Warteschlangen gehalten werden und dass Microtasks zuerst ausgeführt werden, was hilft, dies klar zu halten.

### Microtask aus einer Funktion

Dieses Beispiel baut leicht auf dem vorherigen auf, indem eine Funktion hinzugefügt wird, die einige Arbeiten ausführt. Diese Funktion verwendet `queueMicrotask()`, um einen Microtask zu planen. Das Wichtige, das man von diesem Beispiel mitnehmen sollte, ist, dass der Microtask nicht ausgeführt wird, wenn die Funktion beendet wird, sondern wenn das Hauptprogramm beendet wird.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Der Hauptprogrammcode folgt. Die Funktion `doWork()` ruft hier `queueMicrotask()` auf, und doch wird der Microtask erst ausgeführt, wenn das gesamte Programm beendet ist, da dann der Task beendet ist und nichts anderes auf dem Ausführungsstapel liegt.

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
- {{domxref("queueMicrotask()")}}
- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
  - [Einführung in asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous/Introducing)
  - [Kooperatives asynchrones JavaScript: Timeouts und Intervalle](/de/docs/Learn/JavaScript/Asynchronous)
  - [Elegante asynchrone Programmierung mit Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises)
