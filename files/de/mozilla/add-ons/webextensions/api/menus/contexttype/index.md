---
title: menus.ContextType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ContextType
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die verschiedenen Kontexte, in denen ein Menüelement erscheinen kann.

## Typ

Die Werte dieses Typs sind Zeichenketten. Das Element wird angezeigt, wenn der angegebene Kontext zutrifft. Mögliche Werte sind:

- all
  - : Die Angabe von 'all' entspricht der Kombination aller anderen Kontexte außer 'bookmark', 'tab' und 'tools_menu'.
- action
  - : Gilt, wenn der Benutzer mit einem Rechtsklick auf Ihre Browseraktion in einer Manifest V3-Erweiterung klickt. Die maximale Anzahl von Elementen, die dem obersten Menü der Browseraktion hinzugefügt werden können, beträgt {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- audio
  - : Gilt, wenn der Benutzer mit einem Rechtsklick auf ein [audio](/de/docs/Web/HTML/Element/audio)-Element klickt.
- bookmark

  - : Gilt, wenn der Benutzer mit einem Rechtsklick auf ein Lesezeichen im Lesezeichen-Symbolleiste, Lesezeichen-Menü, Lesezeichen-Seitenleiste (<kbd>Ctrl</kbd>+<kbd>B</kbd>) und im Bibliothek-Fenster (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd>) klickt. Die letzten beiden werden ab Firefox 66 unterstützt. Erfordert die "bookmarks"-[API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) im Manifest.

- browser_action
  - : Gilt, wenn der Benutzer mit einem Rechtsklick auf Ihre Browseraktion in einer Manifest V2-Erweiterung klickt. Die maximale Anzahl von Elementen, die dem obersten Menü der Browseraktion hinzugefügt werden können, beträgt {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- editable
  - : Gilt, wenn der Benutzer mit einem Rechtsklick auf ein bearbeitbares Element, wie ein [textarea](/de/docs/Web/HTML/Element/textarea), klickt.
- frame
  - : Gilt, wenn der Benutzer mit einem Rechtsklick in einem verschachtelten [iframe](/de/docs/Web/HTML/Element/iframe) klickt.
- image
  - : Gilt, wenn der Benutzer mit einem Rechtsklick auf ein Bild klickt.
- link
  - : Gilt, wenn der Benutzer mit einem Rechtsklick auf einen Link klickt.
- page
  - : Gilt, wenn der Benutzer mit einem Rechtsklick auf die Seite klickt, aber keiner der anderen Seitenelemente zutrifft (zum Beispiel befindet sich der Klick nicht auf einem Bild, einem verschachtelten iframe oder einem Link).
- page_action
  - : Gilt, wenn der Benutzer mit einem Rechtsklick auf Ihre Seitenaktion klickt. Die maximale Anzahl von Elementen, die dem obersten Menü der Seitenaktion hinzugefügt werden können, beträgt {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- password
  - : Gilt, wenn der Benutzer mit einem Rechtsklick auf ein [Passworteingabeelement](/de/docs/Web/HTML/Element/input/password) klickt.
- selection
  - : Gilt, wenn ein Teil der Seite ausgewählt ist.
- tab

  - : Gilt, wenn der Benutzer mit einem Rechtsklick auf einen Tab klickt (insbesondere bezieht sich dies auf die Tab-Leiste oder ein anderes Benutzerschnittstellenelement, das dem Benutzer das Wechseln von einem Browser-Tab zu einem anderen ermöglicht, nicht auf die Seite selbst).

    Ab Firefox 63 gewährt das Klicken auf das Menüelement auf einem Tab die [activeTab](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission)-Berechtigung für den angeklickten Tab, auch wenn dieser nicht der aktuell aktive Tab ist.

- tools_menu
  - : Das Element wird dem Werkzeugmenü des Browsers hinzugefügt. Beachten Sie, dass dies nur verfügbar ist, wenn Sie auf `ContextType` über den `menus`-Namensraum zugreifen. Es ist nicht verfügbar, wenn Sie über den `contextMenus`-Namensraum darauf zugreifen.
- video
  - : Gilt, wenn der Benutzer mit einem Rechtsklick auf ein [video](/de/docs/Web/HTML/Element/video)-Element klickt.

Beachten Sie, dass "launcher" nicht unterstützt wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-ContextType)-API. Diese Dokumentation ist aus [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code übernommen.

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
