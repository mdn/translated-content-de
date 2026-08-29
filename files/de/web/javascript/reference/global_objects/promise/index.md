---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

Das **`Promise`**-Objekt repräsentiert den Abschluss (oder das Scheitern) einer asynchronen Operation und deren Ergebniswert.

Um zu verstehen, wie `Promises` arbeiten und wie Sie sie verwenden können, empfehlen wir Ihnen, zuerst [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Platzhalter für einen Wert, der möglicherweise noch nicht bekannt ist, wenn das Promise erstellt wird. Es ermöglicht Ihnen, Handler mit dem endgültigen Erfolgswert oder dem Grund für das Scheitern einer asynchronen Aktion zu verknüpfen. Dies lässt asynchrone Methoden Werte wie synchrone Methoden zurückgeben: Statt sofort den Endwert zurückzugeben, gibt die asynchrone Methode ein _Promise_ zurück, um den Wert zu einem späteren Zeitpunkt bereitzustellen.

Ein `Promise` befindet sich in einem dieser Zustände:

- _pending_: Anfangszustand, weder erfüllt noch zurückgewiesen.
- _fulfilled_: bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines schwebenden Promises kann entweder mit einem Wert _erfüllt_ oder mit einem Grund _zurückgewiesen_ (Fehler) werden. Wenn eine dieser Optionen eintritt, werden die zugeordneten Handler, die durch die `then`-Methode eines Promises in die Warteschlange gestellt wurden, aufgerufen. Wenn das Promise bereits erfüllt oder zurückgewiesen wurde, wenn ein entsprechender Handler angehängt wird, wird der Handler aufgerufen, sodass es keinen Wettlaufzustand zwischen dem Abschluss einer asynchronen Operation und dem Anhängen ihrer Handler gibt.

Ein Promise wird als _erledigt_ bezeichnet, wenn es entweder erfüllt oder zurückgewiesen, aber nicht pending ist.

![Flussdiagramm zeigt, wie sich der Promise-Zustand zwischen pending, fulfilled und rejected über then/catch-Handler ändert. Ein schwebendes Promise kann entweder erfüllt oder zurückgewiesen werden. Wenn erfüllt, wird der "on fulfillment"-Handler oder der erste Parameter der then()-Methode ausgeführt und führt weitere asynchrone Aktionen durch. Wenn zurückgewiesen, wird der Fehler-Handler, entweder als zweiter Parameter der then()-Methode oder als einziger Parameter der catch()-Methode übergeben, ausgeführt.](promises.png)

Sie werden auch den Begriff _resolved_ im Zusammenhang mit Promises hören — das bedeutet, dass das Promise erledigt oder "gesperrt" ist, um den endgültigen Zustand eines anderen Promises zu übernehmen, und weiteres Erfüllen oder Ablehnen hat keinen Effekt. Das [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) Dokument aus dem ursprünglichen Promise-Vorschlag enthält mehr Details zur Promise-Terminologie. Umgangssprachlich sind "resolved" Promises oft gleichbedeutend mit "fulfilled" Promises, aber wie in "States and fates" veranschaulicht, können resolved Promises auch schwebend oder zurückgewiesen sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist zum Zeitpunkt seiner Erstellung bereits _resolved_ (da `resolveOuter` synchron aufgerufen wird), aber es ist mit einem anderen Promise resolved, und daher nicht _fulfilled_, bis 1 Sekunde später, wenn das innere Promise erfüllt wird. In der Praxis wird die "Auflösung" oft im Hintergrund ausgeführt und ist nicht beobachtbar, und nur seine Erfüllung oder Ablehnung ist.

> [!NOTE]
> In mehreren anderen Programmiersprachen gibt es Mechanismen für Lazy Evaluation und das Aufschieben einer Berechnung, die ebenfalls "Promises" genannt werden, z.B. Scheme. Promises in JavaScript repräsentieren Prozesse, die bereits laufen, die mit Callback-Funktionen verkettet werden können. Wenn Sie einen Ausdruck faul evaluieren möchten, ziehen Sie in Betracht, eine Funktion ohne Argumente zu verwenden, z.B. `f = () => expression`, um den faul evaluierten Ausdruck zu erstellen und `f()`, um den Ausdruck sofort zu evaluieren.

`Promise` selbst hat kein erstklassiges Protokoll zur Annullierung, aber Sie können möglicherweise die zugrunde liegende asynchrone Operation direkt abbrechen, typischerweise mit [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Promises

Die Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}}, und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um weitere Aktionen mit einem Promise zu verknüpfen, das erledigt wird. Die `then()`-Methode akzeptiert bis zu zwei Argumente; das erste Argument ist eine Callback-Funktion für den Erfolgsfall des Promises, und das zweite Argument ist eine Callback-Funktion für den Fehlerfall. Die `catch()`- und `finally()`-Methoden rufen intern `then()` auf und machen die Fehlerbehandlung weniger wortreich. Zum Beispiel ist ein `catch()` im Grunde genommen ein `then()` ohne Übergabe des Erfolgs-Handlers. Da diese Methoden Promises zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Wir verwenden folgende Terminologie: _initiales Promise_ ist das Promise, auf dem `then` aufgerufen wird; _neues Promise_ ist das Promise, das von `then` zurückgegeben wird. Die beiden übergebenen Rückrufe an `then` werden als _Erfolgs-Handler_ und _Ablehnungs-Handler_ bezeichnet.

