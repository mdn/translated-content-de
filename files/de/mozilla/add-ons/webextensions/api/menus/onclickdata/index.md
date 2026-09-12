---
title: menus.OnClickData
slug: Mozilla/Add-ons/WebExtensions/API/menus/OnClickData
l10n:
  sourceCommit: f37e438c6dece2b381d2b9f35dc53af21a916a75
---

Informationen, die an den {{WebExtAPIRef("menus.onClicked")}}-Ereignis-Listener übergeben werden, wenn auf einen Menüeintrag geklickt wird.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `bookmarkId` {{optional_inline}}
  - : `string`. Die ID des Lesezeichens, auf dem das Kontextmenü angeklickt wurde.
- `button` {{optional_inline}}
  - : `integer`. Welche Maustaste gedrückt wurde. Die Werte entsprechen denen von [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button).
- `checked` {{optional_inline}}
  - : `boolean`. Ein Flag, das angibt, ob ein Kontrollkästchen oder Optionsfeld nach dem Anklicken aktiviert war.
- `editable`
  - : `boolean`. Ein Flag, das angibt, ob das Element bearbeitbar ist, beispielsweise wenn es sich um ein [textarea](/de/docs/Web/HTML/Reference/Elements/textarea) handelt.
- `frameId` {{optional_inline}}
  - : `integer`. Die ID des Frames, in dem auf den Eintrag geklickt wurde. Die Frame-ID kann in anderen APIs verwendet werden, die Frame-IDs akzeptieren, etwa {{WebExtAPIRef("tabs.sendMessage()")}}. Wenn auf den Eintrag im Dokument der obersten Ebene geklickt wurde, ist `frameId` null. Wenn auf den Eintrag vollständig außerhalb der Seite geklickt wurde, beispielsweise im Kontext `tools_menu` oder `tab`, ist `frameId` `undefined`.
- `frameUrl` {{optional_inline}}
  - : `string`. Die URL des Frames des Elements, auf dem das Kontextmenü angeklickt wurde, falls es sich in einem Frame befand.
- `linkText` {{optional_inline}}
  - : `string`. Wenn das Element ein Link ist, der Text des Links. Wenn der Link keinen Text enthält, wird hier die URL selbst angegeben.
- `linkUrl` {{optional_inline}}
  - : `string`. Wenn das Element ein Link ist, die URL, auf die er verweist.
- `mediaType` {{optional_inline}}
  - : `string`. Einer von "image", "video" oder "audio", wenn das Kontextmenü auf einem Element eines dieser Typen aktiviert wurde.
- `menuItemId`
  - : `integer` oder `string`. Die ID des angeklickten Menüeintrags.
- `modifiers`
  - : `array` von `string`. Ein Array, das alle Zusatztasten enthält, die beim Anklicken des Eintrags gedrückt waren. Mögliche Werte sind: "Alt", "Command", "Ctrl", "MacCtrl" und "Shift". Wenn auf einem Mac die Control-Taste gedrückt ist, werden sowohl "Ctrl" als auch "MacCtrl" einbezogen.
- `pageUrl` {{optional_inline}}
  - : `string`. Die URL der Seite, auf der der Menüeintrag angeklickt wurde. Diese Eigenschaft ist nicht vorhanden, wenn der Klick in einem Kontext erfolgte, in dem es keine aktuelle Seite gibt, beispielsweise bei einer Browser-Aktion.
- `parentMenuItemId` {{optional_inline}}
  - : `integer` oder `string`. Die übergeordnete ID, falls vorhanden, für den angeklickten Eintrag.
- `selectionText` {{optional_inline}}
  - : `string`. Wenn auf der Seite Text ausgewählt wurde, enthält dies den ausgewählten Text.
- `srcUrl` {{optional_inline}}
  - : `string`. Falls vorhanden, der `src`-Wert für das Medium im angeklickten Element.
- `targetElementId` {{optional_inline}}
  - : `integer`. Eine Kennung des Elements, falls vorhanden, über dem das Kontextmenü erstellt wurde. Verwenden Sie {{WebExtAPIRef("menus.getTargetElement()")}} im Content-Script, um das Element zu finden. Beachten Sie, dass dies nicht das Attribut [id](/de/docs/Web/HTML/Reference/Global_attributes/id) des Seitenelements ist.
- `viewType` {{optional_inline}}
  - : {{WebExtAPIRef("extension.ViewType", "ViewType")}}. Der Typ der Erweiterungsansicht.
- `wasChecked` {{optional_inline}}
  - : `boolean`. Ein Flag, das angibt, ob ein Kontrollkästchen oder Optionsfeld vor dem Anklicken aktiviert war.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-OnClickData)-API von Chromium. Diese Dokumentation wurde aus [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code abgeleitet.

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
