---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{JSRef}}

Das **`Promise`**-Objekt repräsentiert den zukünftigen Abschluss (oder das Scheitern) einer asynchronen Operation und deren Ergebniswert.

Um den Umgang mit Promises zu lernen und zu verstehen, wie Sie diese nutzen können, empfehlen wir Ihnen, zunächst [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Stellvertreter für einen Wert, der möglicherweise nicht bekannt ist, wenn das Promise erstellt wird. Es ermöglicht Ihnen, Handler mit dem möglichen Erfolg oder Fehlschlag einer asynchronen Aktion zu verknüpfen. Dadurch können asynchrone Methoden Werte ähnlich wie synchrone Methoden zurückgeben: Anstatt den endgültigen Wert sofort zurückzugeben, gibt die asynchrone Methode ein _Promise_ zurück, um den Wert zu einem späteren Zeitpunkt bereitzustellen.

Ein `Promise` befindet sich in einem dieser Zustände:

- _pending_: Anfangszustand, weder erfüllt noch abgelehnt.
- _fulfilled_: bedeutet, dass die Operation erfolgreich abgeschlossen wurde.
- _rejected_: bedeutet, dass die Operation fehlgeschlagen ist.

Der _endgültige Zustand_ eines schwebenden (pending) Promises kann entweder _erfüllt_ sein mit einem Wert oder _abgelehnt_ mit einem Grund (Fehler). Wenn eine dieser Optionen eintritt, werden die zugehörigen Handler aufgerufen, die durch die `then`-Methode eines Promises in die Warteschlange gestellt wurden. Wenn das Promise bereits erfüllt oder abgelehnt ist, wenn ein entsprechender Handler angehängt wird, wird der Handler aufgerufen, so dass es keinen Wettkampf zwischen dem Abschluss einer asynchronen Operation und dem Anhängen ihrer Handler gibt.

Ein Promise wird als _erledigt_ (settled) bezeichnet, wenn es entweder erfüllt oder abgelehnt ist, aber nicht mehr schwebend.

![Flussdiagramm, das zeigt, wie der Promise-Zustand über dann/catch-Handler zwischen schwebend, erfüllt und abgelehnt wechselt. Ein schwebendes Promise kann entweder erfüllt oder abgelehnt werden. Wenn es erfüllt ist, wird der "bei Erfüllung" Handler, oder das erste Parameter der then()-Methode, ausgeführt und führt weitere asynchrone Aktionen durch. Wenn abgelehnt, wird der Fehlerhandler, der entweder als das zweite Parameter der then()-Methode oder als einziges Parameter der catch()-Methode übergeben wird, ausgeführt.](promises.png)

Sie werden auch den Begriff _gelöst_ (resolved) in Verbindung mit Promises hören — das bedeutet, dass das Promise erledigt oder "eingeschlossen" ist, um den endgültigen Zustand eines anderen Promises anzunehmen, und weiteres Auflösen oder Ablehnen hat keine Wirkung. Das Dokument [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) aus dem ursprünglichen Promise-Vorschlag enthält weitere Details zur Terminologie der Promises. Im Sprachgebrauch sind "gelöste" Promises oft gleichbedeutend mit "erfüllten" Promises, aber wie in "States and fates" veranschaulicht, können gelöste Promises auch schwebend oder abgelehnt sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist bereits _gelöst_ zu dem Zeitpunkt, zu dem es erstellt wird (da `resolveOuter` synchron aufgerufen wird), aber es ist mit einem anderen Promise gelöst und wird daher erst 1 Sekunde später _erfüllt_, wenn das innere Promise erfüllt wird. In der Praxis wird die "Lösung" oft im Hintergrund durchgeführt und ist nicht sichtbar, und nur ihre Erfüllung oder Ablehnung ist es.

> [!NOTE]
> Mehrere andere Sprachen haben Mechanismen für verzögerte Auswertung und Verschieben einer Berechnung, die sie ebenfalls "Promises" nennen, z.B. Scheme. Promises in JavaScript repräsentieren bereits stattfindende Prozesse, die mit Callback-Funktionen verkettet werden können. Wenn Sie nach einer Möglichkeit suchen, einen Ausdruck Lazy zu evaluieren, ziehen Sie in Betracht, eine Funktion ohne Argumente zu verwenden, z.B. `f = () => Ausdruck` zur Erstellung des Lazy-evaluierten Ausdrucks, und `f()` zur sofortigen Auswertung des Ausdrucks.

`Promise` selbst hat kein erstklassiges Protokoll für Stornierung, aber Sie können möglicherweise direkt die zugrundeliegende asynchrone Operation stornieren, typischerweise unter Verwendung von [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Promises

Die Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}}, und {{jsxref("Promise/finally", "finally()")}} werden verwendet, um mit einem Promise, das sich erledigt, weitere Aktionen zu verknüpfen. Die `then()`-Methode nimmt bis zu zwei Argumente an; das erste Argument ist eine Callback-Funktion für den Fall, dass das Promise erfüllt wird, und das zweite Argument ist eine Callback-Funktion für den Fall, dass das Promise abgelehnt wird. Die `catch()`- und `finally()`-Methoden rufen intern `then()` auf und machen die Fehlerbehandlung weniger umständlich. Ein `catch()` ist beispielsweise wirklich nur ein `then()` ohne Übergabe des Erfüllungshandlers. Da diese Methoden Promises zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Wir werden die folgende Terminologie verwenden: _initiales Promise_ ist das Promise, auf dem `then` aufgerufen wird; _neues Promise_ ist das von `then` zurückgegebene Promise. Die zwei an `then` übergebenen Callbacks werden jeweils _Erfüllungshandler_ und _Ablehnungshandler_ genannt.

