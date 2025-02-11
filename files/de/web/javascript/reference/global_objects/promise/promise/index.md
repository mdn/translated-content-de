---
title: Promise() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Der **`Promise()`** Konstruktor erstellt {{jsxref("Promise")}} Objekte. Er wird hauptsächlich verwendet, um Callback-basierte APIs, die noch keine Unterstützung für Promises bieten, zu kapseln.

{{InteractiveExample("JavaScript Demo: Promise Constructor", "taller")}}

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

> **Hinweis:** `Promise()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Aufruf ohne `new` führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `executor`
  - : Eine {{jsxref("function")}}, die vom Konstruktor ausgeführt wird. Sie erhält zwei Funktionen als Parameter: `resolveFunc` und `rejectFunc`. Alle Fehler, die in der `executor`-Funktion geworfen werden, führen dazu, dass das Promise abgelehnt wird, und der Rückgabewert wird ignoriert. Die Semantik des `executor` wird im Folgenden detailliert beschrieben.

### Rückgabewert

Wenn der Konstruktor mit `new` aufgerufen wird, gibt der `Promise` Konstruktor ein Promise-Objekt zurück. Das Promise-Objekt wird _aufgelöst_ (resolved), wenn eine der Funktionen `resolveFunc` oder `rejectFunc` aufgerufen wird. Beachten Sie, dass, wenn `resolveFunc` mit einem anderen Promise-Objekt als Argument aufgerufen wird, das ursprüngliche Promise als "aufgelöst" betrachtet werden kann, jedoch immer noch nicht "erledigt" (settled) ist. Weitere Erklärungen finden Sie in der [Promise-Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description).

## Beschreibung

Traditionell (vor Promises) wurden asynchrone Aufgaben mit Callbacks gestaltet.

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

Um von den verbesserten Lesbarkeits- und Sprachfeatures, die Promises bieten, zu profitieren, ermöglicht der `Promise()`-Konstruktor, eine Callback-basierte API in eine Promise-basierte umzuwandeln.

> [!NOTE]
> Wenn Ihre Aufgabe bereits auf Promises basiert, benötigen Sie den `Promise()`-Konstruktor wahrscheinlich nicht.

Der `executor` ist benutzerdefinierter Code, der ein Ergebnis eines Callbacks an ein Promise bindet. Der Programmierer schreibt den `executor`. Seine Signatur wird wie folgt erwartet:

```js
function executor(resolveFunc, rejectFunc) {
  // Typically, some asynchronous operation that accepts a callback,
  // like the `readFile` function above
}
```

`resolveFunc` und `rejectFunc` sind ebenfalls Funktionen, und Sie können ihnen beliebige Namen geben. Ihre Signaturen sind einfach: Sie akzeptieren jeweils einen einzigen Parameter beliebigen Typs.

```js
resolveFunc(value); // call on resolved
rejectFunc(reason); // call on rejected
```

Der an `resolveFunc` übergebene `value`-Parameter kann ein anderes Promise-Objekt sein, in welchem Fall der Zustand des neu konstruierten Promises an das übergebene Promise "gebunden" ist (im Rahmen des Promise [Resolution](#die_resolve-funktion)). `rejectFunc` hat semantisch eine Ähnlichkeit mit der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung, weshalb `reason` typischerweise eine [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)-Instanz ist. Wenn entweder `value` oder `reason` weggelassen wird, wird das Promise mit `undefined` erfüllt bzw. abgelehnt.

Der Abschlusszustand des `executor` hat nur begrenzte Auswirkungen auf den Zustand des Promises:

- Der Rückgabewert des `executor` wird ignoriert. `return`-Anweisungen innerhalb des `executor` beeinflussen lediglich den Kontrollfluss und ob Teile der Funktion ausgeführt werden, haben jedoch keinen Effekt auf den Erfüllungswert des Promises. Wenn der `executor` beendet wird und es unmöglich ist, dass `resolveFunc` oder `rejectFunc` in der Zukunft aufgerufen werden (zum Beispiel, weil keine asynchronen Aufgaben geplant sind), bleibt das Promise für immer ausstehend (pending).
- Wenn im `executor` ein Fehler geworfen wird, wird das Promise abgelehnt, es sei denn, `resolveFunc` oder `rejectFunc` wurde bereits aufgerufen.

> [!NOTE]
> Die Existenz von ausstehenden Promises verhindert nicht, dass das Programm beendet wird. Wenn die Event-Schleife leer ist, wird das Programm beendet, selbst wenn es ausstehende Promises gibt (da diese notwendigerweise auf ewig ausstehen).

Hier ist eine Übersicht über den typischen Ablauf:

1. Beim Erstellen des neuen `Promise`-Objekts generiert der Konstruktor gleichzeitig ein entsprechendes Paar von Funktionen für `resolveFunc` und `rejectFunc`; diese Funktionen sind eng mit dem `Promise`-Objekt verbunden.
2. `executor` kapselt typischerweise eine asynchrone Operation, die eine Callback-basierte API bietet. Das Callback (das der ursprünglichen Callback-basierten API übergeben wird) wird innerhalb des `executor`-Codes definiert, sodass es Zugriff auf `resolveFunc` und `rejectFunc` hat.
3. Der `executor` wird synchron (sofort nachdem das `Promise` erstellt wurde) mit den Funktionen `resolveFunc` und `rejectFunc` als Argumente aufgerufen.
4. Der Code innerhalb des `executor` hat die Möglichkeit, eine Operation auszuführen. Das endgültige Ergebnis der asynchronen Aufgabe wird mit der Promise-Instanz durch den Seiteneffekt kommuniziert, der durch `resolveFunc` oder `rejectFunc` verursacht wird. Der Seiteneffekt besteht darin, dass das `Promise`-Objekt "aufgelöst" wird.
   - Wenn `resolveFunc` zuerst aufgerufen wird, wird der übergebene Wert [resolved](#die_resolve-funktion). Das Promise kann ausstehend bleiben (falls ein anderer [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) übergeben wird), erfüllt werden (in den meisten Fällen, in denen ein nicht-thenabler Wert übergeben wird) oder abgelehnt werden (im Falle eines ungültigen Auflösungswerts).
   - Wenn `rejectFunc` zuerst aufgerufen wird, wird das versprochene Ergebnis sofort abgelehnt.
   - Sobald einer der beiden Auflösungsfunktionen (`resolveFunc` oder `rejectFunc`) aufgerufen wurde, bleibt das Promise aufgelöst. Nur der erste Aufruf einer der beiden Funktionen beeinflusst den endgültigen Zustand des Promises; spätere Aufrufe haben keine Wirkung darauf.
   - Wenn der `executor` beendet wird, indem ein Fehler geworfen wird, wird das Promise abgelehnt. Der Fehler wird jedoch ignoriert, wenn eine der Auflösungsfunktionen bereits aufgerufen wurde (sodass das Promise bereits aufgelöst ist).
   - Die Auflösung des Promises führt nicht unbedingt dazu, dass das Promise erfüllt oder abgelehnt (d.h. abgeschlossen) wird. Es kann immer noch ausstehend sein, da es mit einem weiteren Thenable aufgelöst wurde. Der endgültige Zustand wird jedoch an den Zustand des dann aufgelösten Thenables angepasst.
5. Sobald das Promise abgeschlossen ist, ruft es (asynchron) alle weiteren Handler auf, die mit {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} oder {{jsxref("Promise/finally", "finally()")}} verknüpft sind. Der endgültige Erfüllungswert oder der Ablehnungsgrund wird bei der Ausführung von Erfüllungs- und Ablehnungs-Handlern als Eingabeparameter übergeben (siehe [Verkettete Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises)).

Zum Beispiel kann die oben erwähnte Callback-basierte `readFile` API in eine Promise-basierte umgewandelt werden.

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

Die `resolve`- und `reject`-Callbacks sind nur innerhalb des Geltungsbereichs der Executor-Funktion verfügbar, was bedeutet, dass Sie darauf nicht mehr zugreifen können, nachdem das Promise erstellt wurde. Wenn Sie das Promise erstellen möchten, bevor Sie entscheiden, wie es aufgelöst wird, können Sie stattdessen die Methode {{jsxref("Promise.withResolvers()")}} verwenden, die die `resolve`- und `reject`-Funktionen bereitstellt.

### Die resolve-Funktion

Die `resolve`-Funktion hat die folgenden Verhaltensweisen:

- Wenn sie mit demselben Wert wie das neu erstellte Promise (das Promise, mit dem sie "verbunden" ist) aufgerufen wird, wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn sie mit einem nicht-[thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Wert (einem primitiven Wert oder einem Objekt, dessen `then`-Eigenschaft nicht aufrufbar ist oder fehlt) aufgerufen wird, wird das Promise sofort mit diesem Wert erfüllt.
- Wenn sie mit einem thenable Wert (einschließlich einer anderen `Promise`-Instanz) aufgerufen wird, wird die Methode `then` dieses Thenables gespeichert und in der Zukunft aufgerufen (immer asynchron). Die `then`-Methode wird mit zwei Callbacks aufgerufen, die dieselben Verhaltensweisen wie die an den `executor` übergebenen `resolveFunc`- und `rejectFunc`-Funktionen haben. Wenn beim Aufrufen der `then`-Methode ein Fehler auftritt, wird das aktuelle Promise mit diesem Fehler abgelehnt.

Im letzten Fall bedeutet dies, dass der folgende Code:

```js
new Promise((resolve, reject) => {
  resolve(thenable);
});
```

in etwa gleichbedeutend ist mit:

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

Mit der Ausnahme, dass im Fall von `resolve(thenable)`:

1. `resolve` synchron aufgerufen wird, sodass ein erneutes Aufrufen von `resolve` oder `reject` keinerlei Wirkung hat, selbst wenn die durch `anotherPromise.then()` angehängten Handler noch nicht aufgerufen wurden.
2. Die `then`-Methode asynchron aufgerufen wird, sodass das Promise nie sofort aufgelöst wird, wenn ein Thenable übergeben wird.

Da `resolve` erneut mit dem Wert aufgerufen wird, den `thenable.then()` übergibt, kann die Resolver-Funktion verschachtelte Thenables "abflachen", wobei ein Thenable seinen `onFulfilled`-Handler mit einem anderen Thenable aufruft. Das Ergebnis ist, dass der Erfüllungs-Handler eines echten Promises niemals einen Thenable als Erfüllungswert erhält.

## Beispiele

### Eine Callback-basierte API in eine Promise-basierte umwandeln

Um einer Funktion Promise-Funktionalität zu geben, lassen Sie sie ein Promise durch Aufruf der `resolve`- und `reject`-Funktionen zu den passenden Zeitpunkten zurückgeben.

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

### Wirkung des Aufrufs von resolveFunc

Der Aufruf von `resolveFunc` führt dazu, dass das Promise aufgelöst wird, sodass ein erneutes Aufrufen von `resolveFunc` oder `rejectFunc` keine Wirkung mehr hat. Das Promise kann jedoch in irgendeinem der Zustände sein: ausstehend, erfüllt oder abgelehnt.

Dieses `pendingResolved`-Promise wird im Moment seiner Erstellung als aufgelöst angesehen, da es bereits "gebunden" ist, den späteren Zustand des inneren Promises zu übernehmen, und spätere Aufrufe von `resolveOuter`, `rejectOuter` oder das Werfen eines Fehlers im `executor` haben keinen Einfluss mehr auf seinen endgültigen Zustand. Das innere Promise bleibt jedoch bis 100ms später ausstehend, sodass das äußere Promise ebenfalls ausstehend bleibt:

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

Dieses `fulfilledResolved`-Promise wird erfüllt, sobald es aufgerufen wird, weil es mit einem nicht-thenable Wert aufgelöst wurde. Beim Erstellen ist es jedoch noch nicht aufgelöst, da weder `resolve` noch `reject` aufgerufen wurden. Ein nicht aufgelöstes Promise ist notwendigerweise ausstehend:

```js
const fulfilledResolved = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("outer");
  }, 100);
});
```

Durch den Aufruf von `rejectFunc` wird das Promise offensichtlich abgelehnt. Es gibt jedoch auch zwei Möglichkeiten, das Promise sofort abzulehnen, selbst wenn der `resolveFunc`-Callback aufgerufen wird.

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
