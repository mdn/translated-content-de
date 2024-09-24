---
title: Einführung in asynchrones JavaScript
slug: Learn/JavaScript/Asynchronous/Introducing
l10n:
  sourceCommit: 810682f11400bad32c92ae7182daddfc0ca973b3
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

In diesem Artikel erklären wir, was asynchrones Programmieren ist, warum wir es brauchen, und diskutieren kurz einige der Wege, auf denen asynchrone Funktionen historisch in JavaScript implementiert wurden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein angemessenes Verständnis der JavaScript-Grundlagen, einschließlich Funktionen und Ereignis-Handler.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit asynchronem JavaScript zu erlangen, wie es sich von synchronem JavaScript unterscheidet und warum wir es benötigen.
      </td>
    </tr>
  </tbody>
</table>

Asynchrones Programmieren ist eine Technik, die es Ihrem Programm ermöglicht, eine potenziell langwierige Aufgabe zu starten und dennoch auf andere Ereignisse reagieren zu können, während diese Aufgabe läuft, anstatt warten zu müssen, bis diese Aufgabe abgeschlossen ist. Sobald diese Aufgabe abgeschlossen ist, wird Ihrem Programm das Ergebnis präsentiert.

Viele von Browsern bereitgestellte Funktionen, insbesondere die interessantesten, können potenziell lange dauern und sind daher asynchron. Zum Beispiel:

- HTTP-Anfragen mit {{domxref("Window/fetch", "fetch()")}} ausführen
- Zugriff auf die Kamera oder das Mikrofon eines Benutzers mit {{domxref("MediaDevices/getUserMedia", "getUserMedia()")}}
- Den Benutzer auffordern, Dateien mit {{domxref("window/showOpenFilePicker", "showOpenFilePicker()")}} auszuwählen

Selbst wenn Sie vielleicht nicht häufig Ihre eigenen asynchronen Funktionen _implementieren_ müssen, werden Sie sie doch sehr wahrscheinlich korrekt _verwenden_ müssen.

In diesem Artikel beginnen wir mit der Betrachtung des Problems mit lang laufenden synchronen Funktionen, die asynchrones Programmieren zur Notwendigkeit machen.

## Synchronous programming

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

Wir sollten hier beachten, dass der Browser das Programm effektiv zeilenweise in der von uns geschriebenen Reihenfolge durchläuft. An jedem Punkt wartet der Browser, bis die Zeile ihre Arbeit abgeschlossen hat, bevor er zur nächsten Zeile übergeht. Er muss dies tun, da jede Zeile von der zuvor geleisteten Arbeit abhängt.

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

Hier ist `makeGreeting()` eine **synchrone Funktion**, da der Aufrufer darauf warten muss, dass die Funktion ihre Arbeit beendet und einen Wert zurückgibt, bevor der Aufrufer fortfahren kann.

### A long-running synchronous function

Was, wenn die synchrone Funktion viel Zeit in Anspruch nimmt?

Das folgende Programm verwendet einen sehr ineffizienten Algorithmus, um multiple große Primzahlen zu generieren, wenn ein Benutzer die "Generate primes"-Schaltfläche klickt. Je höher die Anzahl der vom Benutzer angegebenen Primzahlen, desto länger dauert der Vorgang.

```html
<label for="quota">Anzahl der Primzahlen:</label>
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

Versuchen Sie, "Generate primes" zu klicken. Abhängig von der Geschwindigkeit Ihres Computers wird es wahrscheinlich einige Sekunden dauern, bevor das Programm die Meldung "Finished!" anzeigt.

### The trouble with long-running synchronous functions

Das nächste Beispiel ist genau wie das letzte, außer dass wir ein Textfeld hinzugefügt haben, in das Sie tippen können. Diesmal klicken Sie auf "Generate primes" und versuchen sofort anschließend etwas in das Textfeld einzugeben.

Sie werden feststellen, dass während unsere Funktion `generatePrimes()` läuft, unser Programm völlig unempfänglich ist: Sie können nichts eingeben, nichts anklicken oder irgendetwas anderes tun.

```html hidden
<label for="quota">Anzahl der Primzahlen:</label>
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

Der Grund dafür ist, dass dieses JavaScript-Programm _einzelsträngig_ ist. Ein Thread ist eine Abfolge von Anweisungen, die ein Programm ausführt. Da das Programm aus einem einzigen Thread besteht, kann es jeweils nur eine Sache tun: Wenn es also darauf wartet, dass unser lang laufender synchroner Aufruf zurückkehrt, kann es nichts anderes tun.

Wir brauchen eine Möglichkeit, damit unser Programm:

1. Einen lang laufenden Vorgang durch den Aufruf einer Funktion startet.
2. Dass diese Funktion den Vorgang startet und sofort zurückkehrt, sodass unser Programm auf andere Ereignisse reagieren kann.
3. Die Funktion den Vorgang auf eine Weise ausführt, die den Hauptthread nicht blockiert, zum Beispiel durch Starten eines neuen Threads.
4. Uns benachrichtigt, wenn das Ergebnis des Vorgangs schließlich vorhanden ist.

