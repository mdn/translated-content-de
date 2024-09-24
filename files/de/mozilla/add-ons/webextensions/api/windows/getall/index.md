---
title: windows.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/windows/getAll
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erhält Informationen über alle offenen Fenster und übergibt sie an einen Callback.

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
      - : `boolean`. Standardmäßig `false`. Wenn auf `true` gesetzt, wird jedes {{WebExtAPIRef('windows.Window')}} Objekt eine `tabs`-Eigenschaft haben, die eine Liste von {{WebExtAPIRef('tabs.Tab')}} Objekten enthält, die die Tabs in diesem Fenster repräsentieren. Die `Tab`-Objekte werden die Eigenschaften `url`, `title` und `favIconUrl` nur enthalten, wenn die Manifestdatei der Erweiterung die Berechtigung `"tabs"` oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) enthält, die zur URL des Tabs passen.
    - `windowTypes` {{optional_inline}}
      - : Ein `array` von {{WebExtAPIRef('windows.WindowType')}} Objekten. Wenn gesetzt, werden die zurückgegebenen {{WebExtAPIRef('windows.Window')}} Objekte basierend auf ihrem Typ gefiltert. Wenn nicht gesetzt, ist der Standardfilter auf `['normal', 'panel', 'popup']` gesetzt, wobei `'panel'` Fenstertypen auf die eigenen Fenster der Erweiterung beschränkt sind.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('windows.Window')}} Objekten erfüllt wird und alle Fenster repräsentiert, die den angegebenen Kriterien entsprechen. Tritt ein Fehler auf, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokollieren Sie die URLs der Tabs in allen "normalen" Browserfenstern. Beachten Sie, dass Sie die "tabs"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) benötigen, um auf die Tab-URLs zuzugreifen.

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
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-getAll) API von Chromium. Diese Dokumentation stammt aus [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.
