---
title: Zahlungsabwicklungskonzepte
slug: Web/API/Payment_Request_API/Concepts
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{securecontext_header}}{{DefaultAPISidebar("Payment Request API")}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) vereinfacht das Abwickeln von Zahlungen in einer Website oder App. In diesem Artikel betrachten wir, wie die API funktioniert und welche Aufgaben ihre Komponenten übernehmen.

## Terminologie

Bevor Sie sich mit den Details der Funktionsweise der API befassen, gibt es einige Begriffe, die Sie kennen sollten.

- Zahlungsempfänger (oder Händler)
  - : Der Händler—entweder eine Person oder eine Organisation—dessen Website oder App über die Payment Request API Geld empfangen möchte.
- Zahler
  - : Die Person oder Organisation, die über eine Website oder App einen Kauf tätigt. Der Zahler authentifiziert sich und autorisiert dann, je nach Zahlungsmethode erforderlich, die Zahlung.
- Zahlungsmethode
  - : Das Instrument, mit dem eine Zahlung eingereicht wird, wie eine Kreditkarte oder ein Online-Zahlungsdienst.
- Anbieter der Zahlungsmethode
  - : Eine Organisation, die die Technologie bereitstellt, die erforderlich ist, um Zahlungen über eine bestimmte Zahlungsmethode einzureichen. Beispielsweise ist bei der Bezahlung mit einer Kreditkarte der Kreditkartenverarbeitungsdienst der Anbieter der Zahlungsmethode.
- Zahlungshandler
  - : Die Implementierung des Codes, der benötigt wird, um mit einem bestimmten Anbieter der Zahlungsmethode zu interagieren, um Zahlungen zu verarbeiten.

Einige Zahlungshandler nutzen die **Händlerbestätigung**, was den Prozess der Überprüfung der Identität eines Händlers auf irgendeine Weise, üblicherweise durch eine Form von kryptografischer Antwort wie einen öffentlichen Schlüssel, darstellt. Validierte Händler dürfen mit einem Zahlungshandler interagieren.

## Zahlungsmethoden-Identifikatoren

Zahlungshandler werden durch **Zahlungsmethoden-Identifikatoren** identifiziert, bei denen es sich um Zeichenfolgen handelt, die den Zahlungshandler eindeutig identifizieren. Diese können entweder einer der standardisierten Zahlungshandler-Identifikatoren oder eine URL sein, die vom Zahlungsabwicklungsdienst sowohl zur Identifikation als auch zur Zahlungsabwicklung verwendet wird.

### Standardisierte Zahlungsmethoden-Identifikatoren

