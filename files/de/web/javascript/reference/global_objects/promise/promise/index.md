---
title: Promise()-Konstruktor
short-title: Promise()
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
l10n:
  sourceCommit: 3b7310aac5ffd95db697bf136b7323cffc7e5bd2
---

Der **`Promise()`**-Konstruktor erstellt {{jsxref("Promise")}}-Objekte. Er wird hauptsächlich verwendet, um callback-basierte APIs zu umhüllen, die noch keine Unterstützung für Promises bieten.

{{InteractiveExample("JavaScript Demo: Promise() Konstruktor", "taller")}}

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
> `Promise()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `executor`
  - : Eine {{jsxref("Function")}}, die vom Konstruktor ausgeführt wird. Sie erhält zwei Funktionen als Parameter: `resolveFunc` und `rejectFunc`. Alle Fehler, die im `executor` geworfen werden, führen dazu, dass das Promise abgelehnt wird, und der Rückgabewert wird ignoriert. Die Semantik von `executor` wird unten ausführlich beschrieben.

### Rückgabewert

Beim Aufruf über `new` gibt der Promise-Konstruktor ein Promise-Objekt zurück. Das Promise-Objekt wird _aufgelöst_, wenn eine der Funktionen `resolveFunc` oder `rejectFunc` aufgerufen wird. Beachten Sie, dass wenn Sie `resolveFunc` aufrufen und ein anderes Promise-Objekt als Argument übergeben, das ursprüngliche Promise als "aufgelöst" bezeichnet werden kann, aber noch nicht "erledigt" ist. Siehe die [Promise-Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) für weitere Erklärungen.

## Beschreibung

Traditionell (vor Promises) wurden asynchrone Aufgaben als Callbacks entworfen.

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

Um die Lesbarkeit zu verbessern und die Sprachfunktionen von Promises zu nutzen, ermöglicht der `Promise()`-Konstruktor, eine callback-basierte API in eine promise-basierte zu transformieren.

> [!NOTE]
> Wenn Ihre Aufgabe bereits auf Promises basiert, benötigen Sie wahrscheinlich den `Promise()`-Konstruktor nicht.

Der `executor` ist benutzerdefinierter Code, der ein Ergebnis in einem Callback mit einem Promise verknüpft. Sie als Programmierer schreiben den `executor`. Erwartet wird folgende Signatur:

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

Der `value`-Parameter, der an `resolveFunc` übergeben wird, kann ein weiteres Promise-Objekt sein, in welchem Fall der Zustand des neu erstellten Promises an das übergebene Promise "gebunden" wird (im Rahmen des [Resolution](#die_resolve-funktion) Promises). Der `rejectFunc` hat eine Semantik, die der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung nahe kommt, daher ist `reason` typischerweise eine [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)-Instanz. Wenn entweder `value` oder `reason` weggelassen wird, wird das Promise mit `undefined` erfüllt/abgelehnt.

Der Abschlusszustand des `executor` hat begrenzte Auswirkungen auf den Zustand des Promises:

- Der Rückgabewert des `executor` wird ignoriert. `return`-Anweisungen innerhalb des `executor` haben lediglich Auswirkungen auf den Kontrollfluss und ändern, ob ein Teil der Funktion ausgeführt wird, aber keinen Einfluss auf den Erfüllungswert des Promises. Wenn `executor` beendet wird und es unmöglich ist, dass `resolveFunc` oder `rejectFunc` in Zukunft aufgerufen werden können (zum Beispiel, wenn keine asynchronen Aufgaben geplant sind), bleibt das Promise für immer ausstehend.
- Wenn im `executor` ein Fehler geworfen wird, wird das Promise abgelehnt, es sei denn, `resolveFunc` oder `rejectFunc` wurde bereits aufgerufen.

> [!NOTE]
> Die Existenz ausstehender Promises verhindert nicht, dass das Programm beendet wird. Wenn die Ereignisschleife leer ist, endet das Programm trotz ausstehender Promises (weil diese notwendigerweise für immer ausstehend sind).

Hier ist eine Zusammenfassung des typischen Ablaufs:

1. Zu dem Zeitpunkt, an dem der Konstruktor das neue `Promise`-Objekt generiert, erzeugt er auch ein entsprechendes Paar von Funktionen für `resolveFunc` und `rejectFunc`; diese sind mit dem `Promise`-Objekt "verbunden".
2. `executor` umschließt in der Regel eine asynchrone Operation, die eine callback-basierte API bietet. Der Callback (der an die ursprüngliche callback-basierte API übergeben wird) ist im `executor`-Code definiert, sodass er Zugriff auf `resolveFunc` und `rejectFunc` hat.
3. Der `executor` wird synchron (sobald das `Promise` konstruiert ist) mit den Funktionen `resolveFunc` und `rejectFunc` als Argumente aufgerufen.
4. Der Code innerhalb des `executor` hat die Möglichkeit, eine Operation auszuführen. Der abschließende Abschluss der asynchronen Aufgabe wird durch die Nebenwirkung von `resolveFunc` oder `rejectFunc` an die Promise-Instanz kommuniziert. Die Nebenwirkung ist, dass das `Promise`-Objekt "aufgelöst" wird.
   - Wenn `resolveFunc` zuerst aufgerufen wird, wird der übergebene Wert [aufgelöst](#die_resolve-funktion). Das Promise kann ausstehend bleiben (falls ein weiterer [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) übergeben wird), erfüllt werden (in den meisten Fällen, in denen ein nicht-thenables Wert übergeben wird) oder abgelehnt werden (bei einem ungültigen Auflösungswert).
   - Wenn `rejectFunc` zuerst aufgerufen wird, wird das Promise sofort abgelehnt.
   - Sobald eine der auflösenden Funktionen (`resolveFunc` oder `rejectFunc`) aufgerufen wird, bleibt das Promise "aufgelöst". Nur der erste Aufruf von `resolveFunc` oder `rejectFunc` beeinflusst den endgültigen Zustand des Promises, und nachfolgende Aufrufe dieser Funktionen können weder den Erfüllungswert/Ablehnungsgrund ändern noch den endgültigen Zustand von "erfüllt" zu "abgelehnt" oder umgekehrt ändern.
   - Wenn der `executor` mit einem Fehler endet, wird das Promise abgelehnt. Der Fehler wird jedoch ignoriert, wenn eine der auflösenden Funktionen bereits aufgerufen wurde (sodass das Promise bereits aufgelöst ist).
   - Das Auflösen des Promises führt nicht notwendigerweise dazu, dass das Promise erfüllt oder abgelehnt wird (d.h. sich nicht setzt). Das Promise kann immer noch ausstehend sein, weil es mit einem anderen thenable aufgelöst wird, aber sein endgültiger Zustand wird dem des aufgelösten thenable entsprechen.
5. Sobald das Promise sich gesetzt hat, ruft es (asynchron) die weiteren Handler auf, die über {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}}, oder {{jsxref("Promise/finally", "finally()")}} assoziiert sind. Der endgültige Erfüllungswert oder Ablehnungsgrund wird an die Aufrufe der Erfüllungs- und Ablehnungshandler als Eingabeparameter übergeben (siehe [Verkettete Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises)).

Beispielsweise kann die callback-basierte `readFile`-API oben in eine promise-basierte umgewandelt werden.

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

Die `resolve`- und `reject`-Callbacks sind nur im Rahmen der Executor-Funktion verfügbar, was bedeutet, dass Sie nicht mehr auf sie zugreifen können, nachdem das Promise konstruiert ist. Wenn Sie das Promise konstruieren möchten, bevor Sie entscheiden, wie es aufgelöst werden soll, können Sie stattdessen die Methode {{jsxref("Promise.withResolvers()")}} verwenden, die die `resolve`- und `reject`-Funktionen freigibt.

### Die resolve-Funktion

Die `resolve`-Funktion hat folgende Eigenschaften:

- Wenn sie mit dem gleichen Wert wie das neu erstellte Promise aufgerufen wird (das Promise, mit dem es "verbunden" ist), wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn es mit einem nicht-[thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Wert aufgerufen wird (einem primitiven Wert oder einem Objekt, dessen `then`-Eigenschaft nicht aufrufbar ist, einschließlich, wenn die Eigenschaft fehlt), wird das Promise sofort mit diesem Wert erfüllt.
- Wenn es mit einem thenable-Wert aufgerufen wird (einschließlich einer anderen `Promise`-Instanz), wird die `then`-Methode des thenables gespeichert und in Zukunft aufgerufen (sie wird immer asynchron aufgerufen). Die `then`-Methode wird mit zwei Callbacks aufgerufen, die zwei neue Funktionen mit den exakt gleichen Eigenschaften wie die `resolveFunc` und `rejectFunc` sind, die an die Executor-Funktion übergeben werden. Wenn der Aufruf der `then`-Methode einen Fehler wirft, wird das aktuelle Promise mit dem geworfenen Fehler abgelehnt.

Im letzten Fall bedeutet dies, dass Code wie:

```js
new Promise((resolve, reject) => {
  resolve(thenable);
});
```

In etwa gleichbedeutend ist mit:

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

1. `resolve` wird synchron aufgerufen, sodass das erneute Aufrufen von `resolve` oder `reject` keine Wirkung hat, selbst wenn die über `anotherPromise.then()` angehängten Handler noch nicht aufgerufen wurden.
2. Die `then`-Methode wird asynchron aufgerufen, sodass das Promise nie sofort aufgelöst wird, wenn ein thenable übergeben wird.

Da `resolve` erneut mit dem, was `thenable.then()` als `value` übergibt, aufgerufen wird, kann die Resolve-Funktion verschachtelte thenables "abflachen", bei denen ein thenable seinen `onFulfilled`-Handler mit einem weiteren thenable aufruft. Der Effekt ist, dass der Erfüllungs-Handler eines echten Promises nie ein thenable als Erfüllungswert erhält.

## Beispiele

### Eine callback-basierte API in eine promise-basierte umwandeln

Um einer Funktion Promise-Funktionalität bereitzustellen, lassen Sie sie ein Promise zurückgeben, indem Sie die `resolve`- und `reject`-Funktionen zu den richtigen Zeitpunkten aufrufen.

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

### Effekt des Aufrufs von resolveFunc

Das Aufrufen von `resolveFunc` führt dazu, dass das Promise aufgelöst wird, sodass das erneute Aufrufen von `resolveFunc` oder `rejectFunc` keine Wirkung hat. Allerdings kann das Promise in einem der Zustände sein: ausstehend, erfüllt oder abgelehnt.

Dieses `pendingResolved`-Promise wird zu dem Zeitpunkt aufgelöst, an dem es erstellt wird, da es bereits "gebunden" ist, den endgültigen Zustand des inneren Promises zu übernehmen, und das spätere Aufrufen von `resolveOuter` oder `rejectOuter` oder das Werfen eines Fehlers im Executor hat keinen Einfluss auf seinen endgültigen Zustand. Allerdings ist das innere Promise 100ms später noch ausstehend, sodass das äußere Promise ebenfalls ausstehend ist:

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

Dieses `fulfilledResolved`-Promise wird in dem Moment erfüllt, in dem es aufgelöst wird, da es mit einem nicht-thenable-Wert aufgelöst wird. Bei der Erstellung ist es jedoch ungelöst, da weder `resolve` noch `reject` aufgerufen wurden. Ein ungelöstes Promise ist notwendigerweise ausstehend:

```js
const fulfilledResolved = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("outer");
  }, 100);
});
```

Das Aufrufen von `rejectFunc` führt offensichtlich dazu, dass das Promise abgelehnt wird. Allerdings gibt es auch zwei Möglichkeiten, das Promise sofort abzulehnen, selbst wenn der `resolveFunc`-Callback aufgerufen wird.

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
