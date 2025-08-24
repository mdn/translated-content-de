---
title: PaymentRequest
slug: Web/API/PaymentRequest
l10n:
  sourceCommit: 43875884a5ebc2c7de4702c31a9bdc3ecbeed610
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}

Die **`PaymentRequest`** Schnittstelle des [Payment Request API](/de/docs/Web/API/Payment_Request_API) ist der primäre Zugangspunkt zu dieser API und ermöglicht es Webinhalten und Apps, Zahlungen vom Endbenutzer im Namen des Betreibers der Website oder des Herausgebers der App zu akzeptieren.

{{InheritanceDiagram}}

## Konstruktor

- [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)
  - : Erstellt ein neues `PaymentRequest`-Objekt.

## Instanzeigenschaften

- [`PaymentRequest.id`](/de/docs/Web/API/PaymentRequest/id) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für einen bestimmten `PaymentRequest`, die über `details.id` festgelegt werden kann. Wenn keine festgelegt ist, wird standardmäßig eine UUID verwendet.
- [`PaymentRequest.shippingAddress`](/de/docs/Web/API/PaymentRequest/shippingAddress) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt, falls über Zahlungsoptionen angefordert, die vom Benutzer gewählte Lieferadresse zurück, um die Versandkosten zu berechnen. Diese Eigenschaft wird nur ausgefüllt, wenn der Konstruktor mit dem `requestShipping`-Flag auf true gesetzt aufgerufen wird. Darüber hinaus werden in einigen Browsern Teile der Adresse aus Datenschutzgründen erst dann angezeigt, wenn der Benutzer angibt, dass er bereit ist, die Transaktion abzuschließen (d.h. sie drücken auf "Pay").
- [`PaymentRequest.shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die Kennung der ausgewählten Versandoption zurück. Diese Eigenschaft wird nur ausgefüllt, wenn der Konstruktor mit dem `requestShipping`-Flag auf true gesetzt aufgerufen wird.
- [`PaymentRequest.shippingType`](/de/docs/Web/API/PaymentRequest/shippingType) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den Versandtyp zurück, der zur Erfüllung der Transaktion verwendet wird. Dies wird eines von `shipping`, `delivery`, `pickup` oder `null` sein, falls im Konstruktor kein Wert angegeben wurde.

## Statische Methoden

- [`PaymentRequest.securePaymentConfirmationAvailability()`](/de/docs/Web/API/PaymentRequest/securePaymentConfirmationAvailability_static)
  - : Gibt an, ob das [Sichere Zahlungsbestätigung](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation)-Feature verfügbar ist.

## Instanzmethoden

- [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment)
  - : Zeigt an, ob das `PaymentRequest`-Objekt eine Zahlung durchführen kann, bevor `show()` aufgerufen wird.
- [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
  - : Veranlasst den Benutzeragenten, die Benutzerinteraktion für die Zahlungsanfrage zu starten.
- [`PaymentRequest.abort()`](/de/docs/Web/API/PaymentRequest/abort)
  - : Veranlasst den Benutzeragenten, die Zahlungsanfrage zu beenden und jegliche möglicherweise angezeigte Benutzeroberfläche zu entfernen.

## Ereignisse

- [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) {{Deprecated_Inline}}
  - : Bei einigen Zahlungsanbietern (z. B. Apple Pay) wird dieser Ereignishandler aufgerufen, um das [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) Ereignis zu bearbeiten, das ausgelöst wird, wenn der Benutzeragent verlangt, dass der Händler validiert, dass der Händler oder Anbieter, der die Zahlung anfordert, legitim ist.
- [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event)
  - : Bei einigen Zahlungsanbietern (z. B. Apple Pay) wird immer dann ausgelöst, wenn der Benutzer das Zahlungsmittel wechselt, z. B. von einer Kreditkarte zu einer Debitkarte wechselt.
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event){{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird immer dann ausgelöst, wenn der Benutzer seine Lieferadresse ändert.
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird immer dann ausgelöst, wenn der Benutzer eine Versandoption ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
