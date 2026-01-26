---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: 309bcf2234806a67cb348540ce28352179740318
---

Das **`Promise`**-Objekt repräsentiert den zukünftigen Abschluss (oder das Scheitern) einer asynchronen Operation und deren resultierenden Wert.

Um zu lernen, wie Versprechen funktionieren und wie Sie sie nutzen können, empfehlen wir, zunächst [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Platzhalter für einen Wert, der nicht notwendigerweise bekannt ist, wenn das Versprechen erstellt wird. Es ermöglicht Ihnen, Handler mit dem endgültigen Erfolgswert oder dem Grund für das Scheitern einer asynchronen Aktion zu verknüpfen. Dies ermöglicht es asynchronen Methoden, Werte wie synchrone Methoden zurückzugeben: Anstatt sofort den Endwert zurückzugeben, gibt die asynchrone Methode ein _Versprechen_ zurück, den Wert irgendwann in der Zukunft bereitzustellen.

Ein `Promise` befindet sich in einem dieser Zustände:

- _pending_: Anfangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines schwebenden Versprechens kann entweder _erfüllt_ mit einem Wert oder _abgelehnt_ mit einem Grund (Fehler) sein. Wenn eine dieser Optionen eintritt, werden die zugeordneten Handler, die durch die `then`-Methode eines Versprechens bereitgestellt werden, aufgerufen. Wenn das Versprechen bereits erfüllt oder abgelehnt wurde, wenn ein entsprechender Handler angebracht wird, wird der Handler aufgerufen, sodass es keine Rennbedingung zwischen dem Abschluss einer asynchronen Operation und dem Anbringen ihrer Handler gibt.

Ein Versprechen gilt als _erledigt_, wenn es entweder erfüllt oder abgelehnt ist, aber nicht schwebend.

![Flussdiagramm, das zeigt, wie der Promise-Zustand zwischen schwebend, erfüllt und abgelehnt über dann/catch-Handler umschaltet. Ein schwebendes Versprechen kann entweder erfüllt oder abgelehnt werden. Wird es erfüllt, wird der "on fulfillment"-Handler oder der erste Parameter der then()-Methode ausgeführt und führt weitere asynchrone Aktionen durch. Wird es abgelehnt, wird der Fehlerhandler, der entweder als zweiter Parameter der then()-Methode oder als einziger Parameter der catch()-Methode übergeben wird, ausgeführt.](promises.png)

Sie werden auch den Begriff _resolved_ im Zusammenhang mit Versprechen hören — das bedeutet, dass das Versprechen erledigt oder "gesperrt" ist, um den endgültigen Zustand eines anderen Versprechens zu übernehmen, und ein weiteres Erfüllen oder Ablehnen hat keine Auswirkung. Das Dokument [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) aus dem ursprünglichen Promise-Vorschlag enthält mehr Details über die Terminologie von Versprechen. Umgangssprachlich sind "resolved"-Versprechen oft gleichbedeutend mit "fulfilled"-Versprechen, aber wie in "States and fates" erläutert, können resolved-Versprechen auch schwebend oder abgelehnt sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Versprechen ist bereits _resolved_, wenn es erstellt wird (da `resolveOuter` synchron aufgerufen wird), aber es wird mit einem anderen Versprechen resolved und daher erst 1 Sekunde später _fulfilled_, wenn das innere Versprechen erfüllt wird. In der Praxis geschieht die "resolution" oft im Hintergrund und ist nicht wahrnehmbar, und nur dessen Erfüllung oder Ablehnung sind es.

> [!NOTE]
> Mehrere andere Sprachen haben Mechanismen zur lazy evaluation und zum Verschieben einer Berechnung, die sie ebenfalls "Promises" nennen, z.B. Scheme. Promises in JavaScript stellen Prozesse dar, die bereits laufen und mit Callback-Funktionen verkettet werden können. Wenn Sie beabsichtigen, einen Ausdruck lazy zu evaluieren, sollten Sie erwägen, eine Funktion ohne Argumente zu verwenden, z.B. `f = () => expression`, um den lazy-evaluierten Ausdruck zu erstellen, und `f()`, um den Ausdruck sofort zu evaluieren.

`Promise` selbst hat kein erstklassiges Protokoll zur Abbruch, aber Sie können möglicherweise die zugrundeliegende asynchrone Operation direkt abbrechen, typischerweise mittels [`AbortController`](/de/docs/Web/API/AbortController).

### Verknüpfte Versprechen

Die Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um weitere Aktionen mit einem erledigten Versprechen zu verknüpfen. Die `then()`-Methode nimmt bis zu zwei Argumente an; das erste Argument ist eine Callback-Funktion für den Erfolgsfall des Versprechens und das zweite Argument ist eine Callback-Funktion für den abgelehnten Fall. Die Methoden `catch()` und `finally()` rufen intern `then()` auf und machen die Fehlerbehandlung weniger ausführlich. Zum Beispiel ist ein `catch()` wirklich nur ein `then()` ohne Übergabe des fulfillment-Handlers. Da diese Methoden Versprechen zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Wir verwenden die folgende Terminologie: _initiales Versprechen_ ist das Versprechen, auf dem `then` aufgerufen wird; _neues Versprechen_ ist das durch `then` zurückgegebene Versprechen. Die beiden Callbacks, die an `then` übergeben werden, werden _fulfillment handler_ und _rejection handler_ genannt.

Der erledigte Zustand des initialen Versprechens bestimmt, welcher Handler ausgeführt wird.

- Wenn das initiale Versprechen erfüllt ist, wird der fulfillment-Handler mit dem Erfüllungswert aufgerufen.
- Wenn das initiale Versprechen abgelehnt ist, wird der rejection-Handler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss des Handlers bestimmt den erledigten Zustand des neuen Versprechens.

- Wenn der Handler einen [thenable](#thenables)-Wert zurückgibt, erledigt sich das neue Versprechen im selben Zustand wie der zurückgegebene Wert.
- Wenn der Handler einen nicht-thenable-Wert zurückgibt, wird das neue Versprechen mit dem zurückgegebenen Wert erfüllt.
- Wenn der Handler einen Fehler wirft, wird das neue Versprechen mit dem geworfenen Fehler abgelehnt.
- Wenn das initiale Versprechen keinen entsprechenden Handler angehängt hat, wird das neue Versprechen den gleichen Zustand wie das initiale Versprechen einnehmen — das heißt, ohne Ablehnungshandler bleibt ein abgelehntes Versprechen mit demselben Grund abgelehnt.

Zum Beispiel, in dem oben genannten Code, wenn `myPromise` abgelehnt wird, wird `handleRejectedA` aufgerufen, und wenn `handleRejectedA` normal abschließt (ohne einen Fehler zu werfen oder ein abgelehntes Versprechen zurückzugeben), wird das durch das erste `then` zurückgegebene Versprechen erfüllt, anstatt abgelehnt zu bleiben. Daher, wenn ein Fehler sofort behandelt werden muss, wir aber den Fehlerzustand in der Kette beibehalten wollen, müssen wir im rejection-Handler einen Fehler irgendeines Typs werfen. Auf der anderen Seite, in Abwesenheit eines sofortigen Bedarfs, können wir die Fehlerbehandlung bis zum finalen `catch()`-Handler aufschieben.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Mit [fat arrow functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen könnte die Implementierung der Versprechen-Kette in etwa so aussehen:

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
> Für schnellere Ausführung sollten alle synchronen Aktionen vorzugsweise innerhalb eines einzigen Handlers erfolgen, andernfalls würde es mehrere Ticks dauern, um alle Handler in Reihenfolge auszuführen.

JavaScript verwaltet eine [Job-Queue](/de/docs/Web/JavaScript/Reference/Execution_model). Jedes Mal wählt JavaScript einen Job aus der Queue und führt ihn vollständig aus. Die Jobs werden vom Executor des `Promise()`-Konstruktors, den an `then` übergebenen Handlern oder einer beliebigen Plattform-API, die ein Versprechen zurückgibt, definiert. Die Versprechen in einer Kette repräsentieren die Abhängigkeitsbeziehung zwischen diesen Jobs. Wenn ein Versprechen abgeschlossen ist, werden die jeweiligen damit verbundenen Handler hinten in die Job-Queue eingefügt.

Ein Versprechen kann an mehr als einer Kette beteiligt sein. Für den folgenden Code bewirkt die Erfüllung von `promiseA`, dass sowohl `handleFulfilled1` als auch `handleFulfilled2` in die Job-Queue aufgenommen werden. Da `handleFulfilled1` zuerst registriert ist, wird es zuerst ausgeführt.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits erledigten Versprechen zugeordnet werden. In diesem Fall wird die Aktion sofort hinten in die Job-Queue gestellt und ausgeführt, wenn alle vorhandenen Jobs abgeschlossen sind. Daher erfolgt eine Aktion für ein bereits "erledigtes" Versprechen erst, nachdem der aktuelle synchrone Code abgeschlossen ist und mindestens ein Loop-Tick vergangen ist. Dies garantiert, dass Versprechensaktionen asynchron sind.

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

Das JavaScript-Ökosystem hatte mehrere Promise-Implementierungen lange bevor es Teil der Sprache wurde. Trotz ihrer unterschiedlichen internen Darstellung, implementieren alle Promise-ähnlichen Objekte mindestens das _Thenable_ Interface. Ein Thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode, die mit zwei Callbacks aufgerufen wird: eines für den Fall, dass das Versprechen erfüllt wird, und eines für den Fall, dass es abgelehnt wird. Auch Versprechen sind Thenables.

Um mit den vorhandenen Promise-Implementierungen zusammenzuarbeiten, erlaubt die Sprache die Verwendung von Thenables anstelle von Versprechen. Zum Beispiel wird [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur Versprechen auflösen, sondern auch Thenables nachverfolgen.

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

Die `then()`-Methode ist dafür verantwortlich, die Ausführung der bereitgestellten `onFulfilled`- und `onRejected`-Callbacks zu planen. Ihre Semantik, einschließlich Fehlerbehandlung und Asynchronität, ist präzise in der [Promises/A+ Spezifikation](https://promisesaplus.com/) definiert, und wir werden sie hier nicht wiederholen. Es ist sehr selten, dass Sie selbst ein Thenable implementieren müssen; selbst wenn Sie keine nativen Versprechen verwenden, würden Sie wahrscheinlich eine Promise-Bibliothek wie [Bluebird](http://bluebirdjs.com/) verwenden.

### Promise-Konkurrenz

Die `Promise`-Klasse bietet vier statische Methoden, um die gleichzeitige Bearbeitung von asynchronen Aufgaben zu erleichtern:

- {{jsxref("Promise.all()")}}
  - : Erfüllt sich, wenn **alle** Versprechen erfüllt werden; lehnt ab, wenn **eines** der Versprechen abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt sich, wenn **alle** Versprechen erledigt sind.
- {{jsxref("Promise.any()")}}
  - : Erfüllt sich, wenn **eines** der Versprechen erfüllt wird; lehnt ab, wenn **alle** der Versprechen abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Erledigt sich, wenn **eines** der Versprechen erledigt. Mit anderen Worten, erfüllt sich, wenn eines der Versprechen erfüllt wird; lehnt ab, wenn eines der Versprechen abgelehnt wird.

Alle diese Methoden nehmen ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Versprechen ([Thenables](#thenables), um genau zu sein) entgegen und geben ein neues Versprechen zurück. Sie alle unterstützen Subclassing, was bedeutet, dass sie auf Subklassen von `Promise` aufgerufen werden können, und das Ergebnis wird ein Versprechen des Unterklasstyps sein. Dazu muss der Konstruktor der Unterklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktor implementieren — er muss eine einzelne `executor`-Funktion annehmen, die mit den `resolve`- und `reject`-Callbacks als Parameter aufgerufen werden kann. Die Unterklasse muss auch eine `resolve`-statische Methode haben, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte zu Versprechen aufzulösen.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "einzelgethreaded")}} ist, sodass zu einem gegebenen Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl die Kontrolle zwischen verschiedenen Versprechen wechseln kann, was die Ausführung der Versprechen gleichzeitig erscheinen lässt. [Parallele Ausführung](https://en.wikipedia.org/wiki/Parallel_computing) in JavaScript kann nur durch [Worker-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu kapseln, die noch keine Versprechen unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der zum Erstellen von Rückgabewerten aus Versprechensmethoden verwendet wird.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein Iterable von Versprechen als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Versprechen erfüllt sich, wenn alle Eingabeversprechen erfüllt werden (einschließlich, wenn ein leeres Iterable übergeben wird), mit einem Array der Erfüllungswerte. Es lehnt ab, wenn eines der Eingabeversprechen abgelehnt wird, mit diesem ersten Ablehnungsgrund.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein Iterable von Versprechen als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Versprechen erfüllt sich, wenn alle Eingabeversprechen erledigt werden (einschließlich, wenn ein leeres Iterable übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes Versprechens beschreiben.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein Iterable von Versprechen als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Versprechen erfüllt sich, wenn eines der Eingabeversprechen erfüllt wird, mit diesem ersten Erfüllungswert. Es lehnt ab, wenn alle Eingabeversprechen abgelehnt werden (einschließlich, wenn ein leeres Iterable übergeben wird), mit einem {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein Iterable von Versprechen als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Versprechen erledigt sich mit dem endgültigen Zustand des ersten Versprechens, das erledigt wird.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem angegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem angegebenen Wert erfüllt ist. Wenn der Wert ein Thenable ist (d.h. eine `then`-Methode hat), wird das zurückgegebene Versprechen diesem Thenable "folgen" und seinen endgültigen Zustand übernehmen; andernfalls wird das zurückgegebene Versprechen mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Nimmt einen Callback jeder Art (gibt zurück oder wirft, synchron oder asynchron) und kapselt sein Ergebnis in ein `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen zum Erfüllen oder Ablehnen desselben enthält, was den beiden Parametern entspricht, die an den Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Promise`-Instanzen ist der anfängliche Wert der {{jsxref("Promise/Promise", "Promise")}}-Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Fügt dem Versprechen einen Rückruf für den Ablehnungs-Handler hinzu und gibt ein neues Versprechen zurück, das auf den Rückgabewert des Rückrufs aufgelöst wird, wenn er aufgerufen wird, oder auf seinen ursprünglichen Erfüllungswert, wenn das Versprechen stattdessen erfüllt wird.
- {{jsxref("Promise.prototype.finally()")}}
  - : Fügt dem Versprechen einen Handler hinzu und gibt ein neues Versprechen zurück, das aufgelöst wird, wenn das ursprüngliche Versprechen aufgelöst ist. Der Handler wird aufgerufen, wenn das Versprechen erledigt ist, unabhängig davon, ob es erfüllt oder abgelehnt wurde.
- {{jsxref("Promise.prototype.then()")}}
  - : Fügt Erfüllungs- und Ablehnungs-Handler zum Versprechen hinzu und gibt ein neues Versprechen zurück, das auf den Rückgabewert des aufgerufenen Handlers auflöst, oder auf seinen ursprünglichen erledigten Wert, wenn das Versprechen nicht behandelt wurde (d.h. wenn der relevante Handler `onFulfilled` oder `onRejected` keine Funktion ist).

## Beispiele

### Einfaches Beispiel

In diesem Beispiel verwenden wir `setTimeout(...)`, um asynchronen Code zu simulieren. In der Realität werden Sie wahrscheinlich etwas wie XHR oder eine HTML-API verwenden.

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

Dieses Beispiel zeigt verschiedene Techniken zur Nutzung der Promise-Fähigkeiten und diverse Situationen, die auftreten können. Um dies zu verstehen, beginnen Sie damit, zum Ende des Codeblocks zu scrollen und die Versprechen-Kette zu betrachten. Bei Bereitstellung eines anfänglichen Versprechens kann eine Kette von Versprechen folgen. Die Kette besteht aus `.then()`-Aufrufen und hat typischerweise (aber nicht notwendigerweise) ein einzelnes `.catch()` am Ende, optional gefolgt von `.finally()`. In diesem Beispiel wird die Versprechen-Kette von einem maßgeschneiderten `new Promise()`-Konstrukt initiiert; aber in der Praxis beginnen Versprechen-Ketten typischerweise mit einer API-Funktion (geschrieben von jemand anderem), die ein Versprechen zurückgibt.

Die Beispielfunktion `tetheredGetNumber()` zeigt, dass ein Versprechenserzeuger das `reject()` verwenden wird, während ein asynchroner Aufruf festgelegt wird, oder innerhalb des Callbacks, oder beides. Die Funktion `promiseGetWord()` veranschaulicht, wie eine API-Funktion ein Versprechen in selbstenthaltener Weise erzeugen und zurückgeben könnte.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das wird erzwungen, weil eine Promise-Kette alle `.then()`-Versprechen durchläuft, selbst nach einem Fehler, und ohne den `throw` würde der Fehler "behoben" erscheinen. Dies ist ein Problem, und aus diesem Grund ist es üblich, `onRejected` während der gesamten Kette von `.then()`-Versprechen auszulassen und nur ein einzelnes `onRejected` im finalen `catch()` zu haben.

Dieser Code kann unter NodeJS ausgeführt werden. Das Verständnis wird verbessert, indem man sieht, wie die Fehler tatsächlich auftreten. Um mehr Fehler zu erzwingen, ändern Sie die `threshold`-Werte.

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

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die Methode `testPromise()` wird jedes Mal aufgerufen, wenn der {{HTMLElement("button")}} geklickt wird. Sie erstellt ein Versprechen, das erfüllt wird, indem [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verwendet wird, auf die Anzahl der Versprechen (beginnt bei 1) alle 1-3 Sekunden zufällig. Der `Promise()`-Konstruktor wird verwendet, um das Versprechen zu erstellen.

Die Erfüllung des Versprechens wird protokolliert, mittels eines fulfillment-Callbacks, das mit {{jsxref("Promise/then", "p1.then()")}} festgelegt wird. Ein paar Protokolle zeigen, wie der synchrone Teil der Methode vom asynchronen Abschluss des Versprechens entkoppelt ist.

Indem Sie den Button mehrmals in kurzer Zeit klicken, sehen Sie, wie die verschiedenen Versprechen nacheinander erfüllt werden.

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

Ein weiteres Beispiel mit `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), um ein Bild zu laden, wird unten gezeigt. Jeder Schritt ist kommentiert und erlaubt Ihnen, die Promise- und XHR-Architektur genau zu verfolgen.

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

### Nachverfolgung des zuständigen Einstellungsobjekts

Ein Einstellungsobjekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen bereitstellt, wenn JavaScript-Code ausgeführt wird. Dazu gehören der Realm und die Modulkarte, sowie HTML-spezifische Informationen wie der Ursprung. Das zuständige Einstellungsobjekt wird nachverfolgt, um sicherzustellen, dass der Browser weiß, welches für ein bestimmtes Benutzerstück Code zu verwenden ist.

Um dies besser darzustellen, können wir uns genauer ansehen, wie der Realm ein Problem sein könnte. Ein **Realm** kann grob als das Globale Objekt betrachtet werden. Einzigartig an Realms ist, dass sie alle notwendigen Informationen enthalten, um JavaScript-Code auszuführen. Dazu gehören Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Einstellungsobjekt hat seine eigene "Kopie" dieser und sie werden nicht geteilt. Das kann ein unerwartetes Verhalten im Zusammenhang mit Versprechen verursachen. Um das zu umgehen, verfolgen wir etwas, das das **zuständige Einstellungsobjekt** genannt wird. Dies repräsentiert Informationen, die spezifisch für den Kontext des Benutzer-Codes sind, der für einen bestimmten Funktionsaufruf verantwortlich ist.

Um dies weiter zu veranschaulichen, können wir uns ansehen, wie ein [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), das in ein Dokument eingebettet ist, mit seinem Host kommuniziert. Da alle Web-APIs über das zuständige Einstellungsobjekt Bescheid wissen, wird das Folgende in allen Browsern funktionieren:

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

Dasselbe Konzept gilt für Versprechen. Wenn wir das obige Beispiel ein wenig abändern, erhalten wir das:

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

Wenn wir das so ändern, dass das `<iframe>` im Dokument auf Postnachrichten hört, können wir die Auswirkungen des zuständigen Einstellungsobjekts beobachten:

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

Im obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das zuständige Einstellungsobjekt verfolgt wird. Dies liegt daran, dass wir ohne die Verfolgung des Zuständigen möglicherweise die falsche Umgebung verwenden, um die Nachricht zu senden.

> [!NOTE]
> Derzeit wird die Verfolgung des zuständigen Realms vollständig in Firefox implementiert und hat teilweise Implementierungen in Chrome und Safari.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [JavaScript Versprechen: eine Einführung](https://web.dev/articles/promises) auf web.dev (2013)
- [Rückrufe, Versprechen und Coroutinen: Asynchrone Programmiermuster in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Präsentation von Domenic Denicola (2011)
