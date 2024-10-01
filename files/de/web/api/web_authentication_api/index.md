---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Die Web Authentication API (WebAuthn) ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), die starke Authentifizierung mit öffentlicher Schlüssel-Kryptographie ermöglicht und passwortlose Authentifizierung sowie sichere Multi-Faktor-Authentifizierung (MFA) ohne SMS-Nachrichten unterstützt.

> **Note:** [Passkeys](https://passkeys.dev/) sind ein bedeutender Anwendungsfall für die Web-Authentifizierung; sehen Sie sich [Erstellen Sie einen Passkey für passwortlose Logins](https://web.dev/articles/passkey-registration) und [Melden Sie sich mit einem Passkey durch automatisches Ausfüllen von Formularen an](https://web.dev/articles/passkey-form-autofill) für Implementierungsdetails an. Siehe auch [Google Identity > Passwortloses Login mit Passkeys](https://developers.google.com/identity/passkeys).

## WebAuthn-Konzepte und -Verwendung

WebAuthn nutzt [asymmetrische (öffentlicher Schlüssel) Kryptographie](https://en.wikipedia.org/wiki/Public-key_cryptography) anstelle von Passwörtern oder SMS-Nachrichten für die Registrierung, Authentifizierung und [Multi-Faktor-Authentifizierung](https://en.wikipedia.org/wiki/Multi-factor_authentication) auf Websites. Dies hat einige Vorteile:

- **Schutz vor Phishing:** Ein Angreifer, der eine gefälschte Login-Website erstellt, kann sich nicht als der Benutzer anmelden, da die Signatur sich mit der {{Glossary("Origin", "Origin")}} der Website ändert.
- **Geringere Auswirkungen von Datenverletzungen:** Entwickler müssen den öffentlichen Schlüssel nicht hashen, und wenn ein Angreifer Zugriff auf den öffentlichen Schlüssel erhält, der zur Verifizierung der Authentifizierung verwendet wird, kann er sich nicht authentifizieren, da er den privaten Schlüssel benötigt.
- **Unempfindlich gegen Passwortangriffe:** Einige Benutzer könnten Passwörter wiederverwenden, und ein Angreifer könnte das Passwort des Benutzers für eine andere Website erlangen (z. B. über eine Datenverletzung). Textpasswörter sind außerdem viel leichter zu bruteforcen als eine digitale Signatur.

Viele Websites verfügen bereits über Seiten, die es Benutzern ermöglichen, neue Konten zu registrieren oder sich bei einem bestehenden Konto anzumelden, und WebAuthn fungiert als Ersatz oder Erweiterung für den Authentifizierungsteil des Systems. Es erweitert die [Credential Management API](/de/docs/Web/API/Credential_Management_API), abstrahiert die Kommunikation zwischen dem Benutzeragenten und einem Authentifikator und bietet folgende neue Funktionalitäten:

- Wenn [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option verwendet wird, erstellt der Benutzeragent über einen Authentifikator neue Anmeldedaten — entweder zur Registrierung eines neuen Kontos oder zum Verknüpfen eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.
  - Bei der Registrierung eines neuen Kontos werden diese Anmeldedaten auf einem Server (auch als Dienst oder als [Vertrauenswürdiger Anbieter](https://en.wikipedia.org/wiki/Relying_party) bezeichnet) gespeichert und können anschließend verwendet werden, um den Benutzer anzumelden.
  - Das asymmetrische Schlüsselpaar wird im Authentifikator gespeichert, der dann zur Authentifizierung eines Benutzers bei einem Vertrauenswürdigen Anbieter, z. B. während der MFA, verwendet werden kann. Der Authentifikator kann in den Benutzeragenten integriert sein, in ein Betriebssystem wie Windows Hello, oder es kann sich um ein physisches Token wie einen USB- oder Bluetooth-Sicherheitsschlüssel handeln.
- Wenn [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option verwendet wird, nutzt der Benutzeragent einen vorhandenen Satz von Anmeldedaten zur Authentifizierung bei einem Vertrauenswürdigen Anbieter (entweder als primäres Login oder um während der MFA einen zusätzlichen Faktor bereitzustellen, wie oben beschrieben).

In ihren grundlegendsten Formen empfangen sowohl `create()` als auch `get()` eine sehr große Zufallszahl, die "Herausforderung", vom Server und senden die von dem privaten Schlüssel signierte Herausforderung zurück an den Server. Dies beweist dem Server, dass ein Benutzer den für die Authentifizierung erforderlichen privaten Schlüssel besitzt, ohne Geheimnisse über das Netzwerk preiszugeben.

> [!NOTE]
> Die "Herausforderung" muss ein Puffer mit zufälligen Informationen von mindestens 16 Byte sein.

### Erstellen eines Schlüsselpaares und Registrieren eines Benutzers

Um zu veranschaulichen, wie der Prozess zur Erstellung von Anmeldedaten funktioniert, beschreiben wir den typischen Ablauf, der abläuft, wenn ein Benutzer eine Anmeldeinformation bei einem Vertrauenswürdigen Anbieter registrieren möchte:

1. Der Vertrauenswürdige Anbieter-Server sendet Benutzer- und Informationen des Vertrauenswürdigen Anbieters zusammen mit der "Herausforderung" an die Web-App, die den Registrierungsprozess bearbeitet, unter Verwendung eines geeigneten sicheren Mechanismus (z. B. [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)).

   > [!NOTE]
   > Das Format zum Teilen von Informationen zwischen dem Vertrauenswürdigen Anbieter-Server und der Web-App liegt beim Entwickler der Anwendung.
   > Ein empfohlener Ansatz ist der Austausch von {{Glossary("JSON_type_representation", "JSON-Typ-Repräsentations")}}-Objekten für Anmeldeinformationen und Anmeldeoptionen.
   > Im `PublicKeyCredential`-Objekt wurden praktische Methoden zur Konvertierung von den JSON-Darstellungen in die von den Authentifizierungs-APIs benötigte Form erstellt: [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON).

2. Die Web-App initiiert die Erstellung eines neuen Anmeldeinformationssatzes über den Authentifikator im Auftrag des Vertrauenswürdigen Anbieters über einen Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create). Dieser Aufruf erhält als `publicKey`-Option Gerätefähigkeiten, z. B. ob das Gerät seine eigene Benutzer-Authentifizierung bereitstellt (zum Beispiel durch biometrische Merkmale).

   Ein typischer `create()`-Aufruf könnte folgendermaßen aussehen:

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

   Die Parameter des `create()`-Aufrufs werden an den Authentifikator übermittelt, zusammen mit einem SHA-256-Hash, der unterschrieben wird, um sicherzustellen, dass er nicht manipuliert wird.

3. Nachdem der Authentifikator die Zustimmung des Benutzers eingeholt hat, generiert er ein Schlüsselpaar und gibt den öffentlichen Schlüssel sowie eine optional signierte Attestierung an die Web-App zurück. Diese wird bereitgestellt, wenn das von der `create()`-Methode zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanzes (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Attestierungsinformationen).

4. Die Web-App leitet den [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Server weiter, wiederum unter Verwendung eines geeigneten Mechanismus.

5. Der Server speichert den öffentlichen Schlüssel in Verbindung mit der Benutzeridentität, um die Anmeldeinformationen für zukünftige Authentifizierungen zu behalten. Während dieses Prozesses führt er eine Reihe von Überprüfungen durch, um sicherzustellen, dass die Registrierung vollständig und nicht manipuliert war. Dazu gehören:

   1. Verifizierung, dass die Herausforderung dieselbe ist wie die gesendete Herausforderung.
   2. Sicherstellen, dass die Origin die erwartete Origin war.
   3. Validierung, dass die Signatur und die Attestierung die korrekte Zertifikatskette für das spezifische Modell des Authentifikators verwenden, das das Schlüsselpaar ursprünglich erzeugt hat.

> [!WARNING]
> Attestierung bietet einem Vertrauenswürdigen Anbieter eine Möglichkeit, die Herkunft eines Authentifikators zu bestimmen. Vertrauenswürdige Anbieter sollten nicht versuchen, Positivlisten von Authentifikatoren zu führen.

### Authentifizierung eines Benutzers

Nachdem ein Benutzer sich mit WebAuthn registriert hat, kann er sich beim Dienst authentifizieren (d. h. anmelden). Der Authentifizierungsprozess sieht dem Registrierungsprozess ähnlich, wobei die Hauptunterschiede darin bestehen, dass die Authentifizierung:

1. Keine Benutzer- oder Informationen des Vertrauenswürdigen Anbieters erfordert.
2. Eine Aussage mit dem zuvor für den Dienst generierten Schlüsselpaar erstellt, anstatt mit dem Schlüsselpaar des Authentifikators.

Ein typischer Authentifizierungsablauf sieht folgendermaßen aus:

1. Der Vertrauenswürdige Anbieter generiert eine "Herausforderung" und sendet sie zusammen mit einer Liste von Anmeldeinformationen des Vertrauenswürdigen Anbieters und Benutzers an den Benutzeragenten unter Verwendung eines geeigneten sicheren Mechanismus. Er kann auch angeben, wo die Anmeldeinformationen gesucht werden sollen, z. B. auf einem lokalen integrierten Authentifikator oder auf einem externen über USB, BLE usw.

2. Der Browser fordert den Authentifikator auf, die Herausforderung über einen Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) zu signieren, welcher die Anmeldeinformationen in einer `publicKey`-Option enthält.

   Ein typischer `get()`-Aufruf könnte folgendermaßen aussehen:

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

   Die Parameter des `get()`-Aufrufs werden an den Authentifikator übermittelt, um die Authentifizierung zu bearbeiten.

3. Falls der Authentifikator eine der angegebenen Anmeldedaten enthält und in der Lage ist, die Herausforderung erfolgreich zu signieren, gibt er eine signierte Aussage an die Web-App zurück, nachdem er die Zustimmung des Benutzers erhalten hat. Diese wird bereitgestellt, wenn das von der `get()`-Methode zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Aussageninformationen).

4. Die Web-App leitet die signierte Aussage an den Vertrauenswürdigen Anbieter-Server weiter, damit der Vertrauenswürdige Anbieter sie validieren kann. Die Validierungsüberprüfungen umfassen:

   1. Verwenden des öffentlichen Schlüssels, der während der Registrierungsanfrage gespeichert wurde, um die Signatur durch den Authentifikator zu validieren.
   2. Sicherstellen, dass die vom Authentifikator signierte Herausforderung mit der vom Server generierten Herausforderung übereinstimmt.
   3. Überprüfen, dass die ID des Vertrauenswürdigen Anbieters die erwartete für diesen Dienst ist.

5. Sobald vom Server überprüft, gilt der Authentifizierungsprozess als erfolgreich.

## Zugriffskontrolle für die API

Die Verfügbarkeit von WebAuthn kann mit einer [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) gesteuert werden, die insbesondere zwei Direktiven spezifiziert:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Kontrolliert die Verfügbarkeit von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Kontrolliert die Verfügbarkeit von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option.

Beide Direktiven haben einen Standard-Positivlisten-Wert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in Top-Level-Dokumentkontexten verwendet werden können.
Darüber hinaus kann `get()` in verschachtelten Browsing-Kontexten, die von derselben Herkunft wie das oberste Dokument geladen werden, verwendet werden.
`get()` und `create()` können in verschachtelten Browsing-Kontexten, die von verschiedenen Herkünften zum obersten Dokument geladen werden (z. B. in Cross-Origin-`<iframes>`), verwendet werden, wenn dies von den Direktiven [`publickey-credentials-get`](/de/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-get) und [`publickey-credentials-create`](/de/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create) erlaubt ist.
Für Cross-Origin-`create()`-Aufrufe, bei denen die Berechtigung durch [`allow=` auf einem iframe](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) gewährt wurde, muss der Frame auch {{Glossary("Transient_activation", "Flüchtige Aktivierung")}} haben.

> [!NOTE]
> Wo eine Richtlinie die Nutzung dieser Methoden verbietet, wird das von ihnen zurückgegebene {{jsxref("Promise", "promises", "", 1)}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgewiesen.

### Grundlegende Zugriffskontrolle

Wenn Sie den Zugriff nur auf ein bestimmtes Subdomain erlauben möchten, könnten Sie es so bereitstellen:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Erlauben von eingebettetem `create`- und `get()`-Aufruf in einem `<iframe>`

Wenn Sie sich mit `get()` oder `create()` in einem `<iframe>` authentifizieren möchten, gibt es einige Schritte zu befolgen:

1. Die Website, die die Seite des Vertrauenswürdigen Anbieters einbettet, muss die Berechtigung über ein `allow`-Attribut gewähren:

   - Wenn `get()` verwendet wird:

     ```html
     <iframe
       src="https://auth.provider.com"
       allow="publickey-credentials-get *">
     </iframe>
     ```

   - Wenn `create()` verwendet wird:

     ```html
     <iframe
       src="https://auth.provider.com"
       allow="publickey-credentials-create 'self' https://a.auth.provider.com https://b.auth.provider.com">
     </iframe>
     ```

     Das `<iframe>` muss auch {{Glossary("Transient_activation", "Flüchtige Aktivierung")}} haben, wenn `create()` Cross-Origin aufgerufen wird.

2. Die Website des Vertrauenswürdigen Anbieters muss die Berechtigung für den oben genannten Zugriff über einen `Permissions-Policy`-Header bereitstellen:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   Oder um nur einer bestimmten URL zu erlauben, die Seite des Vertrauenswürdigen Anbieters in einem `<iframe>` einzubetten:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## Schnittstellen

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)
  - : Bietet einem Dienst den Beweis, dass ein Authentifikator das notwendige Schlüsselpaar hat, um einen Authentifizierungsantrag erfolgreich zu bearbeiten, der durch einen Aufruf von [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) initiiert wurde. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanzobjekts, das erhalten wird, wenn das `get()` {{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)
  - : Das Ergebnis einer WebAuthn-Registrierung (d.h. eines Aufrufs von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create)). Es enthält Informationen über die Anmeldeinformation, die der Server benötigt, um WebAuthn-Erklärungen durchzuführen, wie ihre Anmelde-ID und den öffentlichen Schlüssel. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanzobjekts, das erhalten wird, wenn das `create()` {{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)
  - : Die Basisschnittstelle für [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) und [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
  - : Bietet Informationen über ein öffentliches / privates Schlüsselpaar, das eine Anmeldeinformation für das Einloggen in einen Dienst darstellt unter Verwendung eines un-phishable und datenbruchsicheren asymmetrischen Schlüsselpaares anstelle eines Passworts. Erhalten, wenn das von einem Aufruf von [`create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`get()`](/de/docs/Web/API/CredentialsContainer/get) zurückgegebene {{jsxref("Promise")}} erfüllt wird.

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die `publicKey`-Option
  - : Ein Aufruf von `create()` mit einer `publicKey`-Option initiiert die Erstellung neuer asymmetrischer Schlüsselanmeldedaten über einen Authentifikator, wie oben erklärt.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `publicKey`-Option
  - : Ein Aufruf von `get()` mit einer `publicKey`-Option veranlasst den Benutzeragenten, einen bestehenden Satz von Anmeldedaten zur Authentifizierung bei einem Vertrauenswürdigen Anbieter zu verwenden.

## Beispiele

### Demosites

- [Mozilla Demo](https://webauthn.bin.coffee/) Website und dessen [Quellcode](https://github.com/jcjones/webauthn.bin.coffee).
- [Google Demo](https://try-webauthn.appspot.com/) Website und dessen [Quellcode](https://github.com/google/webauthndemo).
- [WebAuthn.io Demo](https://webauthn.io/) Website und dessen [Quellcode](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) und dessen [Client-Quellcode](https://github.com/webauthn-open-source/webauthn-simple-app) und [Server-Quellcode](https://github.com/webauthn-open-source/fido2-lib)

### Anwendungsbeispiel

> [!NOTE]
> Aus Sicherheitsgründen werden die Aufrufe der Web Authentication API ([`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`get()`](/de/docs/Web/API/CredentialsContainer/get)) abgebrochen, wenn das Browserfenster den Fokus verliert, während der Aufruf in der Bearbeitung ist.

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
