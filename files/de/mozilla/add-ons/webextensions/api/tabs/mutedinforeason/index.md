---
title: tabs.MutedInfoReason
slug: Mozilla/Add-ons/WebExtensions/API/tabs/MutedInfoReason
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Gibt den Grund an, warum ein Tab stummgeschaltet oder die Stummschaltung aufgehoben wurde.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- "capture"
  - : Eine Tab-Aufnahme wurde gestartet, was eine Änderung des Stummzustands erzwang.
- "extension"
  - : Eine Erweiterung hat den Stummzustand gesetzt. Wenn dies der Grund ist, enthält `extensionId` in {{WebExtAPIRef("tabs.mutedInfo")}} die ID der verantwortlichen Erweiterung.
- "user"
  - : Der Benutzer hat den Stummzustand gesetzt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-MutedInfoReason) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
