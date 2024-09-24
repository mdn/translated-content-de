---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
l10n:
  sourceCommit: 5c55770dc681e7855fe960cf6a725d4c7be4e95f
---

{{JSRef}}

Die **`then()`** Methode von {{jsxref("Promise")}} Instanzen nimmt bis zu zwei Argumente an: Rückruffunktionen für die erfüllten und abgelehnten Fälle des `Promise`. Sie speichert die Rückrufe innerhalb des Promises, auf dem sie aufgerufen wird, und gibt sofort ein weiteres {{jsxref("Promise")}} Objekt zurück, was es Ihnen ermöglicht, [Methoden zu verketten](/de/docs/Web/JavaScript/Guide/Using_promises#chaining).

{{EmbedInteractiveExample("pages/js/promise-then.html")}}

## Syntax

```js-nolint
then(onFulfilled)
then(onFulfilled, onRejected)
```

### Parameter

- `onFulfilled`

  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Promise erfüllt wird. Sein Rückgabewert wird der Erfüllungswert des Promises, das von `then()` zurückgegeben wird. Die Funktion wird mit folgenden Argumenten aufgerufen:

    - `value`
      - : Der Wert, mit dem das Promise erfüllt wurde.

    Wenn es keine Funktion ist, wird es intern durch eine _Identitätsfunktion_ (`(x) => x`) ersetzt, die den Erfüllungswert einfach weitergibt.

- `onRejected` {{optional_inline}}

  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Promise abgelehnt wird. Sein Rückgabewert wird der Erfüllungswert des Promises, das von `then()` zurückgegeben wird. Die Funktion wird mit folgenden Argumenten aufgerufen:

    - `reason`
      - : Der Wert, mit dem das Promise abgelehnt wurde.

    Wenn es keine Funktion ist, wird es intern durch eine _Thrower-Funktion_ (`(x) => { throw x; }`) ersetzt, die den Ablehnungsgrund, den sie erhalten hat, wirft.

### Rückgabewert

Gibt sofort ein neues {{jsxref("Promise")}} zurück. Dieses neue Promise ist immer schwebend, wenn es zurückgegeben wird, unabhängig vom aktuellen Status des Promises.

Einer der `onFulfilled` oder `onRejected` Handler wird ausgeführt, um die Erfüllung oder Ablehnung des aktuellen Promises zu bearbeiten. Der Aufruf erfolgt immer asynchron, selbst wenn das aktuelle Promise bereits festgelegt ist. Das Verhalten des zurückgegebenen Promises (nennen wir es `p`) hängt vom Ergebnis der Handler-Ausführung ab und folgt einer spezifischen Regelreihe. Wenn die Handler-Funktion:

- einen Wert zurückgibt: wird `p` mit dem zurückgegebenen Wert als Wert erfüllt.
- nichts zurückgibt: wird `p` mit `undefined` als Wert erfüllt.
- einen Fehler wirft: wird `p` mit dem geworfenen Fehler als Wert abgelehnt.
- ein bereits erfülltes Promise zurückgibt: wird `p` mit dem Wert dieses Promises als Wert erfüllt.
- ein bereits abgelehntes Promise zurückgibt: wird `p` mit dem Wert dieses Promises als Wert abgelehnt.
- ein weiteres schwebendes Promise zurückgibt: bleibt `p` schwebend und wird sofort erfüllt/abgelehnt mit dem Wert dieses Promises, nachdem jenes erfüllt/abgelehnt wurde.

## Beschreibung

Die `then()` Methode plant Rückruffunktionen für den eventuellen Abschluss eines Promises ein — entweder Erfüllung oder Ablehnung. Es ist die primitive Methode der Promises: das [Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Protokoll erwartet, dass alle Promise-ähnlichen Objekte eine `then()` Methode bereitstellen, und die {{jsxref("Promise/catch", "catch()")}} sowie {{jsxref("Promise/finally", "finally()")}} Methoden funktionieren, indem sie die `then()` Methode des Objekts aufrufen.

Für weitere Informationen über den `onRejected` Handler, siehe die {{jsxref("Promise/catch", "catch()")}} Referenz.

`then()` gibt ein neues Promise-Objekt zurück, ändert jedoch das Promise-Objekt, auf dem es aufgerufen wird, indem es die Handler zu einer internen Liste hinzufügt. Daher wird der Handler von dem ursprünglichen Promise behalten und seine Lebensdauer ist mindestens so lang wie die des ursprünglichen Promises. Zum Beispiel wird das folgende Beispiel schließlich den Speicher erschöpfen, obwohl das zurückgegebene Promise nicht aufrechterhalten wird:

```js
const pendingPromise = new Promise(() => {});
while (true) {
  pendingPromise.then(doSomething);
}
```

Wenn Sie die Methode `then()` zweimal auf demselben Promise-Objekt aufrufen (anstatt zu verketten), wird dieses Promise-Objekt zwei Paare von Abschluss-Handlern haben. Alle Handler, die an dasselbe Promise-Objekt angehängt sind, werden immer in der Reihenfolge aufgerufen, in der sie hinzugefügt wurden. Darüber hinaus beginnen die beiden Promises, die durch jeden Aufruf von `then()` zurückgegeben werden, separate Ketten und warten nicht auf die Beendigung des jeweils anderen.

[Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Objekte, die in der `then()` Kette entstehen, werden immer [aufgelöst](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function) — der `onFulfilled` Handler empfängt niemals ein thenable-Objekt, und jedes thenable, das von einem der Handler zurückgegeben wird, wird immer aufgelöst, bevor es an den nächsten Handler weitergegeben wird. Dies liegt daran, dass beim Konstruieren des neuen Promises die `resolve` und `reject` Funktionen, die durch den `executor` übergeben werden, gespeichert werden. Wenn das aktuelle Promise abgeschlossen ist, wird die jeweilige Funktion mit dem Erfüllungswert oder dem Ablehnungsgrund aufgerufen. Die Auflösungslogik stammt von der `resolve` Funktion, die durch den {{jsxref("Promise/Promise", "Promise()")}} Konstruktor übergeben wird.

`then()` unterstützt Subclassing, was bedeutet, dass es auf Instanzen von Unterklassen von `Promise` aufgerufen werden kann, und das Ergebnis wird ein Promise vom Unterklassen-Typ sein. Sie können den Typ des Rückgabewerts durch die [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species) Eigenschaft anpassen.

## Beispiele

### Verwendung der then() Methode

```js
const p1 = new Promise((resolve, reject) => {
  resolve("Success!");
  // or
  // reject(new Error("Error!"));
});

p1.then(
  (value) => {
    console.log(value); // Success!
  },
  (reason) => {
    console.error(reason); // Error!
  },
);
```

### Verwendung eines Nicht-Funktion-Parameters

```js
Promise.resolve(1).then(2).then(console.log); // 1
Promise.reject(1).then(2, 2).then(console.log, console.log); // 1
```

### Verkettung

Die `then` Methode gibt ein neues `Promise` zurück, das das Verketten von Methoden ermöglicht.

Wenn die Funktion, die als Handler an `then` übergeben wird, ein `Promise` zurückgibt, wird ein entsprechendes `Promise` im Anschluss an das nächste `then` in der Methodenkette offengelegt. Der folgende Codeausschnitt simuliert asynchronen Code mit der `setTimeout` Funktion.

```js
Promise.resolve("foo")
  // 1. Empfängt "foo", hängt "bar" daran an und löst dies für das nächste then auf
  .then(
    (string) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          string += "bar";
          resolve(string);
        }, 1);
      }),
  )
  // 2. empfängt "foobar", registriert eine Rückruffunktion, um mit dieser Zeichenkette zu arbeiten
  // und gibt sie in der Konsole aus, aber nicht bevor die unverarbeitete
  // Zeichenkette zum nächsten then zurückgegeben wird
  .then((string) => {
    setTimeout(() => {
      string += "baz";
      console.log(string); // foobarbaz
    }, 1);
    return string;
  })
  // 3. gibt hilfreiche Meldungen darüber aus, wie der Code in diesem Abschnitt
  // ausgeführt wird, bevor die Zeichenfolge tatsächlich vom simulierten asynchronen
  // Code im vorherigen then Block verarbeitet wird.
  .then((string) => {
    console.log(
      "Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising",
    );

    // Beachten Sie, dass `string` zu diesem Zeitpunkt nicht den 'baz' Teil hat. Das
    // liegt daran, dass wir das asynchron mit einer setTimeout Funktion simuliert haben
    console.log(string); // foobar
  });

// Gibt in folgender Reihenfolge aus:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz
```

Der von `then()` zurückgegebene Wert wird auf die gleiche Weise wie in {{jsxref("Promise.resolve()")}} aufgelöst. Dies bedeutet, dass [thenable Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) unterstützt werden, und wenn der Rückgabewert kein Promise ist, wird er implizit in ein `Promise` gepackt und dann aufgelöst.

```js
const p2 = new Promise((resolve, reject) => {
  resolve(1);
});

p2.then((value) => {
  console.log(value); // 1
  return value + 1;
}).then((value) => {
  console.log(value, "- A synchronous value works"); // 2 - A synchronous value works
});

p2.then((value) => {
  console.log(value); // 1
});
```

Ein `then` Aufruf gibt ein Promise zurück, das schließlich abgelehnt wird, wenn die Funktion einen Fehler wirft oder ein abgelehntes Promise zurückgibt.

```js
Promise.resolve()
  .then(() => {
    // Lässt .then() ein abgelehntes Promise zurückgeben
    throw new Error("Oh no!");
  })
  .then(
    () => {
      console.log("Nicht aufgerufen.");
    },
    (error) => {
      console.error(`onRejected Funktion aufgerufen: ${error.message}`);
    },
  );
```

In der Praxis ist es oft wünschenswert, abgelehnte Promises mit [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) abzufangen, anstatt dem zweiwertigen `then()`-Syntax, wie im Folgenden demonstriert.

```js
Promise.resolve()
  .then(() => {
    // Lässt .then() ein abgelehntes Promise zurückgeben
    throw new Error("Oh no!");
  })
  .catch((error) => {
    console.error(`onRejected Funktion aufgerufen: ${error.message}`);
  })
  .then(() => {
    console.log("Ich werde immer aufgerufen, selbst wenn das vorherige then's Promise abgelehnt wird");
  });
```

In allen anderen Fällen wird das zurückgegebene Promise schließlich erfüllt. Im folgenden Beispiel gibt das erste `then()`  den Wert `42` in ein erfülltes Promise, selbst wenn das vorherige Promise in der Kette abgelehnt wurde.

```js
Promise.reject()
  .then(
    () => 99,
    () => 42,
  ) // onRejected gibt 42 zurück, das in ein erfülltes Promise gepackt wird
  .then((solution) => console.log(`Erfüllt mit ${solution}`)); // Erfüllt mit 42
```

Wenn `onFulfilled` ein Promise zurückgibt, wird der Rückgabewert von `then` basierend auf dem endgültigen Zustand dieses Promises erfüllt/abgelehnt.

```js
function resolveLater(resolve, reject) {
  setTimeout(() => {
    resolve(10);
  }, 1000);
}
function rejectLater(resolve, reject) {
  setTimeout(() => {
    reject(new Error("Error"));
  }, 1000);
}

const p1 = Promise.resolve("foo");
const p2 = p1.then(() => {
  // Gibt hier ein Promise zurück, das nach 1 Sekunde mit 10 aufgelöst wird
  return new Promise(resolveLater);
});
p2.then(
  (v) => {
    console.log("erfüllt", v); // "erfüllt", 10
  },
  (e) => {
    // nicht aufgerufen
    console.error("abgelehnt", e);
  },
);

const p3 = p1.then(() => {
  // Gibt hier ein Promise zurück, das nach 1 Sekunde mit 'Error' abgelehnt wird
  return new Promise(rejectLater);
});
p3.then(
  (v) => {
    // nicht aufgerufen
    console.log("erfüllt", v);
  },
  (e) => {
    console.error("abgelehnt", e); // "abgelehnt", 'Error'
  },
);
```

Sie können das Verketten verwenden, um eine Funktion mit einer auf Promises basierenden API über einer anderen solchen Funktion zu implementieren.

```js
function fetchCurrentData() {
  // Die fetch() API gibt ein Promise zurück. Diese Funktion
  // bietet eine ähnliche API an, mit dem Unterschied dass der Erfüllungswert
  // des Promise dieser Funktion weiter bearbeitet wurde.
  return fetch("current-data.json").then((response) => {
    if (response.headers.get("content-type") !== "application/json") {
      throw new TypeError();
    }
    const j = response.json();
    // eventuell etwas mit j machen

    // Erfüllungswert, der dem Benutzer von
    // fetchCurrentData().then() gegeben wird
    return j;
  });
}
```

### Asynchronität von then()

Das folgende Beispiel zeigt die Asynchronität der `then` Methode.

```js
// Verwendung eines aufgelösten Promise 'resolvedProm' als Beispiel,
// der Funktionsaufruf 'resolvedProm.then(...)' gibt sofort ein neues Promise zurück,
// aber sein Handler '(value) => {...}' wird asynchron aufgerufen, wie durch die console.logs gezeigt wird.
// das neue Promise wird 'thenProm' zugewiesen,
// und thenProm wird mit dem Wert aufgelöst, der vom Handler zurückgegeben wird
const resolvedProm = Promise.resolve(33);
console.log(resolvedProm);

const thenProm = resolvedProm.then((value) => {
  console.log(
    `dies wird nach dem Ende des Haupt-Stacks aufgerufen. Der empfangene Wert ist: ${value}, der zurückgegebene Wert ist: ${
      value + 1
    }`,
  );
  return value + 1;
});
console.log(thenProm);

// Mit setTimeout können wir die Ausführung einer Funktion aufschieben, bis der Stack leer ist
setTimeout(() => {
  console.log(thenProm);
});

// Gibt in folgender Reihenfolge aus:
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 33}
// Promise {[[PromiseStatus]]: "pending", [[PromiseResult]]: undefined}
// "dies wird nach dem Ende des Haupt-Stacks aufgerufen. Der empfangene Wert ist: 33, der zurückgegebene Wert ist: 34"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 34}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.catch()")}}
