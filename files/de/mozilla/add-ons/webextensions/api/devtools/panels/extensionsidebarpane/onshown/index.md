---
title: devtools.panels.ExtensionSidebarPane.onShown
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/onShown
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wird ausgelöst, wenn das Seitenleistenfeld sichtbar wird, weil der Benutzer darauf umschaltet.

## Syntax

```js-nolint
browser.devtools.panels.onShown.addListener(listener)
browser.devtools.panels.onShown.removeListener(listener)
browser.devtools.panels.onShown.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Hören dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird folgendes Argument übergeben:
    - `window`
      - : `object`. Das [`window`](/de/docs/Web/API/Window)-Objekt der Seitenleiste, falls eine Seite mit {{WebExtAPIRef("devtools.panels.ExtensionSidebarPane.setPage()","setPage()")}} festgelegt wurde.

## Beispiele

Erstellen Sie ein Seitenleistenfeld und protokollieren Sie die Ereignisse des Zeigens und Verbergens.

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
> Diese API basiert auf Chromiums [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API.
