---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Das **`Promise`**-Objekt steht für den eventuellen Abschluss (oder das Scheitern) einer asynchronen Operation und dessen resultierenden Wert.

Um zu verstehen, wie `Promises` funktionieren und wie Sie sie verwenden können, empfehlen wir, dass Sie zuerst [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) lesen.

## Beschreibung

Ein `Promise` ist ein Stellvertreter für einen Wert, der möglicherweise beim Erstellen des Promises noch nicht bekannt ist. Es ermöglicht Ihnen, Handler mit dem eventuellen Erfolgswert oder Fehlgrund einer asynchronen Aktion zu verknüpfen. Dies ermöglicht, dass asynchrone Methoden ähnlich wie synchrone Methoden Werte zurückgeben: Anstatt sofort den endgültigen Wert zurückzugeben, gibt die asynchrone Methode ein _Promise_ zurück, das den Wert irgendwann in der Zukunft bereitstellen wird.

Ein `Promise` befindet sich in einem dieser Zustände:

- _pending_: Anfangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines ausstehenden Promises kann entweder _fulfilled_ mit einem Wert oder _rejected_ mit einem Grund (Fehler) sein. Wenn eine dieser Optionen eintritt, werden die zu einem Promise gehörenden Handler, die durch die `then`-Methode in die Warteschlange gestellt wurden, aufgerufen. Wenn das Promise bereits erfüllt oder abgelehnt ist, wenn ein entsprechender Handler angehängt wird, wird dieser Handler aufgerufen, sodass es kein Wettlaufproblem zwischen dem Abschluss der asynchronen Operation und der Zuordnung von Handlern gibt.

Ein Promise wird als _settled_ bezeichnet, wenn es entweder erfüllt oder abgelehnt ist, aber nicht mehr aussteht.

![Flussdiagramm, das zeigt, wie sich der Zustand eines Promises zwischen pending, fulfilled und rejected durch then/catch-Handler ändert. Ein ausstehendes Promise kann entweder erfüllt oder abgelehnt werden. Wird es erfüllt, wird der "on fulfillment"-Handler oder das erste Argument der then()-Methode ausgeführt und trägt weitere asynchrone Aktionen aus. Wird es abgelehnt, wird der Fehler-Handler, entweder als zweites Argument der then()-Methode oder als einziges Argument der catch()-Methode übergeben, ausgeführt.](promises.png)

Sie werden auch den Begriff _resolved_ im Zusammenhang mit Promises hören – das bedeutet, dass das Promise abgeschlossen oder „festgelegt“ ist, um den endgültigen Zustand eines anderen Promises widerzuspiegeln, und weiteres Auflösen oder Ablehnen hat keine Wirkung mehr. Das Dokument [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) aus dem ursprünglichen Promise-Vorschlag enthält weitere Details zu Promise-Terminologie. Im Sprachgebrauch sind „resolved“ Promises oft gleichbedeutend mit „fulfilled“ Promises, aber wie in „States and fates“ gezeigt, können resolved Promises auch pending oder rejected sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist bereits _resolved_, wenn es erstellt wird (da `resolveOuter` synchron aufgerufen wird), aber es wird mit einem anderen Promise aufgelöst und wird daher erst nach einer Sekunde, wenn das innere Promise erfüllt wird, als _fulfilled_ angesehen. In der Praxis wird die „Auflösung“ oft im Hintergrund durchgeführt und ist nicht beobachtbar, nur die Erfüllung oder Ablehnung ist es.

> [!NOTE]
> Einige andere Sprachen haben Mechanismen zur verzögerten Auswertung und Aufschiebung einer Berechnung, die sie ebenfalls „Promises“ nennen, z. B. Scheme. Promises in JavaScript repräsentieren Prozesse, die bereits ablaufen und mit Callback-Funktionen verknüpft werden können. Wenn Sie einen Ausdruck verzögert auswerten möchten, sollten Sie eine Funktion ohne Argumente verwenden, z. B. `f = () => expression`, um den verzögert ausgewerteten Ausdruck zu erstellen und `f()`, um den Ausdruck sofort zu evaluieren.

