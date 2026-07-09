---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Das **`Promise`** Objekt repräsentiert den zukünftigen Abschluss (oder das Scheitern) einer asynchronen Operation und dessen Ergebniswert.

Um mehr über Funktionsweise von Promises und deren Anwendung zu erfahren, empfehlen wir Ihnen, zuerst [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Platzhalter für einen Wert, der möglicherweise nicht bekannt ist, wenn das Promise erstellt wird. Es ermöglicht Ihnen, Handler mit dem zukünftigen Erfolg oder dem Misserfolg der asynchronen Aktion zu verknüpfen. Dies ermöglicht es asynchronen Methoden, Werte wie synchrone Methoden zurückzugeben: Anstatt sofort den Endwert zurückzugeben, liefert die asynchrone Methode ein _Promise_, das den Wert zu einem späteren Zeitpunkt bereitstellt.

Ein `Promise` befindet sich in einem dieser Zustände:

- _pending_: Anfangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines noch nicht erfüllten Promises kann entweder _erfüllt_ mit einem Wert oder _abgelehnt_ mit einem Grund (Fehler) sein.
Wenn eine dieser Optionen eintritt, werden die von der `then`-Methode eines Promises aufgereihten zugehörigen Handler aufgerufen. Wenn das Promise bereits erfüllt oder abgelehnt wurde, wenn ein entsprechender Handler angefügt wird, wird der Handler aufgerufen, sodass es keine Rennbedingung zwischen dem Abschluss einer asynchronen Operation und dem Hinzufügen seiner Handler gibt.

Ein Promise gilt als _abgeschlossen_, wenn es entweder erfüllt oder abgelehnt ist, jedoch nicht mehr als ausstehend betrachtet wird.

![Flussdiagramm, das zeigt, wie sich der Promise-Zustand zwischen ausstehend, erfüllt und abgelehnt über dann/catch-Handlern ändert. Ein ausstehendes Promise kann entweder erfüllt oder abgelehnt werden. Wenn erfüllt, wird der „bei Erfüllung“-Handler oder der erste Parameter der then()-Methode ausgeführt und führt weitere asynchrone Aktionen aus. Wenn abgelehnt, wird der Fehlerhandler entweder als zweiter Parameter der then()-Methode oder als einziger Parameter der catch()-Methode ausgeführt.](promises.png)

Sie werden auch den Begriff _resolved_ im Zusammenhang mit Promises hören — dies bedeutet, dass das Promise abgeschlossen oder „festgeschrieben“ ist, um den endgültigen Zustand eines anderen Promises widerzuspiegeln, und weiteres Lösen oder Ablehnen davon keine Wirkung hat. Das [Zustands- und Schicksalsdokument](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) aus dem ursprünglichen Promise-Vorschlag enthält weitere Einzelheiten über die Terminologie. Umgänglich sind „gelöste“ Promises oft äquivalent zu „erfüllten“ Promises, aber wie in „Zustände und Schicksale“ erläutert, können gelöste Promises auch ausstehend oder abgelehnt sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist bereits _gelöst_ zu dem Zeitpunkt, zu dem es erstellt wird (weil `resolveOuter` synchron aufgerufen wird), es ist aber mit einem weiteren Promise gelöst und wird daher erst eine Sekunde später _erfüllt_, wenn das innere Promise erfüllt wird. In der Praxis wird die „Auflösung“ oft hinter den Kulissen vorgenommen und ist nicht sichtbar, nur seine Erfüllung oder Ablehnung sind es.

> [!NOTE]
> Mehrere andere Sprachen haben Mechanismen zur verzögerten Auswertung und zum Aufschieben einer Berechnung, die sie ebenfalls „Promises“ nennen, z.B. Scheme. Promises in JavaScript repräsentieren Prozesse, die bereits stattfinden, welche mit Callback-Funktionen verknüpft werden können. Wenn Sie eine Auswertung verzögert ausführen wollen, sollten Sie eine Funktion ohne Argumente verwenden, z.B. `f = () => Ausdruck`, um den verzögert ausgewerteten Ausdruck zu erstellen, und `f()`, um den Ausdruck sofort auszuwerten.

`Promise` selbst hat kein erstklassiges Protokoll zur Stornierung, aber Sie können möglicherweise die zugrunde liegende asynchrone Operation direkt stornieren, typischerweise mithilfe von [`AbortController`](/de/docs/Web/API/AbortController).

### Verknüpfte Promises

Die Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um weitere Aktionen mit einem Promise zu verknüpfen, das sich erfüllt. Die `then()`-Methode nimmt bis zu zwei Argumente an; das erste Argument ist eine Callback-Funktion für den Fall, dass das Promise erfüllt wird, und das zweite Argument ist eine Callback-Funktion für den Fall, dass das Promise abgelehnt wird. Die `catch()`- und `finally()`-Methoden rufen intern `then()` auf und machen das Fehlerhandling weniger umfangreich. Zum Beispiel ist ein `catch()` im Grunde nur ein `then()`, ohne den Erfüllungs-Handler. Da diese Methoden Promises zurückgeben, können sie verknüpft werden. Zum Beispiel:

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

Wir verwenden folgende Terminologie: _initiales Promise_ ist das Promise, auf welches `then` aufgerufen wird; _neues Promise_ ist das Promise, das von `then` zurückgegeben wird. Die zwei an `then` übergebenen Callback-Funktionen werden als _Erfüllungs-Handler_ und _Ablehnungs-Handler_ bezeichnet.

Der festgelegte Zustand des initialen Promises bestimmt, welcher Handler ausgeführt wird.

- Wenn das initiale Promise erfüllt ist, wird der Erfüllungs-Handler mit dem Erfüllungswert aufgerufen.
- Wenn das initiale Promise abgelehnt ist, wird der Ablehnungs-Handler mit dem Ablehnungsgrund aufgerufen.

Das Ende des Handlers bestimmt den festgelegten Zustand des neuen Promises.

- Wenn der Handler einen [thenable](#thenables) Wert zurückgibt, wird das neue Promise in den gleichen Zustand versetzt wie der zurückgegebene Wert.
- Wenn der Handler einen nicht-thenable Wert zurückgibt, wird das neue Promise mit dem zurückgegebenen Wert erfüllt.
- Wenn der Handler einen Fehler wirft, wird das neue Promise mit dem geworfenen Fehler abgelehnt.
- Wenn das initiale Promise keinen entsprechenden angehängten Handler hat, wird das neue Promise den gleichen Zustand wie das initiale Promise einnehmen — das heißt, ohne einen Ablehnungs-Handler bleibt ein abgelehntes Promise mit dem gleichen Grund abgelehnt.

Zum Beispiel, im obigen Codeblock, wenn `myPromise` abgelehnt wird, wird `handleRejectedA` aufgerufen, und wenn `handleRejectedA` normal abgeschlossen wird (ohne zu werfen oder ein abgelehntes Promise zurückzugeben), wird das Promise, das vom ersten `then` zurückgegeben wird, erfüllt statt ablehnend zu bleiben. Daher sollten wir, wenn ein Fehler sofort behandelt werden muss, aber wir möchten den Fehlerzustand in der Kette beibehalten, einen Fehler irgendeiner Art im Ablehnungs-Handler werfen. Andererseits, in Ermangelung eines sofortigen Bedarfs, können wir die Fehlerbehandlung bis zum letzten `catch()`-Handler verschieben.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Unter Verwendung der [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) könnte die Implementierung der Promise-Kette wie folgt aussehen:

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
> Für schnellere Ausführung sollten alle synchronen Aktionen vorzugsweise innerhalb eines Handlers durchgeführt werden, da andernfalls mehrere Ticks erforderlich wären, um alle Handler in Folge auszuführen.

JavaScript verwaltet eine [Job-Warteschlange](/de/docs/Web/JavaScript/Reference/Execution_model). Jedes Mal wählt JavaScript einen Job aus der Warteschlange aus und führt ihn vollständig aus. Die Jobs werden vom Executor des `Promise()`-Konstruktors definiert, die Handler, die an `then` übergeben werden, oder jede Plattform-API, die ein Promise zurückgibt. Die Promises in einer Kette repräsentieren das Abhängigkeitsverhältnis zwischen diesen Jobs. Wenn ein Promise eingelöst wird, werden die zugehörigen Handler an das Ende der Job-Warteschlange hinzugefügt.

Ein Promise kann an mehr als einer Kette teilnehmen. Für den folgenden Code wird die Erfüllung von `promiseA` sowohl `handleFulfilled1` als auch `handleFulfilled2` zur Job-Warteschlange hinzufügen. Weil `handleFulfilled1` zuerst registriert ist, wird es auch zuerst ausgeführt.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits erfüllten Promise zugewiesen werden. In diesem Fall wird die Aktion sofort an das Ende der Job-Warteschlange hinzugefügt und ausgeführt, wenn alle vorhandenen Jobs abgeschlossen sind. Daher erfolgt eine Aktion für ein bereits "erfülltes" Promise nur nach Abschluss des aktuellen synchronen Codes und mindestens ein Loop-Tick vergangen ist. Dies garantiert, dass die Promise-Aktionen asynchron sind.

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

Das JavaScript-Ökosystem hatte mehrere Promise-Implementierungen lange bevor es Teil der Sprache wurde. Trotz unterschiedlicher interner Darstellung implementieren alle Promise-ähnlichen Objekte mindestens die _Thenable_ Schnittstelle. Ein Thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) Methode, die mit zwei Callback-Funktionen aufgerufen wird: eine, wenn das Promise erfüllt wird, und eine andere, wenn es abgelehnt wird. Promises sind ebenfalls Thenables.

Um mit den vorhandenen Promise-Implementierungen zusammenzuarbeiten, erlaubt die Sprache die Verwendung von Thenables anstelle von Promises. Zum Beispiel löst [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur Promises auf, sondern verfolgt auch Thenables.

```js
// This is not a Promises/A+ compliant thenable! It calls onFulfilled
// synchronously. For demonstration only.
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

Die `then()` Methode ist verantwortlich für die Planung der Ausführung der bereitgestellten `onFulfilled` und `onRejected` Callback-Funktionen. Ihre Semantik, einschließlich Fehlerbehandlung und Asynchronicität, ist in der [Promises/A+ Spezifikation](https://promisesaplus.com/) genau definiert, und wir werden sie hier nicht wiederholen. Es ist sehr selten, dass Sie selbst eine Thenable implementieren müssen; selbst wenn Sie keine nativen Promises verwenden, werden Sie wahrscheinlich eine Promise-Bibliothek wie [Bluebird](https://www.npmjs.com/package/bluebird) verwenden.

### Promise-Konkurrenz

Die `Promise` Klasse bietet vier statische Methoden, um die [Konkurrenz](https://en.wikipedia.org/wiki/Concurrent_computing) von asynchronen Aufgaben zu erleichtern:

- {{jsxref("Promise.all()")}}
  - : Erfüllt, wenn **alle** Promises erfüllt werden; lehnt ab, wenn **irgendeines** der Promises abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt, wenn **alle** Promises abgeschlossen sind.
- {{jsxref("Promise.any()")}}
  - : Erfüllt, wenn **irgendeines** der Promises erfüllt wird; lehnt ab, wenn **alle** der Promises abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Verwirklicht, wenn **irgendeines** der Promises sich erfüllt oder ablehnt. Mit anderen Worten, es wird erfüllt, wenn eines der Promises erfüllt wird; lehnt ab, wenn eines der Promises abgelehnt wird.

Alle diese Methoden nehmen ein [iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises (genauer gesagt Thenables) entgegen und geben ein neues Promise zurück. Sie alle unterstützen Subclassing, was bedeutet, dass sie auf Unterklassen von `Promise` aufgerufen werden können, und das Ergebnis wird ein Promise des Unterklassentyps sein. Dafür muss der Konstruktor der Unterklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktor implementieren — er akzeptiert eine einzige `executor` Funktion, die mit den `resolve` und `reject` Callbacks als Parameter aufgerufen werden kann. Die Unterklasse muss auch eine `resolve`-statische Methode haben, die so aufgerufen werden kann wie {{jsxref("Promise.resolve()")}}, um Werte in Promises aufzulösen.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "einzel-threaded")}} ist, sodass zu einem bestimmten Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl die Steuerung zwischen verschiedenen Promises wechseln kann, wodurch die Ausführung der Promises gleichzeitig erscheint. [Parallele Ausführung](https://en.wikipedia.org/wiki/Parallel_computing) in JavaScript kann nur durch [Worker Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise` Objekt. Der Konstruktor wird hauptsächlich zum Umwickeln von Funktionen verwendet, die bereits keine Promises unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der zum Erstellen von Rückgabewerten aus Promise-Methoden verwendet wird.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein iterables von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Input-Promises erfüllt werden (einschließlich wenn ein leeres iterables übergeben wird), mit einem Array der Erfüllungswerte. Es lehnt ab, wenn eines der Input-Promises abgelehnt wird, mit dem ersten Ablehnungsgrund.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein iterables von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Input-Promises abgeschlossen sind (einschließlich wenn ein leeres iterables übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes Promises beschreiben.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein iterables von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn irgendeines der Input-Promises erfüllt wird, mit dem ersten Erfüllungswert. Es lehnt ab, wenn alle Input-Promises abgelehnt werden (einschließlich wenn ein leeres iterables übergeben wird), mit einem {{jsxref("AggregateError")}} enthaltend ein Array von Ablehnungsgründen.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein iterables von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise verwirklicht sich mit dem endgültigen Zustand des ersten Promise, das sich erfüllt.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem angegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise` Objekt zurück, das mit dem angegebenen Wert aufgelöst wird. Wenn der Wert ein Thenable ist (d.h. eine `then` Methode hat), wird das zurückgegebene Promise dem Thenable folgen und seinen endgültigen Zustand einnehmen; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Nimmt einen Callback irgendeiner Art (gibt zurück oder wirft, synchron oder asynchron) und umschließt dessen Ergebnis in einem `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen enthält, um es zu erfüllen oder abzulehnen, entsprechend den zwei Parametern, die an den Executor des {{jsxref("Promise/Promise", "Promise()")}} Konstruktors übergeben werden.

## Instanz-Eigenschaften

Diese Eigenschaften sind in `Promise.prototype` definiert und werden von allen `Promise`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktormethode, die das Instanzobjekt erstellt hat. Für `Promise`-Instanzen ist der Anfangswert der {{jsxref("Promise/Promise", "Promise")}} Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Fügt einen Ablehnungs-Handler-Callback an das Promise an und gibt ein neues Promise zurück, das sich zu dem Rückgabewert des Callbacks auflöst, wenn es aufgerufen wird, oder zu seinem ursprünglichen Erfüllungswert, wenn das Promise stattdessen erfüllt wird.
- {{jsxref("Promise.prototype.finally()")}}
  - : Fügt einen Handler an das Promise an und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst wird. Der Handler wird aufgerufen, wenn das Promise abgeschlossen ist, unabhängig davon ob es erfüllt oder abgelehnt ist.
- {{jsxref("Promise.prototype.then()")}}
  - : Fügt Erfüllungs- und Ablehnungs-Handler an das Promise an und gibt ein neues Promise zurück, das sich auf den Rückgabewert des aufgerufenen Handlers auflöst, oder auf seinen ursprünglichen erfüllten Wert, wenn das Promise nicht behandelt wurde (d.h. wenn der relevante Handler `onFulfilled` oder `onRejected` keine Funktion ist).

## Beispiele

### Einfaches Beispiel

In diesem Beispiel verwenden wir `setTimeout(...)`, um asynchronen Code zu simulieren.
In Wirklichkeit werden Sie wahrscheinlich etwas wie XHR oder eine HTML-API verwenden.

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

Dieses Beispiel zeigt verschiedene Techniken zur Verwendung von Promise-Funktionen und verschiedene Situationen, die auftreten können. Um dies zu verstehen, scrollen Sie zunächst zum Ende des Codeblocks und untersuchen Sie die Promise-Kette. Nach Bereitstellung eines initialen Promises kann eine Kette von Promises folgen. Die Kette besteht aus `.then()` Aufrufen und hat typischerweise (aber nicht notwendigerweise) ein einzelnes `.catch()` am Ende, optional gefolgt von `.finally()`. In diesem Beispiel wird die Promise-Kette durch einen eigens geschriebenen `new Promise()`-Konstrukt initiert; in der Praxis beginnen Promise-Ketten jedoch typischerweise mit einer API-Funktion (von jemand anderem geschrieben), die ein Promise zurückgibt.

Die Beispielfunktion `tetheredGetNumber()` zeigt, dass ein Promise-Generator `reject()` während der Einrichtung eines asynchronen Aufrufs oder innerhalb des Callbacks oder beides verwenden wird. Die Funktion `promiseGetWord()` veranschaulicht, wie eine API-Funktion möglicherweise ein Promise in einer eigenständigen Weise generiert und zurückgibt.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das ist erzwungen, weil eine Promise-Kette alle `.then()` Versprechen durchläuft, auch nach einem Fehler, und ohne das `throw` der Fehler als „behoben“ erscheinen würde. Dies ist ärgerlich und aus diesem Grund wird es oft vermieden, `onRejected` entlang der `.then()`-Versprechenkette zu verwenden, und stattdessen ein einzelnes `onRejected` im abschließenden `catch()` zu haben.

Dieser Code kann unter NodeJS ausgeführt werden. Das Verständnis wird verbessert, indem die Fehler tatsächlich auftreten gesehen werden. Um mehr Fehler zu erzwingen, ändern Sie die `Schwellenwert`-Werte.

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

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die `testPromise()` Methode wird jedes Mal aufgerufen, wenn der {{HTMLElement("button")}} geklickt wird. Es erstellt ein Promise, das erfüllt wird, indem [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verwendet wird, um die Versprechensanzahl (eine ab 1 startende Zahl) alle 1-3 Sekunden zufällig abzuarbeiten. Der `Promise()`-Konstruktor wird verwendet, um das Promise zu erstellen.

Die Erfüllung des Promises wird protokolliert, über einen Erfüllungs-Callback, der mittels {{jsxref("Promise/then", "p1.then()")}} gesetzt wird. Einige Protokolle zeigen, wie der synchrone Teil der Methode von der asynchronen Erfüllung des Promise entkoppelt ist.

Durch mehrmaliges schnelles Klicken auf die Schaltfläche sehen Sie sogar, wie die verschiedenen Promises nacheinander erfüllt werden.

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
Jeder Schritt wird kommentiert und ermöglicht es Ihnen, die Architektur von Promise und XHR genau zu verfolgen.

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

### Verfolgung des betreffenden Einstellungsobjekts

Ein Einstellungsobjekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen bereitstellt, wenn JavaScript-Code ausgeführt wird. Dies umfasst den Bereich und die Modulkarte sowie HTML-spezifische Informationen wie den Ursprung. Das betreffende Einstellungsobjekt wird verfolgt, um sicherzustellen, dass der Browser weiß, welches für ein bestimmtes Stück Benutzer-Code verwendet werden soll.

Um sich das besser vorzustellen, können wir uns genauer ansehen, wie der Bereich ein Problem darstellen könnte. Ein **Bereich** kann grob als das globale Objekt betrachtet werden. Was an Bereichen einzigartig ist, ist, dass sie alle notwendigen Informationen zur Ausführung von JavaScript-Code halten. Dies umfasst Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Einstellungsobjekt hat seine eigene "Kopie" dieser und sie sind nicht geteilt. Das kann in Bezug auf Promises zu unvorhergesehenem Verhalten führen. Um dies zu umgehen, verfolgen wir etwas, das **betreffendes Einstellungsobjekt** genannt wird. Dies steht für Informationen, die spezifisch für den Kontext des Benutzer-Codes verantwortlich für einen bestimmten Funktionsaufruf sind.

Um dies noch ein wenig weiter zu veranschaulichen, können wir uns anschauen, wie ein [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) in ein Dokument eingebettet mit seinem Host kommuniziert. Da alle Web-APIs sich des betreffenden Einstellungsobjekts bewusst sind, wird das Folgende in allen Browsern funktionieren:

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

Das gleiche Konzept gilt für Promises. Wenn wir das obige Beispiel ein wenig ändern, erhalten wir Folgendes:

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

Wenn wir das so ändern, dass das `<iframe>` im Dokument auf Postnachrichten wartet, können wir die Auswirkung des betreffenden Einstellungsobjekts beobachten:

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
  window.addEventListener("message", (event) => {
    document.querySelector("#text").textContent = "hello";
    // this code will only run in browsers that track the incumbent settings object
    console.log(event);
  });
</script>
```

Im obigen Beispiel wird der innere Text des `<iframe>` nur dann aktualisiert, wenn das betreffende Einstellungsobjekt verfolgt wird. Dies liegt daran, dass wir ohne Verfolgung des Betreffenden möglicherweise die falsche Umgebung verwenden, um die Nachricht zu senden.

> [!NOTE]
> Derzeit ist das Verfolgen von betroffenen Bereichen vollständig in Firefox implementiert und hat teilweise Implementierungen in Chrome und Safari.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [Einführung in JavaScript-Promises](https://web.dev/articles/promises) auf web.dev (2013)
- [Callbacks, Promises und Coroutines: Asynchrone Programmiermuster in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Präsentation von Domenic Denicola (2011)
