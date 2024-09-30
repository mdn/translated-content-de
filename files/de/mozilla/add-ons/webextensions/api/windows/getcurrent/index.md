---
title: windows.getCurrent()
slug: Mozilla/Add-ons/WebExtensions/API/windows/getCurrent
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft das aktuelle Browserfenster ab und übergibt seine Details in einen Callback.

Das "aktuelle" Fenster ist nicht zwingend dasselbe wie das derzeit fokussierte Fenster. Wenn diese Funktion aus einem Hintergrundskript aufgerufen wird, gibt sie das derzeit fokussierte Fenster zurück. Wenn sie jedoch aus einem Skript aufgerufen wird, dessen Dokument mit einem bestimmten Browserfenster verknüpft ist, gibt sie dieses Browserfenster zurück. Zum Beispiel hat, wenn der Browser eine Seitenleiste anzeigt, jedes Browserfenster seine eigene Instanz des Seitenleistendokuments. Wenn ein Skript, das im Seitenleistendokument ausgeführt wird, `getCurrent()` aufruft, wird es das Fenster dieses Seitenleistendokuments zurückgeben.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingCurrent = browser.windows.getCurrent(
  getInfo               // optional object
)
```

### Parameter

- `getInfo` {{optional_inline}}

  - : `object`.

    - `populate` {{optional_inline}}
      - : `boolean`. Wenn `true`, hat das {{WebExtAPIRef('windows.Window')}}-Objekt eine Eigenschaft `tabs`, die eine Liste von {{WebExtAPIRef('tabs.Tab')}}-Objekten enthält, die die Tabs im Fenster repräsentieren. Die `Tab`-Objekte enthalten nur die Eigenschaften `url`, `title` und `favIconUrl`, wenn die Manifestdatei der Erweiterung die Berechtigung `"tabs"` oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), die zur URL des Tabs passen, enthält.
    - `windowTypes` {{deprecated_inline}} {{optional_inline}}
      - : Ein `array` von `{{WebExtAPIRef('windows.WindowType')}}`-Objekten. Wenn gesetzt, wird das zurückgegebene {{WebExtAPIRef('windows.Window')}} basierend auf seinem Typ gefiltert. Falls nicht gesetzt, ist der Standardfilter auf `['normal', 'panel', 'popup']` eingestellt, wobei `'panel'`-Fenstertypen auf die eigenen Fenster der Erweiterung beschränkt sind.

> [!NOTE]
> Falls angegeben, wird die Komponente `windowTypes` von `getInfo` ignoriert. Die Verwendung von `windowTypes` wurde seit Firefox 62 als veraltet markiert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem [`windows.Window`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/Window)-Objekt, das die Details des Fensters enthält, erfüllt wird. Wenn ein Fehler auftritt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Wenn der Benutzer auf das Symbol einer Browseraktion klickt, ruft dieses Beispiel das aktuelle Fenster ab und protokolliert die URLs der darin enthaltenen Tabs. Beachten Sie, dass Sie die Berechtigung "tabs" oder passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) benötigen, um auf Tab-URLs zuzugreifen.

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
  browser.windows.getCurrent({ populate: true }).then(logTabs, onError);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-getCurrent)-API von Chromium. Diese Dokumentation ist aus [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code abgeleitet.