Der festgelegte Zustand des initialen Promises bestimmt, welcher Handler ausgeführt wird.

- Wenn das initiale Promise erfüllt ist, wird der Erfolgs-Handler mit dem Erfolgswert aufgerufen.
- Wenn das initiale Promise zurückgewiesen wird, wird der Ablehnungs-Handler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss des Handlers bestimmt den festgelegten Zustand des neuen Promises.

- Wenn der Handler einen [thenable](#thenables) Wert zurückgibt, wird das neue Promise im gleichen Zustand wie der zurückgegebene Wert erledigt.
- Wenn der Handler einen nicht-thenable Wert zurückgibt, wird das neue Promise mit dem zurückgegebenen Wert erfüllt.
- Wenn der Handler einen Fehler auslöst, wird das neue Promise mit dem ausgelösten Fehler zurückgewiesen.
- Wenn das initiale Promise keinen entsprechenden Handler angehängt hat, wird das neue Promise in den gleichen Zustand wie das initiale Promise übergehen — das heißt, ohne einen Ablehnungs-Handler bleibt ein abgelehntes Promise mit dem gleichen Grund abgelehnt.

Zum Beispiel, im obigen Code, wenn `myPromise` abgelehnt wird, wird `handleRejectedA` aufgerufen, und wenn `handleRejectedA` normal abgeschlossen wird (ohne Werfen oder Zurückgeben eines abgelehnten Promises), wird das Promise, das durch das erste `then` zurückgegeben wird, erfüllt anstatt abgelehnt zu bleiben. Daher, wenn ein Fehler sofort behandelt werden muss, wir aber den Fehlerzustand in der Kette beibehalten wollen, müssen wir im Ablehnungs-Handler einen Fehler irgendeines Typs werfen. Andererseits, wenn keine sofortige Notwendigkeit besteht, können wir die Fehlerbehandlung bis zum endgültigen `catch()`-Handler aufschieben.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Unter Verwendung [pfeilförmiger Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen könnte die Implementierung der Promise-Kette so aussehen:

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
> Um schnellere Ausführung zu erreichen, sollten alle synchronen Aktionen vorzugsweise innerhalb eines Handlers durchgeführt werden, da es sonst mehrere Ticks dauern würde, alle Handler nacheinander auszuführen.

JavaScript pflegt eine [Job-Warteschlange](/de/docs/Web/JavaScript/Reference/Execution_model). Jedes Mal wählt JavaScript einen Job aus der Warteschlange und führt ihn vollständig aus. Die Jobs werden vom Executor des `Promise()`-Konstruktors, den übergebenen Handlers an `then`, oder jeder Plattform-API, die ein Promise zurückgibt, definiert. Die Promises in einer Kette repräsentieren die Abhängigkeitsbeziehung zwischen diesen Jobs. Wenn ein Promise erledigt wird, werden die entsprechenden Handlers, die damit verknüpft sind, am Ende der Job-Warteschlange hinzugefügt.

Ein Promise kann an mehr als einer Kette teilnehmen. Für den folgenden Code wird die Erfüllung von `promiseA` sowohl `handleFulfilled1` als auch `handleFulfilled2` in die Job-Warteschlange hinzufügen. Da `handleFulfilled1` zuerst registriert ist, wird es zuerst aufgerufen.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits erledigten Promise zugewiesen werden. In diesem Fall wird die Aktion sofort an das Ende der Job-Warteschlange hinzugefügt und wird ausgeführt, wenn alle bestehenden Jobs abgeschlossen sind. Daher wird eine Aktion für ein bereits "erledigtes" Promise nur nach Abschluss des aktuellen synchronen Codes und mindestens einem Loop-Tick ausgeführt. Dies garantiert, dass Promise-Aktionen asynchron sind.

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

Im JavaScript-Ökosystem gab es mehrere Promise-Implementierungen lange bevor es Teil der Sprache wurde. Trotz unterschiedlichen internen Repräsentationen implementieren alle Promise-ähnlichen Objekte mindestens das _Thenable_-Interface. Ein Thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode, die mit zwei Rückrufen aufgerufen wird: einer für den Erfüllungsfall und einer für den Ablehnungsfall. Promises sind ebenfalls dannables.

Um mit den existierenden Promise-Implementierungen zusammenzuarbeiten, erlaubt es die Sprache, dannable in place von Promises zu verwenden. Zum Beispiel wird [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur Promises auflösen, sondern auch Thenables verfolgen.

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

Die `then()`-Methode ist verantwortlich für die Planung der Ausführung der bereitgestellten `onFulfilled` und `onRejected`-Callbacks. Ihre Semantik, einschließlich Fehlerbehandlung und Asynchronität, ist in der [Promises/A+ Spezifikation](https://promisesaplus.com/) präzise definiert, und wir werden sie hier nicht wiederholen. Es ist sehr selten, dass Sie selbst ein Thenable implementieren müssen; selbst wenn Sie keine nativen Promises verwenden, würden Sie wahrscheinlich eine Promise-Bibliothek wie [Bluebird](https://www.npmjs.com/package/bluebird) verwenden.

### Promise-Konkurrenz

Die `Promise`-Klasse bietet vier Haupt-Methoden, um die asynchrone Aufgaben-[Konkurrenz](https://de.wikipedia.org/wiki/Nebenl%C3%A4ufigkeit) zu erleichtern:

- {{jsxref("Promise.all()")}}
  - : Erfüllt sich, wenn **alle** der Promises erfüllt sind; lehnt ab, wenn **eines** der Promises abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt sich, wenn **alle** Promises erledigt sind.
- {{jsxref("Promise.any()")}}
  - : Erfüllt sich, wenn **eines** der Promises erfüllt ist; lehnt ab, wenn **alle** der Promises abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Erledigt sich, wenn **eines** der Promises erledigt wird. Mit anderen Worten, erfüllt sich, wenn eines der Promises erfüllt ist; lehnt ab, wenn eines der Promises abgelehnt wird.

Alle diese Methoden nehmen ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises ([thenables](#thenables), um genau zu sein) und geben ein neues Promise zurück. Sie alle unterstützen Subclassing, was bedeutet, dass sie auf Subklassen von `Promise` aufgerufen werden können, und das Ergebnis wird ein Promise des Subklassentyps sein. Dazu muss der Konstruktor der Unterklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — eine einzige `executor`-Funktion akzeptieren, die mit den `resolve` und `reject`-Callbacks als Parameter aufgerufen werden kann. Die Unterklasse muss auch eine `resolve`-statische Methode haben, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte zu Promises zu lösen.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "Single-Threaded")}} ist, sodass zu einem bestimmten Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl die Kontrolle zwischen verschiedenen Promises wechseln kann, wodurch die Ausführung der Promises gleichzeitig erscheint. [Parallele Ausführung](https://de.wikipedia.org/wiki/Paralleles_Rechnen) kann in JavaScript nur durch [Worker-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

Es gibt zwei weitere komfortable statische Methoden: {{jsxref("Promise.allKeyed()")}} und {{jsxref("Promise.allSettledKeyed()")}}, die sich wie `Promise.all()` und `Promise.allSettled()` verhalten, aber _Objekte_ von Promises annehmen und Promises zurückgeben, die mit _Objekten_ der gleichen Form erfüllen. Durch die Arbeit mit Objekten anstelle von Arrays können Sie Ergebnisse mit semantisch aussagekräftigen Schlüsseln assoziieren, anstatt mit willkürlicher Array-Anordnung, die schwer zu verwalten sein kann.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu umschließen, die nicht bereits Promises unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von Promisemethoden zu konstruieren.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn alle Promises des Inputs erfüllen (einschließlich, wenn ein leeres Iterable übergeben wird), mit einem Array der Erfüllungswerte. Es lehnt ab, wenn eines der Promises des Inputs abgelehnt wird, mit diesem ersten Ablehnungsgrund.
- {{jsxref("Promise.allKeyed()")}} {{experimental_inline}}
  - : Wie `Promise.all()`, außer dass es ein Objekt von Promises nimmt und ein Promise zurückgibt, das mit einem Objekt der gleichen Form erfüllt, sodass Sie Ergebnisse mit semantisch aussagekräftigen Schlüsseln assoziieren können.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn alle Promises des Inputs erledigt sind (einschließlich, wenn ein leeres Iterable übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes Promises beschreiben.
- {{jsxref("Promise.allSettledKeyed()")}} {{experimental_inline}}
  - : Wie `Promise.allSettled()`, außer dass es ein Objekt von Promises nimmt und ein Promise zurückgibt, das mit einem Objekt der gleichen Form erfüllt, sodass Sie Ergebnisse mit semantisch aussagekräftigen Schlüsseln assoziieren können.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn eines der Promises des Inputs erfüllt, mit diesem ersten Erfüllungswert. Es lehnt ab, wenn alle Promises des Inputs abgelehnt werden (einschließlich, wenn ein leeres Iterable übergeben wird), mit einem {{jsxref("AggregateError")}}, das ein Array von Ablehnungsgründen enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erledigt sich mit dem endgültigen Zustand des ersten erledigten Promises.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem angegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem angegebenen Wert aufgelöst ist. Wenn der Wert ein Thenable ist (d.h. eine `then`-Methode hat), wird das zurückgegebene Promise diesem Thenable "folgen" und seinen endgültigen Zustand übernehmen; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Nimmt eine Callback-Funktion jeglicher Art (gibt zurück oder wirft, synchron oder asynchron) und wickelt ihr Ergebnis in ein `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen zum Erfüllen oder Ablehnen enthält, die den zwei Parametern entsprechen, die dem Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `Promise`-Instanzen ist der Anfangswert der {{jsxref("Promise/Promise", "Promise")}}-Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Hängt einen Ablehnungs-Handler-Callback an das Promise an und gibt ein neues Promise zurück, das sich auf den Rückgabewert des Callbacks auflöst, wenn es aufgerufen wird, oder auf seinen ursprünglichen Erfüllungswert, wenn das Promise stattdessen erfüllt ist.
- {{jsxref("Promise.prototype.finally()")}}
  - : Hängt einen Handler an das Promise an und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst wird. Der Handler wird aufgerufen, wenn das Promise erledigt wird, unabhängig davon, ob es erfüllt oder abgelehnt wurde.
- {{jsxref("Promise.prototype.then()")}}
  - : Hängt Erfolgs- und Ablehnungs-Handler an das Promise an und gibt ein neues Promise zurück, das sich auf den Rückgabewert des aufgerufenen Handlers auflöst oder auf seinen ursprünglichen Erledigungswert, wenn das Promise nicht behandelt wurde (d.h. wenn der betreffende Handler `onFulfilled` oder `onRejected` keine Funktion ist).

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

Dieses Beispiel zeigt verschiedene Techniken zur Verwendung von Promise-Fähigkeiten und verschiedene Situationen, die auftreten können. Um dies zu verstehen, scrollen Sie zunächst zum Ende des Codeblocks und betrachten Sie die Promise-Kette. Mit der Bereitstellung eines initialen Promises kann eine Kette von Promises folgen. Die Kette besteht aus `.then()`-Aufrufen und hat typischerweise (aber nicht notwendigerweise) ein einzelnes `.catch()` am Ende, gefolgt von optional `.finally()`. In diesem Beispiel wird die Promise-Kette von einem benutzerdefinierten `new Promise()`-Konstrukt gestartet; in der Praxis beginnen Promise-Ketten jedoch häufiger mit einer API-Funktion (von jemand anderem geschrieben), die ein Promise zurückgibt.

Die Beispiel-Funktion `tetheredGetNumber()` zeigt, dass ein Promise-Generator `reject()` verwenden wird, während er einen asynchronen Aufruf einrichtet, innerhalb des Rückrufs oder beides. Die Funktion `promiseGetWord()` veranschaulicht, wie eine API-Funktion ein Promise auf selbständige Weise generieren und zurückgeben könnte.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das ist erzwungen, da eine Promise-Kette durch alle `.then()`-Promises geht, selbst nach einem Fehler, und ohne das `throw` würde der Fehler "behoben" erscheinen. Das ist umständlich, und deshalb ist es üblich, `onRejected` in der gesamten Kette von `.then()`-Promises wegzulassen und nur ein einzelnes `onRejected` im finalen `catch()` zu haben.

Dieser Code kann unter Node.js ausgeführt werden. Das Verständnis wird verbessert, indem die Fehler tatsächlich auftreten. Um mehr Fehler zu erzwingen, ändern Sie die `threshold`-Werte.

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

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die `testPromise()`-Methode wird jedes Mal aufgerufen, wenn auf den {{HTMLElement("button")}} geklickt wird. Es erstellt ein Promise, das mit dem Promise-Zähler (eine von 1 beginnende Zahl) alle 1-3 Sekunden zufällig erfüllt wird, indem [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verwendet wird. Der `Promise()`-Konstruktor wird verwendet, um das Promise zu erstellen.

Die Erfüllung des Promises wird über einen Erfüllungs-Callback protokolliert, der mit {{jsxref("Promise/then", "p1.then()")}} gesetzt wird. Einige Protokolle zeigen, wie der synchrone Teil der Methode vom asynchronen Abschluss des Promises entkoppelt ist.

Durch mehrmaliges Klicken auf den Button in kurzer Zeit werden Sie sogar sehen, wie die verschiedenen Promises nacheinander erfüllt werden.

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

Ein weiteres Beispiel unter Verwendung von `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zum Laden eines Bildes wird unten gezeigt. Jeder Schritt ist kommentiert und ermöglicht es Ihnen, die Promise- und XHR-Architektur genau zu verfolgen.

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

### Verfolgung des aktuellen Einstellungen-Objekts

Ein Einstellungsobjekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen bereitstellt, wenn JavaScript-Code ausgeführt wird. Dies umfasst den Bereich und die Modulkarte sowie HTML-spezifische Informationen wie den Ursprung. Das aktuelle Einstellungen-Objekt wird verfolgt, um sicherzustellen, dass der Browser weiß, welches für ein bestimmtes Stück Benutzercode verwendet werden soll.

Um sich das besser vorzustellen, können wir einen genaueren Blick darauf werfen, wie der Bereich ein Problem darstellen könnte. Ein **Bereich** kann grob als das globale Objekt betrachtet werden. Das Einzigartige an Bereichen ist, dass sie alle notwendigen Informationen zur Ausführung von JavaScript-Code enthalten. Dazu gehören Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Einstellungen-Objekt hat seine eigene "Kopie" dieser und sie werden nicht geteilt. Das kann im Zusammenhang mit Promises zu unerwartetem Verhalten führen. Um dies zu umgehen, verfolgen wir etwas, das als **aktuelles Einstellungen-Objekt** bezeichnet wird. Dies repräsentiert Informationen, die spezifisch für den Kontext des Benutzercodes sind, der für einen bestimmten Funktionsaufruf verantwortlich ist.

Um dies noch weiter zu verdeutlichen, können wir uns ansehen, wie ein in ein Dokument eingebettetes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) mit seinem Host kommuniziert. Da alle Web-APIs sich des aktuellen Einstellungen-Objekts bewusst sind, wird das Folgende in allen Browsern funktionieren:

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

Dasselbe Konzept gilt für Promises. Wenn wir das obige Beispiel ein wenig ändern, erhalten wir Folgendes:

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

Wenn wir dies so ändern, dass das `<iframe>` im Dokument auf Post-Nachrichten hört, können wir die Auswirkungen des aktuellen Einstellungen-Objekts beobachten:

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

Im obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das aktuelle Einstellungen-Objekt verfolgt wird. Dies liegt daran, dass wir ohne die Verfolgung des aktuellen Objekts möglicherweise die falsche Umgebung verwenden, um die Nachricht zu senden.

> [!NOTE]
> Zurzeit ist die Verfolgung des aktuellen Bereichs vollständig in Firefox implementiert und hat teilweise Implementierungen in Chrome und Safari.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [JavaScript Promises: eine Einführung](https://web.dev/articles/promises) auf web.dev (2013)
- [Callbacks, Promises und Coroutines: Asynchrone Programmiermuster in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Präsentation von Domenic Denicola (2011)
