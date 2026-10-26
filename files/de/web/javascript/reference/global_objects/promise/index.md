---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Das **`Promise`**-Objekt repräsentiert den späteren Abschluss (oder das Fehlschlagen) einer asynchronen Operation und den daraus resultierenden Wert.

Um zu erfahren, wie Promises funktionieren und wie Sie sie verwenden können, empfehlen wir Ihnen, zuerst den Leitfaden [Promises verwenden](/de/docs/Web/JavaScript/Guide/Using_promises) zu lesen.

## Beschreibung

Ein `Promise` ist ein Stellvertreter für einen Wert, der zum Zeitpunkt der Erstellung des Promise noch nicht unbedingt bekannt ist. Sie können damit Handler zuordnen, die beim späteren Erfolg oder Fehlschlagen einer asynchronen Aktion aufgerufen werden. Dadurch können asynchrone Methoden ähnlich wie synchrone Methoden Werte zurückgeben: Statt sofort den endgültigen Wert zurückzugeben, gibt die asynchrone Methode ein _Promise_ zurück, das den Wert zu einem späteren Zeitpunkt bereitstellt.

Ein `Promise` befindet sich in einem dieser Zustände:

- _pending_: Ausgangszustand; weder erfüllt noch abgelehnt.
- _fulfilled_: Die Operation wurde erfolgreich abgeschlossen.
- _rejected_: Die Operation ist fehlgeschlagen.

Der _spätere Zustand_ eines ausstehenden Promise kann entweder _fulfilled_ mit einem Wert oder _rejected_ mit einem Grund (Fehler) sein.
Sobald einer dieser Fälle eintritt, werden die Handler aufgerufen, die über die `then`-Methode des Promise in die Warteschlange gestellt wurden. Wenn das Promise bereits erfüllt oder abgelehnt ist, wenn ein entsprechender Handler angehängt wird, wird der Handler ebenfalls aufgerufen. Es gibt also keine Race Condition zwischen dem Abschluss einer asynchronen Operation und dem Anhängen ihrer Handler.

Ein Promise gilt als _settled_, wenn es entweder erfüllt oder abgelehnt, aber nicht mehr ausstehend ist.

![Flussdiagramm der Zustandsübergänge eines Promise zwischen pending, fulfilled und rejected über then-/catch-Handler. Ein ausstehendes Promise kann entweder erfüllt oder abgelehnt werden. Bei Erfüllung wird der „on fulfillment“-Handler – der erste Parameter der then()-Methode – ausgeführt und führt weitere asynchrone Aktionen aus. Bei Ablehnung wird der Fehler-Handler ausgeführt, der entweder als zweiter Parameter der then()-Methode oder als einziger Parameter der catch()-Methode übergeben wurde.](promises.png)

Im Zusammenhang mit Promises begegnet Ihnen auch der Begriff _resolved_. Er bedeutet, dass das Promise entweder bereits abgeschlossen oder auf den späteren Zustand eines anderen Promise „festgelegt“ ist. Weitere Versuche, es zu erfüllen oder abzulehnen, haben dann keine Wirkung. Das Dokument [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) aus dem ursprünglichen Promise-Vorschlag erläutert die Terminologie ausführlicher. Umgangssprachlich wird „resolved“ häufig mit „fulfilled“ gleichgesetzt. Wie „States and fates“ zeigt, können aufgelöste Promises jedoch auch ausstehend oder abgelehnt sein. Zum Beispiel:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Dieses Promise ist bereits bei seiner Erstellung _resolved_ (weil `resolveOuter` synchron aufgerufen wird). Es wird jedoch mit einem anderen Promise aufgelöst und ist daher erst eine Sekunde später _fulfilled_, wenn das innere Promise erfüllt wird. In der Praxis geschieht das „Auflösen“ häufig im Hintergrund und ist nicht beobachtbar; beobachtbar sind nur die Erfüllung oder Ablehnung.

> [!NOTE]
> Einige andere Sprachen verfügen über Mechanismen zur verzögerten Auswertung und zum Aufschieben einer Berechnung, die ebenfalls als „Promises“ bezeichnet werden, beispielsweise Scheme. Promises in JavaScript repräsentieren bereits laufende Prozesse, die sich mit Callback-Funktionen verketten lassen. Wenn Sie einen Ausdruck verzögert auswerten möchten, können Sie eine Funktion ohne Argumente verwenden, beispielsweise `f = () => expression`, um den verzögert auszuwertenden Ausdruck zu erstellen, und `f()`, um ihn unmittelbar auszuwerten.

