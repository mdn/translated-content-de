---
title: Einführung in asynchrones JavaScript
short-title: Introduction
slug: Learn_web_development/Extensions/Async_JS/Introducing
l10n:
  sourceCommit: aba3ad518b9826814228e6949726d9b4c7c7a335
---

{{NextMenu("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS")}}

In diesem Artikel erklären wir, was asynchrone Programmierung ist, warum wir sie brauchen und wie asynchrone Funktionen in JavaScript früher implementiert wurden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Solide Kenntnisse der <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, was asynchrones JavaScript ist, wie es sich von synchronem JavaScript unterscheidet und warum es benötigt wird.</li>
          <li>Verstehen, was synchrone Programmierung ist und warum sie manchmal problematisch sein kann.</li>
          <li>Verstehen, wie asynchrone Programmierung diese Probleme lösen soll.</li>
          <li>Event-Handler und Callback-Funktionen kennenlernen und verstehen, wie sie mit asynchroner Programmierung zusammenhängen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Asynchrone Programmierung ist eine Technik, mit der Ihr Programm eine potenziell langwierige Aufgabe starten und während ihrer Ausführung weiterhin auf andere Ereignisse reagieren kann, statt auf ihren Abschluss warten zu müssen. Sobald die Aufgabe abgeschlossen ist, erhält Ihr Programm das Ergebnis.

Viele Funktionen, die Browser bereitstellen – insbesondere die interessanteren –, können längere Zeit in Anspruch nehmen und sind deshalb asynchron. Beispiele sind:

- HTTP-Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch) stellen
- Mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf die Kamera oder das Mikrofon einer Person zugreifen
- Eine Person mit [`showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) zur Auswahl von Dateien auffordern

Auch wenn Sie eigene asynchrone Funktionen möglicherweise nur selten _implementieren_ müssen, werden Sie sie sehr wahrscheinlich korrekt _verwenden_ müssen.

Zunächst betrachten wir in diesem Artikel das Problem langwieriger synchroner Funktionen, das asynchrone Programmierung notwendig macht.

## Synchrone Programmierung

Betrachten Sie den folgenden Code:

```js
const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
// "Hello, my name is Miriam!"
```

Dieser Code:

1. Deklariert einen String namens `name`.
2. Deklariert einen weiteren String namens `greeting`, der `name` verwendet.
3. Gibt die Begrüßung in der JavaScript-Konsole aus.

Der Browser arbeitet das Programm im Wesentlichen Zeile für Zeile in der Reihenfolge ab, in der wir es geschrieben haben. Dabei wartet er jeweils, bis eine Zeile ihre Arbeit abgeschlossen hat, bevor er zur nächsten übergeht. Das ist notwendig, weil jede Zeile von der Arbeit der vorherigen Zeilen abhängt.

Damit handelt es sich um ein **synchrones Programm**. Es bliebe auch dann synchron, wenn wir eine separate Funktion aufrufen würden, wie hier:

```js
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"
```

Hier ist `makeGreeting()` eine **synchrone Funktion**, weil der aufrufende Code warten muss, bis die Funktion ihre Arbeit abgeschlossen und einen Wert zurückgegeben hat, bevor er fortfahren kann.

## Eine langwierige synchrone Funktion

Was passiert, wenn eine synchrone Funktion lange braucht?

Das folgende Programm verwendet einen sehr ineffizienten Algorithmus, um mehrere große Primzahlen zu erzeugen, wenn jemand auf die Schaltfläche „Generate primes“ klickt. Je mehr Primzahlen angegeben werden, desto länger dauert der Vorgang.

```html
<label for="quota">Number of primes:</label>
<input type="text" id="quota" name="quota" value="1000000" />

<button id="generate">Generate primes</button>
<button id="reload">Reload</button>

<div id="output"></div>
```

```js
const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
  const primes = generatePrimes(quota.value);
  output.textContent = `Finished generating ${quota.value} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});
```

{{EmbedLiveSample("A long-running synchronous function", 600, 120)}}

Klicken Sie auf „Generate primes“. Je nachdem, wie schnell Ihr Computer ist, dauert es wahrscheinlich einige Sekunden, bis das Programm die Meldung „Finished!“ anzeigt.

## Das Problem mit langwierigen synchronen Funktionen

Das nächste Beispiel entspricht dem vorherigen, enthält aber zusätzlich ein Textfeld. Klicken Sie diesmal auf „Generate primes“ und versuchen Sie unmittelbar danach, etwas in das Textfeld einzugeben.

Sie werden feststellen, dass unser Programm vollständig reaktionsunfähig ist, während die Funktion `generatePrimes()` läuft: Sie können weder etwas eingeben noch anklicken oder eine andere Aktion ausführen.

```html hidden
<label for="quota">Number of primes:</label>
<input type="text" id="quota" name="quota" value="1000000" />

<button id="generate">Generate primes</button>
<button id="reload">Reload</button>

<textarea id="user-input" rows="5" cols="62">
Try typing in here immediately after pressing "Generate primes"
</textarea>

<div id="output"></div>
```

```css hidden
textarea {
  display: block;
  margin: 1rem 0;
}
```

```js hidden
const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
  const primes = generatePrimes(quota.value);
  output.textContent = `Finished generating ${quota.value} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});
