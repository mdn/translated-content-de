---
title: tabs.ZoomSettingsMode
slug: Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettingsMode
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Definiert, wie Zoomänderungen behandelt werden. Erweiterungen können diesen Wert in {{WebExtAPIRef("tabs.setZoomSettings()")}} übergeben, um zu steuern, wie der Browser Versuche zur Änderung der Zoom-Einstellungen für einen Tab behandelt. Standardmäßig ist "automatic".

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- "automatic"
  - : Zoomänderungen werden normal vom Browser behandelt.
- "disabled"
  - : Deaktiviert das Zoomen im Tab vollständig. Der Tab wird auf die Standard-Zoomebene zurückgesetzt, und alle versuchten Zoomänderungen werden ignoriert.
- "manual"
  - : Die Erweiterung wird Zoomänderungen selbst behandeln, indem sie das {{WebExtAPIRef("tabs.onZoomChange")}}-Ereignis abfängt und die Seite entsprechend skaliert. Dieser Modus unterstützt kein `per-origin`-Zoomen: er ignoriert die `scope` [Zoom-Einstellung](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettings) und verwendet immer `per-tab`.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-ZoomSettingsMode) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
