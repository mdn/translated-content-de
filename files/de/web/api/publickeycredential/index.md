---
title: PublicKeyCredential
slug: Web/API/PublicKeyCredential
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredential`**-Interface bietet Informationen über ein öffentliches/privates Schlüsselpaar, das als Anmeldedaten für einen Dienst dient, indem ein nicht-phishbares und Datenpannen-resistentes asymmetrisches Schlüsselpaar anstelle eines Passworts verwendet wird. Es erbt von {{domxref("Credential")}} und ist Teil der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)-Erweiterung für die [Credential Management API](/de/docs/Web/API/Credential_Management_API).

{{InheritanceDiagram}}

> [!NOTE]
> Diese API ist auf Top-Level-Kontexte beschränkt. Die Verwendung innerhalb eines {{HTMLElement("iframe")}}-Elements hat keine Wirkung.

## Instanz-Eigenschaften

- {{domxref("PublicKeyCredential.authenticatorAttachment")}} {{ReadOnlyInline}}

  - : Ein String, der den Mechanismus angibt, über den die WebAuthn-Implementierung zum Zeitpunkt des Abschlusses des zugehörigen Aufrufs von {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} oder {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} an den Authenticator gebunden ist.

- {{domxref("PublicKeyCredential.id")}} {{ReadOnlyInline}}

  - : Geerbt von {{domxref("Credential")}} und überschrieben, um die [base64url Codierung](/de/docs/Glossary/Base64) von {{domxref("PublicKeyCredential.rawId")}} zu sein.

- {{domxref("PublicKeyCredential.rawId")}} {{ReadOnlyInline}}
  - : Ein {{jsxref("ArrayBuffer")}}, der die global eindeutige Kennung für dieses `PublicKeyCredential` enthält. Diese Kennung kann verwendet werden, um Anmeldedaten für zukünftige Aufrufe von {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} nachzuschlagen.
- {{domxref("PublicKeyCredential.response")}} {{ReadOnlyInline}}
  - : Eine Instanz eines {{domxref("AuthenticatorResponse")}}-Objekts. Es ist entweder vom Typ {{domxref("AuthenticatorAttestationResponse")}}, wenn das `PublicKeyCredential` das Ergebnis eines Aufrufs von {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} war, oder vom Typ {{domxref("AuthenticatorAssertionResponse")}}, wenn das `PublicKeyCredential` das Ergebnis eines Aufrufs von {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} war.
- `PublicKeyCredential.type` {{ReadOnlyInline}}
  - : Geerbt von {{domxref("Credential")}}. Immer auf `public-key` für `PublicKeyCredential`-Instanzen gesetzt.

## Statische Methoden

- {{domxref("PublicKeyCredential.isConditionalMediationAvailable_static", "PublicKeyCredential.isConditionalMediationAvailable()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich zu `true` auflöst, wenn bedingte Vermittlung verfügbar ist.
- {{domxref("PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable_static", "PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich zu `true` auflöst, wenn ein an die Plattform gebundener Authenticator in der Lage ist, den Benutzer zu _verifizieren_.
- {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "PublicKeyCredential.parseCreationOptionsFromJSON()")}}
  - : Komfortmethode zur Deserialisierung von serverseitig gesendeten Registrierungsdaten beim [Registrieren eines Benutzers mit Anmeldedaten](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).
- {{domxref("PublicKeyCredential.parseRequestOptionsFromJSON_static", "PublicKeyCredential.parseRequestOptionsFromJSON()")}}
  - : Komfortmethode zur Deserialisierung von serverseitig gesendeten Anforderungsdaten bei der [Authentifizierung eines (registrierten) Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user).

## Instanz-Methoden

- {{domxref("PublicKeyCredential.getClientExtensionResults()")}}
  - : Wenn Erweiterungen angefordert wurden, gibt diese Methode die Ergebnisse der Verarbeitung dieser Erweiterungen zurück.
- {{domxref("PublicKeyCredential.toJSON()")}}
  - : Komfortmethode zur Erstellung einer JSON-String-Darstellung eines `PublicKeyCredential` zum Senden an den Server, wenn [ein Benutzer mit Anmeldedaten registriert](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) und [ein registrierter Benutzer authentifiziert wird](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user).

## Beispiele

### Erstellen einer neuen Instanz von PublicKeyCredential

Hier verwenden wir {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}}, um ein neues Anmeldedaten zu generieren.

```js
const createCredentialOptions = {
  publicKey: {
    challenge: new Uint8Array([
      21, 31, 105 /* 29 weitere zufällige Bytes, die vom Server generiert werden */,
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

Hier holen wir mit {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} ein vorhandenes Anmeldedatum von einem Authenticator ab.

```js
const requestCredentialOptions = {
  publicKey: {
    challenge: new Uint8Array([
      /* vom Server gesendete Bytes */
    ]),
  },
};

navigator.credentials
  .get(requestCredentialOptions)
  .then((credentialInfoAssertion) => {
    // sendet die Bestätigungsantwort zurück an den Server
    // um die Kontrolle des Anmeldedatums fortzusetzen
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

- Das übergeordnete Interface {{domxref("Credential")}}
