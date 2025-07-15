---
title: Zahlungsabwicklungs-Konzepte
slug: Web/API/Payment_Request_API/Concepts
l10n:
  sourceCommit: 0d0ccc861fa024fa10836fbf0cc2c3813cd74745
---

{{DefaultAPISidebar("Payment Request API")}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) erleichtert die Zahlungsabwicklung auf einer Website oder in einer App. In diesem Artikel werfen wir einen Blick darauf, wie die API funktioniert und was jeder ihrer Komponenten tut.

## Terminologie

Bevor wir in die Funktionsweise der API eintauchen, gibt es einige Begriffe, die Sie kennen sollten.

- Zahlungsempfänger (oder Händler)
  - : Der Händler—entweder eine Person oder eine Organisation—dessen Website oder App über die Payment Request API Geld empfangen möchte.
- Zahler
  - : Die Person oder Organisation, die einen Kauf über eine Website oder App tätigt. Der Zahler authentifiziert sich und autorisiert die Zahlung, wie vom Zahlungsmittel gefordert.
- Zahlungsmethode
  - : Das Instrument, mit dem die Zahlung eingereicht wird, z. B. eine Kreditkarte oder ein Online-Zahlungsdienst.
- Anbieter der Zahlungsmethode
  - : Eine Organisation, die die Technologie bereitstellt, die benötigt wird, um Zahlungen mit einer bestimmten Zahlungsmethode einzureichen. Zum Beispiel ist der Kreditkartenabwicklungsdienst der Anbieter der Zahlungsmethode, wenn mit einer Kreditkarte bezahlt wird.
- Zahlungsabwickler
  - : Die Implementierung des Codes, der benötigt wird, um mit einem bestimmten Anbieter der Zahlungsmethode zu kommunizieren, um Zahlungen abzuwickeln.

Einige Zahlungsabwickler verwenden **Händlerbestätigung**, was der Prozess der Verifizierung der Identität eines Händlers auf irgendeine Weise ist, üblicherweise durch eine Form der kryptographischen Antwort wie einen öffentlichen Schlüssel. Validierte Händler dürfen mit einem Zahlungsabwickler kommunizieren.

## Zahlungsmethoden-Identifikatoren

Zahlungsabwickler werden durch **Zahlungsmethoden-Identifikatoren** identifiziert, die Zeichenfolgen sind, die den Zahlungsabwickler eindeutig identifizieren. Diese können entweder einer der standardisierten Zahlungsmethoden-Identifikatoren sein oder eine URL, die vom Zahlungsabwicklungsdienst verwendet wird, um sich sowohl selbst zu identifizieren als auch Zahlungen zu bearbeiten.

### Standardisierte Zahlungsmethoden-Identifikatoren

