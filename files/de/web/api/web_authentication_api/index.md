---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Die Web Authentication API (WebAuthn) ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), die eine starke Authentifizierung mit öffentlicher Schlüsselverschlüsselung ermöglicht. Damit wird eine passwortlose Authentifizierung und eine sichere Multi-Faktor-Authentifizierung (MFA) ohne SMS möglich.

## WebAuthn-Konzepte und Nutzung

WebAuthn verwendet [asymmetrische (öffentlicher Schlüssel-) Kryptographie](https://en.wikipedia.org/wiki/Public-key_cryptography) anstelle von Passwörtern oder SMS, um sich bei Websites zu registrieren, zu authentifizieren und zur [Multi-Faktor-Authentifizierung](https://en.wikipedia.org/wiki/Multi-factor_authentication). Dies bietet einige Vorteile:

- **Schutz gegen Phishing:** Ein Angreifer, der eine gefälschte Anmeldeseite erstellt, kann sich nicht als Benutzer anmelden, da die Signatur mit dem {{Glossary("Origin", "Origin")}} der Website variiert.
- **Reduzierter Schaden bei Datenpannen:** Entwickler müssen den öffentlichen Schlüssel nicht hashen. Wenn ein Angreifer Zugang zum öffentlichen Schlüssel erhält, der zur Verifizierung der Authentifizierung genutzt wird, kann er sich nicht authentifizieren, da er den privaten Schlüssel benötigt.
- **Unverwundbar gegen Passwortangriffe:** Einige Benutzer verwenden Passwörter mehrfach und ein Angreifer kann das Passwort eines Benutzers für eine andere Website erlangen (z. B. durch eine Datenpanne). Außerdem sind Textpasswörter viel leichter mit einer Brute-Force-Attacke zu knacken als eine digitale Signatur.

Viele Websites verfügen bereits über Seiten, die den Benutzern ermöglichen, neue Konten zu registrieren oder sich bei einem bestehenden Konto anzumelden. WebAuthn ersetzt oder ergänzt den Authentifizierungsteil des Systems. Es erweitert die [Credential Management API](/de/docs/Web/API/Credential_Management_API), indem es die Kommunikation zwischen dem Benutzeragenten und einem Authentifikator abstrahiert und folgende neue Funktionen bereitstellt:

- Wenn [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option verwendet wird, erstellt der Benutzeragent neue Anmeldedaten über einen Authentifikator – entweder zur Registrierung eines neuen Kontos oder zur Verknüpfung eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.
  - Bei der Registrierung eines neuen Kontos werden diese Anmeldedaten auf einem Server (auch als Dienst oder [relying party](https://en.wikipedia.org/wiki/Relying_party) bezeichnet) gespeichert und können anschließend verwendet werden, um einen Benutzer anzumelden.
  - Das asymmetrische Schlüsselpaar wird im Authentifikator gespeichert, der dann z. B. während der MFA verwendet werden kann, um einen Benutzer bei einer relying party zu authentifizieren. Der Authentifikator kann in den Benutzeragenten eingebettet sein, in ein Betriebssystem wie Windows Hello, oder er kann ein physischer Token sein, wie ein USB- oder Bluetooth-Sicherheitsschlüssel.
- Wenn [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option verwendet wird, nutzt der Benutzeragent einen bestehenden Satz von Anmeldedaten, um sich bei einer relying party zu authentifizieren (entweder als primäre Anmeldung oder um einen zusätzlichen Faktor während der MFA bereitzustellen, wie oben beschrieben).

In ihren grundlegendsten Formen erhalten sowohl `create()` als auch `get()` eine sehr große Zufallszahl, die als "challenge" bezeichnet wird, vom Server und geben die durch den privaten Schlüssel signierte Herausforderung zurück. Dies beweist dem Server, dass ein Benutzer den privaten Schlüssel hat, der für die Authentifizierung erforderlich ist, ohne Geheimnisse über das Netzwerk zu offenbaren.

> [!NOTE]
> Die "challenge" muss ein Puffer aus Zufallsinformationen mit einer Mindestgröße von 16 Byte sein.

### Erstellen eines Schlüsselpaares und Registrierung eines Benutzers

Um zu veranschaulichen, wie der Anmeldevorgang funktioniert, beschreiben wir, wie der typische Ablauf aussieht, wenn ein Benutzer ein Anmeldedatensatz für eine relying party registrieren möchte:

1. Der Server der relying party sendet Benutzer- und relying party-Informationen an die Web-App, die den Registrierungsprozess handhabt, zusammen mit der "challenge", mithilfe eines geeigneten sicheren Mechanismus (zum Beispiel [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)).

   > [!NOTE]
   > Das Format für die Weitergabe von Informationen zwischen dem Server der relying party und der Web-App liegt in der Verantwortung der Anwendung.
   > Ein empfohlener Ansatz ist der Austausch von {{Glossary("JSON_type_representation", "JSON-Typ-Repräsentationsobjekten")}} für Anmeldedaten und Anmeldeoptionen.
   > In der `PublicKeyCredential`-Klasse wurden bequeme Methoden zum Konvertieren dieser JSON-Repräsentationen in das von den Authentifizierungs-APIs erforderte Format erstellt: [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON).

2. Die Web-App initiiert die Erstellung neuer Anmeldedaten über den Authentifikator im Namen der relying party, mittels eines Aufrufs von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create). Dieser Aufruf erhält eine `publicKey`-Option, die Gerätekapazitäten angibt, z. B. ob das Gerät eine eigene Benutzerauthentifizierung bereitstellt (zum Beispiel mit biometrischen Methoden).

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

   Die Parameter des `create()`-Aufrufs werden zusammen mit einem SHA-256-Hash, der signiert ist, an den Authentifikator weitergeleitet, um sicherzustellen, dass er nicht manipuliert wurde.

3. Nachdem der Authentifikator das Einverständnis des Benutzers erhalten hat, generiert er ein Schlüsselpaar und gibt den öffentlichen Schlüssel und die optional signierte Attestation an die Web-App zurück. Dies geschieht, wenn das von `create()` zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form einer Instanz eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält die Attestationsinformationen).

4. Die Web-App leitet das [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Server der relying party weiter, erneut mithilfe eines geeigneten Mechanismus.

5. Der Server der relying party speichert den öffentlichen Schlüssel zusammen mit der Benutzeridentität, um sich das Anmeldedatensatz für zukünftige Authentifizierungen zu merken. Bei diesem Prozess werden eine Reihe von Prüfungen durchgeführt, um sicherzustellen, dass die Registrierung vollständig und nicht manipuliert war. Dazu gehören:

   1. Überprüfen, dass die Herausforderung dieselbe ist wie die, die gesendet wurde.
   2. Sicherstellen, dass der Ursprung der war, der erwartet wurde.
   3. Validieren, dass die Signatur und die Attestation die richtige Zertifikatskette für das spezifische Modell des zur Generierung des Schlüsselpaares verwendeten Authentifikators nutzen.

> [!WARNING]
> Attestation bietet einer relying party die Möglichkeit, die Herkunft eines Authentifikators zu bestimmen. Relying parties sollten nicht versuchen, Allowlisten von Authentifikatoren zu führen.

### Authentifizierung eines Benutzers

Nachdem ein Benutzer sich mit WebAuthn registriert hat, kann er sich mit dem Dienst authentifizieren (einloggen). Der Authentifizierungsprozess sieht ähnlich aus wie der Registrierungsprozess, mit dem Hauptunterschied, dass die Authentifizierung:

1. Keine Benutzer- oder relying party-Informationen benötigt
2. Ein Assertion mit dem zuvor für den Dienst generierten Schlüsselpaar erstellt, anstatt dem Schlüsselpaar des Authentifikators.

Ein typischer Authentifizierungsprozess sieht wie folgt aus:

1. Die relying party generiert eine "challenge" und sendet sie zusammen mit einer Liste von relying party- und Benutzer-Anmeldedaten mithilfe eines geeigneten sicheren Mechanismus an den Benutzeragenten. Es kann auch angegeben werden, wo nach dem Anmeldedatensatz gesucht werden soll, z. B. auf einem lokalen eingebauten Authentifikator oder auf einem externen über USB, BLE usw.

2. Der Browser fordert den Authentifikator auf, die Herausforderung über einen Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) zu signieren, der die Anmeldedaten in einer `publicKey`-Option übergibt.

   Ein typischer `get()`-Aufruf könnte wie folgt aussehen:

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

   Die Parameter des `get()`-Aufrufs werden an den Authentifikator übergeben, um die Authentifizierung durchzuführen.

3. Wenn der Authentifikator eines der gegebenen Anmeldedaten enthält und in der Lage ist, die Herausforderung erfolgreich zu signieren, gibt er eine signierte Assertion an die Web-App zurück, nachdem er die Einwilligung des Benutzers erhalten hat. Dies geschieht, wenn das von `get()` zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form einer Instanz eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält die Assertion-Informationen).

4. Die Web-App leitet die signierte Assertion an den Server der relying party weiter, damit die relying party sie validieren kann. Die Validierungsprüfungen umfassen:

   1. Nutzung des während der Registrierungsanfrage gespeicherten öffentlichen Schlüssels zur Validierung der Signatur durch den Authentifikator.
   2. Sicherstellen, dass die Herausforderung, die vom Authentifikator signiert wurde, mit der vom Server generierten Herausforderung übereinstimmt.
   3. Überprüfen, dass die Relying Party ID diejenige ist, die für diesen Dienst erwartet wurde.

5. Sobald die Prüfung durch den Server abgeschlossen ist, gilt der Authentifizierungsprozess als erfolgreich.

### Entdeckbare Anmeldedaten und bedingte Mediation

**Entdeckbare Anmeldedaten** werden von einem Authentifikator – _entdeckt_ durch den Browser – abgerufen, um als Anmeldeoptionen angeboten zu werden, wenn der Benutzer sich bei einer relying party Web-App anmeldet. Im Gegensatz dazu werden nicht-entdeckbare Anmeldedaten vom Server der relying party bereitgestellt, damit der Browser sie als Anmeldeoptionen anbieten kann.

Entdeckbare Anmelde-ID und zugehörige Metadaten wie [Benutzernamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#name_2) und [Anzeigenamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#displayname) werden in einem clientseitigen Authentifikator wie einem Browser-Passwortmanager, einer Authentifikator-App oder einer Hardwarelösung wie einem YubiKey gespeichert. Wenn diese Informationen im Authentifikator verfügbar sind, kann sich der Benutzer bequem anmelden, ohne Anmeldedaten angeben zu müssen, und die relying party muss keine [`credentialId`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) bereitstellen, wenn sie eine Assertion erstellt (obwohl sie dies tun kann, wenn gewünscht; wenn das Anmeldedatensatz von der RP gemacht wird, wird der nicht-entdeckbare Workflow befolgt).

Ein entdeckbares Anmeldedatensatz wird über einen [`create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufruf mit einem angegebenen [`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) erstellt. Die `credentialId`, Benutzermetadaten und der öffentliche Schlüssel für das neue Anmeldedatensatz werden wie oben besprochen vom Authentifikator gespeichert, aber auch an die Web-App zurückgegeben und auf dem RP-Server gespeichert.

Um sich zu authentifizieren, ruft der RP-Server [`get()`](/de/docs/Web/API/CredentialsContainer/get) mit **bedingter Mediation** auf, das heißt [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) auf `conditional` gesetzt, eine leere [`allowCredentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials)-Liste (was bedeutet, dass nur entdeckbare Anmeldedaten angezeigt werden können) und eine Herausforderung.

Bedingte Mediation führt dazu, dass entdeckbare Anmeldedaten im Authentifikator dem Benutzer in einer nicht-modalen Benutzeroberfläche zusammen mit einem Hinweis auf den Ursprung, der Anmeldedaten anfordert, präsentiert werden, anstatt in einem modalen Dialog. In der Praxis bedeutet dies, verfügbare Anmeldedaten in Ihren Anmeldeformularen automatisch auszufüllen. Die in entdeckbaren Anmeldedaten gespeicherten Metadaten können angezeigt werden, um Benutzern bei der Auswahl eines Anmeldedatensatzes beim Anmelden zu helfen. Um entdeckbare Anmeldedaten in Ihren Anmeldeformularen anzuzeigen, müssen Sie auch [`autocomplete="webauthn"`](/de/docs/Web/HTML/Attributes/autocomplete#webauthn) in Ihren Formularfeldern einfügen.

Um es noch einmal zu betonen: Die relying party teilt dem Authentifikator nicht mit, welche Anmeldedaten den Benutzern angeboten werden sollen – stattdessen liefert der Authentifikator die Liste, die er verfügbar hat. Sobald der Benutzer ein Anmeldedatensatz auswählt, verwendet der Authentifikator es, um die Herausforderung mit dem zugehörigen privaten Schlüssel zu signieren, und der Browser gibt die signierte Herausforderung und ihre `credentialId` an den RP-Server zurück.

Der anschließende Authentifizierungsprozess auf dem RP-Server ist der gleiche wie bei nicht-entdeckbaren Anmeldedaten.

> [!NOTE]
> Sie können überprüfen, ob bedingte Mediation auf einem bestimmten Benutzeragenten verfügbar ist, indem Sie die Methode [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable) aufrufen.

[Passkeys](https://passkeys.dev/) sind ein bedeutender Anwendungsfall für entdeckbare Anmeldedaten; siehe [Create a passkey for passwordless logins](https://web.dev/articles/passkey-registration) und [Sign in with a passkey through form autofill](https://web.dev/articles/passkey-form-autofill) für Implementierungsdetails. Siehe auch [Discoverable credentials deep dive](https://web.dev/articles/webauthn-discoverable-credentials) für allgemeine Informationen zu entdeckbaren Anmeldedaten.

Bei Verwendung der bedingten Mediation zur Authentifizierung wird die Flagge "prevent silent access" (siehe [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)) als `true` behandelt, unabhängig von ihrem tatsächlichen Wert: Das bedingte Verhalten beinhaltet immer irgendeine Art von Benutzervermittlung, wenn entsprechende Anmeldedaten entdeckt werden.

> [!NOTE]
> Wenn keine Anmeldedaten entdeckt werden, wird der nicht-modale Dialog nicht sichtbar sein, und der Benutzeragent kann den Benutzer auffordern, etwas zu tun, abhängig von der Art der Anmeldedaten (zum Beispiel ein Gerät einzustecken, das Anmeldedaten enthält).

#### Methoden zur Synchronisierung entdeckbarer Anmeldedaten

Es ist möglich, dass die im Authentifikator eines Benutzers gespeicherten Informationen über eine entdeckbare Anmeldedaten mit dem Server der relying party nicht synchronisiert sind. Dies könnte geschehen, wenn der Benutzer ein Anmeldedatensatz löscht oder seinen Benutzer-/Anzeigenamen in der RP-Web-App ändert, ohne den Authentifikator zu aktualisieren.

Die API stellt Methoden zur Verfügung, mit denen der Server der relying party dem Authentifikator Änderungen signalisieren kann, damit er seine gespeicherten Anmeldedaten aktualisieren kann:

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static): Signalisiert dem Authentifikator alle gültigen Anmelde-IDs, die der RP-Server noch für einen bestimmten Benutzer hält.
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static): Signalisiert dem Authentifikator, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeigenamen auf dem RP-Server aktualisiert hat.
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static): Signalisiert dem Authentifikator, dass eine Anmelde-ID vom RP-Server nicht erkannt wurde.

Es mag scheinen, dass `signalUnknownCredential()` und `signalAllAcceptedCredentials()` ähnliche Zwecke haben, aber in welcher Situation sollte welche verwendet werden?

- `signalAllAcceptedCredentials()` sollte nach jeder erfolgreichen Anmeldung aufgerufen werden und wenn der Benutzer angemeldet ist und Sie den Status seiner Anmeldedaten aktualisieren möchten. Es darf nur aufgerufen werden, wenn ein Benutzer authentifiziert ist, da die gesamte Liste der `credentialId`s für einen bestimmten Benutzer geteilt wird. Dies würde ein Datenschutzauslaufen verursachen, wenn der Benutzer nicht authentifiziert ist.
- `signalUnknownCredential()` sollte nach einer erfolglosen Anmeldung aufgerufen werden, um dem Authentifikator zu signalisieren, dass die `credentialId` des ausgewählten Anmeldedatensatzes nicht validiert werden kann und entfernt werden sollte. Die Methode kann sicher aufgerufen werden, wenn der Benutzer nicht authentifiziert ist, da sie eine einzelne `credentialId` an den Authentifikator übermittelt – diejenige, mit der der Client gerade versucht hat, sich zu authentifizieren – und keine Benutzerinformationen enthält.

### Anpassung von Workflows basierend auf Client-Fähigkeiten

Die Registrierungs- und Anmelde-Workflows können basierend auf den Fähigkeiten des WebAuthn-Clients (Browser) angepasst werden. Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) kann verwendet werden, um diese Fähigkeiten abzufragen; sie gibt ein Objekt zurück, bei dem jeder Schlüssel einer WebAuthn-Fähigkeit oder -Erweiterung entspricht und jeder Wert ein boolesches Flag darstellt, das die Unterstützung dieser Funktion angibt.

Dies kann zum Beispiel verwendet werden, um zu überprüfen:

- Unterstützung des Clients für verschiedene Authentifikatoren wie Passkeys oder biometrische Benutzerauthentifizierung.
- Ob der Client [Methoden unterstützt, um relying party und Authentifikator-Anmeldedaten zu synchronisieren](#methoden_zur_synchronisierung_entdeckbarer_anmeldedaten).
- Ob der Client erlaubt, dass ein einzelner Passkey auf verschiedenen Websites mit demselben Ursprung verwendet wird.

Der Code unten zeigt, wie Sie `getClientCapabilities()` verwenden könnten, um zu überprüfen, ob der Client Authentifikatoren unterstützt, die biometrische Benutzerauthentifizierung bieten.
Beachten Sie, dass die tatsächlich durchgeführten Aktionen von Ihrer Website abhängen.
Für Websites, die _biometrische Authentifizierung_ erfordern, könnten Sie die Anmelde-Benutzeroberfläche durch eine Nachricht ersetzen, die angibt, dass biometrische Authentifizierung nötig ist und der Benutzer einen anderen Browser oder ein anderes Gerät ausprobieren sollte.

```js
async function checkIsUserVerifyingPlatformAuthenticatorAvailable() {
  const capabilities = await PublicKeyCredential.getClientCapabilities();
  // Check the capability: userVerifyingPlatformAuthenticator
  if (capabilities.userVerifyingPlatformAuthenticator) {
    // Perform actions if biometric support is available
  } else {
    // Perform actions if biometric support is not available.
  }
}
```

## Zugriffskontrolle zur API

Die Verfügbarkeit von WebAuthn kann durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden, die insbesondere zwei Direktiven festlegt:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Kontrolliert die Verfügbarkeit von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Kontrolliert die Verfügbarkeit von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option.

Beide Direktiven haben einen Standard-Whitelist-Wert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in Kontexten des obersten Dokuments genutzt werden können.
Darüber hinaus kann `get()` in verschachtelten Browsing-Kontexten verwendet werden, die vom selben Ursprung wie das oberste Dokument geladen wurden.
`get()` und `create()` können in verschachtelten Browsing-Kontexten verwendet werden, die von anderen Ursprüngen als das oberste Dokument geladen wurden (d.h. in cross-origin `<iframem>`), wenn dies durch die Direktiven [`publickey-credentials-get`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-get) und [`publickey-credentials-create`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create) der `Permission-Policy` erlaubt ist.
Für cross-origin `create()`-Anrufe, bei denen die Berechtigung durch [`allow=` auf einem iframe](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) gewährt wurde, muss der Frame auch über eine {{Glossary("Transient_activation", "Transiente Aktivierung")}} verfügen.

> [!NOTE]
> Wo eine Richtlinie die Nutzung dieser Methoden verbietet, wird das zurückgegebene {{jsxref("Promise", "promises", "", 1)}} von ihnen mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

### Grundlegende Zugangskontrolle

Wenn Sie den Zugriff auf eine bestimmte Subdomain erlauben möchten, könnten Sie sie folgendermaßen angeben:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Einbetten von `create`- und `get()`-Aufrufen in ein `<iframe>` erlauben

Wenn Sie die Authentifizierung mit `get()` oder `create()` in einem `<iframe>` durchführen möchten, sind ein paar Schritte zu befolgen:

1. Die Website, die die relying party-Seite einbettet, muss die Erlaubnis über ein `allow`-Attribut bereitstellen:

   - Bei der Verwendung von `get()`:

     ```html
     <iframe
       src="https://auth.provider.com"
       allow="publickey-credentials-get *">
     </iframe>
     ```

   - Bei der Verwendung von `create()`:

     ```html
     <iframe
       src="https://auth.provider.com"
       allow="publickey-credentials-create 'self' https://a.auth.provider.com https://b.auth.provider.com">
     </iframe>
     ```

     Das `<iframe>` muss auch über eine {{Glossary("Transient_activation", "Transiente Aktivierung")}} verfügen, wenn `create()` cross-origin aufgerufen wird.

2. Die relying party-Seite muss die Erlaubnis für den obigen Zugriff über einen `Permissions-Policy`-Header bereitstellen:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   Oder um nur eine bestimmte URL zu erlauben, die relying party-Seite in einem `<iframe>` einzubetten:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## Schnittstellen

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)
  - : Liefert einem Dienst den Nachweis, dass ein Authentifikator das benötigte Schlüsselpaar hat, um eine Authentifizierungsanfrage zu bearbeiten, die durch einen Aufruf von [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) initiiert wurde. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die erhalten wird, wenn das `get()`-{{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)
  - : Das Ergebnis einer WebAuthn-Anmeldedatenregistrierung (d.h. ein Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create)). Es enthält Informationen über die Anmeldedaten, die der Server benötigt, um WebAuthn-Assertions durchzuführen, wie seine Anmelde-ID und öffentlichen Schlüssel. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die erhalten wird, wenn das `create()`-{{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)
  - : Die Basisschnittstelle für [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) und [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
  - : Stellt Informationen über ein öffentliches / privates Schlüsselpaar bereit, das als Anmeldedatensatz für den Zugriff auf einen Dienst unter Verwendung eines nicht phishbaren und datenpannenresistenten asymmetrischen Schlüsselpaares anstelle eines Passworts verwendet werden kann. Wird erhalten, wenn das via einem Aufruf von `create()` oder `get()` zurückgegebene {{jsxref("Promise")}} erfüllt wird.

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die `publicKey`-Option
  - : Ein Aufruf von `create()` mit einer `publicKey`-Option initiiert die Erstellung neuer asymmetrischer Schlüsselanmeldedaten über einen Authentifikator, wie oben erläutert.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `publicKey`-Option
  - : Ein Aufruf von `get()` mit einer `publicKey`-Option weist den Benutzeragenten an, ein bestehendes Anmeldedatensatz zu nutzen, um sich bei einer relying party zu authentifizieren.

## Beispiele

### Demo-Seiten

- [Mozilla Demo](https://webauthn.bin.coffee/) Website und deren [Quellcode](https://github.com/jcjones/webauthn.bin.coffee).
- [Google Demo](https://try-webauthn.appspot.com/) Website und deren [Quellcode](https://github.com/google/webauthndemo).
- [WebAuthn.io Demo](https://webauthn.io/) Website und deren [Quellcode](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) und deren [Client-Quellcode](https://github.com/webauthn-open-source/webauthn-simple-app) und [Server-Quellcode](https://github.com/webauthn-open-source/fido2-lib)

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
