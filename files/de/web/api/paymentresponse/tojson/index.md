---
title: "PaymentResponse: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PaymentResponse/toJSON
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{SecureContext_Header}}{{APIRef("Payment Request API")}}

Die **`toJSON()`**-Methode der {{domxref("PaymentResponse")}}-Schnittstelle ist ein {{Glossary("Serialization","Serializer")}}; sie gibt eine JSON-Darstellung des {{domxref("PaymentResponse")}}-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des {{domxref("PaymentResponse")}}-Objekts darstellt.

## Beispiele

### Verwendung der toJSON-Methode

In diesem Beispiel gibt der Aufruf von `paymentResponse.toJSON()` eine JSON-Darstellung des `PaymentResponse`-Objekts zurück.

```js
payment.show().then((paymentResponse) => {
  console.log(paymentResponse.toJSON())
  };
});
```

Um einen JSON-String zu erhalten, können Sie direkt [`JSON.stringify(paymentResponse)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; dies wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
