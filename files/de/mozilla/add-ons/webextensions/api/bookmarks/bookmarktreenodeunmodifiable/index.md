---
title: bookmarks.BookmarkTreeNodeUnmodifiable
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeUnmodifiable
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der Typ **`bookmarks.BookmarkTreeNodeUnmodifiable`** wird verwendet, um den Grund anzugeben, warum ein Knoten im Bookmark-Baum (wobei jeder Knoten entweder ein Lesezeichen oder ein Lesezeichen-Ordner ist) nicht geändert werden kann. Dies wird als Wert des Feldes {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "bookmarks.BookmarkTreeNode.unmodifiable", "unmodifiable")}} auf Lesezeichen-Knoten verwendet.

## Typ

`bookmarks.BookmarkTreeNodeUnmodifiable` ist ein {{jsxref("string")}}, das derzeit nur einen Wert haben kann: `"managed"`. Dies bedeutet, dass der Lesezeichen-Knoten von einem Administrator oder dem Vormund eines überwachten Nutzers (wie z. B. einem Elternteil im Falle von Kindersicherung) konfiguriert wurde.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#type-BookmarkTreeNodeUnmodifiable) API von Chromium. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions des Quellcodes müssen den obigen Copyright-
// Hinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// enthalten.
//    * Redistributions in binärer Form müssen den obigen
// Copyright-Hinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien
// enthalten, die mit der Distribution bereitgestellt werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte zu unterstützen oder zu
// bewerben, die von dieser Software abgeleitet sind, ohne spezifische
// vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHTINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER
// IMPLIZIERTE GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT
// AUF DIE STILLSCHWEIGENDEN GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT UND
// EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL
// SIND DIE COPYRIGHTINHABER ODER MITWIRKENDE HAFTBAR FÜR JEGLICHE
// DIREKTEN, INDIREKTEN, ZUFÄLLIGEN, BESONDEREN, EXEMPLARISCHEN
// ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE
// BESCHAFFUNG VON ERSATZGÜTERN ODER DIENSTLEISTUNGEN, NUTZUNGSAUSFALL,
// DATENVERLUST ODER GEWINNE ODER GESCHÄFTSUNTERBRECHUNG) AUS
// JEGLICHER URSACHE UND UNTER JEGLICHER HAFTUNGSTHEORIE, OB IN VERTRAG,
// STRAFRECHT ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER
// ANDERES), DIE SICH AUS DER NUTZUNG DIESER SOFTWARE ERGEBEN, SELBST WENN
// ÜBER DIE MÖGLICHKEIT SOLCHER SCHÄDEN INFORMIERT.
-->
