---
title: Payment Request API
slug: Web/API/Payment_Request_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}

Die **Payment Request API** bietet eine einheitliche Benutzererfahrung für Händler und Nutzer. Sie ist keine neue Zahlungsmethode; vielmehr ermöglicht sie es den Nutzern, ihre bevorzugte Zahlungsmethode auszuwählen und diese Information einem Händler zur Verfügung zu stellen.

## Konzepte und Verwendung

Viele Probleme im Zusammenhang mit dem Abbruch von Online-Einkaufswagen können auf Checkout-Formulare zurückgeführt werden, die schwer auszufüllen sind und oft mehrere Schritte erfordern. Die **Payment Request API** soll die notwendigen Schritte zur Online-Bezahlung reduzieren und möglicherweise Checkout-Formulare überflüssig machen. Sie zielt darauf ab, den Checkout-Prozess zugänglicher zu machen, indem Zahlungs-Apps die Details eines Nutzers speichern, die dann an einen Händler weitergegeben werden, ohne dass möglicherweise ein HTML-Formular erforderlich ist.

Um eine Zahlung anzufordern, erstellt eine Webseite ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt als Reaktion auf eine Nutzeraktion, die eine Zahlung initiiert, wie z. B. das Klicken auf eine "Kaufen"-Schaltfläche. Der `PaymentRequest` ermöglicht der Webseite den Austausch von Informationen mit dem User Agent, während der Nutzer Eingaben macht, um die Transaktion abzuschließen.

Einen vollständigen Leitfaden finden Sie unter [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API).

> [!NOTE]
> Die API ist in Cross-Origin-{{htmlelement("iframe")}}-Elementen nur verfügbar, wenn das Attribut [`allowpaymentrequest`](/de/docs/Web/HTML/Reference/Elements/iframe#allowpaymentrequest) auf ihnen gesetzt wurde.

## Schnittstellen

- [`PaymentAddress`](/de/docs/Web/API/PaymentAddress) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Objekt, das Adressinformationen enthält; wird beispielsweise für Rechnungs- und Versandadressen verwendet.
- [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)
  - : Ein Objekt, das die API zum Erstellen und Verwalten der Zahlungsschnittstelle des {{Glossary("user_agent", "User Agent")}} bereitstellt.
- [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent)
  - : Ermöglicht es der Webseite, die Details der Zahlungsanforderung als Reaktion auf eine Nutzeraktion zu aktualisieren.
- [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent)
  - : Repräsentiert das Wechseln des Zahlungsmittels durch den Nutzer (z. B. von einer Zahlungsmethode zu einer anderen).
- [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)
  - : Ein Objekt, das zurückgegeben wird, nachdem der Nutzer eine Zahlungsmethode ausgewählt und eine Zahlungsanforderung genehmigt hat.
- [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent) {{Deprecated_Inline}}
  - : Repräsentiert die Anforderung des Browsers, dass der Händler (Website) sich als berechtigt zur Nutzung eines bestimmten Zahlungshandlers validiert (z. B. als berechtigt registriert, Apple Pay zu nutzen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
- [Einführung in die Payment Request API für Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
- [Samsung Pay Web Payments Integration Guide](https://developer.samsung.com/internet/android/web-payments-integration-guide.html)
- [W3C Payment Request API FAQ](https://github.com/w3c/payment-request-info/wiki/FAQ)
- Berechtigungsrichtlinie {{httpheader("Permissions-Policy/payment", "payment")}}
