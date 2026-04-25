---
title: Verwendung der WebAuthn-API in Web-Erweiterungen
slug: Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api
l10n:
  sourceCommit: 674d6c8868cde1654eaba3c285afde9d3b60ce9f
---

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) (WebAuthn) ist ein Webstandard, der eine starke, Phishing-resistente Authentifizierung mit Hilfe von Public-Key-Kryptographie ermöglicht. Anstatt sich auf Passwörter zu verlassen, ermöglicht WebAuthn Nutzern die Authentifizierung mit Hardware-Sicherheitsschlüsseln (z.B. YubiKeys), Plattform-Authentifizierungen (z.B. Fingerabdrucksensoren, Face ID, Windows Hello) oder über Geräte synchronisierte Passkeys.

Wenn sich ein Nutzer bei einer Webseite registriert, generiert der Browser ein Paar aus öffentlichen und privaten Schlüssel, das an eine Relying Party ID (RP ID) gebunden ist. Diese ID ist typischerweise die Domain der Seite. Während der Authentifizierung fordert der Server den Authenticator des Nutzers heraus, der die Herausforderung mit dem privaten Schlüssel signiert, um die Identität des Nutzers zu beweisen, ohne ein gemeinsames Geheimnis zu übertragen.

## Häufige Anwendungsfälle

- Passwortloses Login auf Webseiten und in Apps: Nutzer authentifizieren sich mit einem biometrischen Merkmal oder einem Sicherheitsschlüssel-Tipp und eliminieren so die Notwendigkeit von Passwörtern.
- Zwei-Faktor-Authentifizierung (2FA): WebAuthn dient als starker zweiter Faktor neben einem Passwort und ersetzt SMS- oder TOTP-Codes.
- Auf passkey-basierte Kontowiederherstellung: Synchrone Passkeys ermöglichen es Nutzern, den Zugang über verschiedene Geräte hinweg zurückzuerlangen, ohne auf weniger sichere Methoden zurückzugreifen.
- Anwendungen in Unternehmen und Behörden: Organisationen verwenden WebAuthn, um eine hardwaregestützte Authentifizierung für sensible Systeme durchzusetzen.

## WebAuthn in Web-Erweiterungen

Ab Firefox 150 und Chrome 122 können Browsererweiterungen die WebAuthn-API verwenden und eine RP ID für Domains angeben, die in den [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) der Erweiterung aufgeführt sind.

