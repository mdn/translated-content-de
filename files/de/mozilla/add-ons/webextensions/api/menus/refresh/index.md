---
title: menus.refresh()
slug: Mozilla/Add-ons/WebExtensions/API/menus/refresh
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Aktualisiert ein Menü, das gerade angezeigt wird.

Aktualisiert die Menüelemente der Erweiterung im Menü, das der Browser aktuell anzeigt, einschließlich Änderungen, die vorgenommen wurden, seit das Menü gezeigt wurde. Hat keine Wirkung, wenn das Menü nicht angezeigt wird. Das Neuladen eines angezeigten Menüs ist eine kostspielige Operation. Rufen Sie diese Methode nur auf, wenn es notwendig ist.

Dies wird typischerweise von einem {{WebExtAPIRef("menus.onShown")}} Ereignishandler aufgerufen, nachdem der Handler Aktualisierungen am Menü vorgenommen hat.

Firefox stellt diese Funktion sowohl über den `contextMenus`-Namensraum als auch über den `menus`-Namensraum zur Verfügung.

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

Dieses Beispiel wartet darauf, dass das Kontextmenü über einem Link angezeigt wird, und aktualisiert dann das `openLabelledId`-Menüelement mit dem Hostnamen des Links:

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
