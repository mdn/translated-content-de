---
title: identity.launchWebAuthFlow
slug: Mozilla/Add-ons/WebExtensions/API/identity/launchWebAuthFlow
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Führt den ersten Teil eines [OAuth2](https://oauth.net/2/)-Flows aus, einschließlich Benutzer-Authentifizierung und Client-Autorisierung.

Der einzige obligatorische Parameter dieser Funktion ist die Autorisierungs-URL des Dienstanbieters, die eine Reihe von URL-Parametern enthalten muss, einschließlich der [Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) und der [Client-ID](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_add-on) der Erweiterung. Der Dienstanbieter wird dann:

- den Benutzer, falls erforderlich, beim Dienstanbieter authentifizieren (das heißt: falls er nicht bereits angemeldet ist)
- den Benutzer, falls erforderlich, bitten, der Erweiterung Zugriff auf die angeforderten Daten zu gewähren (das heißt: falls der Benutzer die Erweiterung noch nicht autorisiert hat)

Beachten Sie, dass wenn weder Authentifizierung noch Autorisierung benötigt werden, diese Funktion stillschweigend ausgeführt wird, ohne jegliche Benutzerinteraktion.

Diese Funktion nimmt auch einen optionalen Parameter `interactive`: Wenn dieser weggelassen oder auf false gesetzt wird, wird der Prozess gezwungen, stillschweigend zu enden. In diesem Fall schlägt der Vorgang einfach fehl, wenn der Benutzer authentifizieren oder autorisieren muss.

Diese Funktion gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück: Wenn Authentifizierung und Autorisierung erfolgreich waren, wird das Promise mit einer Redirect-URL erfüllt, die eine Reihe von URL-Parametern enthält. Abhängig vom implementierten OAuth2-Flow des Dienstanbieters muss die Erweiterung weitere Schritte durchlaufen, um einen gültigen Zugriffscode zu erhalten, den sie dann verwenden kann, um auf die Daten des Benutzers zuzugreifen.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt. Fehlerbedingungen können umfassen:

- Die URL des Dienstanbieters konnte nicht erreicht werden
- Die Client-ID stimmte nicht mit der ID eines registrierten Clients überein
- Die Redirect-URL stimmte mit keiner registrierten Redirect-URL für diesen Client überein
- Der Benutzer hat sich nicht erfolgreich authentifiziert
- Der Benutzer hat die Erweiterung nicht autorisiert
- Der Parameter `interactive` wurde weggelassen oder war false, aber es wäre eine Benutzerinteraktion erforderlich gewesen, um die Erweiterung zu autorisieren.

## Syntax

```js-nolint
let authorizing = browser.identity.launchWebAuthFlow(
  details   // object
)
```

### Parameter

- `details`

  - : `object`. Optionen für den Flow, der folgende Eigenschaften enthält:

    - `url`
      - : `string`. Die von dem OAuth2-Dienstanbieter angebotene URL, um ein Zugriffstoken zu erhalten. Die Details dieser URL sollten in der Dokumentation des jeweiligen Dienstanbieters angegeben werden, aber die URL-Parameter sollten immer enthalten:
    - `redirect_uri` {{optional_inline}}
      - : `string`. Diese repräsentiert die URI, zu der Ihre Erweiterung umgeleitet wird, wenn der Prozess abgeschlossen ist. Nicht erforderlich, damit der Prozess auf der Browser-Seite funktioniert, wenn er mit der generierten Redirect-URL übereinstimmt. Siehe [Abrufen der Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url).
    - `interactive` {{optional_inline}}

      - : `boolean`. Wenn weggelassen oder `false`, wird der Flow gezwungen, stillschweigend, ohne jegliche Benutzerinteraktion, zu enden.

        Wenn der Benutzer bereits angemeldet ist und bereits Zugriff für die Erweiterung gewährt hat, kann `launchWebAuthFlow()` stillschweigend abgeschlossen werden, ohne jegliche Benutzerinteraktion. Andernfalls (wenn der Dienstanbieter den Benutzer zum Anmelden oder zur Autorisierung der Erweiterung benötigt), wird `launchWebAuthFlow()` den Benutzer auffordern: Das heißt, der Flow wird interaktiv sein.

        Erweiterungen sollten keine interaktiven Flows starten, außer als Antwort auf eine Benutzeraktion. Manchmal möchten Erweiterungen jedoch trotzdem auf die Daten des Benutzers zugreifen, ohne eine direkte Benutzeraktion (zum Beispiel, stellen Sie sich eine Erweiterung vor, die auf Daten zugreifen möchte, wenn der Browser startet).

        Das ist der Zweck von `interactive`: Wenn Sie `interactive` weglassen oder auf `false` setzen, wird der Flow gezwungen, stillschweigend abzuschließen: Wenn der Dienstanbieter mit dem Benutzer interagieren muss, schlägt der Flow einfach fehl. Als allgemeine Regel: Setzen Sie `interactive` auf `true`, wenn Sie den Flow als Reaktion auf eine Benutzeraktion starten, und lassen Sie es andernfalls weg.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Erweiterung erfolgreich autorisiert wird, wird es mit einem String erfüllt, der die Redirect-URL enthält. Die URL wird einen Parameter enthalten, der entweder ein Zugriffstoken ist oder gegen ein Zugriffstoken ausgetauscht werden kann, mit dem dokumentierten Fluss für den jeweiligen Dienstanbieter.

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
> Diese API basiert auf der [`identity`](https://developer.chrome.com/docs/extensions/reference/api/identity) API von Chromium.
