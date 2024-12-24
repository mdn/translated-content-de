---
title: Einführung in asynchrones JavaScript
slug: Learn_web_development/Extensions/Async_JS/Introducing
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS")}}

In diesem Artikel erklären wir, was asynchrones Programmieren ist, warum wir es benötigen und diskutieren kurz einige der Methoden, wie asynchrone Funktionen historisch in JavaScript implementiert wurden.

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
          <li>Vertrautheit darüber gewinnen, was asynchrones JavaScript ist, wie es sich von synchronem JavaScript unterscheidet und warum wir es benötigen.</li>
          <li>Was synchrones Programmieren ist und warum es manchmal problematisch sein kann.</li>
          <li>Wie asynchrones Programmieren versucht, diese Probleme zu lösen.</li>
          <li>Ereignis-Handler und Rückruffunktionen, und wie sie mit asynchronem Programmieren zusammenhängen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Asynchrones Programmieren ist eine Technik, die es Ihrem Programm ermöglicht, eine potenziell lang andauernde Aufgabe zu starten und trotzdem auf andere Ereignisse reagierend zu bleiben, während diese Aufgabe läuft, anstatt warten zu müssen, bis die Aufgabe abgeschlossen ist. Sobald diese Aufgabe abgeschlossen ist, erhält Ihr Programm das Ergebnis.

Viele von Browsern bereitgestellte Funktionen, insbesondere die interessantesten, können potenziell lange dauern und sind daher asynchron. Beispiele hierfür sind:

