---
title: "PublicKeyCredential: getClientCapabilities() Methode"
short-title: getClientCapabilities()
slug: Web/API/PublicKeyCredential/getClientCapabilities_static
l10n:
  sourceCommit: 94ffd165232b5205418f8aa57127ee0854421db2
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getClientCapabilities()`** statische Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Interface gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das verwendet werden kann, um zu prüfen, ob bestimmte WebAuthn-Clientfähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) unterstützt werden.

Eine vertrauende Instanz (RP) kann diese Informationen verwenden, um ihre Anmelde- und Registrierungsoberflächen entsprechend anzupassen.

## Syntax

```js-nolint
PublicKeyCredential.getClientCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird, bei dem die Eigenschaftsnamen die Client-Fähigkeits-Strings sind und die Werte boolesche Werte sind, die anzeigen, ob die entsprechende Fähigkeit oder Erweiterung unterstützt wird.

Die WebAuthn-Clientfähigkeits-Strings sind:

- `"conditionalCreate"`
  - : Der Client ist in der Lage, [entdeckbare Anmeldeinformationen](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu erstellen.
- `"conditionalGet"`
  - : Der Client ist in der Lage, unter Verwendung von [entdeckbaren Anmeldeinformationen](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu authentifizieren.
    Diese Fähigkeit entspricht dem Auflösen von [`isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) zu `true`.
- `"hybridTransport"`
  - : Der Client unterstützt die Verwendung des [hybriden](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports#hybrid) Transports.
    Das bedeutet, dass der Client Authentifizierungsgeräte nutzen kann, die auf Bluetooth, NFC oder USB basieren.
- `"passkeyPlatformAuthenticator"`
  - : Der Client erlaubt die Verwendung eines Passkey-Authentifizierungsgeräts, das Mehrfaktor-Authentifizierungsmechanismen wie PIN oder biometrische Überprüfung unterstützt.
    Das Authentifizierungsgerät kann Teil derselben Plattform (Gerät) wie der Client sein oder über einen hybriden Transport wie Bluetooth oder USB verbunden sein.
    Die Anmeldeinformationen werden auf dem Authentifizierungsgerät gespeichert.
    Siehe [Entwicklerleitfaden für Passkeys für vertrauende Instanzen](https://developers.google.com/identity/passkeys/developer-guides).
- `userVerifyingPlatformAuthenticator`
  - : Der Client hat ein plattformbasiertes Authentifizierungsgerät (Teil desselben Geräts), das Mehrfaktor-Authentifizierungsmechanismen wie eine PIN oder biometrische Überprüfung unterstützt.
    Die Anmeldeinformationen können entweder bei der RP oder auf dem Authentifizierungsgerät gespeichert werden.
- `relatedOrigins`
  - : Der Client unterstützt [Related Origin Requests](https://web.dev/articles/webauthn-related-origin-requests).
    Diese Clients erlauben die Verwendung eines Passkeys über mehrere Sites hinweg, die denselben Ursprung haben.
- `signalAllAcceptedCredentials`
  - : Der Client unterstützt die statische Methode [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static).
    Wenn nicht unterstützt, müssen RP-Workflows den Benutzer auffordern, Anmeldeinformationen manuell vom Authentifizierungsgerät zu löschen.
- `signalCurrentUserDetails`
  - : Der Client unterstützt die statische Methode [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static).
    Wenn nicht unterstützt, müssen RP-Workflows den Benutzer auffordern, die Benutzerdetails manuell auf dem Authentifizierungsgerät zu aktualisieren.
- `signalUnknownCredential`
  - : Der Client unterstützt die statische Methode [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static).
    Wenn nicht unterstützt, müssen RP-Workflows den Benutzer auffordern, Anmeldeinformationen manuell vom Authentifizierungsgerät zu löschen.

Die [Web-Erweiterungs](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) Strings sind formatiert, indem dem [Erweiterungskennzeichen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#available_extensions) das Präfix `extension:` vorangestellt wird.
Zum Beispiel kann der Schlüssel `extension:appid` verwendet werden, um zu prüfen, ob die [`appid` Erweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#appid) unterstützt wird.

### Ausnahmen

Das zurückgegebene {{jsxref("Promise")}} kann mit den folgenden Werten abgelehnt werden:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.

## Beschreibung

`getClientCapabilities()` ermöglicht Ihnen, zu überprüfen, ob eine bestimmte Fähigkeit oder Erweiterung unterstützt wird, und diese Information zu verwenden, um ein entsprechendes Benutzererlebnis zu bieten.

Zum Beispiel zeigt die Unterstützung für die Fähigkeit `userVerifyingPlatformAuthenticator` an, dass Biometriken wie ein Fingerabdrucksensor erlaubt sind.
Eine Webanwendung könnte dies verwenden, um ein Fingerabdrucksymbol anzuzeigen, wenn die Fähigkeit unterstützt wird, oder ein Passwortfeld, wenn nicht.
Falls ein biometrischer Login erforderlich ist, könnte sie stattdessen eine Benachrichtigung bereitstellen, dass die Site sich nicht mit diesem Browser oder Gerät authentifizieren kann.
Ähnlich weist `conditionalGet` darauf hin, dass der Client bedingte Vermittlung beim Anmelden eines Benutzers unterstützt, was bedeutet, dass der Browser automatisch ausfüllbare entdeckbare Anmeldeinformationen in einem Anmeldeformular bereitstellen kann (z.B. ein automatisch vervollständigendes Textfeld oder eine Dropdown-Liste) zusammen mit einem Anmeldebutton.

Wenn der Wert einer bestimmten Fähigkeit im zurückgegebenen Objekt vorhanden ist, zeigt `true` an, dass die Fähigkeit derzeit unterstützt wird, und `false` zeigt an, dass sie nicht unterstützt wird.
Wenn jedoch ein Schlüssel für eine bestimmte Fähigkeit nicht vorhanden ist, können keine Annahmen über die Verfügbarkeit der zugehörigen Funktion getroffen werden.

Für eine Erweiterung gelten die gleichen Annahmen.
Beachten Sie jedoch, dass selbst wenn die Erweiterung vom Client unterstützt wird, ein bestimmtes Authentifizierungsgerät diese Erweiterung möglicherweise nicht unterstützt, sodass RP nicht davon ausgehen dürfen, dass dies eine Garantie dafür ist, dass die Authentifizierungsverarbeitungsschritte für diese Erweiterung durchgeführt werden.
Wenn der Schlüssel für eine Erweiterung nicht vorhanden ist, kann eine RP nicht davon ausgehen, dass die clientseitigen Verarbeitungsschritte für diese Erweiterung von diesem Client durchgeführt werden oder dass die Erweiterung an das Authentifizierungsgerät weitergeleitet wird.

## Beispiele

### Überprüfen aller Fähigkeiten

Dieses Beispiel zeigt, wie man das Fähigkeitenobjekt erhält und seine Werte iteriert.

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

Zuerst warten wir `getClientCapabilities()` ab, um ein Objekt zu erhalten, das die Fähigkeiten enthält.
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

Bevor die Funktion aufgerufen wird, prüfen wir, ob sie definiert ist, und loggen das Ergebnis.

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

{{EmbedLiveSample("Überprüfen aller Fähigkeiten", "", "280")}}

### Test für benutzerüberprüfenden Plattformauthentifikator

Dieses Beispiel prüft eine einzelne Fähigkeit, `userVerifyingPlatformAuthenticator`. Eine reale Anwendung könnte das Ergebnis verwenden, um die Benutzeroberfläche zu konfigurieren.

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

Der Code ist dem vorherigen Beispiel ähnlich, außer dass wir eine bestimmte zurückgegebene Fähigkeit prüfen und `try...catch` verwenden, um den Fall zu erfassen, in dem `getClientCapabilities()` nicht unterstützt wird.

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

Beachten Sie, dass wir hier das Ergebnis einer Überprüfung loggen.
In einer realen Anwendung könnten wir die Benutzeroberfläche aktualisieren, um die entsprechenden Optionen zur Überprüfung des Benutzers anzuzeigen.

#### Ergebnis

Das folgende Protokoll zeigt entweder eine Zeichenkette an, die angibt, dass die Methode nicht unterstützt wird, oder eine, die anzeigt, ob biometrische oder Passwortanmeldung unterstützt wird.

{{EmbedLiveSample("Test für benutzerüberprüfenden Plattformauthentifikator", "", "90")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
