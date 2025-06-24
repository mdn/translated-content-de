---
title: menus.getTargetElement()
slug: Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{AddonSidebar}}

Gibt das Element für eine gegebene `targetElementId` zurück.

Diese Methode steht allen Erweiterungsskript-Kontexten zur Verfügung (Inhalts-Skripte, Hintergrundseiten und andere Erweiterungsseiten) und gibt das Element für eine gegebene `info.targetElementId` zurück, vorausgesetzt, dass das Element im Dokument, in dem die Methode aufgerufen wird, noch existiert.

Die Methode funktioniert nur im Dokument, das das mit der rechten Maustaste angeklickte Element enthält, und die `targetElementId` läuft ab, wenn der Benutzer ein anderes Kontextmenü öffnet.

> [!NOTE] > `menus.getTargetElement` gibt das angeforderte Element nur zurück, wenn es im selben Kontext aufgerufen wird wie das Dokument, das das Element enthält, zum Beispiel unter Verwendung von Inhalts-Skripten (siehe Beispiel unten).

Eine Erweiterung benötigt die Berechtigung "menus", um diese API zu nutzen.

## Syntax

```js-nolint
let elem = browser.menus.getTargetElement(targetElementId);
```

### Parameter

- `targetElementId`
  - : Die Eigenschaft des {{WebExtAPIRef("menus.OnClickData")}} Objekts, das dem {{WebExtAPIRef("menus.onClicked")}} Handler oder dem {{WebExtAPIRef("menus.onShown")}} Ereignis übergeben wird.

### Rückgabewert

Das Element, auf das durch den `targetElementId` Parameter verwiesen wird. Wenn der `targetElementId` Parameter ungültig ist, gibt die Methode `null` zurück.

## Beispiele

Im folgenden Beispiel wird die Methode `getTargetElement` verwendet, um das durch die `info.targetElementId` Eigenschaft referenzierte Element zu erhalten und es dann zu entfernen.

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
