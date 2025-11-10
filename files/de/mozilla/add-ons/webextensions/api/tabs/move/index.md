---
title: tabs.move()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/move
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Verschiebt einen oder mehrere Tabs an eine neue Position im gleichen Fenster oder in ein anderes Fenster.

Sie können Tabs nur zu und von Fenstern verschieben, deren {{WebExtAPIRef('windows.WindowType', 'WindowType')}} `"normal"` ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let moving = browser.tabs.move(
  tabIds,              // integer or integer array
  moveProperties       // object
)
```

### Parameter

- `tabIds`
  - : `integer` oder `array` von `integer`. ID des zu verschiebenden {{WebExtAPIRef('tabs.Tab', 'tab')}}, oder ein Array von Tab-IDs.
- `moveProperties`
  - : `object`. Ein Objekt, das angibt, wohin die Tabs verschoben werden sollen.
    - `windowId` {{optional_inline}}
      - : `integer`. Die ID des Fensters, in das Sie die Tabs verschieben möchten. Wenn Sie diesen Wert weglassen, wird jeder Tab in `tabIds` an `index` in seinem aktuellen Fenster verschoben. Wenn Sie diesen Wert angeben und `tabIds` mehr als einen Tab enthält, wird der erste Tab in `tabIds` an `index` verschoben, und die anderen Tabs folgen ihm in der angegebenen Reihenfolge.
    - `index`
      - : `integer`. Die Indexposition, an die der Tab verschoben werden soll, beginnend mit 0. Ein Wert von -1 platziert den Tab am Ende des Fensters.

        Wenn Sie einen Wert kleiner als -1 übergeben, wird die Funktion einen Fehler auslösen.

        Beachten Sie, dass Sie keine angehefteten Tabs an eine Position hinter nicht angehefteten Tabs in einem Fenster verschieben können oder nicht angeheftete Tabs an eine Position vor angehefteten Tabs. Zum Beispiel, wenn Sie ein oder mehrere angeheftete Tabs im Ziel-Fenster haben und `tabIds` auf einen nicht angehefteten Tab verweist, können Sie hier nicht 0 angeben. Wenn Sie dies versuchen, schlägt die Funktion ohne Fehlermeldung fehl (sie wird keinen Fehler auslösen).

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('tabs.Tab')}} Objekt oder einem `array` von {{WebExtAPIRef('tabs.Tab')}} Objekten erfüllt wird, die Details über die verschobenen Tabs enthalten. Falls keine Tabs verschoben wurden (zum Beispiel, weil Sie versucht haben, einen nicht angehefteten Tab vor einen angehefteten Tab zu verschieben), wird dies ein leeres Array sein. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Verschieben Sie den ersten Tab im aktuellen Fenster an die letzte Position im aktuellen Fenster:

```js
function onMoved(tab) {
  console.log(`Moved: ${tab}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function firstToLast(windowInfo) {
  if (windowInfo.tabs.length === 0) {
    return;
  }
  let moving = browser.tabs.move(windowInfo.tabs[0].id, { index: -1 });
  moving.then(onMoved, onError);
}

browser.browserAction.onClicked.addListener(() => {
  let gettingCurrent = browser.windows.getCurrent({ populate: true });
  gettingCurrent.then(firstToLast, onError);
});
```

Verschieben Sie alle Tabs, die über HTTP oder HTTPS von \*.mozilla.org bereitgestellt werden, ans Ende ihres Fensters:

```js
function onMoved(tab) {
  console.log(`Moved: ${tab}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function moveMoz(tabs) {
  let mozTabIds = tabs.map((tabInfo) => tabInfo.id);
  let moving = browser.tabs.move(mozTabIds, { index: -1 });
  moving.then(onMoved, onError);
}

browser.browserAction.onClicked.addListener(() => {
  let gettingMozTabs = browser.tabs.query({ url: "*://*.mozilla.org/*" });
  gettingMozTabs.then(moveMoz, onError);
});
```

Verschieben Sie alle Tabs, die über HTTP oder HTTPS von \*.mozilla.org bereitgestellt werden, in das Fenster, das den ersten solchen Tab beherbergt, beginnend bei Position 0:

```js
function onMoved(tab) {
  console.log(`Moved: ${tab}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function moveMoz(tabs) {
  let mozTabIds = tabs.map((tabInfo) => tabInfo.id);
  let targetWindow = tabs[0].windowId;
  let moving = browser.tabs.move(mozTabIds, {
    windowId: targetWindow,
    index: 0,
  });
  moving.then(onMoved, onError);
}

browser.browserAction.onClicked.addListener(() => {
  let gettingMozTabs = browser.tabs.query({ url: "*://*.mozilla.org/*" });
  gettingMozTabs.then(moveMoz, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-move) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
