---
title: identity.launchWebAuthFlow
slug: Mozilla/Add-ons/WebExtensions/API/identity/launchWebAuthFlow
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Führt den ersten Teil eines [OAuth2](https://oauth.net/2/)-Flows aus, einschließlich der Benutzer-Authentifizierung und der Client-Autorisierung.

Der einzige obligatorische Parameter dieser Funktion ist die Autorisierungs-URL des Dienstanbieters, die eine Reihe von URL-Parametern enthalten muss, einschließlich der [Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) und der [Client-ID](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_extension) der Erweiterung. Der Dienstanbieter führt dann Folgendes durch:

- authentifiziert den Benutzer beim Dienstanbieter, falls erforderlich (das heißt: wenn er noch nicht angemeldet ist)
- bittet den Benutzer, die Erweiterung zu autorisieren, um auf die angeforderten Daten zuzugreifen, falls erforderlich (das heißt: wenn der Benutzer die Erweiterung noch nicht autorisiert hat)

Beachten Sie, dass, wenn weder eine Authentifizierung noch eine Autorisierung erforderlich sind, diese Funktion stillschweigend ohne Benutzereingriff abgeschlossen wird.

Diese Funktion nimmt auch einen optionalen Parameter `interactive` an: Wenn dieser weggelassen oder auf false gesetzt wird, wird der Flow gezwungen, stillschweigend abgeschlossen zu werden. In diesem Fall schlägt der Vorgang fehl, wenn der Benutzer sich authentifizieren oder autorisieren muss.

Diese Funktion gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück: Wenn die Authentifizierung und Autorisierung erfolgreich waren, wird das Promise mit einer Redirect-URL erfüllt, die eine Reihe von URL-Parametern enthält. Abhängig von dem implementierten OAuth2-Flow des betreffenden Dienstanbieters muss die Erweiterung weitere Schritte durchlaufen, um einen gültigen Zugangscode zu erhalten, den sie dann verwenden kann, um auf die Benutzerdaten zuzugreifen.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt. Fehlerbedingungen können folgende sein:

- Die URL des Dienstanbieters konnte nicht erreicht werden
- Die Client-ID stimmte nicht mit der ID eines registrierten Clients überein
- Die Redirect-URL stimmte nicht mit einer für diesen Client registrierten Redirect-URL überein
- Der Benutzer hat sich nicht erfolgreich authentifiziert
- Der Benutzer hat die Erweiterung nicht autorisiert
- Der `interactive`-Parameter wurde weggelassen oder war false, aber eine Benutzerinteraktion wäre nötig gewesen, um die Erweiterung zu autorisieren.

## Syntax

```js-nolint
let authorizing = browser.identity.launchWebAuthFlow(
  details   // object
)
```

### Parameter

- `details`
  - : `object`. Optionen für den Flow, die folgende Eigenschaften enthalten:
    - `url`
      - : `string`. Die vom OAuth2-Dienstanbieter angebotene URL, um ein Zugriffstoken zu erhalten. Die Details dieser URL sollten in der Dokumentation des betreffenden Dienstanbieters angegeben werden, aber die URL-Parameter sollten stets enthalten: die [Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) und die [Client-ID](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_extension) der Erweiterung.
    - `redirect_uri` {{optional_inline}}
      - : `string`. Dies stellt die URI dar, zu der Ihre Erweiterung umgeleitet wird, wenn der Flow abgeschlossen ist. Nicht erforderlich für den Ablauf auf der Browserseite, wenn sie mit der generierten Redirect-URL übereinstimmt. Siehe [Abrufen der Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url).
    - `interactive` {{optional_inline}}
      - : `boolean`. Wenn weggelassen oder `false`, wird der Flow gezwungen, stillschweigend abgeschlossen zu werden, ohne jegliche Benutzerinteraktion.

        Wenn der Benutzer bereits angemeldet ist und bereits Zugriff für die Erweiterung gewährt hat, kann `launchWebAuthFlow()` stillschweigend abgeschlossen werden, ohne jegliche Benutzerinteraktion. Andernfalls (wenn der Dienstanbieter den Benutzer zur Anmeldung oder zur Autorisierung der Erweiterung benötigt) wird der Benutzer aufgefordert: das heißt, der Flow wird interaktiv.

        Erweiterungen sollten keine interaktiven Flows starten, es sei denn, als Reaktion auf eine Benutzeraktion. Manchmal möchten Erweiterungen jedoch auf Benutzerdaten zugreifen, ohne dass eine direkte Benutzeraktion stattfindet (zum Beispiel stellen Sie sich eine Erweiterung vor, die beim Start des Browsers auf Daten zugreifen möchte).

        Dies ist der Zweck von `interactive`: wenn Sie `interactive` weglassen oder auf `false` setzen, wird der Flow gezwungen, stillschweigend abzuschließen: wenn der Dienstanbieter mit dem Benutzer interagieren muss, schlägt der Flow einfach fehl. Daher als allgemeine Regel: setzen Sie `interactive` auf `true`, wenn Sie den Flow als Reaktion auf eine Benutzeraktion starten, und lassen Sie es ansonsten weg.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Erweiterung erfolgreich autorisiert wird, wird dies mit einem String erfüllt, der die Redirect-URL enthält. Die URL wird einen Parameter enthalten, der entweder ein Zugriffstoken ist oder gegen ein Zugriffstoken ausgetauscht werden kann, mithilfe des dokumentierten Flows des betreffenden Dienstanbieters.

## Beispiele

Diese Funktion autorisiert eine Erweiterung, um auf die Google-Daten eines Benutzers zuzugreifen, entsprechend der Dokumentation unter <https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow>. Die Validierung des zurückgegebenen Zugriffstokens wird hier nicht gezeigt:

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`identity`](https://developer.chrome.com/docs/extensions/reference/api/identity)-API von Chromium.
