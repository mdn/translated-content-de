---
title: Promise()-Konstruktor
short-title: Promise()
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Der **`Promise()`**-Konstruktor erstellt {{jsxref("Promise")}}-Objekte. Er wird hauptsächlich verwendet, um Callback-basierte APIs, die noch keine Promises unterstützen, in Promises einzubinden.

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
> `Promise()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `executor`
  - : Eine {{jsxref("Function")}}, die vom Konstruktor ausgeführt wird. Sie erhält zwei Funktionen als Parameter: `resolveFunc` und `rejectFunc`. Jeder Fehler, der im `executor` ausgelöst wird, führt dazu, dass das Promise zurückgewiesen wird; der Rückgabewert wird ignoriert. Die Semantik von `executor` wird weiter unten erläutert.

### Rückgabewert

Beim Aufruf mit `new` gibt der `Promise`-Konstruktor ein Promise-Objekt zurück. Das Promise-Objekt wird _resolved_, wenn eine der Funktionen `resolveFunc` oder `rejectFunc` aufgerufen wird. Beachten Sie: Wenn Sie `resolveFunc` aufrufen und ein anderes Promise-Objekt als Argument übergeben, gilt das ursprüngliche Promise zwar als „resolved“, ist aber möglicherweise noch nicht „settled“. Weitere Erläuterungen finden Sie in der [Beschreibung von Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description).

## Beschreibung

Traditionell, also vor der Einführung von Promises, wurden asynchrone Aufgaben mithilfe von Callbacks umgesetzt.

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

Mit dem `Promise()`-Konstruktor lässt sich eine Callback-basierte API in eine Promise-basierte API umwandeln. So können Sie von der besseren Lesbarkeit und den Sprachfunktionen profitieren, die Promises bieten.

> [!NOTE]
> Wenn Ihre Aufgabe bereits auf Promises basiert, benötigen Sie den `Promise()`-Konstruktor wahrscheinlich nicht.

Der `executor` ist benutzerdefinierter Code, der das Ergebnis eines Callbacks mit einem Promise verknüpft. Sie schreiben den `executor` selbst. Seine erwartete Signatur lautet:

```js
function executor(resolveFunc, rejectFunc) {
  // Typically, some asynchronous operation that accepts a callback,
  // like the `readFile` function above
}
```

`resolveFunc` und `rejectFunc` sind ebenfalls Funktionen; Sie können ihnen beliebige Namen geben. Ihre Signaturen sind einfach: Sie akzeptieren jeweils einen einzelnen Parameter beliebigen Typs.

```js
resolveFunc(value); // call on resolved
rejectFunc(reason); // call on rejected
```

Der an `resolveFunc` übergebene Parameter `value` kann ein weiteres Promise-Objekt sein. In diesem Fall wird der Zustand des neu erstellten Promise an den des übergebenen Promise gebunden (als Teil der [Resolution](#die_funktion_resolve) des Promise). Die Semantik von `rejectFunc` ähnelt der der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung. Daher ist `reason` üblicherweise eine [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)-Instanz. Wird `value` oder `reason` weggelassen, wird das Promise mit `undefined` erfüllt beziehungsweise zurückgewiesen.

Der Abschlusszustand des `executor` hat nur begrenzten Einfluss auf den Zustand des Promise:

- Der Rückgabewert des `executor` wird ignoriert. `return`-Anweisungen innerhalb des `executor` beeinflussen lediglich den Kontrollfluss und damit, ob ein Teil der Funktion ausgeführt wird. Sie haben jedoch keinen Einfluss auf den Erfüllungswert des Promise. Wenn der `executor` beendet wird und `resolveFunc` oder `rejectFunc` künftig nicht mehr aufgerufen werden können – beispielsweise weil keine asynchronen Aufgaben geplant sind –, bleibt das Promise dauerhaft ausstehend.
- Wird im `executor` ein Fehler ausgelöst, wird das Promise zurückgewiesen, sofern `resolveFunc` oder `rejectFunc` nicht bereits aufgerufen wurde.

> [!NOTE]
> Ausstehende Promises verhindern nicht, dass das Programm beendet wird. Wenn die Ereignisschleife leer ist, wird das Programm trotz ausstehender Promises beendet, da diese zwangsläufig dauerhaft ausstehend bleiben.

Der typische Ablauf lässt sich wie folgt zusammenfassen:

1. Wenn der Konstruktor das neue `Promise`-Objekt erstellt, erzeugt er zugleich ein zugehöriges Funktionspaar für `resolveFunc` und `rejectFunc`. Diese Funktionen sind an das `Promise`-Objekt gebunden.
2. Der `executor` umschließt normalerweise eine asynchrone Operation mit einer Callback-basierten API. Der Callback, der an die ursprüngliche API übergeben wird, ist im Code des `executor` definiert und kann deshalb auf `resolveFunc` und `rejectFunc` zugreifen.
3. Der `executor` wird synchron aufgerufen, sobald das `Promise` erstellt wird. Dabei werden ihm die Funktionen `resolveFunc` und `rejectFunc` als Argumente übergeben.
4. Der Code im `executor` kann eine Operation ausführen. Der spätere Abschluss der asynchronen Aufgabe wird der Promise-Instanz über einen Nebeneffekt des Aufrufs von `resolveFunc` oder `rejectFunc` mitgeteilt: Das `Promise`-Objekt wird „resolved“.
   - Wird `resolveFunc` zuerst aufgerufen, wird der übergebene Wert [aufgelöst](#die_funktion_resolve). Das Promise kann ausstehend bleiben (wenn ein anderes [Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) übergeben wird), erfüllt werden (in den meisten Fällen, in denen ein Wert übergeben wird, der kein Thenable ist) oder zurückgewiesen werden (wenn der Auflösungswert ungültig ist).
   - Wird `rejectFunc` zuerst aufgerufen, wird das Promise sofort zurückgewiesen.
   - Sobald eine der beiden Funktionen (`resolveFunc` oder `rejectFunc`) aufgerufen wurde, bleibt das Promise „resolved“. Nur der erste Aufruf beeinflusst seinen endgültigen Zustand. Spätere Aufrufe können weder den Erfüllungswert oder den Grund der Zurückweisung ändern noch den endgültigen Zustand von „erfüllt“ zu „zurückgewiesen“ oder umgekehrt wechseln.
   - Wird der `executor` durch das Auslösen eines Fehlers beendet, wird das Promise zurückgewiesen. Wurde jedoch bereits eine der beiden Funktionen aufgerufen, wird der Fehler ignoriert, da das Promise schon „resolved“ ist.
   - Wenn ein Promise „resolved“ wird, bedeutet das nicht unbedingt, dass es bereits erfüllt oder zurückgewiesen, also „settled“, ist. Es kann weiterhin ausstehend sein, weil es mit einem anderen Thenable aufgelöst wurde. Sein endgültiger Zustand entspricht dann dem des Thenable.
5. Sobald das Promise „settled“ ist, ruft es asynchron alle weiteren Handler auf, die über {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} oder {{jsxref("Promise/finally", "finally()")}} verknüpft wurden. Der endgültige Erfüllungswert oder der Grund der Zurückweisung wird den entsprechenden Handlern beim Aufruf als Eingabeparameter übergeben (siehe [Verkettete Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises)).

Beispielsweise lässt sich die obige Callback-basierte `readFile`-API in eine Promise-basierte API umwandeln.

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

Die Callbacks `resolve` und `reject` sind nur innerhalb des Gültigkeitsbereichs der Executor-Funktion verfügbar. Nach dem Erstellen des Promise können Sie daher nicht mehr auf sie zugreifen. Wenn Sie das Promise erstellen möchten, bevor Sie entscheiden, wie es aufgelöst werden soll, können Sie stattdessen die Methode {{jsxref("Promise.withResolvers()")}} verwenden. Sie stellt die Funktionen `resolve` und `reject` bereit.

### Die Funktion resolve

Die Funktion `resolve` verhält sich wie folgt:

- Wird sie mit demselben Wert wie das neu erstellte Promise aufgerufen, an das sie gebunden ist, wird das Promise mit einem {{jsxref("TypeError")}} zurückgewiesen.
- Wird sie mit einem Wert aufgerufen, der kein [Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) ist (ein primitiver Wert oder ein Objekt, dessen `then`-Eigenschaft nicht aufrufbar ist oder nicht existiert), wird das Promise sofort mit diesem Wert erfüllt.
- Wird sie mit einem Thenable aufgerufen (einschließlich einer weiteren `Promise`-Instanz), wird dessen `then`-Methode gespeichert und später aufgerufen (der Aufruf erfolgt immer asynchron). Der `then`-Methode werden zwei Callbacks übergeben: zwei neue Funktionen, die sich genauso verhalten wie die an den `executor` übergebenen Funktionen `resolveFunc` und `rejectFunc`. Löst der Aufruf der `then`-Methode einen Fehler aus, wird das aktuelle Promise mit diesem Fehler zurückgewiesen.

Im letzten Fall ist Code wie dieser:

```js
new Promise((resolve, reject) => {
  resolve(thenable);
});
```

ungefähr gleichbedeutend mit:

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

Im Fall von `resolve(thenable)` gibt es jedoch folgende Unterschiede:

1. `resolve` wird synchron aufgerufen. Deshalb hat ein erneuter Aufruf von `resolve` oder `reject` keine Wirkung, selbst wenn die über `anotherPromise.then()` verknüpften Handler noch nicht aufgerufen wurden.
2. Die `then`-Methode wird asynchron aufgerufen. Wird ein Thenable übergeben, wird das Promise daher niemals sofort aufgelöst.

Da `resolve` erneut mit dem Wert aufgerufen wird, den `thenable.then()` als `value` übergibt, kann die Auflösungsfunktion verschachtelte Thenables abflachen, bei denen ein Thenable seinen `onFulfilled`-Handler mit einem weiteren Thenable aufruft. Dadurch erhält der Erfüllungshandler eines echten Promise niemals ein Thenable als Erfüllungswert.

## Beispiele

### Eine Callback-basierte API in eine Promise-basierte API umwandeln

Damit eine Funktion Promise-Funktionalität bereitstellt, lassen Sie sie ein Promise zurückgeben und rufen Sie die Funktionen `resolve` und `reject` zum jeweils richtigen Zeitpunkt auf.

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

### Auswirkung eines Aufrufs von resolveFunc

Ein Aufruf von `resolveFunc` bewirkt, dass das Promise „resolved“ wird. Weitere Aufrufe von `resolveFunc` oder `rejectFunc` haben dann keine Wirkung. Das Promise kann sich jedoch weiterhin in jedem dieser Zustände befinden: ausstehend, erfüllt oder zurückgewiesen.

Das Promise `pendingResolved` wird bei seiner Erstellung „resolved“, weil sein endgültiger Zustand bereits an den des inneren Promise gebunden ist. Spätere Aufrufe von `resolveOuter` oder `rejectOuter` sowie Fehler im Executor haben keinen Einfluss mehr auf diesen Zustand. Das innere Promise bleibt allerdings noch 100 ms lang ausstehend; deshalb ist auch das äußere Promise weiterhin ausstehend:

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

Das Promise `fulfilledResolved` wird in dem Moment erfüllt, in dem es „resolved“ wird, da dies mit einem Wert geschieht, der kein Thenable ist. Bei seiner Erstellung ist es jedoch noch nicht „resolved“, weil weder `resolve` noch `reject` aufgerufen wurde. Ein Promise, das noch nicht „resolved“ ist, ist zwangsläufig ausstehend:

```js
const fulfilledResolved = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("outer");
  }, 100);
});
```

Ein Aufruf von `rejectFunc` führt selbstverständlich dazu, dass das Promise zurückgewiesen wird. Es gibt jedoch auch zwei Möglichkeiten, das Promise sofort zurückzuweisen, obwohl der Callback `resolveFunc` aufgerufen wird.

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

- [Polyfill für `Promise` in `core-js`](https://core-js.io/docs/features/ecmascript/promise)
- Leitfaden [Promises verwenden](/de/docs/Web/JavaScript/Guide/Using_promises)
- {{jsxref("Promise.withResolvers()")}}
