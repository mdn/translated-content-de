---
title: PublicKeyCredential
slug: Web/API/PublicKeyCredential
l10n:
  sourceCommit: 1e98f1356a5eda11db10cd9b08dc52cce868ebff
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`PublicKeyCredential`**-Schnittstelle bietet Informationen über ein öffentliches/privates Schlüsselpaar, das als Berechtigungsnachweis für die Anmeldung bei einem Dienst mittels eines nicht-phishbaren und datenpannenresistenten asymmetrischen Schlüsselpaares anstelle eines Passworts dient. Sie erbt von [`Credential`](/de/docs/Web/API/Credential) und ist Teil der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)-Erweiterung für die [Credential Management API](/de/docs/Web/API/Credential_Management_API).

{{InheritanceDiagram}}

> [!NOTE]
> Diese API ist auf kontextübergreifende Nutzung beschränkt. Die Verwendung innerhalb eines {{HTMLElement("iframe")}}-Elements hat keinen Effekt.

## Instanz-Eigenschaften

- [`PublicKeyCredential.authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) {{ReadOnlyInline}}

  - : Ein String, der den Mechanismus angibt, mit dem die WebAuthn-Implementierung zum Zeitpunkt des Abschlusses des zugehörigen [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufrufs am Authentifikator angehängt ist.

- [`PublicKeyCredential.id`](/de/docs/Web/API/PublicKeyCredential/id) {{ReadOnlyInline}}

  - : Von [`Credential`](/de/docs/Web/API/Credential) geerbt und überschrieben, um die {{Glossary("Base64", "base64url Kodierung")}} von [`PublicKeyCredential.rawId`](/de/docs/Web/API/PublicKeyCredential/rawId) darzustellen.

- [`PublicKeyCredential.rawId`](/de/docs/Web/API/PublicKeyCredential/rawId) {{ReadOnlyInline}}
  - : Ein {{jsxref("ArrayBuffer")}}, der die global eindeutige Kennung für diese `PublicKeyCredential` enthält. Diese Kennung kann verwendet werden, um Berechtigungsnachweise für zukünftige Aufrufe von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) abzurufen.
- [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) {{ReadOnlyInline}}
  - : Eine Instanz eines [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)-Objekts. Es handelt sich entweder um einen [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Typ, wenn das `PublicKeyCredential` das Ergebnis eines [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufrufs war, oder um einen [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Typ, wenn das `PublicKeyCredential` das Ergebnis eines [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufrufs war.
- `PublicKeyCredential.type` {{ReadOnlyInline}}
  - : Von [`Credential`](/de/docs/Web/API/Credential) geerbt. Für `PublicKeyCredential`-Instanzen immer auf `public-key` gesetzt.

## Statische Methoden

- [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das verwendet werden kann, um zu überprüfen, ob bestimmte WebAuthn-Fähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) unterstützt werden.
- [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird, wenn bedingte Vermittlung verfügbar ist.
- [`PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()`](/de/docs/Web/API/PublicKeyCredential/isUserVerifyingPlatformAuthenticatorAvailable_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird, wenn ein an die Plattform gebundener Authentifikator in der Lage ist, den Benutzer zu _verifizieren_.
- [`PublicKeyCredential.parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static)
  - : Komfortmethode zur Deserialisierung von servergesendeten Registrierungsdaten für Berechtigungsnachweise bei der [Registrierung eines Benutzers mit Anmeldedaten](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).
- [`PublicKeyCredential.parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static)
  - : Komfortmethode zur Deserialisierung von servergesendeten Anforderungsdaten für Berechtigungsnachweise bei der [Authentifizierung eines (registrierten) Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user).
- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static) {{experimental_inline}}
  - : Meldet dem Authentifikator alle gültigen [credential IDs](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id), die der [Relying Party](https://en.wikipedia.org/wiki/Relying_party)-Server für einen bestimmten Benutzer weiterhin hält.
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static) {{experimental_inline}}
  - : Meldet dem Authentifikator, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeigenamen aktualisiert hat.
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static) {{experimental_inline}}
  - : Meldet dem Authentifikator, dass eine [credential ID](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) vom [Relying Party](https://en.wikipedia.org/wiki/Relying_party)-Server nicht erkannt wurde, beispielsweise weil sie gelöscht wurde.

## Instanzmethoden

- [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults)
  - : Falls Erweiterungen angefordert wurden, gibt diese Methode die Ergebnisse der Verarbeitung dieser Erweiterungen zurück.
- [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON)
  - : Komfortmethode zum Erstellen einer JSON-String-Repräsentation eines `PublicKeyCredential` zur Übermittlung an den Server bei der [Registrierung eines Benutzers mit Anmeldedaten](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) und [Authentifizierung eines registrierten Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user).

## Beispiele

### Erstellen einer neuen Instanz von PublicKeyCredential

Hier verwenden wir [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create), um einen neuen Berechtigungsnachweis zu erzeugen.

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

Hier holen wir einen vorhandenen Berechtigungsnachweis von einem Authentifikator, indem wir [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) verwenden.

```js
const requestCredentialOptions = {
  publicKey: {
    challenge: new Uint8Array([
      /* bytes sent from the server */
    ]),
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

- Die Elternschnittstelle [`Credential`](/de/docs/Web/API/Credential)
