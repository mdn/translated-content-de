---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: 710372d69095aaeadfba6c892f3e39ed63df4c54
---

Das **`Promise`** Objekt repräsentiert den zukünftigen Abschluss (oder das Scheitern) einer asynchronen Operation und deren Ergebniswert.

Um zu erfahren, wie Promises funktionieren und wie Sie sie verwenden können, empfehlen wir Ihnen, zuerst [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Stellvertreter für einen Wert, der möglicherweise nicht bekannt ist, wenn das Promise erstellt wird. Es ermöglicht Ihnen, Handler mit dem endgültigen Erfolgswert oder Fehlschlaggrund einer asynchronen Aktion zu verknüpfen. Dies ermöglicht es asynchronen Methoden, Werte wie synchrone Methoden zurückzugeben: Anstatt den Endwert sofort zurückzugeben, gibt die asynchrone Methode ein _Promise_, den Wert zu einem späteren Zeitpunkt bereitzustellen.

Ein `Promise` befindet sich in einem dieser Zustände:

- _pending_: Anfangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines ausstehenden Promises kann entweder mit einem Wert _erfüllt_ oder mit einem Grund (Fehler) _abgelehnt_ werden. Wenn eine dieser Möglichkeiten eintritt, werden die zu einem Promise gehörenden Handler, die von der `then`-Methode in die Warteschlange gestellt wurden, aufgerufen. Wenn das Promise bereits erfüllt oder abgelehnt ist, wenn ein entsprechender Handler angefügt wird, wird der Handler aufgerufen, sodass es keine Rennbedingungen zwischen dem Abschluss einer asynchronen Operation und dem Anfügen der Handler gibt.

Ein Promise gilt als _erledigt_, wenn es entweder erfüllt oder abgelehnt ist, aber nicht mehr ausstehend.

![Flussdiagramm, das zeigt, wie der Promise-Zustand zwischen ausstehend, erfüllt und abgelehnt über then/catch-Handler wechselt. Ein ausstehendes Promise kann entweder erfüllt oder abgelehnt werden. Wenn erfüllt, wird der "bei Erfüllung"-Handler oder der erste Parameter der then()-Methode ausgeführt und führt weitere asynchrone Aktionen durch. Wenn abgelehnt, wird der Fehler-Handler entweder als zweiter Parameter der then()-Methode oder als einziger Parameter der catch()-Methode ausgeführt.](promises.png)

Sie werden auch den Begriff _gelöst_ im Zusammenhang mit Promises hören — das bedeutet, dass das Promise erledigt oder "festgelegt" ist, um dem endgültigen Zustand eines anderen Promises zu entsprechen, und weiteres Lösen oder Ablehnen keine Wirkung hat. Das Dokument [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) aus dem ursprünglichen Promise-Vorschlag enthält weitere Details zur Promise-Terminologie. Im allgemeinen Sprachgebrauch sind "gelöste" Promises oft gleichbedeutend mit "erfüllten" Promises, aber wie in "States and fates" gezeigt, können gelöste Promises auch ausstehend oder abgelehnt sein. Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist bereits _gelöst_, als es erstellt wird (weil `resolveOuter` synchron aufgerufen wird), aber es ist mit einem anderen Promise gelöst und wird daher erst 1 Sekunde später, wenn das innere Promise erfüllt wird, _erfüllt_. In der Praxis wird die "Lösung" oft im Hintergrund durchgeführt und ist nicht beobachtbar, und es sind nur die Erfüllung oder Ablehnung sichtbar.

> [!NOTE]
> Mehrere andere Sprachen haben Mechanismen für faule Auswertung und das Verschieben einer Berechnung, die sie ebenfalls "Promises" nennen, z.B. Scheme. Promises in JavaScript repräsentieren Prozesse, die bereits stattfinden, die mit Callback-Funktionen verkettet werden können. Wenn Sie einen Ausdruck faul auswerten möchten, ziehen Sie in Betracht, eine Funktion ohne Argumente zu verwenden, z.B. `f = () => expression`, um den faulen Ausdruck zu erstellen, und `f()`, um den Ausdruck sofort auszuwerten.

`Promise` selbst hat kein erstklassiges Protokoll für die Stornierung, aber möglicherweise können Sie die zugrunde liegende asynchrone Operation direkt abbrechen, typischerweise mit [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Promises

Die Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}}, und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um weitere Aktionen mit einem Promise zu verknüpfen, das abgeschlossen wird. Die `then()`-Methode nimmt bis zu zwei Argumente an; das erste Argument ist eine Callback-Funktion für den Erfolgsfall des Promises, und das zweite Argument ist eine Callback-Funktion für den Fehlfall. Die `catch()`- und `finally()`-Methoden rufen intern `then()` auf und machen die Fehlerbehandlung weniger ausführlich. Zum Beispiel ist ein `catch()` eigentlich nur ein `then()`, ohne den Erfolgs-Handler zu übergeben. Da diese Methoden Promises zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Wir verwenden folgende Terminologie: _Anfängliches Promise_ ist das Promise, an dem `then` aufgerufen wird; _neues Promise_ ist das Promise, das von `then` zurückgegeben wird. Die beiden an `then` übergebenen Callbacks werden jeweils als _Erfolgs-Handler_ und _Ablehnungs-Handler_ bezeichnet.

