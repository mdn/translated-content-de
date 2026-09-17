---
title: Payment Request API
slug: Web/API/Payment_Request_API
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}

Die **Payment Request API** bietet eine einheitliche Benutzererfahrung für Händler und Nutzer. Sie ist keine neue Methode, um Dinge zu bezahlen; stattdessen ermöglicht sie Nutzern, ihre bevorzugte Zahlungsmethode auszuwählen und diese Informationen einem Händler zur Verfügung zu stellen.

## Konzepte und Verwendung

Viele Probleme im Zusammenhang mit dem Abbruch von Online-Einkaufswagen lassen sich auf Checkout-Formulare zurückführen, die schwierig und zeitaufwendig auszufüllen sein können und oft mehrere Schritte erfordern. Die **Payment Request API** soll die zum Abschließen einer Online-Zahlung erforderlichen Schritte reduzieren und möglicherweise Checkout-Formulare überflüssig machen. Sie soll den Checkout-Prozess barrierefreier gestalten, indem Zahlungs-Apps die Daten eines Nutzers speichern, die an einen Händler weitergegeben werden, hoffentlich ohne dass ein HTML-Formular erforderlich ist.

Um eine Zahlung anzufordern, erstellt eine Webseite als Reaktion auf eine Nutzeraktion, die eine Zahlung initiiert, beispielsweise durch Klicken auf eine Schaltfläche „Kaufen“, ein [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekt. Das `PaymentRequest` ermöglicht es der Webseite, Informationen mit dem User-Agent auszutauschen, während der Nutzer Eingaben zum Abschließen der Transaktion bereitstellt.

Eine vollständige Anleitung finden Sie unter [Verwenden der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API).

> [!NOTE]
> Die API ist innerhalb von Cross-Origin-{{htmlelement("iframe")}}-Elementen nur verfügbar, wenn für diese das Attribut [`allowpaymentrequest`](/de/docs/Web/HTML/Reference/Elements/iframe#allowpaymentrequest) festgelegt wurde.

## Schnittstellen

- [`PaymentAddress`](/de/docs/Web/API/PaymentAddress) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Objekt, das Adressinformationen enthält; wird beispielsweise für Rechnungs- und Lieferadressen verwendet.
- [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)
  - : Ein Objekt, das die API zum Erstellen und Verwalten der Zahlungsschnittstelle des {{Glossary("user_agent", "User-Agents")}} bereitstellt.
- [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent)
  - : Ermöglicht der Webseite, die Details der Zahlungsanforderung als Reaktion auf eine Nutzeraktion zu aktualisieren.
- [`PaymentMethodChangeEvent`](/de/docs/Web/API/PaymentMethodChangeEvent)
  - : Repräsentiert, dass der Nutzer das Zahlungsinstrument ändert (z. B. von einer Zahlungsmethode zu einer anderen wechselt).
- [`PaymentResponse`](/de/docs/Web/API/PaymentResponse)
  - : Ein Objekt, das zurückgegeben wird, nachdem der Nutzer eine Zahlungsmethode ausgewählt und eine Zahlungsanforderung genehmigt hat.
- [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent) {{Deprecated_Inline}}
  - : Repräsentiert, dass der Browser verlangt, dass der Händler (die Website) sich als berechtigt zur Verwendung eines bestimmten Payment Handlers validiert (z. B. als zur Verwendung von Apple Pay berechtigt registriert).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
- [Einführung der Payment Request API für Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest-Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
- [Samsung Pay Web Payments Integration Guide](https://developer.samsung.com/browser/android/web-payments-integration-guide.html)
- [W3C Payment Request API – FAQ](https://github.com/w3c/payment-request-info/wiki/FAQ)
- Permissions-Policy-Direktive {{httpheader("Permissions-Policy/payment", "payment")}}
