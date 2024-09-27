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
  - : `boolean`. Ob das Fenster immer im Vordergrund angezeigt werden soll.
- `focused`
  - : `boolean`. Ob das Fenster derzeit das fokussierte Fenster ist.
- `height` {{optional_inline}}
  - : `integer`. Die Höhe des Fensters, einschließlich des Rahmens, in Pixeln.
- `id` {{optional_inline}}
  - : `integer`. Die ID des Fensters. Fenster-IDs sind innerhalb einer Browsersitzung eindeutig.
- `incognito`
  - : `boolean`. Ob das Fenster im Inkognito-Modus (privat) ist.
- `left` {{optional_inline}}
  - : `integer`. Der Abstand des Fensters vom linken Rand des Bildschirms in Pixeln.
- `sessionId` {{optional_inline}}
  - : `string`. Die Sitzungs-ID, die zur eindeutigen Identifizierung eines Fensters verwendet wird und von der {{WebExtAPIRef('sessions')}} API stammt.
- `state` {{optional_inline}}
  - : Ein {{WebExtAPIRef('windows.WindowState')}}-Wert, der den Zustand dieses Browserfensters darstellt — maximiert, minimiert usw.
- `tabs` {{optional_inline}}
  - : Array von {{WebExtAPIRef('tabs.Tab')}}-Objekten, die die aktuellen Tabs im Fenster darstellen.
- `title` {{optional_inline}}
  - : Der Titel des Browserfensters. Erfordert "tabs"-Berechtigung oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die URL des aktiven Tabs. Nur Lesezugriff.
- `top` {{optional_inline}}
  - : `integer`. Der Abstand des Fensters vom oberen Rand des Bildschirms in Pixeln.
- `type` {{optional_inline}}
  - : Ein {{WebExtAPIRef('windows.WindowType')}}-Wert, der den Typ des Browserfensters darstellt — normales Browserfenster, Popup usw.
- `width` {{optional_inline}}
  - : `integer`. Die Breite des Fensters, einschließlich des Rahmens, in Pixeln.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#type-Window) API von Chromium. Diese Dokumentation stammt aus [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.
