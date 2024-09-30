---
title: theme.update()
slug: Mozilla/Add-ons/WebExtensions/API/theme/update
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Aktualisiert das Browser-Theme gemäß dem Inhalt des {{WebExtAPIRef("theme.Theme", "Theme")}}-Objekts.

Um diese Methode zu verwenden, muss eine Erweiterung die "theme" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern.

## Syntax

```js-nolint
browser.theme.update(
  windowId,    // integer
  theme        // object
)
```

### Parameter

- `windowId` {{optional_inline}}
  - : `integer`. Die ID eines Fensters. Wenn dieser Wert angegeben wird, wird das Theme nur auf dieses Fenster angewendet. Wenn er weggelassen wird, wird das Theme auf alle Fenster angewendet.
- `theme`
  - : `object`. Ein {{WebExtAPIRef("theme.Theme", "Theme")}}-Objekt, das Werte für die UI-Elemente angibt, die Sie ändern möchten.

## Beispiele

Setzt das Browser-Theme, um eine Sonnengrafik mit einer passenden Hintergrundfarbe zu verwenden:

```js
const suntheme = {
  images: {
    theme_frame: "sun.jpg",
  },
  colors: {
    frame: "#CF723F",
    tab_background_text: "#111",
  },
};

browser.theme.update(suntheme);
```

Setzt das Theme nur für das fokussierte Fenster:

```js
const day = {
  images: {
    theme_frame: "sun.jpg",
  },
  colors: {
    frame: "#CF723F",
    tab_background_text: "#111",
  },
};

browser.menus.create({
  id: "set-theme",
  title: "set theme",
  contexts: ["all"],
});

async function updateThemeForCurrentWindow() {
  let currentWindow = await browser.windows.getLastFocused();
  browser.theme.update(currentWindow.id, day);
}

browser.menus.onClicked.addListener(updateThemeForCurrentWindow);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
