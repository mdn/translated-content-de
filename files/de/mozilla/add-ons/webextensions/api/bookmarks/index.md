---
title: bookmarks
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) `bookmarks` API ermöglicht es einer Erweiterung, mit dem Lesezeichensystem des Browsers zu interagieren und dieses zu manipulieren. Sie können es verwenden, um Seiten zu bookmarken, bestehende Lesezeichen abzurufen und Lesezeichen zu bearbeiten, zu entfernen und zu organisieren.

Um diese API zu nutzen, muss eine Erweiterung die "bookmarks" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei anfordern.

Erweiterungen können keine Lesezeichen im Stammknoten des Lesezeichenbaums erstellen, ändern oder löschen. Ein solcher Versuch führt zu einem Fehler mit der Meldung: "_The bookmark root cannot be modified_"

## Typen

- {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}}
  - : Repräsentiert ein Lesezeichen oder einen Ordner im Lesezeichenbaum.
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}}
  - : Ein {{jsxref("String")}}-Enum, das beschreibt, ob ein Knoten im Baum ein Lesezeichen, ein Ordner oder ein Trenner ist.
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeUnmodifiable")}}
  - : Ein {{jsxref("String")}}-Enum, das angibt, warum ein Lesezeichen oder Ordner nicht modifizierbar ist.
- {{WebExtAPIRef("bookmarks.CreateDetails")}}
  - : Enthält Informationen, die an die {{WebExtAPIRef("bookmarks.create()")}}-Funktion übergeben werden, wenn ein neues Lesezeichen erstellt wird.

## Funktionen

- {{WebExtAPIRef("bookmarks.create()")}}
  - : Erstellt ein Lesezeichen oder einen Ordner.
- {{WebExtAPIRef("bookmarks.get()")}}
  - : Ruft ein oder mehrere {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}s ab, basierend auf der ID eines Lesezeichens oder eines Arrays von Lesezeichen-IDs.
- {{WebExtAPIRef("bookmarks.getChildren()")}}
  - : Ruft die Kinder des angegebenen {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} ab.
- {{WebExtAPIRef("bookmarks.getRecent()")}}
  - : Ruft eine angeforderte Anzahl von kürzlich hinzugefügten Lesezeichen ab.
- {{WebExtAPIRef("bookmarks.getSubTree()")}}
  - : Ruft einen Teil des Lesezeichenbaums ab, beginnend am angegebenen Knoten.
- {{WebExtAPIRef("bookmarks.getTree()")}}
  - : Ruft den gesamten Lesezeichenbaum als ein Array von {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}-Objekten ab.
- {{WebExtAPIRef("bookmarks.move()")}}
  - : Verschiebt den angegebenen {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} an eine neue Position im Lesezeichenbaum.
- {{WebExtAPIRef("bookmarks.remove()")}}
  - : Entfernt ein Lesezeichen oder einen leeren Lesezeichenordner, basierend auf der ID des Knotens.
- {{WebExtAPIRef("bookmarks.removeTree()")}}
  - : Entfernt einen Lesezeichenordner rekursiv; das bedeutet, dass der Knoten und alle seine Nachfahren entfernt werden, basierend auf der ID des Ordnerknotens.
- {{WebExtAPIRef("bookmarks.search()")}}
  - : Sucht nach {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}s, die einem bestimmten Satz an Kriterien entsprechen.
- {{WebExtAPIRef("bookmarks.update()")}}
  - : Aktualisiert den Titel und/oder die URL eines Lesezeichens oder den Namen eines Lesezeichenordners, basierend auf der ID des Lesezeichens.

## Ereignisse

- {{WebExtAPIRef("bookmarks.onCreated")}}
  - : Wird ausgelöst, wenn ein Lesezeichen oder Ordner erstellt wird.
- {{WebExtAPIRef("bookmarks.onRemoved")}}
  - : Wird ausgelöst, wenn ein Lesezeichen oder Ordner entfernt wird. Wenn ein Ordner rekursiv entfernt wird, wird eine einzelne Benachrichtigung für den Ordner ausgelöst, und keine für seinen Inhalt.
- {{WebExtAPIRef("bookmarks.onChanged")}}
  - : Wird ausgelöst, wenn ein Lesezeichen oder Ordner geändert wird. Derzeit lösen nur Änderungen an `title` und `url` dies aus.
- {{WebExtAPIRef("bookmarks.onMoved")}}
  - : Wird ausgelöst, wenn ein Lesezeichen oder Ordner in einen anderen übergeordneten Ordner oder an eine neue Position innerhalb seines Ordners verschoben wird.
- {{WebExtAPIRef("bookmarks.onChildrenReordered")}}
  - : Wird ausgelöst, wenn der Benutzer die Kinder eines Ordners in der UI des Browsers sortiert hat. Dies wird nicht als Ergebnis eines {{WebExtAPIRef("bookmarks.move", "move()")}} aufgerufen.
- {{WebExtAPIRef("bookmarks.onImportBegan")}}
  - : Wird ausgelöst, wenn ein Lesezeichen-Importvorgang begonnen hat. Aufwendige Beobachter sollten {{WebExtAPIRef("bookmarks.onCreated")}}-Updates ignorieren, bis {{WebExtAPIRef("bookmarks.onImportEnded")}} ausgelöst wird. Andere Benachrichtigungen sollten von Beobachtern jedoch sofort verarbeitet werden.
- {{WebExtAPIRef("bookmarks.onImportEnded")}}
  - : Wird ausgelöst, wenn ein Lesezeichen-Importvorgang beendet ist.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks)-API von Chromium. Diese Dokumentation stammt von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.
