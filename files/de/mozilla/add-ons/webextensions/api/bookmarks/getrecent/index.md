---
title: bookmarks.getRecent()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getRecent
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Methode `bookmarks.getRecent()` ruft eine angegebene Anzahl der zuletzt hinzugefügten Lesezeichen als ein Array von {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}}-Objekten ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingRecent = browser.bookmarks.getRecent(
  numberOfItems          // integer
)
```

### Parameter

- `numberOfItems`
  - : Eine Zahl, die die maximale Anzahl der zurückzugebenden Elemente darstellt. Die zurückgegebene Liste enthält bis zu so viele der zuletzt hinzugefügten Elemente. Der minimal erlaubte Wert hier ist 1. Wenn Sie 0 oder weniger übergeben, wird die Funktion einen Fehler auslösen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von [`BookmarkTreeNode`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode)-Objekten erfüllt wird.

## Beispiele

Dieses Beispiel protokolliert die URL für das zuletzt hinzugefügte Lesezeichen:

```js
function onFulfilled(bookmarks) {
  for (const bookmark of bookmarks) {
    console.log(bookmark.url);
  }
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

browser.bookmarks.getRecent(1).then(onFulfilled, onRejected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-getRecent)-API von Chromium. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions des Quellcodes müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Redistributions in binärer Form müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der Verteilung
// bereitgestellt werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen zur Unterstützung oder Werbung für Produkte, die von
// dieser Software abgeleitet sind, ohne spezifische vorherige schriftliche
// Erlaubnis verwendet werden.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" ZUR VERFÜGUNG GESTELLT, UND JEGLICHE AUSDRÜCKLICHE ODER
// IMPLIZIERTE GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DIE GEWÄHRLEISTUNGEN DER MARKTFÄHIGKEIT UND EIGNUNG
// FÜR EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL SOLLEN
// DIE URHEBERRECHTSINHABER ODER MITWIRKENDEN FÜR JEGLICHE DIREKTEN,
// INDIREKTEN, BEILÄUFIGEN, BESONDEREN, EXEMPLARISCHEN ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON
// ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSAUSFALL, DATENVERLUST ODER
// GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG) HAFTBAR SEIN, WIE AUCH
// IMMER VERURSACHT UND UNTER JEGLICHER HAFTUNGSTHEORIE, OB IN VERTRAG,
// STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT
// ODER ANDERWEITIG), SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN
// HINGEWIESEN WURDE.
-->
