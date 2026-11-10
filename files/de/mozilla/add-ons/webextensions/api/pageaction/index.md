---
title: pageAction
slug: Mozilla/Add-ons/WebExtensions/API/pageAction
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Lesen und ändern Sie die Attribute der über den Manifest-Schlüssel [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) definierten Schaltfläche in der Adressleiste und reagieren Sie auf Klicks darauf.

Eine [Schaltfläche in der Adressleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) ist eine Schaltfläche, die der Adressleiste des Browsers hinzugefügt wird.

![Hervorgehobenes Pfotenabdruck-Symbol für eine Page Action in der Adressleiste von Firefox](page-action.png)

Sie können in einem Hintergrundskript auf Klicks auf das Symbol reagieren oder ein [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) festlegen, das beim Klicken auf das Symbol geöffnet wird.

Wenn Sie ein Popup festlegen, definieren Sie dessen Inhalt und Verhalten mit HTML, CSS und JavaScript. JavaScript, das im Popup ausgeführt wird, hat Zugriff auf dieselben WebExtension-APIs wie Ihre Hintergrundskripte. Trotz des Namens `pageAction` hat der Code der Aktion keinen Zugriff auf den Inhalt der Webseite. Um auf das DOM der Webseite zuzugreifen, müssen Sie ein [Content-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) hinzufügen und mit ihm interagieren.

Die Schaltfläche verfügt außerdem über ein Kontextmenü. Mit der API {{WebExtAPIRef("menus")}} und dem `page_action`-{{WebExtAPIRef("menus.ContextType")}} können Sie diesem Menü Einträge hinzufügen.

Page Actions sind für Aktionen gedacht, die nur für bestimmte Seiten relevant sind (etwa „den aktuellen Tab als Lesezeichen speichern“). Wenn eine Aktion den gesamten Browser betrifft (etwa „alle Lesezeichen anzeigen“), verwenden Sie stattdessen eine [Browser Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button).

## Typen

- {{WebExtAPIRef("pageAction.ImageDataType")}}
  - : Pixeldaten für ein Bild.

## Funktionen

- {{WebExtAPIRef("pageAction.show()")}}
  - : Zeigt die Page Action für einen bestimmten Tab an.
- {{WebExtAPIRef("pageAction.hide()")}}
  - : Blendet die Page Action für einen bestimmten Tab aus.
- {{WebExtAPIRef("pageAction.isShown()")}}
  - : Prüft, ob die Page Action angezeigt wird.
- {{WebExtAPIRef("pageAction.setTitle()")}}
  - : Legt den Titel der Page Action fest. Dieser wird in einem Tooltip über der Page Action angezeigt.
- {{WebExtAPIRef("pageAction.getTitle()")}}
  - : Gibt den Titel der Page Action zurück.
- {{WebExtAPIRef("pageAction.setIcon()")}}
  - : Legt das Symbol der Page Action fest.
- {{WebExtAPIRef("pageAction.setPopup()")}}
  - : Legt die URL für das Popup der Page Action fest.
- {{WebExtAPIRef("pageAction.getPopup()")}}
  - : Gibt die URL für das Popup der Page Action zurück.
- {{WebExtAPIRef("pageAction.openPopup()")}}
  - : Öffnet das Popup der Page Action.

## Ereignisse

- {{WebExtAPIRef("pageAction.onClicked")}}
  - : Wird ausgelöst, wenn auf das Symbol einer Page Action geklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Page Action ein Popup hat.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums API [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction). Diese Dokumentation wurde von [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) im Chromium-Code abgeleitet.

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
