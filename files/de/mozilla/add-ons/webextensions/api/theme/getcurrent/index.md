---
title: theme.getCurrent()
slug: Mozilla/Add-ons/WebExtensions/API/theme/getCurrent
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt das aktuelle Theme als ein {{WebExtAPIRef("theme.Theme", "Theme")}}-Objekt zurück.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.theme.getCurrent(
  windowId    // integer
)
```

### Parameter

- `windowId` {{optional_inline}}
  - : `integer`. Die ID eines Fensters. Wenn dies angegeben wird, wird das Theme bestimmt, das auf dieses Fenster angewendet wird. Wenn es weggelassen wird, wird das Theme bestimmt, das auf das zuletzt fokussierte Fenster angewendet wird.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Das Promise wird mit einem {{WebExtAPIRef("theme.Theme")}}-Objekt erfüllt, das das auf das angegebene Fenster angewendete Theme darstellt. Wenn kein von der Erweiterung bereitgestelltes Theme auf das angegebene Fenster angewendet wurde, wird es mit einem leeren Objekt erfüllt.

## Beispiele

Ermittelt die Eigenschaften `frame` und `toolbar` Farben des aktuellen Themes:

```js
function getStyle(themeInfo) {
  if (themeInfo.colors) {
    console.log(`accent color: ${themeInfo.colors.frame}`);
    console.log(`toolbar: ${themeInfo.colors.toolbar}`);
  }
}

async function getCurrentThemeInfo() {
  const themeInfo = await browser.theme.getCurrent();
  getStyle(themeInfo);
}

getCurrentThemeInfo();
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
