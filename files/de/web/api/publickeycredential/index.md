---
title: PublicKeyCredential
slug: Web/API/PublicKeyCredential
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die Schnittstelle **`PublicKeyCredential`** stellt Informationen über ein öffentliches und privates Schlüsselpaar bereit. Dieses dient als Anmeldedaten für die Anmeldung bei einem Dienst und verwendet anstelle eines Passworts ein asymmetrisches Schlüsselpaar, das gegen Phishing und Datenlecks resistent ist. Die Schnittstelle erbt von [`Credential`](/de/docs/Web/API/Credential) und ist Teil der Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API) durch die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API).

{{InheritanceDiagram}}

> [!NOTE]
> Diese API ist auf Top-Level-Kontexte beschränkt. Die Verwendung innerhalb eines {{HTMLElement("iframe")}}-Elements hat keine Wirkung.

## Instanzeigenschaften

- [`PublicKeyCredential.authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) {{ReadOnlyInline}}
  - : Ein String, der angibt, auf welche Weise die WebAuthn-Implementierung mit dem Authenticator verbunden ist, wenn der zugehörige Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) abgeschlossen wird.

- [`PublicKeyCredential.id`](/de/docs/Web/API/PublicKeyCredential/id) {{ReadOnlyInline}}
  - : Von [`Credential`](/de/docs/Web/API/Credential) geerbt und so überschrieben, dass der Wert die {{Glossary("Base64", "Base64url-Kodierung")}} von [`PublicKeyCredential.rawId`](/de/docs/Web/API/PublicKeyCredential/rawId) ist.

- [`PublicKeyCredential.rawId`](/de/docs/Web/API/PublicKeyCredential/rawId) {{ReadOnlyInline}}
  - : Ein {{jsxref("ArrayBuffer")}}, der den global eindeutigen Bezeichner dieses `PublicKeyCredential` enthält. Dieser Bezeichner kann verwendet werden, um Anmeldedaten für zukünftige Aufrufe von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) zu finden.
- [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) {{ReadOnlyInline}}
  - : Eine Instanz eines [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)-Objekts. Sie ist vom Typ [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse), wenn das `PublicKeyCredential` das Ergebnis eines Aufrufs von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) war, oder vom Typ [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse), wenn es das Ergebnis eines Aufrufs von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) war.
- `PublicKeyCredential.type` {{ReadOnlyInline}}
  - : Von [`Credential`](/de/docs/Web/API/Credential) geerbt. Bei `PublicKeyCredential`-Instanzen immer auf `public-key` gesetzt.

## Statische Methoden

- [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static)
  - : Gibt eine {{jsxref("Promise")}} zurück, die mit einem Objekt erfüllt wird, mit dem sich prüfen lässt, ob bestimmte WebAuthn-Funktionen und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) unterstützt werden.
- [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static)
  - : Gibt eine {{jsxref("Promise")}} zurück, die mit `true` erfüllt wird, wenn bedingte Vermittlung verfügbar ist.
- [`PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()`](/de/docs/Web/API/PublicKeyCredential/isUserVerifyingPlatformAuthenticatorAvailable_static)
  - : Gibt eine {{jsxref("Promise")}} zurück, die mit `true` erfüllt wird, wenn ein an die Plattform gebundener Authenticator den Benutzer _verifizieren_ kann.
- [`PublicKeyCredential.parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static)
  - : Hilfsmethode zum Deserialisieren der vom Server gesendeten Daten für die Registrierung von Anmeldedaten, wenn [ein Benutzer mit Anmeldedaten registriert wird](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).
- [`PublicKeyCredential.parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static)
  - : Hilfsmethode zum Deserialisieren der vom Server gesendeten Daten für die Anforderung von Anmeldedaten, wenn [ein (registrierter) Benutzer authentifiziert wird](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user).
- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static)
  - : Übermittelt dem Authenticator alle gültigen [Anmeldedaten-IDs](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id), die der Server der [Relying Party](https://en.wikipedia.org/wiki/Relying_party) noch für einen bestimmten Benutzer gespeichert hat.
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static)
  - : Teilt dem Authenticator mit, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeigenamen aktualisiert hat.
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static)
  - : Teilt dem Authenticator mit, dass der Server der [Relying Party](https://en.wikipedia.org/wiki/Relying_party) eine [Anmeldedaten-ID](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) nicht erkannt hat, beispielsweise weil sie gelöscht wurde.

## Instanzmethoden

- [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults)
  - : Wenn Erweiterungen angefordert wurden, gibt diese Methode die Ergebnisse ihrer Verarbeitung zurück.
- [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON)
  - : Gibt ein einfaches, JSON-serialisierbares Objekt zurück, das das `PublicKeyCredential`-Objekt repräsentiert. Wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beispiele

### Eine neue Instanz von PublicKeyCredential erstellen

Hier verwenden wir [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create), um neue Anmeldedaten zu erzeugen.

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

### Eine vorhandene Instanz von PublicKeyCredential abrufen

Hier rufen wir mit [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) vorhandene Anmeldedaten von einem Authenticator ab.

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
