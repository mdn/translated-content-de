---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{JSRef}}

Das **`Promise`**-Objekt repräsentiert den endgültigen Abschluss (oder das Scheitern) einer asynchronen Operation und deren resultierenden Wert.

Um zu lernen, wie Promises funktionieren und wie Sie sie verwenden können, empfehlen wir Ihnen zunächst [Promisen verwenden](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist eine Stellvertreter für einen Wert, der möglicherweise nicht bekannt ist, wenn das Promise erstellt wird. Es ermöglicht Ihnen, Handler mit dem eventuellen Erfolg oder Misserfolg eines asynchronen Vorgangs zu verknüpfen. Dadurch können asynchrone Methoden Werte ähnlich wie synchrone Methoden zurückgeben: Anstatt sofort den Endwert zurückzugeben, gibt die asynchrone Methode ein _Versprechen_ zurück, den Wert irgendwann in der Zukunft zu liefern.

Ein `Promise` befindet sich in einem dieser Zustände:

- _pending_: Ausgangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines ausstehenden Promises kann entweder mit einem Wert erfüllt oder mit einem Grund (Fehler) abgelehnt werden.
Wenn eine dieser Optionen eintritt, werden die zugehörigen Handler, die durch die `then`-Methode eines Promises in die Warteschlange gestellt wurden, aufgerufen. Wenn das Promise bereits erfüllt oder abgelehnt ist, wenn ein entsprechender Handler angehängt wird, wird der Handler aufgerufen, sodass es keine Rennbedingung zwischen dem Abschluss eines asynchronen Vorgangs und dem Anfügen seiner Handler gibt.

Ein Promise wird als _abgeschlossen_ bezeichnet, wenn es entweder erfüllt oder abgelehnt ist, aber nicht ausstehend.

![Flussdiagramm, das zeigt, wie der Promise-Zustand zwischen ausstehend, erfüllt und abgelehnt über then/catch-Handler wechselt. Ein ausstehendes Promise kann entweder erfüllt oder abgelehnt werden. Wenn es erfüllt ist, wird der "bei Erfüllung"-Handler oder der erste Parameter der then()-Methode ausgeführt und führt weitere asynchrone Aktionen durch. Wenn es abgelehnt wird, wird der Fehler-Handler ausgeführt, entweder als zweiter Parameter der then()-Methode oder als einziger Parameter der catch()-Methode.](promises.png)

Sie werden auch den Begriff _resolved_ im Zusammenhang mit Promises hören — dies bedeutet, dass das Promise abgeschlossen oder "festgelegt" ist, um den endgültigen Zustand eines anderen Promises anzunehmen, und weiteres Lösen oder Ablehnen hat keinen Effekt. Das Dokument [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) aus dem ursprünglichen Promise-Vorschlag enthält weitere Details zur Promise-Terminologie. Im Sprachgebrauch sind "resolved" Promises oft gleichbedeutend mit "fulfilled" Promises, aber wie in "States and fates" veranschaulicht, können "resolved" Promises auch ausstehend oder abgelehnt sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist bereits _resolved_ zu dem Zeitpunkt, zu dem es erstellt wird (weil `resolveOuter` synchron aufgerufen wird), aber es wird mit einem anderen Promise gelöst und wird daher erst eine Sekunde später _fulfilled_, wenn das innere Promise erfüllt wird. In der Praxis erfolgt die "Lösung" häufig im Hintergrund und ist nicht beobachtbar, und nur die Erfüllung oder Ablehnung sind sichtbar.

> [!NOTE]
> Einige andere Sprachen haben Mechanismen zur Lazy-Evaluation und zum Aufschieben einer Berechnung, die sie ebenfalls "Promises" nennen, z. B. Scheme. Promises in JavaScript repräsentieren Prozesse, die bereits stattfinden und mit Callback-Funktionen verknüpft werden können. Wenn Sie einen Ausdruck lazy evaluieren möchten, sollten Sie eine Funktion ohne Argumente verwenden, z. B. `f = () => expression`, um den lazy bewerteten Ausdruck zu erstellen und `f()`, um den Ausdruck sofort zu evaluieren.

`Promise` selbst hat kein erstklassiges Protokoll zur Stornierung, aber Sie können möglicherweise direkt die zugrunde liegende asynchrone Operation abbrechen, typischerweise durch Verwendung von [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Promises

Die Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um eine weitere Aktion mit einem Promise zu verknüpfen, das abgeschlossen wird. Die `then()`-Methode nimmt maximal zwei Argumente an; das erste Argument ist eine Callback-Funktion für den Fall, dass das Promise erfüllt wird, und das zweite Argument ist eine Callback-Funktion für den Fall, dass das Promise abgelehnt wird. Die Methoden `catch()` und `finally()` rufen intern `then()` auf und machen die Fehlerbehandlung weniger ausführlich. Zum Beispiel ist ein `catch()` im Grunde nur ein `then()` ohne Übergabe des Erfüllungs-Handlers. Da diese Methoden Promises zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Wir werden die folgende Terminologie verwenden: _initiales Promise_ ist das Promise, bei dem `then` aufgerufen wird; _neues Promise_ ist das Promise, das von `then` zurückgegeben wird. Die beiden an `then` übergebenen Callbacks werden respektive als _Erfüllungs-Handler_ und _Ablehnungs-Handler_ bezeichnet.

Der abgeschlossene Zustand des initialen Promises bestimmt, welcher Handler ausgeführt wird.

- Wenn das anfängliche Promise erfüllt ist, wird der Erfüllungs-Handler mit dem Erfüllungswert aufgerufen.
- Wenn das anfängliche Promise abgelehnt ist, wird der Ablehnungs-Handler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss des Handlers bestimmt den abgeschlossenen Zustand des neuen Promises.

- Wenn der Handler einen [thenable](#thenables) Wert zurückgibt, wird das neue Promise denselben Zustand wie der zurückgegebene Wert einnehmen.
- Wenn der Handler einen nicht-thenable Wert zurückgibt, wird das neue Promise mit dem zurückgegebenen Wert erfüllt.
- Wenn der Handler einen Fehler wirft, wird das neue Promise mit dem geworfenen Fehler abgelehnt.
- Wenn das anfängliche Promise keinen entsprechenden Handler angefügt hat, wird das neue Promise denselben Zustand wie das anfängliche Promise einnehmen — das heißt, ohne Ablehnungs-Handler bleibt ein abgelehntes Promise mit demselben Grund abgelehnt.

Zum Beispiel, im obigen Code, wenn `myPromise` ablehnt, wird `handleRejectedA` aufgerufen, und wenn `handleRejectedA` normal abschließt (ohne Würfeln oder Zurückgeben eines abgelehnten Promises), wird das Promise, das durch das erste `then` zurückgegeben wird, erfüllt, anstatt abgelehnt zu bleiben. Wenn ein Fehler sofort behandelt werden muss, wir aber den Fehlerstatus in der Kette beibehalten möchten, müssen wir im Ablehnungs-Handler einen Fehler irgendeiner Art werfen. Andererseits können wir, wenn kein unmittelbarer Bedarf besteht, die Fehlerbehandlung bis zum letzten `catch()`-Handler aufschieben.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Verwenden von [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen, könnte die Implementierung der Promise-Kette in etwa so aussehen:

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
> Für schnellere Ausführung sollten alle synchronen Aktionen vorzugsweise innerhalb eines Handlers erfolgen, sonst würde es mehrere Ticks dauern, um alle Handler nacheinander auszuführen.

JavaScript verwaltet eine [Job-Warteschlange](/de/docs/Web/JavaScript/Reference/Execution_model). Jedes Mal wählt JavaScript einen Job aus der Warteschlange und führt ihn vollständig aus. Die Jobs werden durch den Executor des `Promise()`-Konstruktors festgelegt, die `then` übergebenen Handler oder eine beliebige Plattform-API, die ein Promise zurückgibt. Die Promises in einer Kette repräsentieren die Abhängigkeitsbeziehung zwischen diesen Jobs. Wenn ein Promise abgeschlossen ist, werden die entsprechenden Handler damit verknüpft und hinten in die Job-Warteschlange aufgenommen.

Ein Promise kann an mehr als einer Kette teilnehmen. Für den folgenden Code wird die Erfüllung von `promiseA` sowohl `handleFulfilled1` als auch `handleFulfilled2` zur Job-Warteschlange hinzufügen. Da `handleFulfilled1` zuerst registriert wird, wird es als erstes ausgeführt.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits abgeschlossenen Promise zugewiesen werden. In diesem Fall wird die Aktion sofort hinten in die Job-Warteschlange aufgenommen und wird ausgeführt, wenn alle vorhandenen Jobs abgeschlossen sind. Daher wird eine Aktion für ein bereits "abgeschlossenes" Promise erst erfolgen, nachdem der aktuelle synchrone Code abgeschlossen ist und mindestens ein Schleifen-Tick vergangen ist. Dies garantiert, dass Promise-Aktionen asynchron sind.

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

Das JavaScript-Ökosystem hatte viele Promise-Implementierungen lange bevor es Teil der Sprache wurde. Trotz unterschiedlicher interner Darstellung implementieren alle Promise-ähnlichen Objekte zumindest das _Thenable_-Interface. Ein Thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode, die mit zwei Callbacks aufgerufen wird: eines für den Fall, dass das Promise erfüllt wird, eines für den Fall, dass es abgelehnt wird. Promises sind ebenfalls Thenables.

Um mit den bestehenden Promise-Implementierungen zu interagieren, erlaubt die Sprache die Verwendung von Thenables anstelle von Promises. Zum Beispiel wird [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur Promises auflösen, sondern auch Thenables verfolgen.

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

Die `Promise`-Klasse bietet vier statische Methoden zur Unterstützung der asynchronen Aufgaben-[Konkurrenz](https://en.wikipedia.org/wiki/Concurrent_computing):

- {{jsxref("Promise.all()")}}
  - : Erfüllt, wenn **alle** der Promises erfüllt werden; lehnt ab, wenn **irgendeines** der Promises abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt, wenn **alle** Promises abgeschlossen sind.
- {{jsxref("Promise.any()")}}
  - : Erfüllt, wenn **irgendeines** der Promises erfüllt wird; lehnt ab, wenn **alle** der Promises abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Wird abgeschlossen, wenn **irgendeines** der Promises abgeschlossen wird. Mit anderen Worten, erfüllt, wenn irgendeines der Promises erfüllt wird; lehnt ab, wenn irgendeines der Promises abgelehnt wird.

All diese Methoden nehmen ein [iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises (um genau zu sein, Thenables) entgegen und geben ein neues Promise zurück. Sie alle unterstützen Vererbung, was bedeutet, dass sie auf Unterklassen von `Promise` aufgerufen werden können, und das Ergebnis wird ein Promise des Unterklassentyps sein. Dazu muss der Konstruktor der Unterklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — der eine einzelne `executor`-Funktion akzeptiert, die mit den `resolve`- und `reject`-Callbacks als Parameter aufgerufen werden kann. Die Unterklasse muss auch eine `resolve`-statische Methode haben, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte zu Promises aufzulösen.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "einzelthreaded")}} ist, sodass zu einem bestimmten Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl die Kontrolle zwischen verschiedenen Promises wechseln kann, wodurch die Ausführung der Promises scheinbar gleichzeitig erfolgt. [Parallelausführung](https://en.wikipedia.org/wiki/Parallel_computing) in JavaScript kann nur über [Worker-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu umschließen, die noch keine Unterstützung für Promises bieten.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von Promise-Methoden zu konstruieren.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises des Inputs erfüllt sind (einschließlich wenn ein leeres Iterable übergeben wird), mit einem Array der Erfüllungswerte. Es wird abgelehnt, wenn eines der Promises des Inputs abgelehnt wird, mit diesem ersten Ablehnungsgrund.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises des Inputs abgeschlossen sind (einschließlich wenn ein leeres Iterable übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes Promises beschreiben.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn eines der Promises des Inputs erfüllt ist, mit diesem ersten Erfüllungswert. Es wird abgelehnt, wenn alle Promises des Inputs abgelehnt werden (einschließlich wenn ein leeres Iterable übergeben wird), mit einem {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird mit dem endgültigen Zustand des ersten Promise abgeschlossen, das sich schließt.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem angegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem angegebenen Wert gelöst wird. Wenn der Wert ein Thenable ist (d.h. eine `then`-Methode hat), wird das zurückgegebene Promise diesem Thenable "folgen" und dessen endgültigen Zustand annehmen; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Nimmt einen Callback jeglicher Art (gibt zurück oder wirft, synchron oder asynchron) und umschließt dessen Ergebnis in ein `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen zum Lösen oder Ablehnen enthält, entsprechend den beiden Parametern, die an den Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Promise`-Instanzen ist der Anfangswert der {{jsxref("Promise/Promise", "Promise")}}-Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der string `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Fügt dem Promise einen Ablehnungs-Handler-Callback hinzu und gibt ein neues Promise zurück, das zum Rückgabewert des Callbacks aufgelöst wird, wenn es aufgerufen wird, oder zu seinem ursprünglichen Erfüllungswert, wenn das Promise stattdessen erfüllt wird.
- {{jsxref("Promise.prototype.finally()")}}
  - : Fügt dem Promise einen Handler hinzu und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst wird. Der Handler wird aufgerufen, wenn das Promise abgeschlossen ist, unabhängig davon, ob es erfüllt oder abgelehnt wurde.
- {{jsxref("Promise.prototype.then()")}}
  - : Fügt Erfüllungs- und Ablehnungs-Handler zum Promise hinzu und gibt ein neues Promise zurück, das zum Rückgabewert des aufgerufenen Handlers aufgelöst wird, oder zu seinem ursprünglich abgeschlossenen Wert, wenn das Promise nicht behandelt wurde (d.h. wenn der entsprechende Handler `onFulfilled` oder `onRejected` keine Funktion ist).

## Beispiele

### Einfaches Beispiel

In diesem Beispiel verwenden wir `setTimeout(...)`, um asynchronen Code zu simulieren.
In der Realität werden Sie wahrscheinlich etwas wie XHR oder eine HTML-API verwenden.

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

Dieses Beispiel zeigt verschiedene Techniken zur Verwendung von Promise-Fähigkeiten und diverse Situationen, die auftreten können. Um dies zu verstehen, scrollen Sie zunächst zum Ende des Codeblocks und untersuchen Sie die Promise-Kette. Bei Bereitstellung eines anfänglichen Promises kann eine Kette von Promises folgen. Die Kette besteht aus `.then()`-Aufrufen und hat typischerweise (aber nicht unbedingt) ein einzelnes `.catch()` am Ende, das optional von `.finally()` gefolgt wird. In diesem Beispiel wird die Promise-Kette durch ein selbst geschriebenes `new Promise()`-Konstrukt initiiert; in der Praxis beginnen Promise-Ketten jedoch häufiger mit einer API-Funktion (die von jemand anderem geschrieben wurde), die ein Promise zurückgibt.

Die Beispiel-Funktion `tetheredGetNumber()` zeigt, dass ein Promise-Generator `reject()` verwenden wird, während er einen asynchronen Aufruf einrichtet, oder innerhalb des Rückrufs, oder beides. Die Funktion `promiseGetWord()` illustriert, wie eine API-Funktion möglicherweise auf unabhängige Weise ein Promise generiert und zurückgibt.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das ist erzwungen, weil eine Promise-Kette durch alle `.then()`-Promises geht, selbst nach einem Fehler, und ohne das `throw` würde der Fehler als "behoben" erscheinen. Das ist eine Herausforderung, weshalb es üblich ist, `onRejected` in der Kette der `.then()`-Promises auszuschließen und ein einzelnes `onRejected` im finalen `catch()` zu haben.

Dieser Code kann unter NodeJS ausgeführt werden. Das Verständnis wird gesteigert, wenn die Fehler tatsächlich auftreten. Um mehr Fehler zu erzwingen, ändern Sie die `threshold`-Werte.

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

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die Methode `testPromise()` wird jedes Mal aufgerufen, wenn die {{HTMLElement("button")}} geklickt wird. Sie erstellt ein Promise, das mit dem [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) zur Promise-Anzahl (eine Zahl, die bei 1 beginnt) jede 1-3 Sekunden zufällig erfüllt wird. Der `Promise()`-Konstruktor wird verwendet, um das Promise zu erstellen.

Die Erfüllung des Promises wird über einen Erfüllungs-Callback protokolliert, der mit {{jsxref("Promise/then", "p1.then()")}} gesetzt wird. Einige Logs zeigen, wie der synchrone Teil der Methode von der asynchronen Erfüllung des Promises entkoppelt ist.

Indem Sie den Button mehrmals in kurzer Zeit klicken, sehen Sie sogar, wie die unterschiedlichen Promises nacheinander erfüllt werden.

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

### Verfolgung des Inhaber-Einstellungsobjekts

Ein Einstellungsobjekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen bereitstellt, wenn JavaScript-Code ausgeführt wird. Dazu gehören das Realm- und das Modulverzeichnis sowie HTML-spezifische Informationen wie der Ursprung. Das Einstellungsobjekt des Inhabers wird verfolgt, um sicherzustellen, dass der Browser weiß, welches für einen bestimmten Benutzer-Code verwendet werden muss.

Um sich dies besser vorzustellen, können wir uns genauer ansehen, wie das Realm ein Problem darstellen könnte. Ein **Realm** kann grob als das globale Objekt betrachtet werden. Was an Realms einzigartig ist, ist, dass sie alle notwendigen Informationen zur Ausführung von JavaScript-Code enthalten. Dazu gehören Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Einstellungsobjekt hat seine eigene "Kopie" dieser und sie werden nicht geteilt. Das kann zu unerwartetem Verhalten in Bezug auf Promises führen. Um dies zu umgehen, verfolgen wir etwas, das als **Inhaber-Einstellungsobjekt** bezeichnet wird. Dies stellt Informationen bereit, die spezifisch für den Kontext des Benutzer-Codes sind, der für einen bestimmten Funktionsaufruf verantwortlich ist.

Um dies weiter zu veranschaulichen, können wir betrachten, wie ein in ein Dokument eingebettetes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) mit seinem Host kommuniziert. Da alle Web-APIs sich des Inhaber-Einstellungsobjekts bewusst sind, wird das Folgende in allen Browsern funktionieren:

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

Dasselbe Konzept gilt für Promises. Wenn wir das obige Beispiel ein wenig ändern, erhalten wir dies:

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

Wenn wir dies so ändern, dass das `<iframe>` im Dokument auf Postnachrichten lauscht, können wir den Effekt des Inhaber-Einstellungsobjekts beobachten:

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

Im obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das Inhaber-Einstellungsobjekt verfolgt wird. Dies liegt daran, dass wir ohne Verfolgung des Inhabers möglicherweise die falsche Umgebung zur Übermittlung der Nachricht verwenden.

> [!NOTE]
> Derzeit ist die Nachverfolgung des Inhaber-Realms vollständig in Firefox implementiert und hat teilweise Implementierungen in Chrome und Safari.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Leitfaden zur Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [JavaScript-Promises: eine Einführung](https://web.dev/articles/promises) auf web.dev (2013)
- [Rückrufe, Promises und Koroutinen: Asynchrone Programmiermuster in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Präsentation von Domenic Denicola (2011)
