---
title: Promise() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Der **`Promise()`** Konstruktor erstellt {{jsxref("Promise")}}-Objekte. Er wird hauptsächlich verwendet, um callback-basierte APIs, die noch keine Unterstützung für Promises bieten, einzubinden.

{{EmbedInteractiveExample("pages/js/promise-constructor.html", "taller")}}

## Syntax

```js-nolint
new Promise(executor)
```

> **Note:** `Promise()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` zu aufrufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `executor`
  - : Eine {{jsxref("function")}}, die vom Konstruktor ausgeführt wird. Sie empfängt zwei Funktionen als Parameter: `resolveFunc` und `rejectFunc`. Alle im `executor` ausgelösten Fehler führen dazu, dass das Promise abgelehnt wird, und der Rückgabewert wird ignoriert. Die Semantik von `executor` wird unten detailliert beschrieben.

### Rückgabewert

Wenn `new` verwendet wird, gibt der Promise-Konstruktor ein Promise-Objekt zurück. Das Promise-Objekt wird _aufgelöst_, wenn eine der Funktionen `resolveFunc` oder `rejectFunc` aufgerufen wird. Beachten Sie, dass wenn Sie `resolveFunc` oder `rejectFunc` aufrufen und ein anderes `Promise`-Objekt als Argument übergeben, es als "aufgelöst" angesehen wird, aber noch nicht "abgeschlossen". Weitere Erklärungen finden Sie in der [Promise-Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description).

## Beschreibung

Traditionell (vor Promises) wurden asynchrone Aufgaben als Rückrufe (Callbacks) gestaltet.

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

Um von der verbesserten Lesbarkeit und den Sprachmerkmalen, die Promises bieten, zu profitieren, ermöglicht der `Promise()`-Konstruktor eine Transformation der callback-basierten API in eine promise-basierte.

> [!NOTE]
> Wenn Ihre Aufgabe bereits promise-basiert ist, benötigen Sie wahrscheinlich den `Promise()`-Konstruktor nicht.

Der `executor` ist ein benutzerdefinierter Code, der ein Ergebnis in einem Rückruf mit einem Promise verknüpft. Sie, der Programmierer, schreiben den `executor`. Seine Signatur wird erwartet als:

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

