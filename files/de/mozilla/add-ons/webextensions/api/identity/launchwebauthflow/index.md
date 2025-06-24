---
title: identity.launchWebAuthFlow
slug: Mozilla/Add-ons/WebExtensions/API/identity/launchWebAuthFlow
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Führt den ersten Teil eines [OAuth2](https://oauth.net/2/)-Flows durch, einschließlich Benutzeranmeldung und Client-Autorisierung.

Der einzige verpflichtende Parameter dieser Funktion ist die Autorisierungs-URL des Dienstanbieters, die eine Reihe von URL-Parametern enthalten muss, darunter die [Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) und die [Client-ID](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_extension) der Erweiterung. Der Dienstanbieter wird dann:

- den Benutzer beim Dienstanbieter authentifizieren, falls erforderlich (das heißt: wenn er nicht bereits angemeldet ist)
- den Benutzer bitten, der Erweiterung den Zugriff auf die angeforderten Daten zu erlauben, falls erforderlich (das heißt: wenn der Benutzer die Erweiterung noch nicht autorisiert hat)

Beachten Sie, dass, wenn weder Authentifizierung noch Autorisierung erforderlich sind, diese Funktion ohne Benutzerinteraktion stillschweigend abgeschlossen wird.

Diese Funktion akzeptiert auch einen optionalen Parameter `interactive`: Wenn dieser weggelassen oder auf `false` gesetzt wird, wird der Flow gezwungen, stillschweigend abgeschlossen zu werden. In diesem Fall, wenn der Benutzer authentifizieren oder autorisieren muss, wird die Operation einfach fehlschlagen.

Diese Funktion gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück: Wenn die Authentifizierung und Autorisierung erfolgreich waren, wird das Promise mit einer Redirect-URL erfüllt, die eine Reihe von URL-Parametern enthält. Abhängig vom OAuth2-Flow, der vom betreffenden Dienstanbieter implementiert wurde, muss die Erweiterung weitere Schritte durchlaufen, um einen gültigen Zugriffscode zu erhalten, mit dem sie dann auf die Daten des Benutzers zugreifen kann.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt. Fehlerbedingungen können unter anderem umfassen:

- die URL des Dienstanbieters konnte nicht erreicht werden
- die Client-ID stimmte nicht mit der ID eines registrierten Clients überein
- die Redirect-URL stimmte nicht mit einer registrierten Redirect-URL für diesen Client überein
- der Benutzer wurde nicht erfolgreich authentifiziert
- der Benutzer autorisierte die Erweiterung nicht
- der `interactive`-Parameter wurde weggelassen oder war `false`, aber die Benutzerinteraktion wäre notwendig gewesen, um die Erweiterung zu autorisieren.

## Syntax

```js-nolint
let authorizing = browser.identity.launchWebAuthFlow(
  details   // object
)
```

### Parameter

- `details`

  - : `object`. Optionen für den Flow, die die folgenden Eigenschaften enthalten:

    - `url`
      - : `string`. Die vom OAuth2-Dienstanbieter angebotene URL, um ein Zugriffstoken zu erhalten. Die Details dieser URL sollten in der Dokumentation des betreffenden Dienstanbieters angegeben werden, aber die URL-Parameter sollten immer beinhalten: die [Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) und die [Client-ID](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_extension) der Erweiterung.
    - `redirect_uri` {{optional_inline}}
      - : `string`. Repräsentiert die URI, zu der Ihre Erweiterung weitergeleitet wird, wenn der Flow abgeschlossen ist. Nicht erforderlich, damit der Flow auf der Browserseite funktioniert, wenn er mit der generierten Redirect-URL übereinstimmt. Siehe [Getting the redirect URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url).
    - `interactive` {{optional_inline}}

      - : `boolean`. Wenn weggelassen oder `false`, wird der Flow gezwungen, stillschweigend abgeschlossen zu werden, ohne jegliche Benutzerinteraktion.

        Wenn der Benutzer bereits angemeldet ist und bereits den Zugriff für die Erweiterung gewährt hat, kann `launchWebAuthFlow()` stillschweigend abgeschlossen werden, ohne jegliche Benutzerinteraktion. Andernfalls (wenn der Dienstanbieter den Benutzer anmelden oder die Erweiterung autorisieren lassen muss), wird der Benutzer von `launchWebAuthFlow()` aufgefordert: das heißt, der Flow wird interaktiv.

        Erweiterungen sollten keine interaktiven Flows starten, außer als Reaktion auf eine Benutzeraktion. Manchmal möchten Erweiterungen jedoch trotzdem Zugriff auf die Benutzerdaten haben, ohne dass eine direkte Benutzeraktion erfolgt (stellen Sie sich beispielsweise eine Erweiterung vor, die auf Daten zugreifen möchte, wenn der Browser startet).

        Das ist der Zweck von `interactive`: Wenn Sie `interactive` weglassen oder auf `false` setzen, wird der Flow gezwungen, stillschweigend zu enden: wenn der Dienstanbieter mit dem Benutzer interagieren muss, wird der Flow einfach fehlschlagen. Als allgemeine Regel gilt: Setzen Sie `interactive` auf `true`, wenn Sie den Flow als Reaktion auf eine Benutzeraktion starten, und lassen Sie es andernfalls weg.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Erweiterung erfolgreich autorisiert wird, wird dies mit einem String erfüllt, der die Redirect-URL enthält. Die URL wird einen Parameter enthalten, der entweder ein Zugriffstoken ist oder gegen ein Zugriffstoken ausgetauscht werden kann, mit dem dokumentierten Flow des jeweiligen Dienstanbieters.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Diese Funktion autorisiert eine Erweiterung, auf die Google-Daten eines Benutzers zuzugreifen, gemäß der Dokumentation unter <https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow>. Die Validierung des zurückgegebenen Zugriffstokens wird hier nicht gezeigt:

```js
function validate(redirectURL) {
  // validate the access token
}

function authorize() {
  const redirectURL = browser.identity.getRedirectURL();
  const clientID =
    "664583959686-fhvksj46jkd9j5v96vsmvs406jgndmic.apps.googleusercontent.com";
  const scopes = ["openid", "email", "profile"];
  let authURL = "https://accounts.google.com/o/oauth2/auth";
  authURL += `?client_id=${clientID}`;
  authURL += `&response_type=token`;
  authURL += `&redirect_uri=${encodeURIComponent(redirectURL)}`;
  authURL += `&scope=${encodeURIComponent(scopes.join(" "))}`;

  return browser.identity.launchWebAuthFlow({
    interactive: true,
    url: authURL,
  });
}

function getAccessToken() {
  return authorize().then(validate);
}
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`identity`](https://developer.chrome.com/docs/extensions/reference/api/identity) API von Chromium.
