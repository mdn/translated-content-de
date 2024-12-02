---
title: identity.launchWebAuthFlow
slug: Mozilla/Add-ons/WebExtensions/API/identity/launchWebAuthFlow
l10n:
  sourceCommit: b8ed4ae6a9a60693920043935d2531921ae9e483
---

{{AddonSidebar}}

Führt den ersten Teil eines [OAuth2](https://oauth.net/2/)-Ablaufs durch, einschließlich Benutzerauthentifizierung und Client-Autorisierung.

Der einzige obligatorische Parameter dieser Funktion ist die Autorisierungs-URL des Dienstanbieters, die eine Reihe von URL-Parametern enthalten muss, einschließlich der [Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) und der [Client-ID](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_add-on) der Erweiterung. Der Dienstanbieter:

- authentifiziert den Benutzer beim Dienstanbieter, falls erforderlich (das heißt: wenn der Benutzer nicht bereits angemeldet ist)
- bittet den Benutzer, die Erweiterung zur Datenzugriffsberechtigung zu autorisieren, falls erforderlich (das heißt: wenn der Benutzer die Erweiterung noch nicht autorisiert hat)

Beachten Sie, dass diese Funktion, wenn weder Authentifizierung noch Autorisierung benötigt werden, stillschweigend abgeschlossen wird, ohne jegliche Benutzerinteraktion.

Diese Funktion akzeptiert auch einen optionalen Parameter `interactive`: wird dieser weggelassen oder auf false gesetzt, wird der Ablauf gezwungen, stillschweigend abzuschließen. In diesem Fall schlägt die Operation einfach fehl, falls der Benutzer authentifizieren oder autorisieren muss.

Diese Funktion gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück: wenn die Authentifizierung und Autorisierung erfolgreich waren, wird das Promise mit einer Redirect-URL erfüllt, die eine Reihe von URL-Parametern enthält. Abhängig vom implementierten OAuth2-Ablauf des betreffenden Dienstanbieters muss die Erweiterung weitere Schritte durchführen, um einen gültigen Zugriffscode zu erhalten, den sie dann zum Zugriff auf die Benutzerdaten verwenden kann.

Sollte ein Fehler auftreten, wird das Promise mit einer Fehlermeldung zurückgewiesen. Fehlerbedingungen können sein:

- die URL des Dienstanbieters konnte nicht erreicht werden
- die Client-ID stimmte nicht mit der eines registrierten Clients überein
- die Redirect-URL stimmte mit keiner für diesen Client registrierten Redirect-URL überein
- der Benutzer authentifizierte sich nicht erfolgreich
- der Benutzer autorisierte die Erweiterung nicht
- der Parameter `interactive` wurde weggelassen oder war false, aber eine Benutzerinteraktion wäre notwendig gewesen, um die Erweiterung zu autorisieren.

## Syntax

```js-nolint
let authorizing = browser.identity.launchWebAuthFlow(
  details   // object
)
```

### Parameter

- `details`

  - : `object`. Optionen für den Ablauf, der folgende Eigenschaften enthält:

    - `url`
      - : `string`. Die von dem OAuth2-Dienstanbieter bereitgestellte URL, um ein Zugriffstoken zu erhalten. Die Einzelheiten dieser URL sollten in der Dokumentation des jeweiligen Dienstanbieters angegeben werden, jedoch sollten die URL-Parameter stets die [Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) und die [Client-ID](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_add-on) der Erweiterung enthalten.
    - `redirect_uri` {{optional_inline}}
      - : `string`. Dies stellt die URI dar, zu der Ihre Erweiterung umgeleitet wird, wenn der Ablauf abgeschlossen ist. Nicht erforderlich, damit der Ablauf auf der Browserseite funktioniert, wenn er mit der generierten Redirect-URL übereinstimmt. Siehe [Getting the redirect URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url).
    - `interactive` {{optional_inline}}

      - : `boolean`. Wenn weggelassen oder `false`, wird der Ablauf gezwungen, ohne jegliche Benutzerinteraktion stillschweigend abzuschließen.

        Wenn der Benutzer bereits angemeldet ist und bereits Zugriff für die Erweiterung gewährt hat, kann `launchWebAuthFlow()` stillschweigend, ohne jegliche Benutzerinteraktion, abgeschlossen werden. Andernfalls (wenn der Dienstanbieter den Benutzer auffordern muss, sich anzumelden oder die Erweiterung zu autorisieren), wird `launchWebAuthFlow()` den Benutzer auffordern: das heißt, der Ablauf wird interaktiv sein.

        Erweiterungen sollten keine interaktiven Abläufe starten, außer als Reaktion auf eine Benutzeraktion. Manchmal möchten Erweiterungen jedoch trotzdem auf die Benutzerdaten zugreifen, ohne eine direkte Benutzeraktion auszulösen (zum Beispiel, wenn eine Erweiterung auf Daten zugreifen möchte, wenn der Browser gestartet wird).

        Dies ist der Zweck von `interactive`: Wenn Sie `interactive` weglassen oder auf `false` setzen, wird der Ablauf gezwungen, stillschweigend abzuschließen: Falls der Dienstanbieter die Interaktion mit dem Benutzer benötigt, schlägt der Ablauf einfach fehl. Als allgemeine Regel: Setzen Sie `interactive` auf `true`, wenn Sie den Ablauf als Reaktion auf eine Benutzeraktion starten, und lassen Sie es andernfalls weg.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Erweiterung erfolgreich autorisiert wird, wird dies mit einem String erfüllt, der die Redirect-URL enthält. Die URL wird einen Parameter enthalten, der entweder ein Zugriffstoken ist, oder gegen ein Zugriffstoken ausgetauscht werden kann, unter Verwendung des dokumentierten Ablaufs für den jeweiligen Dienstanbieter.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Diese Funktion autorisiert eine Erweiterung, um auf die Google-Daten eines Benutzers zuzugreifen, gemäß der Dokumentation unter <https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow>. Die Validierung des zurückgegebenen Zugriffstokens wird hier nicht gezeigt:

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
> Diese API basiert auf der [`identity`](https://developer.chrome.com/docs/extensions/reference/api/identity)-API von Chromium.
