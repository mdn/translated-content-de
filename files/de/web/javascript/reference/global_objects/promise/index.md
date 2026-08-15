---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: d14bee540b5305ddeb93969618ba05102b648bb6
---

Das **`Promise`**-Objekt repräsentiert den Abschluss (oder das Scheitern) einer asynchronen Operation und dessen resultierenden Wert.

Um zu erfahren, wie Promises funktionieren und wie Sie sie verwenden können, empfehlen wir Ihnen, zunächst [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Platzhalter für einen Wert, der möglicherweise noch nicht bekannt ist, wenn das Promise erstellt wird. Es ermöglicht Ihnen, Handler mit dem erfolgreichen Wert oder dem Grund des Scheiterns einer asynchronen Aktion zu verknüpfen. Dies lässt asynchrone Methoden Werte zurückgeben wie synchrone Methoden: Anstatt den endgültigen Wert direkt zurückzugeben, gibt die asynchrone Methode ein _Promise_ zurück, das verspricht, den Wert irgendwann in der Zukunft bereitzustellen.

Ein `Promise` befindet sich in einem der folgenden Zustände:

- _pending_: Anfangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: Bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: Bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines schwebenden Promises kann entweder _fulfilled_ mit einem Wert oder _rejected_ mit einem Grund (Fehler) sein. Wenn eine dieser Optionen eintritt, werden die mit der `then`-Methode des Promises verbundenen Handler aufgerufen. Wenn das Promise bereits erfüllt oder abgelehnt wurde, wenn ein entsprechender Handler angehängt wird, wird der Handler dennoch aufgerufen. Es gibt also keinen Wettlauf zwischen dem Abschluss einer asynchronen Operation und dem Anfügen ihrer Handler.

Ein Promise gilt als _settled_, wenn es entweder erfüllt oder abgelehnt ist, aber nicht mehr schwebend.

![Flussdiagramm, das zeigt, wie die Promise-Zustände zwischen schwebend, erfüllt und abgelehnt über dann/catch-Handler wechseln. Ein schwebendes Promise kann entweder erfüllt oder abgelehnt werden. Wenn es erfüllt wird, wird der "bei Erfüllung"-Handler oder das erste Argument der then()-Methode ausgeführt und führt weitere asynchrone Aktionen aus. Wenn es abgelehnt wird, wird der Fehler-Handler entweder als zweites Argument der then()-Methode oder als einziges Argument der catch()-Methode ausgeführt.](promises.png)

Sie werden auch den Begriff _resolved_ in Verbindung mit Promises hören — dies bedeutet, dass das Promise sich im Zustand "settled" befindet oder "festgelegt" ist, um den endgültigen Zustand eines anderen Promises wiederzugeben, und eine weitere Lösung oder Ablehnung keinen Effekt mehr hat. Das Dokument [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) aus dem ursprünglichen Promise-Vorschlag enthält weitere Details zur Terminologie der Promises. Umgänglich sind "resolved" Promises oft gleichbedeutend mit "fulfilled" Promises, aber wie im Abschnitt "States and fates" dargestellt, können resolved Promises auch schwebend oder abgelehnt sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist bereits _resolved_, wenn es erstellt wird (weil `resolveOuter` synchron aufgerufen wird), aber es ist mit einem anderen Promise resolved und wird daher erst eine Sekunde später _fulfilled_, wenn das innere Promise erfüllt wird. In der Praxis geschieht die "Resolution" oft hinter den Kulissen und ist nicht sichtbar, und nur seine Erfüllung oder Ablehnung sind sichtbar.

> [!NOTE]
> Einige andere Sprachen haben Mechanismen zur verzögerten Auswertung und Verschiebung einer Berechnung, die sie ebenfalls "Promises" nennen, z. B. Scheme. Promises in JavaScript repräsentieren bereits laufende Prozesse, die mit Callback-Funktionen verkettet werden können. Wenn Sie einen Ausdruck verzögert auswerten möchten, sollten Sie eine Funktion ohne Argumente in Betracht ziehen, z. B. `f = () => expression`, um den verzögert ausgewerteten Ausdruck zu erstellen, und `f()`, um den Ausdruck sofort auszuwerten.

`Promise` selbst verfügt über kein erstklassiges Protokoll zur Stornierung, aber Sie können möglicherweise direkt die zugrunde liegende asynchrone Operation abbrechen, normalerweise mit [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Promises

Die Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um eine weitere Aktion mit einem settled Promise zu verknüpfen. Die `then()`-Methode nimmt bis zu zwei Argumente an; das erste Argument ist eine Callback-Funktion für den Fall, dass das Promise erfüllt wird, und das zweite Argument ist eine Callback-Funktion für den Fall, dass das Promise abgelehnt wird. Die `catch()`- und `finally()`-Methoden rufen intern `then()` auf und machen die Fehlerbehandlung weniger ausführlich. Zum Beispiel ist ein `catch()` im Grunde nur ein `then()` ohne den Erfüllungs-Handler zu übergeben. Da diese Methoden Promises zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Wir verwenden die folgende Terminologie: _initiales Promise_ ist das Promise, auf dem `then` aufgerufen wird; _neues Promise_ ist das von `then` zurückgegebene Promise. Die beiden an `then` übergebenen Callbacks werden als _Erfüllungs-Handler_ bzw. _Ablehnungs-Handler_ bezeichnet.

Der settled Zustand des initialen Promises bestimmt, welcher Handler ausgeführt wird.

- Wenn das initiale Promise erfüllt ist, wird der Erfüllungs-Handler mit dem Erfüllungswert aufgerufen.
- Wenn das initiale Promise abgelehnt ist, wird der Ablehnungs-Handler mit dem Grund der Ablehnung aufgerufen.

Der Abschluss des Handlers bestimmt den settled Zustand des neuen Promises.

- Wenn der Handler einen [thenable](#thenables) Wert zurückgibt, setzt sich das neue Promise im selben Zustand wie der zurückgegebene Wert.
- Wenn der Handler einen nicht-thenable Wert zurückgibt, wird das neue Promise mit dem zurückgegebenen Wert erfüllt.
- Wenn der Handler einen Fehler auslöst, wird das neue Promise mit dem ausgelösten Fehler abgelehnt.
- Wenn das initiale Promise keinen entsprechenden Handler angehängt hat, wird das neue Promise denselben Zustand wie das initiale Promise annehmen — das heißt, ohne einen Ablehnungs-Handler bleibt ein abgelehntes Promise mit demselben Grund abgelehnt.

Zum Beispiel wird im obigen Code, wenn `myPromise` abgelehnt wird, `handleRejectedA` aufgerufen, und wenn `handleRejectedA` normal (ohne Auslösen oder Zurückgeben eines abgelehnten Promises) abgeschlossen wird, wird das Promise, das durch das erste `then` zurückgegeben wird, erfüllt, anstatt abgelehnt zu bleiben. Wenn ein Fehler sofort gehandhabt werden muss, aber der Fehlerzustand in der Kette beibehalten werden soll, muss im Ablehnungs-Handler ein Fehler irgendeiner Art ausgelöst werden. Andererseits können wir bei fehlendem sofortigen Bedarf die Fehlerbehandlung bis zum finalen `catch()`-Handler aufschieben.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Wenn Sie [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen verwenden, könnte die Implementierung der Promise-Kette etwa so aussehen:

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
> Für eine schnellere Ausführung sollten alle synchronen Aktionen vorzugsweise innerhalb eines Handlers durchgeführt werden, andernfalls würde es mehrere Ticks dauern, um alle Handler in Folge auszuführen.

JavaScript pflegt eine [Aufgaben-Warteschlange](/de/docs/Web/JavaScript/Reference/Execution_model). Jedes Mal wählt JavaScript eine Aufgabe aus der Warteschlange aus und führt sie vollständig aus. Die Aufgaben werden vom Executor des `Promise()`-Konstruktors, den an `then` übergebenen Handlern oder einer beliebigen Plattform-API definiert, die ein Promise zurückgibt. Die Promises in einer Kette repräsentieren die Abhängigkeitsbeziehung zwischen diesen Aufgaben. Wenn ein Promise erfüllt wird, werden die jeweiligen damit verbundenen Handler an das Ende der Aufgaben-Warteschlange angehängt.

Ein Promise kann an mehr als einer Kette teilnehmen. Im folgenden Code bewirkt die Erfüllung von `promiseA`, dass sowohl `handleFulfilled1` als auch `handleFulfilled2` zur Aufgaben-Warteschlange hinzugefügt werden. Da `handleFulfilled1` zuerst registriert ist, wird es zuerst ausgeführt.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits erfüllten Promise zugewiesen werden. In diesem Fall wird die Aktion sofort an das Ende der Aufgaben-Warteschlange angehängt und wird ausgeführt, wenn alle bestehenden Aufgaben abgeschlossen sind. Daher tritt eine Aktion für ein bereits "erledigtes" Promise erst auf, nachdem der aktuelle synchrone Code abgeschlossen ist und mindestens ein Schleifen-Tick vergangen ist. Dies garantiert, dass Promise-Aktionen asynchron sind.

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

Das JavaScript-Ökosystem hatte viele Promise-Implementierungen, lange bevor es Teil der Sprache wurde. Trotz interner Unterschiede implementieren alle Promise-ähnlichen Objekte mindestens die _Thenable_-Schnittstelle. Ein Thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) Methode, die mit zwei Callbacks aufgerufen wird: eines für den Fall, dass das Promise erfüllt wird, und eines für den Fall, dass es abgelehnt wird. Promises sind ebenfalls Thenables.

Um mit vorhandenen Promise-Implementierungen interoperieren zu können, erlaubt die Sprache die Verwendung von Thenables anstelle von Promises. Zum Beispiel wird [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur Promises auflösen, sondern auch Thenables verfolgen.

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

Die `then()`-Methode ist verantwortlich für die Planung der Ausführung der bereitgestellten `onFulfilled`- und `onRejected`-Callbacks. Ihre Semantik, einschließlich Fehlerbehandlung und Asynchronität, ist in der [Promises/A+ Spezifikation](https://promisesaplus.com/) genau definiert, und wir werden sie hier nicht wiederholen. Es ist sehr selten, dass Sie selbst ein Thenable implementieren müssen; selbst wenn Sie keine nativen Promises verwenden, würden Sie wahrscheinlich eine Promise-Bibliothek wie [Bluebird](https://www.npmjs.com/package/bluebird) verwenden.

### Promise-Konkurrenz

Die `Promise`-Klasse bietet vier statische Methoden, um die gleichzeitige Bearbeitung asynchroner Aufgaben zu erleichtern:

- {{jsxref("Promise.all()")}}
  - : Erfüllt sich, wenn **alle** der Promises erfüllt sind; lehnt ab, wenn **irgendeines** der Promises abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt sich, wenn **alle** Promises erledigt sind.
- {{jsxref("Promise.any()")}}
  - : Erfüllt sich, wenn **irgendeines** der Promises erfüllt wird; lehnt ab, wenn **alle** der Promises abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Erledigt sich, wenn **irgendeines** der Promises erledigt ist. Mit anderen Worten, erfüllt sich, wenn irgendeines der Promises erfüllt wird; lehnt ab, wenn irgendeines der Promises abgelehnt wird.

Alle diese Methoden nehmen ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises ([Thenables](#thenables), um genau zu sein) und geben ein neues Promise zurück. Sie unterstützen alle Subklassierung, was bedeutet, dass sie auf Unterklassen von `Promise` aufgerufen werden können, und das Ergebnis wird ein Promise des Unterklassentyps sein. Dazu muss der Konstruktor der Unterklasse dieselbe Signatur wie der des [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktors implementieren — eine einzelne `executor`-Funktion, die mit den `resolve`- und `reject`-Callbacks als Parameter aufgerufen werden kann, akzeptieren. Die Unterklasse muss auch eine statische `resolve`-Methode haben, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte zu Promises aufzulösen.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "einzelsträngig")}} ist, so dass zu einem gegebenen Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl die Kontrolle zwischen verschiedenen Promises wechseln kann, was die Ausführung der Promises scheinbar gleichzeitig erscheinen lässt. [Parallele Ausführung](https://en.wikipedia.org/wiki/Parallel_computing) in JavaScript kann nur durch [Worker-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu ummanteln, die nicht bereits Promises unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von Promise-Methoden zu konstruieren.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe an und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn alle Promises der Eingabe erfüllt sind (einschließlich wenn ein leeres iterierbares Objekt übergeben wird), mit einem Array der Erfüllungswerte. Es wird abgelehnt, wenn eines der eingereichten Promises abgelehnt wird, mit diesem ersten Ablehnungsgrund.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe an und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn alle der eingereichten Promises erledigt sind (einschließlich wenn ein leeres iterierbares Objekt übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes einzelnen Promises beschreiben.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe an und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn eines der eingereichten Promises erfüllt wird, mit diesem ersten Erfüllungswert. Es lehnt ab, wenn alle der eingereichten Promises abgelehnt werden (einschließlich wenn ein leeres iterierbares Objekt übergeben wird), mit einem {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe an und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird mit dem endgültigen Zustand des ersten erfüllten Promises abgewickelt.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem angegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem angegebenen Wert aufgelöst wurde. Wenn der Wert ein Thenable ist (d.h. eine `then`-Methode hat), wird das zurückgegebene Promise diesem Thenable "folgen" und dessen endgültigen Zustand annehmen; ansonsten wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Nimmt eine Callback-Funktion jeglicher Art (gibt zurück oder löst Fehler aus, synchron oder asynchron) und ummantelt deren Ergebnis in einem `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen enthält, um es zu erfüllen oder abzulehnen, entsprechend den zwei Parametern, die an den Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Promise`-Instanzen ist der Anfangswert der {{jsxref("Promise/Promise", "Promise")}}-Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Fügt einen Ablehnungs-Handler-Callback zum Promise hinzu und gibt ein neues Promise zurück, das sich auf den Rückgabewert des Callbacks auflöst, wenn es aufgerufen wird, oder auf seinen ursprünglichen Erfüllungswert, wenn das Promise stattdessen erfüllt wurde.
- {{jsxref("Promise.prototype.finally()")}}
  - : Fügt einen Handler zum Promise hinzu und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst wird. Der Handler wird aufgerufen, wenn das Promise gefestigt ist, unabhängig davon, ob erfüllt oder abgelehnt.
- {{jsxref("Promise.prototype.then()")}}
  - : Fügt Erfüllungs- und Ablehnungs-Handler zum Promise hinzu und gibt ein neues Promise zurück, das sich auf den Rückgabewert des aufgerufenen Handlers auflöst, oder auf seinen ursprünglichen gefestigten Wert, wenn das Promise nicht behandelt wurde (d.h. wenn der relevante Handler `onFulfilled` oder `onRejected` keine Funktion ist).

## Beispiele

### Einfaches Beispiel

In diesem Beispiel verwenden wir `setTimeout(...)`, um asynchronen Code zu simulieren. Tatsächlich werden Sie wahrscheinlich etwas wie XHR oder eine HTML-API verwenden.

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

### Beispiel mit diversen Situationen

Dieses Beispiel zeigt diverse Techniken zur Nutzung der Promise-Fähigkeiten und verschiedene Situationen, die auftreten können. Um dies zu verstehen, scrollen Sie zunächst ans Ende des Codeblocks und betrachten Sie die Promise-Kette. Nach Bereitstellung eines anfänglichen Promises kann eine Kette von Promises folgen. Die Kette besteht aus `.then()`-Aufrufen und hat typischerweise (aber nicht notwendigerweise) ein einzelnes `.catch()` am Ende, optional gefolgt von `.finally()`. In diesem Beispiel wird die Promise-Kette durch ein kundenspezifisch geschriebenes `new Promise()` Konstrukt initiiert; in der Praxis beginnen Promise-Ketten jedoch eher mit einer API-Funktion (von jemand anderem geschrieben), die ein Promise zurückgibt.

Die Beispielsunktion `tetheredGetNumber()` zeigt, dass ein Promise-Generator `reject()` verwenden wird, während er einen asynchronen Aufruf einrichtet oder innerhalb des Callbacks oder beides. Die Funktion `promiseGetWord()` veranschaulicht, wie eine API-Funktion ein Promise auf selbständige Weise generieren und zurückgeben könnte.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das ist erzwungen, weil eine Promise-Kette durch alle `.then()` Promises geht, selbst nach einem Fehler, und ohne das `throw` würde der Fehler scheinbar "behoben" aussehen. Das ist eine Umständlichkeit, und aus diesem Grund wird `onRejected` häufig in der gesamten Kette von `.then()`-Promises weggelassen, und es gibt nur ein einziges `onRejected` im finalen `catch()`.

Dieser Code kann unter NodeJS ausgeführt werden. Das Verständnis wird durch die tatsächliche Beobachtung der Fehler verstärkt. Um mehr Fehler zu erzwingen, ändern Sie die `threshold`-Werte.

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

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die `testPromise()`-Methode wird jedes Mal aufgerufen, wenn der {{HTMLElement("button")}} geklickt wird. Sie erstellt ein Promise, das durch Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) mit der Promise-Zählung (Zahl startend bei 1) alle 1-3 Sekunden zufällig erfüllt wird. Der `Promise()`-Konstruktor wird verwendet, um das Promise zu erstellen.

Die Erfüllung des Promises wird über einen Erfüllungs-Callback, der mit {{jsxref("Promise/then", "p1.then()")}} gesetzt wird, protokolliert. Einige Protokolle zeigen, wie der synchrone Teil der Methode vom asynchronen Abschluss des Promises entkoppelt ist.

Indem Sie den Button mehrmals in kurzer Zeit klicken, können Sie sogar beobachten, wie die verschiedenen Promises nacheinander erfüllt werden.

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

Ein weiteres Beispiel mit `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), um ein Bild zu laden, wird unten gezeigt. Jeder Schritt ist kommentiert und ermöglicht es Ihnen, die Architektur von Promise und XHR genau zu verfolgen.

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

### Verfolgung des zuständigen Einstellungsobjekts

Ein Einstellungsobjekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen bereitstellt, wenn JavaScript-Code ausgeführt wird. Dies beinhaltet den Realm und die Modul-Karte sowie HTML-spezifische Informationen wie den Ursprung. Das zuständige Einstellungsobjekt wird verfolgt, um sicherzustellen, dass der Browser weiß, welches für ein bestimmtes Stück Benutzercode zu verwenden ist.

Um sich dies besser vorzustellen, können wir uns ansehen, wie der Realm ein Problem darstellen könnte. Ein **Realm** kann grob als das globale Objekt betrachtet werden. Was Reiche einzigartig macht, ist, dass sie alle notwendigen Informationen zur Ausführung von JavaScript-Code enthalten. Dazu gehören Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Einstellungsobjekt hat seine eigene "Kopie" dieser und sie werden nicht geteilt. Das kann unerwartetes Verhalten in Bezug auf Promises verursachen. Um dies zu umgehen, verfolgen wir etwas, das das **zuständige Einstellungsobjekt** genannt wird. Dies stellt Informationen dar, die spezifisch für den Kontext des Benutzercodes sind, der für einen bestimmten Funktionsaufruf verantwortlich ist.

Um dies weiter zu veranschaulichen, können wir uns ansehen, wie ein in ein Dokument eingebettetes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) mit seinem Host kommuniziert. Da alle Web-APIs sich des zuständigen Einstellungsobjekts bewusst sind, funktioniert Folgendes in allen Browsern:

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

Wenn wir dies ändern, so dass das `<iframe>` im Dokument auf Post-Nachrichten wartet, können wir den Effekt des zuständigen Einstellungsobjekts beobachten:

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

Im obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das zuständige Einstellungsobjekt verfolgt wird. Das liegt daran, dass wir ohne Verfolgung des Zuständigen am Ende die falsche Umgebung verwenden könnten, um die Nachricht zu senden.

> [!NOTE]
> Derzeit ist die Verfolgung des zuständigen Realm vollständig in Firefox implementiert und hat teilweise Implementierungen in Chrome und Safari.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises)-Leitfaden
- [Promises/A+ Specification](https://promisesaplus.com/)
- [JavaScript Promises: an introduction](https://web.dev/articles/promises) auf web.dev (2013)
- [Callbacks, Promisen, and Coroutines: Asynchronous Programming Patterns in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Präsentation von Domenic Denicola (2011)
