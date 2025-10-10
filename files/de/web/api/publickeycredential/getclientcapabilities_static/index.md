---
title: "PublicKeyCredential: getClientCapabilities() statische Methode"
short-title: getClientCapabilities()
slug: Web/API/PublicKeyCredential/getClientCapabilities_static
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`getClientCapabilities()`** des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das verwendet werden kann, um zu prüfen, ob bestimmte WebAuthn-Client-Fähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) unterstützt werden.

Ein Vertrauensanbieter (RP) kann diese Informationen verwenden, um seine Anmelde- und Registrieroberflächen und -abläufe entsprechend anzupassen.

## Syntax

```js-nolint
PublicKeyCredential.getClientCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem Objekt auflöst, bei dem die Eigenschaftsnamen die Client-Fähigkeitszeichenfolgen sind und die Werte boolesche Werte, die angeben, ob die entsprechende Fähigkeit oder Erweiterung unterstützt wird.

Die WebAuthn-Client-Fähigkeitszeichenfolgen sind:

- `"conditionalCreate"`
  - : Der Client ist in der Lage, [auffindbare Anmeldeinformationen](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu erstellen.
- `"conditionalGet"`
  - : Der Client ist in der Lage, sich mit [auffindbaren Anmeldeinformationen](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu authentifizieren.
    Diese Fähigkeit ist äquivalent dazu, dass [`isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) zu `true` aufgelöst wird.
