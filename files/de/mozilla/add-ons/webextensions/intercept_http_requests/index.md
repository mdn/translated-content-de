---
title: Abfangen von HTTP-Anfragen
slug: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Um HTTP-Anfragen abzufangen, verwenden Sie die {{WebExtAPIRef("webRequest")}}-API.
Diese API ermöglicht es Ihnen, Listener für verschiedene Phasen beim Erstellen einer HTTP-Anfrage hinzuzufügen.
In den Listenern können Sie:

- Zugriff auf Anforderungs- und Antwortheader sowie Anforderungsinhalte erhalten.
- Anfragen abbrechen und umleiten.
- Anforderungs- und Antwortheader ändern.

Dieser Artikel behandelt drei verschiedene Anwendungen des `webRequest`-Moduls:

- Protokollieren von Anforderungs-URLs beim Erstellen.
- Umleiten von Anfragen.
- Ändern von Anforderungsheadern.

## Protokollierung von Anforderungs-URLs

Um zu sehen, wie Sie `webRequest` zum Protokollieren von Anfragen verwenden können, erstellen Sie ein neues Verzeichnis namens "requests".
Erstellen Sie in diesem Verzeichnis eine Datei namens "manifest.json" und fügen Sie Folgendes hinzu:

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

Erstellen Sie als Nächstes eine Datei namens "background.js" und fügen Sie Folgendes hinzu:

```js
function logURL(requestDetails) {
  console.log(`Loading: ${requestDetails.url}`);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

Sie verwenden {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}, um die Funktion `logURL()` unmittelbar vor dem Start der Anfrage aufzurufen. Die Funktion `logURL()` erfasst die URL der Anfrage aus dem Ereignisobjekt und protokolliert sie in der Browser-Konsole.
Das `{urls: ["<all_urls>"]}` [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) bedeutet, dass Sie HTTP-Anfragen an alle URLs abfangen.

Um es zu testen:

- [Installieren Sie die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
- Öffnen Sie die [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/) (verwenden Sie <kbd>Strg + Umschalt + J</kbd>)
- Aktivieren Sie _Inhaltsnachrichten anzeigen_ im Menü:

  ![Browser-Konsole Menü: Inhaltsnachrichten anzeigen](browser_console_show_content_messages.png)

- Öffnen Sie einige Webseiten.

In der Browser-Konsole sollten Sie die URLs für alle Ressourcen sehen, die der Browser anfordert.
Zum Beispiel zeigt dieser Screenshot die URLs vom Laden einer Wikipedia-Seite:

![Browser-Konsole Menü: URLs von der Erweiterung](browser_console_url_from_extension.png)

<!-- {{EmbedYouTube("X3rMgkRkB1Q")}} -->

## Umleiten von Anfragen

Verwenden Sie nun `webRequest`, um HTTP-Anfragen umzuleiten. Ersetzen Sie zunächst "manifest.json" durch Folgendes:

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

- Fügen Sie die `webRequestBlocking` [`Berechtigung`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hinzu.
  Diese zusätzliche Berechtigung ist erforderlich, wenn eine Erweiterung eine Anfrage ändern möchte.
- Ersetzen Sie die `<all_urls>` Berechtigung durch einzelne [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), da dies eine gute Praxis ist, um die Anzahl der angeforderten Berechtigungen zu minimieren.

Ersetzen Sie als Nächstes "background.js" durch Folgendes:

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

Wieder verwenden Sie den {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} Ereignis-Listener, um eine Funktion kurz vor jeder Anfrage auszuführen.
Diese Funktion ersetzt die `redirectUrl` durch die im Funktions-Parameter angegebenen URL. In diesem Fall das Froschbild aus dem [Ihr zweites Extension-Tutorial](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension).

Diesmal fangen Sie nicht jede Anfrage ab: Die Option `{urls:[pattern], types:["image"]}` gibt an, dass Sie nur Anfragen (1) an URLs unter "https\://developer.mozilla.org/" und (2) für Bildressourcen abfangen.
Weitere Informationen dazu finden Sie in {{WebExtAPIRef("webRequest.RequestFilter")}}.

Beachten Sie auch, dass Sie eine Option namens `"blocking"` übergeben: Sie müssen dies immer tun, wenn Sie die Anfrage verändern möchten.
Es bewirkt, dass die Listener-Funktion die Netzwerk-Anfrage blockiert, sodass der Browser wartet, bis der Listener zurückgibt, bevor er fortfährt.
Weitere Informationen zu `"blocking"` finden Sie in der {{WebExtAPIRef("webRequest.onBeforeRequest")}} Dokumentation.

Um es auszuprobieren, öffnen Sie eine Seite auf MDN, die Bilder enthält (zum Beispiel [die Seite mit der Liste der Benutzeroberflächenkomponenten für Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface)), [laden Sie die Erweiterung neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on), und laden Sie dann die MDN-Seite neu. Sie sehen etwas wie dieses:

![Bilder auf einer Seite, ersetzt durch ein Froschbild](beastify_by_redirect.png)

## Modifizieren von Anforderungsheadern

Schließlich verwenden Sie `webRequest`, um Anforderungsheader zu ändern.
In diesem Beispiel ändern Sie den "User-Agent"-Header, sodass sich der Browser als Opera 12.16 identifiziert, aber nur beim Besuch von Seiten unter "https\://useragentstring.com/".

Aktualisieren Sie die "manifest.json", um `https://useragentstring.com/` wie folgt einzubeziehen:

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

Sie verwenden den {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} Ereignis-Listener, um eine Funktion kurz bevor die Anfrage-Header gesendet werden, auszuführen.

Die Listenerfunktion wird nur für Anfragen an URLs aufgerufen, die dem `targetPage` [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) entsprechen.
Beachten Sie auch, dass Sie erneut `"blocking"` als Option übergeben. Sie übergeben auch `"requestHeaders"`, was bedeutet, dass dem Listener ein Array mit den Anforderungsheadern übergeben wird, die Sie zu senden erwarten.
Weitere Informationen zu diesen Optionen finden Sie unter {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}.

Die Listenerfunktion sucht im Array der Anforderungsheader nach dem "User-Agent"-Header, ersetzt dessen Wert durch den Wert der `ua`-Variable und gibt das modifizierte Array zurück.
Dieses modifizierte Array wird an den Server gesendet.

Um es auszuprobieren, öffnen Sie [useragentstring.com](https://useragentstring.com/) und prüfen Sie, dass der Browser als Firefox identifiziert wird.
Laden Sie dann die Erweiterung neu, laden Sie [useragentstring.com](https://useragentstring.com/) neu und sehen Sie, dass Firefox nun als Opera identifiziert wird.

![useragentstring.com zeigt Details der modifizierten User-Agent-Zeichenfolge an](modified_request_header.png)

## Mehr erfahren

Um mehr über all die Dinge zu erfahren, die Sie mit der `webRequest`-API tun können, sehen Sie sich deren [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) an.
