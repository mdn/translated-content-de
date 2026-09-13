---
title: menus.refresh()
slug: Mozilla/Add-ons/WebExtensions/API/menus/refresh
l10n:
  sourceCommit: 3064cbe8212ea919874fb21120a89657afccba25
---

Aktualisiert ein gerade angezeigtes Menü.

Aktualisiert die Menüelemente der Erweiterung in dem Menü, das der Browser derzeit anzeigt, einschließlich aller Änderungen, die seit dem Anzeigen des Menüs vorgenommen wurden. Hat keine Wirkung, wenn das Menü nicht angezeigt wird. Das Neuaufbauen eines angezeigten Menüs ist ein aufwendiger Vorgang; rufen Sie diese Methode nur auf, wenn es erforderlich ist.

Dies wird typischerweise innerhalb eines Event-Handlers für {{WebExtAPIRef("menus.onShown")}} aufgerufen, nachdem der Handler Aktualisierungen am Menü vorgenommen hat.

Firefox stellt diese Funktion sowohl über den Namespace `contextMenus` als auch über den Namespace `menus` zur Verfügung.

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

Dieses Beispiel wartet darauf, dass das Kontextmenü über einem Link angezeigt wird, und aktualisiert dann das Menüelement `openLabeledId` mit dem Hostnamen des Links:

```js
function updateMenuItem(linkHostname) {
  browser.menus.update(openLabeledId, {
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
