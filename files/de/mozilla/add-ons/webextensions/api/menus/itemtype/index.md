---
title: menus.ItemType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ItemType
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Typ eines Menüelements.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- normal
  - : Ein Menüpunkt, der nur ein Label anzeigt.
- checkbox
  - : Ein Menüpunkt, der einen binären Zustand darstellt. Er zeigt ein Häkchen neben dem Label an. Durch Klicken auf das Element wird das Häkchen umgeschaltet. Der {{WebExtAPIRef("menus.onClicked")}}-Listener erhält zwei zusätzliche Eigenschaften: "checked", das angibt, ob das Element nun aktiviert ist, und "wasChecked", das angibt, ob das Element vor dem Klicken aktiviert war.
- radio
  - : Ein Menüpunkt, der eine von mehreren Auswahlmöglichkeiten darstellt. Genau wie ein Kontrollkästchen zeigt es ein Häkchen neben dem Label an, und der {{WebExtAPIRef("menus.onClicked")}}-Listener erhält "checked" und "wasChecked". Wenn Sie jedoch mehr als ein Radio-Element erstellen, funktionieren die Elemente als Gruppe von Radio-Elementen: nur ein Element in der Gruppe kann aktiviert sein, und durch Klicken auf ein Element wird es zum aktivierten Element.
- separator
  - : Eine Linie, die eine Gruppe von Elementen trennt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-ItemType) API von Chromium. Diese Dokumentation ist abgeleitet von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.
