---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{JSRef}}

Das **`Promise`**-Objekt repräsentiert den zukünftigen Abschluss (oder das Scheitern) einer asynchronen Operation und deren Ergebniswert.

Um mehr über die Funktionsweise von Promises zu erfahren und wie Sie sie verwenden können, empfehlen wir Ihnen zuerst die Lektüre von [Promises verwenden](/de/docs/Web/JavaScript/Guide/Using_promises).

## Beschreibung

Ein `Promise` ist ein Stellvertreter für einen Wert, der möglicherweise noch nicht bekannt ist, wenn das Promise erstellt wird. Es ermöglicht Ihnen, Handler mit dem eventuellen Erfolgswert oder dem Ablehnungsgrund einer asynchronen Aktion zu verknüpfen. Dies ermöglicht es asynchronen Methoden, Werte ähnlich wie synchrone Methoden zurückzugeben: Anstatt den Endwert sofort zurückzugeben, gibt die asynchrone Methode ein _Promise_ zurück, das zu einem späteren Zeitpunkt den Wert liefert.

Ein `Promise` befindet sich in einem der folgenden Zustände:

- _pending_: Ausgangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines ausstehenden Promises kann entweder mit einem Wert _erfüllt_ oder mit einem Grund (Fehler) _abgelehnt_ sein.
Wenn eine der beiden Optionen eintritt, werden die mit der `then`-Methode eines Promises verknüpften Handler aufgerufen. Wenn das Promise bereits erfüllt oder abgelehnt ist, wenn ein entsprechender Handler angefügt wird, wird der Handler aufgerufen, sodass kein Wettlauf zwischen dem Abschluss einer asynchronen Operation und dem Anfügen ihrer Handler besteht.

Ein Promise ist als _erledigt_ bekannt, wenn es entweder erfüllt oder abgelehnt ist, aber nicht mehr ausstehend.

![Flussdiagramm, das zeigt, wie der Promise-Zustand zwischen ausstehend, erfüllt und abgelehnt über then/catch-Handler wechselt. Ein ausstehendes Promise kann entweder erfüllt oder abgelehnt werden. Wenn es erfüllt ist, wird der "bei Erfüllung"-Handler oder der erste Parameter der then()-Methode ausgeführt und führt weitere asynchrone Aktionen aus. Wenn es abgelehnt wird, wird der Fehlerhandler entweder als zweiter Parameter der then()-Methode oder als einziger Parameter der catch()-Methode ausgeführt.](promises.png)

Sie werden auch den Begriff _resolved_ im Zusammenhang mit Promises hören — dies bedeutet, dass das Promise erledigt oder "festgelegt" ist, um den endgültigen Zustand eines anderen Promises zu erreichen, und ein weiteres Erfüllen oder Ablehnen hat keine Auswirkungen. Das Dokument [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) aus dem ursprünglichen Promise-Vorschlag enthält weitere Details zur Promise-Terminologie. Umgangssprachlich sind "aufgelöste" Promises oft gleichbedeutend mit "erfüllten" Promises, aber wie in "States and fates" dargestellt, können aufgelöste Promises auch ausstehend oder abgelehnt sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist bereits _gelöst_ zu dem Zeitpunkt, an dem es erstellt wird (weil `resolveOuter` synchron aufgerufen wird), aber es ist mit einem anderen Promise gelöst und wird daher erst eine Sekunde später _erfüllt_, wenn das innere Promise erfüllt wird. In der Praxis wird die "Auflösung" oft im Hintergrund durchgeführt und ist nicht sichtbar, und nur deren Erfüllung oder Ablehnung sind es.

> [!NOTE]
> Mehrere andere Sprachen haben Mechanismen zur verzögerten Auswertung und Verschiebung einer Berechnung, die sie ebenfalls "Promises" nennen, z.B. Scheme. Promises in JavaScript repräsentieren Prozesse, die bereits stattfinden, und die mit Callback-Funktionen verkettet werden können. Wenn Sie eine ausdrückliche verzögerte Auswertung möchten, ziehen Sie in Betracht, eine Funktion ohne Argumente zu verwenden, z.B. `f = () => expression`, um den verzögert ausgewerteten Ausdruck zu erstellen, und `f()`, um den Ausdruck sofort auszuwerten.

