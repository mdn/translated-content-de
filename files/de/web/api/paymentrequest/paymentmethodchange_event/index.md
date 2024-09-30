---
title: "PaymentRequest: paymentmethodchange-Ereignis"
short-title: paymentmethodchange
slug: Web/API/PaymentRequest/paymentmethodchange_event
l10n:
  sourceCommit: 5239b2990f99352463abbe4eb643dcb4267151c7
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

Das **`paymentmethodchange`**-Ereignis wird über die [Payment Request API](/de/docs/Web/API/Payment_Request_API) an ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt geliefert, wenn der Benutzer die Zahlungsmethode innerhalb eines bestimmten Zahlungsabwicklers ändert.

Zum Beispiel, wenn der Benutzer von einer Kreditkarte zu einer anderen in seinem [Apple Pay](https://www.apple.com/apple-pay/) Konto wechselt, wird ein `paymentmethodchange`-Ereignis ausgelöst, um Sie über die Änderung zu informieren.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Event-Handler-Eigenschaft fest.

```js
addEventListener("paymentmethodchange", (event) => {});

onpaymentmethodchange = (event) => {};
```

## Ereignistyp

Ein [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PaymentMethodChangeEvent")}}

## Ereigniseigenschaften

_Neben den unten stehenden Eigenschaften enthält diese Schnittstelle Eigenschaften, die von [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent) geerbt wurden._

- [`methodDetails`](/de/docs/Web/API/PaymentMethodChangeEvent/methodDetails) {{ReadOnlyInline}}
  - : Ein Objekt, das zahlungsmethodenspezifische Daten enthält, die nützlich sind, wenn eine Zahlungsmethode geändert wird. Wenn keine solche Information verfügbar ist, ist dieser Wert `null`.
- [`methodName`](/de/docs/Web/API/PaymentMethodChangeEvent/methodName) {{ReadOnlyInline}}
  - : Ein String, der den Bezeichner der Zahlungsmethode enthält, ein String, der eine bestimmte Zahlungsmethode eindeutig identifiziert. Dieser Bezeichner ist üblicherweise eine URL, die während des Zahlungsprozesses verwendet wird, kann aber auch eine standardisierte nicht-URL-Zeichenkette sein, wie `basic-card`. Der Standardwert ist der leere String, `""`.

## Beispiele

Schauen wir uns ein Beispiel an. Dieser Code erstellt ein neues [`PaymentRequest`](/de/docs/Web/API/PaymentRequest), fügt einen Handler für das `paymentmethodchange`-Ereignis hinzu, indem er die `addEventListener()`-Methode des Requests aufruft, und ruft dann [`show()`](/de/docs/Web/API/PaymentRequest/show) auf, um dem Benutzer die Zahlungsschnittstelle zu präsentieren.

Der Code setzt die Existenz einer Methode `detailsForTransaction()` voraus, die ein Objekt zurückgibt, das als [`details`](/de/docs/Web/API/PaymentRequest/PaymentRequest#details)-Argument an den `PaymentRequest`-Konstruktor übergeben werden kann.

```js
const paymentRequest = new PaymentRequest(
  paymentMethods,
  detailsForTransaction(),
);

paymentRequest.addEventListener(
  "paymentmethodchange",
  handlePaymentChange,
  false,
);

paymentRequest
  .show()
  .then((response) => response.complete("success"))
  .catch((err) => console.error(`Error handling payment request: ${err}`));
```

Die Ereignis-Handler-Funktion selbst, `handlePaymentChange()`, sieht folgendermaßen aus:

```js
handlePaymentChange = (event) => {
  const detailsUpdate = {};

  if (event.methodName === "https://apple.com/apple-pay") {
    const serviceFeeInfo = calculateServiceFee(event.methodDetails);
    Object.assign(detailsUpdate, serviceFeeInfo);
  }

  event.updateWith(detailsUpdate);
};
```

Diese beginnt mit dem Blick auf die [`methodName`](/de/docs/Web/API/PaymentMethodChangeEvent/methodName)-Eigenschaft des Ereignisses; wenn diese darauf hinweist, dass der Benutzer versucht, Apple Pay zu verwenden, übergeben wir die [`methodDetails`](/de/docs/Web/API/PaymentMethodChangeEvent/methodDetails) an eine Funktion namens `calculateServiceFee()`, die wir erstellen könnten, um die Informationen über die Transaktion zu nutzen, wie z.B. die zugrunde liegende Kreditkarte, die für die Abwicklung der Apple Pay-Anfrage verwendet wird, um ein Objekt zu berechnen und zurückzugeben, das Änderungen spezifiziert, die am [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) vorgenommen werden müssen, um eventuell erforderliche Servicegebühren der Zahlungsmethode hinzuzufügen.

Bevor der Ereignis-Handler zurückkehrt, ruft er die [`updateWith()`](/de/docs/Web/API/PaymentRequestUpdateEvent/updateWith)-Methode des Ereignisses auf, um die Änderungen in die Anfrage zu integrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) Ereignis
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event) Ereignis
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event) Ereignis
