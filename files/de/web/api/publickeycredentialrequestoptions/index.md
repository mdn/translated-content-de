---
title: PublicKeyCredentialRequestOptions
slug: Web/API/PublicKeyCredentialRequestOptions
l10n:
  sourceCommit: a5b16e15e50cea43da07faf82b6e047ab8082337
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialRequestOptions`**-Dictionary repräsentiert das Objekt, das an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) als Wert der `publicKey`-Option übergeben wird.

Es wird verwendet, um ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) anzufordern, das von einem {{Glossary("authenticator", "Authenticator")}} bereitgestellt wird, der die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) unterstützt.

## Instanz-Eigenschaften

- `allowCredentials` {{optional_inline}}
  - : Ein Array von Objekten, das die Liste der akzeptablen Anmeldeinformationen einschränken soll. Ein leeres Array zeigt an, dass jede Anmeldeinformation akzeptabel ist.

    Jedes Objekt im Array enthält die folgenden Eigenschaften:
    - `id`
      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die ID des abzurufenden öffentlichen Schlüssel-Anmeldedatums repräsentiert. Dieser Wert wird durch die [`rawId`](/de/docs/Web/API/PublicKeyCredential/rawId)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts widergespiegelt, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird.

    - `transports` {{optional_inline}}
      - : Ein Array von Strings, das Hinweise auf die Methoden gibt, die der Client verwenden könnte, um mit dem relevanten Authenticator des abzurufenden öffentlichen Schlüssel-Anmeldedatums zu kommunizieren. Mögliche Transports sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"` und `"usb"`.

        > [!NOTE]
        > Dieser Wert wird durch den Rückgabewert der Methode [`PublicKeyCredential.response.getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports) des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts widergespiegelt, das durch den `create()`-Aufruf zurückgegeben wird, der ursprünglich das Anmeldedatum erstellt hat.
        > Zu diesem Zeitpunkt sollte er von der App zur späteren Verwendung gespeichert werden.

    - `type`
      - : Ein String, der den Typ des abzurufenden öffentlichen Schlüssel-Anmeldedatums definiert. Dieser kann derzeit einen einzelnen Wert, `"public-key"`, annehmen, aber in der Zukunft können weitere Werte hinzugefügt werden. Dieser Wert wird durch die [`type`](/de/docs/Web/API/Credential/type)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts widergespiegelt, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird.

    Dieser Wert ist standardmäßig ein leeres Array.

- `challenge`
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das vom Server der verlässlichen Partei stammt und als [cryptographic challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) verwendet wird. Dieser Wert wird vom Authenticator signiert und die Signatur wird als Teil der [`AuthenticatorAssertionResponse.signature`](/de/docs/Web/API/AuthenticatorAssertionResponse/signature) (verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird) zurückgesendet.

- `extensions` {{optional_inline}}
  - : Ein Objekt mit Eigenschaften, die die Eingabewerte für alle angeforderten Erweiterungen darstellen. Diese Erweiterungen werden verwendet, um eine spezifische zusätzliche Verarbeitung durch den Client oder Authenticator während des Authentifizierungsprozesses durchzuführen. Beispiele umfassen den Umgang mit Legacy-FIDO-API-Anmeldedaten und die Auswertung von Ausgaben einer pseudorandomen Funktion (PRF), die mit einem Anmeldedatum verbunden ist.

    Erweiterungen sind optional, und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, wird er sie einfach ignorieren. Weitere Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, finden Sie unter [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `hints` {{optional_inline}} {{experimental_inline}}
  - : Ein Array von Strings, das Hinweise darauf gibt, welche Benutzeroberfläche der Browser bereitstellen sollte, damit sich der Benutzer mit einem vorhandenen öffentlichen Schlüssel-Anmeldedatum authentifiziert.

    Die Strings können aus den folgenden bestehen:
    - `"security-key"`
      - : Die Benutzeroberfläche sollte empfehlen, die Anmeldedaten von einem separaten physischen Sicherheitsschlüssel (z.B. einem YubiKey) anzufordern.
    - `"client-device"`
      - : Die Benutzeroberfläche sollte empfehlen, die Anmeldedaten von einem Authenticator anzufordern, der auf demselben Gerät verfügbar ist, das zur Anmeldung beim RP-Client verwendet wird.
    - `"hybrid"`
      - : Die Benutzeroberfläche sollte empfehlen, die Anmeldedaten von einem universellen Authenticator anzufordern, wie einer auf dem Smartphone basierenden Authenticator-App. Dies begünstigt die Verwendung eines geräteübergreifenden Ansatzes zur Handhabung der Authentifizierung, z.B. unter Verwendung einer Kombination aus Laptop und Smartphone.

    Wenn mehrere Strings im Array enthalten sind, gibt ihre Reihenfolge den Präferenzgrad von hoch bis niedrig an. Unterstützende Browser, die die Hinweise respektieren, sollten den ersten verwenden, den sie verstehen.

    Angegebene `hints` können den in der Option [`transports`](#transports) bereitgestellten Hinweisen widersprechen. Wenn die bereitgestellten `hints` dieser Option widersprechen, haben die `hints` Vorrang. `hints` können auch vom Browser unter bestimmten Umständen ignoriert werden, z.B. wenn ein angedeuteter Authentifikatortyp auf dem Gerät des Benutzers nicht nutzbar ist.

    Für spezifische Code- und UI-Beispiele siehe [Introducing hints, Related Origin Requests and JSON serialization for WebAuthn in Chrome](https://developer.chrome.com/blog/passkeys-updates-chrome-129#hints).

- `rpId` {{optional_inline}}
  - : Ein String, der die Kennung der verlässlichen Partei angibt (z.B. `"login.example.org"`). Aus Sicherheitsgründen:
    - Die aufrufende Web-App überprüft, ob `rpId` mit dem Ursprung der verlässlichen Partei übereinstimmt.
    - Der Authenticator überprüft, ob `rpId` mit dem `rpId` des Anmeldedatums übereinstimmt, das für die Authentifizierungszeremonie verwendet wird.

    Dieser Wert ist standardmäßig die Domain des aktuellen Ursprungs.

- `timeout` {{optional_inline}}
  - : Ein numerischer Hinweis in Millisekunden, der angibt, wie lange die verlässliche Partei bereit ist, auf den Abschluss der Abrufoperation zu warten. Dieser Hinweis kann durch den Browser überschrieben werden.

- `userVerification` {{optional_inline}}
  - : Ein String, der die Anforderungen der verlässlichen Partei für die Benutzerüberprüfung des Authentifizierungsprozesses angibt. Diese Überprüfung wird vom Authenticator initiiert, der den Benutzer auffordert, einen verfügbaren Faktor bereitzustellen (z.B. eine PIN oder eine biometrische Eingabe).

    Der Wert kann einer der folgenden sein:
    - `"required"`
      - : Die verlässliche Partei erfordert eine Benutzerüberprüfung, und die Operation wird fehlschlagen, wenn sie nicht erfolgt.
    - `"preferred"`
      - : Die verlässliche Partei bevorzugt eine Benutzerüberprüfung, wenn möglich, aber die Operation wird nicht fehlschlagen, wenn sie nicht erfolgt.
    - `"discouraged"`
      - : Die verlässliche Partei möchte keine Benutzerüberprüfung, um die Benutzerinteraktion so reibungslos wie möglich zu gestalten.

    Dieser Wert ist standardmäßig `"preferred"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
