---
title: Promise() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Der **`Promise()`** Konstruktor erstellt {{jsxref("Promise")}} Objekte. Er wird hauptsächlich verwendet, um callback-basierte APIs zu umhüllen, die noch keine Unterstützung für Promises bieten.

{{EmbedInteractiveExample("pages/js/promise-constructor.html", "taller")}}

## Syntax

```js-nolint
new Promise(executor)
```

> **Note:** `Promise()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, ihn ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `executor`
  - : Eine {{jsxref("function")}}, die vom Konstruktor ausgeführt wird. Sie erhält zwei Funktionen als Parameter: `resolveFunc` und `rejectFunc`. Alle im `executor` geworfenen Fehler führen dazu, dass das Promise abgelehnt wird, und der Rückgabewert wird ignoriert. Die Semantik des `executor` wird unten detailliert beschrieben.

### Rückgabewert

Wenn über `new` aufgerufen, gibt der Promise-Konstruktor ein Promise-Objekt zurück. Das Promise-Objekt wird _resolved_, wenn entweder die Funktionen `resolveFunc` oder `rejectFunc` aufgerufen werden. Beachten Sie, dass wenn Sie `resolveFunc` oder `rejectFunc` aufrufen und ein anderes `Promise`-Objekt als Argument übergeben, es als "resolved" betrachtet wird, aber noch nicht "settled". Siehe die [Promise-Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) für weitere Erklärungen.

## Beschreibung

Traditionell (vor Promises) wurden asynchrone Aufgaben als Callbacks gestaltet.

```js
readFile("./data.txt", (error, result) => {
  // Dieser Callback wird aufgerufen, wenn die Aufgabe abgeschlossen ist, mit
  // dem endgültigen `error` oder `result`. Jede von diesem Ergebnis abhängige
  // Operation muss innerhalb dieses Callbacks definiert sein.
});
// Der Code hier wird sofort nach dem `readFile`-Anfrage ausgeführt.
// Er wartet nicht auf den Callback, weshalb `readFile` "asynchron" ist.
```

Um die Lesbarkeit und Sprachmerkmale zu verbessern, die Promises bieten, ermöglicht der `Promise()`-Konstruktor, die callback-basierte API in eine auf Promises basierende zu transformieren.

> [!NOTE]
> Wenn Ihre Aufgabe bereits auf Promises basiert, benötigen Sie den `Promise()`-Konstruktor wahrscheinlich nicht.

Der `executor` ist benutzerdefinierter Code, der ein Ergebnis in einem Callback an ein Promise bindet. Sie, der Programmierer, schreiben den `executor`. Die Signatur erwartet:

```js
function executor(resolveFunc, rejectFunc) {
  // Typischerweise eine asynchrone Operation, die einen Callback akzeptiert,
  // wie die `readFile` Funktion oben
}
```

`resolveFunc` und `rejectFunc` sind ebenfalls Funktionen, und Sie können ihnen beliebige tatsächliche Namen geben. Ihre Signaturen sind einfach: Sie akzeptieren einen einzelnen Parameter beliebigen Typs.

```js
resolveFunc(value); // bei Erfolgsfall aufrufen
rejectFunc(reason); // bei Ablehnungsfall aufrufen
```

Der an `resolveFunc` übergebene `value`-Parameter kann ein weiteres Promise-Objekt sein, in welchem Fall der Status des neu konstruierten Promises auf den des übergebenen Promises "eingeschränkt" wird (im Rahmen des [Resolution](#die_resolve-funktion) Promise). `rejectFunc` hat eine Semantik, die der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung nahe kommt, sodass `reason` typischerweise eine [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)-Instanz ist. Wird `value` oder `reason` weggelassen, wird das Promise mit `undefined` erfüllt/abgelehnt.

Der Abschlusszustand des `executor` hat begrenzte Auswirkungen auf den Zustand des Promises:

- Der Rückgabewert des `executor` wird ignoriert. `return`-Anweisungen innerhalb des `executor` beeinflussen lediglich den Kontrollfluss und ändern, ob ein Teil der Funktion ausgeführt wird, haben aber keinen Einfluss auf den Erfüllungswert des Promises. Wenn der `executor` beendet wird und es unmöglich ist, dass `resolveFunc` oder `rejectFunc` in Zukunft aufgerufen werden (zum Beispiel, wenn keine asynchronen Aufgaben geplant sind), bleibt das Promise auf unbestimmte Zeit ausstehend.
- Wird im `executor` ein Fehler geworfen, wird das Promise abgelehnt, es sei denn, `resolveFunc` oder `rejectFunc` wurde bereits aufgerufen.

> [!NOTE]
> Das Vorhandensein von ausstehenden Promises hindert das Programm nicht daran, zu beenden. Wenn die Ereignisschleife leer ist, beendet sich das Programm trotz aller ausstehenden Promises (denn diese sind notwendigerweise für immer ausstehend).

Hier ist eine Zusammenfassung des typischen Ablaufs:

1. Zu dem Zeitpunkt, zu dem der Konstruktor das neue `Promise`-Objekt generiert, erzeugt er auch ein entsprechendes Paar von Funktionen für `resolveFunc` und `rejectFunc`; diese sind an das `Promise`-Objekt "gebunden".
2. `executor` umhüllt typischerweise eine asynchrone Operation, die eine callback-basierte API bereitstellt. Der Callback (derjenige, der an die ursprüngliche callback-basierte API übergeben wird), wird innerhalb des `executor`-Codes definiert, sodass er Zugang zu `resolveFunc` und `rejectFunc` hat.
3. Der `executor` wird synchron aufgerufen (sobald das `Promise` konstruiert ist) mit den Funktionen `resolveFunc` und `rejectFunc` als Argumente.
4. Der Code innerhalb des `executor` hat die Möglichkeit, eine Operation durchzuführen. Der eventuelle Abschluss der asynchronen Aufgabe wird mit der Promise-Instanz durch die Seiteneffekte von `resolveFunc` oder `rejectFunc` kommuniziert. Der Seiteneffekt ist, dass das `Promise`-Objekt "resolved" wird.
   - Wird `resolveFunc` zuerst aufgerufen, wird der übergebene Wert [resolved](#die_resolve-funktion). Das Promise kann ausstehend bleiben (im Fall, dass ein weiteres [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) übergeben wird), erfüllt werden (in den meisten Fällen, wenn ein nicht-thenable Wert übergeben wird) oder abgelehnt werden (im Fall eines ungültigen Auflösungswertes).
   - Wird `rejectFunc` zuerst aufgerufen, wird das Promise sofort abgelehnt.
   - Einmal aufgerufen, bleibt das Promise durch eines der Auflösungsfunktionen (`resolveFunc` oder `rejectFunc`) "resolved". Nur der erste Aufruf von `resolveFunc` oder `rejectFunc` beeinflusst den endgültigen Zustand des Promises, und nachfolgende Aufrufe einer der Funktionen können weder den Erfüllungswert/Ablehnungsgrund ändern, noch seinen endgültigen Zustand von "erfüllt" zu "abgelehnt" oder umgekehrt schalten.
   - Wird der `executor` durch das Werfen eines Fehlers beendet, wird das Promise abgelehnt. Der Fehler wird jedoch ignoriert, wenn eine der Auflösungsfunktionen bereits aufgerufen wurde (sodass das Promise bereits "resolved" ist).
   - Das Auflösen des Promises führt nicht zwangsläufig dazu, dass das Promise erfüllt oder abgelehnt (d. h. settled) wird. Das Promise kann immer noch ausstehend sein, weil es mit einem anderen thenable aufgelöst wurde, aber sein endgültiger Zustand wird dem des aufgelösten thenable entsprechen.
5. Sobald das Promise erfüllt ist, ruft es (asynchron) alle weiteren Handler auf, die durch {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}} oder {{jsxref("Promise/finally", "finally()")}} assoziiert sind. Der endgültige Erfüllungswert oder der Ablehnungsgrund wird bei der Ausführung von Fulfillment- und Ablehnungshandlern als Eingabeparameter übergeben (siehe [Verkettete Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises)).

Zum Beispiel kann die callback-basierte `readFile` API oben in eine auf Promises basierende transformiert werden.

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

Die `resolve` und `reject` Callbacks sind nur im Geltungsbereich der Executor-Funktion verfügbar, was bedeutet, dass Sie keinen Zugriff darauf haben, nachdem das Promise konstruiert wurde. Wenn Sie das Promise konstruieren möchten, bevor Sie entscheiden, wie Sie es auflösen, können Sie stattdessen die Methode {{jsxref("Promise.withResolvers()")}} verwenden, die die Funktionen `resolve` und `reject` freilegt.

### Die resolve-Funktion

Die `resolve`-Funktion hat die folgenden Verhaltensweisen:

- Wenn es mit demselben Wert aufgerufen wird wie das neu erstellte Promise (das Promise, an das es "gebunden" ist), wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn es mit einem nicht-[thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Wert aufgerufen wird (ein primitiver Wert oder ein Objekt, dessen `then`-Eigenschaft nicht aufrufbar ist, einschließlich wenn die Eigenschaft nicht vorhanden ist), wird das Promise sofort mit diesem Wert erfüllt.
- Wenn es mit einem thenable Wert (einschließlich eines anderen `Promise`-Objekts) aufgerufen wird, wird die `then`-Methode des thenable gespeichert und in der Zukunft aufgerufen (sie wird immer asynchron aufgerufen). Die `then`-Methode wird mit zwei Callbacks aufgerufen, die zwei neue Funktionen mit exakt denselben Verhaltensweisen wie die an die `executor`-Funktion übergebenen `resolveFunc` und `rejectFunc` sind. Wenn das Aufrufen der `then`-Methode einen Fehler auslöst, wird das aktuelle Promise mit dem geworfenen Fehler abgelehnt.

Im letzten Fall bedeutet das, dass Code wie:

```js
new Promise((resolve, reject) => {
  resolve(thenable);
});
```

Ungefähr folgendem entspricht:

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

1. `resolve` synchron aufgerufen wird, sodass das nochmalige Aufrufen von `resolve` oder `reject` keine Wirkung hat, auch wenn die an `anotherPromise.then()` angehängten Handler noch nicht aufgerufen wurden.
2. Die `then`-Methode asynchron aufgerufen wird, sodass das Promise niemals sofort aufgelöst wird, wenn ein thenable übergeben wird.

Weil `resolve` erneut mit dem aufgerufen wird, was `thenable.then()` als `value` übergibt, ist die Resolver-Funktion in der Lage, geschachtelte thenables zu glätten, bei denen ein thenable seinen `onFulfilled`-Handler mit einem anderen thenable aufruft. Der Effekt ist, dass der Erfüllungshandler eines realen Promises niemals ein thenable als seinen Erfüllungswert erhalten wird.

## Beispiele

### Eine callback-basierte API in eine auf Promises basierende verwandeln

Um einer Funktion Promise-Funktionalität zu verleihen, lassen Sie sie ein Promise zurückgeben, indem Sie die `resolve`- und `reject`-Funktionen zu den richtigen Zeiten aufrufen.

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

Das Aufrufen von `resolveFunc` bewirkt, dass das Promise aufgelöst wird, sodass das nochmalige Aufrufen von `resolveFunc` oder `rejectFunc` keine Wirkung hat. Das Promise kann jedoch in jedem der Zustände sein: ausstehend, erfüllt oder abgelehnt.

Dieses `pendingResolved`-Promise wird zu dem Zeitpunkt aufgelöst, an dem es erstellt wird, weil es bereits darauf "eingeschränkt" wurde, den endgültigen Zustand des inneren Promises zu spiegeln, und das nochmalige Aufrufen von `resolveOuter` oder `rejectOuter` oder das Werfen eines Fehlers später im Executor hat keine Auswirkung auf seinen endgültigen Zustand. Das innere Promise ist jedoch noch ausstehend, bis 100 ms vergangen sind, sodass das äußere Promise ebenfalls ausstehend ist:

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

Dieses `fulfilledResolved`-Promise wird erfüllt in dem Moment, in dem es aufgelöst wird, weil es mit einem nicht-thenable Wert aufgelöst wird. Wenn es jedoch erstellt wird, ist es unerfüllt, weil weder `resolve` noch `reject` aufgerufen wurde. Ein unerfülltes Promise ist notwendigerweise ausstehend:

```js
const fulfilledResolved = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("outer");
  }, 100);
});
```

Das Aufrufen von `rejectFunc` führt offensichtlich dazu, dass das Promise abgelehnt wird. Es gibt jedoch auch zwei Möglichkeiten, das Promise sofort abzulehnen, selbst wenn der `resolveFunc`-Callback aufgerufen wird.

```js
// 1. Auflösen mit dem Promise selbst
const rejectedResolved1 = new Promise((resolve) => {
  // Hinweis: resolve muss asynchron aufgerufen werden,
  // damit die Variable rejectedResolved1 initialisiert wird
  setTimeout(() => resolve(rejectedResolved1)); // TypeError: Chaining cycle detected for promise #<Promise>
});

// 2. Auflösen mit einem Objekt, das beim Zugriff auf die `then`-Eigenschaft eine Ausnahme auslöst
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
