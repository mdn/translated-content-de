---
title: Einführung in asynchrones JavaScript
slug: Learn/JavaScript/Asynchronous/Introducing
l10n:
  sourceCommit: 810682f11400bad32c92ae7182daddfc0ca973b3
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

In diesem Artikel erläutern wir, was asynchrones Programmieren ist, warum wir es brauchen, und besprechen kurz einige der Methoden, wie asynchrone Funktionen historisch in JavaScript implementiert wurden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein gutes Verständnis der JavaScript-Grundlagen, einschließlich Funktionen und Ereignis-Handler.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis darüber zu erlangen, was asynchrones JavaScript ist, wie es sich von synchronem JavaScript unterscheidet und warum wir es benötigen.
      </td>
    </tr>
  </tbody>
</table>

Asynchrones Programmieren ist eine Technik, die es Ihrem Programm ermöglicht, eine potenziell langwierige Aufgabe zu starten und dennoch auf andere Ereignisse zu reagieren, während diese Aufgabe ausgeführt wird, anstatt darauf warten zu müssen, bis die Aufgabe abgeschlossen ist. Sobald diese Aufgabe abgeschlossen ist, wird Ihrem Programm das Ergebnis präsentiert.

Viele von Browsern bereitgestellte Funktionen, insbesondere die interessantesten, können potenziell lange dauern und sind daher asynchron. Zum Beispiel:

