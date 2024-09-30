---
title: tabs.ZoomSettings
slug: Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettings
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Definiert Zoom-Einstellungen für einen Tab: {{WebExtAPIRef("tabs.ZoomSettingsMode", "mode")}}, {{WebExtAPIRef("tabs.ZoomSettingsScope", "scope")}}, und den Standard-Zoomfaktor.

## Typ

Werte dieser Art sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `defaultZoomFactor` {{optional_inline}}
  - : `number`. Der Standard-Zoomfaktor für den aktuellen Tab. Beachten Sie, dass dies nur in {{WebExtAPIRef("tabs.getZoomSettings")}} verwendet wird.
- `mode` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.ZoomSettingsMode')}}. Definiert, ob Zoom-Änderungen durch den Browser, die Erweiterung oder gar nicht gehandhabt werden.
- `scope` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.ZoomSettingsScope')}}. Definiert, ob Zoom-Änderungen für den Ursprung der Seite gespeichert werden oder nur in diesem Tab wirksam sind.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-ZoomSettings) API von Chromium. Diese Dokumentation wird aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code abgeleitet.
