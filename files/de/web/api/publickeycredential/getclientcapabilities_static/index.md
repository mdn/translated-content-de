---
title: "PublicKeyCredential: getClientCapabilities() statische Methode"
short-title: getClientCapabilities()
slug: Web/API/PublicKeyCredential/getClientCapabilities_static
l10n:
  sourceCommit: dd49e9f6381aa1a35e9d582808f2fd1d4abfa813
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`getClientCapabilities()`** der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, welches verwendet werden kann, um zu überprüfen, ob bestimmte WebAuthn-Client-Fähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) unterstützt werden.

Eine vertrauende Partei (RP) kann diese Informationen nutzen, um ihre Anmelde- und Registrierungsbenutzeroberflächen und -abläufe entsprechend anzupassen.

## Syntax

```js-nolint
PublicKeyCredential.getClientCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein Objekt aufgelöst wird, in dem die Eigenschaften die Client-Fähigkeits-Strings sind und die Werte boolesche Werte, die angeben, ob die entsprechende Fähigkeit oder Erweiterung unterstützt wird.

Die WebAuthn-Client-Fähigkeits-Strings sind:

- `"conditionalCreate"`
  - : Der Client ist in der Lage, [auffindbare Anmeldedaten](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu erstellen.
- `"conditionalGet"`
  - : Der Client ist in der Lage, sich mit [auffindbaren Anmeldedaten](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu authentifizieren. Diese Fähigkeit ist äquivalent dazu, dass [`isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) auf `true` auflöst.
