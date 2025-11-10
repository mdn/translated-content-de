---
title: "PaymentRequest: shippingOption-Eigenschaft"
short-title: shippingOption
slug: Web/API/PaymentRequest/shippingOption
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`shippingOption`**-Nur-Lese-Attribut des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Interfaces gibt entweder die ID einer ausgewählten Versandoption, `null` (wenn keine Versandoption ausgewählt wurde) oder eine vom Benutzer ausgewählte Versandoption zurück.
Es ist anfangs `null`, wenn keine "ausgewählten" Versandoptionen bereitgestellt werden.

Dieses Attribut wird nur gefüllt, wenn der Konstruktor mit dem auf `true` gesetzten `requestShipping`-Flag aufgerufen wird.
Wenn `requestShipping` `false` (oder fehlend) war, gibt `shippingOption` `null` zurück, selbst wenn der Entwickler eine ausgewählte Versandoption bereitstellt.

## Wert

Ein Objekt oder `null`.

## Beispiele

Im folgenden Beispiel werden die [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event)- und die [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event)-Ereignisse ausgelöst.
In jedem werden Aufrufe an `updateDetails()` gemacht, einmal mit einem Promise und das andere Mal mit einem einfachen JS-Objekt.
Dies demonstriert synchrone und asynchrone Aktualisierungen eines Zahlungsblatts.

```js
const request = new PaymentRequest(methodData, details, options);
// Async update to details
request.onshippingaddresschange = (ev) => {
  ev.updateWith(checkShipping(request));
};
// Sync update to the total
request.onshippingoptionchange = (ev) => {
  const shippingOption = shippingOptions.find(
    (option) => option.id === request.id,
  );
  const newTotal = {
    currency: "USD",
    label: "Total due",
    value: calculateNewTotal(shippingOption),
  };
  ev.updateWith({ ...details, total: newTotal });
};
async function checkShipping(request) {
  try {
    const json = request.shippingAddress.toJSON();

    await ensureCanShipTo(json);
    const { shippingOptions, total } = await calculateShipping(json);

    return { ...details, shippingOptions, total };
  } catch (err) {
    return { ...details, error: `Sorry! we can't ship to your address.` };
  }
}
```

## Browser-Kompatibilität

{{Compat}}
