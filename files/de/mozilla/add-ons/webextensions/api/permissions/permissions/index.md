---
title: Berechtigungen
slug: Mozilla/Add-ons/WebExtensions/API/permissions/Permissions
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein `Permissions`-Objekt repräsentiert eine Sammlung von Berechtigungen.

## Typ

Ein {{jsxref("object")}} mit den folgenden Eigenschaften:

- `origins` {{optional_inline}}
  - : Ein Array von [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), das [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) darstellt.
- `permissions` {{optional_inline}}
  - : Ein Array benannter Berechtigungen, einschließlich [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und [Zwischenablage-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboard_access).

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions)-API von Chromium.
