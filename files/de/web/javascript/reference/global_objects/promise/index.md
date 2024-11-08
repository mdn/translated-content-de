---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{JSRef}}

Das **`Promise`**-Objekt repräsentiert den späteren Abschluss (oder das Scheitern) einer asynchronen Operation und deren Ergebniswert.

Um zu verstehen, wie `promises` funktionieren und wie Sie sie verwenden können, empfehlen wir Ihnen, zuerst [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Stellvertreter für einen Wert, der nicht notwendigerweise bekannt ist, wenn das Promise erstellt wird. Es ermöglicht Ihnen, Handler mit dem endgültigen Erfolg oder dem Fehlgrund einer asynchronen Aktion zu verknüpfen. Dies ermöglicht asynchronen Methoden das Zurückgeben von Werten wie bei synchronen Methoden: Anstatt sofort den endgültigen Wert zurückzugeben, gibt die asynchrone Methode ein _Promise_ zurück, das den Wert irgendwann in der Zukunft bereitstellt.

Ein `Promise` hat einen der folgenden Zustände:

- _pending_: Anfangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines wartenden Promises kann entweder mit einem Wert _erfüllt_ oder mit einem Grund (Fehler) _abgelehnt_ werden. Wenn eine dieser Optionen eintritt, werden die zugehörigen Handler, die durch die `then`-Methode eines Promises in die Warteschlange gestellt wurden, aufgerufen. Wenn das Promise bereits erfüllt oder abgelehnt ist, wenn ein entsprechender Handler angehängt wird, wird der Handler aufgerufen, sodass kein Wettlauf zwischen dem Abschluss einer asynchronen Operation und deren Anbindung besteht.

Ein Promise gilt als _abgeschlossen_, wenn es entweder erfüllt oder abgelehnt ist, aber nicht wartend.

![Flussdiagramm, das zeigt, wie der Promise-Zustand über then/catch-Handler zwischen pending, fulfilled und rejected wechselt. Ein wartendes Promise kann entweder erfüllt oder abgelehnt werden. Wenn es erfüllt ist, wird der Erfüllungshandler, oder erster Parameter der then()-Methode, ausgeführt und führt weitere asynchrone Aktionen durch. Wenn es abgelehnt wird, erhält der Fehlerhandler, entweder als zweiter Parameter der then()-Methode oder als einziger Parameter der catch()-Methode übergeben, die Ausführung.](promises.png)

Sie werden auch den Begriff _gelöst_ im Zusammenhang mit Promises hören — das bedeutet, dass das Promise abgeschlossen oder "fixiert" ist, um dem endgültigen Zustand eines anderen Promises zu entsprechen, und ein weiteres Lösen oder Ablehnen hat keine Wirkung mehr. Das Dokument [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) des ursprünglichen Promise-Vorschlags enthält mehr Details über Promise-Terminologie. Umgangssprachlich sind "gelöste" Promises oft gleichbedeutend mit "erfüllten" Promises, aber wie in "States and fates" illustriert, können gelöste Promises auch wartend oder abgelehnt sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist bereits _gelöst_, wenn es erstellt wird (weil `resolveOuter` synchron aufgerufen wird), aber es ist mit einem anderen Promise gelöst und wird daher erst erfüllt, wenn das innere Promise 1 Sekunde später erfüllt wird. In der Praxis geschieht das "Lösen" oft im Hintergrund und ist nicht beobachtbar, und nur die Erfüllung oder Ablehnung sind relevant.

> [!NOTE]
> Mehrere andere Sprachen haben Mechanismen für Lazy Evaluation und das Aufschieben einer Berechnung, die sie ebenfalls "promises" nennen, z.B. Scheme. Promises in JavaScript repräsentieren laufende Prozesse, die mit Callback-Funktionen verknüpft werden können. Wenn Sie eine Ausdruck lazy evaluieren möchten, überlegen Sie, eine Funktion ohne Argumente zu verwenden, z.B. `f = () => expression`, um den lazy ausgewerteten Ausdruck zu erstellen, und `f()`, um den Ausdruck sofort zu evaluieren.

`Promise` selbst hat kein erstklassiges Protokoll zur Aufhebung, aber Sie können möglicherweise die zugrunde liegende asynchrone Operation direkt abbrechen, typischerweise mit [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Promises

Die Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}}, und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um weitere Aktionen mit einem abgeschlossenen Promise zu verknüpfen. Die Methode `then()` nimmt bis zu zwei Argumente an; das erste Argument ist eine Callback-Funktion für den Erfüllungsfall des Promise, das zweite Argument ist eine Callback-Funktion für den Ablehnungsfall. Die Methoden `catch()` und `finally()` rufen intern `then()` auf und machen die Fehlerbehandlung weniger umständlich. Ein `catch()` ist tatsächlich nur ein `then()` ohne den Erfüllungshandler zu übergeben. Da diese Methoden Promises zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Wir verwenden die folgende Terminologie: _Initialpromise_ ist das Promise, an dem `then` aufgerufen wird; _neues Promise_ ist das Promise, das von `then` zurückgegeben wird. Die beiden an `then` übergebenen Callback-Funktionen werden als _Erfüllungshandler_ und _Ablehnungshandler_ bezeichnet.

