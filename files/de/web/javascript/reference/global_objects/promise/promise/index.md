---
title: Promise() Konstruktor
short-title: Promise()
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Der **`Promise()`** Konstruktor erstellt {{jsxref("Promise")}} Objekte. Er wird hauptsächlich verwendet, um Callback-basierte APIs, die noch keine Unterstützung für Promises bieten, in Promises zu transformieren.

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

> **Note:** `Promise()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) erstellt werden. Ein Versuch, es ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `executor`
  - : Eine {{jsxref("function")}}, die vom Konstruktor ausgeführt wird. Sie erhält zwei Funktionen als Parameter: `resolveFunc` und `rejectFunc`. Jegliche Fehler, die im `executor` ausgelöst werden, führen dazu, dass das Promise abgelehnt wird, und der Rückgabewert wird ignoriert. Die Bedeutung von `executor` wird unten detailliert beschrieben.

### Rückgabewert

Wenn es über `new` aufgerufen wird, gibt der `Promise` Konstruktor ein Promise-Objekt zurück. Das Promise-Objekt wird als _resolved_ betrachtet, wenn entweder die `resolveFunc` oder `rejectFunc` Funktionen aufgerufen werden. Beachten Sie, dass wenn Sie `resolveFunc` aufrufen und ein weiteres Promise-Objekt als Argument übergeben, das ursprüngliche Promise als "resolved" betrachtet werden kann, aber noch nicht "settled". Siehe die [Promise-Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) für weitere Erklärungen.

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

Um von der verbesserten Lesbarkeit und den Sprachmerkmalen, die Promises bieten, zu profitieren, erlaubt der `Promise()` Konstruktor die Umwandlung einer Callback-basierten API in eine Promise-basierte.

> [!NOTE]
> Wenn Ihre Aufgabe bereits auf Promises basiert, benötigen Sie wahrscheinlich nicht den `Promise()` Konstruktor.

Der `executor` ist benutzerdefinierter Code, der ein Ergebnis in einem Callback an ein Promise bindet. Sie, der Programmierer, schreiben den `executor`. Seine Signatur sollte wie folgt sein:

```js
function executor(resolveFunc, rejectFunc) {
  // Typically, some asynchronous operation that accepts a callback,
  // like the `readFile` function above
}
```

`resolveFunc` und `rejectFunc` sind auch Funktionen, und Sie können ihnen beliebige tatsächliche Namen geben. Ihre Signaturen sind einfach: Sie akzeptieren einen einzelnen Parameter beliebigen Typs.

```js
resolveFunc(value); // call on resolved
rejectFunc(reason); // call on rejected
```

Der Parameter `value`, der an `resolveFunc` übergeben wird, kann ein weiteres Promise-Objekt sein, in diesem Fall wird der Zustand des neu erstellten Promises auf das übergebene Promise "eingesperrt" (als Teil des [resolution](#die_resolve_funktion) Promises). Die `rejectFunc` hat Semantiken, die der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw) Anweisung nahe kommen, daher ist `reason` typischerweise eine Instanz von [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Wenn entweder `value` oder `reason` weggelassen wird, wird das Promise mit `undefined` erfüllt/abgelehnt.

Der Abschlusszustand des `executor` hat begrenzten Einfluss auf den Zustand des Promises:

- Der Rückgabewert des `executor` wird ignoriert. `return` Anweisungen innerhalb des `executor` beeinflussen lediglich den Kontrollfluss und ändern, ob ein Teil der Funktion ausgeführt wird, haben jedoch keinen Einfluss auf den Erfüllungswert des Promises. Wenn der `executor` beendet wird und es unmöglich ist, dass `resolveFunc` oder `rejectFunc` in der Zukunft aufgerufen wird (z.B. sind keine asynchronen Aufgaben geplant), bleibt das Promise für immer ausstehend.
- Wenn im `executor` ein Fehler auftritt, wird das Promise abgelehnt, es sei denn, `resolveFunc` oder `rejectFunc` wurde bereits aufgerufen.

> [!NOTE]
> Das Vorhandensein von ausstehenden Promises verhindert nicht, dass das Programm beendet wird. Wenn die Ereignisschleife leer ist, beendet das Programm trotz anhängiger Promises (da diese notwendigerweise für immer ausstehend sind).

Hier ist eine Zusammenfassung des typischen Ablaufs:

1. Zum Zeitpunkt, an dem der Konstruktor das neue `Promise` Objekt erstellt, wird ebenfalls ein entsprechendes Paar von Funktionen für `resolveFunc` und `rejectFunc` erstellt; diese sind mit dem `Promise` Objekt "verbunden".
2. Der `executor` kapselt typischerweise eine asynchrone Operation, die eine Callback-basierte API bietet. Das Callback (das an die ursprüngliche Callback-basierte API übergeben wird) wird innerhalb des `executor` Codes definiert, sodass es Zugriff auf `resolveFunc` und `rejectFunc` hat.
3. Der `executor` wird synchron aufgerufen (sobald das `Promise` erstellt ist) mit den `resolveFunc` und `rejectFunc` Funktionen als Argumenten.
4. Der Code innerhalb des `executor` hat die Gelegenheit, eine Operation durchzuführen. Der eventuale Abschluss der asynchronen Aufgabe wird über die Promise-Instanz durch den Seiteneffekt, der durch `resolveFunc` oder `rejectFunc` verursacht wird, kommuniziert. Der Seiteneffekt besteht darin, dass das `Promise` Objekt "resolved" wird.
   - Wenn `resolveFunc` zuerst aufgerufen wird, wird der übergebene Wert [resolved](#die_resolve_funktion). Das Promise kann ausstehend bleiben (im Falle, dass ein weiteres [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) übergeben wird), erfüllt werden (in den meisten Fällen, wenn ein nicht-thenabler Wert übergeben wird) oder abgelehnt werden (im Fall eines ungültigen Auflösungswerts).
   - Wenn `rejectFunc` zuerst aufgerufen wird, wird das Promise sofort abgelehnt.
   - Sobald eine der Auflösungsfunktionen (`resolveFunc` oder `rejectFunc`) aufgerufen wird, bleibt das Promise resolved. Nur der erste Aufruf von `resolveFunc` oder `rejectFunc` beeinflusst den eventualen Zustand des Promises, und nachfolgende Aufrufe einer der Funktionen können weder den Erfüllungswert/Ablehnungsgrund ändern, noch seinen eventualen Zustand von "erfüllt" auf "abgelehnt" oder umgekehrt ändern.
   - Wenn `executor` durch einen Fehler beendet wird, wird das Promise abgelehnt. Der Fehler wird jedoch ignoriert, wenn eine der Auflösungsfunktionen bereits aufgerufen wurde (sodass das Promise bereits resolved ist).
   - Das Auflösen des Promises führt nicht unbedingt dazu, dass das Promise erfüllt oder abgelehnt wird (d.h. abgeschlossen). Das Promise kann immer noch ausstehend sein, weil es mit einem weiteren thenable aufgelöst wird, aber sein eventualer Zustand wird mit dem des aufgelösten thenable übereinstimmen.
5. Sobald das Promise abgeschlossen ist, ruft es (asynchron) alle weiteren Handler auf, die durch {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} oder {{jsxref("Promise/finally", "finally()")}} assoziiert sind. Der eventuale Erfüllungswert oder Ablehnungsgrund wird bei der Aufrufung der Erfüllungs- und Ablehnungshandler als Eingabeparameter übergeben (siehe [Verkettete Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises)).

Zum Beispiel kann die oben angegebene Callback-basierte `readFile` API in eine Promise-basierte umgewandelt werden.

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

Die `resolve` und `reject` Callbacks sind nur im Gültigkeitsbereich der executor-Funktion verfügbar, was bedeutet, dass Sie nach der Erstellung des Promises keinen Zugriff mehr darauf haben. Wenn Sie das Promise erstellen möchten, bevor Sie entscheiden, wie es aufgelöst werden soll, können Sie stattdessen die Methode {{jsxref("Promise.withResolvers()")}} verwenden, die die `resolve` und `reject` Funktionen bereitstellt.

### Die resolve Funktion

Die `resolve` Funktion hat die folgenden Verhaltensweisen:

- Wenn sie mit dem gleichen Wert aufgerufen wird wie das neu erstellte Promise (das Promise, an das sie "gebunden" ist), wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn sie mit einem nicht-[thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Wert (einem primitiven Wert oder einem Objekt, dessen `then` Eigenschaft nicht aufrufbar ist, einschließlich wenn die Eigenschaft nicht vorhanden ist) aufgerufen wird, wird das Promise sofort mit diesem Wert erfüllt.
- Wenn sie mit einem thenable Wert (einschließlich einer weiteren `Promise` Instanz) aufgerufen wird, wird die thenable Methode `then` gespeichert und in der Zukunft aufgerufen (sie wird immer asynchron aufgerufen). Die `then`-Methode wird mit zwei Callbacks aufgerufen, die zwei neuen Funktionen mit exakt den gleichen Verhaltensweisen wie die `resolveFunc` und `rejectFunc`, die an die executor-Funktion übergeben wurden, sind. Wenn der Aufruf der `then`-Methode einen Fehler auslöst, wird das aktuelle Promise mit dem ausgelösten Fehler abgelehnt.

Im letzten Fall bedeutet dies, dass Code wie:

```js
new Promise((resolve, reject) => {
  resolve(thenable);
});
```

Ungefähr dem folgenden Code entspricht:

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

1. `resolve` wird synchron aufgerufen, sodass ein erneuter Aufruf von `resolve` oder `reject` keine Wirkung hat, selbst wenn die über `anotherPromise.then()` hinzugefügten Handler noch nicht aufgerufen wurden.
2. Die `then` Methode wird asynchron aufgerufen, sodass das Promise niemals sofort aufgelöst wird, wenn ein thenable übergeben wird.

Da `resolve` erneut mit dem übergeben wird, was `thenable.then()` als `value` übergibt, ist die resolver Funktion in der Lage, verschachtelte thenables zu flattenen, bei denen ein thenable seinen `onFulfilled`-Handler mit einem weiteren thenable aufruft. Der Effekt ist, dass der Erfüllungshandler eines echten Promises niemals ein thenable als Erfüllungswert erhält.

## Beispiele

### Umwandlung einer Callback-basierten API in eine Promise-basierte

Um einer Funktion Promise-Funktionalität zu verleihen, lassen Sie sie ein Promise zurückgeben, indem Sie die `resolve` und `reject` Funktionen zur richtigen Zeit aufrufen.

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

Der Aufruf von `resolveFunc` bewirkt, dass das Promise aufgelöst wird, sodass ein erneuter Aufruf von `resolveFunc` oder `rejectFunc` keine Wirkung hat. Das Promise kann jedoch in jedem der Zustände sein: ausstehend, erfüllt oder abgelehnt.

Dieses `pendingResolved` Promise wird zum Zeitpunkt seines Erstellens aufgelöst, da es bereits "eingesperrt" ist, um dem eventualen Zustand des inneren Promises zu entsprechen, und ein späterer Aufruf von `resolveOuter` oder `rejectOuter` oder das Auslösen eines Fehlers im executor hat keine Auswirkungen auf dessen eventualen Zustand. Das innere Promise ist jedoch immer noch ausstehend bis zu 100ms später, sodass auch das äußere Promise ausstehend ist:

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

Dieses `fulfilledResolved` Promise wird in dem Moment erfüllt, in dem es aufgelöst wird, da es mit einem nicht-thenable Wert aufgelöst wird. Wenn es jedoch erstellt wird, ist es ungelöst, da weder `resolve` noch `reject` bisher aufgerufen wurden. Ein ungelöstes Promise ist notwendigerweise ausstehend:

```js
const fulfilledResolved = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("outer");
  }, 100);
});
```

Der Aufruf von `rejectFunc` führt offensichtlich dazu, dass das Promise abgelehnt wird. Es gibt jedoch auch zwei Möglichkeiten, wie das Promise sofort abgelehnt werden kann, selbst wenn der `resolveFunc` Callback aufgerufen wird.

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

- [Polyfill des `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- {{jsxref("Promise.withResolvers()")}}
