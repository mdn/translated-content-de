---
title: webRequest.BlockingResponse
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/BlockingResponse
l10n:
  sourceCommit: 803693373b182fe77dbb7873c0ec4cdf33f9defb
---

{{AddonSidebar}}

Ein Objekt dieser Art wird von Event-Listenern zurückgegeben, die `"blocking"` in ihrem `extraInfoSpec`-Argument gesetzt haben.

Durch das Setzen bestimmter Eigenschaften im `BlockingResponse` kann der Listener Netzwerk-Anfragen modifizieren.

Beachten Sie, dass Sie nicht alle Eigenschaften dieses Objekts in jedem Listener setzen können: Die Eigenschaften, die Sie setzen können, hängen von dem Ereignis ab, das diesen Listener ausgelöst hat, wie unten beschrieben.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `authCredentials` {{optional_inline}}

  - : `object`. Falls gesetzt, wird die Anfrage unter Verwendung der angegebenen Anmeldeinformationen durchgeführt. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}} setzen. Die Eigenschaft `authCredentials` ist ein Objekt mit den folgenden Eigenschaften:

    - `username`
      - : `string`. Bereitzustellender Benutzername.
    - `password`
      - : `string`. Bereitzustellendes Passwort.

- `cancel` {{optional_inline}}
  - : `boolean`. Falls `true`, wird die Anfrage abgebrochen. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}, {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}, {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}, und {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}} setzen.
- `redirectUrl` {{optional_inline}}

  - : `string`. Dies ist eine URL, und wenn gesetzt, wird die ursprüngliche Anfrage auf diese URL umgeleitet. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} oder {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} setzen.

    Umleitungen zu Nicht-HTTP-Schemata wie `data:` sind erlaubt. Weiterleitungen verwenden dieselbe Anfragemethode wie die ursprüngliche Anfrage, es sei denn, sie werden aus der `onHeadersReceived`-Phase initiiert. In diesem Fall verwendet die Weiterleitung die GET-Methode.

    Wenn eine Erweiterung eine öffentliche (z. B. HTTPS) URL auf eine [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die manifest.json-Datei der Erweiterung einen [web_accessible_resources](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)-Schlüssel enthalten, der die URL für die Erweiterungsseite auflistet.

- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Dies ist ein {{WebExtAPIRef('webRequest.HttpHeaders', "HttpHeaders")}}-Objekt, ein Array, in dem jedes Objekt einen Header darstellt. Wenn gesetzt, wird die Anfrage mit diesen Headern anstelle der ursprünglichen Header durchgeführt. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} setzen.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Dies ist ein {{WebExtAPIRef('webRequest.HttpHeaders', "HttpHeaders")}}-Objekt, ein Array, in dem jedes Objekt einen Header darstellt. Wenn gesetzt, wird angenommen, dass der Server mit diesen Antwort-Headern anstelle der Originale geantwortet hat. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} setzen. Wenn mehrere Erweiterungen versuchen, denselben Header (z. B. `Content-Security-Policy`) zu setzen, wird nur eine der Änderungen erfolgreich sein.
- `upgradeToSecure` {{optional_inline}}
  - : `boolean`. Wenn auf `true` gesetzt und die ursprüngliche Anfrage eine HTTP-Anfrage ist, wird die ursprüngliche Anfrage nicht gesendet und stattdessen eine sichere (HTTPS) Anfrage gestellt. Wenn eine Erweiterung `redirectUrl` in `onBeforeRequest` zurückgibt, wird `upgradeToSecure` für diese Anfrage ignoriert. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} setzen.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#type-BlockingResponse) API von Chromium. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
