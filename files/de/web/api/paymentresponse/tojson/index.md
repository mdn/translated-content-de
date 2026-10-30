---
title: "PaymentResponse: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PaymentResponse/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{SecureContext_Header}}{{APIRef("Payment Request API")}}

Die Methode **`toJSON()`** der Schnittstelle [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) gibt ein JSON-serialisierbares, einfaches Objekt zurück, das das `PaymentResponse`-Objekt repräsentiert.

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `PaymentResponse`-Objekt verarbeitet wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares, einfaches Objekt mit den folgenden Eigenschaften:

- [`requestId`](/de/docs/Web/API/PaymentResponse/requestId)
- [`methodName`](/de/docs/Web/API/PaymentResponse/methodName)
- [`details`](/de/docs/Web/API/PaymentResponse/details)
- [`shippingAddress`](/de/docs/Web/API/PaymentResponse/shippingAddress)
- [`shippingOption`](/de/docs/Web/API/PaymentResponse/shippingOption)
- [`payerName`](/de/docs/Web/API/PaymentResponse/payerName)
- [`payerEmail`](/de/docs/Web/API/PaymentResponse/payerEmail)
- [`payerPhone`](/de/docs/Web/API/PaymentResponse/payerPhone)

Der Wert jeder Eigenschaft wird unverändert übernommen. Wenn das zurückgegebene Objekt an {{jsxref("JSON.stringify()")}} übergeben wird, wird die Eigenschaft `shippingAddress` zusätzlich mithilfe von [`PaymentAddress.toJSON()`](/de/docs/Web/API/PaymentAddress/toJSON) serialisiert, sofern sie nicht `null` ist.

## Beispiele

### toJSON() direkt aufrufen

In diesem Beispiel wird ein `PaymentResponse`-Objekt abgerufen. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
payment.show().then((paymentResponse) => {
  const json = paymentResponse.toJSON();
  console.log(json); // A plain object
  console.log(typeof json); // "object"
  console.log(json.methodName); // Same value as paymentResponse.methodName
});
```

### In einen JSON-String serialisieren

Innerhalb der Callback-Funktion aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(paymentResponse));
```

Dadurch würde ein JSON-String wie der folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "requestId": "checkout-123",
  "methodName": "https://example.com/pay",
  "details": {
    "transactionId": "12345"
  },
  "shippingAddress": null,
  "shippingOption": null,
  "payerName": null,
  "payerEmail": null,
  "payerPhone": null
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
