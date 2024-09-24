---
title: PublicKeyCredentialRequestOptions
slug: Web/API/PublicKeyCredentialRequestOptions
l10n:
  sourceCommit: a8ff915bf53e883e9db24056784951d9ab1ae013
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialRequestOptions`**-Dictionary repräsentiert das Objekt, das als Wert der `publicKey`-Option an {{domxref("CredentialsContainer.get()")}} übergeben wird.

Es wird verwendet, um ein {{domxref("PublicKeyCredential")}} anzufordern, das von einem {{glossary("authenticator")}} bereitgestellt wird, das die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) unterstützt.

## Instanzeigenschaften

- `allowCredentials` {{optional_inline}}

  - : Ein Array von Objekten, das verwendet wird, um die Liste der akzeptablen Anmeldeinformationen einzuschränken. Ein leeres Array gibt an, dass jede Anmeldeinformation akzeptabel ist.

    Jedes Objekt im Array enthält die folgenden Eigenschaften:

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die ID der abzurufenden Public-Key-Anmeldeinformation darstellt. Dieser Wert wird durch die {{domxref("PublicKeyCredential.rawId", "rawId")}}-Eigenschaft des {{domxref("PublicKeyCredential")}}-Objekts widergespiegelt, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird.

    - `transports`

      - : Ein Array von Strings, das Hinweise auf die Methoden gibt, die der Client verwenden könnte, um mit dem relevanten Authenticator der abzurufenden Public-Key-Anmeldeinformation zu kommunizieren. Mögliche Transports sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"` und `"usb"`.

        > [!NOTE]
        > Dieser Wert wird durch den Rückgabewert der {{domxref("AuthenticatorAttestationResponse.getTransports", "PublicKeyCredential.response.getTransports()")}}-Methode des {{domxref("PublicKeyCredential")}}-Objekts widergespiegelt, das durch den `create()`-Aufruf, der ursprünglich die Anmeldeinformation erstellt hat, zurückgegeben wurde.
        > Zu diesem Zeitpunkt sollte es von der App für die spätere Verwendung gespeichert werden.

    - `type`

      - : Ein String, der den Typ der abzurufenden Public-Key-Anmeldeinformation definiert. Dieser kann derzeit nur einen Wert, `"public-key"`, annehmen, aber in Zukunft können weitere Werte hinzugefügt werden. Dieser Wert wird durch die {{domxref("Credential.type", "type")}}-Eigenschaft des {{domxref("PublicKeyCredential")}}-Objekts widergespiegelt, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird.

    Dieser Wert ist standardmäßig ein leeres Array.

- `challenge`

  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das vom Server der vertrauenden Partei stammt und als [kryptografische Herausforderung](https://de.wikipedia.org/wiki/Challenge-Response-Authentifizierung) verwendet wird. Dieser Wert wird vom Authenticator signiert und die Signatur wird als Teil der {{domxref("AuthenticatorAssertionResponse.signature")}} (verfügbar in der {{domxref("PublicKeyCredential.response", "response")}}-Eigenschaft des {{domxref("PublicKeyCredential")}}-Objekts, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird) zurückgesendet.

- `extensions` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften repräsentiert, die die Eingabewerte für angeforderte Erweiterungen darstellen. Diese Erweiterungen werden verwendet, um zusätzliche Verarbeitung durch den Client oder Authenticator während des Authentifizierungsprozesses zu spezifizieren. Beispiele umfassen den Umgang mit Legacy-FIDO-API-Anmeldeinformationen und die Bewertung von Ausgaben von einer pseudo-zufälligen Funktion (PRF), die mit einer Anmeldeinformation verbunden ist.

    Erweiterungen sind optional und verschiedene Browser erkennen möglicherweise verschiedene Erweiterungen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, wird sie einfach ignoriert. Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, finden Sie unter [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `hints` {{optional_inline}}

  - : Ein Array von Strings, das Hinweise darauf gibt, welche Authentifizierungs-UI der Benutzeragent dem Benutzer bereitstellen sollte.

    Die Werte können folgende sein:

    - `"security-key"`
      - : Die Authentifizierung erfordert ein separates physisches Gerät, um den Schlüssel bereitzustellen.
    - `"client-device"`
      - : Der Benutzer authentifiziert sich mit seinem eigenen Gerät, wie einem Telefon.
    - `"hybrid"`
      - : Die Authentifizierung basiert auf einer Kombination von Autorisierungs-/Authentifizierungsmethoden, die möglicherweise sowohl auf benutzer- als auch serverbasierten Mechanismen beruhen.

- `rpId` {{optional_inline}}

  - : Ein String, der den Bezeichner der vertrauenden Partei angibt (zum Beispiel `"login.example.org"`). Aus Sicherheitsgründen:

    - Die aufrufende Web-App überprüft, dass `rpId` mit dem Ursprung der vertrauenden Partei übereinstimmt.
    - Der Authenticator überprüft, dass `rpId` mit dem `rpId` der für die Authentifizierungszeremonie verwendeten Anmeldeinformation übereinstimmt.

    Dieser Wert ist standardmäßig auf die Domain des aktuellen Ursprungs festgelegt.

- `timeout` {{optional_inline}}

  - : Ein numerischer Hinweis in Millisekunden, der die Zeit angibt, die die vertrauende Partei bereit ist zu warten, bis der Abrufvorgang abgeschlossen ist. Dieser Hinweis kann vom Browser überschrieben werden.

- `userVerification` {{optional_inline}}

  - : Ein String, der die Anforderungen der vertrauenden Partei an die Benutzerverifizierung des Authentifizierungsprozesses spezifiziert. Diese Verifizierung wird vom Authenticator initiiert, der den Benutzer auffordert, einen verfügbaren Faktor anzugeben (zum Beispiel eine PIN oder einen biometrischen Input).

    Der Wert kann einer der folgenden sein:

    - `"required"`
      - : Die vertrauende Partei verlangt eine Benutzerverifizierung, und der Vorgang wird fehlschlagen, wenn sie nicht erfolgt.
    - `"preferred"`
      - : Die vertrauende Partei bevorzugt eine Benutzerverifizierung, wenn möglich, aber der Vorgang wird nicht fehlschlagen, wenn sie nicht erfolgt.
    - `"discouraged"`
      - : Die vertrauende Partei wünscht keine Benutzerverifizierung, um die Benutzerinteraktion so reibungslos wie möglich zu gestalten.

    Dieser Wert ist standardmäßig auf `"preferred"` gesetzt.

## Spezifikationen

{{Specifications}}
