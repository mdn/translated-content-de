---
title: Verwendung von Microtasks in JavaScript mit queueMicrotask()
slug: Web/API/HTML_DOM_API/Microtask_guide
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{DefaultAPISidebar("HTML DOM")}}

Ein **Microtask** ist eine kurze Funktion, die nach dem Beenden der Funktion oder des Programms, das sie erstellt hat, ausgeführt wird _und_ nur, wenn der [JavaScript-Ausführungsstack](/de/docs/Web/JavaScript/Event_loop#stack) leer ist, jedoch bevor die Kontrolle an die vom {{Glossary("user_agent", "User-Agent")}} verwendete Ereignisschleife zur Steuerung der Ausführungsumgebung des Skripts zurückgegeben wird.

Diese Ereignisschleife kann entweder die Hauptereignisschleife des Browsers oder die Ereignisschleife sein, die einen [Web Worker](/de/docs/Web/API/Web_Workers_API) antreibt. Dies ermöglicht es, dass die gegebene Funktion ohne das Risiko einer Interferenz mit der Ausführung eines anderen Skripts ausgeführt wird und gleichzeitig sicherstellt, dass der Microtask läuft, bevor der User-Agent auf Aktionen reagiert, die durch den Microtask verursacht werden.

JavaScript [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und die [Mutation Observer API](/de/docs/Web/API/MutationObserver) verwenden beide die Microtask-Warteschlange, um ihre Rückrufe auszuführen. Es gibt jedoch auch andere Situationen, in denen die Fähigkeit hilfreich ist, Arbeit bis zum Abschluss des aktuellen Durchlaufs der Ereignisschleife aufzuschieben. Um die Verwendung von Microtasks durch Drittanbieter-Bibliotheken, Frameworks und Polyfills zu ermöglichen, ist die Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) auf den Schnittstellen [`Window`](/de/docs/Web/API/Window) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) verfügbar.

## Tasks vs. Microtasks

Um Microtasks richtig zu diskutieren, ist es zunächst nützlich zu wissen, was ein JavaScript-Task ist und wie sich Microtasks von Tasks unterscheiden. Dies ist eine kurze, vereinfachte Erklärung. Wenn Sie weitere Details wünschen, können Sie die Informationen im Artikel [Im Detail: Microtasks und die JavaScript-Laufzeitumgebung](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth) lesen.

### Tasks

Ein **Task** ist alles, was durch die Standardmechanismen geplant ist, z.B. das initiale Starten eines Programms, das asynchrone Senden eines Ereignisses oder das Auslösen eines Intervalls oder Timeouts. Diese werden alle in der **Task-Warteschlange** geplant.

Tasks werden beispielsweise der Task-Warteschlange hinzugefügt, wenn:

- Ein neues JavaScript-Programm oder -Subprogramm direkt ausgeführt wird (z.B. aus einer Konsole oder durch das Ausführen des Codes in einem {{HTMLElement("script")}}).
- Der Benutzer auf ein Element klickt. Ein Task wird dann erstellt und führt alle Ereignisrückrufe aus.
- Ein Timeout oder Intervall, das mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder [`setInterval()`](/de/docs/Web/API/Window/setInterval) erstellt wurde, erreicht wird, wodurch der entsprechende Rückruf der Task-Warteschlange hinzugefügt wird.

Die Ereignisschleife, die Ihren Code steuert, verarbeitet diese Tasks nacheinander in der Reihenfolge, in der sie in die Warteschlange eingeordnet wurden. Der älteste ausführbare Task in der Task-Warteschlange wird während einer einzelnen Iteration der Ereignisschleife ausgeführt. Danach werden die Microtasks ausgeführt, bis die Microtask-Warteschlange leer ist, und dann kann der Browser wählen, das Rendering zu aktualisieren. Anschließend geht der Browser zur nächsten Iteration der Ereignisschleife über.

### Microtasks

