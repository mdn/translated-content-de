---
title: Payment Request API
slug: Web/API/Payment_Request_API
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}

Die **Payment Request API** bietet eine einheitliche Benutzererfahrung für Händler und Nutzer. Es ist keine neue Zahlungsmethode, sondern ermöglicht es den Nutzern, ihre bevorzugte Zahlungsweise auszuwählen und diese Informationen einem Händler bereitzustellen.

## Konzepte und Anwendung

Viele Probleme im Zusammenhang mit dem Abbruch von Online-Einkaufswagen sind auf Check-out-Formulare zurückzuführen, die oft schwer auszufüllen sind und mehrere Schritte erfordern. Die **Payment Request API** soll die Schritte zur Bezahlung online reduzieren und möglicherweise auf Check-out-Formulare verzichten. Sie zielt darauf ab, den Checkout-Prozess zugänglicher zu machen, indem Zahlungs-Apps die Details eines Nutzers speichern, die dann an einen Händler weitergegeben werden, hoffentlich ohne ein HTML-Formular zu benötigen.

Um eine Zahlung anzufordern, erstellt eine Webseite ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt als Reaktion auf eine Benutzeraktion, die eine Zahlung einleitet, wie z.B. das Klicken auf einen "Kaufen"-Button. Der `PaymentRequest` ermöglicht es der Webseite, Informationen mit dem User-Agent auszutauschen, während der Nutzer Eingaben zur Transaktionsabwicklung macht.

Sie finden einen vollständigen Leitfaden unter [Using the Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API).

> [!NOTE]
> Die API ist nur innerhalb von Cross-Origin-{{htmlelement("iframe")}}-Elementen verfügbar, wenn das Attribut [`allowpaymentrequest`](/de/docs/Web/HTML/Element/iframe#allowpaymentrequest) auf ihnen gesetzt ist.

## Schnittstellen

- [`PaymentAddress`](/de/docs/Web/API/PaymentAddress) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Objekt, das Adressinformationen enthält; wird z.B. für Rechnungs- und Versandadressen verwendet.
- [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)
  - : Ein Objekt, das die API zur Erstellung und Verwaltung der Zahlungsoberfläche des [User-Agent](/de/docs/Glossary/user_agent) bereitstellt.
- [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent)
  - : Ermöglicht es der Webseite, die Details der Zahlungsanfrage in Reaktion auf eine Benutzeraktion zu aktualisieren.
- [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent)
  - : Repräsentiert das Ändern des Zahlungsinstruments durch den Nutzer (z.B. Wechsel von einer Zahlungsmethode zu einer anderen).
- [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)
  - : Ein Objekt, das zurückgegeben wird, nachdem der Nutzer eine Zahlungsmethode ausgewählt und eine Zahlungsanfrage genehmigt hat.
- [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent) {{Deprecated_Inline}}
  - : Repräsentiert die Anforderung des Browsers, dass der Händler (Website) sich als berechtigt validiert, einen bestimmten Zahlungsabwickler zu verwenden (z.B. registriert, um Apple Pay zu nutzen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/de/docs/Web/API/Payment_Request_API/Concepts)
- [Introducing the Payment Request API for Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
- [Samsung Pay Web Payments Integration Guide](https://developer.samsung.com/internet/android/web-payments-integration-guide.html)
- [W3C Payment Request API FAQ](https://github.com/w3c/payment-request-info/wiki/FAQ)
- Permissions Policy directive {{httpheader("Permissions-Policy/payment", "payment")}}
