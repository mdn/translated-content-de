---
title: "PaymentRequest: shippingOption-Eigenschaft"
short-title: shippingOption
slug: Web/API/PaymentRequest/shippingOption
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Das schreibgeschützte Attribut **`shippingOption`** der {{domxref('PaymentRequest')}}-Schnittstelle gibt entweder die ID einer ausgewählten Versandoption, `null` (wenn keine Versandoption zur Auswahl gestellt wurde) oder eine vom Benutzer ausgewählte Versandoption zurück. Es ist anfangs `null`, wenn keine "ausgewählten" Versandoptionen bereitgestellt werden.

Dieses Attribut wird nur gefüllt, wenn der Konstruktor mit dem `requestShipping`-Flag auf `true` gesetzt aufgerufen wird. Wenn `requestShipping` `false` (oder fehlend) war, gibt `shippingOption` `null zurück, selbst wenn der Entwickler eine ausgewählte Versandoption bereitstellt.

## Wert

## Beispiele

Im folgenden Beispiel werden die Ereignisse {{domxref('PaymentRequest.shippingaddresschange_event', 'shippingaddresschange')}} und {{domxref('PaymentRequest.shippingoptionchange_event', 'shippingoptionchange')}} ausgelöst. In jedem Fall werden Aufrufe von `updateDetails()` durchgeführt, einmal mit einem Promise und das andere Mal mit einem einfachen JS-Objekt. Dies zeigt synchrone und asynchrone Aktualisierungen eines Zahlungsblatts.

```js
const request = new PaymentRequest(methodData, details, options);
// Asynchrone Aktualisierung der Details
request.onshippingaddresschange = (ev) => {
  ev.updateWith(checkShipping(request));
};
// Synchrone Aktualisierung des Gesamtbetrags
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

## Kompatibilität mit Browsern

{{Compat}}