Zunächst scheint der Unterschied zwischen Microtasks und Tasks geringfügig zu sein. Und sie sind ähnlich; beide bestehen aus JavaScript-Code, der in eine Warteschlange gestellt und zur geeigneten Zeit ausgeführt wird. Während die Ereignisschleife jedoch nur die Tasks ausführt, die in der Warteschlange vorhanden sind, wenn die Iteration begann, wird die Microtask-Warteschlange sehr unterschiedlich gehandhabt.

Es gibt zwei wesentliche Unterschiede.

Erstens überprüft die Ereignisschleife jedes Mal, wenn ein Task beendet wird, ob der Task die Kontrolle an anderen JavaScript-Code zurückgibt. Wenn nicht, führt sie alle Microtasks in der Microtask-Warteschlange aus. Die Microtask-Warteschlange wird also mehrmals pro Iteration der Ereignisschleife verarbeitet, einschließlich nach der Bearbeitung von Ereignissen und anderen Rückrufen.

Zweitens, wenn ein Microtask mehr Microtasks zur Warteschlange hinzufügt, indem [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) aufgerufen wird, werden diese neu hinzugefügten Microtasks _ausgeführt, bevor der nächste Task ausgeführt wird_. Das liegt daran, dass die Ereignisschleife weiterhin Microtasks aufruft, bis keine mehr in der Warteschlange verbleiben, selbst wenn kontinuierlich mehr hinzugefügt werden.

> [!WARNING]
> Da Microtasks selbst weitere Microtasks in die Warteschlange einfügen können und die Ereignisschleife die Microtasks weiterverarbeitet, bis die Warteschlange leer ist, besteht ein echtes Risiko, dass die Ereignisschleife endlos Microtasks verarbeitet. Seien Sie vorsichtig bei der rekursiven Hinzufügung von Microtasks.

## Verwendung von Microtasks

Bevor wir uns weiter mit diesem Thema befassen, ist es wichtig, noch einmal zu betonen, dass die meisten Entwickler Microtasks nur wenig oder gar nicht verwenden werden. Sie sind ein hochspezialisiertes Merkmal moderner, browserbasierter JavaScript-Entwicklung und erlauben es Ihnen, Code vor andere Dinge in der langen Liste von Aufgaben zu stellen, die auf dem Computer des Benutzers ausgeführt werden sollen. Der Missbrauch dieser Fähigkeit führt zu Leistungsproblemen.

### Microtasks in die Warteschlange einfügen

Daher sollten Sie typischerweise nur dann Microtasks verwenden, wenn es keine andere Lösung gibt oder wenn Sie Frameworks oder Bibliotheken erstellen, die Microtasks nutzen müssen, um die Funktionalität zu implementieren, die sie bereitstellen. Während es in der Vergangenheit Tricks gab, mit denen es möglich war, Microtasks in die Warteschlange einzufügen (wie z.B. durch das sofortige Auflösen eines Versprechens), bietet die Hinzufügung der Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) einen standardisierten Weg, um sicher und ohne Tricks einen Microtask einzuführen.

Durch die Einführung von `queueMicrotask()` können die Eigenheiten vermieden werden, die auftreten, wenn man durch das Verwenden von Promises versucht, Microtasks zu erstellen. Beispielsweise werden Ausnahmen, die vom Rückruf ausgelöst werden, beim Verwenden von Promises als abgelehnte Promises und nicht als Standard-Ausnahmen gemeldet. Außerdem verursacht das Erstellen und Zerstören von Promises zusätzlichen Overhead in Bezug auf Zeit und Speicher, den eine Funktion, die Microtasks korrekt in die Warteschlange einfügt, vermeidet.

Übergeben Sie die JavaScript-{{jsxref("Function")}}, die aufgerufen werden soll, während der Kontext Microtasks verarbeitet, an die Methode `queueMicrotask()`, die im globalen Kontext verfügbar ist, wie es entweder durch die Schnittstelle [`Window`](/de/docs/Web/API/Window) oder [`Worker`](/de/docs/Web/API/Worker) definiert wird, abhängig vom aktuellen Ausführungskontext.

```js
queueMicrotask(() => {
  /* code to run in the microtask here */
});
```

