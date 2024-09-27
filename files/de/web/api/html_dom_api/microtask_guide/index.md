---
title: Nutzung von Microtasks in JavaScript mit queueMicrotask()
slug: Web/API/HTML_DOM_API/Microtask_guide
l10n:
  sourceCommit: 5fc275a2cb01ea3c361d6a0af057e96a00122984
---

{{DefaultAPISidebar("HTML DOM")}}

Eine **Microtask** ist eine kurze Funktion, die ausgeführt wird, nachdem die Funktion oder das Programm, das sie erstellt hat, beendet ist _und_ nur, wenn der [JavaScript-Ausführungs-Stack](/de/docs/Web/JavaScript/Event_loop#stack) leer ist, jedoch bevor die Kontrolle an die Ereignisschleife zurückgegeben wird, die vom [user agent](/de/docs/Glossary/user_agent) verwendet wird, um die Skriptausführungsumgebung zu steuern.

Diese Ereignisschleife kann entweder die Hauptereignisschleife des Browsers oder die Ereignisschleife sein, die einen [Web Worker](/de/docs/Web/API/Web_Workers_API) steuert. Dadurch kann die gegebene Funktion ausgeführt werden, ohne das Risiko, die Ausführung eines anderen Skripts zu beeinträchtigen, und stellt dennoch sicher, dass die Microtask ausgeführt wird, bevor der user agent die Möglichkeit hat, auf Aktionen zu reagieren, die von der Microtask vorgenommen wurden.

JavaScript [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und die [Mutation Observer API](/de/docs/Web/API/MutationObserver) verwenden beide die Microtask-Warteschlange, um ihre Rückrufe auszuführen, aber es gibt auch andere Zeiten, in denen die Möglichkeit, Arbeit zu verschieben, bis der aktuelle Durchlauf der Ereignisschleife abgeschlossen ist, hilfreich ist. Damit Microtasks von Drittanbieter-Bibliotheken, Frameworks und Polyfills genutzt werden können, wird die Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) auf den Schnittstellen [`Window`](/de/docs/Web/API/Window) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) bereitgestellt.

## Aufgaben vs. Microtasks

Um Microtasks richtig zu diskutieren, ist es zuerst nützlich zu wissen, was eine JavaScript-Aufgabe ist und wie sich Microtasks von Aufgaben unterscheiden. Dies ist eine schnelle, vereinfachte Erklärung, aber wenn Sie mehr Details möchten, können Sie die Informationen im Artikel [Im Detail: Microtasks und die JavaScript-Laufzeitumgebung](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth) lesen.

### Aufgaben

Eine **Aufgabe** ist alles, was durch die Standardmechanismen geplant wird, wie z. B. das erstmalige Starten eines Programms, ein asynchron ausgelöstes Ereignis oder das Erreichen eines Intervalls oder eines Zeitlimits. Diese werden alle in der **Task-Warteschlange** geplant.

Zum Beispiel werden Aufgaben zur Task-Warteschlange hinzugefügt, wenn:

- Ein neues JavaScript-Programm oder -Unterprogramm direkt ausgeführt wird (z.B. aus einer Console oder durch Ausführen des Codes in einem {{HTMLElement("script")}}-Element).
- Der Benutzer auf ein Element klickt. Dann wird eine Aufgabe erstellt, die alle Ereignisrückrufe ausführt.
- Ein mit [`setTimeout()`](/de/docs/Web/API/SetTimeout) oder [`setInterval()`](/de/docs/Web/API/SetInterval) erstellter Timeout oder Intervall erreicht wird, wodurch der entsprechende Rückruf zur Task-Warteschlange hinzugefügt wird.

Die Ereignisschleife, die Ihren Code steuert, behandelt diese Aufgaben eine nach der anderen, in der Reihenfolge, in der sie in die Warteschlange eingereiht wurden. Die älteste ausführbare Aufgabe in der Task-Warteschlange wird während einer einzelnen Iteration der Ereignisschleife ausgeführt. Danach werden Microtasks ausgeführt, bis die Microtask-Warteschlange leer ist, und dann kann der Browser die Darstellung aktualisieren. Anschließend geht der Browser zur nächsten Iteration der Ereignisschleife über.

