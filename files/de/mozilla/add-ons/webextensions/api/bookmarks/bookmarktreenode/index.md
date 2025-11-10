---
title: bookmarks.BookmarkTreeNode
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein Objekt vom Typ `bookmarks.BookmarkTreeNode` repräsentiert einen Knoten im Lesezeichnungsbaum, wobei jeder Knoten ein Lesezeichen, ein Lesezeichenordner oder ein Separator ist. Kinderknoten sind nach einem `index` innerhalb ihrer jeweiligen übergeordneten Ordner geordnet.

## Typ

Ein {{jsxref("object")}} mit den folgenden Eigenschaften:

- `children` {{optional_inline}}
  - : Ein {{jsxref("array")}} von `bookmarks.BookmarkTreeNode`-Objekten, die die Kinder des Knotens darstellen. Die Liste ist in der Reihenfolge sortiert, in der die Kinder in der Benutzeroberfläche erscheinen. Dieses Feld fehlt, wenn der Knoten kein Ordner ist.
- `dateAdded` {{optional_inline}}
  - : Eine Zahl, die das Erstellungsdatum des Knotens in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time) darstellt.
- `dateGroupModified` {{optional_inline}}
  - : Eine Zahl, die das Datum und die Uhrzeit darstellt, zu der sich der Inhalt dieses Ordners zuletzt geändert hat, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `id`
  - : Ein {{jsxref("string")}}, das den Knoten eindeutig identifiziert. Jede ID ist innerhalb des Benutzerprofils einzigartig und bleibt bei Neustarts des Browsers unverändert.
- `index` {{optional_inline}}
  - : Eine Zahl, die die nullbasierte Position dieses Knotens innerhalb seines übergeordneten Ordners darstellt, wobei null den ersten Eintrag darstellt.
    > [!NOTE]
    > Wenn Sie mehrere Lesezeichen erstellen oder verschieben, da die Methoden {{WebExtAPIRef("bookmarks.create()")}} und {{WebExtAPIRef("bookmarks.move()")}} asynchron sind, können die Anforderungen in beliebiger Reihenfolge verarbeitet werden. Folglich kann sich der Wert jedes Lesezeichenindex ändern oder unbekannt sein, bis alle Anforderungen abgeschlossen sind. Wenn der Index, der einem Lesezeichen zugeordnet ist, für Ihre Erweiterung von Bedeutung ist, sollte die Erweiterung beim Erstellen oder Verschieben mehrerer Lesezeichen warten, bis jeder `bookmarks.create`- oder `bookmarks.move`-Aufruf abgeschlossen ist, bevor das nächste Lesezeichen erstellt oder verschoben wird. Das Warten stellt sicher, dass der Index, der jedem Lesezeichen zugeordnet ist, nicht durch das gleichzeitige Ausführen eines Erstellungs- oder Verschiebeaufrufs beeinflusst wird, während der ursprüngliche Aufruf in Bearbeitung ist.
- `parentId` {{optional_inline}}
  - : Ein {{jsxref("string")}}, das die ID des übergeordneten Ordners angibt. Diese Eigenschaft ist im Stammknoten nicht vorhanden.
- `title`
  - : Ein {{jsxref("string")}}, das den Text enthält, der für den Knoten in Menüs und Listen von Lesezeichen angezeigt wird.
- `type` {{optional_inline}}
  - : Ein {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}}-Objekt, das angibt, ob es sich um ein Lesezeichen, einen Ordner oder einen Separator handelt. Standardmäßig `"bookmark"`, es sei denn, `url` fehlt, in diesem Fall ist es standardmäßig `"folder"`.
- `unmodifiable` {{optional_inline}}
  - : Ein {{jsxref("string")}} wie im Typ {{WebExtAPIRef('bookmarks.BookmarkTreeNodeUnmodifiable')}} beschrieben. Repräsentiert den Grund, warum der Knoten nicht geändert werden kann. Wenn der Knoten geändert werden kann, fehlt dieser.
- `url` {{optional_inline}}
  - : Ein {{jsxref("string")}}, das die URL für das Lesezeichen darstellt. Wenn der Knoten einen Ordner darstellt, fehlt diese Eigenschaft.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#type-BookmarkTreeNode) API. Diese Dokumentation stammt aus [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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
