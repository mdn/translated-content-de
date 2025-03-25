---
title: history.getVisits()
slug: Mozilla/Add-ons/WebExtensions/API/history/getVisits
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{AddonSidebar}}

Ruft Informationen zu allen Besuchen der angegebenen URL ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.history.getVisits(
  details                // object
)
```

### Parameter

- `details`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `url`
      - : `string`. Die URL, für die Besuchsinformationen abgerufen werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wird mit einem Array von {{WebExtAPIRef('history.VisitItem')}}-Objekten erfüllt, die jeweils einen Besuch der angegebenen URL darstellen. Besuche sind in umgekehrt chronologischer Reihenfolge sortiert.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Liste alle Besuche der zuletzt besuchten Seite auf:

```js
function gotVisits(visits) {
  console.log(`Visit count: ${visits.length}`);
  for (const visit of visits) {
    console.log(visit.visitTime);
  }
}

function listVisits(historyItems) {
  if (historyItems.length) {
    console.log(`URL ${historyItems[0].url}`);
    const gettingVisits = browser.history.getVisits({
      url: historyItems[0].url,
    });
    gettingVisits.then(gotVisits);
  }
}

let searching = browser.history.search({
  text: "",
  startTime: 0,
  maxResults: 1,
});

searching.then(listVisits);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-getVisits) API. Diese Dokumentation stammt aus [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.
