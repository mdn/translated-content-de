---
title: PaymentRequest
slug: Web/API/PaymentRequest
l10n:
  sourceCommit: 8b10fe925e7bdd362ef4c0b88e305c104befa465
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}

Das **`PaymentRequest`**-Interface der [Payment Request API](/de/docs/Web/API/Payment_Request_API) ist der primäre Zugangspunkt in die API und ermöglicht es Webinhalten und Apps, Zahlungen vom Endnutzer im Namen des Betreibers der Website oder des Herausgebers der App zu akzeptieren.

{{InheritanceDiagram}}

## Konstruktor

- [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)
  - : Erstellt ein neues `PaymentRequest`-Objekt.

## Instanzeigenschaften

- [`PaymentRequest.id`](/de/docs/Web/API/PaymentRequest/id) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für ein bestimmtes `PaymentRequest`, die über `details.id` festgelegt werden kann. Wenn keine festgelegt ist, wird standardmäßig eine UUID verwendet.
- [`PaymentRequest.shippingAddress`](/de/docs/Web/API/PaymentRequest/shippingAddress) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt, wenn über Zahlungsoptionen angefordert, die vom Benutzer gewählte Versandadresse für die Berechnung des Versands zurück. Diese Eigenschaft wird nur befüllt, wenn der Konstruktor mit dem `requestShipping`-Flag aufgerufen wird. In einigen Browsern werden Teile der Adresse aus Datenschutzgründen bis zur Bestätigung der Transaktion durch den Benutzer ausgeblendet (z.B. wenn dieser auf "Bezahlen" klickt).
- [`PaymentRequest.shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die Kennung der ausgewählten Versandoption zurück. Diese Eigenschaft wird nur befüllt, wenn der Konstruktor mit dem `requestShipping`-Flag aufgerufen wird.
- [`PaymentRequest.shippingType`](/de/docs/Web/API/PaymentRequest/shippingType) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den Typ des Versands zurück, der zur Durchführung der Transaktion verwendet wird. Dies wird einer der Werte `shipping`, `delivery`, `pickup` oder `null` sein, wenn im Konstruktor kein Wert angegeben wurde.

## Statische Methoden

- [`PaymentRequest.securePaymentConfirmationAvailability()`](/de/docs/Web/API/PaymentRequest/securePaymentConfirmationAvailability_static) {{experimental_inline}}
  - : Gibt an, ob die Funktion der [gesicherten Zahlungsbestätigung](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation) verfügbar ist.

## Instanzmethoden

- [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment)
  - : Gibt an, ob das `PaymentRequest`-Objekt eine Zahlung vor der Aufruf von `show()` durchführen kann.
- [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
  - : Veranlasst den Benutzeragenten, die Benutzerinteraktion für die Zahlung anzufangen.
- [`PaymentRequest.abort()`](/de/docs/Web/API/PaymentRequest/abort)
  - : Veranlasst den Benutzeragenten, die Zahlung abzubrechen und jegliche angezeigten Benutzeroberflächen zu entfernen.

## Ereignisse

- [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) {{Deprecated_Inline}}
  - : Bei einigen Zahlungsabwicklern (z.B. Apple Pay) wird dieser Ereignishandler aufgerufen, um das [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)-Ereignis zu bearbeiten, das ausgelöst wird, wenn der Benutzeragent die Verifizierung des Händlers oder Anbieters anfordert, der die Zahlung initiiert.
- [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event)
  - : Bei einigen Zahlungsabwicklern (z.B. Apple Pay) wird dieses Ereignis ausgelöst, wann immer der Benutzer das Zahlungsmittel ändert, beispielsweise vom Kreditkarten- zum Debitkartenwechsel.
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event){{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wann immer der Benutzer seine Versandadresse ändert.
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wann immer der Benutzer eine Versandoption ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
