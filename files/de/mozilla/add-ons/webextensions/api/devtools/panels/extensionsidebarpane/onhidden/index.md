---
title: devtools.panels.ExtensionSidebarPane.onHidden
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/onHidden
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wird aufgerufen, wenn das Seitenleistenfeld ausgeblendet wird, weil der Benutzer davon wegschaltet.

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
  - : Stoppt das Lauschen für dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Dieser Funktion werden keine Argumente übergeben.

## Beispiele

Erstellen Sie ein Seitenleistenfeld und protokollieren Sie Show- und Hide-Ereignisse.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API von Chromium.
