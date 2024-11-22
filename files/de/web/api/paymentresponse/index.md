---
title: PaymentResponse
slug: Web/API/PaymentResponse
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{SecureContext_Header}}{{APIRef("Payment Request API")}}

Das **`PaymentResponse`**-Interface der [Payment Request API](/de/docs/Web/API/Payment_Request_API) wird zurückgegeben, nachdem ein Benutzer eine Zahlungsmethode ausgewählt und eine Zahlungsanfrage genehmigt hat.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`PaymentResponse.details`](/de/docs/Web/API/PaymentResponse/details) {{ReadOnlyInline}}
  - : Gibt ein JSON-serialisierbares Objekt zurück, das eine zahlungsmethodenspezifische Nachricht bereitstellt, die vom Händler verwendet wird, um die Transaktion zu verarbeiten und den erfolgreichen Geldtransfer zu bestimmen. Der Inhalt des Objekts hängt von der verwendeten Zahlungsmethode ab. Entwickler sollten die Kontrolle des URL-Inhabers konsultieren, um die erwartete Struktur des Details-Objekts zu erfahren.
- [`PaymentResponse.methodName`](/de/docs/Web/API/PaymentResponse/methodName) {{ReadOnlyInline}}
  - : Gibt den Bezeichner der Zahlungsmethode zurück, die der Benutzer ausgewählt hat, z. B. Visa, Mastercard, PayPal usw.
- [`PaymentResponse.payerEmail`](/de/docs/Web/API/PaymentResponse/payerEmail) {{ReadOnlyInline}}
  - : Gibt die vom Benutzer angegebene E-Mail-Adresse zurück. Diese Option ist nur vorhanden, wenn die `requestPayerEmail`-Option im `options`-Parameter des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktors auf `true` gesetzt ist.
- [`PaymentResponse.payerName`](/de/docs/Web/API/PaymentResponse/payerName) {{ReadOnlyInline}}
  - : Gibt den vom Benutzer angegebenen Namen zurück. Diese Option ist nur vorhanden, wenn die `requestPayerName`-Option im `options`-Parameter des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktors auf `true` gesetzt ist.
- [`PaymentResponse.payerPhone`](/de/docs/Web/API/PaymentResponse/payerPhone) {{ReadOnlyInline}}
  - : Gibt die vom Benutzer angegebene Telefonnummer zurück. Diese Option ist nur vorhanden, wenn die `requestPayerPhone`-Option im `options`-Parameter des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktors auf `true` gesetzt ist.
- [`PaymentResponse.requestId`](/de/docs/Web/API/PaymentResponse/requestId) {{ReadOnlyInline}}
  - : Gibt den Bezeichner der [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) zurück, die die aktuelle Antwort erzeugt hat. Dies ist derselbe Wert, der im [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor durch `details.id` angegeben wurde.
- [`PaymentResponse.shippingAddress`](/de/docs/Web/API/PaymentResponse/shippingAddress) {{ReadOnlyInline}}
  - : Gibt die vom Benutzer angegebene Lieferadresse zurück. Diese Option ist nur vorhanden, wenn die `requestShipping`-Option im `options`-Parameter des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktors auf `true` gesetzt ist.
- [`PaymentResponse.shippingOption`](/de/docs/Web/API/PaymentResponse/shippingOption) {{ReadOnlyInline}}
  - : Gibt die ID-Eigenschaft der vom Benutzer ausgewählten Versandoption zurück. Diese Option ist nur vorhanden, wenn die `requestShipping`-Option im `options`-Parameter des [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktors auf `true` gesetzt ist.

## Instanz-Methoden

- [`PaymentResponse.retry()`](/de/docs/Web/API/PaymentResponse/retry)
  - : Wenn etwas mit den Daten der Zahlungsantwort nicht stimmt (und es sich um einen behebbaren Fehler handelt), erlaubt diese Methode einem Händler, den Benutzer aufzufordern, die Zahlung erneut zu versuchen. Die Methode nimmt ein Objekt als Argument, das verwendet wird, um dem Benutzer genau mitzuteilen, was an der Zahlungsantwort falsch ist, damit er versucht, die Probleme zu beheben.
- [`PaymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete)
  - : Benachrichtigt den Benutzeragenten, dass die Benutzerinteraktion beendet ist. Dies führt dazu, dass die verbleibende Benutzeroberfläche geschlossen wird. Diese Methode sollte nur aufgerufen werden, nachdem das Promise von der Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) zurückgegeben wurde.
- [`PaymentResponse.toJSON()`](/de/docs/Web/API/PaymentResponse/toJSON)
  - : Gibt ein [JSON-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) zurück, das dieses `PaymentResponse`-Objekt repräsentiert.

## Ereignisse

Hören Sie auf dieses Ereignis mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignislisteners zur `oneventname`-Eigenschaft dieses Interfaces.

- [`payerdetailchange`](/de/docs/Web/API/PaymentResponse/payerdetailchange_event)
  - : Wird während eines erneuten Versuchs ausgelöst, wenn der Benutzer Änderungen an seinen persönlichen Informationen vornimmt, während er ein Zahlungsanfrageformular ausfüllt. Ermöglicht es dem Entwickler, alle angeforderten Benutzerdaten (z. B. Telefonnummer oder E-Mail-Adresse) erneut zu validieren, wenn sie sich ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
