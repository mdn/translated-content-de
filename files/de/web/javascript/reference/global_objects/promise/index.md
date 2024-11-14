---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{JSRef}}

Das **`Promise`**-Objekt repräsentiert den zukünftigen Abschluss (oder Misserfolg) einer asynchronen Operation und ihren resultierenden Wert.

Um zu verstehen, wie `Promises` funktionieren und wie Sie sie verwenden können, empfehlen wir Ihnen, zuerst [Promises verwenden](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Platzhalter für einen Wert, der nicht unbedingt bekannt ist, wenn das `Promise` erstellt wird. Es ermöglicht Ihnen, Handler mit einem zukünftigen Erfolgswert oder Misserfolgsgrund einer asynchronen Aktion zu verknüpfen. Dies ermöglicht es asynchronen Methoden, Werte wie synchrone Methoden zurückzugeben: Anstatt den endgültigen Wert sofort zurückzugeben, liefert die asynchrone Methode ein _Versprechen_, den Wert irgendwann in der Zukunft bereitzustellen.

Ein `Promise` befindet sich in einem der folgenden Zustände:

- _Pending_: Anfangszustand, weder erfüllt noch abgelehnt.
- _Fulfilled_: Bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _Rejected_: Bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines ausstehenden `Promise` kann entweder mit einem Wert _erfüllt_ oder mit einem Grund (Fehler) _abgelehnt_ werden. Wenn eine dieser Optionen eintritt, werden die verbundenen Handler, die durch die `then`-Methode eines `Promise` in die Warteschlange gestellt wurden, aufgerufen. Wenn das `Promise` bereits erfüllt oder abgelehnt ist, wenn ein entsprechender Handler angefügt wird, wird der Handler aufgerufen, sodass kein Wettstreit zwischen der Fertigstellung einer asynchronen Operation und dem Anhängen ihrer Handler besteht.

Ein `Promise` gilt als _settled_, wenn es entweder erfüllt oder abgelehnt ist, aber nicht mehr aussteht.

![Flussdiagramm, das zeigt, wie der Promise-Zustand zwischen ausstehend, erfüllt und abgelehnt über then/catch-Handler wechselt. Ein ausstehendes Promise kann entweder erfüllt oder abgelehnt werden. Wenn erfüllt, wird der "bei Erfüllung" Handler oder das erste Argument der then()-Methode ausgeführt und führt weitere asynchrone Aktionen durch. Wenn abgelehnt, wird der Fehlerhandler entweder als zweites Argument der then()-Methode oder als einziges Argument der catch()-Methode aufgerufen.](promises.png)

Der Begriff "_resolved_" wird im Zusammenhang mit `Promises` ebenfalls verwendet — dies bedeutet, dass das `Promise` entweder erfüllt oder "eingesperrt" wird, um mit dem endgültigen Zustand eines anderen `Promise` übereinzustimmen, und weiteres Erfüllen oder Ablehnen hat keinen Effekt. Das [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md)-Dokument aus dem ursprünglichen `Promise`-Vorschlag enthält weitere Details zur `Promise`-Terminologie. Im informellen Sprachgebrauch sind "resolved" `Promises` oft gleichbedeutend mit "fulfilled" `Promises`, aber wie in "States and fates" veranschaulicht, können "resolved" `Promises` auch ausstehend oder abgelehnt sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses `Promise` ist bereits bei der Erstellung _resolved_ (weil `resolveOuter` synchron aufgerufen wird), aber es wird mit einem anderen `Promise` gelöst und daher erst eine Sekunde später _erfüllt_ sein, wenn das innere `Promise` erfüllt. In der Praxis wird die "Resolution" oft im Hintergrund durchgeführt und ist nicht beobachtbar; nur die Erfüllung oder Ablehnung sind es.

> [!NOTE]
> Mehrere andere Sprachen haben Mechanismen zur Lazy Evaluation und zur Verzögerung einer Berechnung, die sie ebenfalls "Promises" nennen, z.B. Scheme. `Promises` in JavaScript stellen Prozesse dar, die bereits stattfinden und mit Callback-Funktionen verkettet werden können. Wenn Sie einen Ausdruck Lazy evaluieren möchten, sollten Sie in Erwägung ziehen, eine Funktion ohne Argumente zu verwenden, z.B. `f = () => expression`, um den Lazy-evaluierten Ausdruck zu erstellen, und `f()`, um den Ausdruck sofort zu evaluieren.

`Promise` selbst hat kein erstklassiges Protokoll für die Stornierung, aber Sie können möglicherweise direkt die zugrunde liegende asynchrone Operation stornieren, typischerweise unter Verwendung des [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Promises

Die `Promise`-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um eine weitere Aktion mit einem `Promise` zu verknüpfen, das sich gesetzt hat. Die `then()`-Methode nimmt bis zu zwei Argumente an; das erste Argument ist eine Callback-Funktion für den Erfolgsfall des `Promise`, und das zweite Argument ist eine Callback-Funktion für den Ablehnungsfall. Die `catch()`- und `finally()`-Methoden rufen intern `then()` auf und machen die Fehlerbehandlung weniger umständlich. Ein `catch()` ist zum Beispiel einfach ein `then()` ohne Übergabe des Erfolgshandlers. Da diese Methoden `Promises` zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Wir verwenden die folgende Terminologie: _initial promise_ ist das `Promise`, auf das `then` aufgerufen wird; _new promise_ ist das durch `then` zurückgegebene `Promise`. Die beiden Rückrufe, die an `then` übergeben werden, werden _Erfüllungshandler_ und _Ablehnungshandler_ genannt.

Der gesetzte Zustand des initialen `Promise` bestimmt, welcher Handler ausgeführt wird.

- Wenn das initiale `Promise` erfüllt ist, wird der Erfüllungshandler mit dem Erfüllungswert aufgerufen.
- Wenn das initiale `Promise` abgelehnt ist, wird der Ablehnungshandler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss des Handlers bestimmt den gesetzten Zustand des neuen `Promise`.

- Wenn der Handler einen [thenable](#thenables) Wert zurückgibt, wird das neue `Promise` in den gleichen Zustand wie der zurückgegebene Wert gesetzt.
- Wenn der Handler einen nicht-thenable Wert zurückgibt, wird das neue `Promise` mit dem zurückgegebenen Wert erfüllt.
- Wenn der Handler einen Fehler wirft, wird das neue `Promise` mit dem geworfenen Fehler abgelehnt.
- Wenn das initiale `Promise` keinen entsprechenden Handler hat, wird das neue `Promise` auf den gleichen Zustand wie das initiale `Promise` gesetzt — das heißt, ohne einen Ablehnungshandler bleibt ein abgelehntes `Promise` mit dem gleichen Grund abgelehnt.

Zum Beispiel, im obigen Code, wenn `myPromise` abgelehnt wird, wird `handleRejectedA` aufgerufen, und wenn `handleRejectedA` normal abschließt (ohne einen Fehler zu werfen oder ein abgelehntes `Promise` zurückzugeben), wird das durch das erste `then` zurückgegebene `Promise` erfüllt anstatt abgelehnt zu bleiben. Daher, wenn ein Fehler sofort behandelt werden muss, aber der Fehlerzustand in der Kette beibehalten werden soll, müssen wir einen Fehler irgendeiner Art im Ablehnungshandler werfen. Andererseits, in Abwesenheit eines unmittelbaren Bedarfs, können wir die Fehlerbehandlung bis zum finalen `catch()`-Handler aufschieben.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Unter Verwendung von [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen könnte die Implementierung der `Promise`-Kette in etwa so aussehen:

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
> Für schnellere Ausführung sollten alle synchronen Aktionen vorzugsweise innerhalb eines Handlers durchgeführt werden, ansonsten würde es mehrere Tick-Perioden dauern, alle Handler in Folge auszuführen.

JavaScript unterhält eine [Job-Warteschlange](/de/docs/Web/JavaScript/Event_loop). Jedes Mal wählt JavaScript einen Job aus der Warteschlange und führt ihn vollständig aus. Die Jobs werden durch den Executor des `Promise()`-Konstruktors, die an `then` übergebenen Handler oder eine beliebige Plattform-API definiert, die ein `Promise` zurückgibt. Die `Promises` in einer Kette repräsentieren die Abhängigkeitsbeziehung zwischen diesen Jobs. Wenn ein `Promise` gesetzt wird, werden die entsprechenden Handler, die mit ihm verbunden sind, ans Ende der Job-Warteschlange hinzugefügt.

Ein `Promise` kann an mehr als einer Kette teilnehmen. Beim folgenden Code verursacht die Erfüllung von `promiseA`, dass sowohl `handleFulfilled1` als auch `handleFulfilled2` zur Job-Warteschlange hinzugefügt werden. Da `handleFulfilled1` zuerst registriert ist, wird es zuerst ausgeführt.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits gesetzten `Promise` zugewiesen werden. In diesem Fall wird die Aktion sofort ans Ende der Warteschlange angehängt und wird ausgeführt, wenn alle bestehenden Jobs abgeschlossen sind. Daher erfolgt eine Aktion für ein bereits "gesetztes" `Promise` erst nach Abschluss des aktuellen synchronen Codes und nachdem mindestens ein Loop-Tick vergangen ist. Dies garantiert, dass `Promise`-Aktionen asynchron sind.

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

Das JavaScript-Ökosystem hatte mehrere `Promise`-Implementierungen lange bevor es Teil der Sprache wurde. Trotz unterschiedlicher interner Repräsentation implementieren alle `Promise`-ähnlichen Objekte mindestens das _Thenable_-Interface. Ein Thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode, die mit zwei Callbacks aufgerufen wird: eines, wenn das `Promise` erfüllt ist, eines, wenn es abgelehnt wird. `Promises` sind ebenfalls Thenables.

Um mit den bestehenden `Promise`-Implementierungen interoperabel zu sein, erlaubt die Sprache die Verwendung von Thenables anstelle von `Promises`. Zum Beispiel wird [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur `Promises` auflösen, sondern auch Thenables verfolgen.

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

### Promise-Konkurenz

Die `Promise`-Klasse bietet vier statische Methoden, um die asynchrone Aufgaben-[Konkurrenz](https://en.wikipedia.org/wiki/Concurrent_computing) zu erleichtern:

- {{jsxref("Promise.all()")}}
  - : Erfüllt sich, wenn **alle** `Promises` erfüllt sind; lehnt ab, wenn **eins** der `Promises` abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt sich, wenn **alle** `Promises` gesetzt sind.
- {{jsxref("Promise.any()")}}
  - : Erfüllt sich, wenn **eines** der `Promises` erfüllt wird; lehnt ab, wenn **alle** `Promises` abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Setzt sich, wenn **eines** der `Promises` sich setzt. Mit anderen Worten, erfüllt sich, wenn eines der `Promises` erfüllt wird; lehnt ab, wenn eines der `Promises` abgelehnt wird.

Alle diese Methoden nehmen ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von `Promises` (genauer gesagt Thenables) und geben ein neues `Promise` zurück. Sie alle unterstützen Subklassierung, was bedeutet, dass sie auf Unterklassen von `Promise` aufgerufen werden können und das Ergebnis ein `Promise` des Subklasstyps sein wird. Dazu muss der Konstruktor der Unterklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — also eine einzelne `executor`-Funktion akzeptieren, die mit den `resolve`- und `reject`-Callbacks als Parameter aufgerufen werden kann. Die Unterklasse muss auch eine `resolve`-statische Methode haben, die ähnlich wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte in `Promises` aufzulösen.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "eingleisig")}} ist, sodass zu einem bestimmten Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl die Kontrolle zwischen verschiedenen `Promises` wechseln kann, was die Ausführung der `Promises` gleichzeitig erscheinen lässt. Eine [Parallelverarbeitung](https://en.wikipedia.org/wiki/Parallel_computing) in JavaScript kann nur durch [Worker-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erzeugt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu umwickeln, die `Promises` noch nicht unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von `Promise`-Methoden zu konstruieren.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein iterierbares Objekt von `Promises` als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene `Promise` erfüllt sich, wenn alle `Promises` der Eingabe erfüllt werden (auch wenn ein leeres iterierbares Objekt übergeben wird), mit einem Array der Erfüllungswerte. Es lehnt ab, wenn eines der `Promises` der Eingabe abgelehnt wird, mit diesem ersten Ablehnungsgrund.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein iterierbares Objekt von `Promises` als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene `Promise` erfüllt sich, wenn alle `Promises` der Eingabe sich setzen (auch wenn ein leeres iterierbares Objekt übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes `Promise` beschreiben.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein iterierbares Objekt von `Promises` als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene `Promise` erfüllt sich, wenn eines der `Promises` der Eingabe erfüllt wird, mit diesem ersten Erfüllungswert. Es lehnt ab, wenn alle `Promises` der Eingabe abgelehnt werden (auch wenn ein leeres iterierbares Objekt übergeben wird), mit einem {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein iterierbares Objekt von `Promises` als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene `Promise` setzt sich mit dem endgültigen Zustand des ersten `Promise`, das sich setzt.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem angegebenen Grund abgelehnt wurde.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem angegebenen Wert aufgelöst ist. Wenn der Wert ein Thenable ist (d.h. eine `then`-Methode hat), wird das zurückgegebene `Promise` diesem Thenable "folgen" und dessen endgültigen Zustand übernehmen; andernfalls wird das zurückgegebene `Promise` mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Nimmt einen Rückruf jeder Art (gibt zurück oder wirft, synchron oder asynchron) und umschließt dessen Ergebnis in einem `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen enthält, um es entweder zu erfüllen oder abzulehnen, entsprechend den beiden Parametern, die an den Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Promise`-Instanzen ist der Anfangswert der {{jsxref("Promise/Promise", "Promise")}}-Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Fügt einen Ablehnungshandler-Callback dem `Promise` hinzu und gibt ein neues `Promise` zurück, das zum Rückgabewert des Callbacks aufgelöst wird, wenn es aufgerufen wurde, oder zu seinem ursprünglichen Erfüllungswert, wenn das `Promise` stattdessen erfüllt wurde.
- {{jsxref("Promise.prototype.finally()")}}
  - : Fügt dem `Promise` einen Handler hinzu und gibt ein neues `Promise` zurück, das aufgelöst wird, wenn das ursprüngliche `Promise` aufgelöst wird. Der Handler wird aufgerufen, wenn das `Promise` gesetzt ist, unabhängig davon, ob es erfüllt oder abgelehnt ist.
- {{jsxref("Promise.prototype.then()")}}
  - : Fügt Erfüllungs- und Ablehnungshandler dem `Promise` hinzu und gibt ein neues `Promise` zurück, das zum Rückgabewert des aufgerufenen Handlers aufgelöst wird oder zu seinem ursprünglich gesetzten Wert, wenn das `Promise` nicht behandelt wurde (d.h. wenn der relevante Handler `onFulfilled` oder `onRejected` keine Funktion ist).

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

### Beispiel mit verschiedenen Situationen

Dieses Beispiel zeigt verschiedene Techniken zur Nutzung der `Promise`-Fähigkeiten und verschiedene Situationen, die auftreten können. Um dies zu verstehen, scrollen Sie zuerst ans Ende des Codeblocks und untersuchen Sie die `Promise`-Kette. Bei der Bereitstellung eines initialen `Promise` kann eine Kette von `Promises` folgen. Die Kette besteht aus `.then()`-Aufrufen und hat typischerweise (aber nicht notwendigerweise) ein einzelnes `.catch()` am Ende, gefolgt von `.finally()`. In diesem Beispiel wird die `Promise`-Kette durch ein benutzerdefiniertes `new Promise()`-Konstrukt initiiert; aber in der Praxis beginnen `Promise`-Ketten häufiger mit einer API-Funktion (von jemand anderem geschrieben), die ein `Promise` zurückgibt.

Die Beispiel-Funktion `tetheredGetNumber()` zeigt, dass ein `Promise`-Generator während der Einrichtung eines asynchronen Aufrufs oder innerhalb des Rückrufs oder beides `reject()` verwenden wird. Die Funktion `promiseGetWord()` veranschaulicht, wie eine API-Funktion ein `Promise` erzeugen und in selbstenthüllender Weise zurückgeben könnte.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das ist erforderlich, weil eine `Promise`-Kette durch alle `.then()`-`Promises` geht, selbst nach einem Fehler, und ohne das `throw` würde der Fehler "behoben" erscheinen. Das ist umständlich, und aus diesem Grund ist es üblich, auf das `onRejected` in der gesamten `.then()`-Kette zu verzichten und nur ein einziges `onRejected` im finalen `catch()` zu haben.

Dieser Code kann unter NodeJS ausgeführt werden. Das Verständnis wird verbessert, indem die Fehler tatsächlich auftreten gesehen werden. Um mehr Fehler zu erzwingen, ändern Sie die `threshold`-Werte.

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

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die Methode `testPromise()` wird jedes Mal aufgerufen, wenn der {{HTMLElement("button")}} geklickt wird. Es erstellt ein `Promise`, das mit einem Zähler erfüllt wird, der zufällig alle 1-3 Sekunden, mit Hilfe von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), erhöht wird. Der `Promise()`-Konstruktor wird verwendet, um das `Promise` zu erstellen.

Die Erfüllung des `Promise` wird über einen Erfüllungs-Callback protokolliert, der mit {{jsxref("Promise/then", "p1.then()")}} gesetzt wird. Einige Logs zeigen, wie der synchrone Teil der Methode vom asynchronen Abschluss des `Promise` abgekoppelt ist.

Durch mehrfaches Klicken auf den Button in kurzer Zeit wird sogar sichtbar, wie die unterschiedlichen `Promises` nacheinander erfüllt werden.

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

Ein weiteres Beispiel mit `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zum Laden eines Bildes ist im MDN GitHub [js-examples](https://github.com/mdn/js-examples/tree/main/promises-test) Repository verfügbar. Sie können es auch [in Aktion sehen](https://mdn.github.io/js-examples/promises-test/). Jeder Schritt ist kommentiert und ermöglicht es Ihnen, die `Promise`- und XHR-Architektur genau zu verfolgen.

### Beobachtung des incumbent settings object

Ein Settings-Objekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen zur Verfügung stellt, wenn JavaScript-Code ausgeführt wird. Dies schließt das Realm und die Modulkarten ein, sowie HTML-spezifische Informationen wie den Ursprung. Das sogenannte incumbent settings object wird verfolgt, um sicherzustellen, dass der Browser weiß, welches verwendet werden soll für ein bestimmtes Stück Benutzercode.

Um dies besser zu verdeutlichen, können wir uns ansehen, wie das Realm ein Problem darstellen könnte. Ein **Realm** kann grob als das globale Objekt angesehen werden. Was einzigartig an Realms ist, dass sie alle notwendigen Informationen halten, um JavaScript-Code auszuführen. Dazu gehören Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jede Settings-Objekt hat seine eigene "Kopie" dieser und sie sind nicht geteilt. Das kann zu unerwartetem Verhalten im Zusammenhang mit `Promises` führen. Um dies zu umgehen, tracken wir etwas, das als **incumbent settings object** bezeichnet wird. Dies repräsentiert Informationen, die spezifisch für den Kontext des Benutzer-Codes sind, der für einen bestimmten Funktionsaufruf verantwortlich ist.

Um dies ein wenig weiter zu veranschaulichen, können wir uns ansehen, wie ein [`<iframe>`](/de/docs/Web/HTML/Element/iframe), eingebettet in einem Dokument, mit seinem Host kommuniziert. Da alle Web-APIs über das incumbent settings object informiert sind, wird Folgendes in allen Browsern funktionieren:

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

Dasselbe Konzept gilt für `Promises`. Wenn wir das obige Beispiel ein wenig ändern, erhalten wir dies:

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

Wenn wir dies ändern, sodass das `<iframe>` im Dokument Nachrichten übermittelt, können wir den Effekt des incumbent settings object beobachten:

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

Im obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das incumbent settings object verfolgt wird. Das liegt daran, dass wir ohne Verfolgung des incumbents möglicherweise das falsche Umfeld verwenden, um die Nachricht zu senden.

> [!NOTE]
> Derzeit ist das Tracking des incumbent realm in Firefox vollständig implementiert und hat teilweise Implementierungen in Chrome und Safari.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Promises verwenden](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [JavaScript Promises: eine Einführung](https://web.dev/articles/promises) auf web.dev (2013)
- [Callbacks, Promises und Coroutines: Asynchrone Programmierungsmuster in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Präsentation von Domenic Denicola (2011)