- `"hybridTransport"`
  - : Der Client unterstützt die Verwendung des [hybriden](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports#hybrid) Transports. Dies bedeutet, dass der Client Authentifikatoren verwenden kann, die auf Bluetooth, NFC oder USB angewiesen sind.
- `"passkeyPlatformAuthenticator"`
  - : Der Client erlaubt die Verwendung eines Schlüsselauthentifikators, der Multi-Faktor-Authentifizierungsmechanismen wie einen PIN oder einen biometrischen Check unterstützt. Der Authentifikator kann Teil derselben Plattform (Gerät) wie der Client sein oder über einen hybriden Transport wie Bluetooth oder USB verbunden sein. Die Anmeldedaten werden auf dem Authentifikator gespeichert. Siehe [Schlüsselentwickler-Leitfaden für vertrauende Parteien](https://developers.google.com/identity/passkeys/developer-guides).
- `userVerifyingPlatformAuthenticator`
  - : Der Client verfügt über einen Plattform-Authentifikator (Teil desselben Geräts), der Multi-Faktor-Authentifizierungsmechanismen unterstützt, wie z.B. einen PIN oder biometrischen Check. Die Anmeldedaten können entweder auf der RP oder dem Authentifikator gespeichert werden.
- `relatedOrigins`
  - : Der Client unterstützt [Related Origin Requests](https://web.dev/articles/webauthn-related-origin-requests). Diese Clients ermöglichen es, einen Schlüssel über mehrere Websites mit demselben Ursprung zu verwenden.
- `signalAllAcceptedCredentials`
  - : Der Client unterstützt die statische Methode [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static). Wenn nicht unterstützt, müssen RP-Workflows den Benutzer dazu auffordern, Anmeldedaten manuell auf dem Authentifikator zu löschen.
- `signalCurrentUserDetails`
  - : Der Client unterstützt die statische Methode [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static). Wenn nicht unterstützt, müssen RP-Workflows den Benutzer dazu auffordern, Benutzerdetails manuell auf dem Authentifikator zu aktualisieren.
- `signalUnknownCredential`
  - : Der Client unterstützt die statische Methode [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static). Wenn nicht unterstützt, müssen RP-Workflows den Benutzer dazu auffordern, Anmeldedaten manuell vom Authentifikator zu löschen.

Die [Web-Erweiterungs](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions)-Strings sind formatiert, indem dem [Erweiterungsidentifikator](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#available_extensions) das Präfix `extension:` vorangestellt wird. Zum Beispiel kann der Schlüssel `extension:appid` verwendet werden, um zu überprüfen, ob die [`appid`-Erweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#appid) unterstützt wird.

### Ausnahmen

Das zurückgegebene {{jsxref("Promise")}} kann mit den folgenden Werten abgelehnt werden:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.

## Beschreibung

`getClientCapabilities()` ermöglicht Ihnen, zu überprüfen, ob eine gegebene Fähigkeit oder Erweiterung unterstützt wird, und die Informationen zu nutzen, um ein entsprechendes Benutzererlebnis anzubieten.

Zum Beispiel zeigt die Unterstützung für die `userVerifyingPlatformAuthenticator`-Fähigkeit an, dass biometrische Authentifizierung wie ein Fingerabdrucksensor erlaubt ist. Eine Webanwendung könnte dies verwenden, um ein Fingerabdrucksymbol anzuzeigen, wenn die Fähigkeit unterstützt wird, oder eine Passworteingabe, wenn nicht. Wenn eine biometrische Anmeldung erforderlich ist, könnte es stattdessen eine Benachrichtigung bereitstellen, dass die Seite nicht mit diesem Browser oder Gerät authentifizieren kann. Ähnlich zeigt `conditionalGet` an, dass der Client die bedingte Vermittlung bei der Anmeldung eines Benutzers unterstützt, was bedeutet, dass der Browser automatisch auffindbare Anmeldedaten in einem Anmeldeformular bereitstellen kann (zum Beispiel ein automatisch vervollständigend Textfeld oder eine Dropdown-Liste) zusammen mit einer Anmeldeschaltfläche.

Wenn der Wert einer gegebenen Fähigkeit im zurückgegebenen Objekt vorhanden ist, dann bedeutet `true`, dass die Fähigkeit derzeit unterstützt wird, und `false`, dass dies nicht der Fall ist. Wenn jedoch ein Schlüssel für eine bestimmte Fähigkeit nicht vorhanden ist, können keine Annahmen über die Verfügbarkeit der zugehörigen Funktion getroffen werden.

Für eine Erweiterung gelten die gleichen Annahmen. Beachten Sie jedoch, dass sogar wenn die Erweiterung vom Client unterstützt wird, ein bestimmter Authentifikator diese Erweiterung möglicherweise nicht unterstützt, sodass RPs nicht davon ausgehen dürfen, dass dies eine Garantie ist, dass die Authentifikator-Verarbeitungsschritte für diese Erweiterung durchgeführt werden. Wenn der Schlüssel für eine Erweiterung nicht vorhanden ist, kann eine RP nicht davon ausgehen, dass die Client-Verarbeitungsschritte für diese Erweiterung von diesem Client durchgeführt oder die Erweiterung zum Authentifikator weitergeleitet werden.

## Beispiele

### Überprüfung aller Fähigkeiten

Dieses Beispiel zeigt, wie man das Fähigkeiten-Objekt erhält und seine Werte durchgeht.

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

Zuerst warten wir auf `getClientCapabilities()`, um ein Objekt zu erhalten, das die Fähigkeiten enthält. Wir durchlaufen dann das Objekt und protokollieren das Ergebnis (Protokollierungs-Code nicht gezeigt):

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

{{EmbedLiveSample("Check all capabilities", "", "280")}}

### Test für benutzerverifizierenden Plattform-Authentifikator

Dieses Beispiel prüft eine einzelne Fähigkeit, `userVerifyingPlatformAuthenticator`. Eine echte Anwendung könnte das Ergebnis verwenden, um die Benutzeroberfläche zu konfigurieren.

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

Der Code ist ähnlich wie im vorherigen Beispiel, außer dass wir eine bestimmte zurückgegebene Fähigkeit überprüfen und `try...catch` verwenden, um den Fall abzufangen, in dem `getClientCapabilities()` nicht unterstützt wird.

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

Beachten Sie, dass wir hier das Ergebnis einer Überprüfung protokollieren. In einer echten Anwendung könnten wir die Benutzeroberfläche aktualisieren, um entsprechende Optionen für die Benutzerverifizierung anzuzeigen.

#### Ergebnis

Das unten dargestellte Protokoll zeigt entweder einen String an, der darauf hinweist, dass die Methode nicht unterstützt wird, oder einen, der angibt, ob biometrisches oder Passwort-Login unterstützt wird.

{{EmbedLiveSample("Test for user verifying platform authenticator", "", "90")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
