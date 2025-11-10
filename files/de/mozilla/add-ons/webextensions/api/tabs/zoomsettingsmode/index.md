---
title: tabs.ZoomSettingsMode
slug: Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettingsMode
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Definiert, wie Zoomänderungen behandelt werden. Erweiterungen können diesen Wert in {{WebExtAPIRef("tabs.setZoomSettings()")}} übergeben, um zu steuern, wie der Browser Versuche zur Änderung der Zoom-Einstellungen für einen Tab behandelt. Standardmäßig ist "automatic" festgelegt.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- "automatic"
  - : Zoomänderungen werden vom Browser normal gehandhabt.
- "disabled"
  - : Deaktiviert alle Zoomvorgänge im Tab. Der Tab kehrt zum Standard-Zoomlevel zurück, und alle Versuche zur Änderung des Zooms werden ignoriert.
- "manual"
  - : Die Erweiterung wird Zoomänderungen selbst verwalten, indem sie das {{WebExtAPIRef("tabs.onZoomChange")}}-Ereignis überwacht und die Seite entsprechend skaliert. Dieser Modus unterstützt kein `per-origin`-Zooming: Er ignoriert die `scope` [Zoom-Einstellung](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettings) und verwendet immer `per-tab`.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-ZoomSettingsMode)-API von Chromium. Diese Dokumentation ist aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code abgeleitet.