- `"hybridTransport"`
  - : Der Client unterstützt die Nutzung des [hybriden](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports#hybrid) Transports.
    Das bedeutet, dass der Client Authentifikatoren nutzen kann, die auf Bluetooth, NFC oder USB angewiesen sind.
- `"passkeyPlatformAuthenticator"`
  - : Der Client ermöglicht die Nutzung eines Passkey-Authentifikators, der Mechanismen zur {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} wie eine PIN oder biometrische Überprüfung unterstützt.
    Der Authentifikator kann Teil derselben Plattform (Gerät) wie der Client sein oder über einen hybriden Transport wie Bluetooth oder USB verbunden sein.
    Die Anmeldedaten werden auf dem Authentifikator gespeichert.
    Siehe [Passkeys-Entwicklerleitfaden für Vertrauensanbieter](https://developers.google.com/identity/passkeys/developer-guides).
- `userVerifyingPlatformAuthenticator`
  - : Der Client verfügt über einen Plattform-Authentifikator (Teil desselben Geräts), der Mechanismen zur {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} wie eine PIN oder biometrische Überprüfung unterstützt.
    Die Anmeldedaten können entweder beim RP oder auf dem Authentifikator gespeichert werden.
- `relatedOrigins`
  - : Der Client unterstützt [Related Origin Requests](https://web.dev/articles/webauthn-related-origin-requests).
    Diese Clients erlauben es, einen Passkey über mehrere Websites mit demselben Ursprung zu verwenden.
- `signalAllAcceptedCredentials`
  - : Der Client unterstützt die statische Methode [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static).
    Wird dies nicht unterstützt, müssen RP-Workflows den Benutzer dazu auffordern, Anmeldeinformationen manuell auf dem Authentifikator zu löschen.
- `signalCurrentUserDetails`
  - : Der Client unterstützt die statische Methode [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static).
    Wird dies nicht unterstützt, müssen RP-Workflows den Benutzer dazu auffordern, Benutzerdaten manuell auf dem Authentifikator zu aktualisieren.
- `signalUnknownCredential`
  - : Der Client unterstützt die statische Methode [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static).
    Wird dies nicht unterstützt, müssen RP-Workflows den Benutzer dazu auffordern, Anmeldeinformationen manuell vom Authentifikator zu löschen.

Die [Web-Erweiterungs](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions)-Zeichenfolgen werden formatiert, indem der [Erweiterungsbezeichner](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#available_extensions) mit dem Präfix `extension:` versehen wird.
Zum Beispiel kann der Schlüssel `extension:appid` verwendet werden, um zu prüfen, ob die [`appid`-Erweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#appid) unterstützt wird.

### Ausnahmen

Das zurückgegebene {{jsxref("Promise")}} kann mit den folgenden Werten abgelehnt werden:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist ungültig.

## Beschreibung

`getClientCapabilities()` ermöglicht es Ihnen, zu überprüfen, ob eine bestimmte Fähigkeit oder Erweiterung unterstützt wird, und die Informationen zu nutzen, um ein angemessenes Benutzererlebnis zu bieten.

Zum Beispiel weist die Unterstützung der Fähigkeit `userVerifyingPlatformAuthenticator` darauf hin, dass biometrische Methoden wie ein Fingerabdrucksensor zulässig sind.
Eine Webanwendung könnte dies nutzen, um ein Fingerabdrucksymbol anzuzeigen, wenn die Fähigkeit unterstützt wird, oder ein Passwortfeld, wenn nicht.
Wenn ein biometrischer Login erforderlich ist, könnte stattdessen eine Benachrichtigung gegeben werden, dass die Website nicht über diesen Browser oder dieses Gerät authentifizieren kann.
Ähnlich zeigt `conditionalGet` an, dass der Client bedingte Mediation beim Anmelden eines Benutzers unterstützt, was bedeutet, dass der Browser automatisch auffindbare Anmeldeinformationen in einem Anmeldeformular bereitstellen kann (zum Beispiel ein autovervollständigendes Textfeld oder eine Dropdown-Liste) sowie eine Schaltfläche zum Anmelden.

Wenn der Wert einer bestimmten Fähigkeit im zurückgegebenen Objekt vorhanden ist, bedeutet `true`, dass die Fähigkeit derzeit unterstützt wird, und `false`, dass sie es nicht ist.
Wenn jedoch kein Schlüssel für eine bestimmte Fähigkeit vorhanden ist, können keine Annahmen über die Verfügbarkeit der zugehörigen Funktion gemacht werden.

Für eine Erweiterung sind die Annahmen dieselben.
Beachten Sie jedoch, dass selbst wenn die Erweiterung vom Client unterstützt wird, ein bestimmter Authentifikator diese Erweiterung möglicherweise nicht unterstützt. Daher dürfen RPs nicht annehmen, dass dies eine Garantie dafür ist, dass die Authentifikator-Verarbeitungsschritte für diese Erweiterung ausgeführt werden.
Wenn ein Schlüssel für eine Erweiterung nicht vorhanden ist, kann ein RP nicht davon ausgehen, dass die Client-Verarbeitungsschritte für diese Erweiterung von diesem Client ausgeführt werden oder dass die Erweiterung an den Authentifikator weitergeleitet wird.

## Beispiele

### Überprüfen aller Fähigkeiten

Dieses Beispiel zeigt, wie man das Fähigkeiten-Objekt erhält und seine Werte iteriert.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 230px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

Zuerst warten wir auf `getClientCapabilities()`, um ein Objekt mit den Fähigkeiten zu erhalten.
Dann iterieren wir über das Objekt und protokollieren das Ergebnis (Protokollierungscode nicht gezeigt):

```js
async function checkClientCapabilities() {
  const capabilities = await PublicKeyCredential.getClientCapabilities();

  if (capabilities) {
    log("Client Capabilities:");

    for (const [key, value] of Object.entries(capabilities)) {
      log(` ${key}: ${value}`);
    }
  }
}
```

Bevor wir die Funktion aufrufen, prüfen wir, ob sie definiert ist, und protokollieren das Ergebnis.

```js
// Call the function to check capabilities.
if (PublicKeyCredential.getClientCapabilities) {
  checkClientCapabilities();
} else {
  log(
    "PublicKeyCredential.getClientCapabilities() is not supported on this browser.",
  );
}
```

#### Ergebnis

{{EmbedLiveSample("Check all capabilities", "", "280")}}

### Test für benutzerverifizierenden Plattform-Authentifikator

Dieses Beispiel überprüft eine einzelne Fähigkeit, `userVerifyingPlatformAuthenticator`. Eine echte Anwendung könnte das Ergebnis verwenden, um die Benutzeroberfläche zu konfigurieren.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 40px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

Der Code ist dem vorherigen Beispiel ähnlich, außer dass wir eine bestimmte zurückgegebene Fähigkeit überprüfen und `try...catch` verwenden, um den Fall zu erfassen, dass `getClientCapabilities()` nicht unterstützt wird.

```js
checkIsUserVerifyingPlatformAuthenticatorAvailable();

async function checkIsUserVerifyingPlatformAuthenticatorAvailable() {
  try {
    const capabilities = await PublicKeyCredential.getClientCapabilities();

    if (capabilities.userVerifyingPlatformAuthenticator) {
      log("Biometric login supported");
    } else {
      log("Biometric login not supported. Do password.");
    }
  } catch (error) {
    if (error instanceof TypeError) {
      log(
        "PublicKeyCredential.getClientCapabilities() is not supported on this browser.",
      );
    } else {
      log(`Unexpected error: ${error}`);
    }
  }
}
```

Beachten Sie, dass wir hier das Ergebnis einer Überprüfung protokollieren.
In einer realen Anwendung könnten wir die Benutzeroberfläche aktualisieren, um geeignete Optionen für die Benutzerverifizierung anzuzeigen.

#### Ergebnis

Das untenstehende Protokoll zeigt entweder eine Zeichenfolge an, die darauf hinweist, dass die Methode nicht unterstützt wird, oder eine, die anzeigt, ob biometrischer oder Passwort-Login unterstützt wird.

{{EmbedLiveSample("Test for user verifying platform authenticator", "", "90")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
