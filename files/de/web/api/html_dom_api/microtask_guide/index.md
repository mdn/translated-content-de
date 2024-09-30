---
title: Verwendung von Microtasks in JavaScript mit queueMicrotask()
slug: Web/API/HTML_DOM_API/Microtask_guide
l10n:
  sourceCommit: 5fc275a2cb01ea3c361d6a0af057e96a00122984
---

{{DefaultAPISidebar("HTML DOM")}}

Ein **Microtask** ist eine kurze Funktion, die nach der Funktion oder dem Programm, das sie erstellt hat, ausgeführt wird _und_ nur, wenn der [JavaScript-Ausführungsstapel](/de/docs/Web/JavaScript/Event_loop#stack) leer ist, aber bevor die Kontrolle an die vom [User-Agenten](/de/docs/Glossary/user_agent) verwendete Ereignisschleife zurückgegeben wird, um die Ausführungsumgebung des Skripts zu steuern.

Diese Ereignisschleife kann entweder die Hauptereignisschleife des Browsers oder die Ereignisschleife sein, die einen [Web Worker](/de/docs/Web/API/Web_Workers_API) antreibt. Dadurch kann die gegebene Funktion ohne das Risiko laufen, die Ausführung eines anderen Skripts zu stören, und gleichzeitig sicherstellen, dass der Microtask ausgeführt wird, bevor der User-Agent die Möglichkeit hat, auf Aktionen zu reagieren, die vom Microtask durchgeführt wurden.

JavaScript [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und die [Mutation Observer API](/de/docs/Web/API/MutationObserver) nutzen beide die Microtask-Warteschlange, um ihre Rückrufe auszuführen, aber es gibt andere Situationen, in denen die Möglichkeit, Arbeiten aufzuschieben, bis der aktuelle Durchlauf der Ereignisschleife abgeschlossen ist, hilfreich ist. Um Microtasks Drittanbieter-Bibliotheken, Frameworks und Polyfills zugänglich zu machen, ist die Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) in den Schnittstellen [`Window`](/de/docs/Web/API/Window) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) verfügbar.

## Aufgaben vs. Microtasks

Um Microtasks richtig zu verstehen, ist es zunächst nützlich zu wissen, was eine JavaScript-Aufgabe ist und wie sich Microtasks von Aufgaben unterscheiden. Dies ist eine kurze, vereinfachte Erklärung, aber wenn Sie mehr Details wünschen, können Sie die Informationen im Artikel [Im Detail: Microtasks und die JavaScript-Laufzeitumgebung](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth) lesen.

### Aufgaben

Eine **Aufgabe** ist alles, was durch die Standardmechanismen geplanten wird, wie beispielsweise das anfängliche Starten eines Programms, ein asynchron gesendetes Ereignis oder das Ablaufen eines Intervalls oder Timers. Diese werden alle in der **Aufgabenwarteschlange** geplant.

Beispielsweise werden Aufgaben zur Aufgabenwarteschlange hinzugefügt, wenn:

- Ein neues JavaScript-Programm oder Unterprogramm ausgeführt wird (beispielsweise über eine Konsole oder durch Ausführung des Codes in einem {{HTMLElement("script")}}-Element) direkt.
- Der Benutzer auf ein Element klickt. Eine Aufgabe wird dann erstellt und führt alle Ereignisrückrufe aus.
- Ein mit [`setTimeout()`](/de/docs/Web/API/SetTimeout) oder [`setInterval()`](/de/docs/Web/API/SetInterval) erstellter Timer oder ein Intervall erreicht wird, wodurch der entsprechende Rückruf zur Aufgabenwarteschlange hinzugefügt wird.

Die Ereignisschleife, die Ihren Code steuert, bearbeitet diese Aufgaben eine nach der anderen, in der Reihenfolge, in der sie eingereiht wurden. Die älteste ausführbare Aufgabe in der Aufgabenwarteschlange wird während einer einzelnen Iteration der Ereignisschleife ausgeführt. Danach werden Microtasks ausgeführt, bis die Microtask-Warteschlange leer ist, und dann kann der Browser wählen, die Darstellung zu aktualisieren. Dann wechselt der Browser zur nächsten Iteration der Ereignisschleife.

