---
title: PublicKeyCredentialRequestOptions
slug: Web/API/PublicKeyCredentialRequestOptions
l10n:
  sourceCommit: a8ff915bf53e883e9db24056784951d9ab1ae013
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialRequestOptions`**-Wörterbuch stellt das Objekt dar, das an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) als Wert der `publicKey`-Option übergeben wird.

Es wird verwendet, um ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) anzufordern, das von einem {{Glossary("authenticator", "Authenticator")}} bereitgestellt wird, der die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) unterstützt.

## Instanz-Eigenschaften

- `allowCredentials` {{optional_inline}}

  - : Ein Array von Objekten, das die Liste der akzeptablen Anmeldedaten einschränkt. Ein leeres Array zeigt an, dass jede Anmeldeinformation akzeptabel ist.

    Jedes Objekt im Array enthält die folgenden Eigenschaften:

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das die ID des abzurufenden Public Key Credentials darstellt. Dieser Wert wird durch die [`rawId`](/de/docs/Web/API/PublicKeyCredential/rawId)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts widergespiegelt, das von einem erfolgreichen `get()`-Aufruf zurückgegeben wird.

    - `transports`

      - : Ein Array von Strings, das Hinweise auf die Methoden gibt, die der Client verwenden könnte, um mit dem relevanten Authenticator des abzurufenden Public Key Credentials zu kommunizieren. Mögliche Transports sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"`, und `"usb"`.

        > [!NOTE]
        > Dieser Wert wird durch den Rückgabewert der [`PublicKeyCredential.response.getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports)-Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts widergespiegelt, das durch den ursprünglichen `create()`-Aufruf erstellt wurde.
        > Zu diesem Zeitpunkt sollte es von der App für den späteren Gebrauch gespeichert werden.

    - `type`

      - : Ein String, der den Typ des abzurufenden Public Key Credentials definiert. Dieser Wert kann derzeit einen einzelnen Wert, `"public-key"`, annehmen, aber in Zukunft könnten mehr Werte hinzugefügt werden. Dieser Wert wird durch die [`type`](/de/docs/Web/API/Credential/type)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts widergespiegelt, das von einem erfolgreichen `get()`-Aufruf zurückgegeben wird.

    Dieser Wert ist standardmäßig ein leeres Array.

- `challenge`

  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das vom Server der Relying Party stammt und als [cryptographic challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) verwendet wird. Dieser Wert wird vom Authenticator signiert, und die Signatur wird als Teil der [`AuthenticatorAssertionResponse.signature`](/de/docs/Web/API/AuthenticatorAssertionResponse/signature) (verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird) zurückgesendet.

- `extensions` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für angeforderte Erweiterungen darstellen. Diese Erweiterungen werden verwendet, um zusätzliche Verarbeitungen durch den Client oder Authenticator während des Authentifizierungsprozesses anzugeben. Beispiele umfassen den Umgang mit veralteten FIDO API-Anmeldeinformationen und die Bewertung von Ausgaben einer mit einem Credential verbundenen Pseudozufallsfunktion (PRF).

    Erweiterungen sind optional und unterschiedliche Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, wird diese einfach ignoriert. Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, finden Sie unter [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `hints` {{optional_inline}}

  - : Ein Array von Strings, das Hinweise darauf gibt, welche Authentifizierungs-UI der User-Agent dem Benutzer zur Verfügung stellen soll.

    Die Werte können folgende sein:

    - `"security-key"`
      - : Die Authentifizierung erfordert ein separates dediziertes physisches Gerät, um den Schlüssel bereitzustellen.
    - `"client-device"`
      - : Der Benutzer authentifiziert sich mit seinem eigenen Gerät, wie etwa einem Telefon.
    - `"hybrid"`
      - : Die Authentifizierung beruht auf einer Kombination von Autorisierungs-/Authentifizierungsmethoden, die potenziell sowohl Benutzern als auch serverbasierten Mechanismen zugrunde liegen.

- `rpId` {{optional_inline}}

  - : Ein String, der die Relying Party-ID angibt (zum Beispiel `"login.example.org"`). Aus Sicherheitsgründen:

    - Die aufrufende Web-App überprüft, ob `rpId` mit dem Ursprung der Relying Party übereinstimmt.
    - Der Authenticator überprüft, ob `rpId` mit der `rpId` des für die Authentifizierungszeremonie verwendeten Credentials übereinstimmt.

    Dieser Wert ist standardmäßig die Domain des aktuellen Ursprungs.

- `timeout` {{optional_inline}}

  - : Ein numerischer Hinweis, in Millisekunden, der die Zeit angibt, die die Relying Party bereit ist, auf den Abschluss des Abrufvorgangs zu warten. Dieser Hinweis kann vom Browser überschrieben werden.

- `userVerification` {{optional_inline}}

  - : Ein String, der die Anforderungen der Relying Party für die Benutzerüberprüfung des Authentifizierungsprozesses angibt. Diese Überprüfung wird vom Authenticator eingeleitet, der den Benutzer auffordert, einen verfügbaren Faktor bereitzustellen (zum Beispiel eine PIN oder eine Art biometrischer Eingabe).

    Der Wert kann einer der folgenden sein:

    - `"required"`
      - : Die Relying Party erfordert die Benutzerüberprüfung, und der Vorgang schlägt fehl, wenn sie nicht erfolgt.
    - `"preferred"`
      - : Die Relying Party bevorzugt die Benutzerüberprüfung, wenn möglich, aber der Vorgang schlägt nicht fehl, wenn sie nicht erfolgt.
    - `"discouraged"`
      - : Die Relying Party möchte keine Benutzerüberprüfung, im Interesse einer möglichst reibungslosen Benutzerinteraktion.

    Dieser Wert ist standardmäßig `"preferred"`.

## Spezifikationen

{{Specifications}}
