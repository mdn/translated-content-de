---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: 68e1dfc3ba94c43fd9a4784fbeec134e95a6da4d
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Die Web Authentication API (WebAuthn) ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), die eine starke Authentifizierung mit öffentlicher Schlüssel-Kryptografie ermöglicht. Dadurch wird eine passwortlose Authentifizierung sowie eine sichere Multi-Faktor-Authentifizierung (MFA) ohne SMS-Nachrichten ermöglicht.

> **Hinweis:** [Passkeys](https://passkeys.dev/) sind ein bedeutender Anwendungsfall für die Webauthentifizierung; sehen Sie sich [Erstellen Sie einen Passkey für passwortlose Anmeldungen](https://web.dev/articles/passkey-registration) und [Anmelden mit einem Passkey über die automatische Formularausfüllung](https://web.dev/articles/passkey-form-autofill) für Implementierungsdetails an. Siehe auch [Google Identity > Passwortlose Anmeldung mit Passkeys](https://developers.google.com/identity/passkeys).

## WebAuthn-Konzepte und -Verwendung

WebAuthn nutzt [asymmetrische (public-key) Kryptografie](https://en.wikipedia.org/wiki/Public-key_cryptography) anstelle von Passwörtern oder SMS-Nachrichten für die Registrierung, Authentifizierung und [Multi-Faktor-Authentifizierung](https://en.wikipedia.org/wiki/Multi-factor_authentication) bei Websites. Dies bringt einige Vorteile mit sich:

- **Schutz vor Phishing:** Ein Angreifer, der eine gefälschte Login-Website erstellt, kann sich nicht als der Benutzer anmelden, da sich die Signatur mit dem {{Glossary("Origin", "Ursprung")}} der Website ändert.
- **Verminderte Auswirkungen von Datenverletzungen:** Entwickler müssen den öffentlichen Schlüssel nicht hashen, und wenn ein Angreifer Zugriff auf den öffentlichen Schlüssel erhält, der zur Verifizierung der Authentifikation verwendet wird, kann er sich nicht authentifizieren, da er den privaten Schlüssel benötigt.
- **Unempfindlich gegenüber Passwortangriffen:** Einige Benutzer verwenden möglicherweise Passwörter wieder, und ein Angreifer könnte das Passwort des Benutzers für eine andere Website (z.B. durch eine Datenverletzung) erlangen. Zudem sind Textpasswörter weitaus einfacher durch Brute-Force-Angriffe zu knacken als eine digitale Signatur.

Viele Websites haben bereits Seiten, die es Nutzern ermöglichen, neue Konten zu registrieren oder sich in ein bestehendes Konto einzuloggen, und WebAuthn dient als Ersatz oder Verbesserung des Authentifizierungsteils des Systems. Es erweitert die [Credential Management API](/de/docs/Web/API/Credential_Management_API), abstrahiert die Kommunikation zwischen dem User Agent und einem Authenticator und bietet folgende neue Funktionalitäten:

- Wenn [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option verwendet wird, erstellt der User Agent neue Anmeldeinformationen über einen Authenticator — entweder zur Registrierung eines neuen Kontos oder zur Verknüpfung eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.
  - Bei der Registrierung eines neuen Kontos werden diese Anmeldeinformationen auf einem Server (auch als Service oder [Relying Party](https://en.wikipedia.org/wiki/Relying_party) bezeichnet) gespeichert und können anschließend verwendet werden, um einen Benutzer anzumelden.
  - Das asymmetrische Schlüsselpaar wird im Authenticator gespeichert, der dann verwendet werden kann, um einen Benutzer mit einer Relying Party zu authentifizieren, z.B. während MFA. Der Authenticator kann im User Agent eingebettet sein, in ein Betriebssystem, wie Windows Hello, oder es kann sich um ein physisches Token handeln, wie beispielsweise einen USB- oder Bluetooth-Sicherheitsschlüssel.
- Wenn [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option verwendet wird, verwendet der User Agent eine vorhandene Reihe von Anmeldeinformationen, um sich bei einer Relying Party zu authentifizieren (entweder als primäre Anmeldung oder um einen zusätzlichen Faktor während MFA, wie oben beschrieben, bereitzustellen).

In ihren einfachsten Formen, empfangen sowohl `create()` als auch `get()` eine sehr große Zufallszahl namens "Challenge" vom Server und senden die von dem privaten Schlüssel signierte Challenge zurück an den Server. Dies beweist dem Server, dass ein Benutzer den für die Authentifizierung erforderlichen privaten Schlüssel hat, ohne Geheimnisse über das Netzwerk preiszugeben.

> [!NOTE]
> Die "Challenge" muss ein Puffer mit zufälligen Informationen von mindestens 16 Bytes Größe sein.

### Erstellung eines Schlüsselpaares und Registrierung eines Benutzers

Um zu veranschaulichen, wie der Prozess der Anmeldeinformationserstellung funktioniert, lassen Sie uns den typischen Ablauf beschreiben, der auftritt, wenn ein Benutzer eine Anmeldeberechtigung bei einer Relying Party registrieren möchte:

1. Der Relying-Party-Server sendet Benutzer- und Relying-Party-Informationen an die Web-App, die den Registrierungsprozess abwickelt, zusammen mit der "Challenge", unter Verwendung eines geeigneten sicheren Mechanismus (zum Beispiel [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)).

   > [!NOTE]
   > Das Format zum Teilen von Informationen zwischen dem Relying Party Server und der Web-App liegt in der Verantwortung der Anwendung.
   > Eine empfohlene Vorgehensweise ist der Austausch von {{Glossary("JSON_type_representation", "JSON-Typ-Repräsentation")}}-Objekten für Anmeldeinformationen und Anmeldeoptionsinformationen.
   > Es wurden Komfortmethoden im `PublicKeyCredential` erstellt, um von den JSON-Repräsentationen in die Form zu konvertieren, die von den Authentifizierungs-APIs gefordert wird: [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON).

2. Die Web-App initiiert die Erstellung einer neuen Anmeldeinformation über den Authenticator im Namen der Relying Party durch einen Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create). Dieser Aufruf erhält eine `publicKey`-Option, die die Gerätefunktionen angibt, z.B. ob das Gerät seine eigene Benutzerauthentifizierung bietet (zum Beispiel mit biometrischen Daten).

   Ein typischer `create()`-Aufruf könnte wie folgt aussehen:

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

   Die Parameter des `create()`-Aufrufs werden dem Authenticator übergeben, zusammen mit einem SHA-256-Hash, der signiert wird, um sicherzustellen, dass er nicht manipuliert wurde.

3. Nachdem der Authenticator das Einverständnis des Benutzers erhalten hat, generiert er ein Schlüsselpaar und gibt den öffentlichen Schlüssel und optional die signierte Attestation an die Web-App zurück. Dies wird bereitgestellt, wenn das durch den `create()`-Aufruf zurückkehrende {{jsxref("Promise")}} erfüllt wird, in Form einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Attestationsinformationen).

4. Die Web-App leitet die [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Server weiter, erneut unter Verwendung eines geeigneten Mechanismus.

5. Der Server speichert den öffentlichen Schlüssel in Verbindung mit der Benutzeridentität, um sich die Anmeldeinformationen für zukünftige Authentifizierungen zu merken. Dabei führt er eine Reihe von Überprüfungen durch, um sicherzustellen, dass die Registrierung vollständig und nicht manipuliert wurde. Dazu gehören:

   1. Überprüfen, ob die Herausforderung die gleiche ist wie die gesendete Herausforderung.
   2. Sicherstellen, dass der Ursprung der erwartete Ursprung war.
   3. Validieren, dass die Signatur und die Attestation die richtige Zertifikatskette für das spezifische Modell des Authenticator verwenden, das ursprünglich das Schlüsselpaar generiert hat.

> [!WARNING]
> Die Attestation bietet einer Relying Party eine Möglichkeit, die Herkunft eines Authenticators zu bestimmen. Relying Parties sollten nicht versuchen, Erlaubnislisten von Authenticators zu pflegen.

### Authentifizierung eines Benutzers

Nachdem ein Benutzer sich mit WebAuthn registriert hat, kann er sich (d.h. anmelden) beim Service authentifizieren. Der Authentifizierungsablauf sieht ähnlich aus wie der Registrierungsablauf, wobei die Hauptunterschiede darin bestehen, dass die Authentifizierung:

1. Keine Benutzer- oder Relying-Party-Informationen erfordert
2. Eine Assertion unter Verwendung des zuvor für den Dienst generierten Schlüsselpaares erstellt, anstelle des Schlüsselpaares des Authenticators.

Ein typischer Authentifizierungsablauf sieht wie folgt aus:

1. Die Relying Party erzeugt eine "Challenge" und sendet sie an den User Agent über einen geeigneten sicheren Mechanismus, zusammen mit einer Liste von Relying-Party- und Benutzeranmeldeinformationen. Es kann auch angegeben werden, wo das Anmeldeberechtigungsdokument zu suchen ist, z.B. auf einem lokalen eingebauten Authenticator oder auf einem externen über USB, BLE usw.

2. Der Browser fordert den Authenticator auf, die Herausforderung über einen [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf zu signieren, der die Anmeldeanfragen in einer `publicKey`-Option übermittelt bekommt.

   Ein typischer `get()`-Aufruf könnte so aussehen:

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

   Die Parameter des `get()`-Aufrufs werden dem Authenticator übergeben, um die Authentifizierung zu ermöglichen.

3. Wenn der Authenticator eine der bereitgestellten Anmeldeinformationen enthält und erfolgreich die Challenge signieren kann, kehrt er nach Erhalt des Benutzereinverständnisses mit einer signierten Assertion zur Web-App zurück. Dies wird bereitgestellt, wenn das durch den `get()`-Aufruf zurückkehrende {{jsxref("Promise")}} erfüllt wird, in Form einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Assertion-Informationen).

4. Die Web-App leitet die signierte Assertion an den Relying-Party-Server weiter, damit die Relying Party sie validieren kann. Die Validitätsprüfungen umfassen:

   1. Verwendung des öffentlichen Schlüssels, der während der Registrierungsanfrage gespeichert wurde, um die Signatur durch den Authenticator zu validieren.
   2. Sicherstellen, dass die von dem Authenticator signierte Challenge der vom Server generierten Challenge entspricht.
   3. Überprüfung, dass die Relying Party ID die erwartete für diesen Dienst ist.

5. Sobald vom Server bestätigt, wird der Authentifizierungsprozess als erfolgreich betrachtet.

## Steuerung des API-Zugriffs

Die Verfügbarkeit von WebAuthn kann über eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) gesteuert werden, die insbesondere zwei Direktiven angibt:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Steuert die Verfügbarkeit von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Steuert die Verfügbarkeit von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option.

Beide Direktiven haben einen Standard-Zulassungslistenwert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in Top-Level-Dokumentkontexten verwendet werden können.
Zusätzlich kann `get()` in eingebetteten Suchkontexten genutzt werden, die vom gleichen Ursprung wie das oberste Dokument geladen wurden.
`get()` und `create()` können in eingebetteten Suchkontexten genutzt werden, die von verschiedenen Ursprüngen zum obersten Dokument geladen wurden (d.h. in Cross-Origin-`<iframes>`), wenn sie durch die jeweiligen [`publickey-credentials-get`](/de/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-get) und [`publickey-credentials-create`](/de/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create) `Permission-Policy`-Direktiven erlaubt sind.
Für Cross-Origin-`create()`-Aufrufe, bei denen die Berechtigung durch [`allow=` auf einem iframe](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) gewährt wurde, muss das Frame ebenfalls eine {{Glossary("Transient_activation", "Transiente Aktivierung")}} haben.

> [!NOTE]
> Wo eine Richtlinie die Verwendung dieser Methoden verbietet, wird das zurückgegebene {{jsxref("Promise", "Promises", "", 1)}} von ihnen mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

### Grundlegende Zugangskontrolle

Wenn Sie den Zugang auf eine spezifische Subdomain beschränken möchten, könnten Sie dies folgendermaßen angeben:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Erlauben eingebetteter `create` und `get()` Aufrufe in einem `<iframe>`

Wenn Sie sich in einem `<iframe>` mit `get()` oder `create()` authentifizieren möchten, sind einige Schritte zu befolgen:

1. Die Seite, die die Relying Party-Seite einbettet, muss die Berechtigung über ein `allow`-Attribut bereitstellen:

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

     Das `<iframe>` muss auch eine {{Glossary("Transient_activation", "Transiente Aktivierung")}} haben, wenn `create()` Cross-Origin aufgerufen wird.

2. Die Relying Party-Seite muss die Berechtigung für den oben genannten Zugriff über einen `Permissions-Policy`-Header bereitstellen:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   Oder um nur einer spezifischen URL zu erlauben, die Relying Party-Seite in ein `<iframe>` einzubetten:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## Schnittstellen

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)
  - : Bietet einem Dienst den Nachweis, dass ein Authenticator das erforderliche Schlüsselpaar hat, um eine von einem [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf initiierte Authentifizierungsanfrage erfolgreich zu bearbeiten. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die erhalten wird, wenn das `get()`-{{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)
  - : Das Ergebnis einer WebAuthn-Anmeldeinformationsregistrierung (d.h. eines [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufrufs). Es enthält Informationen über die Anmeldeinformationen, die der Server für WebAuthn-Assertions benötigt, wie die Anmelde-ID und den öffentlichen Schlüssel. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die erhalten wird, wenn das `create()`-{{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)
  - : Die Basisschnittstelle für [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) und [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
  - : Bietet Informationen über ein öffentliches Schlüssel-/privates Schlüsselpaar, das eine Anmeldedaten für den Login-Dienst darstellt, unter Verwendung eines unverfälschbaren und datenschutzverletzungsresistenten asymmetrischen Schlüsselpaares anstelle eines Passworts. Erhalten, wenn das durch einen [`create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf zurückgegebene {{jsxref("Promise")}} erfüllt wird.

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die `publicKey`-Option
  - : Der Aufruf von `create()` mit einer `publicKey`-Option initiiert die Erstellung neuer asymmetrischer Schlüssel-Anmeldeinformationen über einen Authenticator, wie oben beschrieben.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `publicKey`-Option
  - : Der Aufruf von `get()` mit einer `publicKey`-Option weist den User Agent an, einen bestehenden Satz von Anmeldeinformationen zu verwenden, um sich bei einer Relying Party zu authentifizieren.

## Beispiele

### Demo-Sites

- [Mozilla Demo](https://webauthn.bin.coffee/) Website und deren [Quellcode](https://github.com/jcjones/webauthn.bin.coffee).
- [Google Demo](https://try-webauthn.appspot.com/) Website und deren [Quellcode](https://github.com/google/webauthndemo).
- [WebAuthn.io Demo](https://webauthn.io/) Website und deren [Quellcode](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) und deren [Clients-Quellcode](https://github.com/webauthn-open-source/webauthn-simple-app) sowie [Servers-Quellcode](https://github.com/webauthn-open-source/fido2-lib)

### Anwendungsbeispiel

> [!NOTE]
> Aus Sicherheitsgründen werden die Aufrufe der Web Authentication API ([`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`get()`](/de/docs/Web/API/CredentialsContainer/get)) abgebrochen, wenn das Browserfenster den Fokus verliert, während der Aufruf noch aussteht.

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
