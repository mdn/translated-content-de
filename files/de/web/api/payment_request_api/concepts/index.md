---
title: Zahlungsabwicklungs-Konzepte
slug: Web/API/Payment_Request_API/Concepts
l10n:
  sourceCommit: e9a9a55d62ddcc2917c509df4845e16ed4ffb2cb
---

{{DefaultAPISidebar("Payment Request API")}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) erleichtert die Abwicklung von Zahlungen in einer Website oder App. In diesem Artikel betrachten wir, wie die API funktioniert und was jeder ihrer Bestandteile tut.

## Terminologie

Bevor wir uns mit den Details beschäftigen, wie die API funktioniert, gibt es einige Begriffe, die Sie kennen sollten.

- Zahlungsempfänger (oder Händler)
  - : Der Händler—entweder eine Person oder eine Organisation—dessen Website oder App über die Payment Request API Geld erhalten möchte.
- Zahler
  - : Die Person oder Organisation, die einen Kauf über eine Website oder App tätigt. Der Zahler authentifiziert sich selbst und autorisiert die Zahlung, wie es die Zahlungsmethode erfordert.
- Zahlungsmethode
  - : Das Instrument, mit dem die Zahlung eingereicht wird, zum Beispiel eine Kreditkarte oder ein Online-Bezahldienst.
- Zahlungsdienstanbieter
  - : Eine Organisation, die die Technologie bereitstellt, um Zahlungen mit einer bestimmten Zahlungsmethode zu übermitteln. Zum Beispiel ist beim Bezahlen mit Kreditkarte der Kreditkartenabwicklungsdienst der Zahlungsdienstanbieter.
- Zahlungshandler
  - : Die Implementierung des Codes, der zur Schnittstellenbildung mit einem bestimmten Zahlungsdienstanbieter erforderlich ist, um Zahlungen zu bearbeiten.

Einige Zahlungshandler verwenden **Händlervalidierung**, bei der die Identität eines Händlers auf irgendeine Weise überprüft wird, meist mithilfe einer kryptografischen Antwort wie einem öffentlichen Schlüssel. Validierte Händler dürfen mit einem Zahlungshandler interagieren.

## Zahlungsidentifikatoren

Zahlungshandler werden durch **Zahlungsmethodenidentifikatoren** identifiziert, die Zeichenfolgen sind, die den Zahlungshandler eindeutig identifizieren. Diese können entweder standardisierte Zahlungsmethodenidentifikatoren sein oder eine URL, die vom Zahlungsdienst verwendet wird, um sich sowohl selbst zu identifizieren als auch Zahlungen zu bearbeiten.

### Standardisierte Zahlungsmethodenidentifikatoren

