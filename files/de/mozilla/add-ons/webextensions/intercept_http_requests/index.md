---
title: HTTP-Anfragen abfangen
slug: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
l10n:
  sourceCommit: 8d766d1d1c60a2d6d2c95bd2aa9d0b297d9c70ac
---

{{AddonSidebar}}

Um HTTP-Anfragen abzufangen, verwenden Sie die {{WebExtAPIRef("webRequest")}} API.
Mit dieser API können Sie Listener für verschiedene Phasen einer HTTP-Anfrage hinzufügen.
In den Listenern können Sie:

- Zugriff auf Anfrage- und Antwort-Header und -Körper erhalten.
- Anfragen abbrechen und umleiten.
- Anfrage- und Antwort-Header ändern.

Dieser Artikel untersucht drei verschiedene Verwendungen des `webRequest` Moduls:

- Protokollieren von Anfrage-URLs, wenn sie gemacht werden.
- Umleiten von Anfragen.
- Ändern von Anfrage-Headern.

## Protokollieren von Anfrage-URLs

Um zu sehen, wie Sie `webRequest` verwenden können, um Anfragen zu protokollieren, erstellen Sie ein neues Verzeichnis namens "requests".
Erstellen Sie in diesem Verzeichnis eine Datei namens "manifest.json" und fügen Sie hinzu:

```json
{
  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": ["webRequest", "<all_urls>"],

  "background": {
    "scripts": ["background.js"]
  }
}
```

Erstellen Sie als nächstes eine Datei namens "background.js" und fügen Sie hinzu:

```js
function logURL(requestDetails) {
  console.log(`Loading: ${requestDetails.url}`);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

Sie verwenden {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}, um die `logURL()` Funktion unmittelbar vor Beginn der Anfrage aufzurufen. Die `logURL()` Funktion erfasst die URL der Anfrage aus dem Ereignisobjekt und protokolliert sie in der Browser-Konsole.
Das `{urls: ["<all_urls>"]}` [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) bedeutet, dass Sie HTTP-Anfragen an alle URLs abfangen.

Um dies zu testen:

- [Installieren Sie die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
- Öffnen Sie die [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/) (verwenden Sie <kbd>Ctrl + Shift + J</kbd>)
- Aktivieren Sie _Show Content Messages_ im Menü:

  ![Browser console menu: Show Content Messages](browser_console_show_content_messages.png)

- Öffnen Sie einige Webseiten.

In der Browser-Konsole sollten Sie die URLs für Ressourcen sehen, die der Browser anfragt.
Zum Beispiel zeigt dieser Screenshot die URLs vom Laden einer Wikipedia-Seite:

![Browser console menu: URLs from extension](browser_console_url_from_extension.png)

<!-- {{EmbedYouTube("X3rMgkRkB1Q")}} -->

## Umleiten von Anfragen

Verwenden Sie nun `webRequest`, um HTTP-Anfragen umzuleiten. Ersetzen Sie zuerst "manifest.json" mit diesem:

```json
{
  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": [
    "webRequest",
    "webRequestBlocking",
    "https://developer.mozilla.org/"
  ],

  "background": {
    "scripts": ["background.js"]
  }
}
```

Die Änderungen hier:

- Fügen Sie die `webRequestBlocking` [`permission`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hinzu.
  Diese zusätzliche Berechtigung wird benötigt, wenn eine Erweiterung eine Anfrage ändern möchte.
- Ersetzen Sie die `<all_urls>` Berechtigung durch einzelne [host permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), da es gute Praxis ist, die Anzahl der angeforderten Berechtigungen zu minimieren.

Ersetzen Sie als nächstes "background.js" mit diesem:

```js
let pattern = "https://developer.mozilla.org/*";
const targetUrl =
  "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension/frog.jpg";

