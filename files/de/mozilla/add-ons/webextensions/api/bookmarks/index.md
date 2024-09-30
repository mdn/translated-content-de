---
title: bookmarks
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) `bookmarks` API ermöglicht es einer Erweiterung, mit dem Lesezeichen-System des Browsers zu interagieren und es zu manipulieren. Sie können es verwenden, um Seiten zu bookmarken, vorhandene Lesezeichen abzurufen und Lesezeichen zu bearbeiten, zu entfernen und zu organisieren.

Um diese API zu verwenden, muss eine Erweiterung die "bookmarks" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern.

Erweiterungen können keine Lesezeichen im Stammknoten des Lesezeichenbaums erstellen, ändern oder löschen. Ein solcher Versuch führt zu einem Fehler mit der Meldung: "_The bookmark root cannot be modified_"

## Typen

- {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}}
  - : Repräsentiert ein Lesezeichen oder einen Ordner im Lesezeichenbaum.
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}}
  - : Ein {{jsxref("String")}} Enum, das beschreibt, ob ein Knoten im Baum ein Lesezeichen, ein Ordner oder ein Separator ist.
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeUnmodifiable")}}
  - : Ein {{jsxref("String")}} Enum, das angibt, warum ein Lesezeichen oder Ordner nicht modifizierbar ist.
- {{WebExtAPIRef("bookmarks.CreateDetails")}}
  - : Enthält Informationen, die der Funktion {{WebExtAPIRef("bookmarks.create()")}} beim Erstellen eines neuen Lesezeichens übergeben werden.

## Funktionen

- {{WebExtAPIRef("bookmarks.create()")}}
  - : Erstellt ein Lesezeichen oder einen Ordner.
- {{WebExtAPIRef("bookmarks.get()")}}
  - : Ruft ein oder mehrere {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}s ab, basierend auf der ID eines Lesezeichens oder einem Array von Lesezeichen-IDs.
- {{WebExtAPIRef("bookmarks.getChildren()")}}
  - : Ruft die Kinder des angegebenen {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} ab.
- {{WebExtAPIRef("bookmarks.getRecent()")}}
  - : Ruft eine angeforderte Anzahl von vor Kurzem hinzugefügten Lesezeichen ab.
- {{WebExtAPIRef("bookmarks.getSubTree()")}}
  - : Ruft einen Teil des Lesezeichenbaums ab, beginnend beim angegebenen Knoten.
- {{WebExtAPIRef("bookmarks.getTree()")}}
  - : Ruft den gesamten Lesezeichenbaum als ein Array von {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} Objekten ab.
- {{WebExtAPIRef("bookmarks.move()")}}
  - : Verschiebt das angegebene {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} an eine neue Position im Lesezeichenbaum.
- {{WebExtAPIRef("bookmarks.remove()")}}
  - : Entfernt ein Lesezeichen oder einen leeren Lesezeichenordner basierend auf der ID des Knotens.
- {{WebExtAPIRef("bookmarks.removeTree()")}}
  - : Entfernt rekursiv einen Lesezeichenordner; das heißt, basierend auf der ID eines Ordnerknotens werden dieser Knoten und alle seine Nachkommen entfernt.
- {{WebExtAPIRef("bookmarks.search()")}}
  - : Sucht nach {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}s, die einem bestimmten Satz von Kriterien entsprechen.
- {{WebExtAPIRef("bookmarks.update()")}}
  - : Aktualisiert den Titel und/oder die URL eines Lesezeichens oder den Namen eines Lesezeichenordners basierend auf der ID des Lesezeichens.

## Ereignisse

- {{WebExtAPIRef("bookmarks.onCreated")}}
  - : Wird ausgelöst, wenn ein Lesezeichen oder Ordner erstellt wird.
- {{WebExtAPIRef("bookmarks.onRemoved")}}
  - : Wird ausgelöst, wenn ein Lesezeichen oder Ordner entfernt wird. Wenn ein Ordner rekursiv entfernt wird, wird eine einzige Benachrichtigung für den Ordner ausgelöst, jedoch keine für dessen Inhalt.
- {{WebExtAPIRef("bookmarks.onChanged")}}
  - : Wird ausgelöst, wenn sich ein Lesezeichen oder Ordner ändert. Derzeit lösen nur Änderungen des `title` und der `url` dies aus.
- {{WebExtAPIRef("bookmarks.onMoved")}}
  - : Wird ausgelöst, wenn ein Lesezeichen oder Ordner in einen anderen übergeordneten Ordner oder an eine neue Position innerhalb seines Ordners verschoben wird.
- {{WebExtAPIRef("bookmarks.onChildrenReordered")}}
  - : Wird ausgelöst, wenn der Benutzer die Kinder eines Ordners in der Benutzeroberfläche des Browsers sortiert hat. Dies wird nicht als Ergebnis einer {{WebExtAPIRef("bookmarks.move", "move()")}} aufgerufen.
- {{WebExtAPIRef("bookmarks.onImportBegan")}}
  - : Wird ausgelöst, wenn eine Lesezeichen-Importaktion beginnt. Leistungsintensive Beobachter sollten {{WebExtAPIRef("bookmarks.onCreated")}} Aktualisierungen ignorieren, bis {{WebExtAPIRef("bookmarks.onImportEnded")}} ausgelöst wird. Beobachter sollten dennoch andere Benachrichtigungen sofort behandeln.
- {{WebExtAPIRef("bookmarks.onImportEnded")}}
  - : Wird ausgelöst, wenn eine Lesezeichen-Importaktion abgeschlossen ist.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks) API von Chromium. Diese Dokumentation ist von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code abgeleitet.

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
