---
title: PublicKeyCredentialRequestOptions
slug: Web/API/PublicKeyCredentialRequestOptions
l10n:
  sourceCommit: 8c426a99972c23906699bce5d4a73e9aef646ee7
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialRequestOptions`**-Wörterbuch repräsentiert das Objekt, das als Wert der `publicKey`-Option an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben wird.

Es wird verwendet, um ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) anzufordern, das von einem {{Glossary("authenticator", "Authenticator")}} bereitgestellt wird, der die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) unterstützt.

## Instanzeigenschaften

- `allowCredentials` {{optional_inline}}
  - : Ein Array von Objekten, das verwendet wird, um die Liste der akzeptablen Anmeldeinformationen einzuschränken. Ein leeres Array zeigt an, dass jede Anmeldeinformation akzeptabel ist.

    Jedes Objekt im Array wird die folgenden Eigenschaften enthalten:
    - `id`
      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das die ID der öffentlichen Schlüssel-Anmeldeinformation repräsentiert, die abgerufen werden soll. Dieser Wert wird durch die [`rawId`](/de/docs/Web/API/PublicKeyCredential/rawId)-Eigenschaft des durch einen erfolgreichen `get()`-Aufruf zurückgegebenen [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts gespiegelt.

    - `transports`
      - : Ein Array von Zeichenketten, das Hinweise darauf gibt, welche Methoden der Client verwenden könnte, um mit dem relevanten Authenticator der öffentlichen Schlüssel-Anmeldeinformation zu kommunizieren. Mögliche Transports sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"` und `"usb"`.

        > [!NOTE]
        > Dieser Wert wird durch den Rückgabewert der [`PublicKeyCredential.response.getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports)-Methode des beim `create()`-Aufruf, der ursprünglich die Anmeldeinformation erstellt hat, zurückgegebenen [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts gespiegelt.
        > An diesem Punkt sollte er von der App für die spätere Verwendung gespeichert werden.

    - `type`
      - : Eine Zeichenkette, die den Typ der öffentlichen Schlüssel-Anmeldeinformation definiert, die abgerufen werden soll. Derzeit kann dieser Wert nur "`public-key"` sein, aber in Zukunft könnten weitere Werte hinzugefügt werden. Dieser Wert wird durch die [`type`](/de/docs/Web/API/Credential/type)-Eigenschaft des durch einen erfolgreichen `get()`-Aufruf zurückgegebenen [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts gespiegelt.

    Dieser Wert ist standardmäßig ein leeres Array.

- `challenge`
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das vom Server der vertrauenden Partei stammt und als [kryptografische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) verwendet wird. Dieser Wert wird vom Authenticator signiert und die Signatur wird als Teil der [`AuthenticatorAssertionResponse.signature`](/de/docs/Web/API/AuthenticatorAssertionResponse/signature) (verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft des durch einen erfolgreichen `get()`-Aufruf zurückgegebenen [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts) zurückgesendet.

- `extensions` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für angeforderte Erweiterungen repräsentieren. Diese Erweiterungen werden verwendet, um während des Authentifizierungsprozesses zusätzliche Verarbeitung durch den Client oder Authenticator zu spezifizieren. Beispiele beinhalten den Umgang mit veralteten FIDO-API-Anmeldeinformationen und die Bewertung von Ausgaben einer mit einer Anmeldeinformation verbundenen pseudorandom Funktion (PRF).

    Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, wird er sie einfach ignorieren. Für Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, siehe [Web Authentication-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `hints` {{optional_inline}}
  - : Ein Array von Zeichenketten, das Hinweise darauf gibt, welche Benutzeroberfläche der Browser bereitstellen sollte, damit der Benutzer sich mit einer bestehenden öffentlichen Schlüssel-Anmeldeinformation authentifizieren kann.

    Die Zeichenketten können folgende sein:
    - `"security-key"`
      - : Die Benutzeroberfläche sollte empfehlen, die Anmeldeinformation von einem separaten physischen Sicherheitsschlüssel (wie einem YubiKey) anzufordern.
    - `"client-device"`
      - : Die Benutzeroberfläche sollte empfehlen, die Anmeldeinformation von einem Authenticator anzufordern, der auf demselben Gerät verfügbar ist, das sie verwenden, um auf den RP-Client zuzugreifen.
    - `"hybrid"`
      - : Die Benutzeroberfläche sollte empfehlen, die Anmeldeinformation von einem General-Purpose-Authenticator, wie einer Smartphone-basierten Authenticator-App, anzufordern. Dies begünstigt die Verwendung eines Cross-Device-Ansatzes zur Handhabung der Authentifizierung, zum Beispiel die Kombination von Laptop und Smartphone.

    Wenn mehrere Zeichenketten im Array enthalten sind, zeigt ihre Reihenfolge die Präferenzreihenfolge von hoch zu niedrig an. Unterstützende Browser, die die Hinweise respektieren, sollten den ersten verwenden, den sie verstehen.

    Angegebene `hints` können den in der [`transports`](#transports)-Option angegebenen Hinweisen widersprechen. Wenn die bereitgestellten `hints` dieser Option widersprechen, haben die `hints` Vorrang. `hints` können vom Browser unter bestimmten Umständen auch ignoriert werden, beispielsweise wenn ein angedeuteter Authenticator-Typ auf dem Gerät des Benutzers nicht verwendbar ist.

    Für einige spezifische Code- und UI-Beispiele siehe [Introducing hints, Related Origin Requests and JSON serialization for WebAuthn in Chrome](https://developer.chrome.com/blog/passkeys-updates-chrome-129#hints).

- `rpId` {{optional_inline}}
  - : Eine Zeichenkette, die den Bezeichner der vertrauenden Partei angibt (zum Beispiel `"login.example.org"`). Aus Sicherheitsgründen:
    - Die aufrufende Web-App überprüft, ob `rpId` mit dem Ursprung der vertrauenden Partei übereinstimmt.
    - Der Authenticator überprüft, ob `rpId` mit dem `rpId` der für die Authentifizierungszeremonie verwendeten Anmeldeinformation übereinstimmt.

    Dieser Wert ist standardmäßig die Domain des aktuellen Ursprungs.

- `timeout` {{optional_inline}}
  - : Ein numerischer Hinweis, in Millisekunden, der die Zeit angibt, die die vertrauende Partei bereit ist zu warten, bis der Abrufvorgang abgeschlossen ist. Dieser Hinweis kann vom Browser überschrieben werden.

- `userVerification` {{optional_inline}}
  - : Eine Zeichenkette, die die Anforderungen der vertrauenden Partei für die Benutzerüberprüfung des Authentifizierungsprozesses spezifiziert. Diese Überprüfung wird vom Authenticator initiiert, der den Benutzer auffordert, einen verfügbaren Faktor bereitzustellen (zum Beispiel eine PIN oder eine Art biometrische Eingabe).

    Der Wert kann einer der folgenden sein:
    - `"required"`
      - : Die vertrauende Partei verlangt eine Benutzerüberprüfung, und der Vorgang schlägt fehl, wenn diese nicht erfolgt.
    - `"preferred"`
      - : Die vertrauende Partei bevorzugt eine Benutzerüberprüfung, wenn möglich, aber der Vorgang schlägt nicht fehl, wenn diese nicht erfolgt.
    - `"discouraged"`
      - : Die vertrauende Partei wünscht keine Benutzerüberprüfung, um die Benutzerinteraktion so reibungslos wie möglich zu gestalten.

    Dieser Wert ist standardmäßig `"preferred"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
