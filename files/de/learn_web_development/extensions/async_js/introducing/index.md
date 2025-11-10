---
title: Einführung in asynchrones JavaScript
short-title: Introduction
slug: Learn_web_development/Extensions/Async_JS/Introducing
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{NextMenu("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS")}}

In diesem Artikel erklären wir, was asynchrone Programmierung ist, warum wir sie benötigen, und diskutieren kurz einige der Möglichkeiten, wie asynchrone Funktionen historisch in JavaScript implementiert wurden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein solides Verständnis von <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit dem, was asynchrones JavaScript ist, wie es sich von synchronem JavaScript unterscheidet und warum wir es benötigen.</li>
          <li>Was synchrone Programmierung ist und warum sie manchmal problematisch sein kann.</li>
          <li>Wie asynchrone Programmierung diese Probleme zu lösen versucht.</li>
          <li>Ereignishandler und Callback-Funktionen und wie sie mit asynchroner Programmierung zusammenhängen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Die asynchrone Programmierung ist eine Technik, die es Ihrem Programm ermöglicht, eine potenziell lang andauernde Aufgabe zu starten und dennoch auf andere Ereignisse reagieren zu können, während diese Aufgabe läuft, anstatt warten zu müssen, bis diese Aufgabe abgeschlossen ist. Sobald diese Aufgabe abgeschlossen ist, wird Ihrem Programm das Ergebnis präsentiert.

Viele von Browsern bereitgestellte Funktionen, insbesondere die interessantesten, können potenziell lange dauern und sind daher asynchron. Zum Beispiel:

