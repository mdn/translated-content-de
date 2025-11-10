---
title: identity.launchWebAuthFlow
slug: Mozilla/Add-ons/WebExtensions/API/identity/launchWebAuthFlow
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Führt den ersten Teil eines [OAuth2](https://oauth.net/2/)-Flows aus, einschließlich Benutzerauthentifizierung und Client-Autorisierung.

Der einzige obligatorische Parameter dieser Funktion ist die Autorisierungs-URL des Dienstanbieters, die eine Reihe von URL-Parametern enthalten muss, einschließlich der [Weiterleitungs-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) und der [Client-ID](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_extension) der Erweiterung. Der Dienstanbieter:

- authentifiziert den Benutzer beim Dienstanbieter, falls erforderlich (das heißt: wenn der Benutzer nicht bereits angemeldet ist)
- bittet den Benutzer um Autorisierung der Erweiterung, um auf die angeforderten Daten zuzugreifen, falls erforderlich (das heißt: wenn der Benutzer die Erweiterung nicht bereits autorisiert hat)

Beachten Sie, dass diese Funktion, falls weder Authentifizierung noch Autorisierung erforderlich sind, stillschweigend abgeschlossen wird, ohne dass eine Benutzerinteraktion erfolgt.

Diese Funktion akzeptiert auch einen optionalen Parameter `interactive`: wenn dieser weggelassen wird oder auf `false` gesetzt ist, wird der Flow gezwungen, stillschweigend abgeschlossen zu werden. In diesem Fall schlägt die Operation fehl, falls der Benutzer authentifizieren oder autorisieren muss.

Diese Funktion gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück: Wenn Authentifizierung und Autorisierung erfolgreich waren, wird das Promise mit einer Weiterleitungs-URL erfüllt, die eine Reihe von URL-Parametern enthält. Abhängig vom OAuth2-Flow, der vom betreffenden Dienstanbieter implementiert wird, muss die Erweiterung weitere Schritte durchführen, um einen gültigen Zugriffscode zu erhalten, den sie dann nutzen kann, um auf die Daten des Benutzers zuzugreifen.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt. Fehlerbedingungen können umfassen:

- Die URL des Dienstanbieters konnte nicht erreicht werden
- Die Client-ID stimmte nicht mit der ID eines registrierten Clients überein
- Die Weiterleitungs-URL stimmte mit keiner der für diesen Client registrierten Weiterleitungs-URLs überein
- Der Benutzer konnte nicht erfolgreich authentifiziert werden
- Der Benutzer hat die Erweiterung nicht autorisiert
- Der `interactive`-Parameter wurde weggelassen oder war `false`, aber Benutzerinteraktion wäre erforderlich gewesen, um die Erweiterung zu autorisieren.

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
      - : `string`. Die vom OAuth2-Dienstanbieter angebotene URL, um einen Zugriffstoken zu erhalten. Die Details dieser URL sollten in der Dokumentation des betreffenden Dienstanbieters angegeben werden, aber die URL-Parameter sollten immer beinhalten: die [Weiterleitungs-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) und die [Client-ID](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_extension) der Erweiterung.
    - `redirect_uri` {{optional_inline}}
      - : `string`. Dies stellt die URI dar, zu der Ihre Erweiterung geleitet wird, wenn der Flow abgeschlossen ist. Nicht erforderlich für den Flow, um auf der Browser-Seite zu funktionieren, wenn es mit der generierten Weiterleitungs-URL übereinstimmt. Siehe [Erhalten der Weiterleitungs-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url).
    - `interactive` {{optional_inline}}
      - : `boolean`. Wenn weggelassen oder `false`, zwingt es den Flow, stillschweigend abzuschließen, ohne jegliche Benutzerinteraktion.

        Wenn der Benutzer bereits angemeldet ist und bereits Zugriff für die Erweiterung gewährt hat, kann `launchWebAuthFlow()` stillschweigend abgeschlossen werden, ohne jegliche Benutzerinteraktion. Ansonsten (wenn der Dienstanbieter möchte, dass sich der Benutzer anmeldet oder die Erweiterung autorisiert), wird `launchWebAuthFlow()` den Benutzer dazu auffordern: das heißt, der Flow wird interaktiv sein.

        Erweiterungen sollten interaktive Flows nur als Reaktion auf eine Benutzeraktion starten. Manchmal möchten Erweiterungen jedoch auf die Daten des Benutzers zugreifen, ohne dass eine direkte Benutzeraktion erfolgt (zum Beispiel stellen Sie sich eine Erweiterung vor, die beim Starten des Browsers auf Daten zugreifen möchte).

        Dies ist der Zweck von `interactive`: Wenn Sie `interactive` weglassen oder auf `false` setzen, wird der Flow gezwungen, stillschweigend abzuschließen: Wenn der Dienstanbieter mit dem Benutzer interagieren muss, schlägt der Flow einfach fehl. Daher als allgemeine Regel: Setzen Sie `interactive` auf `true`, wenn Sie den Flow als Reaktion auf eine Benutzeraktion starten, und lassen Sie es ansonsten weg.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Erweiterung erfolgreich autorisiert wurde, wird es mit einem String erfüllt, der die Weiterleitungs-URL enthält. Die URL wird einen Parameter beinhalten, der entweder ein Zugriffstoken ist oder gegen ein Zugriffstoken ausgetauscht werden kann, unter Verwendung des dokumentierten Flows für den speziellen Dienstanbieter.

## Beispiele

Diese Funktion autorisiert eine Erweiterung, um auf die Google-Daten eines Benutzers zuzugreifen, gemäß der Dokumentation unter <https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow>. Die Validierung des zurückgegebenen Zugriffstokens wird hier nicht angezeigt:

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
> Diese API basiert auf Chromiums [`identity`](https://developer.chrome.com/docs/extensions/reference/api/identity) API.
