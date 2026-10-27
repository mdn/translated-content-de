---
title: "CredentialsContainer: Methode create()"
short-title: create()
slug: Web/API/CredentialsContainer/create
l10n:
  sourceCommit: fc8ab6bcb82917a1a42fb95c2b3dd27a7f1b4807
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die Methode **`create()`** der Schnittstelle [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer) erstellt ein neues {{Glossary("credential", "Credential")}}, das gespeichert und später mit der Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) abgerufen werden kann. Eine Website kann das abgerufene Credential anschließend verwenden, um einen Benutzer zu authentifizieren.

Diese Methode unterstützt drei verschiedene Credential-Typen:

- Ein Passwort-Credential, mit dem sich ein Benutzer über ein Passwort anmelden kann.
- Ein föderiertes Credential, mit dem sich ein Benutzer über einen föderierten Identitätsanbieter anmelden kann. Beachten Sie, dass die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) den Typ des föderierten Credentials ablöst.
- Ein Public-Key-Credential, mit dem sich ein Benutzer über einen Authenticator anmelden kann, beispielsweise einen in die Plattform integrierten biometrischen Leser oder einen entfernbaren Hardware-Token. [Passkeys](/de/docs/Web/Security/Authentication/Passkeys) sind eine Art von Public-Key-Credential.

## Syntax

```js-nolint
create()
create(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit Optionen für das angeforderte neue `Credentials`-Objekt. Es kann die folgenden Eigenschaften enthalten:
    - `mediation` {{optional_inline}}
      - : Ein String, der angibt, wie der Benutzer an der Erstellung des Credentials beteiligt wird.

        Diese Option wirkt sich nur auf [Public-Key-Credentials](#publickey) aus. Der einzige Wert mit einer Wirkung ist `"conditional"`. Dieser Wert bedeutet, dass der Browser versucht, das neue Credential ohne Benutzerinteraktion zu erstellen, wenn bestimmte Bedingungen erfüllt sind. Sind die Bedingungen nicht erfüllt, schlägt die Erstellung fehl. Weitere Informationen finden Sie unter [Bedingte Erstellung](/de/docs/Web/API/Web_Authentication_API#conditional_create).

    - `signal` {{optional_inline}}
      - : Eine Instanz des Objekts [`AbortSignal`](/de/docs/Web/API/AbortSignal), mit der sich ein laufender `create()`-Vorgang abbrechen lässt. Ein abgebrochener Vorgang kann normal abgeschlossen werden (in der Regel, wenn das Abbruchsignal erst nach Abschluss des Vorgangs empfangen wurde) oder mit einer `AbortError`-[`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen werden.

    Jede der folgenden Eigenschaften steht für einen _Credential-Typ_, der erstellt werden soll. Genau eine davon muss angegeben werden:
    - `federated` {{optional_inline}}
      - : Ein [`FederatedCredentialInit`](/de/docs/Web/API/FederatedCredentialInit)-Objekt mit Anforderungen für die Erstellung eines Credentials für einen föderierten Identitätsanbieter.
    - `password` {{optional_inline}}
      - : Ein [`PasswordCredentialInit`](/de/docs/Web/API/PasswordCredentialInit)-Objekt mit Anforderungen für die Erstellung eines Passwort-Credentials.
    - `publicKey` {{optional_inline}}
      - : Ein [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions)-Objekt mit Anforderungen für die Erstellung eines Public-Key-Credentials. Dadurch fordert der `create()`-Aufruf den User Agent auf, über einen Authenticator neue Credentials zu erstellen – entweder zur Registrierung eines neuen Kontos oder um einem bestehenden Konto ein neues asymmetrisches Schlüsselpaar zuzuordnen.

        > [!NOTE]
        > Die Verwendung von `create()` mit dem Parameter `publicKey` kann durch eine auf Ihrem Server festgelegte {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}}-[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem der folgenden Werte erfüllt wird:

- Ein [`FederatedCredential`](/de/docs/Web/API/FederatedCredential), wenn der Credential-Typ `federated` war.
- Ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential), wenn der Credential-Typ `password` war.
- Ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), wenn der Credential-Typ `publicKey` war.

