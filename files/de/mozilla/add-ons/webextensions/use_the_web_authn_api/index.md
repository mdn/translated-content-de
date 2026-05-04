---
title: Verwendung der WebAuthn-API in Web-Erweiterungen
slug: Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) (WebAuthn) ist ein Webstandard, der eine starke, phishingsichere Authentifizierung mittels öffentlicher Schlüssel-Kryptografie ermöglicht. Anstatt sich auf Passwörter zu verlassen, ermöglicht WebAuthn den Nutzern die Authentifizierung mit Hardware-Sicherheitsschlüsseln (z.B. YubiKeys), Plattform-Authentifikatoren (z.B. Fingerabdrucksensoren, Face ID, Windows Hello) oder über Geräte synchronisierte Passkeys.

Wenn sich ein Nutzer auf einer Website registriert, erzeugt der Browser ein Paar aus öffentlichem und privatem Schlüssel, das an eine Relying Party ID (RP ID) gebunden ist. Diese ID ist typischerweise die Domain der Seite. Während der Authentifizierung fordert der Server den Authenticator des Nutzers heraus, der die Herausforderung mit dem privaten Schlüssel signiert und so die Identität des Nutzers ohne die Übertragung eines gemeinsamen Geheimnisses nachweist.

## Häufige Anwendungsfälle

- Passwortloser Login auf Websites und Apps: Nutzer authentifizieren sich mit einem biometrischen Merkmal oder einem Sicherheitsschlüsseltipp, wodurch Passwörter überflüssig werden.
- Zwei-Faktor-Authentifizierung (2FA): WebAuthn dient als starker zweiter Faktor neben einem Passwort und ersetzt SMS- oder TOTP-Codes.
- Passkey-basierte Kontowiederherstellung: Synchronisierte Passkeys ermöglichen den Nutzern den Zugriff auf Geräte zurückzugewinnen, ohne auf weniger sichere Methoden zurückgreifen zu müssen.
- Unternehmens- und Regierungsanwendungen: Organisationen nutzen WebAuthn, um hardwaregestützte Authentifizierung für sensible Systeme durchzusetzen.

## WebAuthn in Web-Erweiterungen

Ab Firefox 150 und Chrome 122 können Browser-Erweiterungen die WebAuthn-API verwenden und eine RP ID für Domains angeben, die in den [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) der Erweiterung spezifiziert sind.

