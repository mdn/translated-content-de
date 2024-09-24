---
title: HTTP-Anfragen abfangen
slug: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
l10n:
  sourceCommit: 8d766d1d1c60a2d6d2c95bd2aa9d0b297d9c70ac
---

{{AddonSidebar}}

Um HTTP-Anfragen abzufangen, verwenden Sie die {{WebExtAPIRef("webRequest")}}-API.
Diese API ermöglicht es Ihnen, Listener für verschiedene Phasen eines HTTP-Anfragevorgangs hinzuzufügen. In den Listenern können Sie:

- Zugriff auf Anforderungsheader und -körper sowie Antwortheader erhalten.
- Anfragen abbrechen und umleiten.
- Anforderungs- und Antwortheader modifizieren.

Dieser Artikel behandelt drei verschiedene Verwendungszwecke des `webRequest` Moduls:

- Protokollierung von Anfrage-URLs, während sie gestellt werden.
- Umleitung von Anfragen.
- Modifizierung von Anforderungsheadern.

## Protokollierung von Anfrage-URLs

Um zu sehen, wie Sie `webRequest` zur Protokollierung von Anfragen verwenden können, erstellen Sie ein neues Verzeichnis namens "requests".
Erstellen Sie in diesem Verzeichnis eine Datei namens "manifest.json" und ergänzen Sie:

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

Erstellen Sie als Nächstes eine Datei namens "background.js" und fügen Sie hinzu:

```js
function logURL(requestDetails) {
  console.log(`Loading: ${requestDetails.url}`);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

Sie verwenden {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}, um die Funktion `logURL()` kurz vor dem Start der Anfrage aufzurufen. Die Funktion `logURL()` greift die URL der Anfrage aus dem Ereignisobjekt ab und protokolliert sie in der Browser-Konsole.
Das `{urls: ["<all_urls>"]}` [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) bedeutet, dass Sie HTTP-Anfragen an alle URLs abfangen.

Zum Testen:

- [Installieren Sie die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
- Öffnen Sie die [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/) (verwenden Sie <kbd>Strg + Umschalt + J</kbd>)
- Aktivieren Sie _Inhaltsmeldungen anzeigen_ im Menü:

  ![Browser-Konsolenmenü: Inhaltsmeldungen anzeigen](browser_console_show_content_messages.png)

- Öffnen Sie einige Webseiten.

In der Browser-Konsole sollten Sie die URLs für alle Ressourcen sehen, die der Browser anfordert.
Zum Beispiel zeigt dieser Screenshot die URLs beim Laden einer Wikipedia-Seite:

![Browser-Konsolenmenü: URLs von der Erweiterung](browser_console_url_from_extension.png)

<!-- {{EmbedYouTube("X3rMgkRkB1Q")}} -->

## Anfragen umleiten

Verwenden Sie nun `webRequest`, um HTTP-Anfragen umzuleiten. Ersetzen Sie zuerst "manifest.json" durch Folgendes:

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

- Fügen Sie die `webRequestBlocking` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hinzu.
  Diese zusätzliche Berechtigung ist erforderlich, wenn eine Erweiterung eine Anfrage modifizieren möchte.
- Ersetzen Sie die `<all_urls>`-Berechtigung durch individuelle [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), da es eine gute Praxis ist, die Anzahl der angeforderten Berechtigungen zu minimieren.

Ersetzen Sie als Nächstes "background.js" durch Folgendes:

```js
let pattern = "https://developer.mozilla.org/*";
const targetUrl =
  "https://developer.mozilla.org/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension/frog.jpg";

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

Wieder verwenden Sie den {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}-Ereignislistener, um eine Funktion kurz vor jeder gestellten Anfrage auszuführen.
Diese Funktion ersetzt die `redirectUrl` durch die in der Funktion angegebene Ziel-URL. In diesem Fall ist es das Frosch-Bild aus dem [Ihr zweites Erweiterungs-Tutorial](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension).

Dieses Mal fangen Sie nicht jede Anfrage ab: die `{urls:[pattern], types:["image"]}`-Option gibt an, dass Sie nur Anfragen (1) an URLs unter "https\://developer.mozilla.org/" und (2) für Bildressourcen abfangen.
Siehe {{WebExtAPIRef("webRequest.RequestFilter")}} für mehr dazu.

Beachten Sie außerdem, dass Sie eine Option namens `"blocking"` übergeben: Diese müssen Sie immer übergeben, wenn Sie die Anfrage modifizieren möchten.
Sie bewirkt, dass die Listener-Funktion die Netzwerk-Anfrage blockiert, sodass der Browser wartet, bis der Listener zurückkehrt, bevor es weitergeht.
Siehe die {{WebExtAPIRef("webRequest.onBeforeRequest")}}-Dokumentation für mehr zu `"blocking"`.

Um es zu testen, öffnen Sie eine Seite auf MDN, die Bilder enthält (zum Beispiel [die Seite, die Komponenten der Benutzeroberfläche von Erweiterungen auflistet](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface)), [laden Sie die Erweiterung neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on) und laden Sie dann die MDN-Seite neu. Sie sehen etwas Ähnliches:

![Bilder auf einer Seite durch ein Frosch-Bild ersetzt](beastify_by_redirect.png)

## Anforderungsheader modifizieren

Verwenden Sie schließlich `webRequest`, um Anforderungsheader zu modifizieren.
In diesem Beispiel ändern Sie den "User-Agent"-Header, sodass sich der Browser als Opera 12.16 ausgibt, jedoch nur beim Besuch von Seiten unter "https\://useragentstring.com/".

Aktualisieren Sie die "manifest.json", um `https://useragentstring.com/` wie folgt einzuschließen:

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

Ersetzen Sie "background.js" durch Code wie diesen:

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

Sie verwenden den {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}-Ereignislistener, um eine Funktion kurz bevor die Anforderungsheader gesendet werden, auszuführen.

Die Listener-Funktion wird nur für Anfragen an URLs aufgerufen, die zum `targetPage` [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) passen.
Beachten Sie auch, dass Sie erneut `"blocking"` als Option übergeben. Sie übergeben auch `"requestHeaders"`, was bedeutet, dass dem Listener ein Array mit den zu sendenden Anforderungsheadern übergeben wird.
Siehe {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}} für weitere Informationen zu diesen Optionen.

Die Listener-Funktion sucht im Array der Anforderungsheader nach dem "User-Agent"-Header, ersetzt dessen Wert mit dem Wert der `ua`-Variable und gibt das modifizierte Array zurück.
Dieses modifizierte Array wird an den Server gesendet.

Um es zu testen, öffnen Sie [useragentstring.com](https://useragentstring.com/) und prüfen Sie, ob der Browser als Firefox erkannt wird.
Laden Sie dann die Erweiterung neu, laden Sie [useragentstring.com](https://useragentstring.com/) neu und sehen Sie, dass Firefox jetzt als Opera erkannt wird.

![useragentstring.com zeigt Details des modifizierten User-Agent-Strings](modified_request_header.png)

## Mehr erfahren

Um mehr über alle Möglichkeiten zu erfahren, die Sie mit der `webRequest` API haben, lesen Sie die [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).
