---
title: PaymentResponse
slug: Web/API/PaymentResponse
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{SecureContext_Header}}{{APIRef("Payment Request API")}}

Das Interface **`PaymentResponse`** der [Payment Request API](/de/docs/Web/API/Payment_Request_API) wird zurückgegeben, nachdem ein Benutzer eine Zahlungsmethode ausgewählt und eine Zahlungsanforderung bestätigt hat.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`PaymentResponse.details`](/de/docs/Web/API/PaymentResponse/details) {{ReadOnlyInline}}
  - : Gibt ein JSON-serialisierbares Objekt zurück, das eine für die Zahlungsmethode spezifische Nachricht enthält. Der Händler verwendet sie, um die Transaktion zu verarbeiten und festzustellen, ob die Geldübertragung erfolgreich war. Der Inhalt des Objekts hängt von der verwendeten Zahlungsmethode ab. Entwickler müssen bei der für die URL zuständigen Stelle erfragen, welche Struktur das `details`-Objekt haben soll.
- [`PaymentResponse.methodName`](/de/docs/Web/API/PaymentResponse/methodName) {{ReadOnlyInline}}
  - : Gibt die Kennung der vom Benutzer ausgewählten Zahlungsmethode zurück, beispielsweise Visa, Mastercard oder PayPal.
- [`PaymentResponse.payerEmail`](/de/docs/Web/API/PaymentResponse/payerEmail) {{ReadOnlyInline}}
  - : Gibt die vom Benutzer angegebene E-Mail-Adresse zurück. Diese Eigenschaft ist nur vorhanden, wenn die Option `requestPayerEmail` im Parameter `options` des Konstruktors [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) auf `true` gesetzt ist.
- [`PaymentResponse.payerName`](/de/docs/Web/API/PaymentResponse/payerName) {{ReadOnlyInline}}
  - : Gibt den vom Benutzer angegebenen Namen zurück. Diese Eigenschaft ist nur vorhanden, wenn die Option `requestPayerName` im Parameter `options` des Konstruktors [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) auf true gesetzt ist.
- [`PaymentResponse.payerPhone`](/de/docs/Web/API/PaymentResponse/payerPhone) {{ReadOnlyInline}}
  - : Gibt die vom Benutzer angegebene Telefonnummer zurück. Diese Eigenschaft ist nur vorhanden, wenn die Option `requestPayerPhone` im Parameter `options` des Konstruktors [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) auf `true` gesetzt ist.
- [`PaymentResponse.requestId`](/de/docs/Web/API/PaymentResponse/requestId) {{ReadOnlyInline}}
  - : Gibt die Kennung des [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) zurück, der die aktuelle Antwort erzeugt hat. Dies ist derselbe Wert, der im Konstruktor [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) über `details.id` angegeben wurde.
- [`PaymentResponse.shippingAddress`](/de/docs/Web/API/PaymentResponse/shippingAddress) {{ReadOnlyInline}}
  - : Gibt die vom Benutzer angegebene Lieferadresse zurück. Diese Eigenschaft ist nur vorhanden, wenn die Option `requestShipping` im Parameter `options` des Konstruktors [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) auf `true` gesetzt ist.
- [`PaymentResponse.shippingOption`](/de/docs/Web/API/PaymentResponse/shippingOption) {{ReadOnlyInline}}
  - : Gibt das ID-Attribut der vom Benutzer ausgewählten Versandoption zurück. Diese Eigenschaft ist nur vorhanden, wenn die Option `requestShipping` im Parameter `options` des Konstruktors [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) auf `true` gesetzt ist.

## Instanzmethoden

- [`PaymentResponse.retry()`](/de/docs/Web/API/PaymentResponse/retry)
  - : Wenn die Daten der Zahlungsantwort fehlerhaft sind und der Fehler behoben werden kann, kann ein Händler den Benutzer mit dieser Methode auffordern, die Zahlung erneut zu versuchen. Die Methode nimmt ein Objekt als Argument entgegen, das dem Benutzer genau mitteilt, was an der Zahlungsantwort nicht stimmt, damit er die Probleme beheben kann.
- [`PaymentResponse.complete()`](/de/docs/Web/API/PaymentResponse/complete)
  - : Teilt dem User Agent mit, dass die Benutzerinteraktion beendet ist. Dadurch werden alle noch geöffneten Benutzeroberflächen geschlossen. Diese Methode sollte erst aufgerufen werden, nachdem das von der Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) zurückgegebene Promise abgeschlossen ist.
- [`PaymentResponse.toJSON()`](/de/docs/Web/API/PaymentResponse/toJSON)
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PaymentResponse`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Ereignisse

Sie können dieses Ereignis mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwachen oder der Eigenschaft `oneventname` dieses Interfaces einen Event Listener zuweisen.

- [`payerdetailchange`](/de/docs/Web/API/PaymentResponse/payerdetailchange_event)
  - : Wird während eines erneuten Zahlungsversuchs ausgelöst, wenn der Benutzer beim Ausfüllen eines Zahlungsanforderungsformulars seine persönlichen Angaben ändert. Dadurch können Entwickler angeforderte Benutzerdaten, etwa die Telefonnummer oder E-Mail-Adresse, erneut validieren, wenn sie sich ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
