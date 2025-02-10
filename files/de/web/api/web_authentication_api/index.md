---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: ede91f0ec9814b7cef9ff86f8bc80ed9d94cc5ee
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Die Web Authentication API (WebAuthn) ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), die eine starke Authentifizierung durch öffentliche Schlüsselkryptographie ermöglicht und passwortlose Authentifizierung sowie sichere Multi-Faktor-Authentifizierung (MFA) ohne SMS-Nachrichten unterstützt.

## WebAuthn-Konzepte und Nutzung

WebAuthn verwendet [asymmetrische (öffentlicher Schlüssel) Kryptographie](https://de.wikipedia.org/wiki/Public-Key-Kryptosysteme) anstelle von Passwörtern oder SMS-Nachrichten zur Registrierung, Authentifizierung und [Multi-Faktor-Authentifizierung](https://de.wikipedia.org/wiki/Mehrfaktor-Authentifizierung) mit Websites. Dies bietet einige Vorteile:

- **Schutz vor Phishing:** Ein Angreifer, der eine gefälschte Login-Website erstellt, kann sich nicht als Benutzer anmelden, da die Signatur sich mit dem {{Glossary("Origin", "Origin")}} der Website ändert.
- **Verminderte Auswirkungen von Datenpannen:** Entwickler müssen den öffentlichen Schlüssel nicht hashen. Falls ein Angreifer Zugriff auf den öffentlichen Schlüssel erhält, der zur Authentifizierung verwendet wird, kann dieser ohne den privaten Schlüssel nicht authentifizieren.
- **Unempfindlich gegenüber Passwortangriffen:** Einige Benutzer könnten Passwörter wiederverwenden, und ein Angreifer könnte das Passwort des Benutzers von einer anderen Website (z. B. durch eine Datenpanne) erhalten. Zudem sind Texteingabepasswörter viel einfacher zu brute-forcen als eine digitale Signatur.

Viele Websites haben bereits Seiten, die Benutzern erlauben, neue Konten zu registrieren oder sich in ein bestehendes Konto einzuloggen. WebAuthn ersetzt oder erweitert hierbei den Authentifizierungsteil des Systems. Es erweitert die [Credential Management API](/de/docs/Web/API/Credential_Management_API), abstrahiert die Kommunikation zwischen dem Benutzeragenten und einem Authentifikator und bietet folgende neue Funktionalitäten:

- Wenn [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option verwendet wird, erstellt der Benutzeragent über einen Authentifikator neue Zugangsdaten – entweder zur Registrierung eines neuen Kontos oder zum Verknüpfen eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.
  - Beim Registrieren eines neuen Kontos werden diese Zugangsdaten auf einem Server gespeichert (auch als Service oder [relying party](https://de.wikipedia.org/wiki/Vertrauenswürdige_Partei) bezeichnet) und können anschließend verwendet werden, um sich anzumelden.
  - Das asymmetrische Schlüsselpaar wird im Authentifikator gespeichert, der dann benutzt werden kann, um einen Benutzer bei einer vertrauenden Partei zu authentifizieren, beispielsweise während der MFA. Der Authentifikator kann in den Benutzeragenten integriert sein, in ein Betriebssystem wie Windows Hello, oder eine physische Sicherheitskomponente sein, beispielsweise ein USB- oder Bluetooth-Sicherheitsschlüssel.
- Wenn [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option verwendet wird, nutzt der Benutzeragent ein vorhandenes Set von Zugangsdaten, um sich bei einer vertrauenden Partei zu authentifizieren (entweder als primäres Login oder um eine zusätzliche Authentifizierungsstufe während der MFA bereitzustellen).

In ihren einfachsten Formen empfangen die Methoden `create()` und `get()` eine sehr große Zufallszahl namens „Challenge“ vom Server und senden die vom privaten Schlüssel signierte Challenge zurück an den Server. Dies beweist dem Server, dass ein Benutzer den für die Authentifizierung erforderlichen privaten Schlüssel besitzt, ohne geheime Daten über das Netzwerk preiszugeben.

> [!NOTE]
> Die „Challenge“ muss ein Puffer mit zufälligen Informationen sein, der mindestens 16 Bytes groß ist.

### Erstellen eines Schlüsselpaares und Registrieren eines Benutzers

Um zu veranschaulichen, wie der Prozess der Zugangserstellung funktioniert, wird der typische Ablauf beschrieben, der eintritt, wenn ein Benutzer eine Zugangsdatenregistrierung bei einer vertrauenden Partei durchführen möchte:

1. Der Server der vertrauenden Partei sendet Benutzer- und vertrauende-Partei-Informationen über die Webanwendung, die für den Registrierungsprozess verantwortlich ist, zusammen mit der „Challenge“, über einen geeigneten sicheren Mechanismus (zum Beispiel [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)).

   > [!NOTE]
   > Das Format für den Austausch von Informationen zwischen dem Server und der Webanwendung ist der Anwendung überlassen.
   > Eine empfohlene Vorgehensweise ist der Austausch von {{Glossary("JSON_type_representation", "JSON-Typ-Repräsentationen")}} von Zugangsdaten und Zugangsoptionen.
   > Für die Authentifizierungs-APIs wurden Komfortmethoden erstellt, um von JSON-Repräsentationen in das erforderliche Format zu konvertieren: [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON).

2. Die Webanwendung initiiert die Erstellung eines neuen Zugangsdatenpaares über den Authentifikator im Namen der vertrauenden Partei durch einen Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create). Dieser Aufruf erhält eine `publicKey`-Option, die Geräteeigenschaften wie etwa die eigene Benutzerautorisierung des Geräts (zum Beispiel über Biometrie) angibt.

   Ein typischer Aufruf von `create()` könnte folgendermaßen aussehen:

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

   Die Parameter des `create()`-Aufrufs werden an den Authentifikator übergeben, zusammen mit einem SHA-256-Hash, der signiert wird, um sicherzustellen, dass dieser nicht manipuliert wurde.

3. Nach Zustimmung des Benutzers generiert der Authentifikator ein Schlüsselpaar und gibt den öffentlichen Schlüssel sowie eine optional signierte Attestation an die Webanwendung zurück. Dies geschieht, wenn die {{jsxref("Promise")}}, die vom `create()`-Aufruf zurückgegeben wird, erfüllt wird, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Attestationsinformationen).

4. Die Webanwendung leitet das [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Server der vertrauenden Partei weiter, erneut über einen geeigneten Mechanismus.

5. Der Server der vertrauenden Partei speichert den öffentlichen Schlüssel zusammen mit der Benutzeridentität, um den Zugang für zukünftige Authentifizierungen zu behalten. Während dieses Prozesses werden eine Reihe von Prüfungen durchgeführt, um sicherzustellen, dass die Registrierung abgeschlossen und nicht manipuliert wurde. Dazu gehören:

   1. Überprüfung, dass die „Challenge“ dieselbe ist wie die gesendete.
   2. Sicherstellung, dass das Origin das erwartete war.
   3. Validierung, dass die Signatur und Attestation mit der korrekten Zertifikatskette für das spezifische Modell des Authentifikators erstellt wurden, das ursprünglich das Schlüsselpaar generiert hat.

> [!WARNING]
> Die Attestation bietet der vertrauenden Partei eine Möglichkeit, die Herkunft des Authentifikators zu bestimmen. Vertrauende Parteien sollten keine Positivlisten mit Authentifikatoren pflegen.

### Authentifizieren eines Benutzers

Nachdem sich ein Benutzer mit WebAuthn registriert hat, kann er sich (anmelden) mit dem Dienst authentifizieren. Der Authentifizierungsprozess ähnelt dem Registrierungsvorgang, wobei die Hauptunterschiede sind, dass die Authentifizierung:

1. Keine zusätzlichen Informationen vom Benutzer oder der vertrauenden Partei benötigt.
2. Eine Assertion mit dem zuvor erstellten Schlüsselpaar für den Dienst erstellt, anstelle eines eigenen Schlüsselpaars des Authentifikators.

Der typische Authentifizierungsprozess lautet:

1. Die vertrauende Partei generiert eine „Challenge“ und sendet sie zusammen mit einer Liste von Zugangsdaten an den Benutzeragenten, wobei angegeben wird, wo die Zugangsdaten gesucht werden sollen (z. B. auf einem lokalen integrierten Authenticator oder externen Gerät über USB, BLE usw.).

2. Der Browser fordert den Authenticator auf, die „Challenge“ mithilfe eines [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufrufs zu signieren, wobei die Zugangsdaten in einer `publicKey`-Option übergeben werden.

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

   Die Parameter des `get()`-Aufrufs werden an den Authentifikator zur Verarbeitung der Authentifizierung übergeben.

3. Wenn der Authentifikator eines der angegebenen Zugangsdaten enthält und erfolgreich die Challenge signieren kann, wird die signierte Assertion nach Zustimmung des Benutzers an die Webanwendung zurückgegeben. Dies geschieht, wenn die {{jsxref("Promise")}}, die vom `get()`-Aufruf zurückgegeben wird, erfüllt ist, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Assertion-Informationen).

4. Die Webanwendung leitet die signierte Assertion zur Validierung an den Server der vertrauenden Partei weiter. Die Validierungsprüfungen beinhalten:

   1. Verwendung des während der Registrierung gespeicherten öffentlichen Schlüssels zur Validierung der Authentifikator-Signatur.
   2. Sicherstellung, dass die vom Authentifikator signierte „Challenge“ mit der Challenge übereinstimmt, die vom Server generiert wurde.
   3. Prüfung, dass die Relying Party ID mit der erwarteten ID für diesen Dienst übereinstimmt.

5. Wenn dies vom Server überprüft wurde, wird der Authentifizierungsprozess als erfolgreich betrachtet.

### Discoverable Credentials und konditionale Mediation

**Discoverable Credentials** werden von einem Authentifikator abgerufen – also vom Browser _entdeckt_ – und als Login-Optionen präsentiert, wenn sich der Benutzer in einer Webanwendung einer vertrauenden Partei anmeldet. Im Gegensatz dazu werden nicht auffindbare Zugangsdaten vom Server der vertrauenden Partei bereitgestellt, damit sie als Login-Optionen angezeigt werden können.

Discoverable-Credential-IDs und zugehörige Metadaten wie [Benutzernamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#name_2) und [Anzeigenamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#displayname) werden in einem clientseitigen Authentifikator wie einem Browser-Passwortmanager, einer Authenticator-App oder einer hardwarebasierten Lösung wie einem YubiKey gespeichert. Diese Informationen im Authentifikator zu haben, ermöglicht es dem Benutzer, sich bequem anzumelden, ohne Zugangsdaten bereitzustellen, und die vertrauende Partei muss kein [`credentialId`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) bei der Assertion bereitstellen (obwohl dies optional ist; wenn die Zugangsdaten von der vertrauenden Partei vorgegeben werden, wird der nicht auffindbare Workflow verfolgt).

Ein auffindbares Zugangsdatenpaar wird durch einen [`create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufruf mit einer angegebenen [`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) erstellt. Das `credentialId`, die Benutzermetadaten und der öffentliche Schlüssel der neuen Zugangsdaten werden wie oben diskutiert im Authentifikator gespeichert, aber auch zur Webanwendung zurückgegeben und auf dem Server der vertrauenden Partei gespeichert.

Um sich zu authentifizieren, ruft der Server der vertrauenden Partei [`get()`](/de/docs/Web/API/CredentialsContainer/get) mit **konditionaler Mediation** auf, wobei [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) auf `conditional`, eine leere [`allowCredentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials)-Liste (was bedeutet, dass nur auffindbare Zugangsdaten angezeigt werden können) und eine Challenge festgelegt sind.

Die konditionale Mediation führt dazu, dass auffindbare Zugangsdaten, die im Authentifikator gefunden werden, in einer nicht-modalen Benutzeroberfläche zusammen mit einem Hinweis auf den Ursprung angezeigt werden, der die Zugangsdaten angefordert hat, anstatt eines modalen Dialogfelds. In der Praxis bedeutet dies, dass verfügbare Zugangsdaten automatisch in Ihre Login-Formulare eingefügt werden. Die im auffindbaren Credential gespeicherten Metadaten können angezeigt werden, um Benutzern bei ihrer Auswahl zu helfen. Um auffindbare Zugangsdaten in Ihren Login-Formularen anzuzeigen, müssen Sie außerdem [`autocomplete="webauthn"`](/de/docs/Web/HTML/Attributes/autocomplete#webauthn) zu Ihren Formularfeldern hinzufügen.

Zusammengefasst: Die vertrauende Partei teilt dem Authentifikator nicht mit, welche Zugangsdaten dem Benutzer angeboten werden sollen – stattdessen liefert der Authentifikator die Liste verfügbarer Zugangsdaten. Sobald der Benutzer ein Credential ausgewählt hat, verwendet der Authentifikator dieses zur Signierung der Challenge mit dem zugehörigen privaten Schlüssel, und der Browser gibt die signierte Challenge und deren `credentialId` an den Server der vertrauenden Partei zurück.

Der nachfolgende Authentifizierungsprozess auf dem Server der vertrauenden Partei ist derselbe wie bei nicht auffindbaren Zugangsdaten.

> [!NOTE]
> Sie können überprüfen, ob konditionale Mediation bei einem bestimmten Benutzeragenten verfügbar ist, indem Sie die Methode [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable) aufrufen.

[Passkeys](https://passkeys.dev/) sind ein wichtiger Anwendungsfall für auffindbare Zugangsdaten. Weitere Informationen finden Sie unter [Erstellen eines Passkeys für passwortlose Logins](https://web.dev/articles/passkey-registration) und [Anmeldung mit einem Passkey über automatische Formularausfüllung](https://web.dev/articles/passkey-form-autofill). Für allgemeine Informationen zu auffindbaren Zugangsdaten siehe [Discoverable credentials deep dive](https://web.dev/articles/webauthn-discoverable-credentials).

Wenn konditionale Mediation für die Authentifizierung verwendet wird, wird das Flag für „silent access verhindern“ (siehe [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)) immer als `true` behandelt, unabhängig von seinem tatsächlichen Wert: Das konditionale Verhalten involviert immer irgendeine Form der Benutzeraktion, wenn anwendbare Zugangsdaten gefunden werden.

> [!NOTE]
> Wenn keine Zugangsdaten gefunden werden, ist die nicht-modale Benutzeroberfläche nicht sichtbar, und der Benutzeragent kann den Benutzer dazu auffordern, abhängig vom Typ der Zugangsdaten Maßnahmen zu ergreifen (zum Beispiel ein Gerät einzufügen, das Zugangsdaten enthält).

#### Synchronisierungsmethoden für auffindbare Zugangsdaten

Es ist möglich, dass die Informationen über auffindbare Zugangsdaten in einem Authentifikator eines Benutzers nicht mehr mit den Daten auf dem Server der vertrauenden Partei übereinstimmen. Dies könnte passieren, wenn der Benutzer ein Credential löscht oder seinen Benutzer-/Anzeigenamen in der Webanwendung der vertrauenden Partei ändert, ohne den Authentifikator zu aktualisieren.

Die API bietet Methoden, mit denen der Server der vertrauenden Partei Änderungen an den Authentifikator signalisieren kann, sodass dieser seine gespeicherten Zugangsdaten aktualisieren kann:

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static): Signalisiert dem Authentifikator alle gültigen `credentialId`s, die der Server der vertrauenden Partei für einen bestimmten Benutzer gespeichert hat.
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static): Signalisiert dem Authentifikator, dass ein bestimmter Benutzer seinen Benutzer- und/oder Anzeigenamen auf dem Server der vertrauenden Partei aktualisiert hat.
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static): Signalisiert dem Authentifikator, dass eine `credentialId` auf dem Server der vertrauenden Partei nicht erkannt wurde.

`signalUnknownCredential()` und `signalAllAcceptedCredentials()` scheinen für ähnliche Zwecke verwendet zu werden – wann sollten Sie welche Methode nutzen?

- `signalAllAcceptedCredentials()` sollte nach jedem erfolgreichen Login und wenn der Benutzer eingeloggt ist, aufgerufen werden, um den Status seiner Zugangsdaten zu aktualisieren. Es darf nur verwendet werden, wenn ein Benutzer authentifiziert ist, da es die gesamte Liste von `credentialId`s für einen bestimmten Benutzer teilt, was ein Datenschutzleck bedeuten würde, wenn der Benutzer nicht authentifiziert ist.
- `signalUnknownCredential()` sollte nach einem fehlgeschlagenen Login aufgerufen werden, um dem Authentifikator zu signalisieren, dass die `credentialId` des ausgewählten Credentials nicht validiert werden konnte und entfernt werden sollte. Die Methode kann sicher aufgerufen werden, wenn der Benutzer nicht authentifiziert ist, da sie nur eine einzelne `credentialId` an den Authentifikator übermittelt – diejenige, die der Client gerade zur Authentifizierung verwendet hat – und keine Benutzerinformationen.

### Anpassung von Workflows basierend auf Client-Fähigkeiten

Die Registrierungs- und Anmeldeworkflows können basierend auf den Fähigkeiten des WebAuthn-Clients (Browser) angepasst werden. Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) kann verwendet werden, um diese Fähigkeiten abzufragen; sie gibt ein Objekt zurück, in dem jeder Schlüssel eine WebAuthn-Fähigkeit oder -Erweiterung darstellt, und jeder Wert ein Boolean ist, der die Unterstützung dieser Funktion angibt.

Diese Methode kann verwendet werden, um beispielsweise zu überprüfen:

- Unterstützung des Clients für verschiedene Authenticatoren wie Passkeys oder biometrische Benutzerverifizierung.
- Ob der Client [Methoden zur Synchronisierung von Zugangsdaten zwischen vertrauender Partei und Authentifikator unterstützt](/de/docs/Web/API/Web_Authentication_API#discoverable_credential_synchronization_methods).
- Ob der Client die Nutzung eines einzigen Passkeys auf verschiedenen Websites mit demselben Origin ermöglicht.

Der untenstehende Code zeigt, wie Sie `getClientCapabilities()` verwenden können, um zu prüfen, ob der Client Authentifikatoren unterstützt, die eine biometrische Benutzerverifizierung anbieten. Beachten Sie, dass die tatsächlich durchgeführten Maßnahmen von Ihrer Website abhängen. Für Websites, die _biometrische Authentifizierung erfordern_, könnten Sie beispielsweise die Login-Benutzeroberfläche durch eine Nachricht ersetzen, die besagt, dass biometrische Authentifizierung erforderlich ist, und der Benutzer einen anderen Browser oder ein anderes Gerät verwenden sollte.

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

## Zugriffskontrolle für die API

Die Verfügbarkeit von WebAuthn kann durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) gesteuert werden, wobei insbesondere zwei Direktiven spezifiziert werden:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Steuert die Verfügbarkeit von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Steuert die Verfügbarkeit von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option.

Beide Direktiven haben standardmäßig den Wert `"self"`, was bedeutet, dass diese Methoden standardmäßig in obersten Dokumentkontexten verwendet werden können. Zusätzlich kann `get()` auch in verschachtelten Browsing-Kontexten verwendet werden, die vom selben Origin wie das oberste Dokument geladen werden. `get()` und `create()` können in verschachtelten Browsing-Kontexten geladen werden, deren Origin sich vom obersten Dokument unterscheidet (z. B. in Origins übergreifenden `<iframes>`), wenn die Direktiven [`publickey-credentials-get`](/de/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-get) und [`publickey-credentials-create`](/de/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create) in der `Permission-Policy` dies erlauben. Für Origins übergreifende `create()`-Aufrufe, bei denen die Erlaubnis durch [`allow=` in einem iframe](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) erteilt wird, muss das Frame ebenfalls über eine {{Glossary("Transient_activation", "flüchtige Aktivierung")}} verfügen.

> [!NOTE]
> Wenn eine Richtlinie die Nutzung dieser Methoden verbietet, wird die {{jsxref("Promise", "Promise", "", 1)}} der Methoden mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

### Grundlegende Zugriffskontrolle

Falls Sie nur einem bestimmten Subdomain den Zugriff erlauben möchten, können Sie dieses Beispiel verwenden:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Erlauben von eingebetteten `create`- und `get()`-Aufrufen in einem `<iframe>`

Falls Sie `get()` oder `create()` in einem `<iframe>` nutzen möchten, sind folgende Schritte nötig:

1. Die Seite, die die vertrauende Partei-Seite einbettet, muss die Erlaubnis über ein `allow`-Attribut bereitstellen:

   - Wenn Sie `get()` verwenden:

     ```html
     <iframe
       src="https://auth.provider.com"
       allow="publickey-credentials-get *">
     </iframe>
     ```

   - Wenn Sie `create()` verwenden:

     ```html
     <iframe
       src="https://auth.provider.com"
       allow="publickey-credentials-create 'self' https://a.auth.provider.com https://b.auth.provider.com">
     </iframe>
     ```

     Das `<iframe>` muss zudem über eine {{Glossary("Transient_activation", "flüchtige Aktivierung")}} verfügen, wenn `create()` Origins übergreifend aufgerufen wird.

2. Die vertrauende Partei-Seite muss die Erlaubnis für den obigen Zugriff über einen `Permissions-Policy`-Header bereitstellen:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   Oder um nur eine bestimmte URL zu erlauben, die Seite der vertrauenden Partei in einem `<iframe>` einzubetten:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## Schnittstellen

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)
  - : Liefert den Nachweis an einen Dienst, dass ein Authentifikator das erforderliche Schlüsselpaar besitzt, um eine durch [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) initiierte Authentifizierungsanfrage erfolgreich zu bearbeiten. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die zurückgegeben wird, wenn die `get()`-{{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)
  - : Das Ergebnis einer WebAuthn-Zugangsdatenregistrierung (d. h. eines Aufrufs von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create)). Sie enthält Informationen über die Zugangsdaten, die der Server benötigt, um WebAuthn-Assertionen zu machen, wie z. B. deren Credential ID und öffentlichen Schlüssel. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die zurückgegeben wird, wenn die `create()`-{{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)
  - : Die Basisschnittstelle für [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) und [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
  - : Liefert Informationen über ein Schlüsselpaar aus öffentlichem und privatem Schlüssel, das eine Credential zur Anmeldung bei einem Dienst bildet. Statt eines Passworts wird ein nicht-phishbares und gegen Datenpannen resistentes asymmetrisches Schlüsselpaar verwendet. Wird zurückgegeben, wenn die durch [`create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`get()`](/de/docs/Web/API/CredentialsContainer/get) aufgerufene {{jsxref("Promise")}} erfüllt wird.

## Erweiterungen für andere Schnittstellen

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die `publicKey`-Option
  - : Ein Aufruf von `create()` mit einer `publicKey`-Option startet die Erstellung neuer asymmetrischer Schlüsselpaar-Zugangsdaten über einen Authentifikator, wie oben beschrieben.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `publicKey`-Option
  - : Ein Aufruf von `get()` mit einer `publicKey`-Option weist den Benutzeragenten an, ein bestehendes Set von Zugangsdaten zu verwenden, um sich bei einer vertrauenden Partei zu authentifizieren.

## Beispiele

### Demo-Seiten

- [Mozilla Demo](https://webauthn.bin.coffee/) Website und ihr [Quellcode](https://github.com/jcjones/webauthn.bin.coffee).
- [Google Demo](https://try-webauthn.appspot.com/) Website und ihr [Quellcode](https://github.com/google/webauthndemo).
- [WebAuthn.io Demo](https://webauthn.io/) Website und ihr [Quellcode](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) und ihr [Client-Quellcode](https://github.com/webauthn-open-source/webauthn-simple-app) sowie [Server-Quellcode](https://github.com/webauthn-open-source/fido2-lib).

### Nutzungsbeispiel

> [!NOTE]
> Aus Sicherheitsgründen werden die Aufrufe der Web Authentication API ([`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`get()`](/de/docs/Web/API/CredentialsContainer/get)) abgebrochen, wenn das Browserfenster den Fokus verliert, während auf die Fertigstellung des Aufrufs gewartet wird.

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
