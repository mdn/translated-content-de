---
title: menus.refresh()
slug: Mozilla/Add-ons/WebExtensions/API/menus/refresh
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Aktualisiert ein angezeigtes Menü.

Aktualisiert die Menüeinträge der Erweiterung in dem Menü, das der Browser derzeit anzeigt, einschließlich Änderungen, die seit der Anzeige des Menüs vorgenommen wurden. Hat keine Wirkung, wenn das Menü nicht angezeigt wird. Das Neuaufbauen eines angezeigten Menüs ist ein aufwändiger Vorgang, rufen Sie diese Methode nur bei Bedarf auf.

Diese Methode wird normalerweise innerhalb eines {{WebExtAPIRef("menus.onShown")}} Ereignishandlers aufgerufen, nachdem der Handler Aktualisierungen am Menü vorgenommen hat.

Firefox bietet diese Funktion sowohl über den `contextMenus` Namespace als auch über den `menus` Namespace an.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.menus.refresh()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird.

## Beispiele

Dieses Beispiel hört darauf, dass das Kontextmenü über einem Link angezeigt wird, und aktualisiert dann den Menüeintrag `openLabelledId` mit dem Hostnamen des Links:

```js
function updateMenuItem(linkHostname) {
  browser.menus.update(openLabelledId, {
    title: `Open (${linkHostname})`,
  });
  browser.menus.refresh();
}

browser.menus.onShown.addListener((info) => {
  if (!info.linkUrl) {
    return;
  }
  let linkElement = document.createElement("a");
  linkElement.href = info.linkUrl;
  updateMenuItem(linkElement.hostname);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