Standardisierte Zahlungsmethodenidentifikatoren sind diejenigen, die im [Zahlungsmethodenregister](https://w3c.github.io/payment-method-id/#registry) aufgeführt sind.

- `secure-payment-confirmation`
  - : Identifiziert die [Secure Payment Confirmation](https://w3c.github.io/secure-payment-confirmation/) Methode. Die Zahlungsanforderungsdaten für diese Methode werden im [`SecurePaymentConfirmationRequest`](/de/docs/Web/API/SecurePaymentConfirmationRequest) Wörterbuch definiert. Weitere Informationen finden Sie unter [Using Secure Payment Confirmation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

- `basic-card`
  - : Dieser Zahlungsmethodenidentifikator war vorgesehen, um kartenbasierte Zahlungen im Web über die Payment Request API zu erleichtern. **Die [Web Payments Working Group](https://www.w3.org/groups/wg/payments) hat diese Zahlungsmethode abgelehnt.**

### URL-basierte Zahlungsmethodenidentifikatoren

Diese Identifikatoren werden typischerweise von Zahlungsanbietern während des Onboardings oder der Integration bereitgestellt und können je nach spezifischen Dienstleistungen, API-Version und Kommunikationstechnologie erheblich variieren. Entwickler erhalten diese Identifikatoren normalerweise direkt aus der Dokumentation ihres gewählten Zahlungsdienstanbieters und entdecken sie nicht eigenständig.

- `https://apple.com/apple-pay`
  - : Zahlungen werden über den [Apple Pay](https://www.apple.com/apple-pay/) Dienst abgewickelt. Diese Zahlungsmethode wird primär in Safari auf kompatiblen Apple-Geräten unterstützt.
- `https://google.com/pay`
  - : Zahlungen werden durch [Google Pay](https://pay.google.com/payments/home/) verarbeitet. Die Unterstützung hängt von Browsern ab, die die Payment Handler API implementieren (derzeit hauptsächlich auf Chromium basierende Browser).

## Funktionen eines Zahlungshandlers

Ein {{Glossary("user_agent", "User-Agent")}} kann integrierte Unterstützung für bestimmte Zahlungsarten bieten. Darüber hinaus kann die [Payment Handler API](https://w3c.github.io/web-based-payment-handler/) verwendet werden, um die Unterstützung für zusätzliche Zahlungsdienstleister in Browsern zu etablieren, die sie unterstützen. In beiden Fällen ist der Zahlungshandler verantwortlich für:

1. **Sicherstellen, dass eine Zahlung durchgeführt werden kann.** Die Bedingungen, die eine Zahlung ermöglichen, variieren je nach Zahlungsmethode und der Zahlungsanforderung des Benutzers; zum Beispiel, wenn der Benutzer eine Kreditkarte wählt, die vom Empfänger nicht akzeptiert wird, kann die Zahlung nicht durchgeführt werden.
2. **Antworten auf Händlervalidierungsanfragen des User-Agents, wenn vom Zahlungshandler unterstützt.** Siehe [Händlervalidierung](#händlervalidierung) für Details.
3. **Verifizierung, dass die vom Benutzer bereitgestellten Informationen zu einer gültigen Transaktion führen.** Dies führt zur Erstellung und Rückgabe eines zahlungsmethodenspezifischen Objekts, das die Informationen enthält, die zur Abwicklung der Transaktion erforderlich sind.

## Händlervalidierung

Einige Zahlungshandler verwenden _Händlervalidierung_, bei der die Identität eines Händlers auf irgendeine Weise überprüft wird, meist mithilfe einer kryptografischen Herausforderung. Wenn der Händler nicht erfolgreich validiert wird, darf er den Zahlungshandler nicht verwenden.

Die genaue Validierungstechnologie hängt vom Zahlungshandler ab, und die Händlervalidierung ist völlig optional. Am Ende ist die einzige Verantwortung der Website oder App, den Validierungsschlüssel des Händlers abzurufen und in die Methode [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) des Ereignisses einzufügen.

```js
paymentRequest.onmerchantvalidation = (event) => {
  event.complete(fetchValidationData(event.validationURL));
};
```

In diesem Beispiel ist `fetchValidationData()` eine Funktion, die die spezifischen Identifikationsinformationen des Zahlungshandlers von der durch `validationURL` angegebenen Adresse lädt. Beachten Sie, dass diese Funktion über den Händler-Server laufen muss, da ein Client in der Regel nicht direkt auf die Validierungs-URL zugreift.

Indem diese Daten (oder ein {{jsxref("Promise")}}, das sich zu den geladenen Daten auflöst) dem Zahlungshandler übergeben werden, indem sie in `complete()` eingefügt werden, kann der Zahlungshandler die abgerufenen Daten und alle weitere benötigten Algorithmen und Daten verwenden, um zu verifizieren, dass der Händler den Zahlungshandler nutzen kann.

Daher ist es wichtig zu beachten, dass der {{Glossary("user_agent", "User-Agent")}} niemals ein [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) Ereignis sendet, es sei denn, der User-Agent selbst implementiert einen Zahlungshandler. Beispielsweise hat Safari integrierte Unterstützung für Apple Pay, sodass der Apple Pay Zahlungshandler dies verwendet, um sicherzustellen, dass Apple Pay den Händler bezahlen kann, indem er `merchantvalidation` an den Client sendet und ihn anweist, die Validierungsdaten des Servers abzurufen und dem Zahlungshandler durch Aufruf von `complete()` zu übermitteln.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Introducing the Payment Request API for Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
- [Entwicklerleitfaden für Android-Zahlungs-Apps](https://web.dev/articles/android-payment-apps-developers-guide)
- [Samsung Internet Web Payments Integration Guide](https://developer.samsung.com/internet/android/web-payments-integration-guide.html)
