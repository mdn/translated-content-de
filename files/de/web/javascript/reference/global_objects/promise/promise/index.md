---
title: Promise()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Der **`Promise()`**-Konstruktor erstellt {{jsxref("Promise")}}-Objekte. Er wird hauptsächlich verwendet, um callback-basierte APIs zu kapseln, die noch keine Unterstützung für Promises bieten.

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

> **Hinweis:** `Promise()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, ihn ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `executor`
  - : Eine {{jsxref("function")}}, die durch den Konstruktor ausgeführt wird. Sie erhält zwei Funktionen als Parameter: `resolveFunc` und `rejectFunc`. Alle im `executor` geworfenen Fehler führen dazu, dass das Promise abgelehnt wird, und der Rückgabewert wird ignoriert. Die Semantik von `executor` wird unten ausführlich beschrieben.

### Rückgabewert

Wenn er über `new` aufgerufen wird, gibt der `Promise`-Konstruktor ein Promise-Objekt zurück. Das Promise-Objekt wird _erfüllt_, wenn entweder die Funktionen `resolveFunc` oder `rejectFunc` aufgerufen werden. Beachten Sie, dass wenn Sie `resolveFunc` aufrufen und ein anderes Promise-Objekt als Argument übergeben, das ursprüngliche Promise als "erfüllt", aber noch nicht als "erledigt" betrachtet werden kann. Weitere Erklärungen finden Sie in der [Beschreibung von Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description).

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

Um von der Verbesserung der Lesbarkeit und den durch Promises gebotenen Sprachfeatures zu profitieren, ermöglicht der `Promise()`-Konstruktor die Umwandlung einer callback-basierten API in eine promise-basierte API.

> [!NOTE]
> Wenn Ihre Aufgabe bereits Promise-basiert ist, benötigen Sie wahrscheinlich nicht den `Promise()`-Konstruktor.

Der `executor` ist ein benutzerdefinierter Code, der ein Ergebnis in einem Callback an ein Promise bindet. Sie, der Programmierer, schreiben den `executor`. Sein erwartetes Funktionsprofil ist:

```js
function executor(resolveFunc, rejectFunc) {
  // Typically, some asynchronous operation that accepts a callback,
  // like the `readFile` function above
}
```

`resolveFunc` und `rejectFunc` sind ebenfalls Funktionen, und Sie können ihnen beliebige tatsächliche Namen geben. Ihre Profile sind einfach: Sie akzeptieren einen einzelnen Parameter beliebigen Typs.

```js
resolveFunc(value); // call on resolved
rejectFunc(reason); // call on rejected
```

Der an `resolveFunc` übergebene `value`-Parameter kann ein weiteres Promise-Objekt sein, in diesem Fall wird der Status des neu konstruierten Promises an das übergebene Promise "gebunden" (als Teil des [Resolution](#die_resolve-funktion) Promise). `rejectFunc` hat eine Semantik, die der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung nahekommt, daher ist `reason` typischerweise eine Instanz von [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Wenn entweder `value` oder `reason` weggelassen wird, wird das Promise mit `undefined` erfüllt/abgelehnt.

Der Completion-State des `executor` hat nur begrenzten Einfluss auf den State des Promises:

- Der Rückgabewert des `executor` wird ignoriert. `return`-Anweisungen innerhalb des `executor` beeinflussen lediglich den Kontrollfluss und ändern, ob ein Teil der Funktion ausgeführt wird, haben aber keinen Einfluss auf den Erfüllungswert des Promises. Wenn `executor` beendet wird und es unmöglich ist, dass `resolveFunc` oder `rejectFunc` in der Zukunft aufgerufen werden (beispielsweise sind keine asynchronen Aufgaben geplant), bleibt das Promise für immer ausstehend.
- Wenn im `executor` ein Fehler geworfen wird, wird das Promise abgelehnt, es sei denn, `resolveFunc` oder `rejectFunc` wurden bereits aufgerufen.

> [!NOTE]
> Die Existenz schwebender Promises verhindert nicht, dass das Programm beendet wird. Wenn die Ereignisschleife leer ist, endet das Programm trotz schwebender Promises (da diese notwendigerweise für immer schwebend sind).

Hier ist eine Zusammenfassung des typischen Ablaufs:

1. Zu dem Zeitpunkt, an dem der Konstruktor das neue `Promise`-Objekt erzeugt, erzeugt er auch ein entsprechendes Paar von Funktionen für `resolveFunc` und `rejectFunc`; diese sind an das `Promise`-Objekt "gebunden".
2. Der `executor` wickelt typischerweise eine asynchrone Operation ab, die eine callback-basierte API bietet. Der Callback (derjenige, der an die ursprüngliche callback-basierte API übergeben wurde) wird innerhalb des `executor`-Codes definiert, sodass er Zugriff auf `resolveFunc` und `rejectFunc` hat.
3. Der `executor` wird synchron (sobald das `Promise` konstruiert ist) mit den Funktionen `resolveFunc` und `rejectFunc` als Argumente aufgerufen.
4. Der Code im `executor` hat die Möglichkeit, eine Operation durchzuführen. Der eventuelle Abschluss der asynchronen Aufgabe wird mit der Promise-Instanz über den Seiteneffekt kommuniziert, der durch `resolveFunc` oder `rejectFunc` verursacht wird. Der Seiteneffekt ist, dass das `Promise`-Objekt "erfüllt" wird.
   - Wenn `resolveFunc` zuerst aufgerufen wird, wird der übergebene Wert [erfüllt](#die_resolve-funktion). Das Promise kann schwebend bleiben (im Falle einer anderen übergebenen [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables)), erfüllt werden (in den meisten Fällen, in denen ein nicht-thenable Wert übergeben wird) oder abgelehnt werden (im Falle eines ungültigen Erfüllungswertes).
   - Wenn `rejectFunc` zuerst aufgerufen wird, wird das Promise sofort abgelehnt.
   - Sobald eine der Erfüllungsfunktionen (`resolveFunc` oder `rejectFunc`) aufgerufen wurde, bleibt das Promise erfüllt. Nur der erste Aufruf von `resolveFunc` oder `rejectFunc` beeinflusst den endgültigen Zustand des Promises, und nachfolgende Aufrufe einer der beiden Funktionen können weder den Erfüllungswert/Ablehnungsgrund ändern noch seinen endgültigen Zustand von "erfüllt" zu "abgelehnt" oder umgekehrt umschalten.
   - Wenn `executor` durch das Werfen eines Fehlers beendet wird, wird das Promise abgelehnt. Der Fehler wird jedoch ignoriert, wenn eine der Erfüllungsfunktionen bereits aufgerufen wurde (sodass das Promise bereits erfüllt ist).
   - Das Erfüllen des Promises führt nicht unbedingt dazu, dass das Promise erfüllt oder abgelehnt (d.h. abgeschlossen) wird. Das Promise kann weiterhin schwebend sein, weil es mit einer anderen Thenable erfüllt wurde, aber sein endgültiger Zustand wird dem der erfüllten Thenable entsprechen.
5. Sobald sich das Promise erledigt, ruft es (asynchron) alle weiteren Handler auf, die über {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} oder {{jsxref("Promise/finally", "finally()")}} assoziiert sind. Der endgültige Erfüllungswert oder der Ablehnungsgrund wird als Eingabeparameter an die Erfüllungs- und Ablehnungshandler übergeben (siehe [Verkettete Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises)).

Zum Beispiel kann die oben gezeigte callback-basierte `readFile`-API in eine promise-basierte umgewandelt werden.

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

Die `resolve`- und `reject`-Callbacks sind nur innerhalb des Gültigkeitsbereichs der Executor-Funktion verfügbar, was bedeutet, dass Sie nach der Konstruktion des Promises keinen Zugriff mehr auf sie haben. Wenn Sie das Promise konstruieren möchten, bevor Sie entscheiden, wie es gelöst wird, können Sie stattdessen die Methode {{jsxref("Promise.withResolvers()")}} verwenden, die die `resolve`- und `reject`-Funktionen offenlegt.

### Die resolve-Funktion

Die `resolve`-Funktion hat folgende Verhaltensweisen:

- Wenn sie mit dem gleichen Wert wie dem neu erstellten Promise (dem Promise, an das es "gebunden" ist) aufgerufen wird, wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn sie mit einem nicht-[thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Wert (ein primitiver Wert oder ein Objekt, dessen `then`-Eigenschaft nicht aufrufbar ist, einschließlich wenn die Eigenschaft nicht vorhanden ist) aufgerufen wird, wird das Promise sofort mit diesem Wert erfüllt.
- Wenn sie mit einem thenable Wert (einschließlich einer anderen `Promise`-Instanz) aufgerufen wird, dann wird die `then`-Methode des Thenables gespeichert und in der Zukunft aufgerufen (sie wird immer asynchron aufgerufen). Die `then`-Methode wird mit zwei Callbacks aufgerufen, das sind zwei neue Funktionen mit genau denselben Verhaltensweisen wie die `resolveFunc` und `rejectFunc`, die an die `executor`-Funktion übergeben werden. Wenn der Aufruf der `then`-Methode einen Fehler wirft, wird das aktuelle Promise mit dem geworfenen Fehler abgelehnt.

Im letzten Fall bedeutet das Code wie:

```js
new Promise((resolve, reject) => {
  resolve(thenable);
});
```

Ist ungefähr gleichwertig mit:

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

Außer dass im `resolve(thenable)` Fall:

1. `resolve` wird synchron aufgerufen, sodass der erneute Aufruf von `resolve` oder `reject` keine Auswirkungen hat, selbst wenn die über `anotherPromise.then()` angehängten Handler noch nicht aufgerufen wurden.
2. Die `then`-Methode wird asynchron aufgerufen, sodass das Promise niemals sofort erfüllt wird, wenn ein Thenable übergeben wird.

Da `resolve` erneut mit dem, was `thenable.then()` als `value` übergibt, aufgerufen wird, ist die Resolver-Funktion in der Lage, geschachtelte Thenables abzuflachen, bei denen ein Thenable seinen `onFulfilled`-Handler mit einem weiteren Thenable aufruft. Der Effekt ist, dass der Erfüllungs-Handler eines echten Promises niemals einen Thenable als Erfüllungswert erhält.

## Beispiele

### Eine callback-basierte API in eine promise-basierte umwandeln

Um einer Funktion Promise-Funktionalität zu geben, lassen Sie sie ein Promise zurückgeben, indem Sie die Funktionen `resolve` und `reject` zu den richtigen Zeitpunkten aufrufen.

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

Der Aufruf von `resolveFunc` führt dazu, dass das Promise erfüllt wird, sodass der erneute Aufruf von `resolveFunc` oder `rejectFunc` keine Auswirkungen hat. Das Promise kann jedoch in jedem der Zustände sein: ausstehend, erfüllt oder abgelehnt.

Dieses `pendingResolved`-Promise wird in dem Moment erfüllt, in dem es erstellt wird, da es bereits "gebunden" wurde, um den eventuellen Zustand des inneren Promises zu entsprechen, und der spätere Aufruf von `resolveOuter` oder `rejectOuter` oder das Werfen eines Fehlers im Executor hat keine Auswirkungen auf dessen endgültigen Zustand. Das innere Promise wird jedoch erst 100ms später erfüllt, so dass das äußere Promise ebenfalls ausstehend ist:

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

Dieses `fulfilledResolved`-Promise wird in dem Moment erfüllt, in dem es erfüllt wird, da es mit einem nicht-thenable Wert erfüllt wird. Wenn es jedoch erstellt wird, ist es unerfüllt, da weder `resolve` noch `reject` bisher aufgerufen wurden. Ein unerfülltes Promise ist notwendigerweise ausstehend:

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
- [Leitfaden zur Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- {{jsxref("Promise.withResolvers()")}}
