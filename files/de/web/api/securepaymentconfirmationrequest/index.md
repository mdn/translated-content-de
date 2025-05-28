---
title: SecurePaymentConfirmationRequest
slug: Web/API/SecurePaymentConfirmationRequest
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("Payment Request API")}}

Das **`SecurePaymentConfirmationRequest`**-Wörterbuch beschreibt Eingaben für die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bei der Authentifizierung eines Nutzers während einer E-Commerce-Transaktion [unter Verwendung von SPC mit Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

Eine Instanz dieses Wörterbuchs muss dem [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor als Wert des [`data`](/de/docs/Web/API/PaymentRequest/PaymentRequest#data)-Feldes übergeben werden, das einem [`supportedMethods`](/de/docs/Web/API/PaymentRequest/PaymentRequest#supportedmethods)-Wert von `"secure-payment-confirmation"` entspricht.

## Instanz-Eigenschaften

- `challenge`
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, bereitgestellt vom Server der vertrauenden Partei und verwendet als [kryptographische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). Dieser Wert wird vom Authentifikator signiert und die Signatur wird als Teil des [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) zurückgesendet. Dies hilft, Replay-Angriffe zu verhindern.
- `credentialIds`
  - : Eine Liste von {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}. Diese [Credential-IDs](https://w3c.github.io/webauthn/#credential-id) repräsentieren Web-Authentifizierungs-Anmeldeinformationen, die bei der vertrauenden Partei registriert wurden, um sich mit dem zugehörigen `instrument` bei einer Zahlung zu authentifizieren.
- `extensions` {{optional_inline}}
  - : Alle [WebAuthn-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions), die für die übergebenen Anmeldeinformationen verwendet werden sollen. Der Anrufer muss die [`payment`-Erweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#payment) nicht angeben; diese wird automatisch hinzugefügt.
- `instrument`
  - : Die Beschreibung des Instrumentnamens und Symbols, das während der Registrierung angezeigt werden soll und das zusammen mit den Transaktionsdetails signiert werden soll. Dies ist ein Objekt mit folgenden Eigenschaften:
    - `displayName`
      - : Ein String, der den Namen des Zahlungsinstruments enthält, der dem Benutzer angezeigt wird.
    - `icon`
      - : Ein String, der die URL des Symbols des Zahlungsinstruments enthält.
    - `iconMustBeShown` {{optional_inline}}
      - : Ein Boolescher Wert, der angibt, ob das Symbol erfolgreich abgerufen und angezeigt werden muss, damit die Anfrage erfolgreich ist. Standardmäßig `true`.
- `locale` {{optional_inline}}
  - : Eine optionale Liste gut formulierter {{RFC(5646, "Tags für die Identifizierung von Sprachen (auch bekannt als BCP 47)")}} Sprach-Tags, in absteigender Reihenfolge der Priorität, die die lokalen Präferenzen der Webseite identifizieren. Das heißt, dies repräsentiert eine Sprachprioritätsliste {{RFC(4647, "Abgleich von Sprach-Tags")}}, die der User-Agent zur Durchführung der [Sprachverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) und lokalisierungsabhängigen Formatierung mit dem Aufrufer verwenden kann.
    > [!NOTE]
    > Das Gebietsschema unterscheidet sich von Sprach- oder Richtungsmetadaten, die mit bestimmten Eingabemitgliedern verbunden sind, da es das vom Anrufer angeforderte lokalisierte Erlebnis repräsentiert und nicht die Behauptung über einen bestimmten Zeichenfolgewert. Weitere Diskussionen finden Sie unter [SPC Internationalisierungsüberlegungen](https://w3c.github.io/secure-payment-confirmation/#sctn-i18n-considerations).
- `payeeName` {{optional_inline}}
  - : Ein String, der als Anzeigename des Zahlungsempfängers dient, für den dieser SPC-Aufruf erfolgt (z. B. der Händler). Optional, kann zusammen mit oder anstelle von `payeeOrigin` angegeben werden.
- `payeeOrigin` {{optional_inline}}
  - : Ein String, der den Ursprung des Zahlungsempfängers darstellt, für den dieser SPC-Aufruf erfolgt (z. B. der Händler). Optional, kann zusammen mit oder anstelle von `payeeName` angegeben werden.
- `rpId`
  - : Ein String, der den Bezeichner der vertrauenden Partei spezifiziert (z. B. "login.example.org").
- `showOptOut` {{optional_inline}}
  - : Ein Boolescher Wert, der angibt, ob dem Nutzer während des [Transaktionsdialogs](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation#authenticating_a_payment) die Möglichkeit gegeben werden soll, sich abzumelden. Standardmäßig `false`.
- `timeout` {{optional_inline}}
  - : Die Anzahl der Millisekunden, bevor die Aufforderung zur Signierung der Transaktionsdetails abläuft. Maximal 1 Stunde.

## Spezifikationen

{{Specifications}}
