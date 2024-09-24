---
title: menus.getTargetElement()
slug: Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement
l10n:
  sourceCommit: 2c5465eab20015868a1eeca59c5623d37b105f7c
---

{{AddonSidebar}}

Gibt das Element für eine gegebene `targetElementId` zurück

Diese Methode ist in allen Erweiterungsskript-Kontexten verfügbar (Inhalts-Skripte, Hintergrundseiten und andere Erweiterungsseiten) und gibt das Element für eine gegebene `info.targetElementId` zurück, vorausgesetzt, dass das Element noch im Dokument existiert, in dem die Methode aufgerufen wird.

Die Methode funktioniert nur in dem Dokument, das das rechtsgeklickte Element enthält, und die `targetElementId` läuft ab, wenn der Benutzer ein anderes Kontextmenü öffnet.

> **Note:** `menus.getTargetElement` gibt das angeforderte Element nur zurück, wenn es im gleichen Kontext wie das Dokument aufgerufen wird, das das Element enthält, zum Beispiel mit Inhalts-Skripten (wie im folgenden Beispiel gezeigt).

Eine Erweiterung benötigt die Berechtigung "menus", um diese API zu verwenden.

## Syntax

```js-nolint
let elem = browser.menus.getTargetElement(targetElementId);
```

### Parameter

- `targetElementId`
  - : Die Eigenschaft des `{{WebExtAPIRef("menus.OnClickData")}}`-Objekts, das an den `{{WebExtAPIRef("menus.onClicked")}}`-Handler oder das `{{WebExtAPIRef("menus.onShown")}}`-Ereignis übergeben wird.

### Rückgabewert

Das Element, auf das durch den Parameter `targetElementId` verwiesen wird. Ist der Parameter `targetElementId` ungültig, gibt die Methode `null` zurück.

## Beispiele

Das folgende Beispiel verwendet die Methode `getTargetElement`, um das Element zu erhalten, auf das durch die Eigenschaft `info.targetElementId` verwiesen wird, und entfernt es dann.

```js
browser.menus.create({
  title: "Element entfernen",
  documentUrlPatterns: ["*://*/*"],
  contexts: [
    "audio",
    "editable",
    "frame",
    "image",
    "link",
    "page",
    "password",
    "video",
  ],
  onclick(info, tab) {
    browser.tabs.executeScript(tab.id, {
      frameId: info.frameId,
      code: `browser.menus.getTargetElement(${info.targetElementId}).remove();`,
    });
  },
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("menus.create")}}
- {{WebExtAPIRef("menus.OnClickData")}}
