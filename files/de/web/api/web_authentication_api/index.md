---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: a060aa315813bd1e69e4a43d7aed241f649e7e0d
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Die Web Authentication API (WebAuthn) ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), die starke Authentifizierung mit öffentlicher Schlüsselkryptografie ermöglicht, was passwortlose Authentifizierung und sichere {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} (MFA) ohne SMS-Nachrichten ermöglicht.

Im Web werden [Passkeys](/de/docs/Web/Security/Authentication/Passkeys) mithilfe der Web Authentication API implementiert.

## WebAuthn-Konzepte und Nutzung

WebAuthn verwendet [asymmetrische (Public-Key-) Kryptografie](https://en.wikipedia.org/wiki/Public-key_cryptography) anstelle von Passwörtern oder SMS-Nachrichten für die Registrierung, Authentifizierung und {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} mit Websites. Dies bietet einige Vorteile:

- **Schutz vor Phishing:** Ein Angreifer, der eine gefälschte Login-Website erstellt, kann sich nicht als der Benutzer einloggen, da sich die Signatur mit dem {{Glossary("Origin", "Ursprung")}} der Website ändert.
- **Reduzierte Auswirkungen von Datenverletzungen:** Entwickler müssen den öffentlichen Schlüssel nicht hashen, und wenn ein Angreifer Zugang zum zur Authentifizierung verwendeten öffentlichen Schlüssel erhält, kann er sich nicht authentifizieren, da er den privaten Schlüssel benötigt.
- **Unverwundbar gegenüber Passwortangriffen:** Einige Benutzer könnten Passwörter wiederverwenden, und ein Angreifer könnte das Passwort des Benutzers für eine andere Website erlangen (z. B. durch eine Datenverletzung). Außerdem sind Textpasswörter viel einfacher durch Ausprobieren zu knacken als eine digitale Signatur.

Viele Websites haben bereits Seiten, die es Benutzern ermöglichen, neue Konten zu registrieren oder sich in ein bestehendes Konto einzuloggen, und WebAuthn dient als Ersatz oder Erweiterung für den Authentifizierungsteil des Systems. Es erweitert die [Credential Management API](/de/docs/Web/API/Credential_Management_API), indem es die Kommunikation zwischen dem Benutzeragenten und einem Authenticator abstrahiert und folgende neue Funktionen bereitstellt:

- Wenn [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option verwendet wird, erstellt der Benutzeragent neue Anmeldedaten über einen Authenticator — entweder zur Registrierung eines neuen Kontos oder zur Verknüpfung eines neuen asymmetrischen Schlüsselpaares mit einem bestehenden Konto.
  - Bei der Registrierung eines neuen Kontos werden diese Anmeldedaten auf einem Server gespeichert (auch als Dienst oder [Vertrauenspartei](https://en.wikipedia.org/wiki/Relying_party) bezeichnet) und können anschließend verwendet werden, um einen Benutzer einzuloggen.
  - Das asymmetrische Schlüsselpaar wird im Authenticator gespeichert, das dann zur Authentifizierung eines Benutzers bei einer Vertrauenspartei verwendet werden kann, beispielsweise während der MFA. Der Authenticator kann im Benutzeragenten, in einem Betriebssystem wie Windows Hello eingebettet sein oder ein physischer Token wie ein USB- oder Bluetooth-Sicherheitsschlüssel sein.
- Wenn [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option verwendet wird, verwendet der Benutzeragent ein vorhandenes Satz von Anmeldedaten, um sich bei einer Vertrauenspartei zu authentifizieren (entweder als primärer Login oder zur Bereitstellung eines zusätzlichen Faktors während der MFA wie oben beschrieben).

In ihrer grundlegendsten Form empfangen sowohl `create()` als auch `get()` eine sehr große Zufallszahl, die als "Challenge" bezeichnet wird, vom Server und geben die vom privaten Schlüssel signierte Challenge zurück an den Server. Dies beweist dem Server, dass ein Benutzer den privaten Schlüssel besitzt, der zur Authentifizierung erforderlich ist, ohne Geheimnisse über das Netzwerk offenzulegen.

> [!NOTE]
> Die "Challenge" muss ein Puffer von mindestens 16 Bytes zufälligen Informationsgehalts sein.

### Erstellung eines Schlüsselpaares und Registrierung eines Benutzers

Um zu veranschaulichen, wie der Anmeldeerstellungsprozess funktioniert, beschreiben wir den typischen Ablauf, der auftritt, wenn ein Benutzer ein Anmeldedatum bei einer Vertrauenspartei registrieren möchte:

1. Der Server der Vertrauenspartei sendet Benutzer- und Vertrauensparteiinformationen an die Web-App, die den Registrierungsprozess verwaltet, zusammen mit der "Challenge" unter Verwendung eines geeigneten sicheren Mechanismus (zum Beispiel [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)).

   > [!NOTE]
   > Das Format zum Teilen von Informationen zwischen dem Server der Vertrauenspartei und der Web-App ist der Anwendung überlassen.
   > Ein empfohlener Ansatz ist der Austausch von {{Glossary("JSON_type_representation", "JSON Type Representation")}}-Objekten für Anmeldeinformationen und Anmeldeoptionsobjekte.
   > Praktische Methoden wurden in `PublicKeyCredential` erstellt, um von JSON-Darstellungen zu der für die Authentifizierungs-APIs erforderlichen Form zu konvertieren: [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON).

2. Die Web-App leitet die Generierung eines neuen Anmeldecredentials über den Authenticator im Namen der Vertrauenspartei durch einen [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufruf ein. Dieser Aufruf erhält eine `publicKey`-Option, die Geräteeigenschaften angibt, z. B. ob das Gerät eine eigene Benutzerauthentifizierung bietet (zum Beispiel mit Biometrie).

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

   Die Parameter des `create()`-Aufrufs werden an den Authenticator übergeben, zusammen mit einem SHA-256-Hash, der signiert wird, um sicherzustellen, dass er nicht manipuliert wird.

3. Nachdem der Authenticator das Einverständnis des Benutzers eingeholt hat, generiert er ein Schlüsselpaar und stellt den öffentlichen Schlüssel und eine optional signierte Bestätigung der Web-App zur Verfügung. Dies wird bereitgestellt, wenn das {{jsxref("Promise")}}, das vom `create()`-Aufruf zurückgegeben wird, erfüllt ist, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Bestätigungsinformationen).

4. Die Web-App leitet das [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Server der Vertrauenspartei weiter, erneut über einen geeigneten Mechanismus.

5. Der Server der Vertrauenspartei speichert den öffentlichen Schlüssel zusammen mit der Benutzeridentität, um das Anmeldedatum für zukünftige Authentifizierungen zu merken. Während dieses Prozesses führt er eine Reihe von Überprüfungen durch, um sicherzustellen, dass die Registrierung vollständig und nicht manipuliert wurde. Diese beinhalten:
   1. Überprüfung, dass die Challenge dieselbe wie die gesendete Challenge ist.
   2. Sicherstellung, dass der Ursprung der erwartete Ursprung war.
   3. Validierung, dass die Signatur und die Bestätigung die richtige Zertifikatskette für das spezifische Modell des Authenticators verwenden, das das Schlüsselpaar ursprünglich generiert hat.

> [!WARNING]
> Die Bestätigung bietet eine Möglichkeit für eine Vertrauenspartei, die Herkunft eines Authenticators zu bestimmen. Vertrauensparteien sollten nicht versuchen, Whitelists von Authenticators zu pflegen.

### Authentifizierung eines Benutzers

Nachdem ein Benutzer sich mit WebAuthn registriert hat, kann er sich mit dem Dienst authentifizieren (einloggen). Der Authentifizierungsablauf sieht ähnlich aus wie der Registrierungsablauf, wobei die Hauptunterschiede darin bestehen, dass die Authentifizierung:

1. Keine Benutzer- oder Vertrauensparteiinformationen erfordert
2. Eine Behauptung mit dem zuvor für den Dienst generierten Schlüsselpaar erstellt, statt mit dem Schlüsselpaar des Authenticators.

Ein typischer Authentifizierungsablauf ist folgendermassen:

1. Die Vertrauenspartei generiert eine "Challenge" und sendet sie an den Benutzeragenten mit einem geeigneten sicheren Mechanismus, zusammen mit einer Liste von Vertrauenspartei- und Benutzeranmeldeinformationen. Sie kann auch angeben, wo die Anmeldeinformation gesucht werden soll, z. B. auf einem integrierten lokalen Authenticator oder einem externen über USB, BLE usw.

2. Der Browser fordert den Authenticator auf, die Challenge durch einen [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf zu signieren, bei dem die Anmeldeinformationen in einer `publicKey`-Option übergeben werden.

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

   Die Parameter des `get()`-Aufrufs werden an den Authenticator übergeben, um die Authentifizierung durchzuführen.

3. Wenn der Authenticator eine der angegebenen Anmeldeinformationen enthält und erfolgreich die Challenge signieren kann, gibt er nach Erhalt der Zustimmung des Benutzers eine signierte Behauptung an die Web-App zurück. Dies wird bereitgestellt, wenn das {{jsxref("Promise")}}, das vom `get()`-Aufruf zurückgegeben wird, erfüllt ist, in Form eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz (die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält die Behauptungsinformationen).

4. Die Web-App leitet die signierte Behauptung an den Server der Vertrauenspartei zur Validierung weiter. Die Validierungsprüfungen beinhalten:
   1. Verwendung des während der Registrierungsanfrage gespeicherten öffentlichen Schlüssels zur Validierung der Signatur durch den Authenticator.
   2. Sicherstellung, dass die vom Authenticator signierte Challenge der vom Server generierten Challenge entspricht.
   3. Überprüfung, dass die Relying Party ID die für diesen Dienst erwartete ist.

5. Sobald die Überprüfung durch den Server erfolgt ist, gilt der Authentifizierungsablauf als erfolgreich.

### Entdeckbare und nicht entdeckbare Anmeldedaten

Die WebAuthn API unterscheidet zwischen zwei Arten von Public-Key-Anmeldedaten:

- _Entdeckbare Anmeldedaten_, auch bekannt als _residente Schlüssel_

- _Nicht entdeckbare Anmeldedaten_, auch bekannt als _nicht-residente Schlüssel_

Bei nicht entdeckbaren Anmeldedaten werden die privaten Schlüsseldaten sowie zusätzliche Informationen wie der Benutzername und die ID der Vertrauenspartei außerhalb des Authenticators gespeichert, typischerweise auf dem Server der Vertrauenspartei (weshalb diese Anmeldedaten auch manchmal als _server-seitige Anmeldedaten_ bezeichnet werden). Um den privaten Schlüssel auf dem Server sicher zu halten, wird er mit einem im Authenticator gespeicherten Hauptschlüssel verschlüsselt, und der resultierende Chiffretext wird als Anmelde-ID verwendet.

Wenn der Authenticator eine nicht entdeckbare Anmeldedatum generiert, dann:

1. Generiert er das Schlüsselpaar, das zur Benutzerauthentifizierung verwendet wird.
2. Verschlüsselt er den privaten Schlüssel und andere Daten mit einem im Authenticator gespeicherten Hauptschlüssel.
3. Gibt er den resultierenden Chiffretext an die Vertrauenspartei als Anmeldedatum-ID zurück, zusammen mit dem Rest der Anmeldedaten, z. B. dem öffentlichen Schlüssel.

Wenn die Vertrauenspartei sich mit einer nicht entdeckbaren Anmeldedatum anmelden muss:

1. Übermittelt die Vertrauenspartei die Anmelde-ID im [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf
2. Entschlüsselt der Authenticator den Wert der Anmelde-ID in den privaten Schlüssel und andere Daten, unter Verwendung des im Authenticator gespeicherten Hauptschlüssels.
3. Verwendet der Authenticator den privaten Schlüssel, um eine Behauptung zu signieren.

Bei entdeckbaren Anmeldedaten speichert der Authenticator selbst:

- Die für die Erstellung von Behauptungen verwendeten privaten Schlüsseldaten.
- Den mit der Anmeldedatum verbundenen Benutzernamen.
- Die der Anmeldedatum zugeordnete ID der Vertrauenspartei.

Der Vorteil einer nicht entdeckbaren Anmeldedatum ist, dass der Authenticator keine anmeldespezifischen Daten speichern muss, was bedeutet, dass er eine im Wesentlichen unendlich große Anzahl von Anmeldedaten unterstützen könnte.

Der Nachteil ist, dass zum Verwenden einer nicht entdeckbaren Anmeldedatum der Benutzer zuerst den Benutzernamen angeben muss, unter dem er sich anmelden möchte, den die Vertrauenspartei dann verwenden kann, um eine Reihe zugehöriger Anmelde-ID-Werte zu finden, die der Browser dem Authenticator zur Verfügung stellen kann.

Im Gegensatz dazu kann der Browser bei entdeckbaren Anmeldedaten:

- Vom Authenticator die Informationen über alle entdeckbaren Anmeldedaten abrufen, die der Vertrauenspartei zugeordnet sind.
- Die zugehörigen Benutzernamen dem Benutzer anzeigen.
- Den Benutzer einladen, denjenigen auszuwählen, mit dem er sich anmelden möchte.

Dies ist die Grundlage der [Autofill-UI](autofill_ui)-Funktion.

Verwenden Sie die [`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey)-Option in [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions), um zu steuern, ob eine neue Public-Key-Anmeldedatum entdeckbar oder nicht entdeckbar sein wird.

> [!NOTE]
> Beachten Sie, dass [Passkeys](/de/docs/Web/Security/Authentication/Passkeys) definitionsgemäß immer entdeckbare Anmeldedaten sein müssen.

### Autofill-UI

Die Autofill-UI, auch manchmal als _conditional mediation_ bezeichnet, ist eine Funktion, die es Benutzern erleichtert, mit Public-Key-Anmeldedaten zu arbeiten, insbesondere wenn sie auch Passwörter für die Website haben.

Es wird erwartet, dass Websites, die Passkeys übernehmen, diese typischerweise neben der bestehenden Unterstützung für passwortbasierte Authentifizierung hinzufügen, sodass ein Benutzer für eine bestimmte Website ein Passwort, einen oder mehrere Passkeys oder beides haben könnte. In dieser Situation kann eine Benutzeroberfläche, die den Benutzer fragt, mit welcher Methode er sich anmelden möchte, verwirrend sein: Der Benutzer erinnert sich möglicherweise nicht daran, welche Methode er für welchen Account hat. Die Autofill-UI hilft bei diesem Problem, indem sie Benutzer einlädt, sich mit einem Passkey anzumelden, nur wenn ein geeigneter Passkey derzeit verfügbar ist.

Um die Autofill-UI zu aktivieren, enthält die Anmeldeseite der Website ein Formular, das den Benutzer einlädt, sich anzumelden. Im Feld für den Benutzernamen enthält die Website einen [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Wert von "webauthn":

```html
<input type="text" name="username" autocomplete="username webauthn" />
```

Wenn die Seite lädt, überprüft die Website zuerst, ob conditional mediation unterstützt wird, und falls ja, macht sie einen Aufruf zu [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get). Der Aufruf:

- Übergibt `"conditional"` als Wert der [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation)-Option.
- Lässt die [`allowCredentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials)-Option weg, um anzugeben, dass alle anwendbaren Anmeldedaten akzeptabel sind.

```js
const supported = await PublicKeyCredential.isConditionalMediationAvailable();
if (supported) {
  const options = {
    challenge: challengeFromServer,
    rpId: "example.com",
    userVerification: "required",
    // allowcredentials is omitted here
  };

  const assertion = await navigator.credentials.get({
    publicKey: options,
    mediation: "conditional",
  });
}
```

Dies wird so lange warten, bis der Benutzer mit dem Benutzernamensfeld interagiert.

Wenn und wenn der Benutzer mit dem Feld interagiert, fragt der Browser alle verfügbaren Authenticatoren nach Public-Key-Anmeldedaten, die zum Einloggen auf dieser Website verwendet werden können, und zeigt die zugehörigen Benutzernamen als Autofill-Optionen für den Benutzer an, zusammen mit gespeicherten Passwörtern für den Account. Wenn der Benutzer eine dieser Optionen auswählt, verwendet der Browser diese Anmeldedatum, um den Benutzer einzuloggen.

Dies ermöglicht es einer Website im Wesentlichen, eine einheitliche Autofill bereitzustellen, die sowohl Passwörter als auch Public-Key-Anmeldedaten für einen einzelnen Account enthält.

> [!NOTE]
> Beachten Sie, dass nur [entdeckbare Anmeldedaten](#entdeckbare_und_nicht_entdeckbare_anmeldedaten) in Aufrufe einbezogen werden, die conditional mediation verwenden, da der Browser anwendbare Anmeldedaten anfordern muss, ohne die Anmelde-ID-Werte für sie zu kennen.

### Synchronisationsmethoden für entdeckbare Anmeldedaten

Es ist möglich, dass die Informationen, die auf einem Authenticator eines Benutzers über eine entdeckbare Anmeldedatum gespeichert sind, nicht synchron mit dem Server der Vertrauenspartei sind. Dies könnte passieren, wenn der Benutzer eine Anmeldedatum löscht oder seinen Benutzer-/Anzeigenamen in der Web-App der Vertrauenspartei ändert, ohne den Authenticator zu aktualisieren.

Die API bietet Methoden, damit der Server der Vertrauenspartei Änderungen an den Authenticator signalisieren kann, sodass dieser seine gespeicherten Anmeldedaten aktualisieren kann:

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static): Signalisiert dem Authenticator alle gültigen Anmelde-ID-S, die der Server der Vertrauenspartei für einen bestimmten Benutzer noch hält.
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static): Signalisiert dem Authenticator, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeigenamen auf dem Server der Vertrauenspartei aktualisiert hat.
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static): Signalisiert dem Authenticator, dass eine Anmelde-ID vom Server der Vertrauenspartei nicht erkannt wurde.

Es scheint, dass `signalUnknownCredential()` und `signalAllAcceptedCredentials()` ähnliche Zwecke erfüllen, also welche Situation sollte jede davon verwendet werden?

- `signalAllAcceptedCredentials()` sollte nach jedem erfolgreichen Login und wenn der Benutzer eingeloggt ist und der Zustand seiner Anmeldedaten aktualisiert werden soll, aufgerufen werden. Es muss nur aufgerufen werden, wenn ein Benutzer authentifiziert ist, da die gesamte Liste der `credentialId`s für einen bestimmten Benutzer geteilt wird. Dies würde einen Datenschutzverstoß verursachen, wenn der Benutzer nicht authentifiziert ist.
- `signalUnknownCredential()` sollte nach einem fehlgeschlagenen Login aufgerufen werden, um dem Authenticator zu signalisieren, dass die `credentialId` der ausgewählten Anmeldedatum nicht validiert werden kann und entfernt werden sollte. Die Methode kann sicher aufgerufen werden, wenn der Benutzer nicht authentifiziert ist, da sie eine einzelne `credentialId` an den Authenticator übermittelt — diejenige, mit der sich der Client gerade versucht hat zu authentifizieren — und keine Benutzerinformationen.

### Anpassung von Workflows basierend auf Clientfähigkeiten

Die Registrierungs- und Login-Workflows können basierend auf den Fähigkeiten des WebAuthn-Clients (Browsers) angepasst werden. Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) kann verwendet werden, um diese Fähigkeiten abzufragen; sie gibt ein Objekt zurück, bei dem jeder Schlüssel sich auf eine WebAuthn-Fähigkeit oder -Erweiterung bezieht und jeder Wert ein boolean ist, der die Unterstützung für diese Funktion angibt.

Dies kann z.B. verwendet werden, um zu überprüfen:

- Client-Unterstützung für verschiedene Authenticatoren wie Passkeys oder biometrische Benutzerauthentifizierung.
- Ob der Client [Methoden zur Synchronisierung von Vertrauenspartei und Authenticator-Anmeldedaten unterstützt](#synchronisationsmethoden_für_entdeckbare_anmeldedaten).
- Ob der Client es erlaubt, einen einzelnen Passkey auf verschiedenen Websites mit demselben Ursprung zu verwenden.

Der folgende Code zeigt, wie Sie `getClientCapabilities()` verwenden könnten, um zu überprüfen, ob der Client Authenticatoren unterstützt, die eine biometrische Benutzerauthentifizierung bieten.
Beachten Sie, dass die tatsächlichen Aktionen von Ihrer Website abhängen.
Für Websites, die _biometrische Authentifizierung erfordern_, könnten Sie die Login-Benutzeroberfläche mit einer Nachricht ersetzen, die angibt, dass biometrische Authentifizierung erforderlich ist und der Benutzer einen anderen Browser oder ein anderes Gerät ausprobieren sollte.

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

## Zugriffskontrolle der API

Die Verfügbarkeit von WebAuthn kann mit einer [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden, wobei zwei Direktiven im Besonderen spezifiziert werden:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Steuert die Verfügbarkeit von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Steuert die Verfügbarkeit von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der `publicKey`-Option.

Beide Direktiven haben einen Standard-Wert von `"self"` in der Allowlist, was bedeutet, dass diese Methoden standardmäßig in Top-Level-Dokumentkontexten verwendet werden können.
Darüber hinaus kann `get()` in verschachtelten Browsing-Kontexten verwendet werden, die vom selben Ursprung wie das oberste Dokument geladen wurden.
`get()` und `create()` können in verschachtelten Browsing-Kontexten verwendet werden, die von verschiedenen Ursprüngen als das oberste Dokument geladen wurden (d.h. in Cross-Origin `<iframes>`), wenn dies durch die [`publickey-credentials-get`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-get) und [`publickey-credentials-create`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create) `Permissions-Policy`-Direktiven erlaubt ist.
Für Cross-Origin `create()`-Aufrufe, bei denen die Berechtigung durch [`allow=` auf einem iframe](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) erteilt wurde, muss das Frame auch {{Glossary("Transient_activation", "Transiente Aktivierung")}} haben.

> [!NOTE]
> Wo eine Richtlinie die Verwendung dieser Methoden verbietet, wird das von ihnen zurückgegebene {{jsxref("Promise", "promises", "", 1)}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

### Grundlegende Zugriffskontrolle

Wenn Sie den Zugriff nur einem bestimmten Subdomain erlauben möchten, könnten Sie ihn so angeben:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Erlauben von eingebetteten `create`- und `get()`-Aufrufen in einem `<iframe>`

Wenn Sie sich in einem `<iframe>` mit `get()` oder `create()` authentifizieren möchten, gibt es einige Schritte zu befolgen:

1. Die Site, die die Site der Vertrauenspartei einbettet, muss die Berechtigung über ein `allow`-Attribut erteilen:
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

     Das `<iframe>` muss auch {{Glossary("Transient_activation", "Transiente Aktivierung")}} haben, wenn `create()` Cross-Origin aufgerufen wird.

2. Die Site der Vertrauenspartei muss für den obigen Zugriff eine Berechtigung über einen `Permissions-Policy`-Header bereitstellen:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   Oder um nur einer bestimmten URL zu erlauben, die Site der Vertrauenspartei in einem `<iframe>` einzubetten:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## Schnittstellen

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)
  - : Liefert einem Dienst den Nachweis, dass ein Authenticator das benötigte Schlüsselpaar hat, um erfolgreich mit einer durch den Aufruf von [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) initiierten Authentifizierungsanfrage umzugehen. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die erhalten wird, wenn das `get()` {{jsxref("Promise")}} erfüllt ist.
- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)
  - : Das Ergebnis einer WebAuthn-Anmeldedatum-Registrierung (d.h. eines [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufrufs). Es enthält Informationen über das Anmeldedatum, die der Server benötigt, um WebAuthn-Behauptungen auszuführen, wie seine Anmelde-ID und seinen öffentlichen Schlüssel. Verfügbar in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die erhalten wird, wenn das `create()` {{jsxref("Promise")}} erfüllt ist.
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)
  - : Die Basisschnittstelle für [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) und [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
  - : Stellt Informationen über ein öffentliches/privates Schlüsselpaar bereit, das ein Anmeldedatum zum Einloggen in einen Dienst mit einem unschädlichen und datendiebstahlsicheren asymmetrischen Schlüsselpaar anstelle eines Passworts ist. Erhalten wird dies, wenn das {{jsxref("Promise")}} über einen [`create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf erfüllt ist.

## Erweiterungen anderer Schnittstellen

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die `publicKey`-Option
  - : Ein Aufruf von `create()` mit einer `publicKey`-Option initiiert die Erstellung neuer asymmetrischer Schlüssel-Anmeldedaten über einen Authenticator, wie oben beschrieben.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `publicKey`-Option
  - : Ein Aufruf von `get()` mit einer `publicKey`-Option weist den Benutzeragenten an, ein vorhandenes Satz von Anmeldedaten zu verwenden, um sich bei einer Vertrauenspartei zu authentifizieren.

## Beispiele

### Demo-Websites

- [Mozilla Demo](https://webauthn.bin.coffee/) Website und ihr [Quellcode](https://github.com/jcjones/webauthn.bin.coffee).
- [Google Demo](https://try-webauthn.appspot.com/) Website und ihr [Quellcode](https://github.com/google/webauthndemo).
- [WebAuthn.io Demo](https://webauthn.io/) Website und ihr [Quellcode](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) und sein [Client-Quellcode](https://github.com/webauthn-open-source/webauthn-simple-app) sowie [Server-Quellcode](https://github.com/webauthn-open-source/fido2-lib)

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
