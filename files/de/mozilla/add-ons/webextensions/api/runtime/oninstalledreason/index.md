---
title: runtime.OnInstalledReason
slug: Mozilla/Add-ons/WebExtensions/API/runtime/OnInstalledReason
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Grund, warum das {{WebExtAPIRef("runtime.onInstalled")}}-Event ausgelöst wird.

## Typ

Die Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `"install"`
  - : Die Erweiterung wurde installiert.
- `"update"`
  - : Die Erweiterung wurde auf eine neue Version aktualisiert.
- `"browser_update"` oder, für Chrome, `"chrome_update"`
  - : Der Browser wurde auf eine neue Version aktualisiert.
- `"shared_module_update"`
  - : Eine andere Erweiterung, die ein von dieser Erweiterung verwendetes Modul enthält, wurde aktualisiert.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-OnInstalledReason) API. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
