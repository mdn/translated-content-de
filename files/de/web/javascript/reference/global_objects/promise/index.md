---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{JSRef}}

Das **`Promise`**-Objekt repräsentiert den zukünftigen Abschluss (oder das Scheitern) einer asynchronen Operation und ihren resultierenden Wert.

Um zu erfahren, wie Promises funktionieren und wie Sie diese nutzen können, empfehlen wir Ihnen, zuerst [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Stellvertreter für einen Wert, der nicht unbedingt bekannt ist, wenn das Promise erstellt wird. Es ermöglicht Ihnen, Handler mit einem zukünftigen Erfolgswert oder einem Fehlgrund einer asynchronen Aktion zu verknüpfen. Dies lässt asynchrone Methoden Werte wie synchrone Methoden zurückgeben: Anstatt den endgültigen Wert sofort zurückzugeben, gibt die asynchrone Methode ein _Versprechen_ zurück, den Wert irgendwann in der Zukunft bereitzustellen.

Ein `Promise` befindet sich in einem der folgenden Zustände:

- _pending_: Anfangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines noch ausstehenden Promises kann entweder mit einem Wert _erfüllt_ oder mit einem Grund (Fehler) _abgelehnt_ werden. Wenn eine dieser Optionen eintritt, werden die mit der `then`-Methode eines Promises verknüpften Handler aufgerufen. Wenn das Promise bereits erfüllt oder abgelehnt wurde, wenn ein entsprechender Handler angehängt wird, wird der Handler aufgerufen, sodass es keine Wettlaufsituation zwischen dem Abschluss einer asynchronen Operation und dem Anhängen ihrer Handler gibt.

Ein Promise gilt als _abgeschlossen_, wenn es entweder erfüllt oder abgelehnt wurde, aber nicht mehr aussteht.

![Flussdiagramm zeigt, wie der Promise-Zustand zwischen ausstehend, erfüllt und abgelehnt über then/catch-Handler wechselt. Ein ausstehendes Promise kann entweder erfüllt oder abgelehnt werden. Wenn erfüllt, wird der „bei Erfüllung“-Handler oder der erste Parameter der then()-Methode ausgeführt und führt weitere asynchrone Aktionen durch. Wenn abgelehnt, wird der Fehler-Handler entweder als zweiter Parameter der then()-Methode oder als einziger Parameter der catch()-Methode ausgeführt.](promises.png)

Der Begriff _erstellt_ wird auch oft im Zusammenhang mit Promises verwendet - dies bedeutet, dass das Promise abgeschlossen oder "festgelegt" ist, um den endgültigen Zustand eines anderen Promises zu entsprechen, und weiteres Erfüllen oder Ablehnen hat keinen Effekt. Das Dokument [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) aus dem ursprünglichen Promise-Vorschlag enthält mehr Details über die Promise-Terminologie. Umgangssprachlich sind "erstellte" Promises oft gleichbedeutend mit "erfüllten" Promises, aber wie in "States and fates" veranschaulicht, können erstellte Promises auch ausstehend oder abgelehnt sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist bereits _erfüllt_, wenn es erstellt wird (weil das `resolveOuter` synchron aufgerufen wird), aber es wird mit einem anderen Promise erfüllt und deshalb erst 1 Sekunde später _erfüllt_, wenn das innere Promise erfüllt wird. In der Praxis erfolgt die "Erfüllung" oft im Hintergrund und ist nicht beobachtbar und nur die Erfüllung oder Ablehnung sind sichtbar.

> [!NOTE]
> Mehrere andere Sprachen haben Mechanismen zur lazy evaluation und Verschiebung einer Berechnung, die sie ebenfalls "Promises" nennen, z.B. Scheme. Promises in JavaScript repräsentieren Prozesse, die bereits stattfinden und mit Callback-Funktionen verknüpft werden können. Wenn Sie einen Ausdruck lazy evaluieren möchten, sollten Sie eine Funktion ohne Argumente verwenden, z.B. `f = () => expression`, um den lazy-evaluierten Ausdruck zu erstellen, und `f()`, um den Ausdruck sofort zu bewerten.

`Promise` selbst hat kein erstklassiges Protokoll zur Stornierung, aber es ist möglich, die zugrunde liegende asynchrone Operation direkt zu stornieren, typischerweise mit [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Promises

Die Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}}, und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um weitere Aktionen mit einem Promise zu verknüpfen, das abgeschlossen wird. Die `then()`-Methode nimmt bis zu zwei Argumente an; das erste Argument ist eine Callback-Funktion für den Erfüllungsfall des Promises, und das zweite Argument ist eine Callback-Funktion für den Ablehnungsfall. Die `catch()`- und `finally()`-Methoden rufen intern `then()` auf und machen die Fehlerbehandlung weniger umständlich. Zum Beispiel ist ein `catch()` nur ein `then()`, bei dem der Erfüllungs-Handler nicht übergeben wird. Da diese Methoden Promises zurückgeben, können sie verkettet werden. Zum Beispiel:

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);
```

Wir verwenden folgende Terminologie: _initiales Promise_ ist das Promise, auf dem `then` aufgerufen wird; _neues Promise_ ist das Promise, das von `then` zurückgegeben wird. Die beiden Callback-Funktionen, die zu `then` übergeben werden, werden als _Erfüllungs-Handler_ und _Ablehnungs-Handler_ bezeichnet.

Der abgeschlossene Zustand des initialen Promises bestimmt, welcher Handler ausgeführt wird.

- Wenn das initiale Promise erfüllt ist, wird der Erfüllungs-Handler mit dem Erfüllungswert aufgerufen.
- Wenn das initiale Promise abgelehnt ist, wird der Ablehnungs-Handler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss des Handlers bestimmt den abgeschlossenen Zustand des neuen Promises.

- Wenn der Handler einen [thenable](#thenables) Wert zurückgibt, wird das neue Promise im gleichen Zustand wie der zurückgegebene Wert abgeschlossen.
- Wenn der Handler einen nicht-thenable Wert zurückgibt, wird das neue Promise mit dem zurückgegebenen Wert erfüllt.
- Wenn der Handler einen Fehler wirft, wird das neue Promise mit dem geworfenen Fehler abgelehnt.
- Wenn das initiale Promise keinen entsprechenden Handler angehängt hat, wird das neue Promise denselben Zustand wie das initiale Promise haben — das heißt, ohne einen Ablehnungs-Handler bleibt ein abgelehntes Promise mit demselben Grund abgelehnt.

Zum Beispiel, im obigen Code, wenn `myPromise` ablehnt, wird `handleRejectedA` aufgerufen, und wenn `handleRejectedA` normal abschließt (ohne zu werfen oder ein abgelehntes Promise zurückzugeben), wird das Promise, das vom ersten `then` zurückgegeben wird, erfüllt anstatt abgelehnt zu bleiben. Daher, wenn ein Fehler sofort behandelt werden muss, aber wir den Fehlerzustand in der Kette beibehalten möchten, müssen wir irgendeinen Art von Fehler im Ablehnungs-Handler werfen. Auf der anderen Seite, in Abwesenheit eines unmittelbaren Bedarfs, können wir die Fehlerbehandlung bis zum abschließenden `catch()`-Handler auslassen.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Wenn [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen verwendet werden, könnte die Implementierung der Promise-Kette etwa so aussehen:

```js
myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });
```

> [!NOTE]
> Für schnellere Ausführung sollten alle synchronen Aktionen vorzugsweise innerhalb eines Handlers ausgeführt werden, sonst würde es mehrere Ticks dauern, um alle Handler in Folge auszuführen.

JavaScript verwaltet eine [Job-Warteschlange](/de/docs/Web/JavaScript/Reference/Execution_model). Jedes Mal wählt JavaScript einen Job aus der Warteschlange und führt ihn vollständig aus. Die Jobs werden vom Executor des `Promise()`-Konstruktors, den zu `then` übergebenen Handlern oder einem beliebigen Plattform-API, das ein Promise zurückgibt, definiert. Die Promises in einer Kette repräsentieren die Abhängigkeitsbeziehung zwischen diesen Jobs. Wenn ein Promise abgeschlossen wird, werden die entsprechenden Handler, die damit verknüpft sind, am Ende der Job-Warteschlange hinzugefügt.

Ein Promise kann an mehr als einer Kette teilnehmen. Für den folgenden Code wird die Erfüllung von `promiseA` sowohl `handleFulfilled1` als auch `handleFulfilled2` in die Job-Warteschlange aufnehmen. Da `handleFulfilled1` zuerst registriert ist, wird es zuerst aufgerufen.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits abgeschlossenen Promise zugewiesen werden. In diesem Fall wird die Aktion sofort am Ende der Job-Warteschlange hinzugefügt und wird ausgeführt, wenn alle vorhandenen Jobs abgeschlossen sind. Daher wird eine Aktion für ein bereits "abgeschlossenes" Promise nur nach Abschluss des aktuellen synchronen Codes und spätestens nach einem Schleifen-Tick durchgeführt. Dies garantiert, dass Promise-Aktionen asynchron sind.

```js
const promiseA = new Promise((resolve, reject) => {
  resolve(777);
});
// At this point, "promiseA" is already settled.
promiseA.then((val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777
```

### Thenables

Das JavaScript-Ökosystem hatte mehrere Promise-Implementierungen lange bevor es Teil der Sprache wurde. Trotz unterschiedlicher interner Repräsentationen, implementieren mindestens alle Promise-ähnlichen Objekte das _Thenable_ Interface. Ein Thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) Methode, die mit zwei Callbacks aufgerufen wird: eines für den Fall, dass das Promise erfüllt ist, und eines für den Fall, dass es abgelehnt ist. Promises sind ebenfalls Thenables.

Um mit vorhandenen Promise-Implementierungen zu interagieren, erlaubt die Sprache die Verwendung von Thenables anstelle von Promises. Zum Beispiel, [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) wird nicht nur Promises auflösen, sondern auch Thenables verfolgen.

```js
const aThenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // The thenable is fulfilled with another thenable
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve(aThenable); // A promise fulfilled with 42
```

### Promise-Konkurrenz

Die `Promise`-Klasse bietet vier statische Methoden zur Erleichterung der asynchronen Aufgaben[Konkurrenz](https://en.wikipedia.org/wiki/Concurrent_computing):

- {{jsxref("Promise.all()")}}
  - : Wird erfüllt, wenn **alle** Promises erfüllt sind; wird abgelehnt, wenn **irgendeines** der Promises abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Wird erfüllt, wenn **alle** Promises abgestimmt sind.
- {{jsxref("Promise.any()")}}
  - : Wird erfüllt, wenn **irgendeines** der Promises erfüllt wird; wird abgelehnt, wenn **alle** Promises abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Wird abgestimmt, wenn **irgendeines** der Promises abgestimmt ist. Mit anderen Worten, wird erfüllt, wenn eines der Promises erfüllt ist; wird abgelehnt, wenn eines der Promises abgelehnt ist.

Alle diese Methoden nehmen ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises ([Thenables](#thenables), um genau zu sein) und geben ein neues Promise zurück. Sie unterstützen alle die Vererbung, was bedeutet, dass sie bei Subklassen von `Promise` aufgerufen werden können, und das Ergebnis ein Promise des Subklassen-Typs sein wird. Dazu muss der Konstruktor der Subklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktor implementieren — er nimmt eine einzige `executor` Funktion an, die mit den Parametern `resolve` und `reject` als Parameter aufgerufen werden kann. Die Subklasse muss auch eine `resolve`-statische Methode haben, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte in Promises aufzulösen.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "einzelsträngig")}} ist, sodass zu einem bestimmten Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl die Steuerung zwischen verschiedenen Promises wechseln kann, um die Ausführung der Promises concurrent erscheinen zu lassen. [Parallele Ausführung](https://en.wikipedia.org/wiki/Parallel_computing) in JavaScript kann nur durch [Worker Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu umschließen, die nicht bereits Promises unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus Promise-Methoden zu konstruieren.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein iterables von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Diese zurückgegebene Promise wird erfüllt, wenn alle übergebenen Promises erfüllt werden (einschließlich der Fälle, wenn ein leeres iterables übergeben wird), mit einem Array der Erfüllungswerte. Es wird abgelehnt, wenn eines der übergebenen Promises abgelehnt wird, mit dem ersten Ablehnungsgrund.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein iterables von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Diese zurückgegebene Promise wird erfüllt, wenn alle übergebenen Promises abgeschlossen sind (einschließlich der Fälle, wenn ein leeres iterables übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes Promises beschreiben.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein iterables von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Diese zurückgegebene Promise wird erfüllt, wenn eines der übergebenen Promises erfüllt wird, mit dem ersten Erfüllungswert. Es wird abgelehnt, wenn alle der übergebenen Promises abgelehnt werden (einschließlich der Fälle, wenn ein leeres iterables übergeben wird), mit einem {{jsxref("AggregateError")}} mit einem Array von Ablehnungsgründen.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein iterables von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Diese zurückgegebene Promise wird auf den Endzustand des zuerst abgestimmten Promises gesetzt.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem angegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem angegebenen Wert erfüllt wird. Wenn der Wert ein thenable Objekt ist (d.h. über eine `then` Methode verfügt), wird das zurückgegebene Promise diesem thenable folgen und dessen endgültigen Zustand übernehmen; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Nimmt einen beliebigen Rückruf (gibt ein Wert oder wirft einen Fehler, synchron oder asynchron) und wickelt dessen Ergebnis in ein `Promise` ein.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen enthält, um es zu erfüllen oder abzulehnen, entsprechend den beiden Parametern, die an den Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Promise`-Instanzen ist der Anfangswert der {{jsxref("Promise/Promise", "Promise")}}-Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Fügt dem Promise einen Ablehnungs-Handler-Callback hinzu und gibt ein neues Promise zurück, das auf den Rückgabewert des Callback aufgelöst wird, wenn es aufgerufen wird, oder auf seinen ursprünglichen Erfüllungswert, wenn das Promise stattdessen erfüllt wird.
- {{jsxref("Promise.prototype.finally()")}}
  - : Fügt dem Promise einen Handler hinzu und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst wird. Der Handler wird aufgerufen, wenn das Promise abgeschlossen ist, ob erfüllt oder abgelehnt.
- {{jsxref("Promise.prototype.then()")}}
  - : Fügt dem Promise Erfüllungs- und Ablehnungs-Handler hinzu und gibt ein neues Promise zurück, das beim Rückgabewert des aufgerufenen Handlers aufgelöst wird oder auf seinen ursprünglichen abgeschlossenen Wert, wenn das Promise nicht behandelt wurde (d.h. wenn der relevante Handler `onFulfilled` oder `onRejected` keine Funktion ist).

## Beispiele

### Einfaches Beispiel

In diesem Beispiel verwenden wir `setTimeout(...)`, um asynchronen Code zu simulieren.
Tatsächlich werden Sie wahrscheinlich etwas wie XHR oder eine HTML-API verwenden.

```js
const myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously
  // was successful, and reject(...) when it failed.
  setTimeout(() => {
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log(`Yay! ${successMessage}`);
});
```

### Beispiel mit verschiedenen Situationen

Dieses Beispiel zeigt verschiedene Techniken zur Nutzung der Promise-Fähigkeiten und verschiedene Situationen, die auftreten können. Um dies zu verstehen, beginnen Sie am besten, indem Sie zum Ende des Codeblocks scrollen und die Promise-Kette untersuchen. Bei Bereitstellung eines Anfangsversprechens kann eine Kette von Promises folgen. Die Kette besteht aus `.then()` Aufrufen und hat typischerweise (aber nicht unbedingt) ein einziges `.catch()` am Ende, optional gefolgt von `.finally()`. In diesem Beispiel wird die Promise-Kette durch eine benutzerdefinierte `new Promise()`-Konstruktion initiiert; in der Praxis beginnen Promise-Ketten jedoch typischerweise mit einer API-Funktion (von jemand anderem geschrieben), die ein Promise zurückgibt.

Die Beispiel-Funktion `tetheredGetNumber()` zeigt, dass ein Promise-Generator `reject()` während des Einrichtens eines asynchronen Aufrufs oder innerhalb der Rückruf- / Callback-Funktion nutzen kann. Die Funktion `promiseGetWord()` veranschaulicht, wie eine API-Funktion möglicherweise ein Promise erzeugt und auf eine selbständige Weise zurückgibt.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das ist erzwungen, weil eine Promise-Kette durch alle `.then()` Promises läuft, auch nach einem Fehler, und ohne den `throw` würde der Fehler scheinbar "behoben". Das ist ein Ärgernis, und aus diesem Grund ist es üblich, `onRejected` in der Kette der `.then()` Promises auszulassen und nur ein einzelnes `onRejected` im abschließenden `catch()` zu haben.

Dieser Code kann unter NodeJS ausgeführt werden. Das Verständnis wird durch die tatsächliche Beobachtung der auftretenden Fehler verbessert. Um mehr Fehler zu erzwingen, ändern Sie die `threshold`-Werte.

```js
// To experiment with error handling, "threshold" values cause errors randomly
const THRESHOLD_A = 8; // can use zero 0 to guarantee error

function tetheredGetNumber(resolve, reject) {
  setTimeout(() => {
    const randomInt = Date.now();
    const value = randomInt % 10;
    if (value < THRESHOLD_A) {
      resolve(value);
    } else {
      reject(new RangeError(`Too large: ${value}`));
    }
  }, 500);
}

function determineParity(value) {
  const isOdd = value % 2 === 1;
  return { value, isOdd };
}

function troubleWithGetNumber(reason) {
  const err = new Error("Trouble getting number", { cause: reason });
  console.error(err);
  throw err;
}

function promiseGetWord(parityInfo) {
  return new Promise((resolve, reject) => {
    const { value, isOdd } = parityInfo;
    if (value >= THRESHOLD_A - 1) {
      reject(new RangeError(`Still too large: ${value}`));
    } else {
      parityInfo.wordEvenOdd = isOdd ? "odd" : "even";
      resolve(parityInfo);
    }
  });
}

new Promise(tetheredGetNumber)
  .then(determineParity, troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log(`Got: ${info.value}, ${info.wordEvenOdd}`);
    return info;
  })
  .catch((reason) => {
    if (reason.cause) {
      console.error("Had previously handled error");
    } else {
      console.error(`Trouble with promiseGetWord(): ${reason}`);
    }
  })
  .finally((info) => console.log("All done"));
```

### Fortgeschrittenes Beispiel

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die Methode `testPromise()` wird jedes Mal aufgerufen, wenn der Button geklickt wird. Sie erstellt ein Promise, das durch die Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) bei jedem Klick auf die Schaltfläche einen zufälligen Wert zwischen 1-3 Sekunden (zufällig) erhält. Der `Promise()`-Konstruktor wird verwendet, um das Promise zu erstellen.

Die Erfüllung des Versprechens wird über einen Erfüllungs-Callback, der mit {{jsxref("Promise/then", "p1.then()")}} gesetzt wird, protokolliert. Einige Logs zeigen, wie der synchrone Teil der Methode vom asynchronen Abschluss des Promises getrennt ist.

Durch mehrmaliges Klicken auf den Button in kurzer Zeit kann man sogar sehen, wie die verschiedenen Promises nacheinander erfüllt werden.

#### HTML

```html
<button id="make-promise">Make a promise!</button>
<div id="log"></div>
```

#### JavaScript

```js
"use strict";

let promiseCount = 0;

function testPromise() {
  const thisPromiseCount = ++promiseCount;
  const log = document.getElementById("log");
  // begin
  log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Started<br>`);
  // We make a new promise: we promise a numeric count of this promise,
  // starting from 1 (after waiting 3s)
  const p1 = new Promise((resolve, reject) => {
    // The executor function is called with the ability
    // to resolve or reject the promise
    log.insertAdjacentHTML(
      "beforeend",
      `${thisPromiseCount}) Promise constructor<br>`,
    );
    // This is only an example to create asynchronism
    setTimeout(
      () => {
        // We fulfill the promise
        resolve(thisPromiseCount);
      },
      Math.random() * 2000 + 1000,
    );
  });

  // We define what to do when the promise is resolved with the then() call,
  // and what to do when the promise is rejected with the catch() call
  p1.then((val) => {
    // Log the fulfillment value
    log.insertAdjacentHTML("beforeend", `${val}) Promise fulfilled<br>`);
  }).catch((reason) => {
    // Log the rejection reason
    console.log(`Handle rejected promise (${reason}) here.`);
  });
  // end
  log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Promise made<br>`);
}

const btn = document.getElementById("make-promise");
btn.addEventListener("click", testPromise);
```

