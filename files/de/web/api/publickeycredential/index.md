---
title: PublicKeyCredential
slug: Web/API/PublicKeyCredential
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`PublicKeyCredential`**-Schnittstelle liefert Informationen über ein Paar aus öffentlichem und privatem Schlüssel, welches eine Anmeldeinformation für den Login bei einem Service bietet, indem es ein nicht-phishing-fähiges und datenpannenresistentes asymmetrisches Schlüsselpaar anstelle eines Passworts verwendet. Sie erbt von [`Credential`](/de/docs/Web/API/Credential) und ist Teil der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)-Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API).

{{InheritanceDiagram}}

> [!NOTE]
> Diese API ist auf Top-Level-Kontexte beschränkt. Die Verwendung innerhalb eines {{HTMLElement("iframe")}}-Elements hat keine Wirkung.

## Instanz-Eigenschaften

- [`PublicKeyCredential.authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) {{ReadOnlyInline}}
  - : Ein String, der den Mechanismus angibt, mit dem die WebAuthn-Implementierung zum Zeitpunkt des Abschlusses des zugehörigen [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)- oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufrufs mit dem Authenticator verbunden ist.

- [`PublicKeyCredential.id`](/de/docs/Web/API/PublicKeyCredential/id) {{ReadOnlyInline}}
  - : Von [`Credential`](/de/docs/Web/API/Credential) geerbt und überschrieben, um die {{Glossary("Base64", "base64url-Kodierung")}} von [`PublicKeyCredential.rawId`](/de/docs/Web/API/PublicKeyCredential/rawId) zu sein.

- [`PublicKeyCredential.rawId`](/de/docs/Web/API/PublicKeyCredential/rawId) {{ReadOnlyInline}}
  - : Ein {{jsxref("ArrayBuffer")}}, der die weltweit eindeutige Kennung für dieses `PublicKeyCredential` enthält. Diese Kennung kann zum Nachschlagen von Anmeldeinformationen für zukünftige Aufrufe von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) verwendet werden.
- [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) {{ReadOnlyInline}}
  - : Eine Instanz eines [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)-Objekts. Sie ist entweder vom Typ [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse), wenn das `PublicKeyCredential` das Ergebnis eines [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufrufs war, oder vom Typ [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse), wenn das `PublicKeyCredential` das Ergebnis eines [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufrufs war.
- `PublicKeyCredential.type` {{ReadOnlyInline}}
  - : Von [`Credential`](/de/docs/Web/API/Credential) geerbt. Immer auf `public-key` für `PublicKeyCredential`-Instanzen gesetzt.

## Statische Methoden

- [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das verwendet werden kann, um zu prüfen, ob bestimmte WebAuthn-Fähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) unterstützt werden.
- [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird, wenn bedingte Vermittlung verfügbar ist.
- [`PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()`](/de/docs/Web/API/PublicKeyCredential/isUserVerifyingPlatformAuthenticatorAvailable_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird, wenn ein an die Plattform gebundener Authenticator in der Lage ist, den Benutzer _zu verifizieren_.
- [`PublicKeyCredential.parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static)
  - : Praktische Methode zur Deserialisierung von servergesendeten Anmeldedaten bei der [Registrierung eines Benutzers mit Anmeldedaten](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).
- [`PublicKeyCredential.parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static)
  - : Praktische Methode zur Deserialisierung von servergesendeten Anforderungsdaten beim [Authentifizieren eines (registrierten) Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user).
- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static)
  - : Signalisiert dem Authenticator alle gültigen [Credential-IDs](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id), die der [Vertrauensstelle](https://en.wikipedia.org/wiki/Relying_party)-Server noch für einen bestimmten Benutzer hält.
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static)
  - : Signalisiert dem Authenticator, dass ein bestimmter Benutzer seine Benutzernamen und/oder Anzeigenamen aktualisiert hat.
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static)
  - : Signalisiert dem Authenticator, dass eine [Credential-ID](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) vom [Vertrauensstelle](https://en.wikipedia.org/wiki/Relying_party)-Server nicht erkannt wurde, beispielsweise weil sie gelöscht wurde.

## Instanz-Methoden

- [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults)
  - : Wenn Erweiterungen angefordert wurden, gibt diese Methode die Ergebnisse der Verarbeitung dieser Erweiterungen zurück.
- [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON)
  - : Praktische Methode zur Erstellung einer JSON-String-Darstellung eines `PublicKeyCredential` zum Senden an den Server bei der [Registrierung eines Benutzers mit Anmeldedaten](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) und [Authentifizierung eines registrierten Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user).

## Beispiele

### Erstellen einer neuen Instanz von PublicKeyCredential

Hier verwenden wir [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create), um ein neues Anmeldedatum zu generieren.

```js
const createCredentialOptions = {
  publicKey: {
    challenge: new Uint8Array([
      21, 31, 105 /* 29 more random bytes generated by the server */,
    ]),
    rp: {
      name: "Example CORP",
      id: "login.example.com",
    },
    user: {
      id: new Uint8Array(16),
      name: "canand@example.com",
      displayName: "Carina Anand",
    },
    pubKeyCredParams: [
      {
        type: "public-key",
        alg: -7,
      },
    ],
  },
};

navigator.credentials
  .create(createCredentialOptions)
  .then((newCredentialInfo) => {
    const response = newCredentialInfo.response;
    const clientExtensionsResults =
      newCredentialInfo.getClientExtensionResults();
  })
  .catch((err) => {
    console.error(err);
  });
```

### Abrufen einer vorhandenen Instanz von PublicKeyCredential

Hier holen wir ein vorhandenes Anmeldedatum von einem Authenticator ab, indem wir [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) verwenden.

```js
const requestCredentialOptions = {
  publicKey: {
    challenge: new Uint8Array([/* bytes sent from the server */]),
  },
};

navigator.credentials
  .get(requestCredentialOptions)
  .then((credentialInfoAssertion) => {
    // send assertion response back to the server
    // to proceed with the control of the credential
  })
  .catch((err) => {
    console.error(err);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die übergeordnete Schnittstelle [`Credential`](/de/docs/Web/API/Credential)