Der abgeschlossene Zustand des Initialpromise bestimmt, welcher Handler ausgeführt wird.

- Wenn das Initialpromise erfüllt ist, wird der Erfüllungshandler mit dem Erfüllungswert aufgerufen.
- Wenn das Initialpromise abgelehnt wurde, wird der Ablehnungshandler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss des Handlers bestimmt den abgeschlossenen Zustand des neuen Promise.

- Wenn der Handler einen [thenable](#thenables) Wert zurückgibt, erledigt sich das neue Promise im selben Zustand wie der zurückgegebene Wert.
- Wenn der Handler einen nicht-thenable Wert zurückgibt, wird das neue Promise mit dem zurückgegebenen Wert erfüllt.
- Wenn der Handler einen Fehler wirft, wird das neue Promise mit dem geworfenen Fehler abgelehnt.
- Wenn dem Initialpromise kein entsprechender Handler angehängt ist, wird das neue Promise denselben Zustand wie das Initialpromise übernehmen — das heißt, ohne Ablehnungshandler bleibt ein abgelehntes Promise mit dem gleichen Grund abgelehnt.

Zum Beispiel wird im obigen Code, wenn `myPromise` abgelehnt wird, `handleRejectedA` aufgerufen, und wenn `handleRejectedA` normal abschließt (ohne zu werfen oder ein abgelehntes Promise zurückzugeben), wird das Promise, das von der ersten `then`-Aufruf zurückgegeben wird, erfüllt statt abgelehnt zu bleiben. Wenn ein Fehler sofort gehandhabt werden muss, aber wir den Fehlerzustand in der Kette beibehalten möchten, müssen wir einen Fehler irgendeines Typs im Ablehnungshandler werfen. Andererseits ist es in Abwesenheit eines unmittelbaren Bedarfs einfacher, die Fehlerbehandlung bis zum endgültigen `catch()`-Handler auszulassen.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Mit [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen könnte die Implementierung der Promise-Kette in etwa so aussehen:

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
> Für schnellere Ausführung sollten alle synchronen Aktionen vorzugsweise innerhalb eines Handlers durchgeführt werden, andernfalls würde es mehrere Ticks dauern, alle Handler in Reihe auszuführen.

JavaScript hält eine [Job-Warteschlange](/de/docs/Web/JavaScript/Event_loop) vor. Jedes Mal wählt JavaScript einen Job aus der Warteschlange aus und führt ihn vollständig aus. Die Jobs werden durch den Executor des `Promise()`-Konstruktors, die an `then` übergebenen Handler oder eine Plattform-API definiert, die ein Promise zurückgibt. Die Promises in einer Kette repräsentieren die Abhängigkeitsbeziehung zwischen diesen Jobs. Wenn ein Promise abgeschlossen wird, werden die entsprechenden damit verknüpften Handler am Ende der Job-Warteschlange hinzugefügt.

Ein Promise kann an mehr als einer Kette teilnehmen. Für den folgenden Code führt die Erfüllung von `promiseA` dazu, dass sowohl `handleFulfilled1` als auch `handleFulfilled2` zur Job-Warteschlange hinzugefügt werden. Da `handleFulfilled1` zuerst registriert wird, wird es zuerst aufgerufen.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits abgeschlossenen Promise zugewiesen werden. In diesem Fall wird die Aktion sofort ans Ende der Job-Warteschlange angehängt und wird durchgeführt, wenn alle bestehenden Jobs abgeschlossen sind. Daher wird eine Aktion für ein bereits "abgeschlossenes" Promise erst nach Abschluss des aktuellen synchronen Codes und nachdem mindestens ein Schleifen-Tick vergangen ist, ausgeführt. Dies garantiert, dass Promise-Aktionen asynchron sind.

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

Das JavaScript-Ökosystem hatte viele Promise-Implementierungen lange bevor es Teil der Sprache wurde. Trotz unterschiedlicher interner Darstellung implementieren alle Promise-ähnlichen Objekte mindestens das _Thenable_-Interface. Ein Thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode, die mit zwei Callback-Funktionen aufgerufen wird: eine für den Fall, dass das Promise erfüllt wird, eine für den Fall, dass es abgelehnt wird. Promises sind ebenfalls Thenables.

Um mit den bestehenden Promise-Implementierungen interoperieren zu können, erlaubt die Sprache die Verwendung von Thenables anstelle von Promises. Zum Beispiel wird [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur Promises auflösen, sondern auch Thenables zurückverfolgen.

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

Die `Promise`-Klasse bietet vier statische Methoden zur Erleichterung der asynchronen Aufgaben-[Konkurrenz](https://en.wikipedia.org/wiki/Concurrent_computing):

- {{jsxref("Promise.all()")}}
  - : Erfüllt sich, wenn **alle** Promises erfüllt sind; lehnt sich ab, wenn **irgend** eines der Promises ablehnt.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt sich, wenn **alle** Promises abgeschlossen sind.
- {{jsxref("Promise.any()")}}
  - : Erfüllt sich, wenn **irgendeines** der Promises erfüllt ist; lehnt sich ab, wenn **alle** Promises ablehnen.
- {{jsxref("Promise.race()")}}
  - : Schließt sich ab, wenn **irgendeines** der Promises abgeschlossen ist. Mit anderen Worten, erfüllt sich, wenn irgendeines der Promises erfüllt ist; lehnt sich ab, wenn irgendeines der Promises ablehnt.

Alle diese Methoden nehmen ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises (genauer gesagt Thenables) an und geben ein neues Promise zurück. Sie alle unterstützen Unterklassenbildung, was bedeutet, dass sie auf Unterklasssen von `Promise` aufgerufen werden können und das Ergebnis ein Promise des Unterklassentyps sein wird. Dazu muss der Konstruktor der Unterklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — eine einzelne `executor` Funktion akzeptierend, die mit den `resolve` und `reject` Rückrufen als Parameter aufgerufen werden kann. Die Unterklasse muss auch eine statische `resolve` Methode haben, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte in Promises aufzulösen.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "einzelsträngig")}} ist, sodass zu einem bestimmten Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl die Kontrolle zwischen verschiedenen Promises verschoben werden kann, was die Ausführung der Promises konkurrierend erscheinen lässt. [Parallele Ausführung](https://en.wikipedia.org/wiki/Parallel_computing) in JavaScript kann nur durch [Worker-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu umschließen, die noch keine Unterstützung für Promises bieten.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus Promise-Methoden zu konstruieren.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promise-Eingaben erfüllt sind (auch wenn ein leeres iterierbares Objekt übergeben wird), und zwar mit einem Array der Erfüllungswerte. Es lehnt sich ab, wenn eine der Promise-Eingaben ablehnt, und zwar mit diesem ersten Ablehnungsgrund.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einziges `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promise-Eingaben abgeschlossen sind (auch wenn ein leeres iterierbares Objekt übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes Promise beschreiben.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird erfüllt, wenn irgendeine der Promise-Eingaben erfüllt ist, mit diesem ersten Erfüllungswert. Es lehnt sich ab, wenn alle Eingabe-Promises ablehnen (auch wenn ein leeres iterierbares Objekt übergeben wird), mit einem {{jsxref("AggregateError")}}, der ein Array der Ablehnungsgründe enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erledigt sich mit dem endgültigen Zustand des ersten Promise, das sich erledigt.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem angegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem angegebenen Wert aufgelöst wird. Wenn der Wert ein Thenable ist (d.h. eine `then`-Methode hat), wird das zurückgegebene Promise diesem Thenable "folgen" und seinen endgültigen Zustand übernehmen; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Nimmt einen beliebigen Rückruf (gibt zurück oder wirft, synchron oder asynchron) und umschließt dessen Ergebnis in einem `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen zum Auflösen oder Ablehnen enthält, entsprechend den zwei an den Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergebenen Parametern.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Promise`-Instanzen ist der Anfangswert der {{jsxref("Promise/Promise", "Promise")}}-Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der Ausgangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Hängt einen Ablehnungshandler-Rückruf an das Promise an und gibt ein neues Promise zurück, das zum Rückgabewert des Rückrufs auflöst, wenn es aufgerufen wird, oder seinen ursprünglichen Erfüllungswert, wenn das Promise stattdessen erfüllt ist.
- {{jsxref("Promise.prototype.finally()")}}
  - : Hängt einen Handler an das Promise an und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst ist. Der Handler wird aufgerufen, wenn das Promise abgeschlossen ist, unabhängig davon, ob es erfüllt oder abgelehnt wurde.
- {{jsxref("Promise.prototype.then()")}}
  - : Hängt Erfüllungs- und Ablehnungshandler an das Promise an und gibt ein neues Promise zurück, das zum Rückgabewert des aufgerufenen Handlers auflöst oder zu seinem ursprünglichen Endwert, wenn das Promise nicht behandelt wurde (d.h., wenn der relevante Handler `onFulfilled` oder `onRejected` keine Funktion ist).

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

Dieses Beispiel zeigt unterschiedliche Techniken zur Nutzung der Promise-Fähigkeiten und verschiedene Situationen, die auftreten können. Um dieses Beispiel zu verstehen, scrollen Sie zuerst ans Ende des Codeblocks und betrachten Sie die Promise-Kette. Bei Bereitstellung eines initialen Promise kann eine Kette von Promises folgen. Die Kette setzt sich aus `.then()`-Aufrufen zusammen und hat typischerweise (aber nicht zwingend) ein einziges `.catch()` am Ende, gefolgt von `.finally()`. In diesem Beispiel wird die Promise-Kette durch eine benutzerdefinierte `new Promise()`-Konstruktion initiiert; in der Praxis beginnen Promise-Ketten jedoch häufiger mit einer API-Funktion (von jemand anderem geschrieben), die ein Promise zurückgibt.

Die Beispiel-Funktion `tetheredGetNumber()` zeigt, dass ein Promise-Generator `reject()` beim Einrichten eines asynchronen Aufrufs nutzt, entweder innerhalb des Rückrufs, oder beides. Die Funktion `promiseGetWord()` illustriert, wie eine API-Funktion möglicherweise ein Promise auf selbstständige Weise generiert und zurückgibt.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das ist erforderlich, weil eine Promise-Kette alle `.then()` Promises durchläuft, selbst nach einem Fehler, und ohne den `throw` würde der Fehler "behoben" scheinen. Das ist ein Problem, und aus diesem Grund ist es üblich, `onRejected` in der gesamten Kette von `.then()` Promises auszulassen und nur ein einzelnes `onRejected` im endgültigen `catch()` zu haben.

Dieser Code kann unter NodeJS ausgeführt werden. Das Verständnis wird verbessert, indem man die Fehler tatsächlich auftreten sieht. Um mehr Fehler zu erzwingen, ändern Sie die `threshold`-Werte.

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

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die Methode `testPromise()` wird jedes Mal aufgerufen, wenn das {{HTMLElement("button")}} geklickt wird. Es erstellt ein Promise, das mit Hilfe von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) erfüllt wird, bis zur Promis-Zählung (eine Zahl beginnend bei 1) alle 1-3 Sekunden, zufällig. Der `Promise()`-Konstruktor wird verwendet, um das Promise zu erstellen.

Die Erfüllung des Promise wird über eine Erfüllungsrückruf, der mit {{jsxref("Promise/then", "p1.then()")}} eingestellt wird, protokolliert. Einige Protokollmeldungen zeigen, wie der synchrone Teil der Methode vom asynchronen Abschluss des Promise entkoppelt ist.

Indem man den Button mehrmals innerhalb kurzer Zeit anklickt, wird man sogar sehen, wie die verschiedenen Promises eins nach dem anderen erfüllt werden.

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

Ein weiteres einfaches Beispiel, das `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwendet, um ein Bild zu laden, ist im MDN GitHub [js-examples](https://github.com/mdn/js-examples/tree/main/promises-test) Repository verfügbar. Sie können es auch [in Aktion sehen](https://mdn.github.io/js-examples/promises-test/). Jeder Schritt ist kommentiert und ermöglicht es Ihnen, die Promise- und XHR-Architektur genau zu verfolgen.

### Incumbent Settings Object Tracking

Ein Settings-Objekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen bereitstellt, wenn JavaScript-Code ausgeführt wird. Dazu gehören der Realm und die Modullandkarte sowie HTML-spezifische Informationen wie der Ursprung. Das Incumbent-Settings-Objekt wird verfolgt, um sicherzustellen, dass der Browser weiß, welches für ein bestimmtes Stück Benutzer-Code verwendet werden soll.

Um dies besser zu veranschaulichen, können wir einen genaueren Blick darauf werfen, wie der Realm ein Problem darstellen könnte. Ein **Realm** kann grob als das globale Objekt betrachtet werden. Was an Realms einzigartig ist, ist, dass sie alle notwendigen Informationen enthalten, um JavaScript-Code auszuführen. Dazu gehören Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Settings-Objekt hat seine eigene "Kopie" dieser, und sie werden nicht geteilt. Das kann unerwartete Verhalten in Bezug auf Promises verursachen. Um dieses Problem zu umgehen, verfolgen wir etwas, das als **incumbent settings object** bezeichnet wird. Dies steht für Informationen, die spezifisch für den Kontext des Benutzer-Codes sind, der für einen bestimmten Funktionsaufruf verantwortlich ist.

Um dies noch etwas weiter zu erläutern, können wir uns ansehen, wie ein [`<iframe>`](/de/docs/Web/HTML/Element/iframe), das in ein Dokument eingebettet ist, mit seinem Host kommuniziert. Da alle Web-APIs sich des Incumbent-Settings-Objekts bewusst sind, funktioniert das folgende in allen Browsern:

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

Dasselbe Konzept gilt für Promises. Wenn wir das obige Beispiel etwas ändern, erhalten wir dies:

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

Wenn wir dies so ändern, dass das `<iframe>` im Dokument auf Post-Nachrichten hört, können wir den Effekt des Incumbent-Settings-Objekts beobachten:

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

Im obigen Beispiel wird der innere Text des `<iframe>` nur dann aktualisiert, wenn das Incumbent-Settings-Objekt verfolgt wird. Dies liegt daran, dass wir ohne die Verfolgung des Incumbents möglicherweise die falsche Umgebung verwenden, um die Nachricht zu senden.

> [!NOTE]
> Derzeit ist die Nachverfolgung des Incumbent-Realms in Firefox vollständig implementiert und hat partielle Implementierungen in Chrome und Safari.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- Leitfaden [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [JavaScript-Promises: eine Einführung](https://web.dev/articles/promises) auf web.dev (2013)
- [Rückrufe, Promises und Coroutinen: Asynchrone Programmi Muster in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Präsentation von Domenic Denicola (2011)
