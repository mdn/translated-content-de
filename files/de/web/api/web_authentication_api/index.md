---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Die Web-Authentifizierungs-API (WebAuthn) ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), die starke Authentifizierung mit öffentlicher Schlüsselverschlüsselung ermöglicht. Dadurch wird passwortlose Authentifizierung und sichere Multi-Faktor-Authentifizierung (MFA) ohne SMS-Nachrichten möglich.

## WebAuthn-Konzepte und Verwendung

WebAuthn verwendet [asymmetrische (Public-Key-)Kryptografie](https://de.wikipedia.org/wiki/Public-Key-Kryptographie) anstelle von Passwörtern oder SMS-Nachrichten für die Registrierung, Authentifizierung und [Multi-Faktor-Authentifizierung](https://de.wikipedia.org/wiki/Mehrfaktor-Authentifizierung) bei Websites. Dies bietet einige Vorteile:

- **Schutz vor Phishing:** Ein Angreifer, der eine gefälschte Login-Website erstellt, kann sich nicht als Benutzer anmelden, da sich die Signatur mit dem {{Glossary("Origin", "Origin")}} der Website ändert.
- **Reduzierung der Auswirkungen von Datenpannen:** Entwickler müssen den öffentlichen Schlüssel nicht hashen, und wenn ein Angreifer Zugriff auf den öffentlichen Schlüssel erhält, der zur Überprüfung der Authentifizierung verwendet wird, kann er sich nicht authentifizieren, da er den privaten Schlüssel benötigt.
- **Unempfindlich gegenüber Passwortangriffen:** Einige Benutzer verwenden Passwörter erneut, und ein Angreifer könnte das Benutzerpasswort einer anderen Website erlangen (z. B. durch eine Datenpanne). Außerdem sind Textpasswörter viel einfacher durch Brute-Force-Angriffe zu knacken als eine digitale Signatur.

Viele Websites verfügen bereits über Seiten, die es Benutzern ermöglichen, neue Konten zu registrieren oder sich in ein vorhandenes Konto einzuloggen, und WebAuthn fungiert als Ersatz oder Erweiterung für den Authentifizierungsteil des Systems. Es erweitert die [Credential Management API](/de/docs/Web/API/Credential_Management_API), abstrahiert die Kommunikation zwischen dem Benutzeragenten und einem Authentifizierungsgerät und bietet die folgende neue Funktionalität:

- Wenn [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der Option `publicKey` verwendet wird, erstellt der Benutzeragent neue Anmeldedaten über ein Authentifizierungsgerät – entweder zur Registrierung eines neuen Kontos oder zur Verknüpfung eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.
  - Bei der Registrierung eines neuen Kontos werden diese Anmeldedaten auf einem Server gespeichert (auch als Dienst oder [Reliant Party](https://de.wikipedia.org/wiki/Relying_party) bezeichnet) und können anschließend für die Benutzeranmeldung verwendet werden.
  - Das asymmetrische Schlüsselpaar wird im Authentifizierungsgerät gespeichert, das dann zur Authentifizierung eines Benutzers mit einem Reliant Party verwendet werden kann, z. B. während MFA. Das Authentifizierungsgerät kann in den Benutzeragenten oder ein Betriebssystem, wie Windows Hello, eingebettet sein oder es kann sich um ein physisches Token, wie einen USB- oder Bluetooth-Sicherheitsschlüssel, handeln.
- Wenn [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der Option `publicKey` verwendet wird, nutzt der Benutzeragent ein bestehendes Set von Anmeldedaten, um sich bei einer Reliant Party zu authentifizieren (entweder als Hauptanmeldung oder um einen zusätzlichen Faktor während MFA bereitzustellen, wie oben beschrieben).

In ihren einfachsten Formen erhalten sowohl `create()` als auch `get()` eine sehr große Zufallszahl, den sogenannten "Challenge", vom Server und geben den Challenge, signiert durch den privaten Schlüssel, an den Server zurück. Dies beweist dem Server, dass ein Benutzer den zur Authentifizierung erforderlichen privaten Schlüssel besitzt, ohne Geheimnisse über das Netzwerk zu übertragen.

> [!NOTE]
> Der "Challenge" muss ein Puffer aus Zufallsinformationen sein, der mindestens 16 Bytes groß ist.

### Erstellen eines Schlüsselpaares und Registrierung eines Benutzers

Um zu veranschaulichen, wie der Prozess der Erstellung von Anmeldedaten funktioniert, beschreiben wir den typischen Ablauf, der auftritt, wenn ein Benutzer ein Anmeldedatum bei einer Reliant Party registrieren möchte:

1. Der Server der Reliant Party sendet Benutzer- und Reliant Party-Informationen an die Web-App, die den Registrierungsprozess abwickelt, zusammen mit dem "Challenge", mit einem geeigneten sicheren Mechanismus (zum Beispiel [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)).

   > [!NOTE]
   > Das Format für den Informationsaustausch zwischen dem Server der Reliant Party und der Web-App liegt in der Verantwortung der Anwendung.
   > Ein empfohlener Ansatz besteht darin, {{Glossary("JSON_type_representation", "JSON-Typ-Darstellung")}}-Objekte für Anmeldedaten und Anmeldeoptionen auszutauschen.
   > Es wurden Convenience-Methoden in `PublicKeyCredential` erstellt, um von den JSON-Darstellungen in das von den Authentifizierungs-APIs erforderliche Format zu konvertieren: [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON).

2. Die Web-App startet die Erzeugung einer neuen Anmeldedaten über den Authentifizierer im Auftrag der Reliant Party durch einen Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create). Bei diesem Aufruf wird eine `publicKey`-Option übergeben, die die Geräteeigenschaften angibt, z. B., ob das Gerät eine eigene Benutzerauthentifizierung bereitstellt (zum Beispiel mit Biometrie).

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

   Die Parameter des `create()`-Aufrufs werden an das Authentifizierungsgerät zusammen mit einem SHA-256-Hash übergeben, der signiert wird, um sicherzustellen, dass es nicht manipuliert wurde.

3. Nachdem das Authentifizierungsgerät die Zustimmung des Benutzers erhalten hat, generiert es ein Schlüsselpaar und gibt den öffentlichen Schlüssel und optional die signierte Bestätigung an die Web-App zurück. Dies wird bereitgestellt, wenn das {{jsxref("Promise")}}, das durch den `create()`-Aufruf zurückgegeben wird, erfüllt ist, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Bestätigungsinformationen).

4. Die Web-App leitet das [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Server der Reliant Party weiter, erneut unter Verwendung eines geeigneten Mechanismus.

5. Der Server der Reliant Party speichert den öffentlichen Schlüssel, gekoppelt mit der Benutzeridentität, um das Anmeldedatum für zukünftige Authentifizierungen zu merken. Während dieses Prozesses führt es eine Reihe von Überprüfungen durch, um sicherzustellen, dass die Registrierung vollständig und nicht manipuliert wurde. Dazu gehören:

   1. Überprüfung, dass der Challenge derselbe ist wie der gesendete Challenge.
   2. Sicherstellen, dass der Ursprung der erwartete Ursprung war.
   3. Validierung, dass die Signatur und die Bestätigung die richtige Zertifikatskette für das spezifische Modell des zur Erzeugung des Schlüsselpaares verwendeten Authentifizierungsgeräts verwenden.

> [!WARNING]
> Die Bestätigung bietet einer Reliant Party eine Möglichkeit, die Herkunft eines Authentifizierungsgeräts zu bestimmen. Reliant Parties sollten nicht versuchen, Whitelists von Authentifizierungsgeräten zu pflegen.

### Authentifizierung eines Benutzers

Nachdem ein Benutzer sich mit WebAuthn registriert hat, kann er sich mit dem Dienst authentifizieren (einloggen). Der Authentifizierungsablauf ähnelt dem Registrierungsablauf, der Hauptunterschied besteht darin, dass die Authentifizierung:

1. Benötigt keine Informationen des Benutzers oder der Reliant Party
2. Erstellt eine Bestätigung unter Verwendung des zuvor erzeugten Schlüsselpaares für den Dienst, anstatt des Schlüsselpaares des Authentifizierungsgeräts.

Ein typischer Authentifizierungsablauf sieht wie folgt aus:

1. Die Reliant Party generiert einen "Challenge" und sendet diesen zusammen mit einer Liste von Reliant Party- und Benutzerdaten an den Benutzeragenten über einen geeigneten sicheren Mechanismus. Sie kann auch angeben, wo nach dem Anmeldedatum gesucht werden soll, z. B. auf einem integrierten Authentifizierungsgerät oder auf einem externen über USB, BLE usw.

2. Der Browser bittet den Authentifizierungsgerät, den Challenge über einen Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) zu signieren, der die Anmeldedaten in einer `publicKey`-Option übergeben wird.

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

   Die Parameter des `get()`-Aufrufs werden dem Authentifizierungsgerät übergeben, um die Authentifizierung zu bearbeiten.

3. Wenn das Authentifizierungsgerät eines der gegebenen Anmeldedaten enthält und in der Lage ist, den Challenge erfolgreich zu signieren, gibt es nach Erhalt der Zustimmung des Benutzers eine signierte Bestätigung an die Web-App zurück. Dies wird bereitgestellt, wenn das {{jsxref("Promise")}}, das durch den `get()`-Aufruf zurückgegeben wird, erfüllt ist, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Bestätigungsinformationen).

4. Die Web-App leitet die signierte Bestätigung an den Server der Reliant Party weiter, damit die Reliant Party sie validieren kann. Die Validierungsprüfungen umfassen:

   1. Verwendung des während der Registrierungsanfrage gespeicherten öffentlichen Schlüssels zur Validierung der Signatur durch das Authentifizierungsgerät.
   2. Sicherstellen, dass der von dem Authentifizierungsgerät signierte Challenge mit dem vom Server generierten Challenge übereinstimmt.
   3. Überprüfung, dass die Relying Party ID die erwartete für diesen Dienst ist.

5. Sobald die Authentifizierung vom Server verifiziert wurde, wird der Authentifizierungsprozess als erfolgreich angesehen.

### Entdeckbare Anmeldedaten und bedingte Vermittlung

**Entdeckbare Anmeldedaten** werden von einem Authentifizierungsgerät abgerufen —_entdeckt_ vom Browser —, um sie als Login-Optionen anzubieten, wenn der Benutzer sich bei einer Reliant Party-Web-App einloggt. Im Gegensatz dazu werden nicht-auffindbare Anmeldedaten vom Server der Reliant Party bereitgestellt, damit der Browser sie als Login-Optionen anbieten kann.

Entdeckbare Anmeldedaten-IDs und zugehörige Metadaten wie [Benutzernamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#name_2) und [Anzeigenamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#displayname) werden in einem clientseitigen Authentifizierungsgerät wie einem Browser-Passwort-Manager, einer Authentifizierungs-App oder einer Hardware-Lösung wie einem YubiKey gespeichert. Wenn diese Informationen im Authentifizierungsgerät verfügbar sind, kann sich der Benutzer bequem einloggen, ohne Anmeldedaten angeben zu müssen, und die Reliant Party muss beim Feststellen keine [`credentialId`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) angeben (obwohl dies möglich ist; wenn das Anmeldedatum von der RP festgestellt wird, wird der nicht-auffindbare Workflow befolgt).

Ein entdeckbares Anmeldedatum wird über einen [`create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufruf mit einem angegebenen [`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) erstellt. Die `credentialId`, Benutzermetadaten und der öffentliche Schlüssel für das neue Anmeldedatum werden vom Authentifizierungsgerät, wie oben besprochen, gespeichert, aber auch an die Web-App zurückgegeben und auf dem RP-Server gespeichert.

Um zu authentifizieren, ruft der RP-Server [`get()`](/de/docs/Web/API/CredentialsContainer/get) mit **bedingter Vermittlung** auf, das heißt, [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) wird auf `conditional` gesetzt, eine leere [`allowCredentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials)-Liste (was bedeutet, dass nur entdeckbare Anmeldedaten gezeigt werden können) und ein Challenge werden übergeben.

Bedingte Vermittlung führt dazu, dass entdeckbare Anmeldedaten, die im Authentifizierungsgerät gefunden werden, dem Benutzer in einer nicht-modalen Benutzeroberfläche mit einem Hinweis auf den Ursprung, der Anmeldedaten anfordert, angezeigt werden, anstatt in einem modalen Dialog. In der Praxis bedeutet dies, dass verfügbare Anmeldedaten in Ihren Login-Formularen automatisch ausgefüllt werden. Die in entdeckbaren Anmeldedaten gespeicherten Metadaten können angezeigt werden, um Benutzern bei der Auswahl eines Anmeldedatums beim Einloggen zu helfen. Um entdeckbare Anmeldedaten in Ihren Login-Formularen anzuzeigen, müssen Sie auch [`autocomplete="webauthn"`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#webauthn) auf Ihren Formularfeldern einfügen.

Noch einmal: Die Reliant Party teilt dem Authentifizierungsgerät nicht mit, welche Anmeldedaten dem Benutzer angeboten werden sollen — stattdessen liefert das Authentifizierungsgerät die Liste, die es verfügbar hat. Sobald der Benutzer ein Anmeldedatum auswählt, verwendet das Authentifizierungsgerät es, um den Challenge mit dem zugehörigen privaten Schlüssel zu signieren, und der Browser gibt den signierten Challenge und seine `credentialId` an den RP-Server zurück.

Der anschließende Authentifizierungsprozess auf dem RP-Server ist derselbe wie für nicht-auffindbare Anmeldedaten.

> [!NOTE]
> Sie können überprüfen, ob bedingte Vermittlung auf einem bestimmten Benutzeragenten verfügbar ist, indem Sie die Methode [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) aufrufen.

[Passkeys](https://passkeys.dev/) sind ein bedeutender Anwendungsfall für entdeckbare Anmeldedaten; siehe [Create a passkey for passwordless logins](https://web.dev/articles/passkey-registration) und [Sign in with a passkey through form autofill](https://web.dev/articles/passkey-form-autofill) für Implementierungsdetails. Siehe auch [Discoverable credentials deep dive](https://web.dev/articles/webauthn-discoverable-credentials) für allgemeinere Informationen zu entdeckbaren Anmeldedaten.

Wenn bedingte Vermittlung für die Authentifizierung verwendet wird, wird das Flag für die Verhinderung des stillen Zugriffs (siehe [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)) als `true` behandelt, unabhängig von seinem tatsächlichen Wert: das bedingte Verhalten umfasst immer eine Art von Benutzervermittlung, wenn relevante Anmeldedaten gefunden werden.

> [!NOTE]
> Wenn keine Anmeldedaten gefunden werden, wird der nicht-modale Dialog nicht sichtbar sein, und der Benutzeragent kann den Benutzer auffordern, Maßnahmen zu ergreifen, abhängig vom Typ des Anmeldedatums (zum Beispiel, ein Gerät mit Anmeldedaten einzufügen).

#### Synchronisationsmethoden für entdeckbare Anmeldedaten

Es ist möglich, dass die im Authentifizierungsgerät eines Benutzers über ein entdeckbares Anmeldedatum gespeicherten Informationen mit dem Server der Reliant Party nicht synchron sind. Dies könnte geschehen, wenn der Benutzer ein Anmeldedatum löscht oder seinen Benutzer-/Anzeigenamen in der RP-Web-App ändert, ohne den Authentifizierungsgerät zu aktualisieren.

Die API bietet Methoden, die es dem Server der Reliant Party erlauben, dem Authentifizierungsgerät Änderungen zu signalisieren, sodass es seine gespeicherten Anmeldedaten aktualisieren kann:

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static): Signalisiert dem Authentifizierungsgerät alle gültigen Anmeldedaten-IDs, die der RP-Server für einen bestimmten Benutzer noch hält.
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static): Signalisiert dem Authentifizierungsgerät, dass ein bestimmter Benutzer seinen Benutzer- und/oder Anzeigenamen auf dem RP-Server aktualisiert hat.
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static): Signalisiert dem Authentifizierungsgerät, dass eine Anmeldedaten-ID vom RP-Server nicht erkannt wurde.

Es mag den Anschein haben, dass `signalUnknownCredential()` und `signalAllAcceptedCredentials()` ähnliche Zwecke haben, wann sollte jede verwendet werden?

- `signalAllAcceptedCredentials()` sollte nach jedem erfolgreichen Anmelden aufgerufen werden und wenn der Benutzer eingeloggt ist und Sie den Status seiner Anmeldedaten aktualisieren möchten. Es sollte nur aufgerufen werden, wenn ein Benutzer authentifiziert ist, da es die gesamte Liste der `credentialId`s für einen gegebenen Benutzer teilt. Dies würde zu einem Privatsphären-Leck führen, wenn der Benutzer nicht authentifiziert ist.
- `signalUnknownCredential()` sollte nach einem fehlgeschlagenen Login aufgerufen werden, um dem Authentifizierungsgerät zu signalisieren, dass die `credentialId` des ausgewählten Anmeldedatums nicht validiert werden kann und entfernt werden sollte. Die Methode kann sicher aufgerufen werden, wenn der Benutzer nicht authentifiziert ist, da sie eine einzelne `credentialId` an das Authentifizierungsgerät übergibt — diejenige, mit der der Client gerade versucht hat, sich zu authentifizieren — und keine Benutzerinformation.

### Anpassung von Workflows basierend auf den Fähigkeiten des Clients

Die Registrierungs- und Login-Workflows können basierend auf den Fähigkeiten des WebAuthn-Clients (Browser) angepasst werden. Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) kann verwendet werden, um diese Fähigkeiten abzufragen; sie gibt ein Objekt zurück, bei dem jeder Schlüssel sich auf eine WebAuthn-Fähigkeit oder -Erweiterung bezieht und jeder Wert ein Boolean ist, der die Unterstützung dieser Funktion anzeigt.

Dies kann verwendet werden, um zum Beispiel zu überprüfen:

- Unterstützung des Clients für verschiedene Authentifizierungen wie Passkeys oder biometrische Benutzerauthentifizierung.
- Ob der Client [Methoden unterstützt, um Reliant Party- und Authentifizierungsgerät-Anmeldedaten synchron zu halten](#synchronisationsmethoden_für_entdeckbare_anmeldedaten).
- Ob der Client erlaubt, einen einzelnen Passkey auf verschiedenen Websites mit demselben Ursprung zu verwenden.

Der folgende Code zeigt, wie Sie `getClientCapabilities()` verwenden könnten, um zu überprüfen, ob der Client Authentifizierungsgeräte unterstützt, die biometrische Benutzerauthentifizierung bieten.
Beachten Sie, dass die tatsächlichen Aktionen von Ihrer Site abhängen.
Für Sites, die _biometrische Authentifizierung erfordern_, könnten Sie die Login-Benutzeroberfläche durch eine Nachricht ersetzen, dass biometrische Authentifizierung erforderlich ist, und der Benutzer einen anderen Browser oder ein anderes Gerät ausprobieren soll.

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

Die Verfügbarkeit von WebAuthn kann mit einer [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) kontrolliert werden, insbesondere durch Festlegung zweier Direktiven:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Kontrolliert die Verfügbarkeit von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Kontrolliert die Verfügbarkeit von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option.

Beide Direktiven haben standardmäßig den Wert `"self"` auf der Zulassungsliste, was bedeutet, dass diese Methoden standardmäßig in Top-Level-Dokumentkontexten verwendet werden können.
Zusätzlich kann `get()` in eingebetteten Browsing-Kontexten verwendet werden, die vom gleichen Ursprung wie das oberste Dokument geladen werden.
`get()` und `create()` können in eingebetteten Browsing-Kontexten verwendet werden, die von anderen Ursprüngen als dem obersten Dokument geladen werden (d.h. in cross-origin `<iframes>`), wenn dies durch die Direktiven [`publickey-credentials-get`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-get) und [`publickey-credentials-create`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create) der `Berechtigungsrichtlinie` erlaubt ist.
Für cross-origin `create()`-Aufrufe, bei denen die Berechtigung durch [`allow=` auf einem `iframe`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) erteilt wurde, muss der Frame auch eine {{Glossary("Transient_activation", "vorübergehende Aktivierung")}} haben.

> [!NOTE]
> Wenn eine Richtlinie die Verwendung dieser Methoden verbietet, wird das durch sie zurückgegebene {{jsxref("Promise", "Promises", "", 1)}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

### Grundlegende Zugangskontrolle

Wenn Sie den Zugang nur für eine bestimmte Subdomain zulassen möchten, könnten Sie sie folgendermaßen angeben:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Einbetten von `create`- und `get()`-Aufrufen in ein `<iframe>` erlauben

Wenn Sie mit `get()` oder `create()` in einem `<iframe>` authentifizieren möchten, sind einige Schritte zu beachten:

1. Die Site, die die Reliant Party-Site einbettet, muss die Berechtigung über ein `allow`-Attribut erteilen:

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

     Das `<iframe>` muss auch eine {{Glossary("Transient_activation", "vorübergehende Aktivierung")}} haben, wenn `create()` cross-origin aufgerufen wird.

2. Die Reliant Party-Site muss die Berechtigung für den obigen Zugriff über einen `Permissions-Policy`-Header erteilen:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   Oder um nur eine bestimmte URL zu erlauben, die Reliant Party-Site in einem `<iframe>` einzubetten:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## Schnittstellen

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)
  - : Liefert einem Dienst den Nachweis, dass ein Authentifizierungsgerät das notwendige Schlüsselpaar hat, um eine Authentifizierungsanfrage zu bearbeiten, die durch einen [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf initiiert wurde. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die erhalten wird, wenn das `get()` {{jsxref("Promise")}} erfüllt ist.
- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)
  - : Das Ergebnis einer WebAuthn-Anmeldedatenregistrierung (d.h. eines [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufrufs). Es enthält Informationen über die Anmeldedaten, die der Server benötigt, um WebAuthn-Erklärungen auszuführen, wie z. B. die Anmeldedaten-ID und den öffentlichen Schlüssel. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die erhalten wird, wenn das `create()` {{jsxref("Promise")}} erfüllt ist.
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)
  - : Die Basisschnittstelle für [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) und [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
  - : Liefert Informationen über ein öffentliches Schlüssel-/privates Schlüsselpaar, das eine Anmeldedaten für den Login bei einem Dienst mit einem gegen Phishing und Datenpannen resistenten asymmetrischen Schlüsselpaar anstelle eines Passworts ist. Erhalten, wenn das {{jsxref("Promise")}} durch einen [`create()`](/de/docs/Web/API/CredentialsContainer/create)- oder [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf erfüllt ist.

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die `publicKey`-Option
  - : Der Aufruf von `create()` mit einer `publicKey`-Option initiiert die Erstellung neuer asymmetrischer Schlüsselanmeldedaten über ein Authentifizierungsgerät, wie oben erläutert.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `publicKey`-Option
  - : Der Aufruf von `get()` mit einer `publicKey`-Option weist den Benutzeragenten an, ein bestehendes Set von Anmeldedaten zu verwenden, um sich bei einer Reliant Party zu authentifizieren.

## Beispiele

### Demo-Sites

- [Mozilla Demo](https://webauthn.bin.coffee/) Website und ihr [Quellcode](https://github.com/jcjones/webauthn.bin.coffee).
- [Google Demo](https://try-webauthn.appspot.com/) Website und ihr [Quellcode](https://github.com/google/webauthndemo).
- [WebAuthn.io Demo](https://webauthn.io/) Website und ihr [Quellcode](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) und ihr [Client-Quellcode](https://github.com/webauthn-open-source/webauthn-simple-app) und [Server-Quellcode](https://github.com/webauthn-open-source/fido2-lib)

### Anwendungsbeispiel

> [!NOTE]
> Aus Sicherheitsgründen werden die Aufrufe der Web Authentication API ([`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`get()`](/de/docs/Web/API/CredentialsContainer/get)) abgebrochen, wenn das Browserfenster den Fokus verliert, während der Aufruf aussteht.

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
