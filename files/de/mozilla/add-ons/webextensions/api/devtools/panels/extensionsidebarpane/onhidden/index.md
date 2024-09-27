---
title: devtools.panels.ExtensionSidebarPane.onHidden
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/onHidden
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird aufgerufen, wenn das Seitenleistenfeld ausgeblendet wird, weil der Benutzer zu einem anderen Fenster wechselt.

## Syntax

```js-nolint
browser.devtools.panels.onHidden.addListener(listener)
browser.devtools.panels.onHidden.removeListener(listener)
browser.devtools.panels.onHidden.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es hört, und `false` andernfalls.

## Syntax von addListener

### Parameter

- `listener`
  - : Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Dieser Funktion werden keine Argumente übergeben.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Erstellen Sie ein Seitenleistenfeld und protokollieren Sie Ereignisse beim Anzeigen und Ausblenden.

```js
function onCreated(sidebarPane) {
  sidebarPane.onShown.addListener(() => {
    console.log("Shown");
  });

  sidebarPane.onHidden.addListener(() => {
    console.log("Hidden");
  });
}

browser.devtools.panels.elements.createSidebarPane("My pane").then(onCreated);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API von Chromium.
