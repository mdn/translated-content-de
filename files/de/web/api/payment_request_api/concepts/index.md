---
title: Zahlungsverarbeitungskonzepte
slug: Web/API/Payment_Request_API/Concepts
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{securecontext_header}}{{DefaultAPISidebar("Payment Request API")}}

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) erleichtert die Abwicklung von Zahlungen auf einer Website oder in einer App. In diesem Artikel werfen wir einen Blick darauf, wie die API funktioniert und welche Rolle jedes ihrer Komponenten spielt.

## Terminologie

Bevor wir uns mit den Details der Funktionsweise der API beschäftigen, gibt es einige Begriffe, die Sie kennen müssen.

- Zahlungsempfänger (oder Händler)
  - : Der Händler—entweder eine Person oder eine Organisation—dessen Website oder App über die Payment Request API Geld erhalten möchte.
- Zahler
  - : Die Person oder Organisation, die über eine Website oder App einen Kauf tätigt. Der Zahler authentifiziert sich und autorisiert die Zahlung, wie es die Zahlungsmethode erfordert.
- Zahlungsmethode
  - : Das Instrument, mit dem die Zahlung vorgenommen wird, wie z.B. eine Kreditkarte oder ein Online-Zahlungsdienst.
- Anbieter der Zahlungsmethode
  - : Eine Organisation, die die Technologie zur Verfügung stellt, die benötigt wird, um Zahlungen mit einer bestimmten Zahlungsmethode vorzunehmen. Zum Beispiel ist bei Zahlungen mit einer Kreditkarte der Kreditkartenabrechnungsdienst der Anbieter der Zahlungsmethode.
- Zahlungshandler
  - : Die Implementierung des Codes, der erforderlich ist, um mit einem bestimmten Anbieter der Zahlungsmethode zu interagieren, um Zahlungen zu verarbeiten.

Einige Zahlungshandler verwenden **Händlervalidierung**, was der Prozess der Validierung der Identität eines Händlers in irgendeiner Weise ist, normalerweise unter Verwendung einer kryptographischen Antwort wie eines öffentlichen Schlüssels. Validierte Händler dürfen mit einem Zahlungshandler interagieren.

## Zahlungsmethoden-Identifikatoren

Zahlungshandler werden durch **Zahlungsmethoden-Identifikatoren** identifiziert, das sind Zeichenketten, die den Zahlungshandler eindeutig identifizieren. Diese können entweder einer der standardisierten Zahlungshandler-Identifikatoren oder eine URL sein, die vom Zahlungsdienst verwendet wird, um sich selbst zu identifizieren und Zahlungen abzuwickeln.

### Standardisierte Zahlungsmethoden-Identifikatoren

