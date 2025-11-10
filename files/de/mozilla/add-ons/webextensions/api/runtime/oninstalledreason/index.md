---
title: runtime.OnInstalledReason
slug: Mozilla/Add-ons/WebExtensions/API/runtime/OnInstalledReason
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der Grund, warum das {{WebExtAPIRef("runtime.onInstalled")}}-Ereignis ausgelöst wird.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- `"install"`
  - : Die Erweiterung wurde installiert.
- `"update"`
  - : Die Erweiterung wurde auf eine neue Version aktualisiert.
- `"browser_update"` oder, für Chrome, `"chrome_update"`
  - : Der Browser wurde auf eine neue Version aktualisiert.
- `"shared_module_update"`
  - : Eine andere Erweiterung, die ein Modul enthält, das von dieser Erweiterung verwendet wird, wurde aktualisiert.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-OnInstalledReason)-API von Chromium. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
