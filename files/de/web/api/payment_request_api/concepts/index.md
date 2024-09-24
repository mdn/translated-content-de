---
title: Zahlungskonzeptverarbeitung
slug: Web/API/Payment_Request_API/Concepts
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{securecontext_header}}{{DefaultAPISidebar("Payment Request API")}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) macht es einfach, Zahlungen in einer Website oder App zu verwalten. In diesem Artikel werfen wir einen Blick darauf, wie die API funktioniert und was jeder ihrer Komponenten tut.

## Terminologie

Bevor wir ins Detail gehen, wie die API funktioniert, gibt es einige Begriffe, die Sie kennen sollten.

- payee (oder merchant)
  - : Der Händler – entweder eine Person oder eine Organisation –, dessen Website oder App über die Payment Request API Geld erhalten möchte.
- payer
  - : Die Person oder Organisation, die mit einer Website oder App einen Kauf tätigt. Der Zahler authentifiziert sich und autorisiert dann die Zahlung, wie vom Zahlungsmittel gefordert.
- Zahlungmittel
  - : Das Instrument, mit dem die Zahlung vorgenommen wird, wie z. B. eine Kreditkarte oder ein Online-Zahlungsdienst.
- Zahlungsdienstleister
  - : Eine Organisation, die die Technologie bereitstellt, die benötigt wird, um Zahlungen mit einem bestimmten Zahlungsmittel durchzuführen. Zum Beispiel ist beim Bezahlen mit einer Kreditkarte der Kreditkartenverarbeitungsservice der Zahlungsdienstleister.
- Zahlungshandler
  - : Die Implementierung des Codes, der benötigt wird, um mit einem bestimmten Zahlungsdienstleister zu kommunizieren, um Zahlungen zu verarbeiten.

Einige Zahlungshandler verwenden **Händlerauthentifizierung**, was der Prozess der Validierung der Identität eines Händlers auf irgendeine Weise ist, üblicherweise durch eine Form von kryptografischer Antwort wie einem öffentlichen Schlüssel. Validierte Händler dürfen mit einem Zahlungshandler kommunizieren.

## Zahlungsmittelkennungen

Zahlungshandler werden durch **Zahlungsmittelkennungen** identifiziert, die Zeichenfolgen sind, die den Zahlungshandler eindeutig identifizieren. Diese können entweder standardisierte Zahlungshandlerkennungen oder eine URL sein, die vom Zahlungsdienst genutzt wird, um sich selbst zu identifizieren und Zahlungen abzuwickeln.

### Standardisierte Zahlungsmittelkennungen

