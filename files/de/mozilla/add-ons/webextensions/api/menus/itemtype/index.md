---
title: menus.ItemType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ItemType
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der Typ des Menüelements.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- normal
  - : Ein Menüpunkt, der einfach ein Label anzeigt.
- checkbox
  - : Ein Menüpunkt, der einen binären Zustand darstellt. Er zeigt ein Häkchen neben dem Label an. Durch Klicken auf das Element wird das Häkchen umgeschaltet. Der {{WebExtAPIRef("menus.onClicked")}} Listener erhält zwei zusätzliche Eigenschaften: "checked", die angibt, ob das Element jetzt markiert ist, und "wasChecked", die angibt, ob das Element vor dem Klickereignis markiert war.
- radio
  - : Ein Menüpunkt, der eine von mehreren Auswahlmöglichkeiten darstellt. Wie bei einer Checkbox wird auch hier ein Häkchen neben dem Label angezeigt, und sein {{WebExtAPIRef("menus.onClicked")}} Listener erhält "checked" und "wasChecked". Wenn Sie jedoch mehr als ein Radioelement erstellen, funktionieren die Elemente als Gruppe von Radioelementen: Nur ein Element in der Gruppe kann markiert sein, und ein Klick auf ein Element macht es zum markierten Element.
- separator
  - : Eine Linie, die eine Gruppe von Elementen trennt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-ItemType). Diese Dokumentation ist entnommen aus [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.

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
