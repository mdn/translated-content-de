---
title: "CredentialsContainer: create() Methode"
short-title: create()
slug: Web/API/CredentialsContainer/create
l10n:
  sourceCommit: 1e98f1356a5eda11db10cd9b08dc52cce868ebff
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`create()`** Methode des [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer) Interfaces erstellt ein neues {{Glossary("credential", "Credential")}}, das dann gespeichert und später mit der [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Methode abgerufen werden kann. Das abgerufene Credential kann dann von einer Website verwendet werden, um einen Benutzer zu authentifizieren.

Diese Methode unterstützt drei verschiedene Arten von Credentials:

- Ein Passwort-Credential, das es einem Benutzer ermöglicht, sich mit einem Passwort anzumelden.
- Ein föderiertes Credential, das es einem Benutzer ermöglicht, sich über einen föderierten Identitätsanbieter anzumelden.
- Ein Public-Key-Credential, das es einem Benutzer ermöglicht, sich mit einem Authentifizierungsgerät wie einem in die Plattform eingebauten biometrischen Leser oder einem abnehmbaren Hardware-Token anzumelden.

Beachten Sie, dass die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) den föderierten Credential-Typ ersetzt.

## Syntax

```js-nolint
create()
create(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für das angeforderte neue `Credentials` Objekt enthält. Es kann folgende Eigenschaften enthalten:

    - `signal` {{optional_inline}}
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objektinstanz, die es ermöglicht, einen laufenden `create()` Vorgang abzubrechen. Ein abgebrochener Vorgang kann normalerweise abgeschlossen werden (im Allgemeinen, wenn der Abbruch nach Abschluss des Vorgangs eingegangen ist) oder mit einem `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt werden.

    Jede der folgenden Eigenschaften stellt einen _Credential-Typ_ dar, der erstellt wird. Eine und nur eine von ihnen muss angegeben werden:

    - `federated` {{optional_inline}}
      - : Ein [`FederatedCredentialInit`](/de/docs/Web/API/FederatedCredentialInit) Objekt, das Anforderungen für die Erstellung eines föderierten Anbieter-Credentials enthält.
    - `password` {{optional_inline}}
      - : Ein [`PasswordCredentialInit`](/de/docs/Web/API/PasswordCredentialInit) Objekt, das Anforderungen für die Erstellung eines Passwort-Credentials enthält.
    - `publicKey` {{optional_inline}}

      - : Ein [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions) Objekt, das Anforderungen für die Erstellung eines Public-Key-Credentials enthält. Verursacht, dass der `create()` Aufruf den User-Agent auffordert, neue Credentials über einen Authenticator zu erstellen — entweder zum Registrieren eines neuen Kontos oder zum Verknüpfen eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.

        > [!NOTE]
        > Die Verwendung von `create()` mit dem `publicKey` Parameter könnte durch eine auf Ihrem Server festgelegte {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem der folgenden Werte aufgelöst wird:

- Ein [`FederatedCredential`](/de/docs/Web/API/FederatedCredential), wenn der Credential-Typ `federated` war.
- Ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential), wenn der Credential-Typ `password` war.
- Ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), wenn der Credential-Typ `publicKey` war.

Wenn kein Credential-Objekt erstellt werden kann, wird das Promise mit `null` aufgelöst.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Im Fall einer Anforderung zur Erstellung eines [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) wurden `id`, `origin` oder `password` nicht angegeben (leer).
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Mögliche Ursachen sind:
    - Die Nutzung wurde durch eine auf Ihrem Server konfigurierten {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.
    - Die Funktion wird cross-origin aufgerufen, aber das Attribut [`allow`](/de/docs/Web/HTML/Element/iframe#allow) des `<iframe>` setzt nicht die entsprechende {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} Policy.
    - Die Funktion wird cross-origin aufgerufen und das `<iframe>` hat keine {{Glossary("transient_activation", "transiente Aktivierung")}}.
    - Ein Versuch wird unternommen, ein [entdeckbares Credential](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu erstellen ([`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) ist in der `create()` Aufrufsoption [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions) auf `required` gesetzt), aber der Benutzer hat keinen Sicherheitsschlüssel, der entdeckbare Credentials unterstützt und bricht den Vorgang ab.
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

### Erstellen eines Public Key Credentials

Dieses Beispiel erstellt ein Public Key Credential aus einem [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions) Objekt.

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

Der `create()` Aufruf gibt, wenn er erfolgreich ist, ein Promise zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objektinstanz aufgelöst wird, was ein Public Key Credential darstellt, das später verwendet werden kann, um einen Benutzer über einen WebAuthn [`get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich der Authenticator-Daten, des öffentlichen Schlüssels, der Transportmechanismen und mehr.

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
> Lesen Sie [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) für weitere Informationen darüber, wie der gesamte Ablauf funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
