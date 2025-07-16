---
title: menus.OnClickData
slug: Mozilla/Add-ons/WebExtensions/API/menus/OnClickData
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Informationen, die an den {{WebExtAPIRef("menus.onClicked")}}-Ereignis-Listener übergeben werden, wenn ein Menüeintrag angeklickt wird.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `bookmarkId` {{optional_inline}}
  - : `string`. Die ID des Lesezeichens, in dem das Kontextmenü angeklickt wurde.
- `button` {{optional_inline}}
  - : `integer`. Welche Maustaste gedrückt wurde. Die Werte sind die gleichen wie bei [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button).
- `checked` {{optional_inline}}
  - : `boolean`. Ein Indikator, der anzeigt, ob ein Kontrollkästchen oder Radio-Element nach dem Klicken aktiviert war.
- `editable`
  - : `boolean`. Ein Indikator, der angibt, ob das Element bearbeitbar ist: zum Beispiel, wenn es sich um ein [textarea](/de/docs/Web/HTML/Reference/Elements/textarea) handelt.
- `frameId` {{optional_inline}}
  - : `integer`. Die ID des Frames, in dem das Element angeklickt wurde. Die Frame-ID kann in anderen APIs verwendet werden, die Frame-IDs akzeptieren, wie z.B. {{WebExtAPIRef("tabs.sendMessage()")}}. Wenn das Element im Hauptdokument angeklickt wurde, ist `frameId` null. Wenn das Element vollständig außerhalb der Seite angeklickt wurde (z.B. im `tools_menu` oder `tab` Kontext), dann ist `frameId` `undefined`.
- `frameUrl` {{optional_inline}}
  - : `string`. Die URL des Frames des Elements, in dem das Kontextmenü angeklickt wurde, falls es in einem Frame war.
- `linkText` {{optional_inline}}
  - : `string`. Wenn das Element ein Link ist, der Text des Links. Wenn der Link keinen Text enthält, wird hier die URL angegeben.
- `linkUrl` {{optional_inline}}
  - : `string`. Wenn das Element ein Link ist, die URL, auf die er verweist.
- `mediaType` {{optional_inline}}
  - : `string`. Einer von "image", "video" oder "audio", wenn das Kontextmenü auf einem dieser Elementtypen aktiviert wurde.
- `menuItemId`
  - : `integer` oder `string`. Die ID des angeklickten Menüeintrags.
- `modifiers`
  - : `array` von `string`. Ein Array, das alle Modifikatortasten enthält, die beim Klicken auf das Element gedrückt wurden. Mögliche Werte sind: "Alt", "Command", "Ctrl", "MacCtrl" und "Shift". Auf einem Mac, wenn die Steuerungstaste gedrückt ist, werden sowohl "Ctrl" als auch "MacCtrl" einbezogen.
- `pageUrl` {{optional_inline}}
  - : `string`. Die URL der Seite, in der das Menüelement angeklickt wurde. Diese Eigenschaft ist nicht vorhanden, wenn der Klick in einem Kontext stattfand, in dem es keine aktuelle Seite gibt, wie bei einer Browseraktion.
- `parentMenuItemId` {{optional_inline}}
  - : `integer` oder `string`. Die übergeordnete ID, falls vorhanden, des angeklickten Elements.
- `selectionText` {{optional_inline}}
  - : `string`. Wenn Text auf der Seite ausgewählt wurde, enthält dies den ausgewählten Text.
- `srcUrl` {{optional_inline}}
  - : `string`. Wenn vorhanden, der `src`-Wert für das Medium im angeklickten Element.
- `targetElementId` {{optional_inline}}
  - : `integer`. Eine Kennung des Elements, falls vorhanden, über dem das Kontextmenü erstellt wurde. Verwenden Sie {{WebExtAPIRef("menus.getTargetElement()")}} im Inhaltsskript, um das Element zu lokalisieren. Beachten Sie, dass dies nicht das [id](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut des Seitenelements ist.
- `viewType` {{optional_inline}}
  - : {{WebExtAPIRef("extension.ViewType", "ViewType")}}. Der Typ der Erweiterungsansicht.
- `wasChecked` {{optional_inline}}
  - : `boolean`. Ein Indikator, der anzeigt, ob ein Kontrollkästchen oder Radio-Element vor dem Klicken aktiviert war.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-OnClickData). Diese Dokumentation ist abgeleitet von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.

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
