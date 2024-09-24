---
title: devtools.panels.onThemeChanged
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/onThemeChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn sich das Devtools-Theme ändert.

## Syntax

```js-nolint
browser.devtools.panels.onThemeChanged.addListener(listener)
browser.devtools.panels.onThemeChanged.removeListener(listener)
browser.devtools.panels.onThemeChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Hört auf, dieses Ereignis zu überwachen. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

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
> Diese API basiert auf der API [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) von Chromium.
