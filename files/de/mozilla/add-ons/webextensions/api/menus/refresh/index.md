---
title: menus.refresh()
slug: Mozilla/Add-ons/WebExtensions/API/menus/refresh
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Aktualisiert ein angezeigtes Menü.

Aktualisiert die Menüeinträge der Erweiterung in dem Menü, das der Browser gerade anzeigt, einschließlich Änderungen, die seit dem Anzeigen des Menüs vorgenommen wurden. Hat keine Wirkung, wenn das Menü nicht angezeigt wird. Das erneute Erstellen eines angezeigten Menüs ist ein aufwändiger Vorgang, daher sollte diese Methode nur bei Bedarf aufgerufen werden.

Diese Methode wird typischerweise innerhalb eines {{WebExtAPIRef("menus.onShown")}} Ereignishandlers aufgerufen, nachdem der Handler Aktualisierungen am Menü vorgenommen hat.

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

In diesem Beispiel wird darauf gewartet, dass das Kontextmenü über einem Link angezeigt wird, um dann das `openLabelledId`-Menüelement mit dem Hostnamen des Links zu aktualisieren:

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