Normalerweise muss die an [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) übergebene [`rp`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#rp) ID und die an [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) übergebene [`rpId`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#rpid) in ihrem `publicKey`-Objekt mit der Domain der aufrufenden Seite (oder einer übergeordneten Domain) übereinstimmen. Die Methoden lehnen Aufrufe von anderen Ursprüngen ab. Eine Web-Erweiterung kann jedoch diese APIs aufrufen und eine RP ID für jede Domain angeben, die von ihren Host-Berechtigungen abgedeckt ist.

Dieser Mechanismus ermöglicht es Erweiterungen, als WebAuthn-Clients im Auftrag von Webdiensten zu fungieren, indem sie Anmeldeinformationen erstellen und abrufen, die mit den Domains dieser Dienste verknüpft sind.

### Erweiterungsursprung und serverseitige Validierung

Wenn eine App, Webseite oder Erweiterung ein WebAuthn-Anmeldeobjekt erstellt, wird vom Server der Relying Party erwartet, dass er die Antwort des Anmeldeobjekts validiert, einschließlich des `origin`-Felds in `clientDataJSON`. Auf normalen Webseiten ist der Ursprung die Domain der Seite (z.B. `https://example.com`). In Erweiterungen hat der Ursprung eine browserspezifische Form:

| Browser | Ursprungsformat           | Beispiel                                                                           |
| ------- | ------------------------- | ---------------------------------------------------------------------------------- |
| Chrome  | `chrome-extension://<id>` | `chrome-extension://mabekielmoibbmlepeohhncklpnjmcpk`                              |
| Firefox | `moz-extension://<hash>`  | `moz-extension://ngpncaopklanhjklijieoihgbhbgknjjdklmlpagjoaobbpmknfgmhgghbadgoai` |

Der Firefox-Erweiterungsursprung für WebAuthn ist ein SHA-256-Hash der Erweiterungs-ID, wobei jedes Byte durch Hinzufügen von 97 zu seinem Wert kodiert wird, was zu Kleinbuchstaben `a` bis `p` führt. Dieser Ursprung ist stabil und deterministisch. Er ist für alle Nutzer einer Erweiterung gleich, im Gegensatz zu den normalerweise verwendeten zufälligen `moz-extension://uuid` URLs. Dieser deterministische Erweiterungsursprung ermöglicht es Servern der Relying Party, die Erweiterung auf die Liste zulässiger Quellen zu setzen.

Sie können den Ursprung von einer Anmeldeinformationen-Antwort in jedem Browser wie folgt extrahieren:

```js
let clientData = JSON.parse(
  new TextDecoder().decode(publicKeyCredential.response.clientDataJSON),
);
console.log(clientData.origin);
// Chrome:  chrome-extension://mabekielmoibbmlepeohhncklpnjmcpk
// Firefox: moz-extension://ngpncaopklanhjklijieoihgbhbgknjjdklmlpagjoaobbpmknfgmhgghbadgoai
```

## Einrichten von WebAuthn in einer Web-Erweiterung

Dieser Leitfaden führt durch den Bau einer Erweiterung, die WebAuthn-Anmeldeinformationen erstellt und abruft. Dies geschieht, indem Ihre Erweiterung in die Lage versetzt wird, das JSON bereitzustellen, das die RP ID von einer Domain definiert, für die die Erweiterung Host-Berechtigungen hat.

### Konfigurieren des Manifests

Erklären Sie im `manifest.json`-Datei Ihrer Erweiterung `host_permissions` für die Domain oder Domains, deren RP ID Sie verwenden möchten. Diese Einstellung gewährt der Erweiterung die Berechtigung, Inhaltsskripte auf diesen Domains auszuführen, was Voraussetzung dafür ist, die Domain als RP ID anzugeben.

```json
{
  "manifest_version": 3,
  "name": "WebAuthn Extension",
  "version": "1.0",
  "description": "Registers and authenticates WebAuthn credentials.",
  "action": {
    "default_popup": "popup.html"
  },
  "host_permissions": ["https://*/*"]
}
```

> [!NOTE]
> Das breite Muster `"https://*/*"` gewährt Zugriff auf alle HTTPS-Domains. Für Ihre Erweiterung sollten Sie dies auf die benötigten Domains setzen (z.B. `"https://example.com/*"`).
> Dieses Beispiel verwendet ein Erweiterungs-Popup. Aufgrund eines bekannten Problems funktioniert der Ablauf jedoch nicht, da das Popup geschlossen wird, wenn die Aufforderung zur Eingabe von Anmeldedaten erscheint. Ein Workaround besteht darin, die Seite in einem neuen Tab zu öffnen. Siehe [Firefox Bug 2026687](https://bugzil.la/2026687).

### WebAuthn-Optionen sammeln

Fügen Sie einen Mechanismus hinzu, um das Registrierungs-JSON einzugeben. In diesem Fall ein Popup; Sie könnten auch eine Erweiterungsseite verwenden. Dieses Beispiel verwendet ein einfaches `popup.html` mit einem `textarea` für die JSON-Eingabe und zwei Schaltflächen: eine für die Registrierung und eine für die Authentifizierung.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>WebAuthn Extension</title>
  </head>
  <body>
    <h1>WebAuthn</h1>
    <textarea id="optionsText" placeholder="Enter options JSON here"></textarea>
    <button id="registerButton">Register (navigator.credentials.create)</button>
    <button id="authButton">Authenticate (navigator.credentials.get)</button>
    <script src="popup.js"></script>
  </body>
</html>
```

### Anmeldedaten registrieren

Analysieren Sie in Ihrem Erweiterungsskript die Optionen-JSON und rufen Sie `navigator.credentials.create()` mit `publicKey` im [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Format auf. Das wesentliche Detail ist, dass Sie `rp.id` auf eine Domain setzen, die von den Host-Berechtigungen Ihrer Erweiterung abgedeckt wird, auch wenn Ihre Erweiterung nicht auf dieser Domain läuft.

Binärfelder, wie `challenge` und `user.id`, müssen als getypte Arrays oder `ArrayBuffer`-Instanzen übergeben werden. Wenn Ihre JSON-Eingabe Base64-kodierte Zeichenfolgen verwendet, kann die Methode {{jsxref("Uint8Array.fromBase64")}} verwendet werden, um diese zu konvertieren.

Sie können dann Code hinzufügen, um die Anmeldeinformationen zu registrieren:

```js
// Registration
async function register(optionsJSON) {
  const options = JSON.parse(optionsJSON);
  options.challenge = Uint8Array.fromBase64(options.challenge);
  options.user.id = Uint8Array.fromBase64(options.user.id);
  const credential = await navigator.credentials.create({ publicKey: options });
  console.log("Credential created:", credential);
  return credential;
}
```

Das JSON, das Sie für die Registrierung verwenden, wobei `rp.id` auf eine externe Domain gesetzt ist, sieht ungefähr so aus:

```json
{
  "rp": {
    "name": "Example Corp",
    "id": "example.com"
  },
  "user": {
    "id": "dXNlcjEyMw==",
    "name": "user@example.com",
    "displayName": "Example User"
  },
  "challenge": "cmFuZG9tQ2hhbGxlbmdl",
  "pubKeyCredParams": [{ "type": "public-key", "alg": -7 }]
}
```

### Anmeldedaten authentifizieren

Um die Anmeldeinformationen zu authentifizieren, rufen Sie `navigator.credentials.get()` mit dem `rpId` im JSON auf die Zieldomain gesetzt. Auch hier müssen Sie Binärfelder, wie `challenge`, von der im Beispiel verwendeten Base64-kodierten Zeichenfolge vor dem Feststellen in `Uint8Array`-Instanzen konvertieren:

```js
async function authenticate(optionsJSON) {
  const options = JSON.parse(optionsJSON);
  options.challenge = Uint8Array.fromBase64(options.challenge);
  if (Array.isArray(options?.allowCredentials)) {
    for (const ac of options.allowCredentials) {
      ac.id = Uint8Array.fromBase64(ac.id);
    }
  }
  const assertion = await navigator.credentials.get({ publicKey: options });

  const clientDataJSON = new TextDecoder().decode(
    assertion.response.clientDataJSON,
  );
  console.log("Client data:", clientDataJSON);
  // The origin field in clientDataJSON will be the extension's origin
  // (chrome-extension://... or moz-extension://...)

  return assertion;
}
```

Das JSON, das Sie für die Bestätigung verwenden, wobei `rpId` auf eine externe Domain gesetzt ist, sieht ungefähr so aus:

```json
{
  "rpId": "example.com",
  "challenge": "YXV0aENoYWxsZW5nZQ==",
  "allowCredentials": [
    {
      "type": "public-key",
      "id": "Y3JlZGVudGlhbElk"
    }
  ]
}
```

### Serverseitige Überlegungen

Wenn Ihr Relying Party-Server eine WebAuthn-Antwort validiert, die von einer Erweiterung stammt, muss er den **Erweiterungsursprung** zusätzlich zu den regulären Web-Ursprüngen akzeptieren. Analysieren Sie `clientDataJSON` und prüfen Sie das `origin`-Feld:

- Für Chrome-Erweiterungen: `chrome-extension://<extension-id>`
- Für Firefox-Erweiterungen: `moz-extension://<sha256-hash>` (verwenden Sie die im Abschnitt [Erweiterungsursprung und serverseitige Validierung](#erweiterungsursprung_und_serverseitige_validierung) beschriebene Kodierung `a'–`p`).

Die Ursprungsliste Ihres Servers muss diese Werte für eine durchgängige Authentifizierung enthalten.