#### Ergebnis

{{EmbedLiveSample("Advanced_Example", "500", "200")}}

### Laden eines Bildes mit XHR

Ein weiteres Beispiel unter Verwendung von `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zum Laden eines Bildes wird unten gezeigt.
Jeder Schritt ist kommentiert und ermöglicht Ihnen, die Promise- und XHR-Architektur genau zu verfolgen.

```html hidden live-sample___promises
<h1>Promise example</h1>
```

```js live-sample___promises
function imgLoad(url) {
  // Create new promise with the Promise() constructor;
  // This has as its argument a function with two parameters, resolve and reject
  return new Promise((resolve, reject) => {
    // XHR to load an image
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "blob";
    // When the request loads, check whether it was successful
    request.onload = () => {
      if (request.status === 200) {
        // If successful, resolve the promise by passing back the request response
        resolve(request.response);
      } else {
        // If it fails, reject the promise with an error message
        reject(
          Error(
            `Image didn't load successfully; error code: + ${request.statusText}`,
          ),
        );
      }
    };
    // Handle network errors
    request.onerror = () => reject(new Error("There was a network error."));
    // Send the request
    request.send();
  });
}

// Get a reference to the body element, and create a new image object
const body = document.querySelector("body");
const myImage = new Image();
const imgUrl =
  "https://mdn.github.io/shared-assets/images/examples/round-balloon.png";

