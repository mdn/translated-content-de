---
title: "PaymentManager: enableDelegations() Methode"
short-title: enableDelegations()
slug: Web/API/PaymentManager/enableDelegations
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`enableDelegations()`** Methode der [`PaymentManager`](/de/docs/Web/API/PaymentManager) Schnittstelle delegiert die Verantwortung für die Bereitstellung verschiedener Teile der benötigten Zahlungsinformationen an die Zahlungs-App, anstatt diese vom Browser zu sammeln (zum Beispiel über die automatische Vervollständigung).

Wenn beispielsweise die `requestShipping`-Option im Optionsobjekt auf `true` gesetzt ist, wenn der [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktor aufgerufen wird, wird eine Versandadresse zurückgegeben.

- Wenn `enableDelegations()` verwendet wurde, um `shippingAddress` zu delegieren, kommt diese Adresse von der Zahlungs-App.
- Andernfalls kommt sie aus der automatischen Vervollständigung des Browsers.

## Syntax

```js-nolint
enableDelegations(delegations)
```

### Parameter

- `delegations` {{optional_inline}}
  - : Ein Array, das einen oder mehrere enumerierte Werte enthält, die angeben, welche Zahlungsinformationen Sie an die Zahlungs-App delegieren möchten. Mögliche Werte können sein:
    - `payerEmail`
      - : Die Zahlungs-App wird die E-Mail des Zahlenden bereitstellen, wann immer sie benötigt wird.
    - `payerName`
      - : Die Zahlungs-App wird den Namen des Zahlenden bereitstellen, wann immer er benötigt wird.
    - `payerPhone`
      - : Die Zahlungs-App wird die Telefonnummer des Zahlenden bereitstellen, wann immer sie benötigt wird.
    - `shippingAddress`
      - : Die Zahlungs-App wird die Versandadresse bereitstellen, wann immer sie benötigt wird.

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

- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