Standardisierte Zahlungsmethoden-Identifikatoren sind diejenigen, die im [Zahlungsmethoden-Register](https://www.w3.org/TR/payment-method-id/#registry) aufgeführt sind.

- `secure-payment-confirmation`

  - : Identifiziert die [Secure Payment Confirmation](https://w3c.github.io/secure-payment-confirmation/) Methode. Die Zahlungsanfragedaten für diese Methode werden vom [`SecurePaymentConfirmationRequest`](/de/docs/Web/API/SecurePaymentConfirmationRequest) Wörterbuch definiert. Für weitere Informationen siehe [Using Secure Payment Confirmation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

- `basic-card`
  - : Dieser Zahlungsmethoden-Identifikator sollte kartengestützte Zahlungen im Web über die Payment Request API erleichtern. **Die [Web Payments Arbeitsgruppe](https://www.w3.org/groups/wg/payments) hat diese Zahlungsmethode veraltet.**

### URL-basierte Zahlungsmethoden-Identifikatoren

Diese können erheblich variieren, je nach den spezifischen Anforderungen des Dienstes, und ein bestimmter Zahlungsdienst kann mehrere verwendete URLs haben, abhängig von der Version ihrer API, ihrer Kommunikationstechnologie usw.

- `https://apple.com/apple-pay`
  - : Zahlungen werden mit dem [Apple Pay](https://www.apple.com/apple-pay/) Dienst abgewickelt. Derzeit wird Apple Pay nur von Safari unterstützt.
- `https://google.com/pay`
  - : Zahlungen werden durch [Google Pay](https://pay.google.com/payments/home) verarbeitet. Dies wird derzeit nur von Chrome und auf Chromium basierenden Browsern unterstützt.

## Funktionen eines Zahlungshandlers

Ein [User-Agent](/de/docs/Glossary/user_agent) kann integrierte Unterstützung für bestimmte Zahlungsarten bieten. Zusätzlich kann die [Payment Handler API](https://w3c.github.io/payment-handler/) verwendet werden, um Unterstützung für zusätzliche Anbieter von Zahlungsmethoden hinzuzufügen, in Browsern, die dies unterstützen. In jedem Fall ist der Zahlungshandler verantwortlich für:

1. **Sicherstellen, dass eine Zahlung möglich ist.** Die Bedingungen, die eine Zahlung möglich machen, variieren je nach Zahlungsmethode und der Zahlungsanfrage des Nutzers; beispielsweise, wenn der Nutzer eine Kreditkarte auswählt, die vom Zahlungsempfänger nicht akzeptiert wird, kann die Zahlung nicht erfolgen.
2. **Falls die Händlervalidierung vom Zahlungshandler unterstützt wird, auf Validierungsanfragen des Händlers vom User-Agent antworten.** Siehe [Händlervalidierung](#händlervalidierung) für Details.
3. **Überprüfen, dass die vom Nutzer bereitgestellten Informationen zu einer gültigen Transaktion führen.** Dies führt zur Erstellung und Rückgabe eines zahlungsmethodenspezifischen Objekts, das die Informationen enthält, die zur Abwicklung der Transaktion erforderlich sind.

## Händlervalidierung

Einige Zahlungshandler verwenden _Händlervalidierung_, was der Prozess der Validierung der Identität eines Händlers in irgendeiner Weise ist, üblicherweise unter Verwendung einer kryptografischen Herausforderung. Wenn der Händler nicht erfolgreich validiert wird, darf er den Zahlungshandler nicht verwenden.

Die genaue Validierungstechnologie hängt vom Zahlungshandler ab, und die Händlervalidierung ist völlig optional. Letztendlich ist die einzige Verantwortung der Website oder App, den Validierungsschlüssel des Händlers abzurufen und ihn in die `complete()` Methode des Ereignisses einzufügen.

```js
paymentRequest.onmerchantvalidation = (event) => {
  event.complete(fetchValidationData(event.validationURL));
};
```

In diesem Beispiel ist `fetchValidationData()` eine Funktion, die die spezifischen Identifizierungsinformationen des Zahlungshandlers von der Adresse lädt, die durch `validationURL` angegeben ist. Beachten Sie, dass diese Funktion über den Server des Händlers laufen muss, da ein Client normalerweise nicht direkt auf die Validierungs-URL zugreift.

Indem diese Daten (oder ein {{jsxref("Promise")}}, das sich zu den geladenen Daten auflöst) dann an den Zahlungshandler übergeben werden, indem sie in `complete()` eingefügt werden, kann der Zahlungshandler die abgerufenen Daten und welche weiteren Algorithmen und Daten auch immer verwendet werden, um zu überprüfen, dass der Händler den Zahlungshandler nutzen kann.

Daher ist es wichtig zu beachten, dass der [User-Agent](/de/docs/Glossary/user_agent) niemals ein [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) Ereignis sendet, es sei denn, der User-Agent selbst implementiert einen Zahlungshandler. Zum Beispiel hat Safari eine integrierte Unterstützung für Apple Pay, sodass der Apple Pay Zahlungshandler dies nutzt, um sicherzustellen, dass über Apple Pay bezahlt werden kann, indem `merchantvalidation` an den Client gesendet wird, der angewiesen wird, die Validierungsdaten des Servers abzurufen und sie an den Zahlungshandler durch Aufruf von `complete()` zu liefern.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Introducing the Payment Request API for Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
