---
title: menus.getTargetElement()
slug: Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{AddonSidebar}}

Gibt das Element für eine gegebene `targetElementId` zurück.

Diese Methode ist in allen Extension-Skriptkontexten verfügbar (Content Scripts, Hintergrundseiten und andere Extension-Seiten) und gibt das Element für eine gegebene `info.targetElementId` zurück, vorausgesetzt, dass das Element in dem Dokument, in dem die Methode aufgerufen wird, noch existiert.

Die Methode funktioniert nur in dem Dokument, das das Rechtsklick-Element enthält, und die `targetElementId` wird ungültig, wenn der Benutzer ein weiteres Kontextmenü öffnet.

> **Note:** `menus.getTargetElement` gibt das angeforderte Element nur zurück, wenn es im selben Kontext wie das Dokument aufgerufen wird, das das Element enthält, beispielsweise mit Content Scripts (wie im unten stehenden Beispiel gezeigt).

Eine Erweiterung benötigt die Berechtigung "menus", um diese API zu verwenden.

## Syntax

```js-nolint
let elem = browser.menus.getTargetElement(targetElementId);
```

### Parameter

- `targetElementId`
  - : Die Eigenschaft des {{WebExtAPIRef("menus.OnClickData")}} Objekts, das an den {{WebExtAPIRef("menus.onClicked")}} Handler oder das {{WebExtAPIRef("menus.onShown")}} Ereignis übergeben wird.

### Rückgabewert

Das Element, auf das durch den `targetElementId` Parameter verwiesen wird. Wenn der `targetElementId` Parameter nicht gültig ist, gibt die Methode `null` zurück.

## Beispiele

Das folgende Beispiel verwendet die `getTargetElement` Methode, um das Element zu erhalten, auf das durch die `info.targetElementId` Eigenschaft verwiesen wird, und entfernt es dann.

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