- HTTP-Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch)
- Zugriff auf die Kamera oder das Mikrofon eines Benutzers mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- Benutzer dazu auffordern, Dateien auszuwählen, mit [`showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker)

Auch wenn Sie vielleicht nicht oft Ihre eigenen asynchronen Funktionen _implementieren_ müssen, werden Sie wahrscheinlich oft genug in der Lage sein müssen, sie korrekt _zu verwenden_.

In diesem Artikel beginnen wir damit, das Problem mit lang andauernden synchronen Funktionen zu betrachten, die asynchrones Programmieren erforderlich machen.

## Synchrones Programmieren

Betrachten Sie folgenden Code:

```js
const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
// "Hello, my name is Miriam!"
```

Dieser Code:

1. Deklariert einen String namens `name`.
2. Deklariert einen weiteren String namens `greeting`, der `name` verwendet.
3. Gibt den Gruß im JavaScript-Konsolenprotokoll aus.

Wir sollten anmerken, dass der Browser das Programm effektiv eine Zeile nach der anderen in der Reihenfolge, in der wir es geschrieben haben, durchschreitet. An jedem Punkt wartet der Browser darauf, dass die Zeile ihre Arbeit abgeschlossen hat, bevor er zur nächsten Zeile übergeht. Das muss er tun, weil jede Zeile von der in den vorangegangenen Zeilen geleisteten Arbeit abhängt.

Das macht dies zu einem **synchronen Programm**. Es wäre immer noch synchron, selbst wenn wir eine separate Funktion aufrufen würden, wie folgt:

```js
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"
```

Hier ist `makeGreeting()` eine **synchrone Funktion**, weil der Aufrufer warten muss, bis die Funktion ihre Arbeit abgeschlossen und einen Wert zurückgegeben hat, bevor der Aufrufer fortfahren kann.

## Eine lang andauernde synchrone Funktion

Was passiert, wenn die synchrone Funktion lange dauert?

Das unten stehende Programm verwendet einen sehr ineffizienten Algorithmus, um mehrere große Primzahlen zu generieren, wenn ein Benutzer auf den Button "Generate primes" klickt. Je höher die Anzahl der Primzahlen, die ein Benutzer angibt, desto länger dauert der Vorgang.

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

Versuchen Sie, auf "Generate primes" zu klicken. Abhängig davon, wie schnell Ihr Computer ist, dauert es wahrscheinlich einige Sekunden, bevor das Programm die Nachricht "Fertig!" anzeigt.

## Das Problem mit lang andauernden synchronen Funktionen

Das nächste Beispiel ist genauso wie das letzte, außer dass wir ein Textfeld hinzugefügt haben, in das Sie tippen können. Dieses Mal klicken Sie auf "Generate primes" und versuchen, sofort danach in das Textfeld zu tippen.

Sie werden feststellen, dass während unserer `generatePrimes()`-Funktion läuft, unser Programm vollständig unansprechbar ist: Sie können nichts eingeben, nichts klicken oder irgendetwas anderes tun.

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

Der Grund dafür ist, dass dieses JavaScript-Programm _einzelsträngig_ ist. Ein Thread ist eine Abfolge von Anweisungen, die ein Programm befolgt. Da das Programm aus einem einzigen Thread besteht, kann es nur eine Sache auf einmal tun: Wenn es also darauf wartet, dass unser lang andauernder synchroner Aufruf zurückkehrt, kann es nichts anderes tun.

Wir benötigen eine Möglichkeit für unser Programm, um:

1. Eine lang andauernde Operation durch Aufruf einer Funktion zu starten.
2. Diese Funktion soll die Operation starten und sofort zurückkehren, sodass unser Programm weiterhin auf andere Ereignisse reagieren kann.
3. Die Funktion soll die Operation so ausführen, dass sie den Haupt-Thread nicht blockiert, zum Beispiel durch Starten eines neuen Threads.
4. Uns mit dem Ergebnis der Operation benachrichtigen, wenn sie schließlich abgeschlossen ist.

Genau dies ermöglichen uns asynchrone Funktionen. Der Rest dieses Moduls erklärt, wie sie in JavaScript implementiert sind.

## Ereignis-Handler

Die Beschreibung, die wir gerade über asynchrone Funktionen gehört haben, könnte Sie an Ereignis-Handler erinnern, und wenn ja, haben Sie recht. Ereignis-Handler sind wirklich eine Form des asynchronen Programmierens: Sie geben eine Funktion (den Ereignis-Handler) an, die nicht sofort, sondern wann immer das Ereignis eintritt, aufgerufen wird. Wenn "das Ereignis" ist "die asynchrone Operation ist abgeschlossen", dann könnte dieses Ereignis verwendet werden, um den Aufrufer über das Ergebnis eines asynchronen Funktionsaufrufs zu benachrichtigen.

Einige frühe asynchrone APIs verwendeten Ereignisse genau so. Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-API ermöglicht es Ihnen, HTTP-Anfragen an einen entfernten Server mit JavaScript zu machen. Da dies lange dauern kann, ist es eine asynchrone API, und Sie werden über den Fortschritt und den Abschluss einer Anforderung benachrichtigt, indem Sie Ereignis-Listener an das `XMLHttpRequest`-Objekt anhängen.

Das folgende Beispiel zeigt dies in Aktion. Drücken Sie "Click to start request", um eine Anforderung zu senden. Wir erstellen ein neues [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und lauschen seinem [`loadend`](/de/docs/Web/API/XMLHttpRequest/loadend_event)-Event. Der Handler protokolliert eine "Fertig!"-Nachricht zusammen mit dem Statuscode.

Nachdem wir den Ereignis-Listener hinzugefügt haben, senden wir die Anforderung. Beachten Sie, dass wir danach "Started XHR request" protokollieren können: Das heißt, unser Programm kann weiterlaufen, während die Anforderung läuft, und unser Ereignis-Handler wird aufgerufen, wenn die Anforderung abgeschlossen ist.

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

{{EmbedLiveSample("Ereignis-Handler", 600, 120)}}

Dies ist ein [Ereignis-Handler](/de/docs/Learn_web_development/Core/Scripting/Events), genau wie Handler für Benutzeraktionen, wie wenn der Benutzer auf einen Button klickt. Dieses Mal jedoch ist das Ereignis eine Veränderung im Zustand eines Objekts.

## Rückrufe

Ein Ereignis-Handler ist ein besonderer Typ des Rückrufs. Ein Rückruf ist einfach eine Funktion, die in eine andere Funktion übergeben wird, in der Erwartung, dass der Rückruf zur passenden Zeit aufgerufen wird. Wie wir gerade gesehen haben, waren Rückrufe früher die Hauptmethode, wie asynchrone Funktionen in JavaScript implementiert wurden.

Jedoch kann rückrufbasierter Code schwer zu verstehen werden, wenn der Rückruf selbst Funktionen aufrufen muss, die einen Rückruf akzeptieren. Dies ist eine häufige Situation, wenn Sie eine Operation ausführen müssen, die sich in eine Reihe von asynchronen Funktionen aufteilt. Zum Beispiel, betrachten Sie das Folgende:

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

Hier haben wir eine einzige Operation, die in drei Schritte aufgeteilt ist, wobei jeder Schritt vom letzten Schritt abhängt. In unserem Beispiel addiert der erste Schritt 1 zum Eingabewert, der zweite Schritt addiert 2, und der dritte addiert 3. Beginnend mit einem Eingabewert von 0 ist das Endergebnis 6 (0 + 1 + 2 + 3). Als synchrones Programm ist dies sehr einfach. Aber was passiert, wenn wir die Schritte mit Rückrufen implementieren?

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

Da wir Rückrufe innerhalb von Rückrufen aufrufen müssen, erhalten wir eine tief verschachtelte `doOperation()`-Funktion, die viel schwieriger zu lesen und zu debuggen ist. Dies wird manchmal als "Callback-Hölle" oder "Pyramide des Grauens" bezeichnet (da die Einrückung wie eine Pyramide auf ihrer Seite aussieht).

Wenn wir Rückrufe auf diese Weise verschachteln, kann es auch sehr schwer werden, Fehler zu handhaben: Oftmals müssen Sie Fehler auf jeder Ebene der "Pyramide" behandeln, anstatt die Fehlerbehandlung nur einmal auf oberster Ebene zu haben.

Aus diesen Gründen verwenden die meisten modernen asynchronen APIs keine Rückrufe mehr. Stattdessen ist die Grundlage des asynchronen Programmierens in JavaScript das {{jsxref("Promise")}}, und das ist das Thema des nächsten Artikels.

{{NextMenu("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS")}}