// Call the function with the URL we want to load, then chain the
// promise then() method with two callbacks
imgLoad(imgUrl).then(
  (response) => {
    // The first runs when the promise resolves, with the request.response
    // specified within the resolve() method.
    const imageURL = URL.createObjectURL(response);
    myImage.src = imageURL;
    body.appendChild(myImage);
  },
  (error) => {
    // The second runs when the promise
    // is rejected, and logs the Error specified with the reject() method.
    console.log(error);
  },
);
```

{{embedlivesample("promises", "", "240px")}}

### Nachverfolgung des Limbsettings-Objekts

Ein Umgebungsobjekt ist ein [Umgebungseinstellungen-Objekt](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), das zusätzliche Informationen bereitstellt, wenn JavaScript-Code ausgeführt wird. Dazu gehören der Realm und die Modulkarte sowie HTML-spezifische Informationen wie der Ursprung. Das Limbsettings-Objekt wird nachverfolgt, um sicherzustellen, dass der Browser weiß, welches für ein bestimmtes Benutzerprogramm verwendet werden soll.

Um dies besser zu veranschaulichen, können wir genauer betrachten, wie der Realm ein Problem darstellen könnte. Ein **Realm** kann grob als das globale Objekt betrachtet werden. Was an Realms einzigartig ist, ist, dass sie alle notwendigen Informationen zum Ausführen von JavaScript-Code enthalten. Dazu gehören Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Umgebungseinstellungen-Objekt hat seine eigene "Kopie" dieser und sie werden nicht geteilt. Das kann einige unerwartete Verhaltensweisen in Bezug auf Promises verursachen. Um dieses Problem zu umgehen, verfolgen wir etwas, das das **limbspezifische Umgebungseinstellungen-Objekt** genannt wird. Es stellt spezifische Informationen in Bezug auf den Kontext des Benutzerprogramms bereit, das für einen bestimmten Funktionsaufruf verantwortlich ist.

Um dies weiter zu veranschaulichen, können wir betrachten, wie ein [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), das in einem Dokument eingebettet ist, mit seinem Host kommuniziert. Da alle Web-APIs sich des limbspezifischen Umgebungseinstellungen-Objekts bewusst sind, funktioniert Folgendes in allen Browsern:

```html
<!doctype html> <iframe></iframe>
<!-- we have a realm here -->
<script>
  // we have a realm here as well
  const bound = frames[0].postMessage.bind(frames[0], "some data", "*");
  // bound is a built-in function — there is no user
  // code on the stack, so which realm do we use?
  setTimeout(bound);
  // this still works, because we use the youngest
  // realm (the incumbent) on the stack
