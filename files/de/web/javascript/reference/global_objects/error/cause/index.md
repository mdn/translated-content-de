---
title: "Error: cause"
short-title: cause
slug: Web/JavaScript/Reference/Global_Objects/Error/cause
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Dateneigenschaft **`cause`** einer {{jsxref("Error")}}-Instanz gibt die konkrete ursprüngliche Ursache des Fehlers an.

Sie wird verwendet, wenn ein Fehler abgefangen und mit einer präziseren oder hilfreicheren Fehlermeldung erneut ausgelöst wird, damit der ursprüngliche Fehler weiterhin zugänglich bleibt.

## Wert

Der Wert, der dem Konstruktor [`Error()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) im Argument `options.cause` übergeben wurde. Die Eigenschaft ist möglicherweise nicht vorhanden.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Der Wert von `cause` kann einen beliebigen Typ haben. Gehen Sie nicht davon aus, dass ein abgefangener Fehler einen `Error` als `cause` hat. Ebenso wenig können Sie sicher sein, dass die in einer `catch`-Anweisung gebundene Variable ein `Error` ist. Das folgende Beispiel „Strukturierte Daten als Fehlerursache bereitstellen“ zeigt einen Fall, in dem absichtlich ein Wert, der kein Fehler ist, als Ursache angegeben wird.

Die Unterklassen {{jsxref("SuppressedError")}} und {{jsxref("AggregateError")}} dienen beide dazu, mehrere Fehler miteinander zu verknüpfen. Beide stehen für mehrere Stellen, an denen Fehler aufgetreten sind: `SuppressedError` steht für einen Fehler, der bei der Behandlung eines anderen Fehlers aufgetreten ist, während `AggregateError` eine Sammlung mehrerer, voneinander unabhängiger Fehler darstellt, die während desselben Vorgangs aufgetreten sind. Die Eigenschaft `cause` steht für eine einzelne Fehlerstelle. Der umschließende Fehler ergänzt lediglich Kontext zur Ursache und stellt keinen zusätzlichen Fehler dar.

Im Folgenden sehen Sie eine typische Verwendung von `cause`. Es gibt eine einzelne Fehlerstelle innerhalb von `mainLogic()`. Die Anweisung `throw new Error()` umschließt lediglich den ursprünglichen Fehler, um Kontext hinzuzufügen, und stellt keinen zusätzlichen Fehler dar.

```js
try {
  mainLogic();
} catch (err) {
  throw new Error("Main logic failed", { cause: err });
}
```

Im Folgenden sehen Sie eine typische Verwendung von `SuppressedError`. Es gibt zwei Fehlerstellen: eine innerhalb von `mainLogic()` und eine innerhalb von `cleanup()`. Die `SuppressedError`-Instanz verknüpft die beiden Fehler.

```js
try {
  mainLogic();
} catch (primaryError) {
  try {
    cleanup();
  } catch (cleanupError) {
    throw new SuppressedError(
      cleanupError,
      primaryError,
      "Main logic failed; while handling that, cleanup also failed",
    );
  }
}
```

Im Folgenden sehen Sie eine typische Verwendung von `AggregateError`. Innerhalb von `mainLogic()` gibt es mehrere Fehlerstellen. Die `AggregateError`-Instanz verknüpft alle Fehler.

```js
function mainLogic() {
  const errors = [];
  try {
    operation1();
  } catch (e1) {
    errors.push(e1);
  }
  try {
    operation2();
  } catch (e2) {
    errors.push(e2);
  }
  if (errors.length > 0) {
    throw new AggregateError(errors, "Multiple operations failed");
  }
}
```

## Beispiele

### Einen Fehler mit einer Ursache erneut auslösen

Manchmal ist es sinnvoll, einen Fehler abzufangen und ihn mit einer neuen Meldung erneut auszulösen.
In diesem Fall sollten Sie den ursprünglichen Fehler an den Konstruktor des neuen `Error` übergeben, wie hier gezeigt.

```js
try {
  connectToDatabase();
} catch (err) {
  throw new Error("Connecting to database failed.", { cause: err });
}
```

Ein ausführlicheres Beispiel finden Sie unter [Error > Zwischen ähnlichen Fehlern unterscheiden](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

### Strukturierte Daten als Fehlerursache bereitstellen

Für Menschen formulierte Fehlermeldungen eignen sich möglicherweise nicht für die maschinelle Auswertung: Ihre Formulierung oder Zeichensetzung kann sich ändern und dadurch vorhandenen Code zum Auswerten der Meldungen beeinträchtigen. Wenn Sie einen Fehler aus einer Funktion heraus auslösen, können Sie deshalb statt einer für Menschen lesbaren Fehlermeldung die Ursache als strukturierte Daten für die maschinelle Auswertung bereitstellen.

```js
function makeRSA(p, q) {
  if (!Number.isInteger(p) || !Number.isInteger(q)) {
    throw new Error("RSA key generation requires integer inputs.", {
      cause: { code: "NonInteger", values: [p, q] },
    });
  }
  if (!areCoprime(p, q)) {
    throw new Error("RSA key generation requires two co-prime integers.", {
      cause: { code: "NonCoprime", values: [p, q] },
    });
  }
  // rsa algorithm…
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Error` mit Unterstützung für `cause` in `core-js`](https://core-js.io/docs/features/ecmascript/error)
- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
