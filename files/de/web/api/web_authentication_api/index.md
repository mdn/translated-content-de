---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: 4f8c4b31478742a2a39fdb03993d08fc1c90bbea
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Die Web-Authentifizierungs-API (WebAuthn) ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), die eine starke Authentifizierung mit Public-Key-Kryptographie ermöglicht. Sie erlaubt eine passwortlose Authentifizierung und sichere Multi-Faktor-Authentifizierung (MFA) ohne SMS.

## WebAuthn-Konzepte und Nutzung

WebAuthn verwendet [asymmetrische (Public-Key-) Kryptographie](https://en.wikipedia.org/wiki/Public-key_cryptography) anstelle von Passwörtern oder SMS für die Registrierung, Authentifizierung und [Multi-Faktor-Authentifizierung](https://en.wikipedia.org/wiki/Multi-factor_authentication) mit Websites. Das hat einige Vorteile:

- **Schutz vor Phishing:** Ein Angreifer, der eine gefälschte Login-Website erstellt, kann sich nicht als Benutzer anmelden, da die Signatur sich mit dem {{Glossary("Origin", "Origin")}} der Webseite ändert.
- **Verringerter Einfluss von Datenverletzungen:** Entwickler müssen den öffentlichen Schlüssel nicht hashen, und wenn ein Angreifer Zugriff auf den zur Authentifizierungsüberprüfung verwendeten öffentlichen Schlüssel erhält, kann er sich nicht authentifizieren, da er den privaten Schlüssel benötigt.
- **Unverwundbar gegenüber Passwortangriffen:** Einige Benutzer können Passwörter wiederverwenden, und ein Angreifer könnte das Passwort eines Benutzers für eine andere Website erhalten (z.B. durch eine Datenverletzung). Außerdem sind Textpasswörter viel leichter bruteforce-anfällig als eine digitale Signatur.

Viele Websites haben bereits Seiten, die den Nutzern erlauben, neue Konten zu registrieren oder sich in ein bestehendes Konto einzuloggen. WebAuthn fungiert als Ersatz oder Erweiterung des Authentifizierungsteils des Systems. Es erweitert die [Credential Management API](/de/docs/Web/API/Credential_Management_API), abstrahiert die Kommunikation zwischen dem Benutzeragenten und einem Authentifikator und bietet folgende neue Funktionen:

- Wenn [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey` Option verwendet wird, erstellt der Benutzeragent neue Anmeldeinformationen über einen Authentifikator - entweder zur Registrierung eines neuen Kontos oder zur Verknüpfung eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.
  - Bei der Registrierung eines neuen Kontos werden diese Anmeldeinformationen auf einem Server gespeichert (auch als Dienst oder [Relying Party](https://en.wikipedia.org/wiki/Relying_party) bezeichnet) und können anschließend verwendet werden, um einen Nutzer einzuloggen.
  - Das asymmetrische Schlüsselpaar wird im Authentifikator gespeichert, der dann verwendet werden kann, um einen Benutzer bei einer Relying Party zu authentifizieren, beispielsweise während der MFA. Der Authentifikator kann in den Benutzeragenten eingebettet sein, in einem Betriebssystem wie Windows Hello, oder es kann sich um ein physisches Token wie einen USB- oder Bluetooth-Sicherheitsschlüssel handeln.
- Wenn [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey` Option verwendet wird, verwendet der Benutzeragent ein vorhandenes Set von Anmeldeinformationen, um sich bei einer Relying Party zu authentifizieren (entweder als Haupt-Login oder um einen zusätzlichen Faktor während der oben beschriebenen MFA bereitzustellen).

In ihren einfachsten Formen erhalten sowohl `create()` als auch `get()` eine sehr große Zufallsnummer, die "challenge" genannt wird, vom Server und geben die von dem privaten Schlüssel signierte Herausforderung zurück an den Server. Dies beweist dem Server, dass ein Benutzer den für die Authentifizierung erforderlichen privaten Schlüssel besitzt, ohne irgendwelche Geheimnisse über das Netzwerk preiszugeben.

> [!NOTE]
> Die "challenge" muss ein Puffer aus zufälligen Informationen von mindestens 16 Bytes Größe sein.

### Erstellen eines Schlüsselpaares und Registrierung eines Benutzers

Um zu veranschaulichen, wie der Prozess der Anmeldeinformationen-Erstellung funktioniert, lassen Sie uns den typischen Ablauf beschreiben, der stattfindet, wenn ein Benutzer ein Credential bei einer Relying Party registrieren möchte:

1. Der Relying-Party-Server sendet Benutzer- und Relying-Party-Informationen an die Web-App, die den Registrierungsprozess handhabt, zusammen mit der "challenge", unter Verwendung eines geeigneten sicheren Mechanismus (zum Beispiel [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)).

   > [!NOTE]
   > Das Format für den Austausch von Informationen zwischen dem Relying-Party-Server und der Web-App ist die Entscheidung der Anwendung.
   > Ein empfohlener Ansatz ist der Austausch von {{Glossary("JSON_type_representation", "JSON-Typrepräsentationen")}} für Anmeldeinformationen und Anmeldeoptionsobjekten.
   > Komfortmethoden wurden in `PublicKeyCredential` erstellt, um von den JSON-Darstellungen in die für die Authentifizierungs-APIs erforderliche Form zu konvertieren: [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON).

2. Die Web-App initiiert die Erstellung eines neuen Anmeldeinstruments über den Authentifikator, im Namen der Relying Party, über einen Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create). Dieser Aufruf erhält eine `publicKey` Option, die Geräteeigenschaften spezifiziert, z.B. ob das Gerät seine eigene Benutzer-Authentifizierung bereitstellt (zum Beispiel mit Biometrie).

   Ein typischer `create()` Aufruf könnte so aussehen:

   ```js
   let credential = await navigator.credentials.create({
     publicKey: {
       challenge: new Uint8Array([117, 61, 252, 231, 191, 241 /* … */]),
       rp: { id: "acme.com", name: "ACME Corporation" },
       user: {
         id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
         name: "jamiedoe",
         displayName: "Jamie Doe",
       },
       pubKeyCredParams: [{ type: "public-key", alg: -7 }],
     },
   });
   ```

   Die Parameter des `create()` Aufrufs werden an den Authentifikator übergeben, zusammen mit einem SHA-256-Hash, der signiert wird, um sicherzustellen, dass er nicht manipuliert wird.

3. Nachdem der Authentifikator die Zustimmung des Benutzers erhält, generiert er ein Schlüsselpaar und gibt den öffentlichen Schlüssel und optional die signierte Bestätigung an die Web-App zurück. Dies wird bereitgestellt, wenn das von `create()` zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält die Bestätigungsinformationen).

