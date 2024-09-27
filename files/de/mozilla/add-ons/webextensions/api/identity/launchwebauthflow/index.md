---
title: identity.launchWebAuthFlow
slug: Mozilla/Add-ons/WebExtensions/API/identity/launchWebAuthFlow
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Führt den ersten Teil eines [OAuth2](https://oauth.net/2/)-Flows durch, einschließlich Benutzer-Authentifizierung und -Autorisierung des Clients.

Der einzige obligatorische Parameter dieser Funktion ist die Autorisierungs-URL des Dienstanbieters, die eine Reihe von URL-Parametern enthalten muss, einschließlich der [Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) und der [Client-ID](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_add-on) der Erweiterung. Der Dienstanbieter:

- authentifiziert den Benutzer mit dem Dienstanbieter, falls erforderlich (das heißt: wenn der Benutzer noch nicht angemeldet ist)
- bittet den Benutzer, der Erweiterung den Zugriff auf die angeforderten Daten zu autorisieren, falls erforderlich (das heißt: wenn der Benutzer die Erweiterung noch nicht autorisiert hat)

Beachten Sie, dass, wenn weder Authentifizierung noch Autorisierung erforderlich sind, diese Funktion stillschweigend abgeschlossen wird, ohne jegliche Benutzerinteraktion.

Diese Funktion nimmt auch einen optionalen Parameter `interactive`: Wenn dieser ausgelassen oder auf false gesetzt wird, wird der Flow gezwungen, still abzuschließen. In diesem Fall, wenn der Benutzer authentifizieren oder autorisieren muss, wird der Vorgang einfach fehlschlagen.

Diese Funktion gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück: wenn Authentifizierung und Autorisierung erfolgreich sind, wird das Promise mit einer Redirect-URL erfüllt, die eine Reihe von URL-Parametern enthält. Je nach dem implementierten OAuth2-Flow des betreffenden Dienstanbieters muss die Erweiterung weitere Schritte durchlaufen, um einen gültigen Zugangscode zu erhalten, den sie dann benutzen kann, um auf die Benutzerdaten zuzugreifen.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt. Fehlerbedingungen können umfassen:

- die URL des Dienstanbieters konnte nicht erreicht werden
- die Client-ID stimmte nicht mit der ID eines registrierten Clients überein
- die Redirect-URL stimmte mit keiner der für diesen Client registrierten Redirect-URLs überein
- der Benutzer hat sich nicht erfolgreich authentifiziert
- der Benutzer hat die Erweiterung nicht autorisiert
- der `interactive` Parameter wurde ausgelassen oder war falsch, aber Benutzerinteraktion wäre notwendig gewesen, um die Erweiterung zu autorisieren.

## Syntax

```js-nolint
let authorizing = browser.identity.launchWebAuthFlow(
  details   // object
)
```

### Parameter

- `details`

  - : `object`. Optionen für den Flow, mit den folgenden Eigenschaften:

    - `url`
      - : `string`. Die URL, die vom OAuth2-Dienstanbieter angeboten wird, um ein Zugriffstoken zu erhalten. Die Einzelheiten zu dieser URL sollten in der Dokumentation des betreffenden Dienstanbieters angegeben werden, aber die URL-Parameter sollten immer beinhalten:
    - `redirect_uri` {{optional_inline}}
      - : `string`. Dies stellt die URI dar, zu der Ihre Erweiterung weitergeleitet wird, wenn der Flow abgeschlossen ist. Nicht erforderlich für den Flow, um auf der Browserseite zu funktionieren, wenn er mit der generierten Redirect-URL übereinstimmt. Siehe [Getting the redirect URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url).
    - `interactive` {{optional_inline}}

      - : `boolean`. Wenn ausgelassen oder `false`, wird der Flow gezwungen, still abzuschließen, ohne jegliche Benutzerinteraktion.

        Wenn der Benutzer bereits angemeldet ist und bereits Zugriff für die Erweiterung gewährt hat, kann `launchWebAuthFlow()` stillschweigend abgeschlossen werden, ohne jegliche Benutzerinteraktion. Andernfalls (wenn der Dienstanbieter den Benutzer zur Anmeldung oder zur Autorisierung der Erweiterung benötigt), wird `launchWebAuthFlow()` den Benutzer auffordern: das heißt, der Flow wird interaktiv sein.

        Erweiterungen sollten keine interaktiven Flows außer als Reaktion auf eine Benutzeraktion starten. Allerdings möchten Erweiterungen manchmal immer noch auf die Benutzerdaten zugreifen, ohne eine direkte Benutzeraktion (zum Beispiel, stellen Sie sich eine Erweiterung vor, die auf Daten zugreifen möchte, wenn der Browser gestartet wird).

        Dies ist der Zweck von `interactive`: Wenn Sie `interactive` auslassen oder auf `false` setzen, wird der Flow gezwungen, still abzuschließen: wenn der Dienstanbieter mit dem Benutzer interagieren muss, wird der Flow einfach fehlschlagen. Also als allgemeine Regel: Setzen Sie `interactive` auf `true`, wenn Sie den Flow als Reaktion auf eine Benutzeraktion starten, und lassen Sie es anderenfalls weg.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Erweiterung erfolgreich autorisiert wird, wird dieses mit einem String erfüllt, der die Redirect-URL enthält. Die URL wird einen Parameter enthalten, der entweder ein Zugriffstoken ist oder gegen ein Zugriffstoken eingetauscht werden kann, entsprechend dem dokumentierten Flow des jeweiligen Dienstanbieters.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Diese Funktion autorisiert eine Erweiterung, auf die Google-Daten eines Benutzers zuzugreifen gemäß der Dokumentation unter <https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow>. Die Validierung des zurückgegebenen Zugriffstokens wird hier nicht gezeigt:

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
> Diese API basiert auf der ['identity'](https://developer.chrome.com/docs/extensions/reference/api/identity) API von Chromium.
