---
title: "PublicKeyCredential: Statische Methode getClientCapabilities()"
short-title: getClientCapabilities()
slug: Web/API/PublicKeyCredential/getClientCapabilities_static
l10n:
  sourceCommit: fc8ab6bcb82917a1a42fb95c2b3dd27a7f1b4807
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`getClientCapabilities()`** der Schnittstelle [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt erfüllt wird. Mit diesem Objekt lässt sich prüfen, ob bestimmte WebAuthn-Client-Funktionen und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) unterstützt werden.

Eine Relying Party (RP) kann diese Informationen nutzen, um ihre Benutzeroberflächen und Abläufe für die Anmeldung und Registrierung entsprechend anzupassen.

## Syntax

```js-nolint
PublicKeyCredential.getClientCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird. Die Eigenschaftsnamen des Objekts sind die Zeichenfolgen für Client-Funktionen; die Werte sind boolesche Werte, die angeben, ob die jeweilige Funktion oder Erweiterung unterstützt wird.

Die Zeichenfolgen für WebAuthn-Client-Funktionen sind:

- `"conditionalCreate"`
  - : Der Client unterstützt [conditional create](/de/docs/Web/API/Web_Authentication_API#conditional_create). Beachten Sie, dass [`isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) _nicht_ angibt, ob conditional create unterstützt wird.
