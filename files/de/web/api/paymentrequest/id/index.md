---
title: "PaymentRequest: id-Eigenschaft"
short-title: id
slug: Web/API/PaymentRequest/id
l10n:
  sourceCommit: b9569fcd65bb09ea7e032ef0938185eccdc2d9c4
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Das schreibgeschützte Attribut **`id`** der Schnittstelle [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) gibt eine eindeutige Kennung für eine bestimmte [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Instanz zurück.

Beim Erstellen einer [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Instanz können Sie eine benutzerdefinierte id angeben. Wenn Sie keine angeben, setzt der Browser den Wert von `id` automatisch auf eine UUID.

Eine Zeichenfolge.

## Beispiel

Dieses Beispiel zeigt, wie Sie einer [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Instanz eine benutzerdefinierte id zuweisen.

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

Die `id` ist auch in der vom `show()`-Methodenaufruf zurückgegebenen [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) verfügbar, dort jedoch unter dem Attribut `requestId`.

```js
const response = await request.show();
console.log(response.requestId === request.id);

// And in serialized form too
const json = response.toJSON();
console.log(json.requestId, response.requestId, request.id);
```

## Wert

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
