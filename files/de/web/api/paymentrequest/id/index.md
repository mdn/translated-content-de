---
title: "PaymentRequest: id-Eigenschaft"
short-title: id
slug: Web/API/PaymentRequest/id
l10n:
  sourceCommit: a5d90e4c36c0155024621fe00e15ae61f3697d88
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Das schreibgeschützte Attribut **`id`** des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Interfaces gibt eine eindeutige Kennung für eine bestimmte [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Instanz zurück.

Beim Erstellen einer Instanz von [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) können Sie eine benutzerdefinierte Kennung angeben. Wenn keine angegeben wird, setzt der Browser automatisch den Wert der Kennung auf eine UUID.

## Beispiel

Dieses Beispiel zeigt, wie einer [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Instanz eine benutzerdefinierte Kennung gegeben wird.

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

Die `id` ist dann auch in der [`PaymentResponse`](/de/docs/Web/API/PaymentResponse) verfügbar, die von der `show()`-Methode zurückgegeben wird, jedoch unter dem Attribut `requestId`.

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
