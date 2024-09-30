---
title: sidebarAction
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft Eigenschaften der Seitenleiste einer Erweiterung ab und setzt diese.

Eine [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) ist ein Bereich, der auf der linken oder rechten Seite des Browserfensters neben der Webseite angezeigt wird. Der Browser bietet eine Benutzeroberfläche, die dem Benutzer ermöglicht, die derzeit verfügbaren Seitenleisten zu sehen und eine Seitenleiste zur Anzeige auszuwählen. Mithilfe des Manifests [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) kann eine Erweiterung ihre eigene Seitenleiste definieren. Durch die hier beschriebene `sidebarAction` API kann eine Erweiterung die Eigenschaften der Seitenleiste abrufen und setzen.

Die `sidebarAction` API orientiert sich eng an der {{WebExtAPIRef("browserAction")}} API.

Die sidebarAction API basiert auf Operas [sidebarAction API](https://help.opera.com/en/extensions/sidebar-action-api/). Beachten Sie jedoch, dass die folgenden Funktionen noch nicht unterstützt werden: `setBadgeText()`, `getBadgeText()`, `setBadgeBackgroundColor()`, `getBadgeBackgroundColor()`, `onFocus`, `onBlur`.

## Typen

- {{WebExtAPIRef("sidebarAction.ImageDataType")}}
  - : Pixeldaten für ein Bild. Muss ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt sein (zum Beispiel von einem {{htmlelement("canvas")}}-Element).

## Funktionen

- {{WebExtAPIRef("sidebarAction.close()")}}
  - : Schließt die Seitenleiste.
- {{WebExtAPIRef("sidebarAction.getPanel()")}}
  - : Ruft das Panel der Seitenleiste ab.
- {{WebExtAPIRef("sidebarAction.getTitle()")}}
  - : Ruft den Titel der Seitenleiste ab.
- {{WebExtAPIRef("sidebarAction.isOpen()")}}
  - : Überprüft, ob die Seitenleiste geöffnet ist oder nicht.
- {{WebExtAPIRef("sidebarAction.open()")}}
  - : Öffnet die Seitenleiste.
- {{WebExtAPIRef("sidebarAction.setIcon()")}}
  - : Setzt das Symbol der Seitenleiste.
- {{WebExtAPIRef("sidebarAction.setPanel()")}}
  - : Setzt das Panel der Seitenleiste.
- {{WebExtAPIRef("sidebarAction.setTitle()")}}
  - : Setzt den Titel der Seitenleiste. Dieser wird in jeder vom Browser bereitgestellten Benutzeroberfläche angezeigt, um Seitenleisten aufzulisten, wie z.B. in einem Menü.
- {{WebExtAPIRef("sidebarAction.toggle()")}}
  - : Schaltet die Sichtbarkeit der Seitenleiste um.

## Browser-Kompatibilität

{{Compat}}

## Beispiel-Erweiterungen

- [annotate-page](https://github.com/mdn/webextensions-examples/tree/main/annotate-page)

> [!NOTE]
> Diese API basiert auf Operas [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API.
