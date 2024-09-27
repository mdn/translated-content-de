---
title: "CredentialsContainer: Methode create()"
short-title: create()
slug: Web/API/CredentialsContainer/create
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`create()`**-Methode des [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Interfaces erstellt ein neues [Zugangsdaten-Objekt](/de/docs/Glossary/credential), das dann gespeichert und später mit der [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Methode abgerufen werden kann. Die abgerufenen Zugangsdaten können dann von einer Website genutzt werden, um einen Benutzer zu authentifizieren.

Diese Methode unterstützt drei verschiedene Arten von Zugangsdaten:

- Ein Passwort-Zugangsdaten-Objekt, das es einem Benutzer ermöglicht, sich mit einem Passwort anzumelden.
- Ein föderiertes Zugangsdaten-Objekt, das es einem Benutzer ermöglicht, sich über einen föderierten Identitätsanbieter anzumelden.
- Ein Public-Key-Zugangsdaten-Objekt, das es einem Benutzer ermöglicht, sich mit einem Authentifizierungsgerät anzumelden, wie z.B. einem biometrischen Leser, der in die Plattform integriert ist, oder einem entfernbaren Hardware-Token.

Beachten Sie, dass die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) den föderierten Zugangsdaten-Typ ersetzt.

## Syntax

```js-nolint
create()
create(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für das angeforderte neue `Credentials`-Objekt enthält. Es kann die folgenden Eigenschaften enthalten:

    - `signal` {{optional_inline}}
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts, die es ermöglicht, eine laufende `create()`-Operation abzubrechen. Eine abgebrochene Operation kann normal abgeschlossen werden (im Allgemeinen, wenn der Abbruch nach Abschluss der Operation eingegangen ist) oder mit einem `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

    Jede der folgenden Eigenschaften repräsentiert einen _Zugangsdaten-Typ_, der erstellt wird. Es muss genau einer von ihnen angegeben werden:

    - `federated` {{optional_inline}}
      - : Ein [`FederatedCredentialInit`](/de/docs/Web/API/FederatedCredentialInit)-Objekt, das Anforderungen für die Erstellung eines föderierten Identitätsanbieter-Daten enthält.
    - `password` {{optional_inline}}
      - : Ein [`PasswordCredentialInit`](/de/docs/Web/API/PasswordCredentialInit)-Objekt, das Anforderungen für die Erstellung von Passwort-Zugangsdaten enthält.
    - `publicKey` {{optional_inline}}

      - : Ein [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions)-Objekt, das Anforderungen für die Erstellung eines Public-Key-Zugangsdaten-Objekts enthält. Führt dazu, dass der `create()`-Aufruf den Benutzeragenten anweist, neue Zugangsdaten über ein Authentifizierungsgerät zu erstellen – entweder für die Registrierung eines neuen Kontos oder für die Zuordnung eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.

        > [!NOTE]
        > Die Verwendung von `create()` mit dem `publicKey`-Parameter kann durch eine auf Ihrem Server gesetzte {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer der folgenden Auflösungen endet:

- Ein [`FederatedCredential`](/de/docs/Web/API/FederatedCredential), wenn der Zugangsdaten-Typ `federated` war.
- Ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential), wenn der Zugangsdaten-Typ `password` war.
- Ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), wenn der Zugangsdaten-Typ `publicKey` war.

Falls kein Zugangsdaten-Objekt erstellt werden kann, löst das Promise mit `null` auf.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Im Fall einer [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Erstellungsanfrage wurden `id`, `origin` oder `password` nicht angegeben (leer).
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Mögliche Ursachen sind:
    - Die Nutzung wurde durch eine {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.
    - Die Funktion wurde aus einer fremden Quelle aufgerufen, aber das `iframe`-Attribut [`allow`](/de/docs/Web/HTML/Element/iframe#allow) setzt keine passende {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} Richtlinie.
    - Die Funktion wird aus einer fremden Quelle aufgerufen und das `<iframe>` hat keine [transiente Aktivierung](/de/docs/Glossary/transient_activation).
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Operation wurde abgebrochen.

## Beispiele

### Erstellen eines Passwort-Zugangsdaten-Objekts

Dieses Beispiel erstellt ein Passwort-Zugangsdaten-Objekt aus einem [`PasswordCredentialInit`](/de/docs/Web/API/PasswordCredentialInit)-Objekt.

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

### Erstellen eines föderierten Zugangsdaten-Objekts

Dieses Beispiel erstellt ein föderiertes Zugangsdaten-Objekt aus einem [`FederatedCredentialInit`](/de/docs/Web/API/FederatedCredentialInit)-Objekt.

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

### Erstellen eines Public-Key-Zugangsdaten-Objekts

Dieses Beispiel erstellt ein Public-Key-Zugangsdaten-Objekt aus einem [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions)-Objekt.

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

Der `create()`-Aufruf liefert, falls erfolgreich, ein Promise, das zu einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekt wird, das ein Public-Key-Zugangsdaten-Objekt darstellt, das später verwendet werden kann, um einen Benutzer über einen WebAuthn [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Objekt, das Zugang zu mehreren nützlichen Informationen bietet, einschließlich der Authenticator-Daten, des öffentlichen Schlüssels, der Transportmechanismen und mehr.

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

Einige dieser Daten müssen auf dem Server für zukünftige Authentifizierungsoperationen gegen diese Zugangsdaten gespeichert werden – zum Beispiel der öffentliche Schlüssel, der verwendete Algorithmus und die zulässigen Transporte.

> [!NOTE]
> Weitere Informationen darüber, wie der gesamte Prozess funktioniert, finden Sie unter [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
