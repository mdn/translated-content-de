---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: 9bda33365e40b6c609fa5190a0af9b5dc6438cf0
---

Das **`Promise`**-Objekt repräsentiert den zukünftigen Abschluss (oder das Scheitern) einer asynchronen Operation und deren resultierenden Wert.

Um zu erfahren, wie Promises funktionieren und wie Sie sie verwenden können, empfehlen wir Ihnen, zuerst [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Stellvertreter für einen Wert, der nicht unbedingt bekannt ist, wenn das Promise erstellt wird. Es ermöglicht Ihnen, Handler mit dem Ergebnis einer asynchronen Aktion oder dem Grund für deren Scheitern zu verknüpfen. Dadurch können asynchrone Methoden Werte wie synchrone Methoden zurückgeben: Anstatt den Endwert sofort zurückzugeben, gibt die asynchrone Methode ein _Promise_ zurück, um den Wert zu einem späteren Zeitpunkt bereitzustellen.

Ein `Promise` befindet sich in einem der folgenden Zustände:

- _pending_: Anfangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: Bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: Bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines noch nicht entschiedenen Promises kann entweder _erfüllt_ mit einem Wert oder _abgelehnt_ mit einem Grund (Fehler) sein. Wenn eine dieser beiden Optionen eintritt, werden die zugehörigen Handler aufgerufen, die durch die `then`-Methode eines Promises in die Warteschlange gestellt wurden. Wenn das Promise bereits erfüllt oder abgelehnt ist, wenn ein entsprechender Handler hinzugefügt wird, wird der Handler aufgerufen, sodass es keine Rennbedingung zwischen dem Abschluss einer asynchronen Operation und dem Anbringen ihrer Handler gibt.

Ein Promise ist _abgewickelt_, wenn es entweder erfüllt oder abgelehnt wurde, aber nicht mehr im Schwebezustand ist.

![Flussdiagramm, das zeigt, wie der Promise-Zustand zwischen ausstehend, erfüllt und abgelehnt über then/catch-Handler wechselt. Ein ausstehendes Promise kann entweder erfüllt oder abgelehnt werden. Wenn erfüllt, wird der "bei Erfüllung"-Handler oder das erste Argument der then()-Methode ausgeführt und führt weitere asynchrone Aktionen aus. Wenn abgelehnt, wird der Fehler-Handler entweder als zweites Argument der then()-Methode oder als einziges Argument der catch()-Methode ausgeführt.](promises.png)

Sie werden auch den Begriff _aufgelöst_ in Bezug auf Promises hören – dies bedeutet, dass das Promise abgewickelt oder "festgelegt" ist, um den endgültigen Zustand eines anderen Promises zu widerspiegeln, und ein weiteres Auflösen oder Ablehnen hat keine Auswirkungen. Das Dokument [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) aus dem ursprünglichen Promise-Vorschlag enthält mehr Details zur Promise-Terminologie. Umgangssprachlich werden "aufgelöste" Promises oft als "erfüllte" Promises bezeichnet, aber wie in "States and fates" veranschaulicht, können aufgelöste Promises auch im Schwebezustand oder abgelehnt sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist bereits _aufgelöst_, wenn es erstellt wird (weil `resolveOuter` synchron aufgerufen wird), aber es wird mit einem anderen Promise aufgelöst und daher erst 1 Sekunde später _erfüllt_, wenn das innere Promise erfüllt wird. In der Praxis erfolgt die "Auflösung" oft im Hintergrund und ist nicht beobachtbar, und nur die Erfüllung oder Ablehnung ist es.

> [!NOTE]
> Mehrere andere Sprachen haben Mechanismen für Lazy Evaluation und das Aufschieben einer Berechnung, die sie ebenfalls "Promises" nennen, z. B. Scheme. Promises in JavaScript stellen Prozesse dar, die bereits stattfinden und mit Callback-Funktionen verkettet werden können. Wenn Sie einen Ausdruck lazy evaluieren möchten, ziehen Sie in Betracht, eine Funktion ohne Argumente zu verwenden, z. B. `f = () => ausdruck`, um den lazy evaluierbaren Ausdruck zu erstellen, und `f()` zur sofortigen Evaluierung des Ausdrucks.

`Promise` selbst hat kein erstklassiges Protokoll zur Stornierung, aber Sie können möglicherweise die zugrunde liegende asynchrone Operation direkt stornieren, typischerweise unter Verwendung von [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Promises

Die Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um weitere Aktionen mit einem Promise zu verknüpfen, das abgewickelt wird. Die `then()`-Methode akzeptiert bis zu zwei Argumente; das erste Argument ist eine Callback-Funktion für den Fall, dass das Promise erfüllt wird, das zweite Argument ist eine Callback-Funktion für den Fall, dass das Promise abgelehnt wird. Die `catch()`- und `finally()`-Methoden rufen intern `then()` auf und machen die Fehlerbehandlung weniger umständlich. Beispielsweise ist ein `catch()` eigentlich nur ein `then()` ohne die Übergabe des Erfüllungshandlers. Da diese Methoden Promises zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Wir werden die folgende Terminologie verwenden: Das _initiale Promise_ ist das Promise, auf dem `then` aufgerufen wird; das _neue Promise_ ist das Promise, das von `then` zurückgegeben wird. Die beiden zu `then` übergebenen Callbacks werden als _Erfüllungshandler_ und _Ablehnungshandler_ bezeichnet.

Der abgewickelte Zustand des initialen Promises bestimmt, welcher Handler ausgeführt wird.

- Wenn das initiale Promise erfüllt ist, wird der Erfüllungshandler mit dem Erfüllungswert aufgerufen.
- Wenn das initiale Promise abgelehnt wird, wird der Ablehnungshandler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss des Handlers bestimmt den abgewickelten Zustand des neuen Promises.

- Wenn der Handler einen [Thenable](#thenables) Wert zurückgibt, wird das neue Promise im gleichen Zustand wie der zurückgegebene Wert abgewickelt.
- Wenn der Handler einen nicht-thenable Wert zurückgibt, wird das neue Promise mit dem zurückgegebenen Wert erfüllt.
- Wenn der Handler einen Fehler wirft, wird das neue Promise mit dem geworfenen Fehler abgelehnt.
- Wenn das initiale Promise keinen entsprechenden Handler hat, wird das neue Promise im gleichen Zustand wie das initiale Promise abgewickelt – das heißt, ohne einen Ablehnungshandler bleibt ein abgelehntes Promise mit dem gleichen Grund abgelehnt.

Zum Beispiel, im obigen Code, wenn `myPromise` abgelehnt wird, wird `handleRejectedA` aufgerufen, und wenn `handleRejectedA` normal abschließt (ohne zu werfen oder ein abgelehntes Promise zurückzugeben), wird das durch das erste `then` zurückgegebene Promise erfüllt, anstatt abgelehnt zu bleiben. Daher, wenn ein Fehler sofort behandelt werden muss, wir aber den Fehlerstatus in der Kette erhalten möchten, müssen wir einen Fehler irgendeiner Art im Ablehnungshandler werfen. Andererseits, in Abwesenheit eines sofortigen Bedarfs, können wir die Fehlerbehandlung bis zum endgültigen `catch()`-Handler aufschieben.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Verwendung von [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen kann die Implementierung der Promise-Kette in etwa so aussehen:

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
> Für eine schnellere Ausführung sollten alle synchronen Aktionen vorzugsweise innerhalb eines Handlers erfolgen, andernfalls würde es mehrere Ticks brauchen, um alle Handler der Reihe nach auszuführen.

JavaScript pflegt eine [Job-Warteschlange](/de/docs/Web/JavaScript/Reference/Execution_model). Jedes Mal wählt JavaScript einen Job aus der Warteschlange aus und führt ihn komplett aus. Die Jobs werden durch den Executor des `Promise()`-Konstruktors definiert, die an `then` übergebenen Handler oder jede Plattform-API, die ein Promise zurückgibt. Die Promises in einer Kette repräsentieren die Abhängigkeitsbeziehung zwischen diesen Jobs. Wenn ein Promise abgewickelt wird, werden die jeweiligen Handler, die mit ihm verbunden sind, am Ende der Job-Warteschlange hinzugefügt.

Ein Promise kann Teil mehrerer Ketten sein. Im folgenden Code wird die Erfüllung von `promiseA` sowohl `handleFulfilled1` als auch `handleFulfilled2` zur Job-Warteschlange hinzufügen. Weil `handleFulfilled1` zuerst registriert wird, wird es zuerst aufgerufen.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits abgewickelten Promise zugewiesen werden. In diesem Fall wird die Aktion sofort am Ende der Job-Warteschlange hinzugefügt und ausgeführt, wenn alle bestehenden Jobs abgeschlossen sind. Daher wird eine Aktion für ein bereits "abgewickeltes" Promise nur stattfinden, nachdem der aktuelle synchronisierte Code abgeschlossen ist und mindestens ein Schleifentick vergangen ist. Dies garantiert, dass Promise-Aktionen asynchron sind.

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

Das JavaScript-Ökosystem hatte mehrere Promise-Implementierungen lange bevor es Teil der Sprache wurde. Trotz ihrer unterschiedlichen internen Repräsentationen implementieren alle Promise-ähnlichen Objekte mindestens das _Thenable_-Interface. Ein Thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode, die mit zwei Callbacks aufgerufen wird: eins für den Fall, dass das Promise erfüllt wird, und eins, wenn es abgelehnt wird. Promises sind ebenfalls Thenables.

Um mit den bestehenden Promise-Implementierungen zu interagieren, erlaubt die Sprache die Verwendung von Thenables anstelle von Promises. Beispielsweise wird [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur Promises auflösen, sondern auch Thenables verfolgen.

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

Die `then()`-Methode ist verantwortlich für die Planung der Ausführung der bereitgestellten `onFulfilled` und `onRejected` Callbacks. Ihre Semantik, einschließlich Fehlerbehandlung und Asynchronität, ist in der [Promises/A+ Spezifikation](https://promisesaplus.com/) genau definiert, und wir werden sie hier nicht wiederholen. Es ist sehr selten, dass Sie selbst einen Thenable implementieren müssen; selbst wenn Sie keine nativen Promises verwenden, würden Sie wahrscheinlich eine Promise-Bibliothek wie [Bluebird](https://www.npmjs.com/package/bluebird) verwenden.

### Promise-Konkurrenz

Die `Promise`-Klasse bietet vier Hauptmethoden zur Unterstützung von asynchronen Aufgaben [Konkurrenz](https://en.wikipedia.org/wiki/Concurrent_computing):

- {{jsxref("Promise.all()")}}
  - : Erfüllt, wenn **alle** Promises erfüllt sind; lehnt ab, wenn **irgendein** Promise abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt, wenn **alle** Promises abgewickelt sind.
- {{jsxref("Promise.any()")}}
  - : Erfüllt, wenn **irgendein** Promise erfüllt wird; lehnt ab, wenn **alle** Promises abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Wird abgewickelt, wenn **irgendein** Promise abgewickelt wird. Mit anderen Worten, erfüllt, wenn irgendein Promise erfüllt wird; lehnt ab, wenn irgendein Promise abgelehnt wird.

Alle diese Methoden nehmen ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises ([Thenables](#thenables), um genau zu sein) und geben ein neues Promise zurück. Sie unterstützen alle die Unterklassenbildung, was bedeutet, dass sie auf Unterklassen von `Promise` aufgerufen werden können, und das Ergebnis wird ein Promise des Unterklassentyps sein. Dazu muss der Konstruktor der Unterklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktor implementieren – erfordert eine einzelne `executor`-Funktion, die mit den `resolve` und `reject` Callbacks als Parameter aufgerufen werden kann. Die Unterklasse muss auch eine `resolve`-statische Methode besitzen, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte zu Promises aufzulösen.

Es gibt zwei weitere praktische statische Methoden: {{jsxref("Promise.allKeyed()")}} und {{jsxref("Promise.allSettledKeyed()")}}, die sich wie `Promise.all()` und `Promise.allSettled()` verhalten, jedoch _Objekte_ von Promises nehmen und Promises zurückgeben, die mit _Objekten_ der gleichen Form erfüllt werden. Durch die Arbeit mit Objekten anstelle von Arrays können Sie Ergebnisse mit semantisch sinnvollen Schlüsseln verknüpfen, anstatt mit willkürlichen Array-Orders, die schwer zu verwalten sind.

Diese Methoden hängen Handler an jedes Eingabe-Promise mit {{jsxref("Promise/then", "then()")}}. Selbst wenn das resultierende Promise früh abgewickelt ist (wie wenn ein Eingabeelement in `Promise.race()` abgewickelt wird), werden die anderen Handler nicht entfernt. Wiederholtes Übergeben desselben ausstehenden Promises an Konkurrenzmethoden kann Handler ansammeln, selbst wenn diese Handler nie verwendet werden:

```js
const pendingPromise = new Promise(() => {});

for (let i = 0; i < 1000; i++) {
  await Promise.race([Promise.resolve(0), pendingPromise]);
}
// All tasks have completed, but pendingPromise retains the
// handlers attached by all 1000 races.
```

Promises bieten keinen Weg, um diese Handler abzubestellen; sie bleiben verbunden, während das Eingabe-Promise aussteht und erreichbar ist. Wo möglich, stornieren Sie die zugrunde liegende Operation, indem Sie ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) verwenden, wenn das ausstehende Promise nicht mehr nützlich ist.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "einzelsträngig")}} ist, daher wird zu einem gegebenen Zeitpunkt nur eine Aufgabe ausgeführt, obwohl die Kontrolle zwischen verschiedenen Promises wechseln kann, was die Ausführung der Promises scheinbar gleichzeitig erscheinen lässt. [Parallele Ausführung](https://en.wikipedia.org/wiki/Parallel_computing) in JavaScript kann nur durch [Arbeiter-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise` Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu kapseln, die bereits keine Unterstützung für Promises bieten.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus Promisemethoden zu konstruieren.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises der Eingabe erfüllt sind (einschließlich, wenn ein leeres iterierbares Objekt übergeben wird), mit einem Array der Erfüllungswerte. Es wird abgelehnt, wenn eines der Eingabe-Promises abgelehnt wird, mit diesem ersten Ablehnungsgrund.
- {{jsxref("Promise.allKeyed()")}} {{experimental_inline}}
  - : Wie `Promise.all()`, außer dass es ein Objekt von Promises nimmt und ein Promise zurückgibt, das mit einem Objekt der gleichen Form erfüllt wird, sodass Sie Ergebnisse mit semantisch sinnvollen Schlüsseln verknüpfen können.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle der Eingabe-Promises abgewickelt sind (einschließlich, wenn ein leeres iterierbares Objekt übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes Promises beschreiben.
- {{jsxref("Promise.allSettledKeyed()")}} {{experimental_inline}}
  - : Wie `Promise.allSettled()`, außer dass es ein Objekt von Promises nimmt und ein Promise zurückgibt, das mit einem Objekt der gleichen Form erfüllt wird, sodass Sie Ergebnisse mit semantisch sinnvollen Schlüsseln verknüpfen können.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn ein beliebiges der Eingabe-Promises erfüllt ist, mit diesem ersten Erfüllungswert. Es wird abgelehnt, wenn alle der Eingabe-Promises abgelehnt werden (einschließlich, wenn ein leeres iterierbares Objekt übergeben wird), mit einem {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird mit dem endgültigen Zustand des ersten Promises abgewickelt, das abgewickelt wird.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem angegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem angegebenen Wert aufgelöst wird. Wenn der Wert ein Thenable ist (d.h. eine `then`-Methode hat), wird das zurückgegebene Promise diesem Thenable "folgen" und dessen endgültigen Zustand einnehmen; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Nimmt einen Callback beliebiger Art (gibt zurück oder wirft, synchron oder asynchron) und kapselt dessen Ergebnis in einem `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen zum Auflösen oder Ablehnen enthält, die den beiden Parametern entsprechen, die dem Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise` Instanzen geteilt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Promise` Instanzen ist der Anfangswert der {{jsxref("Promise/Promise", "Promise")}}-Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Hängt einen Ablehnungshandler an das Promise an und gibt ein neues Promise zurück, das zum Rückgabewert des Callbacks aufgelöst wird, wenn es aufgerufen wird, oder zu seinem ursprünglichen Erfüllungswert, wenn das Promise stattdessen erfüllt ist.
- {{jsxref("Promise.prototype.finally()")}}
  - : Hängt einen Handler an das Promise an und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst wird. Der Handler wird aufgerufen, wenn das Promise abgewickelt wird, egal ob erfüllt oder abgelehnt.
- {{jsxref("Promise.prototype.then()")}}
  - : Hängt Erfüllungs- und Ablehnungshandler an das Promise an und gibt ein neues Promise zurück, das zum Rückgabewert des aufgerufenen Handlers aufgelöst wird, oder zu seinem ursprünglichen abgewickelten Wert, wenn das Promise nicht behandelt wurde (d.h. wenn der relevante Handler `onFulfilled` oder `onRejected` keine Funktion ist).

## Beispiele

### Einfaches Beispiel

In diesem Beispiel verwenden wir `setTimeout(...)`, um asynchronen Code zu simulieren.
In der Realität verwenden Sie wahrscheinlich etwas wie XHR oder eine HTML API.

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

Dieses Beispiel zeigt unterschiedliche Techniken zur Verwendung von Promise-Funktionen und verschiedene Situationen, die auftreten können. Um dies zu verstehen, scrollen Sie zuerst zum Ende des Codeblocks und betrachten Sie die Promise-Kette. Bei Bereitstellung eines anfänglichen Promises kann eine Kette von Promises folgen. Die Kette besteht aus `.then()` Aufrufen und hat typischerweise (aber nicht unbedingt) ein einzelnes `.catch()` am Ende, gefolgt von einem optionalen `.finally()`. In diesem Beispiel wird die Promise-Kette durch ein selbst geschriebenes `new Promise()` Konstrukt initialisiert; aber in der Praxis beginnen Promise-Ketten typischerweise mit einer API-Funktion (geschrieben von jemand anderem), die ein Promise zurückgibt.

Die Beispiel-Funktion `tetheredGetNumber()` zeigt, dass ein Promise-Generator `reject()` während der Einrichtung eines asynchronen Aufrufs oder innerhalb des Callbacks oder beides verwenden kann. Die Funktion `promiseGetWord()` illustriert, wie eine API-Funktion möglicherweise ein Promise in einer eigenständigen Weise generiert und zurückgibt.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Dies ist erzwungen, weil eine Promise-Kette alle `.then()` Promises durchläuft, selbst nach einem Fehler, und ohne das `throw` würde der Fehler "behoben" erscheinen. Dies ist mühsam, und aus diesem Grund ist es üblich, `onRejected` in der gesamten Kette der `.then()` Promises auszulassen und nur ein einzelnes `onRejected` im abschließenden `catch()` zu haben.

Dieser Code kann unter Node.js ausgeführt werden. Das Verständnis wird verbessert, indem man die Fehler tatsächlich auftreten sieht. Um mehr Fehler zu erzwingen, ändern Sie die `threshold` Werte.

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

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die `testPromise()` Methode wird jedes Mal aufgerufen, wenn der {{HTMLElement("button")}} geklickt wird. Sie erstellt ein Promise, das erfüllt wird, unter Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Promises zu zählen (beginnend bei 1) alle 1-3 Sekunden, zufällig. Der `Promise()`-Konstruktor wird verwendet, um das Promise zu erstellen.

Die Erfüllung des Promises wird protokolliert, über einen Erfüllungscallback mit {{jsxref("Promise/then", "p1.then()")}}. Einige Protokolle zeigen, wie der synchrone Teil der Methode von der asynchronen Erfüllung des Promises entkoppelt ist.

Indem Sie den Button mehrmals in kurzer Zeit klicken, sehen Sie sogar, wie die verschiedenen Promises nacheinander erfüllt werden.

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

Ein weiteres Beispiel mit `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zum Laden eines Bildes ist unten gezeigt.
Jeder Schritt ist kommentiert und ermöglicht es Ihnen, die Architektur von Promise und XHR genau zu verfolgen.

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

### Verfolgung des inkumbenten Einstellungsobjekts

Ein Einstellungsobjekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen bereitstellt, wenn JavaScript-Code ausgeführt wird. Dies umfasst den Bereich und die Modulkarten sowie HTML-spezifische Informationen wie den Ursprung. Das inkumbente Einstellungsobjekt wird verfolgt, um sicherzustellen, dass der Browser weiß, welches für ein bestimmtes Stück Benutzer-Code verwendet werden muss.

Um dies besser zu verdeutlichen, können wir uns näher ansehen, wie der Bereich ein Problem darstellen könnte. Ein **Bereich** kann ungefähr als das globale Objekt betrachtet werden. Das Besondere an Bereichen ist, dass sie alle notwendigen Informationen enthalten, um JavaScript-Code auszuführen. Dies umfasst Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Einstellungsobjekt hat seine eigene "Kopie" dieser und sie sind nicht geteilt. Das kann zu unerwartetem Verhalten im Zusammenhang mit Promises führen. Um diesem Problem zu entgegnen, verfolgen wir etwas, das als **inkumbentes Einstellungsobjekt** bezeichnet wird. Dies stellt Informationen dar, die spezifisch für den Kontext des Benutzercodes verantwortlich für einen bestimmten Funktionsaufruf sind.

Um dies weiter zu veranschaulichen, können wir uns ansehen, wie ein [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), das in ein Dokument eingebettet ist, mit seinem Host kommuniziert. Da alle Web-APIs sich des inkumbenten Einstellungsobjekts bewusst sind, funktioniert das folgende Beispiel in allen Browsern:

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

Dasselbe Konzept gilt für Promises. Wenn wir das obige Beispiel ein wenig modifizieren, erhalten wir Folgendes:

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

Wenn wir dies so ändern, dass das `<iframe>` im Dokument auf Postnachrichten lauscht, können wir den Effekt des inkumbenten Einstellungsobjekts beobachten:

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

Im obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das inkumbente Einstellungsobjekt verfolgt wird. Das liegt daran, dass wir ohne das Tracking des Inkumbenten möglicherweise die falsche Umgebung verwenden, um die Nachricht zu senden.

> [!NOTE]
> Aktuell ist das Tracking des Inkumbenten-Bereichs vollständig in Firefox implementiert und hat teilweise Implementierungen in Chrome und Safari.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [JavaScript Promises: eine Einführung](https://web.dev/articles/promises) auf web.dev (2013)
- [Callbacks, Promises und Coroutinen: Asynchrone Programmiermuster in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Präsentation von Domenic Denicola (2011)