- HTTP-Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch) durchführen
- Auf die Kamera oder das Mikrofon eines Benutzers mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zugreifen
- Einen Benutzer auswählen lassen, welche Dateien er verwenden möchte, mit [`showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker)

Auch wenn Sie vielleicht nicht sehr häufig eigene asynchrone Funktionen implementieren müssen, werden Sie mit großer Wahrscheinlichkeit lernen müssen, diese korrekt zu nutzen.

In diesem Artikel beginnen wir damit, das Problem mit langandauernden synchronen Funktionen zu betrachten, die asynchrones Programmieren notwendig machen.

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
3. Gibt den Gruß in der JavaScript-Konsole aus.

Wir sollten hier festhalten, dass der Browser das Programm effektiv Zeile für Zeile durcharbeitet, in der Reihenfolge, in der wir es geschrieben haben. An jedem Punkt wartet der Browser darauf, dass die Zeile ihre Arbeit beendet, bevor er zur nächsten Zeile übergeht. Er muss dies tun, da jede Zeile von der zuvor geleisteten Arbeit abhängt.

Das macht dies zu einem **synchronen Programm**. Es wäre immer noch synchron, selbst wenn wir eine separate Funktion aufrufen würden, wie in diesem Beispiel:

```js
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"
```

Hier ist `makeGreeting()` eine **synchrone Funktion**, weil der Aufrufer darauf warten muss, dass die Funktion ihre Arbeit beendet und einen Wert zurückgibt, bevor der Aufrufer fortfahren kann.

### Eine lang andauernde synchrone Funktion

Was, wenn die synchrone Funktion lange dauert?

Das folgende Programm verwendet einen sehr ineffizienten Algorithmus, um beim Klicken auf den Button "Generate primes" mehrere große Primzahlen zu erzeugen. Je höher die Anzahl von Primzahlen ist, die ein Benutzer angibt, desto länger dauert die Operation.

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

Versuchen Sie, auf "Generate primes" zu klicken. Je nachdem, wie schnell Ihr Computer ist, wird es wahrscheinlich ein paar Sekunden dauern, bis das Programm die Nachricht "Fertig!" anzeigt.

### Das Problem mit lang andauernden synchronen Funktionen

Das nächste Beispiel ist genau wie das letzte, außer dass wir ein Textfeld hinzugefügt haben, in das Sie tippen können. Dieses Mal klicken Sie auf "Generate primes" und versuchen, unmittelbar danach in das Textfeld zu tippen.

Sie werden feststellen, dass während unsere `generatePrimes()`-Funktion läuft, unser Programm völlig unresponsiv ist: Sie können nichts tippen, nichts anklicken oder sonst irgendetwas tun.

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

Der Grund hierfür ist, dass dieses JavaScript-Programm _einzelsträngig_ ist. Ein Thread ist eine Abfolge von Anweisungen, die ein Programm ausführt. Da das Programm aus einem einzigen Thread besteht, kann es immer nur eine Sache gleichzeitig tun: Wenn es also auf unseren langandauernden synchronen Aufruf wartet, kann es nichts anderes tun.

Was wir brauchen, ist eine Möglichkeit, damit unser Programm:

1. Eine langwierige Operation durch Aufrufen einer Funktion beginnen kann.
2. Diese Funktion die Operation starten und sofort zurückkehren kann, sodass unser Programm weiterhin auf andere Ereignisse reagieren kann.
3. Die Funktion die Operation so ausführen kann, dass sie den Hauptthread nicht blockiert, z.B. indem ein neuer Thread gestartet wird.
4. Uns das Ergebnis der Operation mitteilen kann, wenn diese schließlich abgeschlossen ist.

Genau das ermöglichen asynchrone Funktionen. Der Rest dieses Moduls erklärt, wie sie in JavaScript implementiert werden.

## Ereignis-Handler

Die eben gesehene Beschreibung von asynchronen Funktionen mag Sie an Ereignis-Handler erinnern, und wenn das der Fall ist, haben Sie recht. Ereignis-Handler sind wirklich eine Form von asynchronem Programmieren: Sie stellen eine Funktion (den Ereignis-Handler) bereit, der nicht sofort, sondern immer dann aufgerufen wird, wenn das Ereignis eintritt. Wenn "das Ereignis" "die asynchrone Operation ist abgeschlossen" ist, dann könnte dieses Ereignis verwendet werden, um den Anrufer über das Ergebnis eines asynchronen Funktionsaufrufs zu informieren.

Einige frühe asynchrone APIs nutzten Ereignisse genau auf diese Weise. Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API ermöglicht es, HTTP-Anfragen an einen entfernten Server mit JavaScript zu stellen. Da dies lange dauern kann, ist es eine asynchrone API, und Sie werden über den Fortschritt und den eventuellen Abschluss einer Anfrage benachrichtigt, indem Sie Ereignis-Listener an das `XMLHttpRequest`-Objekt anhängen.

Das folgende Beispiel zeigt dies in Aktion. Drücken Sie "Click to start request", um eine Anfrage zu senden. Wir erstellen eine neue [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und hören auf ihr Ereignis [`loadend`](/de/docs/Web/API/XMLHttpRequest/loadend_event). Der Handler protokolliert eine "Fertig!"-Nachricht zusammen mit dem Status-Code.

Nachdem wir den Ereignis-Listener hinzugefügt haben, senden wir die Anfrage. Beachten Sie, dass wir danach "Started XHR request" protokollieren können: Das heißt, unser Programm kann weiterlaufen, während die Anfrage ausgeführt wird, und unser Ereignis-Handler wird aufgerufen, wenn die Anfrage abgeschlossen ist.

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

Dies ist genau wie die [Ereignis-Handler, die wir in einem vorherigen Modul kennengelernt haben](/de/docs/Learn/JavaScript/Building_blocks/Events), außer dass statt dem Ereignis eine Benutzeraktion, wie das Klicken eines Buttons, das Ereignis eine Änderung des Zustands eines Objekts ist.

## Callbacks

Ein Ereignis-Handler ist eine spezielle Art von Callback. Ein Callback ist einfach eine Funktion, die einer anderen Funktion übergeben wird, mit der Erwartung, dass der Callback zur passenden Zeit aufgerufen wird. Wie wir gerade gesehen haben, waren Callbacks früher die Hauptweise, wie asynchrone Funktionen in JavaScript implementiert wurden.

Allerdings kann Code, der auf Callbacks basiert, schwer zu verstehen sein, wenn der Callback selbst Funktionen aufrufen muss, die einen Callback akzeptieren. Dies ist eine häufige Situation, wenn Sie eine Operation durchführen müssen, die sich in eine Reihe von asynchronen Funktionen aufteilt. Zum Beispiel, betrachten Sie das Folgende:

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

Hier haben wir eine einzelne Operation, die in drei Schritte unterteilt ist, wobei jeder Schritt vom letzten Schritt abhängt. In unserem Beispiel fügt der erste Schritt der Eingabe 1 hinzu, der zweite fügt 2 hinzu und der dritte fügt 3 hinzu. Ausgehend von einer Eingabe von 0 beträgt das Endergebnis 6 (0 + 1 + 2 + 3). Als synchrones Programm ist dies sehr einfach. Aber was, wenn wir die Schritte mit Callbacks implementieren?

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

Da wir Callbacks innerhalb von Callbacks aufrufen müssen, erhalten wir eine tief verschachtelte `doOperation()`-Funktion, die viel schwieriger zu lesen und zu debuggen ist. Dies wird manchmal als "Callback-Hölle" oder die "Pyramide des Schreckens" bezeichnet (weil die Einrückung wie eine Pyramide auf der Seite aussieht).

Wenn wir Callbacks auf diese Weise verschachteln, kann es auch sehr schwierig werden, Fehler zu handhaben: oft müssen Sie Fehler auf jeder Ebene der "Pyramide" handhaben, anstatt nur einmal auf der höchsten Ebene Fehlerbehandlung zu haben.

Aus diesen Gründen verwenden die meisten modernen asynchronen APIs keine Callbacks mehr. Stattdessen ist das Fundament des asynchronen Programmierens in JavaScript das {{jsxref("Promise")}}, und das ist das Thema des nächsten Artikels.

{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}