Der erledigte Zustand des initialen Promises bestimmt, welcher Handler ausgeführt wird.

- Wenn das initiale Promise erfüllt ist, wird der Erfüllungshandler mit dem Erfüllungswert aufgerufen.
- Wenn das initiale Promise abgelehnt wird, wird der Ablehnungshandler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss der Handler-Funktion bestimmt den erledigten Zustand des neuen Promises.

- Wenn die Handler-Funktion einen [thenable](#thenables) Wert zurückgibt, gilt der neue Promise im gleichen Zustand wie der zurückgegebene Promise.
- Wenn die Handler-Funktion einen nicht-thenable Wert zurückgibt, wird der neue Promise mit dem zurückgegebenen Wert erfüllt.
- Wenn die Handler-Funktion einen Fehler wirft, wird der neue Promise mit dem geworfenen Fehler abgelehnt.
- Wenn das initiale Promise keinen entsprechenden Handler angehängt hat, wird der neue Promise zum gleichen Zustand erledigt wie das initiale Promise — das heißt, ohne einen Ablehnungshandler bleibt ein abgelehnter Promise mit dem gleichen Grund abgelehnt.

Zum Beispiel, im obigen Code, wenn `myPromise` abgelehnt wird, wird `handleRejectedA` aufgerufen, und wenn `handleRejectedA` normal abschließt (ohne zu werfen oder ein abgelehntes Promise zurückzugeben), wird das von `then` zurückgegebene Promise stattdessen Erfüllt, anstatt abgelehnt zu bleiben. Daher, wenn ein Fehler sofort behandelt werden muss, aber wir den Fehlerzustand in der Kette beibehalten wollen, müssen wir eine Art von Fehler im Ablehnungshandler werfen. Andererseits, in Abwesenheit eines sofortigen Bedarfs, ist es einfacher, die Fehlerbehandlung bis zum endgültigen `catch()`-Handler aufzuschieben.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Wenn [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen verwendet werden, könnte die Implementierung der Promise-Kette so aussehen:

```js
myPromise
  .then((value) => `${value} und bar`)
  .then((value) => `${value} und noch mal`)
  .then((value) => `${value} und wieder`)
  .then((value) => `${value} und wieder`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });
```

> [!NOTE]
> Für eine schnellere Ausführung sollten alle synchronen Aktionen vorzugsweise in einem Handler durchgeführt werden, ansonsten würde es mehrere Ticks benötigen, um alle Handler in Sequenz auszuführen.

JavaScript verwaltet eine [Job-Warteschlange](/de/docs/Web/JavaScript/Event_loop). Jedes Mal wählt JavaScript einen Job aus der Warteschlange aus und führt ihn vollständig aus. Die Jobs werden durch den Ausführenden des `Promise()` Konstruktors, die an `then` übergebenen Handler, oder durch jede Plattform-API, die ein Promise zurückgibt, definiert. Die Promises in einer Kette repräsentieren die Abhängigkeitsbeziehung zwischen diesen Jobs. Wenn ein Promise abgeschlossen ist, werden die jeweiligen mit ihm verknüpften Handler am Ende der Job-Warteschlange hinzugefügt.

Ein Promise kann in mehr als einer Kette beteiligt sein. Für den folgenden Code, das Erfüllen von `promiseA` wird sowohl `handleFulfilled1` als auch `handleFulfilled2` in die Job-Warteschlange hinzufügen. Da `handleFulfilled1` zuerst registriert wird, wird es zuerst aufgerufen.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Eine Aktion kann einem bereits erledigten Promise zugewiesen werden. In diesem Fall wird die Aktion sofort am Ende der Job-Warteschlange hinzugefügt und wird ausgeführt, wenn alle bestehenden Jobs abgeschlossen sind. Daher wird eine Aktion für ein bereits "erledigtes" Promise nur erfolgen, nachdem der aktuelle synchrone Code abgeschlossen ist und mindestens ein Loop-Tick vergangen ist. Dies garantiert, dass Promise-Aktionen asynchron sind.

```js
const promiseA = new Promise((resolve, reject) => {
  resolve(777);
});
// Zu diesem Zeitpunkt ist "promiseA" bereits erledigt.
promiseA.then((val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");

// produziert die Ausgabe in dieser Reihenfolge:
// immediate logging
// asynchronous logging has val: 777
```

### Thenables

Das JavaScript-Ökosystem hat lange vor der Integration in die Sprache mehrere Promise-Implementierungen erstellt. Trotz unterschiedlicher interner Darstellungen implementieren alle Promise-ähnlichen Objekte mindestens das _Thenable_ Interface. Ein thenable implementiert die [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) Methode, die mit zwei Callbacks aufgerufen wird: eines für Erfüllung und eines für die Ablehnung. Promises sind ebenfalls thenables.

Um die Interoperabilität mit vorhandenen Promise-Implementierungen zu gewährleisten, erlaubt es die Sprache, thenables anstelle von Promises zu verwenden. Zum Beispiel wird [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur Promises auflösen, sondern auch thenables nachverfolgen.

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
  - : Erfüllt, wenn **alle** Promises erfüllt sind; lehnt ab, wenn **mindestens eines** der Promises abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Erfüllt, wenn **alle** Promises erledigt sind.
- {{jsxref("Promise.any()")}}
  - : Erfüllt, wenn **eines** der Promises erfüllt ist; lehnt ab, wenn **alle** der Promises abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Erledigt, wenn **eines** der Promises erledigt ist. Mit anderen Worten, erfüllt, wenn eines der Promises erfüllt ist; lehnt ab, wenn eines der Promises abgelehnt wird.

Alle diese Methoden nehmen ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises (genauer gesagt, thenables) und geben ein neues Promise zurück. Sie unterstützen alle Subklassierung, was bedeutet, dass sie auf Unterklassen von `Promise` aufgerufen werden können, und das Ergebnis wird ein Promise des Subklasstyps sein. Dazu muss der Konstruktor der Unterklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktor implementieren — das Akzeptieren einer einzelnen `executor` Funktion, die mit den `resolve` und `reject` Rückrufen als Parameter aufgerufen werden kann. Die Unterklasse muss auch eine `resolve` statische Methode haben, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte in Promises zu lösen.

Beachten Sie, dass JavaScript von Natur aus [einzelsträngig](/de/docs/Glossary/Thread) ist, sodass zu einem gegebenen Zeitpunkt nur eine Aufgabe ausgeführt wird, obwohl die Kontrolle zwischen verschiedenen Promises wechseln kann, wodurch die Ausführung der Promises gleichzeitig erscheint. [Parallelausführung](https://en.wikipedia.org/wiki/Parallel_computing) in JavaScript kann nur durch [Worker-Threads](/de/docs/Web/API/Web_Workers_API) erreicht werden.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu umschließen, die Promises nicht bereits unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus Promise-Methoden zu konstruieren.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn alle Promises der Eingabe (einschließlich wenn ein leeres iterierbares Objekt übergeben wird) erfüllt sind, mit einem Array der Erfüllungswerte. Sie lehnt ab, wenn eines der Eingabe-Promises (inkl.) abgelehnt wird, mit diesem ersten Ablehnungsgrund.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn alle Promises der Eingabe abgeschlossen sind (einschließlich, wenn ein leeres iterierbares Objekt übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes Promises beschreiben.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise erfüllt sich, wenn eines der Eingabe-Promises erfüllt ist, mit diesem ersten Erfüllungswert. Sie lehnt ab, wenn alle Eingabe-Promises (inkl.) abgelehnt werden, mit einem {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes `Promise` zurück. Dieses zurückgegebene Promise wird mit dem endgültigen Zustand des ersten erledigten Promises abgeschlossen.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem angegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem angegebenen Wert erfüllt ist. Wenn der Wert ein thenable ist (d.h. eine `then` Methode hat), wird das zurückgegebene Promise diesem thenable "folgen" und seinen endgültigen Zustand annehmen; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}} {{experimental_inline}}
  - : Nimmt einen Callback beliebiger Art (gibt zurück oder wirft, synchron oder asynchron) und umschließt das Ergebnis in einem `Promise`.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt und zwei Funktionen zum Erfüllen oder Ablehnen desselben enthält, entsprechend den beiden Parametern, die an den Ausführenden des {{jsxref("Promise/Promise", "Promise()")}} Konstruktors übergeben wurden.

## Instanzen-Eigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Promise`-Instanzen ist der Initialwert der {{jsxref("Promise/Promise", "Promise")}} Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist die Zeichenkette `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzen-Methoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Hängt einen Ablehnungshandler-Callback an das Promise und gibt ein neues Promise zurück, das auf den Rückgabewert des Callbacks aufgelöst wird, wenn es aufgerufen wird, oder auf den ursprünglichen Erfüllungswert, wenn das Promise stattdessen erfüllt wird.
- {{jsxref("Promise.prototype.finally()")}}
  - : Hängt einen Handler an das Promise und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst wird. Der Handler wird aufgerufen, wenn das Promise erledigt ist, unabhängig davon, ob es erfüllt oder abgelehnt wurde.
- {{jsxref("Promise.prototype.then()")}}
  - : Hängt Erfüllungs- und Ablehnungshandler an das Promise und gibt ein neues Promise zurück, das auf den Rückgabewert des aufgerufenen Handlers aufgelöst wird oder auf seinen ursprünglichen erledigten Wert, wenn das Promise nicht verarbeitet wurde (d.h. wenn der relevante Handler `onFulfilled` oder `onRejected` keine Funktion ist).

## Beispiele

### Grundlegendes Beispiel

```js
const myFirstPromise = new Promise((resolve, reject) => {
  // Wir rufen resolve(...) auf, wenn das, was wir asynchron taten, erfolgreich war, und reject(...) wenn es fehlschlug.
  // In diesem Beispiel verwenden wir setTimeout(...), um asynchronen Code zu simulieren.
  // In Wirklichkeit werden Sie wahrscheinlich etwas wie XHR oder eine HTML-API verwenden.
  setTimeout(() => {
    resolve("Erfolg!"); // Yay! Alles ist gut gelaufen!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage ist das, was wir in der oben gezeigten Funktion resolve(...) übergeben haben.
  // Es muss kein String sein, aber wenn es sich nur um eine Erfolgsnachricht handelt, wird es wahrscheinlich einer sein.
  console.log(`Yay! ${successMessage}`);
});
```

### Beispiel mit verschiedenen Situationen

Dieses Beispiel zeigt verschiedene Techniken zur Nutzung der Promise-Fähigkeiten und verschiedene Situationen, die auftreten können. Um dies zu verstehen, beginnen Sie damit, zum Ende des Codeblocks zu scrollen und die Promise-Kette zu untersuchen. Bei Bereitstellung eines anfänglichen Promises kann eine Kette von Promises folgen. Die Kette besteht aus `.then()` Aufrufen und hat typischerweise (aber nicht zwingend notwendig) ein einzelnes `.catch()` am Ende, optional gefolgt von `.finally()`. In diesem Beispiel wird die Promise-Kette von einer benutzerdefinierten `new Promise()`-Konstruktion gestartet; aber in der Praxis beginnen Promise-Ketten häufiger mit einer API-Funktion (geschrieben von jemand anderem), die ein Promise zurückgibt.

Die Beispiel-Funktion `tetheredGetNumber()` zeigt, dass ein Promise-Generator `reject()` während des Einrichtens eines asynchronen Anrufs oder innerhalb des Callbacks oder beides verwenden wird. Die Funktion `promiseGetWord()` veranschaulicht, wie eine API-Funktion möglicherweise ein Promise erzeugt und auf eine selbstständige Weise zurückgibt.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das ist erzwungen, weil eine Promise-Kette durch alle `.then()` Promises geht, selbst nach einem Fehler, und ohne `throw` würde der Fehler als "behoben" erscheinen. Dies ist umständlich und aus diesem Grund ist es üblich, `onRejected` in der gesamten Kette von `.then()`-Promises auszulassen und nur ein einziges `onRejected` im endgültigen `catch()` zu haben.

Dieser Code kann unter NodeJS ausgeführt werden. Das Verständnis wird durch das tatsächliche Auftreten der Fehler verbessert. Um mehr Fehler zu erzwingen, ändern Sie die `threshold`-Werte.

```js
// Um mit Fehlern zu experimentieren, führen "threshold"-Werte Fehler zufällig aus
const THRESHOLD_A = 8; // kann Null 0 verwenden, um Fehler zu garantieren

function tetheredGetNumber(resolve, reject) {
  setTimeout(() => {
    const randomInt = Date.now();
    const value = randomInt % 10;
    if (value < THRESHOLD_A) {
      resolve(value);
    } else {
      reject(`Zu groß: ${value}`);
    }
  }, 500);
}

function determineParity(value) {
  const isOdd = value % 2 === 1;
  return { value, isOdd };
}

function troubleWithGetNumber(reason) {
  const err = new Error("Problem beim Abrufen der Nummer", { cause: reason });
  console.error(err);
  throw err;
}

function promiseGetWord(parityInfo) {
  return new Promise((resolve, reject) => {
    const { value, isOdd } = parityInfo;
    if (value >= THRESHOLD_A - 1) {
      reject(`Immer noch zu groß: ${value}`);
    } else {
      parityInfo.wordEvenOdd = isOdd ? "ungerade" : "gerade";
      resolve(parityInfo);
    }
  });
}

new Promise(tetheredGetNumber)
  .then(determineParity, troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log(`Erhalten: ${info.value}, ${info.wordEvenOdd}`);
    return info;
  })
  .catch((reason) => {
    if (reason.cause) {
      console.error("Hatte bereits den Fehler behandelt");
    } else {
      console.error(`Problem mit promiseGetWord(): ${reason}`);
    }
  })
  .finally((info) => console.log("Alles erledigt"));
```

### Fortgeschrittenes Beispiel

Dieses kleine Beispiel zeigt den Mechanismus eines `Promise`. Die Methode `testPromise()` wird bei jedem Klick auf das {{HTMLElement("button")}} aufgerufen. Sie erstellt ein Promise, das mit dem Zählwert des Versprechens (eine Nummer, die bei 1 beginnt) alle 1-3 Sekunden zufällig erfüllt wird, indem {{domxref("setTimeout()")}} verwendet wird. Der `Promise()`-Konstruktor wird verwendet, um das Promise zu erstellen.

Die Erfüllung des Versprechens wird protokolliert, über einen Erfüllungs-Callback, der mit {{jsxref("Promise/then", "p1.then()")}} gesetzt wird. Einige Protokolle zeigen, wie der synchrone Teil der Methode vom asynchronen Abschluss des Promise getrennt wird.

Durch mehrmaliges Klicken auf die Schaltfläche in kurzer Zeit sehen Sie sogar, dass die verschiedenen Promises nacheinander erfüllt werden.

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
  // Beginn
  log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Gestartet<br>`);
  // Wir erstellen ein neues Promise: wir versprechen einen numerischen Zählwert dieses Promise,
  // beginnend bei 1 (nachdem 3s vergangen sind)
  const p1 = new Promise((resolve, reject) => {
    // Die Executor-Funktion wird mit der Möglichkeit aufgerufen,
    // das Promise zu erfüllen oder abzulehnen
    log.insertAdjacentHTML(
      "beforeend",
      `${thisPromiseCount}) Promise-Konstruktor<br>`,
    );
    // Dies ist nur ein Beispiel, um Asynchronität zu erzeugen
    setTimeout(
      () => {
        // Wir erfüllen das Promise
        resolve(thisPromiseCount);
      },
      Math.random() * 2000 + 1000,
    );
  });

  // Wir definieren, was zu tun ist, wenn das Promise erfüllt wird, mit dem then()-Aufruf,
  // und was zu tun ist, wenn das Promise mit dem catch()-Aufruf abgelehnt wird
  p1.then((val) => {
    // Protokolliere den Erfüllungswert
    log.insertAdjacentHTML("beforeend", `${val}) Promise erfüllt<br>`);
  }).catch((reason) => {
    // Protokolliere den Ablehnungsgrund
    console.log(`Behandle abgelehntes Promise (${reason}) hier.`);
  });
  // Ende
  log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Promise erstellt<br>`);
}

