---
title: runtime.reload()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/reload
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Lädt die Erweiterung neu.

Wenn es ausstehende Updates für die Erweiterung gibt, die durch das Zuhören auf {{WebExtAPIRef("runtime.onUpdateAvailable")}} zurückgestellt wurden, werden diese beim Neuladen angewendet.

## Syntax

```js-nolint
browser.runtime.reload()
```

### Parameter

Keine.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Lädt die Erweiterung neu, wenn der Benutzer auf das Symbol einer Browseraktion klickt:

```js
browser.browserAction.onClicked.addListener((tab) => {
  browser.runtime.reload();
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-reload) API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
