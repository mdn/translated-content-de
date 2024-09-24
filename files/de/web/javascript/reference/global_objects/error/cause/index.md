---
title: "Fehler: cause"
slug: Web/JavaScript/Reference/Global_Objects/Error/cause
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

Die **`cause`** Daten-Eigenschaft einer {{jsxref("Error")}}-Instanz gibt die spezifische ursprüngliche Ursache des Fehlers an.

Sie wird verwendet, wenn ein Fehler abgefangen und mit einer spezifischeren oder nützlicheren Fehlermeldung erneut ausgelöst wird, um weiterhin Zugriff auf den ursprünglichen Fehler zu haben.

## Wert

Der Wert, der an den [`Error()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) Konstruktor im `options.cause` Argument übergeben wurde. Er ist möglicherweise nicht vorhanden.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Der Wert von `cause` kann jeden Typ haben. Sie sollten nicht davon ausgehen, dass der abgefangene Fehler ein `Error` als `cause` hat, genauso wenig wie Sie sicher sein können, dass die im `catch`-Anweisungsblock gebundene Variable ein `Error` ist. Das untenstehende Beispiel "Bereitstellung von strukturierten Daten als Fehlerursache" zeigt einen Fall, in dem absichtlich etwas anderes als ein Fehler als Ursache angegeben wird.

## Beispiele

### Erneutes Auslösen eines Fehlers mit einer Ursache

Es ist manchmal nützlich, einen Fehler abzufangen und ihn mit einer neuen Meldung erneut auszulösen. In diesem Fall sollten Sie den ursprünglichen Fehler an den Konstruktor des neuen `Error` übergeben, wie gezeigt.

```js
try {
  connectToDatabase();
} catch (err) {
  throw new Error("Connecting to database failed.", { cause: err });
}
```

Für ein detaillierteres Beispiel siehe [Error > Unterscheidung zwischen ähnlichen Fehlern](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

### Bereitstellung von strukturierten Daten als Fehlerursache

Für den menschlichen Gebrauch geschriebene Fehlermeldungen sind möglicherweise nicht geeignet für maschinelles Parsen — da sie umformuliert oder anderweitig geändert werden können, was bestehendes Parsen beeinträchtigen könnte. Daher können Sie beim Auslösen eines Fehlers aus einer Funktion, anstatt einer für Menschen lesbaren Fehlermeldung, die Ursache als strukturierte Daten bereitstellen, die maschinell geparst werden können.

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
