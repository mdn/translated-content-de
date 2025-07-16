---
title: menus.ContextType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ContextType
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Die verschiedenen Kontexte, in denen ein Menüeintrag erscheinen kann.

## Typ

Werte dieses Typs sind Zeichenfolgen. Das Element wird angezeigt, wenn der angegebene Kontext zutrifft. Mögliche Werte sind:

- all
  - : Die Angabe von 'all' entspricht der Kombination aller anderen Kontexte mit Ausnahme von 'bookmark', 'tab' und 'tools_menu'.
- action
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf Ihre Browseraktion in einer Manifest V3-Erweiterung klickt. Die maximale Anzahl von Elementen, die dem obersten Browseraktions-Kontextmenü hinzugefügt werden können, beträgt {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- audio
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein [audio](/de/docs/Web/HTML/Reference/Elements/audio)-Element klickt.
- bookmark
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein Lesezeichen im Lesezeichen-Symbolleiste, Lesezeichen-Menü, Lesezeichen-Seitenleiste (<kbd>Strg</kbd>+<kbd>B</kbd>) und das Bibliotheksfenster (<kbd>Strg</kbd>+<kbd>Umschalt</kbd>+<kbd>B</kbd>) klickt. Letztere beiden werden ab Firefox 66 unterstützt. Erfordert die Berechtigung "bookmarks" der [API permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) im Manifest.

- browser_action
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf Ihre Browseraktion in einer Manifest V2-Erweiterung klickt. Die maximale Anzahl von Elementen, die dem obersten Browseraktions-Kontextmenü hinzugefügt werden können, beträgt {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- editable
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein bearbeitbares Element klickt, wie ein [textarea](/de/docs/Web/HTML/Reference/Elements/textarea).
- frame
  - : Gilt, wenn der Benutzer mit der rechten Maustaste in einem verschachtelten [iframe](/de/docs/Web/HTML/Reference/Elements/iframe) klickt.
- image
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein Bild klickt.
- link
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf einen Link klickt.
- page
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf die Seite klickt, aber keiner der anderen Seitenkontexte zutrifft (zum Beispiel, der Klick erfolgt nicht auf ein Bild, ein verschachteltes iframe oder einen Link).
- page_action
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf Ihre Seitenaktion klickt. Die maximale Anzahl von Elementen, die dem obersten Seitenaktions-Kontextmenü hinzugefügt werden können, beträgt {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- password
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein [Passworteingabe-Element](/de/docs/Web/HTML/Reference/Elements/input/password) klickt.
- selection
  - : Gilt, wenn ein Teil der Seite ausgewählt ist.
- tab
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf eine Registerkarte klickt (speziell bezieht sich dies auf die Registerkartenleiste oder andere Benutzerschnittstellenelemente, die es dem Benutzer ermöglichen, von einer Browser-Registerkarte zu einer anderen zu wechseln, nicht auf die Seite selbst).

    Ab Firefox 63 gewährt das Klicken auf den Menüeintrag auf einer Registerkarte die [activeTab](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission)-Berechtigung für die angeklickte Registerkarte, selbst wenn diese nicht die derzeit aktive Registerkarte ist.

- tools_menu
  - : Das Element wird dem Werkzeugmenü des Browsers hinzugefügt. Beachten Sie, dass dies nur verfügbar ist, wenn Sie `ContextType` über den `menus` Namensraum aufrufen. Es ist nicht verfügbar, wenn Sie es über den `contextMenus` Namensraum aufrufen.
- video
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein [video](/de/docs/Web/HTML/Reference/Elements/video)-Element klickt.

Beachten Sie, dass "launcher" nicht unterstützt wird.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]

> Diese API basiert auf Chromium's [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-ContextType) API. Diese Dokumentation entstammt [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.

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
