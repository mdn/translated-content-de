---
title: Konzepte der Zahlungsabwicklung
slug: Web/API/Payment_Request_API/Concepts
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{DefaultAPISidebar("Payment Request API")}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) erleichtert die Abwicklung von Zahlungen auf einer Website oder in einer App. In diesem Artikel schauen wir uns an, wie die API funktioniert und welche Aufgaben ihre einzelnen Komponenten übernehmen.

## Terminologie

Bevor wir in die Details gehen, wie die API funktioniert, gibt es einige Begriffe, die Sie kennen sollten.

- Payment Request API
  - : Der Händler—entweder eine Einzelperson oder eine Organisation—dessen Website oder App Geld über die Payment Request API erhalten möchte.
- Zahler
  - : Die Person oder Organisation, die einen Kauf über eine Website oder App tätigt. Der Zahler authentifiziert sich und autorisiert die Zahlung, wie es von der Zahlungsmethode gefordert wird.
- Zahlungsmethode
  - : Das Instrument, mit dem die Zahlung eingereicht wird, wie eine Kreditkarte oder ein Online-Zahlungsdienst.
- Zahlungsanbieter
  - : Eine Organisation, die die Technologie bereitstellt, die erforderlich ist, um Zahlungen mit einer bestimmten Zahlungsmethode zu tätigen. Zum Beispiel, wenn Sie mit einer Kreditkarte zahlen, ist der Kreditkartenbearbeitungsdienst der Zahlungsanbieter.
- Zahlungsabwickler
  - : Die Implementierung des Codes, der erforderlich ist, um mit einem bestimmten Zahlungsanbieter zu interagieren, um Zahlungen zu verarbeiten.

Einige Zahlungsabwickler verwenden **Händlervalidierung**, was der Prozess der Validierung der Identität eines Händlers auf irgendeine Weise ist, üblicherweise unter Verwendung einer Form von kryptografischer Antwort wie einem öffentlichen Schlüssel. Validierte Händler dürfen mit einem Zahlungsabwickler interagieren.

## Zahlungsmethode-Identifikatoren

Zahlungsabwickler werden durch **Zahlungsmethode-Identifikatoren** identifiziert, die Zeichenketten sind, die den Zahlungsabwickler eindeutig identifizieren. Diese können entweder einer der standardisierten Identifikatoren oder eine URL sein, die vom Zahlungsdienst zur Selbstidentifikation und Abwicklung der Zahlungen verwendet wird.

### Standardisierte Zahlungsmethode-Identifikatoren