### Microtasks

Zunächst scheint der Unterschied zwischen Microtasks und Aufgaben gering zu sein. Und sie sind ähnlich; beide bestehen aus JavaScript-Code, der in eine Warteschlange gestellt und zu einem geeigneten Zeitpunkt ausgeführt wird. Während die Ereignisschleife jedoch nur die Aufgaben ausführt, die in der Warteschlange vorhanden waren, als die Iteration begann, behandelt sie die Microtask-Warteschlange sehr unterschiedlich.

Es gibt zwei wesentliche Unterschiede.

Erstens überprüft die Ereignisschleife jedes Mal, wenn eine Aufgabe beendet wird, ob die Aufgabe die Kontrolle an anderen JavaScript-Code zurückgibt. Wenn nicht, führt sie alle Microtasks in der Microtask-Warteschlange aus. Die Microtask-Warteschlange wird dann mehrere Male pro Iteration der Ereignisschleife bearbeitet, auch nach der Behandlung von Ereignissen und anderen Rückrufen.

Zweitens, wenn eine Microtask mehr Microtasks zur Warteschlange hinzufügt, indem sie [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) aufruft, werden diese neu hinzugefügten Microtasks _vor der nächsten Aufgabe_ ausgeführt. Das liegt daran, dass die Ereignisschleife weiterhin Microtasks aufruft, bis keine in der Warteschlange mehr vorhanden sind, selbst wenn immer wieder mehr hinzugefügt werden.

> [!WARNING]
> Da Microtasks selbst mehr Microtasks in die Warteschlange einreihen können und die Ereignisschleife die Verarbeitung der Microtasks fortsetzt, bis die Warteschlange leer ist, besteht ein echtes Risiko, dass die Ereignisschleife endlos Microtasks verarbeitet. Seien Sie vorsichtig, wie Sie rekursiv Microtasks hinzufügen.

## Verwendung von Microtasks

Es ist wichtig, nochmals zu betonen, dass die meisten Entwickler Microtasks kaum oder gar nicht verwenden werden. Sie sind ein hochspezialisiertes Merkmal der modernen browserbasierten JavaScript-Entwicklung, das es ermöglicht, Code vor anderen Dingen einzuschieben, die auf dem langen Satz von Dingen warten, die auf dem Computer des Benutzers geschehen werden. Der Missbrauch dieser Fähigkeit wird zu Leistungsproblemen führen.

### Microtasks einreihen

Normalerweise sollten Sie Microtasks nur verwenden, wenn es keine andere Lösung gibt oder wenn Sie Frameworks oder Bibliotheken erstellen, die Microtasks verwenden müssen, um die Funktionalität zu implementieren, die sie bereitstellen. Während es in der Vergangenheit Tricks gab, mit denen es möglich war, Microtasks einzureihen (z.B. durch Erstellen eines sofort aufgelösten Promises), hinzugefügt die Methode [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) einen standardisierten Weg, um eine Microtask sicher und ohne Tricks einzuführen.

Durch die Einführung von `queueMicrotask()` können die Eigenheiten vermieden werden, die auftreten, wenn man versuchte, mit Hilfe von Promises Microtasks zu erzeugen. Wenn zum Beispiel Promises verwendet werden, um Microtasks zu erzeugen, werden Ausnahmen, die vom Rückruf ausgelöst werden, als abgelehnte Promises gemeldet, anstatt als Standardausnahmen. Außerdem verursacht das Erstellen und Zerstören von Promises zusätzlichen Aufwand sowohl hinsichtlich Zeit als auch Speicher, den eine Funktion, die Microtasks korrekt einreihen kann, vermeidet.

Übergeben Sie die JavaScript {{jsxref("Function")}}, die aufgerufen werden soll, während der Kontext Microtasks bearbeitet, in die Methode `queueMicrotask()`, die im globalen Kontext gemäß entweder der [`Window`](/de/docs/Web/API/Window) oder der [`Worker`](/de/docs/Web/API/Worker) Schnittstelle bereitgestellt wird, abhängig vom aktuellen Ausführungskontext.

