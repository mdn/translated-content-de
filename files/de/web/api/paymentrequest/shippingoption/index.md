---
title: "PaymentRequest: shippingOption-Eigenschaft"
short-title: shippingOption
slug: Web/API/PaymentRequest/shippingOption
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`shippingOption`** schreibgeschützte Attribut des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Interfaces gibt entweder die ID einer ausgewählten Versandoption, `null` (wenn keine Versandoption zur Auswahl festgelegt wurde) oder eine vom Benutzer ausgewählte Versandoption zurück.
Es ist zunächst `null`, wenn keine "ausgewählten" Versandoptionen bereitgestellt werden.

Dieses Attribut wird nur gefüllt, wenn der Konstruktor mit dem `requestShipping`-Flag auf `true` gesetzt aufgerufen wird.
Wenn `requestShipping` `false` (oder fehlend) ist, gibt `shippingOption` `null` zurück, selbst wenn der Entwickler eine ausgewählte Versandoption bereitstellt.

## Wert

Ein Objekt oder `null`.

## Beispiele

Im folgenden Beispiel werden die Ereignisse [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event) und [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event) ausgelöst.
Bei jedem Ereignis wird `updateWith()` aufgerufen, einmal mit einem Promise und das andere Mal mit einem normalen JS-Objekt.
Dies demonstriert synchrone und asynchrone Aktualisierungen eines Zahlungsblattes.

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
