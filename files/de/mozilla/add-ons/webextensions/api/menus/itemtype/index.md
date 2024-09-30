---
title: menus.ItemType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ItemType
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Typ des Menüelements.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- normal
  - : Ein Menüelement, das einfach einen Schriftzug anzeigt.
- checkbox
  - : Ein Menüelement, das einen binären Zustand darstellt. Es zeigt ein Häkchen neben dem Schriftzug an. Durch Klicken auf das Element wird das Häkchen umgeschaltet. Der {{WebExtAPIRef("menus.onClicked")}} Listener erhält zwei zusätzliche Eigenschaften: "checked", welche anzeigt, ob das Element jetzt markiert ist, und "wasChecked", welche angibt, ob das Element vor dem Klicken markiert war.
- radio
  - : Ein Menüelement, das eine von mehreren Auswahlmöglichkeiten darstellt. Genau wie bei einer Checkbox wird ein Häkchen neben dem Schriftzug angezeigt, und sein {{WebExtAPIRef("menus.onClicked")}} Listener erhält "checked" und "wasChecked". Wenn jedoch mehr als ein Radio-Element erstellt wird, funktionieren die Elemente als Gruppe von Radio-Elementen: Nur ein Element in der Gruppe kann markiert sein, und durch Klicken auf ein Element wird es das markierte Element.
- separator
  - : Eine Linie, die eine Gruppe von Elementen trennt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der `chrome.contextMenus` API von Chromium. Diese Dokumentation ist abgeleitet von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.