const btn = document.getElementById("make-promise");
btn.addEventListener("click", testPromise);
```

#### Ergebnis

{{EmbedLiveSample("Advanced_Example", "500", "200")}}

### Laden eines Bildes mit XHR

Ein weiteres einfaches Beispiel, das `Promise` und {{domxref("XMLHttpRequest")}} verwendet, um ein Bild zu laden, ist im MDN GitHub [js-examples](https://github.com/mdn/js-examples/tree/main/promises-test) Repository verfügbar. Sie können es auch [in Aktion sehen](https://mdn.github.io/js-examples/promises-test/). Jeder Schritt wird kommentiert und ermöglicht es Ihnen, die Architektur von Promise und XHR genau zu verfolgen.

### Verfolgung des bestehenden Einstellungsobjekts

Ein Einstellungsobjekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die zusätzliche Informationen bereitstellt, wenn JavaScript-Code läuft. Dies umfasst den Bereich und die Modulkarte sowie HTML-spezifische Informationen wie den Ursprung. Das bestehende Einstellungsobjekt wird nachverfolgt, um sicherzustellen, dass der Browser weiß, welches er für ein bestimmtes Stück Benutzer-Code verwenden soll.

Um sich das besser vorstellen zu können, können wir uns genauer ansehen, wie der Bereich ein Problem darstellen könnte. Ein **Bereich** kann ungefähr als globales Objekt betrachtet werden. Was einzigartig an Bereichen ist, ist, dass sie alle notwendigen Informationen enthalten, um JavaScript-Code auszuführen. Dies umfasst Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Einstellungsobjekt hat seine eigene "Kopie" davon, und sie sind nicht geteilt. Das kann einige unerwartete Verhaltensweisen im Zusammenhang mit Promises verursachen. Um dies zu umgehen, verfolgen wir etwas, das als **bestehendes Einstellungsobjekt** bezeichnet wird. Dies repräsentiert Informationen, die spezifisch für den Kontext des Benutzer-Codes sind, der für einen bestimmten Funktionsaufruf verantwortlich ist.

Um dies etwas weiter zu verdeutlichen, können wir uns ansehen, wie ein [`<iframe>`](/de/docs/Web/HTML/Element/iframe), das in ein Dokument eingebettet ist, mit seinem Host kommuniziert. Da alle Web-APIs das bestehende Einstellungsobjekt kennen, funktioniert das Folgende in allen Browsern:

```html
<!doctype html> <iframe></iframe>
<!-- wir haben hier einen Bereich -->
<script>
  // wir haben hier ebenfalls einen Bereich
  const bound = frames[0].postMessage.bind(frames[0], "some data", "*");
  // bound ist eine eingebaute Funktion — es gibt keinen Benutzer
  // -Code im Stapel, welche Bereich verwenden wir?
  setTimeout(bound);
  // das funktioniert immer noch, weil wir den jüngsten
  // Bereich (das bestehende) im Stapel verwenden
