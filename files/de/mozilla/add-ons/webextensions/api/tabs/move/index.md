---
title: tabs.move()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/move
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Verschiebt einen oder mehrere Tabs an eine neue Position im selben Fenster oder in ein anderes Fenster.

Sie können Tabs nur zu und von Fenstern verschieben, deren {{WebExtAPIRef('windows.WindowType', 'WindowType')}} `"normal"` ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let moving = browser.tabs.move(
  tabIds,              // integer oder Integer-Array
  moveProperties       // Objekt
)
```

### Parameter

- `tabIds`
  - : `integer` oder `array` von `integer`. ID des zu verschiebenden {{WebExtAPIRef('tabs.Tab', 'Tab')}}, oder ein Array von Tab-IDs.
- `moveProperties`

  - : `object`. Ein Objekt, das angibt, wohin die Tabs verschoben werden sollen.

    - `windowId` {{optional_inline}}
      - : `integer`. Die ID des Fensters, in das der/die Tab(s) verschoben werden sollen. Wenn Sie diesen weglassen, wird jeder Tab in `tabIds` an die Position `index` im aktuellen Fenster verschoben. Wenn Sie diesen angeben und `tabIds` enthält mehr als einen Tab, wird der erste Tab in `tabIds` an die Position `index` verschoben, und die anderen Tabs folgen ihm in der in `tabIds` angegebenen Reihenfolge.
    - `index`

      - : `integer`. Die Indexposition, an die der Tab verschoben werden soll, beginnend bei 0. Ein Wert von -1 platziert den Tab am Ende des Fensters.

        Wenn Sie einen Wert kleiner als -1 übergeben, wirft die Funktion einen Fehler.

        Beachten Sie, dass Sie keine fixierten Tabs an eine Position nach nicht fixierten Tabs in einem Fenster verschieben können oder umgekehrt. Zum Beispiel, wenn Sie ein oder mehrere fixierte Tabs im Ziel-Fenster haben und `tabIds` sich auf einen nicht fixierten Tab bezieht, können Sie hier keine 0 übergeben. Wenn Sie dies versuchen, schlägt die Funktion stillschweigend fehl (sie wirft keinen Fehler).

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `{{WebExtAPIRef('tabs.Tab')}}`-Objekt oder einem `array` von `{{WebExtAPIRef('tabs.Tab')}}`-Objekten erfüllt wird, das Details über die verschobenen Tabs enthält. Wenn keine Tabs verschoben wurden (zum Beispiel, weil Sie versucht haben, einen nicht fixierten Tab vor einen fixierten Tab zu bewegen), ist dies ein leeres Array. Bei einem Fehler wird das Versprechen mit einer Fehlermeldung abgelehnt.

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

Verschieben Sie alle Tabs, die über HTTP oder HTTPS von \*.mozilla.org bedient werden, ans Ende ihres Fensters:

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

Verschieben Sie alle Tabs, die über HTTP oder HTTPS von \*.mozilla.org bedient werden, in das Fenster, das den ersten solchen Tab hostet, beginnend bei Position 0:

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
