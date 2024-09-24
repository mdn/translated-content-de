---
title: SecurePaymentConfirmationRequest
slug: Web/API/SecurePaymentConfirmationRequest
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Payment Request API")}}

Das **`SecurePaymentConfirmationRequest`**-Wörterbuch beschreibt die Eingabe in die [Payment Request API](/de/docs/Web/API/Payment_Request_API), wenn diese verwendet wird, um einen Benutzer während einer E-Commerce-Transaktion [unter Verwendung von SPC mit der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation) zu authentifizieren.

Eine Instanz dieses Wörterbuchs muss in den Konstruktor von {{domxref("PaymentRequest.PaymentRequest()", "PaymentRequest()")}} als Wert des [`data`](/de/docs/Web/API/PaymentRequest/PaymentRequest#data)-Feldes übergeben werden, entsprechend einem [`supportedMethods`](/de/docs/Web/API/PaymentRequest/PaymentRequest#supportedmethods)-Wert von `"secure-payment-confirmation"`.

## Instanzeigenschaften

- `challenge`
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, bereitgestellt vom Server der vertrauenden Partei und verwendet als [kryptographische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). Dieser Wert wird vom Authentifikator signiert und die Signatur wird als Teil des {{domxref("AuthenticatorAttestationResponse.attestationObject")}} zurückgesandt. Dies hilft, Replay-Angriffe zu verhindern.
- `credentialIds`
  - : Eine Liste von {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}. Diese [Credential IDs](https://www.w3.org/TR/webauthn-2/#credential-id) repräsentieren Web-Authentifizierungs-Credentials, die bei der vertrauenden Partei für die Authentifizierung während einer Zahlung mit dem zugehörigen `instrument` registriert wurden.
- `extensions` {{optional_inline}}
  - : Alle [WebAuthn-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions), die für das übergebene Credential(s) verwendet werden sollen. Der Anrufer muss die [`payment`-Erweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#payment) nicht angeben; diese wird automatisch hinzugefügt.
- `instrument`
  - : Die Beschreibung des Instrumentennamens und des Symbols, das während der Registrierung angezeigt und zusammen mit den Transaktionsdetails signiert werden soll. Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `displayName`
      - : Ein String, der den Namen des Zahlungsinstruments enthält, das dem Benutzer angezeigt wird.
    - `icon`
      - : Ein String, der die URL des Symbols des Zahlungsinstruments enthält.
    - `iconMustBeShown` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Symbol erfolgreich abgerufen und angezeigt werden muss, damit die Anforderung erfolgreich ist. Standardmäßig `true`.
- `locale` {{optional_inline}}
  - : Eine optionale Liste von wohlgeformten {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} Sprach-Tags, in absteigender Priorität, die die lokalen Präferenzen der Website identifizieren. Das heißt, dies stellt eine Sprachprioritätenliste dar {{RFC(4647, "Matching of Language Tags")}}, die der Benutzeragent verwenden kann, um [Sprachverhandlungen](/de/docs/Web/HTTP/Content_negotiation) und lokal beeinflusste Formatierungen mit dem Anrufer durchzuführen.
    > [!NOTE]
    > Das `locale` ist unterschiedlich zu Sprach- oder Richtungs-Metadaten, die mit bestimmten Eingabeelementen verbunden sind, da es die vom Anrufer angeforderte lokalisierte Erfahrung darstellt, anstatt eine Aussage über einen bestimmten Zeichenkettenwert zu sein. Siehe [SPC-Internationalisierungsüberlegungen](https://w3c.github.io/secure-payment-confirmation/#sctn-i18n-considerations) für weitere Diskussionen.
- `payeeName` {{optional_inline}}
  - : Ein String, der als Anzeigename des Zahlungsempfängers dient, für den dieser SPC-Aufruf erfolgt (z.B. der Händler). Optional, kann neben oder anstelle von `payeeOrigin` angegeben werden.
- `payeeOrigin` {{optional_inline}}
  - : Ein String, der den Ursprung des Zahlungsempfängers angibt, für den dieser SPC-Aufruf erfolgt (z.B. der Händler). Optional, kann neben oder anstelle von `payeeName` angegeben werden.
- `rpId`
  - : Ein String, der die Kennung der vertrauenden Partei spezifiziert (zum Beispiel "login.example.org").
- `showOptOut` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob dem Benutzer die Möglichkeit gegeben werden sollte, während des [Transaktions-Dialog-UX](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation#authenticating_a_payment) abzulehnen. Standardmäßig `false`.
- `timeout` {{optional_inline}}
  - : Die Anzahl der Millisekunden, bevor die Anforderung zur Signierung der Transaktionsdetails abläuft. Maximal 1 Stunde.

## Spezifikationen

{{Specifications}}
