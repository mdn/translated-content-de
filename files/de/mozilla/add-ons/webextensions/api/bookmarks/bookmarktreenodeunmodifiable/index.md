---
title: bookmarks.BookmarkTreeNodeUnmodifiable
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeUnmodifiable
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Typ **`bookmarks.BookmarkTreeNodeUnmodifiable`** wird verwendet, um den Grund anzugeben, warum ein Knoten im Lesezeichenbaum (wobei jeder Knoten entweder ein Lesezeichen oder ein Lesezeichen-Ordner ist) nicht geändert werden kann. Dies wird als Wert des Felds {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "bookmarks.BookmarkTreeNode.unmodifiable", "unmodifiable")}} auf Lesezeichen-Knoten verwendet.

## Typ

`bookmarks.BookmarkTreeNodeUnmodifiable` ist ein {{jsxref("string")}}, der derzeit nur einen Wert haben kann: `"managed"`. Dies zeigt an, dass der Lesezeichenknoten von einem Administrator oder von der Aufsichtsperson eines überwachten Benutzers konfiguriert wurde (wie zum Beispiel einem Elternteil im Falle von elterlicher Kontrolle).

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#type-BookmarkTreeNodeUnmodifiable) API. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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