### Microtasks

Zunächst scheint der Unterschied zwischen Microtasks und Aufgaben gering. Und sie sind ähnlich; beide bestehen aus JavaScript-Code, der in eine Warteschlange gestellt und zur passenden Zeit ausgeführt wird. Jedoch, während die Ereignisschleife nur die Aufgaben ausführt, die bei Beginn der Iteration in der Warteschlange vorhanden sind, behandelt sie die Microtask-Warteschlange sehr unterschiedlich.

Es gibt zwei wesentliche Unterschiede.

Zuerst, jedes Mal, wenn eine Aufgabe beendet wird, überprüft die Ereignisschleife, ob die Aufgabe die Kontrolle an anderen JavaScript-Code zurückgibt. Wenn nicht, werden alle Microtasks in der Microtask-Warteschlange ausgeführt. Die Microtask-Warteschlange wird dann mehrfach pro Iteration der Ereignisschleife bearbeitet, einschließlich nach der Bearbeitung von Ereignissen und anderen Rückrufen.

Zweitens, wenn ein Microtask weitere Microtasks durch Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) zur Warteschlange hinzufügt, werden diese neu hinzugefügten Microtasks _vor der nächsten Aufgabe_ ausgeführt. Das liegt daran, dass die Ereignisschleife weiterhin Microtasks aufruft, bis keine mehr in der Warteschlange sind, selbst wenn noch weitere hinzugefügt werden.

> [!WARNING]
> Da Microtasks selbst weitere Microtasks zur Warteschlange hinzufügen können und die Ereignisschleife die Microtasks weiter bearbeitet, bis die Warteschlange leer ist, besteht ein reales Risiko, dass die Ereignisschleife endlos Microtasks verarbeitet. Seien Sie vorsichtig, wie Sie rekursiv Microtasks hinzufügen.

## Verwendung von Microtasks

Bevor wir weiter ins Detail gehen, ist es wichtig, erneut darauf hinzuweisen, dass die meisten Entwickler Microtasks nur wenig oder gar nicht nutzen werden. Sie sind ein hochspezialisiertes Merkmal der modernen browserbasierten JavaScript-Entwicklung, das es Ihnen ermöglicht, Code vor anderen Dingen in der langen Liste der anstehenden Aktionen auf dem Computer des Benutzers einzuschieben. Der Missbrauch dieser Fähigkeit führt zu Leistungsproblemen.

### Einreihen von Microtasks

Insofern sollten Sie Microtasks in der Regel nur dann verwenden, wenn es keine andere Lösung gibt oder wenn Sie Frameworks oder Bibliotheken erstellen, die Microtasks verwenden müssen, um die Funktionalität zu implementieren, die sie bereitstellen. Während es bisher Tricks gab, mit denen es möglich war, Microtasks einzureihen (wie das Erstellen eines sofort auflösenden Promise), bietet die Hinzufügung der Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) eine standardisierte Möglichkeit, einen Microtask sicher und ohne Tricks einzuführen.

Durch die Einführung von `queueMicrotask()` können die Eigenheiten vermieden werden, die beim heimlichen Einsatz von Promises zur Erstellung von Microtasks auftreten können. Zum Beispiel werden bei der Verwendung von Promises zur Erstellung von Microtasks Ausnahmen, die im Rückruf geworfen werden, als abgelehnte Promises gemeldet, anstatt als Standardausnahmen gemeldet zu werden. Außerdem verursacht das Erstellen und Zerstören von Promises zusätzlichen Overhead sowohl in Bezug auf Zeit als auch Speicher, den eine Funktion, die Microtasks richtig einreiht, vermeidet.

Übergeben Sie die JavaScript-{{jsxref("Function")}}, die während des Kontextes der Microtask-Bearbeitung aufgerufen wird, an die `queueMicrotask()`-Methode, die im globalen Kontext definiert ist, entweder durch die [`Window`](/de/docs/Web/API/Window) oder die [`Worker`](/de/docs/Web/API/Worker) Schnittstelle, abhängig vom aktuellen Ausführungskontext.

