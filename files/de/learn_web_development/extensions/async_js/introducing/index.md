---
title: Einführung in asynchrones JavaScript
short-title: Introduction
slug: Learn_web_development/Extensions/Async_JS/Introducing
l10n:
  sourceCommit: 00f8a68014509bb2fe795ece956c7571a80b9fd9
---

{{NextMenu("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS")}}

In diesem Artikel erklären wir, was asynchrone Programmierung ist, warum wir sie benötigen, und erörtern kurz einige der Möglichkeiten, wie asynchrone Funktionen historisch in JavaScript implementiert wurden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein solides Verständnis der <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit dem, was asynchrones JavaScript ist, wie es sich von synchronem JavaScript unterscheidet und warum wir es benötigen.</li>
          <li>Was synchrone Programmierung ist und warum sie manchmal problematisch sein kann.</li>
          <li>Wie die asynchrone Programmierung versucht, diese Probleme zu lösen.</li>
          <li>Ereignis-Handler und Callback-Funktionen und wie sie mit asynchroner Programmierung in Verbindung stehen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Asynchrone Programmierung ist eine Technik, die es Ihrem Programm ermöglicht, eine potenziell langwierige Aufgabe zu starten und dennoch auf andere Ereignisse reagieren zu können, während diese Aufgabe läuft, anstatt warten zu müssen, bis diese Aufgabe abgeschlossen ist. Sobald diese Aufgabe abgeschlossen ist, wird Ihrem Programm das Ergebnis präsentiert.

Viele von Browsern bereitgestellte Funktionen, insbesondere die interessantesten, können potenziell lange dauern und sind daher asynchron. Zum Beispiel:

