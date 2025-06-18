---
title: PublicKeyCredential
slug: Web/API/PublicKeyCredential
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`PublicKeyCredential`** Schnittstelle bietet Informationen über ein Paar aus öffentlichem Schlüssel und privatem Schlüssel, welches ein Anmelde-Datenpaar für die Anmeldung bei einem Dienst mit einem manipulationssicheren und datenschutzverletzungsresistenten asymmetrischen Schlüsselpaar statt eines Passworts darstellt. Sie erbt von [`Credential`](/de/docs/Web/API/Credential) und ist Teil der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)-Erweiterung für die [Credential Management API](/de/docs/Web/API/Credential_Management_API).

{{InheritanceDiagram}}

> [!NOTE]
> Diese API ist auf Top-Level-Kontexte beschränkt. Die Verwendung innerhalb eines {{HTMLElement("iframe")}}-Elements hat keine Wirkung.

## Instanz-Eigenschaften

- [`PublicKeyCredential.authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) {{ReadOnlyInline}}

  - : Ein String, der den Mechanismus angibt, mit dem die WebAuthn-Implementierung zum Zeitpunkt des Abschlusses des zugehörigen Aufrufs von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit dem Authentifikator verbunden ist.

- [`PublicKeyCredential.id`](/de/docs/Web/API/PublicKeyCredential/id) {{ReadOnlyInline}}

  - : Geerbt von [`Credential`](/de/docs/Web/API/Credential) und überschrieben, um die {{Glossary("Base64", "base64url-Kodierung")}} von [`PublicKeyCredential.rawId`](/de/docs/Web/API/PublicKeyCredential/rawId) zu sein.

- [`PublicKeyCredential.rawId`](/de/docs/Web/API/PublicKeyCredential/rawId) {{ReadOnlyInline}}
  - : Ein {{jsxref("ArrayBuffer")}}, der den global eindeutigen Identifikator für dieses `PublicKeyCredential` enthält. Dieser Identifikator kann verwendet werden, um Anmeldeinformationen für zukünftige Aufrufe von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) nachzuschlagen.
- [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) {{ReadOnlyInline}}
  - : Eine Instanz eines [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)-Objekts. Es ist entweder vom Typ [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse), wenn das `PublicKeyCredential` das Ergebnis eines [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufrufs war, oder vom Typ [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse), wenn das `PublicKeyCredential` das Ergebnis eines [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufrufs war.
- `PublicKeyCredential.type` {{ReadOnlyInline}}
  - : Geerbt von [`Credential`](/de/docs/Web/API/Credential). Immer auf `public-key` für `PublicKeyCredential`-Instanzen gesetzt.

## Statische Methoden

- [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das verwendet werden kann, um zu überprüfen, ob bestimmte WebAuthn-Funktionen und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) unterstützt werden.
- [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird, wenn eine bedingte Vermittlung verfügbar ist.
- [`PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()`](/de/docs/Web/API/PublicKeyCredential/isUserVerifyingPlatformAuthenticatorAvailable_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird, wenn ein Authentifikator, der an die Plattform gebunden ist, in der Lage ist, den Benutzer _zu verifizieren_.
- [`PublicKeyCredential.parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static)
  - : Praktische Methode zur Deserialisierung von servergesendeten Anmeldedaten beim [Registrieren eines Benutzers mit Anmeldedaten](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).
- [`PublicKeyCredential.parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static)
  - : Praktische Methode zur Deserialisierung von servergesendeten Anfragedaten, wenn ein (registrierter) Benutzer [authentifiziert](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) wird.
- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static)
  - : Gibt dem Authentifikator alle gültigen [Anmeldeinformationen-IDs](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) bekannt, die der [Anbieter](https://en.wikipedia.org/wiki/Relying_party) Server immer noch für einen bestimmten Benutzer bereithält.
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static)
  - : Gibt dem Authentifikator bekannt, dass ein bestimmter Benutzer seinen Benutzernamen und/oder seinen Anzeigenamen aktualisiert hat.
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static)
  - : Gibt dem Authentifikator bekannt, dass eine [Anmeldeinformationen-ID](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) durch den [Anbieter](https://en.wikipedia.org/wiki/Relying_party)-Server nicht erkannt wurde, zum Beispiel, weil sie gelöscht wurde.

## Instanz-Methoden

- [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults)
  - : Wenn Erweiterungen angefordert wurden, gibt diese Methode die Ergebnisse der Verarbeitung dieser Erweiterungen zurück.
- [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON)
  - : Praktische Methode zur Erstellung einer JSON-String-Darstellung eines `PublicKeyCredential` zum Senden an den Server, wenn ein Benutzer mit Anmeldedaten [registriert](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) und ein registrierter Benutzer [authentifiziert](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) wird.

## Beispiele

### Erstellen einer neuen Instanz von PublicKeyCredential

Hier verwenden wir [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create), um eine neue Anmeldeinformation zu generieren.

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

### Abrufen einer bestehenden Instanz von PublicKeyCredential

Hier holen wir eine bestehende Anmeldeinformation von einem Authentifikator ab, indem wir [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) verwenden.

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

- Die übergeordnete Schnittstelle [`Credential`](/de/docs/Web/API/Credential)
