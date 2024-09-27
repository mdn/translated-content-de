---
title: menus.OnClickData
slug: Mozilla/Add-ons/WebExtensions/API/menus/OnClickData
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Informationen, die an den Ereignislistener {{WebExtAPIRef("menus.onClicked")}} übergeben werden, wenn ein Menüpunkt angeklickt wird.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `bookmarkId` {{optional_inline}}
  - : `string`. Die ID des Lesezeichens, bei dem das Kontextmenü angeklickt wurde.
- `button` {{optional_inline}}
  - : `integer`. Welche Maustaste gedrückt wurde. Die Werte sind dieselben wie für [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button).
- `checked` {{optional_inline}}
  - : `boolean`. Ein Indikator, ob ein Kontrollkästchen oder ein Optionsfeld nach dem Klick aktiviert war.
- `editable`
  - : `boolean`. Ein Indikator, ob das Element editierbar ist: zum Beispiel, wenn es sich um ein [textarea](/de/docs/Web/HTML/Element/textarea) handelt.
- `frameId` {{optional_inline}}
  - : `integer`. Die ID des Frames, in dem der Punkt angeklickt wurde. Die Frame-ID kann in anderen APIs verwendet werden, die Frame-IDs akzeptieren, wie z.B. {{WebExtAPIRef("tabs.sendMessage()")}}. Wenn der Punkt im Hauptdokument angeklickt wurde, ist `frameId` null. Wenn der Punkt vollständig außerhalb der Seite angeklickt wurde (zum Beispiel im `tools_menu` oder im `tab` Kontext), dann ist `frameId` `undefined`.
- `frameUrl` {{optional_inline}}
  - : `string`. Die URL des Frames des Elements, bei dem das Kontextmenü angeklickt wurde, falls es sich in einem Frame befand.
- `linkText` {{optional_inline}}
  - : `string`. Wenn das Element ein Link ist, der Text für den Link. Wenn der Link keinen Text enthält, wird hier die URL angegeben.
- `linkUrl` {{optional_inline}}
  - : `string`. Wenn das Element ein Link ist, die URL, auf die er verweist.
- `mediaType` {{optional_inline}}
  - : `string`. Eines von "image", "video" oder "audio", wenn das Kontextmenü auf einem dieser Elementtypen aktiviert wurde.
- `menuItemId`
  - : `integer` oder `string`. Die ID des Menüelements, das angeklickt wurde.
- `modifiers`
  - : `array` von `string`. Ein Array, das alle Modifikatortasten enthält, die beim Klicken auf das Element gedrückt wurden. Mögliche Werte sind: "Alt", "Command", "Ctrl", "MacCtrl" und "Shift". Auf einem Mac, wenn der Benutzer die Control-Taste gedrückt hält, sind sowohl "Ctrl" als auch "MacCtrl" enthalten.
- `pageUrl` {{optional_inline}}
  - : `string`. Die URL der Seite, auf der das Menüelement angeklickt wurde. Diese Eigenschaft ist nicht vorhanden, wenn der Klick in einem Kontext erfolgt, in dem es keine aktuelle Seite gibt, wie bei einer Browseraktion.
- `parentMenuItemId` {{optional_inline}}
  - : `integer` oder `string`. Die übergeordnete ID, falls vorhanden, für das angeklickte Element.
- `selectionText` {{optional_inline}}
  - : `string`. Wenn auf der Seite Text ausgewählt war, enthält dies den ausgewählten Text.
- `srcUrl` {{optional_inline}}
  - : `string`. Falls vorhanden, der `src`-Wert für das Medium im angeklickten Element.
- `targetElementId` {{optional_inline}}
  - : `integer`. Ein Identifikator für das Element, falls vorhanden, über dem das Kontextmenü erstellt wurde. Verwenden Sie {{WebExtAPIRef("menus.getTargetElement()")}} im Inhalts-Skript, um das Element zu lokalisieren. Beachten Sie, dass dies nicht das [id](/de/docs/Web/HTML/Global_attributes/id) Attribut des Seitenelements ist.
- `viewType` {{optional_inline}}
  - : {{WebExtAPIRef("extension.ViewType", "ViewType")}}. Der Typ der Erweiterungsansicht.
- `wasChecked` {{optional_inline}}
  - : `boolean`. Ein Indikator, ob ein Kontrollkästchen oder ein Optionsfeld vor dem Klicken aktiviert war.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-OnClickData) API. Diese Dokumentation stammt von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.

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
