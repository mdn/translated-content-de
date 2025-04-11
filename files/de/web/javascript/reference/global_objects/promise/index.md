---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{JSRef}}

Das **`Promise`**-Objekt repräsentiert den zukünftigen Abschluss (oder Fehler) einer asynchronen Operation und deren resultierenden Wert.

Um mehr darüber zu erfahren, wie Promises funktionieren und wie Sie sie verwenden können, empfehlen wir Ihnen, zuerst [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Platzhalter für einen Wert, der nicht unbedingt bekannt ist, wenn das Promise erstellt wird. Es ermöglicht Ihnen, Handler mit dem Erfolgswert oder Fehlgrund einer asynchronen Aktion zu verknüpfen. Dadurch können asynchrone Methoden Werte wie synchrone Methoden zurückgeben: Anstatt sofort den endgültigen Wert zurückzugeben, gibt die asynchrone Methode ein _Promise_ zurück, den Wert zu einem späteren Zeitpunkt bereitzustellen.

Ein `Promise` befindet sich in einem dieser Zustände:

- _pending_: Anfangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: Bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: Bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines wartenden Promises kann entweder mit einem Wert _erfüllt_ oder mit einem Grund (Fehler) _abgelehnt_ werden.
Wenn eine dieser Optionen eintritt, werden die mit der `then`-Methode eines Promises verknüpften Handler aufgerufen. Wenn das Promise bereits erfüllt oder abgelehnt ist, wenn ein entsprechender Handler angehängt wird, wird der Handler aufgerufen, sodass es keine Rennbedingung zwischen dem Abschluss einer asynchronen Operation und der Befestigung ihrer Handler gibt.

Ein Promise gilt als _abgeschlossen_, wenn es entweder erfüllt oder abgelehnt ist, aber nicht mehr ausstehend.

![Flussdiagramm, das zeigt, wie der Promise-Zustand zwischen ausstehend, erfüllt und abgelehnt über then/catch-Handler wechselt. Ein ausstehendes Promise kann entweder erfüllt oder abgelehnt werden. Wenn es erfüllt wird, wird der "bei Erfüllung"-Handler oder der erste Parameter der then()-Methode ausgeführt und führt weitere asynchrone Aktionen aus. Wenn es abgelehnt wird, wird der Fehler-Handler entweder als zweiter Parameter der then()-Methode oder als einziger Parameter der catch()-Methode ausgeführt.](promises.png)

Sie werden auch den Begriff "_gelöst_" im Zusammenhang mit Promises hören – dies bedeutet, dass das Promise abgeschlossen oder "festgelegt" ist, um mit dem endgültigen Zustand eines anderen Promises übereinzustimmen, und weiteres Lösen oder Ablehnen keine Wirkung hat. Das Dokument [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) aus dem ursprünglichen Promise-Vorschlag enthält mehr Details zur Promiseterminologie. Im allgemeinen Sprachgebrauch sind "gelöste" Promises oft gleichbedeutend mit "erfüllten" Promises, aber wie in "States and fates" gezeigt, können gelöste Promises auch ausstehend oder abgelehnt sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist bereits _gelöst_, wenn es erstellt wird (weil `resolveOuter` synchron aufgerufen wird), aber es ist mit einem anderen Promise gelöst und wird daher erst eine Sekunde später _erfüllt_, wenn das innere Promise erfüllt wird. In der Praxis erfolgt die "Lösung" oft im Hintergrund und ist nicht beobachtbar, und nur die Erfüllung oder Ablehnung sind es.

> [!NOTE]
> In mehreren anderen Programmiersprachen gibt es Mechanismen für faule Auswertung und das Aufschieben einer Berechnung, die auch als "Promises" bezeichnet werden, z.B. Scheme. Promises in JavaScript repräsentieren Prozesse, die bereits ablaufen und mit Callback-Funktionen verknüpft werden können. Wenn Sie einen Ausdruck faul auswerten möchten, ziehen Sie in Betracht, eine Funktion ohne Argumente zu verwenden, z.B. `f = () => Ausdruck`, um den faul auszuwertenden Ausdruck zu erstellen, und `f()` zum sofortigen Auswerten des Ausdrucks.

`Promise` selbst verfügt über kein erstklassiges Protokoll zur Stornierung, aber Sie können möglicherweise die zugrunde liegende asynchrone Operation direkt stornieren, normalerweise mit [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Promises

Die Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um weitere Aktionen mit einem Promise zu verknüpfen, das abgeschlossen wird. Die `then()`-Methode nimmt bis zu zwei Argumente; das erste Argument ist eine Callback-Funktion für den Erfolgsfall des Promises, und das zweite Argument ist eine Callback-Funktion für den Ablehnungsfall. Die `catch()`- und `finally()`-Methoden rufen intern `then()` auf und machen die Fehlerbehandlung weniger umständlich. Zum Beispiel ist ein `catch()` im Grunde nur ein `then()` ohne Übergabe des Erfüllungs-Handlers. Da diese Methoden Promises zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Wir verwenden folgende Terminologie: _initiales Promise_ ist das Promise, auf dem `then` aufgerufen wird; _neues Promise_ ist das Promise, das von `then` zurückgegeben wird. Die beiden an `then` übergebenen Callback-Funktionen werden entsprechend als _Erfüllungs-Handler_ und _Ablehnungs-Handler_ bezeichnet.

Der Endzustand des initialen Promises bestimmt, welcher Handler ausgeführt wird.

- Wenn das initiale Promise erfüllt ist, wird der Erfüllungs-Handler mit dem Erfüllungswert aufgerufen.
- Wenn das initiale Promise abgelehnt ist, wird der Ablehnungs-Handler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss des Handlers bestimmt den Endzustand des neuen Promises.

- Wenn der Handler einen [thenable](#thenables) Wert zurückgibt, setzt sich das neue Promise in denselben Zustand wie der zurückgegebene Wert.
- Wenn der Handler einen nicht-thenable Wert zurückgibt, wird das neue Promise mit dem zurückgegebenen Wert erfüllt.
- Wenn der Handler einen Fehler wirft, wird das neue Promise mit dem geworfenen Fehler abgelehnt.
- Wenn dem initialen Promise kein entsprechender Handler zugeordnet ist, wird das neue Promise den gleichen Zustand wie das initiale Promise annehmen – das heißt, ohne Ablehnungs-Handler bleibt ein abgelehntes Promise mit demselben Grund abgelehnt.

Zum Beispiel wird im obigen Code, wenn `myPromise` abgelehnt wird, `handleRejectedA` aufgerufen, und wenn `handleRejectedA` normal abgeschlossen wird (ohne einen Fehler zu werfen oder ein abgelehntes Promise zurückzugeben), wird das Promise, das vom ersten `then` zurückgegeben wird, erfüllt, anstatt abgelehnt zu bleiben. Daher, wenn ein Fehler sofort behandelt werden muss, aber wir den Fehlerzustand in der Kette beibehalten möchten, müssen wir irgendeine Art von Fehler im Ablehnungs-Handler werfen. Andererseits, in Abwesenheit eines unmittelbaren Bedarfs, können wir die Fehlerbehandlung bis zum endgültigen `catch()`-Handler auslassen.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Wenn wir [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen verwenden, könnte die Implementierung der Promise-Kette etwa so aussehen:

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
> Für eine schnellere Ausführung sollten alle synchronen Aktionen vorzugsweise innerhalb eines Handlers stattfinden, ansonsten würde es mehrere Ticks benötigen, um alle Handler der Reihe nach auszuführen.

JavaScript pflegt eine [Job-Warteschlange](/de/docs/Web/JavaScript/Reference/Execution_model). Jedes Mal wählt JavaScript einen Job aus der Warteschlange aus und führt ihn vollständig aus. Die Jobs werden vom Executor des `Promise()`-Konstruktors, den an `then` übergebenen Handlern oder einer beliebigen Plattform-API, die ein Promise zurückgibt, definiert. Die Promises in einer Kette repräsentieren die Abhängigkeitsbeziehung zwischen diesen Jobs. Wenn ein Promise abgeschlossen wird, werden die entsprechenden Handler, die damit verknüpft sind, zur Rückseite der Job-Warteschlange hinzugefügt.

Ein Promise kann in mehr als einer Kette teilnehmen. Im folgenden Code bewirkt die Erfüllung von `promiseA`, dass sowohl `handleFulfilled1` als auch `handleFulfilled2` zur Job-Warteschlange hinzugefügt werden. Da `handleFulfilled1` zuerst registriert wird, wird es zuerst ausgeführt.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits abgeschlossenen Promise zugewiesen werden. In diesem Fall wird die Aktion sofort ans Ende der Job-Warteschlange angehängt und wird ausgeführt, sobald alle bestehenden Jobs abgeschlossen sind. Daher findet eine Aktion für ein bereits "abgeschlossenes" Promise erst statt, nachdem der aktuelle synchrone Code abgeschlossen ist und mindestens ein Schleifen-Tick vergangen ist. Dies garantiert, dass Promise-Aktionen asynchron sind.

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

Das JavaScript-Ökosystem hatte viele Promise-Implementierungen lange bevor es Teil der Sprache wurde. Obwohl sie intern unterschiedlich dargestellt werden, implementieren alle Promise-ähnlichen Objekte mindestens das _Thenable_-Interface. Ein Thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode, die mit zwei Callback-Funktionen aufgerufen wird: eine für den Fall, dass das Promise erfüllt wird, und eine für den Fall, dass es abgelehnt wird. Promises sind ebenfalls Thenables.

Um mit den bestehenden Promise-Implementierungen zusammenzuarbeiten, erlaubt die Sprache die Verwendung von Thenables anstelle von Promises. Zum Beispiel wird [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur Promises auflösen, sondern auch Thenables zurückverfolgen.

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

Die `Promise`-Klasse bietet vier statische Methoden, um die asynchrone Aufgaben[Konkurrenz](https://en.wikipedia.org/wiki/Concurrent_computing) zu erleichtern:

- {{jsxref("Promise.all()")}}
  - : Erfüllt sich, wenn **alle** der Promises erfüllt sind; lehnt ab, wenn **irgendwelche** der Promises abgelehnt werden.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt sich, wenn **alle** Promises abgeschlossen sind.
- {{jsxref("Promise.any()")}}
  - : Erfüllt sich, wenn **irgendwelche** der Promises erfüllt sind; lehnt ab, wenn **alle** der Promises abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Schließt ab, wenn **irgendwelche** der Promises abgeschlossen sind. Mit anderen Worten, erfüllt sich, wenn eine der Promises erfüllt ist; lehnt ab, wenn eine der Promises abgelehnt wird.

All diese Methoden nehmen ein [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises an ([Thenables](#thenables), um genau zu sein) und geben ein neues Promise zurück. Sie alle unterstützen Subklassenbildung, was bedeutet, dass sie auf Unterklassen von `Promise` aufgerufen werden können, und das Ergebnis wird ein Promise des Subklassentyps sein. Dazu muss der Konstruktor der Unterklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren – eine einzelne `executor`-Funktion akzeptieren, die mit den `resolve`- und `reject`-Callbacks als Parameter aufgerufen werden kann. Die Unterklasse muss auch eine statische `resolve`-Methode haben, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte zu Promises aufzulösen.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "einzeln-threaded")}} ist, sodass zu einem bestimmten Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl die Kontrolle zwischen verschiedenen Promises wechseln kann, was die Ausführung der Promises konkurrierend erscheinen lässt. [Parallelausführung](https://en.wikipedia.org/wiki/Parallel_computing) in JavaScript kann nur durch [Worker-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu umwickeln, die nicht bereits Promises unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus Promise-Methoden zu konstruieren.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises der Eingabe erfüllt sind (einschließlich wenn ein leeres Iterable übergeben wird) und liefert ein Array der Erfüllungswerte. Es lehnt ab, wenn eines der Eingabepromises ablehnt, mit dem ersten Ablehnungsgrund.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle der Eingabepromises abgeschlossen sind (einschließlich wenn ein leeres Iterable übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes Promises beschreiben.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn eines der Eingabepromises erfüllt ist, mit diesem ersten Erfüllungswert. Es lehnt ab, wenn alle der Eingabepromises ablehnen (einschließlich wenn ein leeres Iterable übergeben wird), mit einem {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise schließt mit dem endgültigen Zustand des ersten Promises ab, das abgeschlossen wird.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem gegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem gegebenen Wert aufgelöst ist. Wenn der Wert ein Thenable ist (d.h. eine `then`-Methode hat), wird das zurückgegebene Promise diesem Thenable "folgen" und seinen endgültigen Zustand übernehmen; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Nimmt eine beliebige Art von Callback (gibt zurück oder wirft, synchron oder asynchron) und umwickelt dessen Ergebnis in einem `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen enthält, um es aufzulösen oder abzulehnen, entsprechend den beiden Parametern, die an den Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Promise`-Instanzen ist der anfängliche Wert der {{jsxref("Promise/Promise", "Promise")}}-Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Hängt einen Ablehnungs-Handler-Callback an das Promise an und gibt ein neues Promise zurück, das zum Rückgabewert des Callbacks auflöst, wenn es aufgerufen wird, oder zu seinem ursprünglichen Erfüllungswert, wenn das Promise stattdessen erfüllt ist.
- {{jsxref("Promise.prototype.finally()")}}
  - : Hängt einen Handler an das Promise an und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst wird. Der Handler wird aufgerufen, wenn das Promise abgeschlossen ist, egal ob erfüllt oder abgelehnt.
- {{jsxref("Promise.prototype.then()")}}
  - : Hängt Erfüllungs- und Ablehnungs-Handler an das Promise an und gibt ein neues Promise zurück, das zum Rückgabewert des aufgerufenen Handlers auflöst oder zum ursprünglichen beendeten Wert, wenn das Promise nicht behandelt wurde (d.h. wenn der relevante Handler `onFulfilled` oder `onRejected` keine Funktion ist).

## Beispiele

### Grundlegendes Beispiel

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

### Beispiel mit unterschiedlichen Situationen

Dieses Beispiel zeigt unterschiedliche Techniken zur Nutzung der Promise-Fähigkeiten und unterschiedliche Situationen, die auftreten können. Um dies zu verstehen, scrollen Sie zunächst zum unteren Ende des Codeblocks und untersuchen Sie die Promise-Kette. Nach der Bereitstellung eines anfänglichen Promises kann eine Kette von Promises folgen. Die Kette besteht aus `.then()`-Aufrufen und hat typischerweise (aber nicht notwendigerweise) ein einzelnes `.catch()` am Ende, optional gefolgt von `.finally()`. In diesem Beispiel wird die Promise-Kette von einer selbstgeschriebenen `new Promise()`-Konstruktion initiiert; in der Praxis beginnen Promise-Ketten jedoch häufig mit einer API-Funktion (von jemand anderem geschrieben), die ein Promise zurückgibt.

Die Beispiel-Funktion `tetheredGetNumber()` zeigt, dass ein Promise-Generator das `reject()` verwenden wird, während er einen asynchronen Aufruf einrichtet, oder innerhalb des Callbacks, oder beides. Die Funktion `promiseGetWord()` veranschaulicht, wie eine API-Funktion ein Promise auf selbständige Weise generieren und zurückgeben könnte.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das ist erzwungen, weil eine Promise-Kette alle `.then()`-Promises durchläuft, auch nach einem Fehler, und ohne `throw` würde der Fehler als "behoben" erscheinen. Dies ist mühsam, und aus diesem Grund ist es üblich, `onRejected` während der gesamten Kette von `.then()`-Promises auszulassen und lediglich ein einzelnes `onRejected` im finalen `catch()` zu verwenden.

Dieser Code kann unter NodeJS ausgeführt werden. Das Verständnis wird erhöht, indem man die Fehler tatsächlich auftreten sieht. Um mehr Fehler zu erzwingen, ändern Sie die `threshold`-Werte.

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

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die Methode `testPromise()` wird jedes Mal aufgerufen, wenn der {{HTMLElement("button")}} geklickt wird. Sie erstellt ein Promise, das erfüllt wird, indem [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verwendet wird, um die Promise-Anzahl (eine von 1 beginnende Zahl) jede 1-3 Sekunden zufällig zu erzielen. Der `Promise()`-Konstruktor wird verwendet, um das Promise zu erstellen.

Die Erfüllung des Promises wird protokolliert, durch einen Erfüllungs-Callback, der mit {{jsxref("Promise/then", "p1.then()")}} gesetzt wird. Einige Protokolle zeigen, wie der synchrone Teil der Methode vom asynchronen Abschluss des Promises entkoppelt ist.

Indem Sie den Button mehrmals in kurzer Zeit anklicken, sehen Sie sogar, wie die verschiedenen Promises nacheinander erfüllt werden.

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

Ein weiteres Beispiel für die Verwendung von `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zum Laden eines Bildes wird unten gezeigt.
Jeder Schritt ist kommentiert und erlaubt Ihnen, die Promise- und XHR-Architektur genau zu verfolgen.

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

### Verfolgung des Inkumbenten-Einstellungsobjekts

Ein Einstellungsobjekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen beim Ausführen von JavaScript-Code bereitstellt. Dazu gehören das Realm und die Modulkarten sowie HTML-spezifische Informationen wie der Ursprung. Das Inkumbenten-Einstellungsobjekt wird verfolgt, um sicherzustellen, dass der Browser weiß, welches für ein bestimmtes Stück Benutzercode verwendet werden soll.

Um sich dies besser vorzustellen, können wir einen genaueren Blick darauf werfen, wie das Realm ein Problem darstellen könnte. Ein **Realm** kann grob als das globale Objekt betrachtet werden. Das Besondere an Realms ist, dass sie alle notwendigen Informationen zum Ausführen von JavaScript-Code enthalten. Dazu gehören Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Einstellungsobjekt hat seine eigene "Kopie" dieser Objekte, die nicht geteilt werden. Das kann in Bezug auf Promises zu unerwartetem Verhalten führen. Um dies zu umgehen, verfolgen wir etwas, das **Inkumbenter-Einstellungsobjekt** genannt wird. Dies repräsentiert informationen, die spezifisch für den Kontext des Benutzercodes sind, der für einen bestimmten Funktionsaufruf verantwortlich ist.

Um dies noch weiter zu verdeutlichen, können wir betrachten, wie ein im Dokument eingebettetes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) mit seinem Host kommuniziert. Da alle Web-APIs sich des Inkumbenten-Einstellungsobjekts bewusst sind, funktioniert Folgendes in allen Browsern:

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

Dasselbe Konzept gilt für Promises. Wenn wir das obige Beispiel ein wenig modifizieren, erhalten wir Folgendes:

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

Wenn wir dies ändern, sodass das `<iframe>` im Dokument auf Nachrichten lauscht, können wir den Effekt des Inkumbenten-Einstellungsobjekts beobachten:

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

Im obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das Inkumbenten-Einstellungsobjekt verfolgt wird. Denn ohne die Verfolgung des Inkumbenten könnten wir möglicherweise die falsche Umgebung zum Senden der Nachricht verwenden.

> [!NOTE]
> Aktuell ist die Verfolgung des Inkumbenten-Realms in Firefox vollständig implementiert und hat teilweise Implementierungen in Chrome und Safari.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Leitfaden zur Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [JavaScript Promises: eine Einführung](https://web.dev/articles/promises) auf web.dev (2013)
- [Rückrufe, Promises und Coroutinen: Asynchrone Programmiermuster in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Slideshow von Domenic Denicola (2011)
