---
title: Zahlungsabwicklungskonzepte
slug: Web/API/Payment_Request_API/Concepts
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{DefaultAPISidebar("Payment Request API")}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) erleichtert die Zahlungsabwicklung auf einer Website oder in einer App. In diesem Artikel werfen wir einen Blick darauf, wie die API funktioniert und welche Aufgaben ihre einzelnen Komponenten erfüllen.

## Terminologie

Bevor wir uns mit den Details der API-Funktionalität befassen, gibt es einige Begriffe, die Sie kennen müssen.

- Zahlungsempfänger (oder Händler)
  - : Der Händler – entweder eine Person oder eine Organisation –, dessen Website oder App Zahlungen über die Payment Request API erhalten möchte.
- Zahler
  - : Die Person oder Organisation, die über eine Website oder App einen Kauf tätigt. Der Zahler authentifiziert sich selbst und autorisiert dann die Zahlung, wie es die Zahlungsmethode erfordert.
- Zahlungsmethode
  - : Das Instrument, über das die Zahlung eingereicht wird, wie z. B. eine Kreditkarte oder ein Online-Bezahldienst.
- Anbieter von Zahlungsmethoden
  - : Eine Organisation, die die Technologie bereitstellt, die benötigt wird, um Zahlungen mit einer bestimmten Zahlungsmethode einzureichen. Zum Beispiel ist der Kreditkartenabwicklungsdienst der Anbieter der Zahlungsmethode, wenn mit einer Kreditkarte bezahlt wird.
- Zahlungsabwickler
  - : Die Implementierung des Codes, der erforderlich ist, um mit einem bestimmten Anbieter von Zahlungsmethoden zu interagieren und Zahlungen zu verarbeiten.

Einige Zahlungsabwickler verwenden die **Händlervalidierung**, bei der es darum geht, die Identität eines Händlers in irgendeiner Weise zu validieren, normalerweise unter Verwendung einer kryptografischen Antwort wie einem öffentlichen Schlüssel. Validierte Händler dürfen mit einem Zahlungsabwickler interagieren.

## Zahlungsmethoden-Identifikatoren

Zahlungsabwickler werden durch **Zahlungsmethoden-Identifikatoren** identifiziert, die Zeichenfolgen sind, die den Zahlungsabwickler eindeutig identifizieren. Diese können entweder einer der standardisierten Zahlungsabwickler-Identifikatoren oder eine URL sein, die von dem Zahlungsabwicklungsdienst zur Identifizierung und Abwicklung von Zahlungen verwendet wird.

### Standardisierte Zahlungsmethoden-Identifikatoren

