---
title: sidebarAction
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft Eigenschaften einer Erweiterungs-Sidebar ab und setzt diese.

Eine [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) ist ein Bereich, der auf der linken oder rechten Seite einer Webseite angezeigt wird. Der Browser bietet eine Benutzeroberfläche, die es dem Benutzer ermöglicht, die verfügbaren Sidebars zu sehen und eine zur Anzeige auszuwählen. Eine Erweiterung definiert Sidebars mit dem [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest.json-Schlüssel. Die Erweiterung kann anschließend die Eigenschaften der Sidebar mithilfe dieser API abrufen und festlegen.

> [!NOTE]
> Chrome bietet Unterstützung für Sidebars durch die [`sidePanel` API](https://developer.chrome.com/docs/extensions/reference/api/sidePanel). Diese API ist nicht mit `sidebarAction` kompatibel.

Die `sidebarAction` API basiert auf der [sidebarAction API](https://help.opera.com/en/extensions/sidebar-action-api/) von Opera und ist eng an der {{WebExtAPIRef("browserAction")}} API orientiert. Allerdings hat Firefox `setBadgeText()`, `getBadgeText()`, `setBadgeBackgroundColor()`, `getBadgeBackgroundColor()`, `onFocus` und `onBlur` nicht implementiert.

## Typen

- {{WebExtAPIRef("sidebarAction.ImageDataType")}}
  - : Pixeldaten für ein Bild. Muss ein [`ImageData`](/de/docs/Web/API/ImageData) Objekt sein (zum Beispiel von einem {{htmlelement("canvas")}} Element).

## Funktionen

- {{WebExtAPIRef("sidebarAction.close()")}}
  - : Schließt die Sidebar.
- {{WebExtAPIRef("sidebarAction.getPanel()")}}
  - : Ruft das Panel der Sidebar ab.
- {{WebExtAPIRef("sidebarAction.getTitle()")}}
  - : Ruft den Titel der Sidebar ab.
- {{WebExtAPIRef("sidebarAction.isOpen()")}}
  - : Überprüft, ob die Sidebar geöffnet ist.
- {{WebExtAPIRef("sidebarAction.open()")}}
  - : Öffnet die Sidebar.
- {{WebExtAPIRef("sidebarAction.setIcon()")}}
  - : Legt das Symbol der Sidebar fest.
- {{WebExtAPIRef("sidebarAction.setPanel()")}}
  - : Legt das Panel der Sidebar fest.
- {{WebExtAPIRef("sidebarAction.setTitle()")}}
  - : Legt den Titel der Sidebar fest. Dieser Titel wird in jeder Benutzeroberfläche angezeigt, die der Browser bereitstellt, um Sidebars aufzulisten, zum Beispiel in einem Menü.
- {{WebExtAPIRef("sidebarAction.toggle()")}}
  - : Schaltet die Sichtbarkeit der Sidebar um.

## Beispiele

- [annotate-page](https://github.com/mdn/webextensions-examples/tree/main/annotate-page)
  {{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
