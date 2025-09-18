---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Das **`Promise`**-Objekt repräsentiert den zukünftigen Abschluss (oder das Scheitern) einer asynchronen Operation und deren resultierenden Wert.

Um mehr darüber zu erfahren, wie Versprechen funktionieren und wie Sie sie verwenden können, empfehlen wir Ihnen, zunächst [Verwendung von Versprechen](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Stellvertreter für einen Wert, der möglicherweise noch nicht bekannt ist, wenn das Versprechen erstellt wird. Es ermöglicht Ihnen, Handler mit dem zukünftigen Erfolgswert oder dem Grund für das Scheitern einer asynchronen Aktion zu verknüpfen. Dies ermöglicht es asynchronen Methoden, Werte ähnlich wie synchron zu liefern: Anstatt den endgültigen Wert sofort zurückzugeben, liefert die asynchrone Methode ein _Versprechen_, den Wert irgendwann in der Zukunft bereitzustellen.

Ein `Promise` befindet sich in einem dieser Zustände:

- _pending_: Anfangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines noch ausstehenden Versprechens kann entweder _erfüllt_ mit einem Wert oder _abgelehnt_ mit einem Grund (Fehler) sein. Sobald eine dieser Optionen eintritt, werden die mit der `then`-Methode eines Versprechens verknüpften Handler aufgerufen. Wenn das Versprechen bereits erfüllt oder abgelehnt ist, wenn ein entsprechender Handler angefügt wird, wird der Handler aufgerufen, sodass es kein Wettrennen zwischen der Vollendung einer asynchronen Operation und dem Anhängen ihrer Handler gibt.

Ein Versprechen gilt als _abgeschlossen_, wenn es entweder erfüllt oder abgelehnt ist, aber nicht aussteht.

![Flussdiagramm, das zeigt, wie der Promise-Zustand durch then/catch-Handler zwischen ausstehend, erfüllt und abgelehnt wechselt. Ein ausstehendes Versprechen kann entweder erfüllt oder abgelehnt werden. Wenn es erfüllt ist, wird der "bei Erfüllung"-Handler oder der erste Parameter der then()-Methode ausgeführt und führt weitere asynchrone Aktionen aus. Bei Ablehnung wird der Fehler-Handler ausgeführt, der entweder als zweiter Parameter der then()-Methode oder als einziger Parameter der catch()-Methode übergeben wird.](promises.png)

Sie werden auch den Begriff _gelöst_ im Zusammenhang mit Versprechen hören – das bedeutet, dass das Versprechen abgeschlossen ist oder „festgelegt“, um den endgültigen Zustand eines anderen Versprechens zu entsprechen, und eine weitere Lösung oder Ablehnung hat keinen Effekt. Das Dokument [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) aus dem ursprünglichen Promise-Vorschlag enthält mehr Details zur Promiseterminologie. Umgänglich sind „gelöste“ Versprechen oft gleichbedeutend mit „erfüllten“ Versprechen, aber wie in „States and fates“ illustriert, können gelöste Versprechen auch ausstehend oder abgelehnt sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Versprechen ist bereits _gelöst_ zum Zeitpunkt seiner Erstellung (weil `resolveOuter` synchron aufgerufen wird), aber es wird mit einem anderen Versprechen gelöst und wird daher 1 Sekunde später _erfüllt_, wenn das innere Versprechen erfüllt ist. In der Praxis wird die "Lösung" oft im Hintergrund durchgeführt und ist nicht sichtbar, und nur ihre Erfüllung oder Ablehnung sind es.

> [!NOTE]
> Mehrere andere Sprachen haben Mechanismen für faule Auswertung und das Verschieben einer Berechnung, die sie auch „Versprechen“ nennen, z. B. Scheme. Versprechen in JavaScript repräsentieren Prozesse, die bereits ablaufen und die mit Callback-Funktionen verkettet werden können. Wenn Sie eine faule Auswertung eines Ausdrucks wünschen, ziehen Sie in Betracht, eine Funktion ohne Argumente zu verwenden, z. B. `f = () => Ausdruck`, um den faul ausgewerteten Ausdruck zu erstellen, und `f()`, um den Ausdruck sofort auszuwerten.

`Promise` selbst hat kein erstklassiges Protokoll für die Stornierung, aber Sie können möglicherweise die zugrunde liegende asynchrone Operation direkt stornieren, normalerweise mit [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Versprechen

Die Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}}, und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um weitere Aktionen mit einem Versprechen zu verknüpfen, das abgeschlossen wird. Die `then()`-Methode nimmt bis zu zwei Argumente an; das erste Argument ist eine Callback-Funktion für den Erfüllungsfall des Versprechens, und das zweite Argument ist eine Callback-Funktion für den Ablehnungsfall. Die `catch()`- und `finally()`-Methoden rufen intern `then()` auf und machen die Fehlerbehandlung weniger wortreich. Zum Beispiel ist ein `catch()` wirklich nur ein `then()` ohne Weitergabe des Erfüllungs-Handlers. Da diese Methoden Versprechen zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Wir werden die folgende Terminologie verwenden: _ursprüngliches Versprechen_ ist das Versprechen, auf dem `then` aufgerufen wird; _neues Versprechen_ ist das Versprechen, das von `then` zurückgegeben wird. Die zwei an `then` übergebenen Rückruffunktionen werden jeweils als _Erfüllungs-Handler_ und _Ablehnungs-Handler_ bezeichnet.

