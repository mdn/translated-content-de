---
title: bookmarks.getTree()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getTree
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

**`bookmarks.getTree()`** gibt ein Array zurück, das die Wurzel des Lesezeichenbaums als ein {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}} Objekt enthält.

Sie können auf den gesamten Baum rekursiv über seine Eigenschaft `children` und die `children` Eigenschaften seiner Nachkommen zugreifen, wenn diese selbst Ordner sind.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingTree = browser.bookmarks.getTree()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array erfüllt wird, welches ein Objekt enthält, ein [`bookmarks.BookmarkTreeNode`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) Objekt, das den Wurzelknoten darstellt.

## Beispiele

Dieses Beispiel gibt den gesamten Lesezeichenbaum aus:

```js
function makeIndent(indentLength) {
  return ".".repeat(indentLength);
}

function logItems(bookmarkItem, indent) {
  if (bookmarkItem.url) {
    console.log(makeIndent(indent) + bookmarkItem.url);
  } else {
    console.log(`${makeIndent(indent)}Folder`);
    indent++;
  }
  if (bookmarkItem.children) {
    for (const child of bookmarkItem.children) {
      logItems(child, indent);
    }
  }
  indent--;
}

function logTree(bookmarkItems) {
  logItems(bookmarkItems[0], 0);
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

let gettingTree = browser.bookmarks.getTree();
gettingTree.then(logTree, onRejected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-getTree) API von Chromium. Diese Dokumentation ist aus [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code übernommen.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions von Quellcode müssen den obigen Copyright-Hinweis,
// diese Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Redistributions in binärerer Form müssen den obigen
// Copyright-Hinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien, die
// mit der Verteilung bereitgestellt werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser
// Software abgeleitet wurden, zu unterstützen oder zu bewerben, ohne
// vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" ZUR VERFÜGUNG GESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER
// STILLSCHWEIGENDE GARANTIEN, EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DIE STILLSCHWEIGENDEN GARANTIEN DER
// BELASTBARKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK WERDEN
// ABGELEHNT. IN KEINEM FALL SIND DIE URHEBERRECHTSINHABER ODER
// MITWIRKENDEN HAFTBAR FÜR JEGLICHE DIREKTEN, INDIREKTEN,
// ZUFÄLLIGEN, SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF BESCHAFFUNG VON
// ERSATZGÜTERN ODER DIENSTLEISTUNGEN; VERLUST VON NUTZUNG, DATEN ODER
// GEWINNEN; ODER GESCHÄFTSUNTERBRECHUNG) WIE AUCH IMMER
// VERURSACHT UND UNABHÄNGIG VON DER HAFTUNGSTHEORIE, OB IN
// VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE AUS DER
// NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE
// MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WIRD.
-->