</script>
```

Dasselbe Konzept gilt für Promises. Wenn wir das obige Beispiel ein wenig ändern, erhalten wir dies:

```html
<!doctype html> <iframe></iframe>
<!-- wir haben hier einen Bereich -->
<script>
  // wir haben hier ebenfalls einen Bereich
  const bound = frames[0].postMessage.bind(frames[0], "some data", "*");
  // bound ist eine eingebaute Funktion — es gibt keinen Benutzer
  // -Code im Stapel — welchen Bereich verwenden wir?
  Promise.resolve(undefined).then(bound);
  // das funktioniert immer noch, weil wir den jüngsten
  // Bereich (das bestehende) im Stapel verwenden
</script>
```

Wenn wir dies so ändern, dass das `<iframe>` im Dokument auf Post-Nachrichten hört, können wir die Wirkung des bestehenden Einstellungsobjekts beobachten:

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
      document.querySelector("#text").textContent = "hallo";
      // dieser Code läuft nur in Browsern, die das bestehende Einstellungsobjekt verfolgen
      console.log(event);
    },
    false,
  );
</script>
```

Im obigen Beispiel wird der innere Text des `<iframe>` nur aktualisiert, wenn das bestehende Einstellungsobjekt verfolgt wird. Das liegt daran, dass ohne die Verfolgung des bestehenden Objekts wir möglicherweise die falsche Umgebung verwenden, um die Nachricht zu senden.

> [!NOTE]
> Derzeit ist die Verfolgung des aktuellen Bereichs in Firefox vollständig implementiert und hat teilweise Implementierungen in Chrome und Safari.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) - Anleitung
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [JavaScript Promises: eine Einführung](https://web.dev/articles/promises) auf web.dev (2013)
- [Callbacks, Promises, and Coroutines: Asynchronous Programming Patterns in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) Präsentation von Domenic Denicola (2011)
