---
title: runtime.MessageSender
slug: Mozilla/Add-ons/WebExtensions/API/runtime/MessageSender
l10n:
  sourceCommit: d82c19fea93f7b36787c6d84af600c955c2732d5
---

{{AddonSidebar}}

Ein Objekt, das Informationen über den Absender einer Nachricht oder Verbindungsanfrage enthält, die an den {{WebExtAPIRef("runtime.onMessage()")}}-Listener übergeben wird.

Es ist auch eine Eigenschaft von {{WebExtAPIRef("runtime.Port")}}, jedoch nur in der `Port`-Instanz, die an die {{WebExtAPIRef("runtime.onConnect()")}}- oder {{WebExtAPIRef("runtime.onConnectExternal()")}}-Listener übergeben wird.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `documentId` {{optional_inline}}
  - : `string`. Eine UUID des Dokuments, das die Verbindung geöffnet hat.
- `documentLifecycle` {{optional_inline}}
  - : `string`. Der Lebenszyklusstatus des Dokuments, das die Verbindung geöffnet hat, als der Port erstellt wurde. Beachten Sie, dass sich der Lebenszyklusstatus des Dokuments seit der Erstellung des Ports geändert haben kann.
- `frameId` {{optional_inline}}
  - : `integer`. Der Frame, der die Verbindung geöffnet hat. Null für oberste Frames, positiv für untergeordnete Frames. Dies wird nur gesetzt, wenn `tab` gesetzt ist.
- `id` {{optional_inline}}
  - : `string`. Die ID der Erweiterung, die die Nachricht gesendet hat, wenn die Nachricht von einer Erweiterung gesendet wurde. Wenn der Absender eine ID ausdrücklich mit dem Schlüssel [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in manifest.json festgelegt hat, dann hat `id` diesen Wert. Andernfalls hat es die ID, die für den Absender generiert wurde.
- `origin` {{optional_inline}}
  - : `string`. Der Ursprung der Seite oder des Frames, der die Verbindung geöffnet hat. Er kann sich von der `url`-Eigenschaft unterscheiden (z. B. about:blank) oder undurchsichtig sein (z. B. sandboxed iframes). Dies ist nützlich, um zu identifizieren, ob der Ursprung vertrauenswürdig ist, falls dies nicht aus der URL ersichtlich ist.
- `tab` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.Tab')}}. Der {{WebExtAPIRef('tabs.Tab')}} der die Verbindung geöffnet hat. Diese Eigenschaft ist nur vorhanden, wenn die Verbindung von einem Tab geöffnet wurde (einschließlich Inhaltsskripte).
- `tlsChannelId` {{optional_inline}}
  - : `string`. Die TLS-Kanal-ID der Seite oder des Frames, der die Verbindung geöffnet hat, falls von der Erweiterung angefordert und verfügbar.
- `url` {{optional_inline}}

  - : `string`. Die URL der Seite oder des Frames, die das Skript hostet, das die Nachricht gesendet hat.

    Wenn der Absender ein Skript ist, das auf einer Erweiterungsseite ausgeführt wird (wie eine [Hintergrundseite](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), eine [Optionenseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) oder ein [Symbolleistenschaltflächen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Seitenaktionspopup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)), hat die URL die Form `"moz-extension://<extension-internal-id>/path/to/page.html"`. Wenn der Absender ein Hintergrundskript ist und Sie keine Hintergrundseite eingeschlossen haben, ist es `"moz-extension://<extension-internal-id>/_generated_background_page.html"`.

    Wenn der Absender ein Skript ist, das auf einer Webseite ausgeführt wird (einschließlich Inhalts- und normaler Seitenskripte), dann ist `url` die URL der Webseite. Wenn das Skript in einem iframe läuft, ist `url` die URL des iframes.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-MessageSender)-API von Chromium. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
// * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
// * Neither the name of Google Inc. nor the names of its
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
