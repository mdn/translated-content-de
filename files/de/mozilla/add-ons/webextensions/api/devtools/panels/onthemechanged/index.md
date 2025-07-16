---
title: devtools.panels.onThemeChanged
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/onThemeChanged
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wird ausgelöst, wenn sich das DevTools-Theme ändert.

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
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zugehört wird, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `themeName`
      - : `string`. Name des neuen Themes: dies wird einer der erlaubten Werte für [`devtools.panels.themeName`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/themeName) sein.

## Beispiele

```js
browser.devtools.panels.onThemeChanged.addListener((newThemeName) => {
  console.log(`New theme: ${newThemeName}`);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API von Chromium.
