---
title: tabs.move()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/move
l10n:
  sourceCommit: 8bc98818dfbc851ee6749b123e98f5eeb7e43923
---

Verschiebt einen oder mehrere Tabs an eine neue Position im selben Fenster oder in ein anderes Fenster.

Sie können nur Tabs zwischen Fenstern verschieben, deren {{WebExtAPIRef('windows.WindowType', 'WindowType')}} `"normal"` ist.

Wenn mit einem [Split View](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API#working_with_tab_split_views) verbundene Tabs verschoben werden:

- Wenn beide Tabs in einem Split angegeben sind und nebeneinander bleiben, ihre Reihenfolge jedoch geändert wird, werden die Tabs im Split View vertauscht.
- Wenn beide Tabs in einem Split View angegeben sind, aber durch einen oder mehrere Tabs getrennt sind, werden die Tabs verschoben und das Split View entfernt.
- Wenn nur einer der Tabs in einem Split View verschoben wird:
  - In Firefox wird der andere Tab verschoben, um das Split View zu erhalten. Die Tabs werden bei Bedarf neu geordnet.
    > [!NOTE]
    > Nur in Firefox 149, wenn ein Aufruf einen oder mehrere Tabs in einem Split View verschiebt, werden die Tabs im Split View zusammen verschoben, aber die Reihenfolge der Tabs bleibt unverändert.
  - In Chrome wird das Verschieben eines Tabs vom anderen Tab im Split View das Split View entfernen. (Dieses Verhalten kann sich in einer zukünftigen Version ändern.) Andernfalls werden die Tabs bei Bedarf neu geordnet.

## Syntax

```js-nolint
let moving = browser.tabs.move(
  tabIds,              // integer or integer array
  moveProperties       // object
)
```

### Parameter

- `tabIds`
  - : `integer` oder `array` von `integer`. ID des {{WebExtAPIRef('tabs.Tab', 'tab')}} zur Verschiebung oder ein Array von Tab-IDs.
- `moveProperties`
  - : `object`. Ein Objekt, das angibt, wohin die Tab(s) verschoben werden sollen.
    - `windowId` {{optional_inline}}
      - : `integer`. Die ID des Fensters, in das Sie die Tab(s) verschieben möchten. Wenn Sie dies weglassen, wird jeder Tab in `tabIds` an die Position `index` in seinem aktuellen Fenster verschoben. Wenn Sie dies einschließen und `tabIds` mehr als einen Tab enthält, wird der erste Tab in `tabIds` an `index` verschoben, und die anderen Tabs folgen ihm in der angegebenen Reihenfolge von `tabIds`.
    - `index`
      - : `integer`. Die Indexposition, an die der Tab verschoben werden soll, beginnend bei 0. Ein Wert von -1 platziert den Tab am Ende des Fensters.

        Wenn Sie einen Wert kleiner als -1 übergeben, löst die Funktion einen Fehler aus.

        Beachten Sie, dass Sie keine angehefteten Tabs an eine Position nach nicht angehefteten Tabs in einem Fenster verschieben können oder nicht angeheftete Tabs vor angeheftete Tabs. Zum Beispiel, wenn im Ziel-Fenster ein oder mehrere angeheftete Tabs vorhanden sind und `tabIds` auf einen nicht angehefteten Tab verweist, können Sie hier nicht 0 übergeben. Wenn Sie versuchen, dies zu tun, schlägt die Funktion stillschweigend fehl (sie löst keinen Fehler aus).

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('tabs.Tab')}}-Objekt oder einem `array` von {{WebExtAPIRef('tabs.Tab')}}-Objekten erfüllt wird, das Details über die verschobenen Tabs enthält. Wenn keine Tabs verschoben wurden (zum Beispiel, weil Sie versucht haben, einen nicht angehefteten Tab vor einen angehefteten Tab zu verschieben), ist dies ein leeres Array. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

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

Verschieben Sie alle über HTTP oder HTTPS bereitgestellten Tabs von \*.mozilla.org ans Ende ihres Fensters:

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

Verschieben Sie alle über HTTP oder HTTPS bereitgestellten Tabs von \*.mozilla.org in das Fenster, das den ersten solchen Tab hostet, beginnend bei Position 0:

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
> Diese API basiert auf Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-move) API. Diese Dokumentation stammt von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
