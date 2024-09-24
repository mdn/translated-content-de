---
title: "PaymentManager: enableDelegations() Methode"
short-title: enableDelegations()
slug: Web/API/PaymentManager/enableDelegations
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`enableDelegations()`**-Methode der {{domxref("PaymentManager")}}-Schnittstelle delegiert die Verantwortung für die Bereitstellung verschiedener Teile der benötigten Zahlungsinformationen an die Zahlungs-App, anstatt sie vom Browser zu sammeln (zum Beispiel über die Autovervollständigung).

Wenn zum Beispiel die Option `requestShipping` auf `true` gesetzt ist, wenn der {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}}-Konstruktor aufgerufen wird, wird eine Lieferadresse zurückgegeben.

- Wenn `enableDelegations()` verwendet wurde, um `shippingAddress` zu delegieren, kommt diese Adresse von der Zahlungs-App.
- Andernfalls kommt sie aus der Browser-Autovervollständigung.

## Syntax

```js-nolint
enableDelegations(delegations)
```

### Parameter

- `delegations` {{optional_inline}}
  - : Ein Array, das einen oder mehrere enumerierte Werte enthält, die die Zahlungsinformationen angeben, die Sie an die Zahlungs-App delegieren möchten. Mögliche Werte sind:
    - `payerEmail`
      - : Die Zahlungs-App wird die E-Mail-Adresse des Zahlers bereitstellen, wann immer sie benötigt wird.
    - `payerName`
      - : Die Zahlungs-App wird den Namen des Zahlers bereitstellen, wann immer er benötigt wird.
    - `payerPhone`
      - : Die Zahlungs-App wird die Telefonnummer des Zahlers bereitstellen, wann immer sie benötigt wird.
    - `shippingAddress`
      - : Die Zahlungs-App wird die Lieferadresse bereitstellen, wann immer sie benötigt wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Wert von `undefined` aufgelöst wird.

## Beispiele

```js
navigator.serviceWorker.register("serviceworker.js").then((registration) => {
  registration.paymentManager.userHint = "Card number should be 16 digits";

  registration.paymentManager
    .enableDelegations(["shippingAddress", "payerName"])
    .then(() => {
      // ...
    });

  // ...
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Payment Handler API", "Payment Handler API", "", "nocode")}}
- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
