---
title: SecurePaymentConfirmationRequest
slug: Web/API/SecurePaymentConfirmationRequest
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Payment Request API")}}

Das **`SecurePaymentConfirmationRequest`**-Wörterbuch beschreibt die Eingaben für die [Payment Request API](/de/docs/Web/API/Payment_Request_API), wenn sie zur Authentifizierung eines Benutzers während einer E-Commerce-Transaktion [unter Verwendung von SPC mit der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation) verwendet wird.

Eine Instanz dieses Wörterbuchs muss im [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor als Wert des [`data`](/de/docs/Web/API/PaymentRequest/PaymentRequest#data)-Feldes übergeben werden, das einem [`supportedMethods`](/de/docs/Web/API/PaymentRequest/PaymentRequest#supportedmethods)-Wert von `"secure-payment-confirmation"` entspricht.

## Instanzeigenschaften

- `challenge`
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, bereitgestellt vom Server der vertrauenden Partei und verwendet als [kryptografische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). Dieser Wert wird vom Authenticator signiert und die Signatur wird als Teil des [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) zurückgesendet. Dies hilft, Replay-Angriffe zu verhindern.
- `credentialIds`
  - : Eine Liste von {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}. Diese [Credential IDs](https://w3c.github.io/webauthn/#credential-id) repräsentieren Web-Authentifizierungs-Credentials, die bei der vertrauenden Partei für die Authentifizierung während einer Zahlung mit dem zugeordneten `instrument` registriert wurden.
- `extensions` {{optional_inline}}
  - : Alle [WebAuthn-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions), die für die übergebenen Credentials verwendet werden sollen. Der Anrufer muss nicht die [`payment`-Erweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#payment) angeben; diese wird automatisch hinzugefügt.
- `instrument`
  - : Die Beschreibung des Instrumentennamens und -symbols, die während der Registrierung angezeigt und zusammen mit den Transaktionsdetails signiert werden sollen. Dies ist ein Objekt mit folgenden Eigenschaften:
    - `displayName`
      - : Ein String, der den Namen des Zahlungsmittels enthält, der dem Benutzer angezeigt wird.
    - `icon`
      - : Ein String, der die URL des Symbols des Zahlungsmittels enthält.
    - `iconMustBeShown` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Symbol erfolgreich abgerufen und angezeigt werden muss, damit die Anfrage erfolgreich ist. Standardmäßig `true`.
- `locale` {{optional_inline}}
  - : Eine optionale Liste gut formatierter {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtags")}}, in absteigender Prioritätsreihenfolge, die die lokalen Präferenzen der Website identifizieren. Das heißt, dies stellt eine Sprachprioritätenliste {{RFC(4647, "Matching of Language Tags")}} dar, die der Benutzeragent verwenden kann, um [Sprachverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) und lokalisierungsbedingte Formatierung mit dem Anrufer durchzuführen.
    > [!NOTE]
    > Das Gebietsschema unterscheidet sich von Sprach- oder Richtungsmetadaten, die mit spezifischen Eingabemitgliedern assoziiert sind, da es die vom Anrufer angeforderte lokalisierte Erfahrung darstellt und keine Aussage über einen spezifischen Zeichenfolgewert trifft. Siehe [SPC-Internationalisierungsüberlegungen](https://w3c.github.io/secure-payment-confirmation/#sctn-i18n-considerations) für weitere Diskussionen.
- `payeeName` {{optional_inline}}
  - : Ein String, der als Anzeigename des Zahlungsempfängers dient, für den dieser SPC-Anruf erfolgt (z. B. der Händler). Optional, kann zusammen mit oder anstelle von `payeeOrigin` angegeben werden.
- `payeeOrigin` {{optional_inline}}
  - : Ein String, der der Ursprung des Zahlungsempfängers ist, für den dieser SPC-Anruf erfolgt (z. B. der Händler). Optional, kann zusammen mit oder anstelle von `payeeName` angegeben werden.
- `rpId`
  - : Ein String, der den Bezeichner der vertrauenden Partei angibt (zum Beispiel "login.example.org").
- `showOptOut` {{optional_inline}}
  - : Ein Boolean, der angibt, ob dem Benutzer während des [Transaktionsdialog-UX](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation#authenticating_a_payment) die Möglichkeit gegeben werden soll, sich abzumelden. Standardmäßig `false`.
- `timeout` {{optional_inline}}
  - : Die Anzahl der Millisekunden, bis die Anfrage zum Signieren der Transaktionsdetails abläuft. Maximal 1 Stunde.

## Spezifikationen

{{Specifications}}
