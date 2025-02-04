---
title: PublicKeyCredentialRequestOptions
slug: Web/API/PublicKeyCredentialRequestOptions
l10n:
  sourceCommit: 1e98f1356a5eda11db10cd9b08dc52cce868ebff
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialRequestOptions`**-Wörterbuch repräsentiert das Objekt, das an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) als Wert der `publicKey`-Option übergeben wird.

Es wird verwendet, um ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) anzufordern, das von einem {{Glossary("authenticator", "Authenticator")}} bereitgestellt wird, der die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) unterstützt.

## Instanz-Eigenschaften

- `allowCredentials` {{optional_inline}}

  - : Ein Array von Objekten, das verwendet wird, um die Liste der akzeptablen Anmeldeinformationen einzuschränken. Ein leeres Array zeigt an, dass jede Anmeldeinformation akzeptabel ist.

    Jedes Objekt in dem Array enthält die folgenden Eigenschaften:

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die ID des abzurufenden öffentlichen Schlüssels darstellt. Dieser Wert wird durch die [`rawId`](/de/docs/Web/API/PublicKeyCredential/rawId)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts widergespiegelt, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird.

    - `transports`

      - : Ein Array von Zeichenfolgen, das Hinweise auf die Methoden gibt, die der Client verwenden könnte, um mit dem relevanten Authenticator des abzurufenden öffentlichen Schlüssels zu kommunizieren. Mögliche Transportarten sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"` und `"usb"`.

        > [!NOTE]
        > Dieser Wert wird durch den Rückgabewert der Methode [`PublicKeyCredential.response.getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports) des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts widergespiegelt, das durch den `create()`-Aufruf ursprünglich erstellt wurde.
        > Zu diesem Zeitpunkt sollte er durch die App für eine spätere Verwendung gespeichert werden.

    - `type`

      - : Eine Zeichenfolge, die den Typ des abzurufenden öffentlichen Schlüssels definiert. Dieser kann derzeit einen einzigen Wert annehmen, `"public-key"`, jedoch können in Zukunft weitere Werte hinzugefügt werden. Dieser Wert wird durch die [`type`](/de/docs/Web/API/Credential/type)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts widergespiegelt, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird.

    Dieser Wert ist standardmäßig ein leeres Array.

- `challenge`

  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das vom Server der relyierenden Partei stammt und als [kryptografische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) dient. Dieser Wert wird vom Authenticator signiert, und die Signatur wird als Teil der [`AuthenticatorAssertionResponse.signature`](/de/docs/Web/API/AuthenticatorAssertionResponse/signature) zurückgesendet (verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird).

- `extensions` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für angeforderte Erweiterungen darstellen. Diese Erweiterungen dienen zur Durchführung zusätzlicher Verarbeitungen durch den Client oder Authenticator während des Authentifizierungsprozesses. Beispiele umfassen den Umgang mit älteren FIDO API-Anmeldeinformationen und die Auswertung von Ausgaben aus einer Pseudozufallsfunktion (PRF), die mit einer Anmeldeinformation verbunden ist.

    Erweiterungen sind optional, und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, ignoriert er sie einfach. Informationen zur Verwendung von Erweiterungen und dazu, welche von welchen Browsern unterstützt werden, finden Sie unter [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `hints` {{optional_inline}}

  - : Ein Array von Zeichenfolgen, das Hinweise darauf gibt, welche Authentifizierungs-UI der Benutzeragent dem Nutzer bereitstellen sollte.

    Die Werte können folgende sein:

    - `"security-key"`
      - : Die Authentifizierung erfordert ein separates dediziertes physisches Gerät, um den Schlüssel bereitzustellen.
    - `"client-device"`
      - : Der Benutzer authentifiziert sich mit seinem eigenen Gerät, z. B. einem Telefon.
    - `"hybrid"`
      - : Die Authentifizierung beruht auf einer Kombination von Autorisierungs-/Authentifizierungsmethoden, die sich möglicherweise sowohl auf nutzer- als auch serverbasierte Mechanismen stützen.

- `rpId` {{optional_inline}}

  - : Eine Zeichenkette, die den Bezeichner der relyierenden Partei angibt (zum Beispiel `"login.example.org"`). Aus Sicherheitsgründen:

    - Die aufrufende Web-App überprüft, ob `rpId` mit dem Ursprung der relyierenden Partei übereinstimmt.
    - Der Authenticator überprüft, ob `rpId` mit dem `rpId` der Anmeldeinformation, die für die Authentifizierungszeremonie verwendet wird, übereinstimmt.

    Der Standardwert ist die Domain des aktuellen Ursprungs.

- `timeout` {{optional_inline}}

  - : Ein numerischer Hinweis, in Millisekunden, der angibt, wie lange die relyierende Partei bereit ist, auf das Abschließen des Abrufvorgangs zu warten. Dieser Hinweis kann vom Browser überschrieben werden.

- `userVerification` {{optional_inline}}

  - : Eine Zeichenkette, die die Anforderungen der relyierenden Partei für die Benutzerüberprüfung des Authentifizierungsprozesses angibt. Diese Überprüfung wird vom Authenticator initiiert, der den Benutzer auffordert, einen verfügbaren Faktor bereitzustellen (zum Beispiel eine PIN oder eine Art biometrisches Eingabemittel).

    Der Wert kann einer der folgenden sein:

    - `"required"`
      - : Die relyierende Partei erfordert die Benutzerüberprüfung, und der Vorgang schlägt fehl, wenn sie nicht erfolgt.
    - `"preferred"`
      - : Die relyierende Partei bevorzugt die Benutzerüberprüfung, wenn möglich, aber der Vorgang schlägt nicht fehl, wenn sie nicht erfolgt.
    - `"discouraged"`
      - : Die relyierende Partei möchte keine Benutzerüberprüfung zur Verfügung stellen, um die Benutzerinteraktion so reibungslos wie möglich zu gestalten.

    Der Standardwert ist `"preferred"`.

## Spezifikationen

{{Specifications}}
