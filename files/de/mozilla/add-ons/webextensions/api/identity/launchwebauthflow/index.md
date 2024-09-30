---
title: identity.launchWebAuthFlow
slug: Mozilla/Add-ons/WebExtensions/API/identity/launchWebAuthFlow
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Führt den ersten Teil eines [OAuth2](https://oauth.net/2/) Flusses durch, einschließlich Benutzer-Authentifizierung und Client-Autorisierung.

Der einzige obligatorische Parameter dieser Funktion ist die Autorisierungs-URL des Dienstanbieters, die eine Reihe von URL-Parametern enthalten muss, einschließlich der [Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) und der [Client-ID](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_add-on) der Erweiterung. Der Dienstanbieter:

- authentifiziert den Benutzer mit dem Dienstanbieter, falls nötig (das heißt: wenn er nicht bereits angemeldet ist)
- fordert den Benutzer auf, der Erweiterung die Erlaubnis zu erteilen, auf die angeforderten Daten zuzugreifen, falls nötig (das heißt: wenn der Benutzer die Erweiterung nicht bereits autorisiert hat)

Beachten Sie, dass, wenn weder Authentifizierung noch Autorisierung erforderlich sind, diese Funktion stillschweigend abgeschlossen wird, ohne jegliche Benutzerinteraktion.

Diese Funktion nimmt auch einen optionalen Parameter `interactive`: Wenn dieser weggelassen wird oder auf false gesetzt ist, wird der Fluss dazu gezwungen, stillschweigend abzuschließen. In diesem Fall, wenn der Benutzer sich authentifizieren oder autorisieren muss, schlägt die Operation einfach fehl.

Diese Funktion gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück: Wenn Authentifizierung und Autorisierung erfolgreich waren, wird das Versprechen mit einer Redirect-URL erfüllt, die mehrere URL-Parameter enthält. Abhängig vom implementierten OAuth2-Fluss des betreffenden Dienstanbieters muss die Erweiterung weitere Schritte unternehmen, um einen gültigen Zugriffscode zu erhalten, mit dem sie dann auf die Daten des Benutzers zugreifen kann.

Falls ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt. Fehlerbedingungen können umfassen:

- Die URL des Dienstanbieters konnte nicht erreicht werden
- Die Client-ID stimmte nicht mit der ID eines registrierten Clients überein
- Die Redirect-URL stimmte nicht mit einer registrierten Redirect-URL für diesen Client überein
- Der Benutzer meldete sich nicht erfolgreich an
- Der Benutzer autorisierte die Erweiterung nicht
- Der `interactive` Parameter wurde weggelassen oder war false, aber Benutzerinteraktion hätte benötigt werden können, um die Erweiterung zu autorisieren.

## Syntax

```js-nolint
let authorizing = browser.identity.launchWebAuthFlow(
  details   // object
)
```

### Parameter

- `details`

  - : `object`. Optionen für den Fluss, die folgende Eigenschaften enthalten:

    - `url`
      - : `string`. Die von dem OAuth2-Dienstanbieter angebotene URL, um ein Zugangstoken zu erhalten. Die Details dieser URL sollten in der Dokumentation des betreffenden Dienstanbieters gegeben sein, aber die URL-Parameter sollten immer enthalten:
    - `redirect_uri` {{optional_inline}}
      - : `string`. Dies repräsentiert die URI, zu der Ihre Erweiterung umgeleitet wird, wenn der Fluss abgeschlossen ist. Nicht erforderlich, damit der Fluss auf der Browser-Seite funktioniert, wenn er mit der generierten Redirect-URL übereinstimmt. Siehe [Erhalten der Redirect-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url).
    - `interactive` {{optional_inline}}

      - : `boolean`. Wenn weggelassen oder `false`, wird der Fluss gezwungen, ohne jegliche Benutzerinteraktion stillschweigend abzuschließen.

        Wenn der Benutzer bereits angemeldet ist und bereits Zugangsberechtigung für die Erweiterung erteilt hat, dann kann `launchWebAuthFlow()` ohne jegliche Benutzerinteraktion stillschweigend abgeschlossen werden. Andernfalls (wenn der Dienstanbieter den Benutzer auffordern muss, sich anzumelden oder die Erweiterung zu autorisieren), wird `launchWebAuthFlow()` den Benutzer auffordern: Das heißt, der Fluss wird interaktiv sein.

        Erweiterungen sollten keinen interaktiven Fluss starten, außer als Reaktion auf eine Benutzeraktion. Manchmal wollen Erweiterungen jedoch dennoch auf die Daten des Benutzers zugreifen, ohne eine direkte Benutzeraktion (stellen Sie sich beispielsweise eine Erweiterung vor, die beim Starten des Browsers auf Daten zugreifen möchte).

        Dies ist der Zweck von `interactive`: Wenn Sie `interactive` weglassen oder auf `false` setzen, wird der Fluss gezwungen, stillschweigend abzuschließen: Wenn der Dienstanbieter mit dem Benutzer interagieren muss, schlägt der Fluss einfach fehl. Als allgemeine Regel: Setzen Sie `interactive` auf `true`, wenn Sie den Fluss als Reaktion auf eine Benutzeraktion starten, und lassen Sie es andernfalls weg.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Erweiterung erfolgreich autorisiert ist, wird dies mit einem String erfüllt, der die Redirect-URL enthält. Die URL wird einen Parameter enthalten, der entweder ein Zugangstoken ist oder gegen ein Zugangstoken eingetauscht werden kann, durch den dokumentierten Fluss für den spezifischen Dienstanbieter.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Diese Funktion autorisiert eine Erweiterung, auf die Google-Daten eines Benutzers zuzugreifen, gemäß der Dokumentation unter <https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow>. Die Validierung des zurückgegebenen Zugangstokens wird hier nicht gezeigt:

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
