---
title: "PublicKeyCredential: GetClientCapabilities() statische Methode"
short-title: getClientCapabilities()
slug: Web/API/PublicKeyCredential/getClientCapabilities_static
l10n:
  sourceCommit: a060aa315813bd1e69e4a43d7aed241f649e7e0d
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getClientCapabilities()`** statische Methode der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das verwendet werden kann, um zu überprüfen, ob bestimmte WebAuthn-Client-Fähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) unterstützt werden.

Ein Relying Party (RP) kann diese Informationen nutzen, um seine Anmelde- und Registrierungsbenutzeroberflächen und Workflows entsprechend anzupassen.

## Syntax

```js-nolint
PublicKeyCredential.getClientCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird, bei dem die Eigenschaftsnamen die Client-Fähigkeitszeichenfolgen sind und die Werte boolesche Werte, die angeben, ob die entsprechende Fähigkeit oder Erweiterung unterstützt wird oder nicht.

Die WebAuthn-Client-Fähigkeitszeichenfolgen sind:

- `"conditionalCreate"`
  - : Der Client ist in der Lage, [auffindbare Anmeldedaten](/de/docs/Web/API/Web_Authentication_API#discoverable_and_non-discoverable_credentials) zu erstellen.
- `"conditionalGet"`
  - : Der Client ist in der Lage, [bedingte Vermittlung](/de/docs/Web/API/Web_Authentication_API#autofill_ui) anzuwenden.
    Diese Fähigkeit entspricht [`isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static), welches mit `true` aufgelöst wird.
- `"hybridTransport"`
  - : Der Client unterstützt die Verwendung des [hybriden](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports#hybrid) Transports.
    Das bedeutet, dass der Client Authentifikatoren verwenden kann, die auf Bluetooth, NFC oder USB basieren.
- `"passkeyPlatformAuthenticator"`
  - : Der Client erlaubt die Verwendung eines Passkey-Authentifikators, der {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} Mechanismen wie eine PIN oder biometrische Überprüfung unterstützt.
    Der Authentifikator kann Teil der gleichen Plattform (Gerät) wie der Client sein oder über einen hybriden Transport wie Bluetooth oder USB verbunden sein.
    Die Anmeldedaten werden auf dem Authentifikator gespeichert.
    Siehe [Leitfaden für Passkey-Entwickler für Relying Parties](https://developers.google.com/identity/passkeys/developer-guides).
- `userVerifyingPlatformAuthenticator`
  - : Der Client hat einen Plattform-Authentifikator (Teil des gleichen Geräts), der {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} Mechanismen unterstützt, wie eine PIN oder biometrische Überprüfung.
    Die Anmeldedaten können entweder auf dem RP oder dem Authentifikator gespeichert werden.
- `relatedOrigins`
  - : Der Client unterstützt [Related Origin Requests](https://web.dev/articles/webauthn-related-origin-requests).
    Diese Clients erlauben die Verwendung eines Passkeys über mehrere Webseiten hinweg, die denselben Ursprung haben.
- `signalAllAcceptedCredentials`
  - : Der Client unterstützt die [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static) statische Methode.
    Wenn dies nicht unterstützt wird, müssen RP-Workflows den Benutzer auffordern, Anmeldedaten manuell auf dem Authentifikator zu löschen.
- `signalCurrentUserDetails`
  - : Der Client unterstützt die [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static) statische Methode.
    Wenn dies nicht unterstützt wird, müssen RP-Workflows den Benutzer auffordern, die Benutzerdetails manuell auf dem Authentifikator zu aktualisieren.
- `signalUnknownCredential`
  - : Der Client unterstützt die [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static) statische Methode.
    Wenn dies nicht unterstützt wird, müssen RP-Workflows den Benutzer auffordern, Anmeldedaten manuell vom Authentifikator zu löschen.

Die [Web-Erweiterungs](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) Zeichenfolgen sind formatiert, indem der [Erweiterungsbezeichner](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#available_extensions) mit dem Präfix `extension:` versehen wird.
Beispielsweise kann der Schlüssel `extension:appid` verwendet werden, um zu überprüfen, ob die [`appid` Erweiterung](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#appid) unterstützt wird.

### Ausnahmen

Das zurückgegebene {{jsxref("Promise")}} kann mit den folgenden Werten abgelehnt werden:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.

## Beschreibung

`getClientCapabilities()` ermöglicht es Ihnen, zu überprüfen, ob eine bestimmte Fähigkeit oder Erweiterung unterstützt wird, und die Informationen zu nutzen, um ein angemessenes Benutzererlebnis zu bieten.

Beispielsweise zeigt die Unterstützung für die `userVerifyingPlatformAuthenticator` Fähigkeit an, dass biometrische Verfahren wie ein Fingerabdrucksensor zulässig sind.
Eine Webanwendung könnte dies nutzen, um ein Fingerabdruck-Symbol anzuzeigen, wenn die Fähigkeit unterstützt wird, oder eine Passwort-Eingabe, wenn dies nicht der Fall ist.
Wenn ein biometrischer Login erforderlich ist, könnte sie stattdessen eine Benachrichtigung bereitstellen, dass die Seite nicht mit diesem Browser oder Gerät authentifizieren kann.
Ebenso zeigt `conditionalGet` an, dass der Client bedingte Vermittlung beim Anmelden eines Benutzers unterstützt, was bedeutet, dass der Browser automatisch ausfüllbare auffindbare Anmeldedaten in einem Anmeldeformular bereitstellen kann (zum Beispiel ein automatisch vervollständigendes Textfeld oder eine Dropdown-Liste) sowie eine Anmeldeschaltfläche.

Wenn der Wert einer bestimmten Fähigkeit im zurückgegebenen Objekt vorhanden ist, dann zeigt `true` an, dass die Fähigkeit derzeit unterstützt wird, und `false` gibt an, dass dies nicht der Fall ist.
Wenn jedoch ein Schlüssel für eine bestimmte Fähigkeit nicht vorhanden ist, können keine Annahmen über die Verfügbarkeit der zugehörigen Funktion getroffen werden.

Für eine Erweiterung gelten die gleichen Annahmen.
Beachten Sie jedoch, dass auch wenn die Erweiterung vom Client unterstützt wird, ein bestimmter Authentifikator diese Erweiterung möglicherweise nicht unterstützt, sodass RPs nicht davon ausgehen dürfen, dass dies eine Garantie dafür ist, dass die Authentifikator-Verarbeitungsschritte für diese Erweiterung ausgeführt werden.
Wenn der Schlüssel für eine Erweiterung nicht vorhanden ist, kann ein RP nicht davon ausgehen, dass die Client-Verarbeitungsschritte für diese Erweiterung von diesem Client ausgeführt werden oder dass die Erweiterung an den Authentifikator weitergeleitet wird.

## Beispiele

### Überprüfen aller Fähigkeiten

Dieses Beispiel zeigt, wie man das Fähigkeitsobjekt erhält und seine Werte durchläuft.

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
Wir durchlaufen dann das Objekt und loggen das Ergebnis (Logging-Code nicht gezeigt):

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

Bevor wir die Funktion aufrufen, prüfen wir, ob sie definiert ist, und loggen das Ergebnis.

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

### Test für benutzerverifizierenden Plattform-Authentifikator

Dieses Beispiel überprüft eine einzelne Fähigkeit, `userVerifyingPlatformAuthenticator`. Eine reale Anwendung könnte das Ergebnis verwenden, um die Benutzeroberfläche zu konfigurieren.

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

Der Code ähnelt dem vorherigen Beispiel, außer dass wir eine bestimmte zurückgegebene Fähigkeit prüfen und `try...catch` verwenden, um den Fall abzudecken, dass `getClientCapabilities()` nicht unterstützt wird.

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

Hier loggen wir das Ergebnis einer Prüfung.
In einer realen Anwendung könnten wir die Benutzeroberfläche aktualisieren, um geeignete Optionen zur Verifizierung des Benutzers anzuzeigen.

#### Ergebnis

Das Log unten zeigt entweder eine Zeichenfolge an, die angibt, dass die Methode nicht unterstützt wird, oder eine, die angibt, ob biometrische oder Passwort-Authentifizierung unterstützt wird.

{{EmbedLiveSample("Test für benutzerverifizierenden Plattform-Authentifikator", "", "90")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
