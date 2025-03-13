---
title: SecurePaymentConfirmationRequest
slug: Web/API/SecurePaymentConfirmationRequest
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Payment Request API")}}

Das **`SecurePaymentConfirmationRequest`**-Wörterbuch beschreibt die Eingabe für die [Payment Request API](/de/docs/Web/API/Payment_Request_API), wenn es zur Authentifizierung eines Nutzers während einer E-Commerce-Transaktion [unter Verwendung von SPC mit Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation) verwendet wird.

Eine Instanz dieses Wörterbuchs muss als Wert des [`data`](/de/docs/Web/API/PaymentRequest/PaymentRequest#data)-Feldes in den [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor übergeben werden, entsprechend einem [`supportedMethods`](/de/docs/Web/API/PaymentRequest/PaymentRequest#supportedmethods)-Wert von `"secure-payment-confirmation"`.

## Instanz-Eigenschaften

- `challenge`
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, bereitgestellt vom Server der vertrauenden Partei und verwendet als [kryptographische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). Dieser Wert wird vom Authentifikator signiert und die Signatur wird als Teil des [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) zurückgesendet. Dies hilft, Wiederholungsangriffe zu verhindern.
- `credentialIds`
  - : Eine Liste von {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}. Diese [Credential IDs](https://www.w3.org/TR/webauthn-2/#credential-id) repräsentieren Web Authentication-Anmeldedaten, die bei der vertrauenden Partei für die Authentifizierung während einer Zahlung mit dem zugehörigen `instrument` registriert sind.
- `extensions` {{optional_inline}}
  - : Alle zu verwendenden [WebAuthn-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) für die übergebenen Zugangsdaten. Der Anrufer muss die [`payment`-Erweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#payment) nicht angeben; diese wird automatisch hinzugefügt.
- `instrument`
  - : Die Beschreibung des Instrumentennamens und -symbols, die während der Registrierung und zusammen mit den Transaktionsdetails signiert angezeigt werden. Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `displayName`
      - : Ein String, der den Namen des Zahlungsmittels enthält, der dem Nutzer angezeigt wird.
    - `icon`
      - : Ein String, der die URL des Symbols des Zahlungsmittels enthält.
    - `iconMustBeShown` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Symbol erfolgreich abgerufen und angezeigt werden muss, damit die Anfrage erfolgreich ist. Standardmäßig `true`.
- `locale` {{optional_inline}}
  - : Eine optionale Liste von gut geformten {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} Sprach-Tags, in absteigender Reihenfolge der Priorität, die die lokalen Präferenzen der Website identifizieren. Das heißt, dies stellt eine Sprachprioritätenliste dar {{RFC(4647, "Matching of Language Tags")}}, die der Benutzeragent zur Durchführung der [Sprachauswahl](/de/docs/Web/HTTP/Guides/Content_negotiation) und der lokal betroffenen Formatierung mit dem Anrufer verwenden kann.
    > [!NOTE]
    > Das Gebietsschema unterscheidet sich von Sprach- oder Richtungsmetadaten, die mit bestimmten Eingabemitgliedern verknüpft sind, da es das vom Anrufer angeforderte lokalisierte Erlebnis darstellt und nicht eine Behauptung über einen bestimmten Zeichenfolgenwert. Weitere Diskussionen finden Sie unter [SPC Internationalisierungsüberlegungen](https://w3c.github.io/secure-payment-confirmation/#sctn-i18n-considerations).
- `payeeName` {{optional_inline}}
  - : Ein String, der als Anzeigename des Zahlungsempfängers dient, für den dieser SPC-Aufruf erfolgt (z. B. der Händler). Optional, kann zusammen mit oder statt `payeeOrigin` angegeben werden.
- `payeeOrigin` {{optional_inline}}
  - : Ein String, der den Ursprung des Zahlungsempfängers darstellt, für den dieser SPC-Aufruf erfolgt (z. B. der Händler). Optional, kann zusammen mit oder statt `payeeName` angegeben werden.
- `rpId`
  - : Ein String, der den Bezeichner der vertrauenden Partei spezifiziert (zum Beispiel "login.example.org").
- `showOptOut` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob dem Nutzer während des [Transaktionsdialogs UX](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation#authenticating_a_payment) die Möglichkeit gegeben werden sollte, sich abzumelden. Standardmäßig `false`.
- `timeout` {{optional_inline}}
  - : Die Anzahl der Millisekunden, bis die Anforderung zur Signierung der Transaktionsdetails abläuft. Maximal 1 Stunde.

## Spezifikationen

{{Specifications}}
