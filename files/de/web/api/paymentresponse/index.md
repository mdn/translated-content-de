---
title: PaymentResponse
slug: Web/API/PaymentResponse
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{SecureContext_Header}}{{APIRef("Payment Request API")}}

Das **`PaymentResponse`** Interface der [Payment Request API](/de/docs/Web/API/Payment_Request_API) wird zurückgegeben, nachdem ein Benutzer eine Zahlungsmethode ausgewählt und eine Zahlungsaufforderung genehmigt hat.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`PaymentResponse.details`](/de/docs/Web/API/PaymentResponse/details) {{ReadOnlyInline}}
  - : Gibt ein JSON-serialisierbares Objekt zurück, das eine zahlungsspezifische Nachricht für den Händler bereitstellt, um die Transaktion zu verarbeiten und den erfolgreichen Geldtransfer zu bestimmen. Der Inhalt des Objekts hängt von der verwendeten Zahlungsmethode ab. Entwickler müssen die für die URL zuständige Stelle konsultieren, um die erwartete Form des Details-Objekts zu erfahren.
- [`PaymentResponse.methodName`](/de/docs/Web/API/PaymentResponse/methodName) {{ReadOnlyInline}}
  - : Gibt den Identifikator der Zahlungsmethode zurück, die der Benutzer ausgewählt hat, zum Beispiel Visa, Mastercard, Paypal, etc.
- [`PaymentResponse.payerEmail`](/de/docs/Web/API/PaymentResponse/payerEmail) {{ReadOnlyInline}}
  - : Gibt die vom Benutzer angegebene E-Mail-Adresse zurück. Diese Option ist nur vorhanden, wenn die Option `requestPayerEmail` im `options` Parameter des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktors auf `true` gesetzt ist.
- [`PaymentResponse.payerName`](/de/docs/Web/API/PaymentResponse/payerName) {{ReadOnlyInline}}
  - : Gibt den vom Benutzer angegebenen Namen zurück. Diese Option ist nur vorhanden, wenn die Option `requestPayerName` im `options` Parameter des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktors auf true gesetzt ist.
- [`PaymentResponse.payerPhone`](/de/docs/Web/API/PaymentResponse/payerPhone) {{ReadOnlyInline}}
  - : Gibt die vom Benutzer angegebene Telefonnummer zurück. Diese Option ist nur vorhanden, wenn die Option `requestPayerPhone` im `options` Parameter des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktors auf `true` gesetzt ist.
- [`PaymentResponse.requestId`](/de/docs/Web/API/PaymentResponse/requestId) {{ReadOnlyInline}}
  - : Gibt den Identifikator der [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) zurück, die die aktuelle Antwort erzeugt hat. Dies ist derselbe Wert, der im [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktor unter `details.id` angegeben wurde.
- [`PaymentResponse.shippingAddress`](/de/docs/Web/API/PaymentResponse/shippingAddress) {{ReadOnlyInline}}
  - : Gibt die vom Benutzer angegebene Versandadresse zurück. Diese Option ist nur vorhanden, wenn die Option `requestShipping` im `options` Parameter des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktors auf `true` gesetzt ist.
- [`PaymentResponse.shippingOption`](/de/docs/Web/API/PaymentResponse/shippingOption) {{ReadOnlyInline}}
  - : Gibt das ID-Attribut der vom Benutzer ausgewählten Versandoption zurück. Diese Option ist nur vorhanden, wenn die Option `requestShipping` im `options` Parameter des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktors auf `true` gesetzt ist.

## Instanzmethoden

- [`PaymentResponse.retry()`](/de/docs/Web/API/PaymentResponse/retry)
  - : Wenn etwas mit den Daten der Zahlungsantwort nicht stimmt (und es einen behebbaren Fehler gibt), ermöglicht diese Methode einem Händler, den Benutzer zu bitten, die Zahlung erneut zu versuchen. Die Methode nimmt ein Objekt als Argument, das dazu verwendet wird, dem Benutzer genau mitzuteilen, was mit der Zahlungsantwort nicht stimmt, damit er versuchen kann, jegliche Probleme zu beheben.
- [`PaymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete)
  - : Meldet dem Benutzeragenten, dass die Benutzerinteraktion beendet ist. Dadurch wird eine verbleibende Benutzeroberfläche geschlossen. Diese Methode sollte nur aufgerufen werden, nachdem das Versprechen, das von der [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) Methode zurückgegeben wird, erfüllt wurde.
- [`PaymentResponse.toJSON()`](/de/docs/Web/API/PaymentResponse/toJSON)
  - : Gibt ein [JSON-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) zurück, das dieses `PaymentResponse` Objekt darstellt.

## Ereignisse

Hören Sie auf dieses Ereignis mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname` Eigenschaft dieses Interfaces zuweisen.

- [`payerdetailchange`](/de/docs/Web/API/PaymentResponse/payerdetailchange_event)
  - : Wird während eines erneuten Versuchs ausgelöst, wenn der Benutzer Änderungen an seinen persönlichen Informationen vornimmt, während er ein Zahlungsformular ausfüllt. Ermöglicht es dem Entwickler, jegliche angeforderten Benutzerdaten (z. B. die Telefonnummer oder die E-Mail-Adresse) erneut zu validieren, falls sich diese ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
