---
title: PublicKeyCredentialRequestOptions
slug: Web/API/PublicKeyCredentialRequestOptions
l10n:
  sourceCommit: d8b42532527099c261c6a59a7e2f4f506e9a392e
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialRequestOptions`**-Wörterbuch stellt das Objekt dar, das an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) als Wert der `publicKey`-Option übergeben wird.

Es wird verwendet, um ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) von einem {{Glossary("authenticator", "Authenticator")}} anzufordern, der die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) unterstützt.

## Instanzeigenschaften

- `allowCredentials` {{optional_inline}}
  - : Ein Array von Objekten, das zur Einschränkung der Liste akzeptabler Anmeldeinformationen verwendet wird. Ein leeres Array zeigt an, dass jede Anmeldeinformation akzeptabel ist.

    Jedes Objekt im Array enthält die folgenden Eigenschaften:
    - `id`
      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die ID des abzurufenden öffentlichen Schlüsselanmeldedatensatzes darstellt. Dieser Wert wird von der [`rawId`](/de/docs/Web/API/PublicKeyCredential/rawId)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts widergespiegelt, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird.

    - `transports` {{optional_inline}}
      - : Ein Array von Zeichenfolgen, das Hinweise zu den Methoden gibt, die der Client zur Kommunikation mit dem jeweiligen Authenticator des öffentlichen Schlüsselanmeldedatensatzes verwenden könnte. Mögliche Transports sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"` und `"usb"`.

        > [!NOTE]
        > Dieser Wert wird durch den Rückgabewert der Methode [`PublicKeyCredential.response.getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports) des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts widergespiegelt, das durch den `create()`-Aufruf, der ursprünglich die Anmeldeinformation erstellt hat, zurückgegeben wird.
        > Zu diesem Zeitpunkt sollte es von der App für die spätere Verwendung gespeichert werden.

    - `type`
      - : Eine Zeichenfolge, die den Typ des abzurufenden öffentlichen Schlüsselanmeldedatensatzes definiert. Dies kann derzeit einen einzelnen Wert, `"public-key"`, annehmen, aber in der Zukunft könnten weitere Werte hinzugefügt werden. Dieser Wert wird durch die [`type`](/de/docs/Web/API/Credential/type)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts widergespiegelt, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird.

    Dieser Wert ist standardmäßig ein leeres Array.

- `challenge`
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das vom Server der vertrauenden Partei stammt und als [kryptografische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) verwendet wird. Dieser Wert wird vom Authenticator signiert und die Signatur wird als Teil der [`AuthenticatorAssertionResponse.signature`](/de/docs/Web/API/AuthenticatorAssertionResponse/signature) (verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird) zurückgesendet.

- `extensions` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für angeforderte Erweiterungen darstellen. Diese Erweiterungen werden verwendet, um zusätzliche Verarbeitung durch den Client oder den Authenticator während des Authentifizierungsprozesses zu spezifizieren. Beispiele umfassen den Umgang mit veralteten FIDO-API-Anmeldeinformationen und die Auswertung von Ausgaben aus einer mit einer Anmeldeinformation verbundenen pseudorandom-Funktion (PRF).

    Erweiterungen sind optional und unterschiedliche Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine gegebene Erweiterung nicht erkennt, ignoriert er sie einfach. Für Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, siehe [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `hints` {{optional_inline}} {{experimental_inline}}
  - : Ein Array von Zeichenfolgen, das Hinweise darauf gibt, welche Benutzeroberfläche der Browser bereitstellen sollte, damit der Benutzer mit einer vorhandenen öffentlichen Schlüsselanmeldeinformation authentifiziert wird.

    Die Zeichenfolgen können folgende sein:
    - `"security-key"`
      - : Die Benutzeroberfläche sollte empfehlen, die Anmeldeinformation von einem separaten physischen Sicherheitsschlüssel (wie einem YubiKey) anzufordern.
    - `"client-device"`
      - : Die Benutzeroberfläche sollte empfehlen, die Anmeldeinformation von einem auf demselben Gerät verfügbaren Authenticator anzufordern, das sie zur Zugriff auf den RP-Client verwenden.
    - `"hybrid"`
      - : Die Benutzeroberfläche sollte empfehlen, die Anmeldeinformation von einem allgemeinen Authenticator, wie einer auf einem Smartphone basierenden Authenticator-App, anzufordern. Dies bevorzugt die Verwendung eines geräteübergreifenden Ansatzes zur Handhabung der Authentifizierung, bei dem beispielsweise auf eine Kombination aus Laptop und Smartphone zurückgegriffen wird.

    Wenn mehrere Zeichenfolgen im Array enthalten sind, gibt deren Reihenfolge die Reihenfolge der Präferenz von hoch zu niedrig an. Unterstützende Browser, die die Hinweise respektieren, sollten den ersten benutzen, den sie verstehen.

    Angegebene `hints` können im Widerspruch zu in der [`transports`](#transports)-Option bereitgestellten Hinweisen stehen. Wenn die bereitgestellten `hints` dieser Option widersprechen, haben die `hints` Vorrang. `Hints` können auch vom Browser unter bestimmten Umständen ignoriert werden, beispielsweise wenn ein angedeuteter Authenticator-Typ auf dem Gerät des Benutzers nicht verwendbar ist.

    Für spezifische Code- und UI-Beispiele siehe [Introducing hints, Related Origin Requests and JSON serialization for WebAuthn in Chrome](https://developer.chrome.com/blog/passkeys-updates-chrome-129#hints).

- `rpId` {{optional_inline}}
  - : Eine Zeichenfolge, die den Bezeichner der vertrauenden Partei angibt (zum Beispiel `"login.example.org"`). Aus Sicherheitsgründen:
    - Der Browser prüft, dass `rpId` mit dem Ursprung der vertrauenden Partei übereinstimmt oder ein Domain-Suffix des Ursprungs der vertrauenden Partei ist (zum Beispiel `example.org`).
    - Der Authenticator überprüft, dass `rpId` mit dem `rpId` der für die Authentifizierungszeremonie verwendeten Anmeldeinformation übereinstimmt.

    Dieser Wert ist standardmäßig die Domain des aktuellen Ursprungs.

- `timeout` {{optional_inline}}
  - : Ein numerischer Hinweis, in Millisekunden, der die Zeit angibt, die die vertrauende Partei bereit ist zu warten, bis der Abrufvorgang abgeschlossen ist. Dieser Hinweis kann vom Browser überschrieben werden.

- `userVerification` {{optional_inline}}
  - : Eine Zeichenfolge, die die Anforderungen der vertrauenden Partei an die Benutzerauthentifizierung während des Authentifizierungsprozesses angibt. Diese Verifizierung wird vom Authenticator initiiert, der den Benutzer auffordert, einen verfügbaren Faktor bereitzustellen (zum Beispiel eine PIN oder eine Art biometrischen Input).

    Der Wert kann einer der folgenden sein:
    - `"required"`
      - : Die vertrauende Partei erfordert eine Benutzerauthentifizierung, und der Vorgang schlägt fehl, sollten sie nicht stattfinden.
    - `"preferred"`
      - : Die vertrauende Partei bevorzugt eine Benutzerauthentifizierung, sofern möglich, aber der Vorgang schlägt nicht fehl, sollten sie nicht stattfinden.
    - `"discouraged"`
      - : Die vertrauende Partei möchte keine Benutzerauthentifizierung, um die Benutzerinteraktion so flüssig wie möglich zu halten.

    Dieser Wert ist standardmäßig `"preferred"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
