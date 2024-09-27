---
title: PublicKeyCredentialRequestOptions
slug: Web/API/PublicKeyCredentialRequestOptions
l10n:
  sourceCommit: a8ff915bf53e883e9db24056784951d9ab1ae013
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialRequestOptions`**-Wörterbuch stellt das Objekt dar, das an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) als Wert der `publicKey`-Option übergeben wird.

Es wird verwendet, um ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) anzufordern, das von einem [Authenticator](/de/docs/Glossary/authenticator) bereitgestellt wird, der die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) unterstützt.

## Instanz-Eigenschaften

- `allowCredentials` {{optional_inline}}

  - : Ein Array von Objekten, das dazu verwendet wird, die Liste der akzeptablen Anmeldedaten einzuschränken. Ein leeres Array zeigt an, dass jede Anmeldeinformation akzeptabel ist.

    Jedes Objekt im Array enthält die folgenden Eigenschaften:

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die ID des zu beziehenden Public-Key-Credentials darstellt. Dieser Wert wird durch die [`rawId`](/de/docs/Web/API/PublicKeyCredential/rawId)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts widergespiegelt, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird.

    - `transports`

      - : Ein Array von Zeichenfolgen, das Hinweise darauf gibt, welche Methoden der Client verwenden könnte, um mit dem relevanten Authenticator des abzurufenden Public-Key-Credentials zu kommunizieren. Mögliche Transports sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"` und `"usb"`.

        > [!NOTE]
        > Dieser Wert wird durch den Rückgabewert der [`PublicKeyCredential.response.getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports)-Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts widergespiegelt, das durch den `create()`-Aufruf zurückgegeben wird, der die Anmeldeinformationen ursprünglich erstellt hat.
        > An dieser Stelle sollte es von der App für die spätere Verwendung gespeichert werden.

    - `type`

      - : Eine Zeichenkette, die den Typ des abzurufenden Public-Key-Credentials definiert. Derzeit kann dieser Wert nur `"public-key"` annehmen, aber möglicherweise werden in Zukunft weitere Werte hinzugefügt. Dieser Wert wird durch die [`type`](/de/docs/Web/API/Credential/type)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts widergespiegelt, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird.

    Dieser Wert ist standardmäßig ein leeres Array.

- `challenge`

  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das vom Server der vertrauenden Partei stammt und als [kryptografische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) verwendet wird. Dieser Wert wird vom Authenticator signiert und die Signatur wird als Teil der [`AuthenticatorAssertionResponse.signature`](/de/docs/Web/API/AuthenticatorAssertionResponse/signature) (verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird) zurückgesendet.

- `extensions` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für alle angeforderten Erweiterungen darstellen. Diese Erweiterungen werden verwendet, um zusätzliche Verarbeitung durch den Client oder Authenticator während des Authentifizierungsprozesses durchzuführen. Beispiele beinhalten das Umgang mit Legacy-FIDO-API-Anmeldeinformationen und die Auswertung von Ausgaben einer pseudozufälligen Funktion (PRF), die mit einer Anmeldeinformation verbunden ist.

    Erweiterungen sind optional und unterschiedliche Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine gegebene Erweiterung nicht erkennt, ignoriert er sie einfach. Für Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, siehe [Web Authentication-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `hints` {{optional_inline}}

  - : Ein Array von Zeichenfolgen, das Hinweise darauf gibt, welche Authentifizierungs-UI der Benutzer-Agent dem Benutzer bereitstellen sollte.

    Die Werte können folgende sein:

    - `"security-key"`
      - : Die Authentifizierung erfordert ein separates, dediziertes physisches Gerät zur Bereitstellung des Schlüssels.
    - `"client-device"`
      - : Der Benutzer authentifiziert sich mit seinem eigenen Gerät, wie z. B. einem Telefon.
    - `"hybrid"`
      - : Die Authentifizierung basiert auf einer Kombination von Autorisierungs-/Authentifizierungsmethoden, die potenziell sowohl auf Benutzer- als auch auf Server-Mechanismen basieren.

- `rpId` {{optional_inline}}

  - : Eine Zeichenkette, die den Bezeichner der vertrauenden Partei angibt (zum Beispiel `"login.example.org"`). Aus Sicherheitsgründen:

    - Die aufrufende Web-App überprüft, dass `rpId` mit dem Ursprung der vertrauenden Partei übereinstimmt.
    - Der Authenticator überprüft, dass `rpId` mit dem `rpId` der für die Authentifizierungszeremonie verwendeten Anmeldeinformationen übereinstimmt.

    Dieser Wert ist standardmäßig die Domain des aktuellen Ursprungs.

- `timeout` {{optional_inline}}

  - : Ein numerischer Hinweis in Millisekunden, der angibt, wie lange die vertrauende Partei bereit ist, auf den Abschluss der Abrufoperation zu warten. Dieser Hinweis kann vom Browser überschrieben werden.

- `userVerification` {{optional_inline}}

  - : Eine Zeichenkette, die die Anforderungen der vertrauenden Partei für die Benutzerüberprüfung des Authentifizierungsprozesses spezifiziert. Diese Überprüfung wird vom Authenticator initiiert, der den Benutzer auffordert, einen verfügbaren Faktor bereitzustellen (z. B. eine PIN oder eine biometrische Eingabe).

    Der Wert kann einer der folgenden sein:

    - `"required"`
      - : Die vertrauende Partei erfordert eine Benutzerverifizierung, und der Vorgang schlägt fehl, wenn sie nicht erfolgt.
    - `"preferred"`
      - : Die vertrauende Partei bevorzugt die Benutzerverifizierung, wenn möglich, aber der Vorgang schlägt nicht fehl, wenn sie nicht erfolgt.
    - `"discouraged"`
      - : Die vertrauende Partei möchte keine Benutzerverifizierung, um die Benutzerinteraktion so reibungslos wie möglich zu gestalten.

    Dieser Wert ist standardmäßig `"preferred"`.

## Spezifikationen

{{Specifications}}
