---
title: "CredentialsContainer: create()-Methode"
short-title: create()
slug: Web/API/CredentialsContainer/create
l10n:
  sourceCommit: a8ff915bf53e883e9db24056784951d9ab1ae013
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`create()`**-Methode der {{domxref("CredentialsContainer")}}-Schnittstelle erstellt ein neues {{glossary("credential", "Anmeldeinformationen")}}, das gespeichert und später mit der {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}}-Methode abgerufen werden kann. Die abgerufenen Anmeldeinformationen können dann von einer Website zur Authentifizierung eines Benutzers verwendet werden.

Diese Methode unterstützt drei verschiedene Arten von Anmeldeinformationen:

- Ein Passwort-Anmeldeinformation, mit dem sich ein Benutzer mit einem Passwort anmelden kann.
- Eine föderierte Anmeldeinformation, mit dem sich ein Benutzer über einen föderierten Identitätsanbieter anmelden kann.
- Eine öffentliche Schlüssel-Anmeldeinformation, mit dem sich ein Benutzer mit einem Authenticator wie einem in die Plattform integrierten biometrischen Lesegerät oder einem entfernbaren Hardware-Token anmelden kann.

Beachten Sie, dass die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) den föderierten Anmeldeinformationstyp ersetzt.

## Syntax

```js-nolint
create()
create(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für das angeforderte neue `Credentials`-Objekt enthält. Es kann die folgenden Eigenschaften enthalten:

    - `signal` {{optional_inline}}
      - : Eine Instanz des {{domxref("AbortSignal")}}, die es ermöglicht, einen laufenden `create()`-Vorgang abzubrechen. Ein abgebrochener Vorgang kann normal abgeschlossen werden (in der Regel, wenn der Abbruch nach Abschluss des Vorgangs empfangen wurde) oder mit einem "`AbortError`" {{domxref("DOMException")}} abgelehnt werden.

    Jede der folgenden Eigenschaften repräsentiert einen _Anmeldeinformationstyp_, der erstellt wird. Nur eine von ihnen muss angegeben werden:

    - `federated` {{optional_inline}}
      - : Ein {{domxref("FederatedCredentialInit")}}-Objekt, das Anforderungen zum Erstellen einer föderierten Identitätsanmeldeinformation enthält.
    - `password` {{optional_inline}}
      - : Ein {{domxref("PasswordCredentialInit")}}-Objekt, das Anforderungen zum Erstellen einer Passwort-Anmeldeinformation enthält.
    - `publicKey` {{optional_inline}}

      - : Ein {{domxref("PublicKeyCredentialCreationOptions")}}-Objekt, das Anforderungen zum Erstellen einer öffentlichen Schlüssel-Anmeldeinformation enthält. Führt dazu, dass der `create()`-Aufruf den Benutzeragenten dazu auffordert, neue Anmeldeinformationen über einen Authenticator zu erstellen — entweder für die Registrierung eines neuen Kontos oder für die Zuordnung eines neuen asymmetrischen Schlüsselpaares zu einem bestehenden Konto.

        > [!NOTE]
        > Die Verwendung von `create()` mit dem `publicKey`-Parameter kann durch eine {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy), die auf Ihrem Server festgelegt ist, blockiert werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem der folgenden Elemente aufgelöst wird:

- Ein {{domxref("FederatedCredential")}}, wenn der Anmeldeinformationstyp `federated` war.
- Ein {{domxref("PasswordCredential")}}, wenn der Anmeldeinformationstyp `password` war.
- Ein {{domxref("PublicKeyCredential")}}, wenn der Anmeldeinformationstyp `publicKey` war.

Wenn kein Anmeldeinformationsobjekt erstellt werden kann, wird das Promise mit `null` aufgelöst.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Im Fall einer Anforderung zur Erstellung eines {{domxref("PasswordCredential")}} wurden `id`, `origin` oder `password` nicht angegeben (leer).
- `NotAllowedError` {{domxref("DOMException")}}
  - : Mögliche Ursachen beinhalten:
    - Die Nutzung wurde durch eine {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.
    - Die Funktion wird cross-origin aufgerufen, aber das `allow`-Attribut des iframes setzt keine geeignete {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}}-Richtlinie.
    - Die Funktion wird cross-origin aufgerufen und das `<iframe>` hat keine {{glossary("transient activation")}}.
- `AbortError` {{domxref("DOMException")}}
  - : Der Vorgang wurde abgebrochen.

## Beispiele

### Erstellen einer Passwort-Anmeldeinformation

Dieses Beispiel erstellt eine Passwort-Anmeldeinformation aus einem {{domxref("PasswordCredentialInit")}}-Objekt.

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

### Erstellen einer föderierten Anmeldeinformation

Dieses Beispiel erstellt eine föderierte Anmeldeinformation aus einem {{domxref("FederatedCredentialInit")}}-Objekt.

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

### Erstellen einer öffentlichen Schlüssel-Anmeldeinformation

Dieses Beispiel erstellt eine öffentliche Schlüssel-Anmeldeinformation aus einem {{domxref("PublicKeyCredentialCreationOptions")}}-Objekt.

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

Der `create()`-Aufruf gibt, wenn er erfolgreich ist, ein Promise zurück, das mit einer {{domxref("PublicKeyCredential")}}-Objektinstanz aufgelöst wird, die eine öffentliche Schlüssel-Anmeldeinformation darstellt, die später zur Authentifizierung eines Benutzers über einen WebAuthn {{domxref("CredentialsContainer.get()", "get()")}}-Aufruf verwendet werden kann. Die {{domxref("PublicKeyCredential.response")}}-Eigenschaft enthält ein {{domxref("AuthenticatorAttestationResponse")}}-Objekt, das Zugriff auf mehrere nützliche Informationen wie Authenticator-Daten, öffentlichen Schlüssel, Transportmechanismen und mehr bietet.

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

Einige dieser Daten müssen auf dem Server gespeichert werden, um zukünftige Authentifizierungsvorgänge gegen diese Anmeldeinformationen durchzuführen – zum Beispiel der öffentliche Schlüssel, der verwendete Algorithmus und die zulässigen Transporte.

> [!NOTE]
> Weitere Informationen darüber, wie der gesamte Ablauf funktioniert, finden Sie unter [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
