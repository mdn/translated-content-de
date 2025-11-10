---
title: "PaymentResponse: toJSON() Methode"
short-title: toJSON()
slug: Web/API/PaymentResponse/toJSON
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{SecureContext_Header}}{{APIRef("Payment Request API")}}

Die **`toJSON()`** Methode des [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) Interfaces ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) Objekts ist.

## Beispiele

### Verwenden der toJSON Methode

In diesem Beispiel gibt der Aufruf von `paymentResponse.toJSON()` eine JSON-Darstellung des `PaymentResponse` Objekts zurück.

```js
payment.show().then((paymentResponse) => {
  console.log(paymentResponse.toJSON());
});
```

Um eine JSON-Zeichenfolge zu erhalten, können Sie direkt [`JSON.stringify(paymentResponse)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; dies ruft `toJSON()` automatisch auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
