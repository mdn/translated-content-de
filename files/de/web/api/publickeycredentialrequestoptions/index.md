---
title: PublicKeyCredentialRequestOptions
slug: Web/API/PublicKeyCredentialRequestOptions
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialRequestOptions`**-Wörterbuch repräsentiert das Objekt, das an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) als Wert der `publicKey`-Option übergeben wird.

Es wird verwendet, um ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) anzufordern, das von einem {{Glossary("authenticator", "Authenticator")}} bereitgestellt wird, der die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) unterstützt.

## Instanz-Eigenschaften

- `allowCredentials` {{optional_inline}}

  - : Ein Array von Objekten, das verwendet wird, um die Liste der akzeptablen Anmeldeinformationen einzuschränken. Ein leeres Array bedeutet, dass jede Anmeldeinformation akzeptabel ist.

    Jedes Objekt im Array enthält die folgenden Eigenschaften:

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die ID der abzurufenden öffentlichen Schlüssel-Anmeldeinformation darstellt. Dieser Wert wird von der [`rawId`](/de/docs/Web/API/PublicKeyCredential/rawId)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts, das von einem erfolgreichen `get()`-Aufruf zurückgegeben wird, widergespiegelt.

    - `transports`

      - : Ein Array von Zeichenfolgen, das Hinweise auf die Methoden gibt, die der Client verwenden könnte, um mit dem relevanten Authenticator der abzurufenden öffentlichen Schlüssel-Anmeldeinformation zu kommunizieren. Mögliche Transporte sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"` und `"usb"`.

        > [!NOTE]
        > Dieser Wert wird von dem Rückgabewert der Methode [`PublicKeyCredential.response.getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports) des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts widergespiegelt, das durch den `create()`-Aufruf ursprünglich erstellt wurde.
        > An diesem Punkt sollte er von der App für die spätere Verwendung gespeichert werden.

    - `type`
      - : Eine Zeichenfolge, die den Typ der abzurufenden öffentlichen Schlüssel-Anmeldeinformation definiert. Derzeit kann sie einen einzigen Wert annehmen, `"public-key"`, aber möglicherweise werden in Zukunft weitere Werte hinzugefügt. Dieser Wert wird von der [`type`](/de/docs/Web/API/Credential/type)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts, das von einem erfolgreichen `get()`-Aufruf zurückgegeben wird, widergespiegelt.

    Dieser Wert ist standardmäßig ein leeres Array.

- `challenge`

  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das vom Server der vertrauenden Partei stammt und als [cryptographic challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) verwendet wird. Dieser Wert wird vom Authenticator signiert und die Signatur wird als Teil der [`AuthenticatorAssertionResponse.signature`](/de/docs/Web/API/AuthenticatorAssertionResponse/signature) (verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts, das von einem erfolgreichen `get()`-Aufruf zurückgegeben wird) gesendet.

- `extensions` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für alle angeforderten Erweiterungen darstellen. Diese Erweiterungen werden verwendet, um spezifische zusätzliche Verarbeitungen durch den Client oder den Authenticator während des Authentifizierungsprozesses durchzuführen. Beispiele umfassen den Umgang mit Legacy FIDO API-Anmeldeinformationen und die Auswertung von Ausgaben einer pseudozufälligen Funktion (PRF), die mit einer Anmeldeinformation verbunden ist.

    Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client stets optional: Wenn ein Browser eine gegebene Erweiterung nicht erkennt, wird er sie einfach ignorieren. Weitere Informationen über die Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, finden Sie in den [Web Authentication-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `hints` {{optional_inline}}

  - : Ein Array von Zeichenfolgen, das Hinweise darauf gibt, welche Authentifizierungs-Benutzeroberfläche der Benutzeragent dem Benutzer bereitstellen soll.

    Die Werte können Folgendes umfassen:

    - `"security-key"`
      - : Die Authentifizierung erfordert ein separates, dediziertes physisches Gerät, um den Schlüssel bereitzustellen.
    - `"client-device"`
      - : Der Benutzer authentifiziert sich über das eigene Gerät, z. B. ein Telefon.
    - `"hybrid"`
      - : Die Authentifizierung beruht auf einer Kombination von Autorisierungs-/Authentifizierungsmethoden, die möglicherweise sowohl nutzer- als auch serverbasierte Mechanismen umfassen.

- `rpId` {{optional_inline}}

  - : Eine Zeichenfolge, die den Bezeichner der vertrauenden Partei angibt (zum Beispiel `"login.example.org"`). Aus Sicherheitsgründen:

    - Die aufrufende Web-App überprüft, dass `rpId` mit dem Ursprung der vertrauenden Partei übereinstimmt.
    - Der Authenticator überprüft, dass `rpId` mit dem `rpId` der Anmeldeinformation übereinstimmt, die für die Authentifizierungszeremonie verwendet wurde.

    Dieser Wert ist standardmäßig die Domäne des aktuellen Ursprungs.

- `timeout` {{optional_inline}}

  - : Ein numerischer Hinweis in Millisekunden, der angibt, wie lange die vertrauende Partei bereit ist, auf den Abschluss der Abrufoperation zu warten. Dieser Hinweis kann vom Browser überschrieben werden.

- `userVerification` {{optional_inline}}

  - : Eine Zeichenfolge, die die Anforderungen der vertrauenden Partei für die Benutzerüberprüfung des Authentifizierungsprozesses angibt. Diese Überprüfung wird vom Authenticator initiiert, der den Benutzer auffordert, einen verfügbaren Faktor bereitzustellen (zum Beispiel eine PIN oder eine biometrische Eingabe).

    Der Wert kann einer der folgenden sein:

    - `"required"`
      - : Die vertrauende Partei erfordert eine Benutzerüberprüfung, und der Vorgang schlägt fehl, wenn sie nicht erfolgt.
    - `"preferred"`
      - : Die vertrauende Partei bevorzugt eine Benutzerüberprüfung, wenn möglich, aber der Vorgang schlägt nicht fehl, wenn sie nicht erfolgt.
    - `"discouraged"`
      - : Die vertrauende Partei wünscht keine Benutzerüberprüfung, um die Benutzerinteraktion so reibungslos wie möglich zu gestalten.

    Dieser Wert ist standardmäßig `"preferred"`.

## Spezifikationen

{{Specifications}}
