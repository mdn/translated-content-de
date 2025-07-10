---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`Promise`**-Objekt repräsentiert den zukünftigen Abschluss (oder Fehlschlag) einer asynchronen Operation und deren resultierenden Wert.

Um mehr darüber zu erfahren, wie Promises funktionieren und wie Sie sie nutzen können, empfehlen wir Ihnen, zuerst [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Proxy für einen Wert, der beim Erstellen des Promises nicht unbedingt bekannt ist. Es ermöglicht Ihnen, Handler mit dem zukünftigen Erfolgswert oder dem Grund für das Scheitern einer asynchronen Aktion zu verknüpfen. Dies ermöglicht es asynchronen Methoden, Werte wie synchrone Methoden zurückzugeben: Anstatt sofort den Endwert zurückzugeben, gibt die asynchrone Methode ein _Versprechen_ ab, den Wert irgendwann in der Zukunft bereitzustellen.

Ein `Promise` befindet sich in einem dieser Zustände:

- _pending_: Anfangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines ausstehenden Promises kann entweder _erfüllt_ mit einem Wert oder _abgelehnt_ mit einem Grund (Fehler) sein.
Wenn eine dieser Optionen eintritt, werden die zugehörigen Handler, die durch die `then`-Methode eines Promises in die Warteschlange gestellt wurden, aufgerufen. Wenn das Promise bereits erfüllt oder abgelehnt ist, wenn ein entsprechender Handler angefügt wird, wird der Handler aufgerufen, sodass keine Rennbedingung zwischen dem Abschluss einer asynchronen Operation und dem Anfügen ihrer Handler besteht.

Ein Promise gilt als _erledigt_, wenn es entweder erfüllt oder abgelehnt ist, aber nicht mehr ausstehend.

![Flussdiagramm, das zeigt, wie der Promise-Zustand über then/catch-Handler zwischen ausstehend, erfüllt und abgelehnt wechselt. Ein ausstehendes Promise kann entweder erfüllt oder abgelehnt werden. Wird es erfüllt, wird der "bei Erfüllung"-Handler oder der erste Parameter der then()-Methode ausgeführt und führt weitere asynchrone Aktionen aus. Wird es abgelehnt, wird der Fehlerhandler, entweder als zweiter Parameter der then()-Methode oder als einziger Parameter der catch()-Methode übergeben, ausgeführt.](promises.png)

Sie werden auch den Begriff _gelöst_ bei Promises hören — das bedeutet, dass das Promise abgeschlossen oder "festgeschrieben" ist, um dem endgültigen Zustand eines anderen Promises zu entsprechen, und weiteres Lösen oder Ablehnen hat keinen Effekt. Das [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md)-Dokument aus dem ursprünglichen Promise-Vorschlag enthält mehr Details über die Promise-Terminologie. Umgangssprachlich sind "gelöste" Promises oft gleichbedeutend mit "erfüllten" Promises, aber wie in "States and fates" veranschaulicht, können gelöste Promises auch noch ausstehend oder abgelehnt sein. Ein Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist bereits _gelöst_, zu dem Zeitpunkt, an dem es erstellt wird (weil `resolveOuter` synchron aufgerufen wird), es wird jedoch mit einem anderen Promise gelöst und daher erst eine Sekunde später _erfüllt_, wenn das innere Promise erfüllt wird. In der Praxis wird die "Lösung" oft im Hintergrund durchgeführt und ist nicht beobachtbar, und nur dessen Erfüllung oder Ablehnung sind es.

> [!NOTE]
> Mehrere andere Sprachen haben Mechanismen für verzögerte Auswertung und das Verschieben einer Berechnung, die sie ebenfalls "Versprechen" nennen, z. B. Scheme. Promises in JavaScript repräsentieren Prozesse, die bereits stattfinden, die mit Callback-Funktionen verkettet werden können. Wenn Sie einen Ausdruck lazy evaluieren möchten, ziehen Sie in Betracht, eine Funktion ohne Argumente zu verwenden, z. B. `f = () => expression`, um den lazy evaluated Ausdruck zu erstellen, und `f()`, um den Ausdruck sofort zu evaluieren.

`Promise` selbst hat kein erstklassiges Protokoll für die Stornierung, aber Sie können möglicherweise direkt die zugrunde liegende asynchrone Operation stornieren, typischerweise unter Verwendung von [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Promises

Die Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}}, und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um weitere Aktionen mit einem abgeschlossenen Promise zu verknüpfen. Die `then()`-Methode nimmt bis zu zwei Argumente an; das erste Argument ist eine Callback-Funktion für den Erfüllungsfall des Promises, und das zweite Argument ist eine Callback-Funktion für den Ablehnungsfall. Die `catch()`- und `finally()`-Methoden rufen intern `then()` auf und machen die Fehlerbehandlung weniger umfangreich. Zum Beispiel ist ein `catch()` eigentlich nur ein `then()` ohne Übergabe des Erfüllungshandlers. Da diese Methoden Promises zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Wir verwenden die folgende Terminologie: _Anfangs-Promise_ ist das Promise, auf dem `then` aufgerufen wird; _neues Promise_ ist das Promise, das von `then` zurückgegeben wird. Die beiden zu `then` übergebenen Callbacks werden als _Erfüllungshandler_ und _Ablehnungshandler_ bezeichnet.

