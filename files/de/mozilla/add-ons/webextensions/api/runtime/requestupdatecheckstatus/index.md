---
title: runtime.RequestUpdateCheckStatus
slug: Mozilla/Add-ons/WebExtensions/API/runtime/RequestUpdateCheckStatus
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Das Ergebnis eines Aufrufs von {{WebExtAPIRef("runtime.requestUpdateCheck()")}}.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- `"throttled"`
  - : Aktualisierung ist verzögert.
- `"no_update"`
  - : Keine Aktualisierung verfügbar.
- `"update_available"`
  - : Eine Aktualisierung der Erweiterung ist verfügbar.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-RequestUpdateCheckStatus) API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
