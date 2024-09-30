---
title: "Error: cause"
slug: Web/JavaScript/Reference/Global_Objects/Error/cause
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

Die **`cause`** Daten-Eigenschaft einer {{jsxref("Error")}} Instanz zeigt die spezifische ursprüngliche Ursache des Fehlers an.

Sie wird verwendet, wenn ein Fehler abgefangen und mit einer spezifischeren oder nützlicheren Fehlermeldung erneut geworfen wird, um weiterhin Zugriff auf den ursprünglichen Fehler zu haben.

## Wert

Der Wert, der dem [`Error()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) Konstruktor im `options.cause` Argument übergeben wurde. Er könnte eventuell nicht vorhanden sein.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Der Wert von `cause` kann von jedem Typ sein. Sie sollten nicht davon ausgehen, dass der abgefangene Fehler eine `Error` als `cause` hat, genauso wie Sie nicht sicher sein können, dass die im `catch`-Statement gebundene Variable ein `Error` ist. Das untenstehende Beispiel "Bereitstellung strukturierter Daten als Fehlerursache" zeigt einen Fall, in dem absichtlich keine Fehlermeldung als Ursache angegeben wird.

## Beispiele

### Einen Fehler mit einer Ursache erneut werfen

Es kann manchmal nützlich sein, einen Fehler abzufangen und ihn mit einer neuen Nachricht erneut zu werfen. In diesem Fall sollten Sie den ursprünglichen Fehler in den Konstruktor für den neuen `Error` übergeben, wie gezeigt.

```js
try {
  connectToDatabase();
} catch (err) {
  throw new Error("Connecting to database failed.", { cause: err });
}
```

Für ein detaillierteres Beispiel siehe [Error > Differenzierung zwischen ähnlichen Fehlern](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

### Strukturierte Daten als Fehlerursache bereitstellen

Fehlermeldungen, die für den menschlichen Gebrauch geschrieben wurden, sind möglicherweise nicht geeignet für maschinelles Parsen — da sie umformuliert oder die Zeichensetzung geändert werden könnte, was bestehende Parsing-Mechanismen stören könnte. Daher können Sie beim Werfen eines Fehlers von einer Funktion, als Alternative zu einer für Menschen lesbaren Fehlermeldung, die Ursache als strukturierte Daten bereitstellen, um ein maschinelles Parsen zu ermöglichen.

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
