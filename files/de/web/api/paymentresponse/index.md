---
title: PaymentResponse
slug: Web/API/PaymentResponse
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{SecureContext_Header}}{{APIRef("Payment Request API")}}

Das **`PaymentResponse`**-Interface der [Payment Request API](/de/docs/Web/API/Payment_Request_API) wird zurückgegeben, nachdem ein Benutzer eine Zahlungsmethode ausgewählt und eine Zahlungsanfrage genehmigt hat.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`PaymentResponse.details`](/de/docs/Web/API/PaymentResponse/details) {{ReadOnlyInline}}
  - : Gibt ein JSON-serialisierbares Objekt zurück, das eine zahlungsmethodenspezifische Nachricht bereitstellt, die vom Händler zur Verarbeitung der Transaktion und zur Bestimmung des erfolgreichen Geldtransfers verwendet wird. Der Inhalt des Objekts hängt von der verwendeten Zahlungsmethode ab. Entwickler müssen überprüfen, welche Form das Objekt aufweisen soll, indem sie die URL-Kontrolle konsultieren.
- [`PaymentResponse.methodName`](/de/docs/Web/API/PaymentResponse/methodName) {{ReadOnlyInline}}
  - : Gibt den Zahlungskennzeichner für die Zahlungsmethode zurück, die der Benutzer ausgewählt hat, zum Beispiel Visa, Mastercard, Paypal usw.
- [`PaymentResponse.payerEmail`](/de/docs/Web/API/PaymentResponse/payerEmail) {{ReadOnlyInline}}
  - : Gibt die vom Benutzer angegebene E-Mail-Adresse zurück. Diese Option ist nur vorhanden, wenn die Option `requestPayerEmail` im `options`-Parameter des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktors auf `true` gesetzt ist.
- [`PaymentResponse.payerName`](/de/docs/Web/API/PaymentResponse/payerName) {{ReadOnlyInline}}
  - : Gibt den vom Benutzer angegebenen Namen zurück. Diese Option ist nur vorhanden, wenn die Option `requestPayerName` im `options`-Parameter des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktors auf `true` gesetzt ist.
- [`PaymentResponse.payerPhone`](/de/docs/Web/API/PaymentResponse/payerPhone) {{ReadOnlyInline}}
  - : Gibt die vom Benutzer angegebene Telefonnummer zurück. Diese Option ist nur vorhanden, wenn die Option `requestPayerPhone` im `options`-Parameter des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktors auf `true` gesetzt ist.
- [`PaymentResponse.requestId`](/de/docs/Web/API/PaymentResponse/requestId) {{ReadOnlyInline}}
  - : Gibt die Kennung der [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) zurück, die die aktuelle Antwort erzeugt hat. Dies ist derselbe Wert, der im [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor durch `details.id` angegeben wurde.
- [`PaymentResponse.shippingAddress`](/de/docs/Web/API/PaymentResponse/shippingAddress) {{ReadOnlyInline}}
  - : Gibt die vom Benutzer angegebene Versandadresse zurück. Diese Option ist nur vorhanden, wenn die Option `requestShipping` im `options`-Parameter des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktors auf `true` gesetzt ist.
- [`PaymentResponse.shippingOption`](/de/docs/Web/API/PaymentResponse/shippingOption) {{ReadOnlyInline}}
  - : Gibt das ID-Attribut der vom Benutzer ausgewählten Versandoption zurück. Diese Option ist nur vorhanden, wenn die Option `requestShipping` im `options`-Parameter des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktors auf `true` gesetzt ist.

## Instanz-Methoden

- [`PaymentResponse.retry()`](/de/docs/Web/API/PaymentResponse/retry)
  - : Wenn etwas mit den Zahlungsantwortdaten nicht stimmt (und es sich um einen behebbaren Fehler handelt), ermöglicht diese Methode einem Händler, den Benutzer aufzufordern, die Zahlung zu wiederholen. Die Methode nimmt ein Objekt als Argument, das dem Benutzer genau signalisiert, was mit der Zahlungsantwort nicht stimmt, damit er versuchen kann, eventuelle Probleme zu beheben.
- [`PaymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete)
  - : Benachrichtigt den Benutzeragenten, dass die Benutzerinteraktion beendet ist. Dadurch wird jede verbleibende Benutzeroberfläche geschlossen. Diese Methode sollte nur aufgerufen werden, nachdem das Promise, das von der [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)-Methode zurückgegeben wird.
- [`PaymentResponse.toJSON()`](/de/docs/Web/API/PaymentResponse/toJSON)
  - : Gibt ein [JSON-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) zurück, das dieses `PaymentResponse`-Objekt darstellt.

## Ereignisse

Dieses Ereignis kann mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces gehört werden.

- [`payerdetailchange`](/de/docs/Web/API/PaymentResponse/payerdetailchange_event)
  - : Wird während eines Wiederholungsversuchs ausgelöst, wenn der Benutzer Änderungen an seinen persönlichen Informationen vornimmt, während er ein Zahlungsanforderungsformular ausfüllt. Ermöglicht es dem Entwickler, alle angeforderten Benutzerdaten (z.B. die Telefonnummer oder die E-Mail-Adresse) erneut zu validieren, wenn sich diese ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