Standardisierte Zahlungsmethoden-Identifikatoren sind diejenigen, die im [Zahlungsmethoden-Register](https://w3c.github.io/payment-method-id/#registry) aufgeführt sind.

- `secure-payment-confirmation`

  - : Identifiziert die [Secure Payment Confirmation](https://w3c.github.io/secure-payment-confirmation/)-Methode. Die Zahlungsanfragedaten für diese Methode werden durch das [`SecurePaymentConfirmationRequest`](/de/docs/Web/API/SecurePaymentConfirmationRequest)-Wörterbuch definiert. Weitere Informationen finden Sie unter [Using Secure Payment Confirmation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

- `basic-card`
  - : Dieser Zahlungsabwickler-Identifikator war dazu gedacht, kartenbasierte Zahlungen im Web über die Payment Request API zu erleichtern. **Die [Web Payments Working Group](https://www.w3.org/groups/wg/payments) hat diese Zahlungsmethode veraltet.**

### URL-basierte Zahlungsmethoden-Identifikatoren

Diese können je nach den spezifischen Eigenschaften des Dienstes erheblich variieren, und ein bestimmter Abwicklungsdienst kann je nach Version seiner API, seiner Kommunikationstechnologie usw. mehrere URLs verwenden.

- `https://apple.com/apple-pay`
  - : Zahlungen werden über den [Apple Pay](https://www.apple.com/apple-pay/)-Service abgewickelt. Derzeit wird Apple Pay nur von Safari unterstützt.
- `https://google.com/pay`
  - : Zahlungen werden von [Google Pay](https://pay.google.com/payments/home) verarbeitet. Dies wird derzeit nur von Chrome und Chromium-basierten Browsern unterstützt.

## Funktionen eines Zahlungsabwicklers

Ein {{Glossary("user_agent", "User-Agent")}} kann integrierte Unterstützung für bestimmte Zahlungsarten bieten. Zusätzlich kann die [Payment Handler API](https://w3c.github.io/payment-handler/) verwendet werden, um Unterstützung für zusätzliche Anbieter von Zahlungsmethoden in Browsern zu etablieren, die dies unterstützen. In jedem Fall ist der Zahlungsabwickler dafür verantwortlich:

1. **Sicherzustellen, dass eine Zahlung durchgeführt werden kann.** Die Bedingungen, die eine Zahlung ermöglichen, variieren je nach Zahlungsmethode und Zahlungsanforderung des Benutzers; Zum Beispiel, wenn der Benutzer eine Kreditkarte wählen möchte, die nicht vom Zahlungsempfänger akzeptiert wird, kann die Zahlung nicht durchgeführt werden.
2. **Falls die Händlervalidierung vom Zahlungsabwickler unterstützt wird, auf Händlervalidierungsanfragen vom User-Agent zu reagieren.** Details hierzu finden Sie unter [Händlervalidierung](#händlervalidierung).
3. **Zu überprüfen, dass die vom Benutzer bereitgestellten Informationen zu einer gültigen Transaktion führen.** Dies führt zur Erstellung und Rückgabe eines zahlungsmethodenspezifischen Objekts, das die Informationen enthält, die zur Abwicklung der Transaktion benötigt werden.

## Händlervalidierung

Einige Zahlungsabwickler verwenden die _Händlervalidierung_, bei der es darum geht, die Identität eines Händlers in irgendeiner Weise zu validieren, normalerweise durch eine kryptografische Herausforderung. Wenn der Händler nicht erfolgreich validiert wird, darf er den Zahlungsabwickler nicht verwenden.

Die genaue Validierungstechnologie hängt vom Zahlungsabwickler ab, und die Händlervalidierung ist völlig optional. Am Ende ist die einzige Verantwortung der Website oder App, den Validierungsschlüssel des Händlers abzurufen und ihn in die [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete)-Methode des Ereignisses einzugeben.

```js
paymentRequest.onmerchantvalidation = (event) => {
  event.complete(fetchValidationData(event.validationURL));
};
```

In diesem Beispiel ist `fetchValidationData()` eine Funktion, die die zahlungsabwicklerspezifischen Identifikationsinformationen von der durch `validationURL` angegebenen Adresse lädt. Beachten Sie, dass diese Funktion über den Händler-Server gehen muss, da ein Client in der Regel keinen direkten Zugriff auf die Validierungs-URL hat.

Indem diese Daten (oder ein {{jsxref("Promise")}}, das die geladenen Daten auflöst) dann dem Zahlungsabwickler durch die Übergabe an `complete()` zur Verfügung gestellt werden, kann der Zahlungsabwickler die abgerufenen Daten und jeden Algorithmus sowie andere unterstützende Daten verwenden, um zu verifizieren, dass der Händler den Zahlungsabwickler nutzen kann.

Daher ist es wichtig zu beachten, dass der {{Glossary("user_agent", "User-Agent")}} niemals ein [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)-Ereignis sendet, es sei denn, der User-Agent selbst implementiert einen Zahlungsabwickler. Beispielsweise hat Safari eine integrierte Unterstützung für Apple Pay, sodass der Apple Pay-Zahlungsabwickler dies nutzt, um sicherzustellen, dass Apple Pay verwendet werden kann, um den Händler zu bezahlen, indem `merchantvalidation` an den Client gesendet wird und ihn anweist, die Validierungsdaten des Servers abzurufen und sie durch Aufruf von `complete()` dem Zahlungsabwickler zu übermitteln.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Einführung der Payment Request API für Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
