---
title: PaymentRequest
slug: Web/API/PaymentRequest
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}

Das **`PaymentRequest`**-Interface der [Payment Request API](/de/docs/Web/API/Payment_Request_API) ist der primäre Zugangspunkt in die API und ermöglicht es Webinhalten und Apps, Zahlungen vom Endbenutzer im Auftrag des Betreibers der Website oder des Herausgebers der App zu akzeptieren.

{{InheritanceDiagram}}

## Konstruktor

- [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)
  - : Erstellt ein neues `PaymentRequest`-Objekt.

## Instanz-Eigenschaften

- [`PaymentRequest.id`](/de/docs/Web/API/PaymentRequest/id) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für ein bestimmtes `PaymentRequest`, die über `details.id` gesetzt werden kann. Wenn keine gesetzt ist, wird standardmäßig eine UUID verwendet.
- [`PaymentRequest.shippingAddress`](/de/docs/Web/API/PaymentRequest/shippingAddress) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wenn über Zahlungsoptionen angefordert, gibt es die vom Benutzer gewählte Versandadresse zur Berechnung der Versandkosten zurück. Diese Eigenschaft wird nur befüllt, wenn der Konstruktor mit dem `requestShipping`-Flag aufgerufen wird. In einigen Browsern werden Teile der Adresse aus Datenschutzgründen ausgeblendet, bis der Benutzer anzeigt, dass er bereit ist, die Transaktion abzuschließen (d.h. sie klicken auf "Zahlen").
- [`PaymentRequest.shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den Bezeichner der ausgewählten Versandoption zurück. Diese Eigenschaft wird nur befüllt, wenn der Konstruktor mit dem `requestShipping`-Flag aufgerufen wird.
- [`PaymentRequest.shippingType`](/de/docs/Web/API/PaymentRequest/shippingType) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den Typ der für die Transaktion genutzten Versandart zurück. Dies kann `shipping`, `delivery`, `pickup` oder `null` sein, falls im Konstruktor kein Wert angegeben wurde.

## Statische Methoden

- [`PaymentRequest.securePaymentConfirmationAvailability()`](/de/docs/Web/API/PaymentRequest/securePaymentConfirmationAvailability_static) {{experimental_inline}}
  - : Zeigt an, ob die Funktion [Secure payment confirmation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation) verfügbar ist.

## Instanz-Methoden

- [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment)
  - : Zeigt an, ob das `PaymentRequest`-Objekt eine Zahlung durchführen kann, bevor `show()` aufgerufen wird.
- [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
  - : Veranlasst den User-Agent, die Benutzerinteraktion für die Zahlungsanfrage zu starten.
- [`PaymentRequest.abort()`](/de/docs/Web/API/PaymentRequest/abort)
  - : Veranlasst den User-Agent, die Zahlungsanfrage zu beenden und alle möglicherweise angezeigten Benutzeroberflächen zu entfernen.

## Ereignisse

- [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Bei einigen Zahlungsabwicklern (z.B. Apple Pay) wird dieser Ereignishandler aufgerufen, um das [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)-Ereignis zu behandeln, das ausgelöst wird, wenn der User-Agent verlangt, dass der Händler bestätigt, dass der Zahlungsantragsteller legitim ist.
- [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event)
  - : Bei einigen Zahlungsabwicklern (z.B. Apple Pay) wird dieses Ereignis ausgelöst, wenn der Benutzer das Zahlungsmittel wechselt, z.B. von einer Kreditkarte zu einer Debitkarte.
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event){{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn der Benutzer seine Versandadresse ändert.
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn der Benutzer eine Versandoption ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
