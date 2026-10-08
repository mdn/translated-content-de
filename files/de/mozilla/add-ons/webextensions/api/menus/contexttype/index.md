---
title: menus.ContextType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ContextType
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Die verschiedenen Kontexte, in denen ein Menüeintrag erscheinen kann.

## Typ

Werte dieses Typs sind Zeichenfolgen. Der Menüeintrag wird angezeigt, wenn der jeweilige Kontext zutrifft. Mögliche Werte sind:

- `all`
  - : Die Angabe von 'all' entspricht der Kombination aller anderen Kontexte außer 'bookmark', 'tab' und 'tools_menu'.
- `action`
  - : Gilt, wenn der Benutzer in einer Manifest-V3-Erweiterung mit der rechten Maustaste auf Ihre Browser-Action klickt. Dem Kontextmenü der Browser-Action können auf oberster Ebene höchstens {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}} Einträge hinzugefügt werden; Untermenüs können jedoch beliebig viele Einträge enthalten.
- `audio`
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein [Audioelement](/de/docs/Web/HTML/Reference/Elements/audio) klickt.
- `bookmark`
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein Lesezeichen in der Lesezeichen-Symbolleiste, im Lesezeichen-Menü, in der Lesezeichen-Seitenleiste (<kbd>Strg</kbd>+<kbd>B</kbd>) oder im Bibliotheksfenster (<kbd>Strg</kbd>+<kbd>Umschalt</kbd>+<kbd>B</kbd>) klickt. Die beiden letztgenannten werden seit Firefox 66 unterstützt. Erfordert die [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) "bookmarks" im Manifest.

- `browser_action`
  - : Gilt, wenn der Benutzer in einer Manifest-V2-Erweiterung mit der rechten Maustaste auf Ihre Browser-Action klickt. Dem Kontextmenü der Browser-Action können auf oberster Ebene höchstens {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}} Einträge hinzugefügt werden; Untermenüs können jedoch beliebig viele Einträge enthalten.
- `editable`
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein bearbeitbares Element wie eine [Textarea](/de/docs/Web/HTML/Reference/Elements/textarea) klickt.
- `frame`
  - : Gilt, wenn der Benutzer mit der rechten Maustaste in einen verschachtelten [iframe](/de/docs/Web/HTML/Reference/Elements/iframe) klickt.
- `image`
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein Bild klickt.
- `link`
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf einen Link klickt.
- `page`
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf die Seite klickt, aber keiner der anderen Seitenkontexte zutrifft (beispielsweise erfolgt der Klick nicht auf ein Bild, einen verschachtelten iframe oder einen Link).
- `page_action`
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf Ihre Page-Action klickt. Dem Kontextmenü der Page-Action können auf oberster Ebene höchstens {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}} Einträge hinzugefügt werden; Untermenüs können jedoch beliebig viele Einträge enthalten.
- `password`
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein [Passwort-Eingabeelement](/de/docs/Web/HTML/Reference/Elements/input/password) klickt.
- `selection`
  - : Gilt, wenn ein Teil der Seite ausgewählt ist.
- `tab`
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf einen Tab klickt (gemeint ist die Tableiste oder ein anderes Bedienelement, mit dem der Benutzer zwischen Browser-Tabs wechseln kann, nicht die Seite selbst).

    Wenn Sie auf einem Tab auf den Menüeintrag klicken, wird die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) für den angeklickten Tab erteilt, selbst wenn dieser nicht der aktive Tab ist.

- `tools_menu`
  - : Der Eintrag wird dem Extras-Menü des Browsers hinzugefügt. Dies ist nur verfügbar, wenn Sie über den Namespace `menus` auf `ContextType` zugreifen. Bei einem Zugriff über den Namespace `contextMenus` ist es nicht verfügbar.
- `video`
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein [Videoelement](/de/docs/Web/HTML/Reference/Elements/video) klickt.

Beachten Sie, dass "launcher" nicht unterstützt wird.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-ContextType)-API von Chromium. Diese Dokumentation wurde aus [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code abgeleitet.

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
