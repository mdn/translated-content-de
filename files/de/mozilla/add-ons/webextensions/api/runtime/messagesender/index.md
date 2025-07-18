---
title: runtime.MessageSender
slug: Mozilla/Add-ons/WebExtensions/API/runtime/MessageSender
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein Objekt, das Informationen über den Absender einer Nachricht oder einer Verbindungsanfrage enthält, die an den {{WebExtAPIRef("runtime.onMessage()")}}-Listener übergeben wird.

Es ist auch eine Eigenschaft von {{WebExtAPIRef("runtime.Port")}}, jedoch nur in der `Port`-Instanz, die in die {{WebExtAPIRef("runtime.onConnect()")}}- oder {{WebExtAPIRef("runtime.onConnectExternal()")}}-Listener übergeben wird.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `documentId` {{optional_inline}}
  - : `string`. Eine UUID des Dokuments, das die Verbindung geöffnet hat.
- `documentLifecycle` {{optional_inline}}
  - : `string`. Der Lebenszykluszustand des Dokuments, das die Verbindung geöffnet hat, als der Port erstellt wurde. Beachten Sie, dass sich der Lebenszykluszustand des Dokuments seit der Erstellung des Ports geändert haben kann.
- `frameId` {{optional_inline}}
  - : `integer`. Der Frame, der die Verbindung geöffnet hat. Null für oberste Frames, positiv für untergeordnete Frames. Dies wird nur gesetzt, wenn `tab` gesetzt ist.
- `id` {{optional_inline}}
  - : `string`. Die ID der Erweiterung, die die Nachricht gesendet hat, falls die Nachricht von einer Erweiterung gesendet wurde. Wenn der Absender eine ID explizit mit dem [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel in manifest.json gesetzt hat, dann hat `id` diesen Wert. Andernfalls hat es die für den Absender generierte ID.
- `origin` {{optional_inline}}
  - : `string`. Der Ursprung der Seite oder des Frames, der die Verbindung geöffnet hat. Dies kann sich von der `url`-Eigenschaft unterscheiden (z.B. about:blank) oder undurchsichtig sein (z.B. sandboxed iframes). Dies ist nützlich zur Identifizierung, ob der Ursprung vertrauenswürdig ist, wenn dies aus der URL nicht ersichtlich ist.
- `tab` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.Tab')}}. Der {{WebExtAPIRef('tabs.Tab')}} welcher die Verbindung geöffnet hat. Diese Eigenschaft ist nur vorhanden, wenn die Verbindung von einem Tab (inklusive Inhalts-Skripten) geöffnet wurde.
- `tlsChannelId` {{optional_inline}}
  - : `string`. Die TLS-Kanal-ID der Seite oder des Frames, die die Verbindung geöffnet hat, falls von der Erweiterung angefordert und verfügbar.
- `url` {{optional_inline}}
  - : `string`. Die URL der Seite oder des Frames, die das Skript hostet, das die Nachricht gesendet hat.

    Wenn der Absender ein Skript ist, das auf einer Erweiterungsseite ausgeführt wird (wie eine [background page](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), eine [options page](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages), oder einem [browser action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [page action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) Popup), dann hat die URL die Form `"moz-extension://<extension-internal-id>/path/to/page.html"`. Wenn der Absender ein Hintergrundskript ist und Sie keine Hintergrundseite einbezogen haben, lautet sie `"moz-extension://<extension-internal-id>/_generated_background_page.html"`.

    Wenn der Absender ein Skript ist, das in einer Webseite ausgeführt wird (einschließlich Content- und normalen Seitenskripten), dann ist `url` die URL der Webseite. Wenn das Skript in einem iframe ausgeführt wird, ist `url` die URL des iframes.

- `userScriptWorldId` {{optional_inline}}
  - : `string`. Die `worldId` der `USER_SCRIPT` Welt, die die Nachricht gesendet hat. Nur in {{WebExtAPIRef("runtime.onUserScriptMessage")}} und in [`port.sender`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port#sender) für {{WebExtAPIRef("runtime.onUserScriptConnect")}} vorhanden.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-MessageSender) API. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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
