---
title: Berechtigungen
slug: Mozilla/Add-ons/WebExtensions/API/permissions/Permissions
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

Ein `Permissions`-Objekt stellt eine Sammlung von Berechtigungen dar.

## Typ

Ein {{jsxref("Object")}} mit diesen Eigenschaften:

- `origins` {{optional_inline}}
  - : Ein Array von [Match Patterns](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), welches die [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) repräsentiert.
- `permissions` {{optional_inline}}
  - : Ein Array von benannten Berechtigungen, einschließlich [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und [Zwischenablagen-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboard_access).
- `data_collection` {{optional_inline}}
  - : Ein Array von [Datenerfassungs-Berechtigungstypen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#data_collection_permissions).

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der `chrome.permissions` API von Chromium ([`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions)).
