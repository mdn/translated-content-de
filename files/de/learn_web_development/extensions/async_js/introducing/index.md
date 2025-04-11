---
title: Einführung in asynchrones JavaScript
short-title: Introduction
slug: Learn_web_development/Extensions/Async_JS/Introducing
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS")}}

In diesem Artikel erklären wir, was asynchrones Programmieren ist, warum wir es brauchen, und diskutieren kurz einige der Methoden, wie asynchrone Funktionen historisch in JavaScript implementiert wurden.

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
          <li>Vertrautheit mit asynchronem JavaScript gewinnen, verstehen, wie es sich von synchronem JavaScript unterscheidet und warum wir es benötigen.</li>
          <li>Was synchrones Programmieren ist und warum es manchmal problematisch sein kann.</li>
          <li>Wie asynchrones Programmieren diese Probleme zu lösen versucht.</li>
          <li>Ereignishandler und Callback-Funktionen und wie sie mit asynchronem Programmieren zusammenhängen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Asynchrones Programmieren ist eine Technik, die es Ihrem Programm ermöglicht, eine potenziell lang andauernde Aufgabe zu starten und trotzdem auf andere Ereignisse zu reagieren, während diese Aufgabe läuft, anstatt darauf warten zu müssen, dass die Aufgabe beendet ist. Sobald die Aufgabe beendet ist, wird Ihrem Programm das Ergebnis präsentiert.

Viele von Browsern bereitgestellte Funktionen, insbesondere die interessantesten, können potenziell lange dauern und sind daher asynchron. Zum Beispiel:

