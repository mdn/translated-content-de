---
title: "PaymentRequest: id-Eigenschaft"
short-title: id
slug: Web/API/PaymentRequest/id
l10n:
  sourceCommit: a5d90e4c36c0155024621fe00e15ae61f3697d88
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Das schreibgeschützte Attribut **`id`** der {{domxref("PaymentRequest")}}-Schnittstelle liefert eine eindeutige Kennung für eine bestimmte Instanz von {{domxref("PaymentRequest")}}.

Beim Erstellen einer Instanz von {{domxref("PaymentRequest")}} können Sie eine benutzerdefinierte id angeben. Wenn keine angegeben wird, setzt der Browser den id-Wert automatisch auf eine UUID.

## Beispiel

Dieses Beispiel zeigt, wie einer Instanz von {{domxref("PaymentRequest")}} eine benutzerdefinierte id zugewiesen wird.

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

Die `id` ist dann auch in der {{domxref("PaymentResponse")}} verfügbar, die von der `show()`-Methode zurückgegeben wird, jedoch unter dem `requestId`-Attribut.

```js
const response = await request.show();
console.log(response.requestId === request.id);

// Auch in serialisierter Form
const json = response.toJSON();
console.log(json.requestId, response.requestId, request.id);
```

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
