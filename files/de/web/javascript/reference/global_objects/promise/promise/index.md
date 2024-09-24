---
title: Promise() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
l10n:
  sourceCommit: 1edfd3d5da5e1a559adb5d3a6a56beaed14845d6
---

{{JSRef}}

Der **`Promise()`**-Konstruktor erstellt {{jsxref("Promise")}}-Objekte. Er wird hauptsächlich verwendet, um callback-basierte APIs zu umhüllen, die noch keine Unterstützung für Promises bieten.

{{EmbedInteractiveExample("pages/js/promise-constructor.html", "taller")}}

## Syntax

```js-nolint
new Promise(executor)
```

> **Hinweis:** `Promise()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `executor`
  - : Eine {{jsxref("function")}}, die vom Konstruktor ausgeführt wird. Sie erhält zwei Funktionen als Parameter: `resolveFunc` und `rejectFunc`. Alle im `executor` auftretenden Fehler führen dazu, dass die Promise abgelehnt wird, und der Rückgabewert wird ignoriert. Die Semantik des `executor` ist unten detailliert beschrieben.

### Rückgabewert

Beim Aufruf mit `new` gibt der `Promise`-Konstruktor ein Promise-Objekt zurück. Das Promise-Objekt wird _aufgelöst_, wenn eine der Funktionen `resolveFunc` oder `rejectFunc` aufgerufen wird. Beachten Sie, dass, wenn Sie `resolveFunc` aufrufen und ein anderes Promise-Objekt als Argument übergeben, das ursprüngliche Promise als "aufgelöst", aber noch nicht "erledigt" angesehen werden kann. Siehe die [Promise-Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) für weitere Erläuterungen.

## Beschreibung

Traditionell (vor Promises) wurden asynchrone Aufgaben als Callbacks gestaltet.

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

Um die Lesbarkeit und die von Promises angebotenen Sprachfunktionen nutzen zu können, ermöglicht der `Promise()`-Konstruktor, die callback-basierte API in eine promise-basierte zu transformieren.

> [!NOTE]
> Wenn Ihre Aufgabe bereits auf Promises basiert, benötigen Sie wahrscheinlich keinen `Promise()`-Konstruktor.

Der `executor` ist ein benutzerdefinierter Code, der ein Ergebnis in einem Callback an ein Promise bindet. Sie, der Programmierer, schreiben den `executor`. Die Signatur wird erwartet als:

```js
function executor(resolveFunc, rejectFunc) {
  // Typically, some asynchronous operation that accepts a callback,
  // like the `readFile` function above
}
```

`resolveFunc` und `rejectFunc` sind ebenfalls Funktionen, und Sie können ihnen beliebige tatsächliche Namen geben. Ihre Signaturen sind einfach: Sie akzeptieren einen einzelnen Parameter beliebigen Typs.

```js
resolveFunc(value); // call on resolved
rejectFunc(reason); // call on rejected
```

Der `value`-Parameter, der an `resolveFunc` übergeben wird, kann ein anderes Promise-Objekt sein, in diesem Fall wird der neu konstruierte Promise-Zustand an das übergebene Promise "gebunden" (im Rahmen der [Auflösung](#die_resolve-funktion)-Promise). Die `rejectFunc` hat eine Semantik, die der des [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Statements nahekommt, daher ist `reason` typischerweise eine [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)-Instanz. Wenn entweder `value` oder `reason` weggelassen wird, wird das Promise mit `undefined` erfüllt/abgelehnt.

Der Abschlusszustand des `executor` hat begrenzte Auswirkungen auf den Zustand des Promise:

- Der Rückgabewert des `executor` wird ignoriert. `return`-Anweisungen innerhalb des `executor` beeinflussen lediglich den Kontrollfluss und ändern, ob ein Teil der Funktion ausgeführt wird, haben jedoch keine Auswirkungen auf den Erfüllungswert des Promise. Wenn `executor` beendet wird und es unmöglich ist, dass `resolveFunc` oder `rejectFunc` in der Zukunft aufgerufen werden (z.B. keine asynchronen Aufgaben geplant sind), bleibt das Promise für immer ausstehend.
- Wenn im `executor` ein Fehler auftritt, wird das Promise abgelehnt, es sei denn, `resolveFunc` oder `rejectFunc` wurde bereits aufgerufen.

> [!NOTE]
> Die Existenz ausstehender Promises hindert das Programm nicht daran, zu beenden. Wenn die Ereignisschleife leer ist, beendet das Programm, trotz jeder ausstehenden Promises (da diese notwendigerweise immer ausstehend sind).

Hier ist eine Zusammenfassung des typischen Ablaufs:

1. In dem Moment, in dem der Konstruktor das neue `Promise`-Objekt erzeugt, erzeugt er auch ein entsprechendes Paar von Funktionen für `resolveFunc` und `rejectFunc`; diese sind an das `Promise`-Objekt "gebunden".
2. `executor` umschließt typischerweise eine asynchrone Operation, die eine callback-basierte API bereitstellt. Das Callback (das an die ursprüngliche callback-basierte API übergeben wird) ist innerhalb des `executor`-Codes definiert, sodass es Zugriff auf die Funktionen `resolveFunc` und `rejectFunc` hat.
3. Der `executor` wird synchron aufgerufen (sobald das `Promise` konstruiert ist) mit den Funktionen `resolveFunc` und `rejectFunc` als Argumente.
4. Der Code innerhalb des `executor` hat die Gelegenheit, eine Operation auszuführen. Der eventuelle Abschluss der asynchronen Aufgabe wird der Promise-Instanz über den Nebeneffekt mitgeteilt, der durch `resolveFunc` oder `rejectFunc` verursacht wird. Der Nebeneffekt ist, dass das `Promise`-Objekt "aufgelöst" wird.
   - Wenn `resolveFunc` zuerst aufgerufen wird, wird der übergebene Wert [aufgelöst](#die_resolve-funktion). Das Promise kann ausstehend bleiben (falls ein anderes [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) übergeben wird), erfüllt werden (in den meisten Fällen, in denen ein nicht-thenable Wert übergeben wird), oder abgelehnt werden (im Falle eines ungültigen Auflösungswertes).
   - Wenn `rejectFunc` zuerst aufgerufen wird, wird das Promise sofort abgelehnt.
   - Sobald eine der Auflösungsfunktionen (`resolveFunc` oder `rejectFunc`) aufgerufen wurde, bleibt das Promise aufgelöst. Nur der erste Aufruf von `resolveFunc` oder `rejectFunc` beeinflusst den endgültigen Zustand des Promise, und nachfolgende Aufrufe einer der Funktionen können weder den Erfüllungswert/den Ablehnungsgrund ändern noch dessen endgültigen Zustand von "erfüllt" in "abgelehnt" oder umgekehrt ändern.
   - Wenn `executor` durch Auslösen eines Fehlers beendet wird, dann wird das Promise abgelehnt. Der Fehler wird jedoch ignoriert, wenn eine der Auflösungsfunktionen bereits aufgerufen wurde (sodass das Promise bereits aufgelöst ist).
   - Die Auflösung des Promise führt nicht notwendigerweise dazu, dass das Promise erfüllt oder abgelehnt wird (d.h. erledigt). Das Promise kann immer noch ausstehend sein, weil es mit einem anderen thenable aufgelöst wird, aber sein endgültiger Zustand wird dem des aufgelösten thenable entsprechen.
5. Sobald das Promise erledigt ist, ruft es (asynchron) alle weiteren zugeordneten Handler auf, die über {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} oder {{jsxref("Promise/finally", "finally()")}} assoziiert wurden. Der endgültige Erfüllungswert oder Ablehnungsgrund wird an den Aufruf der Erfüllungs- und Ablehnungshandler als Eingabeparameter übergeben (siehe [Verkettete Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises)).

Zum Beispiel kann die oben gezeigte callback-basierte `readFile`-API in eine auf Promises basierende transformiert werden.

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

Die `resolve`- und `reject`-Callbacks sind nur innerhalb des Bereichs der Executor-Funktion verfügbar, was bedeutet, dass Sie nach der Erstellung des Promise nicht mehr auf sie zugreifen können. Wenn Sie das Promise erstellen möchten, bevor Sie entscheiden, wie es aufgelöst werden soll, können Sie stattdessen die Methode {{jsxref("Promise.withResolvers()")}} verwenden, die die `resolve`- und `reject`-Funktionen offenlegt.

### Die resolve-Funktion

Die `resolve`-Funktion hat die folgenden Verhaltensweisen:

- Wenn sie mit dem gleichen Wert aufgerufen wird wie das neu erstellte Promise (das Promise, an das sie "gebunden" ist), wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn sie mit einem nicht-[thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Wert aufgerufen wird (ein primitiver Wert, oder ein Objekt, dessen `then`-Eigenschaft nicht aufruffähig ist, auch wenn die Eigenschaft nicht vorhanden ist), wird das Promise sofort mit diesem Wert erfüllt.
- Wenn sie mit einem thenable Wert aufgerufen wird (einschließlich einer anderen `Promise`-Instanz), dann wird die `then`-Methode des thenable gespeichert und später aufgerufen (sie wird immer asynchron aufgerufen). Die `then`-Methode wird mit zwei Callbacks aufgerufen, die zwei neue Funktionen mit genau den gleichen Verhaltensweisen wie die an die `executor`-Funktion übergebenen `resolveFunc` und `rejectFunc` sind. Wenn der Aufruf der `then`-Methode eine Ausnahme auslöst, wird das aktuelle Promise mit dem ausgelösten Fehler abgelehnt.

Im letzten Fall bedeutet es, dass Code wie:

```js
new Promise((resolve, reject) => {
  resolve(thenable);
});
```

In etwa das Gleiche ist wie:

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

Außer dass im `resolve(thenable)`-Fall:

1. `resolve` wird synchron aufgerufen, so dass der erneute Aufruf von `resolve` oder `reject` keine Auswirkungen hat, selbst wenn die Handler, die durch `anotherPromise.then()` angehängt wurden, noch nicht aufgerufen wurden.
2. Die `then`-Methode wird asynchron aufgerufen, so dass das Promise nie sofort aufgelöst wird, wenn ein thenable übergeben wird.

Weil `resolve` erneut mit dem, was `thenable.then()` als `value` übergibt, aufgerufen wird, ist die Resolver-Funktion in der Lage, geschachtelte thenables zu flatten, wo ein thenable seinen `onFulfilled`-Handler mit einem anderen thenable aufruft. Der Effekt ist, dass der Erfüllungshandler eines realen Promise niemals ein thenable als seinen Erfüllungswert erhält.

## Beispiele

### Eine callback-basierte API in eine auf Promises basierende verwandeln

Um einer Funktion eine Promise-Funktionalität zu bieten, muss sie ein Promise zurückgeben, indem die `resolve`- und `reject`-Funktionen zu den richtigen Zeiten aufgerufen werden.

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

Der Aufruf von `resolveFunc` führt dazu, dass das Promise aufgelöst wird, so dass der erneute Aufruf von `resolveFunc` oder `rejectFunc` keine Auswirkungen hat. Das Promise kann jedoch in jedem der Zustände sein: ausstehend, erfüllt oder abgelehnt.

Diese `pendingResolved`-Promise ist aufgelöst, sobald sie erstellt wird, weil sie bereits an den endgültigen Zustand des inneren Promise "gebunden" wurde, und der spätere Aufruf von `resolveOuter` oder `rejectOuter` oder das Auslösen eines Fehlers im Executor hat keinen Einfluss auf ihren endgültigen Zustand. Das innere Promise ist jedoch weiterhin ausstehend, bis 100 ms später, was bedeutet, dass das äußere Promise auch ausstehend ist:

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

Diese `fulfilledResolved`-Promise wird in dem Moment erfüllt, in dem sie aufgelöst wird, weil sie mit einem nicht-thenable Wert aufgelöst wird. Trotzdem ist sie beim Erstellen ungelöst, weil weder `resolve` noch `reject` bisher aufgerufen wurde. Ein ungelöstes Promise ist notwendigerweise ausstehend:

```js
const fulfilledResolved = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("outer");
  }, 100);
});
```

Der Aufruf von `rejectFunc` führt offensichtlich dazu, dass das Promise abgelehnt wird. Es gibt jedoch auch zwei Möglichkeiten, das Promise sofort abzulehnen, selbst wenn der `resolveFunc`-Callback aufgerufen wird.

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
