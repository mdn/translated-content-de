---
title: Promise() Konstruktor
short-title: Promise()
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`Promise()`**-Konstruktor erstellt {{jsxref("Promise")}}-Objekte. Er wird hauptsächlich verwendet, um Callback-basierte APIs, die noch keine Versprechen unterstützen, in Versprechen zu verpacken.

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

> [!NOTE] > `Promise()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `executor`
  - : Eine {{jsxref("function")}}, die vom Konstruktor ausgeführt wird. Sie erhält zwei Funktionen als Parameter: `resolveFunc` und `rejectFunc`. Alle Fehler, die im `executor` ausgelöst werden, führen dazu, dass das Versprechen abgelehnt wird, und der Rückgabewert wird ignoriert. Die Semantik von `executor` wird im Folgenden näher erläutert.

### Rückgabewert

Wenn über `new` aufgerufen, gibt der `Promise`-Konstruktor ein Versprechen-Objekt zurück. Das Versprechen-Objekt wird _erfüllt_, wenn entweder die Funktion `resolveFunc` oder `rejectFunc` aufgerufen wird. Beachten Sie, dass wenn Sie `resolveFunc` aufrufen und ein anderes Versprechen-Objekt als Argument übergeben, das ursprüngliche Versprechen als "erfüllt" angesehen werden kann, aber noch nicht "abgeschlossen". Weitere Erklärungen finden Sie in der [Promise Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description).

## Beschreibung

Traditionell (vor Versprechen) wurden asynchrone Aufgaben als Callbacks entworfen.

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

Um von der verbesserten Lesbarkeit und den Sprachfunktionen, die Versprechen bieten, zu profitieren, ermöglicht es der `Promise()`-Konstruktor, die Callback-basierte API in eine auf Versprechen basierende zu transformieren.

> [!NOTE]
> Wenn Ihre Aufgabe bereits auf Versprechen basiert, benötigen Sie wahrscheinlich nicht den `Promise()`-Konstruktor.

Der `executor` ist ein benutzerdefinierter Code, der ein Ergebnis in einem Callback mit einem Versprechen verknüpft. Sie, der Programmierer, schreiben den `executor`. Sein Signatur wird erwartet als:

```js
function executor(resolveFunc, rejectFunc) {
  // Typically, some asynchronous operation that accepts a callback,
  // like the `readFile` function above
}
```

`resolveFunc` und `rejectFunc` sind ebenfalls Funktionen und Sie können ihnen beliebige tatsächliche Namen geben. Ihre Signaturen sind einfach: Sie akzeptieren einen einzigen Parameter beliebigen Typs.

```js
resolveFunc(value); // call on resolved
rejectFunc(reason); // call on rejected
```

Der `value` Parameter, der an `resolveFunc` übergeben wird, kann ein anderes Versprechen-Objekt sein, in welchem Fall der Status des neu konstruierten Versprechens "eingefroren" wird auf das übergebene Versprechen (als Teil des [Auflösungs](#die_resolve-funktion)versprechens). Der `rejectFunc` hat eine Semantik, die der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw) Anweisung nahekommt, sodass `reason` typischerweise eine [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)-Instanz ist. Wenn entweder `value` oder `reason` weggelassen wird, wird das Versprechen mit `undefined` erfüllt/abgelehnt.

Der Abschlusszustand des `executor` hat nur begrenzten Einfluss auf den Zustand des Versprechens:

- Der Rückgabewert des `executor` wird ignoriert. `return`-Anweisungen innerhalb des `executor` beeinflussen lediglich den Kontrollfluss und bestimmen, ob ein Teil der Funktion ausgeführt wird, haben jedoch keinen Einfluss auf den Erfüllungswert des Versprechens. Wenn `executor` beendet wird und es unmöglich ist, dass `resolveFunc` oder `rejectFunc` in der Zukunft aufgerufen werden (zum Beispiel keine asynchrone Aufgaben geplant sind), bleibt das Versprechen auf unbestimmte Zeit ausstehend.
- Wenn ein Fehler im `executor` geworfen wird, wird das Versprechen abgelehnt, es sei denn, `resolveFunc` oder `rejectFunc` wurde bereits aufgerufen.

> [!NOTE]
> Die Existenz ausstehender Versprechen verhindert nicht das Beenden des Programms. Wenn die Ereignisschleife leer ist, beendet das Programm trotz aller ausstehenden Versprechen (da diese notwendigerweise auf unbestimmte Zeit bestehen).

Hier ist eine Zusammenfassung des typischen Ablaufs:

1. In dem Moment, in dem der Konstruktor das neue `Promise`-Objekt erzeugt, erzeugt er auch ein entsprechendes Paar von Funktionen für `resolveFunc` und `rejectFunc`; diese sind mit dem `Promise`-Objekt "verbunden".
2. Der `executor` verpackt typischerweise eine asynchrone Operation, die eine Callback-basierte API bietet. Der Callback (derjenige, der der ursprünglichen Callback-basierten API übergeben wurde) wird innerhalb des `executor`-Codes definiert, sodass er Zugriff auf `resolveFunc` und `rejectFunc` hat.
3. Der `executor` wird synchron (sobald das `Promise` konstruiert ist) mit den Funktionen `resolveFunc` und `rejectFunc` als Argumente aufgerufen.
4. Der Code innerhalb des `executor` hat die Möglichkeit, eine Operation durchzuführen. Der eventuelle Abschluss der asynchronen Aufgabe wird mit der Versprechen-Instanz über den Nebeneffekt kommuniziert, der durch `resolveFunc` oder `rejectFunc` verursacht wird. Der Nebeneffekt ist, dass das `Promise`-Objekt "erfüllt" wird.
   - Wenn `resolveFunc` zuerst aufgerufen wird, wird der übergebene Wert [aufgelöst](#die_resolve-funktion). Das Versprechen könnte ausstehend bleiben (im Falle, dass ein anderer [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) übergeben wird), erfüllt werden (in den meisten Fällen, in denen ein nicht-thenabler Wert übergeben wird), oder abgelehnt werden (im Falle eines ungültigen Auflösungswertes).
   - Wenn `rejectFunc` zuerst aufgerufen wird, wird das Versprechen sofort abgelehnt.
   - Sobald eine der Auflösungsfunktionen (`resolveFunc` oder `rejectFunc`) aufgerufen worden ist, bleibt das Versprechen aufgelöst. Nur der erste Aufruf von `resolveFunc` oder `rejectFunc` beeinflusst den endgültigen Zustand des Versprechens, und nachfolgende Aufrufe einer der Funktionen können weder den Erfüllungswert/Ablehnungsgrund ändern noch den endgültigen Zustand von "erfüllt" zu "abgelehnt" oder umgekehrt ändern.
   - Wenn `executor` durch das Werfen eines Fehlers beendet wird, wird das Versprechen abgelehnt. Der Fehler wird jedoch ignoriert, wenn eine der auflösenden Funktionen bereits aufgerufen wurde (damit das Versprechen bereits aufgelöst ist).
   - Das Auflösen des Versprechens führt nicht zwingend dazu, dass das Versprechen erfüllt oder abgelehnt wird (d.h. abgeschlossen). Das Versprechen könnte immer noch ausstehend sein, weil es mit einem anderen thenable aufgelöst wird, aber sein endgültiger Zustand wird dem des aufgelösten thenable entsprechen.
5. Sobald das Versprechen abgeschlossen ist, ruft es (asynchron) alle weiteren Handler auf, die über {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}}, oder {{jsxref("Promise/finally", "finally()")}} verbunden sind. Der endgültige Erfüllungswert oder Ablehnungsgrund wird dem Aufruf der Erfüllungs- und Ablehnungshandler als Eingabeparameter übergeben (siehe [Verkettete Versprechen](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises)).

Beispielsweise kann die Callback-basierte `readFile`-API oben in eine versprechen-basierte API umgewandelt werden.

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

Die `resolve` und `reject` Callbacks sind nur im Bereich der Executor-Funktion verfügbar, was bedeutet, dass Sie nach der Erstellung des Versprechens keinen Zugriff darauf haben. Wenn Sie das Versprechen erstellen möchten, bevor Sie entscheiden, wie es aufgelöst werden soll, können Sie stattdessen die Methode {{jsxref("Promise.withResolvers()")}} verwenden, die die `resolve` und `reject` Funktionen bereitstellt.

### Die resolve-Funktion

Die `resolve`-Funktion hat die folgenden Verhaltensweisen:

- Wenn sie mit demselben Wert wie das neu erstellte Versprechen (das Versprechen, mit dem es "verbunden" ist) aufgerufen wird, wird das Versprechen mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn sie mit einem nicht-[thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Wert (einem primitiven Wert oder einem Objekt, dessen `then`-Eigenschaft nicht aufrufbar ist, einschließlich wenn die Eigenschaft nicht vorhanden ist) aufgerufen wird, wird das Versprechen sofort mit diesem Wert erfüllt.
- Wenn sie mit einem thenable Wert (einschließlich einer anderen `Promise`-Instanz) aufgerufen wird, wird die`then` Methode des thenable gespeichert und in Zukunft aufgerufen (sie wird immer asynchron aufgerufen). Die `then` Methode wird mit zwei Callbacks aufgerufen, die zwei neuen Funktionen entsprechen, die die gleichen Verhaltensweisen wie die `resolveFunc` und `rejectFunc` haben, die der `executor`-Funktion übergeben werden. Wenn der Aufruf der `then`-Methode einen Fehler auslöst, wird das aktuelle Versprechen mit dem geworfenen Fehler abgelehnt.

Im letzten Fall bedeutet das, dass Code wie:

```js
new Promise((resolve, reject) => {
  resolve(thenable);
});
```

Ungefähr dem entspricht:

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

1. `resolve` synchron aufgerufen wird, sodass das erneute Aufrufen von `resolve` oder `reject` keinen Effekt hat, selbst wenn die über `anotherPromise.then()` verbundenen Handler noch nicht aufgerufen wurden.
2. Die `then`-Methode wird asynchron aufgerufen, sodass das Versprechen nie sofort aufgelöst wird, wenn ein thenable übergeben wird.

Da `resolve` erneut mit dem übergeben wird, was `thenable.then()` als `value` übergibt, ist die Resolver-Funktion in der Lage, verschachtelte thenables zu glätten, bei denen ein thenable seinen `onFulfilled`-Handler mit einem weiteren thenable aufruft. Der Effekt ist, dass der Erfüllungs-Handler eines echten Versprechens niemals einen thenable als seinen Erfüllungswert erhält.

## Beispiele

### Eine Callback-basierte API in eine Versprechen-basierte umwandeln

Um einer Funktion Versprechenfunktionalität bereitzustellen, lassen Sie sie ein Versprechen zurückgeben, indem Sie die `resolve` und `reject` Funktionen zum richtigen Zeitpunkt aufrufen.

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

Der Aufruf von `resolveFunc` bewirkt, dass das Versprechen aufgelöst wird, sodass ein erneuter Aufruf von `resolveFunc` oder `rejectFunc` keinen Effekt hat. Das Versprechen kann jedoch in einem der Zustände sein: ausstehend, erfüllt oder abgelehnt.

Dieses `pendingResolved`-Versprechen ist zu dem Zeitpunkt aufgelöst, zu dem es erstellt wird, da es bereits auf den endgültigen Zustand des inneren Versprechens "fixiert" wurde, und das spätere Aufrufen von `resolveOuter` oder `rejectOuter` oder das Werfen eines Fehlers im `executor` hat keinen Einfluss auf seinen endgültigen Zustand. Das innere Versprechen ist jedoch noch ausstehend, bis es 100 ms später erfüllt wird, daher bleibt auch das äußere Versprechen ausstehend:

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

Dieses `fulfilledResolved`-Versprechen wird in dem Moment erfüllt, in dem es aufgelöst wird, da es mit einem nicht-thenablen Wert aufgelöst wird. Wenn es jedoch erstellt wird, ist es ungelöst, da weder `resolve` noch `reject` bisher aufgerufen wurden. Ein ungelöstes Versprechen ist notwendigerweise ausstehend:

```js
const fulfilledResolved = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("outer");
  }, 100);
});
```

Das Aufrufen von `rejectFunc` führt offensichtlich dazu, dass das Versprechen abgelehnt wird. Es gibt jedoch auch zwei Möglichkeiten, das Versprechen sofort abzulehnen, selbst wenn der `resolveFunc`-Callback aufgerufen wird.

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
- [Anleitung zu Promises verwenden](/de/docs/Web/JavaScript/Guide/Using_promises)
- {{jsxref("Promise.withResolvers()")}}
