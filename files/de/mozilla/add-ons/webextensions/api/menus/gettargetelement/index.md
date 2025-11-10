---
title: menus.getTargetElement()
slug: Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt das Element für eine gegebene `targetElementId` zurück.

Diese Methode ist in allen Erweiterungsskript-Kontexten verfügbar (Inhalts-Skripte, Hintergrundseiten und andere Erweiterungsseiten) und gibt das Element für eine gegebene `info.targetElementId` zurück, vorausgesetzt, das Element existiert noch im Dokument, in dem die Methode aufgerufen wird.

Die Methode funktioniert nur in dem Dokument, das das mit der rechten Maustaste angeklickte Element enthält, und die `targetElementId` verfällt, wenn der Benutzer ein anderes Kontextmenü öffnet.

> [!NOTE]
> `menus.getTargetElement` gibt das angeforderte Element nur zurück, wenn es im selben Kontext wie das Dokument, das das Element enthält, aufgerufen wird, zum Beispiel unter Verwendung von Inhalts-Skripten (wie im folgenden Beispiel gezeigt).

Eine Erweiterung benötigt die Berechtigung "menus", um diese API zu verwenden.

## Syntax

```js-nolint
let elem = browser.menus.getTargetElement(targetElementId);
```

### Parameter

- `targetElementId`
  - : Die Eigenschaft des {{WebExtAPIRef("menus.OnClickData")}} Objekts, das an den {{WebExtAPIRef("menus.onClicked")}} Handler oder das {{WebExtAPIRef("menus.onShown")}} Ereignis übergeben wird.

### Rückgabewert

Das durch den `targetElementId` Parameter referenzierte Element. Wenn der `targetElementId` Parameter nicht gültig ist, gibt die Methode `null` zurück.

## Beispiele

Das folgende Beispiel verwendet die `getTargetElement` Methode, um das durch die `info.targetElementId` Eigenschaft referenzierte Element zu erhalten und es anschließend zu entfernen.

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
