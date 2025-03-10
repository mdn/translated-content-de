---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Die Web Authentication API (WebAuthn) ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), die eine starke Authentifizierung mit öffentlicher Schlüssel-Kryptographie ermöglicht. Sie erlaubt die passwortlose Authentifizierung und eine sichere Multi-Faktor-Authentifizierung (MFA) ohne SMS-Nachrichten.

## WebAuthn-Konzepte und Verwendung

WebAuthn verwendet [asymmetrische (öffentliche Schlüssel-) Kryptographie](https://en.wikipedia.org/wiki/Public-key_cryptography) anstelle von Passwörtern oder SMS-Nachrichten zur Registrierung, Authentifizierung und [Multi-Faktor-Authentifizierung](https://en.wikipedia.org/wiki/Multi-factor_authentication) mit Webseiten. Das bietet einige Vorteile:

- **Schutz vor Phishing:** Ein Angreifer, der eine gefälschte Anmelde-Website erstellt, kann sich nicht als Benutzer anmelden, da sich die Signatur mit dem {{Glossary("Origin", "Origin")}} der Website ändert.
- **Reduzierte Auswirkungen von Datenverletzungen:** Entwickler müssen den öffentlichen Schlüssel nicht hashen, und wenn ein Angreifer Zugang zum öffentlichen Schlüssel erhält, der zur Verifizierung der Authentifizierung verwendet wird, kann er sich nicht authentifizieren, da er den privaten Schlüssel benötigt.
- **Unverwundbar gegen Passwortangriffe:** Einige Benutzer könnten Passwörter wiederverwenden, und ein Angreifer könnte das Passwort eines Benutzers für eine andere Website erlangen (z. B. durch eine Datenverletzung). Außerdem sind Textpasswörter viel leichter durch Brute-Force technisch aufzubrechen als eine digitale Signatur.

Viele Websites verfügen bereits über Seiten, die es Benutzern ermöglichen, neue Konten zu registrieren oder sich bei einem bestehenden Konto anzumelden. WebAuthn fungiert als Ersatz oder Verbesserung des Authentifizierungsteils des Systems. Es erweitert die [Credential Management API](/de/docs/Web/API/Credential_Management_API), abstrahiert die Kommunikation zwischen dem Benutzeragenten und einem Authenticator und bietet die folgende neue Funktionalität:

- Wenn [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option verwendet wird, erstellt der Benutzeragent neue Anmeldeinformationen über einen Authenticator — entweder zur Registrierung eines neuen Kontos oder zur Verknüpfung eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.
  - Bei der Registrierung eines neuen Kontos werden diese Anmeldeinformationen auf einem Server gespeichert (auch als Dienst oder [verantwortliche Partei](https://en.wikipedia.org/wiki/Relying_party) bezeichnet) und können anschließend verwendet werden, um einen Benutzer anzumelden.
  - Das asymmetrische Schlüsselpaar wird im Authenticator gespeichert, der dann zur Authentifizierung eines Benutzers mit einer verantwortlichen Partei verwendet werden kann, zum Beispiel während der MFA. Der Authenticator kann im Benutzeragenten, in einem Betriebssystem wie Windows Hello oder als physisches Token wie ein USB- oder Bluetooth-Sicherheitsschlüssel eingebettet sein.
- Wenn [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option verwendet wird, verwendet der Benutzeragent ein bestehendes Satz von Anmeldeinformationen, um sich bei einer verantwortlichen Partei zu authentifizieren (entweder als primäre Anmeldung oder um einen zusätzlichen Faktor während der MFA bereitzustellen, wie oben beschrieben).

In ihren grundlegendsten Formen empfangen sowohl `create()` als auch `get()` eine sehr große Zufallszahl, die "Challenge" genannt wird, vom Server und senden die von dem privaten Schlüssel signierte Challenge an den Server zurück. Dies beweist dem Server, dass ein Benutzer den privaten Schlüssel besitzt, der für die Authentifizierung erforderlich ist, ohne Geheimnisse über das Netzwerk preiszugeben.

> [!NOTE]
> Die "Challenge" muss ein Puffer mit zufälligen Informationen von mindestens 16 Bytes Größe sein.

### Erstellen eines Schlüsselpaares und Registrieren eines Benutzers

Um zu veranschaulichen, wie der Prozess der Anmeldeinformationsgenerierung funktioniert, beschreiben wir den typischen Ablauf, der auftritt, wenn ein Benutzer ein Anmeldeinformation bei einer verantwortlichen Partei registrieren möchte:

1. Der Server der verantwortlichen Partei sendet Benutzer- und Informationen über die verantwortliche Partei zusammen mit der "Challenge" an die Webanwendung, die den Registrierungsprozess durchführt, unter Verwendung eines geeigneten sicheren Mechanismus (zum Beispiel [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)).

   > [!NOTE]
   > Das Format zum Austausch der Informationen zwischen dem Server der verantwortlichen Partei und der Webanwendung obliegt der Anwendung.
   > Ein empfohlener Ansatz ist der Austausch von {{Glossary("JSON_type_representation", "JSON-Typ-Repräsentationen")}} für Anmeldeinformationen und Anmeldeoptionen.
   > In `PublicKeyCredential` wurden Komfortmethoden erstellt, um von den JSON-Repräsentationen zur Form zu konvertieren, die von den Authentifizierungs-APIs benötigt wird: [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON).

2. Die Webanwendung initiiert die Generierung einer neuen Anmeldeinformation über den Authenticator im Namen der verantwortlichen Partei über einen Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create). Dieser Aufruf wird mit einer `publicKey`-Option übergeben, die die Gerätefunktionen angibt, z.B. ob das Gerät seine eigene Benutzer-Authentifizierung zur Verfügung stellt (zum Beispiel mit biometrischen Daten).

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

   Die Parameter des `create()`-Aufrufs werden an den Authenticator weitergegeben, zusammen mit einem SHA-256-Hash, der signiert wird, um sicherzustellen, dass er nicht manipuliert wurde.

3. Nachdem der Authenticator die Zustimmung des Benutzers erhalten hat, generiert er ein Schlüsselpaar und gibt den öffentlichen Schlüssel und optional eine signierte Attestierung an die Webanwendung zurück. Dies wird bereitgestellt, wenn das durch den `create()`-Aufruf zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Attestierungsinformationen).

4. Die Webanwendung leitet das [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) erneut unter Verwendung eines geeigneten Mechanismus an den Server der verantwortlichen Partei weiter.

5. Der Server der verantwortlichen Partei speichert den öffentlichen Schlüssel, gekoppelt mit der Benutzeridentität, um sich die Anmeldeinformation für zukünftige Authentifizierungen zu merken. Während dieses Prozesses führt er eine Reihe von Prüfungen durch, um sicherzustellen, dass die Registrierung vollständig und nicht manipuliert wurde. Dazu gehören:

   1. Überprüfung, dass die Challenge dieselbe ist, die gesendet wurde.
   2. Sicherstellung, dass der Origin der erwartete war.
   3. Validierung, dass die Signatur und die Attestierung die richtige Zertifikatkette für das spezifische Modell des Authenticators verwenden, der das Schlüsselpaar ursprünglich generiert hat.

> [!WARNING]
> Die Attestierung bietet eine Möglichkeit für eine verantwortliche Partei, die Herkunft eines Authenticators zu bestimmen. Verantwortliche Parteien sollten nicht versuchen, Whitelists von Authenticatoren zu führen.

### Authentifizierung eines Benutzers

Nachdem ein Benutzer sich mit WebAuthn registriert hat, kann er sich (login) mit dem Dienst authentifizieren. Der Authentifizierungsablauf sieht ähnlich aus wie der Registrierungsablauf, die Hauptunterschiede bestehen darin, dass die Authentifizierung:

1. Keine Benutzer- oder Informationen über die verantwortliche Partei erfordert
2. Eine Bestätigung unter Verwendung des zuvor generierten Schlüsselpaares für den Dienst erstellt, anstelle des Schlüsselpaares des Authenticators.

Ein typischer Authentifizierungsablauf ist wie folgt:

1. Die verantwortliche Partei generiert eine "Challenge" und sendet sie zusammen mit einer Liste von Anmeldeinformationen der verantwortlichen Partei und des Benutzers unter Verwendung eines geeigneten sicheren Mechanismus an den Benutzeragenten. Sie kann auch angeben, wo nach der Anmeldeinformation gesucht werden soll, z. B. auf einem lokalen eingebauten Authenticator oder auf einem externen über USB, BLE usw.

2. Der Browser fordert den Authenticator über einen [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf auf, die Challenge zu signieren, der die Anmeldeinformationen in einer `publicKey`-Option übergeben wird.

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

   Die Parameter des `get()`-Aufrufs werden an den Authenticator zur Bearbeitung der Authentifizierung weitergegeben.

3. Wenn der Authenticator eine der angegebenen Anmeldeinformationen enthält und in der Lage ist, die Challenge erfolgreich zu signieren, gibt er nach Erhalt der Zustimmung des Benutzers eine signierte Bestätigung an die Webanwendung zurück. Dies wird bereitgestellt, wenn das durch den `get()`-Aufruf zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Bestätigungsinformationen).

4. Die Webanwendung leitet die signierte Bestätigung zur Validierung an den Server der verantwortlichen Partei weiter. Die Validierungsprüfungen umfassen:

   1. Verwendung des bei der Registrierungsanfrage gespeicherten öffentlichen Schlüssels zur Validierung der Signatur durch den Authenticator.
   2. Sicherstellung, dass die Challenge, die der Authenticator signiert hat, mit der Challenge übereinstimmt, die vom Server generiert wurde.
   3. Überprüfung, dass die ID der verantwortlichen Partei die erwartete ist.

5. Sobald die Prüfung durch den Server abgeschlossen ist, wird der Authentifizierungsablauf als erfolgreich betrachtet.

### Auffindbare Anmeldeinformationen und bedingte Vermittlung

**Auffindbare Anmeldeinformationen** werden von einem Authenticator abgerufen — vom Browser "gefunden" — um sie als Anmeldeoptionen anzubieten, wenn sich der Benutzer bei einer Web-App der verantwortlichen Partei anmeldet. Im Gegensatz dazu werden nicht auffindbare Anmeldeinformationen vom Server der verantwortlichen Partei bereitgestellt, damit der Browser sie als Anmeldeoptionen anbietet.

Auffindbare Anmeldeinformations-IDs und zugehörige Metadaten, wie [Benutzernamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#name_2) und [Anzeigenamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#displayname) werden in einem Client-seitigen Authenticator gespeichert, wie einem Passwortmanager im Browser, einer Authenticator-App oder einer Hardwarelösung wie einem YubiKey. Da diese Informationen im Authenticator verfügbar sind, kann sich der Benutzer bequem anmelden, ohne Anmeldeinformationen angeben zu müssen, und die verantwortliche Partei muss keine [`credentialId`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) bereitstellen, wenn sie diese bestätigt (obwohl sie dies tun kann; wenn die Anmeldeinformation von der RP bestätigt wird, wird der nicht auffindbare Workflow befolgt).

Eine auffindbare Anmeldeinformation wird über einen [`create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufruf mit einem bestimmten [`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) erstellt. Die `credentialId`, Benutzermetadaten und der öffentliche Schlüssel für die neue Anmeldeinformation werden dauerhaft wie oben diskutiert gespeichert, jedoch auch an die Web-App zurückgegeben und auf dem RP-Server gespeichert.

Um sich zu authentifizieren, ruft der RP-Server [`get()`](/de/docs/Web/API/CredentialsContainer/get) mit **bedingter Vermittlung** auf, wobei [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) auf `conditional` gesetzt ist, eine leere [`allowCredentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials)-Liste (was bedeutet, dass nur auffindbare Anmeldeinformationen angezeigt werden können) und eine Challenge enthalten sind.

Die bedingte Vermittlung führt dazu, dass auffindbare Anmeldeinformationen, die im Authenticator gefunden wurden, dem Benutzer in einer nicht-modalen Benutzeroberfläche zusammen mit einem Hinweis auf den Ursprung, der Anmeldeinformationen anfordert, präsentiert werden, anstelle eines modalen Dialogs. In der Praxis bedeutet dies, dass verfügbare Anmeldeinformationen in Ihren Anmeldeformularen automatisch ausgefüllt werden. Die Metadaten, die in auffindbaren Anmeldeinformationen gespeichert sind, können angezeigt werden, um Benutzern bei der Auswahl einer Anmeldeinformation bei der Anmeldung zu helfen. Um auffindbare Anmeldeinformationen in Ihren Anmeldeformularen anzuzeigen, müssen Sie auch [`autocomplete="webauthn"`](/de/docs/Web/HTML/Attributes/autocomplete#webauthn) in Ihren Formularfeldern enthalten.

Um es nochmals zu betonen: Die verantwortliche Partei sagt dem Authenticator nicht, welche Anmeldeinformationen dem Benutzer angeboten werden sollen — stattdessen liefert der Authenticator die Liste, die er zur Verfügung hat. Sobald der Benutzer eine Anmeldeinformation auswählt, verwendet der Authenticator diese, um die Challenge mit dem zugehörigen privaten Schlüssel zu signieren, und der Browser gibt die signierte Challenge und ihre `credentialId` an den RP-Server zurück.

Der anschließende Authentifizierungsprozess auf dem RP-Server ist derselbe wie für nicht auffindbare Anmeldeinformationen.

> [!NOTE]
> Sie können überprüfen, ob bedingte Vermittlung auf einem bestimmten Benutzeragenten verfügbar ist, indem Sie die Methode [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable) aufrufen.

[Passkeys](https://passkeys.dev/) sind ein wichtiger Anwendungsfall für auffindbare Anmeldeinformationen; siehe [Create a passkey for passwordless logins](https://web.dev/articles/passkey-registration) und [Sign in with a passkey through form autofill](https://web.dev/articles/passkey-form-autofill) für Implementierungsdetails. Siehe auch [Discoverable credentials deep dive](https://web.dev/articles/webauthn-discoverable-credentials) für allgemeinere Informationen über auffindbare Anmeldeinformationen.

Wenn die bedingte Vermittlung zur Authentifizierung verwendet wird, wird die Verhinderung des stillen Zugriffs (siehe [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)) als `true` behandelt, unabhängig von seinem tatsächlichen Wert: Das bedingte Verhalten umfasst immer eine Benutzervermittlung irgendeiner Art, sofern zutreffende Anmeldeinformationen gefunden werden.

> [!NOTE]
> Wenn keine Anmeldeinformationen gefunden werden, wird der nicht-modale Dialog nicht sichtbar sein, und der Benutzeragent kann den Benutzer in einer Weise auffordern, die von der Art der Anmeldeinformationen abhängt (z.B. Einlegen eines Geräts, das Anmeldeinformationen enthält).

#### Synchronisationsmethoden für auffindbare Anmeldeinformationen

Es ist möglich, dass die im Authenticator eines Benutzers gespeicherten Informationen über eine auffindbare Anmeldeinformation nicht mit dem Server der verantwortlichen Partei synchronisiert sind. Dies könnte passieren, wenn der Benutzer eine Anmeldeinformation löscht oder seinen Benutzer-/Anzeigenamen in der Web-App der RP ändert, ohne den Authenticator zu aktualisieren.

Die API bietet Methoden, um dem RP-Server zu ermöglichen, dem Authenticator Änderungen zu signalisieren, damit er seine gespeicherten Anmeldeinformationen aktualisieren kann:

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static): Signalisiert dem Authenticator alle gültigen Anmeldeinformations-IDs, die der RP-Server noch für einen bestimmten Benutzer hält.
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static): Signalisiert dem Authenticator, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeigenamen auf dem RP-Server aktualisiert hat.
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static): Signalisiert dem Authenticator, dass eine Anmeldeinformations-ID vom RP-Server nicht erkannt wurde.

Es mag scheinen, dass `signalUnknownCredential()` und `signalAllAcceptedCredentials()` ähnliche Zwecke haben, also in welcher Situation sollte jede verwendet werden?

- `signalAllAcceptedCredentials()` sollte nach jedem erfolgreichen Anmelden aufgerufen werden und wenn der Benutzer angemeldet ist und Sie den Status seiner Anmeldeinformationen aktualisieren möchten. Es darf nur aufgerufen werden, wenn ein Benutzer authentifiziert ist, da es die gesamte Liste der `credentialId`s für einen bestimmten Benutzer teilt. Dies würde ein Datenschutzleck verursachen, wenn der Benutzer nicht authentifiziert ist.
- `signalUnknownCredential()` sollte nach einem erfolglosen Login aufgerufen werden, um dem Authenticator zu signalisieren, dass die `credentialId` der ausgewählten Anmeldeinformation nicht validiert werden kann und entfernt werden sollte. Die Methode kann sicher aufgerufen werden, wenn der Benutzer nicht authentifiziert ist, da sie eine einzelne `credentialId` an den Authenticator übergibt — diejenige, mit der der Client gerade versucht hat, sich zu authentifizieren — und keine Benutzerinformationen.

### Anpassen von Workflows basierend auf Client-Fähigkeiten

Die Anmelde- und Login-Workflows können basierend auf den Fähigkeiten des WebAuthn-Clients (Browsers) angepasst werden. Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) kann verwendet werden, um diese Fähigkeiten abzufragen; sie gibt ein Objekt zurück, bei dem jeder Schlüssel sich auf eine WebAuthn-Fähigkeit oder -Erweiterung bezieht, und jeder Wert ein Boolean ist, das die Unterstützung dieser Funktion anzeigt.

Dies kann beispielsweise verwendet werden, um zu überprüfen:

- Client-Unterstützung für verschiedene Authenticatoren wie Passkeys oder biometrische Benutzerverifizierung.
- Ob der Client [Methoden zur Synchronisierung von Anmeldeinformationen der verantwortlichen Partei und des Authenticators unterstützt](#synchronisationsmethoden_für_auffindbare_anmeldeinformationen).
- Ob der Client erlaubt, dass ein einzelner Passkey auf verschiedenen Websites mit demselben Origin verwendet wird.

Der folgende Code zeigt, wie Sie `getClientCapabilities()` verwenden könnten, um zu überprüfen, ob der Client Authenticatoren unterstützt, die eine biometrische Benutzerverifizierung anbieten.
Beachten Sie, dass die tatsächlich durchgeführten Maßnahmen von Ihrer Website abhängen.
Für Websites, die _biometrische Authentifizierung erfordern_, könnten Sie die Anmeldeoberfläche durch eine Nachricht ersetzen, die darauf hinweist, dass biometrische Authentifizierung erforderlich ist und der Benutzer einen anderen Browser oder ein anderes Gerät versuchen sollte.

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

Die Verfügbarkeit von WebAuthn kann mithilfe einer [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) gesteuert werden, wobei insbesondere zwei Direktiven spezifiziert werden:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Steuert die Verfügbarkeit von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Steuert die Verfügbarkeit von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option.

Beide Direktiven haben einen Standard-Wert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in obersten Dokumentkontexten verwendet werden können.
Zusätzlich kann `get()` in eingebetteten Browser-Kontexten verwendet werden, die vom selben Origin wie das oberste Dokument geladen sind.
`get()` und `create()` können in eingebetteten Browser-Kontexten verwendet werden, die von anderen Origins als dem obersten Dokument geladen sind (d.h. in Cross-Origin-`<iframes>`), wenn dies durch die [`publickey-credentials-get`](/de/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-get) und [`publickey-credentials-create`](/de/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create) `Permission-Policy`-Direktiven erlaubt ist.
Bei Cross-Origin-`create()`-Aufrufen, bei denen die Berechtigung via [`allow=` auf einem iframe](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) erteilt wurde, muss der Rahmen auch eine {{Glossary("Transient_activation", "transiente Aktivierung")}} haben.

> [!NOTE]
> Wo eine Richtlinie die Verwendung dieser Methoden verbietet, wird das von ihnen zurückgegebene {{jsxref("Promise", "promises", "", 1)}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

### Grundlagen der Zugriffskontrolle

Wenn Sie den Zugriff auf ein bestimmtes Subdomain erlauben möchten, könnten Sie es so angeben:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Erlauben eingebetteter `create`- und `get()`-Aufrufe in einem `<iframe>`

Wenn Sie sich mit `get()` oder `create()` in einem `<iframe>` authentifizieren möchten, gibt es einige Schritte zu befolgen:

1. Die Seite, die die Seite der verantwortlichen Partei einbettet, muss über ein `allow`-Attribut die Erlaubnis erteilen:

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

     Das `<iframe>` muss auch eine {{Glossary("Transient_activation", "transiente Aktivierung")}} haben, wenn `create()` Cross-Origin aufgerufen wird.

2. Die Website der verantwortlichen Partei muss die obige Zugriffserlaubnis über einen `Permissions-Policy`-Header bereitstellen:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   Oder um nur einer bestimmten URL das Einbetten der Website der verantwortlichen Partei in ein `<iframe>` zu ermöglichen:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## Schnittstellen

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)
  - : Liefert einem Dienst den Nachweis, dass ein Authenticator das notwendige Schlüsselpaar besitzt, um eine Authentifizierungsanfrage zu bearbeiten, die durch einen [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf initiiert wurde. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die erhalten wird, wenn das `get()`-{{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)
  - : Das Ergebnis einer WebAuthn-Anmeldeinformationen-Registrierung (d.h. ein [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufruf). Es enthält Informationen über die Anmeldeinformationen, die der Server benötigt, um WebAuthn-Bestätigungen durchzuführen, wie z.B. seine Anmeldeinformations-ID und den öffentlichen Schlüssel. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die erhalten wird, wenn das `create()`-{{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)
  - : Die Basisschnittstelle für [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) und [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
  - : Bietet Informationen über ein öffentliches/privates Schlüsselpaar, das eine Anmeldeinformation für die Anmeldung bei einem Dienst mit einem nicht phishbaren und datenverletzungsresistenten asymmetrischen Schlüsselpaar anstelle eines Passwortes ist. Erhalten, wenn das durch einen [`create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf zurückgegebene {{jsxref("Promise")}} erfüllt wird.

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die `publicKey`-Option
  - : Der Aufruf von `create()` mit einer `publicKey`-Option initiiert die Erstellung neuer asymmetrischer Schlüssel-Anmeldeinformationen über einen Authenticator, wie oben erläutert.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `publicKey`-Option
  - : Ein Aufruf von `get()` mit einer `publicKey`-Option weist den Benutzeragenten an, ein bestehendes Satz von Anmeldeinformationen zu verwenden, um sich bei einer verantwortlichen Partei zu authentifizieren.

## Beispiele

### Demoseiten

- [Mozilla Demo](https://webauthn.bin.coffee/) Website und ihr [Quellcode](https://github.com/jcjones/webauthn.bin.coffee).
- [Google Demo](https://try-webauthn.appspot.com/) Website und ihr [Quellcode](https://github.com/google/webauthndemo).
- [WebAuthn.io demo](https://webauthn.io/) Website und ihr [Quellcode](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) und ihr [Client-Quellcode](https://github.com/webauthn-open-source/webauthn-simple-app) und [Server-Quellcode](https://github.com/webauthn-open-source/fido2-lib)

### Anwendungsbeispiel

> [!NOTE]
> Aus Sicherheitsgründen werden die Aufrufe der Web Authentication API ([`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`get()`](/de/docs/Web/API/CredentialsContainer/get)) abgebrochen, wenn das Browserfenster während eines ausstehenden Aufrufs den Fokus verliert.

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