Der abgeschlossene Zustand des Anfangs-Promises bestimmt, welcher Handler ausgeführt wird.

- Wenn das Anfangs-Promise erfüllt ist, wird der Erfüllungshandler mit dem Erfüllungswert aufgerufen.
- Wenn das Anfangs-Promise abgelehnt ist, wird der Ablehnungshandler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss des Handlers bestimmt den abgeschlossenen Zustand des neuen Promises.

- Wenn der Handler einen [thenable](#thenables) Wert zurückgibt, übernimmt das neue Promise den gleichen Zustand wie der zurückgegebene Wert.
- Wenn der Handler einen nicht-thenable Wert zurückgibt, wird das neue Promise mit dem zurückgegebenen Wert erfüllt.
- Wenn der Handler einen Fehler wirft, wird das neue Promise mit dem geworfenen Fehler abgelehnt.
- Wenn das Anfangs-Promise keinen entsprechenden Handler angehängt hat, übernimmt das neue Promise den gleichen Zustand wie das Anfangs-Promise — das heißt, ohne Ablehnungshandler bleibt ein abgelehntes Promise mit dem gleichen Grund abgelehnt.

Zum Beispiel, im obigen Code, wenn `myPromise` ablehnt, wird `handleRejectedA` aufgerufen, und wenn `handleRejectedA` normal abschließt (ohne zu werfen oder ein abgelehntes Promise zurückzugeben), wird das Promise, das vom ersten `then` zurückgegeben wird, erfüllt, anstatt abgelehnt zu bleiben. Daher, wenn ein Fehler sofort behandelt werden muss, aber wir den Fehlerzustand in der Kette beibehalten wollen, müssen wir einen Fehler irgendeines Typs im Ablehnungshandler werfen. Andererseits, in Abwesenheit eines sofortigen Bedarfs, können wir die Fehlerbehandlung bis zum finalen `catch()`-Handler weglassen.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Bei Verwendung von [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen könnte die Implementierung der Promise-Kette etwa so aussehen:

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
> Zur schnelleren Ausführung sollten alle synchronen Aktionen möglichst innerhalb eines Handlers durchgeführt werden, andernfalls würde es mehrere Ticks dauern, um alle Handler in Reihenfolge auszuführen.

JavaScript verwaltet eine [Job-Warteschlange](/de/docs/Web/JavaScript/Reference/Execution_model). Jedes Mal wählt JavaScript einen Job aus der Warteschlange und führt ihn vollständig aus. Die Jobs werden durch den Executor des `Promise()`-Konstruktors definiert, die an `then` übergebenen Handler oder jede Plattform-API, die ein Promise zurückgibt. Die Promises in einer Kette stellen die Abhängigkeitsbeziehung zwischen diesen Jobs dar. Wenn ein Promise abgeschlossen wird, werden die jeweiligen Handler, die damit verknüpft sind, an das Ende der Job-Warteschlange angehängt.

Ein Promise kann in mehr als einer Kette beteiligt sein. Im folgenden Code wird die Erfüllung von `promiseA` dazu führen, dass sowohl `handleFulfilled1` als auch `handleFulfilled2` zur Job-Warteschlange hinzugefügt werden. Da `handleFulfilled1` zuerst registriert ist, wird es zuerst aufgerufen.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits abgeschlossenen Promise zugewiesen werden. In diesem Fall wird die Aktion sofort an das Ende der Job-Warteschlange angehängt und wird ausgeführt, nachdem alle bestehenden Jobs abgeschlossen sind. Daher wird eine Aktion für ein bereits "abgeschlossenes" Promise erst nach Abschluss des aktuellen synchronen Codes und nachdem mindestens ein Loop-Tick vergangen ist, ausgeführt. Dies garantiert, dass Promise-Aktionen asynchron sind.

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

Das JavaScript-Ökosystem hatte viele Promise-Implementierungen lange bevor es Teil der Sprache wurde. Trotz unterschiedlicher interner Darstellung implementieren alle Promise-ähnlichen Objekte mindestens das _Thenable_-Interface. Ein Thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode, die mit zwei Callbacks aufgerufen wird: eine, wenn das Promise erfüllt ist, und eine, wenn es abgelehnt wird. Promises sind auch Thenables.

Um mit den bestehenden Promise-Implementierungen zu interagieren, erlaubt die Sprache die Verwendung von Thenables anstelle von Promises. Zum Beispiel, [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) wird nicht nur Promises lösen, sondern auch Thenables nachverfolgen.

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

Die `Promise`-Klasse bietet vier statische Methoden, um die asynchrone Aufgaben-[Konkurrenz](https://en.wikipedia.org/wiki/Concurrent_computing) zu erleichtern:

- {{jsxref("Promise.all()")}}
  - : Erfüllt sich, wenn **alle** Promises erfüllt sind; lehnt sich ab, wenn **eines** der Promises abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt sich, wenn **alle** Promises abgeschlossen sind.
- {{jsxref("Promise.any()")}}
  - : Erfüllt sich, wenn **eines** der Promises erfüllt ist; lehnt sich ab, wenn **alle** Promises abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Erfüllt sich, wenn **eines** der Promises abgeschlossen ist. Mit anderen Worten, erfüllt sich bei Erfüllung eines der Promises oder lehnt sich ab bei Ablehnung eines der Promises.

Alle diese Methoden nehmen ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises ([Thenables](#thenables) um genau zu sein) und geben ein neues Promise zurück. Sie unterstützen alle das Subclassing, was bedeutet, dass sie in Unterklassen von `Promise` aufgerufen werden können und das Ergebnis ein Promise vom Typ der Unterklasse ist. Dafür muss der Konstruktor der Unterklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — eine einzelne `executor`-Funktion, die mit den Parametern `resolve` und `reject` aufgerufen werden kann. Die Unterklasse muss auch eine `resolve`-statische Methode haben, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte zu Promises zu lösen.

Es sei darauf hingewiesen, dass JavaScript von Natur aus {{Glossary("Thread", "einzelsträngig")}} ist, so dass zu einem gegebenen Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl die Kontrolle zwischen verschiedenen Promises wechseln kann, wodurch die Ausführung der Promises gleichzeitig erscheint. [Parallele Ausführung](https://en.wikipedia.org/wiki/Parallel_computing) in JavaScript kann nur durch [Worker-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu kapseln, die Promises nicht bereits unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der zum Konstruieren der Rückgabewerte von Promise-Methoden verwendet wird.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Eingangspromises erfüllt werden (einschließlich, wenn ein leeres Iterable übergeben wird), mit einem Array der Erfüllungswerte. Es lehnt sich ab, wenn eines der Eingangspromises abgelehnt wird, mit dem ersten Ablehnungsgrund.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Eingangspromises abgeschlossen sind (einschließlich, wenn ein leeres Iterable übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes Promises beschreiben.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn eines der Eingangspromises erfüllt wird, mit diesem ersten Erfüllungswert. Es lehnt sich ab, wenn alle Eingangspromises abgelehnt werden (einschließlich, wenn ein leeres Iterable übergeben wird), mit einem {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise löst sich mit dem endgültigen Zustand des ersten Promise, das sich löst.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem gegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem gegebenen Wert gelöst wird. Wenn der Wert ein Thenable ist (d.h. eine `then`-Methode hat), wird das zurückgegebene Promise diesem Thenable "folgen" und seinen endgültigen Zustand übernehmen; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Nimmt einen Callback beliebiger Art (gibt zurück oder wirft, synchron oder asynchron) und umwickelt dessen Ergebnis in einem `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen zum Lösen oder Ablehnen enthält, entsprechend den zwei Parametern, die dem Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Promise`-Instanzen ist der Anfangswert der {{jsxref("Promise/Promise", "Promise")}}-Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Fügt einen Ablehnungshandler-Callback zum Promise hinzu und gibt ein neues Promise zurück, das auf den Rückgabewert des Callbacks aufgelöst wird, wenn es aufgerufen wird, oder auf seinen ursprünglichen Erfüllungswert, wenn das Promise stattdessen erfüllt wird.
- {{jsxref("Promise.prototype.finally()")}}
  - : Fügt einen Handler zum Promise hinzu und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst ist. Der Handler wird aufgerufen, wenn das Promise abgeschlossen ist, unabhängig davon, ob es erfüllt oder abgelehnt wurde.
- {{jsxref("Promise.prototype.then()")}}
  - : Fügt Erfüllungs- und Ablehnungshandler zum Promise hinzu und gibt ein neues Promise zurück, das auf den Rückgabewert des aufgerufenen Handlers aufgelöst wird oder auf den ursprünglichen abgeschlossenen Wert, wenn das Promise nicht behandelt wurde (d.h. wenn der relevante Handler `onFulfilled` oder `onRejected` keine Funktion ist).

## Beispiele

### Einfaches Beispiel

In diesem Beispiel verwenden wir `setTimeout(...)`, um asynchronen Code zu simulieren.
In Wirklichkeit verwenden Sie wahrscheinlich etwas wie XHR oder eine HTML-API.

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

### Beispiel mit unterschiedlichen Situationen

Dieses Beispiel zeigt unterschiedliche Techniken zur Verwendung von Promise-Funktionen und verschiedene Situationen, die auftreten können. Um dies zu verstehen, scrollen Sie zunächst zum unteren Ende des Codeblocks und untersuchen Sie die Promise-Kette. Bei Bereitstellung eines anfänglichen Promises kann eine Kette von Promises folgen. Die Kette besteht aus `.then()`-Aufrufen und hat normalerweise (aber nicht unbedingt) ein einzelnes `.catch()` am Ende, optional gefolgt von `.finally()`. In diesem Beispiel wird die Promise-Kette durch einen benutzerdefinierten `new Promise()`-Konstruktor eingeleitet; aber in der Praxis beginnen Promise-Ketten öfter mit einer API-Funktion (geschrieben von jemand anderem), die ein Promise zurückgibt.

Die Beispielmethode `tetheredGetNumber()` zeigt, dass ein Promise-Generator `reject()` bei Einrichtung eines asynchronen Aufrufs oder innerhalb des Callbacks oder beidem verwenden wird. Die Methode `promiseGetWord()` illustriert, wie eine API-Funktion ein Promise eigenständig generieren und zurückgeben kann.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Dies ist gezwungen, da eine Promise-Kette durch alle `.then()`-Promises geht, selbst nach einem Fehler, und ohne das `throw` würde der Fehler als "behoben" erscheinen. Dies ist ein Ärgernis und aus diesem Grund ist es gängig, `onRejected` in der gesamten Kette von `.then()`-Promises wegzulassen und nur ein einzelnes `onRejected` im finalen `catch()` zu haben.

Dieser Code kann unter NodeJS ausgeführt werden. Das Verständnis wird durch das eigentliche Auftreten der Fehler erleichtert. Um mehr Fehler zu erzwingen, ändern Sie die `threshold`-Werte.

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

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die Methode `testPromise()` wird jedes Mal aufgerufen, wenn das {{HTMLElement("button")}}-Element geklickt wird. Sie erstellt ein Promise, das erfüllt wird, indem [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verwendet wird, um zufällig alle 1-3 Sekunden auf die Promise-Zahl (eine Zahl ab 1) zu warten. Der `Promise()`-Konstruktor wird verwendet, um das Promise zu erstellen.

Die Erfüllung des Promises wird protokolliert, mit einem Erfüllungs-Callback, das mit {{jsxref("Promise/then", "p1.then()")}} gesetzt wird. Einige Protokolle zeigen, wie der synchrone Teil der Methode von der asynchronen Erfüllung des Promises entkoppelt ist.

Wenn Sie die Schaltfläche innerhalb kurzer Zeit mehrmals klicken, sehen Sie sogar, wie die verschiedenen Promises nacheinander erfüllt werden.

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

Ein weiteres Beispiel mit `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zum Laden eines Bildes wird unten gezeigt.
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

### Verfolgung des Inhaber-Settings-Objekts

Ein Settings-Objekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen beim Ausführen des JavaScript-Codes bereitstellt. Dies umfasst den Bereich und die Modulkarte sowie HTML-spezifische Informationen wie den Ursprung. Das Inhaber-Settings-Objekt wird verfolgt, um sicherzustellen, dass der Browser weiß, welches für ein bestimmtes Benutzer-Javascript zu verwenden ist.

Um dies besser zu veranschaulichen, können wir genauer betrachten, wie der Bereich ein Problem darstellen könnte. Ein **Bereich** kann grob als das globale Objekt betrachtet werden. Was Bereiche einzigartig macht, ist, dass sie alle notwendigen Informationen zum Ausführen von JavaScript-Code enthalten. Dies umfasst Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Settings-Objekt hat seine eigene "Kopie" dieser Objekte und sie werden nicht geteilt. Das kann einige unerwartete Verhalten in Bezug auf Promises verursachen. Um dies zu umgehen, verfolgen wir das sogenannte **Inhaber-Settings-Objekt**. Dies repräsentiert Informationen, die speziell für den Kontext des Benutzer-Codes verantwortlich für einen bestimmten Funktionsaufruf sind.

Um dies weiter zu verdeutlichen, können wir einen Blick darauf werfen, wie ein [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), das in ein Dokument eingebettet ist, mit seinem Host kommuniziert. Da alle Web-APIs sich des Inhaber-Settings-Objekts bewusst sind, wird Folgendes in allen Browsern funktionieren:

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

Das gleiche Konzept gilt für Promises. Wenn wir das obige Beispiel ein wenig anpassen, erhalten wir dies:

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

Wenn wir dies so ändern, dass das `<iframe>` im Dokument auf Nachrichten hört, können wir die Auswirkungen des Inhaber-Settings-Objekts beobachten:

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

Im obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das Inhaber-Settings-Objekt verfolgt wird. Dies liegt daran, dass wir ohne Verfolgung des Inhabers möglicherweise die falsche Umgebung verwenden, um die Nachricht zu senden.

> [!NOTE]
> Derzeit ist die Verfolgung des Inhaber-Bereichs vollständig in Firefox implementiert und hat teilweise Implementierungen in Chrome und Safari.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Promises/A+ specification](https://promisesaplus.com/)
- [JavaScript Promises: an introduction](https://web.dev/articles/promises) auf web.dev (2013)
- [Callbacks, Promises, and Coroutines: Asynchronous Programming Patterns in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Präsentation von Domenic Denicola (2011)
