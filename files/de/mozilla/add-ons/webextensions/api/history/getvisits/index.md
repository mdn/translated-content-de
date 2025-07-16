---
title: history.getVisits()
slug: Mozilla/Add-ons/WebExtensions/API/history/getVisits
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ruft Informationen über alle Besuche der angegebenen URL ab.

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
      - : `string`. Die URL, für die Informationen über Besuche abgerufen werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wird mit einem Array von {{WebExtAPIRef('history.VisitItem')}} Objekten erfüllt, die jeweils einen Besuch der angegebenen URL repräsentieren. Die Besuche sind in umgekehrter chronologischer Reihenfolge sortiert.

## Beispiele

Liste aller Besuche der zuletzt besuchten Seite:

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-getVisits) API von Chromium. Diese Dokumentation leitet sich von [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code ab.