Standardisierte Zahlungsmittelkennungen sind jene, die im [Zahlungsmittelregister](https://www.w3.org/TR/payment-method-id/#registry) aufgeführt sind.

- `secure-payment-confirmation`

  - : Identifiziert die [Secure Payment Confirmation](https://w3c.github.io/secure-payment-confirmation/) Methode. Die Zahlungsanfragedaten für diese Methode werden durch das {{domxref("SecurePaymentConfirmationRequest")}} Dictionary definiert. Weitere Informationen finden Sie unter [Using Secure Payment Confirmation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

- `basic-card`
  - : Diese Zahlungsmittelkennung war dazu gedacht, kartenbasierte Zahlungen im Web über die Payment Request API zu erleichtern. **Die [Web Payments Working Group](https://www.w3.org/groups/wg/payments) hat diese Zahlungsmethode als veraltet erklärt.**

### URL-basierte Zahlungsmittelkennungen

Diese können je nach den Details des Dienstes erheblich variieren, und ein gegebener Verarbeitungsdienst kann mehrere URLs verwenden, abhängig von der Version ihrer API, ihrer Kommunikationstechnologie und so weiter.

- `https://apple.com/apple-pay`
  - : Zahlungen werden über den [Apple Pay](https://www.apple.com/apple-pay/) Dienst abgewickelt. Derzeit wird Apple Pay nur von Safari unterstützt.
- `https://google.com/pay`
  - : Zahlungen werden von [Google Pay](https://pay.google.com/payments/home) verarbeitet. Dies wird derzeit nur von Chrome und auf Chromium basierenden Browsern unterstützt.

## Funktionen eines Zahlungshandlers

Ein {{Glossary("user agent")}} kann integrierte Unterstützung für bestimmte Arten von Zahlungen anbieten. Zusätzlich kann die [Payment Handler API](https://w3c.github.io/payment-handler/) verwendet werden, um in Browsern, die sie unterstützen, Unterstützung für zusätzliche Zahlungsdienstleister zu etablieren. In jedem Fall ist der Zahlungshandler verantwortlich für:

1. **Sicherstellen, dass eine Zahlung durchgeführt werden kann.** Die Bedingungen, die eine Zahlung ermöglichen, variieren je nach Zahlungsmethode und der Zahlungsanfrage des Nutzers; beispielsweise, wenn der Nutzer sich entscheidet, mit einer vom Zahlungsempfänger nicht akzeptierten Kreditkarte zu zahlen, kann die Zahlung nicht erfolgen.
2. **Falls die Händlerauthentifizierung vom Zahlungshandler unterstützt wird, auf Anfragen zur Händlerauthentifizierung vom Benutzeragenten reagieren.** Siehe [Händlerauthentifizierung](#händlerauthentifizierung) für Einzelheiten.
3. **Überprüfen, dass die vom Benutzer bereitgestellten Informationen zu einer gültigen Transaktion führen.** Dies führt zur Erstellung und Rückgabe eines zahlungsmethodenspezifischen Objekts, das die zum Abwickeln der Transaktion benötigten Informationen enthält.

## Händlerauthentifizierung

Einige Zahlungshandler verwenden _Händlerauthentifizierung_, was der Prozess der Validierung der Identität eines Händlers auf irgendeine Weise ist, üblicherweise durch eine Form von kryptografischer Herausforderung. Wenn der Händler die Authentifizierung nicht erfolgreich abschließt, ist es ihm nicht gestattet, den Zahlungshandler zu verwenden.

Die genaue Authentifizierungstechnologie hängt vom Zahlungshandler ab, und die Händlerauthentifizierung ist völlig optional. Letztlich ist die einzige Verantwortung für die Website oder App, den Authentifizierungsschlüssel des Händlers abzurufen und ihn in die {{domxref("MerchantValidationEvent.complete", "complete()")}} Methode des Ereignisses einzufügen.

```js
paymentRequest.onmerchantvalidation = (event) => {
  event.complete(fetchValidationData(event.validationURL));
};
```

In diesem Beispiel ist `fetchValidationData()` eine Funktion, die die spezifischen Identifizierungsinformationen des Zahlungshandlers von der durch `validationURL` angegebenen Adresse lädt. Beachten Sie, dass diese Funktion über den Händlerserver gehen muss, da ein Client in der Regel nicht direkt auf die Validierungs-URL zugreift.

Indem diese Daten (oder ein {{jsxref("Promise")}}, der zu den geladenen Daten aufgelöst wird) dem Zahlungshandler durch Übergabe in `complete()` übergeben werden, kann der Zahlungshandler die abgerufenen Daten und den Algorithmus sowie weitere unterstützte Daten verwenden, um zu überprüfen, dass der Händler den Zahlungshandler verwenden kann.

Daher ist es wichtig zu beachten, dass der {{Glossary("user agent")}} niemals ein {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}} Ereignis sendet, es sei denn, der Benutzeragent selbst implementiert einen Zahlungshandler. Beispielsweise hat Safari integrierte Unterstützung für Apple Pay, sodass der Apple Pay-Zahlungshandler diese nutzt, um sicherzustellen, dass Apple Pay verwendet werden kann, um den Händler zu bezahlen, indem `merchantvalidation` an den Client gesendet wird, um ihn anzuweisen, die Validierungsdaten des Servers abzurufen und diese an den Zahlungshandler durch Aufruf von `complete()` zu übergeben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Einführung der Payment Request API für Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