Standardisierte Zahlungsmethode-Identifikatoren sind diejenigen, die im [Payment-Methoden-Register](https://w3c.github.io/payment-method-id/#registry) aufgeführt sind.

- `secure-payment-confirmation`
  - : Identifiziert die [Secure Payment Confirmation](https://w3c.github.io/secure-payment-confirmation/)-Methode. Die Zahlungsanfragedaten für diese Methode sind im [`SecurePaymentConfirmationRequest`](/de/docs/Web/API/SecurePaymentConfirmationRequest)-Wörterbuch definiert. Für weitere Informationen siehe [Using Secure Payment Confirmation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

- `basic-card`
  - : Dieser Zahlungsmethode-Identifikator war vorgesehen, um kartenbasierte Zahlungen im Web über die Payment Request API zu erleichtern. **Die [Web Payments Working Group](https://www.w3.org/groups/wg/payments) hat diese Zahlungsmethode als veraltet markiert.**

### URL-basierte Zahlungsmethode-Identifikatoren

Diese können je nach den spezifischen Eigenschaften des Dienstes erheblich variieren, und ein bestimmter Bearbeitungsdienst kann mehrere URLs verwenden, abhängig von der Version ihrer API, ihrer Kommunikationstechnologie usw.

- `https://apple.com/apple-pay`
  - : Zahlungen werden über den [Apple Pay](https://www.apple.com/apple-pay/)-Dienst abgewickelt. Derzeit wird Apple Pay nur von Safari unterstützt.
- `https://google.com/pay`
  - : Zahlungen werden über [Google Pay](https://pay.google.com/payments/home) abgewickelt. Derzeit wird dies nur von Chrome- und auf Chromium basierenden Browsern unterstützt.

## Funktionen eines Zahlungsabwicklers

Ein {{Glossary("user_agent", "User Agent")}} kann integrierte Unterstützung für bestimmte Arten von Zahlungen bieten. Darüber hinaus kann die [Payment Handler API](https://w3c.github.io/web-based-payment-handler/) verwendet werden, um Unterstützung für zusätzliche Zahlungsanbieter in Browsern zu etablieren, die dies unterstützen. In beiden Fällen ist der Zahlungsabwickler verantwortlich für:

1. **Sicherstellen, dass eine Zahlung durchgeführt werden kann.** Die Bedingungen, die eine Zahlung ermöglichen, variieren je nach Zahlungsmethode und Zahlungsanfrage des Nutzers; z. B. wenn der Nutzer sich für die Zahlung mit einer Kreditkarte entscheidet, die vom Händler nicht akzeptiert wird, kann die Zahlung nicht durchgeführt werden.
2. **Wenn der Zahlungsabwickler Händlervalidierung unterstützt, auf Händlervalidierungsanfragen von User Agents antworten.** Siehe [Händlervalidierung](#händlervalidierung) für Details.
3. **Überprüfen, ob die vom Nutzer bereitgestellten Informationen zu einer gültigen Transaktion führen.** Dies führt zur Erstellung und Rückgabe eines spezifischen Objekts der Zahlungsmethode, das die Informationen enthält, die zur Abwicklung der Transaktion benötigt werden.

## Händlervalidierung

Einige Zahlungsabwickler verwenden _Händlervalidierung_, was der Prozess ist, die Identität eines Händlers auf irgendeine Weise zu validieren, üblicherweise mit einer Form von kryptografischer Herausforderung. Wenn der Händler die Validierung nicht erfolgreich abschließt, darf er den Zahlungsabwickler nicht nutzen.

Die genaue Validierungstechnologie hängt vom Zahlungsabwickler ab, und die Händlervalidierung ist vollständig optional. Am Ende ist die einzige Verantwortung der Website oder App, den Validierungsschlüssel des Händlers abzurufen und ihn in die [`complete()`-Methode des Ereignisses](/de/docs/Web/API/MerchantValidationEvent/complete) zu übergeben.

```js
paymentRequest.onmerchantvalidation = (event) => {
  event.complete(fetchValidationData(event.validationURL));
};
```

In diesem Beispiel ist `fetchValidationData()` eine Funktion, die die spezifischen Identifikationsdaten des Zahlungsabwicklers von der durch `validationURL` angegebenen Adresse lädt. Beachten Sie, dass diese Funktion über den Händler-Server gehen muss, da ein Client normalerweise nicht selbst auf die Validierungs-URL zugreift.

Indem diese Daten (oder ein {{jsxref("Promise")}}, der sich zu den geladenen Daten auflöst) dann an den Zahlungsabwickler übergeben und in `complete()` übergeben werden, kann der Zahlungsabwickler die abgerufenen Daten nutzen und welchen Algorithmus oder anderen unterstützenden Daten verifizieren, ob der Händler den Zahlungsabwickler verwenden kann.

Daher ist es wichtig zu beachten, dass der {{Glossary("user_agent", "User Agent")}} niemals ein [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)-Ereignis sendet, es sei denn, der User Agent implementiert selbst einen Zahlungsabwickler. Beispielsweise hat Safari integrierte Unterstützung für Apple Pay, sodass der Apple Pay-Zahlungsabwickler dies verwendet, um sicherzustellen, dass Apple Pay verwendet werden kann, um den Händler zu bezahlen, indem `merchantvalidation` an den Client gesendet wird und dieser angewiesen wird, die Validierungsdaten des Servers zu holen und durch Aufruf von `complete()` an den Zahlungsabwickler zu übergeben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Introducing the Payment Request API for Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
