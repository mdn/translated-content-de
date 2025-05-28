---
title: Konzepte der Zahlungsabwicklung
slug: Web/API/Payment_Request_API/Concepts
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{securecontext_header}}{{DefaultAPISidebar("Payment Request API")}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) erleichtert die Abwicklung von Zahlungen auf einer Website oder in einer App. In diesem Artikel werfen wir einen Blick darauf, wie die API funktioniert und welche Aufgaben die einzelnen Komponenten übernehmen.

## Terminologie

Bevor wir ins Detail gehen, wie die API funktioniert, gibt es einige Begriffe, die Sie kennen sollten.

- Zahlungsempfänger (oder Händler)
  - : Der Händler—entweder eine Person oder eine Organisation—dessen Website oder App mit der Payment Request API Geld erhalten möchte.
- Zahler
  - : Die Person oder Organisation, die mit einer Website oder App einen Kauf tätigt. Der Zahler authentifiziert sich zunächst und autorisiert dann die Zahlung, wie es die Zahlungsmethode erfordert.
- Zahlungsmethode
  - : Das Instrument, durch das die Zahlung eingereicht wird, wie zum Beispiel eine Kreditkarte oder ein Online-Zahlungsdienst.
- Zahlungsdienstleister
  - : Eine Organisation, die die Technologie zur Verfügung stellt, um Zahlungen mit einer bestimmten Zahlungsmethode einzureichen. Zum Beispiel ist der Kreditkartenabwicklungsdienst bei der Zahlung mit einer Kreditkarte der Zahlungsdienstleister.
- Zahlungshandler
  - : Die Implementierung des Codes, der benötigt wird, um mit einem bestimmten Zahlungsdienstleister zu interagieren, um Zahlungen abzuwickeln.

Einige Zahlungshandler verwenden die **Händler-Validierung**, bei der die Identität eines Händlers in irgendeiner Weise validiert wird, normalerweise mit einer Form von kryptografischer Antwort, wie einem öffentlichen Schlüssel. Validierte Händler dürfen mit einem Zahlungshandler interagieren.

## Zahlungsmethoden-Identifikatoren

Zahlungshandler werden durch **Zahlungsmethoden-Identifikatoren** identifiziert, die Zeichenfolgen sind, die den Zahlungshandler eindeutig identifizieren. Diese können entweder einer der standardisierten Zahlungshandler-Identifikatoren sein oder eine URL, die von dem Zahlungsdienst verwendet wird, um sich selbst zu identifizieren und Zahlungen abzuwickeln.

### Standardisierte Zahlungsmethoden-Identifikatoren

