---
title: bookmarks.get()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/get
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

Mit der ID eines {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}} oder eines Arrays solcher IDs ruft die Methode **`bookmarks.get()`** die entsprechenden Knoten ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getBookmarks = browser.bookmarks.get(
  idOrIdList                // string or string array
)
```

### Parameter

- `idOrIdList`
  - : Ein {{jsxref("String")}} oder {{jsxref("Array")}} von Strings, die die IDs von einem oder mehreren {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} Objekten angeben, die abgerufen werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von [`BookmarkTreeNode`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) erfüllt wird, jeweils ein Eintrag für jeden passenden Knoten. Separatoren sind in den Ergebnissen nicht enthalten. Falls keine Knoten gefunden werden konnten, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel versucht, das Lesezeichen abzurufen, dessen ID `bookmarkAAAA` ist. Falls kein Lesezeichen mit dieser ID existiert, wird `onRejected` aufgerufen:

```js
function onFulfilled(bookmarks) {
  console.log(bookmarks);
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

let gettingBookmarks = browser.bookmarks.get("bookmarkAAAA");
gettingBookmarks.then(onFulfilled, onRejected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-get) API. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weitergabe und Verwendung in Programm- und Binärform, mit oder ohne
// Änderungen, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weitergaben des Quellcodes müssen das obige Urheberrecht
//    den Bedingungen in dieser Liste und den folgenden Haftungsausschluss enthalten.
//    * Weitergaben in Binärform müssen das obige Urheberrecht,
//    diese Bedingungen und den folgenden Haftungsausschluss in der
//    Dokumentation und/oder anderen Materialien umfassen, die mit der
//    Verteilung geliefert werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
//    Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser
//    Software abgeleitet sind, ohne spezifische vorherige schriftliche Genehmigung zu
//    unterstützen oder zu fördern.
//
// DIESE SOFTWARE WIRD VON DEN RECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE EXPLIZITE ODER IMPLIZITE
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
// IMPLIZITEN GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN
// BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL HAFTEN DIE
// RECHTSINHABER ODER MITWIRKENDEN FÜR JEGLICHE DIREKTE, INDIREKTE,
// ZUFÄLLIGE, BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZGÜTERN ODER DIENSTEN,
// VERLUST VON NUTZUNG, DATEN ODER GEWINNEN ODER GESCHÄFTSUNTERBRECHUNG),
// WIE AUCH IMMER VERURSACHT UND UNABHÄNGIG VON DER HAFTUNGSTHEORIE,
// SEI ES IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ÄHNLICHEM), DIE AUS DER NUTZUNG
// DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT
// SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
