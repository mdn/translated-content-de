---
title: Konzepte der Zahlungsabwicklung
slug: Web/API/Payment_Request_API/Concepts
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

{{DefaultAPISidebar("Payment Request API")}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) erleichtert die Abwicklung von Zahlungen auf einer Website oder in einer App. In diesem Artikel betrachten wir, wie die API funktioniert und welche Aufgabe ihre einzelnen Komponenten haben.

## Terminologie

Bevor wir auf die Details der Funktionsweise der API eingehen, sollten Sie einige Begriffe kennen.

- Zahlungsempfänger (oder Händler)
  - : Der Händler – entweder eine Person oder eine Organisation –, dessen Website oder App über die Payment Request API Geld erhalten möchte.
- Zahler
  - : Die Person oder Organisation, die mithilfe einer Website oder App einen Kauf tätigt. Der Zahler authentifiziert sich und autorisiert anschließend die Zahlung, sofern dies von der Zahlungsmethode verlangt wird.
- Zahlungsmethode
  - : Das Mittel, mit dem eine Zahlung übermittelt wird, beispielsweise eine Kreditkarte oder ein Online-Zahlungsdienst.
- Anbieter von Zahlungsmethoden
  - : Eine Organisation, die die Technologie bereitstellt, die zum Übermitteln von Zahlungen mithilfe einer bestimmten Zahlungsmethode erforderlich ist. Wenn beispielsweise mit einer Kreditkarte bezahlt wird, ist der Dienst zur Verarbeitung der Kreditkarte der Anbieter der Zahlungsmethode.
- Payment Handler
  - : Die Implementierung des Codes, der erforderlich ist, um mit einem bestimmten Anbieter von Zahlungsmethoden zu interagieren und Zahlungen zu verarbeiten.

Einige Payment Handler verwenden eine **Händlervalidierung**, also den Prozess, die Identität eines Händlers auf irgendeine Weise zu überprüfen, üblicherweise mithilfe einer kryptografischen Antwort wie eines öffentlichen Schlüssels. Validierte Händler dürfen mit einem Payment Handler interagieren.

## Kennungen von Zahlungsmethoden

Payment Handler werden durch **Kennungen von Zahlungsmethoden** identifiziert. Dabei handelt es sich um Zeichenketten, die den Payment Handler eindeutig identifizieren. Sie können entweder eine der standardisierten Kennungen für Payment Handler oder eine URL sein, die vom Zahlungsabwicklungsdienst verwendet wird, um sich selbst zu identifizieren und Zahlungen abzuwickeln.

### Standardisierte Kennungen von Zahlungsmethoden

