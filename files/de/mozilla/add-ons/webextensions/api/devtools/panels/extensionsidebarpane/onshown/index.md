---
title: devtools.panels.ExtensionSidebarPane.onShown
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/onShown
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Seitenleistenbereich sichtbar wird, weil der Benutzer darauf umgeschaltet hat.

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
  - : Beendet das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `window`
      - : `object`. Das [`window`](/de/docs/Web/API/Window)-Objekt der Seitenleisten-Seite, wenn eine Seite mit {{WebExtAPIRef("devtools.panels.ExtensionSidebarPane.setPage()","setPage()")}} festgelegt wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Erstellen Sie einen Seitenleistenbereich und protokollieren Sie Anzeige- und Ausblendeereignisse.

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
> Diese API basiert auf der [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels)-API von Chromium.