- HTTP-Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch) durchführen
- Auf Kamera oder Mikrofon eines Benutzers mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zugreifen
- Einen Benutzer auffordern, Dateien mit [`showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) auszuwählen

Auch wenn Sie möglicherweise nicht sehr häufig Ihre eigenen asynchronen Funktionen _implementieren_ müssen, sind Sie sehr wahrscheinlich in der Lage, sie korrekt zu _verwenden_.

In diesem Artikel beginnen wir mit der Betrachtung des Problems mit lang andauernden synchronen Funktionen, die asynchrone Programmierung notwendig machen.

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
3. Gibt die Begrüßung an die JavaScript-Konsole aus.

Hier sollten wir beachten, dass der Browser effektiv Schritt für Schritt durch das Programm geht, in der Reihenfolge, in der wir es geschrieben haben. An jedem Punkt wartet der Browser darauf, dass die Zeile ihre Arbeit beendet, bevor er zur nächsten Zeile übergeht. Er muss dies tun, weil jede Zeile von der Arbeit abhängt, die in den vorhergehenden Zeilen erledigt wurde.

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

Hier ist `makeGreeting()` eine **synchrone Funktion**, weil der Aufrufer warten muss, bis die Funktion ihre Arbeit beendet und einen Wert zurückgegeben hat, bevor der Aufrufer fortfahren kann.

## Eine lang andauernde synchron Funktion

Was, wenn die synchrone Funktion lange dauert?

Das folgende Programm verwendet einen sehr ineffizienten Algorithmus, um mehrere große Primzahlen zu generieren, wenn ein Benutzer auf die Schaltfläche "Generate primes" klickt. Je höher die vom Benutzer angegebene Anzahl von Primzahlen ist, desto länger wird der Vorgang dauern.

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

Versuchen Sie, auf "Generate primes" zu klicken. Abhängig von der Geschwindigkeit Ihres Computers wird es wahrscheinlich einige Sekunden dauern, bis das Programm die Nachricht "Fertig!" anzeigt.

## Das Problem mit lang andauernden synchronen Funktionen

Das nächste Beispiel ist genau wie das letzte, außer dass wir ein Textfeld hinzugefügt haben, in dem Sie tippen können. Dieses Mal klicken Sie auf "Generate primes" und versuchen dann sofort, in das Textfeld zu tippen.

Sie werden feststellen, dass während unsere Funktion `generatePrimes()` ausgeführt wird, unser Programm völlig unreaktiv ist: Sie können nichts tippen, nichts anklicken oder sonst etwas tun.

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

Der Grund dafür ist, dass dieses JavaScript-Programm _einzelsequenziell_ arbeitet. Ein Thread ist eine Abfolge von Anweisungen, denen ein Programm folgt. Da das Programm nur aus einem einzigen Thread besteht, kann es jeweils nur eine Aufgabe bearbeiten: Wenn es auf die Rückgabe von unserer lang andauernden synchronen Aufforderung wartet, kann es nichts anderes tun.

Was wir brauchen, ist eine Möglichkeit für unser Programm:

1. Eine lang andauernde Operation durch einen Funktionsaufruf zu starten.
2. Diese Funktion die Operation starten und sofort zurückkehren zu lassen, sodass unser Programm weiterhin auf andere Ereignisse reagieren kann.
3. Die Funktion die Operation auf eine Art und Weise ausführen zu lassen, die den Haupt-Thread nicht blockiert, zum Beispiel durch Starten eines neuen Threads.
4. Uns über das Ergebnis der Operation zu benachrichtigen, wenn sie schließlich abgeschlossen ist.

Genau das ermöglichen uns asynchrone Funktionen. Der Rest dieses Moduls erklärt, wie sie in JavaScript implementiert werden.

## Ereignishandler

Die Beschreibung, die wir gerade von asynchronen Funktionen gesehen haben, könnte Sie an Ereignishandler erinnern, und wenn das der Fall ist, hätten Sie Recht. Ereignishandler sind in der Tat eine Form der asynchronen Programmierung: Sie stellen eine Funktion bereit (den Ereignishandler), die nicht sofort, sondern immer dann aufgerufen wird, wenn das Ereignis eintritt. Wenn "das Ereignis" "die asynchrone Operation ist abgeschlossen" bedeutet, dann könnte dieses Ereignis verwendet werden, um den Anrufer über das Ergebnis eines asynchronen Funktionsaufrufs zu benachrichtigen.

Einige frühe asynchrone APIs haben Ereignisse genau auf diese Weise verwendet. Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-API ermöglicht es Ihnen, HTTP-Anfragen an einen entfernten Server mittels JavaScript zu stellen. Da dies lange dauern kann, ist es eine asynchrone API, und Sie werden über den Fortschritt und den endgültigen Abschluss einer Anfrage informiert, indem Sie Ereignislistener an das `XMLHttpRequest`-Objekt anhängen.

Das folgende Beispiel zeigt dies in Aktion. Drücken Sie auf "Click to start request", um eine Anfrage zu senden. Wir erstellen eine neue [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und hören auf das [`loadend`](/de/docs/Web/API/XMLHttpRequestEventTarget/loadend_event)-Ereignis. Der Handler protokolliert eine "Fertig!"-Nachricht zusammen mit dem Statuscode.

Nachdem wir den Ereignislistener hinzugefügt haben, senden wir die Anfrage. Beachten Sie, dass wir danach "Started XHR request" protokollieren können: Das bedeutet, dass unser Programm weiterlaufen kann, während die Anfrage läuft, und unser Ereignishandler aufgerufen wird, wenn die Anfrage abgeschlossen ist.

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

Dies ist ein [Ereignishandler](/de/docs/Learn_web_development/Core/Scripting/Events), genau wie Handler für Benutzeraktionen, z.B. wenn der Benutzer auf einen Button klickt. Dieses Mal ist das Ereignis jedoch eine Änderung des Zustandes eines Objekts.

## Callbacks

Ein Ereignishandler ist eine besondere Art von Callback. Ein Callback ist einfach eine Funktion, die in eine andere Funktion übergeben wird, mit der Erwartung, dass der Callback zum passenden Zeitpunkt aufgerufen wird. Wie wir gerade gesehen haben, waren Callbacks früher die Hauptmethode, mit der asynchrone Funktionen in JavaScript implementiert wurden.

Allerdings kann callback-basierter Code schwer verständlich werden, wenn der Callback selbst Funktionen aufrufen muss, die einen Callback akzeptieren. Dies ist eine häufige Situation, wenn Sie eine Operation durchführen müssen, die sich in eine Reihe von asynchronen Funktionen aufgliedert. Betrachten Sie zum Beispiel Folgendes:

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

Hier haben wir eine einzelne Operation, die in drei Schritte unterteilt ist, wobei jeder Schritt von dem vorherigen abhängt. In unserem Beispiel addiert der erste Schritt 1 zum Input, der zweite fügt 2 hinzu, und der dritte fügt 3 hinzu. Beginnend mit einem Input von 0, ist das Endergebnis 6 (0 + 1 + 2 + 3). Als synchrones Programm ist das sehr einfach. Aber was wäre, wenn wir die Schritte mit Callbacks implementieren würden?

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

Da wir Callbacks innerhalb von Callbacks aufrufen müssen, erhalten wir eine tief geschachtelte `doOperation()`-Funktion, die viel schwieriger zu lesen und zu debuggen ist. Dies wird manchmal als "Callback-Hölle" oder "Pyramide des Untergangs" bezeichnet (weil die Einrückung wie eine Pyramide auf der Seite aussieht).

Wenn wir Callbacks so verschachteln, kann es auch sehr schwierig werden, Fehler zu handhaben: Oft müssen Sie Fehler auf jeder Ebene der "Pyramide" behandeln, anstatt das Fehlerhandling nur einmal auf der obersten Ebene zu haben.

Aus diesen Gründen nutzen die meisten modernen asynchronen APIs keine Callbacks. Stattdessen ist das Fundament der asynchronen Programmierung in JavaScript das {{jsxref("Promise")}}, und das ist das Thema des nächsten Artikels.

{{NextMenu("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS")}}
