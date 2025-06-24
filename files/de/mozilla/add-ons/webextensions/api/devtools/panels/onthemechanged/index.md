---
title: devtools.panels.onThemeChanged
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/onThemeChanged
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ausgelöst, wenn das DevTools-Theme geändert wird.

## Syntax

```js-nolint
browser.devtools.panels.onThemeChanged.addListener(listener)
browser.devtools.panels.onThemeChanged.removeListener(listener)
browser.devtools.panels.onThemeChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es am Zuhören ist, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `themeName`
      - : `string`. Name des neuen Themes: Dies wird einer der zulässigen Werte für [`devtools.panels.themeName`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/themeName) sein.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
browser.devtools.panels.onThemeChanged.addListener((newThemeName) => {
  console.log(`New theme: ${newThemeName}`);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API.