Wenn kein Credential-Objekt erstellt werden kann, wird das Promise mit `null` erfüllt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Bei einer Anfrage zur Erstellung eines [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) wurden `id`, `origin` oder `password` nicht angegeben (sind leer).
- `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException)
  - : Mögliche Ursachen sind:
    - Die Verwendung wird durch eine {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}}-[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.
    - Die Funktion wird Cross-Origin aufgerufen, aber das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) des iframes legt keine geeignete {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}}-Richtlinie fest.
    - Die Funktion wird Cross-Origin aufgerufen und das `<iframe>` verfügt nicht über eine {{Glossary("transient_activation", "transiente Aktivierung")}}.
    - Die Funktion versucht, ein [auffindbares Credential](/de/docs/Web/API/Web_Authentication_API#discoverable_and_non-discoverable_credentials) zu erstellen ([`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) ist in der Option [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions) des `create()`-Aufrufs auf `required` gesetzt), aber der Benutzer verfügt über keinen Authenticator, der auffindbare Credentials unterstützt.
    - Die Option `mediation` ist auf `"conditional"` gesetzt, aber die Bedingungen wurden nicht erfüllt. Weitere Informationen finden Sie unter [Bedingte Erstellung](/de/docs/Web/API/Web_Authentication_API#conditional_create).
- `AbortError`-[`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Vorgang wurde abgebrochen.

## Beispiele

### Ein Passwort-Credential erstellen

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

### Ein föderiertes Credential erstellen

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

### Ein Public-Key-Credential erstellen

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

Bei Erfolg gibt der `create()`-Aufruf ein Promise zurück, das mit einer Instanz des Objekts [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) erfüllt wird. Diese repräsentiert ein Public-Key-Credential, das später zur Authentifizierung eines Benutzers über einen WebAuthn-[`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf verwendet werden kann. Die Eigenschaft [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Objekt, das Zugriff auf verschiedene nützliche Informationen bietet, darunter Authenticator-Daten, den öffentlichen Schlüssel, Transportmechanismen und mehr.

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

Einige dieser Daten müssen für künftige Authentifizierungsvorgänge mit diesem Credential auf dem Server gespeichert werden – beispielsweise der öffentliche Schlüssel, der verwendete Algorithmus und die zulässigen Transportmechanismen.

> [!NOTE]
> Weitere Informationen zum Gesamtablauf finden Sie unter [Ein Schlüsselpaar erstellen und einen Benutzer registrieren](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).

### Ein Public-Key-Credential mit bedingter Erstellung erstellen

Dieses Beispiel verwendet die [bedingte Erstellung](/de/docs/Web/API/Web_Authentication_API#conditional_create), indem es die Option `mediation` auf `conditional` setzt. Es versucht, einen neuen Passkey ohne Benutzerinteraktion zu erstellen, wenn die für die bedingte Erstellung festgelegten Bedingungen erfüllt sind.

```js
async function conditionalCreate(account) {
  try {
    const capabilities = await PublicKeyCredential.getClientCapabilities();
    // Only attempt conditional create if it is supported,
    // and if the user doesn't already have a passkey
    if (capabilities.conditionalCreate && !account.hasPasskey) {
      // Abort any existing WebAuthn calls
      webAuthnController.abort();

      // Get creation options, including the challenge value from the server
      const pkOptions = await getNewPasskeyOptions();
      const credential = await navigator.credentials.create({
        publicKey: pkOptions,
        mediation: "conditional",
      });
      // Conditional create succeeded: send the new credential to the server
      // for validation and storage
      await processNewPasskey(credential);
    }
  } catch (e) {
    // Ignore errors from conditional create
  }
}
```

Beachten Sie, dass dieses Beispiel:

- die bedingte Erstellung nur versucht, wenn der Benutzer noch keinen Passkey hat;
- alle laufenden Versuche, ein Public-Key-Credential abzurufen oder zu erstellen, vor dem Versuch der bedingten Erstellung abbricht;
- alle ausgelösten Fehler abfängt und ignoriert, beispielsweise wenn die Bedingungen nicht erfüllt wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
