---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Die Web Authentication API (WebAuthn) ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), die eine starke Authentifizierung mit öffentlicher Schlüssel-Kryptographie ermöglicht, passwortlose Authentifizierung und sichere Multi-Faktor-Authentifizierung (MFA) ohne SMS-Nachrichten erlaubt.

## WebAuthn Konzepte und Nutzung

WebAuthn verwendet [asymmetrische (öffentlich-schlüssel) Kryptographie](https://en.wikipedia.org/wiki/Public-key_cryptography) anstelle von Passwörtern oder SMS-Nachrichten zur Registrierung, Authentifizierung und [Multi-Faktor-Authentifizierung](https://en.wikipedia.org/wiki/Multi-factor_authentication) mit Websites. Dies bietet einige Vorteile:

- **Schutz vor Phishing:** Ein Angreifer, der eine gefälschte Login-Website erstellt, kann sich nicht als der Benutzer einloggen, da die Signatur sich mit dem {{Glossary("Origin", "Ursprung")}} der Website ändert.
- **Verringertes Risiko bei Datenverletzungen:** Entwickler müssen den öffentlichen Schlüssel nicht hashen, und wenn ein Angreifer Zugang zum öffentlichen Schlüssel erhält, der zur Verifizierung der Authentifizierung verwendet wird, kann er sich nicht authentifizieren, da er den privaten Schlüssel benötigt.
- **Keine Anfälligkeit für Passwort-Angriffe:** Einige Benutzer könnten Passwörter wiederverwenden, und ein Angreifer könnte das Passwort des Benutzers für eine andere Website erlangen (z.B. durch eine Datenverletzung). Außerdem sind Text-Passwörter viel einfacher mit Brute-Force-Angriffen zu knacken als eine digitale Signatur.

Viele Websites haben bereits Seiten, die es Benutzern ermöglichen, neue Konten zu registrieren oder sich in ein bestehendes Konto einzuloggen, und WebAuthn dient als Ersatz oder Verbesserung des Authentifizierungsteils des Systems. Es erweitert die [Credential Management API](/de/docs/Web/API/Credential_Management_API), indem es die Kommunikation zwischen dem Benutzeragenten und einem Authentifizierungsgerät abstrahiert und die folgende neue Funktionalität bereitstellt:

- Wenn [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der Option `publicKey` verwendet wird, erstellt der Benutzeragent neue Anmeldeinformationen über ein Authentifizierungsgerät – entweder zur Registrierung eines neuen Kontos oder zur Verknüpfung eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.
  - Bei der Registrierung eines neuen Kontos werden diese Anmeldeinformationen auf einem Server gespeichert (auch als Dienst oder [vertrauende Partei](https://en.wikipedia.org/wiki/Relying_party) bekannt) und können anschließend verwendet werden, um einen Benutzer einzuloggen.
  - Das asymmetrische Schlüsselpaar wird im Authentifizierungsgerät gespeichert, das dann verwendet werden kann, um einen Benutzer mit einer vertrauenden Partei zu authentifizieren, beispielsweise während der MFA. Das Authentifizierungsgerät kann im Benutzeragenten eingebettet sein, in ein Betriebssystem wie Windows Hello oder es kann sich um ein physisches Token handeln, wie einen USB- oder Bluetooth-Sicherheitsschlüssel.
- Wenn [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der Option `publicKey` verwendet wird, nutzt der Benutzeragent einen vorhandenen Satz von Anmeldeinformationen zur Authentifizierung bei einer vertrauenden Partei (entweder als Hauptanmeldung oder um einen zusätzlichen Faktor während der MFA bereitzustellen, wie oben beschrieben).

In ihren grundlegendsten Formen empfangen sowohl `create()` als auch `get()` eine sehr große Zufallszahl, genannt "challenge", vom Server und senden die vom privaten Schlüssel signierte "challenge" zurück an den Server. Das beweist dem Server, dass ein Benutzer den privaten Schlüssel besitzt, der für die Authentifizierung erforderlich ist, ohne Geheiminformationen über das Netzwerk preiszugeben.

> [!NOTE]
> Die "challenge" muss ein Buffer aus zufälligen Informationen von mindestens 16 Bytes Größe sein.

### Erstellen eines Schlüsselpaares und Registrierung eines Benutzers

Um zu veranschaulichen, wie der Prozess der Anmeldeinformationen-Erstellung funktioniert, beschreiben wir den typischen Ablauf, der auftritt, wenn ein Benutzer ein Anmeldeinformationen bei einer vertrauenden Partei registrieren möchte:

1. Der Server der vertrauenden Partei sendet Benutzer- und vertrauende Partei-Informationen an die Webanwendung, die den Registrierungsprozess handhabt, zusammen mit der "challenge", unter Verwendung eines geeigneten sicheren Mechanismus (zum Beispiel [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)).

   > [!NOTE]
   > Das Format für den Austausch von Informationen zwischen dem Server der vertrauenden Partei und der Webanwendung bleibt der Anwendung überlassen.
   > Ein empfohlener Ansatz ist der Austausch von Objekten in {{Glossary("JSON_type_representation", "JSON-Repräsentation")}} für Anmeldeinformationen und Anmeldeoptionen.
   > In `PublicKeyCredential` wurden Komfortmethoden erstellt, um von den JSON-Darstellungen in die Form zu konvertieren, die von den Authentifizierungs-APIs benötigt wird: [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON).

2. Die Webanwendung leitet die Erzeugung eines neuen Anmeldedatensatzes über das Authentifizierungsgerät im Namen der vertrauenden Partei durch einen Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) ein. Dieser Aufruf erhält eine `publicKey`-Option, die die Geräteeigenschaften angibt, z.B. ob das Gerät seine eigene Benutzerauthentifizierung bereitstellt (zum Beispiel mit Biometrie).

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

   Die Parameter des `create()`-Aufrufs werden dem Authentifizierungsgerät übergeben, zusammen mit einem SHA-256-Hash, der signiert wird, um sicherzustellen, dass er nicht manipuliert wird.

3. Nachdem das Authentifizierungsgerät die Zustimmung des Benutzers erhalten hat, generiert es ein Schlüsselpaar und gibt den öffentlichen Schlüssel und eine optional signierte Bescheinigung an die Webanwendung zurück. Dies wird dann bereitgestellt, wenn das von `create()` zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält die Bescheinigungsinformationen).

4. Die Webanwendung leitet das [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Server der vertrauenden Partei weiter, wiederum unter Verwendung eines geeigneten Mechanismus.

5. Der Server der vertrauenden Partei speichert den öffentlichen Schlüssel, gekoppelt mit der Benutzeridentität, um sich das Anmeldeinformationen für zukünftige Authentifizierungen zu merken. Während dieses Prozesses führt er eine Reihe von Prüfungen durch, um sicherzustellen, dass die Registrierung abgeschlossen und nicht manipuliert wurde. Dazu gehören:

   1. Überprüfung, dass die "challenge" dieselbe ist wie die gesendete "challenge".
   2. Sicherstellen, dass der Ursprung der erwartete Ursprung ist.
   3. Validierung, dass die Signatur und die Bescheinigung die richtige Zertifizierungskette für das spezifische Modell des Authentifizierungsgeräts verwendet, das das Schlüsselpaar ursprünglich erzeugt hat.

> [!WARNING]
> Bescheinigung bietet einer vertrauenden Partei die Möglichkeit, die Herkunft eines Authentifizierungsgeräts zu bestimmen. Vertrauende Parteien sollten nicht versuchen, Zulassungslisten von Authentifizierungsgeräten zu führen.

### Authentifizierung eines Benutzers

Nachdem ein Benutzer sich mit WebAuthn registriert hat, kann er sich (einloggen) beim Dienst authentifizieren. Der Authentifizierungsablauf sieht dem Registrierungsablauf ähnlich aus, wobei die Hauptunterschiede darin bestehen, dass die Authentifizierung:

1. Keine Benutzer- oder vertrauende Partei-Informationen erfordert
2. Eine Behauptung mithilfe des zuvor generierten Schlüsselpaares für den Dienst erstellt, anstatt des Schlüsselpaares des Authentifizierungsgeräts.

Ein typischer Authentifizierungsablauf ist wie folgt:

1. Die vertrauende Partei generiert eine "challenge" und sendet sie dem Benutzeragenten mithilfe eines geeigneten sicheren Mechanismus, zusammen mit einer Liste von vertrauenden Partei- und Benutzeranmeldeinformationen. Es kann auch angegeben werden, wo das Anmeldeinformationen gefunden werden soll, z.B. auf einem lokal eingebauten Authentifizierungsgerät oder auf einem externen über USB, BLE usw.

2. Der Browser fordert das Authentifizierungsgerät auf, die "challenge" über einen `navigator.credentials.get()`-Aufruf zu signieren, der die Anmeldeinformationen in einer `publicKey`-Option erhält.

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

   Die Parameter des `get()`-Aufrufs werden dem Authentifizierungsgerät übergeben, um die Authentifizierung durchzuführen.

3. Wenn das Authentifizierungsgerät eines der angegebenen Anmeldeinformationen enthält und es in der Lage ist, die "challenge" erfolgreich zu signieren, gibt es eine signierte Behauptung an die Webanwendung zurück, nachdem es die Zustimmung des Benutzers erhalten hat. Dies wird dann bereitgestellt, wenn das von `get()` zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält die Behauptungsinformationen).

4. Die Webanwendung leitet die signierte Behauptung an den Server der vertrauenden Partei zur Validierung weiter. Zu den Validierungsschritten gehören:

   1. Verwendung des bei der Registrierung gespeicherten öffentlichen Schlüssels zur Validierung der Signatur durch das Authentifizierungsgerät.
   2. Sicherstellen, dass die vom Authentifizierungsgerät signierte "challenge" mit der vom Server generierten "challenge" übereinstimmt.
   3. Überprüfung, dass die vertrauende Partei-ID die erwartete für diesen Dienst ist.

5. Nach der Verifizierung durch den Server gilt der Authentifizierungsablauf als erfolgreich.

### Entdeckbare Anmeldeinformationen und bedingte Vermittlung

**Entdeckbare Anmeldeinformationen** werden von einem Authentifizierungsgerät abgerufen – vom Browser _entdeckt_ –, um sie als Login-Optionen anzubieten, wenn sich der Benutzer in eine Webanwendung einer vertrauenden Partei einloggt. Im Gegensatz dazu werden nicht-entdeckbare Anmeldeinformationen vom Server der vertrauenden Partei bereitgestellt, damit der Browser sie als Login-Optionen anbietet.

Entdeckbare Anmeldeinformationen und zugehörige Metadaten wie [Benutzernamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#name_2) und [Anzeigenamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#displayname) werden in einem clientseitigen Authentifizierungsgerät wie einem Browser-Passwort-Manager, einer Authentifizierungs-App oder einer Hardware-Lösung wie einem YubiKey gespeichert. Das Vorhandensein dieser Informationen im Authentifizierungsgerät bedeutet, dass sich der Benutzer bequem einloggen kann, ohne Anmeldeinformationen bereitzustellen, und die vertrauende Partei muss kein [`credentialId`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) angeben, wenn sie es behauptet (obwohl sie dies tun kann, falls gewünscht; wenn das Anmeldeinformationen von der vertrauenden Partei behauptet wird, folgt ein nicht-entdeckbarer Workflow).

Ein entdeckbares Anmeldeinformationen wird über einen [`create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufruf mit einem angegebenen [`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) erstellt. Die `credentialId`, Benutzermetadaten und der öffentliche Schlüssel für das neue Anmeldeinformationen werden wie oben besprochen vom Authentifizierungsgerät gespeichert, aber auch an die Webanwendung zurückgegeben und auf dem Server der vertrauenden Partei gespeichert.

Um zu authentifizieren, ruft der Server der vertrauenden Partei [`get()`](/de/docs/Web/API/CredentialsContainer/get) mit **bedingter Vermittlung** auf, d.h. [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) wird auf `conditional` gesetzt, eine leere [`allowCredentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials)-Liste (bedeutet, dass nur entdeckbare Anmeldeinformationen angezeigt werden können), und eine "challenge".

Bedingte Vermittlung führt dazu, dass entdeckbare Anmeldeinformationen, die im Authentifizierungsgerät gefunden wurden, dem Benutzer in einer nicht-modalen Benutzeroberfläche zusammen mit einem Hinweis auf den Ursprung, der die Anmeldeinformationen anfordert, präsentiert werden, anstatt in einem modalen Dialog. In der Praxis bedeutet dies, dass verfügbare Anmeldeinformationen automatisch in Ihre Login-Formulare eingefüllt werden. Die in entdeckbaren Anmeldeinformationen gespeicherten Metadaten können angezeigt werden, um Benutzern bei der Auswahl eines Anmeldeinformationen beim Einloggen zu helfen. Um entdeckbare Anmeldeinformationen in Ihren Login-Formularen einzublenden, müssen Sie ebenfalls [`autocomplete="webauthn"`](/de/docs/Web/HTML/Attributes/autocomplete#webauthn) auf Ihren Formularelementen einfügen.

Um es zu wiederholen: Die vertrauende Partei sagt dem Authentifizierungsgerät nicht, welche Anmeldeinformationen dem Benutzer angeboten werden sollen – stattdessen liefert das Authentifizierungsgerät die Liste, die es zur Verfügung hat. Sobald der Benutzer ein Anmeldeinformationen auswählt, verwendet das Authentifizierungsgerät es, um die "challenge" mit dem zugehörigen privaten Schlüssel zu signieren, und der Browser gibt die signierte "challenge" und deren `credentialId` an den Server der vertrauenden Partei zurück.

Der anschließende Authentifizierungsprozess auf dem Server der vertrauenden Partei ist derselbe wie für nicht-entdeckbare Anmeldeinformationen.

> [!NOTE]
> Sie können überprüfen, ob bedingte Vermittlung auf einem bestimmten Benutzeragenten verfügbar ist, indem Sie die Methode [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) aufrufen.

[Passkeys](https://passkeys.dev/) sind ein bedeutender Anwendungsfall für entdeckbare Anmeldeinformationen. Nähere Implementierungsdetails finden Sie unter [Erstellen eines Passkeys für passwortlose Logins](https://web.dev/articles/passkey-registration) und [Mit einem Passkey über das Formular-Autofill einloggen](https://web.dev/articles/passkey-form-autofill). Siehe auch [Tiefgehender Einblick in entdeckbare Anmeldeinformationen](https://web.dev/articles/webauthn-discoverable-credentials) für allgemeinere Informationen zu entdeckbaren Anmeldeinformationen.

Wenn bei der Authentifizierung bedingte Vermittlung verwendet wird, wird das Flag zur Verhinderung des stillen Zugangs (siehe [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)) als `true` behandelt, unabhängig von seinem tatsächlichen Wert: Das bedingte Verhalten beinhaltet immer eine Form von Benutzervermittelung, wenn zutreffende Anmeldeinformationen entdeckt werden.

> [!NOTE]
> Wenn keine Anmeldeinformationen entdeckt werden, wird der nicht-modale Dialog nicht sichtbar sein, und der Benutzeragent kann den Benutzer auf eine Weise auffordern, die vom Anmeldeinformationstyp abhängt (z.B. ein Gerät mit Anmeldeinformationen einzustecken).

#### Entdeckbare Anmeldeinformationen Synchronisationsmethoden

Es ist möglich, dass die Informationen, die im Authentifizierungsgerät eines Benutzers über ein entdeckbares Anmeldeinformationen gespeichert sind, nicht mehr mit dem Server der vertrauenden Partei synchronisiert sind. Dies könnte passieren, wenn der Benutzer ein Anmeldeinformationen löscht oder seinen Benutzer-/Anzeigenamen auf der Webanwendung der vertrauenden Partei ändert, ohne das Authentifizierungsgerät zu aktualisieren.

Die API stellt Methoden bereit, damit der Server der vertrauenden Partei Änderungen an das Authentifizierungsgerät signalisieren kann, damit es seine gespeicherten Anmeldeinformationen aktualisieren kann:

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static): Signalisiert dem Authentifizierungsgerät alle gültigen Anmeldeinformationen-IDs, die der Server der vertrauenden Partei für einen bestimmten Benutzer noch hat.
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static): Signalisiert dem Authentifizierungsgerät, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeigenamen auf dem Server der vertrauenden Partei aktualisiert hat.
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static): Signalisiert dem Authentifizierungsgerät, dass eine Anmeldeinformationen-ID vom Server der vertrauenden Partei nicht erkannt wurde.

Es mag scheinen, dass `signalUnknownCredential()` und `signalAllAcceptedCredentials()` ähnliche Zwecke haben, also in welcher Situation sollte jede verwendet werden?

- `signalAllAcceptedCredentials()` sollte nach jedem erfolgreichen Login aufgerufen werden, und wenn der Benutzer eingeloggt ist und Sie den Status seiner Anmeldeinformationen aktualisieren möchten. Es darf nur aufgerufen werden, wenn ein Benutzer authentifiziert ist, da es die gesamte Liste der `credentialId`s für einen bestimmten Benutzer freigibt. Dies würde ein Datenschutzleck verursachen, wenn der Benutzer nicht authentifiziert ist.
- `signalUnknownCredential()` sollte nach einem fehlgeschlagenen Login aufgerufen werden, um dem Authentifizierungsgerät zu signalisieren, dass die `credentialId` der ausgewählten Anmeldeinformationen nicht validiert werden kann und entfernt werden sollte. Die Methode kann sicher aufgerufen werden, wenn der Benutzer nicht authentifiziert ist, da sie eine einzelne `credentialId` an das Authentifizierungsgerät übergibt – diejenige, mit der der Client gerade versucht hat, sich zu authentifizieren – und keine Benutzerinformationen enthält.

### Anpassung von Workflows basierend auf den Fähigkeiten des Clients

Die Anmelde- und Login-Workflows können basierend auf den Fähigkeiten des WebAuthn-Clients (Browser) angepasst werden. Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) kann verwendet werden, um diese Fähigkeiten abzufragen; sie gibt ein Objekt zurück, bei dem jeder Schlüssel für eine WebAuthn-Fähigkeit oder -Erweiterung steht, und jeder Wert gibt in Boolean-Form an, ob der Dienst dies unterstützt.

Dies kann beispielsweise verwendet werden, um zu überprüfen:

- Unterstützung für verschiedene Authentifizierungsgeräte wie Passkeys oder biometrische Benutzerverifikation.
- Ob der Client [Methoden zur Synchronisation der Anmeldeinformationen zwischen vertrauender Partei und Authentifizierungsgerät unterstützt](#entdeckbare_anmeldeinformationen_synchronisationsmethoden).
- Ob der Client erlaubt, dass ein einzelner Passkey auf verschiedenen Websites mit demselben Ursprung verwendet wird.

Der untenstehende Code zeigt, wie Sie `getClientCapabilities()` verwenden könnten, um zu überprüfen, ob der Client Authentifizierungsgeräte unterstützt, die eine biometrische Benutzerverifikation anbieten.
Beachten Sie, dass die tatsächlich durchgeführten Maßnahmen von Ihrer Website abhängen.
Für Websites, die eine biometrische Authentifizierung _erfordern_, könnten Sie die Anmelde-Benutzeroberfläche durch eine Nachricht ersetzen, die darauf hinweist, dass eine biometrische Authentifizierung erforderlich ist und der Benutzer einen anderen Browser oder ein anderes Gerät ausprobieren sollte.

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

## Steuerung des Zugangs zur API

Die Verfügbarkeit von WebAuthn kann durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden, die insbesondere zwei Direktiven spezifiziert:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Steuert die Verfügbarkeit von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Steuert die Verfügbarkeit von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option.

Beide Direktiven haben standardmäßig eine Zulassungsliste mit dem Wert `"self"`, was bedeutet, dass diese Methoden standardmäßig in obersten Dokumentkontexten verwendet werden können.
Zusätzlich kann `get()` in verschachtelten Browsing-Kontexten verwendet werden, die vom selben Ursprung wie das oberste Dokument geladen werden.
`get()` und `create()` können in verschachtelten Browsing-Kontexten verwendet werden, die von anderen Ursprüngen als dem obersten Dokument geladen werden (d.h. in cross-origin `<iframes>`), wenn sie durch die `Permissions-Policy`-Direktiven [`publickey-credentials-get`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-get) und [`publickey-credentials-create`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create) erlaubt sind.
Bei `create()`-Aufrufen mit cross-origin muss der frame auch die {{Glossary("Transient_activation", "transitorische Aktivierung")}} haben, wenn die Berechtigung durch [`allow=` in einem iframe](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) erteilt wurde.

> [!NOTE]
> Wenn eine Richtlinie die Nutzung dieser Methoden verbietet, wird das von ihnen zurückgegebene {{jsxref("Promise", "promises", "", 1)}} mit einer `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

### Grundlegende Zugriffskontrolle

Wenn Sie den Zugriff auf eine bestimmte Subdomain erlauben möchten, könnten Sie dies so bereitstellen:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Einbettung von `create` und `get()` Aufrufen in einem `<iframe>` erlauben

Wenn Sie die Authentifizierung mit `get()` oder `create()` in einem `<iframe>` durchführen möchten, sind ein paar Schritte zu befolgen:

1. Die Seite, die die Seite der vertrauenden Partei einbettet, muss über ein `allow`-Attribut die Erlaubnis erteilen:

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

     Das `<iframe>` muss auch die {{Glossary("Transient_activation", "transitorische Aktivierung")}} haben, wenn `create()` cross-origin aufgerufen wird.

2. Die Seite der vertrauenden Partei muss die Erlaubnis für den obigen Zugriff über einen `Permissions-Policy`-Header bereitstellen:

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
  - : Beweist einem Dienst, dass ein Authentifizierungsgerät das notwendige Schlüsselpaar hat, um ein Authentifizierungsanfrage erfolgreich zu bearbeiten, die durch einen Aufruf von [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) initiiert wurde. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Instanz, die erhalten wird, wenn das `get()`-{{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)
  - : Das Ergebnis einer WebAuthn-Anmeldeinformation-Registrierung (d.h. ein `CredentialsContainer.create()` Aufruf). Es enthält Informationen zu dem Anmeldeinformation, die der Server benötigt, um WebAuthn-Bestätigungen zu machen, wie seine Anmeldeinformation-ID und den öffentlichen Schlüssel. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Instanz, die erhalten wird, wenn das `create()`-{{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)
  - : Die Basisschnittstelle für [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) und [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
  - : Bietet Informationen über ein Öffentlich/Privat Schlüsselpaar, das eine Anmeldeinformation für das Einloggen in einen Dienst ist, die ein un-phisbares und gegen Datenverletzungen resistentes asymmetrisches Schlüsselpaar anstelle eines Passwortes verwendet. Erhältlich, wenn das {{jsxref("Promise")}} über einen [`create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf erfüllt wird.

## Erweiterungen zu anderen Interfaces

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die `publicKey` Option
  - : Das Aufrufen von `create()` mit einer `publicKey`-Option beginnt die Erstellung neuer asymmetrischer Schlüsselanmeldeinformationen über ein Authentifizierungsgerät, wie oben erklärt.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `publicKey` Option
  - : Aufrufen von `get()` mit einer `publicKey`-Option veranlasst den Benutzeragenten, einen vorhandenen Satz von Anmeldeinformationen zu verwenden, um sich bei einer vertrauenden Partei zu authentifizieren.

## Beispiele

### Demo-Seiten

- [Mozilla Demo](https://webauthn.bin.coffee/) Webseite und ihr [Quellcode](https://github.com/jcjones/webauthn.bin.coffee).
- [Google Demo](https://try-webauthn.appspot.com/) Webseite und ihr [Quellcode](https://github.com/google/webauthndemo).
- [WebAuthn.io Demo](https://webauthn.io/) Webseite und ihr [Quellcode](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) und ihr [Client-Quellcode](https://github.com/webauthn-open-source/webauthn-simple-app) und [Server-Quellcode](https://github.com/webauthn-open-source/fido2-lib)

### Verwendungsbeispiel

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
