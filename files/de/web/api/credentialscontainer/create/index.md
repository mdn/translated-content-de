---
title: "CredentialsContainer: create()-Methode"
short-title: create()
slug: Web/API/CredentialsContainer/create
l10n:
  sourceCommit: a060aa315813bd1e69e4a43d7aed241f649e7e0d
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`create()`**-Methode der [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Schnittstelle erstellt eine neue {{Glossary("credential", "Credential")}}, die dann gespeichert und später mit der [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Methode abgerufen werden kann. Das abgerufene Credential kann dann von einer Website verwendet werden, um einen Benutzer zu authentifizieren.

Diese Methode unterstützt drei verschiedene Arten von Credentials:

- Ein Passwort-Credential, das es einem Benutzer ermöglicht, sich mit einem Passwort anzumelden.
- Ein federiertes Credential, das es einem Benutzer ermöglicht, sich über einen föderierten Identitätsanbieter anzumelden.
- Ein public key-Credential, das es einem Benutzer ermöglicht, sich mit einem Authenticator wie einem in die Plattform integrierten biometrischen Leser oder einem abnehmbaren Hardware-Token anzumelden.

Beachten Sie, dass die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) den Typ des federierten Credentials ersetzt.

## Syntax

```js-nolint
create()
create(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für das angeforderte neue `Credentials`-Objekt enthält. Es kann die folgenden Eigenschaften enthalten:
    - `signal` {{optional_inline}}
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts, die es ermöglicht, eine laufende `create()`-Operation abzubrechen. Eine abgebrochene Operation kann normal abgeschlossen werden (in der Regel, wenn der Abbruch empfangen wurde, nachdem die Operation abgeschlossen war) oder mit einem `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen werden.

    Jede der folgenden Eigenschaften repräsentiert einen _Credential-Typ_, der erstellt wird. Nur eine von ihnen muss angegeben werden:
    - `federated` {{optional_inline}}
      - : Ein [`FederatedCredentialInit`](/de/docs/Web/API/FederatedCredentialInit)-Objekt, das Anforderungen für die Erstellung eines federierten Identitätsanbieter-Credentials enthält.
    - `password` {{optional_inline}}
      - : Ein [`PasswordCredentialInit`](/de/docs/Web/API/PasswordCredentialInit)-Objekt, das Anforderungen für die Erstellung eines Passwort-Credentials enthält.
    - `publicKey` {{optional_inline}}
      - : Ein [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions)-Objekt, das Anforderungen für die Erstellung eines public key-Credentials enthält. Veranlasst den `create()`-Aufruf, dass der User-Agent neue Credentials über einen Authenticator erstellt — entweder zur Registrierung eines neuen Kontos oder zur Verknüpfung eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.

        > [!NOTE]
        > Die Verwendung von `create()` mit dem `publicKey`-Parameter kann durch eine {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden, die auf Ihrem Server festgelegt ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem der folgenden Elemente aufgelöst wird:

- Ein [`FederatedCredential`](/de/docs/Web/API/FederatedCredential), falls der Credential-Typ `federated` war.
- Ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential), falls der Credential-Typ `password` war.
- Ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), falls der Credential-Typ `publicKey` war.

Wenn kein Credential-Objekt erstellt werden kann, wird das Promise mit `null` aufgelöst.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Bei der Anforderung zur Erstellung eines [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) wurden `id`, `origin` oder `password` nicht angegeben (leer).
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Mögliche Ursachen:
    - Die Nutzung wurde durch eine {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.
    - Die Funktion wird Cross-Origin aufgerufen, aber das `iframe`-Element hat kein geeignetes {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}}-Policy in seinem [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow)-Attribut festgelegt.
    - Die Funktion wird Cross-Origin aufgerufen und das `<iframe>` hat keine {{Glossary("transient_activation", "transient activation")}}.
    - Die Funktion hat versucht, ein [discoverable credential](/de/docs/Web/API/Web_Authentication_API#discoverable_and_non-discoverable_credentials) zu erstellen ([`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) ist in den `create()`-Aufruf-Optionen auf `required` gesetzt), aber der Benutzer hat keinen Authenticator, der discoverable credentials unterstützt.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Vorgang wurde abgebrochen.

## Beispiele

### Erstellen eines Passwort-Credentials

Dieses Beispiel erstellt ein Passwort-Credential aus einem [`PasswordCredentialInit`](/de/docs/Web/API/PasswordCredentialInit)-Objekt.

```js
const credInit = {
  id: "serpent1234", // "username" in a typical username/password pair
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
  // serpent1234
  console.log(cred.password);
  // the last visible dog
});
```

### Erstellen eines federierten Credentials

Dieses Beispiel erstellt ein federiertes Credential aus einem [`FederatedCredentialInit`](/de/docs/Web/API/FederatedCredentialInit)-Objekt.

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

### Erstellen eines public key-Credentials

Dieses Beispiel erstellt ein public key-Credential aus einem [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions)-Objekt.

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

Der `create()`-Aufruf gibt, falls erfolgreich, ein Promise zurück, das mit einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz aufgelöst wird, die ein public key-Credential darstellt, das später verwendet werden kann, um einen Benutzer über einen WebAuthn-`get()`-Aufruf zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich der Authenticator-Daten, des public keys, der Transportmechanismen und mehr.

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

Einige dieser Daten müssen auf dem Server gespeichert werden, um zukünftige Authentifizierungsoperationen gegen dieses Credential durchzuführen — zum Beispiel der public key, der verwendete Algorithmus und die zulässigen Übertragungen.

> [!NOTE]
> Weitere Informationen darüber, wie der gesamte Ablauf funktioniert, finden Sie unter [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
