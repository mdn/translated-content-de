---
title: pageAction
slug: Mozilla/Add-ons/WebExtensions/API/pageAction
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Lesen und Ändern von Attributen sowie das Hören auf Klicks auf die Adressleisten-Schaltfläche, die mit dem [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssel definiert ist.

Eine [Adressleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) ist eine Schaltfläche, die zur Adressleiste des Browsers hinzugefügt wird.

![Pfotenabdruck-Symbol, das eine Page-Action darstellt](page-action.png)

Sie können Klicks auf das Symbol in einem Hintergrundskript überwachen oder ein [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) festlegen, das geöffnet wird, wenn auf das Symbol geklickt wird.

Wenn Sie ein Popup festlegen, definieren Sie dessen Inhalt und Verhalten mit HTML, CSS und JavaScript. JavaScript, das im Popup ausgeführt wird, hat Zugriff auf alle dieselben WebExtension-APIs wie Ihre Hintergrundskripte. Obwohl der Name `pageAction` lautet, erhält der Aktionscode keinen Zugriff auf den Webseitennhalt. Um auf den DOM der Webseite zuzugreifen, müssen Sie ein [Content-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) hinzufügen und mit diesem interagieren.

Die Schaltfläche verfügt auch über ein Kontextmenü, und Sie können mit der {{WebExtAPIRef("menus")}}-API unter Verwendung des `page_action` {{WebExtAPIRef("menus.ContextType")}} Einträge zu diesem Menü hinzufügen.

Page-Actions sind für Aktionen, die nur für bestimmte Seiten relevant sind (wie "aktuelle Registerkarte als Lesezeichen markieren"). Wenn sie für den gesamten Browser relevant sind (wie "alle Lesezeichen anzeigen"), verwenden Sie stattdessen eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button).

## Typen

- {{WebExtAPIRef("pageAction.ImageDataType")}}
  - : Pixeldaten für ein Bild.

## Funktionen

- {{WebExtAPIRef("pageAction.show()")}}
  - : Zeigt die Page-Action für einen bestimmten Tab an.
- {{WebExtAPIRef("pageAction.hide()")}}
  - : Verbirgt die Page-Action für einen bestimmten Tab.
- {{WebExtAPIRef("pageAction.isShown()")}}
  - : Prüft, ob die Page-Action angezeigt wird oder nicht.
- {{WebExtAPIRef("pageAction.setTitle()")}}
  - : Setzt den Titel der Page-Action. Dieser wird in einem Tooltip über der Page-Action angezeigt.
- {{WebExtAPIRef("pageAction.getTitle()")}}
  - : Ruft den Titel der Page-Action ab.
- {{WebExtAPIRef("pageAction.setIcon()")}}
  - : Setzt das Symbol der Page-Action.
- {{WebExtAPIRef("pageAction.setPopup()")}}
  - : Setzt die URL für das Popup der Page-Action.
- {{WebExtAPIRef("pageAction.getPopup()")}}
  - : Ruft die URL des Popups der Page-Action ab.
- {{WebExtAPIRef("pageAction.openPopup()")}}
  - : Öffnet das Popup der Page-Action.

## Ereignisse

- {{WebExtAPIRef("pageAction.onClicked")}}
  - : Wird ausgelöst, wenn auf ein Page-Action-Symbol geklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Page-Action ein Popup hat.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction) API von Chromium. Diese Dokumentation ist abgeleitet von [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) im Chromium-Code.

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