Der abgeschlossene Zustand des ursprünglichen Versprechens bestimmt, welcher Handler ausgeführt wird.

- Wenn das ursprüngliche Versprechen erfüllt ist, wird der Erfüllungs-Handler mit dem Erfüllungswert aufgerufen.
- Wenn das ursprüngliche Versprechen abgelehnt ist, wird der Ablehnungs-Handler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss des Handlers bestimmt den abgeschlossenen Zustand des neuen Versprechens.

- Wenn der Handler einen [thenable](#thenables) Wert zurückgibt, setzt sich das neue Versprechen in denselben Zustand wie der zurückgegebene Wert.
- Wenn der Handler einen nicht-thenable Wert zurückgibt, wird das neue Versprechen mit dem zurückgegebenen Wert erfüllt.
- Wenn der Handler einen Fehler auslöst, wird das neue Versprechen mit dem ausgelösten Fehler abgelehnt.
- Wenn das ursprüngliche Versprechen keinen entsprechenden Handler angefügt hat, wird das neue Versprechen denselben Zustand wie das ursprüngliche Versprechen einnehmen – das heißt, ohne Ablehnungs-Handler bleibt ein abgelehntes Versprechen mit demselben Grund abgelehnt.

Zum Beispiel wird im obigen Code, wenn `myPromise` abgelehnt wird, `handleRejectedA` aufgerufen, und wenn `handleRejectedA` normal (d.h. ohne Fehler auszulösen oder ein abgelehntes Versprechen zurückzugeben) abgeschlossen wird, wird das von der ersten `then` zurückgegebene Versprechen erfüllt anstatt abgelehnt zu bleiben. Daher, wenn ein Fehler sofort behandelt werden muss, wir aber den Fehlerzustand in der Kette beibehalten wollen, müssen wir im Ablehnungs-Handler irgendeinen Typ von Fehler auslösen. Auf der anderen Seite, wenn keine sofortige Notwendigkeit besteht, können wir die Fehlerbehandlung bis zum finalen `catch()`-Handler weglassen.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Mit [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen könnte die Implementierung der Promise-Kette ungefähr so aussehen:

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
> Für schnellere Ausführung sollten alle synchronen Aktionen vorzugsweise innerhalb eines Handlers durchgeführt werden, andernfalls würde es mehrere Ticks dauern, um alle Handler nacheinander auszuführen.

JavaScript verwaltet eine [Job-Warteschlange](/de/docs/Web/JavaScript/Reference/Execution_model). Jedes Mal wählt JavaScript einen Job aus der Warteschlange und führt ihn komplett aus. Die Jobs werden durch den Executor des `Promise()`-Konstruktors, die an `then` übergebenen Handler oder eine beliebige Plattform-API, die ein Versprechen zurückgibt, definiert. Die Versprechen in einer Kette stellen die Abhängigkeitsbeziehung zwischen diesen Jobs dar. Wenn ein Versprechen abgeschlossen ist, werden die entsprechenden Handler, die damit verknüpft sind, an das Ende der Job-Warteschlange angehängt.

Ein Versprechen kann an mehr als einer Kette teilnehmen. Für den folgenden Code wird die Erfüllung von `promiseA` sowohl `handleFulfilled1` als auch `handleFulfilled2` zur Job-Warteschlange hinzufügen. Da `handleFulfilled1` zuerst registriert wurde, wird es zuerst aufgerufen.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits abgeschlossenen Versprechen zugewiesen werden. In diesem Fall wird die Aktion sofort an das Ende der Job-Warteschlange angehängt und wird ausgeführt, wenn alle bestehenden Jobs abgeschlossen sind. Daher tritt eine Aktion für ein bereits "abgeschlossenes" Versprechen nur auf, nachdem der aktuelle synchrone Code abgeschlossen ist und mindestens ein Schleifen-Tick vergangen ist. Dies garantiert, dass Promise-Aktionen asynchron sind.

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

Das JavaScript-Ökosystem hatte lange قبل promise-Implementierungen eingeführt, bevor es Teil der Sprache wurde. Obwohl sie intern unterschiedlich dargestellt werden, implementieren alle Promise-ähnlichen Objekte mindestens die _Thenable_-Schnittstelle. Ein Thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode, die mit zwei Callback-Funktionen aufgerufen wird: eine, wenn das Versprechen erfüllt ist, eine, wenn es abgelehnt ist. Versprechen sind ebenfalls Thenables.

Um mit den bestehenden Promise-Implementierungen zu interagieren, erlaubt die Sprache die Verwendung von Thenables anstelle von Promises. Zum Beispiel wird [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur Versprechen auflösen, sondern auch Thenables folgen.

```js
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

### Promise-Konkurrenz

Die `Promise`-Klasse bietet vier statische Methoden, um die asynchrone Aufgaben-[Konkurrenz](https://en.wikipedia.org/wiki/Concurrent_computing) zu erleichtern:

- {{jsxref("Promise.all()")}}
  - : Erfüllt sich, wenn **alle** der Versprechen erfüllt werden; lehnt ab, wenn **irgendeines** der Versprechen abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt sich, wenn **alle** Versprechen abgeschlossen sind.
- {{jsxref("Promise.any()")}}
  - : Erfüllt sich, wenn **jedes** der Versprechen erfüllt wird; lehnt ab, wenn **alle** der Versprechen abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Wird abgeschlossen, wenn **irgendeines** der Versprechen abgeschlossen ist. Mit anderen Worten, erfüllt sich, wenn irgendeines der Versprechen erfüllt wird; lehnt ab, wenn irgendeines der Versprechen abgelehnt wird.

Alle diese Methoden nehmen ein [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises (genauer gesagt, Thenables) und geben ein neues Versprechen zurück. Sie unterstützen alle das Subclassing, was bedeutet, dass sie auf Unterklassen von `Promise` aufgerufen werden können und das Ergebnis ein Versprechen des Subklassen-Typs ist. Dazu muss der Konstruktor der Unterklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren – akzeptiert eine einzelne `executor`-Funktion, die mit den `resolve`- und `reject`-Callbacks als Parameter aufgerufen werden kann. Die Unterklasse muss auch eine `resolve`-statische Methode haben, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte in Versprechen zu verwandeln.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "single-threaded")}} ist, sodass zu einem bestimmten Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl die Kontrolle zwischen verschiedenen Promises wechseln kann, wodurch die Ausführung der Promises gleichzeitig erscheint. [Parallele Ausführung](https://en.wikipedia.org/wiki/Parallel_computing) in JavaScript kann nur durch [Worker-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu kapseln, die Promises noch nicht unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von Promise-Methoden zu konstruieren.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein iterierbares von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Versprechen wird erfüllt, wenn alle Promises der Eingabe erfüllt werden (einschließlich, wenn ein leeres iterierbares übergeben wird), mit einem Array der Erfüllungswerte. Es lehnt ab, wenn eines der Eingabe-Promises abgelehnt wird, mit diesem ersten Ablehnungsgrund.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein iterierbares von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Versprechen wird erfüllt, wenn alle Eingabe-Promises abgeschlossen sind (einschließlich, wenn ein leeres iterierbares übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes Versprechens beschreiben.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein iterierbares von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Versprechen wird erfüllt, wenn eines der Eingabe-Promises erfüllt wird, mit diesem ersten Erfüllungswert. Es lehnt ab, wenn alle Eingabe-Promises abgelehnt werden (einschließlich, wenn ein leeres iterierbares übergeben wird), mit einem {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein iterierbares von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Versprechen wird mit dem endgültigen Zustand des ersten abgeschlossenen Versprechens abgeschlossen.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem angegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem angegebenen Wert aufgelöst wird. Wenn der Wert ein Thenable ist (d.h. eine `then`-Methode hat), wird das zurückgegebene Versprechen diesem Thenable „folgen“ und seinen endgültigen Zustand übernehmen; andernfalls wird das zurückgegebene Versprechen mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Nimmt eine beliebige Art von Callback an (gibt zurück oder löst aus, synchron oder asynchron) und kapselt dessen Ergebnis in einem `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen enthält, um es zu erfüllen oder abzulehnen, entsprechend den beiden Parametern, die dem Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die die Instanz des Objekts erstellt hat. Für `Promise`-Instanzen ist der anfängliche Wert der {{jsxref("Promise/Promise", "Promise")}}-Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Fügt einen Ablehnungs-Handler als Callback an das Versprechen an und gibt ein neues Versprechen zurück, das auf den Rückgabewert des Callbacks aufgelöst wird, wenn es aufgerufen wird, oder auf den ursprünglichen Erfüllungswert, wenn das Versprechen stattdessen erfüllt wird.
- {{jsxref("Promise.prototype.finally()")}}
  - : Fügt einen Handler an das Versprechen an und gibt ein neues Versprechen zurück, das aufgelöst wird, wenn das ursprüngliche Versprechen aufgelöst wird. Der Handler wird aufgerufen, wenn das Versprechen abgeschlossen ist, egal ob erfüllt oder abgelehnt.
- {{jsxref("Promise.prototype.then()")}}
  - : Fügt Erfüllungs- und Ablehnungs-Handler an das Versprechen an und gibt ein neues Versprechen zurück, das auf den Rückgabewert des aufgerufenen Handlers aufgelöst wird oder auf den ursprünglichen abgeschlossenen Wert, wenn das Versprechen nicht behandelt wurde (d.h. wenn der entsprechende Handler `onFulfilled` oder `onRejected` keine Funktion ist).

## Beispiele

### Einfaches Beispiel

In diesem Beispiel verwenden wir `setTimeout(...)`, um asynchronen Code zu simulieren. In Wirklichkeit werden Sie wahrscheinlich etwas wie XHR oder eine HTML-API verwenden.

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

Dieses Beispiel zeigt verschiedene Techniken zur Nutzung von Promise-Fähigkeiten und verschiedene Situationen, die auftreten können. Um dies zu verstehen, scrollen Sie zunächst nach unten im Codeblock und betrachten Sie die Promise-Kette. Nach der Bereitstellung eines anfänglichen Versprechens kann eine Kette von Versprechen folgen. Die Kette besteht aus `.then()`-Aufrufen und hat typischerweise (aber nicht notwendigerweise) ein einzelnes `.catch()` am Ende, optional gefolgt von `.finally()`. In diesem Beispiel wird die Promise-Kette durch ein selbst geschriebenes `new Promise()`-Konstrukt eingeleitet; in der Praxis beginnen Promise-Ketten jedoch häufiger mit einer API-Funktion (von jemand anderem geschrieben), die ein Versprechen zurückgibt.

Die Beispiel-Funktion `tetheredGetNumber()` zeigt, dass ein Versprechen-Generator `reject()` während des Setups eines asynchronen Aufrufs oder innerhalb des Rückrufs oder beides verwenden wird. Die Funktion `promiseGetWord()` veranschaulicht, wie eine API-Funktion ein Versprechen auf selbständige Weise generieren und zurückgeben könnte.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das ist erzwungen, weil eine Promise-Kette alle `.then()`-Versprechen durchläuft, selbst nach einem Fehler, und ohne das `throw` der Fehler „behoben“ wäre. Dies ist mühsam, und aus diesem Grund ist es üblich, `onRejected` in der Kette von `.then()`-Versprechen wegzulassen und nur ein einzelnes `onRejected` im letzten `catch()` zu verwenden.

Dieser Code kann unter NodeJS ausgeführt werden. Das Verständnis wird verbessert, indem die tatsächlichen Fehler gesehen werden. Um mehr Fehler zu erzwingen, ändern Sie die `threshold`-Werte.

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

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die Methode `testPromise()` wird jedes Mal aufgerufen, wenn auf das {{HTMLElement("button")}} geklickt wird. Sie erstellt ein Versprechen, das erfüllt wird, indem [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) auf die Versprechungsanzahl (Zahl beginnend bei 1) alle 1-3 Sekunden zufällig gesetzt wird. Der `Promise()`-Konstruktor wird verwendet, um das Versprechen zu erstellen.

Die Erfüllung des Versprechens wird über ein Fulfill-Callback protokolliert, das über {{jsxref("Promise/then", "p1.then()")}} gesetzt wird. Ein paar Protokolle zeigen, wie der synchrone Teil der Methode von der asynchronen Erfüllung des Versprechens entkoppelt ist.

Indem Sie mehrmals in kurzer Zeit auf die Schaltfläche klicken, sehen Sie sogar, wie die verschiedenen Versprechen nacheinander erfüllt werden.

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

Ein weiteres Beispiel für die Verwendung von `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zum Laden eines Bildes wird unten gezeigt. Jeder Schritt wird kommentiert und ermöglicht es Ihnen, die Promise- und XHR-Architektur genau zu folgen.

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

### Verfolgung des aufrufen Umgebungsobjekts

Ein Umgebungsobjekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen bereitstellt, wenn JavaScript-Code ausgeführt wird. Dazu gehören das Realm und die Modulkarten sowie HTML-spezifische Informationen wie der Ursprung. Das aufrufende Umgebungsobjekt wird verfolgt, um sicherzustellen, dass der Browser weiß, welches bei einem bestimmten Code des Benutzers verwendet werden soll.

Um dies zu verdeutlichen, können wir uns genauer ansehen, wie das Realm ein Problem darstellen kann. Ein **Realm** kann ungefähr als das globale Objekt betrachtet werden. Was Realms einzigartig macht, ist, dass sie alle notwendigen Informationen enthalten, um JavaScript-Code auszuführen. Dazu gehören Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Umgebungsobjekt hat seine eigene "Kopie" dieser Objekte und sie werden nicht geteilt. Das kann zu unerwartetem Verhalten in Bezug auf Versprechen führen. Um dies zu umgehen, verfolgen wir das **aufrufende Umgebungsobjekt**. Dies repräsentiert Informationen, die spezifisch für den Kontext des Benutzer-Codes sind, der für einen bestimmten Funktionsaufruf verantwortlich ist.

Um dies etwas weiter zu veranschaulichen, können wir uns ansehen, wie ein [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), das in ein Dokument eingebettet ist, mit seinem Host kommuniziert. Da alle Web-APIs sich des aufrufenden Umgebungsobjekts bewusst sind, wird das Folgende in allen Browsern funktionieren:

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

Dasselbe Konzept gilt für Versprechen. Wenn wir das obige Beispiel ein wenig abändern, erhalten wir Folgendes:

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

Wenn wir dies ändern, sodass das `<iframe>` im Dokument auf Postnachrichten hört, können wir den Effekt des aufrufenden Umgebungsobjekts beobachten:

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

Im obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das aufrufende Umgebungsobjekt verfolgt wird. Dies liegt daran, dass wir ohne Verfolgung des Aufrufenden möglicherweise die falsche Umgebung verwenden, um die Nachricht zu senden.

> [!NOTE]
> Derzeit ist die Verfolgung des aufrufenden Realms in Firefox vollständig implementiert und in Chrome und Safari teilweise implementiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Verwendung von Versprechen](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [JavaScript Promises: eine Einführung](https://web.dev/articles/promises) auf web.dev (2013)
- [Callbacks, Promises, und Coroutines: Asynchrone Programmiermuster in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Präsentation von Domenic Denicola (2011)
