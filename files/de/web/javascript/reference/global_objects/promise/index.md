---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: cbf7f4b55e2c0bc0c096773435b159edcaa8c9e2
---

Das **`Promise`**-Objekt repräsentiert den späteren Abschluss (oder Fehlschlag) einer asynchronen Operation und deren resultierenden Wert.

Um mehr darüber zu erfahren, wie Promises funktionieren und wie Sie sie verwenden können, empfehlen wir Ihnen, zuerst [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Stellvertreter für einen Wert, der nicht unbedingt bekannt ist, wenn das Promise erstellt wird. Es ermöglicht Ihnen, Handler mit dem endgültigen Erfolgswert oder dem Grund für das Scheitern einer asynchronen Aktion zu verknüpfen. Dies lässt asynchrone Methoden Werte wie synchrone Methoden zurückgeben: Anstatt den endgültigen Wert sofort zurückzugeben, gibt die asynchrone Methode ein _Promise_ zurück, um den Wert zu einem späteren Zeitpunkt bereitzustellen.

Ein `Promise` befindet sich in einem dieser Zustände:

- _pending_: Anfangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines ausstehenden Promises kann entweder _erfüllt_ mit einem Wert oder _abgelehnt_ mit einem Grund (Fehler) sein. Wenn eine dieser Optionen eintritt, werden die zugeordneten Handler, die durch die `then`-Methode eines Promises in die Warteschlange gestellt wurden, aufgerufen. Wenn das Promise bereits erfüllt oder abgelehnt ist, wenn ein entsprechender Handler angefügt wird, wird der Handler aufgerufen, sodass es keine Wettlaufsituation zwischen dem Abschluss einer asynchronen Operation und dem Anheften ihrer Handler gibt.

Ein Promise wird als _abgewickelt_ bezeichnet, wenn es entweder erfüllt oder abgelehnt ist, jedoch nicht mehr aussteht.

![Flussdiagramm, das zeigt, wie der Promise-Zustand zwischen ausstehend, erfüllt und abgelehnt über dann/catch-Handler wechselt. Ein ausstehendes Promise kann entweder erfüllt oder abgelehnt werden. Wenn es erfüllt wird, wird der "on fulfillment"-Handler oder der erste Parameter der then()-Methode ausgeführt und führt weitere asynchrone Aktionen durch. Wenn es abgelehnt wird, wird der Fehler-Handler ausgeführt, entweder übergeben als zweiter Parameter der then()-Methode oder als einziger Parameter der catch()-Methode.](promises.png)

Sie werden auch den Begriff _resolved_ im Zusammenhang mit Promises hören — dies bedeutet, dass das Promise abgewickelt oder "eingesperrt" ist, um mit dem endgültigen Zustand eines anderen Promises übereinzustimmen, und ein weiteres Auflösen oder Ablehnen hat keinen Effekt. Das Dokument [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) aus dem ursprünglichen Promise-Vorschlag enthält weitere Details zur Promise-Terminologie. Umgangssprachlich sind "resolved" Promises oft gleichbedeutend mit "fulfilled" Promises, aber wie in "States and fates" veranschaulicht, können resolved Promises auch ausstehend oder abgelehnt sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist bereits _resolved_, wenn es erstellt wird (weil `resolveOuter` synchron aufgerufen wird), aber es wird mit einem anderen Promise resolved und deshalb erst 1 Sekunde später erfüllt, wenn das innere Promise erfüllt wird. In der Praxis erfolgt die "Auflösung" oft im Hintergrund und ist nicht wahrnehmbar, und nur die Erfüllung oder Ablehnung ist relevant.

> [!NOTE]
> Mehrere andere Programmiersprachen haben Mechanismen zur verzögerten Auswertung und Verschiebung einer Berechnung, die sie ebenfalls als "Versprechen" bezeichnen, z. B. Scheme. Promises in JavaScript repräsentieren Prozesse, die bereits ablaufen und sich mit Callback-Funktionen verkettet werden können. Wenn Sie beabsichtigen, einen Ausdruck verzögert auszuwerten, sollten Sie eine Funktion ohne Argumente verwenden, z. B. `f = () => expression`, um den verzögert ausgewerteten Ausdruck zu erstellen, und `f()`, um den Ausdruck sofort auszuwerten.

`Promise` selbst hat kein erstklassiges Protokoll zur Stornierung, aber Sie können möglicherweise die zugrunde liegende asynchrone Operation direkt stornieren, typischerweise mit [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Promises

Die Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}}, und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um weitere Aktionen mit einem Promise zu verknüpfen, das abgewickelt wird. Die `then()`-Methode nimmt bis zu zwei Argumente; das erste Argument ist eine Callback-Funktion für den Erfüllungsfall des Promises, und das zweite Argument ist eine Callback-Funktion für den abgelehnten Fall. Die Methoden `catch()` und `finally()` rufen intern `then()` auf und machen die Fehlerbehandlung weniger umständlich. Beispielsweise ist ein `catch()` wirklich nur ein `then()` ohne Übergabe des Erfüllungshandlers. Da diese Methoden Promises zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Wir werden die folgende Terminologie verwenden: _initiales Promise_ ist das Promise, auf dem `then` aufgerufen wird; _neues Promise_ ist das Promise, das von `then` zurückgegeben wird. Die beiden an `then` übergebenen Callback-Funktionen werden _Erfüllungshandler_ und _Ablehnungshandler_ genannt.

