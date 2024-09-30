---
title: devtools.panels.onThemeChanged
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/onThemeChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
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
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird folgendes Argument übergeben:

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
