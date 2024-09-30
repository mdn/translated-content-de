---
title: Payment Request API
slug: Web/API/Payment_Request_API
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}

Die **Payment Request API** bietet ein konsistentes Benutzererlebnis für Händler und Nutzer. Es ist keine neue Zahlungsmethode; vielmehr ermöglicht sie es Nutzern, ihre bevorzugte Zahlungsmethode auszuwählen und diese Informationen einem Händler bereitzustellen.

## Konzepte und Verwendung

Viele Probleme im Zusammenhang mit dem Abbruch von Online-Einkaufswagen sind auf Checkout-Formulare zurückzuführen, die schwer auszufüllen und zeitaufwendig sind und oft mehrere Schritte erfordern, um abgeschlossen zu werden. Die **Payment Request API** soll die Schritte reduzieren, die für die Online-Zahlung erforderlich sind, und möglicherweise Checkout-Formulare überflüssig machen. Sie zielt darauf ab, den Checkout-Prozess zugänglicher zu gestalten, indem Zahlungs-Apps die Daten eines Nutzers speichern und an einen Händler weitergeben, hoffentlich ohne ein HTML-Formular erforderlich zu machen.

Um eine Zahlung anzufordern, erstellt eine Webseite ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt als Reaktion auf eine Benutzeraktion, die eine Zahlung auslöst, beispielsweise das Klicken auf eine Schaltfläche „Kaufen“. Der `PaymentRequest` ermöglicht es der Webseite, Informationen mit dem Benutzeragenten auszutauschen, während der Nutzer Eingaben zur Transaktionsabwicklung macht.

Ein vollständiger Leitfaden ist unter [Using the Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API) zu finden.

> [!NOTE]
> Die API ist innerhalb von Cross-Origin-{{htmlelement("iframe")}}-Elementen nur verfügbar, wenn das Attribut [`allowpaymentrequest`](/de/docs/Web/HTML/Element/iframe#allowpaymentrequest) auf ihnen gesetzt wurde.

## Schnittstellen

- [`PaymentAddress`](/de/docs/Web/API/PaymentAddress) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Objekt, das Adressinformationen enthält; zum Beispiel für Rechnungs- und Lieferadressen verwendet.
- [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)
  - : Ein Objekt, das die API für die Erstellung und Verwaltung der Zahlungsoberfläche des [Benutzeragenten](/de/docs/Glossary/user_agent) bereitstellt.
- [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent)
  - : Ermöglicht es der Webseite, die Details der Zahlungsanforderung als Reaktion auf eine Benutzeraktion zu aktualisieren.
- [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent)
  - : Repräsentiert das Ändern des Zahlungsmittels durch den Nutzer (z. B. Wechsel von einer Zahlungsmethode zu einer anderen).
- [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)
  - : Ein Objekt, das zurückgegeben wird, nachdem der Nutzer eine Zahlungsmethode ausgewählt und eine Zahlungsanforderung genehmigt hat.
- [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent) {{Deprecated_Inline}}
  - : Repräsentiert die Anforderung des Browsers, dass der Händler (die Webseite) sich als berechtigt zur Nutzung eines bestimmten Zahlungsabwicklers validiert (z. B. registriert als berechtigt zur Nutzung von Apple Pay).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Zahlungsabwicklungskonzepte](/de/docs/Web/API/Payment_Request_API/Concepts)
- [Einführung in die Payment Request API für Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
- [Samsung Pay Web Payments Integration Guide](https://developer.samsung.com/internet/android/web-payments-integration-guide.html)
- [W3C Payment Request API FAQ](https://github.com/w3c/payment-request-info/wiki/FAQ)
- Permissions Policy-Direktive {{httpheader("Permissions-Policy/payment", "payment")}}
