---
title: bookmarks.getSubTree()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getSubTree
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

Die Methode **`bookmarks.getSubTree()`** ruft asynchron einen {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}} ab, basierend auf seiner ID.

Wenn das Element ein Ordner ist, können Sie auf alle seine Nachkommen rekursiv über seine `children`-Eigenschaft und die `children`-Eigenschaft seiner Nachkommen zugreifen, sofern diese selbst Ordner sind.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingSubTree = browser.bookmarks.getSubTree(
  id                     // string
)
```

### Parameter

- `id`
  - : Ein {{jsxref("String")}}, der die ID des Wurzelelements des abzurufenden Unterbaums angibt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array erfüllt wird, das ein Objekt enthält, ein {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} Objekt, das das Element mit der angegebenen ID darstellt.

Wenn ein Knoten entsprechend der `id` nicht gefunden werden konnte, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel gibt rekursiv den Unterbaum unter einem gegebenen Knoten aus:

```js
function makeIndent(indentLength) {
  return ".".repeat(indentLength);
}

function logItems(bookmarkItem, indent) {
  if (bookmarkItem.url) {
    console.log(makeIndent(indent) + bookmarkItem.url);
  } else {
    console.log(`${makeIndent(indent)}Folder: ${bookmarkItem.id}`);
    indent++;
  }
  if (bookmarkItem.children) {
    for (const child of bookmarkItem.children) {
      logItems(child, indent);
    }
  }
}

function logSubTree(bookmarkItems) {
  logItems(bookmarkItems[0], 0);
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

let subTreeID = "root_____";

browser.bookmarks.getSubTree(subTreeID).then(logSubTree, onRejected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-getSubTree) API von Chromium. Diese Dokumentation stammt aus [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions von Quellcode müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Redistributions in binärer Form müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien
// enthalten, die mit der Verteilung bereitgestellt werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die aus dieser
// Software abgeleitet wurden, ohne spezifische vorherige schriftliche
// Genehmigung zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" UND OHNE JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE
// GARANTIEN BEREITGESTELLT, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF
// DIE IMPLIZIERTEN GARANTIEN DER MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN
// BESTIMMTEN ZWECK. IN KEINEM FALL SIND DIE URHEBERRECHTSINHABER ODER
// MITWIRKENDE HAFTBAR FÜR JEGLICHE DIREKTEN, INDIREKTEN, BEILÄUFIGEN,
// BESONDEREN, BEISPIELHAFTEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER
// NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN;
// VERLUST VON NUTZUNG, DATEN ODER GEWINNEN; ODER GESCHÄFTSUNTERBRECHUNG)
// JEDOCH VERURSACHT UND UNTER JEGLICHER HAFTUNGSTHEORIE, OB VERTRAG
// HAFTUNG, STRICT LIABILITY ODER UNERLAUBTE HANDLUNG (EINSCHLIESSLICH
// FAHRLÄSSIGKEIT ODER ANDERWEITIG) VERURSACHT, SELBST WENN AUF DIE
// MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
