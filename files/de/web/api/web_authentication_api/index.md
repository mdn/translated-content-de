---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Die Web Authentication API (WebAuthn) ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), die eine starke Authentifizierung mit öffentlicher kryptographischer Schlüsseltechnologie ermöglicht und damit eine passwortlose Authentifizierung und sichere {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} (MFA) ohne SMS-Nachrichten ermöglicht.

## WebAuthn-Konzepte und Nutzung

WebAuthn nutzt [asymmetrische (öffentlicher Schlüssel) Kryptographie](https://en.wikipedia.org/wiki/Public-key_cryptography) anstelle von Passwörtern oder SMS-Nachrichten zur Registrierung, Authentifizierung und {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} mit Websites. Dies bietet einige Vorteile:

- **Schutz gegen Phishing:** Ein Angreifer, der eine gefälschte Login-Website erstellt, kann sich nicht als Benutzer anmelden, da sich die Signatur mit dem {{Glossary("Origin", "Ursprung")}} der Website ändert.
- **Geringere Auswirkungen von Datenpannen:** Entwickler müssen den öffentlichen Schlüssel nicht hashen, und falls ein Angreifer Zugriff auf den zur Überprüfung der Authentifizierung verwendeten öffentlichen Schlüssel erhält, kann er sich nicht authentifizieren, da er den privaten Schlüssel benötigt.
- **Unverwundbar gegenüber Passwortangriffen:** Einige Benutzer verwenden möglicherweise Passwörter mehrfach, und ein Angreifer könnte das Passwort des Benutzers für eine andere Website erlangen (z. B. über eine Datenpanne). Außerdem sind Textpasswörter viel einfacher mit roher Gewalt zu knacken als eine digitale Signatur.

Viele Websites haben bereits Seiten, die Benutzern ermöglichen, neue Konten zu registrieren oder sich in ein bestehendes Konto einzuloggen, und WebAuthn fungiert als Ersatz oder Erweiterung für den Authentifizierungsteil des Systems. Es erweitert die [Credential Management API](/de/docs/Web/API/Credential_Management_API), abstrahiert die Kommunikation zwischen dem Benutzeragenten und einem Authentifizierungsgerät und bietet die folgende neue Funktionalität:

- Wenn [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der Option `publicKey` verwendet wird, erstellt der Benutzeragent neue Anmeldedaten über ein Authentifizierungsgerät — entweder zur Registrierung eines neuen Kontos oder zur Verknüpfung eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.
  - Bei der Registrierung eines neuen Kontos werden diese Anmeldedaten auf einem Server (auch als Service oder [vertrauende Partei](https://en.wikipedia.org/wiki/Relying_party) bezeichnet) gespeichert und können anschließend verwendet werden, um einen Benutzer anzumelden.
  - Das asymmetrische Schlüsselpaar wird in dem Authentifizierungsgerät gespeichert, das dann verwendet werden kann, um einen Benutzer bei einer vertrauenden Partei zu authentifizieren, beispielsweise während der MFA. Das Authentifizierungsgerät kann in den Benutzeragenten eingebettet sein, in ein Betriebssystem wie Windows Hello oder es kann sich um ein physisches Token wie einen USB- oder Bluetooth-Sicherheitsschlüssel handeln.
- Wenn [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der Option `publicKey` verwendet wird, nutzt der Benutzeragent ein bestehendes Set von Anmeldedaten, um sich bei einer vertrauenden Partei zu authentifizieren (entweder als primäre Anmeldung oder um einen zusätzlichen Faktor während der MFA bereitzustellen, wie oben beschrieben).

In ihren grundlegendsten Formen erhalten sowohl `create()` als auch `get()` eine sehr große Zufallszahl, die "Challenge" genannt wird, vom Server und geben die durch den privaten Schlüssel signierte Challenge an den Server zurück. Dies beweist dem Server, dass ein Benutzer den privaten Schlüssel besitzt, der für die Authentifizierung benötigt wird, ohne Geheimnisse über das Netzwerk preiszugeben.

> [!NOTE]
> Die "Challenge" muss ein Puffer aus Zufallsinformationen sein, der mindestens 16 Bytes groß ist.

### Erstellen eines Schlüsselpaares und Registrieren eines Benutzers

Um zu veranschaulichen, wie der Anmeldeinformations-Erstellungsprozess funktioniert, beschreiben wir den typischen Ablauf, der eintritt, wenn ein Benutzer ein Anmeldedatum bei einer vertrauenden Partei registrieren möchte:

1. Der Server der vertrauenden Partei sendet Benutzer- und Informationen der vertrauenden Partei an die Web-App, die den Registrierungsprozess übernimmt, zusammen mit der "Challenge", über einen geeigneten sicheren Mechanismus (zum Beispiel [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)).

   > [!NOTE]
   > Das Format für den Austausch von Informationen zwischen dem Server der vertrauenden Partei und der Web-App liegt in der Verantwortung der Anwendung.
   > Ein empfohlener Ansatz besteht darin, {{Glossary("JSON_type_representation", "JSON-Darstellungsobjekte")}} für Anmeldedaten und Anmeldeoptionen auszutauschen.
   > Komfortmethoden wurden in `PublicKeyCredential` erstellt, um von den JSON-Darstellungen in die für die Authentifizierungs-APIs erforderliche Form zu konvertieren: [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON).

2. Die Web-App initiiert die Generierung eines neuen Anmeldedatums über das Authentifizierungsgerät im Namen der vertrauenden Partei über einen [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) Aufruf. Dieser Aufruf erhält eine `publicKey` Option, die die Geräteeigenschaften spezifiziert, z.B. ob das Gerät seine eigene Benutzerauthentifizierung bereitstellt (z. B. mit Biometrie).

   Ein typischer `create()`-Aufruf könnte wie folgt aussehen:

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

   Die Parameter des `create()`-Aufrufs werden an das Authentifizierungsgerät übergeben, zusammen mit einem SHA-256-Hash, der signiert wird, um sicherzustellen, dass er nicht manipuliert wurde.

3. Nachdem das Authentifizierungsgerät die Zustimmung des Benutzers erhalten hat, generiert es ein Schlüsselpaar und gibt den öffentlichen Schlüssel und die optional signierte Attestation an die Web-App zurück. Dies wird bereitgestellt, wenn das vom `create()`-Aufruf zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Attestationsinformationen).

4. Die Web-App leitet das [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) weiter an den Server der vertrauenden Partei, erneut über einen geeigneten Mechanismus.

5. Der Server der vertrauenden Partei speichert den öffentlichen Schlüssel zusammen mit der Benutzeridentität, um sich das Anmeldedatum für zukünftige Authentifizierungen zu merken. Während dieses Prozesses führt er eine Reihe von Überprüfungen durch, um sicherzustellen, dass die Registrierung abgeschlossen und nicht manipuliert wurde. Dazu gehören:
   1. Überprüfung, dass die Challenge die gleiche ist wie die gesendete Challenge.
   2. Sicherstellen, dass der Ursprung der erwartete Ursprung war.
   3. Validierung, dass die Signatur und die Attestation die richtige Zertifikatskette für das spezifische Modell des verwendeten Authentifizierungsgeräts zur Generierung des Schlüsselpaares verwenden.

> [!WARNING]
> Die Attestation bietet einer vertrauenden Partei eine Möglichkeit, die Herkunft eines Authentifizierungsgeräts zu bestimmen. Vertrauensparteien sollten nicht versuchen, Positivlisten von Authentifizierungsgeräten zu pflegen.

### Authentifizierung eines Benutzers

Nachdem ein Benutzer sich bei WebAuthn registriert hat, kann er sich beim Service authentifizieren (einloggen). Der Authentifizierungsablauf sieht dem Registrierungsablauf ähnlich, die Hauptunterschiede bestehen darin, dass die Authentifizierung:

1. Keine Informationen über den Benutzer oder die vertrauende Partei erfordert
2. Eine Assertion unter Verwendung des zuvor generierten Schlüsselpaares für den Service erstellt, anstatt des Schlüsselpaares des Authentifizierungsgeräts.

Ein typischer Authentifizierungsablauf ist wie folgt:

1. Die vertrauende Partei generiert eine "Challenge" und sendet sie an den Benutzeragenten über einen geeigneten sicheren Mechanismus, zusammen mit einer Liste von Anmeldedaten der vertrauenden Partei und des Benutzers. Sie kann auch angeben, wo das Anmeldedatum gesucht werden soll, z.B. auf einem lokalen integrierten Authentifizierungsgerät oder auf einem externen über USB, BLE usw.

2. Der Browser fordert das Authentifizierungsgerät auf, die Challenge über einen [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf zu signieren, dem die Anmeldedaten in einer `publicKey` Option übergeben werden.

   Ein typischer `get()`-Aufruf könnte wie folgt aussehen:

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

   Die Parameter des `get()`-Aufrufs werden an das Authentifizierungsgerät übergeben, um die Authentifizierung durchzuführen.

3. Wenn das Authentifizierungsgerät eines der angegebenen Anmeldedaten enthält und die Challenge erfolgreich signieren kann, gibt es eine signierte Assertion an die Web-App zurück, nachdem es die Zustimmung des Benutzers erhalten hat. Dies wird bereitgestellt, wenn das vom `get()`-Aufruf zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Assertionsinformationen).

4. Die Web-App leitet die signierte Assertion an den Server der vertrauenden Partei weiter, damit die vertrauende Partei sie validieren kann. Die Validierungsprüfungen umfassen:
   1. Verwendung des während der Registrierung gespeicherten öffentlichen Schlüssels zur Validierung der Signatur durch das Authentifizierungsgerät.
   2. Sicherstellen, dass die von dem Authentifizierungsgerät signierte Challenge mit der vom Server generierten Challenge übereinstimmt.
   3. Überprüfung, dass die Relying Party ID die erwartete für diesen Service ist.

5. Sobald der Server die Überprüfung abgeschlossen hat, wird der Authentifizierungsablauf als erfolgreich betrachtet.

### Entdeckbare Anmeldeinformationen und bedingte Vermittlung

**Entdeckbare Anmeldeinformationen** werden von einem Authentifizierungsgerät abgerufen — vom Browser "entdeckt" — um als Login-Optionen angeboten zu werden, wenn sich der Benutzer bei einer Web-App einer vertrauenden Partei anmeldet. Im Gegensatz dazu werden nicht-entdeckbare Anmeldeinformationen vom Server der vertrauenden Partei bereitgestellt, damit der Browser sie als Login-Optionen anbieten kann.

Entdeckbare Anmeldeinformations-IDs und zugehörige Metadaten wie [Benutzernamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#name_2) und [Anzeigenamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#displayname) werden in einem clientseitigen Authentifizierungsgerät gespeichert, wie einem Browser-Passwortmanager, einer Authentifizierungs-App oder einer Hardwarelösung wie einem YubiKey. Das Vorhandensein dieser Informationen im Authentifizierungsgerät bedeutet, dass sich der Benutzer bequem anmelden kann, ohne Anmeldedaten angeben zu müssen, und die vertrauende Partei muss nicht unbedingt eine [`credentialId`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) bereitstellen, wenn sie es will (obwohl es möglich ist; wenn das Anmeldedatum von der RP bestätigt wird, wird der nicht-entdeckbare Ablauf befolgt).

Ein entdeckbarer Anmeldeeintrag wird über einen [`create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufruf mit einem angegebenen [`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) erstellt. Die `credentialId`, Benutzer-Metadaten und der öffentliche Schlüssel für das neue Anmeldedatum werden vom Authentifizierungsgerät wie oben besprochen gespeichert, aber auch an die Web-App zurückgegeben und auf dem RP-Server gespeichert.

Um sich zu authentifizieren, ruft der RP-Server [`get()`](/de/docs/Web/API/CredentialsContainer/get) mit **bedingter Vermittlung** auf, wobei [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) auf `conditional` gesetzt ist, eine leere [`allowCredentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials) Liste (was bedeutet, dass nur entdeckbare Anmeldeinformationen angezeigt werden können) und eine Challenge.

Die bedingte Vermittlung führt dazu, dass entdeckbare Anmeldeinformationen im Authentifizierungsgerät dem Benutzer in einer nicht-modalen Benutzeroberfläche zusammen mit einem Hinweis auf den Ursprung, der Anmeldeinformationen anfordert, präsentiert werden, anstatt in einem modalen Dialog. In der Praxis bedeutet dies das automatische Ausfüllen verfügbarer Anmeldeinformationen in Ihren Login-Formularen. Die Metadaten, die in entdeckbaren Anmeldeinformationen gespeichert sind, können angezeigt werden, um den Benutzern bei der Auswahl eines Anmeldeeintrags beim Einloggen zu helfen. Um entdeckbare Anmeldeinformationen in Ihren Login-Formularen anzuzeigen, müssen Sie auch [`autocomplete="webauthn"`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#webauthn) in Ihre Formularfelder einfügen.

Noch einmal: die vertrauende Partei sagt dem Authentifizierungsgerät nicht, welche Anmeldeinformationen dem Benutzer angeboten werden sollen — stattdessen stellt das Authentifizierungsgerät die Liste bereit, die es verfügbar hat. Sobald der Benutzer ein Anmeldeeintrag ausgewählt hat, verwendet das Authentifizierungsgerät diesen, um die Challenge mit dem zugehörigen privaten Schlüssel zu signieren, und der Browser gibt die signierte Challenge und ihre `credentialId` an den RP-Server zurück.

Der anschließende Authentifizierungsprozess auf dem RP-Server ist derselbe wie für nicht-entdeckbare Anmeldeinformationen.

> [!NOTE]
> Sie können überprüfen, ob bedingte Vermittlung auf einem bestimmten Benutzeragenten verfügbar ist, indem Sie die Methode [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) aufrufen.

[Passkeys](https://passkeys.dev/) sind ein bedeutender Anwendungsfall für entdeckbare Anmeldeinformationen; siehe [Create a passkey for passwordless logins](https://web.dev/articles/passkey-registration) und [Sign in with a passkey through form autofill](https://web.dev/articles/passkey-form-autofill) für Implementierungsdetails. Siehe auch [Discoverable credentials deep dive](https://web.dev/articles/webauthn-discoverable-credentials) für allgemeinere Informationen zu entdeckbaren Anmeldeinformationen.

Wenn die bedingte Vermittlung für die Authentifizierung verwendet wird, wird das Flag für die Verhinderung von stillem Zugriff (siehe [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)) als `true` behandelt, unabhängig von seinem tatsächlichen Wert: das bedingte Verhalten beinhaltet immer eine Art von Benutzerbeteiligung, wenn anwendbare Anmeldeinformationen gefunden werden.

> [!NOTE]
> Wenn keine Anmeldeinformationen gefunden werden, wird der nicht-modale Dialog nicht sichtbar, und der Benutzeragent kann den Benutzer in einer Weise zum Handeln auffordern, die vom Anmeldedatumstyp abhängt (zum Beispiel, um ein Gerät mit Anmeldeinformationen einzufügen).

#### Methoden zur Synchronisierung entdeckbarer Anmeldeinformationen

Es ist möglich, dass die im Authentifizierungsgerät eines Benutzers gespeicherten Informationen über entdeckbare Anmeldeinformationen nicht mit dem Server der vertrauenden Partei synchron sind. Dies kann passieren, wenn der Benutzer ein Anmeldedatum löscht oder seinen Benutzer-/Anzeigenamen auf der RP-Web-App ändert, ohne das Authentifizierungsgerät zu aktualisieren.

Die API bietet Methoden, um dem Server der vertrauenden Partei das Signalisieren von Änderungen an das Authentifizierungsgerät zu ermöglichen, sodass es seine gespeicherten Anmeldeinformationen aktualisieren kann:

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static): Signalisiert dem Authentifizierungsgerät alle gültigen Anmeldeinformations-IDs, die der RP-Server für einen bestimmten Benutzer noch hält.
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static): Signalisiert dem Authentifizierungsgerät, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeigenamen auf dem RP-Server aktualisiert hat.
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static): Signalisiert dem Authentifizierungsgerät, dass eine Anmeldeinformations-ID vom RP-Server nicht erkannt wurde.

Es mag den Anschein haben, dass `signalUnknownCredential()` und `signalAllAcceptedCredentials()` ähnliche Zwecke haben. Wann soll also jede Methode verwendet werden?

- `signalAllAcceptedCredentials()` sollte nach jedem erfolgreichen Einloggen und wenn der Benutzer eingeloggt ist und Sie den Status ihrer Anmeldeinformationen aktualisieren möchten, aufgerufen werden. Es darf nur aufgerufen werden, wenn ein Benutzer authentifiziert ist, da es die gesamte Liste der `credentialId`s für einen bestimmten Benutzer teilt. Dies würde ein Datenschutzleck verursachen, wenn der Benutzer nicht authentifiziert ist.
- `signalUnknownCredential()` sollte nach einem erfolglosen Login aufgerufen werden, um dem Authentifizierungsgerät zu signalisieren, dass die `credentialId` des ausgewählten Anmeldeeintrags nicht verifiziert werden kann und entfernt werden sollte. Die Methode kann sicher aufgerufen werden, wenn der Benutzer nicht authentifiziert ist, da sie eine einzelne `credentialId` an das Authentifizierungsgerät übermittelt — diejenige, mit der der Client gerade versucht hat, sich zu authentifizieren — und keine Benutzerinformationen.

### Anpassung von Workflows basierend auf den Client-Fähigkeiten

Die Anmelde- und Anmelde-Workflows können basierend auf den Fähigkeiten des WebAuthn-Clients (Browser) angepasst werden. Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) kann verwendet werden, um diese Fähigkeiten abzufragen; sie gibt ein Objekt zurück, bei dem jeder Schlüssel auf eine WebAuthn-Fähigkeit oder Erweiterung verweist, und jeder Wert ein boolesches Ergebnis liefert, das die Unterstützung dieses Features angibt.

Dies kann verwendet werden, um zum Beispiel zu prüfen:

- Unterstützung des Clients für verschiedene Authentifizierungsgeräte wie Passkeys oder biometrische Überprüfung.
- Ob der Client [Methoden unterstützt, um Anmeldeinformationen von vertrauenden Parteien und Authentifizierungsgeräte synchron zu halten](#methoden_zur_synchronisierung_entdeckbarer_anmeldeinformationen).
- Ob der Client erlaubt, dass ein einzelner Passkey auf verschiedenen Websites mit dem gleichen Ursprung verwendet wird.

Der untenstehende Code zeigt, wie Sie `getClientCapabilities()` verwenden könnten, um zu überprüfen, ob der Client Authentifizierungsgeräte unterstützt, die eine biometrische Benutzerauthentifizierung bieten.
Beachten Sie, dass die tatsächlich durchgeführten Aktionen von Ihrer Website abhängen.
Für Websites, die _biometrische Authentifizierung_ erfordern, könnten Sie die Anmelde-Benutzeroberfläche durch eine Nachricht ersetzen, die angibt, dass biometrische Authentifizierung erforderlich ist, und der Benutzer sollte einen anderen Browser oder ein anderes Gerät ausprobieren.

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

## Kontrolle des Zugangs zur API

Die Verfügbarkeit von WebAuthn kann mit einer [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden, die insbesondere zwei Richtlinien spezifiziert:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Steuert die Verfügbarkeit von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der Option `publicKey`.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Steuert die Verfügbarkeit von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der Option `publicKey`.

Beide Richtlinien haben einen standardmäßigen Whitelist-Wert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in obersten Dokumentkontexten verwendet werden können.
Darüber hinaus kann `get()` in verschachtelten Browser-Kontexten verwendet werden, die aus demselben Ursprung wie das oberste Dokument geladen wurden.
`get()` und `create()` können in verschachtelten Browser-Kontexten verwendet werden, die aus verschiedenen Ursprüngen zum obersten Dokument geladen wurden (d.h. in Cross-Origin-`<iframes>`), wenn sie von den [`publickey-credentials-get`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-get) und [`publickey-credentials-create`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create) `Permissions-Policy`-Richtlinien erlaubt sind.
Für Cross-Origin `create()`-Aufrufe, bei denen die Berechtigung durch [`allow=` auf einem iFrame](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) erteilt wurde, muss der Frame auch {{Glossary("Transient_activation", "Transiente Aktivierung")}} haben.

> [!NOTE]
> Wenn eine Richtlinie die Verwendung dieser Methoden verbietet, wird das zurückgegebene {{jsxref("Promise", "versprochene", "", 1)}} von ihnen mit einer `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

### Grundlegende Zugangskontrolle

Wenn Sie den Zugang lediglich einem bestimmten Subdomain erlauben möchten, könnten Sie es beispielsweise so angeben:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Eingebettete `create` und `get()` Aufrufe in einem `<iframe>` erlauben

Wenn Sie sich mit `get()` oder `create()` in einem `<iframe>` authentifizieren möchten, gibt es einige Schritte zu befolgen:

1. Die Seite, die die vertrauende Partei einbettet, muss die Berechtigung über ein `allow`-Attribut erteilen:
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

     Das `<iframe>` muss auch {{Glossary("Transient_activation", "Transiente Aktivierung")}} haben, wenn `create()` Cross-Origin aufgerufen wird.

2. Die Seite der vertrauenden Partei muss die Berechtigung für den obigen Zugang über einen `Permissions-Policy`-Header bereitstellen:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   Oder um nur einer bestimmten URL zu erlauben, die Seite der vertrauenden Partei in einem `<iframe>` einzubetten:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## Schnittstellen

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)
  - : Bietet einem Service den Nachweis, dass ein Authentifizierungsgerät das notwendige Schlüsselpaar hat, um eine Authentifizierungsanforderung erfolgreich zu verarbeiten, die durch einen [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf initiiert wurde. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Instanz, die erhalten wird, wenn das `get()`-{{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)
  - : Das Ergebnis einer WebAuthn-Anmeldeinformationsregistrierung (d.h. ein [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) Aufruf). Enthält Informationen über das Anmeldedatum, die der Server benötigt, um WebAuthn-Assertions durchzuführen, wie seine Anmeldeinformations-ID und den öffentlichen Schlüssel. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Instanz, die erhalten wird, wenn das `create()`-{{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)
  - : Die Basisschnittstelle für [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) und [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
  - : Bietet Informationen über ein Pair von öffentlichen und privaten Schlüsseln, welches eine Anmeldeinformation für den Login bei einem Service mithilfe eines unphishbaren und vor Datenpannen geschützten asymmetrischen Schlüsselpaares anstelle eines Passworts darstellt. Erhalten bei Erfüllung der über ein [`create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf zurückgegebenen {{jsxref("Promise")}}.

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die `publicKey` Option
  - : Ein `create()` Aufruf mit einer `publicKey` Option initiiert die Erstellung neuer asymmetrischer Schlüssel-Anmeldeinformationen über ein Authentifizierungsgerät, wie oben erklärt.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `publicKey` Option
  - : Ein `get()` Aufruf mit einer `publicKey`-Option weist den Benutzeragenten an, ein bestehendes Set von Anmeldeinformationen zur Authentifizierung bei einer vertrauenden Partei zu verwenden.

## Beispiele

### Demo-Seiten

- [Mozilla Demo](https://webauthn.bin.coffee/) Webseite und deren [Quellcode](https://github.com/jcjones/webauthn.bin.coffee).
- [Google Demo](https://try-webauthn.appspot.com/) Webseite und deren [Quellcode](https://github.com/google/webauthndemo).
- [WebAuthn.io Demo](https://webauthn.io/) Webseite und deren [Quellcode](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) und deren [Client-Quellcode](https://github.com/webauthn-open-source/webauthn-simple-app) und [Server-Quellcode](https://github.com/webauthn-open-source/fido2-lib)

### Anwendungsbeispiel

> [!NOTE]
> Aus Sicherheitsgründen werden die Web Authentication API Aufrufe ([`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`get()`](/de/docs/Web/API/CredentialsContainer/get)) abgebrochen, wenn das Browserfenster den Fokus verliert, während der Aufruf aussteht.

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
