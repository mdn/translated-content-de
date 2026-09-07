---
title: identity.launchWebAuthFlow
slug: Mozilla/Add-ons/WebExtensions/API/identity/launchWebAuthFlow
l10n:
  sourceCommit: 870fe25a3e6ed1a44222c52dd8a992b731c1a383
---

Führt den ersten Teil eines [OAuth2](https://oauth.net/2/)-Flows aus, einschließlich der Benutzerauthentifizierung und Client-Autorisierung.

Der einzige obligatorische Parameter dieser Funktion ist die Autorisierungs-URL des Dienstanbieters. Sie muss mehrere URL-Parameter enthalten, darunter die [Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) und die [Client-ID](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_extension) der Erweiterung. Der Dienstanbieter:

- authentifiziert den Benutzer beim Dienstanbieter, falls erforderlich (das heißt, wenn er noch nicht angemeldet ist)
- fordert den Benutzer auf, die Erweiterung für den Zugriff auf die angeforderten Daten zu autorisieren, falls erforderlich (das heißt, wenn der Benutzer die Erweiterung noch nicht autorisiert hat)

Beachten Sie, dass diese Funktion ohne Benutzerinteraktion abgeschlossen wird, wenn weder Authentifizierung noch Autorisierung erforderlich sind.

Diese Funktion akzeptiert außerdem den optionalen Parameter `interactive`: Wenn dieser weggelassen oder auf false gesetzt wird, muss der Flow ohne Benutzerinteraktion abgeschlossen werden. Wenn sich der Benutzer in diesem Fall authentifizieren oder autorisieren muss, schlägt der Vorgang einfach fehl.

Diese Funktion gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück: Wenn Authentifizierung und Autorisierung erfolgreich waren, wird das Promise mit einer Redirect-URL erfüllt, die mehrere URL-Parameter enthält. Abhängig vom OAuth2-Flow, den der betreffende Dienstanbieter implementiert, muss die Erweiterung weitere Schritte ausführen, um einen gültigen Zugriffscode zu erhalten, den sie anschließend für den Zugriff auf die Daten des Benutzers verwenden kann.

Bei einem Fehler wird das Promise mit einer Fehlermeldung abgelehnt. Fehlerbedingungen können Folgendes umfassen:

- Die URL des Dienstanbieters konnte nicht erreicht werden.
- Die Client-ID stimmte nicht mit der ID eines registrierten Clients überein.
- Die Redirect-URL stimmte mit keiner für diesen Client registrierten Redirect-URL überein.
- Der Benutzer hat sich nicht erfolgreich authentifiziert.
- Der Benutzer hat die Erweiterung nicht autorisiert.
- Der Parameter `interactive` wurde weggelassen oder war false, aber für die Autorisierung der Erweiterung wäre eine Benutzerinteraktion erforderlich gewesen.

## Syntax

```js-nolint
let authorizing = browser.identity.launchWebAuthFlow(
  details   // object
)
```

### Parameter

- `details`
  - : `object`. Optionen für den Flow mit den folgenden Eigenschaften:
    - `url`
      - : `string`. Die vom OAuth2-Dienstanbieter bereitgestellte URL zum Abrufen eines Zugriffstokens. Details zu dieser URL sollten in der Dokumentation des jeweiligen Dienstanbieters angegeben sein. Die URL-Parameter sollten jedoch immer Folgendes enthalten: die [Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) und die [Client-ID](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_extension) der Erweiterung.
    - `redirect_uri` {{optional_inline}}
      - : `string`. Dies stellt die URI dar, zu der Ihre Erweiterung umgeleitet wird, wenn der Flow abgeschlossen ist. Damit der Flow browserseitig funktioniert, ist dies nicht erforderlich, wenn sie mit der generierten Redirect-URL übereinstimmt. Siehe [Abrufen der Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url).
    - `interactive` {{optional_inline}}
      - : `boolean`. Wenn weggelassen oder auf `false` gesetzt, wird der Flow gezwungen, ohne Benutzerinteraktion abgeschlossen zu werden.

        Wenn der Benutzer bereits angemeldet ist und der Erweiterung bereits Zugriff gewährt hat, kann `launchWebAuthFlow()` ohne Benutzerinteraktion abgeschlossen werden. Andernfalls, wenn der Dienstanbieter verlangt, dass sich der Benutzer anmeldet oder die Erweiterung autorisiert, fordert `launchWebAuthFlow()` den Benutzer dazu auf: Der Flow ist also interaktiv.

        Erweiterungen sollten interaktive Flows nur als Reaktion auf eine Benutzeraktion starten. Manchmal möchten Erweiterungen jedoch auch ohne direkte Benutzeraktion auf die Daten des Benutzers zugreifen, beispielsweise wenn eine Erweiterung beim Starten des Browsers auf Daten zugreifen möchte.

        Dies ist der Zweck von `interactive`: Wenn Sie `interactive` weglassen oder auf `false` setzen, wird der Flow gezwungen, ohne Benutzerinteraktion beendet zu werden. Wenn der Dienstanbieter mit dem Benutzer interagieren muss, schlägt der Flow einfach fehl. Als allgemeine Regel gilt daher: Setzen Sie `interactive` auf `true`, wenn Sie den Flow als Reaktion auf eine Benutzeraktion starten, und lassen Sie ihn andernfalls weg.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Erweiterung erfolgreich autorisiert wurde, wird es mit einem String erfüllt, der die Redirect-URL enthält. Die URL enthält einen Parameter, der entweder ein Zugriffstoken ist oder mithilfe des dokumentierten Flows des jeweiligen Dienstanbieters gegen ein Zugriffstoken ausgetauscht werden kann.

## Beispiele

Diese Funktion autorisiert eine Erweiterung für den Zugriff auf die Google-Daten eines Benutzers gemäß der Dokumentation unter <https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow>. Die Validierung des zurückgegebenen Zugriffstokens wird hier nicht gezeigt:

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
