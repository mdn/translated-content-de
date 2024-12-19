---
title: Einführung in asynchrones JavaScript
slug: Learn_web_development/Extensions/Async_JS/Introducing
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS")}}

In diesem Artikel erklären wir, was asynchrones Programmieren ist, warum wir es brauchen, und diskutieren kurz einige der Möglichkeiten, wie asynchrone Funktionen historisch in JavaScript implementiert wurden.

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
          <li>Vertrautheit mit asynchronem JavaScript gewinnen, wie es sich von synchronem JavaScript unterscheidet, und warum wir es brauchen.</li>
          <li>Was synchrones Programmieren ist und warum es manchmal problematisch sein kann.</li>
          <li>Wie asynchrones Programmieren diese Probleme zu lösen versucht.</li>
          <li>Event-Handler und Callback-Funktionen und wie sie zum asynchronen Programmieren stehen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Asynchrones Programmieren ist eine Technik, die es Ihrem Programm ermöglicht, eine potenziell langwierig laufende Aufgabe zu starten und während dieser Aufgabe auf andere Ereignisse reagieren zu können, anstatt warten zu müssen, bis die Aufgabe abgeschlossen ist. Sobald diese Aufgabe abgeschlossen ist, wird Ihrem Programm das Ergebnis präsentiert.

Viele von Browsern bereitgestellte Funktionen, insbesondere die interessantesten, können potenziell lange dauern und sind daher asynchron. Beispielsweise:

- HTTP-Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch) durchführen
- Zugriff auf die Kamera oder das Mikrofon eines Benutzers mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- Einen Benutzer auffordern, Dateien mit [`showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) auszuwählen

Selbst wenn Sie nicht oft Ihre eigenen asynchronen Funktionen _implementieren_ müssen, werden Sie sehr wahrscheinlich lernen müssen, sie korrekt zu _verwenden_.

In diesem Artikel beginnen wir mit dem Problem langlaufender synchroner Funktionen, die das asynchrone Programmieren notwendig machen.

## Synchrones Programmieren

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

Wir sollten hier bemerken, dass der Browser das Programm effektiv Zeile für Zeile in der Reihenfolge, in der wir es geschrieben haben, durchläuft. An jedem Punkt wartet der Browser, bis die Zeile ihre Arbeit abgeschlossen hat, bevor er zur nächsten Zeile übergeht. Er muss das tun, da jede Zeile von der in den vorherigen Zeilen geleisteten Arbeit abhängt.

Das macht dies zu einem **synchronen Programm**. Es wäre immer noch synchron, selbst wenn wir eine separate Funktion aufrufen, wie im Folgenden:

```js
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"
```

Hier ist `makeGreeting()` eine **synchrone Funktion**, weil der Aufrufer warten muss, bis die Funktion ihre Arbeit beendet und einen Wert zurückgegeben hat, bevor der Aufrufer fortfahren kann.

## Eine langlaufende synchrone Funktion

Was ist, wenn die synchrone Funktion lange dauert?

Das Programm unten nutzt einen sehr ineffizienten Algorithmus, um mehrere große Primzahlen zu generieren, wenn ein Benutzer auf die Schaltfläche "Generate primes" klickt. Je mehr Primzahlen ein Benutzer spezifiziert, desto länger dauert die Operation.

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

Versuchen Sie, auf "Generate primes" zu klicken. Abhängig von der Geschwindigkeit Ihres Computers wird es wahrscheinlich einige Sekunden dauern, bis das Programm die Nachricht "Finished!" anzeigt.

## Das Problem mit langlaufenden synchronen Funktionen

Das nächste Beispiel ist wie das letzte, außer dass wir ein Textfeld hinzugefügt haben, in das Sie tippen können. Diesmal klicken Sie auf "Generate primes" und versuchen sofort, in das Textfeld zu tippen.

Sie werden feststellen, dass während unsere `generatePrimes()`-Funktion läuft, unser Programm vollständig unansprechbar ist: Sie können nichts tippen, nichts klicken oder irgendetwas anderes tun.

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

Der Grund dafür ist, dass dieses JavaScript-Programm _eingleisig_ ist. Ein Thread ist eine Abfolge von Anweisungen, denen ein Programm folgt. Da das Programm aus einem einzigen Thread besteht, kann es nur eine Sache gleichzeitig tun: Wenn es auf die Rückgabe unseres langlaufenden synchronen Aufrufs wartet, kann es nichts anderes tun.

Was wir brauchen, ist eine Möglichkeit für unser Programm, um:

1. Eine langlaufende Operation durch den Aufruf einer Funktion zu starten.
2. Diese Funktion sofort zurückkehren zu lassen, damit unser Programm weiterhin auf andere Ereignisse reagieren kann.
3. Die Operation so auszuführen, dass der Haupt-Thread nicht blockiert wird, indem zum Beispiel ein neuer Thread gestartet wird.
4. Uns mit dem Ergebnis der Operation zu benachrichtigen, wenn sie schließlich abgeschlossen ist.

Genau das ermöglichen uns asynchrone Funktionen. Der Rest dieses Moduls erklärt, wie sie in JavaScript implementiert sind.

## Event-Handler

Die eben gesehene Beschreibung von asynchronen Funktionen könnte Sie an Event-Handler erinnern, und wenn ja, hätten Sie recht. Event-Handler sind tatsächlich eine Form des asynchronen Programms: Sie stellen eine Funktion (den Event-Handler) zur Verfügung, die nicht sofort, sondern immer dann aufgerufen wird, wenn das Ereignis eintritt. Wenn "das Ereignis" bedeutet, "die asynchrone Operation ist abgeschlossen", könnte dieses Ereignis dazu verwendet werden, den Aufrufer über das Ergebnis eines asynchronen Funktionsaufrufs zu benachrichtigen.

Einige frühe asynchrone APIs haben Ereignisse genau auf diese Weise genutzt. Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-API ermöglicht es Ihnen, HTTP-Anfragen an einen entfernten Server mit JavaScript zu senden. Da dies lange dauern kann, ist es eine asynchrone API, und Sie werden über den Fortschritt und den endgültigen Abschluss einer Anfrage informiert, indem Sie Event-Listener an das `XMLHttpRequest`-Objekt anhängen.

Das folgende Beispiel zeigt dies in Aktion. Drücken Sie "Click to start request", um eine Anfrage zu senden. Wir erstellen ein neues [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und hören auf dessen [`loadend`](/de/docs/Web/API/XMLHttpRequest/loadend_event)-Ereignis. Der Handler protokolliert eine "Finished!" Nachricht zusammen mit dem Statuscode.

Nach dem Hinzufügen des Event-Listeners senden wir die Anfrage. Beachten Sie, dass wir danach "Started XHR request" protokollieren können: Das heißt, unser Programm kann weiterlaufen, während die Anfrage gestellt wird, und unser Event-Handler wird aufgerufen, wenn die Anfrage abgeschlossen ist.

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

{{EmbedLiveSample("Event handlers", 600, 120)}}

Dies ist ein [Event-Handler](/de/docs/Learn_web_development/Core/Scripting/Events) genau so wie Handler für Benutzeraktionen, wie das Klicken eines Benutzers auf einen Button. Diesmal ist das Ereignis jedoch eine Änderung im Status eines Objekts.

## Callbacks

Ein Event-Handler ist eine besondere Art von Callback. Ein Callback ist einfach eine Funktion, die in eine andere Funktion übergeben wird, mit der Erwartung, dass der Callback zum entsprechenden Zeitpunkt aufgerufen wird. Wie wir gerade gesehen haben, waren Callbacks früher der Hauptweg, wie asynchrone Funktionen in JavaScript implementiert wurden.

Allerdings kann callback-basierter Code schwer verständlich werden, wenn der Callback selbst Funktionen aufrufen muss, die einen Callback akzeptieren. Dies ist eine häufige Situation, wenn Sie eine Operation durchführen müssen, die sich in eine Reihe von asynchronen Funktionen aufteilt. Betrachten Sie zum Beispiel das Folgende:

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

Hier haben wir eine einzelne Operation, die in drei Schritte unterteilt ist, wobei jeder Schritt vom vorherigen Schritt abhängt. In unserem Beispiel fügt der erste Schritt 1 zur Eingabe hinzu, der zweite fügt 2 hinzu, und der dritte fügt 3 hinzu. Beginnend mit einem Eingang von 0 ist das Endergebnis 6 (0 + 1 + 2 + 3). Als synchrones Programm ist dies sehr einfach. Aber was, wenn wir die Schritte mit Callbacks implementieren?

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

Da wir Callbacks innerhalb von Callbacks aufrufen müssen, erhalten wir eine tief verschachtelte `doOperation()`-Funktion, die viel schwerer zu lesen und zu debuggen ist. Dies wird manchmal als "callback hell" oder "pyramid of doom" (weil die Einrückung wie eine auf der Seite liegende Pyramide aussieht) bezeichnet.

Wenn wir Callbacks auf diese Weise verschachteln, kann es auch sehr schwierig werden, Fehler zu behandeln: oft müssen Sie Fehler auf jeder Ebene der "Pyramide" behandeln, anstatt die Fehlerbehandlung nur einmal auf der höchsten Ebene zu haben.

Aus diesen Gründen verwenden die meisten modernen asynchronen APIs keine Callbacks mehr. Stattdessen bildet das {{jsxref("Promise")}} die Grundlage des asynchronen Programmierens in JavaScript, und das ist das Thema des nächsten Artikels.

{{NextMenu("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS")}}
