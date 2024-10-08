---
title: theme.getCurrent()
slug: Mozilla/Add-ons/WebExtensions/API/theme/getCurrent
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ruft das aktuelle Theme als ein {{WebExtAPIRef("theme.Theme", "Theme")}} Objekt ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.theme.getCurrent(
  windowId    // integer
)
```

### Parameter

- `windowId` {{optional_inline}}
  - : `integer`. Die ID eines Fensters. Wenn dies angegeben wird, ist das aufgelöste Theme dasjenige, das auf dieses Fenster angewendet wird. Wenn es weggelassen wird, ist das aufgelöste Theme dasjenige, das auf das zuletzt fokussierte Fenster angewendet wird.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Das Promise wird mit einem {{WebExtAPIRef("theme.Theme")}} Objekt aufgelöst, das das auf das angegebene Fenster angewendete Theme darstellt. Wenn kein von einer Erweiterung bereitgestelltes Theme auf das angegebene Fenster angewendet wurde, wird es mit einem leeren Objekt aufgelöst.

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