`Promise` selbst hat kein erstklassiges Protokoll zur Stornierung, aber Sie könnten in der Lage sein, die zugrunde liegende asynchrone Operation direkt zu stornieren, typischerweise durch die Verwendung von [`AbortController`](/de/docs/Web/API/AbortController).

### Verschachtelte Promises

Die Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um eine weitere Aktion mit einem Promise zu verknüpfen, das abgeschlossen wird. Die `then()`-Methode nimmt bis zu zwei Argumente; das erste Argument ist eine Callback-Funktion für den erfüllten Fall des Promises und das zweite Argument ist eine Callback-Funktion für den abgelehnten Fall. Die Methoden `catch()` und `finally()` rufen intern `then()` auf und machen die Fehlerbehandlung weniger ausführlich. Beispielsweise ist ein `catch()` im Grunde nur ein `then()` ohne die Weitergabe des Erfüllungshandlers. Da diese Methoden Promises zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Wir verwenden die folgende Terminologie: _initial promise_ ist das Promise, auf dem `then` aufgerufen wird; _new promise_ ist das Promise, das von `then` zurückgegeben wird. Die beiden an `then` übergebenen Callback-Funktionen werden jeweils als _fulfillment handler_ und _rejection handler_ bezeichnet.

Der abgeschlossene Zustand des initialen Promises bestimmt, welcher Handler ausgeführt wird.

- Wenn das initiale Promise erfüllt ist, wird der Fulfillment-Handler mit dem Erfüllungswert aufgerufen.
- Wenn das initiale Promise abgelehnt ist, wird der Rejection-Handler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss des Handlers bestimmt den abgeschlossenen Zustand des neuen Promises.

