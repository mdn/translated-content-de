---
title: tabs.getCurrent()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/getCurrent
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erhalten Sie ein {{WebExtAPIRef("tabs.Tab")}} mit Informationen über den Tab, in dem dieses Skript ausgeführt wird.

> [!NOTE]
> Diese Funktion ist nur in Kontexten nützlich, in denen es einen Browser-Tab gibt, wie zum Beispiel auf einer [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#options_pages).
>
> Wenn Sie diese Funktion in einem Hintergrundskript oder einem Popup aufrufen, wird `undefined` zurückgegeben.

Dies ist eine asynchrone Funktion, die ein {{jsxref("Promise")}} zurückgibt.

## Syntax

```js-nolint
const gettingCurrent = browser.tabs.getCurrent()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt vom Typ {{WebExtAPIRef('tabs.Tab')}} erfüllt wird und Informationen über den aktuellen Tab enthält. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Erhalten Sie Informationen über den aktuellen Tab:

```js
function onGot(tabInfo) {
  console.log(tabInfo);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const gettingCurrent = browser.tabs.getCurrent();
gettingCurrent.then(onGot, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der `chrome.tabs`-API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
