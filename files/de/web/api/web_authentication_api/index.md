---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Die Web Authentication API (WebAuthn) ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), die eine starke Authentifizierung mit öffentlichem Schlüssel ermöglicht und passwortlose Authentifizierung sowie sichere {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} (MFA) ohne SMS-Textnachrichten ermöglicht.

Im Web werden [Passkeys](/de/docs/Web/Security/Authentication/Passkeys) mithilfe der Web Authentication API implementiert.

## WebAuthn-Konzepte und Verwendung

WebAuthn verwendet [asymmetrische (Public-Key-)Kryptographie](https://en.wikipedia.org/wiki/Public-key_cryptography) anstelle von Passwörtern oder SMS-Textnachrichten zur Registrierung, Authentifizierung und {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} auf Websites. Dies hat einige Vorteile:

- **Schutz vor Phishing:** Ein Angreifer, der eine gefälschte Anmeldeseite erstellt, kann sich nicht als Benutzer anmelden, da die Signatur mit dem {{Glossary("Origin", "Origin")}} der Website wechselt.
- **Geringerer Schaden bei Datenschutzverletzungen:** Entwickler benötigen nicht, den öffentlichen Schlüssel zu hashen, und wenn ein Angreifer Zugang zum öffentlichen Schlüssel erhält, der zur Authentifizierung verwendet wird, kann er sich nicht authentifizieren, da der private Schlüssel erforderlich ist.
- **Unverwundbar gegen Passwortangriffe:** Einige Benutzer können Passwörter wiederverwenden, und ein Angreifer könnte das Passwort des Benutzers für eine andere Website erlangen (z. B. über eine Datenverletzung). Außerdem sind Textpasswörter viel leichter durch Brute-Force zu knacken als eine digitale Signatur.

Viele Websites haben bereits Seiten, die es Benutzern ermöglichen, neue Konten zu registrieren oder sich in ein bestehendes Konto einzuloggen, und WebAuthn ersetzt oder verbessert den Authentifizierungsteil des Systems. Es erweitert die [Credential Management API](/de/docs/Web/API/Credential_Management_API), abstrahiert die Kommunikation zwischen dem Benutzeragenten und einem Authenticator und bietet die folgende neue Funktionalität:

- Wenn [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der Option `publicKey` verwendet wird, erstellt der Benutzeragent neue Anmeldeinformationen über einen Authenticator – entweder um ein neues Konto zu registrieren oder um ein neues asymmetrisches Schlüsselpaar mit einem bestehenden Konto zu verknüpfen.
  - Bei der Registrierung eines neuen Kontos werden diese Anmeldeinformationen auf einem Server gespeichert (auch als Dienst oder [Vertrauenspartei](https://en.wikipedia.org/wiki/Relying_party) bezeichnet) und können anschließend verwendet werden, um sich anzumelden.
  - Das asymmetrische Schlüsselpaar wird im Authenticator gespeichert, der dann verwendet werden kann, um sich bei einer Vertrauenspartei zu authentifizieren, beispielsweise während der MFA. Der Authenticator kann entweder in den Benutzeragenten eingebettet sein, in ein Betriebssystem, wie Windows Hello, oder es kann sich um einen physischen Token handelt, wie z. B. einen USB- oder Bluetooth-Sicherheitsschlüssel.
- Wenn [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der Option `publicKey` verwendet wird, nutzt der Benutzeragent ein vorhandenes Set von Anmeldeinformationen, um sich bei einer Vertrauenspartei zu authentifizieren (entweder als primäre Anmeldung oder um einen zusätzlichen Faktor während der MFA bereitzustellen, wie oben beschrieben).

In ihren grundlegendsten Formen empfangen sowohl `create()` als auch `get()` eine sehr große Zufallszahl, den sogenannten "Challenge", vom Server und senden den Challenge, der mit dem privaten Schlüssel signiert wurde, zurück an den Server. Dadurch wird dem Server bewiesen, dass ein Benutzer den privaten Schlüssel besitzt, der für die Authentifizierung erforderlich ist, ohne Geheimnisse über das Netzwerk zu offenbaren.

> [!NOTE]
> Der "Challenge" muss ein Datenpuffer mit zufälligen Informationen von mindestens 16 Bytes sein.

### Erstellen eines Schlüsselpaares und Registrieren eines Benutzers

Um zu veranschaulichen, wie der Prozess der Erstellung von Anmeldeinformationen funktioniert, beschreiben wir den typischen Ablauf, der auftritt, wenn ein Benutzer ein Anmeldeinformation bei einer Vertrauenspartei registrieren möchte:

1. Der Server der Vertrauenspartei sendet Benutzerinformationen und Informationen zur Vertrauenspartei zusammen mit dem "Challenge" an die Web-App, die den Registrierungsprozess bearbeitet, über einen geeigneten sicheren Mechanismus (zum Beispiel [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)).

   > [!NOTE]
   > Das Format zum Teilen von Informationen zwischen dem Server der Vertrauenspartei und der Web-App wird von der Anwendung bestimmt.
   > Ein empfohlener Ansatz besteht darin, {{Glossary("JSON_type_representation", "JSON-Typrepräsentations")}}-Objekte für Anmeldeinformationen und Anmeldeoptions auszutauschen.
   > Bequemlichkeitsmethoden wurden in `PublicKeyCredential` erstellt, um von JSON-Darstellungen in die von den Authentifizierungs-APIs benötigte Form konvertieren: [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON).

2. Die Web-App initiiert die Erstellung eines neuen Anmeldeinformations über den Authenticator, im Auftrag der Vertrauenspartei, über einen Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create). Dieser Aufruf erhält eine `publicKey`-Option, die die Gerätefähigkeiten angibt, z. B. ob das Gerät seine eigene Benutzerautentifikation bereitstellt (zum Beispiel mit biometrischen Daten).

   Ein typischer `create()`-Aufruf könnte folgendermaßen aussehen:

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

   Die Parameter des `create()`-Aufrufs werden dem Authenticator übergeben, zusammen mit einem SHA-256-Hash, der signiert wird, um sicherzustellen, dass er nicht manipuliert wurde.

3. Nachdem der Authenticator die Zustimmung des Benutzers erhalten hat, generiert er ein Schlüsselpaar und gibt den öffentlichen Schlüssel und die optional signierte Attestation an die Web-App zurück. Dies wird bereitgestellt, wenn das von `create()` zurückgegebene {{jsxref("Promise")}} erfüllt ist, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekt-Instanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält die Attestationsinformationen).

4. Die Web-App leitet das [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Server der Vertrauenspartei weiter, erneut mit einem geeigneten Mechanismus.

5. Der Server der Vertrauenspartei speichert den öffentlichen Schlüssel zusammen mit der Benutzeridentität, um die Anmeldeinformation für zukünftige Authentifizierungen zu merken. Während dieses Prozesses führt er eine Reihe von Überprüfungen durch, um sicherzustellen, dass die Registrierung vollständig und nicht manipuliert war. Dazu gehören:
   1. Überprüfung, dass der Challenge derselbe ist wie der, der gesendet wurde.
   2. Sicherstellung, dass der Origin der erwartete war.
   3. Validierung, dass die Signatur und die Attestation die richtige Zertifikatskette für das spezifische Modell des Authenticator verwenden, der das Schlüsselpaar ursprünglich generiert hat.

> [!WARNING]
> Attestation bietet einer Vertrauenspartei die Möglichkeit, die Herkunft eines Authenticators zu bestimmen. Vertrauensparteien sollten nicht versuchen, White-Lists von Authenticators zu pflegen.

### Authentifizierung eines Benutzers

Nachdem sich ein Benutzer mit WebAuthn registriert hat, kann er sich mit dem Dienst authentifizieren (einloggen). Der Authentifizierungsablauf sieht dem Registrierungsablauf ähnlich aus, die wesentlichen Unterschiede bestehen darin, dass die Authentifizierung:

1. Keine Benutzer- oder Vertrauenspartei-Informationen erfordert
2. Ein Assertion mit dem zuvor generierten Schlüsselpaar für den Dienst erstellt, anstatt mit dem Schlüsselpaar des Authenticators.

Ein typischer Authentifizierungsablauf sieht wie folgt aus:

1. Die Vertrauenspartei erstellt einen "Challenge" und sendet ihn zusammen mit einer Liste von Vertrauenspartei- und Benutzeranmeldeinformationen an den Benutzeragenten über einen geeigneten sicheren Mechanismus. Sie kann auch angeben, wo nach der Anmeldeinformation gesucht werden soll, z. B. auf einem lokalen integrierten Authenticator, oder auf einem externen über USB, BLE usw.

2. Der Browser bittet den Authenticator, den Challenge über einen Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) zu signieren, dem die Anmeldeinformationen in einer `publicKey`-Option übergeben werden.

   Ein typischer `get()`-Aufruf könnte folgendermaßen aussehen:

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

   Die Parameter des `get()`-Aufrufs werden dem Authenticator übergeben, um die Authentifizierung zu bearbeiten.

3. Wenn der Authenticator eine der gegebenen Anmeldeinformationen enthält und den Challenge erfolgreich signieren kann, gibt er eine signierte Assertion an die Web-App zurück, nachdem er die Zustimmung des Benutzers erhalten hat. Dies wird bereitgestellt, wenn das von `get()` zurückgegebene {{jsxref("Promise")}} erfüllt ist, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekt-Instanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält die Assertion-Informationen).

4. Die Web-App leitet die signierte Assertion an den Server der Vertrauenspartei zur Validierung weiter. Die Validierungsprüfungen umfassen:
   1. Verwendung des öffentlichen Schlüssels, der während der Registrierungsanforderung gespeichert wurde, um die Signatur durch den Authenticator zu validieren.
   2. Sicherstellung, dass der von dem Authenticator signierte Challenge dem Challenge entspricht, der vom Server generiert wurde.
   3. Überprüfung, dass die ID der Vertrauenspartei diejenige ist, die für diesen Dienst erwartet wird.

5. Sobald der Server dies überprüft hat, wird der Authentifizierungsfluss als erfolgreich angesehen.

### Entdeckbare und nicht-entdeckbare Anmeldeinformationen

Die WebAuthn-API unterscheidet zwischen zwei Arten von Public-Key-Anmeldeinformationen:

- _Entdeckbare Anmeldeinformationen_, auch bekannt als _resident keys_

- _Nicht-entdeckbare Anmeldeinformationen_, auch bekannt als _nicht-resident keys_

Bei nicht-entdeckbaren Anmeldeinformationen werden das private Schlüsselmater
ial sowie zusätzliche Informationen wie der Benutzername und die ID der RP außerhalb des Authenticators gespeichert, typischerweise auf dem RP-Server (deshalb werden diese Anmeldeinformationen auch manchmal als _Server-seitige Anmeldeinformationen_ bezeichnet). Um den privaten Schlüssel sicher auf dem Server zu halten, wird er mit einem im Authenticator gespeicherten Hauptschlüssel verschlüsselt und der resultierende Chiffretext wird als die ID der Anmeldeinformation verwendet.

Wenn der Authenticator eine nicht-entdeckbare Anmeldeinformation generiert, dann:

1. Generiert er das Schlüsselpaar, das zur Authentifizierung des Benutzers verwendet wird.
2. Verschlüsselt er den privaten Schlüssel und andere Daten mit einem im Authenticator gespeicherten Hauptschlüssel.
3. Gibt er den resultierenden Chiffretext als neue Anmeldeinformationen-ID an die RP zurück, zusammen mit dem Rest der Anmeldeinformationen, wie dem öffentlichen Schlüssel.

Wenn die RP sich mit einer nicht-entdeckbaren Anmeldeinformation anmelden muss:

1. Gibt die RP die Anmeldeinformationen-ID in den Aufruf [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) ein.
2. Entschlüsselt der Authenticator den Wert der Anmeldeinformationen-ID in den privaten Schlüssel und andere Daten, unter Verwendung des im Authenticator gespeicherten Hauptschlüssels.
3. Verwendet der Authenticator den privaten Schlüssel, um eine Assertion zu signieren.

Bei entdeckbaren Anmeldeinformationen speichert der Authenticator selbst:

- Das private Schlüsselmater
  ial, das zur Erstellung von Assertions verwendet wird.
- Den mit der Anmeldeinformation verknüpften Benutzernamen.
- Die ID der mit der Anmeldeinformation verknüpften RP.

Der Vorteil einer nicht-entdeckbaren Anmeldeinformation besteht darin, dass der Authenticator keine spezifischen Anmeldedaten speichern muss, was bedeutet, dass er theoretisch eine unbegrenzte Anzahl an Anmeldedaten unterstützen könnte.

Der Nachteil besteht darin, dass der Benutzer, um eine nicht-entdeckbare Anmeldeinformation verwenden zu können, zuerst den Benutzernamen angeben muss, mit dem er sich anmelden möchte, was die RP dann verwenden kann, um ein entsprechendes Set von Anmeldeinformations-IDs zu finden, die dem Browser dem Authenticator zur Verfügung stellen kann.

Im Gegensatz dazu kann der Browser mit entdeckbaren Anmeldeinformationen:

- Informationen über alle entdeckbaren Anmeldeinformationen, die mit der RP verknüpft sind, vom Authenticator abrufen.
- Deren zugehörige Benutzernamen dem Benutzer anzeigen.
- Den Benutzer einladen, denjenigen auszuwählen, mit dem er sich anmelden möchte.

Dies ist die Grundlage der [Autofill-UI](#autofill-ui)-Funktion.

Verwenden Sie die Option [`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) in [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions), um zu steuern, ob eine neue Public-Key-Anmeldeinformation entdeckbar oder nicht-entdeckbar ist.

> [!NOTE]
> Beachten Sie, dass [Passkeys](/de/docs/Web/Security/Authentication/Passkeys) definitionsgemäß immer entdeckbare Anmeldeinformationen sein müssen.

### Autofill-UI

Autofill-UI, auch als _bedingte Vermittlung_ bezeichnet, ist eine Funktion, die es Benutzern erleichtert, mit öffentlichen Schlüsselanmeldeinformationen zu arbeiten, insbesondere wenn sie auch Passwörter für die Website haben.

Es wird erwartet, dass Websites, die Passkeys einführen, diese typischerweise zusätzlich zum bestehenden Support für passwortbasierte Authentifizierung hinzufügen, sodass ein Benutzer für eine gegebene Website ein Passwort, einen oder mehrere Passkeys oder beides haben kann. In dieser Situation kann eine Benutzeroberfläche, die sie fragt, mit welcher Methode sie sich anmelden möchten, verwirrend sein: Sie erinnern sich möglicherweise dann nicht mehr daran, welche Methode sie für welches Konto haben. Die Autofill-UI hilft bei diesem Problem, indem sie Benutzer einlädt, sich mit einem Passkey anzumelden, nur wenn ein geeigneter Passkey derzeit verfügbar ist.

Um die Autofill-UI zu aktivieren, enthält die Anmeldeseite der Website ein Formular, das sie zur Anmeldung einlädt. In dem Feld für den Benutzernamen enthält die Website einen [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Wert von "webauthn":

```html
<input type="text" name="username" autocomplete="username webauthn" />
```

Wenn die Seite geladen wird, prüft die Website zunächst, ob bedingte Vermittlung unterstützt wird, und ruft, falls dies der Fall ist, [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) auf. Der Aufruf:

- Übermittelt `"conditional"` als Wert der [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option.
- Lässt die [`allowCredentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials)-Option weg, um anzugeben, dass alle anwendbaren Anmeldeinformationen akzeptabel sind.

```js
const supported = await PublicKeyCredential.isConditionalMediationAvailable();
if (supported) {
  const options = {
    challenge: challengeFromServer,
    rpId: "example.com",
    userVerification: "required",
    // allowCredentials is omitted here
  };

  const assertion = await navigator.credentials.get({
    publicKey: options,
    mediation: "conditional",
  });
}
```

Dies wird warten, bis der Benutzer mit dem Benutzernamen-Feld interagiert.

Wenn und falls der Benutzer mit dem Feld interagiert, wird der Browser alle verfügbaren Authenticators nach öffentlichen Schlüsselanmeldeinformationen fragen, die verwendet werden können, um sich auf dieser Website anzumelden, und die zugehörigen Benutzernamen als Autofill-Optionen für den Benutzer anzeigen, neben allen gespeicherten Passwörtern für das Konto. Wenn der Benutzer eine dieser Optionen auswählt, wird der Browser diese Anmeldeinformation verwenden, um den Benutzer anzumelden.

Dies ermöglicht es einer Website im Wesentlichen, ein einheitliches Autofill anzubieten, das sowohl Passwörter als auch öffentliche Schlüsselanmeldeinformationen für ein einzelnes Konto umfasst.

> [!NOTE]
> Beachten Sie, dass nur [entdeckbare Anmeldeinformationen](#entdeckbare_und_nicht-entdeckbare_anmeldeinformationen) in Anrufen enthalten sind, die bedingte Vermittlung verwenden, weil der Browser anwendbare Anmeldeinformationen anfordern muss, ohne deren Anmeldeinformations-IDs zu kennen.

### Methoden zur Synchronisierung von entdeckbaren Anmeldeinformationen

Es ist möglich, dass die im Authenticator eines Benutzers gespeicherten Informationen über eine entdeckbare Anmeldeinformation nicht mehr mit dem Server der Vertrauenspartei synchron sind. Dies könnte auftreten, wenn der Benutzer eine Anmeldeinformation löscht oder seinen Benutzer-/Anzeigenamen in der RP-Web-App ändert, ohne den Authenticator zu aktualisieren.

Die API bietet Methoden, mit denen der Server der Vertrauenspartei Änderungen an den Authenticator signalisieren kann, damit er seine gespeicherten Anmeldeinformationen aktualisieren kann:

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static): Signalisiert dem Authenticator alle gültigen Anmeldeinformationen-IDs, die der RP-Server noch für einen bestimmten Benutzer hält.
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static): Signalisiert dem Authenticator, dass ein bestimmter Benutzer seinen Benutzer- und/oder Anzeigenamen auf dem RP-Server aktualisiert hat.
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static): Signalisiert dem Authenticator, dass eine Anmeldeinformationen-ID nicht vom RP-Server erkannt wurde.

Es mag so aussehen, als hätten `signalUnknownCredential()` und `signalAllAcceptedCredentials()` ähnliche Zwecke, also in welcher Situation sollte jeder verwendet werden?

- `signalAllAcceptedCredentials()` sollte nach jedem erfolgreichen Login und wenn der Benutzer eingeloggt ist, aufgerufen werden, um den Status ihrer Anmeldedaten zu aktualisieren. Es darf nur aufgerufen werden, wenn ein Benutzer authentifiziert ist, da es die gesamte Liste der `credentialId`s für einen bestimmten Benutzer teilt. Dies würde ein Datenschutzleck verursachen, wenn der Benutzer nicht authentifiziert ist.
- `signalUnknownCredential()` sollte nach einem erfolglosen Login aufgerufen werden, um dem Authenticator zu signalisieren, dass die `credentialId` der ausgewählten Anmeldeinformation nicht validiert werden kann und entfernt werden sollte. Die Methode kann sicher aufgerufen werden, wenn der Benutzer nicht authentifiziert ist, da sie eine einzelne `credentialId` an den Authenticator übergibt — diejenige, mit der der Client gerade versucht hat, sich zu authentifizieren — und keine Benutzerinformationen.

### Arbeitsabläufe nach Client-Fähigkeiten anpassen

Die Anmelde- und Login-Arbeitsabläufe können auf Basis der Fähigkeiten des WebAuthn-Clients (Browser) angepasst werden. Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) kann verwendet werden, um diese Fähigkeiten abzufragen; sie gibt ein Objekt zurück, bei dem jeder Schlüssel sich auf eine WebAuthn-Fähigkeit oder -Erweiterung bezieht, und jeder Wert ist ein Boolean, der die Unterstützung für diese Funktion anzeigt.