`Promise` selbst hat kein erstklassiges Protokoll zur Stornierung, aber Sie können möglicherweise direkt die zugrunde liegende asynchrone Operation stornieren, typischerweise unter Verwendung von [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Promises

Die Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}}, und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um einer erledigten Promise weitere Aktionen zuzuordnen. Die `then()`-Methode nimmt bis zu zwei Argumente entgegen; das erste Argument ist eine Callback-Funktion für den erfüllten Fall des Promises und das zweite Argument ist eine Callback-Funktion für den abgelehnten Fall. Die Methoden `catch()` und `finally()` rufen intern `then()` auf und machen die Fehlerbehandlung weniger umständlich. Zum Beispiel ist ein `catch()` wirklich nur ein `then()` ohne Übergabe des Erfüllungshandlers. Da diese Methoden Promises zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Wir werden die folgende Terminologie verwenden: _initiales Promise_ ist das Promise, auf dem `then` aufgerufen wird; _neues Promise_ ist das Promise, das durch `then` zurückgegeben wird. Die beiden zu `then` übergebenen Rückruffunktionen werden _Erfüllungshandler_ und _Ablehnungshandler_ genannt.

Der abgeschlossene Zustand des initialen Promises bestimmt, welcher Handler ausgeführt wird.

- Wenn das initiale Promise erfüllt ist, wird der Erfüllungshandler mit dem Erfüllungswert aufgerufen.
- Wenn das initiale Promise abgelehnt ist, wird der Ablehnungshandler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss der Handler-Funktion bestimmt den abgeschlossenen Zustand des neuen Promises.