```js
queueMicrotask(() => {
  /* code to run in the microtask here */
});
```

Die Microtask-Funktion selbst nimmt keine Parameter an und gibt keinen Wert zurück.

### Wann man Microtasks verwendet

In diesem Abschnitt schauen wir uns Szenarien an, in denen Microtasks besonders nützlich sind. Im Allgemeinen geht es darum, Ergebnisse einzufangen oder zu prüfen oder Aufräumarbeiten durchzuführen, nachdem der Hauptteil eines JavaScript-Ausführungskontextes beendet ist, aber bevor Event-Handler, Timeouts und Intervalle oder andere Rückrufe verarbeitet werden.

Wann ist das nützlich?

Der Hauptgrund zur Verwendung von Microtasks ist, eine konsistente Reihenfolge der Aufgaben sicherzustellen, selbst wenn Ergebnisse oder Daten synchron verfügbar sind, während gleichzeitig das Risiko von für den Benutzer wahrnehmbaren Verzögerungen bei Operationen verringert wird.

#### Sicherstellen der Reihenfolge bei bedingter Nutzung von Promises

Eine Situation, in der Microtasks verwendet werden können, um sicherzustellen, dass die Reihenfolge der Ausführung immer konsistent ist, ist, wenn Promises in einer Klausel einer `if...else`-Anweisung (oder einer anderen Bedingungsanweisung) verwendet werden, aber nicht in der anderen Klausel. Betrachten Sie Code wie diesen:

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

Das hier eingeführte Problem besteht darin, dass durch die Verwendung einer Aufgabe in einem Zweig der `if...else`-Anweisung (in dem Fall, dass das Bild im Cache verfügbar ist), während Promises in der `else`-Klausel involviert sind, wir eine Situation haben, in der die Reihenfolge der Operationen variieren kann; zum Beispiel, wie unten gezeigt.

```js
element.addEventListener("load", () => console.log("Loaded data"));
console.log("Fetching data…");
element.getData();
console.log("Data fetched");
```

Das Ausführen dieses Codes zweimal hintereinander ergibt die folgenden Ergebnisse.

Wenn die Daten nicht im Cache sind:

```plain
Fetching data
Data fetched
Loaded data
```

Wenn die Daten im Cache sind:

```plain
Fetching data
Loaded data
Data fetched
```

Noch schlimmer, manchmal wird die `data`-Eigenschaft des Elements gesetzt und manchmal nicht, wenn dieser Code fertig ausgeführt wird.

Wir können eine konsistente Reihenfolge dieser Operationen gewährleisten, indem wir einen Microtask in der `if`-Klausel nutzen, um die beiden Klauseln auszugleichen:

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

Dies gleicht die Klauseln aus, indem beide Situationen das Setzen von `data` und das Auslösen des `load`-Ereignisses innerhalb eines Microtasks bearbeiten (unter Verwendung von `queueMicrotask()` in der `if`-Klausel und der Verwendung der Promises, die von [`fetch()`](/de/docs/Web/API/Window/fetch) in der `else`-Klausel verwendet werden).

#### Bündelung von Operationen

Sie können auch Microtasks verwenden, um mehrere Anfragen von verschiedenen Quellen in eine einzelne Charge zu sammeln und so den möglichen Overhead zu vermeiden, der bei mehrfachen Aufrufen für die gleiche Art von Arbeit entsteht.

Der folgende Ausschnitt erstellt eine Funktion, die mehrere Nachrichten in einem Array bündelt und einen Microtask verwendet, um sie als Einzelobjekt zu senden, wenn der Kontext beendet ist.

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

Wenn die gerade zum Array hinzugefügte Nachricht die erste ist, reihen wir einen Microtask ein, der eine Charge sendet. Der Microtask wird ausgeführt, wie immer, wenn der JavaScript-Ausführungspfad die oberste Ebene erreicht, direkt bevor Rückrufe ausgeführt werden. Das bedeutet, dass alle weiteren Aufrufe von `sendMessage()`, die im Zwischenspiel gemacht werden, ihre Nachrichten an die Nachrichtenwarteschlange anhängen, aber wegen der Überprüfung der Arraylänge vor dem Hinzufügen eines Microtasks, wird kein neuer Microtask eingereiht.

