---
title: Verwendung der WebAuthn-API in Web-Erweiterungen
slug: Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) (WebAuthn) ist ein Webstandard, der starke, phishingsichere Authentifizierung mit Hilfe von Public-Key-Kryptografie ermöglicht. Anstatt auf Passwörter zu vertrauen, erlaubt WebAuthn Benutzern, sich mit Hardware-Sicherheitsschlüsseln (z.B. YubiKeys), Plattform-Authentifizierern (z.B. Fingerabdrucksensoren, Face ID, Windows Hello) oder geräteübergreifend synchronisierten Zugangsschlüsseln zu authentifizieren.

Wenn sich ein Benutzer bei einer Website registriert, generiert der Browser ein Paar aus öffentlichem/privatem Schlüssel, das an eine "Relying Party ID" (RP ID) gebunden ist. Diese ID ist typischerweise die Domain der Seite. Während der Authentifizierung fordert der Server den Authentifizierer des Benutzers heraus, der die Herausforderung mit dem privaten Schlüssel signiert und damit die Identität des Benutzers beweist, ohne ein gemeinsames Geheimnis zu übertragen.

## Häufige Anwendungsfälle

- Passwortloses Login auf Websites und Apps: Benutzer authentifizieren sich mit einem biometrischen Merkmal oder durch Antippen eines Sicherheitsschlüssels, wodurch Passwörter überflüssig werden.
- Zwei-Faktor-Authentifizierung (2FA): WebAuthn dient als starker zweiter Faktor neben einem Passwort und ersetzt SMS- oder TOTP-Codes.
- Zugangsschlüssel-basierte Kontowiederherstellung: Synchronisierte Zugangsschlüssel ermöglichen es Benutzern, den Zugriff über Geräte hinweg ohne Rückgriff auf weniger sichere Methoden wiederzuerlangen.
- Anwendungen in Unternehmen und Regierung: Organisationen nutzen WebAuthn, um Hardware-unterstützte Authentifizierung für sensible Systeme durchzusetzen.

## WebAuthn in Web-Erweiterungen

Ab Firefox 150 und Chrome 122 können Browser-Erweiterungen die WebAuthn-API nutzen und eine RP ID für Domains angeben, die in den [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) der Erweiterung angegeben sind.

