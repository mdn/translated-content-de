---
title: bookmarks.onChildrenReordered
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onChildrenReordered
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn sich die Reihenfolge der Unterelemente eines Ordners aufgrund der Sortierung im UI geändert hat. Dies wird nicht als Ergebnis eines Aufrufs von {{WebExtAPIRef("bookmarks.move()")}} oder einer Drag-Operation im UI aufgerufen.

## Syntax

```js-nolint
browser.bookmarks.onChildrenReordered.addListener(listener)
browser.bookmarks.onChildrenReordered.removeListener(listener)
browser.bookmarks.onChildrenReordered.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `id`
      - : `string`. ID des Ordners, dessen Unterelemente neu geordnet wurden.
    - `reorderInfo`
      - : `object`. Objekt, das zusätzliche Objekte enthält. Siehe den Abschnitt [reorderInfo](#reorderinfo_2) für weitere Details.

## Zusätzliche Objekte

### reorderInfo

- `childIds`
  - : `array` von `string`. Array, das die IDs aller Lesezeichen-Elemente in diesem Ordner enthält, in der Reihenfolge, in der sie jetzt im UI erscheinen.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function handleChildrenReordered(id, reorderInfo) {
  console.log(`Item: ${id} children reordered`);
  console.log(`Children: ${reorderInfo.childIds}`);
}

function handleClick() {
  browser.bookmarks.onChildrenReordered.addListener(handleChildrenReordered);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#event-onChildrenReordered) API. Diese Dokumentation ist von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code abgeleitet.

<!--
// Urheberrecht 2015 Die Chromium-Autoren. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Verwendung in Quell- und Binärformen, mit oder ohne
// Modifikationen, sind unter folgenden Bedingungen gestattet:
//
//    * Weiterverbreitungen von Quellcode müssen das obige Copyright-Vermerk,
//      diese Bedingungsliste und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitungen in Binärform müssen das obige Copyright-Vermerk,
//      diese Bedingungsliste und den folgenden Haftungsausschluss in der
//      Dokumentation und/oder in anderen Materialien, die mit der
//      Verbreitung geliefert werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
//      Mitwirkenden dürfen verwendet werden, um Produkte zu unterstützen 
//      oder zu bewerben, die von dieser Software abgeleitet wurden, ohne
//      vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND DEN BEITRAGENDEN
// "WIE BESEHEN" BEREITGESTELLT UND ALLE AUSDRÜCKLICHEN ODER IMPLIZIERTEN 
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE
// IMPLIZIERTEN GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR
// EINEN BESTIMMTEN ZWECK, SIND AUSGESCHLOSSEN. IN KEINEM FALL SIND DIE
// URHEBERRECHTSINHABER ODER BEITRAGENDEN HAFTBAR FÜR JEGLICHE DIREKTEN,
// INDIREKTEN, ZUFÄLLIGEN, SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE BESCHAFFUNG VON 
// ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSVERLUSTEN, DATENVERLUST 
// ODER GEWINNVERLUSTE; ODER GESCHÄFTSUNTERBRECHUNG), WAS AUCH IMMER
// URSACHEN SIE, UND AUF JEGLICHE THEORIE DER HAFTUNG, OB IN VERTRAG,
// STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH
// FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE IN JEDEM FALL AUS DER NUTZUNG 
// DERSELBEN HERVORGEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER
// SCHÄDEN HINGEWIESEN WURDE.
-->