Genau das ermöglichen uns asynchrone Funktionen. Der Rest dieses Moduls erklärt, wie sie in JavaScript implementiert werden.

## Event handlers

Die Beschreibung, die wir gerade von asynchronen Funktionen gesehen haben, könnte Sie an Ereignis-Handler erinnern, und wenn dem so ist, hätten Sie recht. Ereignis-Handler sind tatsächlich eine Form des asynchronen Programmierens: Sie stellen eine Funktion bereit (den Ereignis-Handler), die nicht sofort, sondern dann aufgerufen wird, wenn das Ereignis eintritt. Wenn "das Ereignis" bedeutet, "die asynchrone Operation wurde abgeschlossen", könnte dieses Ereignis verwendet werden, um den Aufrufer über das Ergebnis eines asynchronen Funktionsaufrufs zu informieren.

Einige frühe asynchrone APIs verwendeten Ereignisse genau auf diese Weise. Die {{domxref("XMLHttpRequest")}} API ermöglicht Ihnen das Ausführen von HTTP-Anfragen zu einem entfernten Server mithilfe von JavaScript. Da dies lange dauern kann, ist es eine asynchrone API, und Sie erhalten Benachrichtigungen über den Fortschritt und den endgültigen Abschluss einer Anfrage, indem Sie Ereignis-Listener an das `XMLHttpRequest`-Objekt anhängen.

Das folgende Beispiel zeigt dies in Aktion. Drücken Sie "Click to start request" um eine Anfrage zu senden. Wir erstellen ein neues {{domxref("XMLHttpRequest")}} und hören auf sein {{domxref("XMLHttpRequest/loadend_event", "loadend")}} Ereignis. Der Handler protokolliert eine "Finished!" Meldung zusammen mit dem Statuscode.

Nachdem wir den Ereignis-Listener hinzugefügt haben, senden wir die Anfrage. Beachten Sie, dass wir nach diesem Schritt "Started XHR request" protokollieren können: Das heißt, unser Programm kann weiterlaufen, während die Anfrage läuft, und unser Ereignis-Handler wird aufgerufen, wenn die Anfrage abgeschlossen ist.

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

Dies ist genau wie die [Ereignis-Handler, die wir in einem vorherigen Modul kennengelernt haben](/de/docs/Learn/JavaScript/Building_blocks/Events), außer dass das Ereignis keine Benutzeraktion ist, wie das Klicken eines Benutzers auf eine Schaltfläche, sondern eine Änderung des Zustands eines Objekts.

## Callbacks

Ein Ereignis-Handler ist eine spezielle Art von Callback. Ein Callback ist einfach eine Funktion, die in eine andere Funktion übergeben wird, mit der Erwartung, dass der Callback zu einem geeigneten Zeitpunkt aufgerufen wird. Wie wir gerade gesehen haben, waren Callbacks früher die Hauptweise, wie asynchrone Funktionen in JavaScript implementiert wurden.

Allerdings kann Callback-basierter Code schwer verständlich werden, wenn der Callback selbst Funktionen aufrufen muss, die einen Callback akzeptieren. Dies ist eine häufige Situation, wenn Sie eine Operation durchführen müssen, die in eine Reihe asynchroner Funktionen unterteilt wird. Zum Beispiel:

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

Hier haben wir eine einzelne Operation, die in drei Schritte unterteilt ist, wobei jeder Schritt vom vorhergehenden abhängt. In unserem Beispiel addiert der erste Schritt 1 zur Eingabe, der zweite addiert 2 und der dritte 3. Beginnend mit einer Eingabe von 0, ist das Endergebnis 6 (0 + 1 + 2 + 3). Als synchrones Programm ist dies ganz einfach. Aber was, wenn wir die Schritte mit Callbacks implementieren?

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

Da wir Callbacks innerhalb von Callbacks aufrufen müssen, erhalten wir eine tief verschachtelte `doOperation()` Funktion, die viel schwerer zu lesen und zu debuggen ist. Dies wird manchmal als "Callback-Hölle" oder die "Pyramide des Untergangs" bezeichnet (weil die Einrückung wie eine Pyramide auf der Seite aussieht).

Wenn wir Callbacks auf diese Weise verschachteln, kann es auch sehr schwierig werden, Fehler zu behandeln: Oft müssen Sie Fehler auf jeder Ebene der "Pyramide" behandeln, anstatt das Fehler-Handling nur ein einziges Mal auf der oberen Ebene zu haben.

Aus diesen Gründen verwenden die meisten modernen asynchronen APIs keine Callbacks. Stattdessen ist die Grundlage des asynchronen Programmierens in JavaScript das {{jsxref("Promise")}}, und das ist das Thema des nächsten Artikels.

{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}