```js
queueMicrotask(() => {
  /* code to run in the microtask here */
});
```

Die Microtask-Funktion selbst nimmt keine Parameter an und gibt keinen Wert zurück.

### Wann man Microtasks verwendet

In diesem Abschnitt betrachten wir Szenarien, in denen Microtasks besonders nützlich sind. Im Allgemeinen geht es darum, Ergebnisse aufzufangen oder zu überprüfen oder Bereinigungen durchzuführen, nachdem der Hauptteil eines JavaScript-Ausführungskontexts beendet ist, aber bevor Ereignishandler, Timeouts und Intervalle oder andere Rückrufe verarbeitet werden.

Wann ist das nützlich?

Der Hauptgrund für die Verwendung von Microtasks ist: um die konsistente Reihenfolge von Aufgaben sicherzustellen, selbst wenn Ergebnisse oder Daten synchron verfügbar sind, bei gleichzeitiger Reduzierung des Risikos von für den Benutzer wahrnehmbaren Verzögerungen bei Operationen.

#### Sicherstellung der Reihenfolge bei bedingter Verwendung von Promises

Eine Situation, in der Microtasks verwendet werden können, um sicherzustellen, dass die Reihenfolge der Ausführung immer konsistent ist, ist, wenn Promises in einer Klausel einer `if...else`-Anweisung (oder einer anderen Bedingungsanweisung) verwendet werden, aber nicht in der anderen Klausel. Betrachten Sie folgenden Code:

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

Das hier eingeführte Problem ist, dass, wenn eine Aufgabe in einem Zweig der `if...else`-Anweisung verwendet wird (im Fall, in dem das Bild im Cache vorhanden ist), aber Promises im `else`-Zweig beteiligt sind, wir eine Situation haben, in der sich die Reihenfolge der Operationen ändern kann; zum Beispiel, wie unten zu sehen.

```js
element.addEventListener("load", () => console.log("Loaded data"));
console.log("Fetching data…");
element.getData();
console.log("Data fetched");
```

Das zweimalige Ausführen dieses Codes hintereinander ergibt die folgenden Ergebnisse.

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

Noch schlimmer ist, dass manchmal die `data`-Eigenschaft des Elements gesetzt wird und manchmal nicht, wenn dieser Code ausgeführt wird.

Wir können die konsistente Reihenfolge dieser Operationen sicherstellen, indem wir eine Microtask in die `if`-Klausel einfügen, um die beiden Klauseln auszugleichen:

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

Dies gleicht die Klauseln aus, indem beide Situationen das Setzen von `data` und das Auslösen des `load`-Ereignisses innerhalb einer Microtask behandeln (mit `queueMicrotask()` in der `if`-Klausel und den Versprechen, die von [`fetch()`](/de/docs/Web/API/Window/fetch) verwendet werden, in der `else`-Klausel).

#### Batching von Operationen

Sie können auch Microtasks verwenden, um mehrere Anforderungen aus verschiedenen Quellen zu einer einzigen Charge zu sammeln und so den möglichen Overhead mehrerer Aufrufe zur Bearbeitung derselben Art von Arbeit zu vermeiden.

Im folgenden Ausschnitt wird eine Funktion erstellt, die mehrere Nachrichten in einem Array bündelt und eine Microtask verwendet, um sie als ein Objekt zu senden, wenn der Kontext beendet ist.

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

Wenn die gerade hinzugefügte Nachricht die erste ist, wird eine Microtask eingereiht, die eine Charge senden wird. Die Microtask wird, wie immer, ausgeführt, wenn der JavaScript-Ausführungspfad die oberste Ebene erreicht, unmittelbar bevor Rückrufe ausgeführt werden. Das bedeutet, dass alle weiteren Anrufe an `sendMessage()`, die zwischenzeitlich gemacht werden, ihre Nachrichten in die Nachrichtenwarteschlange schieben, aber aufgrund der Array-Längenüberprüfung, bevor eine Microtask hinzugefügt wird, keine neue Microtask eingereiht wird.