Dies kann verwendet werden, um beispielsweise zu überprüfen:

- Client-Unterstützung für verschiedene Authenticators wie Passkeys oder biometrische Benutzerverifizierung.
- Ob der Client [Methoden zur Synchronisierung von Vertrauenspartei- und Authenticator-Anmeldeinformationen unterstützt](#methoden_zur_synchronisierung_von_entdeckbaren_anmeldeinformationen).
- Ob der Client zulässt, dass ein einzelner Passkey auf verschiedenen Websites mit demselben Ursprung verwendet wird.

Der folgende Code zeigt, wie Sie `getClientCapabilities()` verwenden könnten, um zu überprüfen, ob der Client Authenticators unterstützt, die biometrische Benutzerverifizierung bieten.
Beachten Sie, dass die tatsächlich durchgeführten Aktionen von Ihrer Seite abhängen.
Für Websites, die _biometrische Authentifizierung erfordern_, könnten Sie die Login-Benutzeroberfläche durch eine Nachricht ersetzen, die anzeigt, dass biometrische Authentifizierung benötigt wird, und der Benutzer sollte versuchen, einen anderen Browser oder Gerät zu verwenden.

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

Die Verfügbarkeit von WebAuthn kann mittels einer [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden, wobei zwei Direktiven besonders spezifiziert werden:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Steuert die Verfügbarkeit von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der Option `publicKey`.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Steuert die Verfügbarkeit von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der Option `publicKey`.

Beide Direktiven haben einen Standard-Wert für die Allowlist von `"self"`, was bedeutet, dass diese Methoden standardmäßig in den Kontexten von Top-Level-Dokumenten verwendet werden können.
Zudem kann `get()` in geschachtelten Browsing-Kontexten verwendet werden, die vom selben Origin wie das oberste Dokument geladen werden.
`get()` und `create()` können in geschachtelten Browsing-Kontexten verwendet werden, die von anderen Origins als das oberste Dokument geladen werden (d.h. in übergreifenden `<iframes>`), wenn dies von den jeweiligen [`publickey-credentials-get`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-get) und [`publickey-credentials-create`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create) `Permissions-Policy`-Direktiven erlaubt wird.
Für übergreifende `create()`-Aufrufe, wo die Erlaubnis durch [`allow=` in einem iframe](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) erteilt wurde, muss der Frame auch {{Glossary("Transient_activation", "flüchtige Aktivierung")}} haben.

> [!NOTE]
> Wo eine Richtlinie die Verwendung dieser Methoden verbietet, wird das von ihnen zurückgegebene {{jsxref("Promise", "Versprechen", "", 1)}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

### Grundlegende Zugriffskontrolle

Wenn Sie den Zugriff nur auf eine bestimmte Subdomain erlauben möchten, könnten Sie dies so angeben:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Zulassen eingebetteter Aufrufe von `create` und `get()` in einem `<iframe>`

Wenn Sie mit `get()` oder `create()` in einem `<iframe>` authentifizieren möchten, müssen Sie ein paar Schritte befolgen:

1. Die Website, die die Seite der Vertrauenspartei einbettet, muss die Erlaubnis über ein `allow`-Attribut geben:
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

     Das `<iframe>` muss auch eine {{Glossary("Transient_activation", "flüchtige Aktivierung")}} haben, wenn `create()` übergreifend aufgerufen wird.

2. Die Website der Vertrauenspartei muss die oben genannten Zugriffe über einen `Permissions-Policy`-Header erlauben:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   Oder um nur eine bestimmte URL zu erlauben, die Website der Vertrauenspartei in einem `<iframe>` einzubetten:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## Schnittstellen

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)
  - : Bietet einem Dienst einen Nachweis, dass ein Authenticator das nötige Schlüsselpaar hat, um eine Authentifizierungsanfrage erfolgreich zu bearbeiten, die durch einen Aufruf von [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) initiiert wurde. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die erhalten wird, wenn das `get()` {{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)
  - : Das Ergebnis einer WebAuthn-Anmeldeinformationsregistrierung (d.h. eines Aufrufs von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create)). Es enthält Informationen über die Anmeldeinformation, die der Server benötigt, um WebAuthn-Assertions durchzuführen, wie z. B. deren Anmeldeinformations-ID und öffentlicher Schlüssel. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die erhalten wird, wenn das `create()` {{jsxref("Promise")}} erfüllt wird.
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)
  - : Die Basisschnittstelle für [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) und [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
  - : Bietet Informationen zu einem öffentlichen/privaten Schlüsselpaar, das eine Anmeldeinformation für die Anmeldung bei einem Dienst mithilfe eines Asymmetrischen Schlüsselpaares darstellt, das nicht phishable ist und gegen Datenverletzungen resistent ist, anstelle eines Passworts. Erhalten, wenn das {{jsxref("Promise")}}, das durch einen Aufruf von [`create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`get()`](/de/docs/Web/API/CredentialsContainer/get) zurückgegeben wird, erfüllt wird.

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die `publicKey`-Option
  - : Ein Aufruf von `create()` mit einer `publicKey`-Option initiiert die Erstellung neuer asymmetrischer Schlüssel-Anmeldeinformationen über einen Authenticator, wie oben erklärt.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `publicKey`-Option
  - : Ein Aufruf von `get()` mit einer `publicKey`-Option instruiert den Benutzeragenten, ein bestehendes Set von Anmeldeinformationen zu verwenden, um sich bei einer Vertrauenspartei zu authentifizieren.

## Beispiele

### Demo-Websites

- [Mozilla Demo](https://webauthn.bin.coffee/) Website und deren [Quellcode](https://github.com/jcjones/webauthn.bin.coffee).
- [Google Demo](https://try-webauthn.appspot.com/) Website und deren [Quellcode](https://github.com/google/webauthndemo).
- [WebAuthn.io Demo](https://webauthn.io/) Website und deren [Quellcode](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) und deren [Client-Quellcode](https://github.com/webauthn-open-source/webauthn-simple-app) und [Server-Quellcode](https://github.com/webauthn-open-source/fido2-lib)

### Verwendungsbeispiel

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