Standardisierte Kennungen von Zahlungsmethoden sind die in der [Registrierung für Zahlungsmethoden](https://w3c.github.io/payment-method-id/#registry) aufgeführten Kennungen.

- `secure-payment-confirmation`
  - : Identifiziert die Methode [Secure Payment Confirmation](https://w3c.github.io/secure-payment-confirmation/). Die Zahlungsanfragedaten für diese Methode werden durch das Dictionary [`SecurePaymentConfirmationRequest`](/de/docs/Web/API/SecurePaymentConfirmationRequest) definiert. Weitere Informationen finden Sie unter [Verwenden von Secure Payment Confirmation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

- `basic-card`
  - : Diese Kennung für Zahlungsmethoden sollte kartenbasierte Zahlungen im Web über die Payment Request API erleichtern. **Die [Web Payments Working Group](https://www.w3.org/groups/wg/payments) hat diese Zahlungsmethode als veraltet eingestuft.**

### URL-basierte Kennungen von Zahlungsmethoden

Diese Kennungen werden in der Regel von Zahlungsdienstleistern während des Onboardings oder der Integration bereitgestellt und können je nach den Besonderheiten des Dienstes, der API-Version und der Kommunikationstechnologie erheblich variieren. Entwickler erhalten diese Kennungen normalerweise direkt aus der Dokumentation ihres gewählten Zahlungsdienstleisters, anstatt sie eigenständig zu ermitteln.

- `https://apple.com/apple-pay`
  - : Zahlungen werden über den Dienst [Apple Pay](https://www.apple.com/apple-pay/) abgewickelt. Diese Zahlungsmethode wird hauptsächlich in Safari auf kompatiblen Apple-Geräten unterstützt.
- `https://google.com/pay`
  - : Zahlungen werden über [Google Pay](https://pay.google.com/payments/home/) verarbeitet. Die Unterstützung hängt von Browsern ab, die die Payment Handler API implementieren, derzeit hauptsächlich Chromium-basierte Browser.

## Funktionen eines Payment Handlers

Ein {{Glossary("user_agent", "User Agent")}} kann integrierte Unterstützung für bestimmte Zahlungsarten bieten. Darüber hinaus kann die [Payment Handler API](https://w3c.github.io/web-based-payment-handler/) verwendet werden, um in Browsern, die sie unterstützen, Unterstützung für zusätzliche Anbieter von Zahlungsmethoden einzurichten. In beiden Fällen ist der Payment Handler verantwortlich für Folgendes:

1. **Sicherstellen, dass eine Zahlung vorgenommen werden kann.** Die Bedingungen, die eine Zahlung ermöglichen, unterscheiden sich je nach Zahlungsmethode und Zahlungsanfrage des Benutzers. Wenn der Benutzer beispielsweise mit einer Kreditkarte bezahlen möchte, die vom Zahlungsempfänger nicht akzeptiert wird, kann die Zahlung nicht vorgenommen werden.
2. **Falls der Payment Handler Händlervalidierung unterstützt, auf Anfragen zur Händlervalidierung des User Agents reagieren.** Weitere Details finden Sie unter [Händlervalidierung](#händlervalidierung).
3. **Überprüfen, dass die vom Benutzer bereitgestellten Informationen zu einer gültigen Transaktion führen.** Dies führt zur Erstellung und Rückgabe eines zahlungsmethodenspezifischen Objekts, das die zur Abwicklung der Transaktion benötigten Informationen enthält.

## Händlervalidierung

Einige Payment Handler verwenden _Händlervalidierung_, also den Prozess, die Identität eines Händlers auf irgendeine Weise zu überprüfen, üblicherweise mithilfe einer kryptografischen Challenge. Wenn der Händler die Validierung nicht erfolgreich durchläuft, darf er den Payment Handler nicht verwenden.

Die genaue Validierungstechnologie hängt vom Payment Handler ab, und Händlervalidierung ist vollständig optional. Letztlich ist die Website oder App lediglich dafür verantwortlich, den Validierungsschlüssel des Händlers abzurufen und ihn an die Methode [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) des Events zu übergeben.

```js
paymentRequest.onmerchantvalidation = (event) => {
  event.complete(fetchValidationData(event.validationURL));
};
```

In diesem Beispiel ist `fetchValidationData()` eine Funktion, die die Payment-Handler-spezifischen Identifikationsinformationen von der durch `validationURL` angegebenen Adresse lädt. Beachten Sie, dass diese Funktion über den Händler-Server ausgeführt werden muss, da ein Client normalerweise nicht selbst auf die Validierungs-URL zugreift.

Indem diese Daten – oder ein {{jsxref("Promise")}}, das zu den geladenen Daten aufgelöst wird – durch Übergabe an `complete()` an den Payment Handler übermittelt werden, kann der Payment Handler die abgerufenen Daten sowie die unterstützten Algorithmen und sonstigen Daten verwenden, um zu überprüfen, ob der Händler den Payment Handler verwenden kann.

Daher ist es wichtig zu beachten, dass der {{Glossary("user_agent", "User Agent")}} niemals ein [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)-Event sendet, es sei denn, der User Agent implementiert selbst einen Payment Handler. Safari bietet beispielsweise integrierte Unterstützung für Apple Pay. Daher verwendet der Apple-Pay-Payment-Handler dies, um sicherzustellen, dass Apple Pay zur Bezahlung des Händlers verwendet werden kann: Er sendet `merchantvalidation` an den Client und weist ihn an, die Validierungsdaten des Servers abzurufen und sie durch Aufrufen von `complete()` an den Payment Handler zu übermitteln.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwenden der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Introducing the Payment Request API for Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
- [Leitfaden für Entwickler von Android Payment Apps](https://web.dev/articles/android-payment-apps-developers-guide)
- [Leitfaden zur Integration von Samsung Internet Web Payments](https://developer.samsung.com/browser/android/web-payments-integration-guide.html)
