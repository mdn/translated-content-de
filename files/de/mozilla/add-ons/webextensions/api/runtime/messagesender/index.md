---
title: runtime.MessageSender
slug: Mozilla/Add-ons/WebExtensions/API/runtime/MessageSender
l10n:
  sourceCommit: df256997a92b09d7ec4f76702d99850582a56869
---

Ein Objekt mit Informationen über den Absender einer Nachricht oder Verbindungsanfrage, das an den Listener {{WebExtAPIRef("runtime.onMessage()")}} übergeben wird.

Verfügbar für:

- Verbindungen in den Listenern {{WebExtAPIRef("runtime.onConnect")}}, {{WebExtAPIRef("runtime.onConnectExternal")}} und {{WebExtAPIRef("runtime.onUserScriptConnect")}}. In den Listenern {{WebExtAPIRef("runtime.onConnect()")}} und {{WebExtAPIRef("runtime.onConnectExternal()")}} ist es eine Eigenschaft des Arguments `port` ({{WebExtAPIRef("runtime.Port")}}).
- Nachrichten in den Listenern {{WebExtAPIRef("runtime.onMessage")}}, {{WebExtAPIRef("runtime.onMessageExternal")}} und {{WebExtAPIRef("runtime.onUserScriptMessage")}}.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `documentId` {{optional_inline}}
  - : `string`. Eine UUID des Dokuments, das die Verbindung geöffnet hat. Weitere Informationen finden Sie im Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `documentLifecycle` {{optional_inline}}
  - : `string`. Der Lebenszykluszustand des Dokuments, das die Verbindung geöffnet hat, zum Zeitpunkt der Erstellung des Ports. Beachten Sie, dass sich der Lebenszykluszustand des Dokuments seitdem geändert haben kann.
- `frameId` {{optional_inline}}
  - : `integer`. Der Frame, der die Verbindung geöffnet hat. Null für Frames der obersten Ebene, ein positiver Wert für untergeordnete Frames. Diese Eigenschaft ist nur gesetzt, wenn `tab` gesetzt ist.
- `id` {{optional_inline}}
  - : `string`. Die ID der Erweiterung, die die Nachricht gesendet hat, sofern die Nachricht von einer Erweiterung gesendet wurde. Wenn für den Absender über den Schlüssel [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in manifest.json ausdrücklich eine ID festgelegt wurde, hat `id` diesen Wert. Andernfalls enthält die Eigenschaft die für den Absender generierte ID.
- `origin` {{optional_inline}}
  - : `string`. Der Ursprung der Seite oder des Frames, die bzw. der die Verbindung geöffnet hat. Er kann von der Eigenschaft `url` abweichen (z. B. bei about:blank) oder opak sein (z. B. bei sandboxed iframes). Damit lässt sich beurteilen, ob der Ursprung vertrauenswürdig ist, wenn dies aus der URL nicht ersichtlich ist.
- `tab` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.Tab')}}. Das {{WebExtAPIRef('tabs.Tab')}}, das die Verbindung geöffnet hat. Diese Eigenschaft ist nur vorhanden, wenn die Verbindung von einem Tab aus geöffnet wurde (einschließlich Content-Scripts).
- `tlsChannelId` {{optional_inline}}
  - : `string`. Die TLS-Kanal-ID der Seite oder des Frames, die bzw. der die Verbindung geöffnet hat, sofern sie von der Erweiterung angefordert wurde und verfügbar ist.
- `url` {{optional_inline}}
  - : `string`. Die URL der Seite oder des Frames, in der bzw. dem das Skript ausgeführt wird, das die Nachricht gesendet hat.

    Wenn der Absender ein Skript ist, das auf einer Erweiterungsseite ausgeführt wird (etwa auf einer [Hintergrundseite](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), einer [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) oder in einem Popup einer [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Seitenaktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)), hat die URL die Form `"moz-extension://<extension-internal-id>/path/to/page.html"`. Wenn der Absender ein Hintergrundskript ist und Sie keine Hintergrundseite eingebunden haben, lautet sie `"moz-extension://<extension-internal-id>/_generated_background_page.html"`.

    Wenn der Absender ein Skript ist, das auf einer Webseite ausgeführt wird (einschließlich Content-Scripts und gewöhnlicher Seitenskripte), ist `url` die URL der Webseite. Wird das Skript in einem iframe ausgeführt, ist `url` die URL des iframes.

- `userScriptWorldId` {{optional_inline}}
  - : `string`. Die `worldId` der `USER_SCRIPT`-Welt, die die Nachricht gesendet hat. Nur in {{WebExtAPIRef("runtime.onUserScriptMessage")}} und in [`port.sender`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port#sender) für {{WebExtAPIRef("runtime.onUserScriptConnect")}} vorhanden.
- `windowId` {{optional_inline}}
  - : `integer`. Die ID des Fensters, das den Absender enthält. Anders als bei {{WebExtAPIRef("tabs.Tab", "Tab", "#windowId")}} kann sie auch für Absender gesetzt sein, die sich nicht in einem Tab befinden, beispielsweise in einem Popup oder einer Seitenleiste. Sie fehlt, wenn der Absender kein Fenster hat, beispielsweise bei einer Hintergrundseite.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums API [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-MessageSender). Diese Dokumentation wurde aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.

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
