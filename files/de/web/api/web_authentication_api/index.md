---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
l10n:
  sourceCommit: fc8ab6bcb82917a1a42fb95c2b3dd27a7f1b4807
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Die Web Authentication API (WebAuthn) ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API). Sie ermöglicht eine starke Authentifizierung mit Public-Key-Kryptografie und damit eine passwortlose Authentifizierung sowie eine sichere {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} (MFA) ohne SMS-Nachrichten.

Im Web werden [Passkeys](/de/docs/Web/Security/Authentication/Passkeys) mithilfe der Web Authentication API implementiert.

## WebAuthn-Konzepte und Verwendung

WebAuthn verwendet [asymmetrische Kryptografie (Public-Key-Kryptografie)](https://en.wikipedia.org/wiki/Public-key_cryptography) anstelle von Passwörtern oder SMS-Nachrichten für die Registrierung und Authentifizierung bei Websites sowie für die {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}}. Das bietet einige Vorteile:

- **Schutz vor Phishing:** Ein Angreifer, der eine gefälschte Anmeldewebsite erstellt, kann sich nicht als Benutzer anmelden, da die Signatur vom {{Glossary("Origin", "Ursprung")}} der Website abhängt.
- **Geringere Auswirkungen von Datenlecks:** Entwickler müssen den öffentlichen Schlüssel nicht hashen. Selbst wenn ein Angreifer Zugriff auf den öffentlichen Schlüssel erhält, mit dem die Authentifizierung überprüft wird, kann er sich damit nicht authentifizieren, da er den privaten Schlüssel benötigt.
- **Unempfindlichkeit gegenüber Passwortangriffen:** Manche Benutzer verwenden Passwörter mehrfach, und ein Angreifer könnte das Passwort eines Benutzers für eine andere Website erlangen, beispielsweise durch ein Datenleck. Außerdem lassen sich Textpasswörter durch Ausprobieren wesentlich leichter knacken als digitale Signaturen.

Viele Websites verfügen bereits über Seiten, auf denen Benutzer neue Konten registrieren oder sich bei bestehenden Konten anmelden können. WebAuthn ersetzt oder ergänzt den Authentifizierungsteil eines solchen Systems. Es erweitert die [Credential Management API](/de/docs/Web/API/Credential_Management_API), abstrahiert die Kommunikation zwischen dem User Agent und einem Authenticator und bietet die folgenden neuen Funktionen:

- Wird [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der Option `publicKey` verwendet, erstellt der User Agent über einen Authenticator neue Anmeldedaten – entweder zur Registrierung eines neuen Kontos oder um einem bestehenden Konto ein neues asymmetrisches Schlüsselpaar zuzuordnen.
  - Bei der Registrierung eines neuen Kontos werden diese Anmeldedaten auf einem Server gespeichert, der auch als Dienst oder [Relying Party](https://en.wikipedia.org/wiki/Relying_party) bezeichnet wird. Anschließend können sie zur Anmeldung eines Benutzers verwendet werden.
  - Das asymmetrische Schlüsselpaar wird im Authenticator gespeichert. Damit kann ein Benutzer bei einer Relying Party authentifiziert werden, beispielsweise im Rahmen einer MFA. Der Authenticator kann in den User Agent oder ein Betriebssystem integriert sein, etwa bei Windows Hello. Er kann auch ein physisches Gerät sein, beispielsweise ein USB- oder Bluetooth-Sicherheitsschlüssel.
- Wird [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der Option `publicKey` verwendet, nutzt der User Agent vorhandene Anmeldedaten, um sich bei einer Relying Party zu authentifizieren – entweder für die primäre Anmeldung oder als zusätzlichen Faktor bei der oben beschriebenen MFA.

In ihrer einfachsten Form erhalten sowohl `create()` als auch `get()` vom Server eine sehr große Zufallszahl, die als „Challenge“ bezeichnet wird. Sie geben die mit dem privaten Schlüssel signierte Challenge an den Server zurück. So wird dem Server nachgewiesen, dass ein Benutzer über den für die Authentifizierung erforderlichen privaten Schlüssel verfügt, ohne Geheimnisse über das Netzwerk preiszugeben.

> [!NOTE]
> Die „Challenge“ muss ein Puffer mit zufälligen Daten von mindestens 16 Byte sein.

### Ein Schlüsselpaar erstellen und einen Benutzer registrieren

Der typische Ablauf bei der Registrierung von Anmeldedaten eines Benutzers bei einer Relying Party veranschaulicht, wie die Erstellung der Anmeldedaten funktioniert:

1. Der Server der Relying Party sendet Benutzer- und Relying-Party-Informationen sowie die „Challenge“ über einen geeigneten sicheren Mechanismus, beispielsweise [Fetch](/de/docs/Web/API/Fetch_API) oder [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest), an die Web-App, die den Registrierungsprozess verarbeitet.

   > [!NOTE]
   > Das Format für den Informationsaustausch zwischen dem Server der Relying Party und der Web-App wird von der Anwendung festgelegt.
   > Es wird empfohlen, Objekte in {{Glossary("JSON_type_representation", "JSON-Typrepräsentation")}} für Anmeldedaten und deren Optionen auszutauschen.
   > `PublicKeyCredential` bietet Hilfsmethoden, um JSON-Repräsentationen in das von den Authentifizierungs-APIs benötigte Format umzuwandeln: [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON).

2. Die Web-App veranlasst im Auftrag der Relying Party über einen Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create), dass der Authenticator neue Anmeldedaten erstellt. Dem Aufruf wird eine Option `publicKey` übergeben, die Gerätefähigkeiten festlegt, etwa ob das Gerät eine eigene Benutzerauthentifizierung bietet, beispielsweise mittels Biometrie.

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

   Die Parameter des `create()`-Aufrufs werden zusammen mit einem SHA-256-Hash an den Authenticator übergeben. Der Hash wird signiert, um Manipulationen zu verhindern.

3. Nachdem der Authenticator die Zustimmung des Benutzers eingeholt hat, erzeugt er ein Schlüsselpaar und gibt den öffentlichen Schlüssel sowie gegebenenfalls eine signierte Attestation an die Web-App zurück. Diese Daten werden bereitgestellt, wenn das vom `create()`-Aufruf zurückgegebene {{jsxref("Promise")}} erfüllt wird, und zwar als Instanz eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts. Die Eigenschaft [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) enthält die Attestation-Informationen.

4. Die Web-App leitet das [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) wiederum über einen geeigneten Mechanismus an den Server der Relying Party weiter.

5. Der Server der Relying Party speichert den öffentlichen Schlüssel zusammen mit der Benutzeridentität, damit die Anmeldedaten für spätere Authentifizierungen verfügbar sind. Dabei führt er eine Reihe von Prüfungen durch, um sicherzustellen, dass die Registrierung vollständig und nicht manipuliert wurde. Dazu gehören:
   1. Die Überprüfung, ob die Challenge mit der gesendeten Challenge übereinstimmt.
   2. Die Überprüfung, ob der Ursprung dem erwarteten Ursprung entspricht.
   3. Die Überprüfung, ob für die Signatur und die Attestation die korrekte Zertifikatskette für das jeweilige Modell des Authenticators verwendet wurde, mit dem das Schlüsselpaar ursprünglich erzeugt wurde.

> [!WARNING]
> Mit einer Attestation kann eine Relying Party die Herkunft eines Authenticators feststellen. Relying Parties sollten nicht versuchen, Zulassungslisten für Authenticators zu pflegen.

#### Bedingte Erstellung

Viele Websites, die Passkeys einführen möchten, haben bereits Benutzer, die Passwörter verwenden. Sie könnten diese Benutzer fragen, ob sie zusätzlich zu ihrem bestehenden Passwort einen Passkey erstellen möchten. Für Benutzer, die sich gerade anmelden und die Website nutzen möchten, kann eine solche Aufforderung jedoch eine unerwünschte Unterbrechung sein.

Mit der _bedingten Erstellung_ kann eine Website unter bestimmten Voraussetzungen einen neuen Passkey für das Konto eines Benutzers erstellen, ohne dass der Benutzer dafür eingreifen muss.

Um eine bedingte Erstellung anzufordern, ruft eine Website [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) auf, um neue Public-Key-Anmeldedaten zu erstellen, und setzt dabei die Option [`mediation`](/de/docs/Web/API/CredentialsContainer/create#mediation) auf `"conditional"`.

- Sind die Voraussetzungen erfüllt, erstellt der Browser neue Public-Key-Anmeldedaten, ohne den Benutzer zu fragen. Bei Erfolg kann der Browser den Benutzer über ein nicht modales UI-Element darüber informieren, dass die Anmeldedaten erstellt wurden.

- Sind die Voraussetzungen nicht erfüllt, wird der `create()`-Aufruf mit einem Fehler zurückgewiesen, den die Website abfangen und ignorieren kann.

Die Spezifikation lässt Browsern einen gewissen Spielraum bei der Entscheidung, ob die Voraussetzungen erfüllt sind. In der Regel ist die bedingte Erstellung jedoch zulässig, wenn der Benutzer bereits Anmeldedaten, beispielsweise ein Passwort, im Anmeldedatenmanager gespeichert und diese kürzlich zur Anmeldung bei der Website verwendet hat.

Der Grund dafür ist: Wenn der Benutzer dem Anmeldedatenmanager bereits die Verwaltung der Sicherheit seines Kontos anvertraut, kann er ihm auch die Erstellung eines neuen Passkeys anvertrauen.

Daher sollte eine Website die bedingte Erstellung unmittelbar nach einer erfolgreichen Anmeldung mit einem im Anmeldedatenmanager gespeicherten Passwort versuchen.

Beachten Sie Folgendes:

- Vor dem Versuch einer bedingten Erstellung muss eine Website alle laufenden WebAuthn-Aufrufe von `create()` oder `get()` abbrechen. Dies gilt insbesondere für das [bedingte Abrufen](#autofill-benutzeroberfläche), da solche Aufrufe warten, bis ihre Voraussetzungen erfüllt sind.
- Die bedingte Erstellung ist in einem Cross-Origin-iframe nicht zulässig: Der Aufruf wird mit einer `NotAllowedError`-Ausnahme zurückgewiesen.
- Im vom `create()`-Aufruf zurückgegebenen Objekt [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) ist das User-Presence-Flag (UP) der [Authenticator-Daten](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject#authdata) immer auf `false` gesetzt. Bei einer bedingten Erstellung sollte der Server daher nicht verlangen, dass dieses Flag gesetzt ist.

Das folgende Codebeispiel zeigt, wie eine Website die bedingte Erstellung verwenden könnte:

```js
async function signInWithConditionalCreate() {
  const accountDetails = await signIn();
  try {
    conditionalCreate(accountDetails);
  } catch (e) {
    // Conditional create failed: ignore the error
  }
}

async function conditionalCreate(account) {
  const capabilities = await PublicKeyCredential.getClientCapabilities();
  // Only attempt conditional create if it is supported,
  // and if the user doesn't already have a passkey
  if (capabilities.conditionalCreate && !account.hasPasskey) {
    // Abort any existing WebAuthn calls
    webAuthnController.abort();

    // Get creation options, including the challenge value from the server
    const pkOptions = await getNewPasskeyOptions();
    const credential = await navigator.credentials.create({
      publicKey: pkOptions,
      mediation: "conditional",
    });
    // Conditional create succeeded: send the new credential to the server
    // for validation and storage
    await processNewPasskey(credential);
  }
}
```

Der Code:

- Versucht nach einer erfolgreichen Anmeldung, eine bedingte Erstellung durchzuführen.
- Versucht dies nur, wenn die bedingte Erstellung unterstützt wird und der Benutzer noch keinen Passkey hat.
- Bricht ausstehende WebAuthn-Vorgänge ab, indem [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem `AbortController` aufgerufen wird, der dem an den Vorgang übergebenen [`signal`](/de/docs/Web/API/CredentialsContainer/get#signal) zugeordnet ist.
- Versucht, einen Passkey bedingt zu erstellen, und verarbeitet den neuen Passkey bei Erfolg oder ignoriert andernfalls den Fehler.

### Einen Benutzer authentifizieren

Nachdem sich ein Benutzer mit WebAuthn registriert hat, kann er sich beim Dienst authentifizieren und anmelden. Der Authentifizierungsablauf ähnelt dem Registrierungsablauf. Die wesentlichen Unterschiede sind, dass die Authentifizierung:

1. Keine Benutzer- oder Relying-Party-Informationen benötigt.
2. Eine Assertion mit dem zuvor für den Dienst erzeugten Schlüsselpaar erstellt, statt mit dem Schlüsselpaar des Authenticators.

Ein typischer Authentifizierungsablauf sieht wie folgt aus:

1. Die Relying Party erzeugt eine „Challenge“ und sendet sie zusammen mit einer Liste von Relying-Party- und Benutzeranmeldedaten über einen geeigneten sicheren Mechanismus an den User Agent. Sie kann außerdem angeben, wo nach den Anmeldedaten gesucht werden soll, beispielsweise auf einem integrierten lokalen Authenticator oder einem externen Authenticator über USB, BLE usw.

2. Der Browser fordert den Authenticator über einen Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, die Challenge zu signieren. Die Anmeldedaten werden dabei in einer Option `publicKey` übergeben.

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

   Die Parameter des `get()`-Aufrufs werden zur Durchführung der Authentifizierung an den Authenticator übergeben.

3. Wenn der Authenticator über eine der angegebenen Anmeldedaten verfügt und die Challenge erfolgreich signieren kann, gibt er nach Einholung der Zustimmung des Benutzers eine signierte Assertion an die Web-App zurück. Diese wird bereitgestellt, wenn das vom `get()`-Aufruf zurückgegebene {{jsxref("Promise")}} erfüllt wird, und zwar als Instanz eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts. Die Eigenschaft [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) enthält die Assertion-Informationen.

4. Die Web-App leitet die signierte Assertion zur Überprüfung an den Server der Relying Party weiter. Zu den Prüfungen gehören:
   1. Die Überprüfung der Signatur des Authenticators anhand des öffentlichen Schlüssels, der bei der Registrierung gespeichert wurde.
   2. Die Überprüfung, ob die vom Authenticator signierte Challenge mit der vom Server erzeugten Challenge übereinstimmt.
   3. Die Überprüfung, ob die Relying-Party-ID der für diesen Dienst erwarteten ID entspricht.

5. Nach erfolgreicher Überprüfung durch den Server gilt die Authentifizierung als abgeschlossen.

#### Autofill-Benutzeroberfläche

Die Autofill-Benutzeroberfläche, manchmal auch als _bedingtes Abrufen_ bezeichnet, erleichtert Benutzern die Anmeldung mit Public-Key-Anmeldedaten, insbesondere wenn sie für die Website auch ein Passwort haben.

Es ist zu erwarten, dass Websites Passkeys üblicherweise zusätzlich zur bestehenden passwortbasierten Authentifizierung anbieten. Ein Benutzer könnte daher für eine Website ein Passwort, einen oder mehrere Passkeys oder beides besitzen. Eine Benutzeroberfläche, die ihn nach der gewünschten Anmeldemethode fragt, kann in dieser Situation verwirrend sein: Möglicherweise weiß er nicht mehr, welche Methode für welches Konto verfügbar ist. Die Autofill-Benutzeroberfläche hilft dabei, indem sie die Anmeldung mit einem Passkey genau dann anbietet, wenn gerade ein geeigneter Passkey verfügbar ist.

Um die Autofill-Benutzeroberfläche zu aktivieren, enthält die Anmeldeseite der Website ein Formular zur Anmeldung. Im Feld für den Benutzernamen fügt die Website dem Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) den Wert "webauthn" hinzu:

```html
<input type="text" name="username" autocomplete="username webauthn" />
```

Beim Laden der Seite prüft die Website zunächst, ob das bedingte Abrufen unterstützt wird. Falls ja, ruft sie [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) auf. Bei diesem Aufruf:

- Wird `"conditional"` als Wert für die Option [`mediation`](/de/docs/Web/API/CredentialsContainer/get#mediation) übergeben.
- Wird die Option [`allowCredentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials) weggelassen, um anzugeben, dass alle geeigneten Anmeldedaten akzeptiert werden.

```js
const support = await PublicKeyCredential.getClientCapabilities();
const supported = support.conditionalGet;

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

Der Aufruf wartet dann darauf, dass der Benutzer mit dem Benutzernamenfeld interagiert.

Sobald der Benutzer mit dem Feld interagiert, fragt der Browser bei allen verfügbaren Authenticators nach Public-Key-Anmeldedaten, die für die Anmeldung bei dieser Website verwendet werden können. Er zeigt dem Benutzer die zugehörigen Benutzernamen als Autofill-Optionen an, zusammen mit allen für das Konto gespeicherten Passwörtern. Wenn der Benutzer eine dieser Optionen auswählt, verwendet der Browser die entsprechenden Anmeldedaten für die Anmeldung.

So kann eine Website eine einheitliche Autofill-Funktion bereitstellen, die sowohl Passwörter als auch Public-Key-Anmeldedaten für ein einzelnes Konto umfasst.

> [!NOTE]
> Bei Aufrufen mit bedingtem Abrufen werden nur [auffindbare Anmeldedaten](#auffindbare_und_nicht_auffindbare_anmeldedaten) berücksichtigt, da der Browser geeignete Anmeldedaten anfordern muss, ohne deren Anmeldedaten-IDs zu kennen.

### Auffindbare und nicht auffindbare Anmeldedaten

Die WebAuthn API unterscheidet zwischen zwei Arten von Public-Key-Anmeldedaten:

- _Auffindbare Anmeldedaten_, auch als _resident keys_ bezeichnet

- _Nicht auffindbare Anmeldedaten_, auch als _non-resident keys_ bezeichnet

Bei nicht auffindbaren Anmeldedaten werden das private Schlüsselmaterial sowie zusätzliche Informationen wie der Benutzername und die ID der RP außerhalb des Authenticators gespeichert, üblicherweise auf dem RP-Server. Deshalb werden diese Anmeldedaten manchmal auch als _serverseitige Anmeldedaten_ bezeichnet. Um den privaten Schlüssel auf dem Server zu schützen, wird er mit einem im Authenticator gespeicherten Hauptschlüssel verschlüsselt. Der resultierende Geheimtext dient als Anmeldedaten-ID.

Wenn der Authenticator nicht auffindbare Anmeldedaten erzeugt, führt er folgende Schritte aus:

1. Er erzeugt das Schlüsselpaar, das zur Authentifizierung des Benutzers verwendet wird.
2. Er verschlüsselt den privaten Schlüssel und weitere Daten mit einem im Authenticator gespeicherten Hauptschlüssel.
3. Er gibt den resultierenden Geheimtext zusammen mit den übrigen Anmeldedaten, etwa dem öffentlichen Schlüssel, als [`id`](/de/docs/Web/API/Credential/id) der neuen Anmeldedaten an die RP zurück.

Wenn die RP eine Anmeldung mit nicht auffindbaren Anmeldedaten durchführen muss:

1. Übergibt die RP die Anmeldedaten-ID beim Aufruf von [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get).
2. Entschlüsselt der Authenticator die Anmeldedaten-ID mithilfe seines gespeicherten Hauptschlüssels, um den privaten Schlüssel und weitere Daten zu erhalten.
3. Verwendet der Authenticator den privaten Schlüssel, um eine Assertion zu signieren.

Bei auffindbaren Anmeldedaten speichert der Authenticator selbst:

- Das private Schlüsselmaterial, mit dem Assertions erzeugt werden.
- Den mit den Anmeldedaten verknüpften Benutzernamen.
- Die ID der mit den Anmeldedaten verknüpften RP.

Der Vorteil nicht auffindbarer Anmeldedaten besteht darin, dass der Authenticator keine anmeldedatenspezifischen Daten speichern muss. Dadurch kann er praktisch unbegrenzt viele Anmeldedaten unterstützen.

Der Nachteil ist, dass der Benutzer zuerst den Benutzernamen angeben muss, mit dem er sich anmelden möchte. Die RP kann damit die entsprechenden Anmeldedaten-IDs ermitteln, die der Browser anschließend an den Authenticator übergeben kann.

Bei auffindbaren Anmeldedaten kann der Browser dagegen:

- Informationen über alle mit der RP verknüpften auffindbaren Anmeldedaten vom Authenticator abrufen.
- Dem Benutzer die zugehörigen Benutzernamen anzeigen.
- Den Benutzer auffordern, den Benutzernamen auszuwählen, mit dem er sich anmelden möchte.

Darauf beruht die Funktion der [Autofill-Benutzeroberfläche](#autofill-benutzeroberfläche).

Mit der Option [`residentKey`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) in [`PublicKeyCredentialCreationOptions`](/de/docs/Web/API/PublicKeyCredentialCreationOptions) steuern Sie, ob neue Public-Key-Anmeldedaten auffindbar oder nicht auffindbar sind.

> [!NOTE]
> [Passkeys](/de/docs/Web/Security/Authentication/Passkeys) müssen definitionsgemäß immer auffindbare Anmeldedaten sein.

### Methoden zur Synchronisierung auffindbarer Anmeldedaten

Die Informationen, die im Authenticator eines Benutzers über auffindbare Anmeldedaten gespeichert sind, können vom Datenbestand des Servers der Relying Party abweichen. Das kann beispielsweise geschehen, wenn der Benutzer Anmeldedaten löscht oder seinen Benutzernamen beziehungsweise Anzeigenamen in der Web-App der RP ändert, ohne den Authenticator zu aktualisieren.

Die API stellt Methoden bereit, mit denen der Server der Relying Party dem Authenticator Änderungen mitteilen kann, damit dieser seine gespeicherten Anmeldedaten aktualisiert:

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static): Teilt dem Authenticator alle gültigen Anmeldedaten-IDs mit, die der RP-Server noch für einen bestimmten Benutzer gespeichert hat.
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static): Teilt dem Authenticator mit, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeigenamen auf dem RP-Server geändert hat.
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static): Teilt dem Authenticator mit, dass der RP-Server eine Anmeldedaten-ID nicht erkannt hat.

`signalUnknownCredential()` und `signalAllAcceptedCredentials()` scheinen ähnliche Zwecke zu erfüllen. Wann sollte welche Methode verwendet werden?

- `signalAllAcceptedCredentials()` sollte nach jeder erfolgreichen Anmeldung aufgerufen werden sowie dann, wenn der Benutzer angemeldet ist und Sie den Status seiner Anmeldedaten aktualisieren möchten. Die Methode darf nur aufgerufen werden, wenn der Benutzer authentifiziert ist, da sie die vollständige Liste der `credentialId`s eines Benutzers weitergibt. Andernfalls würde ein Datenschutzrisiko entstehen.
- `signalUnknownCredential()` sollte nach einer fehlgeschlagenen Anmeldung aufgerufen werden, um dem Authenticator mitzuteilen, dass die `credentialId` der ausgewählten Anmeldedaten nicht validiert werden kann und entfernt werden sollte. Die Methode kann auch dann sicher aufgerufen werden, wenn der Benutzer nicht authentifiziert ist: Sie übergibt dem Authenticator nur eine einzige `credentialId` – diejenige, mit der der Client gerade eine Authentifizierung versucht hat – und keine Benutzerinformationen.

### Abläufe anhand der Client-Fähigkeiten anpassen

Die Abläufe für Registrierung und Anmeldung können an die Fähigkeiten des WebAuthn-Clients (Browsers) angepasst werden. Mit der statischen Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) lassen sich diese Fähigkeiten abfragen. Sie gibt ein Objekt zurück, dessen Schlüssel jeweils eine WebAuthn-Fähigkeit oder -Erweiterung bezeichnen und dessen boolesche Werte angeben, ob die jeweilige Funktion unterstützt wird.

Damit lässt sich beispielsweise prüfen:

- Ob der Client verschiedene Authenticator-Funktionen unterstützt, etwa Passkeys oder die biometrische Verifizierung des Benutzers.
- Ob der Client [Methoden zur Synchronisierung von Anmeldedaten zwischen Relying Party und Authenticator unterstützt](#methoden_zur_synchronisierung_auffindbarer_anmeldedaten).
- Ob der Client zulässt, dass ein einzelner Passkey auf verschiedenen Websites mit demselben Ursprung verwendet wird.

Der folgende Code zeigt, wie Sie mit `getClientCapabilities()` prüfen können, ob der Client Authenticators mit biometrischer Benutzerverifizierung unterstützt.
Die tatsächlich ausgeführten Aktionen hängen von Ihrer Website ab.
Bei Websites, die eine biometrische Authentifizierung _verlangen_, könnten Sie die Anmeldeoberfläche durch einen Hinweis ersetzen, dass eine biometrische Authentifizierung erforderlich ist und der Benutzer einen anderen Browser oder ein anderes Gerät verwenden sollte.

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

## Zugriff auf die API steuern

Die Verfügbarkeit von WebAuthn lässt sich über eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) steuern. Dafür sind insbesondere zwei Direktiven vorgesehen:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Steuert die Verfügbarkeit von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der Option `publicKey`.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Steuert die Verfügbarkeit von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der Option `publicKey`.

Beide Direktiven haben standardmäßig den Wert `"self"` für ihre Zulassungsliste. Das bedeutet, dass diese Methoden standardmäßig in Dokumentkontexten der obersten Ebene verwendet werden können.
Darüber hinaus kann `get()` in verschachtelten Browsing-Kontexten verwendet werden, die vom selben Ursprung wie das oberste Dokument geladen wurden.
`get()` und `create()` können auch in verschachtelten Browsing-Kontexten verwendet werden, die von anderen Ursprüngen als das oberste Dokument geladen wurden, also in Cross-Origin-`<iframes>`, sofern dies durch die `Permissions-Policy`-Direktiven [`publickey-credentials-get`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-get) beziehungsweise [`publickey-credentials-create`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create) erlaubt ist.
Bei Cross-Origin-Aufrufen von `create()`, für die die Berechtigung über [`allow=` auf einem iframe](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) erteilt wurde, muss der Frame außerdem über eine {{Glossary("Transient_activation", "vorübergehende Aktivierung")}} verfügen.

> [!NOTE]
> Wenn eine Policy die Verwendung dieser Methoden verbietet, werden die von ihnen zurückgegebenen {{jsxref("Promise", "promises", "", 1)}} mit einer `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

### Grundlegende Zugriffskontrolle

Wenn Sie den Zugriff nur für eine bestimmte Subdomain erlauben möchten, können Sie diese wie folgt angeben:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Eingebettete Aufrufe von `create` und `get()` in einem `<iframe>` zulassen

Wenn Sie `get()` oder `create()` zur Authentifizierung in einem `<iframe>` verwenden möchten, sind einige Schritte erforderlich:

1. Die Website, die die Website der Relying Party einbettet, muss die Berechtigung über ein `allow`-Attribut erteilen:
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

     Das `<iframe>` muss außerdem über eine {{Glossary("Transient_activation", "vorübergehende Aktivierung")}} verfügen, wenn `create()` ursprungsübergreifend aufgerufen wird.

2. Die Website der Relying Party muss den oben beschriebenen Zugriff über einen `Permissions-Policy`-Header erlauben:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   Um nur einer bestimmten URL zu erlauben, die Website der Relying Party in einem `<iframe>` einzubetten:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## Schnittstellen

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)
  - : Liefert einem Dienst den Nachweis, dass ein Authenticator über das erforderliche Schlüsselpaar verfügt, um eine durch einen Aufruf von [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) ausgelöste Authentifizierungsanfrage erfolgreich zu verarbeiten. Verfügbar in der Eigenschaft [`response`](/de/docs/Web/API/PublicKeyCredential/response) der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die beim Erfüllen des von `get()` zurückgegebenen {{jsxref("Promise")}} erhalten wird.
- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)
  - : Das Ergebnis einer WebAuthn-Registrierung von Anmeldedaten, also eines Aufrufs von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create). Enthält Informationen über die Anmeldedaten, die der Server zur Durchführung von WebAuthn-Assertions benötigt, beispielsweise die Anmeldedaten-ID und den öffentlichen Schlüssel. Verfügbar in der Eigenschaft [`response`](/de/docs/Web/API/PublicKeyCredential/response) der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Instanz, die beim Erfüllen des von `create()` zurückgegebenen {{jsxref("Promise")}} erhalten wird.
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)
  - : Die Basisschnittstelle für [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) und [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
  - : Stellt Informationen über ein Paar aus öffentlichem und privatem Schlüssel bereit. Dieses Schlüsselpaar dient als Anmeldedaten für die Anmeldung bei einem Dienst und ist durch die Verwendung asymmetrischer Schlüssel anstelle eines Passworts gegen Phishing und Datenlecks widerstandsfähig. Eine Instanz wird erhalten, wenn das von einem [`create()`](/de/docs/Web/API/CredentialsContainer/create)- oder [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf zurückgegebene {{jsxref("Promise")}} erfüllt wird.

## Erweiterungen anderer Schnittstellen

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die Option `publicKey`
  - : Ein Aufruf von `create()` mit der Option `publicKey` veranlasst, wie oben beschrieben, die Erstellung neuer Anmeldedaten mit asymmetrischen Schlüsseln durch einen Authenticator.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die Option `publicKey`
  - : Ein Aufruf von `get()` mit der Option `publicKey` weist den User Agent an, vorhandene Anmeldedaten für die Authentifizierung bei einer Relying Party zu verwenden.

## Beispiele

### Demo-Websites

- Die Website der [Mozilla-Demo](https://webauthn.bin.coffee/) und ihr [Quellcode](https://github.com/jcjones/webauthn.bin.coffee).
- Die Website der [Google-Demo](https://try-webauthn.appspot.com/) und ihr [Quellcode](https://github.com/google/webauthndemo).
- Die Website der [WebAuthn.io-Demo](https://webauthn.io/) und ihr [Quellcode](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) sowie der [Client-Quellcode](https://github.com/webauthn-open-source/webauthn-simple-app) und der [Server-Quellcode](https://github.com/webauthn-open-source/fido2-lib)

### Anwendungsbeispiel

> [!NOTE]
> Aus Sicherheitsgründen werden Aufrufe der Web Authentication API ([`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`get()`](/de/docs/Web/API/CredentialsContainer/get)) abgebrochen, wenn das Browserfenster den Fokus verliert, während der Aufruf noch aussteht.

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
