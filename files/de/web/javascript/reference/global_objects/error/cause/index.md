---
title: "Error: cause"
short-title: cause
slug: Web/JavaScript/Reference/Global_Objects/Error/cause
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`cause`**-Eigenschaft eines {{jsxref("Error")}}-Objekts gibt die spezifische ursprüngliche Ursache des Fehlers an.

Sie wird verwendet, wenn ein Fehler abgefangen und mit einer spezifischeren oder nützlicheren Fehlermeldung erneut ausgelöst wird, um weiterhin Zugriff auf den ursprünglichen Fehler zu haben.

## Wert

Der Wert, der dem [`Error()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error)-Konstruktor im `options.cause`-Argument übergeben wurde. Er ist möglicherweise nicht vorhanden.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Der Wert von `cause` kann jeden Typ haben. Sie sollten nicht davon ausgehen, dass der abgefangene Fehler ein `Error` als `cause` hat, genauso wenig wie Sie sicherstellen können, dass die im `catch`-Statement gebundene Variable ein `Error` ist. Das Beispiel "Bereitstellung strukturierter Daten als Fehlerursache" unten zeigt einen Fall, in dem absichtlich kein Fehler als Ursache angegeben wird.

## Beispiele

### Einen Fehler mit Ursache erneut auslösen

Es kann manchmal nützlich sein, einen Fehler abzufangen und ihn mit einer neuen Nachricht erneut auszulösen. In diesem Fall sollten Sie den ursprünglichen Fehler im Konstruktor für den neuen `Error` übergeben, wie gezeigt.

```js
try {
  connectToDatabase();
} catch (err) {
  throw new Error("Connecting to database failed.", { cause: err });
}
```

Für ein detaillierteres Beispiel siehe [Error > Unterscheiden zwischen ähnlichen Fehlern](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

### Strukturierte Daten als Fehlerursache bereitstellen

Fehlermeldungen, die für den menschlichen Konsum geschrieben wurden, können für die maschinelle Verarbeitung ungeeignet sein — da sie möglicherweise umformuliert oder interpunktiert geändert werden, was bestehendes Parsing, das für deren Verarbeitung geschrieben wurde, möglicherweise ungültig macht. Wenn Sie also einen Fehler aus einer Funktion auslösen, können Sie anstelle einer für Menschen lesbaren Fehlermeldung die Ursache als strukturierte Daten für die maschinelle Verarbeitung bereitstellen.

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
