---
title: Einführung in asynchrones JavaScript
slug: Learn/JavaScript/Asynchronous/Introducing
l10n:
  sourceCommit: 810682f11400bad32c92ae7182daddfc0ca973b3
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

In diesem Artikel erklären wir, was asynchrones Programmieren ist, warum wir es benötigen und diskutieren kurz einige der Methoden, wie asynchrone Funktionen historisch in JavaScript implementiert wurden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein angemessenes Verständnis der grundlegenden JavaScript-Konzepte, einschließlich Funktionen und Ereignishandler.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit asynchronem JavaScript zu erlangen, den Unterschied zu synchronem JavaScript zu verstehen und zu erkennen, warum wir es benötigen.
      </td>
    </tr>
  </tbody>
</table>

Asynchrones Programmieren ist eine Technik, die es Ihrem Programm ermöglicht, eine potenziell langlaufende Aufgabe zu starten und gleichzeitig auf andere Ereignisse zu reagieren, während diese Aufgabe ausgeführt wird, anstatt warten zu müssen, bis diese Aufgabe abgeschlossen ist. Sobald die Aufgabe abgeschlossen ist, wird Ihrem Programm das Ergebnis präsentiert.

Viele Funktionen, die von Browsern bereitgestellt werden, insbesondere die interessantesten, können potenziell lange dauern und sind daher asynchron. Zum Beispiel:

- HTTP-Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch) durchführen
- Zugriff auf die Kamera oder das Mikrofon eines Benutzers mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- Benutzer auffordern, Dateien mit [`showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) auszuwählen

Auch wenn Sie möglicherweise nicht sehr oft Ihre eigenen asynchronen Funktionen _implementieren_ müssen, ist es sehr wahrscheinlich, dass Sie sie korrekt _verwenden_ müssen.

In diesem Artikel beginnen wir mit der Betrachtung des Problems mit langlaufenden synchronen Funktionen, die asynchrones Programmieren notwendig machen.

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

Wir sollten hier beachten, dass der Browser das Programm effektiv Schritt für Schritt durchläuft, in der Reihenfolge, in der wir es geschrieben haben. An jedem Punkt wartet der Browser darauf, dass die Zeile ihre Arbeit beendet, bevor er zur nächsten Zeile weitergeht. Er muss dies tun, weil jede Zeile von der Arbeit abhängt, die in den vorhergehenden Zeilen erledigt wurde.

Das macht dieses Programm zu einem **synchronen Programm**. Es wäre immer noch synchron, selbst wenn wir eine separate Funktion aufrufen würden, wie hier:

```js
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"
```

Hier ist `makeGreeting()` eine **synchrone Funktion**, weil der Aufrufer warten muss, bis die Funktion ihre Arbeit beendet hat und einen Wert zurückgibt, bevor der Aufrufer fortfahren kann.

### Eine langlaufende synchrone Funktion

Was ist, wenn die synchrone Funktion lange dauert?

Das folgende Programm verwendet einen sehr ineffizienten Algorithmus, um mehrere große Primzahlen zu generieren, wenn ein Benutzer auf die Schaltfläche „Primzahlen erzeugen“ klickt. Je höher die Anzahl der vom Benutzer angegebenen Primzahlen ist, desto länger dauert der Vorgang.

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

{{EmbedLiveSample("Eine langlaufende synchrone Funktion", 600, 120)}}

Versuchen Sie, auf „Primzahlen erzeugen“ zu klicken. Abhängig davon, wie schnell Ihr Computer ist, wird es wahrscheinlich einige Sekunden dauern, bis das Programm die Meldung „Fertig!“ anzeigt.

### Das Problem mit langlaufenden synchronen Funktionen

Das nächste Beispiel ist genau wie das letzte, außer dass wir ein Textfeld hinzugefügt haben, in das Sie tippen können. Dieses Mal klicken Sie auf „Primzahlen erzeugen“ und versuchen, sofort danach in das Textfeld zu tippen.

Sie werden feststellen, dass während unsere `generatePrimes()` Funktion ausgeführt wird, unser Programm völlig unempfindlich ist: Sie können nichts eingeben, nichts anklicken oder irgendetwas anderes tun.

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

{{EmbedLiveSample("Das Problem mit langlaufenden synchronen Funktionen", 600, 200)}}

Der Grund dafür ist, dass dieses JavaScript-Programm _einfädig_ ist. Ein Thread ist eine Folge von Anweisungen, denen ein Programm folgt. Da das Programm aus einem einzigen Thread besteht, kann es nur eine Sache gleichzeitig tun: Wenn es also auf unseren langlaufenden synchronen Aufruf wartet, um zurückzukehren, kann es nichts anderes tun.

Was wir brauchen, ist eine Möglichkeit, damit unser Programm:

1. Einen langlaufenden Vorgang durch Aufrufen einer Funktion startet.
2. Diese Funktion den Vorgang starten und sofort zurückkehren lässt, damit unser Programm immer noch auf andere Ereignisse reagieren kann.
3. Die Funktion den Vorgang in einer Weise ausführt, die den Haupt-Thread nicht blockiert, beispielsweise durch Starten eines neuen Threads.
4. Uns benachrichtigt, wenn der Vorgang schließlich abgeschlossen ist.

Genau das ermöglichen uns asynchrone Funktionen. Der Rest dieses Moduls erklärt, wie sie in JavaScript implementiert werden.

## Ereignishandler

Die eben beschriebene Darstellung von asynchronen Funktionen könnte Sie an Ereignishandler erinnern, und wenn ja, hätten Sie recht. Ereignishandler sind wirklich eine Form des asynchronen Programmierens: Sie stellen eine Funktion zur Verfügung (den Ereignishandler), die nicht sofort aufgerufen wird, sondern immer dann, wenn das Ereignis eintritt. Wenn "das Ereignis" "der asynchrone Vorgang ist abgeschlossen" ist, könnte dieses Ereignis verwendet werden, um den Aufrufer über das Ergebnis eines asynchronen Funktionsaufrufs zu benachrichtigen.

Einige frühe asynchrone APIs nutzten Ereignisse genau auf diese Weise. Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API ermöglicht es Ihnen, HTTP-Anfragen an einen entfernten Server mit JavaScript zu stellen. Da dies lange dauern kann, ist es eine asynchrone API, und Sie werden über den Fortschritt und den endgültigen Abschluss einer Anforderung informiert, indem Sie Ereignis-Listener an das `XMLHttpRequest`-Objekt anhängen.

Das folgende Beispiel zeigt das in Aktion. Drücken Sie "Klicken, um Anfrage zu starten", um eine Anfrage zu senden. Wir erstellen eine neue [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und hören auf ihr [`loadend`](/de/docs/Web/API/XMLHttpRequest/loadend_event) Ereignis. Der Handler protokolliert eine "Fertig!" Meldung zusammen mit dem Statuscode.

Nachdem wir den Ereignis-Listener hinzugefügt haben, senden wir die Anfrage. Beachten Sie, dass wir danach "XHR-Anfrage gestartet" protokollieren können: Das heißt, unser Programm kann weiterlaufen, während die Anfrage durchgeführt wird, und unser Ereignishandler wird aufgerufen, wenn die Anfrage abgeschlossen ist.

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

Das ist genau wie die [Ereignishandler, die wir in einem früheren Modul behandelt haben](/de/docs/Learn/JavaScript/Building_blocks/Events), mit dem Unterschied, dass das Ereignis keine Benutzeraktion ist, wie z.B. das Klicken eines Benutzers auf einen Button, sondern eine Zustandsänderung eines Objekts.

## Rückruffunktionen

Ein Ereignishandler ist eine spezielle Art von Rückruffunktion. Eine Rückruffunktion ist einfach eine Funktion, die an eine andere Funktion übergeben wird, mit der Erwartung, dass die Rückruffunktion zur geeigneten Zeit aufgerufen wird. Wie wir gerade gesehen haben, waren Rückrufe früher der Hauptweg, um asynchrone Funktionen in JavaScript zu implementieren.

Allerdings kann rückruffasierte Code schwer verständlich werden, wenn der Rückruf selbst Funktionen aufrufen muss, die einen Rückruf akzeptieren. Das ist eine häufige Situation, wenn Sie eine Operation ausführen müssen, die sich in eine Reihe von asynchronen Funktionen unterteilt. Zum Beispiel:

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

Hier haben wir eine einzige Operation, die in drei Schritte unterteilt ist, wobei jeder Schritt von dem letzten Schritt abhängt. In unserem Beispiel addiert der erste Schritt 1 zur Eingabe, der zweite addiert 2, und der dritte addiert 3. Beginnend mit einem Eingang von 0 ist das Endergebnis 6 (0 + 1 + 2 + 3). Als synchrones Programm ist dies sehr geradlinig. Aber was, wenn wir die Schritte mit Rückrufen implementieren?

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

Weil wir Rückrufe innerhalb von Rückrufen aufrufen müssen, erhalten wir eine tief verschachtelte `doOperation()`-Funktion, die viel schwerer zu lesen und zu debuggen ist. Dies wird manchmal als "Callback-Hölle" oder die "Pyramide des Schreckens" bezeichnet (weil die Einrückung wie eine umgedrehte Pyramide aussieht).

Wenn wir Rückrufe auf diese Weise verschachteln, kann es auch sehr schwierig werden, Fehler zu behandeln: Oft müssen Sie Fehler auf jeder Ebene der "Pyramide" behandeln, anstatt nur einmal auf der obersten Ebene die Fehlerbehandlung vorzunehmen.

Aus diesen Gründen verwenden die meisten modernen asynchronen APIs keine Rückrufe mehr. Stattdessen bildet das Fundament der asynchronen Programmierung in JavaScript das {{jsxref("Promise")}}, und das ist das Thema des nächsten Artikels.

{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}