`Promise` selbst verfügt über kein eigenes Protokoll zum Abbrechen. Möglicherweise können Sie jedoch die zugrunde liegende asynchrone Operation direkt abbrechen, üblicherweise mit einem [`AbortController`](/de/docs/Web/API/AbortController).

### Verkettete Promises

Mit den Promise-Methoden {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}} können Sie weitere Aktionen mit einem Promise verknüpfen, dessen Zustand abgeschlossen wird. Die `then()`-Methode akzeptiert bis zu zwei Argumente: Das erste ist eine Callback-Funktion für den Fall, dass das Promise erfüllt wird, das zweite eine Callback-Funktion für den Fall, dass es abgelehnt wird. Die Methoden `catch()` und `finally()` rufen intern `then()` auf und vereinfachen die Fehlerbehandlung. Ein `catch()` ist beispielsweise im Grunde ein `then()`, dem kein Erfüllungs-Handler übergeben wird. Da diese Methoden Promises zurückgeben, können sie verkettet werden. Zum Beispiel:

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

Im Folgenden verwenden wir diese Begriffe: Das _ursprüngliche Promise_ ist das Promise, auf dem `then` aufgerufen wird; das _neue Promise_ ist das von `then` zurückgegebene Promise. Die beiden an `then` übergebenen Callbacks heißen _Erfüllungs-Handler_ beziehungsweise _Ablehnungs-Handler_.

Der abgeschlossene Zustand des ursprünglichen Promise bestimmt, welcher Handler ausgeführt wird.

- Wenn das ursprüngliche Promise erfüllt wird, wird der Erfüllungs-Handler mit dem Erfüllungswert aufgerufen.
- Wenn das ursprüngliche Promise abgelehnt wird, wird der Ablehnungs-Handler mit dem Ablehnungsgrund aufgerufen.

Der Abschluss des Handlers bestimmt den abgeschlossenen Zustand des neuen Promise.

