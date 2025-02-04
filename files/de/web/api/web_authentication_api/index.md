---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: 1e98f1356a5eda11db10cd9b08dc52cce868ebff
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Die Web Authentication API (WebAuthn) ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), die eine starke Authentifizierung mit öffentlicher Schlüssel-Kryptographie ermöglicht, sodass eine passwortlose Authentifizierung und sichere Multi-Faktor-Authentifizierung (MFA) ohne SMS-Nachrichten ermöglicht werden.

## WebAuthn-Konzepte und Verwendung

WebAuthn verwendet [asymmetrische (öffentliche Schlüssel-)Kryptographie](https://en.wikipedia.org/wiki/Public-key_cryptography) anstelle von Passwörtern oder SMS-Nachrichten, um sich bei Websites zu registrieren, zu authentifizieren und [an Multi-Faktor-Authentifizierungen](https://en.wikipedia.org/wiki/Multi-factor_authentication) teilzunehmen. Dies bietet einige Vorteile:

- **Schutz gegen Phishing:** Ein Angreifer, der eine gefälschte Anmeldeseite erstellt, kann sich nicht als Benutzer einloggen, da sich die Signatur mit dem {{Glossary("Origin", "Origin")}} der Website ändert.
- **Verringerung der Auswirkungen von Datenlecks:** Entwickler müssen den öffentlichen Schlüssel nicht hashen, und wenn ein Angreifer Zugang zum öffentlichen Schlüssel erhält, der zur Überprüfung der Authentifizierung verwendet wird, kann er sich nicht authentifizieren, da er den privaten Schlüssel benötigt.
- **Unverwundbar gegenüber Passwortangriffen:** Einige Benutzer könnten Passwörter wiederverwenden, und ein Angreifer könnte das Passwort des Benutzers für eine andere Website erhalten (z.B. durch ein Datenleck). Textbasierte Passwörter sind außerdem viel einfacher durch rohe Gewalt zu entschlüsseln als eine digitale Signatur.

Viele Websites haben bereits Seiten, auf denen Benutzer neue Konten registrieren oder sich in ein vorhandenes Konto einloggen können, und WebAuthn fungiert als Ersatz oder Verbesserung für den Authentifizierungsteil des Systems. Es erweitert die [Credential Management API](/de/docs/Web/API/Credential_Management_API) und abstrahiert die Kommunikation zwischen dem Benutzeragenten und einem Authentifikator, wobei die folgende neue Funktionalität bereitgestellt wird:

- Wenn [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option verwendet wird, erstellt der Benutzeragent neue Anmeldedaten über einen Authentifikator — entweder zur Registrierung eines neuen Kontos oder zur Zuordnung eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.
  - Bei der Registrierung eines neuen Kontos werden diese Anmeldeinformationen auf einem Server gespeichert (auch als Dienst oder [Relying Party](https://en.wikipedia.org/wiki/Relying_party) bezeichnet) und können anschließend genutzt werden, um einen Benutzer einzuloggen.
  - Das asymmetrische Schlüsselpaar wird im Authentifikator gespeichert, der dann verwendet werden kann, um sich bei einer Relying Party zu authentifizieren, zum Beispiel während der MFA. Der Authentifikator kann in den Benutzeragenten eingebettet sein, in ein Betriebssystem, wie Windows Hello, oder es kann sich um ein physisches Token handeln, wie ein USB- oder Bluetooth-Sicherheitsschlüssel.
- Wenn [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option verwendet wird, verwendet der Benutzeragent ein vorhandenes Set an Anmeldedaten, um sich bei einer Relying Party zu authentifizieren (entweder als primäre Anmeldung oder um einen zusätzlichen Faktor während der oben beschriebenen MFA bereitzustellen).

In ihren grundlegendsten Formen erhalten sowohl `create()` als auch `get()` eine sehr große Zufallszahl, die als "Challenge" bezeichnet wird, vom Server und geben die von dem privaten Schlüssel signierte Challenge zurück an den Server. Dies beweist dem Server, dass ein Benutzer den privaten Schlüssel besitzt, der für die Authentifizierung erforderlich ist, ohne irgendwelche Geheimnisse über das Netzwerk preiszugeben.

> [!NOTE]
> Die "Challenge" muss ein Puffer aus zufälligen Informationen sein, der mindestens 16 Byte groß ist.

### Erstellung eines Schlüsselpaares und Registrierung eines Benutzers

Um zu veranschaulichen, wie der Prozess der Erstellung von Anmeldedaten funktioniert, beschreiben wir den typischen Ablauf, der auftritt, wenn ein Benutzer Anmeldedaten bei einer Relying Party registrieren möchte:

1. Der Relying Party-Server sendet Benutzer- und Relying Party-Informationen an die Web-App, die den Registrierungsprozess handhabt, zusammen mit der "Challenge", über einen geeigneten sicheren Mechanismus (zum Beispiel [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)).

   > [!NOTE]
   > Das Format zum Teilen von Informationen zwischen dem Relying Party-Server und der Web-App liegt bei der Anwendung.
   > Ein empfohlener Ansatz besteht darin, {{Glossary("JSON_type_representation", "JSON-Typ-Repräsenation")}}-Objekte für Anmeldedaten und Anmeldeoptions auszutauschen.
   > Convenience-Methoden wurden in `PublicKeyCredential` erstellt, um von den JSON-Repräsentationen zu der durch die Authentifizierungs-APIs erforderlichen Form zu konvertieren: [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON).

2. Die Web-App startet die Generierung neuer Anmeldedaten über den Authentifikator im Namen der Relying Party über einen Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create). Dieser Aufruf wird mit einer `publicKey`-Option übergeben, die die Gerätfähigkeiten spezifiziert, z.B. ob das Gerät seine eigene Benutzerauthentifizierung bereitstellt (zum Beispiel mit Biometrie).

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

   Die Parameter des `create()`-Aufrufs werden an den Authentifikator übergeben, zusammen mit einem SHA-256-Hash, der signiert wird, um sicherzustellen, dass er nicht manipuliert wurde.

3. Nachdem der Authentifikator die Zustimmung des Benutzers erhalten hat, generiert er ein Schlüsselpaar und gibt den öffentlichen Schlüssel und optional signierte Attestationen an die Web-App zurück. Dies wird bereitgestellt, wenn das von `create()` zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Attestationsinformationen).

4. Die Web-App leitet die [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Relying Party-Server weiter, wiederum über einen geeigneten Mechanismus.

5. Der Relying Party-Server speichert den öffentlichen Schlüssel, gekoppelt mit der Benutzeridentität, um die Anmeldedaten für zukünftige Authentifizierungen zu behalten. Während dieses Prozesses führt er eine Reihe von Überprüfungen durch, um sicherzustellen, dass die Registrierung vollständig und nicht manipuliert wurde. Diese beinhalten:

   1. Überprüfung, dass die Challenge dieselbe wie die gesendete Challenge ist.
   2. Sicherstellung, dass der Origin der erwartete Origin war.
   3. Überprüfung, dass die Signatur und die Attestation die richtige Zertifikatkette für das spezifische Modell des Authentifikators verwenden, der das Schlüsselpaar ursprünglich generiert hat.

> [!WARNING]
> Attestation bietet einer Relying Party eine Möglichkeit, die Herkunft eines Authentifikators zu bestimmen. Relying Parties sollten keine Versuche unternehmen, Listen von erlaubten Authentifikatoren zu führen.

### Authentifizierung eines Benutzers

Nachdem ein Benutzer sich mit WebAuthn registriert hat, kann er sich beim Dienst authentifizieren (einloggen). Der Authentifizierungsablauf sieht ähnlich aus wie der Registrierungsablauf, wobei die wichtigsten Unterschiede in der Authentifizierung bestehen:

1. Keine Benutzer- oder Relying Party-Informationen erfordert werden
2. Eine Behauptung mit dem zuvor generierten Schlüsselpaar für den Dienst erstellt wird, anstatt dem Schlüsselpaar des Authentifikators.

Ein typischer Authentifizierungsablauf ist wie folgt:

1. Die Relying Party erzeugt eine "Challenge" und sendet sie an den Benutzeragenten mit einem geeigneten sicheren Mechanismus, zusammen mit einer Liste von Relying Party- und Benutzeranmeldedaten. Es kann auch angegeben werden, wo nach den Anmeldedaten zu suchen ist, z.B. in einem eingebauten Authentifikator lokal oder in einem externen über USB, BLE, etc.

2. Der Browser fordert den Authentifikator auf, die Challenge über einen Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) zu signieren, wobei die Anmeldedaten in einer `publicKey`-Option übergeben werden.

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

   Die Parameter des `get()`-Aufrufs werden an den Authentifikator übergeben, um die Authentifizierung zu bearbeiten.

3. Wenn der Authentifikator einen der angegebenen Anmeldedaten enthält und die Challenge erfolgreich signieren kann, gibt er eine signierte Behauptung an die Web-App zurück, nachdem die Benutzerzustimmung eingeholt wurde. Dies wird bereitgestellt, wenn das vom `get()`-Aufruf zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Behauptungsinformationen).

4. Die Web-App leitet die signierte Behauptung an den Relying Party-Server weiter, damit die Relying Party sie validiert. Die Validierung umfasst:

   1. Verwendung des öffentlichen Schlüssels, der während der Registrierungsanforderung gespeichert wurde, um die Signatur durch den Authentifikator zu validieren.
   2. Sicherstellung, dass die vom Authentifikator signierte Challenge mit der vom Server generierten Challenge übereinstimmt.
   3. Überprüfung, dass die Relying Party-ID, die erwartete für diesen Dienst ist.

5. Sobald sie vom Server überprüft wurde, wird der Authentifizierungsablauf als erfolgreich angesehen.

### Entdeckbare Anmeldedaten und bedingte Vermittlung

**Entdeckbare Anmeldedaten** werden von einem Authentifikator abgerufen — vom Browser **entdeckt** — um sie als Anmeldungsoptionen anzubieten, wenn sich der Benutzer bei einer Relying Party Web-App anmeldet. Im Gegensatz dazu werden nicht-entdeckbare Anmeldedaten vom Relying Party-Server bereitgestellt, damit der Browser sie als Anmeldungsoptionen anbietet.

Entdeckbare Anmelde-ID und zugehörige Metadaten wie [Benutzernamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#name_2) und [Anzeigenamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#displayname) werden in einem clientseitigen Authentifikator wie einem Browser-Passwortmanager, einer Authenticator-App oder einer Hardwarelösung wie einem YubiKey gespeichert. Da diese Informationen im Authentifikator verfügbar sind, kann sich der Benutzer bequem anmelden, ohne Anmeldedaten angeben zu müssen, und die Relying Party muss keine [`credentialId`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) bereitstellen, wenn sie es behauptet (sie kann es jedoch tun, wenn gewünscht; wenn das Anmeldekennzeichen von der RP erklärt wird, wird der nicht-entdeckbare Workflow befolgt).

Eine entdeckbare Anmeldedaten werden über einen Aufruf von [`create()`](/de/docs/Web/API/CredentialsContainer/create) mit einem spezifizierten [`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) erstellt. Die `credentialId`, Benutzermetadaten und öffentlicher Schlüssel für die neue Anmeldeinformation werden wie oben besprochen vom Authentifikator gespeichert, aber auch an die Web-App zurückgegeben und auf dem RP-Server gespeichert.

Um sich zu authentifizieren, ruft der RP-Server [`get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer **bedingten Vermittlung** auf, also [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) auf `conditional` gesetzt, eine leere [`allowCredentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials)-Liste (was bedeutet, dass nur entdeckbare Anmeldeinformationen gezeigt werden können) und eine Challenge.

Bedingte Vermittlung führt dazu, dass die im Authentifikator gefundenen entdeckten Anmeldedaten in einer nicht-modalen Benutzeroberfläche zusammen mit einem Hinweis auf den Ursprung, der Anmeldedaten anfordert, präsentiert werden, anstatt in einem modalen Dialog. In der Praxis bedeutet dies das automatische Ausfüllen verfügbarer Anmeldedaten in Ihren Anmeldeformularen. Die in entdeckbaren Anmeldeinformationen gespeicherte Metadaten können angezeigt werden, um Benutzern bei der Auswahl einer Anmeldeinformation zu helfen, wenn sie sich anmelden. Um entdeckbare Anmeldeinformationen in Ihren Anmeldeformularen anzuzeigen, müssen Sie auch [`autocomplete="webauthn"`](/de/docs/Web/HTML/Attributes/autocomplete#webauthn) in Ihren Formularfeldern einfügen.

Um es zu wiederholen, die Relying Party sagt dem Authentifikator nicht, welche Anmeldedaten dem Benutzer angeboten werden sollen — stattdessen stellt der Authentifikator die Liste zur Verfügung, die er zur Verfügung hat. Sobald der Benutzer eine Anmeldeinformation auswählt, verwendet der Authentifikator sie, um die Challenge mit dem zugehörigen privaten Schlüssel zu signieren, und der Browser gibt die signierte Challenge und deren `credentialId` an den RP-Server zurück.

Der anschließende Authentifizierungsprozess auf dem RP-Server ist derselbe wie für nicht-entdeckbare Anmeldedaten.

> [!NOTE]
> Sie können überprüfen, ob bedingte Vermittlung auf einem bestimmten Benutzeragenten verfügbar ist, indem Sie die Methode [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable) aufrufen.

[Passkeys](https://passkeys.dev/) sind ein wesentlicher Anwendungsfall für entdeckbare Anmeldedaten; siehe [Erstellen Sie einen Passkey für passwortlose Anmeldungen](https://web.dev/articles/passkey-registration) und [Melden Sie sich mit einem Passkey durch Formularautofill an](https://web.dev/articles/passkey-form-autofill) für Implementierungsdetails. Siehe auch [Entdeckbare Anmeldedaten tiefgehende Analyse](https://web.dev/articles/webauthn-discoverable-credentials) für allgemeinere Informationen zu entdeckbaren Anmeldedaten.

Wenn bedingte Vermittlung für die Authentifizierung verwendet wird, wird das Flag zum Verhindern des stillen Zugriffs (siehe [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)) unabhängig von seinem tatsächlichen Wert als `wahr` behandelt: Das bedingte Verhalten beinhaltet immer eine Art Benutzervermittlung, wenn anwendbare Anmeldedaten entdeckt werden.

> [!NOTE]
> Wenn keine Anmeldedaten entdeckt werden, ist der nicht-modale Dialog nicht sichtbar, und der Benutzeragent kann den Benutzer auffordern, Maßnahmen zu ergreifen, die vom Typ der Anmeldeinformation abhängen (zum Beispiel ein Gerät mit Anmeldeinformationen einzufügen).

#### Synchronisationsmethoden für entdeckbare Anmeldedaten

Es ist möglich, dass die im Authentifikator eines Benutzers gespeicherte Informationen zu einer entdeckbaren Anmeldeinformation mit dem Server der Relying Party aus dem Takt geraten. Dies kann passieren, wenn der Benutzer eine Anmeldeinformation löscht oder seinen Benutzer-/Anzeigenamen in der RP-Web-App ändert, ohne den Authentifikator zu aktualisieren.

Die API bietet Methoden, damit der Relying Party-Server Änderungen an den Authentifikator signalisieren kann, damit dieser seine gespeicherten Anmeldedaten aktualisieren kann:

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static): Signalisierung an den Authentifikator aller gültigen Anmelde-IDs, die der RP-Server noch für einen bestimmten Benutzer besitzt.
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static): Signalisierung an den Authentifikator, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeigenamen auf dem RP-Server aktualisiert hat.
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static): Signalisierung an den Authentifikator, dass eine Anmelde-ID vom RP-Server nicht erkannt wurde.

Es mag den Anschein haben, dass `signalUnknownCredential()` und `signalAllAcceptedCredentials()` ähnliche Zwecke haben, aber in welcher Situation sollte jede verwendet werden?

- `signalAllAcceptedCredentials()` sollte nach jedem erfolgreichen Login aufgerufen werden und wenn der Benutzer eingeloggt ist und Sie den Status seiner Anmeldedaten aktualisieren möchten. Es darf nur aufgerufen werden, wenn ein Benutzer authentifiziert ist, da es die gesamte Liste der `credentialId`s für einen gegebenen Benutzer teilt. Dies würde zu einem Datenschutzleck führen, wenn der Benutzer nicht authentifiziert ist.
- `signalUnknownCredential()` sollte nach einem erfolglosen Login aufgerufen werden, um dem Authentifikator zu signalisieren, dass die `credentialId` der ausgewählten Anmeldeinformation nicht validiert werden kann und entfernt werden sollte. Die Methode kann sicher aufgerufen werden, wenn der Benutzer nicht authentifiziert ist, da sie eine einzige `credentialId` an den Authentifikator übergibt — diejenige, die der Client gerade versucht hat zu authentifizieren — und keine Benutzerinformationen.

### Anpassung von Workflows basierend auf Client-Fähigkeiten

Die Anmelde- und Login-Workflows können basierend auf den Fähigkeiten des WebAuthn-Clients (Browser) angepasst werden. Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) kann verwendet werden, um diese Fähigkeiten abzufragen; sie gibt ein Objekt zurück, bei dem jeder Schlüssel sich auf eine WebAuthn-Fähigkeit oder -Erweiterung bezieht und jeder Wert ein booles Wert ist, das die Unterstützung für diese Funktion angibt.

Dies kann verwendet werden, um zum Beispiel zu überprüfen:

- Unterstützung des Clients für verschiedene Authenticatoren wie Passkeys oder biometrische Benutzerauthentifizierung.
- Ob der Client [Methoden unterstützt, um Relying Party und Authentifikator-Anmeldedaten synchron zu halten](/de/docs/Web/API/Web_Authentication_API#discoverable_credential_synchronization_methods).
- Ob der Client erlaubt, einen einzigen Passkey auf verschiedenen Websites mit demselben Origin zu verwenden.

Der untenstehende Code zeigt, wie Sie `getClientCapabilities()` verwenden könnten, um zu überprüfen, ob der Client Authenticatoren unterstützt, die eine biometrische Benutzerauthentifizierung anbieten. Beachten Sie, dass die tatsächlich durchgeführten Aktionen von Ihrer Website abhängen.
Für Websites, die _biometrische Authentifizierung_ erfordern, könnten Sie die Login-Benutzeroberfläche durch eine Nachricht ersetzen, die anzeigt, dass biometrische Authentifizierung benötigt wird, und der Benutzer einen anderen Browser oder ein anderes Gerät verwenden sollte.

````js
async function checkisUserVerifyingPlatformAuthenticatorAvailable() {
  const capabilities = await PublicKeyCredential.getClientCapabilities();
  // Check the capability: userVerifyingPlatformAuthenticator
  if (capabilities.userVerifyingPlatformAuthenticator) {
    // Perform actions if biometric support is available
  } else {
    // Perform actions if biometric support is not available.
  }
}

## Controlling access to the API

The availability of WebAuthn can be controlled using a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy), specifying two directives in particular:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Controls the availability of {{domxref("CredentialsContainer.create", "navigator.credentials.create()")}} with the `publicKey` option.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Controls the availability of {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} with the `publicKey` option.

Both directives have a default allowlist value of `"self"`, meaning that by default these methods can be used in top-level document contexts.
In addition, `get()` can be used in nested browsing contexts loaded from the same origin as the top-most document.
`get()` and `create()` can be used in nested browsing contexts loaded from the different origins to the top-most document (i.e. in cross-origin `<iframes>`), if allowed by the [`publickey-credentials-get`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-get) and [`publickey-credentials-create`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create) `Permission-Policy` directives, respectively.
For cross-origin `create()` calls, where the permission was granted by [`allow=` on an iframe](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#iframes), the frame must also have {{glossary("Transient activation")}}.

> [!NOTE]
> Where a policy forbids use of these methods, the {{jsxref("Promise", "promises", "", 1)}} returned by them will reject with a `NotAllowedError` {{domxref("DOMException")}}.

### Basic access control

If you wish to allow access to a specific subdomain only, you could provide it like this:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
````

### Zulassen eingebetteter `create`- und `get()`-Aufrufe in einem `<iframe>`

Wenn Sie mit `get()` oder `create()` in einem `<iframe>` authentifizieren möchten, gibt es einige Schritte, die Sie befolgen müssen:

1. Die Website, die die Relying Party-Website einbettet, muss die Erlaubnis via eines `allow`-Attributs bereitstellen:

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

     Das `<iframe>` muss auch {{Glossary("Transient_activation", "Transiente Aktivierung")}} haben, wenn `create()` cross-origin aufgerufen wird.

2. Die Relying Party-Website muss die Erlaubnis für den obigen Zugang über einen `Permissions-Policy`-Header bereitstellen:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   Oder um nur einer bestimmten URL zu erlauben, die Relying Party-Website in einem `<iframe>` einzubetten:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## Schnittstellen

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)
  - : Bietet einem Dienst den Nachweis, dass ein Authentifikator das notwendige Schlüsselpaar hat, um erfolgreich eine von einem Aufruf von [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) initiierte Authentifizierungsanforderung zu bearbeiten. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die erhalten wird, wenn das `get()`-{{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)
  - : Das Ergebnis einer WebAuthn-Anmeldeinformationen-Registrierung (d.h. ein Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create)). Es enthält Informationen über die Anmeldeinformationen, die der Server benötigt, um WebAuthn-Behauptungen durchzuführen, wie seine Anmelde-ID und den öffentlichen Schlüssel. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die erhalten wird, wenn das `create()`-{{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)
  - : Die Basisschnittstelle für [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) und [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
  - : Bietet Informationen über ein öffentliches/privates Schlüsselpaar, welches eine Anmeldeinformation zum Einloggen in einen Dienst unter Verwendung eines nicht-phishbaren und datenbanksicherheitslecksicheren asymmetrischen Schlüsselpaares anstelle eines Passworts ist. Wird erhalten, wenn das über einen Aufruf von [`create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`get()`](/de/docs/Web/API/CredentialsContainer/get) zurückgegebene {{jsxref("Promise")}} erfüllt wird.

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die `publicKey`-Option
  - : Der Aufruf von `create()` mit einer `publicKey`-Option leitet die Erstellung neuer asymmetrischer Schlüsselanmeldedaten über einen Authentifikator, wie oben erklärt, ein.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `publicKey`-Option
  - : Der Aufruf von `get()` mit einer `publicKey`-Option weist den Benutzeragenten an, ein vorhandenes Set von Anmeldedaten zu verwenden, um sich bei einer Relying Party zu authentifizieren.

## Beispiele

### Demo-Seiten

- [Mozilla Demo](https://webauthn.bin.coffee/) Website und ihr [Quellcode](https://github.com/jcjones/webauthn.bin.coffee).
- [Google Demo](https://try-webauthn.appspot.com/) Website und ihr [Quellcode](https://github.com/google/webauthndemo).
- [WebAuthn.io Demo](https://webauthn.io/) Website und ihr [Quellcode](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) und ihr [Client-Quellcode](https://github.com/webauthn-open-source/webauthn-simple-app) und [Server-Quellcode](https://github.com/webauthn-open-source/fido2-lib)

### Verwendungsbeispiel

> [!NOTE]
> Aus Sicherheitsgründen werden die Aufrufe der Web Authentication API ([`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`get()`](/de/docs/Web/API/CredentialsContainer/get)) abgebrochen, falls das Browserfenster den Fokus verliert, während der Aufruf aussteht.

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
