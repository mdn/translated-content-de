---
title: menus.ACTION_MENU_TOP_LEVEL_LIMIT
slug: Mozilla/Add-ons/WebExtensions/API/menus/ACTION_MENU_TOP_LEVEL_LIMIT
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die maximale Anzahl an obersten Erweiterungselementen, die einem Menüpunkt hinzugefügt werden können, dessen {{WebExtAPIRef("contextMenus.ContextType", "ContextType")}} "browser_action" oder "page_action" ist. Alle Elemente, die dieses Limit überschreiten, werden ignoriert.

Der Wert beträgt `6` in Firefox und Chrome.

Für die Kompatibilität mit anderen Browsern stellt Firefox diese Eigenschaft sowohl über den `contextMenus`-Namespace als auch über den `menus`-Namespace zur Verfügung.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#property-ACTION_MENU_TOP_LEVEL_LIMIT) API. Diese Dokumentation ist abgeleitet von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.
