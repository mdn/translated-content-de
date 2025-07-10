---
title: "Fehler: cause"
short-title: cause
slug: Web/JavaScript/Reference/Global_Objects/Error/cause
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`cause`** Dateneigenschaft einer {{jsxref("Error")}}-Instanz gibt den spezifischen ursprünglichen Grund des Fehlers an.

Sie wird verwendet, wenn ein Fehler abgefangen und mit einer spezifischeren oder nützlicheren Fehlermeldung erneut ausgelöst wird, um dennoch Zugriff auf den ursprünglichen Fehler zu haben.

## Wert

Der Wert, der dem [`Error()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/Error)-Konstruktor im `options.cause`-Argument übergeben wurde. Er ist möglicherweise nicht vorhanden.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Der Wert von `cause` kann jeden Typ haben. Sie sollten nicht davon ausgehen, dass der von Ihnen abgefangene Fehler ein `Error` als `cause` hat, ebenso wie Sie nicht sicher sein können, dass die im `catch`-Statement gebundene Variable ein `Error` ist. Das Beispiel „Bereitstellung strukturierter Daten als Fehlerursache“ unten zeigt einen Fall, in dem absichtlich kein Fehler als Ursache angegeben wird.

## Beispiele

### Einen Fehler mit Ursache erneut werfen

Es ist manchmal nützlich, einen Fehler abzufangen und ihn mit einer neuen Nachricht erneut auszulösen. In diesem Fall sollten Sie den ursprünglichen Fehler in den Konstruktor des neuen `Error` übergeben, wie gezeigt.

```js
try {
  connectToDatabase();
} catch (err) {
  throw new Error("Connecting to database failed.", { cause: err });
}
```

Für ein detaillierteres Beispiel siehe [Error > Differenzierung zwischen ähnlichen Fehlern](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

### Strukturierte Daten als Fehlerursache bereitstellen

Fehlermeldungen, die für Menschen geschrieben sind, können für die maschinelle Analyse ungeeignet sein — da sie umformuliert oder geändert werden können, was bestehende Analysen, die sie verwenden, beeinträchtigen könnte. Wenn Sie einen Fehler von einer Funktion werfen, können Sie als Alternative zu einer lesbaren Fehlermeldung die Ursache als strukturierte Daten für die maschinelle Verarbeitung bereitstellen.

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