Standardisierte Zahlungsmethoden-Identifikatoren sind diejenigen, die im [Registry für Zahlungsmethoden](https://w3c.github.io/payment-method-id/#registry) aufgeführt sind.

- `secure-payment-confirmation`
  - : Identifiziert die [Secure Payment Confirmation](https://w3c.github.io/secure-payment-confirmation/) Methode. Die Zahlungsabfragedaten für diese Methode sind durch das [`SecurePaymentConfirmationRequest`](/de/docs/Web/API/SecurePaymentConfirmationRequest) Wörterbuch definiert. Für weitere Informationen siehe [Verwendung der Secure Payment Confirmation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

- `basic-card`
  - : Dieser Zahlungsmethoden-Identifikator war vorgesehen, um kartenbasierte Zahlungen im Web durch die Payment Request API zu erleichtern. **Die [Web Payments Working Group](https://www.w3.org/groups/wg/payments) hat diese Zahlungsmethode abgelehnt.**

### URL-basierte Zahlungsmethoden-Identifikatoren

Diese können je nach Spezifikationen des Dienstes erheblich variieren, und ein bestimmter Abwicklungsdienst kann je nach Version seiner API, seiner Kommunikationstechnologie und so weiter mehrere URLs verwenden.

- `https://apple.com/apple-pay`
  - : Zahlungen werden über den [Apple Pay](https://www.apple.com/apple-pay/) Dienst abgewickelt. Derzeit wird Apple Pay nur von Safari unterstützt.
- `https://google.com/pay`
  - : Zahlungen werden von [Google Pay](https://pay.google.com/payments/home) abgewickelt. Dies wird derzeit nur von Chrome und Chromium-basierten Browsern unterstützt.

## Funktionen eines Zahlungsabwicklers

Ein {{Glossary("user_agent", "User-Agent")}} kann integrierte Unterstützung für bestimmte Zahlungsarten bieten. Zusätzlich kann die [Payment Handler API](https://w3c.github.io/payment-handler/) verwendet werden, um die Unterstützung für weitere Anbieter von Zahlungsmethoden zu etablieren, in Browsern, die dies unterstützen. In beiden Fällen ist der Zahlungsabwickler verantwortlich für:

1. **Sicherstellen, dass eine Zahlung getätigt werden kann.** Die Bedingungen, die eine Zahlung ermöglichen, variieren je nach Zahlungsmethode und Zahlungsanforderung des Benutzers; zum Beispiel, wenn der Benutzer eine Kreditkarte verwendet, die vom Empfänger nicht akzeptiert wird, kann die Zahlung nicht getätigt werden.
2. **Wenn die Händlervalidierung vom Zahlungsabwickler unterstützt wird, auf Anfragen zur Händlervalidierung vom User-Agent reagieren.** Siehe [Händlervalidierung](#händlervalidierung) für Details.
3. **Überprüfen, ob die vom Benutzer bereitgestellten Informationen zu einer gültigen Transaktion führen.** Dies führt zur Erstellung und Rückgabe eines zahlungsmethodenspezifischen Objekts, das die erforderlichen Informationen zur Durchführung der Transaktion enthält.

## Händlervalidierung

Einige Zahlungsabwickler verwenden _Händlervalidierung_, was der Prozess der Verifizierung der Identität eines Händlers auf irgendeine Weise ist, üblicherweise durch eine Art kryptographische Herausforderung. Wenn der Händler die Validierung nicht erfolgreich besteht, darf er den Zahlungsabwickler nicht verwenden.

Die genaue Validierungstechnologie hängt vom Zahlungsabwickler ab, und die Händlervalidierung ist völlig optional. Letztlich ist das Einzige, wofür die Website oder App verantwortlich ist, das Abrufen des Validierungsschlüssels des Händlers und dessen Übergabe an die Methode [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) des Ereignisses.

```js
paymentRequest.onmerchantvalidation = (event) => {
  event.complete(fetchValidationData(event.validationURL));
};
```

In diesem Beispiel ist `fetchValidationData()` eine Funktion, die die supplierspezifischen Identifikationsinformationen von der durch `validationURL` angegebenen Adresse lädt. Beachten Sie, dass diese Funktion über den Server des Händlers laufen muss, da ein Client normalerweise nicht auf die Validierungs-URL selbst zugreift.

Durch die Lieferung dieser Daten (oder eines {{jsxref("Promise")}}, der sich zu den geladenen Daten auflöst) an den Zahlungsabwickler durch Übergabe an `complete()`, kann der Zahlungsabwickler die abgerufenen Daten und den Algorithmus und andere unterstützende Daten verwenden, um zu überprüfen, ob der Händler den Zahlungsabwickler verwenden kann.

Daher ist es wichtig zu beachten, dass der {{Glossary("user_agent", "User-Agent")}} niemals ein [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) Ereignis sendet, es sei denn, der User-Agent selbst implementiert einen Zahlungsabwickler. Beispielsweise hat Safari eine integrierte Unterstützung für Apple Pay, sodass der Apple Pay Zahlungsabwickler dies verwendet, um sicherzustellen, dass Apple Pay verwendet werden kann, um den Händler zu bezahlen, indem `merchantvalidation` an den Client gesendet wird, der ihn auffordert, die Validierungsdaten des Servers abzurufen und sie dem Zahlungsabwickler durch Aufruf von `complete()` zu liefern.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Einführung der Payment Request API für Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Anleitung](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
