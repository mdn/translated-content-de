---
title: SecurePaymentConfirmationRequest
slug: Web/API/SecurePaymentConfirmationRequest
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Payment Request API")}}

Das **`SecurePaymentConfirmationRequest`**-Wörterbuch beschreibt Eingaben für die [Payment Request API](/de/docs/Web/API/Payment_Request_API), wenn diese verwendet wird, um einen Benutzer während einer E-Commerce-Transaktion zu authentifizieren [mithilfe von SPC mit der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

Eine Instanz dieses Wörterbuchs muss dem Konstruktor [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) als Wert des [`data`](/de/docs/Web/API/PaymentRequest/PaymentRequest#data)-Felds übergeben werden, das dem Wert [`supportedMethods`](/de/docs/Web/API/PaymentRequest/PaymentRequest#supportedmethods) von `"secure-payment-confirmation"` entspricht.

## Instanzeigenschaften

- `challenge`
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, bereitgestellt vom Server der vertrauenswürdigen Seite und verwendet als [kryptografische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). Dieser Wert wird vom Authentifikator signiert und die Signatur wird als Teil von [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) zurückgesendet. Dies hilft, Replay-Angriffe zu verhindern.
- `credentialIds`
  - : Eine Liste von {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}. Diese [Credential-IDs](https://www.w3.org/TR/webauthn-2/#credential-id) repräsentieren Web-Authentifizierung-Anmeldeinformationen, die bei der vertrauenswürdigen Seite für die Authentifizierung während einer Zahlung mit dem zugehörigen `instrument` registriert wurden.
- `extensions` {{optional_inline}}
  - : Alle [WebAuthn-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions), die für die übergebenen Anmeldeinformationen verwendet werden sollen. Der Anrufer muss die [`payment`-Erweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#payment) nicht angeben; diese wird automatisch hinzugefügt.
- `instrument`
  - : Die Beschreibung des Instrumentennamens und des Symbols, das während der Registrierung angezeigt und zusammen mit den Transaktionsdetails signiert werden soll. Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `displayName`
      - : Ein String, der den Namen des Zahlungsinstruments enthält, der dem Benutzer angezeigt wird.
    - `icon`
      - : Ein String, der die URL des Symbols des Zahlungsinstruments enthält.
    - `iconMustBeShown` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Symbol erfolgreich abgerufen und angezeigt werden muss, damit die Anfrage erfolgreich ist. Standardmäßig `true`.
- `locale` {{optional_inline}}
  - : Eine optionale Liste gut formulierter {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} Sprach-Tags, in absteigender Reihenfolge der Priorität, die die lokalen Präferenzen der Website identifizieren. Das heißt, dies repräsentiert eine Sprachprioritätenliste {{RFC(4647, "Matching of Language Tags")}}, die vom Benutzeragenten verwendet werden kann, um [Sprachverhandlungen](/de/docs/Web/HTTP/Content_negotiation) und locale-betroffene Formatierung mit dem Anrufer durchzuführen.
    > [!NOTE]
    > Das Locale unterscheidet sich von der Sprach- oder Richtungsmetadaten, die mit bestimmten Eingabemitgliedern verbunden sind, da es die vom Anrufer angeforderte lokalisierte Erfahrung darstellt, nicht eine Behauptung über einen bestimmten Zeichenfolgenwert. Siehe [SPC Internationalisierung Überlegungen](https://w3c.github.io/secure-payment-confirmation/#sctn-i18n-considerations) für weitere Diskussionen.
- `payeeName` {{optional_inline}}
  - : Ein String, der als Anzeigename des Zahlungsempfängers dient, für den dieser SPC-Aufruf erfolgt (z. B. der Händler). Optional, kann zusätzlich oder anstelle von `payeeOrigin` bereitgestellt werden.
- `payeeOrigin` {{optional_inline}}
  - : Ein String, der den Ursprung des Zahlungsempfängers darstellt, für den dieser SPC-Aufruf erfolgt (z. B. der Händler). Optional, kann zusätzlich oder anstelle von `payeeName` bereitgestellt werden.
- `rpId`
  - : Ein String, der den Bezeichner der vertrauenswürdigen Seite angibt (zum Beispiel "login.example.org").
- `showOptOut` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob der Benutzer während des [Transaktionsdialog-UX](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation#authenticating_a_payment) die Möglichkeit haben soll, sich abzumelden. Standardmäßig `false`.
- `timeout` {{optional_inline}}
  - : Die Anzahl der Millisekunden, bis die Anfrage zum Signieren der Transaktionsdetails abläuft. Maximal 1 Stunde.

## Spezifikationen

{{Specifications}}
