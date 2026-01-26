---
title: "Fehler: cause"
short-title: cause
slug: Web/JavaScript/Reference/Global_Objects/Error/cause
l10n:
  sourceCommit: 1d2e1875bdfdd2fb8d0806535220bbd56d3a091d
---

Die **`cause`**-Datenproperty einer {{jsxref("Error")}}-Instanz gibt die spezifische ursprüngliche Ursache des Fehlers an.

Sie wird verwendet, wenn ein Fehler aufgefangen und mit einer spezifischeren oder nützlicheren Fehlermeldung erneut geworfen wird, um weiterhin Zugang zum ursprünglichen Fehler zu haben.

## Wert

Der Wert, der im `options.cause`-Argument an den [`Error()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error)-Konstruktor übergeben wurde. Er muss möglicherweise nicht vorhanden sein.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Der Wert von `cause` kann jeden Typ haben. Sie sollten nicht davon ausgehen, dass der von Ihnen abgefangene Fehler eine `Error`-Instanz als `cause` hat, ebenso wenig wie Sie sicher sein können, dass die im `catch`-Statement gebundene Variable eine `Error` ist. Das unten stehende Beispiel "Bereitstellung von strukturierten Daten als Fehlerursache" zeigt einen Fall, in dem absichtlich eine Nicht-Fehlermeldung als Ursache angegeben wird.

Die Unterklassen {{jsxref("SuppressedError")}} und {{jsxref("AggregateError")}} dienen beide dem Zweck, mehrere Fehler zu verknüpfen. Sie repräsentieren beide mehrere Fehlerstellen: `SuppressedError` repräsentiert einen Fehler, der beim Umgang mit einem anderen Fehler auftrat, während `AggregateError` eine Sammlung von mehreren, nicht zusammenhängenden Fehlern repräsentiert, die während derselben Operation auftraten. Die `cause`-Eigenschaft repräsentiert eine einzelne Fehlerstelle, wobei der umschlossene Fehler nur Kontext zur Ursache hinzufügt und keinen zusätzlichen Fehler darstellt.

Das folgende Beispiel zeigt die typische Verwendung von `cause`. Es gibt eine einzige Fehlerstelle, die innerhalb von `mainLogic()` entspringt. Die `throw new Error()`-Anweisung umhüllt lediglich diesen ursprünglichen Fehler, um Kontext hinzuzufügen, und stellt keinen zusätzlichen Fehler dar.

```js
try {
  mainLogic();
} catch (err) {
  throw new Error("Main logic failed", { cause: err });
}
```

Das folgende Beispiel zeigt die typische Verwendung von `SuppressedError`. Es gibt zwei Fehlerstellen: eine innerhalb von `mainLogic()` und eine innerhalb von `cleanup()`. Die `SuppressedError`-Instanz verknüpft die zwei Fehler.

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

Das folgende Beispiel zeigt die typische Verwendung von `AggregateError`. Es gibt mehrere Fehlerstellen innerhalb von `mainLogic()`. Die `AggregateError`-Instanz verknüpft alle Fehler.

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

### Erneutes Werfen eines Fehlers mit einer Ursache

Es kann manchmal nützlich sein, einen Fehler abzufangen und ihn mit einer neuen Nachricht erneut zu werfen.
In diesem Fall sollten Sie den ursprünglichen Fehler in den Konstruktor für den neuen `Error` übergeben, wie gezeigt.

```js
try {
  connectToDatabase();
} catch (err) {
  throw new Error("Connecting to database failed.", { cause: err });
}
```

Für ein detaillierteres Beispiel siehe [Error > Differenzieren zwischen ähnlichen Fehlern](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

### Bereitstellung von strukturierten Daten als Fehlerursache

Fehlermeldungen, die für den menschlichen Verbrauch geschrieben wurden, sind möglicherweise nicht geeignet für die maschinelle Analyse — da sie einer Umformulierung oder Zeichenänderungen unterliegen können, die jede bestehende Analyse, die zur Verarbeitung gedacht ist, beeinträchtigen könnten. Deshalb können Sie, wenn Sie einen Fehler aus einer Funktion werfen, anstatt einer menschenlesbaren Fehlermeldung, alternativ die Ursache als strukturierte Daten bereitstellen, für die maschinelle Analyse.

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

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
