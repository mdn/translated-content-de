---
title: Promise() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Der **`Promise()`** Konstruktor erstellt {{jsxref("Promise")}} Objekte. Er wird hauptsächlich verwendet, um callback-basierte APIs, die nicht bereits Versprechungen unterstützen, zu kapseln.

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

> **Hinweis:** `Promise()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `executor`
  - : Eine {{jsxref("function")}}, die vom Konstruktor ausgeführt wird. Sie erhält zwei Funktionen als Parameter: `resolveFunc` und `rejectFunc`. Alle im `executor` ausgelösten Fehler führen dazu, dass das Versprechen abgelehnt wird, und der Rückgabewert wird ignoriert. Die Semantik des `executor` wird unten näher erläutert.

### Rückgabewert

Wenn über `new` aufgerufen, gibt der `Promise`-Konstruktor ein Versprechen-Objekt zurück. Das Versprechen-Objekt wird _erfüllt_, wenn entweder die Funktion `resolveFunc` oder `rejectFunc` aufgerufen wird. Beachten Sie, dass, wenn Sie `resolveFunc` aufrufen und ein anderes Versprechen-Objekt als Argument übergeben, das ursprüngliche Versprechen als "erfüllt" bezeichnet werden kann, aber immer noch nicht "erledigt" ist. Siehe die [Promise-Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) für weitere Erklärungen.

## Beschreibung

Traditionell (vor Versprechungen) wurden asynchrone Aufgaben als Callbacks gestaltet.

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

Um die Lesbarkeit und die Sprachfunktionen zu nutzen, die von Versprechungen angeboten werden, ermöglicht der `Promise()` Konstruktor, die callback-basierte API in eine Versprechen-basierte API umzuwandeln.

> [!NOTE]
> Wenn Ihre Aufgabe bereits auf Versprechungen basiert, benötigen Sie wahrscheinlich nicht den `Promise()` Konstruktor.

Der `executor` ist benutzerdefinierter Code, der ein Ergebnis in einem Callback mit einem Versprechen verbindet. Sie, der Programmierer, schreiben den `executor`. Seine Signatur wird erwartet als:

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

Der `value`-Parameter, der an `resolveFunc` übergeben wird, kann ein weiteres Versprechen-Objekt sein, in welchem Fall der Zustand des neu konstruierten Versprechens an das übergebene Versprechen "gebunden" wird (als Teil des [resolution](#die_resolve_funktion) Versprechens). Die `rejectFunc` hat eine Semantik, die der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw) Anweisung ähnlich ist, daher ist `reason` typischerweise eine [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) Instanz. Wenn entweder `value` oder `reason` ausgelassen wird, wird das Versprechen mit `undefined` erfüllt/abgelehnt.

Der Abschlusszustand des `executor` hat begrenzten Einfluss auf den Zustand des Versprechens:

- Der Rückgabewert des `executor` wird ignoriert. `return` Anweisungen innerhalb des `executor` beeinflussen lediglich den Kontrollfluss und ändern, ob ein Teil der Funktion ausgeführt wird, haben jedoch keinen Einfluss auf den Erfüllungswert des Versprechens. Wenn der `executor` endet und es unmöglich ist, dass `resolveFunc` oder `rejectFunc` in der Zukunft aufgerufen wird (zum Beispiel, wenn keine asynchronen Aufgaben geplant sind), bleibt das Versprechen für immer ausstehend.
- Wenn im `executor` ein Fehler geworfen wird, wird das Versprechen abgelehnt, es sei denn, `resolveFunc` oder `rejectFunc` wurde bereits aufgerufen.

> [!NOTE]
> Die Existenz von ausstehenden Versprechungen verhindert nicht, dass das Programm beendet wird. Wenn die Ereignisschleife leer ist, beendet das Programm trotz aller ausstehenden Versprechungen (da diese notwendigerweise für immer ausstehend sind).

Hier ist eine Zusammenfassung des typischen Ablaufs:

1. Zum Zeitpunkt, an dem der Konstruktor das neue `Promise`-Objekt generiert, erzeugt es ebenfalls ein entsprechendes Funktionspaar für `resolveFunc` und `rejectFunc`; diese sind an das `Promise`-Objekt "gebunden".
2. `executor` kapselt typischerweise eine asynchrone Operation, die eine callback-basierte API bereitstellt. Der Callback (der an die ursprüngliche callback-basierte API übergeben wird) wird im Code des `executor` definiert, sodass er Zugriff auf `resolveFunc` und `rejectFunc` hat.
3. Der `executor` wird synchron (sofort nach der Konstruktion des `Promise`) mit den Funktionen `resolveFunc` und `rejectFunc` als Argumenten aufgerufen.
4. Der Code im `executor` hat die Möglichkeit, eine Operation auszuführen. Der eventuelle Abschluss der asynchronen Aufgabe wird mit der Instanz des Versprechens über den Seiteneffekt mitgeteilt, der durch `resolveFunc` oder `rejectFunc` verursacht wird. Der Seiteneffekt ist, dass das `Promise`-Objekt "erfüllt" wird.
   - Wenn `resolveFunc` zuerst aufgerufen wird, wird der übergebene Wert [gelöst](#die_resolve_funktion). Das Versprechen kann schwebend bleiben (falls ein anderes [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) übergeben wird), erfüllt werden (in den meisten Fällen, in denen ein nicht-thenable Wert übergeben wird) oder abgelehnt werden (im Falle eines ungültigen Lösungswerts).
   - Wenn `rejectFunc` zuerst aufgerufen wird, wird das Versprechen sofort abgelehnt.
   - Sobald eine der auflösenden Funktionen (`resolveFunc` oder `rejectFunc`) aufgerufen wird, bleibt das Versprechen erfüllt. Nur der erste Aufruf von `resolveFunc` oder `rejectFunc` beeinflusst den eventualen Zustand des Versprechens, und nachfolgende Aufrufe einer der Funktionen können den Erfüllungswert/Ablehnungsgrund weder ändern noch seinen eventualen Zustand von "erfüllt" zu "abgelehnt" oder umgekehrt umschalten.
   - Wenn der `executor` durch das Werfen eines Fehlers endet, wird das Versprechen abgelehnt. Der Fehler wird jedoch ignoriert, wenn eine der auflösenden Funktionen bereits aufgerufen wurde (sodass das Versprechen bereits erfüllt ist).
   - Die Erfüllung des Versprechens führt nicht notwendigerweise dazu, dass das Versprechen erfüllt oder abgelehnt wird (d.h. abgeschlossen). Das Versprechen kann immer noch schwebend sein, weil es mit einem anderen thenable gelöst wurde, aber sein eventualer Zustand wird dem des gelösten thenable entsprechen.
5. Sobald das Versprechen abgeschlossen ist, ruft es (asynchron) alle weiteren Handler auf, die über {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} oder {{jsxref("Promise/finally", "finally()")}} assoziiert sind. Der eventuale Erfüllungswert oder Ablehnungsgrund wird der Aufrufung der Erfüllungs- und Ablehnungs-Handler als Eingabeparameter übergeben (siehe [Verkettete Versprechen](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises)).

Beispielsweise kann die callback-basierte `readFile` API oben in eine Versprechen-basierte API umgewandelt werden.

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

Die `resolve` und `reject` Callbacks sind nur im Geltungsbereich der executor Funktion verfügbar, was bedeutet, dass Sie nach der Konstruktion des Versprechens nicht mehr auf sie zugreifen können. Wenn Sie das Versprechen konstruieren möchten, bevor Sie entscheiden, wie es erfüllt werden soll, können Sie stattdessen die Methode {{jsxref("Promise.withResolvers()")}} verwenden, die die `resolve` und `reject` Funktionen sichtbar macht.

### Die resolve Funktion

Die `resolve` Funktion hat die folgenden Verhaltensweisen:

- Wenn sie mit demselben Wert aufgerufen wird wie das neu erstellte Versprechen (das Versprechen, an das sie "gebunden" ist), wird das Versprechen mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn sie mit einem nicht-[thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Wert aufgerufen wird (einem primitiven oder einem Objekt, dessen `then` Eigenschaft nicht aufrufbar ist, einschließlich wenn die Eigenschaft nicht vorhanden ist), wird das Versprechen sofort mit diesem Wert erfüllt.
- Wenn sie mit einem thenable Wert (einschließlich einer anderen `Promise` Instanz) aufgerufen wird, wird die `then` Methode des thenables gespeichert und in Zukunft aufgerufen (sie wird immer asynchron aufgerufen). Die `then` Methode wird mit zwei Callbacks aufgerufen, die zwei neue Funktionen sind, mit exakt demselben Verhalten wie die `resolveFunc` und `rejectFunc`, die an die executor Funktion übergeben werden. Wenn der Aufruf der `then` Methode fehlschlägt, wird das aktuelle Versprechen mit dem geworfenen Fehler abgelehnt.

Im letzten Fall bedeutet dies, dass der Code wie:

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

1. `resolve` wird synchron aufgerufen, sodass das erneute Aufrufen von `resolve` oder `reject` keine Wirkung hat, auch wenn die Handler, die durch `anotherPromise.then()` angefügt wurden, noch nicht aufgerufen wurden.
2. Die `then` Methode wird asynchron aufgerufen, sodass das Versprechen niemals sofort erfüllt wird, wenn ein thenable übergeben wird.

Da `resolve` erneut mit dem übergebenen Wert von `thenable.then()` aufgerufen wird, kann die Resolverfunktion geschachtelte thenables abflachen, bei denen ein thenable seinen `onFulfilled` Handler mit einem anderen thenable aufruft. Der Effekt ist, dass der Erfüllungshandler eines echten Versprechens niemals ein thenable als seinen Erfüllungswert erhält.

## Beispiele

### Umwandlung einer callback-basierten API in eine versprechenbasierte

Um einer Funktion Versprechen-Funktionalität zu bieten, lassen Sie sie ein Versprechen zurückgeben, indem Sie die `resolve` und `reject` Funktionen zu den richtigen Zeiten aufrufen.

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

### Wirkung des Aufrufens von resolveFunc

Das Aufrufen von `resolveFunc` bewirkt, dass das Versprechen gelöst wird, sodass das erneute Aufrufen von `resolveFunc` oder `rejectFunc` keine Wirkung hat. Das Versprechen kann jedoch in einem der Zustände sein: ausstehend, erfüllt oder abgelehnt.

Dieses `pendingResolved` Versprechen wird zu dem Zeitpunkt gelöst, an dem es erstellt wird, weil es bereits auf den eventualen Zustand des inneren Versprechens "festgelegt" wurde, und das spätere Aufrufen von `resolveOuter` oder `rejectOuter` oder das Werfen eines Fehlers im executor hat keinen Einfluss auf seinen eventualen Zustand. Das innere Versprechen ist jedoch noch ausstehend, bis 100 ms später, daher ist das äußere Versprechen ebenfalls ausstehend:

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

Dieses `fulfilledResolved` Versprechen wird in dem Moment erfüllt, in dem es gelöst wird, weil es mit einem nicht-thenable Wert gelöst wird. Wenn es jedoch erstellt wird, ist es ungelöst, da weder `resolve` noch `reject` aufgerufen wurden. Ein ungelöstes Versprechen ist notwendigerweise ausstehend:

```js
const fulfilledResolved = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("outer");
  }, 100);
});
```

Das Aufrufen von `rejectFunc` führt offensichtlich dazu, dass das Versprechen abgelehnt wird. Es gibt jedoch auch zwei Möglichkeiten, das Versprechen sofort abzulehnen, auch wenn der `resolveFunc` Callback aufgerufen wird.

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
- [Verwendung von Versprechungen](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- {{jsxref("Promise.withResolvers()")}}
