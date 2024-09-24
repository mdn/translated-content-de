---
title: Payment Request API
slug: Web/API/Payment_Request_API
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}

Die **Payment Request API** bietet ein einheitliches Benutzererlebnis für Händler und Nutzer. Sie ist keine neue Zahlungsmethode, sondern ermöglicht es Nutzern, ihre bevorzugte Zahlungsmethode auszuwählen und diese Informationen einem Händler zur Verfügung zu stellen.

## Konzepte und Nutzung

Viele Probleme im Zusammenhang mit dem Abbruch von Online-Einkaufswagen lassen sich auf Checkout-Formulare zurückführen, die schwer auszufüllen und zeitaufwändig sind und oft mehrere Schritte erfordern. Die **Payment Request API** soll die Anzahl der Schritte reduzieren, die zur Durchführung einer Online-Zahlung erforderlich sind, und möglicherweise Checkout-Formulare überflüssig machen. Sie zielt darauf ab, den Checkout-Prozess zugänglicher zu gestalten, indem Zahlungs-Apps die Daten eines Nutzers speichern, die an einen Händler weitergegeben werden, hoffentlich ohne dass ein HTML-Formular erforderlich ist.

Um eine Zahlung anzufordern, erstellt eine Webseite ein {{domxref("PaymentRequest")}}-Objekt als Reaktion auf eine Benutzeraktion, die eine Zahlung auslöst, wie z.B. das Klicken auf eine "Kaufen"-Schaltfläche. Der `PaymentRequest` ermöglicht es der Webseite, Informationen mit dem User Agent auszutauschen, während der Nutzer Eingaben macht, um die Transaktion abzuschließen.

Sie finden einen vollständigen Leitfaden unter [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API).

> [!NOTE]
> Die API ist innerhalb von Cross-Origin-{{htmlelement("iframe")}}-Elementen nur verfügbar, wenn das [`allowpaymentrequest`](/de/docs/Web/HTML/Element/iframe#allowpaymentrequest)-Attribut auf diesen gesetzt wurde.

## Schnittstellen

- {{domxref('PaymentAddress')}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Objekt, das Adressinformationen enthält; beispielsweise für Rechnungs- und Lieferadressen.
- {{domxref('PaymentRequest')}}
  - : Ein Objekt, das die API zum Erstellen und Verwalten der Zahlungsschnittstelle des {{Glossary("user agent", "Benutzeragenten")}} bereitstellt.
- {{domxref('PaymentRequestUpdateEvent')}}
  - : Ermöglicht es der Webseite, die Details der Zahlungsanfrage als Reaktion auf eine Benutzeraktion zu aktualisieren.
- {{domxref('PaymentMethodChangeEvent')}}
  - : Repräsentiert das Ändern eines Zahlungsmittels durch den Nutzer (z. B. Wechsel von einer Zahlungsmethode zu einer anderen).
- {{domxref('PaymentResponse')}}
  - : Ein Objekt, das zurückgegeben wird, nachdem der Nutzer eine Zahlungsmethode ausgewählt und eine Zahlungsanfrage genehmigt hat.
- {{domxref('MerchantValidationEvent')}} {{Deprecated_Inline}}
  - : Repräsentiert, dass der Browser den Händler (die Website) auffordert, sich als berechtigt zur Verwendung eines bestimmten Zahlungshandlers zu validieren (z. B. registriert zur Nutzung von Apple Pay).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
- [Einführung der Payment Request API für Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
- [Samsung Pay Web Payments Integration Guide](https://developer.samsung.com/internet/android/web-payments-integration-guide.html)
- [W3C Payment Request API FAQ](https://github.com/w3c/payment-request-info/wiki/FAQ)
- Berechtigungsrichtlinie-Direktive {{httpheader("Permissions-Policy/payment", "payment")}}