- Wenn der Handler einen [thenable](#thenables) Wert zurückgibt, wird das neue Promise im gleichen Zustand abgeschlossen wie der zurückgegebene Wert.
- Wenn der Handler einen nicht-thenable-Wert zurückgibt, wird das neue Promise mit diesem Wert erfüllt.
- Wenn der Handler einen Fehler wirft, wird das neue Promise mit dem geworfenen Fehler abgelehnt.
- Wenn dem initialen Promise kein entsprechender Handler zugeordnet ist, wird das neue Promise auf den gleichen Zustand wie das initiale Promise abgeschlossen — das heißt, ohne einen Ablehnungshandler bleibt ein abgelehntes Promise mit dem gleichen Grund abgelehnt.

Zum Beispiel, im obigen Code, wenn `myPromise` abgelehnt wird, wird `handleRejectedA` aufgerufen, und wenn `handleRejectedA` normal abgeschlossen wird (ohne zu werfen oder ein abgelehntes Promise zurückzugeben), wird das von der ersten `then` zurückgegebene Promise erfüllt, anstatt abgelehnt zu bleiben. Daher, wenn ein Fehler sofort behandelt werden muss, wir aber den Fehlerzustand in der Kette beibehalten möchten, müssen wir einen Fehler eines bestimmten Typs im Rejection-Handler werfen. Auf der anderen Seite, in Abwesenheit eines unmittelbaren Bedarfs, können wir die Fehlerbehandlung bis zum abschließenden `catch()`-Handler zurückstellen.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Bei Verwendung von [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen könnte die Implementierung der Promise-Kette so aussehen:

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
> Für schnellere Ausführung sollten alle synchronen Aktionen vorzugsweise innerhalb eines Handlers durchgeführt werden, da sonst mehrere Ticks benötigt würden, um alle Handler in Reihenfolge auszuführen.

JavaScript verwaltet eine [Job-Warteschlange](/de/docs/Web/JavaScript/Reference/Execution_model). Jedes Mal wählt JavaScript einen Job aus der Warteschlange und führt ihn vollständig aus. Die Jobs werden durch den Executor des `Promise()`-Konstruktors definiert, die an `then` übergebenen Handler oder jede Plattform-API, die ein Promise zurückgibt. Die Promises in einer Kette stellen die Abhängigkeitsbeziehung zwischen diesen Jobs dar. Wenn ein Promise abgeschlossen wird, werden die jeweiligen zugehörigen Handler am Ende der Job-Warteschlange hinzugefügt.

Ein Promise kann an mehr als einer Kette teilnehmen. Im folgenden Code führt die Erfüllung von `promiseA` dazu, dass sowohl `handleFulfilled1` als auch `handleFulfilled2` am Ende der Job-Warteschlange hinzugefügt werden. Da `handleFulfilled1` zuerst registriert ist, wird es zuerst aufgerufen.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits abgeschlossenen Promise zugewiesen werden. In diesem Fall wird die Aktion sofort am Ende der Job-Warteschlange hinzugefügt und wird ausgeführt, wenn alle bestehenden Jobs abgeschlossen sind. Daher wird eine Aktion für ein bereits "abgeschlossenes" Promise erst nach Abschluss des aktuellen synchronen Codes und nachdem mindestens ein Schleifen-Tick vergangen ist, ausgeführt. Dies garantiert, dass Promise-Aktionen asynchron sind.

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

Das JavaScript-Ökosystem hat mehrere Promise-Implementierungen lange vor seiner Aufnahme in die Sprache entwickelt. Trotz unterschiedlicher interner Darstellung implementieren mindestens alle Promise-ähnlichen Objekte das _Thenable_-Interface. Ein Thenable implementiert die Methode [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), die mit zwei Callback-Funktionen aufgerufen wird: eine für den Fall, dass das Promise erfüllt wird, eine für den Fall, dass es abgelehnt wird. Promises sind ebenfalls Thenables.

Um mit den bestehenden Promise-Implementierungen interoperieren zu können, erlaubt die Sprache die Verwendung von Thenables anstelle von Promises. Zum Beispiel wird [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur Promises auflösen, sondern auch Thenables verfolgen.

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
  - : Erfüllt sich, wenn **alle** Promises erfüllt sind; lehnt ab, wenn **ein** der Promises abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt sich, wenn **alle** Promises abgeschlossen sind.
- {{jsxref("Promise.any()")}}
  - : Erfüllt sich, wenn **ein** der Promises erfüllt ist; lehnt ab, wenn **alle** der Promises abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Wird abgeschlossen, sobald **ein** der Promises abgeschlossen ist. Anders ausgedrückt, erfüllt sich, wenn eines der Promises erfüllt ist; lehnt ab, wenn eines der Promises abgelehnt wird.

Alle diese Methoden nehmen einen [iterativen](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises (genauer gesagt Thenables) und geben ein neues Promise zurück. Sie unterstützen alle Subklassenbildung, was bedeutet, dass sie auf Subklassen von `Promise` aufgerufen werden können und das Ergebnis ein Promise des Subklassen-Typs sein wird. Dazu muss der Konstruktor der Subklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktor implementieren – eine einzelne `executor`-Funktion akzeptieren, die mit den Callbacks `resolve` und `reject` als Parameter aufgerufen werden kann. Die Subklasse muss auch über eine statische `resolve` Methode verfügen, die auf ähnliche Weise wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte in Promises aufzulösen.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "einzelner Thread")}} ist, sodass zu einem bestimmten Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl die Kontrolle zwischen verschiedenen Promises wechseln kann, wodurch die Ausführung der Promises scheinbar gleichzeitig erfolgt. Eine [parallele Ausführung](https://en.wikipedia.org/wiki/Parallel_computing) in JavaScript kann nur durch [Worker-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu umschließen, die noch keine Promises unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus Promise-Methoden zu konstruieren.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein iterierbares von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn alle Eingabepromises erfüllt sind (einschließlich wenn ein leeres Iterables übergeben wird), mit einem Array der Erfüllungswerte. Es lehnt ab, wenn eines der Eingabepromises abgelehnt wird, mit diesem ersten Ablehnungsgrund.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein iterierbares von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn alle Eingabepromises abgeschlossen sind (einschließlich wenn ein leeres Iterables übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes Promises beschreiben.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein iterierbares von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn eines der Eingabepromises erfüllt ist, mit diesem ersten Erfüllungswert. Es lehnt ab, wenn alle Eingabepromises abgelehnt werden (einschließlich wenn ein leeres Iterables übergeben wird), mit einem {{jsxref("AggregateError")}}, das ein Array von Ablehnungsgründen enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein iterierbares von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird mit dem endgültigen Zustand des ersten abgeschlossenen Promises abgeschlossen.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem angegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem angegebenen Wert aufgelöst wird. Wenn der Wert ein Thenable ist (d. h. eine `then`-Methode hat), wird das zurückgegebene Promise diesem Thenable folgen und dessen endgültigen Zustand annehmen; ansonsten wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Nimmt einen Callback jeglicher Art (gibt zurück oder wirft, synchron oder asynchron) an und umschließt dessen Ergebnis in einem `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen zur Auflösung oder Ablehnung enthält, die den beiden Parametern des Executors des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors entsprechen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Promise`-Instanzen ist der anfängliche Wert der {{jsxref("Promise/Promise", "Promise")}}-Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Fügt dem Promise einen Ablehnungs-Handler-Callback hinzu und gibt ein neues Promise zurück, das auf den Rückgabewert des Callbacks aufgelöst wird, wenn es aufgerufen wird, oder auf seinen ursprünglichen Erfüllungswert, wenn das Promise stattdessen erfüllt wird.
- {{jsxref("Promise.prototype.finally()")}}
  - : Fügt dem Promise einen Handler hinzu und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst wird. Der Handler wird aufgerufen, wenn das Promise abgeschlossen ist, egal ob erfüllt oder abgelehnt.
- {{jsxref("Promise.prototype.then()")}}
  - : Fügt dem Promise Fulfillment- und Rejection-Handler hinzu und gibt ein neues Promise zurück, das den Rückgabewert des aufgerufenen Handlers aufgelöst wird oder dessen ursprünglichen abgeschlossenen Wert, wenn das Promise nicht behandelt wurde (d. h. wenn der relevante Handler `onFulfilled` oder `onRejected` keine Funktion ist).

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel verwenden wir `setTimeout(...)` um asynchronen Code zu simulieren.
In Wirklichkeit werden Sie wahrscheinlich etwas wie XHR oder eine HTML API verwenden.

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

Dieses Beispiel zeigt verschiedene Techniken zur Nutzung der Promise-Fähigkeiten und verschiedene Situationen, die auftreten können. Um dies zu verstehen, beginnen Sie am besten, indem Sie zum Ende des Codeblocks scrollen und die Promise-Kette untersuchen. Bei Bereitstellung eines anfänglichen Promises kann eine Kette von Promises folgen. Die Kette besteht aus `.then()`-Aufrufen und hat typischerweise (aber nicht unbedingt) ein einzelnes `.catch()` am Ende, gefolgt von `.finally()` falls erforderlich. In diesem Beispiel wird die Promise-Kette durch einen benutzerdefinierten `new Promise()`-Aufbau initiiert; in der Praxis beginnen Promise-Ketten jedoch typischerweise mit einer API-Funktion (von jemand anderem geschrieben), die ein Promise zurückgibt.

Die Beispiel-Funktion `tetheredGetNumber()` zeigt, dass ein Promise-Generator `reject()` während des Einrichtens eines asynchronen Anrufs oder innerhalb des Callbacks oder beides verwenden wird. Die Funktion `promiseGetWord()` veranschaulicht, wie eine API-Funktion ein Promise auf selbstständige Weise generieren und zurückgeben könnte.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das ist erzwungen, weil eine Promise-Kette alle `.then()`-Promises durchläuft, selbst nach einem Fehler, und ohne das `throw` würde der Fehler als „behoben“ erscheinen. Dies ist ein Ärgernis, und aus diesem Grund ist es üblich, `onRejected` in der ganzen `.then()`-Promise-Kette zu weglassen und stattdessen einen einzigen `onRejected` im endgültigen `catch()` zu haben.

Dieser Code kann unter NodeJS ausgeführt werden. Das Verständnis wird verbessert, indem die Fehler tatsächlich auftreten gesehen werden. Um mehr Fehler zu erzwingen, ändern Sie die `threshold`-Werte.

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
      reject(`Too large: ${value}`);
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
      reject(`Still too large: ${value}`);
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

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die Methode `testPromise()` wird jedes Mal aufgerufen, wenn der {{HTMLElement("button")}} angeklickt wird. Sie erstellt ein Promise, das mittels [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) alle 1-3 Sekunden (zufällig) auf die Promise-Zählung (eine Zahl, beginnend bei 1) erfüllt wird. Der Promise()-Konstruktor wird verwendet, um das Promise zu erstellen.

Die Erfüllung des Promises wird protokolliert, über einen Erfüllungs-Callback, der mit {{jsxref("Promise/then", "p1.then()")}} gesetzt wurde. Ein paar Protokolle zeigen, wie der synchrone Teil der Methode vom asynchronen Abschluss des Promises entkoppelt ist.

Durch mehrmaliges Klicken auf die Schaltfläche in kurzer Zeit sehen Sie sogar, wie die verschiedenen Promises nacheinander erfüllt werden.

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

Ein weiteres Beispiel, das `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwendet, um ein Bild zu laden, wird unten gezeigt.
Jeder Schritt ist kommentiert und ermöglicht es Ihnen, die Promise- und XHR-Architektur genau zu verfolgen.

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

### Verfolgung des Einstellungen-Objekts des Incumbent

Ein Einstellungen-Objekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen bereitstellt, wenn JavaScript-Code ausgeführt wird. Dies umfasst den Realm und die Modultabelle sowie HTML-spezifische Informationen wie den Ursprung. Das Einstellungen-Objekt des Incumbent wird verfolgt, um sicherzustellen, dass der Browser weiß, welches er für ein bestimmtes Stück Benutzer-Code verwenden soll.

Um sich dies besser vorzustellen, können wir einen näheren Blick darauf werfen, wie der Realm ein Problem sein könnte. Ein **Realm** kann grob als das globale Objekt betrachtet werden. Was an Realms einzigartig ist, ist, dass sie alle notwendigen Informationen zum Ausführen von JavaScript-Code enthalten. Dies umfasst Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Einstellungen-Objekt hat seine eigene "Kopie" davon und sie werden nicht geteilt. Dies kann einige unerwartete Verhaltensweisen im Zusammenhang mit Promises verursachen. Um dies zu umgehen, verfolgen wir etwas, das als **Einstellungen-Objekt des Incumbent** bezeichnet wird. Dies steht für Informationen, die spezifisch für den Kontext des Benutzer-Codes sind, der für einen bestimmten Funktionsaufruf verantwortlich ist.

Um dies weiter zu verdeutlichen, können wir betrachten, wie ein innerhalb eines Dokuments eingebetteter [`<iframe>`](/de/docs/Web/HTML/Element/iframe) mit seinem Host kommuniziert. Da alle Web-APIs sich des Einstellungen-Objekts des Incumbent bewusst sind, funktioniert das Folgende in allen Browsern:

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

Dasselbe Konzept gilt für Promises. Wenn wir das obige Beispiel ein wenig modifizieren, erhalten wir folgendes:

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

Wenn wir dies so ändern, dass das `<iframe>` im Dokument auf Post-Nachrichten hört, können wir die Wirkung des Einstellungen-Objekts des Incumbent beobachten:

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

Im obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das Einstellungen-Objekt des Incumbent verfolgt wird. Dies liegt daran, dass wir ohne die Verfolgung des Incumbent möglicherweise die falsche Umgebung verwenden, um die Nachricht zu senden.

> [!NOTE]
> Derzeit ist die Verfolgung des Incumbent-Realm voll in Firefox implementiert und hat teilweise Implementierungen in Chrome und Safari.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Promises/A+-Spezifikation](https://promisesaplus.com/)
- [JavaScript Promises: eine Einführung](https://web.dev/articles/promises) auf web.dev (2013)
- [Callbacks, Promises, und Coroutines: Asynchrone Programmiermuster in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Präsentation von Domenic Denicola (2011)
