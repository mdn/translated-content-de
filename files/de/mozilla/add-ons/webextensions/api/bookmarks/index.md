---
title: Lesezeichen
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) `bookmarks` API ermöglicht es einer Erweiterung, mit dem Lesezeichen-System des Browsers zu interagieren und dieses zu manipulieren. Sie können es verwenden, um Seiten zu Lesezeichen hinzuzufügen, vorhandene Lesezeichen abzurufen sowie Lesezeichen zu bearbeiten, zu entfernen und zu organisieren.

Um diese API zu verwenden, muss eine Erweiterung die "bookmarks" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern.

Erweiterungen können keine Lesezeichen im Stammknoten des Lesezeichen-Baums erstellen, ändern oder löschen. Der Versuch, dies zu tun, führt zu einem Fehler mit der Meldung: "_The bookmark root cannot be modified_".

## Typen

- {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}}
  - : Repräsentiert ein Lesezeichen oder einen Ordner im Lesezeichen-Baum.
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}}
  - : Ein {{jsxref("String")}} Enum, der beschreibt, ob ein Knoten im Baum ein Lesezeichen, ein Ordner oder ein Trenner ist.
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeUnmodifiable")}}
  - : Ein {{jsxref("String")}} Enum, das angibt, warum ein Lesezeichen oder Ordner nicht modifizierbar ist.
- {{WebExtAPIRef("bookmarks.CreateDetails")}}
  - : Enthält Informationen, die an die {{WebExtAPIRef("bookmarks.create()")}} Funktion übergeben werden, wenn ein neues Lesezeichen erstellt wird.

## Funktionen

- {{WebExtAPIRef("bookmarks.create()")}}
  - : Erstellt ein Lesezeichen oder einen Ordner.
- {{WebExtAPIRef("bookmarks.get()")}}
  - : Ruft ein oder mehrere {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}s ab, basierend auf der ID eines Lesezeichens oder einem Array von Lesezeichen-IDs.
- {{WebExtAPIRef("bookmarks.getChildren()")}}
  - : Ruft die Kinder des angegebenen {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} ab.
- {{WebExtAPIRef("bookmarks.getRecent()")}}
  - : Ruft eine angeforderte Anzahl kürzlich hinzugefügter Lesezeichen ab.
- {{WebExtAPIRef("bookmarks.getSubTree()")}}
  - : Ruft einen Teil des Lesezeichen-Baums ab, beginnend beim angegebenen Knoten.
- {{WebExtAPIRef("bookmarks.getTree()")}}
  - : Ruft den gesamten Lesezeichen-Baum in ein Array von {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} Objekten ab.
- {{WebExtAPIRef("bookmarks.move()")}}
  - : Verschiebt den angegebenen {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} an einen neuen Ort im Lesezeichen-Baum.
- {{WebExtAPIRef("bookmarks.remove()")}}
  - : Entfernt ein Lesezeichen oder einen leeren Lesezeichen-Ordner, basierend auf der ID des Knotens.
- {{WebExtAPIRef("bookmarks.removeTree()")}}
  - : Entfernt rekursiv einen Lesezeichen-Ordner; das heißt, basierend auf der ID eines Ordnerknotens, entfernt dieser Knoten und alle seine Nachkommen.
- {{WebExtAPIRef("bookmarks.search()")}}
  - : Sucht nach {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}s, die einem festgelegten Kriterium entsprechen.
- {{WebExtAPIRef("bookmarks.update()")}}
  - : Aktualisiert den Titel und/oder die URL eines Lesezeichens oder den Namen eines Lesezeichen-Ordners, basierend auf der ID des Lesezeichens.

## Ereignisse

- {{WebExtAPIRef("bookmarks.onCreated")}}
  - : Wird ausgelöst, wenn ein Lesezeichen oder ein Ordner erstellt wird.
- {{WebExtAPIRef("bookmarks.onRemoved")}}
  - : Wird ausgelöst, wenn ein Lesezeichen oder ein Ordner entfernt wird. Wenn ein Ordner rekursiv entfernt wird, wird eine einzige Benachrichtigung für den Ordner ausgelöst, jedoch keine für dessen Inhalt.
- {{WebExtAPIRef("bookmarks.onChanged")}}
  - : Wird ausgelöst, wenn sich ein Lesezeichen oder Ordner ändert. Derzeit lösen nur Änderungen an `title` und `url` dies aus.
- {{WebExtAPIRef("bookmarks.onMoved")}}
  - : Wird ausgelöst, wenn ein Lesezeichen oder Ordner in einen anderen übergeordneten Ordner oder an einen neuen Platz innerhalb seines Ordners verschoben wird.
- {{WebExtAPIRef("bookmarks.onChildrenReordered")}}
  - : Wird ausgelöst, wenn der Benutzer die Kinder eines Ordners in der Benutzeroberfläche des Browsers sortiert hat. Dies wird nicht als Folge eines {{WebExtAPIRef("bookmarks.move", "move()")}} aufgerufen.
- {{WebExtAPIRef("bookmarks.onImportBegan")}}
  - : Wird ausgelöst, wenn eine Lesezeichen-Import-Sitzung begonnen hat. Aufwendige Beobachter sollten {{WebExtAPIRef("bookmarks.onCreated")}} Aktualisierungen ignorieren, bis {{WebExtAPIRef("bookmarks.onImportEnded")}} ausgelöst wird. Beobachter sollten jedoch andere Benachrichtigungen sofort behandeln.
- {{WebExtAPIRef("bookmarks.onImportEnded")}}
  - : Wird ausgelöst, wenn eine Lesezeichen-Import-Sitzung beendet ist.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks) API. Diese Dokumentation stammt aus [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.
