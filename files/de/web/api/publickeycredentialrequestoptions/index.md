---
title: PublicKeyCredentialRequestOptions
slug: Web/API/PublicKeyCredentialRequestOptions
l10n:
  sourceCommit: 707183bfb6cffe53650c03e7e7c369ad089f55ae
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialRequestOptions`**-Dictionary repräsentiert das Objekt, das an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) als Wert der `publicKey`-Option übergeben wird.

Es wird verwendet, um ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) anzufordern, das von einem {{Glossary("authenticator", "Authenticator")}} bereitgestellt wird, der die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) unterstützt.

## Instanzeigenschaften

- `allowCredentials` {{optional_inline}}
  - : Ein Array von Objekten, das verwendet wird, um die Liste der akzeptablen Anmeldeinformationen einzuschränken. Ein leeres Array bedeutet, dass jede Anmeldeinformation akzeptiert wird.

    Jedes Objekt im Array wird die folgenden Eigenschaften enthalten:
    - `id`
      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die ID des abzurufenden Public Key Credential repräsentiert. Dieser Wert spiegelt sich in der [`rawId`](/de/docs/Web/API/PublicKeyCredential/rawId)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts wider, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird.

    - `transports`
      - : Ein Array von Zeichenfolgen, das Hinweise darauf gibt, welche Methoden der Client verwenden könnte, um mit dem relevanten Authenticator des abzurufenden Public Key Credential zu kommunizieren. Mögliche Transports sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"` und `"usb"`.

        > [!NOTE]
        > Dieser Wert wird durch den Rückgabewert der [`PublicKeyCredential.response.getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports)-Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts widergespiegelt, das durch den `create()`-Aufruf, der das Credential ursprünglich erstellt hat, zurückgegeben wird. Zu diesem Zeitpunkt sollte es von der App für die spätere Verwendung gespeichert werden.

    - `type`
      - : Eine Zeichenfolge, die den Typ des abzurufenden Public Key Credential definiert. Derzeit kann dieser Wert nur `"public-key"` sein, aber in Zukunft können weitere Werte hinzugefügt werden. Dieser Wert spiegelt sich in der [`type`](/de/docs/Web/API/Credential/type)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts wider, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird.

    Der Standardwert ist ein leeres Array.

- `challenge`
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das vom Server der vertrauenden Partei stammt und als [kryptografische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) verwendet wird. Dieser Wert wird vom Authenticator signiert und die Signatur wird als Teil der [`AuthenticatorAssertionResponse.signature`](/de/docs/Web/API/AuthenticatorAssertionResponse/signature) zurückgesendet (verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts, das durch einen erfolgreichen `get()`-Aufruf zurückgegeben wird).

- `extensions` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für alle angeforderten Erweiterungen repräsentieren. Diese Erweiterungen werden verwendet, um eine spezifische zusätzliche Verarbeitung durch den Client oder Authenticator während des Authentifizierungsprozesses zu ermöglichen. Beispiele umfassen den Umgang mit Legacy-FIDO-API-Credentials und die Auswertung von Ausgaben einer mit einem Credential verbundenen Pseudozufallsfunktion (PRF).

    Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine gegebene Erweiterung nicht erkennt, wird er sie einfach ignorieren. Weitere Informationen zur Verwendung von Erweiterungen und zu den von welchen Browsern unterstützten Erweiterungen finden Sie unter [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `hints` {{optional_inline}} {{experimental_inline}}
  - : Ein Array von Zeichenfolgen, das Hinweise darauf gibt, welche Benutzeroberfläche der Browser bereitstellen sollte, damit der Benutzer sich mit einem vorhandenen Public Key Credential authentifizieren kann.

    Die Zeichenfolgen können folgendermaßen lauten:
    - `"security-key"`
      - : Die Benutzeroberfläche sollte empfehlen, das Credential von einem separaten physischen Sicherheitsschlüssel (wie einem YubiKey) anzufordern.
    - `"client-device"`
      - : Die Benutzeroberfläche sollte empfehlen, das Credential von einem Authenticator anzufordern, der auf dem gleichen Gerät verfügbar ist, das sie verwenden, um auf den RP-Client zuzugreifen.
    - `"hybrid"`
      - : Die Benutzeroberfläche sollte empfehlen, das Credential von einem Allzweck-Authenticator anzufordern, wie einer auf einem Smartphone basierenden Authenticator-App. Dies begünstigt die Verwendung eines geräteübergreifenden Ansatzes bei der Authentifizierung, wobei beispielsweise auf eine Kombination aus Laptop und Smartphone zurückgegriffen wird.

    Wenn mehrere Zeichenfolgen im Array enthalten sind, gibt ihre Reihenfolge die Reihenfolge der Präferenz von hoch nach niedrig an. Unterstützende Browser, die die Hinweise respektieren, sollten den ersten verwenden, den sie verstehen.

    Angegebene `hints` können im Widerspruch zu den in der [`transports`](#transports)-Option bereitgestellten Hinweisen stehen. Wenn die bereitgestellten `hints` dieser Option widersprechen, haben die `hints` Vorrang. `hints` können auch unter spezifischen Umständen vom Browser ignoriert werden, beispielsweise wenn ein vorgeschlagener Authenticator-Typ auf dem Gerät des Benutzers nicht verwendbar ist.

    Für einige spezifische Code- und UI-Beispiele siehe [Introducing hints, Related Origin Requests and JSON serialization for WebAuthn in Chrome](https://developer.chrome.com/blog/passkeys-updates-chrome-129#hints).

- `rpId` {{optional_inline}}
  - : Eine Zeichenfolge, die den Bezeichner der vertrauenden Partei angibt (zum Beispiel `"login.example.org"`). Aus Sicherheitsgründen:
    - Die aufrufende Web-App überprüft, ob `rpId` mit dem Ursprung der vertrauenden Partei übereinstimmt.
    - Der Authenticator überprüft, ob `rpId` mit dem `rpId` des für die Authentifizierungszeremonie verwendeten Credentials übereinstimmt.

    Dieser Wert hat standardmäßig die Domain des aktuellen Ursprungs.

- `timeout` {{optional_inline}}
  - : Ein numerischer Hinweis, in Millisekunden, der angibt, wie lange die vertrauende Partei bereit ist zu warten, bis der Abrufvorgang abgeschlossen ist. Dieser Hinweis kann vom Browser überschrieben werden.

- `userVerification` {{optional_inline}}
  - : Eine Zeichenfolge, die die Anforderungen der vertrauenden Partei für die Benutzerüberprüfung des Authentifizierungsprozesses angibt. Diese Überprüfung wird vom Authenticator initiiert, der den Benutzer auffordern wird, einen verfügbaren Faktor bereitzustellen (zum Beispiel eine PIN oder eine biometrische Eingabe irgendeiner Art).

    Der Wert kann einer der folgenden sein:
    - `"required"`
      - : Die vertrauende Partei verlangt eine Benutzerüberprüfung und der Vorgang schlägt fehl, wenn sie nicht erfolgt.
    - `"preferred"`
      - : Die vertrauende Partei bevorzugt nach Möglichkeit eine Benutzerüberprüfung, aber der Vorgang schlägt nicht fehl, wenn sie nicht erfolgt.
    - `"discouraged"`
      - : Die vertrauende Partei möchte keine Benutzerüberprüfung, um die Benutzerinteraktion so flüssig wie möglich zu gestalten.

    Dieser Wert hat standardmäßig `"preferred"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
