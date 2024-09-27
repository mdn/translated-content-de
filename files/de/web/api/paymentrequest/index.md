---
title: PaymentRequest
slug: Web/API/PaymentRequest
l10n:
  sourceCommit: 89c7b111d380e607e94b58abbd0d37951cf395c4
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}

Das **`PaymentRequest`**-Interface der [Payment Request API](/de/docs/Web/API/Payment_Request_API) ist der primäre Zugangspunkt zur API und ermöglicht es Webinhalten und Apps, Zahlungen im Namen des Betreibers der Website oder des Herausgebers der App vom Endbenutzer zu akzeptieren.

{{InheritanceDiagram}}

## Konstruktor

- [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)
  - : Erstellt ein neues `PaymentRequest`-Objekt.

## Instanzeigenschaften

- [`PaymentRequest.id`](/de/docs/Web/API/PaymentRequest/id) {{ReadOnlyInline}}
  - : Ein einzigartiger Bezeichner für ein bestimmtes `PaymentRequest`, der über `details.id` festgelegt werden kann. Wenn keiner gesetzt ist, wird standardmäßig eine UUID verwendet.
- [`PaymentRequest.shippingAddress`](/de/docs/Web/API/PaymentRequest/shippingAddress) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wenn über Zahlungsoptionen angefordert, gibt es die vom Benutzer ausgewählte Versandadresse für die Zwecke der Versandberechnung zurück. Diese Eigenschaft wird nur gesetzt, wenn der Konstruktor mit dem `requestShipping`-Flag auf true gesetzt aufgerufen wird. Zusätzlich werden in einigen Browsern Teile der Adresse aus Datenschutzgründen bis zur Bestätigung der Transaktion (d.h. "Bezahlen" drücken) abgeblendet.
- [`PaymentRequest.shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den Bezeichner der ausgewählten Versandoption zurück. Diese Eigenschaft wird nur gesetzt, wenn der Konstruktor mit dem `requestShipping`-Flag auf true gesetzt aufgerufen wird.
- [`PaymentRequest.shippingType`](/de/docs/Web/API/PaymentRequest/shippingType) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den Typ des Versandverfahrens zurück, das zur Erfüllung der Transaktion verwendet wird. Dies wird eines von `shipping`, `delivery`, `pickup` oder `null` sein, wenn im Konstruktor kein Wert angegeben wurde.

## Instanzmethoden

- [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment)
  - : Zeigt an, ob das `PaymentRequest`-Objekt eine Zahlung durchführen kann, bevor `show()` aufgerufen wird.
- [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
  - : Veranlasst den Benutzeragent, die Benutzerinteraktion für die Zahlungsanforderung zu beginnen.
- [`PaymentRequest.abort()`](/de/docs/Web/API/PaymentRequest/abort)
  - : Veranlasst den Benutzeragent, die Zahlungsanforderung zu beenden und alle möglicherweise angezeigten Benutzeroberflächen zu entfernen.

## Ereignisse

- [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) {{Deprecated_Inline}}
  - : Bei einigen Zahlungsabwicklern (z. B. Apple Pay) wird dieser Ereignishandler aufgerufen, um das [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) Ereignis zu bearbeiten, das ausgelöst wird, wenn der Benutzeragent verlangt, dass der Händler validiert, dass der Händler oder Verkäufer, der die Zahlung anfordert, legitim ist.
- [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event)
  - : Bei einigen Zahlungsabwicklern (z. B. Apple Pay) wird dieses Ereignis ausgelöst, wann immer der Benutzer das Zahlungsmittel ändert, wie z. B. der Wechsel von einer Kreditkarte zu einer Debitkarte.
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event){{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wann immer der Benutzer seine Versandadresse ändert.
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wann immer der Benutzer eine Versandoption ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
