---
title: "Error: cause"
slug: Web/JavaScript/Reference/Global_Objects/Error/cause
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

Die **`cause`** Daten-Eigenschaft einer {{jsxref("Error")}} Instanz gibt die spezifische ursprüngliche Ursache des Fehlers an.

Sie wird verwendet, wenn ein Fehler abgefangen und mit einer spezifischeren oder nützlicheren Fehlermeldung erneut geworfen wird, um trotzdem Zugriff auf den ursprünglichen Fehler zu behalten.

## Wert

Der Wert, der dem [`Error()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) Konstruktor im `options.cause` Argument übergeben wurde. Er kann auch fehlen.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Der Wert von `cause` kann jeden Typ haben. Sie sollten nicht davon ausgehen, dass der abgefangene Fehler ein `Error` als `cause` hat, genauso wenig wie Sie sicher sein können, dass die im `catch`-Block gebundene Variable ein `Error` ist. Das Beispiel "Bereitstellung strukturierter Daten als Fehlerursache" unten zeigt einen Fall, in dem absichtlich ein Nicht-Fehler als Ursache angegeben wird.

## Beispiele

### Einen Fehler mit einer Ursache erneut werfen

Es ist manchmal nützlich, einen Fehler abzufangen und ihn mit einer neuen Nachricht erneut zu werfen.
In diesem Fall sollten Sie den ursprünglichen Fehler an den Konstruktor des neuen `Error` übergeben, wie gezeigt.

```js
try {
  connectToDatabase();
} catch (err) {
  throw new Error("Connecting to database failed.", { cause: err });
}
```

Für ein ausführlicheres Beispiel siehe [Error > Similar Errors unterscheiden](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

### Strukturierte Daten als Fehlerursache bereitstellen

Fehlermeldungen, die für den menschlichen Gebrauch geschrieben wurden, sind möglicherweise ungeeignet für maschinelles Parsen — da sie umformuliert oder interpunktiert werden können, was jedes bestehende Parsing, das sie verarbeiten soll, beeinträchtigen kann. Daher kann beim Werfen eines Fehlers aus einer Funktion, anstelle einer menschenlesbaren Fehlermeldung, die Ursache als strukturierte Daten für maschinelles Parsen bereitgestellt werden.

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
