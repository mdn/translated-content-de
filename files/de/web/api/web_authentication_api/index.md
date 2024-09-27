---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Die Web Authentication API (WebAuthn) ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), die eine starke Authentifizierung mit öffentlicher Schlüsselverschlüsselung ermöglicht und passwortlose Authentifizierung sowie sichere Multi-Faktor-Authentifizierung (MFA) ohne SMS-Nachrichten schafft.

> **Note:** [Passkeys](https://passkeys.dev/) sind ein bedeutendes Anwendungsbeispiel für Web-Authentifizierung; sehen Sie [Erstellen Sie einen Passkey für passwortlose Logins](https://web.dev/articles/passkey-registration) und [Anmelden mit einem Passkey durch Formularautomatisierung](https://web.dev/articles/passkey-form-autofill) für Implementierungsdetails. Siehe auch [Google Identity > Passwortloses Login mit Passkeys](https://developers.google.com/identity/passkeys).

## WebAuthn-Konzepte und -Verwendung

WebAuthn verwendet [asymmetrische (öffentliche Schlüssel) Kryptographie](https://en.wikipedia.org/wiki/Public-key_cryptography) anstelle von Passwörtern oder SMS-Nachrichten für das Registrieren, Authentifizieren und die [Multi-Faktor-Authentifizierung](https://en.wikipedia.org/wiki/Multi-factor_authentication) mit Websites. Dies hat einige Vorteile:

- **Schutz vor Phishing:** Ein Angreifer, der eine gefälschte Login-Website erstellt, kann sich nicht als Nutzer einloggen, da die Signatur sich mit dem [Origin](/de/docs/Glossary/Origin) der Website ändert.
- **Reduzierung der Auswirkungen von Datenpannen:** Entwickler müssen den öffentlichen Schlüssel nicht hashen, und wenn ein Angreifer Zugang zu dem öffentlichen Schlüssel erhält, der zur Überprüfung der Authentifizierung verwendet wird, kann er sich nicht authentifizieren, da er den privaten Schlüssel benötigt.
- **Unverwundbar gegen Passwortangriffe:** Einige Nutzer verwenden möglicherweise dasselbe Passwort wieder, und ein Angreifer könnte das Passwort eines Nutzers für eine andere Website erhalten (z.B. durch eine Datenpanne). Außerdem sind Textpasswörter viel einfacher bruteforcebar als eine digitale Signatur.

Viele Websites haben bereits Seiten, die Nutzern erlauben, neue Konten zu registrieren oder sich in ein bestehendes Konto einzuloggen, und WebAuthn dient als Ersatz oder Verbesserung des Authentifizierungsteils des Systems. Es erweitert die [Credential Management API](/de/docs/Web/API/Credential_Management_API), abstrahiert die Kommunikation zwischen dem Benutzeragenten und einem Authenticator und bietet folgende neue Funktionen:

- Wenn [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option verwendet wird, erstellt der Benutzeragent neue Anmeldedaten über einen Authenticator – entweder zur Registrierung eines neuen Kontos oder zum Verknüpfen eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.
  - Bei der Registrierung eines neuen Kontos werden diese Anmeldedaten auf einem Server gespeichert (auch als Dienst oder [relying party](https://en.wikipedia.org/wiki/Relying_party) bezeichnet) und können anschließend verwendet werden, um sich einzuloggen.
  - Das asymmetrische Schlüsselpaar wird im Authenticator gespeichert, der dann genutzt werden kann, um sich bei einem relying party zu authentifizieren, beispielsweise während MFA. Der Authenticator kann in den Benutzeragenten oder in ein Betriebssystem wie Windows Hello eingebettet sein oder ein physischer Token wie ein USB- oder Bluetooth-Sicherheitsschlüssel sein.
- Wenn [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option verwendet wird, verwendet der Benutzeragent einen bestehenden Satz von Anmeldedaten, um sich bei einer relying party zu authentifizieren (entweder als primäres Login oder zur Bereitstellung eines zusätzlichen Faktors während MFA, wie oben beschrieben).

In ihren grundlegendsten Formen empfangen sowohl `create()` als auch `get()` eine sehr große Zufallszahl, genannt "challenge", vom Server und geben die vom privaten Schlüssel signierte Herausforderung zurück an den Server. Dies beweist dem Server, dass ein Benutzer den privaten Schlüssel zur Authentifizierung besitzt, ohne Geheimnisse über das Netzwerk preiszugeben.

> [!NOTE]
> Die "challenge" muss ein Puffer aus zufälligen Informationen sein, der mindestens 16 Bytes groß ist.

### Erstellen eines Schlüsselpaares und Registrierung eines Benutzers

Um zu veranschaulichen, wie der Anmeldeprozess funktioniert, beschreiben wir den typischen Ablauf, der auftritt, wenn ein Benutzer ein Anmeldedatum bei einer relying party registrieren möchte:

1. Der Server der relying party sendet Benutzer- und relying party-Informationen an die Web-App, die den Registrierungsprozess verwaltet, zusammen mit der "challenge" über einen geeigneten sicheren Mechanismus (zum Beispiel [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)).

   > [!NOTE]
   > Das Format zum Teilen von Informationen zwischen dem Server der relying party und der Web-App bleibt der Anwendung überlassen.
   > Ein empfohlener Ansatz ist der Austausch von [JSON Typ Repräsentation](/de/docs/Glossary/JSON_type_representation) Objekten für Anmeldedaten und Anmeldeoptionen.
   > In `PublicKeyCredential` wurden bequeme Methoden erstellt, um von den JSON-Darstellungen in die von den Authentifizierungs-APIs benötigte Form zu konvertieren: [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON).

2. Die Web-App initiiert die Generierung eines neuen Anmeldedatums über den Authenticator, im Namen der relying party, über einen [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) Aufruf. Dieser Aufruf wird mit einer `publicKey`-Option mit Angabe der Gerätefunktionen übergeben, z. B. ob das Gerät seine eigene Benutzerauthentifizierung bereitstellt (zum Beispiel mit Biometrie).

   Ein typischer `create()` Aufruf könnte so aussehen:

   ```js
   let credential = await navigator.credentials.create({
     publicKey: {
       challenge: new Uint8Array([117, 61, 252, 231, 191, 241, ...]),
       rp: { id: "acme.com", name: "ACME Corporation" },
       user: {
         id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
         name: "jamiedoe",
         displayName: "Jamie Doe"
       },
       pubKeyCredParams: [ {type: "public-key", alg: -7} ]
     }
   });
   ```

   Die Parameter des `create()` Aufrufs werden dem Authenticator übermittelt, zusammen mit einem SHA-256-Hash, der signiert wird, um sicherzustellen, dass er nicht manipuliert wurde.

3. Nachdem der Authenticator die Zustimmung des Benutzers erhalten hat, generiert er ein Schlüsselpaar und gibt den öffentlichen Schlüssel sowie die optional signierte Attestierung an die Web-App zurück. Dies erfolgt, wenn das von `create()` zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält die Attestierungsinformationen).

4. Die Web-App leitet das [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Server weiter, wieder unter Verwendung eines geeigneten Mechanismus.

5. Der Server speichert den öffentlichen Schlüssel, gekoppelt mit der Benutzeridentität, um das Anmeldedatum für zukünftige Authentifizierungen zu merken. Während dieses Prozesses führt er eine Reihe von Überprüfungen durch, um sicherzustellen, dass die Registrierung vollständig und nicht manipuliert wurde. Diese beinhalten:

   1. Überprüfung, dass die Herausforderung dieselbe ist wie die gesendete Herausforderung.
   2. Sicherstellung, dass der Ursprung der erwartete Ursprung war.
   3. Validierung, dass die Signatur und die Attestierung die korrekte Zertifikatskette für das spezifische Modell des Authenticators verwenden, der ursprünglich das Schlüsselpaar erstellt hat.

> [!WARNING]
> Attestierung bietet eine Möglichkeit für eine relying party, die Herkunft eines Authenticators zu bestimmen. Relying parties sollten nicht versuchen, White-Lists von Authenticators zu führen.

### Authentizieren eines Benutzers

Nachdem ein Benutzer sich mit WebAuthn registriert hat, kann er sich mit dem Dienst authentifizieren (d. h. einloggen). Der Authentifizierungsablauf sieht dem Registrierungsablauf ähnlich, die Hauptunterschiede bestehen darin, dass die Authentifizierung:

1. Keine Benutzer- oder relying party-Informationen benötigt
2. Eine Assertion erzeugt wird, die das zuvor generierte Schlüsselpaar für den Dienst nutzt, anstatt das Schlüsselpaar des Authenticators.

Ein typischer Authentifizierungsablauf ist wie folgt:

1. Die relying party generiert eine "challenge" und sendet sie an den Benutzeragenten mit einem geeigneten sicheren Mechanismus, zusammen mit einer Liste von relying party- und Nutzeranmeldedaten. Es kann auch angeben, wo das Anmeldedatum zu finden ist, z. B. auf einem lokal eingebauten Authenticator oder auf einem externen über USB, BLE, etc.

2. Der Browser fordert den Authenticator auf, die Herausforderung über einen [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf zu signieren, der die Anmeldedaten in einer `publicKey`-Option übergibt.

   Ein typischer `get()` Aufruf könnte so aussehen:

   ```js
   let credential = await navigator.credentials.get({
     publicKey: {
       challenge: new Uint8Array([139, 66, 181, 87, 7, 203, ...]),
       rpId: "acme.com",
       allowCredentials: [{
         type: "public-key",
         id: new Uint8Array([64, 66, 25, 78, 168, 226, 174, ...])
       }],
       userVerification: "required",
     }
   });
   ```

   Die Parameter des `get()` Aufrufs werden dem Authenticator übermittelt, um die Authentifizierung abzuwickeln.

3. Wenn der Authenticator eines der angegebenen Anmeldedaten enthält und die Herausforderung erfolgreich signieren kann, gibt er eine signierte Assertion an die Web-App zurück, nachdem er die Zustimmung des Benutzers erhalten hat. Dies erfolgt, wenn das von `get()` zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält die Assertion-Informationen).

4. Die Web-App leitet die signierte Assertion an den Server der relying party weiter, damit dieser sie validiert. Die Validierungsüberprüfungen beinhalten:

   1. Verwendung des öffentlichen Schlüssels, der während der Registrierungsanfrage gespeichert wurde, um die Signatur durch den Authenticator zu validieren.
   2. Sicherstellung, dass die vom Authenticator signierte Herausforderung mit der vom Server generierten Herausforderung übereinstimmt.
   3. Überprüfung, dass die Relying Party ID die erwartete für diesen Dienst ist.

5. Sobald die Prüfung durch den Server erfolgreich abgeschlossen ist, wird der Authentifizierungsablauf als erfolgreich angesehen.

## Steuerung des Zugriffs auf die API

Die Verfügbarkeit von WebAuthn kann durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) gesteuert werden, indem besonders zwei Direktiven angegeben werden:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Steuert die Verfügbarkeit von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Steuert die Verfügbarkeit von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option.

Beide Direktiven haben standardmäßig den Allowlist-Wert `"self"`, was bedeutet, dass diese Methoden standardmäßig in Kontexten des obersten Dokuments verwendet werden können. Darüber hinaus kann `get()` in verschachtelten Browserkontexten verwendet werden, die vom gleichen Origin wie das oberste Dokument geladen werden. `get()` und `create()` können in verschachtelten Browserkontexten verwendet werden, die von verschiedenen Origins im Vergleich zum obersten Dokument (d. h. in cross-origin `<iframes>`) geladen werden, wenn dies durch die Direktiven [`publickey-credentials-get`](/de/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-get) und [`publickey-credentials-create`](/de/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create) der `Permission-Policy` erlaubt wird. Bei cross-origin `create()` Aufrufen, bei denen die Berechtigung durch [`allow=` auf einem iframe](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) erteilt wurde, muss das Frame auch [Vergängige Aktivierung](/de/docs/Glossary/Transient_activation) haben.

> [!NOTE]
> Wenn eine Richtlinie die Verwendung dieser Methoden verbietet, wird das von ihnen zurückgegebene {{jsxref("Promise", "Promisen", "", 1)}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

### Einfacher Zugriffsschutz

Wenn Sie den Zugriff nur einem bestimmten Subdomain erlauben möchten, könnten Sie es so angeben:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Zulassen von eingebetteten `create` und `get()` Aufrufen in einem `<iframe>`

Wenn Sie sich mit `get()` oder `create()` in einem `<iframe>` authentifizieren möchten, sind einige Schritte zu beachten:

1. Die Website, die die relying party-Site einbettet, muss die Berechtigung über ein `allow`-Attribut bereitstellen:

   - Bei Verwendung von `get()`:

     ```html
     <iframe
       src="https://auth.provider.com"
       allow="publickey-credentials-get *">
     </iframe>
     ```

   - Bei Verwendung von `create()`:

     ```html
     <iframe
       src="https://auth.provider.com"
       allow="publickey-credentials-create 'self' https://a.auth.provider.com https://b.auth.provider.com">
     </iframe>
     ```

     Das `<iframe>` muss ebenfalls [Vergängige Aktivierung](/de/docs/Glossary/Transient_activation) haben, wenn `create()` cross-origin aufgerufen wird.

2. Die relying party Site muss die Berechtigung für den obigen Zugriff über einen `Permissions-Policy`-Header bereitstellen:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   Oder um nur eine bestimmte URL zuzulassen, die relying party Site in einem `<iframe>` einzubetten:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## Schnittstellen

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)
  - : Bietet einem Dienst den Beweis, dass ein Authenticator das erforderliche Schlüsselpaar hat, um einen von einem [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf initiierten Authentifizierungsantrag erfolgreich zu behandeln. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Instanz, die erhalten wird, wenn das `get()` {{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)
  - : Das Ergebnis einer WebAuthn-Anmelderegistrierung (d. h. ein [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) Aufruf). Es enthält Informationen über das Anmeldedatum, das der Server benötigt, um WebAuthn-Assertions durchzuführen, wie z. B. deren Anmeldedaten-ID und öffentlichen Schlüssel. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Instanz, die erhalten wird, wenn das `create()` {{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)
  - : Die Basis-Schnittstelle für [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) und [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
  - : Bietet Informationen über ein öffentliches Schlüssel-/privates Schlüsselpaar, das ein Anmeldedatum für das Einloggen bei einem Dienst mit einem asymmetrischen Schlüsselpaar ist, das vor Phishing und Datenpannen resistent ist, anstatt einem Passwort. Erhalten, wenn das über einen [`create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf zurückgegebene {{jsxref("Promise")}} erfüllt wird.

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die `publicKey`-Option
  - : Ein `create()` Aufruf mit einer `publicKey`-Option initiiert die Erstellung neuer asymmetrischer Schlüssel-Anmeldedaten über einen Authenticator, wie oben erklärt.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `publicKey`-Option
  - : Ein `get()` Aufruf mit einer `publicKey`-Option weist den Benutzeragenten an, einen bestehenden Satz von Anmeldedaten zu verwenden, um sich bei einer relying party zu authentifizieren.

## Beispiele

### Demo-Seiten

- [Mozilla Demo](https://webauthn.bin.coffee/) Website und ihr [Quellcode](https://github.com/jcjones/webauthn.bin.coffee).
- [Google Demo](https://try-webauthn.appspot.com/) Website und ihr [Quellcode](https://github.com/google/webauthndemo).
- [WebAuthn.io Demo](https://webauthn.io/) Website und ihr [Quellcode](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) und ihr [Client-Quellcode](https://github.com/webauthn-open-source/webauthn-simple-app) und [Server-Quellcode](https://github.com/webauthn-open-source/fido2-lib)

### Anwendungsbeispiel

> [!NOTE]
> Aus Sicherheitsgründen werden die Web Authentication API-Aufrufe ([`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`get()`](/de/docs/Web/API/CredentialsContainer/get)) abgebrochen, wenn das Browserfenster den Fokus verliert, während der Aufruf ausstehend ist.

```js
// sample arguments for registration
const createCredentialDefaultArgs = {
  publicKey: {
    // Relying Party (a.k.a. - Service):
    rp: {
      name: "Acme",
    },
    // User:
    user: {
      id: new Uint8Array(16),
      name: "carina.p.anand@example.com",
      displayName: "Carina P. Anand",
    },
    pubKeyCredParams: [
      {
        type: "public-key",
        alg: -7,
      },
    ],
    attestation: "direct",
    timeout: 60000,
    challenge: new Uint8Array([
      // must be a cryptographically random number sent from a server
      0x8c, 0x0a, 0x26, 0xff, 0x22, 0x91, 0xc1, 0xe9, 0xb9, 0x4e, 0x2e, 0x17,
      0x1a, 0x98, 0x6a, 0x73, 0x71, 0x9d, 0x43, 0x48, 0xd5, 0xa7, 0x6a, 0x15,
      0x7e, 0x38, 0x94, 0x52, 0x77, 0x97, 0x0f, 0xef,
    ]).buffer,
  },
};

// sample arguments for login
const getCredentialDefaultArgs = {
  publicKey: {
    timeout: 60000,
    // allowCredentials: [newCredential] // see below
    challenge: new Uint8Array([
      // must be a cryptographically random number sent from a server
      0x79, 0x50, 0x68, 0x71, 0xda, 0xee, 0xee, 0xb9, 0x94, 0xc3, 0xc2, 0x15,
      0x67, 0x65, 0x26, 0x22, 0xe3, 0xf3, 0xab, 0x3b, 0x78, 0x2e, 0xd5, 0x6f,
      0x81, 0x26, 0xe2, 0xa6, 0x01, 0x7d, 0x74, 0x50,
    ]).buffer,
  },
};

// register / create a new credential
navigator.credentials
  .create(createCredentialDefaultArgs)
  .then((cred) => {
    console.log("NEW CREDENTIAL", cred);
    // normally the credential IDs available for an account would come from a server
    // but we can just copy them from above…
    const idList = [
      {
        id: cred.rawId,
        transports: ["usb", "nfc", "ble"],
        type: "public-key",
      },
    ];
    getCredentialDefaultArgs.publicKey.allowCredentials = idList;
    return navigator.credentials.get(getCredentialDefaultArgs);
  })
  .then((assertion) => {
    console.log("ASSERTION", assertion);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