```

{{EmbedLiveSample("The trouble with long-running synchronous functions", 600, 200)}}

Der Grund dafür ist, dass dieses JavaScript-Programm nur einen _Thread_ verwendet. Ein Thread ist eine Folge von Anweisungen, die ein Programm ausführt. Da das Programm nur einen Thread hat, kann es immer nur eine Sache gleichzeitig tun. Wenn es also darauf wartet, dass unser langwieriger synchroner Aufruf zurückkehrt, kann es nichts anderes tun.

Wir brauchen eine Möglichkeit, mit der unser Programm:

1. Durch den Aufruf einer Funktion einen langwierigen Vorgang startet.
2. Die Funktion den Vorgang starten und sofort zurückkehren lässt, damit unser Programm weiterhin auf andere Ereignisse reagieren kann.
3. Die Funktion den Vorgang ausführen lässt, ohne den Haupt-Thread zu blockieren, beispielsweise indem sie einen neuen Thread startet.
4. Über das Ergebnis informiert wird, sobald der Vorgang abgeschlossen ist.

Genau das ermöglichen uns asynchrone APIs. Im weiteren Verlauf dieses Moduls wird erklärt, wie diese Ansätze in JavaScript umgesetzt werden.

### Arten langwieriger Aufgaben und der Umgang mit ihnen

Es gibt zwei Arten langwieriger Aufgaben: Funktionen, die Browser-APIs bereitstellen, und eigenen Code, den Sie in JavaScript implementieren.

Fast alle vom Browser bereitgestellten grundlegenden Funktionen für langwierige Aufgaben sind bereits asynchron. Dazu gehören HTTP-Anfragen mit `fetch()`, Abfragen von [IndexedDB](/de/docs/Web/API/IndexedDB_API) und das [Verschlüsseln von Daten](/de/docs/Web/API/SubtleCrypto/encrypt). Sie blockieren niemals den Haupt-Thread. Sie interagieren mit ihnen über Ereignisse, Callbacks oder [Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises), wie Sie gleich sehen werden.

Unsere Funktion `generatePrimes()` ist dagegen eigener JavaScript-Code. Den Aufruf in eine Promise einzuschließen, verlagert die Berechnungen nicht in einen anderen Thread. Die Funktion blockiert während ihrer Ausführung also weiterhin den Haupt-Thread. Um sie asynchron auszuführen, müssen wir ausdrücklich einen Thread mithilfe eines [Web Workers](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing_workers) erstellen. Darauf gehen wir später in diesem Tutorial ein. In JavaScript ist das aufwendiger, als bereits vorhandene asynchrone Funktionen aufzurufen.

## Event-Handler

Die gerade beschriebene Funktionsweise asynchroner Funktionen erinnert Sie vielleicht an Event-Handler – und das zu Recht. Event-Handler sind eine Form der asynchronen Programmierung: Sie stellen eine Funktion bereit (den Event-Handler), die nicht sofort aufgerufen wird, sondern erst, wenn das Ereignis eintritt. Wenn das Ereignis darin besteht, dass ein asynchroner Vorgang abgeschlossen wurde, kann es dazu dienen, den aufrufenden Code über das Ergebnis eines asynchronen Funktionsaufrufs zu informieren.

Einige frühe asynchrone APIs verwendeten Ereignisse genau auf diese Weise. Mit der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-API können Sie mithilfe von JavaScript HTTP-Anfragen an einen entfernten Server stellen. Da dies lange dauern kann, ist die API asynchron. Über Event-Listener am `XMLHttpRequest`-Objekt werden Sie über den Fortschritt und den Abschluss einer Anfrage informiert.

Das folgende Beispiel zeigt, wie das funktioniert. Klicken Sie auf „Click to start request“, um eine Anfrage zu senden. Wir erstellen ein neues [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und registrieren einen Listener für dessen [`loadend`](/de/docs/Web/API/XMLHttpRequestEventTarget/loadend_event)-Ereignis. Der Handler gibt eine „Finished!“-Meldung zusammen mit dem Statuscode aus.

Nachdem wir den Event-Listener hinzugefügt haben, senden wir die Anfrage. Beachten Sie, dass wir danach „Started XHR request“ ausgeben können: Unser Programm kann also weiterlaufen, während die Anfrage bearbeitet wird. Sobald sie abgeschlossen ist, wird unser Event-Handler aufgerufen.

```html
<button id="xhr">Click to start request</button>
<button id="reload">Reload</button>