Der abgeschlossene Zustand des anfänglichen Promises bestimmt, welchen Handler auszuführen.

- Wenn das anfängliche Promise erfüllt ist, wird der Erfolgs-Handler mit dem Erfolgswert aufgerufen.
- Wenn das anfängliche Promise abgelehnt ist, wird der Ablehnungs-Handler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss des Handlers bestimmt den abgeschlossenen Zustand des neuen Promises.

- Wenn der Handler einen [thenable](#thenables) Wert zurückgibt, wird das neue Promise im selben Zustand wie der zurückgegebene Wert abgeschlossen.
- Wenn der Handler einen nicht-thenable Wert zurückgibt, wird das neue Promise mit dem zurückgegebenen Wert erfüllt.
- Wenn der Handler einen Fehler wirft, wird das neue Promise mit dem geworfenen Fehler abgelehnt.
- Wenn das anfängliche Promise keinen entsprechenden Handler hat, wird das neue Promise im selben Zustand wie das anfängliche Promise abgeschlossen — das heißt, ohne einen Ablehnungs-Handler bleibt ein abgelehntes Promise mit demselben Grund abgelehnt.

Zum Beispiel, im obenstehenden Code, wenn `myPromise` ablehnt, wird `handleRejectedA` aufgerufen, und wenn `handleRejectedA` normal abgeschlossen wird (ohne zu werfen oder ein ablehnendes Promise zurückzugeben), wird das von `then` zurückgegebene Promise erfüllt, anstatt abgelehnt zu bleiben. Wenn ein Fehler sofort behandelt werden muss, aber wir den Fehlerzustand in der Kette beibehalten möchten, müssen wir im Ablehnungs-Handler einen Fehler einer bestimmten Art werfen. Auf der anderen Seite, in der Abwesenheit eines sofortigen Bedarfs, können wir die Fehlerbehandlung bis zum endgültigen `catch()`-Handler aufschieben.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Wenn Sie [arrow functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen verwenden, kann die Implementierung der Promise-Kette etwa so aussehen:

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
> Für schnellere Ausführung sollten alle synchronen Aktionen vorzugsweise innerhalb eines Handlers ausgeführt werden, ansonsten würde es mehrere Ticks dauern, alle Handler in Folge auszuführen.

JavaScript unterhält eine [Job-Warteschlange](/de/docs/Web/JavaScript/Reference/Execution_model). Jedes Mal wählt JavaScript einen Job aus der Warteschlange aus und führt ihn vollständig aus. Die Jobs werden durch den Executor des `Promise()`-Konstruktors, die an `then` übergebenen Handler oder jede Plattform-API, die ein Promise zurückgibt, definiert. Die Promises in einer Kette repräsentieren die Abhängigkeitsbeziehung zwischen diesen Jobs. Wenn ein Promise abgeschlossen wird, werden die jeweiligen Handler, die damit verknüpft sind, am Ende der Job-Warteschlange hinzugefügt.

Ein Promise kann in mehr als einer Kette teilnehmen. Für den folgenden Code wird die Erfüllung von `promiseA` dazu führen, dass sowohl `handleFulfilled1` als auch `handleFulfilled2` zur Job-Warteschlange hinzugefügt werden. Da `handleFulfilled1` zuerst registriert wird, wird es zuerst aufgerufen.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits abgeschlossenen Promise zugeordnet werden. In diesem Fall wird die Aktion sofort am Ende der Job-Warteschlange hinzugefügt und wird ausgeführt, wenn alle vorhandenen Jobs abgeschlossen sind. Daher wird eine Aktion für ein bereits "erledigtes" Promise nur ausgeführt, nachdem der aktuelle synchrone Code abgeschlossen ist und mindestens ein Schleifen-Tick vergangen ist. Dies garantiert, dass Promise-Aktionen asynchron sind.

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

Das JavaScript-Ökosystem hatte mehrere Promise-Implementierungen lange bevor es Teil der Sprache wurde. Trotz der unterschiedlichen internen Darstellung implementieren alle Promise-ähnlichen Objekte mindestens das _Thenable_ Interface. Ein Thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) Methode, die mit zwei Callbacks aufgerufen wird: eine für den Erfolgsfall, eine für den Fehlfall. Promises sind ebenfalls Thenables.

Um mit den bestehenden Promise-Implementierungen interoperabel zu sein, erlaubt die Sprache die Verwendung von Thenables anstelle von Promises. Zum Beispiel wird [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur Promises auflösen, sondern auch Thenables verfolgen.

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

Die `then()`-Methode ist verantwortlich für die Planung der Ausführung der bereitgestellten `onFulfilled` und `onRejected` Callbacks. Ihre Semantik, einschließlich Fehlerbehandlung und Asynchronität, ist genau in der [Promises/A+ Spezifikation](https://promisesaplus.com/) definiert, und wir werden sie hier nicht wiederholen. Es ist sehr selten, dass Sie selbst einen Thenable implementieren müssen; selbst wenn Sie keine nativen Promises verwenden, würden Sie wahrscheinlich eine Promise-Bibliothek wie [Bluebird](https://www.npmjs.com/package/bluebird) verwenden.

### Promise-Konkurrenz

Die `Promise` Klasse bietet vier statische Methoden zur Erleichterung der [konkurrierenden](https://en.wikipedia.org/wiki/Concurrent_computing) Ausführung von asynchronen Aufgaben:

- {{jsxref("Promise.all()")}}
  - : Erfüllt sich, wenn **alle** der Promises erfüllt werden; lehnt ab, wenn **eine** der Promises abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt sich, wenn **alle** Promises abgeschlossen werden.
- {{jsxref("Promise.any()")}}
  - : Erfüllt sich, wenn **eine** der Promises erfüllt wird; lehnt ab, wenn **alle** der Promises abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Erledigt sich, wenn **eine** der Promises erledigt wird. Mit anderen Worten, erfüllt sich, wenn eine der Promises sich erfüllt; lehnt ab, wenn eine der Promises abgelehnt wird.

Alle diese Methoden nehmen ein [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Objekt von Promises ([Thenables](#thenables), um genau zu sein) und gibt ein neues Promise zurück. Sie alle unterstützen Subclassing, was bedeutet, dass sie auf Subklassen von `Promise` aufgerufen werden können, und das Ergebnis wird ein Promise des Subklasse-Typs sein. Um dies zu tun, muss der Konstruktor der Unterklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktor implementieren — mit einer einzigen `executor` Funktion, die mit den `resolve` und `reject` Callbacks als Parameter aufgerufen werden kann. Die Unterklasse muss auch eine `resolve` statische Methode haben, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte in Promises aufzulösen.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "einzel-threaded")}} ist, so dass zu einem gegebenen Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl die Kontrolle zwischen verschiedenen Promises verschoben werden kann, sodass die Ausführung der Promises scheinbar gleichzeitig erfolgt. [Parallele Ausführung](https://en.wikipedia.org/wiki/Parallel_computing) in JavaScript kann nur über [Arbeiter-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise` Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu umschließen, die Promises noch nicht unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von Promise-Methoden zu erstellen.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn alle Eingabe-Promises erfüllt werden (einschließlich wenn ein leeres iterierbares Objekt übergeben wird), mit einem Array der Erfolgswerte. Es lehnt ab, wenn irgendeines der Eingabe-Promises ablehnt, mit diesem ersten Ablehnungsgrund.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn alle Eingabe-Promises erledigt werden (einschließlich wenn ein leeres iterierbares Objekt übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes Promises beschreiben.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn irgendeines der Eingabe-Promises erfüllt wird, mit diesem ersten Erfolgswert. Es lehnt ab, wenn alle Eingabe-Promises ablehnen (einschließlich wenn ein leeres iterierbares Objekt übergeben wird), mit einem {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erledigt sich mit dem endgültigen Zustand des ersten Promises, das sich erledigt.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise` Objekt zurück, das mit dem angegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise` Objekt zurück, das mit dem angegebenen Wert aufgelöst wird. Wenn der Wert ein Thenable ist (d.h. eine `then` Methode hat), wird das zurückgegebene Promise diesem Thenable "folgen" und dessen endgültigen Zustand annehmen; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Nimmt einen Callback jeglicher Art (gibt zurück oder wirft, synchron oder asynchron) und umschließt dessen Ergebnis in einem `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise` Objekt und zwei Funktionen zum Auflösen oder Ablehnen enthält, entsprechend den zwei Parametern, die an den Executor des {{jsxref("Promise/Promise", "Promise()")}} Konstruktors übergeben werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Bei `Promise`-Instanzen ist der Anfangswert der {{jsxref("Promise/Promise", "Promise")}} Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der Initialwert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Promise"`. Diese Eigenschaft wird bei {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Fügt dem Promise einen Ablehnungs-Handler-Callback hinzu und gibt ein neues Promise zurück, das auf den Rückgabewert des aufgerufenen Callbacks aufgelöst wird, falls es aufgerufen wird, oder auf den ursprünglichen Erfolgswert, falls das Promise stattdessen erfüllt wird.
- {{jsxref("Promise.prototype.finally()")}}
  - : Fügt dem Promise einen Handler hinzu und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst wird. Der Handler wird aufgerufen, wenn das Promise abgeschlossen ist, unabhängig davon, ob erfüllt oder abgelehnt.
- {{jsxref("Promise.prototype.then()")}}
  - : Fügt dem Promise Erfolgs- und Ablehnungs-Handler hinzu und gibt ein neues Promise zurück, das auf den Rückgabewert des aufgerufenen Handlers aufgelöst wird, oder auf den ursprünglichen erledigten Wert des Promises, falls dieses nicht behandelt wurde (d.h. wenn der relevante Handler `onFulfilled` oder `onRejected` keine Funktion ist).

## Beispiele

### Einfaches Beispiel

In diesem Beispiel verwenden wir `setTimeout(...)`, um asynchronen Code zu simulieren.
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

### Beispiel mit diversen Situationen

Dieses Beispiel zeigt verschiedene Techniken zur Nutzung von Promise-Fähigkeiten und diverse Situationen, die auftreten können. Um dies zu verstehen, scrollen Sie zuerst zum Ende des Codeblocks und untersuchen Sie die Promise-Kette. Auf die Bereitstellung eines anfänglichen Promises kann eine Kette von Promises folgen. Die Kette besteht aus `.then()` Aufrufen und hat typischerweise (aber nicht zwingend) ein einzelnes `.catch()` am Ende, gefolgt von `.finally()`. In diesem Beispiel wird die Promise-Kette durch einen benutzerdefinierten `new Promise()`-Konstrukt initiiert; in der Praxis beginnen Promise-Ketten jedoch häufiger mit einer API-Funktion (von jemand anderem geschrieben), die ein Promise zurückgibt.

Die Beispiel-Funktion `tetheredGetNumber()` zeigt, dass ein Promise-Generator `reject()` während der Einrichtung eines asynchronen Aufrufs, oder innerhalb des Callbacks oder beides verwenden wird. Die Funktion `promiseGetWord()` illustriert, wie eine API-Funktion ein Promise auf selbstständige Weise generieren und zurückgeben könnte.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das ist erforderlich, weil eine Promise-Kette durch alle `.then()` Promises geht, auch nach einem Fehler, und ohne den `throw` würde der Fehler als "behoben" erscheinen. Darum wird häufig `onRejected` in der gesamten Kette von `.then()` Promises ausgelassen und einfach ein einziges `onRejected` im abschließenden `catch()` verwendet.

Dieser Code kann unter Node.js ausgeführt werden. Das Verständnis wird verbessert, indem die Fehler tatsächlich auftreten. Um mehr Fehler zu erzwingen, ändern Sie die `threshold` Werte.

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

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die `testPromise()` Methode wird jedes Mal aufgerufen, wenn der {{HTMLElement("button")}} angeklickt wird. Es erstellt ein Promise, das mit der Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) erfüllt wird, zum Versprechenszähler (eine Nummer beginnend mit 1) alle 1-3 Sekunden, bei zufällig. Der `Promise()` Konstruktor wird verwendet, um das Promise zu erstellen.

Die Erfüllung des Promises wird protokolliert, über einen Erfolgs-Callback, der mit {{jsxref("Promise/then", "p1.then()")}} gesetzt wird. Einige Log-Einträge zeigen, wie der synchrone Teil der Methode von dem asynchronen Abschluss des Promises entkoppelt ist.

Indem Sie den Knopf mehrmals in kurzer Zeit drücken, sehen Sie sogar, wie die verschiedenen Promises nacheinander erfüllt werden.

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

Ein weiteres Beispiel unter Verwendung von `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zum Laden eines Bildes ist unten gezeigt.
Jeder Schritt ist kommentiert und ermöglicht es Ihnen, der Architektur von Promise und XHR genau zu folgen.

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

### Nachverfolgung des inkumbenten Umgebungselements

Ein Umgebungselement ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen bietet, wenn JavaScript-Code ausgeführt wird. Dies umfasst den Bereich und die Modulkarte sowie HTML-spezifische Informationen wie den Ursprung. Das inkumbente Umgebungselement wird nachverfolgt, um sicherzustellen, dass der Browser weiß, welches für ein bestimmtes Stück Benutzercode verwendet werden soll.

Um dies besser zu verdeutlichen, können wir genauer betrachten, wie der Bereich ein Problem sein könnte. Ein **Bereich** kann grob als das globale Objekt betrachtet werden. Was Bereiche einzigartig macht, ist, dass sie alle notwendigen Informationen enthalten, um JavaScript-Code auszuführen. Dazu gehören Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Umgebungselement hat seine eigene "Kopie" dieser und sie werden nicht geteilt. Das kann zu unerwartetem Verhalten in Bezug auf Promises führen. Um dies zu umgehen, verfolgen wir etwas, das als **inkumbentes Umgebungselement** bezeichnet wird. Dies repräsentiert Informationen, die spezifisch für den Kontext des Benutzercodes sind, der für einen bestimmten Funktionsaufruf verantwortlich ist.

Um dies noch weiter zu veranschaulichen, können wir betrachten, wie ein [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), das in einem Dokument eingebettet ist, mit seinem Host kommuniziert. Da alle Web-APIs sich des inkumbenten Umgebungselements bewusst sind, wird das folgende in allen Browsern funktionieren:

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

Dasselbe Konzept gilt für Promises. Wenn wir das obige Beispiel ein wenig modifizieren, erhalten wir dies:

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

Wenn wir dies ändern, so dass das `<iframe>` im Dokument Nachrichten abhört, können wir die Auswirkungen des inkumbenten Umgebungselements beobachten:

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

Im obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das inkumbente Umgebungselement nachverfolgt wird. Ohne Nachverfolgen des Inkumbenten könnten wir die falsche Umgebung verwenden, um die Nachricht zu senden.

> [!NOTE]
> Derzeit ist die Nachverfolgung des Inkumbenten Bereichs vollständig in Firefox implementiert und hat teilweise Implementierungen in Chrome und Safari.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [JavaScript Promises: eine Einführung](https://web.dev/articles/promises) auf web.dev (2013)
- [Callbacks, Promises und Koroutinen: Asynchrone Programmiermuster in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Präsentation von Domenic Denicola (2011)
