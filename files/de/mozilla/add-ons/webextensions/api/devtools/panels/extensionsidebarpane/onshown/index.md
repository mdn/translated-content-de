---
title: devtools.panels.ExtensionSidebarPane.onShown
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/onShown
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn das Seitenleistenfeld sichtbar wird, weil der Benutzer dorthin wechselt.

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
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `window`
      - : `object`. Das [`window`](/de/docs/Web/API/Window)-Objekt der Seitenleiste, falls eine Seite mit {{WebExtAPIRef("devtools.panels.ExtensionSidebarPane.setPage()","setPage()")}} festgelegt wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Erstellen Sie ein Seitenleistenfeld und protokollieren Sie Ereignisse zum Anzeigen und Verbergen.

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
