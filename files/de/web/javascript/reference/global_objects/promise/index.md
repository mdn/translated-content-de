---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{JSRef}}

Das **`Promise`**-Objekt repräsentiert den eventuellen Abschluss (oder das Scheitern) einer asynchronen Operation und deren resultierenden Wert.

Um zu verstehen, wie Promises funktionieren und wie Sie sie verwenden können, empfehlen wir Ihnen, zunächst [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Stellvertreter für einen Wert, der zum Zeitpunkt der Erstellung des Promises nicht unbedingt bekannt ist. Es ermöglicht Ihnen, Handler mit dem eventuellen Erfolgswert oder dem Fehlerschlaggrund einer asynchronen Aktion zu verknüpfen. Dies ermöglicht es asynchronen Methoden, Werte ähnlich wie synchronen Methoden zurückzugeben: Anstatt sofort den endgültigen Wert zurückzugeben, gibt die asynchrone Methode ein _Promise_ zurück, das den Wert irgendwann in der Zukunft bereitstellt.

Ein `Promise` befindet sich in einem der folgenden Zustände:

- _pending_: Anfangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines ausstehenden Promises kann entweder mit einem Wert _erfüllt_ oder mit einem Grund (Fehler) _abgelehnt_ werden. Wenn eine dieser Optionen eintritt, werden die zugeordneten Handler, die von der `then`-Methode eines Promises in die Warteschlange gestellt wurden, aufgerufen. Wenn das Promise bereits erfüllt oder abgelehnt war, als ein entsprechender Handler angehängt wurde, wird der Handler aufgerufen, sodass es keine Rennbedingungen zwischen dem Abschluss einer asynchronen Operation und dem Anfügen ihrer Handler gibt.

Ein Promise wird als _erledigt_ bezeichnet, wenn es entweder erfüllt oder abgelehnt ist, aber nicht aussteht.

![Flussdiagramm, das zeigt, wie der Promise-Zustand zwischen ausstehend, erfüllt und abgelehnt über then/catch-Handler wechselt. Ein ausstehendes Promise kann entweder erfüllt oder abgelehnt werden. Wenn erfüllt, wird der "on fulfillment"-Handler oder der erste Parameter der then()-Methode ausgeführt und führt weitere asynchrone Aktionen durch. Wenn abgelehnt, wird der Fehlerhandler entweder als zweiter Parameter der then()-Methode oder als einziger Parameter der catch()-Methode ausgeführt.](promises.png)

Sie werden auch den Begriff _resolved_ im Zusammenhang mit Promises hören — das bedeutet, dass das Promise erledigt oder "festgeschrieben" ist, um den endgültigen Zustand eines anderen Promises zu übernehmen, und dass weiteres Auflösen oder Ablehnen keine Auswirkung hat. Das Dokument [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) aus dem ursprünglichen Promise-Vorschlag bietet mehr Details zur Promise-Terminologie. Umgangssprachlich sind "aufgelöste" Promises oft gleichbedeutend mit "erfüllten" Promises, aber wie in "States and fates" dargestellt, können aufgelöste Promises auch ausstehend oder abgelehnt sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist bereits _aufgelöst_ zu dem Zeitpunkt, an dem es erstellt wird (da `resolveOuter` synchron aufgerufen wird), aber es wird mit einem anderen Promise aufgelöst und daher erst eine Sekunde später _erfüllt_, wenn das innere Promise erfüllt wird. In der Praxis geschieht das "Auflösen" oft hinter den Kulissen und ist nicht sichtbar, und nur seine Erfüllung oder Ablehnung sind es.

> [!NOTE]
> Mehrere andere Programmiersprachen haben Mechanismen zur verzögerten Auswertung und zum Aufschieben einer Berechnung, die sie ebenfalls "Promises" nennen, z.B. Scheme. Promises in JavaScript repräsentieren Prozesse, die bereits stattfinden und mit Callback-Funktionen verkettet werden können. Wenn Sie einen Ausdruck verzögert auswerten möchten, sollten Sie eine Funktion ohne Argumente verwenden, z.B. `f = () => expression`, um den verzögert ausgewerteten Ausdruck zu erstellen, und `f()`, um den Ausdruck sofort auszuwerten.

`Promise` selbst hat kein erstklassiges Protokoll für die Abbrechung, aber Sie können möglicherweise die zugrunde liegende asynchrone Operation direkt abbrechen, typischerweise mit [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Promises

Die Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}}, und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um weitere Aktionen mit einem Promise zu verknüpfen, das erledigt wird. Die `then()`-Methode nimmt bis zu zwei Argumente an; das erste Argument ist eine Callback-Funktion für den Fall, dass das Promise erfüllt wird, und das zweite Argument ist eine Callback-Funktion für den Fall, dass das Promise abgelehnt wird. Die Methoden `catch()` und `finally()` rufen intern `then()` auf und machen die Fehlerbehandlung weniger umständlich. Beispielsweise ist ein `catch()` eigentlich nur ein `then()` ohne die Übergabe des Erfüllungs-Handlers. Da diese Methoden Promises zurückgeben, können sie verkettet werden. Beispielsweise:

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

