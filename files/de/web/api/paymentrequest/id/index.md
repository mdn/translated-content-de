---
title: "PaymentRequest: id-Eigenschaft"
short-title: id
slug: Web/API/PaymentRequest/id
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Das schreibgeschützte Attribut **`id`** des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Interfaces gibt eine eindeutige Kennung für eine bestimmte [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Instanz zurück.

Beim Erstellen einer Instanz des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) können Sie eine benutzerdefinierte ID angeben. Wenn keine bereitgestellt wird, setzt der Browser den ID-Wert automatisch auf eine UUID.

## Beispiel

Dieses Beispiel zeigt, wie einer [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Instanz eine benutzerdefinierte ID zugewiesen wird.

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

Die `id` ist dann auch im [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) verfügbar, die von der `show()`-Methode zurückgegeben wird, jedoch unter dem Attribut `requestId`.

```js
const response = await request.show();
console.log(response.requestId === request.id);

// And in serialized form too
const json = response.toJSON();
console.log(json.requestId, response.requestId, request.id);
```

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
