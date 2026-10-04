---
title: identity.launchWebAuthFlow()
slug: Mozilla/Add-ons/WebExtensions/API/identity/launchWebAuthFlow
l10n:
  sourceCommit: 5137b45128dcf07ac636da68184f00aab30ec1cc
---

Führt den ersten Teil eines [OAuth2](https://oauth.net/2/)-Ablaufs aus, einschließlich der Authentifizierung des Benutzers und der Autorisierung des Clients.

Der einzige obligatorische Parameter dieser Funktion ist die Autorisierungs-URL des Dienstanbieters. Sie muss mehrere URL-Parameter enthalten, darunter die [Weiterleitungs-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) und die [Client-ID](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_extension) der Erweiterung. Der Dienstanbieter führt anschließend bei Bedarf folgende Schritte aus:

- Er authentifiziert den Benutzer beim Dienstanbieter, falls dieser noch nicht angemeldet ist.
- Er fordert den Benutzer auf, die Erweiterung für den Zugriff auf die angeforderten Daten zu autorisieren, falls der Benutzer die Erweiterung noch nicht autorisiert hat.

Wenn weder eine Authentifizierung noch eine Autorisierung erforderlich ist, wird die Funktion ohne Benutzerinteraktion abgeschlossen.

Die Funktion akzeptiert außerdem den optionalen Parameter `interactive`: Wird er weggelassen oder auf false gesetzt, muss der Ablauf ohne Benutzerinteraktion abgeschlossen werden. Muss sich der Benutzer in diesem Fall authentifizieren oder die Erweiterung autorisieren, schlägt der Vorgang fehl.

Diese Funktion gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück: Wenn Authentifizierung und Autorisierung erfolgreich waren, wird das Promise mit einer Weiterleitungs-URL erfüllt, die mehrere URL-Parameter enthält. Je nach dem OAuth2-Ablauf des jeweiligen Dienstanbieters muss die Erweiterung weitere Schritte ausführen, um einen gültigen Zugriffscode zu erhalten, mit dem sie anschließend auf die Daten des Benutzers zugreifen kann.

Bei einem Fehler wird das Promise mit einer Fehlermeldung zurückgewiesen. Mögliche Fehlerursachen sind:

- Die URL des Dienstanbieters war nicht erreichbar.
- Die Client-ID stimmte nicht mit der ID eines registrierten Clients überein.
- Die Weiterleitungs-URL stimmte mit keiner der für diesen Client registrierten Weiterleitungs-URLs überein.
- Die Authentifizierung des Benutzers war nicht erfolgreich.
- Der Benutzer hat die Erweiterung nicht autorisiert.
- Der Parameter `interactive` wurde weggelassen oder auf false gesetzt, obwohl zur Autorisierung der Erweiterung eine Benutzerinteraktion erforderlich gewesen wäre.

## Syntax

```js-nolint
let authorizing = browser.identity.launchWebAuthFlow(
  details   // object
)
```

### Parameter

- `details`
  - : `object`. Optionen für den Ablauf mit den folgenden Eigenschaften:
    - `url`
      - : `string`. Die vom OAuth2-Dienstanbieter bereitgestellte URL zum Abrufen eines Zugriffstokens. Einzelheiten zu dieser URL sollten in der Dokumentation des jeweiligen Dienstanbieters stehen. Die URL-Parameter sollten jedoch immer die [Weiterleitungs-URL](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) und die [Client-ID](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_extension) der Erweiterung enthalten.
    - `redirect_uri` {{optional_inline}}
      - : `string`. Die URI, an die Ihre Erweiterung nach Abschluss des Ablaufs weitergeleitet wird. Damit der Ablauf browserseitig funktioniert, ist diese Angabe nicht erforderlich, wenn sie mit der generierten Weiterleitungs-URL übereinstimmt. Siehe [Weiterleitungs-URL abrufen](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url).
    - `interactive` {{optional_inline}}
      - : `boolean`. Wird dieser Parameter weggelassen oder auf `false` gesetzt, muss der Ablauf ohne Benutzerinteraktion abgeschlossen werden.

        Wenn der Benutzer bereits angemeldet ist und der Erweiterung bereits Zugriff gewährt hat, kann `launchWebAuthFlow()` ohne Benutzerinteraktion abgeschlossen werden. Andernfalls – wenn der Dienstanbieter eine Anmeldung oder die Autorisierung der Erweiterung durch den Benutzer benötigt – fordert `launchWebAuthFlow()` den Benutzer zur Interaktion auf.

        Erweiterungen sollten interaktive Abläufe nur als Reaktion auf eine Benutzeraktion starten. Manchmal möchten Erweiterungen jedoch auch ohne direkte Benutzeraktion auf die Daten des Benutzers zugreifen, beispielsweise beim Start des Browsers.

        Dafür ist `interactive` vorgesehen: Wenn Sie `interactive` weglassen oder auf `false` setzen, muss der Ablauf ohne Benutzerinteraktion abgeschlossen werden. Benötigt der Dienstanbieter eine Interaktion mit dem Benutzer, schlägt der Ablauf fehl. Als Faustregel gilt daher: Setzen Sie `interactive` auf `true`, wenn Sie den Ablauf als Reaktion auf eine Benutzeraktion starten, und lassen Sie den Parameter andernfalls weg.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Erweiterung erfolgreich autorisiert wurde, wird es mit einem String erfüllt, der die Weiterleitungs-URL enthält. Die URL enthält einen Parameter, der entweder ein Zugriffstoken ist oder gemäß dem dokumentierten Ablauf des jeweiligen Dienstanbieters gegen ein Zugriffstoken eingetauscht werden kann.

## Beispiele

Diese Funktion autorisiert eine Erweiterung gemäß der Dokumentation unter <https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow> für den Zugriff auf die Google-Daten eines Benutzers. Die Validierung des zurückgegebenen Zugriffstokens wird hier nicht gezeigt:

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
