---
title: sidebarAction
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft Eigenschaften einer Erweiterungs-Sidebar ab und setzt sie.

Eine [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) ist ein Bereich, der an der linken oder rechten Seite des Browserfensters neben der Webseite angezeigt wird. Der Browser bietet eine Benutzeroberfläche, die es dem Benutzer ermöglicht, die derzeit verfügbaren Sidebars zu sehen und eine Sidebar zur Anzeige auszuwählen. Mit dem [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest.json-Schlüssel kann eine Erweiterung ihre eigene Sidebar definieren. Mit der hier beschriebenen `sidebarAction` API kann eine Erweiterung die Eigenschaften der Sidebar abrufen und festlegen.

Die `sidebarAction` API ist eng an die {{WebExtAPIRef("browserAction")}} API angelehnt.

Die sidebarAction API basiert auf der [sidebarAction API](https://help.opera.com/en/extensions/sidebar-action-api/) von Opera. Beachten Sie jedoch, dass die folgenden Funktionen noch nicht unterstützt werden: `setBadgeText()`, `getBadgeText()`, `setBadgeBackgroundColor()`, `getBadgeBackgroundColor()`, `onFocus`, `onBlur`.

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
  - : Prüft, ob die Sidebar geöffnet ist oder nicht.
- {{WebExtAPIRef("sidebarAction.open()")}}
  - : Öffnet die Sidebar.
- {{WebExtAPIRef("sidebarAction.setIcon()")}}
  - : Setzt das Icon der Sidebar.
- {{WebExtAPIRef("sidebarAction.setPanel()")}}
  - : Setzt das Panel der Sidebar.
- {{WebExtAPIRef("sidebarAction.setTitle()")}}
  - : Setzt den Titel der Sidebar. Dieser wird in jeder vom Browser bereitgestellten Benutzeroberfläche angezeigt, die Sidebars auflistet, wie beispielsweise in einem Menü.
- {{WebExtAPIRef("sidebarAction.toggle()")}}
  - : Wechselt die Sichtbarkeit der Sidebar.

## Browser-Kompatibilität

{{Compat}}

## Beispiel-Erweiterungen

- [annotate-page](https://github.com/mdn/webextensions-examples/tree/main/annotate-page)

> [!NOTE]
> Diese API basiert auf Operas [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API.
