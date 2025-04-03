---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Die Web Authentication API (WebAuthn) ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), die eine starke Authentifizierung mit öffentlicher Schlüsselkryptographie ermöglicht, was passwortlose Authentifizierung und sichere Multi-Faktor-Authentifizierung (MFA) ohne SMS-Nachrichten erlaubt.

## WebAuthn-Konzepte und Nutzung

WebAuthn verwendet [asymmetrische (öffentliche Schlüssel-) Kryptographie](https://en.wikipedia.org/wiki/Public-key_cryptography) anstelle von Passwörtern oder SMS-Nachrichten zur Registrierung, Authentifizierung und [Multi-Faktor-Authentifizierung](https://en.wikipedia.org/wiki/Multi-factor_authentication) auf Websites. Dies bringt einige Vorteile mit sich:

- **Schutz vor Phishing:** Ein Angreifer, der eine gefälschte Login-Website erstellt, kann sich nicht als Benutzer anmelden, da sich die Signatur mit dem {{Glossary("Origin", "Ursprung")}} der Website ändert.
- **Reduzierte Auswirkungen von Datenverletzungen:** Entwickler müssen den öffentlichen Schlüssel nicht hashen, und wenn ein Angreifer Zugriff auf den öffentlichen Schlüssel erhält, der zur Überprüfung der Authentifizierung verwendet wird, kann er sich nicht authentifizieren, da der private Schlüssel benötigt wird.
- **Unverwundbar für Passwortangriffe:** Manche Benutzer verwenden Passwörter mehrfach, und ein Angreifer könnte das Passwort des Benutzers für eine andere Website erlangen (z. B. durch eine Datenverletzung). Auch sind Textpasswörter viel einfacher mit roher Gewalt zu knacken als eine digitale Signatur.

Viele Websites haben bereits Seiten, die das Registrieren neuer Konten oder das Einloggen in ein bestehendes Konto erlauben, und WebAuthn ersetzt oder verbessert den Authentifizierungsteil des Systems. Es erweitert die [Credential Management API](/de/docs/Web/API/Credential_Management_API), indem es die Kommunikation zwischen dem Benutzeragent und einem Authenticator abstrahiert und die folgende neue Funktionalität bereitstellt:

- Wenn [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der Option `publicKey` verwendet wird, erstellt der Benutzeragent neue Anmeldedaten über einen Authenticator — entweder zum Registrieren eines neuen Kontos oder zum Verknüpfen eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.
  - Bei der Registrierung eines neuen Kontos werden diese Anmeldedaten auf einem Server (auch als Dienst oder [Relying Party](https://en.wikipedia.org/wiki/Relying_party) bezeichnet) gespeichert und können anschließend verwendet werden, um einen Benutzer anzumelden.
  - Das asymmetrische Schlüsselpaar wird im Authenticator gespeichert, der dann verwendet werden kann, um einen Benutzer mit einer Relying Party zu authentifizieren, zum Beispiel während MFA. Der Authenticator kann in den Benutzeragent, in ein Betriebssystem wie Windows Hello eingebettet oder ein physisches Token wie ein USB- oder Bluetooth-Sicherheitsschlüssel sein.
- Wenn [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der Option `publicKey` verwendet wird, nutzt der Benutzeragent einen vorhandenen Satz von Anmeldeinformationen, um sich bei einer Relying Party zu authentifizieren (entweder als primäre Anmeldung oder um einen zusätzlichen Faktor während der MFA zu bieten, wie oben beschrieben).

In ihren grundlegendsten Formen empfangen sowohl `create()` als auch `get()` eine sehr große Zufallszahl, die als "Herausforderung" bezeichnet wird, vom Server und senden die Herausforderung, die vom privaten Schlüssel signiert ist, zurück an den Server. Dies beweist dem Server, dass ein Benutzer den für die Authentifizierung erforderlichen privaten Schlüssel besitzt, ohne irgendwelche Geheimnisse über das Netzwerk preiszugeben.

> [!NOTE]
> Die "Herausforderung" muss ein Puffer mit zufälligen Informationen von mindestens 16 Byte Größe sein.

### Ein Schlüsselpaar erstellen und einen Benutzer registrieren

Um zu veranschaulichen, wie der Prozess der Anmeldeinformationen-Erstellung funktioniert, beschreiben wir den typischen Ablauf, der auftritt, wenn ein Benutzer eine Anmeldeinformation bei einer Relying Party registrieren möchte:

1. Der Relying Party-Server sendet Benutzer- und Relying Party-Informationen zusammen mit der "Herausforderung" an die Webanwendung, die den Registrierungsprozess handhabt, und verwendet dabei einen angemessenen sicheren Mechanismus (zum Beispiel [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)).

   > [!NOTE]
   > Das Format für den Austausch von Informationen zwischen dem Relying Party-Server und der Webanwendung liegt bei der Anwendung.
   > Ein empfohlener Ansatz ist der Austausch von {{Glossary("JSON_type_representation", "JSON-Typ-Repräsentationen")}} für Anmeldeinformationen und Anmeldeoptionsobjekte.
   > Im `PublicKeyCredential` wurden Komfortmethoden erstellt, um von den JSON-Repräsentationen in die Form zu konvertieren, die von den Authentifizierungs-APIs benötigt wird: [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON).

2. Die Webanwendung initiiert die Erzeugung einer neuen Anmeldeinformation über den Authenticator im Namen der Relying Party durch einen Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create). Dieser Aufruf erhält eine `publicKey`-Option, die die Gerätefähigkeiten angibt, z.B. ob das Gerät seine eigene Benutzerauthentifizierung bereitstellt (z.B. mit Biometrie).

   Ein typischer `create()`-Aufruf könnte so aussehen:

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

   Die Parameter des `create()`-Aufrufs werden zusammen mit einem SHA-256-Hash, der zur Sicherstellung, dass er nicht manipuliert wird, signiert werden muss, an den Authenticator übergeben.

3. Nachdem der Authenticator das Einverständnis des Benutzers erlangt hat, generiert er ein Schlüsselpaar und gibt den öffentlichen Schlüssel und optional eine signierte Attestation an die Webanwendung zurück. Dies wird bereitgestellt, wenn das von `create()` zurückgegebene {{jsxref("Promise")}} erfüllt ist, in Form einer Instanz des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Attestationsinformationen).

4. Die Webanwendung leitet das [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Relying Party-Server weiter, erneut unter Verwendung eines angemessenen Mechanismus.

5. Der Relying Party-Server speichert den öffentlichen Schlüssel, verbunden mit der Benutzeridentität, um sich an die Anmeldeinformation für zukünftige Authentifizierungen zu erinnern. Während dieses Prozesses wird eine Reihe von Prüfungen durchgeführt, um sicherzustellen, dass die Registrierung vollständig und nicht manipuliert wurde. Diese umfassen:

   1. Die Überprüfung, dass die Herausforderung dieselbe ist wie die, die gesendet wurde.
   2. Sicherstellen, dass der Ursprung der erwartete Ursprung war.
   3. Validierung, dass die Signatur und die Attestation die richtige Zertifikatskette für das spezifische Modell des Authenticators verwenden, das ursprünglich das Schlüsselpaar generiert hat.

> [!WARNING]
> Die Attestation bietet einer Relying Party eine Möglichkeit, die Herkunft eines Authenticators zu bestimmen. Relying Parties sollten nicht versuchen, Zulassungslisten für Authenticatoren zu führen.

### Einen Benutzer authentifizieren

Nachdem sich ein Benutzer bei WebAuthn registriert hat, kann er sich mit dem Dienst authentifizieren (einloggen). Der Authentifizierungsablauf sieht dem Registrierungsablauf ähnlich, die Hauptunterschiede bestehen darin, dass die Authentifizierung:

1. keine Benutzer- oder Relying Party-Informationen benötigt
2. eine Behauptung basierend auf dem zuvor generierten Schlüsselpaar für den Dienst erstellt, anstatt dem Schlüsselpaar des Authenticators.

Ein typischer Authentifizierungsablauf ist wie folgt:

1. Die Relying Party generiert eine "Herausforderung" und sendet sie zusammen mit einer Liste von Relying Party- und Benutzeranmeldedaten über einen angemessenen sicheren Mechanismus an den Benutzeragent. Sie kann auch angeben, wo nach der Anmeldeinformation gesucht werden soll, z.B. auf einem lokalen eingebauten Authenticator oder auf einem externen über USB, BLE usw.

2. Der Browser fordert den Authenticator auf, die Herausforderung über einen [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf zu signieren und übergibt die Anmeldedaten in einer `publicKey`-Option.

   Ein typischer `get()`-Aufruf könnte so aussehen:

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

   Die Parameter des `get()`-Aufrufs werden an den Authenticator übergeben, um die Authentifizierung zu handhaben.

3. Wenn der Authenticator eine der angegebenen Anmeldedaten enthält und in der Lage ist, die Herausforderung erfolgreich zu signieren, gibt er eine signierte Behauptung an die Webanwendung weiter, nachdem er die Zustimmung des Benutzers erhalten hat. Dies wird bereitgestellt, wenn das vom `get()`-Aufruf zurückgegebene {{jsxref("Promise")}} erfüllt ist, in Form einer Instanz des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Information über die Behauptung).

4. Die Webanwendung leitet die signierte Behauptung an den Relying Party-Server weiter, damit die Relying Party diese validieren kann. Die Validierungsprüfungen umfassen:

   1. Die Verwendung des öffentlichen Schlüssels, der während der Registrierungsanforderung gespeichert wurde, um die Signatur des Authenticators zu validieren.
   2. Sicherstellen, dass die vom Authenticator signierte Herausforderung mit der vom Server generierten Herausforderung übereinstimmt.
   3. Prüfung, dass die Relying Party ID die erwartete für diesen Dienst ist.

5. Sobald dies vom Server überprüft wurde, gilt der Authentifizierungsablauf als erfolgreich.

### Erkennbare Anmeldeinformationen und bedingte Vermittlung

**Erkennbare Anmeldeinformationen** werden aus einem Authenticator abgerufen — vom Browser entdeckt — um als Login-Optionen angeboten zu werden, wenn sich der Benutzer bei einer Relying Party-Webanwendung anmeldet. Im Gegensatz dazu werden nicht erkennbare Anmeldeinformationen vom Relying Party-Server bereitgestellt, damit der Browser sie als Login-Optionen anbieten kann.

Erkennbare Anmeldeinformationen (IDs) und zugehörige Metadaten wie [Benutzernamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#name_2) und [Anzeigenamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#displayname) werden in einem clientseitigen Authenticator wie einem Browser-Passwortmanager, einer Authenticator-App oder in einer Hardwarelösung wie einem YubiKey gespeichert. Da diese Informationen im Authenticator verfügbar sind, kann sich der Benutzer bequem anmelden, ohne Anmeldeinformationen bereitstellen zu müssen, und die Relying Party muss keine [`credentialId`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) bereitstellen, wenn sie es behauptet (obwohl sie es tun kann; wenn die Anmeldeinformation von der RP behauptet wird, wird der nicht erkennbare Ablauf befolgt).

Eine erkennbare Anmeldeinformation wird über einen [`create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufruf mit einer angegebenen [`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) erstellt. Die `credentialId`, Benutzermetadaten und der öffentliche Schlüssel für die neue Anmeldeinformation wird, wie oben erläutert, durch den Authenticator gespeichert, aber auch an die Webanwendung zurückgegeben und auf dem RP-Server gespeichert.

Um sich zu authentifizieren, ruft der RP-Server [`get()`](/de/docs/Web/API/CredentialsContainer/get) mit **bedingter Vermittlung** auf, das heißt [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) wird auf `conditional` gesetzt, eine leere Liste von [`allowCredentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials) (was bedeutet, dass nur erkennbare Anmeldeinformationen gezeigt werden können), und eine Herausforderung.

Die bedingte Vermittlung führt dazu, dass erkannte Anmeldedaten, die im Authenticator gefunden wurden, dem Benutzer in einer nicht-modalen Benutzeroberfläche zusammen mit einem Hinweis auf den Ursprungsanforderer präsentiert werden und nicht in einem modalen Dialog. In der Praxis bedeutet dies das automatische Ausfüllen verfügbarer Anmeldeinformationen in Ihren Anmeldeformularen. Die in erkennbaren Anmeldeinformationen gespeicherten Metadaten können angezeigt werden, um Benutzern zu helfen, eine Anmeldeinformation beim Einloggen auszuwählen. Um erkennbare Anmeldeinformationen in Ihren Anmeldeformularen anzuzeigen, müssen Sie auch [`autocomplete="webauthn"`](/de/docs/Web/HTML/Attributes/autocomplete#webauthn) auf Ihren Formularelementen einfügen.

Noch einmal, die Relying Party sagt dem Authenticator nicht, welche Anmeldeinformationen dem Benutzer angeboten werden sollen — stattdessen liefert der Authenticator die Liste, die er verfügbar hat. Sobald der Benutzer eine Anmeldeinformation auswählt, verwendet der Authenticator diese, um die Herausforderung mit dem zugehörigen privaten Schlüssel zu signieren, und der Browser gibt die signierte Herausforderung und ihre `credentialId` an den RP-Server zurück.

Der nachfolgende Authentifizierungsprozess auf dem RP-Server ist derselbe wie für nicht erkennbare Anmeldeinformationen.

> [!NOTE]
> Sie können prüfen, ob bedingte Vermittlung auf einem bestimmten Benutzeragent verfügbar ist, indem Sie die Methode [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) aufrufen.

[Passkeys](https://passkeys.dev/) sind ein bedeutender Anwendungsfall für erkennbare Anmeldeinformationen; siehe [Erstellen eines Passkeys für passwortlose Logins](https://web.dev/articles/passkey-registration) und [Einloggen mit einem Passkey durch automatisches Formularausfüllen](https://web.dev/articles/passkey-form-autofill) für Implementierungsdetails. Siehe auch [Erkennbare Anmeldedaten vertiefen](https://web.dev/articles/webauthn-discoverable-credentials) für allgemeinere Informationen zu erkennbaren Anmeldeinformationen.

Wenn bedingte Vermittlung zur Authentifizierung verwendet wird, wird die Verhinderung des stillen Zugriffs-Flags (siehe [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)) behandelt, als wäre sie `true`, unabhängig von ihrem tatsächlichen Wert: Das bedingte Verhalten beinhaltet immer eine Art der Benutzermediation, wenn anwendbare Anmeldeinformationen entdeckt werden.

> [!NOTE]
> Wenn keine Anmeldeinformationen entdeckt werden, ist der nicht-modale Dialog nicht sichtbar, und der Benutzeragent kann den Benutzer auffordern, eine Aktion auszuführen, die vom Typ der Anmeldeinformation abhängt (zum Beispiel ein Gerät mit Anmeldeinformationen einzustecken).

#### Synchronisierungsmethoden für erkennbare Anmeldeinformationen

Es ist möglich, dass die im Authenticator eines Benutzers über erkennbare Anmeldeinformationen gespeicherte Information mit dem Server der Relying Party nicht mehr synchron ist. Dies könnte passieren, wenn der Benutzer eine Anmeldeinformation löscht oder ihren Benutzer-/Anzeigenamen auf der RP-Webanwendung ändert, ohne den Authenticator zu aktualisieren.

Die API stellt Methoden zur Verfügung, die es dem Server der Relying Party ermöglichen, Änderungen an den Authenticator zu signalisieren, damit er seine gespeicherten Anmeldeinformationen aktualisieren kann:

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static): Signalisiert dem Authenticator alle gültigen Anmeldeinformationen-IDs, die der RP-Server für einen bestimmten Benutzer noch besitzt.
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static): Signalisiert dem Authenticator, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeigenamen auf dem RP-Server aktualisiert hat.
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static): Signalisiert dem Authenticator, dass eine Anmeldeinformationen-ID vom RP-Server nicht erkannt wurde.

Es scheint, dass `signalUnknownCredential()` und `signalAllAcceptedCredentials()` ähnliche Zwecke haben, aber in welcher Situation sollte jede verwendet werden?

- `signalAllAcceptedCredentials()` sollte nach jedem erfolgreichen Anmelden aufgerufen werden, und wenn der Benutzer eingeloggt ist und Sie den Zustand seiner Anmeldeinformationen aktualisieren möchten. Es darf nur aufgerufen werden, wenn ein Benutzer authentifiziert ist, da es die gesamte Liste der `credentialId`s für einen bestimmten Benutzer teilt. Dies würde zu einem Datenschutzleck führen, wenn der Benutzer nicht authentifiziert ist.
- `signalUnknownCredential()` sollte nach einem erfolglosen Anmeldeversuch aufgerufen werden, um dem Authenticator zu signalisieren, dass die `credentialId` der ausgewählten Anmeldeinformation nicht validiert werden kann und entfernt werden sollte. Die Methode kann sicher aufgerufen werden, wenn der Benutzer nicht authentifiziert ist, da sie eine einzige `credentialId` an den Authenticator weitergibt — diejenige, mit der der Client versucht hat, sich zu authentifizieren — und keine Benutzerinformationen preisgibt.

### Anpassung von Arbeitsabläufen basierend auf Clientfähigkeiten

Die Anmelde- und Login-Arbeitsabläufe können basierend auf den Fähigkeiten des WebAuthn-Clients (Browsers) angepasst werden. Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) kann verwendet werden, um diese Fähigkeiten abzufragen; sie gibt ein Objekt zurück, bei dem jeder Schlüssel sich auf eine WebAuthn-Funktion oder -Erweiterung bezieht, und jeder Wert ist ein boolean, der die Unterstützung dieser Funktion anzeigt.

Dies kann verwendet werden, um beispielsweise zu prüfen:

- Unterstützung des Clients für verschiedene Authenticatoren wie Passkeys oder biometrische Benutzerverifikation.
- Ob der Client [Methoden unterstützt, um Relying Party- und Authenticator-Anmeldeinformationen synchron zu halten](#synchronisierungsmethoden_für_erkennbare_anmeldeinformationen).
- Ob der Client erlaubt, dass ein einzelner Passkey auf verschiedenen Websites mit demselben Ursprung verwendet wird.

Der folgende Code zeigt, wie Sie `getClientCapabilities()` verwenden könnten, um zu prüfen, ob der Client Authenticatoren unterstützt, die eine biometrische Benutzerverifikation anbieten.
Beachten Sie, dass die tatsächlichen durchgeführten Aktionen von Ihrer Website abhängen.
Für Websites, die _biometrische Authentifizierung erfordern_, könnten Sie die Login-Benutzeroberfläche durch eine Nachricht ersetzen, die angibt, dass biometrische Authentifizierung nötig ist, und der Benutzer sollte einen anderen Browser oder ein anderes Gerät versuchen.

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

## Steuerung des Zugriffs auf die API

Die Verfügbarkeit von WebAuthn kann durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden, wobei zwei Direktiven im Besonderen angegeben werden:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Steuert die Verfügbarkeit von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der Option `publicKey`.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Steuert die Verfügbarkeit von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der Option `publicKey`.

Beide Direktiven haben einen Standardwert in der Allowlist von `"self"`, was bedeutet, dass diese Methoden standardmäßig in top-level Dokumentenkontexten verwendet werden können.
Zusätzlich kann `get()` in verschachtelten Browsing-Kontexten verwendet werden, die vom gleichen Ursprung wie das oberste Dokument geladen wurden.
`get()` und `create()` können in verschachtelten Browsing-Kontexten verwendet werden, die von anderen Ursprüngen als dem des obersten Dokuments geladen wurden (d.h. in fremden `<iframes>`), wenn dies durch die `Permission-Policy`-Direktiven [`publickey-credentials-get`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-get) und [`publickey-credentials-create`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create) erlaubt ist.
Für fremde `create()`-Aufrufe, bei denen die Erlaubnis durch [`allow=` im `iframe`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) gewährt wurde, muss der Frame auch eine {{Glossary("Transient_activation", "Transiente Aktivierung")}} besitzen.

> [!NOTE]
> Wo eine Richtlinie die Nutzung dieser Methoden verbietet, wird das von ihnen zurückgegebene {{jsxref("Promise", "Versprechen", "", 1)}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

### Grundlegende Zugangskontrolle

Wenn Sie den Zugriff nur für eine bestimmte Subdomain erlauben möchten, könnten Sie es so angeben:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Erlauben von eingebetteten `create`- und `get()`-Aufrufen in einem `<iframe>`

Wenn Sie sich über `get()` oder `create()` in einem `<iframe>` authentifizieren möchten, gibt es ein paar Schritte zu befolgen:

1. Die Seite, die die Relying Party-Seite einbettet, muss die Berechtigung über ein `allow`-Attribut bereitstellen:

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

     Das `<iframe>` muss auch eine {{Glossary("Transient_activation", "Transiente Aktivierung")}} haben, wenn `create()` fremdherkunftsübergreifend aufgerufen wird.

2. Die Relying Party-Seite muss die Erlaubnis für den obigen Zugriff über einen `Permissions-Policy`-Header bereitstellen:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   Oder um nur eine spezifische URL zu erlauben, die die Relying Party-Seite in einem `<iframe>` einbettet:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## Schnittstellen

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)
  - : Liefert einem Dienst den Beweis, dass ein Authenticator das notwendige Schlüsselpaar hat, um eine Authentifizierungsanforderung zu bearbeiten, die durch einen [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf initiiert wurde. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die erhalten wird, wenn das `get()` {{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)
  - : Das Ergebnis einer WebAuthn-Anmeldeinformationen-Anmeldung (d.h. eines [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufrufs). Es enthält Informationen über die Anmeldeinformation, die der Server benötigt, um WebAuthn-Behauptungen durchzuführen, wie ihre Anmeldeinformationen-ID und den öffentlichen Schlüssel. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die erhalten wird, wenn das `create()` {{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)
  - : Die Basisschnittstelle für [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) und [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
  - : Bietet Informationen über ein öffentliches Schlüssel-/privates Schlüssel-Paar, das eine Anmeldeinformation für das Einloggen in einen Dienst mit einem nicht-phishbaren und datenverletzungsresistenten asymmetrischen Schlüsselpaar anstelle eines Passworts ist. Erhalten, wenn das über ein [`create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`get()`](/de/docs/Web/API/CredentialsContainer/get) zurückgegebene {{jsxref("Promise")}} erfüllt wird.

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die `publicKey`-Option
  - : Der Aufruf von `create()` mit einer `publicKey`-Option initiiert die Erstellung neuer asymmetrischer Schlüssel-Anmeldeinformationen über einen Authenticator, wie oben beschrieben.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `publicKey`-Option
  - : Der Aufruf von `get()` mit einer `publicKey`-Option weist den Benutzeragenten an, ein bestehendes Set von Anmeldeinformationen zu verwenden, um sich bei einer Relying Party zu authentifizieren.

## Beispiele

### Demo-Seiten

- [Mozilla Demo](https://webauthn.bin.coffee/) Webseite und ihr [Quellcode](https://github.com/jcjones/webauthn.bin.coffee).
- [Google Demo](https://try-webauthn.appspot.com/) Webseite und ihr [Quellcode](https://github.com/google/webauthndemo).
- [WebAuthn.io Demo](https://webauthn.io/) Webseite und ihr [Quellcode](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) und ihr [Client-Quellcode](https://github.com/webauthn-open-source/webauthn-simple-app) und [Server-Quellcode](https://github.com/webauthn-open-source/fido2-lib)

### Anwendungsbeispiel

> [!NOTE]
> Aus Sicherheitsgründen werden die Web Authentication API-Aufrufe ([`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`get()`](/de/docs/Web/API/CredentialsContainer/get)) abgebrochen, wenn das Browserfenster den Fokus verliert, während der Aufruf noch ausstehend ist.

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