Der an `resolveFunc` übergebene `value`-Parameter kann ein anderes Promise-Objekt sein, in welchem Fall der Zustand des neu konstruierten Promises "gesperrt" wird auf das übergebene Promise (als Teil der [Auflösung](#die_resolve-funktion) des Promises). `rejectFunc` hat eine Semantik, die der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung nahekommt, daher ist `reason` typischerweise eine [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)-Instanz. Wenn entweder `value` oder `reason` weggelassen wird, wird das Promise mit `undefined` erfüllt/abgelehnt.

Der Abschlusszustand des `executor` hat einen begrenzten Einfluss auf den Zustand des Promises:

- Der Rückgabewert von `executor` wird ignoriert. `return`-Anweisungen innerhalb des `executor` beeinflussen lediglich den Kontrollfluss und ändern, ob ein Teil der Funktion ausgeführt wird, haben jedoch keinen Einfluss auf den Erfüllungswert des Promises. Wenn der `executor` endet und es unmöglich ist, dass `resolveFunc` oder `rejectFunc` in Zukunft aufgerufen werden (zum Beispiel, wenn keine asynchronen Aufgaben geplant sind), dann bleibt das Promise für immer pendent.
- Wenn im `executor` ein Fehler ausgelöst wird, wird das Promise abgelehnt, es sei denn, `resolveFunc` oder `rejectFunc` wurde bereits aufgerufen.

> [!NOTE]
> Die Existenz ausstehender Promises verhindert nicht das Beenden des Programms. Wenn die Ereignisschleife leer ist, beendet sich das Programm trotz ausstehender Promises (weil diese zwangsläufig für immer ausstehend sind).

Hier ist eine Zusammenfassung des typischen Ablaufs:

1. Zu dem Zeitpunkt, an dem der Konstruktor das neue `Promise`-Objekt erzeugt, wird auch ein entsprechendes Funktionspaar für `resolveFunc` und `rejectFunc` erzeugt; diese sind mit dem `Promise`-Objekt "verbunden".
2. `executor` kapselt typischerweise eine asynchrone Operation, die eine callback-basierte API bietet. Der Rückruf (der an die ursprüngliche callback-basierte API übergeben wird) wird innerhalb des `executor`-Codes definiert, sodass er Zugriff auf die `resolveFunc` und `rejectFunc` hat.
3. Der `executor` wird synchron (sobald das `Promise` konstruiert ist) mit den Funktionen `resolveFunc` und `rejectFunc` als Argumente aufgerufen.
4. Der Code innerhalb des `executor` hat die Möglichkeit, eine Operation durchzuführen. Der eventuelle Abschluss der asynchronen Aufgabe wird über den Promise-Instanz mit dem Seiteneffekt durch `resolveFunc` oder `rejectFunc` kommuniziert. Der Seiteneffekt ist, dass das `Promise`-Objekt als "aufgelöst" betrachtet wird.
   - Wenn `resolveFunc` zuerst aufgerufen wird, wird der übergebene Wert [aufgelöst](#die_resolve-funktion). Das Promise kann ausstehend bleiben (falls ein anderer [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) übergeben wird), erfüllt werden (in den meisten Fällen, wenn ein nicht-thenabler Wert übergeben wird) oder abgelehnt werden (im Falle eines ungültigen Auflösungswerts).
   - Wenn `rejectFunc` zuerst aufgerufen wird, wird das Promise sofort abgelehnt.
   - Sobald eine der auflösenden Funktionen (`resolveFunc` oder `rejectFunc`) aufgerufen wird, bleibt das Promise aufgelöst. Nur der erste Aufruf von `resolveFunc` oder `rejectFunc` beeinflusst den endgültigen Zustand des Promises, und nachfolgende Aufrufe einer der Funktionen können den Erfüllungswert/Ablehnungsgrund nicht ändern oder seinen endgültigen Zustand von "erfüllt" auf "abgelehnt" oder umgekehrt wechseln.
   - Wenn `executor` durch ein Auslösen eines Fehlers endet, wird das Promise abgelehnt. Der Fehler wird jedoch ignoriert, wenn eine der auflösenden Funktionen bereits aufgerufen wurde (sodass das Promise bereits aufgelöst ist).
   - Das Auflösen des Promises führt nicht notwendigerweise dazu, dass das Promise erfüllt oder abgelehnt (d.h. abgeschlossen) wird. Das Promise kann noch ausstehend sein, weil es mit einem anderen thenable aufgelöst wird, aber sein endgültiger Zustand wird dem des aufgelösten thenables entsprechen.
5. Sobald das Promise abgeschlossen ist, wird es (asynchron) alle weiteren Handler, die über {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}}, oder {{jsxref("Promise/finally", "finally()")}} zugeordnet sind, aufrufen. Der endgültige Erfüllungswert oder Ablehnungsgrund wird zur Aufrufung der Erfüllungs- und Ablehnungshandler als Eingabeparameter übergeben (siehe [Verkettete Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises)).

Zum Beispiel kann die oben erwähnte callback-basierte `readFile`-API in eine promise-basierte umgewandelt werden.

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

Die `resolve`- und `reject`-Rückrufe sind nur innerhalb des Gültigkeitsbereichs der Executor-Funktion verfügbar, was bedeutet, dass Sie nach der Konstruktion des Promises nicht auf sie zugreifen können. Wenn Sie das Promise konstruieren möchten, bevor Sie entscheiden, wie Sie es auflösen, können Sie stattdessen die {{jsxref("Promise.withResolvers()")}}-Methode verwenden, die die `resolve`- und `reject`-Funktionen offenlegt.

### Die resolve-Funktion

Die `resolve`-Funktion hat die folgenden Verhaltensweisen:

- Wenn sie mit dem gleichen Wert wie das neu erstellte Promise (das Promise, an das sie "gebunden" ist) aufgerufen wird, wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn sie mit einem nicht-[thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Wert (einem primitiven Wert oder einem Objekt, dessen `then`-Eigenschaft nicht aufrufbar ist, einschließlich wenn die Eigenschaft nicht vorhanden ist) aufgerufen wird, wird das Promise sofort mit diesem Wert erfüllt.
- Wenn sie mit einem thenable Wert (einschließlich einer weiteren `Promise`-Instanz) aufgerufen wird, wird die `then`-Methode des thenables gespeichert und in der Zukunft aufgerufen (sie wird immer asynchron aufgerufen). Die `then`-Methode wird mit zwei Rückrufen aufgerufen, die zwei neue Funktionen mit den exakt gleichen Verhaltensweisen wie die an die Executor-Funktion übergebenen `resolveFunc` und `rejectFunc` sind. Wenn das Aufrufen der `then`-Methode einen Fehler auslöst, wird das aktuelle Promise mit dem ausgelösten Fehler abgelehnt.

Im letzten Fall bedeutet das Code wie:

```js
new Promise((resolve, reject) => {
  resolve(thenable);
});
```

Ist grob äquivalent zu:

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

Mit der Ausnahme, dass im `resolve(thenable)` Fall:

1. `resolve` wird synchron aufgerufen, sodass das erneute Aufrufen von `resolve` oder `reject` keinen Effekt hat, selbst wenn die über `anotherPromise.then()` angehängten Handler noch nicht aufgerufen wurden.
2. Die `then`-Methode wird asynchron aufgerufen, sodass das Promise niemals sofort aufgelöst wird, wenn ein thenable übergeben wird.

Da `resolve` erneut mit dem, was `thenable.then()` als `value` übergibt, aufgerufen wird, ist die Resolver-Funktion in der Lage, geschachtelte thenables zu reduzieren, bei denen ein thenable seinen `onFulfilled`-Handler mit einem weiteren thenable aufruft. Der Effekt ist, dass der Erfüllungs-Handler eines echten Promises niemals einen thenable als seinen Erfüllungswert erhält.

## Beispiele

### Eine callback-basierte API in eine promise-basierte umwandeln

Um einer Funktion Promise-Funktionalität bereitzustellen, soll sie ein Promise zurückgeben, indem die `resolve`- und `reject`-Funktionen zu den richtigen Zeitpunkten aufgerufen werden.

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

Der Aufruf von `resolveFunc` bewirkt, dass das Promise aufgelöst wird, sodass das erneute Aufrufen von `resolveFunc` oder `rejectFunc` keinen Effekt hat. Jedoch kann das Promise in einem der Zustände sein: ausstehend, erfüllt oder abgelehnt.

Dieses `pendingResolved`-Promise wird in dem Moment aufgelöst, in dem es erstellt wird, weil es bereits "gesperrt" ist, um den endgültigen Zustand des inneren Promises zu entsprechen, und das spätere Aufrufen von `resolveOuter` oder `rejectOuter` oder die Auslösung eines Fehlers im Executor hat keinen Einfluss auf seinen endgültigen Zustand. Das innere Promise ist jedoch noch ausstehend bis zu 100 ms später, sodass das äußere Promise auch ausstehend ist:

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

Dieses `fulfilledResolved`-Promise wird in dem Moment erfüllt, in dem es aufgelöst wird, weil es mit einem nicht-thenable Wert aufgelöst ist. Wenn es jedoch erstellt wird, ist es nicht aufgelöst, weil weder `resolve` noch `reject` aufgerufen wurde. Ein nicht aufgelöstes Promise ist notwendigerweise ausstehend:

```js
const fulfilledResolved = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("outer");
  }, 100);
});
```

Das Aufrufen von `rejectFunc` führt offensichtlich zur Ablehnung des Promises. Es gibt jedoch auch zwei Möglichkeiten, das Promise sofort abzulehnen, selbst wenn der `resolveFunc`-Rückruf aufgerufen wird.

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
