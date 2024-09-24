---
title: tabs.setZoomSettings()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/setZoomSettings
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Legt die Zoom-Einstellungen für den angegebenen Tab fest. Diese Einstellungen werden beim Navigieren des Tabs auf die Standardeinstellungen zurückgesetzt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let settingZoomSettings = browser.tabs.setZoomSettings(
  tabId,           // optional integer
  zoomSettings     // ZoomSettings
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, für den die Zoom-Einstellungen geändert werden sollen. Standardmäßig ist dies der aktive Tab des aktuellen Fensters.
- `zoomSettings`
  - : {{WebExtAPIRef('tabs.ZoomSettings')}}. Definiert, wie Zoomänderungen behandelt werden und in welchem Umfang.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, nachdem die Zoom-Einstellungen geändert wurden. Wenn der Tab nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Deaktivieren des Zoomens für den aktuellen Tab:

```js
function onSet() {
  console.log(`Set zoom factor`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let setting = browser.tabs.setZoomSettings({ mode: "disabled" });
setting.then(onSet, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-setZoomSettings) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
