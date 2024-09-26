---
title: runtime.RequestUpdateCheckStatus
slug: Mozilla/Add-ons/WebExtensions/API/runtime/RequestUpdateCheckStatus
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ergebnis eines Aufrufs von {{WebExtAPIRef("runtime.requestUpdateCheck()")}}.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- `"throttled"`
  - : Das Update ist gebremst.
- `"no_update"`
  - : Kein Update verfügbar.
- `"update_available"`
  - : Ein Update der Erweiterung ist verfügbar.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-RequestUpdateCheckStatus) API. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.