Die Microtask-Funktion selbst hat keine Parameter und gibt keinen Wert zurück.

### Wann Microtasks verwenden

In diesem Abschnitt werden wir Szenarien untersuchen, in denen Microtasks besonders nützlich sind. Im Allgemeinen geht es darum, Ergebnisse zu erfassen oder zu überprüfen oder Bereinigungen durchzuführen, nachdem der Hauptteil des JavaScript-Ausführungskontexts abgeschlossen ist, jedoch bevor Ereignis-Handler, Timeouts und Intervalle oder andere Rückrufe verarbeitet werden.

Wann ist das nützlich?

Der Hauptgrund für den Einsatz von Microtasks ist es, eine konsistente Reihenfolge der Tasks zu gewährleisten, auch wenn Ergebnisse oder Daten synchron verfügbar sind, gleichzeitig jedoch das Risiko von für den Benutzer wahrnehmbaren Verzögerungen bei den Operationen zu verringern.

#### Sicherstellen einer Ordnung bei bedingter Verwendung von Promises

Eine Situation, in der Microtasks verwendet werden können, um sicherzustellen, dass die Reihenfolge der Ausführung immer konsistent ist, ist, wenn Promises in einer Klausel einer `if...else`-Anweisung (oder einer anderen bedingten Anweisung) verwendet werden, jedoch nicht in der anderen Klausel. Betrachten Sie folgenden Code:

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

Das hier eingeführte Problem besteht darin, dass wir durch das Verwenden eines Tasks in einem Zweig der `if...else`-Anweisung (im Fall, dass das Bild im Cache verfügbar ist), jedoch Promises im `else`-Zweig haben, eine Situation schaffen, in der die Reihenfolge der Operationen variieren kann; zum Beispiel, wie unten zu sehen ist.

```js
element.addEventListener("load", () => console.log("Loaded data"));
console.log("Fetching data…");
element.getData();
console.log("Data fetched");
```

Das zweimalige Ausführen dieses Codes in Folge gibt folgende Ergebnisse:

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

Noch schlimmer, manchmal wird die `data`-Eigenschaft des Elements gesetzt und manchmal nicht, wenn dieser Code beendet ist.

Wir können eine konsistente Reihenfolge dieser Operationen gewährleisten, indem wir einen Microtask im `if`-Zweig verwenden, um die beiden Klauseln auszugleichen:

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

Dies gleicht die Klauseln aus, indem in beiden Situationen die Setzung von `data` und das Auslösen des `load`-Ereignisses innerhalb eines Microtasks behandelt werden (durch Verwenden von `queueMicrotask()` im `if`-Zweig und Verwenden der von [`fetch()`](/de/docs/Web/API/Window/fetch) verwendeten Promises im `else`-Zweig).

#### Batchverarbeitung von Operationen

Sie können Microtasks auch dazu verwenden, mehrere Anfragen aus verschiedenen Quellen in einem einzigen Batch zu sammeln und so den möglichen Overhead zu vermeiden, der mit mehreren Aufrufen zur Bearbeitung derselben Art von Arbeit verbunden ist.

Das folgende Snippet erstellt eine Funktion, die mehrere Nachrichten in einem Array batcht, wobei ein Microtask verwendet wird, um sie als ein einzelnes Objekt zu senden, wenn der Kontext endet.

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

Wenn `sendMessage()` aufgerufen wird, wird die angegebene Nachricht zunächst in das Nachrichtenwarteschlangen-Array eingefügt. Dann wird es interessant.

Wenn die soeben hinzugefügte Nachricht die erste ist, stellen wir einen Microtask in die Warteschlange, der eine Charge sendet. Der Microtask wird ausgeführt, wie immer, wenn der JavaScript-Ausführungspfad die oberste Ebene erreicht, kurz bevor Rückrufe ausgeführt werden. Das bedeutet, dass alle weiteren Aufrufe von `sendMessage()`, die in der Zwischenzeit gemacht werden, ihre Nachrichten in die Nachrichtenwarteschlange einfügen werden, aber aufgrund der Längenprüfung des Arrays vor dem Einfügen eines Microtasks wird kein neuer Microtask in die Warteschlange gestellt.

