---
title: webRequest.BlockingResponse
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/BlockingResponse
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ein Objekt dieses Typs wird von Ereignis-Listenern zurückgegeben, die `"blocking"` in ihrem `extraInfoSpec`-Argument festgelegt haben.

Durch das Setzen bestimmter Eigenschaften in `BlockingResponse` kann der Listener Netzwerkabfragen modifizieren.

Beachten Sie, dass Sie nicht alle Eigenschaften dieses Objekts in jedem Listener festlegen können: Die Eigenschaften, die Sie festlegen können, hängen vom Ereignis ab, das diesen Listener ausgelöst hat, wie unten beschrieben.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `authCredentials` {{optional_inline}}

  - : `object`. Wenn festgelegt, wird die Anfrage mit den angegebenen Anmeldedaten gestellt. Diese Eigenschaft kann nur in {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}} gesetzt werden. Die `authCredentials`-Eigenschaft ist ein Objekt mit den folgenden Eigenschaften:

    - `username`
      - : `string`. Anzugeben ist der Benutzername.
    - `password`
      - : `string`. Anzugeben ist das Passwort.

- `cancel` {{optional_inline}}
  - : `boolean`. Wenn `true`, wird die Anfrage abgebrochen. Diese Eigenschaft kann nur in {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}, {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}, {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} und {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}} gesetzt werden.
- `redirectUrl` {{optional_inline}}

  - : `string`. Dies ist eine URL, und wenn festgelegt, wird die ursprüngliche Anfrage auf diese URL umgeleitet. Diese Eigenschaft kann nur in {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} oder {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} gesetzt werden.

    Umleitungen zu Nicht-HTTP-Schemata wie data: sind erlaubt, werden jedoch momentan nicht unterstützt ([Firefox bug 707624](https://bugzil.la/707624)). Umleitungen verwenden dieselbe Anfragemethode wie die ursprüngliche Anfrage, es sei denn, die Umleitung wird im `onHeadersReceived`-Stadium initiiert. In diesem Fall wird die GET-Methode verwendet.

    Wenn eine Erweiterung eine öffentliche (z. B. HTTPS) URL auf eine [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die manifest.json-Datei der Erweiterung einen [web_accessible_resources](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)-Schlüssel enthalten, der die URL für die Erweiterungsseite auflistet.

- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Dies ist ein {{WebExtAPIRef('webRequest.HttpHeaders', "HttpHeaders")}}-Objekt, ein Array, in dem jedes Objekt einen Header darstellt. Wenn festgelegt, wird die Anfrage mit diesen Headern anstelle der ursprünglichen Header gestellt. Diese Eigenschaft kann nur in {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} gesetzt werden.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Dies ist ein {{WebExtAPIRef('webRequest.HttpHeaders', "HttpHeaders")}}-Objekt, ein Array, in dem jedes Objekt einen Header darstellt. Wenn festgelegt, geht man davon aus, dass der Server mit diesen Antwort-Headern anstelle der ursprünglichen geantwortet hat. Diese Eigenschaft kann nur in {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} gesetzt werden. Wenn mehrere Erweiterungen versuchen, denselben Header (zum Beispiel `Content-Security-Policy`) zu setzen, wird nur eine der Änderungen erfolgreich sein.
- `upgradeToSecure` {{optional_inline}}
  - : `boolean`. Wenn auf `true` gesetzt und die ursprüngliche Anfrage eine HTTP-Anfrage ist, wird die ursprüngliche Anfrage verhindert und stattdessen eine sichere (HTTPS) Anfrage gestellt. Wenn eine Erweiterung `redirectUrl` in `onBeforeRequest` zurückgibt, wird `upgradeToSecure` für diese Anfrage ignoriert. Sie können diese Eigenschaft nur in {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} setzen.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#type-BlockingResponse) API. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->