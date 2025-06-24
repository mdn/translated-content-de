---
title: webRequest.BlockingResponse
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/BlockingResponse
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ein Objekt dieses Typs wird von Event-Listenern zurückgegeben, die `"blocking"` in ihrem `extraInfoSpec` Argument gesetzt haben.

Indem bestimmte Eigenschaften in `BlockingResponse` festgelegt werden, kann der Listener Netzwerk-Anfragen modifizieren.

Beachten Sie, dass Sie nicht alle Eigenschaften dieses Objekts in jedem Listener festlegen können: Welche Eigenschaften Sie setzen können, hängt von dem Ereignis ab, das diesen Listener ausgelöst hat, wie unten beschrieben.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `authCredentials` {{optional_inline}}

  - : `object`. Wenn festgelegt, wird die Anfrage mit den angegebenen Anmeldeinformationen gesendet. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}} festlegen. Die `authCredentials` Eigenschaft ist ein Objekt mit den folgenden Eigenschaften:
    - `username`
      - : `string`. Benutzername, der angegeben werden soll.
    - `password`
      - : `string`. Passwort, das angegeben werden soll.

- `cancel` {{optional_inline}}
  - : `boolean`. Wenn `true`, wird die Anfrage abgebrochen. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}, {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}, {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} und {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}} festlegen.
- `redirectUrl` {{optional_inline}}

  - : `string`. Dies ist eine URL, und wenn festgelegt, wird die ursprüngliche Anfrage an diese URL umgeleitet. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} oder {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} festlegen.

    Umleitungen zu nicht-HTTP-Schemata wie `data:` sind erlaubt. Umleitungen verwenden dieselbe Anfragemethode wie die ursprüngliche Anfrage, es sei denn, sie werden vom `onHeadersReceived`-Stadium initiiert. In diesem Fall wird die GET-Methode verwendet.

    Wenn eine Erweiterung eine öffentliche (z.B. HTTPS) URL zu einer [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die manifest.json-Datei der Erweiterung ein [web_accessible_resources](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) Schlüssel enthalten, der die URL der Erweiterungsseite auflistet.

- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Dies ist ein {{WebExtAPIRef('webRequest.HttpHeaders', "HttpHeaders")}} Objekt, ein Array, in dem jedes Objekt einen Header darstellt. Wenn gesetzt, wird die Anfrage mit diesen Headers statt der ursprünglichen Headers gesendet. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} festlegen.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Dies ist ein {{WebExtAPIRef('webRequest.HttpHeaders', "HttpHeaders")}} Objekt, ein Array, in dem jedes Objekt einen Header darstellt. Wenn gesetzt, wird davon ausgegangen, dass der Server mit diesen Antwort-Headers anstelle der ursprünglichen geantwortet hat. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} festlegen. Wenn mehrere Erweiterungen versuchen, denselben Header festzulegen (zum Beispiel `Content-Security-Policy`), wird nur eine der Änderungen erfolgreich sein.
- `upgradeToSecure` {{optional_inline}}
  - : `boolean`. Wenn auf `true` gesetzt und die ursprüngliche Anfrage eine HTTP-Anfrage ist, wird die ursprüngliche Anfrage verhindert, und stattdessen wird eine sichere (HTTPS) Anfrage gemacht. Wenn eine Erweiterung `redirectUrl` in `onBeforeRequest` zurückgibt, wird `upgradeToSecure` für diese Anfrage ignoriert. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} festlegen.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#type-BlockingResponse) API. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
