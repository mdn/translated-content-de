---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

Das **`Promise`**-Objekt repräsentiert den endgültigen Abschluss (oder Misserfolg) eines asynchronen Vorgangs und dessen resultierenden Wert.

Um zu erfahren, wie Promises funktionieren und wie Sie diese nutzen können, empfehlen wir Ihnen, zunächst [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Stellvertreter für einen Wert, der möglicherweise noch nicht bekannt ist, wenn das Promise erstellt wird. Es ermöglicht Ihnen, Handler mit dem endgültigen Erfolg eines asynchronen Vorgangs oder dem Grund des Scheiterns zu verknüpfen. Dies ermöglicht asynchronen Methoden, Werte wie synchrone Methoden zurückzugeben: Anstatt sofort den Endwert zurückzugeben, gibt die asynchrone Methode ein _Promise_ zurück, das den Wert zu einem späteren Zeitpunkt bereitstellt.

Ein `Promise` befindet sich in einem der folgenden Zustände:

- _pending_: Anfangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: Bedeutet, dass der Vorgang erfolgreich abgeschlossen wurde.
- _rejected_: Bedeutet, dass der Vorgang fehlgeschlagen ist.

Der _endgültige Zustand_ eines ausstehenden Promises kann entweder mit einem Wert _erfüllt_ oder mit einem Grund (Fehler) _abgelehnt_ sein. Wenn eine dieser Optionen eintritt, werden die zu einem Promise gehörigen Handler, die durch die `then`-Methode aufgebaut wurden, aufgerufen. Wenn das Promise bereits erfüllt oder abgelehnt ist, wenn ein entsprechender Handler angehängt wird, wird der Handler aufgerufen, sodass keine Konkurrenz zwischen dem Abschluss einer asynchronen Operation und dem Anfügen von Handlern besteht.

Ein Promise gilt als _settled_, wenn es entweder erfüllt oder abgelehnt ist, aber nicht ausstehend.

![Flussdiagramm, das zeigt, wie sich der Zustand eines Promises zwischen pending, fulfilled und rejected über then/catch-Handler verschiebt. Ein ausstehendes Promise kann entweder erfüllt oder abgelehnt werden. Wenn fulfilled, wird der "on fulfillment"-Handler, oder der erste Parameter der then()-Methode, ausgeführt und führt weitere asynchrone Aktionen aus. Wenn rejected, wird der Fehler-Handler, entweder als zweiter Parameter der then()-Methode oder als einziger Parameter der catch()-Methode übergeben, ausgeführt.](promises.png)

Sie werden auch den Begriff _resolved_ in Bezug auf Promises hören — das bedeutet, dass das Promise settled oder "festgelegt" ist, um den endgültigen Zustand eines anderen Promises zu entsprechen, und weiteres Resolvieren oder Ablehnen keine Auswirkungen hat. Das Dokument [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) aus dem ursprünglichen Promise-Vorschlag enthält weitere Details zur Terminologie von Promises. Im Sprachgebrauch sind "resolved" Promises oft gleichbedeutend mit "fulfilled" Promises, aber wie in "States and fates" gezeigt, können resolved Promises auch ausstehend oder abgelehnt sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist bereits _resolved_, wenn es erstellt wird (da `resolveOuter` synchron aufgerufen wird), aber mit einem anderen Promise resolved, und wird daher erst 1 Sekunde später _fulfilled_, wenn das innere Promise erfüllt wird. In der Praxis erfolgt das "Resolvieren" oft im Hintergrund und ist nicht beobachtbar, und nur seine Erfüllung oder Ablehnung ist es.

> [!NOTE]
> In mehreren anderen Programmiersprachen gibt es Mechanismen für lazy Evaluation und die Verschiebung einer Berechnung, die ebenfalls "Promises" genannt werden, z.B. in Scheme. Promises in JavaScript repräsentieren Prozesse, die bereits stattfinden und die mit Callback-Funktionen verknüpft werden können. Wenn Sie eine Expression lazy evaluieren möchten, erwägen Sie die Verwendung einer Funktion ohne Argumente, z.B. `f = () => expression` zum Erstellen der lazy-evaluierten Expression und `f()` zum sofortigen Evaluieren der Expression.

`Promise` selbst hat kein erstklassiges Protokoll für die Stornierung, aber Sie können möglicherweise den zugrunde liegenden asynchronen Vorgang direkt abbrechen, typischerweise mit [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Promises

Die Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um weitere Aktionen mit einem settled Promise zu verknüpfen. Die `then()`-Methode nimmt bis zu zwei Argumente: Das erste Argument ist eine Callback-Funktion für den fulfilled-Fall des Promises und das zweite Argument eine Callback-Funktion für den rejected-Fall. Die `catch()`- und `finally()`-Methoden rufen intern `then()` auf und machen die Fehlerbehandlung weniger ausführlich. Beispielsweise ist ein `catch()` eigentlich nur ein `then()` ohne Übergabe des Fulfillment-Handlers. Da diese Methoden Promises zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Wir verwenden die folgende Terminologie: _initial promise_ ist das Promise, auf dem `then` aufgerufen wird; _new promise_ ist das Promise, das von `then` zurückgegeben wird. Die beiden an `then` übergebenen Callbacks werden Fulfillment-Handler und Rejection-Handler genannt.

Der settled-Zustand des initialen Promises bestimmt, welcher Handler ausgeführt wird.

- Wenn das initiale Promise fulfilled ist, wird der Fulfillment-Handler mit dem Fulfillment-Wert aufgerufen.
- Wenn das initiale Promise rejected ist, wird der Rejection-Handler mit dem Grund der Ablehnung aufgerufen.

Der Abschluss des Handlers bestimmt den settled-Zustand des neuen Promises.

- Wenn der Handler einen [thenable](#thenables) Wert zurückgibt, nimmt das neue Promise denselben Zustand wie der zurückgegebene Wert an.
- Wenn der Handler einen nicht-thenable Wert zurückgibt, wird das neue Promise mit dem zurückgegebenen Wert fulfilled.
- Wenn der Handler einen Fehler auslöst, wird das neue Promise mit dem ausgelösten Fehler rejected.
- Wenn dem initialen Promise kein entsprechender Handler angefügt ist, setzt das neue Promise den gleichen Zustand wie das initiale Promise — das heißt, ohne Rejection-Handler bleibt ein rejected-Promise mit demselben Grund abgelehnt.

Zum Beispiel wird im obigen Code, wenn `myPromise` abgelehnt wird, `handleRejectedA` aufgerufen und wenn `handleRejectedA` normal abgeschlossen wird (ohne Auslösen oder Zurückgeben eines abgelehnten Promises), wird das von der ersten `then` zurückgegebene Promise fulfilled anstatt abgelehnt zu bleiben. Daher, wenn ein Fehler sofort behandelt werden muss, möchten wir jedoch den Fehlerzustand in der Kette beibehalten, müssen wir im Rejection-Handler einen Fehler irgendeines Typs auslösen. Andererseits, in Abwesenheit eines unmittelbaren Bedarfs, können wir die Fehlerbehandlung bis zum finalen `catch()`-Handler aufschieben.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Verwendung von [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen, könnte die Implementierung der Promise-Kette so aussehen:

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
> Für schnellere Ausführung sollten alle synchronen Aktionen vorzugsweise innerhalb eines Handlers erfolgen. Andernfalls würde es mehrere Ticks dauern, um alle Handler in Reihenfolge auszuführen.

JavaScript verwaltet eine [Job-Warteschlange](/de/docs/Web/JavaScript/Reference/Execution_model). Jedes Mal wählt JavaScript einen Job aus der Warteschlange und führt ihn vollständig aus. Die Jobs werden vom Executor des `Promise()`-Konstruktors, den an `then` übergebenen Handlern oder einer beliebigen Plattform-API, die ein Promise zurückgibt, definiert. Die Promises in einer Kette repräsentieren die Abhängigkeitsbeziehung zwischen diesen Jobs. Wenn ein Promise settled ist, werden die entsprechenden, damit verbundenen Handler zum Ende der Job-Warteschlange hinzugefügt.

Ein Promise kann an mehr als einer Kette teilnehmen. Für den folgenden Code führt die Erfüllung von `promiseA` dazu, dass sowohl `handleFulfilled1` als auch `handleFulfilled2` zur Job-Warteschlange hinzugefügt werden. Da `handleFulfilled1` zuerst registriert ist, wird es zuerst aufgerufen.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits settled Promise zugewiesen werden. In diesem Fall wird die Aktion sofort zum Ende der Job-Warteschlange hinzugefügt und ausgeführt, wenn alle bestehenden Jobs abgeschlossen sind. Daher findet eine Aktion für ein bereits "settled" Promise erst statt, wenn der aktuelle synchrone Code abgeschlossen ist und mindestens ein Loop-Tick vergangen ist. Dies garantiert, dass Promise-Aktionen asynchron sind.

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

Das JavaScript-Ökosystem hatte mehrere Promise-Implementierungen lange bevor es Teil der Sprache wurde. Obwohl sie intern unterschiedlich dargestellt sind, implementieren alle Promise-ähnlichen Objekte zumindest die _Thenable_-Schnittstelle. Ein Thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode, die mit zwei Callbacks aufgerufen wird: einer für den Fall, dass das Promise erfüllt ist, und einer für den Fall, dass es abgelehnt ist. Auch Promises sind Thenables.

Um mit den bestehenden Promise-Implementierungen interoperieren zu können, erlaubt die Sprache die Verwendung von Thenables anstelle von Promises. Zum Beispiel wird [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur Promises resolven, sondern auch Thenables verfolgen.

```js
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // The thenable is fulfilled with another thenable
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve(thenable); // A promise fulfilled with 42
```

### Promise-Konkurrenz

Die `Promise`-Klasse bietet vier statische Methoden, um die asynchrone Aufgabe der [Konkurrenz](https://en.wikipedia.org/wiki/Concurrent_computing) zu erleichtern:

- {{jsxref("Promise.all()")}}
  - : Erfüllt, wenn **alle** Promises erfüllt werden; lehnt ab, wenn **irgendeines** der Promises abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt, wenn **alle** Promises settled sind.
- {{jsxref("Promise.any()")}}
  - : Erfüllt, wenn **irgendeines** der Promises erfüllt wird; lehnt ab, wenn **alle** Promises abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Settled, wenn **irgendeines** der Promises settled ist. Mit anderen Worten: erfüllt, wenn eines der Promises erfüllt wird; lehnt ab, wenn eines der Promises abgelehnt wird.

Alle diese Methoden nehmen ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises ([Thenables](#thenables), um genau zu sein) und geben ein neues Promise zurück. Sie unterstützen alle Subclassing, was bedeutet, dass sie auf Subklassen von `Promise` aufgerufen werden können und das Ergebnis ein Promise des Subklassen-Typs ist. Hierfür muss der Konstruktor der Subklasse denselben Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor haben — eine einzelne `executor`-Funktion, die mit den `resolve`- und `reject`-Callbacks als Parameter aufgerufen werden kann, akzeptieren. Die Subklasse muss außerdem eine `resolve`-statische Methode haben, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte zu Promisepromises zu machen.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "Single-Thread")}} ist, sodass zu einem bestimmten Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl die Kontrolle zwischen verschiedenen Promises wechseln kann, wodurch die Ausführung der Promises gleichzeitig erscheint. [Parallele Ausführung](https://en.wikipedia.org/wiki/Parallel_computing) in JavaScript kann nur durch [Worker-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu kapseln, die Promises noch nicht unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von Promise-Methoden zu konstruieren.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises der Eingabe erfüllt sind (einschließlich wenn ein leeres iterierbares Objekt übergeben wird), mit einem Array der Erfüllungswerte. Es wird abgelehnt, wenn eines der Eingabe-Promises ablehnt, mit diesem ersten Ablehnungsgrund.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn alle der Eingabe-Promises settled sind (einschließlich wenn ein leeres iterierbares Objekt übergeben wird), mit einem Array von Objekten, die den Ausgang jedes Promises beschreiben.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn irgendeines der Eingabe-Promises erfüllt wird, mit diesem ersten Erfüllungswert. Es wird abgelehnt, wenn alle Eingabe-Promises ablehnen (einschließlich wenn ein leeres iterierbares Objekt übergeben wird), mit einem {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise settled mit dem endgültigen Zustand des ersten Promises, das settled.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem gegebenen Grund abgelehnt ist.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem gegebenen Wert resolved ist. Wenn der Wert ein Thenable ist (d.h. eine `then`-Methode hat), folgt das zurückgegebene Promise diesem Thenable, indem es dessen endgültigen Zustand annimmt; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Nimmt einen beliebigen Callback (gibt zurück oder löst aus, synchron oder asynchron) und umschließt dessen Ergebnis in einem `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen enthält, um es entweder zu lösen oder abzulehnen. Diese entsprechen den beiden Parametern, die dem Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und von allen `Promise`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktor-Funktion, die das Instanzobjekt erstellt hat. Für `Promise`-Instanzen ist der Anfangswert der {{jsxref("Promise/Promise", "Promise")}}-Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Fügt dem Promise einen Ablehnungs-Handler-Callback hinzu und gibt ein neues Promise zurück, das auf den Rückgabewert des Callbacks aufgelöst ist, wenn es aufgerufen wird, oder auf den ursprünglichen Erfüllungswert, wenn das Promise stattdessen erfüllt wird.
- {{jsxref("Promise.prototype.finally()")}}
  - : Fügt dem Promise einen Handler hinzu und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst wird. Der Handler wird aufgerufen, wenn das Promise settled ist, unabhängig davon, ob erfüllt oder abgelehnt.
- {{jsxref("Promise.prototype.then()")}}
  - : Fügt dem Promise Fulfillment- und Rejection-Handler hinzu und gibt ein neues Promise zurück, das auf den Rückgabewert des aufgerufenen Handlers aufgelöst ist, oder auf seinen ursprünglichen settled Wert, wenn das Promise nicht behandelt wurde (d.h. wenn der relevante Handler `onFulfilled` oder `onRejected` keine Funktion ist).

## Beispiele

### Einfaches Beispiel

In diesem Beispiel verwenden wir `setTimeout(...)`, um asynchronen Code zu simulieren. In der Realität werden Sie wahrscheinlich etwas wie XHR oder eine HTML-API verwenden.

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

Dieses Beispiel zeigt verschiedene Techniken zur Nutzung von Promise-Fähigkeiten und verschiedene Situationen, die auftreten können. Um dies zu verstehen, scrollen Sie zunächst an das Ende des Codeblocks und untersuchen Sie die Promise-Kette. Nach Bereitstellung eines Anfangs-Promises kann eine Kette von Promises folgen. Die Kette besteht aus `.then()`-Aufrufen und hat typischerweise (aber nicht unbedingt) ein einziges `.catch()` am Ende, gefolgt von `.finally()`. In diesem Beispiel wird die Promise-Kette von einer selbstgeschriebenen `new Promise()`-Konstruktion initiiert; in der Praxis beginnen Promise-Ketten jedoch typischerweise mit einer API-Funktion (von jemand anderem geschrieben), die ein Promise zurückgibt.

Die Beispielfunktion `tetheredGetNumber()` zeigt, dass ein Promise-Generator `reject()` während der Einrichtung eines asynchronen Aufrufs oder innerhalb des Call-Backs oder beides verwenden kann. Die Funktion `promiseGetWord()` veranschaulicht, wie eine API-Funktion möglicherweise ein Promise auf selbst enthaltene Weise generiert und zurückgibt.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das ist erforderlich, da eine Promise-Kette alle `.then()`-Promisen durchläuft, selbst nach einem Fehler, und ohne das `throw` würde der Fehler "behoben" erscheinen. Das ist lästig, und aus diesem Grund ist es üblich, `onRejected` in der Kette von `.then()`-Promisen wegzulassen und nur ein einziges `onRejected` im finalen `catch()` zu haben.

Dieser Code kann unter NodeJS ausgeführt werden. Das Verständnis wird durch das tatsächliche Auftreten der Fehler verbessert. Um mehr Fehler zu erzwingen, ändern Sie die `threshold`-Werte.

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

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die Methode `testPromise()` wird jedes Mal aufgerufen, wenn der {{HTMLElement("button")}} geklickt wird. Es erstellt ein Promise, das unter Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) alle 1-3 Sekunden zufällig mit der Anzahl der Promises (beginnend bei 1) erfüllt wird. Der `Promise()`-Konstruktor wird verwendet, um das Promise zu erstellen.

Die Erfüllung des Promises wird protokolliert, über einen Erfüllungs-Callback, der mit {{jsxref("Promise/then", "p1.then()")}} gesetzt wird. Einige Protokolle zeigen, wie der synchrone Teil der Methode von dem asynchronen Abschluss des Promises entkoppelt ist.

Durch mehrmaliges, schnelles Klicken auf die Schaltfläche sehen Sie sogar, wie die verschiedenen Promises nacheinander erfüllt werden.

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

Ein weiteres Beispiel für die Verwendung von `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zum Laden eines Bildes ist unten gezeigt. Jeder Schritt ist kommentiert und ermöglicht es Ihnen, die Promise- und XHR-Architektur genau nachzuverfolgen.

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

### Verfolgen des incumbent settings object

Ein Einstellungsobjekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen bereitstellt, wenn JavaScript-Code ausgeführt wird. Dies umfasst das Realm und die Modulkarte sowie HTML-spezifische Informationen wie die Herkunft. Das incumbent settings object wird verfolgt, um sicherzustellen, dass der Browser weiß, welches Objekt für ein bestimmtes Stück Benutzer-Code zu verwenden ist.

Um dies besser zu veranschaulichen, können wir uns genauer ansehen, wie das Realm möglicherweise ein Problem darstellt. Ein **Realm** kann grob als globales Objekt betrachtet werden. Was Realms einzigartig macht, ist, dass sie alle notwendigen Informationen enthalten, um JavaScript-Code auszuführen. Dies umfasst Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Einstellungsobjekt hat seine eigene "Kopie" dieser Objekte und sie werden nicht geteilt. Dies kann einige unerwartete Verhaltensweisen in Bezug auf Promises verursachen. Um dies zu umgehen, verfolgen wir etwas, das als **incumbent settings object** bezeichnet wird. Dies stellt Informationen bereit, die spezifisch für den Kontext des Benutzer-Codes sind, der für einen bestimmten Funktionsaufruf verantwortlich ist.

Um dies etwas weiter zu verdeutlichen, können wir uns ansehen, wie ein in ein Dokument eingebettetes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) mit seinem Host kommuniziert. Da alle Web-APIs sich des incumbent settings object bewusst sind, wird Folgendes in allen Browsern funktionieren:

```html
<!doctype html>
<iframe></iframe>
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

Dasselbe Konzept gilt für Promises. Wenn wir das obige Beispiel etwas abändern, erhalten wir Folgendes:

```html
<!doctype html>
<iframe></iframe>
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

Wenn wir dies ändern, sodass das `<iframe>` im Dokument Post-Nachrichten abhört, können wir den Effekt des incumbent settings object beobachten:

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

Im obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das incumbent settings object verfolgt wird. Dies liegt daran, dass wir ohne Tracking der gegenüberstehenden Instanz möglicherweise die falsche Umgebung verwenden, um die Nachricht zu senden.

> [!NOTE]
> Derzeit ist das Tracking des incumbent realms in Firefox vollständig implementiert und hat teilweise Implementierungen in Chrome und Safari.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [JavaScript Promises: eine Einführung](https://web.dev/articles/promises) auf web.dev (2013)
- [Callbacks, Promises, and Coroutines: Asynchronous Programming Patterns in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Slide-Show von Domenic Denicola (2011)
