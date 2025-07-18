---
title: Berechtigungen
slug: Mozilla/Add-ons/WebExtensions/API/permissions/Permissions
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein Objekt vom Typ `Permissions` steht für eine Sammlung von Berechtigungen.

## Typ

Ein {{jsxref("object")}} mit den folgenden Eigenschaften:

- `origins` {{optional_inline}}
  - : Ein Array von [Matchmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), das [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) darstellt.
- `permissions` {{optional_inline}}
  - : Ein Array von benannten Berechtigungen, einschließlich [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und [Zwischenablageberechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboard_access).

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API von Chromium.
