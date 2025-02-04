---
title: "PublicKeyCredential: getClientCapabilities() statische Methode"
short-title: getClientCapabilities()
slug: Web/API/PublicKeyCredential/getClientCapabilities_static
l10n:
  sourceCommit: 83561d0e130a961b56166c7091ab7f515d996fd3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`getClientCapabilities()`** der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das verwendet werden kann, um zu prüfen, ob bestimmte WebAuthn-Clientfähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) unterstützt werden.

Ein Relying Party (RP) kann diese Informationen verwenden, um die Benutzeroberflächen und Workflows für die Anmeldung und Registrierung entsprechend anzupassen.

## Syntax

```js-nolint
PublicKeyCredential.getClientCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird, bei dem die Eigenschaftsnamen die Client-Fähigkeitsstrings sind und die Werte boolesche Werte, die anzeigen, ob die entsprechende Fähigkeit oder Erweiterung unterstützt wird.

Die WebAuthn-Clientfähigkeitsstrings sind:

- `"conditionalCreate"`
  - : Der Client ist in der Lage, [entdeckbare Anmeldeinformationen](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu erstellen.
- `"conditionalGet"`
  - : Der Client ist in der Lage, mit [entdeckbaren Anmeldeinformationen](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu authentifizieren.
    Diese Fähigkeit entspricht dem Auflösen von [`isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) zu `true`.