4. Die Web-App leitet das [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Relying-Party-Server weiter, erneut über einen geeigneten Mechanismus.

5. Der Server der Relying Party speichert den öffentlichen Schlüssel, gekoppelt mit der Benutzeridentität, um das Anmeldeinstrument für zukünftige Authentifizierungen zu merken. Während dieses Prozesses führt er eine Reihe von Überprüfungen durch, um sicherzustellen, dass die Registrierung abgeschlossen und nicht manipuliert wurde. Dazu gehören:
   1. Verifizierung, dass die Herausforderung die gleiche ist wie die gesendete.
   2. Sicherstellen, dass der Origin der erwartete Origin war.
   3. Validierung, dass die Signatur und die Bestätigung die richtige Zertifizierungskette für das spezifische Modell des zur Erstellung des Schlüsselpaares verwendeten Authentifikators verwenden.

> [!WARNING]
> Die Bestätigung bietet einer Relying Party eine Möglichkeit, die Herkunft eines Authentifikators zu bestimmen. Relying Parties sollten nicht versuchen, Whitelists von Authentifikatoren zu pflegen.

### Authentifizierung eines Benutzers

Nachdem ein Benutzer sich mit WebAuthn registriert hat, kann er sich mit dem Dienst authentifizieren (anmelden). Der Authentifizierungsablauf sieht dem Registrierungsablauf ähnlich, wobei die Hauptunterschiede darin bestehen, dass die Authentifizierung:

1. Keine Benutzer- oder Relying-Party-Informationen erfordert
2. Eine Bestätigung mit dem zuvor für den Dienst erstellten Schlüsselpaar anstelle des Schlüsselpaares des Authentifikators erstellt.

Ein typischer Authentifizierungsablauf ist wie folgt:

1. Die Relying Party generiert eine "challenge" und sendet sie mit einem geeigneten sicheren Mechanismus an den Benutzeragenten sowie eine Liste von Relying-Party- und Benutzeranmeldeinformationen. Sie kann auch angeben, wo das Anmeldeinstrument zu finden ist, z.B. auf einem lokalen eingebauten Authentifikator oder auf einem externen über USB, BLE usw.

2. Der Browser bittet den Authentifikator, die Herausforderung über einen Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) zu signieren, der die Anmeldeinformationen in einer `publicKey` Option übergeben wird.

   Ein typischer `get()` Aufruf könnte so aussehen:

   ```js
   let credential = await navigator.credentials.get({
     publicKey: {
       challenge: new Uint8Array([139, 66, 181, 87, 7, 203 /* … */]),
       rpId: "acme.com",
       allowCredentials: [
         {
           type: "public-key",
           id: new Uint8Array([64, 66, 25, 78, 168, 226, 174 /* … */]),
         },
       ],
       userVerification: "required",
     },
   });
   ```

   Die Parameter des `get()` Aufrufs werden an den Authentifikator übergeben, um die Authentifizierung zu handhaben.