Wenn der Microtask ausgeführt wird, hat er ein Array von potenziell vielen auf ihn wartenden Nachrichten. Er beginnt damit, es als JSON mit der {{jsxref("JSON.stringify()")}}-Methode zu kodieren. Danach sind die Inhalte des Arrays nicht mehr notwendig, also leeren wir das `messageQueue`-Array. Schließlich verwenden wir die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode, um den JSON-String an den Server zu senden.

Dies ermöglicht jeden Aufruf von `sendMessage()`, der während derselben Iteration der Ereignisschleife gemacht wird, ihre Nachrichten zur selben `fetch()`-Operation hinzuzufügen, ohne möglicherweise andere Aufgaben wie Timeouts oder Ähnliches die Übertragung verzögern zu lassen.

Der Server wird den JSON-String empfangen und dann vermutlich dekodieren und die darin enthaltenen Nachrichten im resultierenden Array verarbeiten.

## Beispiele

### Einfaches Microtask-Beispiel

In diesem einfachen Beispiel sehen wir, dass das Einreihen eines Microtasks dazu führt, dass der Rückruf des Microtasks ausgeführt wird, nachdem der Hauptteil dieses obersten Skripts fertig ausgeführt ist.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), der verwendet wird, um einen Microtask zur Ausführung zu planen. Dieser Aufruf wird von Aufrufen von `log()`, einer benutzerdefinierten Funktion, die Text auf dem Bildschirm ausgibt, eingerahmt.

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

In diesem Beispiel wird ein Timeout geplant, das nach null Millisekunden (oder "so schnell wie möglich") ausgeführt werden soll. Dies zeigt den Unterschied zwischen dem, was "so schnell wie möglich" bedeutet, wenn eine neue Aufgabe geplant wird (wie durch die Verwendung von `setTimeout()`), im Vergleich zur Verwendung eines Microtasks.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), der verwendet wird, um einen Microtask zur Ausführung zu planen. Dieser Aufruf wird von Aufrufen von `log()`, einer benutzerdefinierten Funktion, die Text auf dem Bildschirm ausgibt, eingerahmt.

Der untenstehende Code plant ein Timeout, das in null Millisekunden auftreten soll, und reiht dann einen Microtask ein. Dies wird von Aufrufen von `log()` umrahmt, um zusätzliche Nachrichten auszugeben.

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

Beachten Sie, dass die vom Hauptprogrammkörper geloggten Ausgaben zuerst erscheinen, gefolgt von der Ausgabe des Microtasks, gefolgt von dem Rückruf des Timeouts. Das liegt daran, dass, wenn die Aufgabe, die die Ausführung des Hauptprogramms bearbeitet, endet, die Microtask-Warteschlange verarbeitet wird, bevor die Aufgabenwarteschlange, auf der sich der Timeout-Rückruf befindet, verarbeitet wird. Daran zu denken, dass Aufgaben und Microtasks in separaten Warteschlangen gehalten werden, und dass Microtasks zuerst ausgeführt werden, hilft, dies klar zu halten.

### Microtask aus einer Funktion

Dieses Beispiel erweitert das vorherige leicht, indem eine Funktion hinzugefügt wird, die Arbeit verrichtet. Diese Funktion verwendet `queueMicrotask()` zur Planung eines Microtasks. Das Wichtige, das man aus diesem Beispiel mitnehmen sollte, ist, dass der Microtask nicht ausgeführt wird, wenn die Funktion endet, sondern wenn das Hauptprogramm endet.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Der Hauptprogramcode folgt. Die `doWork()`-Funktion ruft hier `queueMicrotask()` auf, doch der Microtask wird noch immer erst ausgeführt, wenn das gesamte Programm endet, da das die Aufgabe beendet und es nichts anderes mehr im Ausführungsstapel gibt.

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
  - [Elegantes asynchrones Programmieren mit Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises)
