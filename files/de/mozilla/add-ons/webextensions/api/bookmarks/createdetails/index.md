---
title: bookmarks.CreateDetails
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/CreateDetails
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der `CreateDetails`-Typ wird verwendet, um die Eigenschaften eines neuen Lesezeichens, Lesezeichenordners oder Trennzeichens zu beschreiben, wenn die Methode {{WebExtAPIRef("bookmarks.create()")}} aufgerufen wird.

## Typ

Ein {{jsxref("object")}}, das eine Kombination der folgenden Felder enthält:

- `index` {{optional_inline}}
  - : Eine Ganzzahl ({{jsxref("Number")}}), die die Position angibt, an der das neue Lesezeichen unter seinem übergeordneten Element platziert werden soll. Ein Wert von 0 setzt es an den Anfang der Liste.
- `parentId` {{optional_inline}}
  - : Ein {{jsxref("string")}}, das die ID des übergeordneten Ordners angibt, in den das neue Lesezeichen oder der Lesezeichenordner platziert werden soll. In Chrome und Firefox ist der Standardordner der "Weitere Lesezeichen"-Ordner im Lesezeichenmenü.
- `title` {{optional_inline}}
  - : Ein {{jsxref("string")}}, der den Titel für das Lesezeichen oder den Namen des zu erstellenden Ordners angibt. Wenn dies nicht angegeben wird, ist der Titel `""`.
- `type` {{optional_inline}}
  - : Ein {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}}-Objekt, das angibt, ob es sich um ein Lesezeichen, einen Ordner oder ein Trennzeichen handelt. Standardmäßig wird `"bookmark"` verwendet, es sei denn `url` wird weggelassen, in diesem Fall wird `"folder"` verwendet.
- `url` {{optional_inline}}
  - : `string`. Ein {{jsxref("string")}}, das die URL der zu speichernden Seite angibt. Wenn dies weggelassen wird oder `null` ist, wird stattdessen ein Ordner erstellt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#type-CreateDetails). Diese Dokumentation basiert auf [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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