Wir verwenden die folgende Terminologie: _initiales Promise_ ist das Promise, bei dem `then` aufgerufen wird; _neues Promise_ ist das Promise, das von `then` zurückgegeben wird. Die zwei an `then` übergebenen Callback-Funktionen werden _Erfüllungshandler_ bzw. _Ablehnungshandler_ genannt.

Der erledigte Zustand des initialen Promises bestimmt, welchen Handler ausgeführt werden soll.

- Wenn das initiale Promise erfüllt ist, wird der Erfüllungshandler mit dem Erfüllungswert aufgerufen.
- Wenn das initiale Promise abgelehnt ist, wird der Ablehnungshandler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss des Handlers bestimmt den erledigten Zustand des neuen Promises.

- Wenn der Handler einen [thenable](#thenables) Wert zurückgibt, wird das neue Promise im gleichen Zustand wie der zurückgegebene Wert erledigt.
- Wenn der Handler einen nicht-thenable Wert zurückgibt, wird das neue Promise mit dem zurückgegebenen Wert erfüllt.
- Wenn der Handler einen Fehler wirft, wird das neue Promise mit dem geworfenen Fehler abgelehnt.
- Wenn dem initialen Promise kein entsprechender Handler zugeordnet ist, wird das neue Promise im gleichen Zustand wie das initiale Promise erledigt — ohne einen Ablehnungshandler bleibt ein abgelehntes Promise mit dem gleichen Grund abgelehnt.

Beispielsweise wird in dem obigen Code `handleRejectedA` aufgerufen, wenn `myPromise` abgelehnt wird, und wenn `handleRejectedA` normal abgeschlossen wird (ohne zu werfen oder ein abgelehntes Promise zurückzugeben), wird das Promise, das durch den ersten `then` zurückgegeben wird, erfüllt anstelle von abgelehnt zu bleiben. Daher, wenn ein Fehler sofort behandelt werden muss, aber wir den Fehlerzustand in der Kette beibehalten möchten, müssen wir einen Fehler irgendeines Typs im Ablehnungshandler werfen. Andererseits, bei Abwesenheit eines unmittelbaren Bedarfs, ist es einfacher, die Fehlerbehandlung bis zum letzten `catch()`-Handler zu belassen.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Unter Verwendung von [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen könnte die Implementierung der Promisekette ungefähr so aussehen:

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
> Für eine schnellere Ausführung sollten alle synchronen Aktionen vorzugsweise innerhalb eines Handlers durchgeführt werden; andernfalls würde es mehrere Takte dauern, um alle Handler der Reihe nach auszuführen.

JavaScript führt eine [Job-Warteschlange](/de/docs/Web/JavaScript/Event_loop). Jedes Mal wählt JavaScript einen Job aus der Warteschlange aus und führt ihn vollständig durch. Die Jobs werden durch den Executor des `Promise()`-Konstruktors, die an `then` übergebenen Handler oder eine Plattform-API, die ein Promise zurückgibt, definiert. Die Promises in einer Kette repräsentieren die Abhängigkeitsbeziehung zwischen diesen Jobs. Wenn ein Promise erledigt ist, werden die entsprechenden Handler, die damit verknüpft sind, am Ende der Job-Warteschlange hinzugefügt.

Ein Promise kann an mehr als einer Kette teilnehmen. Für den folgenden Code wird die Erfüllung von `promiseA` sowohl `handleFulfilled1` als auch `handleFulfilled2` zur Job-Warteschlange hinzufügen. Da `handleFulfilled1` zuerst registriert wird, wird es zuerst aufgerufen.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits erledigten Promise zugeordnet werden. In diesem Fall wird die Aktion sofort am Ende der Job-Warteschlange hinzugefügt und wird ausgeführt, wenn alle vorhandenen Jobs abgeschlossen sind. Daher wird eine Aktion für ein bereits "erledigtes" Promise nur nach Abschluss des aktuellen synchronen Codes ausgeführt und mindestens ein Loop-Tick vergangen ist. Dies garantiert, dass Promise-Aktionen asynchron sind.

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

Das JavaScript-Ökosystem hatte viele Promise-Implementierungen lange bevor es Teil der Sprache wurde. Obwohl sie intern unterschiedlich dargestellt werden, implementieren mindestens alle Promise-ähnlichen Objekte das _Thenable_-Interface. Ein Thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode, die mit zwei Callback-Funktionen aufgerufen wird: eine, wenn das Promise erfüllt wird, und eine, wenn es abgelehnt wird. Promises sind ebenfalls Thenables.

Um mit den bestehenden Promise-Implementierungen zu interagieren, ermöglicht die Sprache die Verwendung von Thenables anstelle von Promises. Beispielsweise löst [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur Promises auf, sondern verfolgt auch Thenables.

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

Die `Promise`-Klasse bietet vier statische Methoden, um die asynchrone Aufgaben-[Konkurrenz](https://de.wikipedia.org/wiki/Konkurrierende_Programmierung) zu erleichtern:

- {{jsxref("Promise.all()")}}
  - : Erfüllt, wenn **alle** Promises erfüllt sind; lehnt ab, wenn **irgendeine** der Promises abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt, wenn **alle** Promises erledigt sind.
- {{jsxref("Promise.any()")}}
  - : Erfüllt, wenn **irgendeines** der Promises erfüllt ist; lehnt ab, wenn **alle** der Promises abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Erledigt, wenn **irgendeines** der Promises erledigt ist. Anders gesagt, erfüllt, wenn eines der Promises erfüllt; abgelehnt, wenn eines der Promises abgelehnt wird.

Alle diese Methoden nehmen ein [iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises (genauer gesagt [Thenables](#thenables)) als Eingabe und geben ein neues Promise zurück. Alle unterstützen das Subclassing, was bedeutet, dass sie auf Unterklassen von `Promise` aufgerufen werden können, und das Ergebnis wird ein Promise des Subklasstyps sein. Dazu muss der Konstruktor der Unterklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — die Annahme einer einzelnen `executor`-Funktion, die mit den `resolve`- und `reject`-Callbacks als Parameter aufgerufen werden kann. Die Unterklasse muss auch eine `resolve`-statische Methode haben, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte zu Promises aufzulösen.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "single-threaded")}} ist, sodass zu einem gegebenen Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl die Kontrolle zwischen verschiedenen Promises wechseln kann, wodurch die Ausführung der Promises gleichzeitiger erscheint. [Parallele Ausführung](https://de.wikipedia.org/wiki/Parallelverarbeitung) in JavaScript kann nur durch [Worker-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen einzuwickeln, die Promises noch nicht unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der zum Erstellen von Rückgabewerten aus Promise-Methoden verwendet wird.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises des Inputs erfüllt werden (einschließlich wenn ein leeres Iterable übergeben wird), mit einem Array der Erfüllungswerte. Es lehnt ab, wenn eines der Promises des Inputs abgelehnt wird, mit diesem ersten Ablehnungsgrund.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises des Inputs erledigen (einschließlich wenn ein leeres Iterable übergeben wird), mit einem Array von Objekten, die den Ausgang jedes Promises beschreiben.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn eines der Promises des Inputs erfüllt ist, mit diesem ersten Erfüllungswert. Es lehnt ab, wenn alle Promises des Inputs abgelehnt werden (einschließlich wenn ein leeres Iterable übergeben wird), mit einem {{jsxref("AggregateError")}}, das ein Array von Ablehnungsgründen enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erledigt den eventuellen Zustand des ersten Promise, das erledigt.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem angegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem angegebenen Wert aufgelöst wird. Wenn der Wert ein Thenable ist (d.h. eine `then`-Methode hat), wird das zurückgegebene Promise diesem Thenable "folgen" und dessen endgültigen Zustand übernehmen; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}} {{experimental_inline}}
  - : Nimmt einen Callback jeder Art (gibt zurück oder wirft, synchron oder asynchron) und verpackt dessen Ergebnis in ein `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen enthält, um es entsprechend den zwei an den Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergebenen Parametern zu lösen oder abzulehnen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Promise`-Instanzen ist der Anfangswert der {{jsxref("Promise/Promise", "Promise")}}-Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Fügt einen Ablehnungshandler-Callback zum Promise hinzu und gibt ein neues Promise zurück, das auf den Rückgabewert des Callbacks aufgelöst wird, wenn es aufgerufen wird, oder auf seinen ursprünglichen Erfüllungswert, wenn das Promise stattdessen erfüllt ist.
- {{jsxref("Promise.prototype.finally()")}}
  - : Fügt einen Handler zum Promise hinzu und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst wird. Der Handler wird aufgerufen, wenn das Promise erledigt ist, unabhängig davon, ob es erfüllt oder abgelehnt ist.
- {{jsxref("Promise.prototype.then()")}}
  - : Fügt Erfüllungs- und Ablehnungshandler zum Promise hinzu und gibt ein neues Promise zurück, das auf den Rückgabewert des aufgerufenen Handlers aufgelöst wird oder auf seinen ursprünglichen erledigten Wert, wenn das Promise nicht behandelt wurde (d.h. wenn der relevante Handler `onFulfilled` oder `onRejected` keine Funktion ist).

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

### Beispiel mit diversen Situationen

Dieses Beispiel zeigt verschiedene Techniken zur Nutzung der Promise-Fähigkeiten und diverse Situationen, die auftreten können. Um dies zu verstehen, scrollen Sie zunächst zum Ende des Codeblocks und überprüfen Sie die Promisekette. Bei der Bereitstellung eines initialen Promises kann eine Kette von Promises folgen. Die Kette besteht aus `.then()`-Aufrufen und hat typischerweise (aber nicht unbedingt) ein einzelnes `.catch()` am Ende, gefolgt von `.finally()`. In diesem Beispiel wird die Promisekette durch ein benutzerdefiniertes `new Promise()`-Konstrukt gestartet; in der Praxis beginnen Promiseketten jedoch typischerweise mit einer API-Funktion (von jemand anderem geschrieben), die ein Promise zurückgibt.

Die Beispielfunktion `tetheredGetNumber()` zeigt, dass ein Promise-Generator `reject()` sowohl bei der Einrichtung eines asynchronen Aufrufs als auch innerhalb des Callbacks verwenden wird oder beides. Die Funktion `promiseGetWord()` veranschaulicht, wie eine API-Funktion ein Promise in einer eigenständigen Weise generieren und zurückgeben könnte.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das ist erzwungen, weil eine Promisekette durch alle `.then()`-Promises geht, selbst nach einem Fehler, und ohne das `throw` der Fehler als "repariert" erscheinen würde. Das ist mühsam, und aus diesem Grund ist es üblich, das `onRejected` in der Kette der `.then()`-Promises wegzulassen und nur ein `onRejected` im finalen `catch()` zu haben.

Dieser Code kann unter NodeJS ausgeführt werden. Verständnis wird verbessert, wenn die Fehler tatsächlich auftreten. Um mehr Fehler zu erzwingen, ändern Sie die `threshold`-Werte.

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

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die `testPromise()`-Methode wird jedes Mal aufgerufen, wenn die {{HTMLElement("button")}}-Element angeklickt wird. Es erstellt ein Promise, das nach dem Zufallsprinzip 1 bis 3 Sekunden eingestellt wird, bis zur Anzahl der Promises (Zahl beginnend bei 1), erfüllt wird. Der `Promise()`-Konstruktor wird verwendet, um das Promise zu erstellen.

Die Erfüllung des Promises wird protokolliert, über einen Erfüllungs-Callback, der mit {{jsxref("Promise/then", "p1.then()")}} gesetzt wird. Einige Protokolle zeigen, wie der synchronisierte Teil der Methode von der asynchronen Erfüllung des Promises entkoppelt ist.

Durch mehrmaliges Klicken auf den Button in kurzer Zeit können Sie sogar sehen, wie die verschiedenen Promises nacheinander erfüllt werden.

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

Ein weiteres einfaches Beispiel, das `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwendet, um ein Bild zu laden, ist im MDN GitHub-Repository [js-examples](https://github.com/mdn/js-examples/tree/main/promises-test) verfügbar. Sie können es auch [in Aktion sehen](https://mdn.github.io/js-examples/promises-test/). Jeder Schritt ist kommentiert und ermöglicht es, die Promise- und XHR-Architektur genau zu verfolgen.

### Verfolgung des zugehörigen Einstellungsobjekts

Ein Einstellungsobjekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen liefert, wenn JavaScript-Code ausgeführt wird. Dazu gehören der Bereich und die Modulkarten sowie HTML-spezifische Informationen wie der Ursprung. Das zugehörige Einstellungsobjekt wird überwacht, um sicherzustellen, dass der Browser weiß, welches Einstellungsobjekt für ein bestimmtes Stück Benutzer-Code zu verwenden ist.

Um dies besser zu verdeutlichen, können wir uns genauer ansehen, wie der Bereich ein Problem darstellen kann. Ein **Bereich** kann grob als das globale Objekt betrachtet werden. Was an Bereichen einzigartig ist, ist, dass sie alle notwendigen Informationen enthalten, um JavaScript-Code auszuführen. Dazu gehören Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Einstellungsobjekt hat seine eigene "Kopie" dieser Objekte, und sie werden nicht geteilt. Das kann zu unerwartetem Verhalten in Bezug auf Promises führen. Um dies zu umgehen, überwachen wir das sogenannte **zugehörige Einstellungsobjekt**. Dies repräsentiert Informationen, die spezifisch für den Kontext des Benutzer-Codes sind, der für einen bestimmten Funktionsaufruf verantwortlich ist.

Um dies etwas weiter zu verdeutlichen, können wir uns ansehen, wie ein [`<iframe>`](/de/docs/Web/HTML/Element/iframe) in ein Dokument eingebettet mit seinem Host kommuniziert. Da alle Web-APIs das zugehörige Einstellungsobjekt kennen, funktioniert das Folgende in allen Browsern:

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

Das gleiche Konzept gilt für Promises. Wenn wir das obige Beispiel ein wenig abändern, erhalten wir dies:

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

Wenn wir dies so ändern, dass das `<iframe>` im Dokument auf Post-Nachrichten hört, können wir die Auswirkung des zugehörigen Einstellungsobjekts beobachten:

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

Im obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das zugehörige Einstellungsobjekt verfolgt wird. Dies liegt daran, dass wir ohne Verfolgung des zugehörigen Objekts möglicherweise die falsche Umgebung verwenden, um die Nachricht zu senden.

> [!NOTE]
> Derzeit ist die Verfolgung von zugehörigen Bereichen vollständig in Firefox implementiert und in Chrome und Safari teilweise.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [JavaScript Promises: eine Einführung](https://web.dev/articles/promises) auf web.dev (2013)
- [Rückrufe, Promises und Koroutinen: Asynchrone Programmiermuster in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Präsentation von Domenic Denicola (2011)
