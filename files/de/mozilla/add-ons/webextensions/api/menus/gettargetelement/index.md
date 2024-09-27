---
title: menus.getTargetElement()
slug: Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement
l10n:
  sourceCommit: 2c5465eab20015868a1eeca59c5623d37b105f7c
---

{{AddonSidebar}}

Gibt das Element für eine gegebene `targetElementId` zurück

Diese Methode steht allen Erweiterungsskript-Kontexten (Inhalts-Skripte, Hintergrundseiten und andere Erweiterungsseiten) zur Verfügung und gibt das Element für eine gegebene `info.targetElementId` zurück, vorausgesetzt, dass das Element noch im Dokument existiert, in dem die Methode aufgerufen wird.

Die Methode funktioniert nur im Dokument, das das durch einen Rechtsklick ausgewählte Element enthält, und die `targetElementId` verfällt, sobald der Benutzer ein anderes Kontextmenü öffnet.

> [!NOTE] `menus.getTargetElement` gibt das angeforderte Element nur zurück, wenn es im selben Kontext wie das Dokument, das das Element enthält, aufgerufen wird, beispielsweise mit Inhalts-Skripten (wie im untenstehenden Beispiel gezeigt).

Eine Erweiterung benötigt die Berechtigung "menus", um diese API zu verwenden.

## Syntax

```js-nolint
let elem = browser.menus.getTargetElement(targetElementId);
```

### Parameter

- `targetElementId`
  - : Die Eigenschaft des `{{WebExtAPIRef("menus.OnClickData")}}`-Objekts, das an den `{{WebExtAPIRef("menus.onClicked")}}`-Handler oder das `{{WebExtAPIRef("menus.onShown")}}`-Ereignis übergeben wird.

### Rückgabewert

Das Element, auf das sich der `targetElementId`-Parameter bezieht. Ist der `targetElementId`-Parameter ungültig, gibt die Methode `null` zurück.

## Beispiele

Das folgende Beispiel verwendet die `getTargetElement`-Methode, um das Element zu erhalten, auf das sich die `info.targetElementId`-Eigenschaft bezieht, und entfernt es anschließend.

```js
browser.menus.create({
  title: "Remove element",
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
