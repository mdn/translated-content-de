---
title: tabs.MutedInfo
slug: Mozilla/Add-ons/WebExtensions/API/tabs/MutedInfo
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dieses Objekt enthält einen booleschen Wert, der angibt, ob der Tab stummgeschaltet ist, sowie den Grund für die letzte Zustandsänderung.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `extensionId` {{optional_inline}}
  - : `string`. Die ID der Erweiterung, die zuletzt den Stummschaltungszustand geändert hat. Nicht gesetzt, wenn eine Erweiterung nicht der Grund für die letzte Änderung des Stummschaltungszustands war.
- `muted`
  - : `boolean`. Ob der Tab aktuell stummgeschaltet ist. Entspricht der Anzeige des stummen Audiosymbols.
- `reason` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfoReason')}}. Der Grund, warum der Tab stummgeschaltet oder wieder aktiviert wurde. Nicht gesetzt, wenn der Stummschaltungszustand des Tabs nie geändert wurde.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-MutedInfo) API von Chromium. Diese Dokumentation basiert auf [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
