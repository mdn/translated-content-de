---
title: bookmarks.BookmarkTreeNodeUnmodifiable
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeUnmodifiable
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Der Typ **`bookmarks.BookmarkTreeNodeUnmodifiable`** wird verwendet, um den Grund anzugeben, warum ein Knoten im Lesezeichenbaum (wobei jeder Knoten entweder ein Lesezeichen oder ein Lesezeichenordner ist) nicht geändert werden kann. Dies wird als Wert des Feldes {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "bookmarks.BookmarkTreeNode.unmodifiable", "unmodifiable")}} auf Lesezeichenknoten verwendet.

## Typ

`bookmarks.BookmarkTreeNodeUnmodifiable` ist ein {{jsxref("string")}}, das derzeit nur einen Wert haben kann: `"managed"`. Dies deutet darauf hin, dass der Lesezeichenknoten von einem Administrator oder vom Betreuer eines beaufsichtigten Nutzers (wie einem Elternteil im Fall von Kindersicherungen) konfiguriert wurde.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#type-BookmarkTreeNodeUnmodifiable) API von Chromium. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.