- HTTP-Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch) durchführen
- Auf Kamera oder Mikrofon eines Benutzers mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zugreifen
- Benutzer auffordern, Dateien mit [`showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) auszuwählen

Auch wenn Sie nicht oft eigene asynchrone Funktionen _implementieren_ müssen, werden Sie sie doch sehr wahrscheinlich richtig _verwenden_ müssen.

In diesem Artikel beginnen wir mit der Betrachtung des Problems mit lang andauernden synchronen Funktionen, die das asynchrone Programmieren notwendig machen.

## Synchrones Programmieren

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

Wir sollten hier festhalten, dass der Browser das Programm effektiv Zeile für Zeile in der Reihenfolge durchläuft, in der wir es geschrieben haben. In jedem Punkt wartet der Browser darauf, dass die Zeile ihre Arbeit beendet, bevor er zur nächsten Zeile übergeht. Er muss dies tun, weil jede Zeile von der Arbeit abhängig ist, die in den vorangegangenen Zeilen erledigt wurde.

Das macht dies zu einem **synchronen Programm**. Es wäre immer noch synchron, selbst wenn wir eine separate Funktion aufriefen, wie dies:

```js
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"
```

Hierbei ist `makeGreeting()` eine **synchrone Funktion**, weil der Aufrufer warten muss, bis die Funktion ihre Arbeit beendet und einen Wert zurückgibt, bevor der Aufrufer fortfahren kann.

## Eine lang andauernde synchrone Funktion

Was, wenn die synchrone Funktion lange dauert?

Das folgende Programm verwendet einen sehr ineffizienten Algorithmus, um mehrere große Primzahlen zu generieren, wenn ein Benutzer auf die Schaltfläche "Generate primes" klickt. Je mehr Primzahlen ein Benutzer angibt, desto länger dauert die Operation.

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

{{EmbedLiveSample("Eine lang andauernde synchrone Funktion", 600, 120)}}

Versuchen Sie, auf "Generate primes" zu klicken. Abhängig davon, wie schnell Ihr Computer ist, wird es wahrscheinlich einige Sekunden dauern, bis das Programm die Meldung "Finished!" anzeigt.

## Das Problem mit lang andauernden synchronen Funktionen

Das nächste Beispiel ist fast wie das letzte, außer dass wir ein Textfeld hinzugefügt haben, in das Sie tippen können. Diesmal klicken Sie auf "Generate primes" und versuchen, direkt danach in das Textfeld zu tippen.

Sie werden feststellen, dass während unsere `generatePrimes()`-Funktion läuft, unser Programm völlig unempfänglich ist: Sie können nichts tippen, nichts anklicken oder irgendetwas anderes tun.

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

{{EmbedLiveSample("Das Problem mit lang andauernden synchronen Funktionen", 600, 200)}}

Der Grund dafür ist, dass dieses JavaScript-Programm _single-threaded_ ist. Ein Thread ist eine Abfolge von Anweisungen, die von einem Programm befolgt werden. Da das Programm aus einem einzigen Thread besteht, kann es nur eine Sache zur gleichen Zeit tun: Wenn es also darauf wartet, dass unser lang andauernder synchroner Aufruf zurückkehrt, kann es nichts anderes tun.

Was wir brauchen, ist eine Möglichkeit, für unser Programm:

1. Einen lang andauernden Vorgang durch Aufruf einer Funktion zu starten.
2. Diese Funktion den Vorgang starten und sofort zurückkehren zu lassen, damit unser Programm weiterhin auf andere Ereignisse reagieren kann.
3. Die Funktion den Vorgang in einer Weise ausführen zu lassen, die den Hauptthread nicht blockiert, zum Beispiel durch Starten eines neuen Threads.
4. Uns über das Ergebnis des Vorgangs zu benachrichtigen, wenn er schließlich abgeschlossen ist.

Das ist genau das, was asynchrone Funktionen ermöglichen. Der Rest dieses Moduls erklärt, wie sie in JavaScript implementiert werden.

## Ereignishandler

Die eben beschriebene Beschreibung von asynchronen Funktionen könnte Sie an Ereignishandler erinnern, und wenn dem so ist, haben Sie recht. Ereignishandler sind wirklich eine Form des asynchronen Programmierens: Sie stellen eine Funktion bereit (den Ereignishandler), die nicht sofort, sondern immer dann aufgerufen wird, wenn das Ereignis eintritt. Wenn „das Ereignis“ ist „die asynchrone Operation wurde abgeschlossen“, könnte dieses Ereignis verwendet werden, um den Aufrufer über das Ergebnis eines asynchronen Funktionsaufrufs zu benachrichtigen.

Einige frühe asynchrone APIs haben Ereignisse genau auf diese Weise verwendet. Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API ermöglicht es Ihnen, HTTP-Anfragen an einen entfernten Server mit JavaScript zu stellen. Da dies lange dauern kann, ist es eine asynchrone API, und Sie werden über den Fortschritt und den endgültigen Abschluss einer Anfrage durch das Anfügen von Ereignis-Listenern an das `XMLHttpRequest`-Objekt benachrichtigt.

Das folgende Beispiel zeigt dies in Aktion. Drücken Sie "Click to start request", um eine Anfrage zu senden. Wir erstellen ein neues [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und warten auf ihr [`loadend`](/de/docs/Web/API/XMLHttpRequest/loadend_event)-Ereignis. Der Handler protokolliert eine "Finished!"-Meldung zusammen mit dem Statuscode.

Nach dem Hinzufügen des Ereignis-Listeners senden wir die Anfrage. Beachten Sie, dass wir danach "Started XHR request" protokollieren können: Das bedeutet, dass unser Programm weiter laufen kann, während die Anfrage noch verarbeitet wird, und unser Ereignishandler aufgerufen wird, wenn die Anfrage abgeschlossen ist.

```html
<button id="xhr">Click to start request</button>
<button id="reload">Reload</button>

<pre readonly class="event-log"></pre>
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

{{EmbedLiveSample("Ereignishandler", 600, 120)}}

Dies ist ein [Ereignishandler](/de/docs/Learn_web_development/Core/Scripting/Events), genau wie Handler für Benutzeraktionen, wie z. B. das Klicken eines Buttons durch den Benutzer. Diesmal ist das Ereignis jedoch eine Zustandsänderung eines Objekts.

## Callbacks

Ein Ereignishandler ist eine besondere Art von Callback. Ein Callback ist einfach eine Funktion, die in eine andere Funktion übergeben wird, mit der Erwartung, dass der Callback zu einem geeigneten Zeitpunkt aufgerufen wird. Wie wir gerade gesehen haben, waren Callbacks früher die Hauptmethode, wie asynchrone Funktionen in JavaScript implementiert wurden.

Callback-basierter Code kann jedoch schwer zu verstehen sein, wenn der Callback selbst Funktionen aufrufen muss, die einen Callback akzeptieren. Dies ist eine häufige Situation, wenn Sie eine Operation durchführen müssen, die sich in eine Serie von asynchronen Funktionen aufteilt. Betrachten Sie zum Beispiel folgendes:

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

Hier haben wir eine einzelne Operation, die in drei Schritte unterteilt ist, wobei jeder Schritt vom letzten Schritt abhängt. In unserem Beispiel fügt der erste Schritt der Eingabe 1 hinzu, der zweite 2 und der dritte 3. Beginnend mit einer Eingabe von 0 ist das Endergebnis 6 (0 + 1 + 2 + 3). Als synchrones Programm ist dies sehr einfach. Aber was, wenn wir die Schritte mit Callbacks implementieren?

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

Weil wir Callbacks innerhalb von Callbacks aufrufen müssen, erhalten wir eine tief verschachtelte `doOperation()`-Funktion, die viel schwerer zu lesen und zu debuggen ist. Dies wird manchmal "Callback-Hölle" oder die "Pyramide des Verderbens" genannt (weil die Einrückung wie eine Pyramide auf ihrer Seite aussieht).

Wenn wir Callbacks so verschachteln, kann es auch sehr schwierig werden, Fehler zu behandeln: Oft müssen Sie Fehler auf jeder Ebene der "Pyramide" behandeln, anstatt die Fehlerbehandlung nur einmal auf der obersten Ebene zu haben.

Aus diesen Gründen verwenden die meisten modernen asynchronen APIs keine Callbacks mehr. Stattdessen ist das Fundament des asynchronen Programmierens in JavaScript das {{jsxref("Promise")}}, und das ist das Thema des nächsten Artikels.

{{NextMenu("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS")}}
