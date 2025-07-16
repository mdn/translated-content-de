---
title: pageAction
slug: Mozilla/Add-ons/WebExtensions/API/pageAction
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Lesen und ändern Sie Attribute und hören Sie auf Klicks auf die Adressleisten-Schaltfläche, die mit dem [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssel definiert wird.

Eine [Adressleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) ist eine Schaltfläche, die zur Browser-Adressleiste hinzugefügt wird.

![Paw-Print-Symbol, das eine Seitenaktion darstellt](page-action.png)

Sie können in einem Hintergrundskript auf Klicks auf das Symbol hören oder ein [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) angeben, das geöffnet wird, wenn das Symbol angeklickt wird.

Wenn Sie ein Popup angeben, definieren Sie dessen Inhalt und Verhalten mit HTML, CSS und JavaScript. JavaScript, das im Popup ausgeführt wird, hat Zugriff auf die gleichen WebExtension-APIs wie Ihre Hintergrundskripte. Obwohl es `pageAction` genannt wird, erhält der Aktionscode keinen Zugriff auf Webseitenelemente. Um auf das DOM der Webseite zuzugreifen, müssen Sie ein [Content Script](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) hinzufügen und mit ihm interagieren.

Die Schaltfläche hat auch ein Kontextmenü, und Sie können diesem Menü mit der {{WebExtAPIRef("menus")}} API Elemente hinzufügen, indem Sie den `page_action` {{WebExtAPIRef("menus.ContextType")}} verwenden.

Seitenaktionen sind für Aktionen, die nur für bestimmte Seiten relevant sind (wie "Lesezeichen für den aktuellen Tab setzen"). Wenn sie für den gesamten Browser relevant sind (wie "alle Lesezeichen anzeigen"), verwenden Sie stattdessen eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button).

## Typen

- {{WebExtAPIRef("pageAction.ImageDataType")}}
  - : Pixeldaten für ein Bild.

## Funktionen

- {{WebExtAPIRef("pageAction.show()")}}
  - : Zeigt die Seitenaktion für einen gegebenen Tab an.
- {{WebExtAPIRef("pageAction.hide()")}}
  - : Verbirgt die Seitenaktion für einen gegebenen Tab.
- {{WebExtAPIRef("pageAction.isShown()")}}
  - : Prüft, ob die Seitenaktion angezeigt wird oder nicht.
- {{WebExtAPIRef("pageAction.setTitle()")}}
  - : Setzt den Titel der Seitenaktion. Dieser wird in einem Tooltip über der Seitenaktion angezeigt.
- {{WebExtAPIRef("pageAction.getTitle()")}}
  - : Ruft den Titel der Seitenaktion ab.
- {{WebExtAPIRef("pageAction.setIcon()")}}
  - : Setzt das Symbol der Seitenaktion.
- {{WebExtAPIRef("pageAction.setPopup()")}}
  - : Setzt die URL für das Popup der Seitenaktion.
- {{WebExtAPIRef("pageAction.getPopup()")}}
  - : Ruft die URL für das Popup der Seitenaktion ab.
- {{WebExtAPIRef("pageAction.openPopup()")}}
  - : Öffnet das Popup der Seitenaktion.

## Ereignisse

- {{WebExtAPIRef("pageAction.onClicked")}}
  - : Wird ausgelöst, wenn ein Seitenaktionssymbol angeklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Seitenaktion ein Popup hat.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction) API von Chromium. Diese Dokumentation ist von [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) im Chromium-Code abgeleitet.

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