- `"conditionalGet"`
  - : Der Client unterstützt [conditional get](/de/docs/Web/API/Web_Authentication_API#autofill_ui).
    Diese Funktion entspricht einem Rückgabewert von `true` für [`isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static).
- `"hybridTransport"`
  - : Der Client unterstützt die Verwendung des [hybrid](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports#hybrid)-Transports.
    Das bedeutet, dass der Client Authentifikatoren verwenden kann, die Bluetooth, NFC oder USB nutzen.
- `"passkeyPlatformAuthenticator"`
  - : Der Client erlaubt die Verwendung eines Passkey-Authentifikators, der Mechanismen zur {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} wie eine PIN oder eine biometrische Prüfung unterstützt.
    Der Authentifikator kann Teil derselben Plattform (desselben Geräts) wie der Client oder über einen hybrid-Transport wie Bluetooth oder USB verbunden sein.
    Die Anmeldedaten werden auf dem Authentifikator gespeichert.
    Weitere Informationen finden Sie im [Entwicklerleitfaden zu Passkeys für Relying Parties](https://developers.google.com/identity/passkeys/developer-guides).
- `userVerifyingPlatformAuthenticator`
  - : Der Client verfügt über einen Plattform-Authentifikator (als Teil desselben Geräts), der Mechanismen zur {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} wie eine PIN oder eine biometrische Prüfung unterstützt.
    Die Anmeldedaten können entweder bei der RP oder auf dem Authentifikator gespeichert werden.
- `relatedOrigins`
  - : Der Client unterstützt [Related Origin Requests](https://web.dev/articles/webauthn-related-origin-requests).
    Diese Clients ermöglichen es, einen Passkey über mehrere Websites hinweg zu verwenden, die denselben Origin haben.
- `signalAllAcceptedCredentials`
  - : Der Client unterstützt die statische Methode [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static).
    Falls sie nicht unterstützt wird, müssen RP-Abläufe die Benutzer auffordern, Anmeldedaten auf dem Authentifikator manuell zu löschen.
- `signalCurrentUserDetails`
  - : Der Client unterstützt die statische Methode [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static).
    Falls sie nicht unterstützt wird, müssen RP-Abläufe die Benutzer auffordern, Benutzerdaten auf dem Authentifikator manuell zu aktualisieren.
- `signalUnknownCredential`
  - : Der Client unterstützt die statische Methode [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static).
    Falls sie nicht unterstützt wird, müssen RP-Abläufe die Benutzer auffordern, Anmeldedaten manuell vom Authentifikator zu löschen.

Die Zeichenfolgen für [WebAuthn-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) werden gebildet, indem dem [Erweiterungsbezeichner](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#available_extensions) das Präfix `extension:` vorangestellt wird.
Beispielsweise kann mit dem Schlüssel `extension:appid` geprüft werden, ob die [`appid`-Erweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#appid) unterstützt wird.

### Ausnahmen

Das zurückgegebene {{jsxref("Promise")}} kann mit den folgenden Werten abgelehnt werden:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Domain der RP ist ungültig.

## Beschreibung

Mit `getClientCapabilities()` können Sie prüfen, ob eine bestimmte Funktion oder Erweiterung unterstützt wird, und anhand dieser Information eine passende Benutzererfahrung bereitstellen.

Die Unterstützung der Funktion `userVerifyingPlatformAuthenticator` zeigt beispielsweise an, dass biometrische Verfahren wie ein Fingerabdrucksensor zulässig sind.
Eine Webanwendung könnte damit ein Fingerabdrucksymbol anzeigen, wenn die Funktion unterstützt wird, andernfalls aber ein Eingabefeld für ein Passwort.
Wenn eine biometrische Anmeldung erforderlich ist, könnte sie stattdessen darauf hinweisen, dass eine Authentifizierung auf der Website mit diesem Browser oder Gerät nicht möglich ist.
Entsprechend zeigt `conditionalGet` an, dass der Client bei der Anmeldung eines Benutzers conditional mediation unterstützt. Das bedeutet, dass der Browser in einem Anmeldeformular automatisch ausgefüllte, auffindbare Anmeldedaten bereitstellen kann (beispielsweise in einem Texteingabefeld mit automatischer Vervollständigung oder einer Dropdown-Liste), zusammen mit einer Anmeldeschaltfläche.

Wenn der Wert einer bestimmten Funktion im zurückgegebenen Objekt vorhanden ist, gibt `true` an, dass die Funktion derzeit unterstützt wird, und `false`, dass sie nicht unterstützt wird.
Fehlt jedoch der Schlüssel für eine bestimmte Funktion, lässt sich daraus keine Aussage über die Verfügbarkeit der zugehörigen Funktion ableiten.

Für Erweiterungen gelten dieselben Annahmen.
Beachten Sie jedoch: Auch wenn der Client eine Erweiterung unterstützt, muss ein bestimmter Authentifikator sie nicht unterstützen. RPs dürfen daher nicht davon ausgehen, dass die Verarbeitungsschritte des Authentifikators für diese Erweiterung durchgeführt werden.
Fehlt der Schlüssel für eine Erweiterung, kann eine RP weder davon ausgehen, dass dieser Client die Verarbeitungsschritte für die Erweiterung ausführt, noch davon, dass die Erweiterung an den Authentifikator weitergeleitet wird.

## Beispiele

### Alle Funktionen prüfen

Dieses Beispiel zeigt, wie Sie das Objekt mit den Funktionen abrufen und über seine Werte iterieren.

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

Zunächst warten wir auf `getClientCapabilities()`, um ein Objekt mit den Funktionen zu erhalten.
Anschließend iterieren wir über das Objekt und protokollieren das Ergebnis (der Code für die Protokollierung ist nicht dargestellt):

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

### Auf einen benutzerverifizierenden Plattform-Authentifikator prüfen

Dieses Beispiel prüft eine einzelne Funktion: `userVerifyingPlatformAuthenticator`. Eine reale Anwendung könnte das Ergebnis nutzen, um die Benutzeroberfläche zu konfigurieren.

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

Der Code ähnelt dem vorherigen Beispiel. Allerdings prüfen wir eine bestimmte zurückgegebene Funktion und verwenden `try...catch`, um den Fall abzufangen, dass `getClientCapabilities()` nicht unterstützt wird.

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

Beachten Sie, dass wir hier das Ergebnis einer Prüfung protokollieren.
In einer realen Anwendung könnten wir die Benutzeroberfläche aktualisieren, um geeignete Optionen zur Verifizierung des Benutzers anzuzeigen.

#### Ergebnis

Das nachfolgende Protokoll zeigt entweder eine Zeichenfolge an, die darauf hinweist, dass die Methode nicht unterstützt wird, oder eine, die angibt, ob die biometrische Anmeldung oder die Anmeldung mit Passwort unterstützt wird.

{{EmbedLiveSample("Test for user verifying platform authenticator", "", "90")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
