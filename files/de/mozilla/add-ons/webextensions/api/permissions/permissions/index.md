---
title: Berechtigungen
slug: Mozilla/Add-ons/WebExtensions/API/permissions/Permissions
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ein `Permissions`-Objekt repräsentiert eine Sammlung von Berechtigungen.

## Typ

Ein {{jsxref("object")}} mit den folgenden Eigenschaften:

- `origins` {{optional_inline}}
  - : Ein Array von [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), das [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) repräsentiert.
- `permissions` {{optional_inline}}
  - : Ein Array von benannten Berechtigungen, einschließlich [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und [Zwischenablage-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboard_access).

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.
