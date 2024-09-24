---
title: Web-Authentifizierungs-API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Die Web-Authentifizierungs-API (WebAuthn) ist eine Erweiterung der [Anmelde-Management-API](/de/docs/Web/API/Credential_Management_API), die starke Authentifizierung mit öffentlicher Schlüsselkryptografie ermöglicht, was passwortlose Authentifizierung und sichere Multi-Faktor-Authentifizierung (MFA) ohne SMS-Nachrichten ermöglicht.

> **Note:** [Passkeys](https://passkeys.dev/) sind ein bedeutender Anwendungsfall für Web-Authentifizierung; für Implementierungsdetails siehe [Erstellen Sie einen Passkey für passwortlose Anmeldungen](https://web.dev/articles/passkey-registration) und [Anmeldung mit einem Passkey durch automatisches Ausfüllen der Formulare](https://web.dev/articles/passkey-form-autofill). Siehe auch [Google Identity > Passwortlose Anmeldung mit Passkeys](https://developers.google.com/identity/passkeys).

## WebAuthn-Konzepte und Nutzung

WebAuthn verwendet [asymmetrische (Public-Key) Kryptographie](https://en.wikipedia.org/wiki/Public-key_cryptography) anstelle von Passwörtern oder SMS-Nachrichten für die Registrierung, Authentifizierung und [Multi-Faktor-Authentifizierung](https://en.wikipedia.org/wiki/Multi-factor_authentication) mit Websites. Dies bietet einige Vorteile:

- **Schutz vor Phishing:** Ein Angreifer, der eine gefälschte Anmeldeseite erstellt, kann sich nicht als der Benutzer anmelden, da die Signatur sich mit dem [Ursprung](/de/docs/Glossary/Origin) der Website ändert.
- **Reduzierte Auswirkungen von Datenverletzungen:** Entwickler müssen den öffentlichen Schlüssel nicht hashen, und wenn ein Angreifer Zugriff auf den zur Authentifizierungsüberprüfung genutzten öffentlichen Schlüssel erhält, kann er sich nicht authentifizieren, da er den privaten Schlüssel benötigt.
- **Unverwundbar gegenüber Passwortangriffen:** Einige Benutzer könnten Passwörter erneut verwenden, und ein Angreifer könnte das Passwort des Benutzers für eine andere Website erlangen (z. B. durch eine Datenverletzung). Außerdem sind Textpasswörter viel einfacher zu brute-forcen als eine digitale Signatur.

Viele Websites haben bereits Seiten, die es Benutzern ermöglichen, neue Konten zu registrieren oder sich bei einem bestehenden Konto anzumelden, und WebAuthn fungiert als Ersatz oder Verbesserung für den Authentifizierungsteil des Systems. Es erweitert die [Anmelde-Management-API](/de/docs/Web/API/Credential_Management_API), abstrahiert die Kommunikation zwischen Nutzeragent und Authentifikator und liefert die folgende neue Funktionalität:

- Wenn {{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}} mit der `publicKey`-Option verwendet wird, erstellt der Nutzeragent neue Anmeldeinformationen über einen Authentifikator — entweder zur Registrierung eines neuen Kontos oder zur Verknüpfung eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.
  - Bei der Registrierung eines neuen Kontos werden diese Anmeldeinformationen auf einem Server gespeichert (auch als Dienst oder [Relying Party](https://en.wikipedia.org/wiki/Relying_party) bezeichnet) und können anschließend zur Anmeldung eines Benutzers verwendet werden.
  - Das asymmetrische Schlüsselpaar wird im Authentifikator gespeichert, der dann zur Authentifizierung eines Benutzers mit einer Relying Party verwendet werden kann, beispielsweise während der MFA. Der Authentifikator kann im Nutzeragenten, in einem Betriebssystem wie Windows Hello eingebettet sein oder es kann sich um ein physisches Token handeln, wie z. B. einen USB- oder Bluetooth-Sicherheitsschlüssel.
- Wenn {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} mit der `publicKey`-Option verwendet wird, nutzt der Nutzeragent einen vorhandenen Satz von Anmeldeinformationen, um sich bei einer Relying Party zu authentifizieren (entweder als die primäre Anmeldung oder um einen zusätzlichen Faktor während der MFA wie oben beschrieben bereitzustellen).

In ihren einfachsten Formen erhalten sowohl `create()` als auch `get()` eine sehr große Zufallszahl, die als "Challenge" bezeichnet wird, vom Server und geben die von dem privaten Schlüssel signierte Challenge an den Server zurück. Dies beweist dem Server, dass ein Benutzer über den privaten Schlüssel verfügt, der für die Authentifizierung erforderlich ist, ohne dabei Geheimnisse über das Netzwerk preiszugeben.

> [!NOTE]
> Die "Challenge" muss ein Puffer zufälliger Informationen von mindestens 16 Bytes Größe sein.

### Erstellen eines Schlüsselpaares und Registrieren eines Benutzers

Um zu veranschaulichen, wie der Prozess der Anmeldeinformationserstellung funktioniert, beschreiben wir den typischen Ablauf, der eintritt, wenn ein Benutzer eine Anmeldeinformation bei einer Relying Party registrieren möchte:

1. Der Relying-Party-Server sendet Benutzer- und Relying-Party-Informationen zusammen mit der "Challenge" an die Web-App, die den Registrierungsprozess durchführt, und zwar über einen geeigneten sicheren Mechanismus (zum Beispiel [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)).

   > [!NOTE]
   > Das Format zum Teilen von Informationen zwischen dem Relying-Party-Server und der Web-App liegt in der Verantwortung der Anwendung.
   > Ein empfohlener Ansatz ist der Austausch von {{glossary("JSON type representation")}}-Objekten für Anmeldeinformationen und Anmeldeoptionen.
   > Convenience-Methoden wurden im `PublicKeyCredential` erstellt, um die Konvertierung von den JSON-Darstellungen in das von den Authentifizierungs-APIs erforderliche Format zu erleichtern: {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "parseCreationOptionsFromJSON()")}}, {{domxref("PublicKeyCredential.parseRequestOptionsFromJSON_static", "parseRequestOptionsFromJSON()")}} und {{domxref("PublicKeyCredential.toJSON()")}}.

2. Die Web-App initiiert die Erstellung einer neuen Anmeldeinformation über den Authentifikator im Auftrag der Relying Party über einen {{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}}-Aufruf. Dieser Aufruf erhält eine `publicKey`-Option, die die Gerätefunktionen angibt, z. B. ob das Gerät eigene Benutzerauthentifizierung bietet (z. B. mit biometrischen Daten).

   Ein typischer `create()`-Aufruf könnte so aussehen:

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

   Die Parameter des `create()`-Aufrufs werden dem Authentifikator übergeben, zusammen mit einem SHA-256-Hash, der signiert wird, um sicherzustellen, dass er nicht manipuliert wird.

3. Nachdem der Authentifikator das Benutzer-Einverständnis erhalten hat, generiert er ein Schlüsselpaar und gibt den öffentlichen Schlüssel und eine optional signierte Beglaubigung an die Web-App zurück. Dies wird bereitgestellt, wenn der von dem `create()`-Aufruf zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form einer {{domxref("PublicKeyCredential")}}-Objektinstanz (die {{domxref("PublicKeyCredential.response")}}-Eigenschaft enthält die Beglaubigungsinformationen).

4. Die Web-App leitet die {{domxref("PublicKeyCredential")}} an den Server weiter, wieder unter Verwendung eines geeigneten Mechanismus.

5. Der Server speichert den öffentlichen Schlüssel, gekoppelt mit der Benutzeridentität, um die Anmeldeinformation für zukünftige Authentifizierungen zu speichern. Während dieses Prozesses führt er eine Reihe von Prüfungen durch, um sicherzustellen, dass die Registrierung vollständig und nicht manipuliert wurde. Diese beinhalten:

   1. Überprüfung, dass die Challenge dieselbe ist wie die, die gesendet wurde.
   2. Sicherstellen, dass der Ursprung der erwartete Ursprung war.
   3. Überprüfen, dass die Signatur und die Beglaubigung die korrekte Zertifikatskette für das spezifische Modell des Authentifikators verwenden, das ursprünglich das Schlüsselpaar generiert hat.

> [!WARNING]
> Die Beglaubigung bietet der Relying Party eine Möglichkeit, die Herkunft eines Authentifikators zu bestimmen. Relying Parties sollten nicht versuchen, Whitelists von Authentifikatoren zu führen.

### Authentifizierung eines Benutzers

Sobald sich ein Benutzer mit WebAuthn registriert hat, kann er sich (d. h. anmelden) beim Dienst authentifizieren. Der Authentifizierungsablauf sieht ähnlich aus wie der Registrierungsablauf, wobei die Hauptunterschiede darin bestehen, dass die Authentifizierung:

1. Keine Informationen über Benutzer oder Relying Party erfordert
2. Eine Behauptung mit dem zuvor generierten Schlüsselpaar für den Dienst erstellt, anstatt mit dem Schlüsselpaar des Authentifikators.

Ein typischer Authentifizierungsablauf ist wie folgt:

1. Die Relying Party generiert eine "Challenge" und sendet sie über einen geeigneten sicheren Mechanismus an den Nutzeragenten, zusammen mit einer Liste von Relying Party- und Benutzeranmeldeinformationen. Sie kann auch angeben, wo nach der Anmeldeinformation gesucht werden soll, z. B. auf einem lokalen eingebauten Authentifikator oder auf einem externen über USB, BLE usw.

2. Der Browser bittet den Authentifikator, die Challenge über einen {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}}-Aufruf zu signieren, der die Anmeldeinformationen in einer `publicKey`-Option übergibt.

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

   Die Parameter des `get()`-Aufrufs werden an den Authentifikator übergeben, um die Authentifizierung zu handhaben.

3. Wenn der Authentifikator eine der angegebenen Anmeldeinformationen enthält und die Challenge erfolgreich signieren kann, gibt er nach Erhalt des Benutzereinverständnisses eine signierte Behauptung an die Web-App zurück. Dies wird bereitgestellt, wenn der von dem `get()`-Aufruf zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form einer {{domxref("PublicKeyCredential")}}-Objektinstanz (die {{domxref("PublicKeyCredential.response")}}-Eigenschaft enthält die Behauptungsinformationen).

4. Die Web-App leitet die signierte Behauptung an den Relying Party-Server weiter, damit die Relying Party sie validieren kann. Die Validierungsprüfungen beinhalten:

   1. Die Verwendung des während der Registrierungsanfrage gespeicherten öffentlichen Schlüssels zur Validierung der Signatur durch den Authentifikator.
   2. Sicherstellen, dass die vom Authentifikator signierte Challenge mit der vom Server generierten Challenge übereinstimmt.
   3. Überprüfung, dass die Relying Party-ID diejenige ist, die für diesen Dienst erwartet wird.

5. Sobald der Server dies überprüft hat, gilt der Authentifizierungsablauf als erfolgreich.

## Zugriffskontrolle zur API

Die Verfügbarkeit von WebAuthn kann mittels einer [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) gesteuert werden, die insbesondere zwei Direktiven spezifiziert:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Steuert die Verfügbarkeit von {{domxref("CredentialsContainer.create", "navigator.credentials.create()")}} mit der `publicKey`-Option.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Steuert die Verfügbarkeit von {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} mit der `publicKey`-Option.

Beide Direktiven haben einen standardmäßigen Allowlist-Wert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in Kontexten des obersten Dokuments verwendet werden können.
Zusätzlich kann `get()` in verschachtelten Browsing-Kontexten verwendet werden, die vom selben Ursprung wie das oberste Dokument geladen werden.
`get()` und `create()` können in verschachtelten Browsing-Kontexten verwendet werden, die von anderen Ursprüngen als dem obersten Dokument geladen werden (d. h. in Cross-Origin-`<iframes>`), sofern dies durch die `Permission-Policy`-Direktiven [`publickey-credentials-get`](/de/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-get) und [`publickey-credentials-create`](/de/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create) erlaubt ist, jeweils.
Für Cross-Origin-`create()`-Aufrufe, bei denen die Erlaubnis durch [`allow=` in einem iframe](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) gewährt wurde, muss der Frame auch {{glossary("Transient activation")}} haben.

> [!NOTE]
> Wenn eine Richtlinie die Nutzung dieser Methoden verbietet, wird der von ihnen zurückgegebene {{jsxref("Promise", "promises", "", 1)}} mit einem `NotAllowedError` {{domxref("DOMException")}} abgelehnt.

### Grundlegende Zugriffskontrolle

Wenn Sie nur den Zugriff auf eine spezielle Subdomain gestatten möchten, könnten Sie dies wie folgt angeben:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Erlauben von eingebetteten `create`- und `get()`-Aufrufen in einem `<iframe>`

Wenn Sie sich mit `get()` oder `create()` in einem `<iframe>` authentifizieren möchten, müssen einige Schritte befolgt werden:

1. Die Seite, die die Relying Party-Seite einbettet, muss die Erlaubnis über ein `allow`-Attribut geben:

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

     Das `<iframe>` muss außerdem {{glossary("Transient activation")}} haben, wenn `create()` Cross-Origin aufgerufen wird.

2. Die Relying Party-Seite muss die Erlaubnis für den obigen Zugriff über einen `Permissions-Policy`-Header bereitstellen:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   Oder um nur eine spezifische URL zu gestatten, die Relying Party-Seite in einem `<iframe>` einzubetten:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## Schnittstellen

- {{domxref("AuthenticatorAssertionResponse")}}
  - : Stellt einem Dienst den Nachweis zur Verfügung, dass ein Authentifikator das notwendige Schlüsselpaar hat, um eine Authentifizierungsanfrage erfolgreich zu bearbeiten, die durch einen {{domxref("CredentialsContainer.get()")}}-Aufruf initiiert wurde. Verfügbar in der {{domxref("PublicKeyCredential.response", "response")}}-Eigenschaft der {{domxref("PublicKeyCredential")}}-Instanz, die erhalten wird, wenn der `get()` {{jsxref("Promise")}} erfüllt wird.
- {{domxref("AuthenticatorAttestationResponse")}}
  - : Das Ergebnis einer WebAuthn-Anmeldeinformationsregistrierung (d. h. einem {{domxref("CredentialsContainer.create()")}}-Aufruf). Es enthält Informationen über die Anmeldeinformation, die der Server benötigt, um WebAuthn-Bestätigungen durchzuführen, wie z. B. seine Anmeldeinformationen-ID und den öffentlichen Schlüssel. Verfügbar in der {{domxref("PublicKeyCredential.response", "response")}}-Eigenschaft der {{domxref("PublicKeyCredential")}}-Instanz, die erhalten wird, wenn der `create()` {{jsxref("Promise")}} erfüllt wird.
- {{domxref("AuthenticatorResponse")}}
  - : Die Basisschnittstelle für {{domxref("AuthenticatorAttestationResponse")}} und {{domxref("AuthenticatorAssertionResponse")}}.
- {{domxref("PublicKeyCredential")}}
  - : Bietet Informationen über ein öffentliches/private Schlüssel-Paar, das eine Anmeldeinformation für die Anmeldung bei einem Dienst mit einem un-phishable und datenschutzsicheren asymmetrischen Schlüsselpaar anstelle eines Passworts darstellt. Wird erhalten, wenn der zurückgegebene {{jsxref("Promise")}} über einen {{domxref("CredentialsContainer.create", "create()")}}- oder {{domxref("CredentialsContainer.get", "get()")}}-Aufruf erfüllt wird.

## Erweiterungen zu anderen Schnittstellen

- {{domxref("CredentialsContainer.create()")}}, die `publicKey`-Option
  - : Ein Aufruf von `create()` mit einer `publicKey`-Option initiiert die Erstellung neuer asymmetrischer Schlüsselanmeldeinformationen über einen Authentifikator, wie oben erläutert.
- {{domxref("CredentialsContainer.get()")}}, die `publicKey`-Option
  - : Ein Aufruf von `get()` mit einer `publicKey`-Option weist den Nutzeragenten an, einen bestehenden Satz von Anmeldeinformationen zu verwenden, um sich bei einer Relying Party zu authentifizieren.

## Beispiele

### Demo-Seiten

- [Mozilla Demo](https://webauthn.bin.coffee/) Webseite und ihr [Quellcode](https://github.com/jcjones/webauthn.bin.coffee).
- [Google Demo](https://try-webauthn.appspot.com/) Webseite und ihr [Quellcode](https://github.com/google/webauthndemo).
- [WebAuthn.io Demo](https://webauthn.io/) Webseite und ihr [Quellcode](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) und ihr [Client-Quellcode](https://github.com/webauthn-open-source/webauthn-simple-app) sowie [Server-Quellcode](https://github.com/webauthn-open-source/fido2-lib)

### Nutzungbeispiel

> [!NOTE]
> Aus Sicherheitsgründen werden die Web-Authentifizierungs-API-Aufrufe ({{domxref("CredentialsContainer.create", "create()")}} und {{domxref("CredentialsContainer.get","get()")}}) abgebrochen, wenn das Browserfenster den Fokus verliert, während der Aufruf aussteht.

```js
// Beispielargumente für Registrierung
const createCredentialDefaultArgs = {
  publicKey: {
    // Relying Party (a.k.a. - Dienst):
    rp: {
      name: "Acme",
    },
    // Benutzer:
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
      // muss eine kryptographisch zufällige Zahl sein, die von einem Server gesendet wird
      0x8c, 0x0a, 0x26, 0xff, 0x22, 0x91, 0xc1, 0xe9, 0xb9, 0x4e, 0x2e, 0x17,
      0x1a, 0x98, 0x6a, 0x73, 0x71, 0x9d, 0x43, 0x48, 0xd5, 0xa7, 0x6a, 0x15,
      0x7e, 0x38, 0x94, 0x52, 0x77, 0x97, 0x0f, 0xef,
    ]).buffer,
  },
};

// Beispielargumente für Login
const getCredentialDefaultArgs = {
  publicKey: {
    timeout: 60000,
    // allowCredentials: [newCredential] // siehe unten
    challenge: new Uint8Array([
      // muss eine kryptographisch zufällige Zahl sein, die von einem Server gesendet wird
      0x79, 0x50, 0x68, 0x71, 0xda, 0xee, 0xee, 0xb9, 0x94, 0xc3, 0xc2, 0x15,
      0x67, 0x65, 0x26, 0x22, 0xe3, 0xf3, 0xab, 0x3b, 0x78, 0x2e, 0xd5, 0x6f,
      0x81, 0x26, 0xe2, 0xa6, 0x01, 0x7d, 0x74, 0x50,
    ]).buffer,
  },
};

// Registrieren / Erstellen einer neuen Anmeldeinformation
navigator.credentials
  .create(createCredentialDefaultArgs)
  .then((cred) => {
    console.log("NEUE ANMELDEINFO", cred);
    // Normalerweise würden die Anmeldeinformationen-IDs, die für ein Konto verfügbar sind, von einem Server kommen
    // aber wir können sie einfach von oben kopieren…
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
    console.log("BEHAUPTUNG", assertion);
  })
  .catch((err) => {
    console.log("FEHLER", err);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
