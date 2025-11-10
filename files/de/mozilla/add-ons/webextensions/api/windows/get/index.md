---
title: windows.get()
slug: Mozilla/Add-ons/WebExtensions/API/windows/get
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Holt Details über ein Fenster, das durch seine ID angegeben wird. Die Details werden in einen Rückruf übergeben.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.windows.get(
  windowId,              // integer
  getInfo                // optional object
)
```

### Parameter

- `windowId`
  - : `integer`. Die ID des Fensterobjekts, das Sie zurückgegeben haben möchten.
- `getInfo` {{optional_inline}}
  - : `object`. Enthält Optionen zum Filtern des Fenstertyps.
    - `populate` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das {{WebExtAPIRef('windows.Window')}}-Objekt eine `tabs`-Eigenschaft haben, die eine Liste von {{WebExtAPIRef('tabs.Tab')}}-Objekten enthält, die die im Fenster geöffneten Tabs repräsentieren. Die `Tab`-Objekte enthalten nur die Eigenschaften `url`, `title` und `favIconUrl`, wenn die Manifestdatei der Erweiterung die `"tabs"`-Berechtigung oder eine passende [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) enthält.
    - `windowTypes` {{optional_inline}}
      - : `array` von {{WebExtAPIRef('windows.WindowType')}}-Objekten. Wenn gesetzt, wird das zurückgegebene {{WebExtAPIRef('windows.Window')}} basierend auf seinem Typ gefiltert. Wenn nicht gesetzt, wird der Standardfilter auf `['normal', 'panel', 'popup']` gesetzt, wobei `'panel'`-Fenstertypen auf die eigenen Fenster der Erweiterung beschränkt sind.

> [!NOTE]
> Falls angegeben, wird die `windowTypes`-Komponente von `getInfo` ignoriert. Die Verwendung von `windowTypes` wurde ab Firefox 62 als veraltet erklärt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('windows.Window')}}-Objekt erfüllt wird, das die Details des Fensters enthält. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel holt das aktuelle Fenster und protokolliert die URLs der darin enthaltenen Tabs. Beachten Sie, dass Sie die "tabs"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) benötigen, um auf Tab-URLs zuzugreifen.

> [!NOTE]
> Dieses Beispiel ist etwas unrealistisch: In dieser Situation würden Sie wahrscheinlich eher {{WebExtAPIRef("windows.getCurrent()")}} verwenden.

```js
function logTabs(windowInfo) {
  for (const tabInfo of windowInfo.tabs) {
    console.log(tabInfo.url);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  browser.windows.get(tab.windowId, { populate: true }).then(logTabs, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-get)-API von Chromium. Diese Dokumentation leitet sich von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code ab.