- Wenn der Handler einen [Thenable](#thenables)-Wert zurückgibt, nimmt das neue Promise denselben Zustand wie der zurückgegebene Wert an.
- Wenn der Handler einen Wert zurückgibt, der kein Thenable ist, wird das neue Promise mit diesem Wert erfüllt.
- Wenn der Handler einen Fehler auslöst, wird das neue Promise mit diesem Fehler abgelehnt.
- Wenn für den Zustand des ursprünglichen Promise kein entsprechender Handler angehängt ist, nimmt das neue Promise denselben Zustand wie das ursprüngliche an. Ohne Ablehnungs-Handler bleibt ein abgelehntes Promise also mit demselben Grund abgelehnt.

Wenn im obigen Code beispielsweise `myPromise` abgelehnt wird, wird `handleRejectedA` aufgerufen. Falls `handleRejectedA` normal abgeschlossen wird (also weder einen Fehler auslöst noch ein abgelehntes Promise zurückgibt), wird das vom ersten `then` zurückgegebene Promise erfüllt, statt abgelehnt zu bleiben. Wenn ein Fehler sofort behandelt werden muss, der Fehlerzustand aber in der Kette erhalten bleiben soll, müssen wir deshalb im Ablehnungs-Handler einen Fehler auslösen. Besteht kein unmittelbarer Bedarf zur Fehlerbehandlung, können wir sie dagegen bis zum abschließenden `catch()`-Handler weglassen.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Mit [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für die Callback-Funktionen könnte die Implementierung der Promise-Kette etwa so aussehen:

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
> Für eine schnellere Ausführung sollten alle synchronen Aktionen möglichst innerhalb eines einzigen Handlers erfolgen. Andernfalls sind mehrere Durchläufe der Ereignisschleife nötig, um alle Handler nacheinander auszuführen.

JavaScript verwaltet eine [Job-Warteschlange](/de/docs/Web/JavaScript/Reference/Execution_model). JavaScript entnimmt jeweils einen Job aus der Warteschlange und führt ihn vollständig aus. Die Jobs werden durch die Executor-Funktion des `Promise()`-Konstruktors, die an `then` übergebenen Handler oder eine Plattform-API definiert, die ein Promise zurückgibt. Die Promises in einer Kette repräsentieren die Abhängigkeiten zwischen diesen Jobs. Wenn ein Promise abgeschlossen wird, werden die zugehörigen Handler am Ende der Job-Warteschlange hinzugefügt.

Ein Promise kann Teil mehrerer Ketten sein. Im folgenden Code führt die Erfüllung von `promiseA` dazu, dass sowohl `handleFulfilled1` als auch `handleFulfilled2` zur Job-Warteschlange hinzugefügt werden. Da `handleFulfilled1` zuerst registriert wird, wird es zuerst aufgerufen.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Auch einem bereits abgeschlossenen Promise kann eine Aktion zugewiesen werden. In diesem Fall wird die Aktion sofort am Ende der Job-Warteschlange hinzugefügt und ausgeführt, sobald alle bereits vorhandenen Jobs abgeschlossen sind. Eine Aktion für ein bereits abgeschlossenes Promise erfolgt daher erst, nachdem der aktuelle synchrone Code beendet ist und mindestens ein Durchlauf der Ereignisschleife stattgefunden hat. Dadurch ist gewährleistet, dass Promise-Aktionen asynchron sind.

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

Im JavaScript-Ökosystem gab es bereits zahlreiche Promise-Implementierungen, lange bevor Promises Teil der Sprache wurden. Obwohl sie intern unterschiedlich aufgebaut sind, implementieren alle Promise-ähnlichen Objekte mindestens die _Thenable_-Schnittstelle. Ein Thenable implementiert die Methode [`.then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), die mit zwei Callbacks aufgerufen wird: einem für die Erfüllung des Promise und einem für seine Ablehnung. Promises sind ebenfalls Thenables.

Damit die Sprache mit bestehenden Promise-Implementierungen zusammenarbeiten kann, dürfen Thenables anstelle von Promises verwendet werden. Beispielsweise löst [`Promise.resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) nicht nur Promises auf, sondern folgt auch Thenables.

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

Die `then()`-Methode ist dafür verantwortlich, die Ausführung der übergebenen Callbacks `onFulfilled` und `onRejected` einzuplanen. Ihre Semantik, einschließlich Fehlerbehandlung und asynchronem Verhalten, ist in der [Promises/A+-Spezifikation](https://promisesaplus.com/) genau definiert und wird hier nicht wiederholt. Nur sehr selten müssen Sie selbst ein Thenable implementieren. Selbst wenn Sie keine nativen Promises verwenden, nutzen Sie wahrscheinlich eine Promise-Bibliothek wie [Bluebird](https://www.npmjs.com/package/bluebird).

### Gleichzeitige Ausführung mit Promises

Die Klasse `Promise` bietet vier wichtige statische Methoden, die die [gleichzeitige Ausführung](https://en.wikipedia.org/wiki/Concurrent_computing) asynchroner Aufgaben erleichtern:

- {{jsxref("Promise.all()")}}
  - : Wird erfüllt, wenn **alle** Promises erfüllt werden; wird abgelehnt, sobald **eines** der Promises abgelehnt wird.
- {{jsxref("Promise.allSettled()")}}
  - : Wird erfüllt, wenn **alle** Promises abgeschlossen sind.
- {{jsxref("Promise.any()")}}
  - : Wird erfüllt, sobald **eines** der Promises erfüllt wird; wird abgelehnt, wenn **alle** Promises abgelehnt werden.
- {{jsxref("Promise.race()")}}
  - : Wird abgeschlossen, sobald **eines** der Promises abgeschlossen ist. Anders ausgedrückt: Es wird erfüllt, sobald eines der Promises erfüllt wird, und abgelehnt, sobald eines der Promises abgelehnt wird.

Alle diese Methoden nehmen ein [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises (genauer gesagt [Thenables](#thenables)) entgegen und geben ein neues Promise zurück. Sie unterstützen außerdem Unterklassen: Sie können auf Unterklassen von `Promise` aufgerufen werden, und das Ergebnis ist ein Promise des entsprechenden Unterklassentyps. Dazu muss der Konstruktor der Unterklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren: Er akzeptiert eine einzelne `executor`-Funktion, die mit den Callbacks `resolve` und `reject` als Parametern aufgerufen werden kann. Die Unterklasse muss außerdem eine statische `resolve`-Methode besitzen, die wie {{jsxref("Promise.resolve()")}} aufgerufen werden kann, um Werte in Promises aufzulösen.

Es gibt zwei weitere statische Hilfsmethoden: {{jsxref("Promise.allKeyed()")}} und {{jsxref("Promise.allSettledKeyed()")}}. Sie verhalten sich wie `Promise.all()` und `Promise.allSettled()`, nehmen aber _Objekte_ mit Promises entgegen und geben Promises zurück, die mit _Objekten_ derselben Struktur erfüllt werden. Wenn Sie mit Objekten statt mit Arrays arbeiten, können Sie Ergebnisse aussagekräftigen Schlüsseln zuordnen, anstatt sich auf eine beliebige Array-Reihenfolge zu verlassen, die schwer zu verwalten sein kann.

Diese Methoden hängen mithilfe von {{jsxref("Promise/then", "then()")}} Handler an jedes eingegebene Promise an. Selbst wenn das resultierende Promise frühzeitig abgeschlossen ist (etwa weil eines der Eingabe-Promises in `Promise.race()` abgeschlossen wird), werden die übrigen Handler nicht entfernt. Wird dasselbe ausstehende Promise wiederholt an Methoden zur gleichzeitigen Ausführung übergeben, können sich Handler ansammeln, auch wenn sie nie verwendet werden:

```js
const pendingPromise = new Promise(() => {});

for (let i = 0; i < 1000; i++) {
  await Promise.race([Promise.resolve(0), pendingPromise]);
}
// All tasks have completed, but pendingPromise retains the
// handlers attached by all 1000 races.
```

Promises bieten keine Möglichkeit, diese Handler wieder zu entfernen. Sie bleiben angehängt, solange das Eingabe-Promise ausstehend und erreichbar ist. Brechen Sie die zugrunde liegende Operation nach Möglichkeit mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) ab, wenn das ausstehende Promise nicht mehr benötigt wird.

Beachten Sie, dass JavaScript von Natur aus {{Glossary("Thread", "Single-Threaded")}} ist. Zu einem bestimmten Zeitpunkt wird daher nur eine Aufgabe ausgeführt. Die Kontrolle kann jedoch zwischen verschiedenen Promises wechseln, sodass ihre Ausführung gleichzeitig erscheint. Eine [parallele Ausführung](https://en.wikipedia.org/wiki/Parallel_computing) ist in JavaScript nur über [Worker-Threads](/de/docs/Web/API/Web_Workers_API) möglich.

## Konstruktor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Erstellt ein neues `Promise`-Objekt. Der Konstruktor wird hauptsächlich verwendet, um Funktionen zu umschließen, die Promises nicht bereits unterstützen.

## Statische Eigenschaften

- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Gibt den Konstruktor zurück, mit dem Rückgabewerte von Promise-Methoden erstellt werden.

## Statische Methoden

- {{jsxref("Promise.all()")}}
  - : Nimmt ein Iterable von Promises entgegen und gibt ein einzelnes `Promise` zurück. Dieses wird erfüllt, wenn alle Eingabe-Promises erfüllt werden (auch wenn ein leeres Iterable übergeben wird), und liefert ein Array der Erfüllungswerte. Es wird abgelehnt, sobald eines der Eingabe-Promises abgelehnt wird, und liefert dessen Ablehnungsgrund.
- {{jsxref("Promise.allKeyed()")}} {{experimental_inline}}
  - : Wie `Promise.all()`, nimmt jedoch ein Objekt mit Promises entgegen und gibt ein Promise zurück, das mit einem Objekt derselben Struktur erfüllt wird. So können Sie Ergebnisse aussagekräftigen Schlüsseln zuordnen.
- {{jsxref("Promise.allSettled()")}}
  - : Nimmt ein Iterable von Promises entgegen und gibt ein einzelnes `Promise` zurück. Dieses wird erfüllt, wenn alle Eingabe-Promises abgeschlossen sind (auch wenn ein leeres Iterable übergeben wird), und liefert ein Array von Objekten, die das Ergebnis jedes Promise beschreiben.
- {{jsxref("Promise.allSettledKeyed()")}} {{experimental_inline}}
  - : Wie `Promise.allSettled()`, nimmt jedoch ein Objekt mit Promises entgegen und gibt ein Promise zurück, das mit einem Objekt derselben Struktur erfüllt wird. So können Sie Ergebnisse aussagekräftigen Schlüsseln zuordnen.
- {{jsxref("Promise.any()")}}
  - : Nimmt ein Iterable von Promises entgegen und gibt ein einzelnes `Promise` zurück. Dieses wird erfüllt, sobald eines der Eingabe-Promises erfüllt wird, und liefert dessen Erfüllungswert. Es wird abgelehnt, wenn alle Eingabe-Promises abgelehnt werden (auch wenn ein leeres Iterable übergeben wird), und liefert einen {{jsxref("AggregateError")}}, der ein Array der Ablehnungsgründe enthält.
- {{jsxref("Promise.race()")}}
  - : Nimmt ein Iterable von Promises entgegen und gibt ein einzelnes `Promise` zurück. Dieses nimmt den späteren Zustand des ersten Promise an, das abgeschlossen wird.
- {{jsxref("Promise.reject()")}}
  - : Gibt ein neues `Promise`-Objekt zurück, das mit dem angegebenen Grund abgelehnt wird.
- {{jsxref("Promise.resolve()")}}
  - : Gibt ein `Promise`-Objekt zurück, das mit dem angegebenen Wert aufgelöst wird. Wenn der Wert ein Thenable ist (also eine `then`-Methode besitzt), „folgt“ das zurückgegebene Promise diesem Thenable und übernimmt dessen späteren Zustand. Andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.
- {{jsxref("Promise.try()")}}
  - : Nimmt einen beliebigen Callback entgegen (der synchron oder asynchron einen Wert zurückgibt oder einen Fehler auslöst) und löst dessen Ergebnis in ein `Promise` auf.
- {{jsxref("Promise.withResolvers()")}}
  - : Gibt ein Objekt zurück, das ein neues `Promise`-Objekt sowie zwei Funktionen zum Auflösen oder Ablehnen dieses Promise enthält. Die Funktionen entsprechen den beiden Parametern, die an den Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Promise.prototype` definiert und werden von allen `Promise`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Promise`-Instanzen ist der Anfangswert der {{jsxref("Promise/Promise", "Promise")}}-Konstruktor.
- `Promise.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"Promise"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Promise.prototype.catch()")}}
  - : Hängt einen Callback als Ablehnungs-Handler an das Promise an und gibt ein neues Promise zurück. Wird der Callback aufgerufen, wird das neue Promise mit seinem Rückgabewert aufgelöst. Wird das ursprüngliche Promise stattdessen erfüllt, wird das neue Promise mit dessen ursprünglichem Erfüllungswert aufgelöst.
- {{jsxref("Promise.prototype.finally()")}}
  - : Hängt einen Handler an das Promise an und gibt ein neues Promise zurück, das aufgelöst wird, wenn das ursprüngliche Promise aufgelöst wird. Der Handler wird aufgerufen, wenn das Promise abgeschlossen ist – unabhängig davon, ob es erfüllt oder abgelehnt wurde.
- {{jsxref("Promise.prototype.then()")}}
  - : Hängt Erfüllungs- und Ablehnungs-Handler an das Promise an und gibt ein neues Promise zurück. Dieses wird mit dem Rückgabewert des aufgerufenen Handlers aufgelöst oder übernimmt den ursprünglichen abgeschlossenen Wert, wenn das Promise nicht behandelt wurde (das heißt, wenn der entsprechende Handler `onFulfilled` oder `onRejected` keine Funktion ist).

## Beispiele

### Einfaches Beispiel

In diesem Beispiel verwenden wir `setTimeout(...)`, um asynchronen Code zu simulieren.
In der Praxis verwenden Sie wahrscheinlich etwas wie XHR oder eine HTML-API.

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

Dieses Beispiel zeigt verschiedene Techniken zur Nutzung von Promises sowie unterschiedliche Situationen, die dabei auftreten können. Um es zu verstehen, scrollen Sie zunächst zum Ende des Codeblocks und betrachten Sie die Promise-Kette. Auf ein ursprüngliches Promise kann eine Kette weiterer Promises folgen. Die Kette besteht aus `.then()`-Aufrufen und endet typischerweise (aber nicht zwingend) mit einem einzelnen `.catch()`, auf das optional `.finally()` folgt. In diesem Beispiel wird die Promise-Kette durch eine selbst geschriebene `new Promise()`-Konstruktion eingeleitet. In der Praxis beginnen Promise-Ketten jedoch häufiger mit einer API-Funktion (die jemand anderes geschrieben hat), die ein Promise zurückgibt.

Die Beispielfunktion `tetheredGetNumber()` zeigt, dass eine Funktion, die ein Promise erzeugt, `reject()` beim Einrichten eines asynchronen Aufrufs, innerhalb des Callbacks oder an beiden Stellen verwenden kann. Die Funktion `promiseGetWord()` veranschaulicht, wie eine API-Funktion eigenständig ein Promise erstellen und zurückgeben kann.

Beachten Sie, dass die Funktion `troubleWithGetNumber()` mit einem `throw` endet. Das ist nötig, weil eine Promise-Kette auch nach einem Fehler alle `.then()`-Promises durchläuft. Ohne `throw` würde der Fehler als „behoben“ erscheinen. Das ist umständlich. Deshalb ist es üblich, `onRejected` in der gesamten Kette der `.then()`-Promises wegzulassen und nur im abschließenden `catch()` ein einziges `onRejected` zu verwenden.

Dieser Code kann unter Node.js ausgeführt werden. Das tatsächliche Auftreten der Fehler erleichtert das Verständnis. Um weitere Fehler auszulösen, ändern Sie die `threshold`-Werte.

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

Dieses kleine Beispiel zeigt die Funktionsweise eines `Promise`. Die Methode `testPromise()` wird bei jedem Klick auf das {{HTMLElement("button")}} aufgerufen. Sie erstellt ein Promise, das mithilfe von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) nach zufällig ausgewählten 1 bis 3 Sekunden mit der Anzahl der Promises (einer bei 1 beginnenden Zahl) erfüllt wird. Zum Erstellen des Promise wird der `Promise()`-Konstruktor verwendet.

Die Erfüllung des Promise wird über einen Erfüllungs-Callback protokolliert, der mit {{jsxref("Promise/then", "p1.then()")}} festgelegt wird. Einige Protokolleinträge zeigen, wie der synchrone Teil der Methode vom asynchronen Abschluss des Promise entkoppelt ist.

Wenn Sie innerhalb kurzer Zeit mehrmals auf die Schaltfläche klicken, können Sie sogar beobachten, wie die verschiedenen Promises nacheinander erfüllt werden.

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

### Ein Bild mit XHR laden

Ein weiteres Beispiel für die Verwendung von `Promise` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zum Laden eines Bildes finden Sie unten.
Jeder Schritt ist kommentiert, sodass Sie den Aufbau von Promise und XHR genau nachvollziehen können.

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

Ein Einstellungsobjekt ist eine [Umgebung](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object), die während der Ausführung von JavaScript-Code zusätzliche Informationen bereitstellt. Dazu gehören der Realm und die Modulzuordnung sowie HTML-spezifische Informationen wie der Ursprung. Das zuständige Einstellungsobjekt wird nachverfolgt, damit der Browser weiß, welches er für einen bestimmten Teil des Benutzercodes verwenden muss.

Um sich das besser vorzustellen, sehen wir uns genauer an, weshalb der Realm problematisch sein kann. Ein **Realm** lässt sich vereinfacht als globales Objekt verstehen. Das Besondere an Realms ist, dass sie alle Informationen enthalten, die zur Ausführung von JavaScript-Code benötigt werden. Dazu gehören Objekte wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Jedes Einstellungsobjekt besitzt eine eigene „Kopie“ davon; diese werden nicht gemeinsam genutzt. Das kann im Zusammenhang mit Promises zu unerwartetem Verhalten führen. Um dies zu vermeiden, verfolgen wir das sogenannte **zuständige Einstellungsobjekt** nach. Es enthält Informationen, die spezifisch für den Kontext des Benutzercodes sind, der für einen bestimmten Funktionsaufruf verantwortlich ist.

Zur weiteren Veranschaulichung sehen wir uns an, wie ein in ein Dokument eingebettetes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) mit seinem Host kommuniziert. Da alle Web-APIs das zuständige Einstellungsobjekt berücksichtigen, funktioniert Folgendes in allen Browsern:

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

Dasselbe Konzept gilt für Promises. Wenn wir das obige Beispiel etwas abändern, erhalten wir Folgendes:

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

Wenn wir dies so ändern, dass das `<iframe>` im Dokument auf gesendete Nachrichten wartet, können wir die Auswirkung des zuständigen Einstellungsobjekts beobachten:

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

Im obigen Beispiel wird der Textinhalt des `<iframe>` nur aktualisiert, wenn das zuständige Einstellungsobjekt nachverfolgt wird. Ohne diese Nachverfolgung könnte zum Senden der Nachricht die falsche Umgebung verwendet werden.

> [!NOTE]
> Derzeit ist die Nachverfolgung des zuständigen Realms in Firefox vollständig und in Chrome und Safari teilweise implementiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Promise` in `core-js`](https://core-js.io/docs/features/ecmascript/promise)
- Leitfaden [Promises verwenden](/de/docs/Web/JavaScript/Guide/Using_promises)
- [Promises/A+-Spezifikation](https://promisesaplus.com/)
- [JavaScript-Promises: eine Einführung](https://web.dev/articles/promises) auf web.dev (2013)
- [Callbacks, Promises und Coroutinen: Muster für die asynchrone Programmierung in JavaScript](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720), Foliensatz von Domenic Denicola (2011)
