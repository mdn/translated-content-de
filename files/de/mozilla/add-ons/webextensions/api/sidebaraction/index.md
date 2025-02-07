---
title: sidebarAction
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction
l10n:
  sourceCommit: 5212bc3426242d2fbf649b233a402f591d70f8a2
---

{{AddonSidebar}}

Ruft Eigenschaften einer Erweiterungs-Sidebar ab und legt diese fest.

Eine [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) ist ein Bereich, der auf der linken oder rechten Seite einer Webseite angezeigt wird. Der Browser stellt eine Benutzeroberfläche bereit, die es dem Benutzer ermöglicht, die verfügbaren Sidebars anzuzeigen und eine zur Anzeige auszuwählen. Eine Erweiterung definiert Sidebars mithilfe des `[`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)`-Schlüssel in der manifest.json-Datei. Die Erweiterung kann dann die Eigenschaften der Sidebar mithilfe dieser API abrufen und festlegen.

> [!NOTE]
> Chrome bietet Unterstützung für Sidebars über die [`sidePanel` API](https://developer.chrome.com/docs/extensions/reference/api/sidePanel). Diese API ist nicht mit `sidebarAction` kompatibel.

Die `sidebarAction` API basiert auf Operas [sidebarAction API](https://help.opera.com/en/extensions/sidebar-action-api/) und ist eng am {{WebExtAPIRef("browserAction")}} API ausgerichtet. Allerdings hat Firefox `setBadgeText()`, `getBadgeText()`, `setBadgeBackgroundColor()`, `getBadgeBackgroundColor()`, `onFocus` und `onBlur` nicht implementiert.

## Typen

- {{WebExtAPIRef("sidebarAction.ImageDataType")}}
  - : Pixel-Daten für ein Bild. Muss ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt sein (zum Beispiel von einem {{htmlelement("canvas")}}-Element).

## Funktionen

- {{WebExtAPIRef("sidebarAction.close()")}}
  - : Schließt die Sidebar.
- {{WebExtAPIRef("sidebarAction.getPanel()")}}
  - : Ruft das Panel der Sidebar ab.
- {{WebExtAPIRef("sidebarAction.getTitle()")}}
  - : Ruft den Titel der Sidebar ab.
- {{WebExtAPIRef("sidebarAction.isOpen()")}}
  - : Prüft, ob die Sidebar geöffnet ist.
- {{WebExtAPIRef("sidebarAction.open()")}}
  - : Öffnet die Sidebar.
- {{WebExtAPIRef("sidebarAction.setIcon()")}}
  - : Legt das Symbol der Sidebar fest.
- {{WebExtAPIRef("sidebarAction.setPanel()")}}
  - : Legt das Panel der Sidebar fest.
- {{WebExtAPIRef("sidebarAction.setTitle()")}}
  - : Legt den Titel der Sidebar fest. Dieser Titel wird in jeder Benutzeroberfläche angezeigt, die der Browser zur Auflistung von Sidebars bereitstellt, wie z. B. ein Menü.
- {{WebExtAPIRef("sidebarAction.toggle()")}}
  - : Schaltet die Sichtbarkeit der Sidebar um.

## Beispiele

- [annotate-page](https://github.com/mdn/webextensions-examples/tree/main/annotate-page)
  {{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
