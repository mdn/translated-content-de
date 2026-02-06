---
title: Berechtigungen
slug: Mozilla/Add-ons/WebExtensions/API/permissions/Permissions
l10n:
  sourceCommit: aa2535b8d83223b53fe57bb0c3daaf1c6851d781
---

Ein `Permissions`-Objekt repräsentiert eine Sammlung von Berechtigungen.

## Typ

Ein {{jsxref("object")}} mit diesen Eigenschaften:

- `origins` {{optional_inline}}
  - : Ein Array von [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), das [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) repräsentiert.
- `permissions` {{optional_inline}}
  - : Ein Array von benannten Berechtigungen, einschließlich [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und [Zwischenablage-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboard_access).
- `data_collection` {{optional_inline}}
  - : Ein Array von [Datenerfassungs-Berechtigungsarten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#data_collection_permissions).

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) von Chromium.