Standardisierte Zahlungsmethoden-Identifikatoren sind in dem [payment method registry](https://w3c.github.io/payment-method-id/#registry) aufgeführt.

- `secure-payment-confirmation`

  - : Identifiziert die [Secure Payment Confirmation](https://w3c.github.io/secure-payment-confirmation/) Methode. Die Zahlungsanfragedaten für diese Methode werden durch das [`SecurePaymentConfirmationRequest`](/de/docs/Web/API/SecurePaymentConfirmationRequest) Wörterbuch definiert. Weitere Informationen finden Sie unter [Using Secure Payment Confirmation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

- `basic-card`
  - : Dieser Zahlungsmethoden-Identifikator war gedacht, um kartenbasierte Zahlungen im Web durch die Payment Request API zu erleichtern. **Die [Web Payments Working Group](https://www.w3.org/groups/wg/payments) hat diese Zahlungsmethode als veraltet eingestuft.**

### URL-basierte Zahlungsmethoden-Identifikatoren

Diese können je nach den spezifischen Anforderungen des Dienstes erheblich variieren, und ein bestimmter Zahlungsdienst kann je nach Version seiner API, seiner Kommunikationstechnologie usw. mehrere URLs verwenden.

- `https://apple.com/apple-pay`
  - : Zahlungen werden mit dem [Apple Pay](https://www.apple.com/apple-pay/) Dienst abgewickelt. Apple Pay wird derzeit nur von Safari unterstützt.
- `https://google.com/pay`
  - : Zahlungen werden von [Google Pay](https://pay.google.com/payments/home) verarbeitet. Dies wird derzeit nur von Chrome und auf Chromium basierenden Browsern unterstützt.

## Funktionen eines Zahlungshandlers

Ein {{Glossary("user_agent", "user agent")}} kann integrierte Unterstützung für bestimmte Arten von Zahlungen bieten. Zusätzlich kann die [Payment Handler API](https://w3c.github.io/payment-handler/) verwendet werden, um Unterstützung für zusätzliche Zahlungsdienstleister in Browsern, die dies unterstützen, einzurichten. In beiden Fällen ist der Zahlungshandler verantwortlich für:

1. **Sicherstellen, dass eine Zahlung durchgeführt werden kann.** Die Bedingungen, die eine Zahlung ermöglichen, variieren je nach Zahlungsmethode und Zahlungsanfrage des Benutzers; zum Beispiel, wenn der Benutzer mit einer Kreditkarte zahlen möchte, die vom Zahlungsempfänger nicht akzeptiert wird, kann die Zahlung nicht durchgeführt werden.
2. **Wenn die Händler-Validierung vom Zahlungshandler unterstützt wird, auf Anfragen zur Händler-Validierung vom user agent antworten.** Siehe [Händler-Validierung](#händler-validierung) für Details.
3. **Überprüfen, dass die vom Benutzer bereitgestellten Informationen zu einer gültigen Transaktion führen.** Dies führt zur Erstellung und Rücksendung eines spezifischen Zahlungsmethoden-Objekts, das die erforderlichen Informationen zur Abwicklung der Transaktion enthält.

## Händler-Validierung

Einige Zahlungshandler verwenden _Händler-Validierung_, bei der die Identität eines Händlers in irgendeiner Weise validiert wird, normalerweise mit einer Form von kryptografischer Herausforderung. Wenn der Händler die Validierung nicht erfolgreich durchführt, darf er den Zahlungshandler nicht verwenden.

Die genaue Validierungstechnologie hängt vom Zahlungshandler ab, und die Händler-Validierung ist vollständig optional. Am Ende ist die einzige Verantwortung der Website oder App, den Validierungsschlüssel des Händlers abzurufen und ihn in die [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete)-Methode des Ereignisses zu übergeben.

```js
paymentRequest.onmerchantvalidation = (event) => {
  event.complete(fetchValidationData(event.validationURL));
};
```

In diesem Beispiel ist `fetchValidationData()` eine Funktion, die die spezifischen Identifizierungsinformationen des Zahlungshandlers von der durch `validationURL` gegebenen Adresse lädt. Beachten Sie, dass diese Funktion über den Händler-Server gehen muss, da ein Client normalerweise nicht selbst auf die Validierungs-URL zugreift.

Durch die Übermittlung dieser Daten (oder eines {{jsxref("Promise")}}, das sich auf die geladenen Daten auflöst) an den Zahlungshandler, indem sie in `complete()` übergeben werden, kann der Zahlungshandler die abgerufenen Daten und alle anderen erforderlichen Algorithmen und Daten verwenden, um sicherzustellen, dass der Händler den Zahlungshandler nutzen kann.

Es ist daher wichtig zu beachten, dass der {{Glossary("user_agent", "user agent")}} niemals ein [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)-Ereignis sendet, es sei denn, der user agent selbst implementiert einen Zahlungshandler. Beispielsweise hat Safari integrierte Unterstützung für Apple Pay, so dass der Apple Pay Zahlungshandler dies nutzt, um sicherzustellen, dass Apple Pay verwendet werden kann, um den Händler zu bezahlen, indem `merchantvalidation` an den Client gesendet wird und diesen anweist, die Validierungsdaten des Servers abzurufen und sie durch Aufrufen von `complete()` an den Zahlungshandler zu übermitteln.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Einführung der Payment Request API für Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