3. Wenn der Authentifikator eine der angegebenen Anmeldeinformationen enthält und die Herausforderung erfolgreich signieren kann, gibt er eine signierte Bestätigung an die Web-App zurück, nachdem er die Zustimmung des Benutzers erhalten hat. Dies wird bereitgestellt, wenn das von `get()` zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält die Bestätigungsinformationen).

4. Die Web-App leitet die signierte Bestätigung an den Relying-Party-Server zur Validierung weiter. Die Validierung umfasst:
   1. Verwendung des während der Registrierungsanfrage gespeicherten öffentlichen Schlüssels zur Validierung der Signatur des Authentifikators.
   2. Sicherstellen, dass die vom Authentifikator signierte Herausforderung mit der vom Server generierten Herausforderung übereinstimmt.
   3. Prüfung, dass die Relying-Party-ID die erwartete für diesen Dienst ist.

5. Sobald der Server verifiziert hat, wird der Authentifizierungsprozess als erfolgreich angesehen.

### Entdeckbare Credentials und bedingte Vermittlung

**Entdeckbare Credentials** werden von einem Authentifikator abgerufen — durch den Browser _entdeckt_ — um sie als Anmeldemöglichkeiten anzubieten, wenn der Benutzer sich bei einer Relying Party Web-App anmeldet. Im Gegensatz dazu werden nicht-entdeckbare Credentials vom Relying-Party-Server bereitgestellt, damit der Browser sie als Anmeldemöglichkeiten anbietet.

