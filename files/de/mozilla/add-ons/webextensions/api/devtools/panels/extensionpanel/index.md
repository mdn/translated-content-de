---
title: devtools.panels.ExtensionPanel
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein `ExtensionPanel` stellt ein Panel dar, das den Devtools hinzugefügt wurde. Es ist die Auflösung des [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das von [`browser.devtools.panels.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/create) zurückgegeben wird.

## Typ

Werte dieses Typs sind Objekte. Sie definieren zwei Ereignisse, `onShown` und `onHidden`.

- `onShown` wird ausgelöst, wenn das Panel in den Devtools angezeigt wird (zum Beispiel, weil der Benutzer auf den Tab des Panels im Devtools-Fenster geklickt hat).
- `onHidden` wird ausgelöst, wenn das Panel ausgeblendet wird (zum Beispiel, weil der Benutzer zu einem anderen Tab im Devtools-Fenster gewechselt hat).

## Beispiele

Dieser Code erstellt ein neues Panel und fügt dann Handler für seine `onShown`- und `onHidden`-Ereignisse hinzu.

```js
function handleShown(e) {
  console.log(e);
  console.log("panel is being shown");
}

function handleHidden(e) {
  console.log(e);
  console.log("panel is being hidden");
}

browser.devtools.panels
  .create(
    "My Panel", // title
    "icons/star.png", // icon
    "devtools/panel/panel.html", // content
  )
  .then((newPanel) => {
    newPanel.onShown.addListener(handleShown);
    newPanel.onHidden.addListener(handleHidden);
  });
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API.