- `"hybridTransport"`
  - : Der Client unterstützt die Nutzung des [hybrid](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports#hybrid) Transports.
    Das bedeutet, dass der Client Authentifizierungsgeräte verwenden kann, die auf Bluetooth, NFC oder USB basieren.
- `"passkeyPlatformAuthenticator"`
  - : Der Client erlaubt die Nutzung eines Passkey-Authentifikators, der Multi-Faktor-Authentifizierungsmechanismen wie eine PIN oder biometrische Überprüfung unterstützt.
    Der Authentifikator kann Teil derselben Plattform (Gerät) wie der Client sein oder über einen hybriden Transport wie Bluetooth oder USB verbunden sein.
    Die Anmeldeinformationen werden auf dem Authentifikator gespeichert.
    Siehe [Passkeys Entwicklerleitfaden für Relying Parties](https://developers.google.com/identity/passkeys/developer-guides).
- `userVerifyingPlatformAuthenticator`
  - : Der Client verfügt über einen Plattform-Authentifikator (Teil desselben Geräts), der Multi-Faktor-Authentifizierungsmechanismen wie eine PIN oder biometrische Überprüfung unterstützt.
    Die Anmeldeinformationen können entweder auf dem RP oder dem Authentifikator gespeichert werden.
- `relatedOrigins`
  - : Der Client unterstützt [Related Origin Requests](https://web.dev/articles/webauthn-related-origin-requests).
    Diese Clients erlauben es, einen Passkey über mehrere Seiten mit demselben Ursprung zu verwenden.
- `signalAllAcceptedCredentials`
  - : Der Client unterstützt die statische Methode [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static).
    Wenn nicht unterstützt, müssen RP-Workflows den Benutzer auffordern, Anmeldeinformationen manuell auf dem Authentifikator zu löschen.
- `signalCurrentUserDetails`
  - : Der Client unterstützt die statische Methode [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static).
    Wenn nicht unterstützt, müssen RP-Workflows den Benutzer auffordern, Benutzerdetails manuell auf dem Authentifikator zu aktualisieren.
- `signalUnknownCredential`
  - : Der Client unterstützt die statische Methode [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static).
    Wenn nicht unterstützt, müssen RP-Workflows den Benutzer auffordern, Anmeldeinformationen manuell vom Authentifikator zu löschen.

Die [Web-Erweiterungs](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) strings sind formatiert, indem der [Erweiterungsbezeichner](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#available_extensions) mit dem Präfix `extension:` versehen wird.
Zum Beispiel kann der Schlüssel `extension:appid` verwendet werden, um zu prüfen, ob die [`appid` Erweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#appid) unterstützt wird.

### Ausnahmen

Das zurückgegebene {{jsxref("Promise")}} kann mit den folgenden Werten abgelehnt werden:

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Web Authentication API ist im aktuellen Browsing-Kontext nicht erlaubt.
    Beispielsweise könnte es durch eine Berechtigungsrichtlinie blockiert sein.

## Beschreibung

`getClientCapabilities()` ermöglicht es Ihnen zu prüfen, ob eine bestimmte Fähigkeit oder Erweiterung unterstützt wird, und die Informationen zu verwenden, um ein geeignetes Benutzererlebnis zu bieten.

Zum Beispiel zeigt die Unterstützung der `userVerifyingPlatformAuthenticator` Fähigkeit an, dass Biometrie wie ein Fingerabdrucksensor erlaubt ist.
Eine Webanwendung könnte dies nutzen, um ein Fingerabdrucksymbol anzuzeigen, wenn die Fähigkeit unterstützt wird, oder eine Passworteingabe, wenn nicht.
Wenn ein biometrisches Login erforderlich ist, könnte sie stattdessen eine Benachrichtigung bereitstellen, dass die Seite mit diesem Browser oder Gerät nicht authentifizieren kann.
Ebenso zeigt `conditionalGet` an, dass der Client bedingte Vermittlung beim Einloggen eines Benutzers unterstützt, was bedeutet, dass der Browser automatisch entdeckbare Anmeldeinformationen in einem Login-Formular bereitstellen kann (zum Beispiel ein sich automatisch vervollständigendes Textfeld oder eine Dropdown-Liste), zusammen mit einer Anmeldeschaltfläche.

Wenn der Wert einer bestimmten Fähigkeit im zurückgegebenen Objekt vorhanden ist, bedeutet `true`, dass die Fähigkeit derzeit unterstützt wird, und `false`, dass sie nicht unterstützt wird.
Wenn jedoch ein Schlüssel für eine bestimmte Fähigkeit nicht vorhanden ist, können keine Annahmen über die Verfügbarkeit der zugehörigen Funktion gemacht werden.

Für eine Erweiterung sind die Annahmen die gleichen.
Beachten Sie jedoch, dass selbst wenn die Erweiterung vom Client unterstützt wird, ein bestimmter Authentifikator diese Erweiterung möglicherweise nicht unterstützt, sodass RPs nicht davon ausgehen dürfen, dass dies eine Garantie dafür ist, dass die Authentifikatorverarbeitungsschritte für diese Erweiterung durchgeführt werden.
Wenn der Schlüssel für eine Erweiterung nicht vorhanden ist, kann ein RP nicht davon ausgehen, dass die Client-Verarbeitungsschritte für diese Erweiterung von diesem Client durchgeführt oder die Erweiterung an den Authentifikator weitergeleitet werden.

## Beispiele

### Überprüfen Sie alle Fähigkeiten

Dieses Beispiel zeigt, wie das Fähigkeitenobjekt abgerufen und seine Werte iteriert werden.

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

Zuerst warten wir auf `getClientCapabilities()`, um ein Objekt zu erhalten, das die Fähigkeiten enthält.
Dann iterieren wir das Objekt und protokollieren das Ergebnis (Protokollierungscode wird nicht gezeigt):

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

Bevor wir die Funktion aufrufen, überprüfen wir, ob sie definiert ist, und protokollieren das Ergebnis.

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

{{EmbedLiveSample("Überprüfen Sie alle Fähigkeiten", "", "280")}}

### Testen auf benutzerverifizierenden Plattform-Authentifikator

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

Der Code ist dem vorherigen Beispiel ähnlich, außer dass wir eine bestimmte zurückgegebene Fähigkeit überprüfen und `try...catch` verwenden, um den Fall abzufangen, in dem `getClientCapabilities()` nicht unterstützt wird.

```js
checkisUserVerifyingPlatformAuthenticatorAvailable();

async function checkisUserVerifyingPlatformAuthenticatorAvailable() {
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
In einer echten Anwendung könnten wir die Benutzeroberfläche aktualisieren, um geeignete Optionen zur Verifizierung des Benutzers anzuzeigen.

#### Ergebnis

Das folgende Protokoll zeigt entweder eine Zeichenfolge an, die anzeigt, dass die Methode nicht unterstützt wird, oder eine, die anzeigt, ob biometrisches oder Passwort-Login unterstützt wird.

{{EmbedLiveSample("Testen auf benutzerverifizierenden Plattform-Authentifikator", "", "90")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
