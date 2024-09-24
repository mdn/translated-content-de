---
title: PaymentRequest
slug: Web/API/PaymentRequest
l10n:
  sourceCommit: 89c7b111d380e607e94b58abbd0d37951cf395c4
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}

Die **`PaymentRequest`**-Schnittstelle der [Payment Request API](/de/docs/Web/API/Payment_Request_API) ist der Hauptzugangspunkt zur API und ermöglicht es Webinhalten und Apps, Zahlungen vom Endbenutzer im Namen des Webseitenbetreibers oder des App-Publishers zu akzeptieren.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref('PaymentRequest.PaymentRequest()','PaymentRequest()')}}
  - : Erstellt ein neues `PaymentRequest`-Objekt.

## Instanz-Eigenschaften

- {{domxref('PaymentRequest.id')}} {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für eine bestimmte `PaymentRequest`, die über `details.id` festgelegt werden kann. Wenn keine gesetzt wird, wird standardmäßig eine UUID verwendet.
- {{domxref('PaymentRequest.shippingAddress')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wenn über Zahlungsoptionen angefordert, gibt die vom Benutzer ausgewählte Lieferadresse für die Berechnung der Versandkosten zurück. Diese Eigenschaft wird nur ausgefüllt, wenn der Konstruktor mit dem `requestShipping`-Flag auf true gesetzt aufgerufen wird. In einigen Browsern werden außerdem Teile der Adresse aus Datenschutzgründen ausgeblendet, bis der Benutzer anzeigt, dass er bereit ist, die Transaktion abzuschließen (d. h. er klickt auf "Zahlen").
- {{domxref('PaymentRequest.shippingOption')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die Kennung der ausgewählten Versandoption zurück. Diese Eigenschaft wird nur ausgefüllt, wenn der Konstruktor mit dem `requestShipping`-Flag auf true gesetzt aufgerufen wird.
- {{domxref('PaymentRequest.shippingType')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die Art des Versands zurück, die zur Erfüllung der Transaktion verwendet wird. Dies wird entweder `shipping`, `delivery`, `pickup` oder `null` sein, wenn im Konstruktor kein Wert angegeben wurde.

## Instanz-Methoden

- {{domxref('PaymentRequest.canMakePayment()')}}
  - : Gibt an, ob das `PaymentRequest`-Objekt eine Zahlung vor dem Aufruf von `show()` durchführen kann.
- {{domxref('PaymentRequest.show()')}}
  - : Verursacht, dass der Benutzeragent die Benutzerinteraktion für die Zahlungsanforderung beginnt.
- {{domxref('PaymentRequest.abort()')}}
  - : Verursacht, dass der Benutzeragent die Zahlungsanforderung beendet und jegliche möglicherweise angezeigte Benutzeroberfläche entfernt.

## Ereignisse

- {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}} {{Deprecated_Inline}}
  - : Bei einigen Zahlungsabwicklern (z. B. Apple Pay) wird dieser Ereignishandler aufgerufen, um das {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}}-Ereignis zu behandeln, das ausgelöst wird, wenn der Benutzeragent verlangt, dass der Händler validiert, dass der Händler oder Anbieter, der die Zahlung anfordert, legitim ist.
- {{domxref("PaymentRequest.paymentmethodchange_event", "paymentmethodchange")}}
  - : Bei einigen Zahlungsabwicklern (z. B. Apple Pay) wird dieses Ereignis jedes Mal ausgelöst, wenn der Benutzer das Zahlungsmittel wechselt, beispielsweise von einer Kreditkarte zu einer Debitkarte.
- {{domxref("PaymentRequest.shippingaddresschange_event", "shippingaddresschange")}}{{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird jedes Mal ausgelöst, wenn der Benutzer die Lieferadresse ändert.
- {{domxref("PaymentRequest.shippingoptionchange_event", "shippingoptionchange")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird jedes Mal ausgelöst, wenn der Benutzer eine Versandoption ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