Wenn die Microtask dann ausgeführt wird, hat sie ein Array mit potenziell vielen Nachrichten, die auf sie warten. Es beginnt, indem es dieses als JSON mit der Methode {{jsxref("JSON.stringify()")}} kodiert. Danach werden die Inhalte des Arrays nicht mehr benötigt, also leeren wir das `messageQueue`-Array. Schließlich verwenden wir die Methode [`fetch()`](/de/docs/Web/API/Window/fetch), um den JSON-String an den Server zu senden.

Dies ermöglicht jedem Anruf an `sendMessage()`, der während derselben Iteration der Ereignisschleife gemacht wird, ihre Nachrichten an dieselbe `fetch()`-Operation hinzuzufügen, ohne dass potenziell andere Aufgaben wie Timeouts oder ähnliches die Übertragung verzögern.

Der Server wird den JSON-String empfangen und wird vermutlich dekodieren und die darin enthaltenen Nachrichten verarbeiten, die im resultierenden Array gefunden werden.

## Beispiele

### Einfaches Microtask-Beispiel

In diesem einfachen Beispiel sehen wir, dass das Einreihen einer Microtask dazu führt, dass der Rückruf der Microtask ausgeführt wird, nachdem der Körper dieses Top-Level-Skripts fertig ausgeführt ist.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), um eine Microtask zum Ausführen zu planen. Dieser Aufruf wird von `log()`, einer benutzerdefinierten Funktion, die Text auf dem Bildschirm ausgibt, eingerahmt.

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

In diesem Beispiel wird ein Timeout so geplant, dass es nach null Millisekunden (oder "so schnell wie möglich") ausgelöst wird. Dies zeigt den Unterschied, was "so schnell wie möglich" bedeutet, wenn man eine neue Aufgabe plant (zum Beispiel mit `setTimeout()`) gegenüber der Verwendung einer Microtask.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Im folgenden Code sehen wir einen Aufruf von [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), um eine Microtask zum Ausführen zu planen. Dieser Aufruf wird von `log()`, einer benutzerdefinierten Funktion, die Text auf dem Bildschirm ausgibt, eingerahmt.

Der Code unten plant einen Timeout, der in null Millisekunden auftritt, dann reiht er eine Microtask ein. Dies wird von `log()`-Aufrufen eingerahmt, um zusätzliche Nachrichten auszugeben.

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

Beachten Sie, dass die Ausgabe, die vom Hauptprogrammkörper protokolliert wird, zuerst erscheint, gefolgt von der Ausgabe der Microtask und dann des Timeout-Rückrufs. Das liegt daran, dass, wenn die Aufgabe, die die Ausführung des Hauptprogramms handhabt, beendet wird, die Microtask-Warteschlange vor der Aufgabenwarteschlange verarbeitet wird, auf der sich der Timeout-Rückruf befindet. Sich zu merken, dass Aufgaben und Microtasks in separaten Warteschlangen gehalten werden und dass Microtasks zuerst ausgeführt werden, hilft, dies zu verstehen.

### Microtask aus einer Funktion

Dieses Beispiel erweitert das vorherige leicht, indem eine Funktion hinzugefügt wird, die etwas Arbeit erledigt. Diese Funktion verwendet `queueMicrotask()`, um eine Microtask zu planen. Das Wichtige, was man von diesem Beispiel mitnehmen sollte, ist, dass die Microtask nicht ausgeführt wird, wenn die Funktion beendet wird, sondern wenn das Hauptprogramm beendet ist.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

Der Hauptprogrammcode folgt. Die `doWork()`-Funktion hier ruft `queueMicrotask()` auf, aber die Microtask wird immer noch nicht ausgeführt, bis das gesamte Programm beendet ist, da dies der Zeitpunkt ist, an dem die Aufgabe endet und nichts anderes auf dem Ausführungsstapel ist.

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
  - [Elegante asynchrone Programmierung mit Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises)
