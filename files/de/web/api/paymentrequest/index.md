---
title: PaymentRequest
slug: Web/API/PaymentRequest
l10n:
  sourceCommit: 89c7b111d380e607e94b58abbd0d37951cf395c4
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}

Das **`PaymentRequest`**-Interface der [Payment Request API](/de/docs/Web/API/Payment_Request_API) ist der primäre Zugangspunkt zur API und ermöglicht es Web-Inhalten und Apps, Zahlungen von Endnutzern im Auftrag des Betreibers der Website oder Herausgebers der App anzunehmen.

{{InheritanceDiagram}}

## Konstruktor

- [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)
  - : Erstellt ein neues `PaymentRequest`-Objekt.

## Instanz-Eigenschaften

- [`PaymentRequest.id`](/de/docs/Web/API/PaymentRequest/id) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für ein bestimmtes `PaymentRequest`, die über `details.id` gesetzt werden kann. Wenn keine gesetzt ist, wird standardmäßig ein UUID verwendet.
- [`PaymentRequest.shippingAddress`](/de/docs/Web/API/PaymentRequest/shippingAddress) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Falls über Zahlungsoptionen angefordert, gibt die von der Benutzerin oder dem Benutzer gewählte Versandadresse zum Zwecke der Versandkostenberechnung zurück. Diese Eigenschaft wird nur gefüllt, wenn der Konstruktor mit dem `requestShipping`-Flag aufgerufen wird. Zusätzlich werden in einigen Browsern Teile der Adresse aus Datenschutzgründen ausgeblendet, bis die Benutzerin oder der Benutzer angibt, dass sie oder er bereit ist, die Transaktion abzuschließen (d.h., sie oder er drückt "Bezahlen").
- [`PaymentRequest.shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die Kennung der ausgewählten Versandoption zurück. Diese Eigenschaft wird nur gefüllt, wenn der Konstruktor mit dem `requestShipping`-Flag aufgerufen wird.
- [`PaymentRequest.shippingType`](/de/docs/Web/API/PaymentRequest/shippingType) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den Typ des Versands zurück, der zur Erfüllung der Transaktion verwendet wird. Dies wird eines der folgenden sein: `shipping`, `delivery`, `pickup` oder `null`, wenn im Konstruktor kein Wert angegeben wurde.

## Instanz-Methoden

- [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment)
  - : Gibt an, ob das `PaymentRequest`-Objekt eine Zahlung vor dem Aufruf von `show()` durchführen kann.
- [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
  - : Lässt den Benutzer-Agent die Benutzerinteraktion für die Zahlungsanforderung beginnen.
- [`PaymentRequest.abort()`](/de/docs/Web/API/PaymentRequest/abort)
  - : Veranlasst den Benutzer-Agent, die Zahlungsanforderung zu beenden und jegliche möglicherweise angezeigte Benutzeroberfläche zu entfernen.

## Ereignisse

- [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) {{Deprecated_Inline}}
  - : Bei einigen Zahlungsabwicklern (z. B. Apple Pay) wird dieser Ereignishandler aufgerufen, um das [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)-Ereignis zu verarbeiten, das ausgelöst wird, wenn der Benutzer-Agent verlangt, dass der Händler die Legitimität des Händlers oder Anbieters bestätigt, der die Zahlung anfordert.
- [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event)
  - : Bei einigen Zahlungsabwicklern (z. B. Apple Pay), ausgelöst, wann immer der Benutzer das Zahlungsmittel ändert, zum Beispiel von einer Kreditkarte zu einer Debitkarte wechselt.
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event){{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wann immer der Benutzer seine Versandadresse ändert.
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wann immer der Benutzer eine Versandoption ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
