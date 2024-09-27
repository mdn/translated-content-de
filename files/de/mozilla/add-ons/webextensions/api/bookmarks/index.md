---
title: bookmarks
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) `bookmarks` API ermöglicht es einer Erweiterung, mit dem Lesezeichen-System des Browsers zu interagieren und es zu manipulieren. Sie können sie verwenden, um Seiten zu bookmarken, vorhandene Lesezeichen abzurufen sowie Lesezeichen zu bearbeiten, zu entfernen und zu organisieren.

Um diese API zu nutzen, muss die Erweiterung die Berechtigung "bookmarks" in der [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern.

Erweiterungen können keine Lesezeichen im Root-Knoten des Lesezeichenbaums erstellen, ändern oder löschen. Ein solcher Versuch führt zu einem Fehler mit der Meldung: "_The bookmark root cannot be modified_"

## Typen

- {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}}
  - : Repräsentiert ein Lesezeichen oder einen Ordner im Lesezeichenbaum.
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}}
  - : Ein {{jsxref("String")}}-Enum, das beschreibt, ob ein Knoten im Baum ein Lesezeichen, ein Ordner oder ein Separator ist.
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeUnmodifiable")}}
  - : Ein {{jsxref("String")}}-Enum, das angibt, warum ein Lesezeichen oder Ordner nicht modifizierbar ist.
- {{WebExtAPIRef("bookmarks.CreateDetails")}}
  - : Enthält Informationen, die an die {{WebExtAPIRef("bookmarks.create()")}} Funktion übergeben werden, wenn ein neues Lesezeichen erstellt wird.

## Funktionen

- {{WebExtAPIRef("bookmarks.create()")}}
  - : Erstellt ein Lesezeichen oder einen Ordner.
- {{WebExtAPIRef("bookmarks.get()")}}
  - : Ruft ein oder mehrere {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} ab, basierend auf der ID eines Lesezeichens oder einem Array von Lesezeichen-IDs.
- {{WebExtAPIRef("bookmarks.getChildren()")}}
  - : Ruft die Kinder des angegebenen {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} ab.
- {{WebExtAPIRef("bookmarks.getRecent()")}}
  - : Ruft eine gewünschte Anzahl kürzlich hinzugefügter Lesezeichen ab.
- {{WebExtAPIRef("bookmarks.getSubTree()")}}
  - : Ruft einen Teil des Lesezeichenbaums ab, beginnend bei dem angegebenen Knoten.
- {{WebExtAPIRef("bookmarks.getTree()")}}
  - : Ruft den gesamten Lesezeichenbaum in ein Array von {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} Objekten ab.
- {{WebExtAPIRef("bookmarks.move()")}}
  - : Verschiebt den angegebenen {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} an eine neue Stelle im Lesezeichenbaum.
- {{WebExtAPIRef("bookmarks.remove()")}}
  - : Entfernt ein Lesezeichen oder einen leeren Lesezeichenordner anhand der Knoten-ID.
- {{WebExtAPIRef("bookmarks.removeTree()")}}
  - : Entfernt rekursiv einen Lesezeichenordner; das heißt, gibt die ID eines Ordnerknotens an, entfernt diesen Knoten und alle seine Nachkommen.
- {{WebExtAPIRef("bookmarks.search()")}}
  - : Sucht nach {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}s, die einem angegebenen Satz von Kriterien entsprechen.
- {{WebExtAPIRef("bookmarks.update()")}}
  - : Aktualisiert den Titel und/oder die URL eines Lesezeichens oder den Namen eines Lesezeichenordners anhand der Lesezeichen-ID.

## Ereignisse

- {{WebExtAPIRef("bookmarks.onCreated")}}
  - : Wird ausgelöst, wenn ein Lesezeichen oder Ordner erstellt wird.
- {{WebExtAPIRef("bookmarks.onRemoved")}}
  - : Wird ausgelöst, wenn ein Lesezeichen oder Ordner entfernt wird. Wenn ein Ordner rekursiv entfernt wird, wird eine einzelne Benachrichtigung für den Ordner ausgelöst und keine für dessen Inhalte.
- {{WebExtAPIRef("bookmarks.onChanged")}}
  - : Wird ausgelöst, wenn sich ein Lesezeichen oder Ordner ändert. Derzeit wird dies nur bei Änderungen des `title` oder der `url` ausgelöst.
- {{WebExtAPIRef("bookmarks.onMoved")}}
  - : Wird ausgelöst, wenn ein Lesezeichen oder Ordner in einen anderen übergeordneten Ordner oder an einen neuen Offset innerhalb des Ordners verschoben wird.
- {{WebExtAPIRef("bookmarks.onChildrenReordered")}}
  - : Wird ausgelöst, wenn der Benutzer die Kinder eines Ordners in der Benutzeroberfläche des Browsers sortiert hat. Dies wird nicht durch einen Aufruf von {{WebExtAPIRef("bookmarks.move", "move()")}} ausgelöst.
- {{WebExtAPIRef("bookmarks.onImportBegan")}}
  - : Wird ausgelöst, wenn eine Lesezeichenimport-Sitzung begonnen hat. Kostenintensive Beobachter sollten {{WebExtAPIRef("bookmarks.onCreated")}}-Updates ignorieren, bis {{WebExtAPIRef("bookmarks.onImportEnded")}} ausgelöst wird. Beobachter sollten jedoch andere Benachrichtigungen sofort bearbeiten.
- {{WebExtAPIRef("bookmarks.onImportEnded")}}
  - : Wird ausgelöst, wenn eine Lesezeichenimport-Sitzung beendet ist.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks) API von Chromium. Diese Dokumentation stammt von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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
