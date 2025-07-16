---
title: webRequest.BlockingResponse
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/BlockingResponse
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein Objekt dieses Typs wird von Ereignis-Listenern zurückgegeben, die `"blocking"` in ihrem `extraInfoSpec`-Argument gesetzt haben.

Indem bestimmte Eigenschaften in `BlockingResponse` gesetzt werden, kann der Listener Netzwerk-Anfragen verändern.

Beachten Sie, dass nicht alle Eigenschaften dieses Objektes in jedem Listener gesetzt werden können: Welche Eigenschaften Sie setzen können, hängt von dem Ereignis ab, das diesen Listener ausgelöst hat, wie unten detailliert beschrieben.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `authCredentials` {{optional_inline}}
  - : `object`. Falls gesetzt, wird die Anfrage mit den angegebenen Anmeldedaten gestellt. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}} setzen. Die `authCredentials`-Eigenschaft ist ein Objekt mit den folgenden Eigenschaften:
    - `username`
      - : `string`. Bereitzustellender Benutzername.
    - `password`
      - : `string`. Bereitzustellendes Passwort.

- `cancel` {{optional_inline}}
  - : `boolean`. Wenn `true`, wird die Anfrage abgebrochen. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}, {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}, {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}, und {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}} setzen.
- `redirectUrl` {{optional_inline}}
  - : `string`. Dies ist eine URL, und falls gesetzt, wird die ursprüngliche Anfrage auf diese URL umgeleitet. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} oder {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} setzen.

    Umleitungen zu nicht-HTTP-Schemata wie `data:` sind erlaubt. Weiterleitungen verwenden die gleiche Anfragemethode wie die ursprüngliche Anfrage, es sei denn, sie werden im `onHeadersReceived`-Stadium initiiert, in diesem Fall verwendet die Weiterleitung die GET-Methode.

    Wenn eine Erweiterung eine öffentliche (z. B. HTTPS) URL zu einer [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die datei `manifest.json` der Erweiterung einen [web_accessible_resources](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) Schlüssel enthalten, der die URL für die Erweiterungsseite auflistet.

- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Dies ist ein {{WebExtAPIRef('webRequest.HttpHeaders', "HttpHeaders")}}-Objekt, ein Array, in dem jedes Objekt einen Header darstellt. Wenn gesetzt, wird die Anfrage mit diesen Headern anstelle der ursprünglichen Header gemacht. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} setzen.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Dies ist ein {{WebExtAPIRef('webRequest.HttpHeaders', "HttpHeaders")}}-Objekt, ein Array, in dem jedes Objekt einen Header darstellt. Wenn gesetzt, wird angenommen, dass der Server mit diesen Antwort-Headern geantwortet hat anstelle der ursprünglichen. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} setzen. Wenn mehrere Erweiterungen versuchen, den gleichen Header (zum Beispiel `Content-Security-Policy`) zu setzen, wird nur eine der Änderungen erfolgreich sein.
- `upgradeToSecure` {{optional_inline}}
  - : `boolean`. Wenn auf `true` gesetzt und die ursprüngliche Anfrage eine HTTP-Anfrage ist, wird dies verhindern, dass die ursprüngliche Anfrage gesendet wird und stattdessen wird eine sichere (HTTPS) Anfrage gestellt. Wenn eine Erweiterung `redirectUrl` in `onBeforeRequest` zurückgibt, wird `upgradeToSecure` für diese Anfrage ignoriert. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} setzen.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#type-BlockingResponse) API. Diese Dokumentation leitet sich von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code ab.
