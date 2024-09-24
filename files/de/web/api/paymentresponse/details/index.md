---
title: "PaymentResponse: details-Eigenschaft"
short-title: details
slug: Web/API/PaymentResponse/details
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die **`details`** schreibgeschützte Eigenschaft des {{domxref("PaymentResponse")}}-Interfaces gibt ein JSON-serialisierbares Objekt zurück, das eine zahlungsmethoden-spezifische Nachricht bereitstellt, die vom Händler zur Verarbeitung der Transaktion und zur Bestimmung eines erfolgreichen Geldtransfers verwendet wird.

Diese Daten werden von der Zahlungs-App zurückgegeben, die die Zahlungsanforderung erfüllt. Entwickler müssen sich an den Verantwortlichen der URL wenden, um die erwartete Struktur des Details-Objekts zu erfahren.

## Wert

## Beispiele

Das folgende Beispiel extrahiert die Details aus dem {{domxref('PaymentResponse')}}-Objekt mittels des von {{domxref('PaymentRequest.show()')}} zurückgegebenen Versprechens. In einer realen Implementierung würden diese Daten dann an einen Zahlungsserver gesendet werden.

```js
payment.show().then((paymentResponse) => {
  const paymentData = {
    // Zahlungsart-String
    method: paymentResponse.methodName,
    // angeforderte Zahlungsdetails
    details: paymentResponse.details,
    // Informationen zur Versandadresse
    address: toDict(paymentResponse.shippingAddress),
  };
  // Informationen an den Server senden
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