- HTTP-Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch) machen
- Zugriff auf die Kamera oder das Mikrofon eines Benutzers mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- Den Benutzer auffordern, Dateien mit [`showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) auszuwählen

Auch wenn Sie möglicherweise nicht häufig Ihre eigenen asynchronen Funktionen _implementieren_ müssen, ist es sehr wahrscheinlich, dass Sie diese korrekt _verwenden_ müssen.

In diesem Artikel beginnen wir damit, uns das Problem mit langwierigen synchronen Funktionen anzusehen, die die asynchrone Programmierung notwendig machen.

## Synchrone Programmierung

Betrachten Sie den folgenden Code:

```js
const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
// "Hello, my name is Miriam!"
```

Dieser Code:

1. Deklariert eine Zeichenkette namens `name`.
2. Deklariert eine weitere Zeichenkette namens `greeting`, die `name` verwendet.
3. Gibt die Begrüßung in der JavaScript-Konsole aus.

Wir sollten hier beachten, dass der Browser das Programm effektiv eine Zeile nach der anderen in der Reihenfolge durchläuft, in der wir es geschrieben haben. An jedem Punkt wartet der Browser, bis die Zeile ihre Arbeit abgeschlossen hat, bevor er zur nächsten Zeile übergeht. Er muss dies tun, da jede Zeile von der Arbeit abhängt, die in den vorhergehenden Zeilen erledigt wurde.

Das macht dies zu einem **synchronen Programm**. Es wäre immer noch synchron, selbst wenn wir eine separate Funktion aufrufen würden, wie hier:

```js
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"
```

Hier ist `makeGreeting()` eine **synchrone Funktion**, da der Aufrufer warten muss, bis die Funktion ihre Arbeit abgeschlossen und einen Wert zurückgegeben hat, bevor der Aufrufer fortfahren kann.

## Eine lang andauernde synchrone Funktion

Was, wenn die synchrone Funktion lange dauert?

Das untenstehende Programm verwendet einen sehr ineffizienten Algorithmus, um bei einem Klick auf die Schaltfläche "Generate primes" (Primzahlen generieren) mehrere große Primzahlen zu erzeugen. Je höher die Anzahl der vom Benutzer angegebenen Primzahlen, desto länger wird die Operation dauern.

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

Versuchen Sie, auf "Generate primes" zu klicken. Je nach Geschwindigkeit Ihres Computers wird es wahrscheinlich einige Sekunden dauern, bevor das Programm die Nachricht "Finished!" (Fertig!) anzeigt.

## Das Problem mit langwierigen synchronen Funktionen

Das nächste Beispiel ist genau wie das letzte, außer dass wir ein Textfeld hinzugefügt haben, in das Sie tippen können. Klicken Sie dieses Mal auf "Generate primes" und versuchen Sie sofort danach, in das Textfeld zu tippen.

Sie werden feststellen, dass während unsere Funktion `generatePrimes()` läuft, unser Programm völlig unempfänglich ist: Sie können nichts tippen, nichts anklicken oder irgendetwas anderes tun.

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

Der Grund dafür ist, dass dieses JavaScript-Programm _single-threaded_ ist. Ein Thread ist eine Folge von Anweisungen, die ein Programm befolgt. Da das Programm aus einem einzigen Thread besteht, kann es nur eine Sache auf einmal tun: Wenn es also auf unseren langwierigen synchronen Aufruf wartet, kann es nichts anderes tun.

Wir brauchen eine Möglichkeit für unser Programm, um:

1. Eine langwierige Operation durch Aufruf einer Funktion zu starten.
2. Diese Funktion die Operation starten und sofort zurückkehren zu lassen, sodass unser Programm weiterhin auf andere Ereignisse reagieren kann.
3. Die Funktion die Operation so auszuführen, dass sie den Haupt-Thread nicht blockiert, z.B. durch Starten eines neuen Threads.
4. Uns mit dem Ergebnis der Operation zu benachrichtigen, wenn diese schließlich abgeschlossen ist.

Genau das ermöglichen uns asynchrone Funktionen. Der Rest dieses Moduls erklärt, wie sie in JavaScript implementiert werden.

## Ereignis-Handler

Die Beschreibung, die wir gerade von asynchronen Funktionen gesehen haben, könnte Sie an Ereignis-Handler erinnern, und wenn ja, haben Sie recht. Ereignis-Handler sind wirklich eine Form der asynchronen Programmierung: Sie stellen eine Funktion bereit (den Ereignis-Handler), die nicht sofort, sondern immer dann aufgerufen wird, wenn das Ereignis eintritt. Wenn "das Ereignis" "die asynchrone Operation ist abgeschlossen" lautet, könnte dieses Ereignis verwendet werden, um den Aufrufer über das Ergebnis eines asynchronen Funktionsaufrufs zu benachrichtigen.

Einige frühe asynchrone APIs haben Ereignisse genau auf diese Weise benutzt. Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API ermöglicht es Ihnen, HTTP-Anfragen an einen entfernten Server mit JavaScript zu senden. Da dies lange dauern kann, ist es eine asynchrone API, und Sie werden über den Fortschritt und den endgültigen Abschluss einer Anfrage benachrichtigt, indem Sie Ereignis-Listener an das `XMLHttpRequest`-Objekt anhängen.

Das folgende Beispiel zeigt dies in Aktion. Drücken Sie "Click to start request", um eine Anfrage zu senden. Wir erstellen einen neuen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und hören auf dessen [`loadend`](/de/docs/Web/API/XMLHttpRequestEventTarget/loadend_event)-Ereignis. Der Handler protokolliert eine "Finished!" Nachricht zusammen mit dem Statuscode.

Nachdem wir den Ereignis-Listener hinzugefügt haben, senden wir die Anfrage. Beachten Sie, dass wir danach "Started XHR request" protokollieren können: Das heißt, unser Programm kann weiterlaufen, während die Anfrage läuft, und unser Ereignis-Handler wird aufgerufen, wenn die Anfrage abgeschlossen ist.

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

Dies ist ein [Ereignis-Handler](/de/docs/Learn_web_development/Core/Scripting/Events), genau wie Handler für Benutzeraktionen, wie das Klicken eines Benutzers auf einen Button. Diesmal ist das Ereignis jedoch eine Änderung des Zustands eines Objekts.

## Callbacks

Ein Ereignis-Handler ist eine spezielle Art von Callback. Ein Callback ist einfach eine Funktion, die in eine andere Funktion übergeben wird, mit der Erwartung, dass der Callback zu einem angemessenen Zeitpunkt aufgerufen wird. Wie wir gerade gesehen haben, waren Callbacks früher die Hauptmethode, wie asynchrone Funktionen in JavaScript implementiert wurden.

Jedoch kann callback-basierter Code schwer zu verstehen werden, wenn der Callback selbst Funktionen aufrufen muss, die einen Callback akzeptieren. Dies ist eine häufige Situation, wenn Sie eine Operation durchführen müssen, die sich in eine Reihe asynchroner Funktionen zerlegt. Betrachten Sie zum Beispiel Folgendes:

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

Hier haben wir eine einzelne Operation, die in drei Schritte aufgeteilt ist, wobei jeder Schritt vom letzten Schritt abhängt. In unserem Beispiel fügt der erste Schritt 1 zur Eingabe hinzu, der zweite Schritt fügt 2 hinzu und der dritte fügt 3 hinzu. Ausgehend von einer Eingabe von 0 ist das Endergebnis 6 (0 + 1 + 2 + 3). Als synchrones Programm ist dies sehr unkompliziert. Aber was, wenn wir die Schritte mit Callbacks umsetzen?

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

Da wir Callbacks innerhalb von Callbacks aufrufen müssen, erhalten wir eine tief verschachtelte `doOperation()`-Funktion, die viel schwieriger zu lesen und zu debuggen ist. Dies wird manchmal als "Callback-Hölle" oder "Pyramide des Verderbens" bezeichnet (weil die Einrückung wie eine Pyramide auf ihrer Seite aussieht).

Wenn wir Callbacks auf diese Weise verschachteln, kann es auch sehr schwierig werden, Fehler zu behandeln: Oft müssen Sie Fehler auf jeder Ebene der "Pyramide" behandeln, anstatt die Fehlerbehandlung nur einmal auf der obersten Ebene zu haben.

Aus diesen Gründen verwenden die meisten modernen asynchronen APIs keine Callbacks. Stattdessen bildet die Grundlage der asynchronen Programmierung in JavaScript das {{jsxref("Promise")}}, und das ist das Thema des nächsten Artikels.

{{NextMenu("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS")}}
