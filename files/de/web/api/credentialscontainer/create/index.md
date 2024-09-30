---
title: "CredentialsContainer: create()-Methode"
short-title: create()
slug: Web/API/CredentialsContainer/create
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`create()`**-Methode der [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Schnittstelle erstellt eine neue [Berechtigung](/de/docs/Glossary/credential), die dann gespeichert und später mit der [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Methode abgerufen werden kann. Die abgerufene Berechtigung kann dann von einer Website verwendet werden, um einen Benutzer zu authentifizieren.

Diese Methode unterstützt drei verschiedene Arten von Berechtigungen:

- Eine Passwortberechtigung, die es einem Benutzer ermöglicht, sich mit einem Passwort anzumelden.
- Eine föderierte Berechtigung, die es einem Benutzer ermöglicht, sich mit einem föderierten Identitätsanbieter anzumelden.
- Eine Berechtigung mit öffentlichem Schlüssel, die es einem Benutzer ermöglicht, sich mit einem Authenticator wie einem im System integrierten biometrischen Leser oder einem abnehmbaren Hardware-Token anzumelden.

Beachten Sie, dass die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) den föderierten Berechtigungstyp ersetzt.

## Syntax

```js-nolint
create()
create(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für das angeforderte neue `Credentials`-Objekt enthält. Es kann die folgenden Eigenschaften enthalten:

    - `signal` {{optional_inline}}
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts, die es ermöglicht, eine laufende `create()`-Operation abzubrechen. Eine abgebrochene Operation kann normal abgeschlossen werden (im Allgemeinen, wenn der Abbruch nach Abschluss der Operation eingegangen ist) oder mit einem `AbortError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt werden.

    Jede der folgenden Eigenschaften repräsentiert einen zu erstellenden _Berechtigungstyp_. Es muss genau eine davon angegeben werden:

    - `federated` {{optional_inline}}
      - : Ein [`FederatedCredentialInit`](/de/docs/Web/API/FederatedCredentialInit)-Objekt, das Anforderungen zum Erstellen einer föderierten Identitätsanbieter-Berechtigung enthält.
    - `password` {{optional_inline}}
      - : Ein [`PasswordCredentialInit`](/de/docs/Web/API/PasswordCredentialInit)-Objekt, das Anforderungen zum Erstellen einer Passwortberechtigung enthält.
    - `publicKey` {{optional_inline}}

      - : Ein [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions)-Objekt, das Anforderungen zum Erstellen einer Berechtigung mit öffentlichem Schlüssel enthält. Veranlasst den `create()`-Aufruf, den Benutzeragenten aufzufordern, neue Berechtigungen über einen Authenticator zu erstellen – entweder zur Registrierung eines neuen Kontos oder zur Verknüpfung eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.

        > [!NOTE]
        > Die Nutzung von `create()` mit dem `publicKey`-Parameter kann durch eine auf Ihrem Server gesetzte {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem der folgenden Werte aufgelöst wird:

- Ein [`FederatedCredential`](/de/docs/Web/API/FederatedCredential), wenn der Berechtigungstyp `federated` war.
- Ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential), wenn der Berechtigungstyp `password` war.
- Ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), wenn der Berechtigungstyp `publicKey` war.

Wenn kein Berechtigungsobjekt erstellt werden kann, wird das Promise mit `null` aufgelöst.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Im Fall einer [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Erstellungsanforderung wurden `id`, `origin` oder `password` nicht bereitgestellt (leer).
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Mögliche Ursachen beinhalten:
    - Die Nutzung wurde durch eine {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.
    - Die Funktion wird übergreifend aufgerufen, aber das `allow`-Attribut des iframes setzt keine geeignete {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} Richtlinie.
    - Die Funktion wird übergreifend aufgerufen und das `<iframe>` hat keine [transiente Aktivierung](/de/docs/Glossary/transient_activation).
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Operation wurde abgebrochen.

## Beispiele

### Erstellen einer Passwortberechtigung

Dieses Beispiel erstellt eine Passwortberechtigung aus einem [`PasswordCredentialInit`](/de/docs/Web/API/PasswordCredentialInit)-Objekt.

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

### Erstellen einer föderierten Berechtigung

Dieses Beispiel erstellt eine föderierte Berechtigung aus einem [`FederatedCredentialInit`](/de/docs/Web/API/FederatedCredentialInit)-Objekt.

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

### Erstellen einer Berechtigung mit öffentlichem Schlüssel

Dieses Beispiel erstellt eine Berechtigung mit öffentlichem Schlüssel aus einem [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions)-Objekt.

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

Der `create()`-Aufruf gibt, wenn er erfolgreich ist, ein Promise zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekt aufgelöst wird, das eine Berechtigung mit öffentlichem Schlüssel darstellt, die später über einen WebAuthn-`get()`-Aufruf zur Benutzerauthentifizierung verwendet werden kann. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich der Authenticator-Daten, des öffentlichen Schlüssels, der Transportmechanismen und mehr.

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

Einige dieser Daten müssen auf dem Server für zukünftige Authentifizierungsvorgänge mit dieser Berechtigung gespeichert werden — zum Beispiel der öffentliche Schlüssel, der verwendete Algorithmus und die zulässigen Transporte.

> [!NOTE]
> Weitere Informationen darüber, wie der gesamte Ablauf funktioniert, finden Sie unter [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