Standardisierte Zahlungsmethoden-Identifikatoren sind diejenigen, die im [Zahlungsmethodenregister](https://www.w3.org/TR/payment-method-id/#registry) aufgeführt sind.

- `secure-payment-confirmation`

  - : Identifiziert die [Secure Payment Confirmation](https://w3c.github.io/secure-payment-confirmation/)-Methode. Die Zahlungsanfragedaten für diese Methode werden durch das [`SecurePaymentConfirmationRequest`](/de/docs/Web/API/SecurePaymentConfirmationRequest)-Wörterbuch definiert. Weitere Informationen finden Sie unter [Using Secure Payment Confirmation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

- `basic-card`
  - : Dieser Zahlungsmethoden-Identifikator sollte kartengestützte Zahlungen im Web durch die Payment Request API erleichtern. **Die [Web Payments Working Group](https://www.w3.org/groups/wg/payments) hat diese Zahlungsmethode als veraltet erklärt.**

### URL-basierte Zahlungsmethoden-Identifikatoren

Diese können je nach Spezifika des Dienstes erheblich variieren, und ein gegebener Verarbeitungsdienst kann mehrere URLs verwenden, abhängig von der Version seiner API, seiner Kommunikationstechnologie usw.

- `https://apple.com/apple-pay`
  - : Zahlungen werden über den [Apple Pay](https://www.apple.com/apple-pay/)-Dienst abgewickelt. Derzeit wird Apple Pay nur von Safari unterstützt.
- `https://google.com/pay`
  - : Zahlungen werden von [Google Pay](https://pay.google.com/payments/home) verarbeitet. Dies wird derzeit nur von Chrome und Chromium-basierten Browsern unterstützt.

## Funktionen eines Zahlungshandlers

Ein [User Agent](/de/docs/Glossary/user_agent) kann integrierte Unterstützung für bestimmte Arten von Zahlungen bieten. Zusätzlich kann die [Payment Handler API](https://w3c.github.io/payment-handler/) verwendet werden, um Unterstützung für zusätzliche Anbieter der Zahlungsmethode in Browsern zu schaffen, die diese unterstützen. In jedem Fall ist der Zahlungshandler verantwortlich für:

1. **Sicherstellen, dass eine Zahlung erfolgen kann.** Die Bedingungen, die eine Zahlung ermöglichen, variieren je nach Zahlungsmethode und der Zahlungsanforderung des Nutzers; beispielsweise kann die Zahlung nicht erfolgen, wenn der Nutzer eine Kreditkarte wählt, die vom Zahlungsempfänger nicht akzeptiert wird.
2. **Wenn die Händlerbestätigung vom Zahlungshandler unterstützt wird, auf Händlerbestätigungsanfragen des User Agents reagieren.** Siehe [Händlerbestätigung](#händlerbestätigung) für Einzelheiten.
3. **Überprüfen, dass die vom Nutzer bereitgestellten Informationen zu einer gültigen Transaktion führen.** Dies führt zur Erstellung und Rückgabe eines zahlungsspezifischen Objekts, das die Informationen enthält, die zur Abwicklung der Transaktion benötigt werden.

## Händlerbestätigung

Einige Zahlungshandler verwenden die _Händlerbestätigung_, was den Prozess der Überprüfung der Identität eines Händlers auf irgendeine Weise, normalerweise durch eine Form von kryptografischer Herausforderung, darstellt. Wenn der Händler sich nicht erfolgreich validiert, darf er den Zahlungshandler nicht verwenden.

Die genaue Validierungstechnologie hängt vom Zahlungshandler ab, und die Händlerbestätigung ist gänzlich optional. Am Ende ist das Einzige, wofür die Website oder App verantwortlich ist, den Validierungsschlüssel des Händlers abzurufen und ihn in die `complete()`-Methode des Ereignisses [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) einzufügen.

```js
paymentRequest.onmerchantvalidation = (event) => {
  event.complete(fetchValidationData(event.validationURL));
};
```

In diesem Beispiel ist `fetchValidationData()` eine Funktion, die die zahlungshandlerspezifischen Identifizierungsinformationen von der durch `validationURL` angegebenen Adresse lädt. Beachten Sie, dass diese Funktion über den Händler-Server erfolgen muss, da ein Client in der Regel nicht selbst auf die Validierungs-URL zugreift.

Indem dann diese Daten (oder ein {{jsxref("Promise")}}, das sich zu den geladenen Daten auflöst) an den Zahlungshandler übergeben werden, indem sie in `complete()` eingefügt werden, kann der Zahlungshandler die abgerufenen Daten und welchen Algorithmus auch immer unterstützen, um zu überprüfen, dass der Händler den Zahlungshandler verwenden kann.

Es ist also wichtig zu beachten, dass der [User Agent](/de/docs/Glossary/user_agent) niemals ein [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)-Ereignis sendet, es sei denn, der User Agent selbst implementiert einen Zahlungshandler. Beispielsweise hat Safari integrierte Unterstützung für Apple Pay, sodass der Apple Pay-Zahlungshandler dies verwendet, um sicherzustellen, dass Apple Pay den Händler bezahlen kann, indem es `merchantvalidation` an den Client sendet, um diesen anzuweisen, die Validierungsdaten des Servers abzurufen und sie an den Zahlungshandler zu liefern, indem `complete()` aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Die Payment Request API verwenden](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Einführung der Payment Request API für Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
