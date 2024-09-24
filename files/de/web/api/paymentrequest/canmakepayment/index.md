---
title: "PaymentRequest: canMakePayment()-Methode"
short-title: canMakePayment()
slug: Web/API/PaymentRequest/canMakePayment
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Die Methode **`canMakePayment()`** des {{domxref("PaymentRequest")}} bestimmt, ob die Anfrage so konfiguriert ist, dass sie mit mindestens einer der vom {{Glossary("user agent")}} unterstützten Zahlungsmethoden kompatibel ist.

Sie können dies aufrufen, bevor Sie {{domxref("PaymentRequest.show", "show()")}} aufrufen, um eine optimierte Benutzererfahrung zu bieten, wenn der Browser des Benutzers keine der von Ihnen akzeptierten Zahlungsmethoden verarbeiten kann.

Zum Beispiel könnten Sie `canMakePayment()` aufrufen, um zu bestimmen, ob der Browser dem Benutzer erlaubt, über die Payment Request API zu zahlen. Wenn dies nicht der Fall ist, könnten Sie auf eine andere Zahlungsmethode zurückgreifen oder eine Liste von Methoden anbieten, die nicht von der Payment Request API behandelt werden (oder sogar Anweisungen zum Bezahlen per Post oder Telefon bereitstellen).

## Syntax

```js-nolint
canMakePayment()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}} auf einen booleschen Wert, der zu `true` aufgelöst wird, wenn der User Agent eine der beim Erstellen der Anfrage mit dem {{domxref('PaymentRequest.PaymentRequest()','PaymentRequest')}} Konstruktor angegebenen Zahlungsmethoden unterstützt. Wenn die Zahlung nicht verarbeitet werden kann, erhält das Versprechen den Wert `false`.

> [!NOTE]
> Wenn Sie dies zu häufig aufrufen, kann der Browser das zurückgegebene Versprechen mit einem `DOMException` ablehnen.

## Beispiele

Im folgenden Beispiel, das [aus einer Demo entnommen wurde](https://rsolomakhin.github.io/samples/paymentrequest/can-make-payment/), wird ein `PaymentRequest`-Objekt asynchron sowohl für Apple Pay als auch für Example Pay erstellt. Es umschließt den Aufruf von `canMakePayment()` in einer Funktion zur Feature-Erkennung und ruft je nach Auflösung des `Promise` einen entsprechenden Rückruf auf.

```js
async function initPaymentRequest() {
  const details = {
    total: {
      label: "Total",
      amount: {
        currency: "USD",
        value: "0.00",
      },
    },
  };

  const supportsApplePay = new PaymentRequest(
    [{ supportedMethods: "https://apple.com/apple-pay" }],
    details,
  ).canMakePayment();

  // Unterstützt Apple Pay?
  if (await supportsApplePay) {
    // beispielsweise Apple Pay-Logo anzeigen
    return;
  }

  // Andernfalls prüfen wir, ob wir Example Pay verwenden können
  const supportsExamplePay = await new PaymentRequest(
    [{ supportedMethods: "https://example.com/pay" }],
    details,
  ).canMakePayment();

  if (supportsExamplePay) {
    // Unterstützung für Example Pay anzeigen
    return;
  }

  // Andernfalls Zahlungen mit HTML-Formular-Element vornehmen
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref('PaymentRequest.show','PaymentRequest.show()')}}