Entdeckbare Credential-IDs und zugehörige Metadaten wie [Benutzernamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#name_2) und [Anzeigenamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#displayname) werden in einem clientseitigen Authentifikator wie einem Passwortmanager des Browsers, einer Authentifikator-App oder einer Hardwarelösung wie einem YubiKey gespeichert. Das Vorhandensein dieser Informationen im Authentifikator bedeutet, dass sich der Benutzer bequem anmelden kann, ohne Anmeldeinformationen angeben zu müssen, und die Relying Party muss nicht unbedingt eine [`credentialId`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) angeben, wenn es dies tut (obwohl es dies tun kann; wenn das Credential durch die RP geltend gemacht wird, wird der nicht-entdeckbare Workflow gefolgt).

Ein entdeckbares Credential wird über einen Aufruf von [`create()`](/de/docs/Web/API/CredentialsContainer/create) mit einem spezifizierten [`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) erstellt. Die `credentialId`, Benutzermetadaten und der öffentliche Schlüssel für das neue Credential werden wie oben besprochen durch den Authentifikator gespeichert und auch der Web-App und auf dem RP-Server zurückgegeben.

Um sich zu authentifizieren, ruft der RP-Server [`get()`](/de/docs/Web/API/CredentialsContainer/get) mit **bedingter Vermittlung** auf, also [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) auf `conditional` gesetzt, eine leere Liste [`allowCredentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials) (was bedeutet, dass nur entdeckbare Credentials angezeigt werden können) und eine Herausforderung.

Bedingte Vermittlung führt dazu, dass entdeckbare Credentials, die im Authentifikator gefunden werden, dem Benutzer in einer nicht-modalen Benutzeroberfläche zusammen mit einem Hinweis auf den Origin, der Credentials anfordert, präsentiert werden, anstatt in einem modalen Dialogfeld. In der Praxis bedeutet dies, dass verfügbare Credentials in Ihren Anmeldeformularen automatisch ausgefüllt werden. Die in entdeckbaren Credentials gespeicherten Metadaten können angezeigt werden, um Benutzern bei der Auswahl eines Credentials beim Anmelden zu helfen. Um entdeckbare Credentials in Ihren Anmeldeformularen anzuzeigen, müssen Sie auch [`autocomplete="webauthn"`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#webauthn) in Ihre Formularfelder aufnehmen.

Um es nochmals zu betonen, die Relying Party sagt dem Authentifikator nicht, welche Credentials dem Benutzer angeboten werden sollen — stattdessen stellt der Authentifikator die Liste zur Verfügung, die er hat. Sobald der Benutzer ein Credential auswählt, verwendet der Authentifikator es, um die Herausforderung mit dem zugehörigen privaten Schlüssel zu signieren, und der Browser gibt die signierte Herausforderung und ihre `credentialId` an den RP-Server zurück.

Der anschließende Authentifizierungsprozess auf dem RP-Server ist derselbe wie bei nicht-entdeckbaren Credentials.

> [!NOTE]
> Sie können überprüfen, ob die bedingte Vermittlung auf einem bestimmten Benutzeragenten verfügbar ist, indem Sie die Methode [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) aufrufen.

[Passkeys](https://passkeys.dev/) sind ein bedeutender Anwendungsfall für entdeckbare Credentials; siehe [Create a passkey for passwordless logins](https://web.dev/articles/passkey-registration) und [Sign in with a passkey through form autofill](https://web.dev/articles/passkey-form-autofill) für Implementierungsdetails. Siehe auch [Discoverable credentials deep dive](https://web.dev/articles/webauthn-discoverable-credentials) für allgemeinere Informationen zu entdeckbaren Credentials.

Wenn die bedingte Vermittlung zur Authentifizierung verwendet wird, wird das Verhindern-Silent-Access-Flag (siehe [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)) als `true` behandelt, unabhängig von seinem tatsächlichen Wert: Das bedingte Verhalten beinhaltet immer eine Benutzervermittlung, wenn zutreffende Credentials entdeckt werden.

> [!NOTE]
> Wenn keine Credentials entdeckt werden, wird der nicht-modale Dialog nicht sichtbar, und der Benutzeragent kann den Benutzer auffordern, Maßnahmen zu ergreifen, abhängig von der Art des Credentials (z.B. ein Gerät mit Credentials einzustecken).

#### Synchronisationsmethoden für entdeckbare Credentials

Es ist möglich, dass die im Authentifikator eines Benutzers über ein entdeckbares Credential gespeicherten Informationen nicht mehr mit dem Server der Relying Party synchron sind. Dies könnte passieren, wenn der Benutzer ein Credential löscht oder seinen Benutzer-/Anzeigenamen auf der RP-Web-App ändert, ohne den Authentifikator zu aktualisieren.

Die API bietet Methoden, die es dem Server der Relying Party ermöglichen, dem Authentifikator Änderungen zu signalisieren, damit er seine gespeicherten Credentials aktualisieren kann:

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static): Signalisiert dem Authentifikator alle gültigen Credential-IDs, die der RP-Server für einen bestimmten Benutzer noch besitzt.
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static): Signalisiert dem Authentifikator, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeigenamen auf dem RP-Server aktualisiert hat.
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static): Signalisiert dem Authentifikator, dass eine Credential-ID vom RP-Server nicht erkannt wurde.

