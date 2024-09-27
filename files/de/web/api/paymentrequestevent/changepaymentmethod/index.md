---
title: "PaymentRequestEvent: changePaymentMethod()-Methode"
short-title: changePaymentMethod()
slug: Web/API/PaymentRequestEvent/changePaymentMethod
l10n:
  sourceCommit: d526ab2d79b7960610de8a6b961c06da642d1bd9
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`changePaymentMethod()`**-Methode der [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent)-Schnittstelle wird vom Zahlungshandler verwendet, um einen aktualisierten Betrag zu erhalten, basierend auf Details der Zahlungsmethode wie der Rechnungsadresse.

Wenn diese Methode aufgerufen wird, wird ein [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent) ausgelöst.

## Syntax

```js-nolint
changePaymentMethod(methodName)
changePaymentMethod(methodName, methodDetails)
```

### Parameter

- `methodName`
  - : Der Name der zu verwendenden Zahlungsmethode.
- `methodDetails` {{optional_inline}}
  - : Ein Objekt, das methodenspezifische Details enthält, die aktualisiert werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem `PaymentRequestDetailsUpdate`-Objekt aufgelöst wird. Dieses Objekt enthält die folgenden Eigenschaften:

- `error`
  - : Ein String, der erklärt, warum die vom Benutzer ausgewählte Zahlungsmethode nicht verwendet werden kann.
- `total`
  - : Ein aktualisierter Gesamtbetrag basierend auf der geänderten Zahlungsmethode. Der Gesamtbetrag kann sich beispielsweise ändern, weil die Rechnungsadresse der vom Benutzer ausgewählten Zahlungsmethode die anwendbare Umsatzsteuer ändert.
- `modifiers`

  - : Ein {{jsxref("Array")}} von `PaymentDetailsModifier`-Objekten, deren Eigenschaften in [`PaymentRequestEvent.modifiers`](/de/docs/Web/API/PaymentRequestEvent/modifiers) beschrieben sind.

- `paymentMethodErrors`
  - : Ein Objekt, das etwaige Validierungsfehler für die Zahlungsmethode enthält.

## Beispiele

Das Folgende zeigt einen trivialen Code-Schnipsel, der in einem Service Worker verwendet werden könnte, um eine Benachrichtigung über eine Änderung der Zahlungsmethode an das Hauptfenster des Zahlungshandlers zu senden. Ein vollständiges Testbeispiel finden Sie unter [Payment handler for testing payment method change event](https://rsolomakhin.github.io/pr/apps/pmc/).

```js
function notifyPaymentMethodChanged(e) {
  e.changePaymentMethod("someMethod")
    .then((paymentMethodChangeResponse) => {
      paymentHandlerWindow.postMessage(paymentMethodChangeResponse);
    })
    .catch((error) => {
      sendMessage({ error: error.message });
    });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