Üblicherweise muss die mit der [`rp`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#rp) ID übergebene Domain an [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) und die [`rpId`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#rpid) an [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) im `publicKey`-Objekt mit der Domain der aufrufenden Seite übereinstimmen (oder einer übergeordneten Domain). Die Methoden lehnen Aufrufe aus anderen Ursprüngen ab. Eine Web-Erweiterung kann jedoch diese APIs aufrufen und eine RP ID für jede Domain angeben, die durch ihre Host-Berechtigungen abgedeckt ist.

Dieser Mechanismus ermöglicht es Erweiterungen, als WebAuthn-Clients im Auftrag von Webdiensten zu fungieren, indem sie Anmeldeinformationen erstellen und abrufen, die an die Domains dieser Dienste gebunden sind.

### Ursprung der Erweiterung und serverseitige Validierung

Wenn eine App, Webseite oder Erweiterung ein WebAuthn-Zertifikat erstellt, wird vom Relying Party Server erwartet, dass er die Antwort des Zertifikats validiert, einschließlich des `origin`-Feldes in `clientDataJSON`. Auf regulären Webseiten ist der Ursprung die Domain der Seite (z.B. `https://example.com`). In Erweiterungen nimmt der Ursprung eine browserspezifische Form an:

| Browser | Herkunftsformat           | Beispiel                                                                           |
| ------- | ------------------------- | ---------------------------------------------------------------------------------- |
| Chrome  | `chrome-extension://<id>` | `chrome-extension://mabekielmoibbmlepeohhncklpnjmcpk`                              |
| Firefox | `moz-extension://<hash>`  | `moz-extension://ngpncaopklanhjklijieoihgbhbgknjjdklmlpagjoaobbpmknfgmhgghbadgoai` |

Der Ursprung der Firefox-Erweiterung für WebAuthn ist ein SHA-256-Hash der Erweiterungs-ID, wobei jedes Byte durch Hinzufügen von 97 zu seinem Wert kodiert wird, wodurch Kleinbuchstaben `a` bis `p` erzeugt werden. Dieser Ursprung ist stabil und deterministisch. Er ist für alle Benutzer einer Erweiterung gleich, im Gegensatz zu den normalerweise verwendeten zufälligen `moz-extension://uuid` URLs. Dieser deterministische Ursprung der Erweiterung ermöglicht es den Relying Party Servern, die Erweiterung auf die Allowlist zu setzen.

Sie können den Ursprung aus einer Anmeldeantwort in jedem Browser folgendermaßen extrahieren:

```js
let clientData = JSON.parse(
  new TextDecoder().decode(publicKeyCredential.response.clientDataJSON),
);
console.log(clientData.origin);
// Chrome:  chrome-extension://mabekielmoibbmlepeohhncklpnjmcpk
// Firefox: moz-extension://ngpncaopklanhjklijieoihgbhbgknjjdklmlpagjoaobbpmknfgmhgghbadgoai
```

## Einrichtung von WebAuthn in einer Web-Erweiterung

Dieser Leitfaden führt durch den Aufbau einer Erweiterung, die WebAuthn-Anmeldeinformationen erstellt und abruft. Dies erfolgt, indem Ihre Erweiterung es ermöglicht, das JSON bereitzustellen, das die RP ID für eine Domain definiert, für die die Erweiterung Host-Berechtigung hat.

### Konfigurieren des Manifests

Erklären Sie in der Datei `manifest.json` Ihrer Erweiterung `host_permissions` für die Domain oder Domains, deren RP ID Sie verwenden möchten. Diese Einstellung gewährt der Erweiterung Berechtigungen zum Ausführen von Inhalts-Skripten auf diesen Domains, was die Voraussetzung dafür ist, die Domain als RP ID behaupten zu können.

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
> Das breite Muster `"https://*/*"` gewährt Zugang zu allen HTTPS-Domains. Setzen Sie dies für Ihre Erweiterung auf die Domains, die sie benötigt (z.B. `"https://example.com/*"`).
> Dieses Beispiel verwendet ein Erweiterungs-Popup. Aufgrund eines bekannten Problems funktioniert der Ablauf jedoch nicht, da sich das Popup schließt, wenn die Aufforderung zur Eingabe von Anmeldeinformationen erscheint. Eine Umgehung besteht darin, die Seite in einem neuen Tab zu öffnen. Siehe [Firefox Bug 2026687](https://bugzil.la/2026687).

### Erfassung von WebAuthn-Optionen

Fügen Sie einen Mechanismus hinzu, um das Registrierungs-JSON einzugeben. In diesem Fall ein Popup; Sie könnten auch eine Erweiterungsseite verwenden. Dieses Beispiel verwendet ein einfaches `popup.html` mit einem `textarea` für die JSON-Eingabe und zwei Schaltflächen: eine zur Registrierung und eine zur Authentifizierung.

```html
<!doctype html>
<html lang="en-US">
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

### Registrierung der Anmeldeinformationen

In Ihrem Erweiterungsskript analysieren Sie das Options-JSON und rufen `navigator.credentials.create()` mit `publicKey` im [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Format auf. Das entscheidende Detail ist, dass Sie `rp.id` auf eine Domain setzen, die von den Host-Berechtigungen Ihrer Erweiterung abgedeckt wird, obwohl Ihre Erweiterung nicht auf dieser Domain läuft.

Binärfelder, wie `challenge` und `user.id`, müssen als typisierte Arrays oder `ArrayBuffer`-Instanzen übergeben werden. Wenn Ihre JSON-Eingabe base64-kodierte Zeichenfolgen verwendet, kann die Methode {{jsxref("Uint8Array.fromBase64")}} verwendet werden, um diese zu konvertieren.

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

Das JSON, das Sie verwenden, um die Registrierung durchzuführen, mit `rp.id`, das auf eine externe Domain gesetzt ist, sieht ungefähr so aus:

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

### Authentifizierung der Anmeldeinformationen

Um die Anmeldeinformationen zu authentifizieren, rufen Sie `navigator.credentials.get()` mit der `rpId` im JSON auf, die auf die Zieldomain gesetzt ist. Wiederum müssen Sie Binärfelder, wie `challenge`, von der im Beispiel verwendeten base64-kodierten Zeichenfolge in `Uint8Array`-Instanzen umwandeln, bevor Sie die Gültigkeit überprüfen:

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

Das JSON, das Sie verwenden, um die Behauptung durchzuführen, mit `rpId`, das auf eine externe Domain gesetzt ist, sieht ungefähr so aus:

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

Wenn Ihr Relying Party Server eine WebAuthn-Antwort validiert, die von einer Erweiterung stammt, muss er den **Ursprung der Erweiterung** zusätzlich zu regulären Web-Ursprüngen akzeptieren. Analysieren Sie `clientDataJSON` und überprüfen Sie das `origin`-Feld:

- Für Chrome-Erweiterungen: `chrome-extension://<extension-id>`
- Für Firefox-Erweiterungen: `moz-extension://<sha256-hash>` (unter Verwendung der `a`–`p`-Kodierung, wie im Abschnitt [Ursprung der Erweiterung und serverseitige Validierung](#ursprung_der_erweiterung_und_serverseitige_validierung) beschrieben).

Die Ursprungs-Whitelist Ihres Servers muss diese Werte für eine End-to-End-Authentifizierung enthalten.
