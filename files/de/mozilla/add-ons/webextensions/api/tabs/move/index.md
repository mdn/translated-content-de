---
title: tabs.move()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/move
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Bewegt einen oder mehrere Tabs an eine neue Position im selben Fenster oder in ein anderes Fenster.

Sie können Tabs nur zu und von Fenstern bewegen, deren {{WebExtAPIRef('windows.WindowType', 'WindowType')}} `"normal"` ist.

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
  - : `integer` oder `array` von `integer`. ID des zu verschiebenden {{WebExtAPIRef('tabs.Tab', 'Tabs')}}, oder ein Array von Tab-IDs.
- `moveProperties`

  - : `object`. Ein Objekt, das angibt, wohin der oder die Tabs verschoben werden sollen.

    - `windowId` {{optional_inline}}
      - : `integer`. Die ID des Fensters, in das Sie den oder die Tabs verschieben möchten. Wenn Sie dies weglassen, wird jeder Tab in `tabIds` an `index` in seinem aktuellen Fenster verschoben. Wenn Sie dies angeben und `tabIds` mehr als einen Tab enthält, wird der erste Tab in `tabIds` an `index` verschoben, und die anderen Tabs folgen ihm in der in `tabIds` angegebenen Reihenfolge.
    - `index`

      - : `integer`. Die Index-Position, an die der Tab verschoben werden soll, beginnend bei 0. Ein Wert von -1 platziert den Tab am Ende des Fensters.

        Wenn Sie einen Wert kleiner als -1 übergeben, wird die Funktion einen Fehler auslösen.

        Beachten Sie, dass Sie keine angehefteten Tabs an eine Position nach unangehefteten Tabs in einem Fenster verschieben können, oder unangeheftete Tabs an eine Position vor angehefteten Tabs. Wenn Sie zum Beispiel ein oder mehrere angeheftete Tabs im Ziel-Fenster haben und `tabIds` sich auf einen unangehefteten Tab bezieht, dann können Sie hier nicht 0 übergeben. Wenn Sie versuchen, dies zu tun, wird die Funktion stillschweigend fehlschlagen (sie wird keinen Fehler auslösen).

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('tabs.Tab')}}-Objekt oder einem `array` von {{WebExtAPIRef('tabs.Tab')}}-Objekten erfüllt wird, die Details über die verschobenen Tabs enthalten. Wenn keine Tabs verschoben wurden (zum Beispiel, weil Sie versucht haben, einen unangehefteten Tab vor einen angehefteten Tab zu verschieben), wird dies ein leeres Array sein. Wenn ein Fehler auftritt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

## Beispiele

Verschieben Sie den ersten Tab im aktuellen Fenster in die letzte Position im aktuellen Fenster:

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

Verschieben Sie alle Tabs, die über HTTP oder HTTPS von \*.mozilla.org bereitgestellt werden, an das Ende ihres Fensters:

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

Verschieben Sie alle Tabs, die über HTTP oder HTTPS von \*.mozilla.org bereitgestellt werden, in das Fenster, das den ersten solchen Tab hostet, beginnend bei Position 0:

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
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-move)-API von Chromium. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
