---
title: windows.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/windows/getAll
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Erhält Informationen über alle geöffneten Fenster und übergibt diese an einen Callback.

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
      - : `boolean`. Standardmäßig `false`. Wenn auf `true` gesetzt, wird jedes {{WebExtAPIRef('windows.Window')}} Objekt eine `tabs` Eigenschaft haben, die eine Liste von {{WebExtAPIRef('tabs.Tab')}} Objekten enthält, die die Tabs in diesem Fenster darstellen. Die `Tab` Objekte enthalten die Eigenschaften `url`, `title` und `favIconUrl` nur, wenn die Manifestdatei der Erweiterung die `"tabs"` Berechtigung oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) enthält, die zur URL des Tabs passen.
    - `windowTypes` {{optional_inline}}
      - : Ein `array` von {{WebExtAPIRef('windows.WindowType')}} Objekten. Wenn gesetzt, werden die zurückgegebenen {{WebExtAPIRef('windows.Window')}} Objekte basierend auf ihrem Typ gefiltert. Wenn nicht gesetzt, wird der Standardfilter auf `['normal', 'panel', 'popup']` gesetzt, wobei `'panel'` Fenstertypen auf die eigenen Fenster der Erweiterung beschränkt sind.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('windows.Window')}} Objekten erfüllt wird, die alle Fenster darstellen, die den angegebenen Kriterien entsprechen. Im Falle eines Fehlers wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokollieren Sie die URLs für die Tabs in allen "normalen" Browserfenstern. Beachten Sie, dass Sie die Berechtigung "tabs" [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder entsprechende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) benötigen, um auf Tab-URLs zuzugreifen.

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

> [!NOTE]
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-getAll) API von Chromium. Diese Dokumentation ist abgeleitet von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.
