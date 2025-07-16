---
title: runtime.OnRestartRequiredReason
slug: Mozilla/Add-ons/WebExtensions/API/runtime/OnRestartRequiredReason
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Der Grund, warum das {{WebExtAPIRef("runtime.onRestartRequired", "onRestartRequired")}}-Ereignis ausgelöst wird.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- `"app_update"`: Die Anwendung wird auf eine neuere Version aktualisiert.
- `"os_update"`: Der Browser/das Betriebssystem wird auf eine neuere Version aktualisiert.
- `"periodic"`: Das System läuft länger als die erlaubte Betriebszeit, die in der Unternehmensrichtlinie festgelegt wurde.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-OnRestartRequiredReason)-API von Chromium. Diese Dokumentation ist aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.