function redirect(requestDetails) {
  console.log(`Redirecting: ${requestDetails.url}`);
  if (requestDetails.url === targetUrl) {
    return;
  }
  return {
    redirectUrl: targetUrl,
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

Auch hier verwenden Sie den {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} Event-Listener, um eine Funktion unmittelbar vor jeder Anfrage auszuführen.
Diese Funktion ersetzt die `redirectUrl` mit der Ziel-URL, die in der Funktion angegeben ist. In diesem Fall das Froschbild aus dem [Tutorial für Ihre zweite Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension).

Diesmal fangen Sie nicht jede Anfrage ab: die Option `{urls:[pattern], types:["image"]}` gibt an, dass Sie nur Anfragen (1) an URLs unter "https://developer.mozilla.org/" und (2) für Bildressourcen abfangen.
Weitere Informationen hierzu finden Sie unter {{WebExtAPIRef("webRequest.RequestFilter")}}.

Beachten Sie auch, dass Sie eine Option namens `"blocking"` übergeben: Sie müssen diese übergeben, wann immer Sie die Anfrage ändern möchten.
Es bewirkt, dass die Listener-Funktion die Netzwerk-Anfrage blockiert, sodass der Browser wartet, bis der Listener eine Rückmeldung gibt, bevor er fortfährt.
Weitere Informationen zu `"blocking"` finden Sie in der {{WebExtAPIRef("webRequest.onBeforeRequest")}} Dokumentation.

Um es zu testen, öffnen Sie eine Seite auf MDN, die Bilder enthält (zum Beispiel [die Seite, die UI-Komponenten der Erweiterung auflistet](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface)), [laden Sie die Erweiterung neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on), und laden Sie dann die MDN-Seite erneut. Sie sehen etwas wie dies:

![Images on a page replaced with a frog image](beastify_by_redirect.png)

## Ändern von Anfrage-Headern

Verwenden Sie abschließend `webRequest`, um Anfrage-Header zu ändern.
In diesem Beispiel ändern Sie den "User-Agent" Header, sodass der Browser sich als Opera 12.16 identifiziert, aber nur, wenn Sie Seiten unter "https://useragentstring.com/" besuchen.

Aktualisieren Sie die "manifest.json", um `https://useragentstring.com/` so einzuschließen:

```json
{
  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": [
    "webRequest",
    "webRequestBlocking",
    "https://useragentstring.com/"
  ],

  "background": {
    "scripts": ["background.js"]
  }
}
```

Ersetzen Sie "background.js" durch folgenden Code:

```js
let targetPage = "https://useragentstring.com/*";

let ua =
  "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

function rewriteUserAgentHeader(e) {
  e.requestHeaders.forEach((header) => {
    if (header.name.toLowerCase() === "user-agent") {
      header.value = ua;
    }
  });
  return { requestHeaders: e.requestHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  { urls: [targetPage] },
  ["blocking", "requestHeaders"],
);
```

Sie verwenden den {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} Event-Listener, um eine Funktion auszuführen, kurz bevor die Anfrage-Header gesendet werden.

Die Listener-Funktion wird nur für Anfragen an URLs aufgerufen, die mit dem `targetPage` [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) übereinstimmen.
Beachten Sie auch, dass Sie erneut `"blocking"` als Option übergeben. Sie übergeben auch `"requestHeaders"`, was bedeutet, dass dem Listener ein Array übergeben wird, das die Anfrage-Header enthält, die Sie senden möchten.
Weitere Informationen zu diesen Optionen finden Sie unter {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}.

Die Listener-Funktion sucht im Array der Anfrage-Header nach dem "User-Agent" Header, ersetzt dessen Wert mit dem Wert der `ua` Variable und gibt das modifizierte Array zurück.
Dieses modifizierte Array wird an den Server gesendet.

Um es zu testen, öffnen Sie [useragentstring.com](https://useragentstring.com/) und überprüfen Sie, dass es den Browser als Firefox identifiziert.
Laden Sie dann die Erweiterung neu, laden Sie [useragentstring.com](https://useragentstring.com/) neu, und sehen Sie, dass Firefox nun als Opera identifiziert wird.

![useragentstring.com showing details of the modified user agent string](modified_request_header.png)

## Mehr erfahren

Um mehr über alle Dinge zu erfahren, die Sie mit der `webRequest` API machen können, sehen Sie sich die [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) an.
