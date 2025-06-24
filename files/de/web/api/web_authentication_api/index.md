---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Die Web Authentication API (WebAuthn) ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), die starke Authentifizierung mit öffentlicher Schlüssel-Kryptographie ermöglicht und passwortlose Authentifizierung sowie sichere Multi-Faktor-Authentifizierung (MFA) ohne SMS-Nachrichten unterstützt.

## WebAuthn-Konzepte und Anwendung

WebAuthn verwendet [asymmetrische (öffentliche Schlüssel-)Kryptographie](https://en.wikipedia.org/wiki/Public-key_cryptography) anstelle von Passwörtern oder SMS-Nachrichten zur Registrierung, Authentifizierung und [Multi-Faktor-Authentifizierung](https://en.wikipedia.org/wiki/Multi-factor_authentication) mit Websites. Dies bietet einige Vorteile:

- **Schutz vor Phishing:** Ein Angreifer, der eine gefälschte Anmeldeseite erstellt, kann sich nicht als der Benutzer anmelden, da sich die Signatur mit dem {{Glossary("Origin", "Ursprung")}} der Website ändert.
- **Reduzierter Einfluss von Datenpannen:** Entwickler müssen den öffentlichen Schlüssel nicht hashen, und wenn ein Angreifer Zugriff auf den öffentlichen Schlüssel hat, der zur Überprüfung der Authentifizierung verwendet wird, kann er sich nicht authentifizieren, da er den privaten Schlüssel benötigt.
- **Unverwundbar gegenüber Passwortangriffen:** Einige Benutzer könnten Passwörter wiederverwenden, und ein Angreifer könnte das Passwort des Benutzers für eine andere Website erhalten (zum Beispiel durch eine Datenpanne). Außerdem sind Textpasswörter viel leichter zu bruteforcen als eine digitale Signatur.

Viele Websites bieten bereits Seiten an, auf denen Benutzer neue Konten registrieren oder sich in vorhandene Konten einloggen können. WebAuthn fungiert als Ersatz oder Verbesserung des Authentifizierungsteils des Systems. Es erweitert die [Credential Management API](/de/docs/Web/API/Credential_Management_API), abstrahiert die Kommunikation zwischen dem Benutzeragent und einem Authentifikator und bietet folgende neue Funktionen:

- Wenn [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option verwendet wird, erstellt der Benutzeragent neue Anmeldedaten über einen Authentifikator – entweder zur Registrierung eines neuen Kontos oder zur Verknüpfung eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.
  - Bei der Registrierung eines neuen Kontos werden diese Anmeldedaten auf einem Server (auch als Dienst oder [Vertrauenspartei](https://en.wikipedia.org/wiki/Relying_party) bezeichnet) gespeichert und können anschließend verwendet werden, um einen Benutzer einzuloggen.
  - Das asymmetrische Schlüsselpaar wird im Authentifikator gespeichert, der dann verwendet werden kann, um einen Benutzer bei einer Vertrauenspartei zu authentifizieren, beispielsweise während einer MFA. Der Authentifikator kann im Benutzeragent eingebettet sein, in einem Betriebssystem wie Windows Hello oder es kann ein physisches Token sein, wie ein USB- oder Bluetooth-Sicherheitsschlüssel.
- Wenn [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option verwendet wird, verwendet der Benutzeragent einen bestehenden Satz von Anmeldedaten, um sich bei einer Vertrauenspartei zu authentifizieren (entweder als Hauptanmeldung oder um einen zusätzlichen Faktor während der MFA bereitzustellen, wie oben beschrieben).

In ihrer grundlegendsten Form erhalten sowohl `create()` als auch `get()` eine sehr große Zufallszahl, die als "Challenge" bezeichnet wird, vom Server und geben die Challenge, signiert mit dem privaten Schlüssel, an den Server zurück. Dies beweist dem Server, dass ein Benutzer den privaten Schlüssel besitzt, der für die Authentifizierung erforderlich ist, ohne Geheimnisse über das Netzwerk preiszugeben.

> [!NOTE]
> Die "Challenge" muss ein Puffer aus zufälligen Informationen mit einer Größe von mindestens 16 Bytes sein.

### Erstellen eines Schlüsselpaares und Registrierung eines Benutzers

Um zu veranschaulichen, wie der Anmeldedaten-Erstellungsprozess funktioniert, beschreiben wir den typischen Ablauf, der stattfindet, wenn ein Benutzer eine Anmeldeinformation bei einer Vertrauenspartei registrieren möchte:

1. Der Server der Vertrauenspartei sendet Benutzer- und Vertrauenspartei-Informationen an die Web-App, die den Registrierungsprozess handhabt, zusammen mit der "Challenge", über einen geeigneten sicheren Mechanismus (zum Beispiel [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)).

   > [!NOTE]
   > Das Format für den Austausch von Informationen zwischen dem Server der Vertrauenspartei und der Web-App liegt in der Hand der Anwendung.
   > Ein empfohlener Ansatz ist der Austausch von {{Glossary("JSON_type_representation", "JSON-Typ-Repräsentationen")}} von Anmeldedaten und Anmeldedatenoptionen.
   > Bequemlichkeiten wurden in `PublicKeyCredential` geschaffen, um die Konvertierung von den JSON-Repräsentationen in die Form vorzunehmen, die von den Authentifizierungs-APIs benötigt wird: [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON).

2. Die Web-App startet die Generierung einer neuen Anmeldeinformation über den Authentifikator im Namen der Vertrauenspartei über einen [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufruf. Dieser Aufruf erhält eine `publicKey`-Option, die die Geräteeigenschaften angibt, z. B. ob das Gerät seine eigene Benutzerauthentifizierung bietet (zum Beispiel mit Biometrics).

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

   Die Parameter des `create()`-Aufrufs werden an den Authentifikator übergeben, zusammen mit einem SHA-256-Hash, der signiert wird, um sicherzustellen, dass er nicht manipuliert wurde.

3. Nachdem der Authentifikator die Zustimmung des Nutzers erhalten hat, generiert er ein Schlüsselpaar und gibt den öffentlichen Schlüssel und die optional unterzeichnete Attestierung an die Web-App zurück. Dies wird bereitgestellt, wenn das von `create()` zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Attestierungsinformationen).

4. Die Web-App leitet das [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Server der Vertrauenspartei weiter, wieder unter Verwendung eines geeigneten Mechanismus.

5. Der Server der Vertrauenspartei speichert den öffentlichen Schlüssel, zusammen mit der Benutzeridentität, um sich das Anmeldedatum für zukünftige Authentifizierungen zu merken. Während dieses Prozesses werden eine Reihe von Überprüfungen durchgeführt, um sicherzustellen, dass die Registrierung vollständig und nicht manipuliert wurde. Diese umfassen:
   1. Überprüfung, dass die Challenge die gleiche ist wie die versendete Challenge.
   2. Sicherstellung, dass der Ursprung der erwartete Ursprung war.
   3. Validierung, dass die Signatur und die Attestierung die richtige Zertifikatskette für das spezifische Modell des Authentifikators verwenden, das ursprünglich das Schlüsselpaar generiert hat.

> [!WARNING]
> Die Attestierung bietet einer Vertrauenspartei eine Möglichkeit, die Herkunft eines Authentifikators zu bestimmen. Vertrauensparteien sollten nicht versuchen, Erlaubnislisten von Authentifikatoren zu führen.

### Authentifizierung eines Benutzers

Nachdem sich ein Benutzer bei WebAuthn registriert hat, kann er sich (einloggen) bei dem Dienst authentifizieren. Der Authentifizierungsablauf ähnelt dem Registrierungsablauf, wobei die Hauptunterschiede darin bestehen, dass die Authentifizierung:

1. Keine Benutzer- oder Vertrauensparteiinformation benötigt
2. Eine Assertion mit dem zuvor für den Dienst generierten Schlüsselpaar erstellt, anstatt dem Schlüsselpaar des Authentifikators.

Ein typischer Authentifizierungsablauf sieht wie folgt aus:

1. Die Vertrauenspartei generiert eine "Challenge" und sendet sie an den Benutzeragent über einen geeigneten sicheren Mechanismus, zusammen mit einer Liste von Vertrauenspartei- und Benutzeranmeldedaten. Es kann auch angegeben werden, wo nach der Anmeldeinformation gesucht werden soll, z. B. in einem lokalen integrierten Authentifikator oder in einem externen über USB, BLE usw.

2. Der Browser fordert den Authentifikator auf, die Challenge über einen [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf zu signieren, dem die Anmeldedaten in einer `publicKey`-Option übergeben werden.

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

   Die Parameter des `get()`-Aufrufs werden dem Authentifikator übergeben, um die Authentifizierung durchzuführen.

3. Wenn der Authentifikator eines der angegebenen Anmeldeinformationen enthält und in der Lage ist, die Challenge erfolgreich zu signieren, gibt er eine signierte Assertion an die Web-App zurück, nachdem er die Zustimmung des Benutzers erhalten hat. Dies wird bereitgestellt, wenn das vom `get()` zurückgegebene {{jsxref("Promise")}} erfüllt wird, in Form einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Assertion-Informationen).

4. Die Web-App leitet die signierte Assertion an den Server der Vertrauenspartei weiter, damit die Vertrauenspartei sie validieren kann. Die Validierungsüberprüfungen umfassen:

   1. Verwendung des während der Registrierungsanforderung gespeicherten öffentlichen Schlüssels, um die Signatur des Authentifikators zu validieren.
   2. Sicherstellung, dass die vom Authentifikator signierte Challenge mit der Challenge übereinstimmt, die vom Server generiert wurde.
   3. Überprüfung, dass die Relying Party ID die erwartete für diesen Dienst ist.

5. Sobald sie vom Server überprüft wurde, gilt der Authentifizierungsablauf als erfolgreich.

### Entdeckbare Anmeldeinformationen und bedingte Vermittlung

**Entdeckbare Anmeldeinformationen** werden von einem Authentifikator abgerufen — vom Browser entdeckt — um sie als Anmeldeoptionen anzubieten, wenn sich der Benutzer in eine Webanwendung der Vertrauenspartei einloggt. Im Gegensatz dazu werden nicht-entdeckbare Anmeldeinformationen vom Server der Vertrauenspartei bereitgestellt, damit der Browser sie als Anmeldeoptionen anbieten kann.

Entdeckbare Anmeldeidentifikatoren und zugehörige Metadaten wie [Benutzernamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#name_2) und [Anzeigenamen](/de/docs/Web/API/PublicKeyCredentialCreationOptions#displayname) werden in einem client-seitigen Authentifikator wie einem Browser-Passwortmanager, einer Authentifikator-App oder einer Hardwarelösung wie einem YubiKey gespeichert. Wenn diese Informationen im Authentifikator verfügbar sind, kann sich der Benutzer bequem einloggen, ohne Anmeldedaten angeben zu müssen, und die Vertrauenspartei muss nicht zwingend einen [`credentialId`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) angeben, wenn sie ihn beansprucht (obwohl sie es tun kann; wenn die Anmeldeinformation von der RP behauptet wird, wird der nicht-entdeckbare Workflow gefolgt).

Eine entdeckbare Anmeldeinformation wird über einen [`create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufruf mit einem angegebenen [`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) erstellt. Der `credentialId`, die Benutzermetadaten und der öffentliche Schlüssel für die neue Anmeldeinformation werden wie besprochen vom Authentifikator gespeichert, aber auch an die Web-App zurückgegeben und auf dem RP-Server gespeichert.

Um sich zu authentifizieren, ruft der RP-Server [`get()`](/de/docs/Web/API/CredentialsContainer/get) mit **bedingter Vermittlung** auf, d.h. [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) wird auf `conditional` gesetzt, eine leere [`allowCredentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials)-Liste (was bedeutet, dass nur entdeckbare Anmeldeinformationen angezeigt werden können) und eine Challenge.

Bei bedingter Vermittlung werden entdeckbare Anmeldeinformationen im Authentifikator in einer nicht-modalen Benutzeroberfläche zusammen mit einem Hinweis auf den Ursprung, der Anmeldeinformationen anfordert, dem Benutzer angezeigt, anstelle eines modalen Dialogs. In der Praxis bedeutet dies das automatische Ausfüllen der verfügbaren Anmeldedaten in Ihren Anmeldeformularen. Die in entdeckbaren Anmeldeinformationen gespeicherten Metadaten können angezeigt werden, um Benutzern bei der Auswahl einer Anmeldeinformation beim Einloggen zu helfen. Um entdeckbare Anmeldeinformationen in Ihren Anmeldeformularen anzuzeigen, müssen Sie in Ihren Eingabefeldern auch [`autocomplete="webauthn"`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#webauthn) einfügen.

Um es zu wiederholen: Die Vertrauenspartei sagt dem Authentifikator nicht, welche Anmeldeinformationen dem Benutzer angeboten werden sollen — stattdessen liefert der Authentifikator die Liste, die er verfügbar hat. Sobald der Benutzer eine Anmeldeinformation auswählt, verwendet der Authentifikator diese, um die Challenge mit dem zugehörigen privaten Schlüssel zu signieren, und der Browser gibt die signierte Challenge und deren `credentialId` an den RP-Server zurück.

Der nachfolgende Authentifizierungsprozess auf dem RP-Server ist derselbe wie bei nicht-entdeckbaren Anmeldeinformationen.

> [!NOTE]
> Sie können überprüfen, ob bedingte Vermittlung auf einem bestimmten Benutzeragenten verfügbar ist, indem Sie die Methode [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) aufrufen.

[Passkeys](https://passkeys.dev/) sind ein bedeutender Anwendungsfall für entdeckbare Anmeldeinformationen; sehen Sie sich [Ein Passkey für passwortlose Anmeldungen erstellen](https://web.dev/articles/passkey-registration) und [Mit einem Passkey über Formular-Autovervollständigung anmelden](https://web.dev/articles/passkey-form-autofill) für Implementierungsdetails an. Siehe auch [Discoverable credentials deep dive](https://web.dev/articles/webauthn-discoverable-credentials) für allgemeinere Informationen zu entdeckbaren Anmeldeinformationen.

Wenn die bedingte Vermittlung für die Authentifizierung verwendet wird, wird die Verhinderung stillen Zugriffs-Flag (siehe [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)) als `true` behandelt, unabhängig von ihrem tatsächlichen Wert: Das bedingte Verhalten umfasst immer irgendeine Form von Benutzervermittlung, wenn anwendbare Anmeldeinformationen entdeckt werden.

> [!NOTE]
> Wenn keine Anmeldeinformationen entdeckt werden, ist der nicht-modale Dialog nicht sichtbar, und der Benutzeragent kann den Benutzer auffordern, auf eine Weise zu handeln, die von der Art der Anmeldeinformationen abhängt (zum Beispiel, um ein Gerät mit Anmeldeinformationen einzufügen).

#### Synchronisationsmethoden für entdeckbare Anmeldeinformationen

Es ist möglich, dass die im Authentifikator eines Benutzers gespeicherten Informationen über eine entdeckbare Anmeldeinformation mit dem Server der Vertrauenspartei nicht synchron sind. Dies könnte passieren, wenn der Benutzer eine Anmeldeinformation löscht oder ihren Benutzer-/Anzeigenamen auf der RP-Web-App ändert, ohne den Authentifikator zu aktualisieren.

Die API bietet Methoden, mit denen der Server der Vertrauenspartei dem Authentifikator Änderungen signalisieren kann, damit er seine gespeicherten Anmeldeinformationen aktualisieren kann:

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static): Signalisiert dem Authentifikator alle gültigen Anmeldedaten-IDs, die der RP-Server für einen bestimmten Benutzer noch besitzt.
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static): Signalisiert dem Authentifikator, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeigenamen auf dem RP-Server aktualisiert hat.
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static): Signalisiert dem Authentifikator, dass eine Anmeldeinformationen-ID vom RP-Server nicht erkannt wurde.

Es mag so scheinen, dass `signalUnknownCredential()` und `signalAllAcceptedCredentials()` ähnliche Zwecke haben, in welcher Situation sollte also jede verwendet werden?

- `signalAllAcceptedCredentials()` sollte nach jedem erfolgreichen Anmelden aufgerufen werden und wenn der Benutzer eingeloggt ist und Sie den Zustand seiner Anmeldeinformationen aktualisieren möchten. Es darf nur aufgerufen werden, wenn ein Benutzer authentifiziert ist, da es die gesamte Liste der `credentialId`s für einen bestimmten Benutzer teilt. Dies würde zu einer Datenschutzverletzung führen, wenn der Benutzer nicht authentifiziert ist.
- `signalUnknownCredential()` sollte nach einem erfolglosen Login aufgerufen werden, um dem Authentifikator zu signalisieren, dass die `credentialId` der ausgewählten Anmeldeinformation nicht validiert werden kann und entfernt werden sollte. Die Methode kann sicher aufgerufen werden, wenn der Benutzer nicht authentifiziert ist, da sie eine einzelne `credentialId` an den Authentifikator übermittelt — diejenige, mit der der Client gerade versucht hat, sich zu authentifizieren — und keine Benutzerinformationen übermittelt.

### Anpassung von Workflows basierend auf Kundenfähigkeiten

Die Registrierungs- und Anmelde-Workflows können basierend auf den Fähigkeiten des WebAuthn-Kunden (Browser) angepasst werden. Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) kann verwendet werden, um diese Fähigkeiten abzufragen; sie gibt ein Objekt zurück, bei dem jeder Schlüssel auf eine WebAuthn-Fähigkeit oder -Erweiterung verweist, und jeder Wert ein Boolean ist, das die Unterstützung für diese Funktion anzeigt.

Dies kann beispielsweise verwendet werden, um zu prüfen:

- Unterstützung des Clients für verschiedene Authentifikatoren wie Passkeys oder biometrische Benutzerüberprüfung.
- Ob der Client [Methoden unterstützt, um Relying-Party- und Authenticator-Anmeldedaten synchron zu halten](#synchronisationsmethoden-f%C3%BCr-entdeckbare-Anmeldeinformationen).
- Ob der Client zulässt, dass ein einzelner Passkey auf verschiedenen Websites mit demselben Ursprung verwendet wird.

Der untenstehende Code zeigt, wie Sie `getClientCapabilities()` verwenden könnten, um zu überprüfen, ob der Client Authentifikatoren unterstützt, die biometrische Benutzerüberprüfung anbieten.
Beachten Sie, dass die tatsächlichen Aktionen von Ihrer Website abhängen.
Für Websites, die _biometrische Authentifizierung_ erfordern, könnten Sie die Anmelde-Benutzeroberfläche durch eine Nachricht ersetzen, die angibt, dass biometrische Authentifizierung erforderlich ist, und dass der Benutzer einen anderen Browser oder ein anderes Gerät ausprobieren sollte.

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

## Zugriffskontrolle auf die API

Die Verfügbarkeit von WebAuthn kann mithilfe einer [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden, die zwei Direktiven im Besonderen angibt:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Steuert die Verfügbarkeit von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Steuert die Verfügbarkeit von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option.

Beide Direktiven haben standardmäßig einen Allowlist-Wert von `"self"`, was bedeutet, dass diese Methoden standardmäßig in Top-Level-Dokumentenkontexten genutzt werden können.
Außerdem kann `get()` in verschachtelten Browserkontexten verwendet werden, die vom selben Ursprung wie das oberste Dokument geladen werden.
`get()` und `create()` können in verschachtelten Browserkontexten verwendet werden, die von anderen Ursprüngen als das oberste Dokument geladen werden (d.h. in Cross-Origin-`<iframes>`), wenn sie von den [`publickey-credentials-get`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-get) und [`publickey-credentials-create`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create) `Permission-Policy`-Direktiven jeweils erlaubt werden.
Für Cross-Origin-`create()`-Aufrufe, bei denen die Erlaubnis über [`allow=` an einem iframe](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) gewährt wird, muss der Frame auch {{Glossary("Transient_activation", "vorübergehende Aktivierung")}} haben.

> [!NOTE]
> Wo eine Richtlinie die Nutzung dieser Methoden verbietet, wird das von ihnen zurückgegebene {{jsxref("Promise", "Versprechen", "", 1)}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

### Grundlegende Zugriffskontrolle

Wenn Sie den Zugriff nur auf eine bestimmte Subdomain erlauben möchten, könnten Sie es so bereitstellen:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Erlauben eingebetteter `create`- und `get()`-Aufrufe in einem `<iframe>`

Wenn Sie sich in einem `<iframe>` mit `get()` oder `create()` authentifizieren möchten, gibt es einige Schritte zu befolgen:

1. Die Site, die die Vertrauens-Site einbettet, muss die Erlaubnis über ein `allow`-Attribut bereitstellen:

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

     Das `<iframe>` muss auch {{Glossary("Transient_activation", "vorübergehende Aktivierung")}} haben, wenn `create()` Cross-Origin aufgerufen wird.

2. Die Vertrauenspartei-Site muss die Erlaubnis für obigen Zugriff über einen `Permissions-Policy`-Header bereitstellen:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   Oder um nur eine spezifische URL zu erlauben, die Vertrauenspartei-Site in einem `<iframe>` einzubetten:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## Schnittstellen

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)
  - : Bietet einen Dienst den Nachweis, dass ein Authentifikator über das erforderliche Schlüsselpaar verfügt, um erfolgreich auf eine von einem [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf initiierte Authentifizierungsanforderung zu reagieren. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der `PublicKeyCredential`-Instanz, die erhalten wird, wenn das `get()` {{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)
  - : Das Ergebnis einer WebAuthn-Anmeldedatenregistrierung (d.h. ein [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufruf). Es enthält Informationen über die Anmeldeinformation, die der Server benötigt, um WebAuthn-Assertionen auszuführen, wie seine Anmelde-Id und öffentlicher Schlüssel. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der `PublicKeyCredential`-Instanz, die erhalten wird, wenn das `create()` {{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)
  - : Die Basisschnittstelle für [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) und [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
  - : Bietet Informationen über ein öffentliches Schlüssel-/privates Schlüsselpaar, das eine Anmeldeinformation zum Einloggen in einen Dienst mit einem nicht-phishbaren und datenpannenresistenten asymmetrischen Schlüsselpaar anstelle eines Passworts darstellt. Erhalten, wenn das von einem [`create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf zurückgegebene {{jsxref("Promise")}} erfüllt wird.

## Erweiterungen auf andere Schnittstellen

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die `publicKey`-Option
  - : Der Aufruf von `create()` mit einer `publicKey`-Option initiiert die Erstellung neuer asymmetrischer Schlüsselanmeldeinformationen über einen Authentifikator, wie oben beschrieben.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `publicKey`-Option
  - : Der Aufruf von `get()` mit einer `publicKey`-Option weist den Benutzeragenten an, eine bestehende Menge von Anmeldedaten zur Authentifizierung bei einer Vertrauenspartei zu verwenden.

## Beispiele

### Demo-Seiten

- Die [Mozilla Demo](https://webauthn.bin.coffee/) Website und ihr [Quellcode](https://github.com/jcjones/webauthn.bin.coffee).
- Die [Google Demo](https://try-webauthn.appspot.com/) Website und ihr [Quellcode](https://github.com/google/webauthndemo).
- Die [WebAuthn.io](https://webauthn.io/) Demo-Website und ihr [Quellcode](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) und ihr [Klienten-Quellcode](https://github.com/webauthn-open-source/webauthn-simple-app) und [Server-Quellcode](https://github.com/webauthn-open-source/fido2-lib)

### Anwendungsbeispiel

> [!NOTE]
> Aus Sicherheitsgründen werden die Web Authentication API-Aufrufe ([`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`get()`](/de/docs/Web/API/CredentialsContainer/get)) abgebrochen, wenn das Browserfenster während der schwebenden Anfrage den Fokus verliert.

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
