---
title: identity.launchWebAuthFlow
slug: Mozilla/Add-ons/WebExtensions/API/identity/launchWebAuthFlow
l10n:
  sourceCommit: e600292dd09aa4fd2ffbcff57dbf0a0a772ed22b
---

{{AddonSidebar}}

Führt den ersten Teil eines [OAuth2](https://oauth.net/2/) Ablaufs durch, einschließlich Benutzer-Authentifizierung und Client-Autorisierung.

Der einzige zwingend erforderliche Parameter dieser Funktion ist die Autorisierungs-URL des Dienstanbieters, welche eine Reihe von URL-Parametern enthalten muss, einschließlich der [Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) und der [Client-ID](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_extension) der Erweiterung. Der Dienstanbieter:

- authentifiziert den Benutzer bei Bedarf, falls er nicht bereits angemeldet ist
- bittet den Benutzer bei Bedarf, die Erweiterung zur Nutzung der angeforderten Daten zu autorisieren, falls der Benutzer die Erweiterung nicht bereits autorisiert hat

Beachten Sie, dass, wenn weder Authentifizierung noch Autorisierung erforderlich sind, diese Funktion stillschweigend, ohne Benutzereingriff abgeschlossen wird.

Diese Funktion nimmt auch einen optionalen Parameter `interactive`: wenn dieser weggelassen oder auf false gesetzt wird, wird der Ablauf gezwungen, stillschweigend abgeschlossen zu werden. In diesem Fall, wenn der Benutzer sich authentifizieren oder autorisieren muss, wird die Operation einfach fehlschlagen.

Diese Funktion gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück: Wenn die Authentifizierung und Autorisierung erfolgreich waren, wird das Versprechen mit einer Redirect-URL erfüllt, die eine Reihe von URL-Parametern enthält. Abhängig vom implementierten OAuth2-Ablauf des betreffenden Dienstanbieters muss die Erweiterung weitere Schritte unternehmen, um einen gültigen Zugangscode zu erhalten, den sie dann verwenden kann, um auf die Benutzerdaten zuzugreifen.

Wenn ein Fehler auftritt, wird das Versprechen mit einer Fehlermeldung abgelehnt. Fehlerbedingungen können umfassen:

- die URL des Dienstanbieters konnte nicht erreicht werden
- die Client-ID stimmte nicht mit der ID eines registrierten Clients überein
- die Redirect-URL stimmte mit keiner für diesen Client registrierten Redirect-URLs überein
- der Benutzer authentifizierte sich nicht erfolgreich
- der Benutzer autorisierte die Erweiterung nicht
- der `interactive`-Parameter wurde weggelassen oder war false, aber Benutzereingriff wäre nötig gewesen, um die Erweiterung zu autorisieren.

## Syntax

```js-nolint
let authorizing = browser.identity.launchWebAuthFlow(
  details   // object
)
```

### Parameter

- `details`

  - : `object`. Optionen für den Ablauf, die die folgenden Eigenschaften enthalten:

    - `url`
      - : `string`. Die vom OAuth2-Dienstanbieter angebotene URL, um ein Zugangstoken zu erhalten. Die Einzelheiten dieser URL sollten in der Dokumentation des betreffenden Dienstanbieters angegeben werden, aber die URL-Parameter sollten immer enthalten: die [Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) und die [Client-ID](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_extension) der Erweiterung.
    - `redirect_uri` {{optional_inline}}
      - : `string`. Dies stellt die URI dar, auf die Ihre Erweiterung umgeleitet wird, wenn der Ablauf abgeschlossen ist. Nicht erforderlich, damit der Ablauf auf der Browserseite funktioniert, wenn er mit der generierten Redirect-URL übereinstimmt. Siehe [Getting the redirect URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url).
    - `interactive` {{optional_inline}}

      - : `boolean`. Wenn weggelassen oder `false`, zwingt den Ablauf, stillschweigend abgeschlossen zu werden, ohne Benutzereingriff.

        Wenn der Benutzer bereits angemeldet ist und bereits Zugriff für die Erweiterung gewährt hat, kann `launchWebAuthFlow()` stillschweigend abgeschlossen werden, ohne Benutzereingriff. Andernfalls (wenn der Dienstanbieter den Benutzer anmelden oder die Erweiterung autorisieren muss), wird `launchWebAuthFlow()` den Benutzer auffordern: das heißt, der Ablauf wird interaktiv.

        Erweiterungen sollten keine interaktiven Abläufe starten, außer als Reaktion auf eine Benutzeraktion. Manchmal möchten Erweiterungen jedoch trotzdem auf die Benutzerdaten zugreifen, ohne eine direkte Benutzeraktion (zum Beispiel stellen Sie sich eine Erweiterung vor, die auf Daten zugreifen möchte, wenn der Browser startet).

        Dies ist der Zweck von `interactive`: wenn Sie `interactive` weglassen oder auf `false` setzen, wird der Ablauf gezwungen, stillschweigend zu enden: wenn der Dienstanbieter mit dem Benutzer interagieren muss, schlägt der Ablauf einfach fehl. Als allgemeine Regel: Setzen Sie `interactive` auf `true`, wenn Sie den Ablauf als Reaktion auf eine Benutzeraktion starten und lassen Sie es ansonsten weg.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Erweiterung erfolgreich autorisiert wird, wird dies mit einem String erfüllt, der die Redirect-URL enthält. Die URL wird einen Parameter enthalten, der entweder ein Zugangstoken ist oder gegen ein Zugangstoken eingetauscht werden kann, unter Verwendung des dokumentierten Ablaufs für den jeweiligen Dienstanbieter.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Diese Funktion autorisiert eine Erweiterung, um auf die Google-Daten eines Benutzers zuzugreifen, gemäß der Dokumentation unter <https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow>. Die Validierung des zurückgegebenen Zugangstokens wird hier nicht gezeigt:

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
> Diese API basiert auf Chromium's [`identity`](https://developer.chrome.com/docs/extensions/reference/api/identity) API.
