---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: a6a2daec3965d85ef6dfc06cfd3507c1b2f886e2
---

Das **`Promise`**-Objekt repräsentiert den eventuellen Abschluss (oder Fehlschlag) einer asynchronen Operation und ihren resultierenden Wert.

Um zu erfahren, wie Promises funktionieren und wie Sie sie verwenden können, empfehlen wir Ihnen, zunächst [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Proxy für einen Wert, der beim Erstellen des Promise nicht unbedingt bekannt ist. Es ermöglicht Ihnen, Handler mit dem eventuellen Erfolgswert oder Fehlergrund einer asynchronen Aktion zu verknüpfen. Dadurch können asynchrone Methoden Werte wie synchrone Methoden zurückgeben: Statt den endgültigen Wert sofort zurückzugeben, gibt die asynchrone Methode ein _Promise_ zurück, das den Wert zu einem Zeitpunkt in der Zukunft bereitstellt.

Ein `Promise` befindet sich in einem dieser Zustände:

- _pending_: Anfangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: bedeutet, dass die Operation fehlgeschlagen ist.

Der _eventuelle Zustand_ eines ausstehenden Promise kann entweder mit einem Wert _fulfilled_ oder mit einem Grund (Fehler) _rejected_ sein.
Wenn eine dieser Optionen eintritt, werden die zugehörigen Handler aufgerufen, die durch die `then`-Methode eines Promise in die Warteschlange gestellt wurden. Falls das Promise bereits erfüllt oder abgelehnt wurde, wenn ein entsprechender Handler angehängt wird, wird der Handler aufgerufen. Daher besteht keine Race Condition zwischen dem Abschluss einer asynchronen Operation und dem Anhängen ihrer Handler.

Ein Promise wird als _settled_ bezeichnet, wenn es entweder erfüllt oder abgelehnt ist, aber nicht ausstehend.

![Flussdiagramm, das zeigt, wie der Promise-Zustand über then/catch-Handler zwischen pending, fulfilled und rejected wechselt. Ein ausstehendes Promise kann entweder erfüllt oder abgelehnt werden. Wenn es erfüllt wird, wird der Handler „on fulfillment“ beziehungsweise der erste Parameter der Methode then() ausgeführt und führt weitere asynchrone Aktionen aus. Wenn es abgelehnt wird, wird der Fehler-Handler ausgeführt, der entweder als zweiter Parameter der Methode then() oder als einziger Parameter der Methode catch() übergeben wird.](promises.png)

Im Zusammenhang mit Promises werden Sie auch den Begriff _resolved_ hören — das bedeutet, dass das Promise settled ist oder darauf „festgelegt“ wurde, dem eventuellen Zustand eines anderen Promise zu entsprechen, und ein weiteres Auflösen oder Ablehnen keine Wirkung hat. Das Dokument [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) aus dem ursprünglichen Promise-Vorschlag enthält weitere Einzelheiten zur Promise-Terminologie. Umgangssprachlich sind „resolved“ Promises oft gleichbedeutend mit „fulfilled“ Promises, aber wie in „States and fates“ dargestellt, können resolved Promises auch pending oder rejected sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist bereits zum Zeitpunkt seiner Erstellung _resolved_ (weil `resolveOuter` synchron aufgerufen wird), es wird jedoch mit einem anderen Promise aufgelöst und ist daher erst 1 Sekunde später _fulfilled_, wenn das innere Promise erfüllt wird. In der Praxis erfolgt die „Auflösung“ häufig im Hintergrund und ist nicht beobachtbar; nur ihre Erfüllung oder Ablehnung ist es.

> [!NOTE]
> Mehrere andere Sprachen verfügen über Mechanismen zur verzögerten Auswertung und zum Aufschieben einer Berechnung, die sie ebenfalls „Promises“ nennen, beispielsweise Scheme. Promises in JavaScript repräsentieren Prozesse, die bereits stattfinden und mit Callback-Funktionen verkettet werden können. Wenn Sie einen Ausdruck verzögert auswerten möchten, sollten Sie eine Funktion ohne Argumente verwenden, z. B. `f = () => expression`, um den verzögert ausgewerteten Ausdruck zu erstellen, und `f()`, um den Ausdruck sofort auszuwerten.

`Promise` selbst verfügt über kein erstklassiges Protokoll zur Abbruchsteuerung, aber möglicherweise können Sie die zugrunde liegende asynchrone Operation direkt abbrechen, üblicherweise mit [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Promises

Die Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um weitere Aktionen mit einem Promise zu verknüpfen, das settled wird. Die Methode `then()` akzeptiert bis zu zwei Argumente; das erste Argument ist eine Callback-Funktion für den erfüllten Fall des Promise, und das zweite Argument ist eine Callback-Funktion für den abgelehnten Fall. Die Methoden `catch()` und `finally()` rufen intern `then()` auf und machen die Fehlerbehandlung weniger ausführlich. Ein `catch()` ist beispielsweise eigentlich nur ein `then()`, bei dem kein Erfüllungs-Handler übergeben wird. Da diese Methoden Promises zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Wir verwenden die folgende Terminologie: _initial promise_ ist das Promise, auf dem `then` aufgerufen wird; _new promise_ ist das von `then` zurückgegebene Promise. Die beiden an `then` übergebenen Callbacks werden jeweils _fulfillment handler_ und _rejection handler_ genannt.

Der settled Zustand des initialen Promise bestimmt, welcher Handler ausgeführt wird.

- Wenn das initiale Promise erfüllt ist, wird der fulfillment handler mit dem Erfüllungswert aufgerufen.
- Wenn das initiale Promise abgelehnt ist, wird der rejection handler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss des Handlers bestimmt den settled Zustand des neuen Promise.

- Wenn der Handler einen [thenable](#thenables)-Wert zurückgibt, wird das neue Promise im selben Zustand wie der zurückgegebene Wert settled.
- Wenn der Handler einen Nicht-thenable-Wert zurückgibt, wird das neue Promise mit dem zurückgegebenen Wert erfüllt.
- Wenn der Handler einen Fehler wirft, wird das neue Promise mit dem geworfenen Fehler abgelehnt.
- Wenn dem initialen Promise kein entsprechender Handler angehängt ist, nimmt das neue Promise denselben Zustand wie das initiale Promise an — das heißt, ohne einen rejection handler bleibt ein abgelehntes Promise mit demselben Grund abgelehnt.

Wenn beispielsweise im obigen Code `myPromise` abgelehnt wird, wird `handleRejectedA` aufgerufen. Wenn `handleRejectedA` normal abgeschlossen wird (ohne zu werfen oder ein abgelehntes Promise zurückzugeben), wird das vom ersten `then` zurückgegebene Promise erfüllt, anstatt abgelehnt zu bleiben. Wenn ein Fehler daher sofort behandelt werden muss, wir aber den Fehlerzustand in der Kette beibehalten möchten, müssen wir im rejection handler einen Fehler irgendeines Typs werfen. Wenn hingegen keine unmittelbare Notwendigkeit besteht, können wir die Fehlerbehandlung bis zum abschließenden `catch()`-Handler weglassen.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Bei Verwendung von [arrow functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen könnte die Implementierung der Promise-Kette etwa so aussehen:

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
> Für eine schnellere Ausführung sollten alle synchronen Aktionen vorzugsweise innerhalb eines Handlers ausgeführt werden, da andernfalls mehrere Ticks benötigt würden, um alle Handler nacheinander auszuführen.

JavaScript verwaltet eine [Job-Warteschlange](/de/docs/Web/JavaScript/Reference/Execution_model). JavaScript entnimmt jeweils einen Job aus der Warteschlange und führt ihn bis zum Abschluss aus. Die Jobs werden durch den Executor des `Promise()`-Konstruktors, die an `then` übergebenen Handler oder eine Plattform-API definiert, die ein Promise zurückgibt. Die Promises in einer Kette repräsentieren die Abhängigkeitsbeziehung zwischen diesen Jobs. Wenn ein Promise settled wird, werden die jeweiligen damit verknüpften Handler am Ende der Job-Warteschlange hinzugefügt.

Ein Promise kann an mehr als einer Kette teilnehmen. Beim folgenden Code führt die Erfüllung von `promiseA` dazu, dass sowohl `handleFulfilled1` als auch `handleFulfilled2` zur Job-Warteschlange hinzugefügt werden. Da `handleFulfilled1` zuerst registriert wird, wird es auch zuerst aufgerufen.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits settled Promise zugewiesen werden. In diesem Fall wird die Aktion sofort am Ende der Job-Warteschlange hinzugefügt und ausgeführt, wenn alle bestehenden Jobs abgeschlossen sind. Daher findet eine Aktion für ein bereits „settled“ Promise erst statt, nachdem der aktuelle synchrone Code abgeschlossen ist und mindestens ein Loop-Tick vergangen ist. Dies garantiert, dass Promise-Aktionen asynchron sind.

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

Das JavaScript-Ökosystem verfügte über mehrere Promise-Implementierungen, lange bevor Promises Teil der Sprache wurden. Obwohl sie intern unterschiedlich dargestellt werden, implementieren alle Promise-ähnlichen Objekte zumindest die _Thenable_-Schnittstelle. Ein thenable implementiert die Methode [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), die mit zwei Callbacks aufgerufen wird: einer für den Fall, dass das Promise erfüllt wird, und einer für den Fall, dass es abgelehnt wird. Promises sind ebenfalls thenables.

Um mit den bestehenden Promise-Implementierungen zusammenzuarbeiten, erlaubt die Sprache die Verwendung von thenables anstelle von Promises. Beispielsweise löst [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur Promises auf, sondern verfolgt auch thenables.

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

Die Methode `then()` ist dafür verantwortlich, die Ausführung der bereitgestellten Callbacks `onFulfilled` und `onRejected` zu planen. Ihre Semantik, einschließlich Fehlerbehandlung und Asynchronität, ist in der [Promises/A+-Spezifikation](https://promisesaplus.com/) präzise definiert und wird hier nicht wiederholt. Es kommt sehr selten vor, dass Sie selbst ein thenable implementieren müssen; selbst wenn Sie keine nativen Promises verwenden, würden Sie wahrscheinlich eine Promise-Bibliothek wie [Bluebird](https://www.npmjs.com/package/bluebird) verwenden.

### Promise-Concurrency

Die Klasse `Promise` bietet vier zentrale statische Methoden, um die [Concurrency](https://en.wikipedia.org/wiki/Concurrent_computing) asynchroner Aufgaben zu erleichtern:

- {{jsxref("Promise.all()")}}
  - : Wird erfüllt, wenn **alle** Promises erfüllt werden; wird abgelehnt, wenn **eines** der Promises abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Wird erfüllt, wenn **alle** Promises settled werden.
- {{jsxref("Promise.any()")}}
  - : Wird erfüllt, wenn **eines** der Promises erfüllt wird; wird abgelehnt, wenn **alle** Promises abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Wird settled, wenn **eines** der Promises settled wird. Anders ausgedrückt: Es wird erfüllt, wenn eines der Promises erfüllt wird; es wird abgelehnt, wenn eines der Promises abgelehnt wird.

Alle diese Methoden akzeptieren ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises (genauer gesagt [thenables](#thenables)) und geben ein neues Promise zurück. Sie unterstützen alle Subclassing, was bedeutet, dass sie auf Unterklassen von `Promise` aufgerufen werden können und das Ergebnis ein Promise des Unterklassentyps ist. Dafür muss der Konstruktor der Unterklasse dieselbe Signatur wie der Konstruktor [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) implementieren — er akzeptiert eine einzelne `executor`-Funktion, die mit den Callbacks `resolve` und `reject` als Parametern aufgerufen werden kann. Die Unterklasse muss außerdem über eine statische Methode `resolve` verfügen, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte zu Promises aufzulösen.

Es gibt zwei weitere praktische statische Methoden: {{jsxref("Promise.allKeyed()")}} und {{jsxref("Promise.allSettledKeyed()")}}. Sie verhalten sich wie `Promise.all()` und `Promise.allSettled()`, akzeptieren jedoch _Objekte_ von Promises und geben Promises zurück, die mit _Objekten_ derselben Form erfüllt werden. Durch die Arbeit mit Objekten statt Arrays können Sie Ergebnisse mit semantisch aussagekräftigen Schlüsseln verknüpfen, anstatt mit einer beliebigen Array-Reihenfolge, die schwierig zu pflegen sein kann.

Diese Methoden hängen mithilfe von {{jsxref("Promise/then", "then()")}} Handler an jedes Eingabe-Promise an. Selbst wenn das resultierende Promise frühzeitig settled wird (etwa wenn eine Eingabe in `Promise.race()` settled wird), werden die anderen Handler nicht entfernt. Die wiederholte Übergabe desselben ausstehenden Promise an Concurrency-Methoden kann Handler ansammeln, selbst wenn diese Handler niemals verwendet werden:

```js
const pendingPromise = new Promise(() => {});

for (let i = 0; i < 1000; i++) {
  await Promise.race([Promise.resolve(0), pendingPromise]);
}
// All tasks have completed, but pendingPromise retains the
// handlers attached by all 1000 races.
```

Promises bieten keine Möglichkeit, diese Handler abzumelden; sie bleiben angehängt, solange das Eingabe-Promise ausstehend und erreichbar ist. Brechen Sie, wo möglich, die zugrunde liegende Operation mithilfe eines [`AbortSignal`](/de/docs/Web/API/AbortSignal) ab, wenn das ausstehende Promise nicht mehr nützlich ist.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "single-threaded")}} ist. Daher wird zu einem bestimmten Zeitpunkt nur eine Aufgabe ausgeführt, auch wenn die Steuerung zwischen verschiedenen Promises wechseln kann, wodurch die Ausführung der Promises gleichzeitig zu sein scheint. [Parallele Ausführung](https://en.wikipedia.org/wiki/Parallel_computing) in JavaScript kann nur über [Worker-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu kapseln, die noch keine Promises unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der zum Erstellen von Rückgabewerten aus Promise-Methoden verwendet wird.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Akzeptiert ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Eingabe-Promises erfüllt werden (auch wenn ein leeres Iterable übergeben wird), mit einem Array der Erfüllungswerte. Es wird abgelehnt, wenn eines der Eingabe-Promises abgelehnt wird, mit diesem ersten Ablehnungsgrund.
- {{jsxref("Promise.allKeyed()")}} {{experimental_inline}}
  - : Wie `Promise.all()`, außer dass es ein Objekt von Promises akzeptiert und ein Promise zurückgibt, das mit einem Objekt derselben Form erfüllt wird. Dadurch können Sie Ergebnisse mit semantisch aussagekräftigen Schlüsseln verknüpfen.
- {{jsxref("Promise.allSettled()")}}
  - : Akzeptiert ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Eingabe-Promises settled werden (auch wenn ein leeres Iterable übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes Promise beschreiben.
- {{jsxref("Promise.allSettledKeyed()")}} {{experimental_inline}}
  - : Wie `Promise.allSettled()`, außer dass es ein Objekt von Promises akzeptiert und ein Promise zurückgibt, das mit einem Objekt derselben Form erfüllt wird. Dadurch können Sie Ergebnisse mit semantisch aussagekräftigen Schlüsseln verknüpfen.
- {{jsxref("Promise.any()")}}
  - : Akzeptiert ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn eines der Eingabe-Promises erfüllt wird, mit diesem ersten Erfüllungswert. Es wird abgelehnt, wenn alle Eingabe-Promises abgelehnt werden (auch wenn ein leeres Iterable übergeben wird), mit einem {{jsxref("AggregateError")}}, das ein Array von Ablehnungsgründen enthält.
- {{jsxref("Promise.race()")}}
  - : Akzeptiert ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise nimmt den eventuellen Zustand des ersten Promise an, das settled wird.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem angegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem angegebenen Wert aufgelöst wird. Wenn der Wert ein thenable ist (d.h. eine `then`-Methode hat), wird das zurückgegebene Promise diesem thenable „folgen“ und dessen eventuellen Zustand übernehmen; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Akzeptiert einen Callback beliebiger Art (gibt synchron oder asynchron zurück oder wirft) und löst dessen Ergebnis zu einem `Promise` auf.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen zum Auflösen oder Ablehnen enthält, entsprechend den zwei Parametern, die an den Executor des Konstruktors {{jsxref("Promise/Promise", "Promise()")}} übergeben werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Promise`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Promise/Promise", "Promise")}}.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist der String `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Hängt einen rejection-handler-Callback an das Promise an und gibt ein neues Promise zurück, das zum Rückgabewert des Callbacks aufgelöst wird, falls dieser aufgerufen wird, oder zum ursprünglichen Erfüllungswert, falls das Promise stattdessen erfüllt wird.
- {{jsxref("Promise.prototype.finally()")}}
  - : Hängt einen Handler an das Promise an und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst wird. Der Handler wird aufgerufen, wenn das Promise settled wird, unabhängig davon, ob es erfüllt oder abgelehnt wurde.
- {{jsxref("Promise.prototype.then()")}}
  - : Hängt fulfillment und rejection handlers an das Promise an und gibt ein neues Promise zurück, das zum Rückgabewert des aufgerufenen Handlers aufgelöst wird oder zum ursprünglichen settled Wert, falls das Promise nicht behandelt wurde (d.h. wenn der relevante Handler `onFulfilled` oder `onRejected` keine Funktion ist).

## Beispiele

### Einfaches Beispiel

In diesem Beispiel verwenden wir `setTimeout(...)`, um asynchronen Code zu simulieren.
In der Praxis werden Sie wahrscheinlich etwas wie XHR oder eine HTML-API verwenden.

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

Dieses Beispiel zeigt verschiedene Techniken zur Verwendung von Promise-Funktionen und unterschiedliche Situationen, die auftreten können. Um dies zu verstehen, beginnen Sie damit, zum Ende des Codeblocks zu scrollen und die Promise-Kette zu untersuchen. Nach Bereitstellung eines initialen Promise kann eine Kette von Promises folgen. Die Kette besteht aus `.then()`-Aufrufen und hat typischerweise, aber nicht notwendigerweise, ein einzelnes `.catch()` am Ende, dem optional `.finally()` folgt. In diesem Beispiel wird die Promise-Kette durch ein selbst geschriebenes `new Promise()`-Konstrukt gestartet; in der Praxis beginnen Promise-Ketten jedoch häufiger mit einer API-Funktion (die von jemand anderem geschrieben wurde), die ein Promise zurückgibt.

Die Beispielfunktion `tetheredGetNumber()` zeigt, dass ein Promise-Generator `reject()` beim Einrichten eines asynchronen Aufrufs, innerhalb des Callbacks oder in beiden Fällen verwendet. Die Funktion `promiseGetWord()` veranschaulicht, wie eine API-Funktion ein Promise eigenständig erzeugen und zurückgeben kann.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Dies ist erforderlich, weil eine Promise-Kette alle `.then()`-Promises durchläuft, selbst nach einem Fehler, und der Fehler ohne `throw` scheinbar „behoben“ wäre. Das ist umständlich, und aus diesem Grund ist es üblich, `onRejected` in der gesamten Kette von `.then()`-Promises wegzulassen und nur ein einzelnes `onRejected` im abschließenden `catch()` zu verwenden.

Dieser Code kann unter Node.js ausgeführt werden. Das Verständnis wird verbessert, wenn Sie die Fehler tatsächlich auftreten sehen. Ändern Sie die `threshold`-Werte, um weitere Fehler zu erzwingen.

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

### Erweitertes Beispiel

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die Methode `testPromise()` wird jedes Mal aufgerufen, wenn auf das {{HTMLElement("button")}} geklickt wird. Sie erstellt ein Promise, das mithilfe von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) nach zufällig 1–3 Sekunden mit der Promise-Anzahl (eine bei 1 beginnende Zahl) erfüllt wird. Der `Promise()`-Konstruktor wird verwendet, um das Promise zu erstellen.

Die Erfüllung des Promise wird über einen fulfill callback protokolliert, der mit {{jsxref("Promise/then", "p1.then()")}} festgelegt wurde. Einige Protokolle zeigen, wie der synchrone Teil der Methode vom asynchronen Abschluss des Promise entkoppelt ist.

Wenn Sie in kurzer Zeit mehrmals auf die Schaltfläche klicken, werden Sie sogar sehen, wie die verschiedenen Promises nacheinander erfüllt werden.

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

Ein weiteres Beispiel für die Verwendung von `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zum Laden eines Bildes ist unten dargestellt.
Jeder Schritt ist kommentiert und ermöglicht es Ihnen, die Promise- und XHR-Architektur genau nachzuverfolgen.

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

### Nachverfolgung des Incumbent-Settings-Objekts

Ein Settings-Objekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen bereitstellt, während JavaScript-Code ausgeführt wird. Dazu gehören das Realm und die Modulzuordnung sowie HTML-spezifische Informationen wie die Origin. Das Incumbent-Settings-Objekt wird nachverfolgt, um sicherzustellen, dass der Browser weiß, welches Objekt für einen bestimmten Abschnitt von Benutzercode verwendet werden soll.

Um dies besser zu veranschaulichen, können wir genauer betrachten, warum das Realm ein Problem sein kann. Ein **Realm** kann grob als globales Objekt angesehen werden. Das Besondere an Realms ist, dass sie alle notwendigen Informationen zum Ausführen von JavaScript-Code enthalten. Dazu gehören Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Settings-Objekt hat seine eigene „Kopie“ davon, und diese werden nicht gemeinsam genutzt. Das kann im Zusammenhang mit Promises zu unerwartetem Verhalten führen. Um dies zu umgehen, verfolgen wir etwas, das **incumbent settings object** genannt wird. Es repräsentiert Informationen, die spezifisch für den Kontext des Benutzercodes sind, der für einen bestimmten Funktionsaufruf verantwortlich ist.

Zur weiteren Veranschaulichung können wir betrachten, wie ein in ein Dokument eingebettetes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) mit seinem Host kommuniziert. Da alle Web-APIs das Incumbent-Settings-Objekt kennen, funktioniert Folgendes in allen Browsern:

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

Dasselbe Konzept gilt für Promises. Wenn wir das obige Beispiel etwas ändern, erhalten wir Folgendes:

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

Wenn wir dies so ändern, dass das `<iframe>` im Dokument auf Post Messages lauscht, können wir die Auswirkung des Incumbent-Settings-Objekts beobachten:

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

Im obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das Incumbent-Settings-Objekt nachverfolgt wird. Denn ohne Nachverfolgung des Incumbent könnten wir am Ende die falsche Umgebung zum Senden der Nachricht verwenden.

> [!NOTE]
> Derzeit ist die Nachverfolgung des Incumbent-Realm in Firefox vollständig implementiert und in Chrome und Safari teilweise implementiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- Leitfaden [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [Promises/A+-Spezifikation](https://promisesaplus.com/)
- [JavaScript Promises: eine Einführung](https://web.dev/articles/promises) auf web.dev (2013)
- [Callbacks, Promises, and Coroutines: Asynchronous Programming Patterns in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720), Folienpräsentation von Domenic Denicola (2011)
