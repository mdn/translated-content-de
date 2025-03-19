---
title: Einführung in asynchrones JavaScript
short-title: Introduction
slug: Learn_web_development/Extensions/Async_JS/Introducing
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS")}}

In diesem Artikel erklären wir, was asynchrone Programmierung ist, warum wir sie benötigen, und besprechen kurz einige der Möglichkeiten, wie asynchrone Funktionen historisch in JavaScript implementiert wurden.

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
          <li>Was synchrone Programmierung ist und warum sie manchmal problematisch sein kann.</li>
          <li>Wie asynchrone Programmierung versucht, diese Probleme zu lösen.</li>
          <li>Ereignishandler und Callback-Funktionen, und wie sie sich auf asynchrone Programmierung beziehen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Asynchrone Programmierung ist eine Technik, die Ihrem Programm ermöglicht, eine potenziell langlaufende Aufgabe zu starten und dennoch auf andere Ereignisse reagieren zu können, während diese Aufgabe ausgeführt wird, anstatt warten zu müssen, bis die Aufgabe abgeschlossen ist. Sobald die Aufgabe abgeschlossen ist, wird Ihrem Programm das Ergebnis präsentiert.

Viele von Browsern bereitgestellte Funktionen, insbesondere die interessantesten, können potenziell lange dauern und sind daher asynchron. Zum Beispiel:

- HTTP-Anfragen stellen mit [`fetch()`](/de/docs/Web/API/Window/fetch)
- Zugriff auf die Kamera oder das Mikrofon eines Benutzers mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- Einen Benutzer auffordern, Dateien auszuwählen mit [`showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker)

Selbst wenn Sie Ihre eigenen asynchronen Funktionen nicht oft **implementieren** müssen, werden Sie sie sehr wahrscheinlich korrekt **verwenden** müssen.

In diesem Artikel beginnen wir damit, das Problem mit langlaufenden synchronen Funktionen zu betrachten, die asynchrone Programmierung notwendig machen.

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

Wir sollten hier darauf hinweisen, dass der Browser das Programm effektiv eine Zeile nach der anderen in der Reihenfolge, in der wir es geschrieben haben, durchläuft. An jedem Punkt wartet der Browser, bis die Zeile ihre Arbeit abgeschlossen hat, bevor sie zur nächsten Zeile übergeht. Er muss dies tun, weil jede Zeile von der Arbeit abhängt, die in den vorhergehenden Zeilen erledigt wurde.

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

Hier ist `makeGreeting()` eine **synchrone Funktion**, weil der Aufrufer warten muss, bis die Funktion ihre Arbeit beendet und einen Wert zurückgibt, bevor der Aufrufer fortfahren kann.

## Eine langlaufende synchrone Funktion

Was passiert, wenn die synchronen Funktion lange dauert?

Das folgende Programm verwendet einen sehr ineffizienten Algorithmus, um mehrere große Primzahlen zu erzeugen, wenn ein Benutzer auf die Schaltfläche "Generate primes" klickt. Je höher die Anzahl der vom Benutzer angegebenen Primzahlen, desto länger dauert der Vorgang.

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

Versuchen Sie, "Generate primes" zu klicken. Abhängig davon, wie schnell Ihr Computer ist, wird es wahrscheinlich einige Sekunden dauern, bis das Programm die Meldung "Finished!" anzeigt.

## Das Problem mit langlaufenden synchronen Funktionen

Das nächste Beispiel ist genau wie das letzte, außer dass wir ein Textfeld hinzugefügt haben, in das Sie tippen können. Dieses Mal klicken Sie auf "Generate primes" und versuchen Sie, sofort danach in das Textfeld zu tippen.

Sie werden feststellen, dass während unserer `generatePrimes()`-Funktion läuft, unser Programm vollständig unempfänglich ist: Sie können nichts tippen, nichts anklicken oder sonst etwas tun.

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

Der Grund dafür ist, dass dieses JavaScript-Programm _einzelsträngig_ ist. Ein Thread ist eine Abfolge von Anweisungen, der ein Programm folgt. Da das Programm aus einem einzigen Thread besteht, kann es nur eine Sache auf einmal tun: wenn es also auf unseren langlaufenden synchronen Aufruf wartet, kann es nichts anderes tun.

Was wir brauchen ist eine Möglichkeit, dass unser Programm:

1. Einen langlaufenden Vorgang durch einen Funktionsaufruf startet.
2. Diese Funktion den Vorgang startet und sofort zurückkehrt, so dass unser Programm weiterhin auf andere Ereignisse reagieren kann.
3. Die Funktion den Vorgang so ausführt, dass der Haupt-Thread nicht blockiert wird, zum Beispiel durch Starten eines neuen Threads.
4. Uns mit dem Ergebnis des Vorgangs benachrichtigt, wenn er schließlich abgeschlossen ist.

Genau das ermöglichen uns asynchrone Funktionen. Der Rest dieses Moduls erklärt, wie sie in JavaScript implementiert werden.

## Ereignishandler

Die Beschreibung, die wir gerade über asynchrone Funktionen gesehen haben, könnte Sie an Ereignishandler erinnern, und wenn das der Fall ist, liegen Sie richtig. Ereignishandler sind wirklich eine Form der asynchronen Programmierung: Sie stellen eine Funktion bereit (den Ereignishandler), die nicht sofort, sondern immer dann aufgerufen wird, wenn das Ereignis eintritt. Wenn "das Ereignis" "die asynchrone Operation ist abgeschlossen" ist, könnte dieses Ereignis verwendet werden, um den Aufrufer über das Ergebnis eines asynchronen Funktionsaufrufs zu benachrichtigen.

Einige frühe asynchrone APIs haben Ereignisse genau auf diese Weise verwendet. Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-API ermöglicht Ihnen, HTTP-Anfragen an einen entfernten Server mit JavaScript zu stellen. Da dies lange dauern kann, ist es eine asynchrone API, und Sie werden über den Fortschritt und die endgültige Fertigstellung einer Anfrage benachrichtigt, indem Sie Ereignislistener an das `XMLHttpRequest`-Objekt anhängen.

Das folgende Beispiel zeigt dies in Aktion. Drücken Sie "Click to start request", um eine Anfrage zu senden. Wir erstellen ein neues [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und hören auf sein [`loadend`](/de/docs/Web/API/XMLHttpRequest/loadend_event)-Ereignis. Der Handler protokolliert eine "Finished!"-Meldung zusammen mit dem Statuscode.

Nachdem wir den Ereignislistener hinzugefügt haben, senden wir die Anfrage. Beachten Sie, dass wir danach "Started XHR request" protokollieren können: Das heißt, unser Programm kann weiterlaufen, während die Anfrage ausgeht, und unser Ereignishandler wird aufgerufen, wenn die Anfrage abgeschlossen ist.

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

Dies ist ein [Ereignishandler](/de/docs/Learn_web_development/Core/Scripting/Events), genau wie Handler für Benutzeraktionen, wie das Klicken eines Benutzers auf eine Schaltfläche. Dieses Mal jedoch ist das Ereignis eine Änderung im Zustand eines Objekts.

## Callbacks

Ein Ereignishandler ist eine besondere Art von Callback. Ein Callback ist einfach eine Funktion, die in eine andere Funktion übergeben wird, mit der Erwartung, dass der Callback zum passenden Zeitpunkt aufgerufen wird. Wie wir gerade gesehen haben, wurden Callbacks früher als Hauptmethode zur Implementierung von asynchronen Funktionen in JavaScript verwendet.

Allerdings kann Code, der auf Callbacks basiert, schwer zu verstehen werden, wenn der Callback selbst Funktionen aufrufen muss, die einen Callback akzeptieren. Dies ist eine häufige Situation, wenn Sie eine Operation durchführen müssen, die in eine Reihe von asynchronen Funktionen zerlegt ist. Betrachten Sie zum Beispiel das Folgende:

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

Hier haben wir eine einzelne Operation, die in drei Schritte aufgeteilt ist, wobei jeder Schritt vom letzten Schritt abhängt. In unserem Beispiel fügt der erste Schritt 1 zum Input hinzu, der zweite Schritt fügt 2 hinzu, und der dritte fügt 3 hinzu. Beginnend mit einem Input von 0 ist das Endergebnis 6 (0 + 1 + 2 + 3). Als synchrones Programm ist dies sehr unkompliziert. Aber was, wenn wir die Schritte mit Callbacks implementieren?

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

Weil wir Callbacks innerhalb von Callbacks aufrufen müssen, erhalten wir eine tief verschachtelte `doOperation()`-Funktion, die viel schwerer zu lesen und zu debuggen ist. Dies wird manchmal als "Callback-Hölle" oder "Pyramide des Untergangs" bezeichnet (weil die Einrückung wie eine Pyramide auf der Seite aussieht).

Wenn wir Callbacks auf diese Weise verschachteln, kann es auch sehr schwierig werden, Fehler zu behandeln: Oft müssen Sie Fehler auf jeder Ebene der "Pyramide" behandeln, anstatt die Fehlerbehandlung nur einmal auf der obersten Ebene zu haben.

Aus diesen Gründen verwenden die meisten modernen asynchronen APIs keine Callbacks. Stattdessen ist das Fundament der asynchronen Programmierung in JavaScript das {{jsxref("Promise")}}, und das ist das Thema des nächsten Artikels.

{{NextMenu("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS")}}
