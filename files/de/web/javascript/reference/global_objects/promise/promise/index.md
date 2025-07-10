---
title: Promise()-Konstruktor
short-title: Promise()
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`Promise()`**-Konstruktor erstellt {{jsxref("Promise")}}-Objekte. Er wird hauptsächlich verwendet, um APIs, die auf Rückrufmethoden basieren und keine Unterstützung für Promises haben, zu erweitern.

{{InteractiveExample("JavaScript Demo: Promise() constructor", "taller")}}

```js interactive-example
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

promise1.then((value) => {
  console.log(value);
  // Expected output: "foo"
});

console.log(promise1);
// Expected output: [object Promise]
```

## Syntax

```js-nolint
new Promise(executor)
```

> [!NOTE]
> `Promise()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) erzeugt werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `executor`
  - : Eine {{jsxref("function")}}, die vom Konstruktor ausgeführt wird. Sie erhält zwei Funktionen als Parameter: `resolveFunc` und `rejectFunc`. Alle im `executor` ausgelösten Fehler führen dazu, dass das Promise abgelehnt wird, und der Rückgabewert wird ignoriert. Die Semantik von `executor` wird unten detailliert beschrieben.

### Rückgabewert

Bei einem Aufruf über `new` gibt der `Promise`-Konstruktor ein Promise-Objekt zurück. Das Promise-Objekt wird _aufgelöst_, wenn eine der Funktionen `resolveFunc` oder `rejectFunc` aufgerufen wird. Beachten Sie, dass wenn Sie `resolveFunc` aufrufen und ein anderes Promise-Objekt als Argument übergeben, das ursprüngliche Promise als "aufgelöst" gilt, aber dennoch nicht "abgeschlossen". Siehe die [Promise-Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) für mehr Erklärungen.

## Beschreibung

Traditionell (vor Promises) wurden asynchrone Aufgaben als Rückrufe entworfen.

```js
readFile("./data.txt", (error, result) => {
  // This callback will be called when the task is done, with the
  // final `error` or `result`. Any operation dependent on the
  // result must be defined within this callback.
});
// Code here is immediately executed after the `readFile` request
// is fired. It does not wait for the callback to be called, hence
// making `readFile` "asynchronous".
```

Um die Lesbarkeit zu verbessern und die Sprachmerkmale von Promises zu nutzen, ermöglicht der `Promise()`-Konstruktor, die auf Rückrufmethoden basierende API in eine Promise-basierte zu transformieren.

> [!NOTE]
> Wenn Ihre Aufgabe bereits auf Promises basiert, benötigen Sie den `Promise()`-Konstruktor wahrscheinlich nicht.

Der `executor` ist maßgeschneiderter Code, der ein Ergebnis in einem Rückruf mit einem Promise verknüpft. Sie, der Programmierer, schreiben den `executor`. Seine Signatur sollte wie folgt aussehen:

```js
function executor(resolveFunc, rejectFunc) {
  // Typically, some asynchronous operation that accepts a callback,
  // like the `readFile` function above
}
```

`resolveFunc` und `rejectFunc` sind ebenfalls Funktionen, und Sie können ihnen beliebige tatsächliche Namen geben. Ihre Signaturen sind einfach: Sie akzeptieren einen einzigen Parameter beliebigen Typs.

```js
resolveFunc(value); // call on resolved
rejectFunc(reason); // call on rejected
```

Der `value`-Parameter, der an `resolveFunc` übergeben wird, kann ein weiteres Promise-Objekt sein, in diesem Fall wird der Status des neu erstellten Promises an das übergebene Promise (als Teil des [Auflösungs](#die_resolve-funktion)-Promises) "gekoppelt". `rejectFunc` hat eine Semantik nahe der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung, daher ist `reason` typischerweise eine Instanz von [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Wenn entweder `value` oder `reason` weggelassen werden, wird das Promise mit `undefined` erfüllt/abgelehnt.

Der Abschlusszustand des `executor` hat begrenzte Auswirkungen auf den Status des Promises:

- Der Rückgabewert des `executor` wird ignoriert. `return`-Anweisungen innerhalb des `executor` beeinflussen lediglich den Kontrollfluss und ändern, ob ein Teil der Funktion ausgeführt wird, haben jedoch keinen Einfluss auf den Erfüllungswert des Promises. Wenn `executor` endet und es unmöglich ist, dass `resolveFunc` oder `rejectFunc` in Zukunft aufgerufen werden (zum Beispiel, wenn keine asynchronen Aufgaben geplant sind), bleibt das Promise für immer schwebend.
- Wenn im `executor` ein Fehler ausgelöst wird, wird das Promise abgelehnt, es sei denn, `resolveFunc` oder `rejectFunc` wurde bereits aufgerufen.

> [!NOTE]
> Das Vorhandensein schwebender Promises verhindert nicht, dass das Programm beendet wird. Wenn die Ereignisschleife leer ist, beendet das Programm, trotz aller schwebenden Promises (da diese zwangsläufig für immer schwebend sind).

Hier ein Überblick über den typischen Ablauf:

1. Zu dem Zeitpunkt, an dem der Konstruktor das neue `Promise`-Objekt erzeugt, wird auch ein entsprechendes Paar von Funktionen für `resolveFunc` und `rejectFunc` erzeugt; diese sind mit dem `Promise`-Objekt "verbunden".
2. `executor` umschließt typischerweise einige asynchrone Vorgänge, die eine auf Rückrufmethoden basierende API bereitstellen. Der Rückruf (derjenige, der an die ursprüngliche Rückruf-basierte API übergeben wird) wird innerhalb des `executor`-Codes definiert, sodass er Zugriff auf `resolveFunc` und `rejectFunc` hat.
3. Der `executor` wird synchron aufgerufen (sobald das `Promise` konstruiert ist) mit den `resolveFunc`- und `rejectFunc`-Funktionen als Argumente.
4. Der Code innerhalb des `executor` hat die Möglichkeit, eine Operation durchzuführen. Der eventuale Abschluss der asynchronen Aufgabe wird über die Nebenwirkungen, die von `resolveFunc` oder `rejectFunc` verursacht werden, an die Promise-Instanz kommuniziert. Die Nebenwirkung besteht darin, dass das `Promise`-Objekt "aufgelöst" wird.
   - Wird `resolveFunc` zuerst aufgerufen, wird der übergebene Wert [aufgelöst](#die_resolve-funktion). Das Promise kann weiterhin schwebend bleiben (falls ein anderes [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) übergeben wird), erfüllt werden (in den meisten Fällen, in denen ein nicht-thenable Wert übergeben wird) oder abgelehnt werden (bei einem ungültigen Auflösungswert).
   - Wird `rejectFunc` zuerst aufgerufen, wird das Promise sofort abgelehnt.
   - Sobald eine der auflösenden Funktionen (`resolveFunc` oder `rejectFunc`) aufgerufen wird, bleibt das Promise aufgelöst. Nur der erste Aufruf von `resolveFunc` oder `rejectFunc` beeinflusst den endgültigen Zustand des Promises, und nachfolgende Aufrufe einer der Funktionen können weder den Erfüllungswert/die Ablehnungsursache ändern noch den endgültigen Zustand von "erfüllt" zu "abgelehnt" oder umgekehrt ändern.
   - Wenn `executor` durch Werfen eines Fehlers beendet wird, wird das Promise abgelehnt. Der Fehler wird jedoch ignoriert, wenn eine der auflösenden Funktionen bereits aufgerufen wurde (so dass das Promise bereits aufgelöst ist).
   - Das Auflösen des Promises führt nicht notwendigerweise dazu, dass das Promise erfüllt oder abgelehnt wird (d.h. abgeschlossen). Das Promise kann weiterhin schwebend bleiben, weil es mit einem anderen Thenable aufgelöst ist, aber sein endgültiger Zustand wird dem des aufgelösten Thenable entsprechen.
5. Sobald das Promise abgeschlossen ist, ruft es (asynchron) alle weiteren Handler auf, die über {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} oder {{jsxref("Promise/finally", "finally()")}} damit verbunden sind. Der letztendliche Erfüllungswert oder Ablehnungsgrund wird an die Ausführung der Erfüllungs- und Ablehnungshandler als Eingabeparameter übergeben (siehe [Verkettete Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises)).

Zum Beispiel kann die oben beschriebene Callback-basierte `readFile`-API in eine promise-basierte umgewandelt werden.

```js
const readFilePromise = (path) =>
  new Promise((resolve, reject) => {
    readFile(path, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });

readFilePromise("./data.txt")
  .then((result) => console.log(result))
  .catch((error) => console.error("Failed to read data"));
```

Die `resolve`- und `reject`-Rückrufe sind nur im Bereich der Executor-Funktion verfügbar, was bedeutet, dass Sie auf sie nicht zugreifen können, nachdem das Promise konstruiert wurde. Wenn Sie das Promise erstellen möchten, bevor Sie entscheiden, wie es aufgelöst wird, können Sie stattdessen die {{jsxref("Promise.withResolvers()")}}-Methode verwenden, die die `resolve`- und `reject`-Funktionen bereitstellt.

### Die resolve-Funktion

Die `resolve`-Funktion hat die folgenden Verhalten:

- Wird sie mit dem gleichen Wert wie das neu erstellte Promise (das Promise, mit dem sie "verbunden" ist) aufgerufen, wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wird sie mit einem nicht-[thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Wert (einem primitiven Wert oder einem Objekt, dessen `then`-Eigenschaft nicht aufrufbar ist, einschließlich wenn die Eigenschaft nicht vorhanden ist) aufgerufen, wird das Promise sofort mit diesem Wert erfüllt.
- Wird sie mit einem thenable Wert (einschließlich einer anderen `Promise`-Instanz) aufgerufen, wird die `then`-Methode des Thenables gespeichert und in Zukunft aufgerufen (sie wird immer asynchron aufgerufen). Die `then`-Methode wird mit zwei Rückrufen aufgerufen, bei denen es sich um zwei neue Funktionen mit genau demselben Verhalten wie die `resolveFunc` und `rejectFunc` handelt, die an die `executor`-Funktion übergeben werden. Wenn der Aufruf der `then`-Methode zu einem Fehler führt, wird das aktuelle Promise mit dem ausgelösten Fehler abgelehnt.

Im letzten Fall bedeutet es, dass Code wie folgt ist:

```js
new Promise((resolve, reject) => {
  resolve(thenable);
});
```

Ist ungefähr äquivalent zu:

```js
new Promise((resolve, reject) => {
  try {
    thenable.then(
      (value) => resolve(value),
      (reason) => reject(reason),
    );
  } catch (e) {
    reject(e);
  }
});
```

Außer dass im Fall von `resolve(thenable)`:

1. `resolve` wird synchron aufgerufen, so dass das erneute Aufrufen von `resolve` oder `reject` keine Wirkung hat, selbst wenn die über `anotherPromise.then()` angehängten Handler noch nicht aufgerufen werden.
2. Die `then`-Methode wird asynchron aufgerufen, so dass das Promise niemals sofort aufgelöst wird, wenn ein thenable übergeben wird.

Da `resolve` erneut mit dem aufgerufen wird, was `thenable.then()` ihm als `value` übergibt, ist die Rückruffunktion in der Lage, verschachtelte thenables zu glätten, bei denen ein thenable seinen `onFulfilled`-Handler mit einem anderen thenable aufruft. Der Effekt ist, dass der Erfüllungs-Handler eines realen Promises niemals ein thenable als seinen Erfüllungswert erhält.

## Beispiele

### Eine Callback-basierte API in eine Promise-basierte umwandeln

Um einer Funktion Promise-Funktionalität bereitzustellen, lassen Sie sie ein Promise zurückgeben, indem Sie die `resolve`- und `reject`-Funktionen zur richtigen Zeit aufrufen.

```js
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
```

### Auswirkung des Aufrufs von resolveFunc

Durch den Aufruf von `resolveFunc` wird das Promise aufgelöst, so dass weitere Aufrufe von `resolveFunc` oder `rejectFunc` keine Wirkung haben. Das Promise kann jedoch in einem der folgenden Zustände sein: schwebend, erfüllt oder abgelehnt.

Dieses `pendingResolved`-Promise wird zu dem Zeitpunkt, an dem es erstellt wird, aufgelöst, da es bereits daran "gekoppelt" ist, den eventualen Zustand des inneren Promises zu übernehmen, und der spätere Aufruf von `resolveOuter` oder `rejectOuter` oder das Werfen eines Fehlers im Executor hat keinen Einfluss auf seinen eventualen Zustand. Das innere Promise ist jedoch noch schwebend, bis 100ms später, so dass das äußere Promise ebenfalls schwebend ist:

```js
const pendingResolved = new Promise((resolveOuter, rejectOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(() => {
        resolveInner("inner");
      }, 100);
    }),
  );
});
```

Dieses `fulfilledResolved`-Promise wird in dem Moment erfüllt, in dem es aufgelöst wird, da es mit einem nicht-thenable Wert aufgelöst wurde. Wenn es erstellt wird, ist es jedoch unaufgelöst, da weder `resolve` noch `reject` bereits aufgerufen wurden. Ein unaufgelöstes Promise ist zwangsläufig schwebend:

```js
const fulfilledResolved = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("outer");
  }, 100);
});
```

Durch den Aufruf von `rejectFunc` wird das Promise offensichtlich abgelehnt. Es gibt jedoch auch zwei Möglichkeiten, das Promise sofort abzulehnen, selbst wenn der `resolveFunc`-Rückruf aufgerufen wird.

```js
// 1. Resolving with the promise itself
const rejectedResolved1 = new Promise((resolve) => {
  // Note: resolve has to be called asynchronously,
  // so that the rejectedResolved1 variable is initialized
  setTimeout(() => resolve(rejectedResolved1)); // TypeError: Chaining cycle detected for promise #<Promise>
});

// 2. Resolving with an object which throws when accessing the `then` property
const rejectedResolved2 = new Promise((resolve) => {
  resolve({
    get then() {
      throw new Error("Can't get then property");
    },
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- {{jsxref("Promise.withResolvers()")}}