Es mag den Anschein haben, dass `signalUnknownCredential()` und `signalAllAcceptedCredentials()` ähnliche Zwecke haben. In welchen Situationen sollte man also jede von ihnen verwenden?

- `signalAllAcceptedCredentials()` sollte nach jedem erfolgreichen Login aufgerufen werden und wenn der Benutzer eingeloggt ist und Sie den Status seiner Credentials aktualisieren möchten. Es muss nur aufgerufen werden, wenn ein Benutzer authentifiziert ist, da es die gesamte Liste der `credentialId`s für einen bestimmten Benutzer teilt. Dies würde ein Datenschutzleck verursachen, wenn der Benutzer nicht authentifiziert ist.
- `signalUnknownCredential()` sollte nach einem erfolglosen Login aufgerufen werden, um dem Authentifikator zu signalisieren, dass die `credentialId` des ausgewählten Credentials nicht validiert werden kann und entfernt werden sollte. Die Methode kann sicher aufgerufen werden, wenn der Benutzer nicht authentifiziert ist, da sie eine einzelne `credentialId` an den Authentifikator übergibt — die, mit der der Client gerade versucht hat, sich zu authentifizieren — und keine Benutzerinformationen.

### Anpassen von Workflows basierend auf clientseitigen Fähigkeiten

Die Anmelde- und Login-Workflows können basierend auf den Fähigkeiten des WebAuthn-Clients (Browser) angepasst werden. Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) kann verwendet werden, um diese Fähigkeiten abzufragen; sie gibt ein Objekt zurück, bei dem jeder Schlüssel auf eine WebAuthn-Fähigkeit oder -Erweiterung verweist und jeder Wert ein Boolean ist, das die Unterstützung für dieses Merkmal anzeigt.

Dies kann verwendet werden, um zum Beispiel zu überprüfen:

- Clientunterstützung für verschiedene Authentifikatoren wie Passkeys oder biometrische Benutzervalidierung.
- Ob der Client [Methoden unterstützt, um Credentials der Relying Party und des Authentifikators synchron zu halten](#synchronisationsmethoden_für_entdeckbare_credentials).
- Ob der Client erlaubt, dass ein einzelner Passkey auf verschiedenen Websites mit demselben Origin verwendet wird.

Der untenstehende Code zeigt, wie Sie `getClientCapabilities()` verwenden könnten, um zu überprüfen, ob der Client Authentifikatoren unterstützt, die eine biometrische Benutzervalidierung bieten.
Beachten Sie, dass die tatsächlichen durchgeführten Aktionen von Ihrer Website abhängen.
Auf Websites, die _biometrische Authentifizierung erfordern_, könnten Sie die Anmelde-Benutzeroberfläche durch eine Nachricht ersetzen, die angibt, dass biometrische Authentifizierung erforderlich ist und der Benutzer einen anderen Browser oder ein anderes Gerät ausprobieren sollte.

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

## Kontrolle des Zugriffs auf die API

Die Verfügbarkeit von WebAuthn kann durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden, wobei insbesondere zwei Direktiven spezifiziert werden:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Steuert die Verfügbarkeit von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey` Option.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Steuert die Verfügbarkeit von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey` Option.

Beide Direktiven haben einen Standardwert der Positivliste `"self"`, was bedeutet, dass diese Methoden standardmäßig in den Kontexten des obersten Dokuments verwendet werden können.
Zusätzlich kann `get()` in verschachtelten Browsing-Kontexten verwendet werden, die vom gleichen Origin wie das oberste Dokument geladen wurden.
`get()` und `create()` können in verschachtelten Browsing-Kontexten verwendet werden, die von anderen Origins als dem obersten Dokument geladen werden (d.h. in Cross-Origin-`<iframes>`), wenn dies von den `Permissions-Policy` Direktiven [`publickey-credentials-get`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-get) und [`publickey-credentials-create`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create) erlaubt wird.
Für Cross-Origin-`create()` Aufrufe, bei denen die Berechtigung durch [`allow=` auf einem Iframe](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) gewährt wurde, muss der Frame auch eine {{Glossary("Transient_activation", "transiente Aktivierung")}} haben.

> [!NOTE]
> Wo eine Richtlinie die Verwendung dieser Methoden verbietet, wird das von ihnen zurückgegebene {{jsxref("Promise", "Versprechen", "", 1)}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

### Grundlegende Zugangskontrolle

Wenn Sie den Zugriff nur auf eine bestimmte Subdomain erlauben möchten, könnten Sie sie so angeben:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Erlauben eingebetteter `create` und `get()` Aufrufe in einem `<iframe>`

Wenn Sie mit `get()` oder `create()` in einem `<iframe>` authentifizieren möchten, sind ein paar Schritte zu befolgen:

1. Die Seite, die die Relying Party-Seite einbettet, muss eine Berechtigung über ein `allow` Attribut bereitstellen:
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

     Der `<iframe>` muss auch eine {{Glossary("Transient_activation", "transiente Aktivierung")}} haben, wenn `create()` Cross-Origin aufgerufen wird.

2. Die Relying Party-Seite muss die Berechtigung für den obigen Zugriff über einen `Permissions-Policy` Header bereitstellen:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   Oder um nur eine bestimmte URL zu erlauben, die Relying Party-Seite in ein `<iframe>` einzubetten:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## Schnittstellen

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)
  - : Bietet einem Dienst den Nachweis, dass ein Authentifikator das notwendige Schlüsselpaar hat, um erfolgreich eine Authentifizierungsanfrage zu behandeln, die durch einen Aufruf von [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) initiiert wurde. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Instanz, die erhalten wird, wenn das `get()` {{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)
  - : Das Resultat einer WebAuthn-Anmeldeinformationen-Registrierung (d.h. ein [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) Aufruf). Es enthält Informationen über die Anmeldeinformationen, die der Server benötigt, um WebAuthn-Bestätigungen durchzuführen, wie die Credential-ID und den öffentlichen Schlüssel. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Instanz, die erhalten wird, wenn das `create()` {{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)
  - : Die Basisschnittstelle für [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) und [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
  - : Bietet Informationen über ein öffentliches / privates Schlüsselpaar, das eine Anmeldeinformation für das Einloggen in einen Dienst mit einem unphishbaren und datenschutzverletzungsresistenten asymmetrischen Schlüsselpaar anstelle eines Passworts ist. Erhalten, wenn das über [`create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`get()`](/de/docs/Web/API/CredentialsContainer/get) zurückgegebene {{jsxref("Promise")}} erfüllt wird.

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die `publicKey` Option
  - : Ein Aufruf von `create()` mit einer `publicKey` Option initiiert die Erstellung neuer asymmetrischer Schlüssel-Anmeldedaten durch einen Authentifikator, wie oben erläutert.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `publicKey` Option
  - : Ein Aufruf von `get()` mit einer `publicKey` Option weist den Benutzeragenten an, ein vorhandenes Set von Anmeldeinformationen zu verwenden, um sich bei einer Relying Party zu authentisieren.

## Beispiele

### Demo-Seiten

- Die [Mozilla Demo](https://webauthn.bin.coffee/) Website und deren [Quellcode](https://github.com/jcjones/webauthn.bin.coffee).
- Die [Google Demo](https://try-webauthn.appspot.com/) Website und deren [Quellcode](https://github.com/google/webauthndemo).
- Die [WebAuthn.io Demo](https://webauthn.io/) Website und deren [Quellcode](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) und deren [Client-Quellcode](https://github.com/webauthn-open-source/webauthn-simple-app) und [Server-Quellcode](https://github.com/webauthn-open-source/fido2-lib)

### Anwendungsbeispiel

> [!NOTE]
> Aus Sicherheitsgründen werden die Aufrufe der Web-Authentifizierungs-API ([`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`get()`](/de/docs/Web/API/CredentialsContainer/get)) abgebrochen, wenn das Browser-Fenster den Fokus verliert, während der Aufruf aussteht.

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
