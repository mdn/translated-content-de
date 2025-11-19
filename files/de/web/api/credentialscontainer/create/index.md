---
title: "CredentialsContainer: create()-Methode"
short-title: create()
slug: Web/API/CredentialsContainer/create
l10n:
  sourceCommit: 662d8cb5f7f95378325a85ab5382adc130666069
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`create()`**-Methode des [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Interfaces erstellt ein neues {{Glossary("credential", "Credential")}}, das dann gespeichert und später mit der [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Methode abgerufen werden kann. Das abgerufene Credential kann dann von einer Website verwendet werden, um einen Benutzer zu authentifizieren.

Diese Methode unterstützt drei verschiedene Arten von Credentials:

- Ein Passwort-Credential, das es einem Benutzer ermöglicht, sich mit einem Passwort anzumelden.
- Ein föderiertes Credential, das es einem Benutzer ermöglicht, sich mit einem föderierten Identitätsanbieter anzumelden.
- Ein Public-Key-Credential, das es einem Benutzer ermöglicht, sich mit einem Authenticator wie einem in die Plattform integrierten biometrischen Leser oder einem abnehmbaren Hardware-Token anzumelden.

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
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts, die das Abbrechen eines laufenden `create()`-Vorgangs ermöglicht. Ein abgebrochener Vorgang kann normal abgeschlossen werden (in der Regel, wenn der Abbruch nach Abschluss des Vorgangs empfangen wurde) oder mit einem `AbortError`-[`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

    Jede der folgenden Eigenschaften repräsentiert einen zu erstellenden _Credential-Typ_. Es muss genau einer der Typen angegeben werden:
    - `federated` {{optional_inline}}
      - : Ein [`FederatedCredentialInit`](/de/docs/Web/API/FederatedCredentialInit)-Objekt, das Anforderungen zum Erstellen eines Credential für einen föderierten Identitätsanbieter enthält.
    - `password` {{optional_inline}}
      - : Ein [`PasswordCredentialInit`](/de/docs/Web/API/PasswordCredentialInit)-Objekt, das Anforderungen zum Erstellen eines Passwort-Credentials enthält.
    - `publicKey` {{optional_inline}}
      - : Ein [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions)-Objekt, das Anforderungen zum Erstellen eines Public-Key-Credentials enthält. Veranlasst den `create()`-Aufruf, dass der User-Agent neue Credentials über einen Authenticator erstellt – entweder zum Registrieren eines neuen Kontos oder zum Verknüpfen eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.

        > [!NOTE]
        > Die Verwendung von `create()` mit dem `publicKey`-Parameter kann durch eine von Ihrem Server festgelegte {{HTTPHeader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, der sich mit einem der folgenden Credentials auflöst:

- Ein [`FederatedCredential`](/de/docs/Web/API/FederatedCredential), wenn der Credential-Typ `federated` war.
- Ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential), wenn der Credential-Typ `password` war.
- Ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), wenn der Credential-Typ `publicKey` war.

Falls kein Credential-Objekt erstellt werden kann, löst sich das Promise mit `null` auf.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Im Fall eines [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Erstellungsantrags wurden `id`, `origin` oder `password` nicht bereitgestellt (leer).
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Mögliche Ursachen sind:
    - Die Nutzung wurde durch eine {{HTTPHeader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.
    - Die Funktion wird cross-origin aufgerufen, aber das `allow`-Attribut des `<iframe>` setzt keine passende {{HTTPHeader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}-Policy.
    - Die Funktion wird cross-origin aufgerufen und das `<iframe>` hat keine {{Glossary("transient_activation", "transient activation")}}.
    - Es wird versucht, ein [discoverable credential](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu erstellen ([`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) ist auf `required` im `create()`-Aufruf des [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions)-Options gesetzt), aber der Benutzer hat keinen Sicherheitsschlüssel, der discoverable credentials unterstützt, und bricht den Vorgang ab.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Vorgang wurde abgebrochen.

## Beispiele

### Erstellen eines Passwort-Credentials

Dieses Beispiel erstellt ein Passwort-Credential aus einem [`PasswordCredentialInit`](/de/docs/Web/API/PasswordCredentialInit)-Objekt.

```js
const credInit = {
  id: "serp1234", // "username" in a typical username/password pair
  name: "Serpentina", // display name for credential
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
  console.log(cred.id);
  // serp1234
  console.log(cred.password);
  // the last visible dog
});
```

### Erstellen eines föderierten Credentials

Dieses Beispiel erstellt ein föderiertes Credential aus einem [`FederatedCredentialInit`](/de/docs/Web/API/FederatedCredentialInit)-Objekt.

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

### Erstellen eines Public-Key-Credentials

Dieses Beispiel erstellt ein Public-Key-Credential aus einem [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions)-Objekt.

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

Der `create()`-Aufruf, falls erfolgreich, gibt ein Promise zurück, das sich mit einer Instanz des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts auflöst, das ein Public-Key-Credential repräsentiert, welches später zur Authentifizierung eines Benutzers über einen WebAuthn-`get()`-Aufruf verwendet werden kann. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen wie Authenticator-Daten, öffentlichen Schlüssel, Transportmechanismen und mehr bietet.

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

Einige dieser Daten müssen auf dem Server für zukünftige Authentifizierungsvorgänge gegen dieses Credential gespeichert werden – zum Beispiel der öffentliche Schlüssel, der verwendete Algorithmus und die zulässigen Transportmöglichkeiten.

> [!NOTE]
> Siehe [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) für weitere Informationen darüber, wie der gesamte Ablauf funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
