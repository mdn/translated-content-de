---
title: menus.refresh()
slug: Mozilla/Add-ons/WebExtensions/API/menus/refresh
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Aktualisiert ein Menü, das gerade angezeigt wird.

Aktualisiert die Menüeinträge der Erweiterung im aktuell vom Browser angezeigten Menü, einschließlich Änderungen, die seit der Anzeige des Menüs vorgenommen wurden. Hat keine Auswirkung, wenn das Menü nicht angezeigt wird. Das Wiederaufbauen eines angezeigten Menüs ist eine aufwändige Operation, rufen Sie diese Methode nur bei Bedarf auf.

Dies wird typischerweise innerhalb eines {{WebExtAPIRef("menus.onShown")}} Ereignishandlers aufgerufen, nachdem der Handler Aktualisierungen am Menü vorgenommen hat.

Firefox stellt diese Funktion sowohl über den `contextMenus` Namensraum als auch den `menus` Namensraum zur Verfügung.

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

Dieses Beispiel hört darauf, dass das Kontextmenü über einem Link angezeigt wird, und aktualisiert dann den `openLabelledId` Menüeintrag mit dem Hostnamen des Links:

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