</script>
```

Dasselbe Konzept gilt für Promises. Wenn wir das obige Beispiel ein wenig ändern, erhalten wir Folgendes:

```html
<!doctype html> <iframe></iframe>
<!-- we have a realm here -->
<script>
  // we have a realm here as well
  const bound = frames[0].postMessage.bind(frames[0], "some data", "*");
  // bound is a built in function — there is no user
  // code on the stack — which realm do we use?
  Promise.resolve(undefined).then(bound);
  // this still works, because we use the youngest
  // realm (the incumbent) on the stack
</script>
```

Wenn wir dies so ändern, dass das `<iframe>` im Dokument auf Postnachrichten hört, können wir den Effekt des limbspezifischen Umgebungseinstellungen-Objekts beobachten:

```html
<!-- y.html -->
<!doctype html>
<iframe src="x.html"></iframe>
<script>
  const bound = frames[0].postMessage.bind(frames[0], "some data", "*");
  Promise.resolve(undefined).then(bound);
</script>
```

```html
<!-- x.html -->
<!doctype html>
<script>
  window.addEventListener(
    "message",
    (event) => {
      document.querySelector("#text").textContent = "hello";
      // this code will only run in browsers that track the incumbent settings object
      console.log(event);
    },
    false,
  );
</script>
```

Im obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das limbspezifische Umgebungseinstellungen-Objekt nachverfolgt wird. Dies liegt daran, dass wir ohne Nachverfolgung des limbspezifischen Objekts möglicherweise die falsche Umgebung verwenden, um die Nachricht zu senden.

> [!NOTE]
> Derzeit ist das Tracking des Realms vollständig in Firefox implementiert und hat teilweise Implementierungen in Chrome und Safari.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill of `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- Leitfaden zur [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [Promises/A+ specification](https://promisesaplus.com/)
- [JavaScript Promises: an introduction](https://web.dev/articles/promises) auf web.dev (2013)
- [Rückrufe, Promises und Koroutinen: Asynchrone Programmiermuster in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Präsentation von Domenic Denicola (2011)
