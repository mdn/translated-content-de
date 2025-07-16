---
title: windows.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/windows/getAll
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ruft Informationen über alle geöffneten Fenster ab und übergibt diese an einen Callback.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingAll = browser.windows.getAll(
  getInfo                // optional object
)
```

### Parameter

- `getInfo` {{optional_inline}}
  - : `object`. Dies steuert, welche {{WebExtAPIRef('windows.Window')}} Objekte abgerufen werden.
    - `populate` {{optional_inline}}
      - : `boolean`. Standardwert ist `false`. Wenn auf `true` gesetzt, hat jedes {{WebExtAPIRef('windows.Window')}} Objekt eine `tabs` Eigenschaft, die eine Liste von {{WebExtAPIRef('tabs.Tab')}} Objekten enthält, die die Tabs in diesem Fenster repräsentieren. Die `Tab` Objekte enthalten die Eigenschaften `url`, `title` und `favIconUrl` nur, wenn die Manifestdatei der Erweiterung die Berechtigung `"tabs"` oder [host permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) enthält, die mit der URL des Tabs übereinstimmen.
    - `windowTypes` {{optional_inline}}
      - : Ein `array` von {{WebExtAPIRef('windows.WindowType')}} Objekten. Wenn gesetzt, werden die zurückgegebenen {{WebExtAPIRef('windows.Window')}} Objekte basierend auf ihrem Typ gefiltert. Wenn nicht gesetzt, ist der Standardfilter auf `['normal', 'panel', 'popup']` eingestellt, wobei `'panel'` Fenstertypen auf die eigenen Fenster der Erweiterung beschränkt sind.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('windows.Window')}} Objekten erfüllt wird, die alle Fenster repräsentieren, die den angegebenen Kriterien entsprechen. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Protokollieren Sie die URLs der Tabs über alle "normalen" Browserfenster hinweg. Beachten Sie, dass Sie die Berechtigung "tabs" [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder passende [host permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) benötigen, um auf Tab-URLs zuzugreifen.

```js
function logTabsForWindows(windowInfoArray) {
  for (const windowInfo of windowInfoArray) {
    console.log(`Window: ${windowInfo.id}`);
    console.log(windowInfo.tabs.map((tab) => tab.url));
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  browser.windows
    .getAll({
      populate: true,
      windowTypes: ["normal"],
    })
    .then(logTabsForWindows, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-getAll) API. Diese Dokumentation ist abgeleitet von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.
