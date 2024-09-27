---
title: PublicKeyCredential
slug: Web/API/PublicKeyCredential
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredential`**-Interface bietet Informationen über ein öffentliches/privates Schlüsselpaar, das als Anmeldedaten für den Login bei einem Dienst dient, indem es ein un-phishingbares und datenschutzverletzungsresistentes asymmetrisches Schlüsselpaar anstelle eines Passworts verwendet. Es erbt von [`Credential`](/de/docs/Web/API/Credential) und ist Teil der Erweiterung der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zur [Credential Management API](/de/docs/Web/API/Credential_Management_API).

{{InheritanceDiagram}}

> [!NOTE]
> Diese API ist auf Top-Level-Kontexte beschränkt. Die Verwendung innerhalb eines {{HTMLElement("iframe")}}-Elements hat keine Wirkung.

## Instanz-Eigenschaften

- [`PublicKeyCredential.authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) {{ReadOnlyInline}}

  - : Ein String, der den Mechanismus angibt, über den die WebAuthn-Implementierung zum Zeitpunkt des Abschlusses der zugehörigen [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufrufs mit dem Authentifikator verbunden ist.

- [`PublicKeyCredential.id`](/de/docs/Web/API/PublicKeyCredential/id) {{ReadOnlyInline}}

  - : Geerbt von [`Credential`](/de/docs/Web/API/Credential) und überschrieben, um das [base64url-Encoding](/de/docs/Glossary/Base64) von [`PublicKeyCredential.rawId`](/de/docs/Web/API/PublicKeyCredential/rawId) zu sein.

- [`PublicKeyCredential.rawId`](/de/docs/Web/API/PublicKeyCredential/rawId) {{ReadOnlyInline}}
  - : Ein {{jsxref("ArrayBuffer")}}, das die global eindeutige Kennung für dieses `PublicKeyCredential` enthält. Diese Kennung kann verwendet werden, um Anmeldeinformationen für zukünftige Aufrufe von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) abzurufen.
- [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) {{ReadOnlyInline}}
  - : Eine Instanz eines [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)-Objekts. Es ist entweder vom Typ [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse), wenn das `PublicKeyCredential` das Ergebnis eines [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufrufs war, oder vom Typ [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse), wenn das `PublicKeyCredential` das Ergebnis eines [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufrufs war.
- `PublicKeyCredential.type` {{ReadOnlyInline}}
  - : Geerbt von [`Credential`](/de/docs/Web/API/Credential). Immer auf `public-key` für `PublicKeyCredential`-Instanzen gesetzt.

## Statische Methoden

- [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich auf `true` auflöst, wenn eine bedingte Mediation verfügbar ist.
- [`PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()`](/de/docs/Web/API/PublicKeyCredential/isUserVerifyingPlatformAuthenticatorAvailable_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich auf `true` auflöst, wenn ein an die Plattform gebundener Authentifikator in der Lage ist, den Benutzer zu _verifizieren_.
- [`PublicKeyCredential.parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static)
  - : Komfortmethode zum Deserialisieren von serverseitig gesendeten Anmeldedatenregistrierungsdaten bei der [Registrierung eines Benutzers mit Anmeldedaten](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).
- [`PublicKeyCredential.parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static)
  - : Komfortmethode zum Deserialisieren von serverseitig gesendeten Anmeldeanforderungsdaten beim [Authentifizieren eines (registrierten) Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user).

## Instanz-Methoden

- [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults)
  - : Wenn Erweiterungen angefordert wurden, gibt diese Methode die Ergebnisse der Verarbeitung dieser Erweiterungen zurück.
- [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON)
  - : Komfortmethode zum Erstellen einer JSON-String-Repräsentation eines `PublicKeyCredential` zum Senden an den Server bei der [Registrierung eines Benutzers mit Anmeldedaten](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) und [Authentifizierung eines registrierten Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user).

## Beispiele

### Erstellen einer neuen Instanz von PublicKeyCredential

Hier verwenden wir [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create), um eine neue Anmeldedaten zu generieren.

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

Hier holen wir eine vorhandene Anmeldedaten von einem Authentifikator ab, indem wir [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) verwenden.

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

- Das übergeordnete Interface [`Credential`](/de/docs/Web/API/Credential)
