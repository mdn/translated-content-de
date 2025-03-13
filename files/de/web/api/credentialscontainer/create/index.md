---
title: "CredentialsContainer: `create()` Methode"
short-title: create()
slug: Web/API/CredentialsContainer/create
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`create()`** Methode der [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer) Schnittstelle erstellt ein neues {{Glossary("credential", "Credential")}}, welches dann gespeichert und später mithilfe der [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Methode abgerufen werden kann. Das abgerufene Credential kann dann von einer Website verwendet werden, um einen Benutzer zu authentifizieren.

Diese Methode unterstützt drei verschiedene Arten von Credentials:

- Ein Passwort-Credential, das es einem Benutzer ermöglicht, sich mit einem Passwort anzumelden.
- Ein föderiertes Credential, das es einem Benutzer ermöglicht, sich über einen föderierten Identitätsanbieter anzumelden.
- Ein öffentlicher Schlüssel-Credential, das es einem Benutzer ermöglicht, sich mit einem Authenticator wie einem in die Plattform integrierten biometrischen Leser oder einem abnehmbaren Hardware-Token anzumelden.

Beachten Sie, dass die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) den föderierten Credential-Typ ablöst.

## Syntax

```js-nolint
create()
create(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für das angeforderte neue `Credentials`-Objekt enthält. Es kann die folgenden Eigenschaften enthalten:

    - `signal` {{optional_inline}}
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekts, die es ermöglicht, einen laufenden `create()`-Vorgang abzubrechen. Ein abgebrochener Vorgang kann normal abgeschlossen werden (normalerweise, wenn der Abbruch nach Abschluss des Vorgangs empfangen wurde) oder mit einem `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt werden.

    Jede der folgenden Eigenschaften repräsentiert einen _Credential-Typ_, der erstellt wird. Einer und nur einer von ihnen muss angegeben werden:

    - `federated` {{optional_inline}}
      - : Ein [`FederatedCredentialInit`](/de/docs/Web/API/FederatedCredentialInit) Objekt, das Anforderungen für die Erstellung eines föderierten Identitätsanbieter-Credentials enthält.
    - `password` {{optional_inline}}
      - : Ein [`PasswordCredentialInit`](/de/docs/Web/API/PasswordCredentialInit) Objekt, das Anforderungen für die Erstellung eines Passwort-Credentials enthält.
    - `publicKey` {{optional_inline}}

      - : Ein [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions) Objekt, das Anforderungen für die Erstellung eines öffentlichen Schlüssel-Credentials enthält. Bewirkt, dass der `create()`-Aufruf den Benutzagenten auffordert, neue Credentials über einen Authenticator zu erstellen — entweder zum Registrieren eines neuen Kontos oder zum Verknüpfen eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.

        > [!NOTE]
        > Die Verwendung von `create()` mit dem Parameter `publicKey` kann durch eine auf Ihrem Server gesetzte {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem der folgenden Objekte aufgelöst wird:

- Ein [`FederatedCredential`](/de/docs/Web/API/FederatedCredential), falls der Credential-Typ `federated` war.
- Ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential), falls der Credential-Typ `password` war.
- Ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), falls der Credential-Typ `publicKey` war.

Falls kein Credential-Objekt erstellt werden kann, wird das Versprechen mit `null` aufgelöst.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Im Fall einer [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Erstellungsanfrage wurden `id`, `origin` oder `password` nicht bereitgestellt (leer).
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Mögliche Ursachen umfassen:
    - Die Nutzung wurde durch eine {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.
    - Die Funktion wird über Ursprünge hinweg aufgerufen, aber das Attribut [`allow`](/de/docs/Web/HTML/Element/iframe#allow) des iframes setzt keine geeignete {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} Richtlinie.
    - Die Funktion wird über Ursprünge hinweg aufgerufen und das `<iframe>` hat keine {{Glossary("transient_activation", "transienziente Aktivierung")}}.
    - Es wird versucht, ein [entdeckbares Credential](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu erstellen ([`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) ist auf `required` im `create()`-Aufruf der [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions) Option gesetzt), aber der Benutzer hat keinen Sicherheitsschlüssel, der entdeckbare Credentials unterstützt, und bricht die Operation ab.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Vorgang wurde abgebrochen.

## Beispiele

### Erstellung eines Passwort-Credentials

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

### Erstellung eines föderierten Credentials

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

### Erstellung eines öffentlichen Schlüssel-Credentials

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

Der `create()`-Aufruf gibt, falls erfolgreich, ein Versprechen zurück, das mit einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objektinstanz aufgelöst wird, die ein öffentliches Schlüssel-Credential darstellt, das später verwendet werden kann, um einen Benutzer über einen WebAuthn [`get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich der Authenticator-Daten, des öffentlichen Schlüssels, der Transportmechanismen und mehr.

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

Einige dieser Daten müssen auf dem Server für zukünftige Authentifizierungsvorgänge gegen dieses Credential gespeichert werden — zum Beispiel der öffentliche Schlüssel, der verwendete Algorithmus und die zulässigen Transporte.

> [!NOTE]
> Weitere Informationen darüber, wie der gesamte Ablauf funktioniert, finden Sie unter [Erstellung eines Schlüsselpaares und Registrierung eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