- Wenn die Handler-Funktion einen [thenable](#thenables) Wert zurückgibt, übernimmt das neue Promise den gleichen Zustand wie das zurückgegebene Promise.
- Wenn die Handler-Funktion einen nicht-thenablen Wert zurückgibt, wird das neue Promise mit dem zurückgegebenen Wert erfüllt.
- Wenn die Handler-Funktion einen Fehler auslöst, wird das neue Promise mit dem ausgelösten Fehler abgelehnt.
- Wenn das initiale Promise keinen entsprechenden Handler hat, wird das neue Promise denselben Zustand wie das initiale Promise erreichen — das heißt, ohne einen Ablehnungshandler bleibt ein abgelehntes Promise mit demselben Grund abgelehnt.

Beispielsweise, im obigen Code, wenn `myPromise` abgelehnt wird, wird `handleRejectedA` aufgerufen, und wenn `handleRejectedA` normal abschließt (ohne einen Fehler auszulösen oder ein abgelehntes Promise zurückzugeben), wird das durch das erste `then` zurückgegebene Promise erfüllt, anstatt abgelehnt zu bleiben. Wenn ein Fehler sofort behandelt werden muss, aber wir den Fehlerzustand in der Kette beibehalten wollen, müssen wir im Ablehnungshandler irgendeine Art von Fehler auslösen. Andererseits, in Abwesenheit eines sofortigen Bedarfs, ist es einfacher, die Fehlerbehandlung bis zum finalen `catch()`-Handler auszulassen.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Mit [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Rückruffunktionen könnte die Implementierung der Promise-Kette so aussehen:

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
> Für schnellere Ausführung sollten alle synchronen Aktionen möglichst innerhalb eines Handlers durchgeführt werden, andernfalls würde es mehrere Ticks benötigen, um alle Handler in Reihenfolge auszuführen.

JavaScript verwaltet eine [Job-Warteschlange](/de/docs/Web/JavaScript/Event_loop). Jedes Mal wählt JavaScript einen Job aus der Warteschlange aus und führt ihn bis zur Fertigstellung aus. Die Jobs werden durch den Executor des `Promise()`-Konstruktors definiert, die Handler, die an `then` übergeben werden, oder jede Plattform-API, die ein Promise zurückgibt. Die Promises in einer Kette stellen die Abhängigkeitsbeziehung zwischen diesen Jobs dar. Wenn ein Promise erledigt ist, werden die mit ihm verbundenen Handler an das Ende der Job-Warteschlange angefügt.

Ein Promise kann in mehr als einer Kette beteiligt sein. Für den folgenden Code würde die Erfüllung von `promiseA` sowohl `handleFulfilled1` als auch `handleFulfilled2` in die Job-Warteschlange einfügen. Da `handleFulfilled1` zuerst registriert wird, wird es als erstes ausgeführt.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits erledigten Promise zugewiesen werden. In diesem Fall wird die Aktion sofort an das Ende der Job-Warteschlange angehängt und wird ausgeführt, wenn alle bestehenden Jobs abgeschlossen sind. Daher erfolgt eine Aktion für ein bereits "erledigtes" Promise nur nachdem der aktuelle synchrone Code abgeschlossen ist und mindestens ein Schleifen-Tick vergangen ist. Dies garantiert, dass Promise-Aktionen asynchron sind.

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

Das JavaScript-Ökosystem hatte viele Promise-Implementierungen, lange bevor es Teil der Sprache wurde. Trotz der unterschiedlichen internen Darstellung implementieren alle Promise-ähnlichen Objekte mindestens die _Thenable_-Schnittstelle. Ein Thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode, die mit zwei Callback-Funktionen aufgerufen wird: eine für den Fall, dass das Promise erfüllt wird, eine für den Fall, dass es abgelehnt wird. Promises sind ebenfalls Thenables.

Um mit den bestehenden Promise-Implementierungen zusammenzuarbeiten, erlaubt die Sprache die Verwendung von Thenables anstelle von Promises. Zum Beispiel wird [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur Promises lösen, sondern auch Thenables auflösen.

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

Die `Promise`-Klasse bietet vier statische Methoden, um die [Konkurrenz](https://de.wikipedia.org/wiki/Konkurrenz_(Informatik)) von asynchronen Aufgaben zu erleichtern:

- {{jsxref("Promise.all()")}}
  - : Erfüllt sich, wenn **alle** Promises erfüllt sind; lehnt ab, wenn **irgendeines** der Promises abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt sich, wenn **alle** Promises erledigt sind.
- {{jsxref("Promise.any()")}}
  - : Erfüllt sich, wenn **irgendeines** der Promises erfüllt ist; lehnt ab, wenn **alle** Promises abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Erledigt sich, wenn **irgendeines** der Promises erledigt ist. Mit anderen Worten, erfüllt sich, wenn irgendeines der Promises erfüllt ist; lehnt ab, wenn irgendeines der Promises abgelehnt wird.

Alle diese Methoden nehmen ein [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Objekt von Promises (genauer gesagt Thenables) entgegen und geben ein neues Promise zurück. Sie alle unterstützen Unterklassenbildung, was bedeutet, dass sie auf Unterklassen von `Promise` aufgerufen werden können, und das Ergebnis wird ein Promise des Unterklassentyps sein. Dazu muss der Konstruktor der Unterklasse das gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — eine einzelne `executor`-Funktion akzeptieren, die mit den `resolve`- und `reject`-Callbacks als Parameter aufgerufen werden kann. Die Unterklasse muss auch eine `resolve`-statische Methode haben, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte in Promises umzuwandeln.

Beachten Sie, dass JavaScript von Natur aus [einzelthreadig](/de/docs/Glossary/Thread) ist, sodass zu einem gegebenen Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl der Wechsel zwischen verschiedenen Promises die Ausführung der Promises konkurrent erscheinen lässt. [Parallele Ausführung](https://de.wikipedia.org/wiki/Parallelverarbeitung) in JavaScript kann nur durch [Arbeiter-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu kapseln, die nicht bereits Promises unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus Promise-Methoden zu konstruieren.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einziges `Promise` zurück. Dieses Promise wird erfüllt, wenn alle Promises der Eingabe erfüllt werden (einschließlich, wenn ein leeres iterierbares Objekt übergeben wird), mit einem Array der Erfüllungswerte. Es lehnt ab, wenn eines der Promises der Eingabe ablehnt, mit diesem ersten Ablehnungsgrund.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einziges `Promise` zurück. Dieses Promise wird erfüllt, wenn alle Promises der Eingabe erledigt werden (einschließlich, wenn ein leeres iterierbares Objekt übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes einzelnen Promises beschreiben.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einziges `Promise` zurück. Dieses Promise wird erfüllt, wenn eines der Promises der Eingabe erfüllt wird, mit diesem ersten Erfüllungswert. Es lehnt ab, wenn alle Promises der Eingabe ablehnen (einschließlich, wenn ein leeres iterierbares Objekt übergeben wird), mit einem {{jsxref("AggregateError")}}, das ein Array von Ablehnungsgründen enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einziges `Promise` zurück. Dieses Promise erledigt sich mit dem endgültigen Zustand des ersten erledigten Promises.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem angegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem angegebenen Wert aufgelöst wird. Wenn der Wert ein Thenable ist (d.h. eine `then`-Methode hat), wird das zurückgegebene Promise diesem Thenable "folgen" und seinen endgültigen Zustand übernehmen; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}} {{experimental_inline}}
  - : Nimmt einen beliebigen Callback (gibt zurück oder löst aus, synchron oder asynchron) und kapselt dessen Ergebnis in einem `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen zum Auflösen oder Ablehnen enthält, die den beiden Parametern entsprechen, die an den Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Promise`-Instanzen ist der anfängliche Wert der {{jsxref("Promise/Promise", "Promise")}}-Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Fügt einen Ablehnungshandler-Callback zum Promise hinzu und gibt ein neues Promise zurück, das auf den Rückgabewert des Handlers aufgelöst wird, wenn dieser aufgerufen wird, oder auf seinen ursprünglichen Erfüllungswert, wenn das Promise stattdessen erfüllt wird.
- {{jsxref("Promise.prototype.finally()")}}
  - : Fügt einen Handler zum Promise hinzu und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst wird. Der Handler wird aufgerufen, wenn das Promise erledigt ist, egal ob erfüllt oder abgelehnt.
- {{jsxref("Promise.prototype.then()")}}
  - : Fügt Erfüllungs- und Ablehnungshandler zum Promise hinzu und gibt ein neues Promise zurück, das sich auf den Rückgabewert des aufgerufenen Handlers auflöst, oder auf seinen ursprünglichen erledigten Wert, wenn das Promise nicht behandelt wurde (d.h. wenn der betreffende Handler `onFulfilled` oder `onRejected` keine Funktion ist).

## Beispiele

### Einfaches Beispiel

```js
const myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML API.
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

Dieses Beispiel zeigt verschiedene Techniken zur Nutzung der Promise-Fähigkeiten und unterschiedlichen Situationen, die auftreten können. Um dies zu verstehen, beginnen Sie, indem Sie ans Ende des Codeblocks scrollen, und untersuchen Sie die Promise-Kette. Nach der Bereitstellung eines anfänglichen Promises kann eine Kette von Promises folgen. Die Kette besteht aus `.then()`-Aufrufen und hat typischerweise (aber nicht unbedingt) ein einzelnes `.catch()` am Ende, gefolgt von `.finally()`. In diesem Beispiel wird die Promise-Kette durch einen benutzerdefinierten `new Promise()`-Aufbau initiiert; in der Praxis beginnen Promise-Ketten jedoch eher mit einer API-Funktion (geschrieben von jemand anderem), die ein Promise zurückgibt.

Die Beispiel-Funktion `tetheredGetNumber()` zeigt, dass ein Promise-Generator `reject()` verwenden wird, während er einen asynchronen Aufruf einrichtet, entweder innerhalb des Callbacks oder in beiden. Die Funktion `promiseGetWord()` illustriert, wie eine API-Funktion ein Promise selbstständig generieren und zurückgeben kann.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das ist erzwungen, weil eine Promise-Kette durch alle `.then()`-Promises geht, selbst nach einem Fehler, und ohne das `throw` der Fehler "behoben" erscheinen würde. Das ist ein Aufwand, und aus diesem Grund ist es üblich, `onRejected` in der gesamten Kette von `.then()`-Promises zu weglassen und nur ein einzelnes `onRejected` im finalen `catch()` zu haben.

Dieser Code kann unter NodeJS ausgeführt werden. Das Verständnis wird verbessert, indem die Fehler tatsächlich auftreten. Um mehr Fehler zu erzwingen, ändern Sie die `threshold`-Werte.

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

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die Methode `testPromise()` wird jedes Mal aufgerufen, wenn der {{HTMLElement("button")}} geklickt wird. Es erstellt ein Promise, das mit einer Zufallszahl (beginnend bei 1) alle 1-3 Sekunden mit [`setTimeout()`](/de/docs/Web/API/SetTimeout) erfüllt wird. Der `Promise()`-Konstruktor wird verwendet, um das Promise zu erstellen.

Die Erfüllung des Promises wird protokolliert, durch einen Erfüllungs-Callback, der mit {{jsxref("Promise/then", "p1.then()")}} gesetzt wird. Einige Protokolle zeigen, wie der synchrone Teil der Methode vom asynchronen Abschluss des Promises entkoppelt ist.

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

Ein weiteres einfaches Beispiel, das `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwendet, um ein Bild zu laden, ist im MDN GitHub [js-examples](https://github.com/mdn/js-examples/tree/main/promises-test) Repository verfügbar. Sie können auch [sehen, wie es funktioniert](https://mdn.github.io/js-examples/promises-test/). Jeder Schritt ist kommentiert und ermöglicht es Ihnen, die Promise- und XHR-Architektur genau zu verfolgen.

### Nachverfolgung des ausgeübten Einstellungsobjekts

Ein Einstellungsobjekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen bereitstellt, wenn JavaScript-Code ausgeführt wird. Dies beinhaltet die Umgebung und das Modulkarten sowie HTML-spezifische Informationen wie den Ursprung. Das ausgeübte Einstellungsobjekt wird nachverfolgt, um sicherzustellen, dass der Browser weiß, welches für ein bestimmtes Stück Benutzercode verwendet werden soll.

Um dies besser nachvollziehen zu können, können wir uns genauer ansehen, wie die Umgebung ein Problem sein könnte. Ein **Umgebung** kann grob als das globale Objekt betrachtet werden. Was Umgebungen einzigartig macht, ist, dass sie alle notwendigen Informationen enthalten, um JavaScript-Code auszuführen. Dazu gehören Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Einstellungsobjekt hat seine eigene "Kopie" davon und sie werden nicht geteilt. Das kann zu unerwartetem Verhalten im Zusammenhang mit Promises führen. Um dies zu umgehen, verfolgen wir etwas, das das **ausgeübte Einstellungsobjekt** genannt wird. Dies repräsentiert Informationen, die spezifisch für den Kontext des Benutzercodes sind, der für einen bestimmten Funktionsaufruf verantwortlich ist.

Um dies noch etwas weiter zu veranschaulichen, können wir uns ansehen, wie ein [`<iframe>`](/de/docs/Web/HTML/Element/iframe), das in ein Dokument eingebettet ist, mit seinem Host kommuniziert. Da alle Web-APIs des ausgeübten Einstellungsobjekts bewusst sind, funktioniert das Folgende in allen Browsern:

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

Wenn wir dies so ändern, dass das `<iframe>` im Dokument auf Postnachrichten lauscht, können wir die Wirkung des ausgeübten Einstellungsobjekts beobachten:

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

In dem obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das ausgeübte Einstellungsobjekt nachverfolgt wird. Das liegt daran, dass ohne das Nachverfolgen des Ausgeübten wir möglicherweise die falsche Umgebung verwenden könnten, um die Nachricht zu senden.

> [!NOTE]
> Derzeit ist die ausgeübte Umgebungsnachverfolgung in Firefox voll implementiert und hat teilweise Implementierungen in Chrome und Safari.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Anleitung zum Verwenden von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [Einführung in JavaScript Promises](https://web.dev/articles/promises) auf web.dev (2013)
- [Callbacks, Promises und Routinen: Asynchrone Programmiermuster in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Präsentation von Domenic Denicola (2011)