Wenn der Microtask ausgeführt wird, hat er ein Array mit potenziell vielen Nachrichten, die auf ihn warten. Es beginnt damit, es als JSON mit der Methode {{jsxref("JSON.stringify()")}} zu kodieren. Danach werden die Inhalte des Arrays nicht mehr benötigt, daher leeren wir das `messageQueue`-Array. Schließlich verwenden wir die Methode [`fetch()`](/de/docs/Web/API/Window/fetch), um den JSON-String an den Server zu senden.

Dies ermöglicht es, dass jeder Aufruf von `sendMessage()`, der während derselben Iteration der Ereignisschleife gemacht wird, seine Nachrichten zur selben `fetch()`-Operation hinzufügt, ohne dass potenziell andere Tasks wie Timeouts oder ähnliches die Übertragung verzögern.

Der Server wird den JSON-String empfangen und dann vermutlich dekodieren und die Nachrichten verarbeiten, die er im resultierenden Array findet.

## Beispiele

### Einfaches Microtask-Beispiel

In diesem einfachen Beispiel sehen wir, dass das Einreihen eines Microtasks dazu führt, dass der Rückruf des Microtasks ausgeführt wird, nachdem der Hauptteil dieses Top-Level-Skripts fertig ist.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), um einen Microtask zur Ausführung zu planen. Dieser Aufruf ist von Aufrufen der `log()`-Funktion umrahmt, einer benutzerdefinierten Funktion, die Text auf dem Bildschirm ausgibt.

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

In diesem Beispiel wird ein Timeout geplant, das nach null Millisekunden (oder "sofort wie möglich") ausgelöst wird. Dies zeigt den Unterschied zwischen dem, was "sofort wie möglich" beim Planen eines neuen Tasks (wie durch Verwendung von `setTimeout()`) im Vergleich zur Verwendung eines Microtasks bedeutet.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), um einen Microtask zur Ausführung zu planen. Dieser Aufruf ist von Aufrufen der `log()`-Funktion umrahmt, einer benutzerdefinierten Funktion, die Text auf dem Bildschirm ausgibt.

Der Code unten plant ein Timeout, das nach null Millisekunden auftritt, und stellt dann einen Microtask in die Warteschlange. Dies ist von Aufrufen von `log()` umrahmt, um zusätzliche Nachrichten auszugeben.

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

Beachten Sie, dass die vom Hauptprogrammkörper protokollierte Ausgabe zuerst erscheint, gefolgt von der Ausgabe des Microtasks und dann dem Rückruf des Timeouts. Das liegt daran, dass wenn der Task, der die Ausführung des Hauptprogramms behandelt, beendet wird, die Microtask-Warteschlange verarbeitet wird, bevor die Task-Warteschlange, auf der sich der Timeout-Rückruf befindet. Das Verständnis, dass Tasks und Microtasks in separaten Warteschlangen gehalten werden und dass Microtasks zuerst ausgeführt werden, wird helfen, dies im Kopf zu behalten.

### Microtask aus einer Funktion

Dieses Beispiel erweitert das vorherige etwas, indem eine Funktion hinzugefügt wird, die einige Arbeiten ausführt. Diese Funktion verwendet `queueMicrotask()`, um einen Microtask zu planen. Das Wichtige, was man hier mitnehmen sollte, ist, dass der Microtask nicht ausgeführt wird, wenn die Funktion endet, sondern wenn das Hauptprogramm endet.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Der Hauptprogrammcode folgt. Die `doWork()`-Funktion hier ruft `queueMicrotask()` auf, dennoch wird der Microtask erst ausgeführt, wenn das gesamte Programm endet, da dann der Task endet und nichts anderes auf dem Ausführungsstack ist.

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
- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
  - [Einführung in asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous/Introducing)
  - [Kooperatives asynchrones JavaScript: Timeouts und Intervalle](/de/docs/Learn/JavaScript/Asynchronous)
  - [Geschickte asynchrone Programmierung mit Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises)
