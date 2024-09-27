---
title: Promise()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Der **`Promise()`**-Konstruktor erstellt {{jsxref("Promise")}}-Objekte. Er wird hauptsächlich verwendet, um callback-basierte APIs, die nicht bereits Promises unterstützen, in solche umzuwandeln.

{{EmbedInteractiveExample("pages/js/promise-constructor.html", "taller")}}

## Syntax

```js-nolint
new Promise(executor)
```

> **Note:** `Promise()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `executor`
  - : Eine {{jsxref("function")}}, die vom Konstruktor ausgeführt wird. Sie erhält zwei Funktionen als Parameter: `resolveFunc` und `rejectFunc`. Jegliche Fehler, die im `executor` geworfen werden, führen dazu, dass das Promise abgelehnt wird, und der Rückgabewert wird ignoriert. Die Semantik des `executor` wird unten detailliert beschrieben.

### Rückgabewert

Wenn der Konstruktor über `new` aufgerufen wird, gibt er ein Promise-Objekt zurück. Das Promise-Objekt wird _aufgelöst_, sobald eine der Funktionen `resolveFunc` oder `rejectFunc` aufgerufen wird. Beachten Sie, dass wenn Sie `resolveFunc` oder `rejectFunc` aufrufen und ein anderes `Promise`-Objekt als Argument übergeben, es als "aufgelöst" bezeichnet werden kann, aber noch nicht "abgeschlossen". Siehe die [Promise-Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) für mehr Erklärungen.

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

Um die Lesbarkeitsverbesserung und Sprachfunktionen zu nutzen, die Promises bieten, ermöglicht der `Promise()`-Konstruktor die Umwandlung einer callback-basierten API in eine Promise-basierte.

> [!NOTE]
> Wenn Ihre Aufgabe bereits auf Promises basiert, benötigen Sie wahrscheinlich nicht den `Promise()`-Konstruktor.

Der `executor` ist benutzerdefinierter Code, der ein Ergebnis in einem Callback mit einem Promise verknüpft. Sie, der Programmierer, schreiben den `executor`. Sein Signaturformat wird erwartet als:

```js
function executor(resolveFunc, rejectFunc) {
  // Typically, some asynchronous operation that accepts a callback,
  // like the `readFile` function above
}
```

`resolveFunc` und `rejectFunc` sind ebenfalls Funktionen, und Sie können ihnen beliebige tatsächliche Namen geben. Ihre Signaturen sind einfach: sie akzeptieren einen einzelnen Parameter von beliebigem Typ.

```js
resolveFunc(value); // call on resolved
rejectFunc(reason); // call on rejected
```

Der `value`-Parameter, der an `resolveFunc` übergeben wird, kann ein anderes Promise-Objekt sein, in diesem Fall wird der Zustand des neu erstellten Promise in den des übergebenen Promise "verriegelt" (als Teil des [resolution](#die_resolve-funktion)-Promise). Der `rejectFunc` hat eine Semantik, die der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung nahekommt, daher ist `reason` typischerweise eine [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)-Instanz. Wenn entweder `value` oder `reason` weggelassen wird, wird das Promise mit `undefined` erfüllt/abgelehnt.

Der Abschlusszustand des `executor` hat begrenzte Auswirkungen auf den Zustand des Promise:

- Der Rückgabewert des `executor` wird ignoriert. `return`-Anweisungen im `executor` beeinflussen lediglich den Kontrollfluss und ändern, ob ein Teil der Funktion ausgeführt wird, haben jedoch keinen Einfluss auf den Erfüllungswert des Promise. Wenn der `executor` beendet wird und es unmöglich ist, dass `resolveFunc` oder `rejectFunc` in Zukunft aufgerufen werden (zum Beispiel, wenn keine asynchronen Aufgaben geplant sind), bleibt das Promise für immer ausstehend.
- Wenn ein Fehler im `executor` geworfen wird, wird das Promise abgelehnt, es sei denn, `resolveFunc` oder `rejectFunc` wurde bereits aufgerufen.

> [!NOTE]
> Die Existenz ausstehender Promises verhindert nicht, dass das Programm beendet wird. Wenn die Ereignisschleife leer ist, wird das Programm trotz aller ausstehenden Promises beendet (da diese notwendigerweise für immer ausstehend bleiben).

Hier ist eine Zusammenfassung des typischen Ablaufs:

1. Zu dem Zeitpunkt, an dem der Konstruktor das neue `Promise`-Objekt generiert, erstellt er auch ein entsprechendes Paar von Funktionen für `resolveFunc` und `rejectFunc`; diese sind mit dem `Promise`-Objekt "verbunden".
2. Der `executor` umschließt typischerweise eine asynchrone Operation, die eine callback-basierte API bietet. Der Callback (der zur ursprünglichen callback-basierten API übergeben wird) wird im Code des `executor` definiert, sodass er Zugriff auf `resolveFunc` und `rejectFunc` hat.
3. Der `executor` wird synchron aufgerufen (sobald das `Promise` konstruiert wird) mit den Funktionen `resolveFunc` und `rejectFunc` als Argumente.
4. Der Code im `executor` hat die Möglichkeit, einige Operationen durchzuführen. Der letztendliche Abschluss der asynchronen Aufgabe wird durch die Nebeneffekte von `resolveFunc` oder `rejectFunc` über die Promise-Instanz kommuniziert. Der Nebeneffekt ist, dass das `Promise`-Objekt "aufgelöst" wird.
   - Wenn `resolveFunc` zuerst aufgerufen wird, wird der übergebene Wert [aufgelöst](#die_resolve-funktion). Das Promise kann ausstehend bleiben (wenn ein weiteres [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) übergeben wird), erfüllt werden (in den meisten Fällen, wenn ein nicht-thenable Wert übergeben wird) oder abgelehnt werden (bei einem ungültigen Auflösungswert).
   - Wenn `rejectFunc` zuerst aufgerufen wird, wird das Promise sofort abgelehnt.
   - Sobald eine der auflösenden Funktionen (`resolveFunc` oder `rejectFunc`) aufgerufen wird, bleibt das Promise aufgelöst. Nur der erste Aufruf von `resolveFunc` oder `rejectFunc` beeinflusst den letztendlichen Zustand des Promises, und nachfolgende Aufrufe einer der Funktionen können weder den Erfüllungswert/Ablehnungsgrund ändern noch seinen letztendlichen Zustand von "erfüllt" zu "abgelehnt" oder umgekehrt ändern.
   - Wenn der `executor` durch das Werfen eines Fehlers beendet wird, wird das Promise abgelehnt. Der Fehler wird jedoch ignoriert, wenn eine der auflösenden Funktionen bereits aufgerufen wurde (das Promise ist somit bereits aufgelöst).
   - Das Auflösen des Promises führt nicht zwangsläufig dazu, dass das Promise erfüllt oder abgelehnt wird (d.h. abgeschlossen). Das Promise kann weiterhin ausstehend sein, da es mit einem anderen thenable aufgelöst wird, aber sein letztendlicher Zustand wird dem des aufgelösten thenable entsprechen.
5. Sobald das Promise abgeschlossen ist, ruft es (asynchron) alle weiteren Handler auf, die durch {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} oder {{jsxref("Promise/finally", "finally()")}} verbunden sind. Der letztendliche Erfüllungswert oder Ablehnungsgrund wird als Eingabeparameter an die Erfüllungs- und Ablehnungshandler übergeben (siehe [Verkettete Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises)).

Zum Beispiel kann die oben gezeigte callback-basierte `readFile`-API in eine Promise-basierte umgewandelt werden.

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

Die `resolve`- und `reject`-Callbacks sind nur im Gültigkeitsbereich der Executor-Funktion verfügbar, was bedeutet, dass Sie nach der Konstruktion des Promises keinen Zugriff darauf haben. Wenn Sie das Promise erstellen möchten, bevor Sie entscheiden, wie Sie es auflösen, können Sie stattdessen die Methode {{jsxref("Promise.withResolvers()")}} verwenden, die die `resolve`- und `reject`-Funktionen offenlegt.

### Die resolve-Funktion

Die `resolve`-Funktion hat die folgenden Verhaltensweisen:

- Wenn sie mit demselben Wert wie das neu erstellte Promise (das Promise, an das sie "gebunden" ist) aufgerufen wird, wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn sie mit einem nicht-[thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Wert (ein primitiver Wert oder ein Objekt, dessen `then`-Eigenschaft nicht aufrufbar ist, einschließlich wenn die Eigenschaft nicht vorhanden ist) aufgerufen wird, wird das Promise sofort mit diesem Wert erfüllt.
- Wenn sie mit einem thenable Wert (einschließlich einer anderen `Promise`-Instanz) aufgerufen wird, wird die `then`-Methode des thenable gespeichert und in der Zukunft aufgerufen (sie wird immer asynchron aufgerufen). Die `then`-Methode wird mit zwei Callbacks aufgerufen, bei denen es sich um zwei neue Funktionen mit demselben Verhalten wie die `resolveFunc`- und `rejectFunc`, die an die `executor`-Funktion übergeben werden, handelt. Wenn der Aufruf der `then`-Methode wirft, wird das aktuelle Promise mit dem geworfenen Fehler abgelehnt.

Im letzten Fall bedeutet dies, dass ein Code wie:

```js
new Promise((resolve, reject) => {
  resolve(thenable);
});
```

Ungefähr gleichbedeutend ist mit:

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

Außer dass im Fall `resolve(thenable)`:

1. `resolve` wird synchron aufgerufen, sodass ein weiterer Aufruf von `resolve` oder `reject` keine Wirkung hat, auch wenn die Handler, die über `anotherPromise.then()` verbunden sind, noch nicht aufgerufen wurden.
2. Die `then`-Methode wird asynchron aufgerufen, sodass das Promise, wenn ein thenable übergeben wird, niemals sofort aufgelöst wird.

Da `resolve` erneut mit dem übergeben wird, was `thenable.then()` als `value` übergibt, kann die Resolver-Funktion verschachtelte thenables abflachen, bei denen ein thenable seinen `onFulfilled`-Handler mit einem weiteren thenable aufruft. Der Effekt ist, dass der Erfüllungshandler eines echten Promises niemals ein thenable als Erfüllungswert erhält.

## Beispiele

### Eine callback-basierte API in eine promise-basierte umwandeln

Um einer Funktion Promise-Funktionalität bereitzustellen, lassen Sie sie ein Promise zurückgeben, indem Sie die `resolve`- und `reject`-Funktionen zum richtigen Zeitpunkt aufrufen.

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

Der Aufruf von `resolveFunc` führt dazu, dass das Promise aufgelöst wird, sodass ein weiterer Aufruf von `resolveFunc` oder `rejectFunc` keine Wirkung hat. Das Promise kann jedoch in einem der Zustände sein: ausstehend, erfüllt oder abgelehnt.

Dieses `pendingResolved` Promise ist zum Zeitpunkt seiner Erstellung aufgelöst, da es bereits "verriegelt" wurde, um dem letztendlichen Zustand des inneren Promises zu entsprechen, und spätere Aufrufe von `resolveOuter` oder `rejectOuter` oder das Werfen eines Fehlers im Executor haben keinen Einfluss auf seinen letztendlichen Zustand. Das innere Promise ist jedoch bis 100 ms später immer noch ausstehend, sodass das äußere Promise auch ausstehend ist:

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

Dieses `fulfilledResolved`-Promise wird erfüllt, sobald es aufgelöst wird, da es mit einem nicht-thenable Wert aufgelöst wird. Wenn es jedoch erstellt wird, ist es nicht aufgelöst, da weder `resolve` noch `reject` aufgerufen wurden. Ein ungelöstes Promise ist notwendigerweise ausstehend:

```js
const fulfilledResolved = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("outer");
  }, 100);
});
```

Das Aufrufen von `rejectFunc` führt offensichtlich dazu, dass das Promise abgelehnt wird. Es gibt jedoch auch zwei Möglichkeiten, das Promise sofort abzulehnen, selbst wenn der `resolveFunc`-Callback aufgerufen wird.

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
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)-Leitfaden
- {{jsxref("Promise.withResolvers()")}}
