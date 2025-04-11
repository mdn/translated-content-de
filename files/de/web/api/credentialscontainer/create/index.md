---
title: "CredentialsContainer: create() Methode"
short-title: create()
slug: Web/API/CredentialsContainer/create
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`create()`** Methode der [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer) Schnittstelle erstellt ein neues {{Glossary("credential", "Credential")}}, das gespeichert und später mithilfe der [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Methode abgerufen werden kann. Das abgerufene Credential kann dann von einer Website verwendet werden, um einen Benutzer zu authentifizieren.

Diese Methode unterstützt drei verschiedene Arten von Credentials:

- Ein Passwort-Credential, das es einem Benutzer ermöglicht, sich mit einem Passwort anzumelden.
- Ein föderiertes Credential, das es einem Benutzer ermöglicht, sich mit einem föderierten Identitätsanbieter anzumelden.
- Ein öffentliches Schlüssel-Credential, das es einem Benutzer ermöglicht, sich mit einem Authentifizierungsgerät wie einem in die Plattform integrierten biometrischen Leser oder einem abnehmbaren Hardware-Token anzumelden.

Beachten Sie, dass die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) den Typ des föderierten Credentials ersetzt.

## Syntax

```js-nolint
create()
create(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für das angeforderte neue `Credentials`-Objekt enthält. Es kann die folgenden Eigenschaften enthalten:

    - `signal` {{optional_inline}}
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objektinstanz, die es ermöglicht, einen laufenden `create()` Vorgang abzubrechen. Ein abgebrochener Vorgang kann normal abgeschlossen werden (im Allgemeinen, wenn der Abbruch nach Beendigung des Vorgangs empfangen wurde) oder mit einem `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt werden.

    Jede der folgenden Eigenschaften repräsentiert einen _Credential-Typ_, der erstellt wird. Nur eine von ihnen muss angegeben werden:

    - `federated` {{optional_inline}}
      - : Ein [`FederatedCredentialInit`](/de/docs/Web/API/FederatedCredentialInit) Objekt, das Anforderungen enthält, um ein föderiertes Identitätsanbieter-Credential zu erstellen.
    - `password` {{optional_inline}}
      - : Ein [`PasswordCredentialInit`](/de/docs/Web/API/PasswordCredentialInit) Objekt, das Anforderungen enthält, um ein Passwort-Credential zu erstellen.
    - `publicKey` {{optional_inline}}

      - : Ein [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions) Objekt, das Anforderungen für das Erstellen eines öffentlichen Schlüssel-Credentials enthält. Verursacht, dass der `create()` Aufruf den User-Agent auffordert, neue Credentials über ein Authentifizierungsgerät zu erstellen – entweder um ein neues Konto zu registrieren oder um ein neues asymmetrisches Schlüsselpaar mit einem bestehenden Konto zu verknüpfen.

        > [!NOTE]
        > Die Verwendung von `create()` mit dem `publicKey` Parameter kann durch eine {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy), die auf Ihrem Server festgelegt ist, blockiert werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem der folgenden auflöst:

- Ein [`FederatedCredential`](/de/docs/Web/API/FederatedCredential), wenn der Credential-Typ `federated` war.
- Ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential), wenn der Credential-Typ `password` war.
- Ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), wenn der Credential-Typ `publicKey` war.

Wenn kein Credential-Objekt erstellt werden kann, löst das Versprechen mit `null` auf.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Im Falle eines [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Erstellungsgesuchs wurden `id`, `origin` oder `password` nicht bereitgestellt (leer).
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Mögliche Ursachen sind:
    - Die Nutzung wurde durch eine {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.
    - Die Funktion wird über Herkunftsgrenzen hinweg aufgerufen, aber das `allow` Attribut des `<iframe>` setzt keine geeignete {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} Richtlinie.
    - Die Funktion wird über Herkunftsgrenzen hinweg aufgerufen und das `<iframe>` verfügt nicht über eine {{Glossary("transient_activation", "flüchtige Aktivierung")}}.
    - Es wird versucht, ein [erkennbares Credential](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) ([`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) ist in der `create()` Aufrufsoption auf `required` gesetzt), zu erstellen, aber der Benutzer hat keinen Sicherheitsschlüssel, der erkennbare Credentials unterstützt, und bricht den Vorgang ab.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Vorgang wurde abgebrochen.

## Beispiele

### Erstellen eines Passwort-Credentials

Dieses Beispiel erstellt ein Passwort-Credential aus einem [`PasswordCredentialInit`](/de/docs/Web/API/PasswordCredentialInit) Objekt.

```js
const credInit = {
  id: "1234",
  name: "Serpentina",
  origin: "https://example.org",
  password: "the last visible dog",
};

const makeCredential = document.querySelector("#make-credential");

makeCredential.addEventListener("click", async () => {
  const cred = await navigator.credentials.create({
    password: credInit,
  });
  console.log(cred.name);
  // Serpentina
  console.log(cred.password);
  // the last visible dog
});
```

### Erstellen eines föderierten Credentials

Dieses Beispiel erstellt ein föderiertes Credential aus einem [`FederatedCredentialInit`](/de/docs/Web/API/FederatedCredentialInit) Objekt.

```js
const credInit = {
  id: "1234",
  name: "Serpentina",
  origin: "https://example.org",
  protocol: "openidconnect",
  provider: "https://provider.example.org",
};

const makeCredential = document.querySelector("#make-credential");

makeCredential.addEventListener("click", async () => {
  const cred = await navigator.credentials.create({
    federated: credInit,
  });
  console.log(cred.name);
  console.log(cred.provider);
});
```

### Erstellen eines öffentlichen Schlüssel-Credentials

Dieses Beispiel erstellt ein öffentliches Schlüssel-Credential aus einem [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions) Objekt.

```js
const publicKey = {
  challenge: challengeFromServer,
  rp: { id: "acme.com", name: "ACME Corporation" },
  user: {
    id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
    name: "jamiedoe",
    displayName: "Jamie Doe",
  },
  pubKeyCredParams: [{ type: "public-key", alg: -7 }],
};

const publicKeyCredential = await navigator.credentials.create({ publicKey });
```

Der `create()` Aufruf liefert, falls erfolgreich, ein Versprechen, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objektinstanz auflöst, das ein öffentliches Schlüssel-Credential darstellt, das später verwendet werden kann, um einen Benutzer über einen WebAuthn [`get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf zu authentifizieren. Eigenschaften von [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) enthalten ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich Authentifikator-Daten, öffentlichen Schlüssel, Transportmechanismen und mehr.

```js
navigator.credentials.create({ publicKey }).then((publicKeyCredential) => {
  const response = publicKeyCredential.response;

  // Access attestationObject ArrayBuffer
  const attestationObj = response.attestationObject;

  // Access client JSON
  const clientJSON = response.clientDataJSON;

  // Return authenticator data ArrayBuffer
  const authenticatorData = response.getAuthenticatorData();

  // Return public key ArrayBuffer
  const pk = response.getPublicKey();

  // Return public key algorithm identifier
  const pkAlgo = response.getPublicKeyAlgorithm();

  // Return permissible transports array
  const transports = response.getTransports();
});
```

Einige dieser Daten müssen auf dem Server für zukünftige Authentifizierungsvorgänge gegen dieses Credential gespeichert werden - zum Beispiel der öffentliche Schlüssel, der verwendete Algorithmus und die zulässigen Transporte.

> [!NOTE]
> Siehe [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) für weitere Informationen darüber, wie der gesamte Ablauf funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
