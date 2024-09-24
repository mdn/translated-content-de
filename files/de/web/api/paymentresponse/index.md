---
title: PaymentResponse
slug: Web/API/PaymentResponse
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{SecureContext_Header}}{{APIRef("Payment Request API")}}

Das **`PaymentResponse`** Interface der [Payment Request API](/de/docs/Web/API/Payment_Request_API) wird zurückgegeben, nachdem ein Benutzer eine Zahlungsmethode ausgewählt und eine Zahlungsanforderung genehmigt hat.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref('PaymentResponse.details')}} {{ReadOnlyInline}}
  - : Gibt ein JSON-serialisierbares Objekt zurück, das eine zahlungsmethodenspezifische Nachricht bereitstellt, die vom Händler verwendet wird, um die Transaktion zu verarbeiten und den erfolgreichen Geldtransfer zu bestimmen. Der Inhalt des Objekts hängt von der verwendeten Zahlungsmethode ab. Entwickler müssen diejenigen konsultieren, die die URL kontrollieren, um die erwartete Struktur des Objekts mit den Details zu verstehen.
- {{domxref('PaymentResponse.methodName')}} {{ReadOnlyInline}}
  - : Gibt den Zahlungskennzeichner der Zahlungsmethode zurück, die vom Benutzer ausgewählt wurde, z.B. Visa, Mastercard, Paypal, etc.
- {{domxref('PaymentResponse.payerEmail')}} {{ReadOnlyInline}}
  - : Gibt die vom Benutzer angegebene E-Mail-Adresse zurück. Diese Option ist nur vorhanden, wenn die `requestPayerEmail` Option im `options` Parameter des {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} Konstruktors auf `true` gesetzt ist.
- {{domxref('PaymentResponse.payerName')}} {{ReadOnlyInline}}
  - : Gibt den vom Benutzer angegebenen Namen zurück. Diese Option ist nur vorhanden, wenn die `requestPayerName` Option im `options` Parameter des {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} Konstruktors auf true gesetzt ist.
- {{domxref('PaymentResponse.payerPhone')}} {{ReadOnlyInline}}
  - : Gibt die vom Benutzer angegebene Telefonnummer zurück. Diese Option ist nur vorhanden, wenn die `requestPayerPhone` Option im `options` Parameter des {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} Konstruktors auf `true` gesetzt ist.
- {{domxref('PaymentResponse.requestId')}} {{ReadOnlyInline}}
  - : Gibt den Bezeichner der {{domxref('PaymentRequest')}} zurück, die die aktuelle Antwort erzeugt hat. Dies ist derselbe Wert, der im {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} Konstruktor durch `details.id` bereitgestellt wurde.
- {{domxref('PaymentResponse.shippingAddress')}} {{ReadOnlyInline}}
  - : Gibt die vom Benutzer angegebene Lieferadresse zurück. Diese Option ist nur vorhanden, wenn die `requestShipping` Option im `options` Parameter des {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} Konstruktors auf `true` gesetzt ist.
- {{domxref('PaymentResponse.shippingOption')}} {{ReadOnlyInline}}
  - : Gibt das ID-Attribut der vom Benutzer ausgewählten Lieferoption zurück. Diese Option ist nur vorhanden, wenn die `requestShipping` Option im `options` Parameter des {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} Konstruktors auf `true` gesetzt ist.

## Instanz-Methoden

- {{domxref('PaymentResponse.retry()')}}
  - : Falls etwas mit den Zahlungsantwortdaten nicht stimmt (und es einen behebbaren Fehler gibt), ermöglicht diese Methode einem Händler, den Benutzer aufzufordern, die Zahlung zu wiederholen. Die Methode nimmt ein Objekt als Argument, das dazu verwendet wird, dem Benutzer genau zu signalisieren, was mit der Zahlungsantwort nicht stimmt, damit er versuchen kann, etwaige Probleme zu korrigieren.
- {{domxref('PaymentResponse.complete()')}}
  - : Benachrichtigt den Benutzeragenten, dass die Benutzerinteraktion abgeschlossen ist. Dies führt dazu, dass alle verbleibenden Benutzeroberflächen geschlossen werden. Diese Methode sollte nur aufgerufen werden, nachdem das Promise, das von der {{domxref('PaymentRequest.show()')}} Methode zurückgegeben wurde, abgeschlossen ist.
- {{domxref("PaymentResponse.toJSON()")}}
  - : Gibt ein [JSON-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) zurück, das dieses `PaymentResponse` Objekt darstellt.

## Ereignisse

Hören Sie auf dieses Ereignis mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname` Eigenschaft dieses Interfaces.

- [`payerdetailchange`](/de/docs/Web/API/PaymentResponse/payerdetailchange_event)
  - : Wird während eines erneuten Versuchs ausgelöst, wenn der Benutzer Änderungen an seinen persönlichen Informationen vornimmt, während er ein Zahlungsanforderungsformular ausfüllt. Ermöglicht es dem Entwickler, alle angeforderten Benutzerdaten (z.B. die Telefonnummer oder die E-Mail-Adresse) erneut zu validieren, falls sie sich ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