<pre class="event-log"></pre>
```

```css hidden
pre {
  display: block;
  margin: 1rem 0;
}
```

```js
const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
```

{{EmbedLiveSample("Event handlers", 600, 120)}}

Dies ist ein [Event-Handler](/de/docs/Learn_web_development/Core/Scripting/Events), genau wie Handler für Benutzeraktionen, etwa einen Klick auf eine Schaltfläche. Diesmal ist das Ereignis jedoch eine Änderung des Zustands eines Objekts.

## Callbacks

Ein Event-Handler ist eine besondere Art von Callback. Ein Callback ist eine Funktion, die an eine andere Funktion übergeben wird, damit sie zum passenden Zeitpunkt aufgerufen wird. Wie wir gerade gesehen haben, waren Callbacks früher die wichtigste Methode zur Implementierung asynchroner Funktionen in JavaScript.

Code mit Callbacks kann jedoch schwer verständlich werden, wenn ein Callback seinerseits Funktionen aufrufen muss, die einen Callback entgegennehmen. Das kommt häufig vor, wenn ein Vorgang aus einer Reihe asynchroner Funktionen besteht. Betrachten Sie zum Beispiel Folgendes:

```js
function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();
```

Hier haben wir einen Vorgang, der in drei Schritte aufgeteilt ist. Jeder Schritt hängt vom vorherigen ab. In unserem Beispiel addiert der erste Schritt 1 zur Eingabe, der zweite 2 und der dritte 3. Bei einer Eingabe von 0 ist das Endergebnis 6 (0 + 1 + 2 + 3). Als synchrones Programm ist das sehr einfach. Was aber, wenn wir die Schritte mithilfe von Callbacks implementieren?

```js
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();
```

Weil wir Callbacks innerhalb anderer Callbacks aufrufen müssen, entsteht eine tief verschachtelte `doOperation()`-Funktion, die deutlich schwerer zu lesen und zu debuggen ist. Dies wird manchmal als „Callback Hell“ oder „Pyramid of Doom“ bezeichnet, weil die Einrückung wie eine auf der Seite liegende Pyramide aussieht.

Wenn wir Callbacks auf diese Weise verschachteln, kann auch die Fehlerbehandlung sehr schwierig werden: Häufig müssen Fehler auf jeder Ebene der „Pyramide“ behandelt werden, statt nur einmal auf der obersten Ebene.

Aus diesen Gründen verwenden die meisten modernen asynchronen APIs keine Callbacks. Stattdessen bildet die {{jsxref("Promise")}} die Grundlage der asynchronen Programmierung in JavaScript. Sie ist das Thema des nächsten Artikels.

{{NextMenu("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS")}}