Normalerweise müssen die an [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) übergebene [`rp`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#rp) ID und die an [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) übergebene [`rpId`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#rpid) ID im `publicKey`-Objekt der Domain der aufrufenden Seite (oder einer übergeordneten Domain) entsprechen. Die Methoden lehnen Aufrufe von anderen Ursprüngen ab. Eine Web-Erweiterung kann jedoch diese APIs aufrufen und eine RP ID für jede Domain angeben, die durch ihre Host-Berechtigungen abgedeckt ist.

Dieser Mechanismus ermöglicht es Erweiterungen, als WebAuthn-Clients im Namen von Webdiensten zu agieren, und Anmeldedaten zu erstellen und abzurufen, die an die Domains dieser Dienste gebunden sind.

### Erweiterungs-Ursprung und serverseitige Validierung

Wenn eine App, Webseite oder Erweiterung ein WebAuthn-Anmeldedatum erstellt, wird erwartet, dass der relyende Party-Server die Antwort des Anmeldedatums validiert, einschließlich des `origin`-Feldes im `clientDataJSON`. Auf regulären Webseiten ist der Ursprung die Domain der Seite (z.B. `https://example.com`). In Erweiterungen nimmt der Ursprung eine browserspezifische Form an:

| Browser | Ursprungsformat           | Beispiel                                                                           |
| ------- | ------------------------- | ---------------------------------------------------------------------------------- |
| Chrome  | `chrome-extension://<id>` | `chrome-extension://mabekielmoibbmlepeohhncklpnjmcpk`                              |
| Firefox | `moz-extension://<hash>`  | `moz-extension://ngpncaopklanhjklijieoihgbhbgknjjdklmlpagjoaobbpmknfgmhgghbadgoai` |

Der Firefox-Erweiterungsursprung für WebAuthn ist ein SHA-256-Hash der Erweiterungs-ID, wobei jedes Byte durch Hinzufügen von 97 zu seinem Wert kodiert wird, um Kleinbuchstaben von `a` bis `p` zu erzeugen. Dieser Ursprung ist stabil und deterministisch. Er ist für alle Nutzer einer Erweiterung gleich, im Gegensatz zu den normalerweise verwendeten zufälligen `moz-extension://uuid` URLs. Mit diesem deterministischen Erweiterungsursprung können relyende Party-Server die Erweiterung erlaubten.

Sie können den Ursprung aus einer Anmeldedatums-Antwort in jedem Browser wie folgt extrahieren:

```js
let clientData = JSON.parse(
  new TextDecoder().decode(publicKeyCredential.response.clientDataJSON),
);
console.log(clientData.origin);
// Chrome:  chrome-extension://mabekielmoibbmlepeohhncklpnjmcpk
// Firefox: moz-extension://ngpncaopklanhjklijieoihgbhbgknjjdklmlpagjoaobbpmknfgmhgghbadgoai
```

## Einrichtung von WebAuthn in einer Web-Erweiterung

Dieser Leitfaden führt durch den Aufbau einer Erweiterung, die WebAuthn-Anmeldedaten erstellt und abruft. Dies geschieht, indem Ihre Erweiterung das JSON liefert, das die RP ID von einer Domain definiert, für die die Erweiterung eine Host-Berechtigung hat.

### Konfigurieren des Manifests

In der `manifest.json`-Datei Ihrer Erweiterung, deklarieren Sie `host_permissions` für die Domain oder Domains, deren RP ID Sie verwenden möchten. Diese Einstellung gewährt der Erweiterung die Berechtigung, Inhaltsskripte auf diesen Domains auszuführen, was die Voraussetzung dafür ist, die Domain als RP ID zu behaupten.

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
> Das breite Muster `"https://*/*"` gewährt Zugriff auf alle HTTPS-Domains. Für Ihre Erweiterung sollten Sie dies auf die benötigten Domains festlegen (z.B. `"https://example.com/*"`).
> Dieses Beispiel verwendet ein Erweiterungs-Popup. Aufgrund eines bekannten Problems funktioniert der Ablauf jedoch nicht, da das Popup geschlossen wird, wenn die Aufforderung zur Anmeldedateneingabe erscheint. Ein Workaround ist, die Seite in einem neuen Tab zu öffnen. Siehe [Firefox-Bug 2026687](https://bugzil.la/2026687).

### Sammeln von WebAuthn-Optionen

Fügen Sie einen Mechanismus hinzu, um das Registrierungs-JSON einzutragen. In diesem Fall ein Pop-up; Sie könnten auch eine Erweiterungsseite verwenden. Dieses Beispiel verwendet ein einfaches `popup.html` mit einem `textarea` für die JSON-Eingabe und zwei Buttons: einen für die Registrierung und einen für die Authentifizierung.

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

### Registrieren der Anmeldedaten

In Ihrem Erweiterungsskript analysieren Sie das Options-JSON und rufen `navigator.credentials.create()` mit `publicKey` im [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Format auf. Wesentlich ist, dass Sie `rp.id` auf eine Domain setzen, die von den Host-Berechtigungen Ihrer Erweiterung abgedeckt ist, auch wenn Ihre Erweiterung nicht auf dieser Domain läuft.

Binärfelder, wie `challenge` und `user.id`, müssen als Typ-Arrays oder `ArrayBuffer`-Instanzen übergeben werden. Wenn Ihre JSON-Eingabe base64-kodierte Zeichenfolgen verwendet, kann die Methode {{jsxref("Uint8Array.fromBase64")}} verwendet werden, um sie zu konvertieren.

Sie können dann Code hinzufügen, um die Anmeldedaten zu registrieren:

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

Das JSON, das Sie zur Durchführung der Registrierung verwenden, wobei `rp.id` auf eine externe Domain gesetzt ist, sieht in etwa so aus:

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

### Authentifizierung der Anmeldedaten

Um die Anmeldedaten zu authentifizieren, rufen Sie `navigator.credentials.get()` mit der `rpId` im JSON auf, die auf die Zieldomain gesetzt ist. Wiederum müssen Sie Binärfelder, wie `challenge`, aus der base64-kodierten Zeichenfolge, wie im Beispiel verwendet, auf `Uint8Array`-Instanzen konvertieren, bevor Sie sie verwenden:

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

Das JSON, das Sie zur Durchführung der Assertion verwenden, wobei `rpId` auf eine externe Domain gesetzt ist, sieht in etwa so aus:

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

Wenn Ihr relyender Party-Server eine WebAuthn-Antwort validiert, die von einer Erweiterung stammt, muss er den **Erweiterungsursprung** zusätzlich zu regulären Web-Ursprüngen akzeptieren. Analysieren Sie `clientDataJSON` und überprüfen Sie das `origin`-Feld:

- Für Chrome-Erweiterungen: `chrome-extension://<extension-id>`
- Für Firefox-Erweiterungen: `moz-extension://<sha256-hash>` (unter Verwendung der `a`–`p`-Kodierung, die im Abschnitt [Erweiterungs-Ursprung und serverseitige Validierung](#erweiterungs-ursprung_und_serverseitige_validierung) beschrieben ist).

Die Ursprungs-Berechtigungsliste Ihres Servers muss diese Werte für eine vollständige Ende-zu-Ende-Authentifizierung enthalten.
