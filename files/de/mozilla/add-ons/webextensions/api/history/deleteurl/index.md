---
title: history.deleteUrl()
slug: Mozilla/Add-ons/WebExtensions/API/history/deleteUrl
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Entfernt alle Besuche der angegebenen URL aus dem Browserverlauf.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let deletingUrl = browser.history.deleteUrl(
  details         // object
)
```

### Parameter

- `details`
  - : `object`. Objekt, das die URL enthält, deren Besuche entfernt werden sollen.
    - `url`
      - : `string`. Die URL, deren Besuche entfernt werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wird ohne Parameter erfüllt, wenn die Besuche entfernt wurden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Entfernen Sie alle Besuche von "https\://example.org/" aus dem Verlauf und überprüfen Sie dann, dass diese URL nicht mehr von {{WebExtAPIRef("history.search()")}} zurückgegeben wird:

```js
let urlToRemove = "https://example.org/";

function onGot(results) {
  if (!results.length) {
    console.log(`${urlToRemove} was removed`);
  } else {
    console.log(`${urlToRemove} was not removed`);
  }
}

function onRemoved() {
  let searching = browser.history.search({
    text: urlToRemove,
    startTime: 0,
  });

  searching.then(onGot);
}

let deletingUrl = browser.history.deleteUrl({ url: urlToRemove });

deletingUrl.then(onRemoved);
```

Entfernen Sie die zuletzt besuchte Seite aus dem Verlauf, mit einem Listener für {{WebExtAPIRef("history.onVisitRemoved")}}, um die URL der entfernten Seite zu protokollieren:

```js
function onRemoved(removeInfo) {
  if (removeInfo.urls.length) {
    console.log(`Removed: ${removeInfo.urls[0]}`);
  }
}

browser.history.onVisitRemoved.addListener(onRemoved);

function onGot(results) {
  if (results.length) {
    console.log(`Removing: ${results[0].url}`);
    browser.history.deleteUrl({ url: results[0].url });
  }
}

let searching = browser.history.search({
  text: "",
  startTime: 0,
  maxResults: 1,
});

searching.then(onGot);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-deleteUrl) API. Diese Dokumentation ist abgeleitet von [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.