Der abgewickelte Zustand des initialen Promises entscheidet, welcher Handler ausgeführt wird.

- Wenn das initiale Promise erfüllt ist, wird der Erfüllungshandler mit dem Erfüllungswert aufgerufen.
- Wenn das initiale Promise abgelehnt ist, wird der Ablehnungshandler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss des Handlers bestimmt den abgewickelten Zustand des neuen Promises.

- Wenn der Handler einen [thenable](#thenables) Wert zurückgibt, wickelt sich das neue Promise in demselben Zustand ab wie das zurückgegebene Wert.
- Wenn der Handler einen nicht-thenable Wert zurückgibt, wird das neue Promise mit dem zurückgegebenen Wert erfüllt.
- Wenn der Handler einen Fehler wirft, wird das neue Promise mit dem geworfenen Fehler abgelehnt.
- Wenn dem initialen Promise kein entsprechender Handler angehängt ist, wird das neue Promise in demselben Zustand abgewickelt wie das initiale Promise — das heißt, ohne Ablehnungshandler bleibt ein abgelehntes Promise mit demselben Grund abgelehnt.

Beispielsweise, im obigen Code, wenn `myPromise` abgelehnt wird, wird `handleRejectedA` aufgerufen, und wenn `handleRejectedA` normalerweise (ohne Werfen oder Zurückgeben eines abgelehnten Promises) abgeschlossen wird, wird das von dem ersten `then` zurückgegebene Promise erfüllt, anstatt abgelehnt zu bleiben. Daher, wenn ein Fehler sofort behandelt werden muss, aber wir den Fehlerstatus in der Kette beibehalten möchten, müssen wir im Ablehnungshandler irgendeinen Fehlertyp werfen. Andererseits, in der Abwesenheit eines sofortigen Bedarfs, können wir die Fehlerbehandlung bis zum finalen `catch()`-Handler aufschieben.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Unter Verwendung von [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen könnte die Implementierung der Promise-Kette so aussehen:

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
> Für schnellere Ausführung sollten alle synchronen Aktionen möglichst innerhalb eines Handlers ausgeführt werden, andernfalls würde es mehrere Ticks dauern, um alle Handler in Folge auszuführen.

JavaScript pflegt eine [Job-Warteschlange](/de/docs/Web/JavaScript/Reference/Execution_model). Jedes Mal wählt JavaScript einen Job aus der Warteschlange aus und führt ihn vollständig aus. Die Jobs werden vom Executor des `Promise()`-Konstruktors, den Handlers, die an `then` übergeben wurden, oder von irgendeiner Plattform-API, die ein Promise zurückgibt, definiert. Die Promises in einer Kette stellen die Abhängigkeitsbeziehungen zwischen diesen Jobs dar. Wenn ein Promise abgewickelt wird, werden die zugehörigen Handler, die mit ihm verknüpft sind, an das Ende der Job-Warteschlange angefügt.

Ein Promise kann an mehr als einer Kette teilnehmen. Im folgenden Code verursacht die Erfüllung von `promiseA` sowohl `handleFulfilled1` als auch `handleFulfilled2`, dass sie der Job-Warteschlange hinzugefügt werden. Da `handleFulfilled1` zuerst registriert wird, wird es auch zuerst aufgerufen.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits abgewickelten Promise zugewiesen werden. In diesem Fall wird die Aktion sofort ans Ende der Job-Warteschlange angefügt und wird ausgeführt, wenn alle vorhandenen Jobs abgeschlossen sind. Daher tritt eine Aktion für ein bereits "abgewickeltes" Promise erst auf, nachdem der aktuelle synchrone Code abgeschlossen ist und mindestens ein Schleifen-Tick vergangen ist. Dies garantiert, dass Promise-Aktionen asynchron sind.

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

Das JavaScript-Ökosystem hatte mehrere Promise-Implementierungen lange bevor es Teil der Sprache wurde. Trotz unterschiedlicher interner Darstellung implementieren mindestens alle Promise-ähnlichen Objekte die _Thenable_-Schnittstelle. Ein Thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode, die mit zwei Callbacks aufgerufen wird: eines für den Fall, dass das Promise erfüllt wird, und eines für den Fall, dass es abgelehnt wird. Promises sind ebenfalls Thenables.

Um mit den vorhandenen Promise-Implementierungen zu interagieren, erlaubt die Sprache die Verwendung von Thenables anstelle von Promises. Zum Beispiel `Promise.resolve` wird nicht nur Promises auflösen, sondern auch Thenables verfolgen.

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

Die `then()`-Methode ist dafür verantwortlich, die Ausführung der bereitgestellten `onFulfilled`- und `onRejected`-Callbacks zu planen. Ihre Semantik, einschließlich Fehlerbehandlung und Asynchronität, sind präzise in der [Promises/A+ Spezifikation](https://promisesaplus.com/) definiert, und wir werden sie hier nicht wiederholen. Es ist sehr selten, dass Sie selbst ein Thenable implementieren müssen; selbst wenn Sie keine nativen Promises verwenden, würden Sie wahrscheinlich eine Promise-Bibliothek wie [Bluebird](https://www.npmjs.com/package/bluebird) verwenden.

### Promise-Konkurrenz

Die `Promise`-Klasse bietet vier Haupt-Methoden, um die asynchrone Aufgaben[Konkurrenz](<https://de.wikipedia.org/wiki/Konkurrenz_(Informatik)>) zu erleichtern:

- {{jsxref("Promise.all()")}}
  - : Erfüllt sich, wenn **alle** Promises sich erfüllen; lehnt ab, wenn **irgendeines** der Promises ablehnt.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt sich, wenn **alle** Promises abgewickelt werden.
- {{jsxref("Promise.any()")}}
  - : Erfüllt sich, wenn **irgendeines** der Promises sich erfüllt; lehnt ab, wenn **alle** Promises ablehnen.
- {{jsxref("Promise.race()")}}
  - : Wird abgewickelt, wenn **irgendeines** der Promises abgewickelt wird. Anders gesagt, wird erfüllt, wenn eines der Promises sich erfüllt; lehnt ab, wenn eines der Promises ablehnt.

Alle diese Methoden nehmen ein [iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises ([Thenables](#thenables), um genau zu sein) und geben ein neues Promise zurück. Alle unterstützen Subclassing, was bedeutet, dass sie auf Subklassen von `Promise` aufgerufen werden können, und das Ergebnis wird ein Promise des Subklassentyps sein. Um dies zu tun, muss der Konstruktor der Subklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — eine einzelne `executor`-Funktion zu akzeptieren, die mit den `resolve`- und `reject`-Callbacks als Parameter aufgerufen werden kann. Die Subklasse muss auch eine `resolve`-statische Methode haben, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte in Promises aufzulösen.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "single-threaded")}} ist, also zu einem bestimmten Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl die Kontrolle zwischen verschiedenen Promises wechseln kann, was die Ausführung der Promises so erscheinen lässt, als ob sie gleichzeitig erfolgt. [Parallelausführung](https://de.wikipedia.org/wiki/Parallelverarbeitung) in JavaScript kann nur durch [Worker-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

Es gibt zwei weitere bequeme statische Methoden: {{jsxref("Promise.allKeyed()")}} und {{jsxref("Promise.allSettledKeyed()")}}, die wie `Promise.all()` und `Promise.allSettled()` funktionieren, jedoch _Objekte_ von Promises annehmen und Promises zurückgeben, die mit Objekten derselben Form erfüllt werden. Durch die Arbeit mit Objekten anstelle von Arrays können Sie Ergebnisse mit semantisch aussagekräftigen Schlüsseln verknüpfen, anstelle von willkürlicher Array-Anordnung, die schwer zu halten sein kann.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen einzuwickeln, die noch keine Promises unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus Promise-Methoden zu konstruieren.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Eingabepromises erfüllt sind (einschließlich, wenn ein leeres Iterable übergeben wird), mit einem Array der Erfüllungswerte. Es lehnt ab, wenn eines der Eingabepromises ablehnt, mit diesem ersten Ablehnungsgrund.
- {{jsxref("Promise.allKeyed()")}}
  - : Wie `Promise.all()`, außer, dass es ein Objekt von Promises annimmt und ein Promise zurückgibt, das mit einem Objekt derselben Form erfüllt wird, sodass Sie Ergebnisse mit semantisch aussagekräftigen Schlüsseln verknüpfen können.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Eingabepromises abgewickelt werden (einschließlich, wenn ein leeres Iterable übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes Promises beschreiben.
- {{jsxref("Promise.allSettledKeyed()")}}
  - : Wie `Promise.allSettled()`, außer, dass es ein Objekt von Promises annimmt und ein Promise zurückgibt, das mit einem Objekt derselben Form erfüllt wird, sodass Sie Ergebnisse mit semantisch aussagekräftigen Schlüsseln verknüpfen können.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn eines der Eingabepromises erfüllt wird, mit diesem ersten Erfüllungswert. Es lehnt ab, wenn alle Eingabepromises ablehnen (einschließlich, wenn ein leeres Iterable übergeben wird), mit einem {{jsxref("AggregateError")}}, das ein Array von Ablehnungsgründen enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird mit dem endgültigen Zustand des ersten abgewickelten Promises abgewickelt.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem angegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem angegebenen Wert aufgelöst wird. Wenn der Wert ein Thenable ist (d.h. eine `then`-Methode hat), wird das zurückgegebene Promise diesem Thenable "folgen" und dessen endgültigen Zustand übernehmen; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Nimmt einen Callback jeglicher Art (gibt zurück oder wirft, synchron oder asynchron) und verpackt dessen Ergebnis in einem `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen zum Auflösen oder Ablehnen enthält, die den beiden Parametern entsprechen, die an den Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Promise`-Instanzen ist der Anfangswert der {{jsxref("Promise/Promise", "Promise")}}-Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Fügt einen Ablehnungshandler-Callback an das Promise an und gibt ein neues Promise zurück, das auf den Rückgabewert des Callbacks, wenn es aufgerufen wird, oder auf seinen ursprünglichen Erfüllungswert, wenn das Promise stattdessen erfüllt wird, aufgelöst wird.
- {{jsxref("Promise.prototype.finally()")}}
  - : Fügt einen Handler an das Promise an und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst wird. Der Handler wird aufgerufen, wenn das Promise abgewickelt wird, unabhängig davon, ob es erfüllt oder abgelehnt wird.
- {{jsxref("Promise.prototype.then()")}}
  - : Fügt Erfüllungs- und Ablehnungshandler an das Promise an und gibt ein neues Promise zurück, das auf den Rückgabewert des aufgerufenen Handlers oder auf seinen ursprünglichen abgewickelten Wert, wenn das Promise nicht behandelt wurde (d.h. wenn der relevante Handler `onFulfilled` oder `onRejected` keine Funktion ist), aufgelöst wird.

## Beispiele

### Einfaches Beispiel

In diesem Beispiel verwenden wir `setTimeout(...)`, um asynchronen Code zu simulieren. In Wirklichkeit würden Sie wahrscheinlich etwas wie XHR oder eine HTML-API verwenden.

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

Dieses Beispiel zeigt verschiedene Techniken zur Nutzung der Promise-Fähigkeiten und verschiedene Situationen, die auftreten können. Um dies zu verstehen, beginnen Sie unten im Codeblock und untersuchen die Promise-Kette. Nach der Bereitstellung eines initialen Promises kann eine Kette von Promises folgen. Die Kette besteht aus `.then()`-Aufrufen und hat typischerweise (aber nicht zwingend) ein einzelnes `.catch()` am Ende, gefolgt von `.finally()`. In diesem Beispiel wird die Promise-Kette von einem benutzerdefinierten `new Promise()`-Konstrukt eingeleitet; aber tatsächlich beginnen Promise-Ketten häufiger mit einer API-Funktion (geschrieben von jemand anderem), die ein Promise zurückgibt.

Die Beispiel-Funktion `tetheredGetNumber()` zeigt, dass ein Promise-Erzeuger `reject()` während der Einrichtung eines asynchronen Aufrufs oder innerhalb des Callbacks oder beides verwenden wird. Die Funktion `promiseGetWord()` veranschaulicht, wie eine API-Funktion ein Promise in selbstständiger Weise generieren und zurückgeben könnte.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das ist erzwungen, weil eine Promise-Kette alle `.then()`-Promises durchläuft, selbst nach einem Fehler, und ohne `throw` würde der Fehler als "behoben" erscheinen. Das ist ein Ärgernis, und aus diesem Grund ist es üblich, `onRejected` in der gesamten Kette der `.then()`-Promises wegzulassen und nur ein einziges `onRejected` im finalen `catch()` zu haben.

Dieser Code kann unter Node.js ausgeführt werden. Das Verständnis wird verbessert, wenn die Fehler tatsächlich auftreten. Um mehr Fehler zu erzwingen, ändern Sie die `threshold`-Werte.

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

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die `testPromise()`-Methode wird jedes Mal aufgerufen, wenn der {{HTMLElement("button")}} angeklickt wird. Es erstellt ein Promise, das unter Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) erfüllt wird, bis zur Promise-Anzahl (eine Zahl, die bei 1 beginnt) alle 1-3 Sekunden zufällig. Der `Promise()`-Konstruktor wird verwendet, um das Promise zu erstellen.

Die Erfüllung des Promises wird über einen Erfüllungs-Callback protokolliert, der mithilfe von {{jsxref("Promise/then", "p1.then()")}} festgelegt wird. Einige Protokolle zeigen, wie der synchrone Teil der Methode von der asynchronen Ausführung des Promises entkoppelt ist.

Durch mehrmaliges Klicken auf den Button in kurzer Zeit sehen Sie sogar, wie die verschiedenen Promises nacheinander erfüllt werden.

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

Ein weiteres Beispiel, das `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwendet, um ein Bild zu laden, wird unten gezeigt. Jeder Schritt ist kommentiert und ermöglicht Ihnen, die Promise- und XHR-Architektur genau zu verfolgen.

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

### Verfolgung des anstehenden Einstellungsobjekts

Ein Einstellungsobjekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen bereitstellt, wenn JavaScript-Code ausgeführt wird. Dazu gehören das Realm und die Modulkarte sowie HTML-spezifische Informationen wie der Ursprung. Das anstehende Einstellungsobjekt wird verfolgt, um sicherzustellen, dass der Browser weiß, welches zu verwenden ist, wenn ein bestimmtes Stück Benutzercode ausgeführt wird.

Um sich das besser vorstellen zu können, können wir uns näher ansehen, wie das Realm ein Problem sein könnte. Ein **Realm** kann grob als das globale Objekt betrachtet werden. Was Realms einzigartig macht, ist, dass sie alle notwendigen Informationen enthalten, um JavaScript-Code auszuführen. Dazu gehören Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Einstellungsobjekt hat seine eigene "Kopie" davon und sie werden nicht geteilt. Das kann einige unerwartete Verhaltensweisen in Bezug auf Promises verursachen. Um dies zu umgehen, verfolgen wir etwas, das als **anstehendes Einstellungsobjekt** bezeichnet wird. Dies repräsentiert informationen, die spezifisch für den Kontext des für einen bestimmten Funktionsaufruf verantwortlichen Benutzercodes sind.

Um dies noch weiter zu veranschaulichen, können wir uns anschauen, wie ein in ein Dokument eingebettetes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) mit seinem Host kommuniziert. Da alle Web-APIs sich des anstehenden Einstellungsobjekts bewusst sind, funktioniert Folgendes in allen Browsern:

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

Dasselbe Konzept gilt für Promises. Wenn wir das obige Beispiel ein wenig abändern, erhalten wir das:

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

Wenn wir dies ändern, sodass das `<iframe>` im Dokument Post-Nachrichten abhört, können wir den Effekt des anstehenden Einstellungsobjekts beobachten:

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

Im obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das anstehende Einstellungsobjekt verfolgt wird. Das liegt daran, dass wir ohne das Tracking des Anstehenden möglicherweise die falsche Umgebung verwenden, um die Nachricht zu senden.

> [!NOTE]
> Derzeit ist die Verfolgung des anstehenden Realms in Firefox vollständig implementiert und hat teilweise Implementierungen in Chrome und Safari.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [JavaScript Promises: eine Einführung](https://web.dev/articles/promises) auf web.dev (2013)
- [Callbacks, Promises, und Koroutinen: Asynchrone Programmiermuster in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Präsentation von Domenic Denicola (2011)
