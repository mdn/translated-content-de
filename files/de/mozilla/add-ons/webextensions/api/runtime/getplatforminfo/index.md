---
title: runtime.getPlatformInfo()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getPlatformInfo
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Gibt Informationen über die aktuelle Plattform zurück. Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.runtime.getPlatformInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('runtime.PlatformInfo')}}-Wert erfüllt wird, der die aktuelle Plattform repräsentiert.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Abrufen und Protokollieren des Plattformbetriebssystems:

```js
function gotPlatformInfo(info) {
  console.log(info.os);
}

let gettingInfo = browser.runtime.getPlatformInfo();
gettingInfo.then(gotPlatformInfo);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-getPlatformInfo) API. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
