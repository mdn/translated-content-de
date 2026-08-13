---
title: PaymentRequest
slug: Web/API/PaymentRequest
l10n:
  sourceCommit: c808a24d4e4f7bda00e7117f315965ed39b780e5
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}

Das [Payment Request API](/de/docs/Web/API/Payment_Request_API)-**`PaymentRequest`**-Interface ist der primäre Zugriffspunkt in die API und ermöglicht es Webinhalten und Apps, Zahlungen vom Endbenutzer im Namen des Betreibers der Seite oder des Herausgebers der App zu akzeptieren.

{{InheritanceDiagram}}

## Konstruktor

- [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)
  - : Erstellt ein neues `PaymentRequest`-Objekt.

## Instanz-Eigenschaften

- [`PaymentRequest.id`](/de/docs/Web/API/PaymentRequest/id) {{ReadOnlyInline}}
  - : Ein eindeutiger Bezeichner für einen bestimmten `PaymentRequest`, der über `details.id` gesetzt werden kann. Wenn keiner gesetzt ist, wird standardmäßig eine UUID verwendet.
- [`PaymentRequest.shippingAddress`](/de/docs/Web/API/PaymentRequest/shippingAddress) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt, falls über Zahlungsoptionen angefordert, die vom Benutzer gewählte Lieferadresse zurück, um die Versandkosten zu berechnen. Diese Eigenschaft wird nur befüllt, wenn der Konstruktor mit dem Flag `requestShipping` aufgerufen wird. In einigen Browsern werden Teile der Adresse aus Datenschutzgründen bis zu dem Zeitpunkt, an dem der Benutzer bereit ist, die Transaktion abzuschließen (z.B. durch Drücken von "Bezahlen"), unkenntlich gemacht.
- [`PaymentRequest.shippingOption`](/de/docs/Web/API/PaymentRequest/shippingOption) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die Kennung der ausgewählten Versandoption zurück. Diese Eigenschaft wird nur befüllt, wenn der Konstruktor mit dem Flag `requestShipping` aufgerufen wird.
- [`PaymentRequest.shippingType`](/de/docs/Web/API/PaymentRequest/shippingType) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den Versandsystem-Typ an, der zur Durchführung der Transaktion verwendet wird. Dies wird entweder `shipping`, `delivery`, `pickup` oder `null` sein, wenn im Konstruktor kein Wert angegeben wurde.

## Statische Methoden

- [`PaymentRequest.getSecurePaymentConfirmationCapabilities()`](/de/docs/Web/API/PaymentRequest/getSecurePaymentConfirmationCapabilities_static) {{experimental_inline}}
  - : Gibt ein Objekt zurück, das angibt, welche Fähigkeiten der Funktion [Sichere Zahlungsbestätigung](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation) vom aktuellen Browser unterstützt werden.
- [`PaymentRequest.securePaymentConfirmationAvailability()`](/de/docs/Web/API/PaymentRequest/securePaymentConfirmationAvailability_static) {{experimental_inline}}
  - : Gibt an, ob die Funktion für sichere Zahlungsbestätigung im aktuellen Browser verfügbar ist.

## Instanz-Methoden

- [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment)
  - : Zeigt an, ob das `PaymentRequest`-Objekt eine Zahlung durchführen kann, bevor `show()` aufgerufen wird.
- [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
  - : Veranlasst den Benutzeragenten, mit der Benutzerinteraktion für die Zahlungsanforderung zu beginnen.
- [`PaymentRequest.abort()`](/de/docs/Web/API/PaymentRequest/abort)
  - : Veranlasst den Benutzeragenten, die Zahlungsanforderung zu beenden und eine eventuell angezeigte Benutzeroberfläche zu entfernen.

## Events

- [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Bei einigen Zahlungsanbietern (z.B. Apple Pay) wird dieser Event-Handler aufgerufen, um das [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)-Event zu behandeln, welches ausgelöst wird, wenn der Benutzeragent verlangt, dass der Händler oder Anbieter, der die Zahlung anfordert, validiert wird.
- [`paymentmethodchange`](/de/docs/Web/API/PaymentRequest/paymentmethodchange_event)
  - : Bei einigen Zahlungsanbietern (z.B. Apple Pay) wird dieses Event ausgelöst, wann immer der Benutzer das Zahlungsmittel wechselt, etwa von einer Kreditkarte zu einer Debitkarte.
- [`shippingaddresschange`](/de/docs/Web/API/PaymentRequest/shippingaddresschange_event){{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wann immer der Benutzer seine Lieferadresse ändert.
- [`shippingoptionchange`](/de/docs/Web/API/PaymentRequest/shippingoptionchange_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wann immer der Benutzer eine Versandoption ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
