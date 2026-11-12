---
title: "PaymentRequest: id-Eigenschaft"
short-title: id
slug: Web/API/PaymentRequest/id
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Das schreibgeschützte Attribut **`id`** des Interfaces [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) gibt eine eindeutige Kennung für eine bestimmte Instanz von [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) zurück.

Beim Erstellen einer Instanz von [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) können Sie eine benutzerdefinierte ID angeben. Wenn Sie keine angeben, setzt der Browser den Wert von `id` automatisch auf eine UUID.

## Wert

Ein String.

## Beispiel

Dieses Beispiel zeigt, wie Sie einer Instanz von [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) eine benutzerdefinierte ID zuweisen.

```js
const details = {
  id: "super-store-order-123-12312",
  total: {
    label: "Total due",
    amount: { currency: "USD", value: "65.00" },
  },
};
const request = new PaymentRequest(methodData, details);
console.log(request.id); // super-store-order-123-12312
```

Die `id` ist auch in der von der Methode `show()` zurückgegebenen [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) verfügbar, dort jedoch unter dem Attribut `requestId`.

```js
const response = await request.show();
console.log(response.requestId === request.id);

// And in serialized form too
const json = response.toJSON();
console.log(json.requestId, response.requestId, request.id);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
