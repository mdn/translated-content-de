---
title: menus.refresh()
slug: Mozilla/Add-ons/WebExtensions/API/menus/refresh
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Aktualisiert ein Menü, das gerade angezeigt wird.

Aktualisiert die Menüeinträge der Erweiterung in dem Menü, das der Browser derzeit anzeigt, einschließlich Änderungen, die seit der Anzeige des Menüs vorgenommen wurden. Hat keine Wirkung, wenn das Menü nicht angezeigt wird. Das Wiederaufbauen eines angezeigten Menüs ist ein aufwendiger Vorgang; rufen Sie diese Methode nur bei Bedarf auf.

Dies würde typischerweise innerhalb eines {{WebExtAPIRef("menus.onShown")}} Ereignishandlers aufgerufen werden, nachdem der Handler Änderungen am Menü vorgenommen hat.

Firefox stellt diese Funktion sowohl über den `contextMenus`-Namespace als auch über den `menus`-Namespace zur Verfügung.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.menus.refresh()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel hört darauf, dass das Kontextmenü über einem Link angezeigt wird, und aktualisiert dann den `openLabelledId`-Menüpunkt mit dem Hostnamen des Links:

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
