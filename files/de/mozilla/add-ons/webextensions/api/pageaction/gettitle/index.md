---
title: pageAction.getTitle()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/getTitle
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ruft den Titel der Page Action ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingTitle = browser.pageAction.getTitle(
  details // object
)
```

### Parameter

- `details`
  - : `object`.
    - `tabId`
      - : `integer`. Die ID des Tabs, das die Page Action enthält, deren Titel Sie abrufen möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem String erfüllt wird, der den Titel der Page Action enthält.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel protokolliert den Titel der Page Action, wenn der Benutzer auf deren Icon klickt:

```js
function gotTitle(title) {
  console.log(`Title ${title}`);
}

browser.pageAction.onClicked.addListener((tab) => {
  let gettingTitle = browser.pageAction.getTitle({
    tabId: tab.id,
  });
  gettingTitle.then(gotTitle);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction#method-getTitle) API von Chromium. Diese Dokumentation stammt aus [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) im Chromium-Code.
