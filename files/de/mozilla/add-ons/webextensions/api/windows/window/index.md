---
title: windows.Window
slug: Mozilla/Add-ons/WebExtensions/API/windows/Window
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Informationen über ein Browserfenster.

## Typ

Werte dieses Typs sind `objects`. Sie enthalten die folgenden Eigenschaften:

- `alwaysOnTop`
  - : `boolean`. Ob das Fenster so eingestellt ist, dass es immer im Vordergrund bleibt.
- `focused`
  - : `boolean`. Ob das Fenster derzeit das fokussierte Fenster ist.
- `height` {{optional_inline}}
  - : `integer`. Die Höhe des Fensters, inklusive Rahmen, in Pixeln.
- `id` {{optional_inline}}
  - : `integer`. Die ID des Fensters. Fenster-IDs sind innerhalb einer Browsersitzung eindeutig.
- `incognito`
  - : `boolean`. Ob das Fenster im Inkognitomodus (privat) ist.
- `left` {{optional_inline}}
  - : `integer`. Der Abstand des Fensters vom linken Bildschirmrand in Pixeln.
- `sessionId` {{optional_inline}}
  - : `string`. Die Sitzungs-ID, die verwendet wird, um ein Fenster eindeutig zu identifizieren, angefordert über die {{WebExtAPIRef('sessions')}} API.
- `state` {{optional_inline}}
  - : Ein {{WebExtAPIRef('windows.WindowState')}}-Wert, der den Zustand dieses Browserfensters darstellt — maximiert, minimiert, etc.
- `tabs` {{optional_inline}}
  - : Array von {{WebExtAPIRef('tabs.Tab')}}-Objekten, die die aktuellen Tabs im Fenster repräsentieren.
- `title` {{optional_inline}}
  - : Der Titel des Browserfensters. Erfordert die Berechtigung "tabs" oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die URL des aktiven Tabs. Nur lesbar.
- `top` {{optional_inline}}
  - : `integer`. Der Abstand des Fensters vom oberen Bildschirmrand in Pixeln.
- `type` {{optional_inline}}
  - : Ein {{WebExtAPIRef('windows.WindowType')}}-Wert, der den Typ des Browserfensters repräsentiert — normales Browserfenster, Popup, etc.
- `width` {{optional_inline}}
  - : `integer`. Die Breite des Fensters, inklusive Rahmen, in Pixeln.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#type-Window)-API von Chromium. Diese Dokumentation ist abgeleitet von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.
