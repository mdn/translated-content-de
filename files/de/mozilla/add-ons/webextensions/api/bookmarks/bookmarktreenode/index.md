---
title: bookmarks.BookmarkTreeNode
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ein Objekt vom Typ `bookmarks.BookmarkTreeNode` repräsentiert einen Knoten im Lesezeichenbaum, wobei jeder Knoten ein Lesezeichen, ein Lesezeichenordner oder ein Trenner ist. Kindknoten sind innerhalb ihrer jeweiligen Elternordner nach einem `index` geordnet.

## Typ

Ein {{jsxref("object")}} mit den folgenden Eigenschaften:

- `children` {{optional_inline}}
  - : Ein {{jsxref("array")}} von `bookmarks.BookmarkTreeNode` Objekten, die die Kinder des Knotens repräsentieren. Die Liste ist in der Reihenfolge, in der die Kinder in der Benutzeroberfläche erscheinen, geordnet. Dieses Feld wird weggelassen, wenn der Knoten kein Ordner ist.
- `dateAdded` {{optional_inline}}
  - : Eine Zahl, die das Erstellungsdatum des Knotens in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit) darstellt.
- `dateGroupModified` {{optional_inline}}
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, zu der sich der Inhalt dieses Ordners zuletzt geändert hat, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `id`
  - : Eine {{jsxref("string")}}, die den Knoten eindeutig identifiziert. Jede ID ist innerhalb des Profils des Benutzers einzigartig und bleibt bei Browser-Neustarts unverändert.
- `index` {{optional_inline}}
  - : Eine Zahl, die die nullbasierte Position dieses Knotens innerhalb seines Elternordners repräsentiert, wobei Null den ersten Eintrag darstellt.
    > [!NOTE]
    > Wenn Sie mehrere Lesezeichen erstellen oder verschieben, da die {{WebExtAPIRef("bookmarks.create()")}}- und {{WebExtAPIRef("bookmarks.move()")}}-Methoden asynchron sind, können die Anfragen in beliebiger Reihenfolge bearbeitet werden. Folglich kann sich der Wert des Indexes jedes Lesezeichens ändern oder unbekannt sein, bis alle Anfragen abgeschlossen sind. Wenn der Index, der einem Lesezeichen zugewiesen ist, für Ihre Erweiterung von Bedeutung ist, sollte die Erweiterung – beim Erstellen oder Verschieben mehrerer Lesezeichen – warten, bis jeder `bookmarks.create` oder `bookmarks.move` Aufruf abgeschlossen ist, bevor sie das nächste Lesezeichen erstellt oder verschiebt. Das Warten stellt sicher, dass der Index, der jedem Lesezeichen zugewiesen ist, nicht von einem Erstellungs- oder Verschiebeaufruf beeinflusst wird, der gleichzeitig ausgeführt wird, während der ursprüngliche Aufruf noch bearbeitet wird.
- `parentId` {{optional_inline}}
  - : Eine {{jsxref("string")}}, die die ID des übergeordneten Ordners angibt. Diese Eigenschaft ist im Stammknoten nicht vorhanden.
- `title`
  - : Eine {{jsxref("string")}}, die den Text enthält, der für den Knoten in Menüs und Listen von Lesezeichen angezeigt wird.
- `type` {{optional_inline}}
  - : Ein {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}} Objekt, das angibt, ob es sich um ein Lesezeichen, einen Ordner oder einen Trenner handelt. Standardmäßig `"bookmark"` außer `url` wird weggelassen, in diesem Fall ist es standardmäßig `"folder"`.
- `unmodifiable` {{optional_inline}}
  - : Eine {{jsxref("string")}}, wie sie durch den Typ {{WebExtAPIRef('bookmarks.BookmarkTreeNodeUnmodifiable')}} beschrieben wird. Sie gibt den Grund an, warum der Knoten nicht geändert werden kann. Wenn der Knoten geändert werden kann, wird dies weggelassen.
- `url` {{optional_inline}}
  - : Eine {{jsxref("string")}}, die die URL für das Lesezeichen repräsentiert. Wenn der Knoten einen Ordner darstellt, wird diese Eigenschaft weggelassen.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#type-BookmarkTreeNode) API. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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
