---
title: menus.OnClickData
slug: Mozilla/Add-ons/WebExtensions/API/menus/OnClickData
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Informationen, die an den {{WebExtAPIRef("menus.onClicked")}} Ereignis-Listener übergeben werden, wenn auf ein Menüelement geklickt wird.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `bookmarkId` {{optional_inline}}
  - : `string`. Die ID des Lesezeichens, bei dem das Kontextmenü aktiviert wurde.
- `button` {{optional_inline}}
  - : `integer`. Welche Maustaste gedrückt wurde. Die Werte entsprechen denen von [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button).
- `checked` {{optional_inline}}
  - : `boolean`. Ein Kennzeichen, das anzeigt, ob ein Kontrollkästchen oder Radio-Element nach dem Klicken aktiviert war.
- `editable`
  - : `boolean`. Ein Kennzeichen, das anzeigt, ob das Element bearbeitbar ist: beispielsweise, wenn es sich um ein [textarea](/de/docs/Web/HTML/Element/textarea) handelt.
- `frameId` {{optional_inline}}
  - : `integer`. Die ID des Rahmens, in dem auf das Element geklickt wurde. Die Rahmen-ID kann in anderen APIs verwendet werden, die Rahmen-IDs akzeptieren, wie zum Beispiel {{WebExtAPIRef("tabs.sendMessage()")}}. Wenn im obersten Dokumentrahmen geklickt wurde, ist `frameId` null. Wenn außerhalb der Seite geklickt wurde (zum Beispiel im `tools_menu` oder `tab` Kontext), dann ist `frameId` `undefined`.
- `frameUrl` {{optional_inline}}
  - : `string`. Die URL des Rahmens des Elements, bei dem das Kontextmenü aktiviert wurde, falls es sich in einem Rahmen befand.
- `linkText` {{optional_inline}}
  - : `string`. Wenn das Element ein Link ist, der Text des Links. Falls der Link keinen Text enthält, wird hier die URL angegeben.
- `linkUrl` {{optional_inline}}
  - : `string`. Wenn das Element ein Link ist, die URL, auf die er verweist.
- `mediaType` {{optional_inline}}
  - : `string`. Einer von "image", "video" oder "audio", wenn das Kontextmenü auf einem dieser Elementtypen aktiviert wurde.
- `menuItemId`
  - : `integer` oder `string`. Die ID des Menüelements, auf das geklickt wurde.
- `modifiers`
  - : `array` von `string`. Ein Array, das alle Modifikatortasten enthält, die gedrückt wurden, als auf das Element geklickt wurde. Mögliche Werte sind: "Alt", "Command", "Ctrl", "MacCtrl" und "Shift". Auf einem Mac werden sowohl "Ctrl" als auch "MacCtrl" einbezogen, wenn die Steuerungstaste gehalten wird.
- `pageUrl` {{optional_inline}}
  - : `string`. Die URL der Seite, auf der das Menüelement angeklickt wurde. Diese Eigenschaft ist nicht vorhanden, wenn der Klick in einem Kontext erfolgte, in dem es keine aktuelle Seite gibt, wie bei einer Browser-Aktion.
- `parentMenuItemId` {{optional_inline}}
  - : `integer` oder `string`. Die übergeordnete ID, falls vorhanden, für das angeklickte Element.
- `selectionText` {{optional_inline}}
  - : `string`. Wenn Text auf der Seite ausgewählt wurde, enthält dies den ausgewählten Text.
- `srcUrl` {{optional_inline}}
  - : `string`. Falls vorhanden, der `src` Wert für das Medium im angeklickten Element.
- `targetElementId` {{optional_inline}}
  - : `integer`. Ein Bezeichner des Elements, über dem das Kontextmenü erstellt wurde, falls vorhanden. Verwenden Sie {{WebExtAPIRef("menus.getTargetElement()")}} im Inhalts-Skript, um das Element zu lokalisieren. Beachten Sie, dass dies nicht das [id](/de/docs/Web/HTML/Global_attributes/id) Attribut des Seitenelements ist.
- `viewType` {{optional_inline}}
  - : {{WebExtAPIRef("extension.ViewType", "ViewType")}}. Der Typ der Erweiterungsansicht.
- `wasChecked` {{optional_inline}}
  - : `boolean`. Ein Kennzeichen, das anzeigt, ob ein Kontrollkästchen oder Radio-Element vor dem Klicken aktiviert war.

## Kompatibilität der Browser

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-OnClickData) API von Chromium. Diese Dokumentation ist abgeleitet von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.

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
